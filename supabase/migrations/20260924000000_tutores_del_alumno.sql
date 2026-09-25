-- El alumno lee a sus tutores por una función, no por RLS sobre `profiles`.
--
-- Síntoma: en `/alumno` no aparecía ningún tutor (ni en «Mis tutores» ni en
-- «Solicitudes de tutores»).
--
-- Causa: el vínculo vive en `alumno_tutor` (el alumno sí lo lee, política
-- `alumno_tutor_select_own`), pero el nombre y la relación del tutor viven en
-- `profiles`, y **no hay política que deje a un alumno leer el `profiles` de su
-- tutor**. Antes funcionaba porque el tutor estaba en la tabla `tutores`, con su
-- propia política `tutores_select_own`; al plegar `tutores` en `profiles`
-- (20260923020000) esa política y el helper `tutores_del_alumno()` desaparecieron
-- con la tabla.
--
-- En vez de abrir una política de SELECT sobre `profiles` (que expondría todas
-- las columnas del tutor: correo, teléfono, estado_acceso, suspensión…), se
-- recrea el helper como SECURITY DEFINER devolviendo solo lo que la pantalla
-- muestra. Mismo patrón que `alumnos_del_tutor()` y `mi_alumno_id()`.

CREATE OR REPLACE FUNCTION tutores_del_alumno()
RETURNS TABLE (id UUID, nombre TEXT, apellidos TEXT, relacion TEXT, estado TEXT)
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT p.id, p.nombre, p.apellidos, p.relacion, at.estado
  FROM alumno_tutor at
  JOIN profiles p ON p.id = at.tutor_id
  WHERE at.alumno_id = mi_alumno_id();
$$;

GRANT EXECUTE ON FUNCTION tutores_del_alumno() TO authenticated;
