-- Notas libres en el cargo.
--
-- `periodo_inicio`/`periodo_fin` dicen QUÉ fechas cubre un cargo, pero no cómo
-- lo nombra quien cobra. Al crear un cargo a mano hace falta poder escribir
-- "semana 2", "mes 1" o la referencia que use el administrador, sin obligarlo a
-- meterlo dentro del concepto (que es el texto que sale impreso en el
-- comprobante). `pagos` ya tenía una columna así; `cargos` no.

ALTER TABLE cargos ADD COLUMN notas TEXT;

COMMENT ON COLUMN cargos.notas IS
  'Anotación libre del administrador (p. ej. "semana 2", "mes 1"). No aparece en el comprobante.';
