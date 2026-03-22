import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../lib/supabase";

// ── Barra de navegación superior ─────────────────────────────────────────────
const Navbar = () => {
  const brandRef = useRef(null);

  useEffect(() => {
    const load = () => {
      if (!document.getElementById("katex-css")) {
        const lnk = document.createElement("link");
        lnk.id = "katex-css";
        lnk.rel = "stylesheet";
        lnk.href =
          "https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css";
        document.head.appendChild(lnk);
      }
      if (window.katex) {
        render();
      } else if (!document.getElementById("katex-js")) {
        const sc = document.createElement("script");
        sc.id = "katex-js";
        sc.src = "https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js";
        sc.async = true;
        sc.onload = render;
        document.head.appendChild(sc);
      }
    };
    const render = () => {
      if (!brandRef.current || !window.katex) return;
      window.katex.render(
        "\\textbf{\\text{Facto}}\\textcolor{#f59e0b}{\\mathbb{R}[i]}\\textbf{\\text{zando}}",
        brandRef.current,
        { throwOnError: false, displayMode: false, trust: true, strict: false },
      );
    };
    load();
  }, []);

  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "rgba(14,15,17,0.92)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid #252830",
        padding: "10px 20px",
        display: "flex",
        alignItems: "center",
        gap: 12,
      }}
    >
      <Link
        to="/"
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          textDecoration: "none",
          color: "inherit",
        }}
      >
        <img
          src={`${import.meta.env.BASE_URL}assets/logoX.png`}
          alt="Logo Factorizando"
          style={{
            width: 34,
            height: 34,
            borderRadius: "50%",
            objectFit: "cover",
            border: "1px solid #3b9eff44",
          }}
        />
        <span
          style={{
            fontSize: "1.1rem",
            letterSpacing: ".04em",
            userSelect: "none",
            color: "#e8eaf0",
          }}
        >
          <span ref={brandRef}>
            <span
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontWeight: 700,
              }}
            >
              Facto
              <span style={{ color: "#f59e0b" }}>
                ℝ[<em>i</em>]
              </span>
              zando
            </span>
          </span>
        </span>
      </Link>
    </div>
  );
};

const C = {
  bg: "#0e0f11",
  surface: "#13151a",
  border: "#252830",
  blue: "#3b9eff",
  gold: "#f59e0b",
  teal: "#34d399",
  crimson: "#f43f5e",
  text: "#e8eaf0",
  muted: "#5a6070",
  dim: "#8a9ab8",
};

const ESTADOS = [
  "Aguascalientes",
  "Baja California",
  "Baja California Sur",
  "Campeche",
  "Chiapas",
  "Chihuahua",
  "Ciudad de México",
  "Coahuila",
  "Colima",
  "Durango",
  "Estado de México",
  "Guanajuato",
  "Guerrero",
  "Hidalgo",
  "Jalisco",
  "Michoacán",
  "Morelos",
  "Nayarit",
  "Nuevo León",
  "Oaxaca",
  "Puebla",
  "Querétaro",
  "Quintana Roo",
  "San Luis Potosí",
  "Sinaloa",
  "Sonora",
  "Tabasco",
  "Tamaulipas",
  "Tlaxcala",
  "Veracruz",
  "Yucatán",
  "Zacatecas",
];

const EMPTY = {
  nombre: "",
  correo: "",
  telefono: "",
  estado: "",
  ciudad: "",
  institucion: "",
};

