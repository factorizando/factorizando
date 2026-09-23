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

// requiredNivel: "preparatoria" | "universidad" | "regularizacion" | "tutor" | "admin"
// | null (solo requiere auth).
// Autorización explícita: la cuenta debe estar `estado_acceso = "aprobado"` y su
// `bloque` debe ser el pedido. Admin/profesor ven todo el contenido. Si el perfil
// está incompleto, se manda a /completar-perfil; si no está aprobado, a
// /cuenta-pendiente.
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
        .select("*")
        .eq("id", session.user.id)
        .single();
      if (cancelled) return;

      if (!profile) { setStatus("unauthorized"); return; }
      if (!profile.perfil_completo) { setStatus("incompleto"); return; }

      const esAdmin = profile.rol === "admin";
      const esProfesor = profile.rol === "profesor";
      const esStaff = esAdmin || esProfesor;

      // Sin aprobación no se entra a nada, ni siquiera con auth (salvo staff).
      if (!esStaff && profile.estado_acceso !== "aprobado") {
        setStatus("pendiente");
        return;
      }

      // La suspensión corta a una cuenta aprobada; vence sola si `suspendido_hasta`
      // ya pasó. El staff queda exento para no bloquear la operación.
      if (!esStaff && profile.suspendido_en
          && (!profile.suspendido_hasta || new Date(profile.suspendido_hasta) > new Date())) {
        setStatus("suspendido");
        return;
      }

      if (!requiredNivel) { setStatus("ok"); return; }

      if (requiredNivel === "admin") {
        setStatus(esAdmin ? "ok" : "unauthorized");
      } else if (requiredNivel === "tutor") {
        setStatus(esStaff || profile.rol === "tutor" ? "ok" : "unauthorized");
      } else if (requiredNivel === "alumno") {
        // "alumno" no es un bloque: es tener expediente (alumnos.profile_id = uid).
        // El staff no tiene expediente, así que no entra por aquí.
        const { data: al } = await supabase
          .from("alumnos").select("id").eq("profile_id", session.user.id).maybeSingle();
        setStatus(al ? "ok" : "unauthorized");
      } else if (esStaff || profile.bloque === requiredNivel) {
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

  if (status === "pendiente") return <Navigate to="/cuenta-pendiente" replace />;

  if (status === "suspendido") return <Navigate to="/cuenta-suspendida" replace />;

  if (status === "unauthorized") return <Navigate to="/" replace />;

  return children;
}
