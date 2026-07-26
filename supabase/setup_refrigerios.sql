-- =============================================
-- Boleta de Refrigerios Escolares
-- Ejecuta TODO este SQL en el SQL Editor de Supabase
-- =============================================

-- 1) Función helper: is_admin() (si no existe)
CREATE OR REPLACE FUNCTION is_admin()
RETURNS BOOLEAN
LANGUAGE sql
SECURITY DEFINER
AS $$
  SELECT EXISTS (
    SELECT 1 FROM profiles
    WHERE id = auth.uid() AND rol = 'admin'
  );
$$;

-- 2) Tabla refrigerios
CREATE TABLE IF NOT EXISTS refrigerios (
  id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  alumno     TEXT NOT NULL,
  respuestas JSONB NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 3) RLS
ALTER TABLE refrigerios ENABLE ROW LEVEL SECURITY;

-- Eliminar políticas previas si existen (idempotente)
DROP POLICY IF EXISTS "refrigerios_insert_anyone" ON refrigerios;
DROP POLICY IF EXISTS "refrigerios_select_admin" ON refrigerios;

-- Política INSERT: cualquiera puede insertar
CREATE POLICY "refrigerios_insert_anyone"
  ON refrigerios FOR INSERT
  WITH CHECK (true);

-- Política SELECT: solo admin puede leer
CREATE POLICY "refrigerios_select_admin"
  ON refrigerios FOR SELECT
  USING (is_admin());
