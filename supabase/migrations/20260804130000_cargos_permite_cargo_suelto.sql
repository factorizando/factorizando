-- Permitir cargos sin inscripción ni sesión de asesoría.
--
-- `cargos_source_check` era un XOR: exigía que todo cargo viniera exactamente de
-- una inscripción o de una sesión de asesoría. Pero el panel ofrece un tercer
-- camino desde el principio —el botón "+ Nuevo cargo" de AdminCargos— para
-- cobros que no cuelgan de ninguna de las dos: material, una cuota suelta, un
-- ajuste. Ese insert no manda ninguna de las dos columnas, así que violaba la
-- restricción y fallaba siempre; el código solo hacía console.error, de modo que
-- en pantalla no pasaba nada.
--
-- Se relaja a "no puede tener DOS orígenes a la vez", que es lo que de verdad
-- había que impedir: un cargo no puede venir de una inscripción y de una sesión
-- al mismo tiempo. Cero orígenes ahora es válido y significa "cargo manual".

ALTER TABLE cargos DROP CONSTRAINT IF EXISTS cargos_source_check;

ALTER TABLE cargos
  ADD CONSTRAINT cargos_source_check CHECK (
    NOT (inscripcion_id IS NOT NULL AND sesion_participante_id IS NOT NULL)
  );

COMMENT ON CONSTRAINT cargos_source_check ON cargos IS
  'Un cargo puede venir de una inscripción, de una sesión de asesoría, o de ninguna (cargo manual), pero nunca de las dos a la vez.';
