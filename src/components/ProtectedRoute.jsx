// src/components/ProtectedRoute.jsx
import { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { supabase } from "../lib/supabase";

const Spinner = () => (
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

// requiredNivel: "preparatoria" | "universidad" | "admin" | null (solo requiere auth)
// Autorización por `rol` (alumno|profesor|admin); admin/profesor ven todo el
// contenido. Si el perfil está incompleto, se manda a /completar-perfil.
export default function ProtectedRoute({ children, requiredNivel = null }) {
  const location = useLocation();
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    let cancelled = false;

    async function check() {
      const { data: { session } } = await supabase.auth.getSession();
      if (cancelled) return;

      if (!session) { setStatus("unauth"); return; }

      const { data: profile } = await supabase
        .from("profiles")
        .select("rol, nivel, perfil_completo")
        .eq("id", session.user.id)
        .single();
      if (cancelled) return;

      if (!profile) { setStatus("unauthorized"); return; }
      if (!profile.perfil_completo) { setStatus("incompleto"); return; }

      if (!requiredNivel) { setStatus("ok"); return; }

      const esAdmin = profile.rol === "admin";
      const esProfesor = profile.rol === "profesor";
      if (requiredNivel === "admin") {
        setStatus(esAdmin ? "ok" : "unauthorized");
      } else if (esAdmin || esProfesor || profile.nivel === requiredNivel) {
        setStatus("ok");
      } else {
        setStatus("unauthorized");
      }
    }

    check();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event) => {
      if (event === "SIGNED_OUT" && !cancelled) setStatus("unauth");
    });
    return () => { cancelled = true; subscription.unsubscribe(); };
  }, [requiredNivel]);

  if (status === "loading") return <Spinner />;

  if (status === "unauth") {
    const dest = location.pathname.replace(/^\//, "") || "preparatoria";
    return <Navigate to={`/login?dest=${dest}`} replace />;
  }

  if (status === "incompleto") return <Navigate to="/completar-perfil" replace />;

  if (status === "unauthorized") return <Navigate to="/" replace />;

  return children;
}
