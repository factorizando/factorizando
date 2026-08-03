// src/App.jsx
import { useEffect, useState } from "react";
import { HashRouter, Routes, Route, useNavigate } from "react-router-dom";
import { supabase } from "./lib/supabase";
import { MANTENIMIENTO } from "./config";
import Proximamente from "./pages/Proximamente";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Registro from "./pages/Registro";
import CompletarPerfil from "./pages/CompletarPerfil";
import NuevaContrasena from "./pages/NuevaContrasena";
import Preparatoria from "./pages/Preparatoria";
import Universidad from "./pages/Universidad";
import Cuestionario from "./pages/Cuestionario";
import ProtectedRoute from "./components/ProtectedRoute";
import ActualizacionDisponible from "./components/ActualizacionDisponible";
import SelectorBloque from "./pages/SelectorBloque";
import Admin from "./pages/Admin";
import ExaniI from "./pages/cuestionarios/ExaniI";
import ExaniII from "./pages/cuestionarios/ExaniII";
import Limites from "./data/teoria/limites.jsx";
import Continuidad from "./data/teoria/continuidad.jsx";
import ErroresFrecuentes from "./data/teoria/errores-frecuentes.jsx";
import Oracion from "./data/teoria/estructuraoracion.jsx";
import FraccionesDecimales from "./data/teoria/fracciones-decimales.jsx";
import Cinematica from "./data/teoria/cinematica-velocidad-aceleracion.jsx";
import LeyesNewton from "./data/teoria/leyes-de-newton.jsx";
import Quimica from "./data/teoria/quimica-unam.jsx";
import PresentacionDirector from "./pages/PresentacionDirector.jsx";
import PresentacionAlumno from "./pages/PresentacionAlumno.jsx";
import PresentacionVer from "./pages/PresentacionVer.jsx";
import DocumentoVer from "./pages/DocumentoVer.jsx";
import CursoVer from "./pages/CursoVer.jsx";
import TemaPreview from "./pages/TemaPreview.jsx";
import AdminAlumnos from "./pages/admin/AdminAlumnos.jsx";
import AdminTutores from "./pages/admin/AdminTutores.jsx";
import AdminInscripciones from "./pages/admin/AdminInscripciones.jsx";
import AdminCargos from "./pages/admin/AdminCargos.jsx";
import AdminSuscripciones from "./pages/admin/AdminSuscripciones.jsx";
import AdminCursos from "./pages/admin/AdminCursos.jsx";
import AdminAlumnoDetalle from "./pages/admin/AdminAlumnoDetalle.jsx";
import Regularizacion from "./pages/Regularizacion.jsx";
import TallerVer from "./pages/TallerVer.jsx";
import MisInscripciones from "./pages/alumno/MisInscripciones.jsx";
import MiSuscripcion from "./pages/alumno/MiSuscripcion.jsx";
import Refrigerios from "./pages/Refrigerios.jsx";
import PreviewComprobante from "./pages/PreviewComprobante.jsx";

// Detecta el evento de recuperación de contraseña (al abrir el enlace del correo)
// y lleva al usuario a la pantalla para fijar la nueva contraseña.
function RecoveryWatcher() {
  const navigate = useNavigate();
  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event) => {
      if (event === "PASSWORD_RECOVERY") navigate("/nueva-contrasena");
    });
    return () => subscription.unsubscribe();
  }, [navigate]);
  return null;
}

