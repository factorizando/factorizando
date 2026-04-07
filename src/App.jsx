// src/App.jsx
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Preparatoria from "./pages/Preparatoria";
import Universidad from "./pages/Universidad";
import Cuestionario from "./pages/Cuestionario";
import ProtectedRoute from "./components/ProtectedRoute";
import Registro from "./pages/Registro";
import SelectorBloque from "./pages/SelectorBloque";
import ExaniI from "./pages/cuestionarios/ExaniI";
import ExaniII from "./pages/cuestionarios/ExaniII";
import Limites from "./data/teoria/limites.jsx";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        {/* ── Públicas ── */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/exani-i" element={<ExaniI />} />
        <Route path="/exani-ii" element={<ExaniII />} />

        {/* ── Protegidas ── */}
        <Route
          path="/preparatoria"
          element={
            <ProtectedRoute>
              <Preparatoria />
            </ProtectedRoute>
          }
        />
        <Route
          path="/universidad"
          element={
            <ProtectedRoute>
              <Universidad />
            </ProtectedRoute>
          }
        />
        <Route path="/teoria/limites" element={<Limites />} />

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
    </HashRouter>
  );
}
