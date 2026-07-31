-- Periodo facturado en los cargos + fecha de inicio de clases en la inscripción.
--
-- Las semanas de cobro están ancladas al calendario (lunes a domingo), así que un
-- alumno que entra a media semana recibe menos clases por el mismo precio. Para
-- poder expresar "esta semana se cobró parcial" hacía falta guardar QUÉ periodo
-- cubre cada cargo; antes solo existía `fecha_vencimiento`.
--
-- El monto parcial se captura a mano (no hay fórmula): el sistema calcula y
-- guarda el periodo, marca el cargo como parcial y deja que el administrador
-- escriba el importe acordado.

-- Cuándo EMPIEZA a tomar clases, distinto de cuándo se registró la inscripción.
-- Se inscribe el viernes para empezar el lunes: son dos fechas diferentes.
ALTER TABLE inscripciones
  ADD COLUMN fecha_inicio_clases DATE;

ALTER TABLE cargos
  ADD COLUMN periodo_inicio DATE,
  ADD COLUMN periodo_fin    DATE,
  ADD COLUMN es_parcial     BOOLEAN NOT NULL DEFAULT false;

-- El periodo va completo o no va: nunca media pata.
ALTER TABLE cargos
  ADD CONSTRAINT cargos_periodo_completo CHECK (
    (periodo_inicio IS NULL AND periodo_fin IS NULL)
    OR (periodo_inicio IS NOT NULL AND periodo_fin IS NOT NULL
        AND periodo_fin >= periodo_inicio)
  );

-- Un cargo parcial es, por definición, parcial respecto de un periodo.
ALTER TABLE cargos
  ADD CONSTRAINT cargos_parcial_requiere_periodo CHECK (
    es_parcial = false OR periodo_inicio IS NOT NULL
  );

-- Para localizar el cargo de una semana concreta al generar la siguiente.
CREATE INDEX idx_cargos_periodo ON cargos (alumno_id, periodo_inicio);

COMMENT ON COLUMN cargos.periodo_inicio IS 'Primer día del periodo facturado (lunes, en cobro semanal).';
COMMENT ON COLUMN cargos.periodo_fin    IS 'Último día del periodo facturado (domingo, en cobro semanal).';
COMMENT ON COLUMN cargos.es_parcial     IS 'El alumno entró con el periodo empezado y se cobró un monto reducido.';