function AppRoutes() {
  return (
      <Routes>
        {/* ── Públicas ── */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/completar-perfil" element={<CompletarPerfil />} />
        <Route path="/nueva-contrasena" element={<NuevaContrasena />} />
        <Route path="/exani-i" element={<ExaniI />} />
        <Route path="/exani-ii" element={<ExaniII />} />
        <Route path="/documento/:id" element={<DocumentoVer />} />
        <Route path="/curso/:id" element={<CursoVer />} />
        <Route path="/refrigerios" element={<Refrigerios />} />
        {/* Banco de pruebas del comprobante. Solo en dev: import.meta.env.DEV
            queda en `false` al compilar, así que la rama y su import se podan. */}
        {import.meta.env.DEV && (
          <Route path="/preview-comprobante" element={<PreviewComprobante />} />
        )}

        {/* ── Protegidas ── */}
        <Route
          path="/preparatoria"
          element={
            <ProtectedRoute requiredNivel="preparatoria">
              <Preparatoria />
            </ProtectedRoute>
          }
        />
        <Route
          path="/universidad"
          element={
            <ProtectedRoute requiredNivel="universidad">
              <Universidad />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <ProtectedRoute requiredNivel="admin">
              <Admin />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/alumnos"
          element={
            <ProtectedRoute requiredNivel="admin">
              <AdminAlumnos />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/tutores"
          element={
            <ProtectedRoute requiredNivel="admin">
              <AdminTutores />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/inscripciones"
          element={
            <ProtectedRoute requiredNivel="admin">
              <AdminInscripciones />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/cargos"
          element={
            <ProtectedRoute requiredNivel="admin">
              <AdminCargos />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/suscripciones"
          element={
            <ProtectedRoute requiredNivel="admin">
              <AdminSuscripciones />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/cursos"
          element={
            <ProtectedRoute requiredNivel="admin">
              <AdminCursos />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/alumnos/:id"
          element={
            <ProtectedRoute requiredNivel="admin">
              <AdminAlumnoDetalle />
            </ProtectedRoute>
          }
        />
        {/* ── Regularización (talleres, solo admin) ── */}
        <Route
          path="/regularizacion"
          element={
            <ProtectedRoute requiredNivel="admin">
              <Regularizacion />
            </ProtectedRoute>
          }
        />
        <Route
          path="/regularizacion/:id"
          element={
            <ProtectedRoute requiredNivel="admin">
              <TallerVer />
            </ProtectedRoute>
          }
        />
        <Route
          path="/alumno/inscripciones"
          element={
            <ProtectedRoute>
              <MisInscripciones />
            </ProtectedRoute>
          }
        />
        <Route
          path="/alumno/suscripcion"
          element={
            <ProtectedRoute>
              <MiSuscripcion />
            </ProtectedRoute>
          }
        />
        <Route path="/teoria/limites" element={<Limites />} />
        <Route path="/teoria/continuidad" element={<Continuidad />} />
        <Route path="/teoria/estructuraoracion" element={<Oracion />} />
        <Route
          path="/teoria/fracciones-decimales"
          element={<FraccionesDecimales />}
        />
        <Route
          path="/teoria/errores-frecuentes"
          element={<ErroresFrecuentes />}
        />
        <Route
          path="/teoria/cinematica-velocidad-aceleracion"
          element={<Cinematica />}
        />
        <Route path="/teoria/leyes-de-newton" element={<LeyesNewton />} />
        <Route path="/teoria/quimica-unam" element={<Quimica />} />

        {/* ── Presentaciones ── */}
        {/* Director (protegido): /presentacion/:id */}
        <Route
          path="/presentacion/:id"
          element={
            <ProtectedRoute>
              <PresentacionDirector />
            </ProtectedRoute>
          }
        />
        {/* Alumno en vivo (requiere auth): /clase */}
        <Route
          path="/clase"
          element={
            <ProtectedRoute>
              <PresentacionAlumno />
            </ProtectedRoute>
          }
        />
        {/* Repaso autónomo (requiere auth): /ver/:id */}
        <Route
          path="/ver/:id"
          element={
            <ProtectedRoute>
              <PresentacionVer />
            </ProtectedRoute>
          }
        />
        {/* Preview temporal de temas */}
        <Route path="/tema-preview" element={<TemaPreview />} />

        {/* ── Selector de bloque ── */}
        <Route
          path="/selector/:id"
          element={
            <ProtectedRoute>
              <SelectorBloque />
            </ProtectedRoute>
          }
        />

        {/* ── Cuestionario dinámico ── */}
        <Route
          path="/cuestionario/:id"
          element={
            <ProtectedRoute>
              <Cuestionario />
            </ProtectedRoute>
          }
        />

        {/* ── 404 ── */}
        <Route
          path="*"
          element={
            <div
              style={{
                minHeight: "100vh",
                background: "#0e0f11",
                color: "#e8eaf0",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "1rem",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              <span style={{ fontSize: "4rem" }}>404</span>
              <p style={{ color: "#5a6070" }}>Página no encontrada</p>
              <a href="/" style={{ color: "#3b9eff", textDecoration: "none" }}>
                ← Regresar
              </a>
            </div>
          }
        />
      </Routes>
  );
}

// Gate de mantenimiento: mientras MANTENIMIENTO sea true, el público ve
// "Próximamente"; solo una sesión con rol=admin obtiene la app completa.
// /login y /nueva-contrasena quedan accesibles para poder autenticarse.
function Mantenimiento() {
  const [esAdmin, setEsAdmin] = useState(null); // null=cargando, bool

  useEffect(() => {
    let cancelled = false;

    async function check() {
      try {
        const sessionPromise = supabase.auth.getSession();
        const timeoutPromise = new Promise((_, reject) =>
          setTimeout(() => reject(new Error("timeout")), 5000)
        );
        const { data: { session } } = await Promise.race([sessionPromise, timeoutPromise]);
        if (cancelled) return;
        if (!session) { setEsAdmin(false); return; }
        const { data } = await supabase
          .from("profiles").select("rol").eq("id", session.user.id).single();
        if (!cancelled) setEsAdmin(data?.rol === "admin");
      } catch {
        if (!cancelled) setEsAdmin(false);
      }
    }

    const { data: { subscription } } = supabase.auth.onAuthStateChange(() => check());
    return () => { cancelled = true; subscription.unsubscribe(); };
  }, []);

  if (esAdmin === true) return <AppRoutes />;

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/nueva-contrasena" element={<NuevaContrasena />} />
      <Route path="*" element={<Proximamente cargando={esAdmin === null} />} />
    </Routes>
  );
}

export default function App() {
  return (
    <HashRouter>
      <RecoveryWatcher />
      {/* Fuera del gate de mantenimiento: el aviso debe salir también en
          "Próximamente" y en /login, que es donde más se recarga. */}
      <ActualizacionDisponible />
      {MANTENIMIENTO ? <Mantenimiento /> : <AppRoutes />}
    </HashRouter>
  );
}
