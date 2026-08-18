// src/App.jsx
import { lazy, Suspense, useEffect, useState } from "react";
import { HashRouter, Routes, Route, useNavigate } from "react-router-dom";
import { supabase } from "./lib/supabase";
import { MANTENIMIENTO } from "./config";
import Proximamente from "./pages/Proximamente";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import ActualizacionDisponible from "./components/ActualizacionDisponible";

// ── Rutas diferidas ───────────────────────────────────────────────────────
// Todo lo que no es la portada ni el login se carga cuando se visita, no al
// abrir el sitio. Antes el bundle iba en un solo archivo de 8.4 MB —con
// three, jsxgraph, mathjs, recharts y todos los bancos de contenido dentro—
// y hasta quien solo entraba a la portada se lo bajaba completo.
//
// Cada `lazy` corta un pedazo del bundle: la librería pesada que use una
// página se va al mismo pedazo y solo viaja con ella. Requisito: el módulo
// tiene que exportar el componente por omisión (`export default`).
const Registro             = lazy(() => import("./pages/Registro"));
const CompletarPerfil      = lazy(() => import("./pages/CompletarPerfil"));
const NuevaContrasena      = lazy(() => import("./pages/NuevaContrasena"));
const Preparatoria         = lazy(() => import("./pages/Preparatoria"));
const Universidad          = lazy(() => import("./pages/Universidad"));
const Cuestionario         = lazy(() => import("./pages/Cuestionario"));
const SelectorBloque       = lazy(() => import("./pages/SelectorBloque"));
const Admin                = lazy(() => import("./pages/Admin"));
const ExaniI               = lazy(() => import("./pages/cuestionarios/ExaniI"));
const ExaniII              = lazy(() => import("./pages/cuestionarios/ExaniII"));
const Limites              = lazy(() => import("./data/teoria/limites.jsx"));
const Continuidad          = lazy(() => import("./data/teoria/continuidad.jsx"));
const ErroresFrecuentes    = lazy(() => import("./data/teoria/errores-frecuentes.jsx"));
const Oracion              = lazy(() => import("./data/teoria/estructuraoracion.jsx"));
const FraccionesDecimales  = lazy(() => import("./data/teoria/fracciones-decimales.jsx"));
const Cinematica           = lazy(() => import("./data/teoria/cinematica-velocidad-aceleracion.jsx"));
const LeyesNewton          = lazy(() => import("./data/teoria/leyes-de-newton.jsx"));
const Quimica              = lazy(() => import("./data/teoria/quimica-unam.jsx"));
const PresentacionDirector = lazy(() => import("./pages/PresentacionDirector.jsx"));
const PresentacionAlumno   = lazy(() => import("./pages/PresentacionAlumno.jsx"));
const PresentacionVer      = lazy(() => import("./pages/PresentacionVer.jsx"));
const DocumentoVer         = lazy(() => import("./pages/DocumentoVer.jsx"));
const CursoVer             = lazy(() => import("./pages/CursoVer.jsx"));
const MateriaVer           = lazy(() => import("./pages/MateriaVer.jsx"));
const TemaPreview          = lazy(() => import("./pages/TemaPreview.jsx"));
const AdminAlumnos         = lazy(() => import("./pages/admin/AdminAlumnos.jsx"));
const AdminTutores         = lazy(() => import("./pages/admin/AdminTutores.jsx"));
const AdminInscripciones   = lazy(() => import("./pages/admin/AdminInscripciones.jsx"));
const AdminCargos          = lazy(() => import("./pages/admin/AdminCargos.jsx"));
const AdminSuscripciones   = lazy(() => import("./pages/admin/AdminSuscripciones.jsx"));
const AdminCursos          = lazy(() => import("./pages/admin/AdminCursos.jsx"));
const AdminAlumnoDetalle   = lazy(() => import("./pages/admin/AdminAlumnoDetalle.jsx"));
const Regularizacion       = lazy(() => import("./pages/Regularizacion.jsx"));
const TallerVer            = lazy(() => import("./pages/TallerVer.jsx"));
const MisInscripciones     = lazy(() => import("./pages/alumno/MisInscripciones.jsx"));
const MiSuscripcion        = lazy(() => import("./pages/alumno/MiSuscripcion.jsx"));
const Refrigerios          = lazy(() => import("./pages/Refrigerios.jsx"));
const PreviewComprobante   = lazy(() => import("./pages/PreviewComprobante.jsx"));
const Decodificacion       = lazy(() => import("./components/talleres/decodificacion/Decodificacion.jsx"));
const PizzasCajasVasos     = lazy(() => import("./components/talleres/pizzas-cajas-vasos/PizzasCajasVasos.jsx"));
const ElTerreno            = lazy(() => import("./components/talleres/el-terreno/ElTerreno.jsx"));

// Lo que se ve mientras baja el pedazo de una ruta. En una conexión de
// salón esto dura un parpadeo; en la primera visita, poco más.
function Cargando() {
  return (
    <div style={{
      minHeight: "100vh", display: "grid", placeItems: "center",
      background: "#0e0f11", color: "#6f8296",
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      fontSize: 15, letterSpacing: ".04em",
    }}>
      Cargando…
    </div>
  );
}

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
        <Route path="/materia/:slug" element={<MateriaVer />} />
        <Route path="/refrigerios" element={<Refrigerios />} />
        {/* Banco de pruebas del comprobante. Solo en dev: import.meta.env.DEV
            queda en `false` al compilar, así que la rama y su import se podan. */}
        {import.meta.env.DEV && (
          <Route path="/preview-comprobante" element={<PreviewComprobante />} />
        )}
        {/* Igual que el anterior: el taller de decodificación vive detrás de
            /regularizacion, que pide sesión de admin. Esto deja iterarlo sin
            entrar, en modo libre (sin alumno, no escribe nada). */}
        {import.meta.env.DEV && (
          <Route
            path="/preview-decodificacion"
            element={
              <div style={{ height: "100vh" }}>
                <Decodificacion alumnoId={null} />
              </div>
            }
          />
        )}
        {import.meta.env.DEV && (
          <Route
            path="/preview-pizzas-cajas-vasos"
            element={
              <div style={{ height: "100vh" }}>
                <PizzasCajasVasos alumnoId={null} />
              </div>
            }
          />
        )}
        {import.meta.env.DEV && (
          <Route
            path="/preview-el-terreno"
            element={
              <div style={{ height: "100vh" }}>
                <ElTerreno alumnoId={null} />
              </div>
            }
          />
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
      <Suspense fallback={<Cargando />}>
        {MANTENIMIENTO ? <Mantenimiento /> : <AppRoutes />}
      </Suspense>
    </HashRouter>
  );
}
