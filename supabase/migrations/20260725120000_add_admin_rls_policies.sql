-- Migración 4: Políticas RLS para acceso administrativo
-- Crea la función is_admin() y agrega políticas de CRUD completo
-- para rol = 'admin' en todas las tablas de los módulos 1, 2 y 3.

-- ============================================================
-- FUNCIÓN HELPER: is_admin()
-- ============================================================

CREATE OR REPLACE FUNCTION is_admin()
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
AS $$
  SELECT EXISTS (
    SELECT 1 FROM profiles WHERE id = auth.uid() AND rol = 'admin'
  );
$$;

-- ============================================================
-- MÓDULO 1: alumnos, tutores, alumno_tutor, contactos_emergencia
-- ============================================================

-- alumnos: admin ve y modifica todos los registros
CREATE POLICY "alumnos_admin_all"
  ON alumnos FOR ALL
  USING (is_admin());

-- tutores: admin ve y modifica todos los registros
CREATE POLICY "tutores_admin_all"
  ON tutores FOR ALL
  USING (is_admin());

-- alumno_tutor: admin gestiona todos los vínculos
CREATE POLICY "alumno_tutor_admin_all"
  ON alumno_tutor FOR ALL
  USING (is_admin());

-- contactos_emergencia: admin gestiona todos los contactos
CREATE POLICY "contactos_emergencia_admin_all"
  ON contactos_emergencia FOR ALL
  USING (is_admin());

-- ============================================================
-- MÓDULO 2: cursos, grupos, planes_precio, inscripciones,
--           tarifas_asesoria, sesiones_asesoria,
--           sesion_participantes, cargos, pagos
-- ============================================================

-- cursos: admin CRUD completo
CREATE POLICY "cursos_admin_all"
  ON cursos FOR ALL
  USING (is_admin());

-- grupos: admin CRUD completo
CREATE POLICY "grupos_admin_all"
  ON grupos FOR ALL
  USING (is_admin());

-- planes_precio: admin CRUD completo
CREATE POLICY "planes_precio_admin_all"
  ON planes_precio FOR ALL
  USING (is_admin());

-- inscripciones: admin CRUD completo
CREATE POLICY "inscripciones_admin_all"
  ON inscripciones FOR ALL
  USING (is_admin());

-- tarifas_asesoria: admin CRUD completo
CREATE POLICY "tarifas_asesoria_admin_all"
  ON tarifas_asesoria FOR ALL
  USING (is_admin());

-- sesiones_asesoria: admin CRUD completo
CREATE POLICY "sesiones_asesoria_admin_all"
  ON sesiones_asesoria FOR ALL
  USING (is_admin());

-- sesion_participantes: admin CRUD completo
CREATE POLICY "sesion_participantes_admin_all"
  ON sesion_participantes FOR ALL
  USING (is_admin());

-- cargos: admin CRUD completo
CREATE POLICY "cargos_admin_all"
  ON cargos FOR ALL
  USING (is_admin());

-- pagos: admin CRUD completo
CREATE POLICY "pagos_admin_all"
  ON pagos FOR ALL
  USING (is_admin());

-- ============================================================
-- MÓDULO 3: planes_suscripcion, suscripciones, pagos_suscripcion
-- ============================================================

-- planes_suscripcion: admin CRUD completo
CREATE POLICY "planes_suscripcion_admin_all"
  ON planes_suscripcion FOR ALL
  USING (is_admin());

-- suscripciones: admin CRUD completo
CREATE POLICY "suscripciones_admin_all"
  ON suscripciones FOR ALL
  USING (is_admin());

-- pagos_suscripcion: admin CRUD completo
CREATE POLICY "pagos_suscripcion_admin_all"
  ON pagos_suscripcion FOR ALL
  USING (is_admin());

-- ============================================================
-- POLÍTICAS DE LECTURA ADMIN (SELECT)
-- ============================================================
-- Las políticas ALL ya cubren SELECT para admin.
-- Pero para tablas donde el alumno solo ve lo propio,
-- necesitamos que el admin vea TODO. Las políticas ALL
-- de arriba ya lo permiten porque ALL incluye SELECT.

-- Verificación: el admin puede leer todos los profiles
-- (consistente con get_all_profiles existente)
CREATE POLICY "profiles_admin_select"
  ON profiles FOR SELECT
  USING (is_admin());
