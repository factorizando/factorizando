-- Migración 2: Cursos, asesorías, cargos y pagos
-- Catálogo de cursos, cohortes, planes de precio, inscripciones,
-- sesiones de asesoría, tabla central de cargos y registro de pagos

-- ============================================================
-- CATÁLOGO Y ESTRUCTURA DE CURSOS
-- ============================================================

CREATE TABLE cursos (
  id               UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  nombre           TEXT NOT NULL,
  descripcion      TEXT,
  tipo             TEXT NOT NULL CHECK (tipo IN ('curso', 'asesoria')),
  modalidad_fechas TEXT CHECK (modalidad_fechas IN ('fija', 'libre')),
  activo           BOOLEAN NOT NULL DEFAULT true,
  created_at       TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Cohortes / generaciones (solo para cursos con modalidad_fechas = 'fija')
CREATE TABLE grupos (
  id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  curso_id     UUID NOT NULL REFERENCES cursos(id) ON DELETE CASCADE,
  nombre       TEXT NOT NULL,
  fecha_inicio DATE NOT NULL,
  fecha_fin    DATE NOT NULL,
  cupo_max     SMALLINT NOT NULL CHECK (cupo_max > 0),
  created_at   TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Esquemas de pago disponibles por curso
CREATE TABLE planes_precio (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  curso_id    UUID NOT NULL REFERENCES cursos(id) ON DELETE CASCADE,
  tipo_cobro  TEXT NOT NULL CHECK (tipo_cobro IN ('semanal', 'mensual', 'unico')),
  monto       NUMERIC(10,2) NOT NULL CHECK (monto >= 0),
  activo      BOOLEAN NOT NULL DEFAULT true,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- ============================================================
-- INSCRIPCIONES
-- ============================================================

CREATE TABLE inscripciones (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  alumno_id       UUID NOT NULL REFERENCES alumnos(id) ON DELETE CASCADE,
  curso_id        UUID NOT NULL REFERENCES cursos(id) ON DELETE RESTRICT,
  grupo_id        UUID REFERENCES grupos(id) ON DELETE SET NULL,
  plan_precio_id  UUID NOT NULL REFERENCES planes_precio(id) ON DELETE RESTRICT,
  fecha_inscripcion TIMESTAMPTZ NOT NULL DEFAULT now(),
  estado          TEXT NOT NULL DEFAULT 'activa' CHECK (estado IN ('activa', 'pausada', 'finalizada', 'cancelada')),
  UNIQUE (alumno_id, curso_id)
);

-- ============================================================
-- ASESORÍAS (solo si cursos.tipo = 'asesoria')
-- ============================================================

-- Tarifas por duración de bloque
CREATE TABLE tarifas_asesoria (
  id                 UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  curso_id           UUID NOT NULL REFERENCES cursos(id) ON DELETE CASCADE,
  duracion_bloque    TEXT NOT NULL CHECK (duracion_bloque IN ('1h', '2h')),
  tarifa_individual  NUMERIC(10,2) NOT NULL CHECK (tarifa_individual >= 0),
  created_at         TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Sesiones de asesoría programadas
CREATE TABLE sesiones_asesoria (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  curso_id        UUID NOT NULL REFERENCES cursos(id) ON DELETE CASCADE,
  fecha           TIMESTAMPTZ NOT NULL,
  duracion_horas  NUMERIC(3,1) NOT NULL CHECK (duracion_horas > 0),
  es_grupal       BOOLEAN NOT NULL DEFAULT false,
  created_at      TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Participantes por sesión (1-3 alumnos)
CREATE TABLE sesion_participantes (
  id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  sesion_id  UUID NOT NULL REFERENCES sesiones_asesoria(id) ON DELETE CASCADE,
  alumno_id  UUID NOT NULL REFERENCES alumnos(id) ON DELETE CASCADE,
  monto      NUMERIC(10,2) NOT NULL CHECK (monto >= 0),
  UNIQUE (sesion_id, alumno_id)
);

-- ============================================================
-- CARGOS Y PAGOS
-- ============================================================

-- Tabla central: lo que un alumno debe (generada por inscripciones o sesiones)
CREATE TABLE cargos (
  id                       UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  alumno_id                UUID NOT NULL REFERENCES alumnos(id) ON DELETE RESTRICT,
  inscripcion_id           UUID REFERENCES inscripciones(id) ON DELETE SET NULL,
  sesion_participante_id   UUID REFERENCES sesion_participantes(id) ON DELETE SET NULL,
  concepto                 TEXT NOT NULL,
  monto                    NUMERIC(10,2) NOT NULL CHECK (monto >= 0),
  fecha_vencimiento        DATE NOT NULL,
  estado                   TEXT NOT NULL DEFAULT 'pendiente'
                           CHECK (estado IN ('pendiente', 'pagado', 'vencido', 'cancelado')),
  recordatorio_enviado     BOOLEAN NOT NULL DEFAULT false,
  fecha_ultimo_recordatorio TIMESTAMPTZ,
  created_at               TIMESTAMPTZ NOT NULL DEFAULT now(),

  -- XOR: debe tener exactamente una fuente de cargo
  CONSTRAINT cargos_source_check CHECK (
    (inscripcion_id IS NOT NULL AND sesion_participante_id IS NULL)
    OR
    (inscripcion_id IS NULL AND sesion_participante_id IS NOT NULL)
  )
);

-- Pagos registrados contra un cargo
CREATE TABLE pagos (
  id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  cargo_id     UUID NOT NULL REFERENCES cargos(id) ON DELETE RESTRICT,
  monto        NUMERIC(10,2) NOT NULL CHECK (monto > 0),
  fecha_pago   TIMESTAMPTZ NOT NULL DEFAULT now(),
  metodo_pago  TEXT NOT NULL CHECK (metodo_pago IN ('efectivo', 'transferencia', 'tarjeta', 'oxxo')),
  notas        TEXT,
  created_at   TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- ============================================================
-- ÍNDICES
-- ============================================================

CREATE INDEX idx_grupos_curso ON grupos(curso_id);
CREATE INDEX idx_planes_precio_curso ON planes_precio(curso_id);

CREATE INDEX idx_inscripciones_alumno ON inscripciones(alumno_id);
CREATE INDEX idx_inscripciones_curso ON inscripciones(curso_id);

CREATE INDEX idx_sesiones_asesoria_curso ON sesiones_asesoria(curso_id);
CREATE INDEX idx_sesion_participantes_sesion ON sesion_participantes(sesion_id);
CREATE INDEX idx_sesion_participantes_alumno ON sesion_participantes(alumno_id);

CREATE INDEX idx_cargos_alumno ON cargos(alumno_id);
CREATE INDEX idx_cargos_estado_vencimiento ON cargos(estado, fecha_vencimiento);
CREATE INDEX idx_cargos_inscripcion ON cargos(inscripcion_id);
CREATE INDEX idx_cargos_sesion_participante ON cargos(sesion_participante_id);

CREATE INDEX idx_pagos_cargo ON pagos(cargo_id);

-- ============================================================
-- ROW LEVEL SECURITY
-- ============================================================

ALTER TABLE cursos ENABLE ROW LEVEL SECURITY;
ALTER TABLE grupos ENABLE ROW LEVEL SECURITY;
ALTER TABLE planes_precio ENABLE ROW LEVEL SECURITY;
ALTER TABLE inscripciones ENABLE ROW LEVEL SECURITY;
ALTER TABLE tarifas_asesoria ENABLE ROW LEVEL SECURITY;
ALTER TABLE sesiones_asesoria ENABLE ROW LEVEL SECURITY;
ALTER TABLE sesion_participantes ENABLE ROW LEVEL SECURITY;
ALTER TABLE cargos ENABLE ROW LEVEL SECURITY;
ALTER TABLE pagos ENABLE ROW LEVEL SECURITY;

-- Catálogos públicos de lectura (alumnos ven cursos disponibles)
CREATE POLICY "cursos_public_read"
  ON cursos FOR SELECT USING (true);

CREATE POLICY "grupos_public_read"
  ON grupos FOR SELECT USING (true);

CREATE POLICY "planes_precio_public_read"
  ON planes_precio FOR SELECT USING (true);

CREATE POLICY "tarifas_asesoria_public_read"
  ON tarifas_asesoria FOR SELECT USING (true);

CREATE POLICY "sesiones_asesoria_public_read"
  ON sesiones_asesoria FOR SELECT USING (true);

-- Inscripciones: el alumno solo ve las suyas
CREATE POLICY "inscripciones_select_own"
  ON inscripciones FOR SELECT
  USING (alumno_id = auth.uid());

-- Participantes: el alumno solo ve sus asignaciones
CREATE POLICY "sesion_participantes_select_own"
  ON sesion_participantes FOR SELECT
  USING (alumno_id = auth.uid());

-- Cargos: el alumno solo ve los suyos
CREATE POLICY "cargos_select_own"
  ON cargos FOR SELECT
  USING (alumno_id = auth.uid());

-- Pagos: visibles a través del cargo del alumno
CREATE POLICY "pagos_select_own"
  ON pagos FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM cargos
      WHERE cargos.id = pagos.cargo_id
        AND cargos.alumno_id = auth.uid()
    )
  );

-- ============================================================
-- NOTA SOBRE ACCESO ADMINISTRATIVO
-- ============================================================
-- El acceso admin (CRUD completo) se implementará vía funciones RPC
-- SECURITY DEFINER (patrón consistente con get_all_profiles existente).
-- Funciones previstas:
--   admin_crear_grupo(curso_id, nombre, fecha_inicio, fecha_fin, cupo_max)
--   admin_crear_inscripcion(alumno_id, curso_id, plan_precio_id, grupo_id?)
--   admin_generar_cargos_inscripcion(inscripcion_id)
--   admin_registrar_pago(cargo_id, monto, metodo_pago, notas?)
--   admin_cambiar_plan(inscripcion_id, nuevo_plan_id)
--   admin_agendar_sesion(curso_id, fecha, duracion_horas, es_grupal)
--   admin_agregar_participante(sesion_id, alumno_id, monto?)
--   admin_get_cargos(alumno_id?) → vista administrativa de todos los cargos
