-- Tabla para boleta de refrigerios escolares (formulario temporal público).
-- Cualquier persona puede insertar; solo admin puede leer.

CREATE TABLE refrigerios (
  id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  alumno     TEXT NOT NULL,
  grupo      TEXT NOT NULL,
  respuestas JSONB NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- RLS: cualquiera puede insertar, solo admin puede leer
ALTER TABLE refrigerios ENABLE ROW LEVEL SECURITY;

CREATE POLICY "refrigerios_insert_anyone"
  ON refrigerios FOR INSERT
  WITH CHECK (true);

CREATE POLICY "refrigerios_select_admin"
  ON refrigerios FOR SELECT
  USING (is_admin());
