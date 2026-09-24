-- Plegar `tutores` dentro de `profiles`.
--
-- `tutores` era una extensión 1:1 de `profiles` (su `profile_id` es UNIQUE), y
-- como todo tutor se registra, la ficha aparte solo traía duplicación de
-- identidad y el bug de "ficha creada sin cuenta" que impedía que apareciera en
-- el portal. Se elimina: el tutor es un `profiles` con `rol='tutor'`, y su
-- relación (`padre|madre|tutor`) pasa a `profiles.relacion`.
--
-- `alumno_tutor.tutor_id` pasa de apuntar a `tutores(id)` a `profiles(id)`.
-- Esto además simplifica la RLS: desaparece el `JOIN tutores` de
-- `alumnos_del_tutor()` y con él la recursión que se arregló en 20250922050000.
--
-- Prerrequisito: que **no existan** fichas de tutor sin cuenta. El DO block
-- aborta la migración si las hay (no se pueden remapear).

DO $$
DECLARE n INT;
BEGIN
  SELECT count(*) INTO n FROM tutores WHERE profile_id IS NULL;
  IF n > 0 THEN
    RAISE EXCEPTION 'Hay % ficha(s) de tutor sin cuenta; vincúlalas antes de migrar.', n;
  END IF;
END $$;

-- ── 1. Relación en la cuenta ─────────────────────────────────────────────────
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS relacion TEXT;
ALTER TABLE profiles DROP CONSTRAINT IF EXISTS profiles_relacion_check;
ALTER TABLE profiles ADD CONSTRAINT profiles_relacion_check
  CHECK (relacion IS NULL OR relacion IN ('padre', 'madre', 'tutor'));

UPDATE profiles p SET relacion = t.relacion
  FROM tutores t WHERE t.profile_id = p.id;

-- ── 2. Remapear los vínculos y cambiar la FK ─────────────────────────────────
UPDATE alumno_tutor at SET tutor_id = t.profile_id
  FROM tutores t WHERE at.tutor_id = t.id;

ALTER TABLE alumno_tutor DROP CONSTRAINT IF EXISTS alumno_tutor_tutor_id_fkey;
ALTER TABLE alumno_tutor ADD CONSTRAINT alumno_tutor_tutor_id_fkey
  FOREIGN KEY (tutor_id) REFERENCES profiles(id) ON DELETE CASCADE;

-- ── 3. Helpers y políticas sin `tutores` ─────────────────────────────────────
CREATE OR REPLACE FUNCTION alumnos_del_tutor(p_profile UUID DEFAULT auth.uid())
RETURNS SETOF UUID
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT at.alumno_id
  FROM alumno_tutor at
  WHERE at.tutor_id = p_profile
    AND at.estado = 'activo';
$$;

DROP POLICY IF EXISTS "alumno_tutor_tutor_select" ON alumno_tutor;
CREATE POLICY "alumno_tutor_tutor_select"
  ON alumno_tutor FOR SELECT
  USING (tutor_id = auth.uid());

-- ── 4. RPCs del tutor ────────────────────────────────────────────────────────
CREATE OR REPLACE FUNCTION solicitudes_pendientes_del_tutor()
RETURNS TABLE (alumno_id UUID, nombre TEXT, apellidos TEXT, nivel TEXT, creado_en TIMESTAMPTZ)
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT a.id, COALESCE(p.nombre, a.nombre), COALESCE(p.apellidos, a.apellidos),
         a.nivel, at.creado_en
  FROM alumno_tutor at
  JOIN alumnos a ON a.id = at.alumno_id
  LEFT JOIN profiles p ON p.id = a.profile_id
  WHERE at.tutor_id = auth.uid()
    AND at.estado = 'pendiente'
  ORDER BY at.creado_en DESC;
$$;

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
  v_email TEXT := lower(trim(coalesce(p_email, '')));
  v_tel   TEXT := regexp_replace(coalesce(p_telefono, ''), '\D', '', 'g');
  v_es_tutor BOOLEAN;
BEGIN
  SELECT EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND rol = 'tutor') INTO v_es_tutor;
  IF NOT v_es_tutor THEN
    RAISE EXCEPTION 'Solo un tutor puede buscar alumnos.';
  END IF;
  IF v_email = '' AND v_tel = '' THEN
    RETURN;
  END IF;

  RETURN QUERY
  SELECT a.id,
         COALESCE(p.nombre, a.nombre),
         COALESCE(p.apellidos, a.apellidos),
         a.nivel,
         (a.profile_id IS NOT NULL) AS tiene_cuenta,
         EXISTS (
           SELECT 1 FROM alumno_tutor at
           WHERE at.alumno_id = a.id AND at.tutor_id = auth.uid()
         ) AS ya_vinculado
  FROM alumnos a
  LEFT JOIN profiles p ON p.id = a.profile_id
  WHERE (v_email <> '' AND lower(coalesce(p.email, a.email, '')) = v_email)
     OR (v_tel   <> '' AND regexp_replace(coalesce(p.telefono, a.telefono, ''), '\D', '', 'g') = v_tel)
  LIMIT 5;
END;
$$;

CREATE OR REPLACE FUNCTION solicitar_vinculo_tutor(p_alumno_id UUID)
RETURNS TEXT
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_cuenta UUID;
  v_estado TEXT;
  v_es_tutor BOOLEAN;
BEGIN
  SELECT EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND rol = 'tutor') INTO v_es_tutor;
  IF NOT v_es_tutor THEN
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
   WHERE at.alumno_id = p_alumno_id AND at.tutor_id = auth.uid();
  IF v_estado = 'activo' THEN
    RETURN 'activo';
  END IF;

  INSERT INTO alumno_tutor (alumno_id, tutor_id, estado, solicitado_por)
  VALUES (p_alumno_id, auth.uid(), 'pendiente', 'tutor')
  ON CONFLICT (alumno_id, tutor_id)
  DO UPDATE SET estado = 'pendiente', solicitado_por = 'tutor',
                creado_en = now(), resuelto_en = NULL;

  RETURN 'pendiente';
END;
$$;

GRANT EXECUTE ON FUNCTION solicitudes_pendientes_del_tutor() TO authenticated;
GRANT EXECUTE ON FUNCTION buscar_alumno_para_tutor(TEXT, TEXT) TO authenticated;
GRANT EXECUTE ON FUNCTION solicitar_vinculo_tutor(UUID) TO authenticated;

-- ── 5. Fuera la tabla, y con ella sus políticas ──────────────────────────────
-- `tutores_select_own` (20260922050000) todavía usa `tutores_del_alumno()`, así
-- que esa función solo se puede soltar cuando la tabla desaparece (se lleva sus
-- políticas). Soltarla antes hace fallar el DROP FUNCTION por dependencia.
DROP TABLE tutores;

DROP FUNCTION IF EXISTS mis_tutores_ids();
DROP FUNCTION IF EXISTS tutores_del_alumno();
