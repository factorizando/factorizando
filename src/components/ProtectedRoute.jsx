// src/components/ProtectedRoute.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Wrapper que protege rutas privadas.
// Si el usuario NO tiene sesión activa, lo redirige al Login
// pasando el destino como parámetro (?dest=preparatoria|universidad)
// para que, al iniciar sesión, regrese a donde quería ir.
// ─────────────────────────────────────────────────────────────────────────────

import { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { supabase } from "../lib/supabase";

export default function ProtectedRoute({ children }) {
  const location  = useLocation();
  const [status, setStatus] = useState("loading"); // "loading" | "auth" | "unauth"

  useEffect(() => {
    // Check current session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setStatus(session ? "auth" : "unauth");
    });

    // Listen for auth changes (login / logout)
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setStatus(session ? "auth" : "unauth");
    });

    return () => subscription.unsubscribe();
  }, []);

  if (status === "loading") {
    return (
      <div style={{
        minHeight: "100vh", background: "#0e0f11",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <div style={{
          width: 32, height: 32, borderRadius: "50%",
          border: "2px solid rgba(59,158,255,.2)",
          borderTopColor: "#3b9eff",
          animation: "spin .7s linear infinite",
        }} />
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  if (status === "unauth") {
    // Extract the first path segment as destination (e.g. /preparatoria → preparatoria)
    const dest = location.pathname.replace(/^\//, "") || "preparatoria";
    return <Navigate to={`/login?dest=${dest}`} replace />;
  }

  return children;
}
