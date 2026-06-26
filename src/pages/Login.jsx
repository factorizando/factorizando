import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { supabase } from "../lib/supabase";
import AuthCard from "../components/AuthCard";
import { useTemaClaro } from "../lib/useTemaClaro";

export default function Login() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const dest = searchParams.get("dest") || undefined;
  useTemaClaro();

  // Si ya hay sesión, no mostrar el login
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) navigate(dest ? `/${dest}` : "/");
    });
  }, [dest, navigate]);

  return (
    <div className="auth-page">
      <style>{`.auth-page { min-height: 100vh; min-height: 100dvh; background: var(--app-bg);
        display: flex; align-items: center; justify-content: center; padding: 24px 16px; }`}</style>
      <AuthCard mode="login" dest={dest} onSwitchMode={(m) => navigate(m === "registro" ? "/registro" : "/login")} />
    </div>
  );
}
