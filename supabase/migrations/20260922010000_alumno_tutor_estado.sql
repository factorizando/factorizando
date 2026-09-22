-- Vinculación tutor ↔ alumno con confirmación del alumno.
--
-- El vínculo deja de ser un simple N:M: pasa a tener estado.
--   pendiente → el tutor la solicitó y el alumno aún no responde
--   activo    → confirmada (o creada por el admin, que es el caso de los
--               alumnos sin cuenta, que no pueden confirmar)
--   rechazado → el alumno la declinó
--
-- Regla de acceso: solo un vínculo **activo** da al tutor acceso a los datos del
-- alumno (`alumnos_del_tutor()`). Una solicitud pendiente no expone nada.

-- ── 1. Estado en el vínculo ──────────────────────────────────────────────────
ALTER TABLE alumno_tutor
  ADD COLUMN IF NOT EXISTS estado        TEXT NOT NULL DEFAULT 'activo'
    CHECK (estado IN ('pendiente', 'activo', 'rechazado')),
  ADD COLUMN IF NOT EXISTS solicitado_por TEXT CHECK (solicitado_por IN ('tutor', 'admin')),
  ADD COLUMN IF NOT EXISTS creado_en     TIMESTAMPTZ NOT NULL DEFAULT now(),
  ADD COLUMN IF NOT EXISTS resuelto_en   TIMESTAMPTZ;

-- Los vínculos que ya existían (creados por el admin) quedan activos por el
-- DEFAULT; se marcan como de origen admin para dejar el dato completo.
UPDATE alumno_tutor SET solicitado_por = 'admin' WHERE solicitado_por IS NULL;

-- ── 2. Acceso del tutor: solo vínculos activos ───────────────────────────────
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
  WHERE t.profile_id = p_profile
    AND at.estado = 'activo';
$$;

-- El tutor ve los vínculos de sus propias fichas (activos y pendientes), para
-- poder listar sus solicitudes. Los datos del alumno siguen vedados hasta que
-- el vínculo sea activo.
DROP POLICY IF EXISTS "alumno_tutor_tutor_select" ON alumno_tutor;
CREATE POLICY "alumno_tutor_tutor_select"
  ON alumno_tutor FOR SELECT
  USING (tutor_id IN (SELECT id FROM tutores WHERE profile_id = auth.uid()));

-- El alumno ya no inserta/borra vínculos a mano: lo hace por RPC.
DROP POLICY IF EXISTS "alumno_tutor_insert_own" ON alumno_tutor;
DROP POLICY IF EXISTS "alumno_tutor_delete_own" ON alumno_tutor;

-- ── 3. El tutor practica en nombre de un alumno sin cuenta ───────────────────
-- La lectura ya la tenía (`taller_sesiones_tutor_select`); falta la escritura,
-- que es lo que permite que un alumno de primaria sin cuenta practique desde la
-- sesión de su tutor y su avance quede en SU expediente.
DROP POLICY IF EXISTS "taller_sesiones_tutor_insert" ON taller_sesiones;
CREATE POLICY "taller_sesiones_tutor_insert"
  ON taller_sesiones FOR INSERT
  WITH CHECK (alumno_id IN (SELECT alumnos_del_tutor()));

-- ── 4. Buscar alumno (solo tutor, coincidencia exacta) ───────────────────────
-- Sin directorio abierto: o el correo o el teléfono coinciden exactos, o no
-- devuelve nada. Se listan pocos campos y si tiene cuenta (para saber si se le
-- puede pedir confirmación o hay que pasar por el admin).
CREATE OR REPLACE FUNCTION buscar_alumno_para_tutor(
  p_email    TEXT DEFAULT NULL,
  p_telefono TEXT DEFAULT NULL
)
RETURNS TABLE (
  id UUID, nombre TEXT, apellidos TEXT, nivel TEXT,
  tiene_cuenta BOOLEAN, ya_vinculado BOOLEAN
)
LANGUAGE plpgsql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_tutor UUID;
  v_email TEXT := lower(trim(coalesce(p_email, '')));
  v_tel   TEXT := regexp_replace(coalesce(p_telefono, ''), '\D', '', 'g');
