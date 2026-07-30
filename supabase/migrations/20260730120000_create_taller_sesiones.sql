-- Talleres de regularización (primaria/secundaria): registro de sesiones.
-- Cada fila = una tanda de práctica de un alumno en una actividad de un taller.
-- Se escribe desde el taller (iframe) vía el puente de TallerRunner.jsx.

CREATE TABLE taller_sesiones (
  id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  alumno_id  UUID NOT NULL REFERENCES alumnos(id) ON DELETE CASCADE,
  taller_id  TEXT NOT NULL,
  actividad  TEXT NOT NULL,
  grupo      TEXT,
  aciertos   INTEGER NOT NULL DEFAULT 0 CHECK (aciertos >= 0),
  errores    INTEGER NOT NULL DEFAULT 0 CHECK (errores  >= 0),
  creado_en  TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Consulta típica: historial de un alumno en un taller, más reciente primero.
CREATE INDEX taller_sesiones_alumno_taller_idx
  ON taller_sesiones (alumno_id, taller_id, creado_en DESC);

-- RLS: solo admin. Los talleres se usan en sesión presencial, dirigidos por el
-- administrador; el alumno no escribe directamente (no tiene sesión propia).
ALTER TABLE taller_sesiones ENABLE ROW LEVEL SECURITY;

CREATE POLICY "taller_sesiones_admin_all"
  ON taller_sesiones FOR ALL
  USING (is_admin());