export default function Registro() {
  const [examen, setExamen] = useState(null); // "EXANI-I" | "EXANI-II"
  const [form, setForm] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errMsg, setErrMsg] = useState("");

  const CSS = `
    @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');
    * { box-sizing: border-box; margin: 0; padding: 0; }
    input, select {
      font-family: 'DM Sans', sans-serif;
      font-size: 14px;
      width: 100%;
      background: #0e0f11;
      color: #e8eaf0;
      border: 1px solid #252830;
      border-radius: 8px;
      padding: 11px 14px;
      outline: none;
      transition: border-color 0.2s;
    }
    input::placeholder { color: #5a6070; }
    input:focus, select:focus { border-color: #3b9eff; }
    select option { background: #13151a; }
  `;

  const handle = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
    if (errors[name]) setErrors((p) => ({ ...p, [name]: "" }));
  };

  const validate = () => {
    const e = {};
    if (!form.nombre.trim()) e.nombre = "Ingresa tu nombre completo.";
    if (!form.correo.trim()) e.correo = "Ingresa tu correo electrónico.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.correo))
      e.correo = "El correo no tiene un formato válido.";
    if (!form.telefono.trim()) e.telefono = "Ingresa tu número de teléfono.";
    else if (!/^\d{7,15}$/.test(form.telefono.replace(/\s|-/g, "")))
      e.telefono = "El teléfono debe tener entre 7 y 15 dígitos.";
    if (!form.estado) e.estado = "Selecciona tu estado.";
    if (!form.ciudad.trim()) e.ciudad = "Ingresa tu ciudad.";
    if (!form.institucion.trim())
      e.institucion =
        examen === "EXANI-I"
          ? "Ingresa el nombre de la preparatoria a la que aspiras."
          : "Ingresa la carrera a la que aspiras.";
    return e;
  };

  const submit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }

    setStatus("loading");
    const { error } = await supabase.from("solicitudes").insert([
      {
        nombre: form.nombre.trim(),
        correo: form.correo.trim().toLowerCase(),
        telefono: form.telefono.trim(),
        estado: form.estado,
        ciudad: form.ciudad.trim(),
        examen,
        institucion: form.institucion.trim(),
      },
    ]);

    if (error) {
      setErrMsg("Ocurrió un error al enviar tu solicitud. Intenta de nuevo.");
      setStatus("error");
    } else {
      setStatus("success");
    }
  };

  // ── Pantalla de éxito ──────────────────────────────────────────────────────
  if (status === "success") {
    return (
      <div style={{ minHeight: "100vh", background: C.bg }}>
        <style>{CSS}</style>
        <Navbar />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "32px 16px",
            minHeight: "calc(100vh - 55px)",
          }}
        >
          <div
            style={{
              background: C.surface,
              border: `2px solid ${C.teal}`,
              borderRadius: 18,
              padding: "40px 36px",
              textAlign: "center",
              maxWidth: 460,
              width: "100%",
            }}
          >
            <div style={{ fontSize: 52, marginBottom: 16 }}>✅</div>
            <h2
              style={{
                color: C.teal,
                fontFamily: "'DM Sans',sans-serif",
                fontSize: 22,
                fontWeight: 700,
                marginBottom: 12,
              }}
            >
              ¡Solicitud enviada!
            </h2>
            <p
              style={{
                color: C.dim,
                fontFamily: "'DM Sans',sans-serif",
                fontSize: 14,
                lineHeight: 1.7,
                marginBottom: 24,
              }}
            >
              Recibimos tu solicitud para el{" "}
              <strong style={{ color: C.text }}>{examen}</strong>. Envíanos un
              WhatsApp al 249 137 4886 para completar tu registro y en breve te
              contactaremos con los datos de acceso a la plataforma.
            </p>
            <Link
              to="/"
              style={{
                display: "inline-block",
                background: C.teal,
                color: "#0e0f11",
                borderRadius: 10,
                padding: "11px 28px",
                fontFamily: "'DM Sans',sans-serif",
                fontWeight: 700,
                fontSize: 14,
                textDecoration: "none",
              }}
            >
              Volver al inicio
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const inputStyle = (field) => ({
    borderColor: errors[field] ? C.crimson : undefined,
  });

  const labelStyle = {
    display: "block",
    color: C.dim,
    fontSize: 12,
    fontWeight: 600,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    fontFamily: "'DM Sans',sans-serif",
    marginBottom: 6,
  };

  const errorStyle = {
    color: C.crimson,
    fontSize: 12,
    fontFamily: "'DM Sans',sans-serif",
    marginTop: 4,
  };

  const fieldWrap = { marginBottom: 18 };

  // ── Selector de examen ─────────────────────────────────────────────────────
  if (!examen) {
    return (
      <div style={{ minHeight: "100vh", background: C.bg }}>
        <style>{CSS}</style>
        <Navbar />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "32px 16px",
            minHeight: "calc(100vh - 55px)",
          }}
        >
          <div
            style={{
              background: C.surface,
              border: `1px solid ${C.border}`,
              borderRadius: 18,
              padding: "36px 32px",
              maxWidth: 480,
              width: "100%",
              textAlign: "center",
            }}
          >
            <h1
              style={{
                color: C.text,
                fontFamily: "'DM Sans',sans-serif",
                fontSize: 22,
                fontWeight: 700,
                marginBottom: 10,
              }}
            >
              Solicitud de registro
            </h1>
            <p
              style={{
                color: C.muted,
                fontFamily: "'DM Sans',sans-serif",
                fontSize: 14,
                marginBottom: 32,
              }}
            >
              ¿A qué examen vas a aplicar?
            </p>
            <div
              style={{
                display: "flex",
                gap: 14,
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              {["EXANI-I-BUAP", "EXANI-II(EIPM/EPIU)"].map((ex) => (
                <button
                  key={ex}
                  onClick={() => setExamen(ex)}
                  style={{
                    background: C.bg,
                    border: `1px solid ${C.border}`,
                    borderRadius: 12,
                    padding: "20px 32px",
                    cursor: "pointer",
                    fontFamily: "'DM Sans',sans-serif",
                    transition: "all 0.2s",
                    minWidth: 160,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = C.blue;
                    e.currentTarget.style.background = C.blue + "18";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = C.border;
                    e.currentTarget.style.background = C.bg;
                  }}
                >
                  <div style={{ fontSize: 28, marginBottom: 8 }}>
                    {ex === "EXANI-I-BUAP" ? "🏫" : "🎓"}
                  </div>
                  <div style={{ color: C.blue, fontWeight: 700, fontSize: 16 }}>
                    {ex}
                  </div>
                  <div style={{ color: C.muted, fontSize: 12, marginTop: 4 }}>
                    {ex === "EXANI-I-BUAP" ? "Preparatoria" : "Universidad"}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ── Formulario ─────────────────────────────────────────────────────────────
  return (
    <div style={{ minHeight: "100vh", background: C.bg, paddingBottom: 64 }}>
      <style>{CSS}</style>

      <Navbar />
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          padding: "8px 24px",
          background: C.surface,
          borderBottom: `1px solid ${C.border}`,
        }}
      >
        <button
          onClick={() => {
            setExamen(null);
            setForm(EMPTY);
            setErrors({});
          }}
          style={{
            background: "transparent",
            border: "none",
            color: C.muted,
            cursor: "pointer",
            fontSize: 13,
            fontFamily: "'DM Sans',sans-serif",
          }}
        >
          ← Cambiar examen
        </button>
      </div>

      <div style={{ maxWidth: 540, margin: "0 auto", padding: "36px 16px" }}>
        {/* Badge examen */}
        <div style={{ textAlign: "center", marginBottom: 28 }}>
          <span
            style={{
              background: C.blue + "22",
              color: C.blue,
              borderRadius: 99,
              padding: "4px 16px",
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: 2,
              textTransform: "uppercase",
              fontFamily: "'DM Sans',sans-serif",
            }}
          >
            {examen} ·{" "}
            {examen === "EXANI-I-BUAP" ? "Preparatoria" : "Universidad"}
          </span>
          <h1
            style={{
              color: C.text,
              fontFamily: "'DM Sans',sans-serif",
              fontSize: 22,
              fontWeight: 700,
              marginTop: 14,
              marginBottom: 6,
            }}
          >
            Solicitud de registro
          </h1>
          <p
            style={{
              color: C.muted,
              fontSize: 13,
              fontFamily: "'DM Sans',sans-serif",
            }}
          >
            Completa el formulario y nos pondremos en contacto contigo.
          </p>
        </div>

        <form onSubmit={submit} noValidate>
          <div
            style={{
              background: C.surface,
              border: `1px solid ${C.border}`,
              borderRadius: 14,
              padding: "24px",
            }}
          >
            {/* Nombre */}
            <div style={fieldWrap}>
              <label style={labelStyle}>Nombre completo</label>
              <input
                name="nombre"
                value={form.nombre}
                onChange={handle}
                placeholder="Ej. Ivonne Martínez Flores"
                style={inputStyle("nombre")}
              />
              {errors.nombre && <p style={errorStyle}>{errors.nombre}</p>}
            </div>

            {/* Correo */}
            <div style={fieldWrap}>
              <label style={labelStyle}>Correo electrónico</label>
              <input
                name="correo"
                type="email"
                value={form.correo}
                onChange={handle}
                placeholder="ejemplo@correo.com"
                style={inputStyle("correo")}
              />
              {errors.correo && <p style={errorStyle}>{errors.correo}</p>}
            </div>

            {/* Teléfono */}
            <div style={fieldWrap}>
              <label style={labelStyle}>WhatsApp</label>
              <input
                name="telefono"
                type="tel"
                value={form.telefono}
                onChange={handle}
                placeholder="Ej. 2222345678"
                style={inputStyle("telefono")}
              />
              {errors.telefono && <p style={errorStyle}>{errors.telefono}</p>}
            </div>

            {/* Estado */}
            <div style={fieldWrap}>
              <label style={labelStyle}>Estado</label>
              <select
                name="estado"
                value={form.estado}
                onChange={handle}
                style={{
                  ...inputStyle("estado"),
                  color: form.estado ? C.text : C.muted,
                }}
              >
                <option value="" disabled>
                  Selecciona tu estado
                </option>
                {ESTADOS.map((e) => (
                  <option key={e} value={e}>
                    {e}
                  </option>
                ))}
              </select>
              {errors.estado && <p style={errorStyle}>{errors.estado}</p>}
            </div>

            {/* Ciudad */}
            <div style={fieldWrap}>
              <label style={labelStyle}>Ciudad</label>
              <input
                name="ciudad"
                value={form.ciudad}
                onChange={handle}
                placeholder="Ej. Puebla"
                style={inputStyle("ciudad")}
              />
              {errors.ciudad && <p style={errorStyle}>{errors.ciudad}</p>}
            </div>

            {/* Campo dinámico según examen */}
            <div style={{ ...fieldWrap, marginBottom: 0 }}>
              <label style={labelStyle}>
                {examen === "EXANI-I-BUAP"
                  ? "Preparatoria a la que aspiras"
                  : "Carrera a la que aspiras"}
              </label>
              <input
                name="institucion"
                value={form.institucion}
                onChange={handle}
                placeholder={
                  examen === "EXANI-I-BUAP"
                    ? "Ej. Enrique Cabrera Barroso"
                    : "Ej. Medicina"
                }
                style={inputStyle("institucion")}
              />
              {errors.institucion && (
                <p style={errorStyle}>{errors.institucion}</p>
              )}
            </div>
          </div>

          {/* Error de envío */}
          {status === "error" && (
            <div
              style={{
                background: C.crimson + "22",
                border: `1px solid ${C.crimson}44`,
                borderRadius: 10,
                padding: "12px 16px",
                marginTop: 16,
                color: C.crimson,
                fontSize: 13,
                fontFamily: "'DM Sans',sans-serif",
              }}
            >
              {errMsg}
            </div>
          )}

          {/* Botón enviar */}
          <button
            type="submit"
            disabled={status === "loading"}
            style={{
              width: "100%",
              marginTop: 20,
              padding: "13px",
              background:
                status === "loading"
                  ? C.border
                  : `linear-gradient(135deg, ${C.blue}, #a78bfa)`,
              color: status === "loading" ? C.muted : "#fff",
              border: "none",
              borderRadius: 10,
              fontSize: 15,
              fontWeight: 700,
              cursor: status === "loading" ? "not-allowed" : "pointer",
              fontFamily: "'DM Sans',sans-serif",
              transition: "all 0.2s",
              boxShadow:
                status === "loading" ? "none" : `0 4px 20px ${C.blue}33`,
            }}
          >
            {status === "loading" ? "Enviando..." : "Enviar solicitud"}
          </button>
        </form>
      </div>
    </div>
  );
}
