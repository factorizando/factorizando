-- Archivado (soft delete) de alumnos y tutores.
--
-- El panel ofrecía un borrado duro que fallaba en silencio: `cargos.alumno_id`
-- es ON DELETE RESTRICT, así que un alumno con cualquier cargo no se podía
-- borrar, pero la UI cerraba el modal como si hubiera funcionado. Y al borrar
-- la ficha, la cuenta (`profiles`) sobrevivía con acceso aprobado.
--
-- Decisión (2026-09-23): borrado **mixto**.
--   · Con historial de cobro (cargos/pagos) → se **archiva**: `archivado_en`
--     marca la fecha y la ficha se oculta, pero el historial se conserva.
--   · Sin historial → se borra de verdad (lo decide el cliente).
-- En ambos casos la cuenta se **anula** (`estado_acceso = 'rechazado'`), no se
-- borra la fila de `profiles`, para no perder el correo.
--
-- `archivado_en IS NULL` = activo. No hace falta RLS nueva: las políticas de
-- admin (`*_admin_all`) ya permiten leer y escribir todas las filas; el
-- archivado se resuelve en el cliente y en el bloqueo de la cuenta.

ALTER TABLE alumnos ADD COLUMN IF NOT EXISTS archivado_en TIMESTAMPTZ;
ALTER TABLE tutores ADD COLUMN IF NOT EXISTS archivado_en TIMESTAMPTZ;

CREATE INDEX IF NOT EXISTS idx_alumnos_archivado ON alumnos(archivado_en);
CREATE INDEX IF NOT EXISTS idx_tutores_archivado  ON tutores(archivado_en);

-- `resultados` se creó desde el panel y no está en las migraciones, así que su
-- política de admin no consta en el repo. El borrado duro de un alumno limpia
-- sus resultados (no tienen FK); para que esa limpieza no dependa de una
-- política que no podemos verificar, se asegura aquí. Es aditiva: si ya existe
-- una política de admin con otro nombre, esta solo la amplía.
DO $$
BEGIN
  IF to_regclass('public.resultados') IS NOT NULL THEN
    DROP POLICY IF EXISTS "resultados_admin_all" ON resultados;
    CREATE POLICY "resultados_admin_all"
      ON resultados FOR ALL
      USING (is_admin());
  END IF;
END $$;
