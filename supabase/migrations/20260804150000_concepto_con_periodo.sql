-- El concepto nombra el periodo, no el tipo de plan.
--
-- Antes decía "Curso de Regularización — semanal", que es la misma línea todas
-- las semanas: en el comprobante del alumno no se distingue qué semana pagó.
-- Ahora dice "Curso de Regularización — Semana 3 (17 – 23 ago 2026)".
--
-- El frontend hace lo mismo con `conceptoDeCargo` en src/utils/fechas.js. Si se
-- cambia el formato, hay que cambiarlo en los dos lados o convivirán dos
-- convenciones en la misma tabla.

-- ============================================================
-- Etiqueta legible de un periodo: "17 – 23 ago 2026", o
-- "30 ago – 5 sep 2026" cuando cruza de mes.
-- ============================================================
-- Los meses van en un arreglo y no con to_char(..., 'Mon') porque esa
-- abreviatura depende de lc_time, que en Supabase no está en español.

CREATE OR REPLACE FUNCTION public.texto_periodo(p_inicio date, p_fin date)
RETURNS text
LANGUAGE sql
IMMUTABLE
SET search_path = ''
AS $$
  SELECT CASE
    WHEN date_trunc('month', p_inicio) = date_trunc('month', p_fin) THEN
      to_char(p_inicio, 'FMDD') || ' – ' || to_char(p_fin, 'FMDD') || ' '
        || (ARRAY['ene','feb','mar','abr','may','jun','jul','ago','sep','oct','nov','dic'])[EXTRACT(MONTH FROM p_fin)::int]
        || ' ' || to_char(p_fin, 'YYYY')
    ELSE
      to_char(p_inicio, 'FMDD') || ' '
        || (ARRAY['ene','feb','mar','abr','may','jun','jul','ago','sep','oct','nov','dic'])[EXTRACT(MONTH FROM p_inicio)::int]
        || ' – ' || to_char(p_fin, 'FMDD') || ' '
        || (ARRAY['ene','feb','mar','abr','may','jun','jul','ago','sep','oct','nov','dic'])[EXTRACT(MONTH FROM p_fin)::int]
        || ' ' || to_char(p_fin, 'YYYY')
  END
$$;

-- ============================================================
-- El generador, con el concepto nuevo
-- ============================================================

CREATE OR REPLACE FUNCTION public.generar_cargos_semanales()
RETURNS TABLE (creado_inscripcion uuid, creado_periodo date, creado_monto numeric)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = ''
AS $$
DECLARE
  v_semana_actual date := date_trunc(
    'week', (now() AT TIME ZONE 'America/Mexico_City')::date
  )::date;
BEGIN
  RETURN QUERY
  WITH activas AS (
    SELECT
      i.id        AS insc_id,
      i.alumno_id AS alumno,
      c.nombre    AS curso,
      p.monto     AS monto,
      g.fecha_fin AS fin_grupo,
      -- Origen de la numeración de semanas: el lunes de la primera semana de
      -- esta inscripción. "Semana 1" es aquélla, no la primera que se generó.
      date_trunc('week', COALESCE(
        i.fecha_inicio_clases,
        (i.fecha_inscripcion AT TIME ZONE 'America/Mexico_City')::date
      ))::date AS primera_semana,
      COALESCE(
        (SELECT max(x.periodo_inicio) + 7
           FROM public.cargos x
          WHERE x.inscripcion_id = i.id
            AND x.periodo_inicio IS NOT NULL),
        date_trunc('week', COALESCE(
          i.fecha_inicio_clases,
          (i.fecha_inscripcion AT TIME ZONE 'America/Mexico_City')::date
        ))::date
      ) AS desde
    FROM public.inscripciones i
    JOIN public.planes_precio p ON p.id = i.plan_precio_id
    JOIN public.cursos c        ON c.id = i.curso_id
    LEFT JOIN public.grupos g   ON g.id = i.grupo_id
    WHERE i.estado = 'activa'
      AND p.tipo_cobro = 'semanal'
  ),
  nuevos AS (
    INSERT INTO public.cargos (
      alumno_id, inscripcion_id, concepto, monto,
      fecha_vencimiento, periodo_inicio, periodo_fin, es_parcial, estado
    )
    SELECT
      a.alumno,
      a.insc_id,
      a.curso || ' — Semana '
        || (((s.lunes::date - a.primera_semana) / 7) + 1)::text
        || ' (' || public.texto_periodo(s.lunes::date, s.lunes::date + 6) || ')',
      a.monto,
      s.lunes::date,
      s.lunes::date,
      s.lunes::date + 6,
      false,
      'pendiente'
    FROM activas a
    CROSS JOIN LATERAL generate_series(
      a.desde, v_semana_actual, interval '7 days'
    ) AS s(lunes)
    WHERE a.fin_grupo IS NULL OR s.lunes::date <= a.fin_grupo
    ON CONFLICT (inscripcion_id, periodo_inicio) DO NOTHING
    RETURNING
      public.cargos.inscripcion_id,
      public.cargos.periodo_inicio,
      public.cargos.monto
  )
  SELECT * FROM nuevos;
END;
$$;

REVOKE ALL ON FUNCTION public.generar_cargos_semanales() FROM PUBLIC;
