// src/App.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Estructura de rutas del proyecto Factorizando.
// Usa React Router v6.
// ─────────────────────────────────────────────────────────────────────────────

import { HashRouter, Routes, Route } from "react-router-dom";
import Home          from "./pages/Home";
import Login         from "./pages/Login";
import Preparatoria  from "./pages/Preparatoria";
import Universidad   from "./pages/Universidad";
import ProtectedRoute from "./components/ProtectedRoute";
import Divisibilidad from "./pages/cuestionarios/Divisibilidad";
import SumaEnteros from "./pages/cuestionarios/SumaEnteros";
import LaCelula from "./pages/cuestionarios/LaCelula";
import ProductoEnteros from "./pages/cuestionarios/ProductoEnteros";
import EnterosPrepa from "./pages/cuestionarios/EnterosPrepa";
import SintaxisEspanol from "./pages/cuestionarios/SintaxisEspanol";
import PrimosMCDMCM from "./pages/cuestionarios/PrimosMCDMCM";
import OrtografiaGrafias from "./pages/cuestionarios/OrtografiaGrafias";
import CelulaOrganelos from "./pages/cuestionarios/CelulaOrganelos";
import SinonimosAntonimosAnalogias from "./pages/cuestionarios/SinonimosAntonimosAnalogias";





// Cuestionarios — los irás agregando aquí conforme los crees
// import Cuestionario1 from "./pages/cuestionarios/Cuestionario1";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        {/* Pública */}
        <Route path="/"      element={<Home />} />
        <Route path="/login" element={<Login />} />

        {/* Protegidas — requieren sesión activa */}
        <Route path="/preparatoria" element={
          <ProtectedRoute><Preparatoria /></ProtectedRoute>
        } />
        <Route path="/universidad" element={
          <ProtectedRoute><Universidad /></ProtectedRoute>
        } />
        <Route path="/cuestionario/divisibilidad" element={
          <ProtectedRoute><Divisibilidad /></ProtectedRoute>
        } />
        <Route path="/cuestionario/suma-enteros" element={
          <ProtectedRoute><SumaEnteros /></ProtectedRoute>
        } />
        <Route path="/cuestionario/la-celula" element={
          <ProtectedRoute><LaCelula /></ProtectedRoute>
        } />
        <Route path="/cuestionario/producto-enteros" element={
          <ProtectedRoute><ProductoEnteros /></ProtectedRoute>
        } />
        <Route path="/cuestionario/enteros-prepa" element={
          <ProtectedRoute><EnterosPrepa /></ProtectedRoute>
        } />
        <Route path="/cuestionario/sintaxis-espanol" element={
          <ProtectedRoute><SintaxisEspanol /></ProtectedRoute>
        } />
        <Route path="/cuestionario/primos-mcd-mcm" element={
          <ProtectedRoute><PrimosMCDMCM /></ProtectedRoute>
        } />
        <Route path="/cuestionario/ortografia-grafias" element={
          <ProtectedRoute><OrtografiaGrafias /></ProtectedRoute>
        } />
        <Route path="/cuestionario/celula-organelos" element={
          <ProtectedRoute><CelulaOrganelos /></ProtectedRoute>
        } />
        <Route path="/cuestionario/sinonimos-antonimos-analogias" element={
          <ProtectedRoute><SinonimosAntonimosAnalogias /></ProtectedRoute>
        } />

        {/* ── Cuestionarios ──────────────────────────────────────────────────
         *  Para agregar un cuestionario nuevo:
         *    1. Crea el archivo en src/pages/cuestionarios/MiCuestionario.jsx
         *    2. Importa el componente arriba (línea comentada de ejemplo)
         *    3. Agrega la ruta aquí, dentro de ProtectedRoute
         *
         * Ejemplo:
         *   <Route path="/cuestionario/algebra-1" element={
         *     <ProtectedRoute><Cuestionario1 /></ProtectedRoute>
         *   } />
         * ───────────────────────────────────────────────────────────────────
         */}

        {/* 404 */}
        <Route path="*" element={
          <div style={{
            minHeight:"100vh", background:"#0e0f11", color:"#e8eaf0",
            display:"flex", flexDirection:"column",
            alignItems:"center", justifyContent:"center", gap:"1rem",
            fontFamily:"'DM Sans', sans-serif",
          }}>
            <span style={{ fontSize:"4rem" }}>404</span>
            <p style={{ color:"#5a6070" }}>Página no encontrada</p>
            <a href="/" style={{ color:"#3b9eff", textDecoration:"none" }}>← Regresar</a>
          </div>
        } />
      </Routes>
    </HashRouter>
  );
}
