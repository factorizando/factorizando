-- Generación automática del cargo semanal.
--
-- Hasta ahora el único cargo de una inscripción se creaba en el momento de
-- inscribir (AdminInscripciones.handleCreate) y nadie producía la semana 2. El
-- sitio es estático (GitHub Pages), así que no hay servidor donde correr un
-- programador: vive en la base, con pg_cron.
--
-- Requisito: habilitar pg_cron en Dashboard → Database → Extensions.

-- ============================================================
-- 1. Rellenar el periodo de los cargos semanales que no lo tienen
-- ============================================================
-- El generador se orienta por `periodo_inicio` para saber por dónde va cada
-- inscripción. Los cargos creados al inscribir solo lo traen cuando fueron
-- parciales, así que sin este relleno el generador volvería a emitir la primera
-- semana. En cobro semanal `fecha_vencimiento` es el día en que arranca el
-- periodo, y date_trunc('week') devuelve lunes, que es como corren las semanas.

UPDATE cargos c
SET periodo_inicio = date_trunc('week', c.fecha_vencimiento)::date,
    periodo_fin    = date_trunc('week', c.fecha_vencimiento)::date + 6
FROM inscripciones i
JOIN planes_precio p ON p.id = i.plan_precio_id
WHERE c.inscripcion_id = i.id
  AND p.tipo_cobro = 'semanal'
  AND c.periodo_inicio IS NULL;

-- ============================================================
-- 2. Una inscripción no puede tener dos cargos del mismo periodo
-- ============================================================
-- Es la red de seguridad del generador: sin ella, correrlo dos veces duplica el
-- cobro. No hace falta que sea parcial — en Postgres los NULL son distintos
-- entre sí en un índice único, así que los cargos sin periodo (mensual, único,
-- asesorías) conviven sin estorbarse.

CREATE UNIQUE INDEX IF NOT EXISTS cargos_inscripcion_periodo_key
  ON cargos (inscripcion_id, periodo_inicio);

-- ============================================================
-- 3. La función generadora
-- ============================================================
-- Idempotente: se puede correr las veces que sea y solo crea lo que falta.
-- Devuelve lo que creó, para poder auditarla.
--
-- SECURITY DEFINER porque `cargos` tiene RLS de solo-admin y pg_cron no actúa
-- como un usuario del panel. search_path vacío y nombres calificados para que la
-- función no dependa del search_path de quien la invoque.

CREATE OR REPLACE FUNCTION public.generar_cargos_semanales()
RETURNS TABLE (creado_inscripcion uuid, creado_periodo date, creado_monto numeric)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = ''
AS $$
DECLARE
  -- La semana en curso según el calendario local. El servidor corre en UTC y de
  -- medianoche a 6am allá ya es el día siguiente: sin la conversión, los lunes
  -- de madrugada se generaría la semana equivocada.
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
      -- Por dónde continuar: el lunes siguiente al último periodo ya cobrado.
      -- Si la inscripción todavía no tiene ninguno, desde la semana en que
      -- empiezan las clases.
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
      a.curso || ' — semanal',
      a.monto,
      s.lunes::date,            -- el cobro semanal vence el día que abre la semana
      s.lunes::date,
      s.lunes::date + 6,
      false,
      'pendiente'
    FROM activas a
    CROSS JOIN LATERAL generate_series(
      a.desde, v_semana_actual, interval '7 days'
    ) AS s(lunes)
    -- Nunca más allá del cierre de la cohorte. Sin grupo (modalidad libre) no
    -- hay fecha de fin: se cobra mientras la inscripción siga activa.
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

COMMENT ON FUNCTION public.generar_cargos_semanales() IS
  'Crea los cargos semanales faltantes de cada inscripción activa con plan semanal, desde el último periodo cobrado hasta la semana en curso. Idempotente.';

-- Que no la pueda invocar cualquiera: es SECURITY DEFINER y escribe cobros.
REVOKE ALL ON FUNCTION public.generar_cargos_semanales() FROM PUBLIC;

-- ============================================================
-- 4. Programarla
-- ============================================================
-- Diaria y no semanal a propósito: al ser idempotente, correrla todos los días
-- hace que una inscripción nueva reciba su cargo el mismo día y que un día caído
-- se recupere solo al siguiente. pg_cron programa en UTC; 13:00 UTC son las
-- 07:00 en Ciudad de México (UTC-6, sin horario de verano desde 2022).

-- SELECT cron.schedule(
--   'generar-cargos-semanales',
--   '0 13 * * *',
--   $cron$ SELECT public.generar_cargos_semanales(); $cron$
-- );
