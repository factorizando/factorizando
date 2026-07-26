-- Migración 1: Alumnos, tutores y contactos de emergencia
-- Relaciona alumnos con profiles (1:1 vía auth.users.id)
-- Un alumno puede tener 0..N tutores y 1-2 contactos de emergencia

-- ============================================================
-- TABLAS
-- ============================================================

CREATE TABLE alumnos (
  id                  UUID PRIMARY KEY REFERENCES profiles(id) ON DELETE CASCADE,
  nombre              TEXT NOT NULL,
  apellidos           TEXT NOT NULL,
  fecha_nacimiento    DATE NOT NULL,
  email               TEXT,
  telefono            TEXT,
  nivel               TEXT NOT NULL CHECK (nivel IN ('prepa', 'universidad')),
  alergias            TEXT,
  condiciones_medicas TEXT,
  notas_importantes   TEXT,
  created_at          TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE tutores (
  id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  nombre     TEXT NOT NULL,
  apellidos  TEXT NOT NULL,
  telefono   TEXT NOT NULL,
  email      TEXT,
  relacion   TEXT NOT NULL CHECK (relacion IN ('padre', 'madre', 'tutor')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE alumno_tutor (
  alumno_id UUID NOT NULL REFERENCES alumnos(id) ON DELETE CASCADE,
  tutor_id  UUID NOT NULL REFERENCES tutores(id) ON DELETE CASCADE,
  PRIMARY KEY (alumno_id, tutor_id)
);

CREATE TABLE contactos_emergencia (
  id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  alumno_id  UUID NOT NULL REFERENCES alumnos(id) ON DELETE CASCADE,
  nombre     TEXT NOT NULL,
  telefono   TEXT NOT NULL,
  relacion   TEXT NOT NULL,
  orden      SMALLINT NOT NULL CHECK (orden IN (1, 2)),
  UNIQUE (alumno_id, orden)
);

-- ============================================================
-- ÍNDICES
-- ============================================================

CREATE INDEX idx_alumno_tutor_tutor ON alumno_tutor(tutor_id);
CREATE INDEX idx_contactos_emergencia_alumno ON contactos_emergencia(alumno_id);

-- ============================================================
-- ROW LEVEL SECURITY
-- ============================================================

ALTER TABLE alumnos ENABLE ROW LEVEL SECURITY;
ALTER TABLE tutores ENABLE ROW LEVEL SECURITY;
ALTER TABLE alumno_tutor ENABLE ROW LEVEL SECURITY;
ALTER TABLE contactos_emergencia ENABLE ROW LEVEL SECURITY;

-- alumnos: lectura y escritura del propio registro
CREATE POLICY "alumnos_select_own"
  ON alumnos FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "alumnos_update_own"
  ON alumnos FOR UPDATE
  USING (auth.uid() = id);

CREATE POLICY "alumnos_insert_own"
  ON alumnos FOR INSERT
  WITH CHECK (auth.uid() = id);

-- tutores: visibles solo a través de alumno_tutor para el alumno dueño
CREATE POLICY "tutores_select_own"
  ON tutores FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM alumno_tutor
      WHERE alumno_tutor.tutor_id = tutores.id
        AND alumno_tutor.alumno_id = auth.uid()
    )
  );

-- alumno_tutor: gestionar los propios vínculos
CREATE POLICY "alumno_tutor_select_own"
  ON alumno_tutor FOR SELECT
  USING (alumno_id = auth.uid());

CREATE POLICY "alumno_tutor_insert_own"
  ON alumno_tutor FOR INSERT
  WITH CHECK (alumno_id = auth.uid());

CREATE POLICY "alumno_tutor_delete_own"
  ON alumno_tutor FOR DELETE
  USING (alumno_id = auth.uid());

-- contactos_emergencia: gestionar los propios
CREATE POLICY "contactos_select_own"
  ON contactos_emergencia FOR SELECT
  USING (alumno_id = auth.uid());

CREATE POLICY "contactos_insert_own"
  ON contactos_emergencia FOR INSERT
  WITH CHECK (alumno_id = auth.uid());

CREATE POLICY "contactos_update_own"
  ON contactos_emergencia FOR UPDATE
  USING (alumno_id = auth.uid());

CREATE POLICY "contactos_delete_own"
  ON contactos_emergencia FOR DELETE
  USING (alumno_id = auth.uid());

-- ============================================================
-- NOTA SOBRE ACCESO ADMINISTRATIVO
-- ============================================================
-- El acceso admin a estas tablas se implementará vía funciones RPC
-- SECURITY DEFINER (patrón consistente con get_all_profiles existente).
-- Ejemplo futuro: admin_get_alumnos(), admin_get_tutores(alumno_id), etc.
