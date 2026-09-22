-- Vínculo explícito alumno ↔ cuenta: `alumnos.profile_id`.
--
-- Hasta hoy el vínculo entre un expediente de alumno y su cuenta se **asumía**
-- por convención (`alumnos.id = profiles.id`), porque la FK original se eliminó
-- para permitir alumnos manuales (sin cuenta). `tutores` sí tiene su
-- `profile_id` explícito; esto pone a `alumnos` simétrico.
--
--   profile_id IS NULL     → alumno sin cuenta (primaria, alta manual)
--   profile_id IS NOT NULL → alumno con cuenta
--
-- Se conserva la invariante `alumnos.id = profiles.id` para los alumnos con
-- cuenta, de modo que el cliente que hoy filtra por `session.user.id` sigue
-- funcionando sin cambios. La columna es la fuente explícita; la igualdad de
-- ids es un detalle que se puede soltar más adelante sin tocar el esquema.

-- ── 1. La columna ────────────────────────────────────────────────────────────
ALTER TABLE alumnos
  ADD COLUMN IF NOT EXISTS profile_id UUID UNIQUE
  REFERENCES profiles(id) ON DELETE SET NULL;

CREATE INDEX IF NOT EXISTS idx_alumnos_profile ON alumnos(profile_id);

-- ── 2. Backfill: donde hoy hay cuenta, el id ES el del perfil ────────────────
UPDATE alumnos a
   SET profile_id = a.id
 WHERE a.profile_id IS NULL
   AND EXISTS (SELECT 1 FROM profiles p WHERE p.id = a.id);

-- ── 3. Helper: el expediente del usuario autenticado ─────────────────────────
-- SECURITY DEFINER para poder usarlo dentro de políticas RLS sin recursión ni
-- depender de que el alumno tenga permiso directo sobre `alumnos`.
CREATE OR REPLACE FUNCTION mi_alumno_id()
RETURNS UUID
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT id FROM alumnos WHERE profile_id = auth.uid() LIMIT 1;
$$;

-- ── 4. Políticas "propias": por profile_id, no por id ────────────────────────
-- `alumnos`
DROP POLICY IF EXISTS "alumnos_select_own" ON alumnos;
CREATE POLICY "alumnos_select_own"
  ON alumnos FOR SELECT
  USING (profile_id = auth.uid());

DROP POLICY IF EXISTS "alumnos_update_own" ON alumnos;
CREATE POLICY "alumnos_update_own"
  ON alumnos FOR UPDATE
  USING (profile_id = auth.uid());

DROP POLICY IF EXISTS "alumnos_insert_own" ON alumnos;
CREATE POLICY "alumnos_insert_own"
  ON alumnos FOR INSERT
  WITH CHECK (profile_id = auth.uid());

-- contactos_emergencia
DROP POLICY IF EXISTS "contactos_select_own" ON contactos_emergencia;
CREATE POLICY "contactos_select_own"
  ON contactos_emergencia FOR SELECT
  USING (alumno_id = mi_alumno_id());

DROP POLICY IF EXISTS "contactos_insert_own" ON contactos_emergencia;
CREATE POLICY "contactos_insert_own"
  ON contactos_emergencia FOR INSERT
  WITH CHECK (alumno_id = mi_alumno_id());

DROP POLICY IF EXISTS "contactos_update_own" ON contactos_emergencia;
CREATE POLICY "contactos_update_own"
  ON contactos_emergencia FOR UPDATE
  USING (alumno_id = mi_alumno_id());

DROP POLICY IF EXISTS "contactos_delete_own" ON contactos_emergencia;
CREATE POLICY "contactos_delete_own"
  ON contactos_emergencia FOR DELETE
  USING (alumno_id = mi_alumno_id());

-- tutores: visibles al alumno a través de su vínculo
DROP POLICY IF EXISTS "tutores_select_own" ON tutores;
CREATE POLICY "tutores_select_own"
  ON tutores FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM alumno_tutor
      WHERE alumno_tutor.tutor_id = tutores.id
        AND alumno_tutor.alumno_id = mi_alumno_id()
    )
  );

-- inscripciones
DROP POLICY IF EXISTS "inscripciones_select_own" ON inscripciones;
CREATE POLICY "inscripciones_select_own"
  ON inscripciones FOR SELECT
  USING (alumno_id = mi_alumno_id());

-- cargos
DROP POLICY IF EXISTS "cargos_select_own" ON cargos;
CREATE POLICY "cargos_select_own"
  ON cargos FOR SELECT
  USING (alumno_id = mi_alumno_id());

-- pagos (a través del cargo)
DROP POLICY IF EXISTS "pagos_select_own" ON pagos;
CREATE POLICY "pagos_select_own"
  ON pagos FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM cargos
      WHERE cargos.id = pagos.cargo_id
        AND cargos.alumno_id = mi_alumno_id()
    )
  );

-- suscripciones
DROP POLICY IF EXISTS "suscripciones_select_own" ON suscripciones;
CREATE POLICY "suscripciones_select_own"
  ON suscripciones FOR SELECT
  USING (alumno_id = mi_alumno_id());

DROP POLICY IF EXISTS "pagos_suscripcion_select_own" ON pagos_suscripcion;
CREATE POLICY "pagos_suscripcion_select_own"
  ON pagos_suscripcion FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM suscripciones
      WHERE suscripciones.id = pagos_suscripcion.suscripcion_id
        AND suscripciones.alumno_id = mi_alumno_id()
    )
  );

-- taller_sesiones: el alumno escribe y lee su propio expediente
DROP POLICY IF EXISTS "taller_sesiones_select_own" ON taller_sesiones;
CREATE POLICY "taller_sesiones_select_own"
  ON taller_sesiones FOR SELECT
  USING (alumno_id = mi_alumno_id());

DROP POLICY IF EXISTS "taller_sesiones_insert_own" ON taller_sesiones;
CREATE POLICY "taller_sesiones_insert_own"
  ON taller_sesiones FOR INSERT
  WITH CHECK (alumno_id = mi_alumno_id());

-- alumno_tutor: los vínculos propios (la confirmación llega en la migración B)
DROP POLICY IF EXISTS "alumno_tutor_select_own" ON alumno_tutor;
CREATE POLICY "alumno_tutor_select_own"
  ON alumno_tutor FOR SELECT
  USING (alumno_id = mi_alumno_id());
