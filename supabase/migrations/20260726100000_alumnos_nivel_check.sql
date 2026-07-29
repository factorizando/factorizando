-- Migración: Ampliar check constraint de nivel y desacoplar FK de profiles
-- 1. Amplía nivel para aceptar los 4 niveles educativos
-- 2. Elimina la FK que obliga alumnos.id a existir en profiles,
--    permitiendo alumnos "manuales" sin cuenta en la plataforma.

-- ── Check constraint de nivel ──────────────────────────────────
ALTER TABLE alumnos DROP CONSTRAINT IF EXISTS alumnos_nivel_check;
ALTER TABLE alumnos ADD CONSTRAINT alumnos_nivel_check
  CHECK (nivel IN ('primaria', 'secundaria', 'prepa', 'universidad'));

-- ── FK constraint ─────────────────────────────────────────────
-- alumnos.id ya no depende de profiles(id); se mantiene como PK propio.
-- Los alumnos vinculados a un usuario conservan el mismo UUID por convención.
ALTER TABLE alumnos DROP CONSTRAINT IF EXISTS alumnos_id_fkey;
