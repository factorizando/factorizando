-- `buscar_escuelas` no devolvía `localidad`.
--
-- El formulario de perfil distingue escuelas que comparten nombre y municipio
-- pero están en localidades distintas (o cambian de servicio) usando
-- `servicio · municipio · localidad · cct`. La función devolvía todo menos
-- `localidad`, así que dos planteles distintos se veían idénticos salvo por el
-- CCT.
--
-- `CREATE OR REPLACE` no puede cambiar el `RETURNS TABLE`, por eso se suelta la
-- función antes de recrearla. El resto del comportamiento se conserva tal cual:
-- mismo filtrado por estado/municipio (con `f_unaccent`), misma búsqueda por
-- nombre/CCT, mismo orden y mismo tope. Solo se agrega `localidad` a la salida.
--
-- Nota: la función original se creó desde el panel de Supabase y no estaba
-- versionada; esta migración es el registro de su forma actual.

DROP FUNCTION IF EXISTS public.buscar_escuelas(text, text, text, integer);

CREATE OR REPLACE FUNCTION public.buscar_escuelas(
  p_estado text,
  p_municipio text DEFAULT NULL::text,
  p_q text DEFAULT NULL::text,
  p_limit integer DEFAULT 40
)
RETURNS TABLE(cct text, nombre text, municipio text, localidad text, nivel text, servicio text)
LANGUAGE sql
STABLE
SET search_path TO 'public'
AS $function$
  select cct, nombre, municipio, localidad, nivel, servicio
  from public.escuelas
  where estado = p_estado
    and (p_municipio is null or p_municipio = ''
         or public.f_unaccent(municipio) ilike public.f_unaccent(p_municipio))
    and (p_q is null or p_q = ''
         or public.f_unaccent(nombre) ilike '%' || public.f_unaccent(p_q) || '%'
         or cct ilike '%' || p_q || '%')
  order by nombre
  limit greatest(1, least(p_limit, 60));
$function$;
