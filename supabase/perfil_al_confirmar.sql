-- ============================================================================
-- Crear `profiles` al CONFIRMAR el correo, no al registrarse
-- ============================================================================
--
-- NO es una migración: se pega a mano en Supabase → SQL Editor. Se deja aquí
-- como registro porque el trigger de alta actual vive en el panel y no está
-- versionado.
--
-- Problema que resuelve: hoy (2026-09) el trigger de alta crea `profiles` en el
-- `signUp`. Si alguien teclea un correo que no existe, nunca confirma, y deja
-- una cuenta fantasma en pendientes a la que nadie puede escribir. Moviendo la
-- creación a la confirmación, una cuenta sin confirmar no llega a `profiles`.
--
-- ANTES DE EJECUTAR: mira el nombre del trigger actual y ajústalo.
--
--   SELECT tgname, pg_get_triggerdef(oid)
--     FROM pg_trigger
--    WHERE tgrelid = 'auth.users'::regclass AND NOT tgisinternal;
--
-- Luego reemplaza `on_auth_user_created` por el nombre real en el DROP de abajo.
-- Si el trigger actual usa un trigger function propio, esa función se puede
-- dejar sin borrar; solo deja de dispararse.
--
-- ─────────────────────────────────────────────────────────────────────────────

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;

CREATE OR REPLACE FUNCTION public.crear_perfil_al_confirmar()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, auth
AS $$
BEGIN
  -- Solo cuando el correo ya está confirmado (alta confirmada o UPDATE que la
  -- marca). Un upsert deja la fila lista si el correo se confirma dos veces.
  IF NEW.email_confirmed_at IS NOT NULL THEN
    INSERT INTO public.profiles (id, email)
    VALUES (NEW.id, NEW.email)
    ON CONFLICT (id) DO UPDATE SET email = EXCLUDED.email;
  END IF;
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS on_auth_user_confirmed ON auth.users;
CREATE TRIGGER on_auth_user_confirmed
  AFTER INSERT OR UPDATE OF email_confirmed_at ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.crear_perfil_al_confirmar();

-- Limpieza opcional: cuentas fantasma que quedaron de antes (sin confirmar y
-- sin perfil completo). Revísalas antes con el panel → Cuentas → «Sin confirmar».
-- DELETE FROM auth.users WHERE email_confirmed_at IS NULL;
