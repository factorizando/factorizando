-- Tutores con cuenta: enlace tutor ↔ profiles, rol 'tutor' y lectura de sus tutorados.
--
-- Casos que cubre:
--   · Alumno con correo (secundaria/preparatoria): se registra normal y su avance
--     y pagos cuelgan de su propio perfil.
--   · Alumno sin correo: el admin crea solo la fila de `alumnos` (ya se podía) y
--     la asocia a un tutor con `alumno_tutor`.
--   · Tutor con cuenta: ve el avance/pagos de sus tutorados, tenga o no cuenta el
--     alumno. `alumno_tutor` ya es N:M, así que un tutor puede tener varios.
--
-- La vinculación es `tutores.profile_id`; la autorización de lectura se resuelve
-- con `alumnos_del_tutor()` para no duplicar el JOIN en cada política.

-- ── 1. Enlace tutor ↔ cuenta ─────────────────────────────────────────────────
ALTER TABLE tutores ADD COLUMN IF NOT EXISTS profile_id UUID UNIQUE REFERENCES profiles(id) ON DELETE SET NULL;
CREATE INDEX IF NOT EXISTS idx_tutores_profile ON tutores(profile_id);

-- ── 2. `rol` admite 'tutor' ──────────────────────────────────────────────────
-- No conocemos el nombre del CHECK original (profiles se creó desde el panel),
-- así que se localiza por su definición y se rehace.
DO $$
DECLARE c record;
BEGIN
  FOR c IN
    SELECT conname FROM pg_constraint
    WHERE conrelid = 'profiles'::regclass
      AND contype = 'c'
      AND pg_get_constraintdef(oid) ILIKE '%rol%'
  LOOP
    EXECUTE format('ALTER TABLE profiles DROP CONSTRAINT %I', c.conname);
  END LOOP;
END $$;

ALTER TABLE profiles ADD CONSTRAINT profiles_rol_check
  CHECK (rol IN ('alumno', 'profesor', 'admin', 'tutor'));

-- ── 3. Alumnos del tutor autenticado ─────────────────────────────────────────
-- SECURITY DEFINER para poder usarla dentro de las políticas RLS sin depender de
-- que el tutor tenga permiso directo sobre `tutores`/`alumno_tutor`.
CREATE OR REPLACE FUNCTION alumnos_del_tutor(p_profile UUID DEFAULT auth.uid())
RETURNS SETOF UUID
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT at.alumno_id
  FROM alumno_tutor at
  JOIN tutores t ON t.id = at.tutor_id
  WHERE t.profile_id = p_profile;
$$;

-- ── 4. Lectura para el tutor ─────────────────────────────────────────────────
-- `alumnos` y el vínculo
DROP POLICY IF EXISTS "alumnos_tutor_select" ON alumnos;
CREATE POLICY "alumnos_tutor_select"
  ON alumnos FOR SELECT
  USING (id IN (SELECT alumnos_del_tutor()));

DROP POLICY IF EXISTS "alumno_tutor_tutor_select" ON alumno_tutor;
CREATE POLICY "alumno_tutor_tutor_select"
  ON alumno_tutor FOR SELECT
  USING (alumno_id IN (SELECT alumnos_del_tutor()));

-- Su propia ficha de tutor (para resolver el nombre y el id del tutor)
DROP POLICY IF EXISTS "tutores_select_own_perfil" ON tutores;
CREATE POLICY "tutores_select_own_perfil"
  ON tutores FOR SELECT
  USING (profile_id = auth.uid());

-- Avance en talleres
DROP POLICY IF EXISTS "taller_sesiones_tutor_select" ON taller_sesiones;
CREATE POLICY "taller_sesiones_tutor_select"
  ON taller_sesiones FOR SELECT
  USING (alumno_id IN (SELECT alumnos_del_tutor()));

-- Inscripciones, cargos y suscripciones
DROP POLICY IF EXISTS "inscripciones_tutor_select" ON inscripciones;
CREATE POLICY "inscripciones_tutor_select"
  ON inscripciones FOR SELECT
  USING (alumno_id IN (SELECT alumnos_del_tutor()));

DROP POLICY IF EXISTS "cargos_tutor_select" ON cargos;
CREATE POLICY "cargos_tutor_select"
  ON cargos FOR SELECT
  USING (alumno_id IN (SELECT alumnos_del_tutor()));

DROP POLICY IF EXISTS "suscripciones_tutor_select" ON suscripciones;
CREATE POLICY "suscripciones_tutor_select"
  ON suscripciones FOR SELECT
  USING (alumno_id IN (SELECT alumnos_del_tutor()));

-- Pagos (a través del cargo) y pagos de suscripción (a través de la suscripción)
DROP POLICY IF EXISTS "pagos_tutor_select" ON pagos;
CREATE POLICY "pagos_tutor_select"
  ON pagos FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM cargos c
      WHERE c.id = pagos.cargo_id
        AND c.alumno_id IN (SELECT alumnos_del_tutor())
    )
  );

DROP POLICY IF EXISTS "pagos_suscripcion_tutor_select" ON pagos_suscripcion;
CREATE POLICY "pagos_suscripcion_tutor_select"
  ON pagos_suscripcion FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM suscripciones s
      WHERE s.id = pagos_suscripcion.suscripcion_id
        AND s.alumno_id IN (SELECT alumnos_del_tutor())
    )
  );

-- Avance en cuestionarios. `resultados` se creó desde el panel y no está en las
-- migraciones, así que la política solo se crea si la tabla existe.
DO $$
BEGIN
  IF to_regclass('public.resultados') IS NOT NULL THEN
    DROP POLICY IF EXISTS "resultados_tutor_select" ON resultados;
    CREATE POLICY "resultados_tutor_select"
      ON resultados FOR SELECT
      USING (user_id IN (SELECT alumnos_del_tutor()));
  END IF;
END $$;
