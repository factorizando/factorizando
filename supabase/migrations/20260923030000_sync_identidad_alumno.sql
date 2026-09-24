-- Sincronizar la identidad del alumno desde su cuenta (trigger).
--
-- `alumnos` y `profiles` duplican nombre, apellidos, teléfono y fecha de
-- nacimiento, y nadie los copiaba entre sí: el alumno editaba su perfil
-- (`profiles`) y el admin editaba la ficha (`alumnos`), así que la misma persona
-- podía aparecer con dos nombres distintos en pantallas distintas.
--
-- Decisión (2026-09-23): **manda la cuenta**. `profiles` es la fuente de verdad
-- y este trigger copia al expediente cuando cambian esos campos. El formulario
-- de Alumnos deja de editar identidad para los alumnos con cuenta (solo nivel,
-- bloque y datos médicos); los alumnos sin cuenta la siguen capturando en
-- `alumnos`, y el trigger no los toca porque no tienen `profile_id`.
--
-- El correo **no** se sincroniza a propósito: `alumnos.email` ya iba en `NULL`
-- para los alumnos con cuenta (CompletarPerfil lo deja así) y el correo real
-- vive en la cuenta. Antes de sincronizarlo, verificar que `profiles.email` no
-- tenga nulos: `SELECT count(*) FROM profiles WHERE email IS NULL;`.

CREATE OR REPLACE FUNCTION sync_alumno_identidad()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  UPDATE alumnos
     SET nombre            = COALESCE(NEW.nombre, nombre),
         apellidos         = COALESCE(NEW.apellidos, apellidos),
         telefono          = NEW.telefono,
         fecha_nacimiento  = COALESCE(NEW.fecha_nacimiento, fecha_nacimiento)
   WHERE profile_id = NEW.id;
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS trg_sync_alumno_identidad ON profiles;
CREATE TRIGGER trg_sync_alumno_identidad
  AFTER UPDATE OF nombre, apellidos, telefono, fecha_nacimiento ON profiles
  FOR EACH ROW
  WHEN (
    OLD.nombre           IS DISTINCT FROM NEW.nombre
    OR OLD.apellidos     IS DISTINCT FROM NEW.apellidos
    OR OLD.telefono      IS DISTINCT FROM NEW.telefono
    OR OLD.fecha_nacimiento IS DISTINCT FROM NEW.fecha_nacimiento
  )
  EXECUTE FUNCTION sync_alumno_identidad();

-- Backfill único para dejar los expedientes alineados con su cuenta.
UPDATE alumnos a
   SET nombre           = COALESCE(p.nombre, a.nombre),
       apellidos        = COALESCE(p.apellidos, a.apellidos),
       telefono         = p.telefono,
       fecha_nacimiento = COALESCE(p.fecha_nacimiento, a.fecha_nacimiento)
  FROM profiles p
 WHERE a.profile_id = p.id
   AND (a.nombre           IS DISTINCT FROM p.nombre
     OR a.apellidos        IS DISTINCT FROM p.apellidos
     OR a.telefono         IS DISTINCT FROM p.telefono
     OR a.fecha_nacimiento IS DISTINCT FROM p.fecha_nacimiento);
