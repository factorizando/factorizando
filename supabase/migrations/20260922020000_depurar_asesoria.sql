-- Depurar las tablas de asesoría que nunca se usaron.
--
-- `sesiones_asesoria` y `sesion_participantes` se crearon en la migración 2 para
-- programar sesiones de asesoría, pero **ninguna línea de la app las toca**: las
-- asesorías se cobran con `tarifas_asesoria` + cargos (sueltos o de inscripción).
-- Su única huella era `cargos.sesion_participante_id` y la parte de asesoría del
-- check `cargos_source_check`.
--
-- Si algún día se programan sesiones de asesoría, se recrean con su diseño real
-- en vez de arrastrar estas dos tablas vacías.

-- 1. El check XOR menciona la columna; se quita antes de soltar la columna.
ALTER TABLE cargos DROP CONSTRAINT IF EXISTS cargos_source_check;

-- 2. La columna que las referenciaba (arrastra su índice y su FK).
ALTER TABLE cargos DROP COLUMN IF EXISTS sesion_participante_id;

-- 3. Las tablas (sus políticas RLS e índices se van con ellas).
--    `sesion_participantes` referencia a `sesiones_asesoria`, por eso va primero.
DROP TABLE IF EXISTS sesion_participantes;
DROP TABLE IF EXISTS sesiones_asesoria;

-- Nota: queda `cargos.inscripcion_id` como único origen posible de un cargo,
-- nullable a propósito (cargo suelto: material, cuota, ajuste).
