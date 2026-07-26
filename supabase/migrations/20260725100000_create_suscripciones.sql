-- Migración 3: Suscripción a la plataforma
-- Acceso general a contenido (presentaciones, cuestionarios) mediante pago mensual recurrente.
-- Independiente del módulo de cursos/asesorías; comparte únicamente la tabla alumnos.

-- ============================================================
-- PLANES DE SUSCRIPCIÓN
-- ============================================================

CREATE TABLE planes_suscripcion (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  nombre          TEXT NOT NULL,
  precio_mensual  NUMERIC(10,2) NOT NULL CHECK (precio_mensual >= 0),
  descripcion     TEXT,
  activo          BOOLEAN NOT NULL DEFAULT true,
  created_at      TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- ============================================================
-- SUSCRIPCIONES
-- ============================================================

CREATE TABLE suscripciones (
  id                       UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  alumno_id                UUID NOT NULL REFERENCES alumnos(id) ON DELETE CASCADE,
  plan_id                  UUID NOT NULL REFERENCES planes_suscripcion(id) ON DELETE RESTRICT,
  fecha_inicio             DATE NOT NULL DEFAULT current_date,
  fecha_vencimiento_actual DATE NOT NULL,
  estado                   TEXT NOT NULL DEFAULT 'activa'
                           CHECK (estado IN ('activa', 'vencida', 'cancelada', 'pausada')),
  auto_renovar             BOOLEAN NOT NULL DEFAULT true,
  metodo_pago              TEXT CHECK (metodo_pago IN ('efectivo', 'transferencia', 'tarjeta', 'oxxo')),
  created_at               TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Un alumno no puede tener dos suscripciones activas al mismo tiempo
CREATE UNIQUE INDEX idx_suscripciones_alumno_activa
  ON suscripciones(alumno_id)
  WHERE estado = 'activa';

-- ============================================================
-- PAGOS DE SUSCRIPCIÓN
-- ============================================================

CREATE TABLE pagos_suscripcion (
  id                UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  suscripcion_id    UUID NOT NULL REFERENCES suscripciones(id) ON DELETE CASCADE,
  monto             NUMERIC(10,2) NOT NULL CHECK (monto >= 0),
  fecha_pago        TIMESTAMPTZ NOT NULL DEFAULT now(),
  periodo_cubierto  TEXT NOT NULL,  -- ej. "Agosto 2026"
  estado            TEXT NOT NULL DEFAULT 'pendiente'
                    CHECK (estado IN ('pagado', 'pendiente', 'fallido')),
  created_at        TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- ============================================================
-- ÍNDICES
-- ============================================================

CREATE INDEX idx_suscripciones_alumno ON suscripciones(alumno_id);
CREATE INDEX idx_suscripciones_estado_vencimiento ON suscripciones(estado, fecha_vencimiento_actual);
CREATE INDEX idx_pagos_suscripcion_suscripcion ON pagos_suscripcion(suscripcion_id);
CREATE INDEX idx_pagos_suscripcion_estado ON pagos_suscripcion(estado);

-- ============================================================
-- ROW LEVEL SECURITY
-- ============================================================

ALTER TABLE planes_suscripcion ENABLE ROW LEVEL SECURITY;
ALTER TABLE suscripciones ENABLE ROW LEVEL SECURITY;
ALTER TABLE pagos_suscripcion ENABLE ROW LEVEL SECURITY;

-- Planes: catálogo público de lectura
CREATE POLICY "planes_suscripcion_public_read"
  ON planes_suscripcion FOR SELECT USING (true);

-- Suscripciones: el alumno solo ve las suyas
CREATE POLICY "suscripciones_select_own"
  ON suscripciones FOR SELECT
  USING (alumno_id = auth.uid());

-- Pagos de suscripción: visibles a través de la suscripción del alumno
CREATE POLICY "pagos_suscripcion_select_own"
  ON pagos_suscripcion FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM suscripciones
      WHERE suscripciones.id = pagos_suscripcion.suscripcion_id
        AND suscripciones.alumno_id = auth.uid()
    )
  );

-- ============================================================
-- FUNCIÓN RPC: verificar acceso de suscripción
-- ============================================================
-- Devuelve true si el alumno tiene una suscripción activa y vigente.
-- Uso desde el frontend: const { data } = await supabase.rpc('tiene_suscripcion_activa')

CREATE OR REPLACE FUNCTION tiene_suscripcion_activa(p_alumno_id UUID DEFAULT auth.uid())
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
AS $$
  SELECT EXISTS (
    SELECT 1 FROM suscripciones
    WHERE alumno_id = p_alumno_id
      AND estado = 'activa'
      AND fecha_vencimiento_actual >= current_date
  );
$$;

-- ============================================================
-- NOTA SOBRE ACCESO ADMINISTRATIVO
-- ============================================================
-- El acceso admin se implementará vía funciones RPC SECURITY DEFINER:
--   admin_crear_suscripcion(alumno_id, plan_id, metodo_pago)
--   admin_registrar_pago_suscripcion(suscripcion_id, monto, metodo_pago, periodo_cubierto)
--   admin_cancelar_suscripcion(suscripcion_id)
--   admin_get_suscripciones(estado?, alumno_id?) → vista administrativa
