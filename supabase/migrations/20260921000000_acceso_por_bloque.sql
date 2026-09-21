-- Acceso por bloque: la cuenta nace pendiente y el administrador la aprueba.
--
-- Hasta hoy `profiles.nivel` (derivado de `nivel_educativo` por un trigger) era
-- lo que decidía el acceso: registrarse bastaba para entrar a /preparatoria o
-- /universidad. A partir de aquí la autorización es explícita:
--   estado_acceso = 'aprobado' + bloque ∈ (preparatoria, universidad, regularizacion).
-- `nivel` se conserva (lo usan estadísticas y el catálogo), pero ya no autoriza.
--
-- La tabla `profiles` se creó desde el panel de Supabase y no está versionada;
-- esta migración es el registro de los campos que se le agregan.

-- ── 1. Campos de acceso ──────────────────────────────────────────────────────
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS estado_acceso TEXT NOT NULL DEFAULT 'pendiente';
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS bloque        TEXT;
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS motivo_rechazo TEXT;
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS revisado_en    TIMESTAMPTZ;

ALTER TABLE profiles DROP CONSTRAINT IF EXISTS profiles_estado_acceso_check;
ALTER TABLE profiles ADD CONSTRAINT profiles_estado_acceso_check
  CHECK (estado_acceso IN ('pendiente', 'aprobado', 'rechazado'));

ALTER TABLE profiles DROP CONSTRAINT IF EXISTS profiles_bloque_check;
ALTER TABLE profiles ADD CONSTRAINT profiles_bloque_check
  CHECK (bloque IN ('preparatoria', 'universidad', 'regularizacion'));

-- Cuentas existentes: quedan todas en revisión (decisión de producto). El
-- DEFAULT ya las deja en 'pendiente'; el UPDATE cubre el caso de re-ejecución.
UPDATE profiles SET estado_acceso = 'pendiente' WHERE estado_acceso IS NULL;

-- ── 2. El admin puede actualizar cualquier perfil ────────────────────────────
-- `is_admin()` ya existe (migración 4). Sin esta política, aprobar/rechazar
-- desde el panel fallaría en silencio.
DROP POLICY IF EXISTS "profiles_admin_update" ON profiles;
CREATE POLICY "profiles_admin_update"
  ON profiles FOR UPDATE
  USING (is_admin())
  WITH CHECK (is_admin());

-- ── 3. Regularización: el alumno escribe y lee sus propias sesiones ──────────
-- Antes solo el admin tocaba `taller_sesiones` (sesión presencial proyectada).
-- Con bloque = 'regularizacion' el alumno practica solo y su avance se guarda
-- en su propio expediente (alumno_id = auth.uid()).
DROP POLICY IF EXISTS "taller_sesiones_select_own" ON taller_sesiones;
CREATE POLICY "taller_sesiones_select_own"
  ON taller_sesiones FOR SELECT
  USING (alumno_id = auth.uid());

DROP POLICY IF EXISTS "taller_sesiones_insert_own" ON taller_sesiones;
CREATE POLICY "taller_sesiones_insert_own"
  ON taller_sesiones FOR INSERT
  WITH CHECK (alumno_id = auth.uid());
