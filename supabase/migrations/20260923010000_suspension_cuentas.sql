-- Suspensión de cuentas: cortar el acceso a una cuenta ya aprobada sin
-- confundirlo con el ciclo de la solicitud.
--
-- `estado_acceso` (`pendiente|aprobado|rechazado`) es la decisión de admisión y
-- no se toca aquí. La suspensión es una **capa aparte** sobre cuentas aprobadas,
-- pensada para tres casos de negocio: falta de pago, ban y fin del periodo de un
-- curso. Como es separada, reactivar es limpiar cuatro columnas y no hay que
-- rehacer la aprobación.
--
--   suspendido_en     → cuándo se cortó (NULL = no suspendida)
--   suspendido_hasta  → cuándo vence (NULL = indefinida)
--   motivo_suspension → texto que ve la persona en /cuenta-suspendida
--   suspension_origen → pago | ban | curso | manual (para clasificar/filtrar)
--
-- Acceso efectivo:
--   staff  OR (estado_acceso = 'aprobado'
--              AND (suspendido_en IS NULL
--                   OR (suspendido_hasta IS NOT NULL
--                       AND suspendido_hasta <= now())))
--
-- La suspensión es un gate de **navegación** (la aplica el cliente en
-- ProtectedRoute y en el enrutado post-login); no es una política RLS. El
-- contenido viaja en el bundle JS, así que cortar de verdad el acceso técnico
-- exigiría invalidar la sesión/cuenta.

ALTER TABLE profiles
  ADD COLUMN IF NOT EXISTS suspendido_en      TIMESTAMPTZ,
  ADD COLUMN IF NOT EXISTS suspendido_hasta   TIMESTAMPTZ,
  ADD COLUMN IF NOT EXISTS motivo_suspension  TEXT,
  ADD COLUMN IF NOT EXISTS suspension_origen  TEXT;

ALTER TABLE profiles DROP CONSTRAINT IF EXISTS profiles_suspension_origen_check;
ALTER TABLE profiles ADD CONSTRAINT profiles_suspension_origen_check
  CHECK (suspension_origen IS NULL
         OR suspension_origen IN ('pago', 'ban', 'curso', 'manual'));

-- Helpers: evitan repetir la regla de suspensión en cada consulta. `SECURITY
-- DEFINER` para poder llamarlas desde donde haga falta sin depender de la RLS
-- del llamador (mismo patrón que is_admin()/mi_alumno_id()).
CREATE OR REPLACE FUNCTION cuenta_suspendida(p_profile UUID DEFAULT auth.uid())
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM profiles
    WHERE id = p_profile
      AND suspendido_en IS NOT NULL
      AND (suspendido_hasta IS NULL OR suspendido_hasta > now())
  );
$$;