BEGIN
  SELECT t.id INTO v_tutor FROM tutores t WHERE t.profile_id = auth.uid();
  IF v_tutor IS NULL THEN
    RAISE EXCEPTION 'Solo un tutor puede buscar alumnos.';
  END IF;
  IF v_email = '' AND v_tel = '' THEN
    RETURN;
  END IF;

  RETURN QUERY
  SELECT a.id, a.nombre, a.apellidos, a.nivel,
         (a.profile_id IS NOT NULL) AS tiene_cuenta,
         EXISTS (
           SELECT 1 FROM alumno_tutor at
           WHERE at.alumno_id = a.id AND at.tutor_id = v_tutor
         ) AS ya_vinculado
  FROM alumnos a
  WHERE (v_email <> '' AND lower(coalesce(a.email, '')) = v_email)
     OR (v_tel   <> '' AND regexp_replace(coalesce(a.telefono, ''), '\D', '', 'g') = v_tel)
  LIMIT 5;
END;
$$;

-- ── 5. Solicitar el vínculo (tutor) ──────────────────────────────────────────
CREATE OR REPLACE FUNCTION solicitar_vinculo_tutor(p_alumno_id UUID)
RETURNS TEXT
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_tutor  UUID;
  v_cuenta UUID;
  v_estado TEXT;
BEGIN
  SELECT t.id INTO v_tutor FROM tutores t WHERE t.profile_id = auth.uid();
  IF v_tutor IS NULL THEN
    RAISE EXCEPTION 'Solo un tutor puede solicitar vínculos.';
  END IF;

  SELECT a.profile_id INTO v_cuenta FROM alumnos a WHERE a.id = p_alumno_id;
  IF NOT FOUND THEN
    RAISE EXCEPTION 'El alumno no existe.';
  END IF;
  IF v_cuenta IS NULL THEN
    RAISE EXCEPTION 'Ese alumno no tiene cuenta; pídele al administrador que lo vincule.';
  END IF;

  SELECT at.estado INTO v_estado
    FROM alumno_tutor at
   WHERE at.alumno_id = p_alumno_id AND at.tutor_id = v_tutor;
  IF v_estado = 'activo' THEN
    RETURN 'activo';
  END IF;

  INSERT INTO alumno_tutor (alumno_id, tutor_id, estado, solicitado_por)
  VALUES (p_alumno_id, v_tutor, 'pendiente', 'tutor')
  ON CONFLICT (alumno_id, tutor_id)
  DO UPDATE SET estado = 'pendiente', solicitado_por = 'tutor',
                creado_en = now(), resuelto_en = NULL;

  RETURN 'pendiente';
END;
$$;

-- ── 6. Resolver el vínculo (alumno) ──────────────────────────────────────────
CREATE OR REPLACE FUNCTION resolver_vinculo_tutor(p_tutor_id UUID, p_aceptar BOOLEAN)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_alumno UUID := mi_alumno_id();
BEGIN
  IF v_alumno IS NULL THEN
    RAISE EXCEPTION 'Solo un alumno con cuenta puede confirmar vínculos.';
  END IF;

  UPDATE alumno_tutor
     SET estado = CASE WHEN p_aceptar THEN 'activo' ELSE 'rechazado' END,
         resuelto_en = now()
   WHERE alumno_id = v_alumno
     AND tutor_id = p_tutor_id
     AND estado = 'pendiente';

  IF NOT FOUND THEN
    RAISE EXCEPTION 'No hay una solicitud pendiente de ese tutor.';
  END IF;
END;
$$;

-- ── 7. Solicitudes pendientes del tutor (con nombre, sin abrir la ficha) ─────
CREATE OR REPLACE FUNCTION solicitudes_pendientes_del_tutor()
RETURNS TABLE (alumno_id UUID, nombre TEXT, apellidos TEXT, nivel TEXT, creado_en TIMESTAMPTZ)
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT a.id, a.nombre, a.apellidos, a.nivel, at.creado_en
  FROM alumno_tutor at
  JOIN alumnos a ON a.id = at.alumno_id
  JOIN tutores t ON t.id = at.tutor_id
  WHERE t.profile_id = auth.uid()
    AND at.estado = 'pendiente'
  ORDER BY at.creado_en DESC;
$$;

-- ── 8. Permisos de ejecución ─────────────────────────────────────────────────
GRANT EXECUTE ON FUNCTION buscar_alumno_para_tutor(TEXT, TEXT) TO authenticated;
GRANT EXECUTE ON FUNCTION solicitar_vinculo_tutor(UUID) TO authenticated;
GRANT EXECUTE ON FUNCTION resolver_vinculo_tutor(UUID, BOOLEAN) TO authenticated;
GRANT EXECUTE ON FUNCTION solicitudes_pendientes_del_tutor() TO authenticated;
