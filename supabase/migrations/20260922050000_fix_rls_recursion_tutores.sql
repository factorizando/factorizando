-- Romper la recursión infinita de RLS entre `tutores` y `alumno_tutor`.
--
-- Síntoma: SELECT sobre `tutores` o sobre `alumno_tutor` devolvía **HTTP 500**
-- («infinite recursion detected in policy for relation "tutores"»), así que el
-- tab Tutores del panel, el portal `/tutor` y `/alumno` salían vacíos.
--
-- Causa: dos políticas se consultaban mutuamente **en línea** (bajo RLS):
--   · `tutores_select_own`        → SELECT ... FROM alumno_tutor
--   · `alumno_tutor_tutor_select` → SELECT ... FROM tutores
-- Postgres evalúa una política, entra a la otra y viceversa, y aborta.
--
-- Arreglo: resolver las referencias cruzadas con funciones SECURITY DEFINER,
-- que saltan RLS y cortan el ciclo — el mismo patrón que ya usan
-- `alumnos_del_tutor()` y `mi_alumno_id()`.

-- ── 1. Helpers ───────────────────────────────────────────────────────────────
-- Ids de las fichas de tutor del usuario autenticado (para el tutor).
CREATE OR REPLACE FUNCTION mis_tutores_ids()
RETURNS SETOF UUID
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT id FROM tutores WHERE profile_id = auth.uid();
$$;

-- Ids de los tutores del alumno autenticado (para el alumno).
CREATE OR REPLACE FUNCTION tutores_del_alumno()
RETURNS SETOF UUID
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT at.tutor_id FROM alumno_tutor at WHERE at.alumno_id = mi_alumno_id();
$$;

-- ── 2. Políticas sin referencias cruzadas en línea ───────────────────────────
DROP POLICY IF EXISTS "alumno_tutor_tutor_select" ON alumno_tutor;
CREATE POLICY "alumno_tutor_tutor_select"
  ON alumno_tutor FOR SELECT
  USING (tutor_id IN (SELECT mis_tutores_ids()));

DROP POLICY IF EXISTS "tutores_select_own" ON tutores;
CREATE POLICY "tutores_select_own"
  ON tutores FOR SELECT
  USING (id IN (SELECT tutores_del_alumno()));
