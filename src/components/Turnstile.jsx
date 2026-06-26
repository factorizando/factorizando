// Widget CAPTCHA de Cloudflare Turnstile (render explícito).
// Se activa solo si VITE_TURNSTILE_SITE_KEY está definido; si no, no renderiza
// nada (útil en desarrollo y mientras no se configure en Supabase).
// Expone reset() por ref para reciclar el token tras cada intento (es de un solo uso).
import { useEffect, useRef, forwardRef, useImperativeHandle } from "react";

export const TURNSTILE_SITE_KEY = import.meta.env.VITE_TURNSTILE_SITE_KEY;

const Turnstile = forwardRef(function Turnstile({ onToken }, ref) {
  const elRef = useRef(null);
  const widgetId = useRef(null);
  const onTokenRef = useRef(onToken);
  useEffect(() => { onTokenRef.current = onToken; });

  useImperativeHandle(ref, () => ({
    reset() {
      if (window.turnstile && widgetId.current !== null) {
        window.turnstile.reset(widgetId.current);
      }
    },
  }), []);

  useEffect(() => {
    if (!TURNSTILE_SITE_KEY) return;
    let cancelled = false;
    const render = () => {
      if (cancelled || !window.turnstile || !elRef.current || widgetId.current !== null) return;
      widgetId.current = window.turnstile.render(elRef.current, {
        sitekey: TURNSTILE_SITE_KEY,
        theme: "light",
        callback: (t) => onTokenRef.current(t),
        "expired-callback": () => onTokenRef.current(""),
        "error-callback": () => onTokenRef.current(""),
      });
    };
    if (window.turnstile) { render(); return () => { cancelled = true; }; }
    let s = document.getElementById("cf-turnstile-script");
    if (s) {
      s.addEventListener("load", render);
    } else {
      s = document.createElement("script");
      s.id = "cf-turnstile-script";
      s.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
      s.async = true; s.defer = true; s.onload = render;
      document.head.appendChild(s);
    }
    return () => { cancelled = true; };
  }, []);

  if (!TURNSTILE_SITE_KEY) return null;
  return <div ref={elRef} style={{ display: "flex", justifyContent: "center", minHeight: 65 }} />;
});

export default Turnstile;
