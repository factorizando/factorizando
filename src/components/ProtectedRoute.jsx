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
export default function ProtectedRoute({ children, requiredNivel = null }) {
  const location = useLocation();
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    let cancelled = false;

    const check = async (session) => {
      if (!session) {
        if (!cancelled) setStatus("unauth");
        return;
      }
      if (!requiredNivel) {
        if (!cancelled) setStatus("ok");
        return;
      }
      const { data: profile } = await supabase
        .from("profiles")
        .select("nivel")
        .eq("id", session.user.id)
        .single();
      if (cancelled) return;
      if (!profile) { setStatus("unauthorized"); return; }
      if (profile.nivel === "admin" || profile.nivel === requiredNivel) {
        setStatus("ok");
      } else {
        setStatus("unauthorized");
      }
    };

    supabase.auth.getSession().then(({ data: { session } }) => check(session));
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_e, session) => check(session));
    return () => { cancelled = true; subscription.unsubscribe(); };
  }, [requiredNivel]);

  if (status === "loading") return <Spinner />;

  if (status === "unauth") {
    const dest = location.pathname.replace(/^\//, "") || "preparatoria";
    return <Navigate to={`/login?dest=${dest}`} replace />;
  }

  if (status === "unauthorized") return <Navigate to="/" replace />;

  return children;
}
