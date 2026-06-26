import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";
import AuthCard from "../components/AuthCard";
import { useTemaClaro } from "../lib/useTemaClaro";

export default function Registro() {
  const navigate = useNavigate();
  useTemaClaro();

  // Si ya hay sesión, continuar a completar perfil
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) navigate("/completar-perfil");
    });
  }, [navigate]);

  return (
    <div className="auth-page">
      <style>{`.auth-page { min-height: 100vh; min-height: 100dvh; background: var(--app-bg);
        display: flex; align-items: center; justify-content: center; padding: 24px 16px; }`}</style>
      <AuthCard mode="registro" onSwitchMode={(m) => navigate(m === "registro" ? "/registro" : "/login")} />
    </div>
  );
}
