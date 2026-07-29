-- Migración: Cascade delete en pagos.cargo_id
-- Permite eliminar un cargo y sus pagos asociados en cascada,
-- para corregir errores humanos en el registro de cargos.

ALTER TABLE pagos DROP CONSTRAINT IF EXISTS pagos_cargo_id_fkey;
ALTER TABLE pagos ADD CONSTRAINT pagos_cargo_id_fkey
  FOREIGN KEY (cargo_id) REFERENCES cargos(id) ON DELETE CASCADE;
