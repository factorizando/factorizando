-- Cuestionarios operados por el tutor en nombre de un alumno sin cuenta.
--
-- La inspección de `resultados` confirmó que **no tiene claves foráneas**: su
-- `user_id` es un UUID libre. Este proyecto ya venía tratándolo como el **id del
-- alumno** (la política del tutor que puso la migración 20260921010000 lo compara
-- con `alumnos_del_tutor()`, que devuelve ids de `alumnos`, no de cuentas).
--
-- Así que no hace falta una columna nueva: se mantiene esa convención.
--   · Alumno con cuenta  → user_id = su uid = su id de alumnos (invariante)
--   · Alumno sin cuenta   → user_id = el id de su fila de `alumnos`, y quien
--                           inserta es el tutor a través de la RLS de abajo.
--
-- Lo único que faltaba era permitir la ESCRITURA del tutor sobre el expediente
-- de sus alumnos. La lectura ya la tenía.

DROP POLICY IF EXISTS "resultados_tutor_select" ON resultados;
CREATE POLICY "resultados_tutor_select"
  ON resultados FOR SELECT
  USING (user_id IN (SELECT alumnos_del_tutor()));

DROP POLICY IF EXISTS "resultados_tutor_insert" ON resultados;
CREATE POLICY "resultados_tutor_insert"
  ON resultados FOR INSERT
  WITH CHECK (user_id IN (SELECT alumnos_del_tutor()));
