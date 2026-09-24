-- Ampliar los valores de `nivel_educativo` (y `nivel`) en `profiles`.
--
-- El formulario de perfil pasó de tres opciones (`basica`, `media_superior`,
-- `superior`) a cuatro, separando Educación Básica en Primaria y Secundaria.
-- La restricción CHECK de `profiles` (creada desde el panel de Supabase, sin
-- versionar) solo admitía los valores viejos, así que guardar el perfil fallaba
-- al enviar `primaria`/`secundaria`.
--
-- Se localizan las restricciones por su definición —no se conoce su nombre— y se
-- reemplazan por una que admite los valores nuevos **y** conserva los viejos. Se
-- agregan con `NOT VALID`: no revisan las filas ya existentes (así la migración
-- no aborta por datos heredados) pero sí validan las escrituras nuevas, que es
-- lo que se necesita. `nivel` (derivado de `nivel_educativo`) se relaja igual,
-- por si el trigger deja pasar el valor tal cual.

DO $$
DECLARE c record;
BEGIN
  FOR c IN
    SELECT conname FROM pg_constraint
    WHERE conrelid = 'public.profiles'::regclass AND contype = 'c'
      AND pg_get_constraintdef(oid) ILIKE '%nivel_educativo%'
  LOOP
    EXECUTE format('ALTER TABLE public.profiles DROP CONSTRAINT %I', c.conname);
  END LOOP;
END $$;

ALTER TABLE public.profiles
  ADD CONSTRAINT profiles_nivel_educativo_check
  CHECK (nivel_educativo IS NULL OR nivel_educativo IN
    ('basica', 'primaria', 'secundaria', 'media_superior', 'superior'))
  NOT VALID;

DO $$
DECLARE c record;
BEGIN
  FOR c IN
    SELECT conname FROM pg_constraint
    WHERE conrelid = 'public.profiles'::regclass AND contype = 'c'
      AND pg_get_constraintdef(oid) ILIKE '%nivel%'
      AND pg_get_constraintdef(oid) NOT ILIKE '%nivel_educativo%'
  LOOP
    EXECUTE format('ALTER TABLE public.profiles DROP CONSTRAINT %I', c.conname);
  END LOOP;
END $$;

ALTER TABLE public.profiles
  ADD CONSTRAINT profiles_nivel_check
  CHECK (nivel IS NULL OR nivel IN ('basica', 'primaria', 'secundaria', 'prepa', 'universidad'))
  NOT VALID;
