-- El alta pregunta el tipo de cuenta y guarda apellidos por separado.
--
--   tipo_solicitado → lo que la persona pide al completar su perfil (alumno o
--                     tutor). El admin lo ve en Solicitudes y lo usa para
--                     preseleccionar la aprobación; NO autoriza nada por sí solo.
--   apellidos       → hasta hoy el nombre completo iba en `nombre` y el admin lo
--                     partía adivinando (`partirNombre`). Se guarda aparte para
--                     que `alumnos`/`tutores` reciban el apellido real.
--
-- Los perfiles ya existentes quedan con ambos campos en NULL; se llenan la
-- próxima vez que completen su perfil.

ALTER TABLE profiles ADD COLUMN IF NOT EXISTS apellidos TEXT;
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS tipo_solicitado TEXT;

ALTER TABLE profiles DROP CONSTRAINT IF EXISTS profiles_tipo_solicitado_check;
ALTER TABLE profiles ADD CONSTRAINT profiles_tipo_solicitado_check
  CHECK (tipo_solicitado IS NULL OR tipo_solicitado IN ('alumno', 'tutor'));
