// src/pages/Refrigerios.jsx
// Boleta de Refrigerios Escolares — formulario público temporal.
// Cualquier persona puede acceder y votar. Los resultados los ve el admin.

import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../lib/supabase";
import { useKaTeX } from "../data/teoria/shared.jsx";

const OPTIONS = [
  { num: 1,  nombre: "Sándwich de jamón y queso + mandarina",           ing: "Pan, jamón, queso, mandarina",                           emoji: "🥪" },
  { num: 2,  nombre: "Quesadilla de queso + agua de fruta natural",     ing: "Tortilla de maíz, queso Oaxaca, agua de fruta",          emoji: "🫓" },
  { num: 3,  nombre: "Yogur natural con granola y plátano",             ing: "Yogur natural, granola, plátano",                        emoji: "🥣" },
  { num: 4,  nombre: "Fruta picada con cacahuates",                     ing: "Papaya, melón, sandía, cacahuates",                      emoji: "🍉" },
  { num: 5,  nombre: "Gelatina de fruta + galletas integrales",         ing: "Gelatina, fruta picada, galletas integrales",             emoji: "🍮" },
  { num: 6,  nombre: "Ensalada de fruta con yogur",                     ing: "Manzana, plátano, uvas, yogur",                          emoji: "🍇" },
  { num: 7,  nombre: "Sopes pequeños con frijol y queso",              ing: "Masa de sope, frijoles, queso rallado",                  emoji: "🌮" },
  { num: 8,  nombre: "Fruta de temporada con nueces o almendras",      ing: "Fruta de temporada, nueces o almendras",                 emoji: "🍏" },
  { num: 9,  nombre: "Molletes pequeños",                              ing: "Bolillo, frijoles, queso gratinado",                     emoji: "🍞" },
  { num: 10, nombre: "Licuado de plátano + galletas integrales",       ing: "Plátano, leche, galletas integrales",                    emoji: "🥤" },
  { num: 11, nombre: "Tostadas de frijol con queso",                   ing: "Tostadas horneadas, frijoles, queso fresco",             emoji: "🧀" },
  { num: 12, nombre: "Rollitos de jamón y queso + galletas saladas",   ing: "Jamón, queso, galletas saladas",                         emoji: "🧻" },
  { num: 13, nombre: "Pan de plátano casero + leche",                  ing: "Pan de plátano casero, leche",                           emoji: "🍌" },
  { num: 14, nombre: "Fruta picada con chamoy ligero",                 ing: "Mango, pepino, jícama, chamoy",                          emoji: "🥭" },
  { num: 15, nombre: "Esquites pequeños (vaso)",                       ing: "Elote desgranado, mayonesa, queso, chile en polvo",      emoji: "🌽" },
  { num: 16, nombre: "Mini hot cakes + leche",                         ing: "Hot cakes, miel o mermelada, leche",                     emoji: "🥞" },
  { num: 17, nombre: "Cuernitos de jamón y queso + agua de sabor",    ing: "Cuernito, jamón, queso, agua de fruta",                  emoji: "🥐" },
  { num: 18, nombre: "Huevo con salchicha + agua de sabor",           ing: "Huevo, salchicha, tortilla, agua de fruta",              emoji: "🌭" },
  { num: 19, nombre: "Nugets de pollo + agua de sabor",               ing: "Nugets de pollo, agua de fruta",                         emoji: "🍗" },
  { num: 20, nombre: "Fajitas de pollo + agua",                       ing: "Pollo en fajitas, tortilla de harina, agua",             emoji: "🌯" },
];

const ADMIN_KEYWORD = "refrigerios2026";

function BrandName() {
  const ready = useKaTeX();
  const ref = useRef(null);
  useEffect(() => {
    if (ready && window.katex && ref.current) {
      try {
        window.katex.render("\\mathbb{R}[i]", ref.current, { throwOnError: false, displayMode: false });
      } catch { /* fallback */ }
    }
  }, [ready]);
  return (
    <span style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 700, fontSize: "clamp(16px, 3.4vw, 20px)", letterSpacing: ".01em", whiteSpace: "nowrap", color: "#e8e8e8" }}>
      Facto<span ref={ref} style={{ color: "#80c6ff" }}>ℝ[i]</span>zando
    </span>
  );
}

export default function Refrigerios() {
  const [alumno, setAlumno] = useState("");
  const [answers, setAnswers] = useState({});
  const [sent, setSent] = useState(false);
  const [sentDetail, setSentDetail] = useState("");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const [showAdmin, setShowAdmin] = useState(false);
  const [adminPass, setAdminPass] = useState("");
  const [adminResults, setAdminResults] = useState(null);
  const [adminLoading, setAdminLoading] = useState(false);
  const [adminError, setAdminError] = useState("");

  const count = Object.keys(answers).length;
  const pct = Math.round((count / OPTIONS.length) * 100);
  const canSubmit = count === OPTIONS.length && alumno.trim();

  function toggleVote(num, vote) {
    setAnswers((prev) => ({ ...prev, [num]: prev[num] === vote ? undefined : vote }));
  }

  function handleReset() {
    setAnswers({});
    setAlumno("");
    setSent(false);
    setSentDetail("");
    setError("");
  }

  async function handleSubmit() {
    setSaving(true);
    setError("");
    const respuestas = {};
    Object.entries(answers).forEach(([k, v]) => { if (v) respuestas[k] = v; });

    const { error: dbErr } = await supabase.from("refrigerios").insert({
      alumno: alumno.trim(),
      respuestas,
    });

    if (dbErr) {
      setError("No se pudo guardar tu respuesta. Intenta de nuevo.");
      setSaving(false);
      return;
    }

    const siCount = Object.values(respuestas).filter((v) => v === "si").length;
    const noCount = Object.values(respuestas).filter((v) => v === "no").length;
    setSentDetail(`${alumno.trim()}: ${siCount} autorizadas, ${noCount} a evitar.`);
    setSent(true);
    setSaving(false);
  }

  async function loadResults() {
    if (adminPass !== ADMIN_KEYWORD) {
      setAdminError("Palabra clave incorrecta.");
      return;
    }
    setAdminLoading(true);
    setAdminError("");

    const { data, error: dbErr } = await supabase
      .from("refrigerios")
      .select("alumno, grupo, respuestas, created_at")
      .order("created_at", { ascending: false });

    if (dbErr) {
      setAdminError("No se pudieron cargar los resultados.");
      setAdminLoading(false);
      return;
    }

    const tally = {};
    OPTIONS.forEach((o) => { tally[o.num] = { si: 0, no: 0 }; });
    (data || []).forEach((row) => {
      Object.entries(row.respuestas || {}).forEach(([num, vote]) => {
        if (tally[num] && (vote === "si" || vote === "no")) tally[num][vote]++;
      });
    });

    setAdminResults({ total: (data || []).length, tally });
    setAdminLoading(false);
  }

  return (
    <div style={S.page}>
      <style>{CSS}</style>

      {/* Header — replica el estilo de AppHeader */}
      <header style={S.header}>
        <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
          <Link to="/" style={{ display: "inline-flex", alignItems: "center" }}>
            <span style={S.logoRing}>
              <img src={`${import.meta.env.BASE_URL}assets/logoX.png`} alt="Factorizando" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            </span>
          </Link>
          <BrandName />
        </div>
      </header>

      <div style={S.wrap}>
        <h1 style={S.h1}>Boleta de Refrigerios Escolares</h1>
        <p style={S.subtitle}>
          Marca &ldquo;Sí, autorizo&rdquo; o &ldquo;No / evitar&rdquo; en cada opción
          según lo que tu hijo(a) pueda o no consumir. Al terminar, presiona <b>Enviar respuesta</b>.
        </p>

        {/* ── Formulario ──────────────────────────────────────── */}
        {!sent ? (
          <>
            {/* Datos del alumno */}
            <div style={S.panel}>
              <label style={S.label}>Nombre del alumno(a)</label>
              <input
                style={S.input}
                value={alumno}
                onChange={(e) => setAlumno(e.target.value)}
                placeholder="Nombre completo"
              />
              <div style={S.progressWrap}>
                <div style={{ ...S.progressFill, width: `${pct}%` }} />
              </div>
              <div style={S.progressLabel}>{count} / {OPTIONS.length} respondidas</div>
            </div>

            {/* Tarjetas */}
            {OPTIONS.map((o) => (
              <div key={o.num} style={S.card}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                  <span style={S.cardNum}>{String(o.num).padStart(2, "0")}</span>
                  <span style={{ fontSize: 18 }}>{o.emoji}</span>
                </div>
                <h3 style={{ fontSize: 15, margin: "6px 0 2px" }}>{o.nombre}</h3>
                <p style={{ fontSize: 12.5, color: "#9BA3AA", margin: "0 0 12px" }}>Incluye: {o.ing}</p>
                <div className="vote-row" style={{ display: "flex", gap: 8 }}>
                  <button
                    type="button"
                    style={answers[o.num] === "si" ? { ...S.voteBtn, ...S.voteSiActive } : S.voteBtn}
                    onClick={() => toggleVote(o.num, "si")}
                  >
                    Sí, autorizo
                  </button>
                  <button
                    type="button"
                    style={answers[o.num] === "no" ? { ...S.voteBtn, ...S.voteNoActive } : S.voteBtn}
                    onClick={() => toggleVote(o.num, "no")}
                  >
                    No / evitar
                  </button>
                </div>
              </div>
            ))}

            <button
              type="button"
              style={canSubmit ? S.submitBtn : { ...S.submitBtn, opacity: 0.4, cursor: "not-allowed" }}
              disabled={!canSubmit || saving}
              onClick={handleSubmit}
            >
              {saving ? "Enviando…" : "Enviar respuesta"}
            </button>
            {error && <div style={{ ...S.msg, color: "#E8837A" }}>{error}</div>}
          </>
        ) : (
          /* ── Gracias ──────────────────────────────────────── */
          <div style={{ textAlign: "center", padding: "30px 16px" }}>
            <div style={{ fontSize: 40, marginBottom: 6 }}>&#x2705;</div>
            <h2 style={{ fontFamily: "Georgia, serif", margin: "4px 0 8px" }}>¡Gracias por responder!</h2>
            <p style={{ color: "#9BA3AA", fontSize: 13.5 }}>{sentDetail}</p>
            <button type="button" style={S.resetBtn} onClick={handleReset}>
              Registrar otro alumno(a)
            </button>
          </div>
        )}

        {/* ── Admin toggle ──────────────────────────────────── */}
        <div style={{ textAlign: "center", marginTop: 26 }}>
          <button
            type="button"
            style={{ background: "none", border: "none", color: "#9BA3AA", fontSize: 11.5, textDecoration: "underline", cursor: "pointer" }}
            onClick={() => setShowAdmin((v) => !v)}
          >
            Acceso staff
          </button>
        </div>

        {showAdmin && (
                <div className="admin-scroll" style={{ maxWidth: 360, margin: "10px auto 0" }}>
            <div style={{ display: "flex", gap: 8 }}>
              <input
                style={{ ...S.input, marginBottom: 0, flex: 1 }}
                value={adminPass}
                onChange={(e) => setAdminPass(e.target.value)}
                placeholder="Palabra clave"
                onKeyDown={(e) => { if (e.key === "Enter") loadResults(); }}
              />
              <button type="button" style={S.adminBtn} onClick={loadResults} disabled={adminLoading}>
                {adminLoading ? "Cargando…" : "Ver resultados"}
              </button>
            </div>
            {adminError && <div style={{ ...S.msg, color: "#E8837A", marginTop: 10 }}>{adminError}</div>}

            {adminResults && (
              <>
                <div style={{ ...S.msg, marginTop: 10 }}>{adminResults.total} respuesta(s) recibida(s)</div>
                <table style={{ width: "100%", borderCollapse: "collapse", marginTop: 14, fontSize: 12.5 }}>
                  <thead>
                    <tr>
                      <th style={S.th}>#</th>
                      <th style={S.th}>Refrigerio</th>
                      <th style={S.th}>Resultado</th>
                    </tr>
                  </thead>
                  <tbody>
                    {OPTIONS.map((o) => {
                      const t = adminResults.tally[o.num];
                      const denom = Math.max(1, t.si + t.no);
                      const barPct = Math.round((t.si / denom) * 100);
                      return (
                        <tr key={o.num}>
                          <td style={S.td}>{String(o.num).padStart(2, "0")} {o.emoji}</td>
                          <td style={S.td}>{o.nombre}</td>
                          <td style={S.td}>
                            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                              <div style={{ flex: 1, height: 7, background: "#1E2124", borderRadius: 4, overflow: "hidden" }}>
                                <div style={{ height: "100%", background: "#6FCF97", width: `${barPct}%` }} />
                              </div>
                              <span style={{ whiteSpace: "nowrap" }}>{t.si} Sí / {t.no} No</span>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </>
            )}
          </div>
        )}

        {/* Footer */}
        <div style={{ textAlign: "center", color: "#9BA3AA", fontSize: 11, marginTop: 26, lineHeight: 1.6 }}>
          Tus respuestas se guardan de forma segura y solo el equipo de FactoR[i]zando puede consultar el resumen conjunto.
          <br />Menú de Refrigerios Escolares · FactoR[i]zando
        </div>
      </div>
    </div>
  );
}

const S = {
  page: {
    minHeight: "100dvh", background: "#0E0F11",
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif",
    WebkitFontSmoothing: "antialiased",
  },
  header: {
    position: "sticky", top: 0, zIndex: 20,
    height: 56, padding: "0 18px",
    background: "rgba(14,15,17,0.96)", backdropFilter: "blur(12px)",
    borderBottom: "1px solid rgba(255,255,255,0.05)",
    display: "flex", alignItems: "center", justifyContent: "center",
    flexShrink: 0,
  },
  logoRing: {
    display: "inline-block", width: 34, height: 34, borderRadius: "50%",
    border: "1px dashed rgba(255,255,255,0.16)", overflow: "hidden", flexShrink: 0,
  },
  wrap: { maxWidth: 720, margin: "0 auto", padding: "24px 16px 60px" },
  h1: {
    fontFamily: "Georgia, 'Times New Roman', serif",
    fontSize: 22, textAlign: "center",
    margin: "6px 0 4px", letterSpacing: 0.2,
    color: "#ECECEC",
  },
  subtitle: {
    textAlign: "center", color: "#9BA3AA",
    fontSize: 13.5, lineHeight: 1.5,
    maxWidth: 560, margin: "0 auto 22px",
  },
  panel: {
    background: "#17191C", border: "1px solid #2A2D31",
    borderRadius: 14, padding: 16, marginBottom: 16,
  },
  label: { display: "block", fontSize: 12.5, color: "#9BA3AA", marginBottom: 5 },
  input: {
    width: "100%", background: "#1E2124",
    border: "1px solid #2A2D31", borderRadius: 8,
    color: "#ECECEC", padding: "10px 12px",
    fontSize: 16, marginBottom: 12,
    boxSizing: "border-box", outline: "none",
    fontFamily: "inherit",
  },
  progressWrap: {
    height: 6, background: "#1E2124",
    borderRadius: 4, overflow: "hidden", marginBottom: 4,
  },
  progressFill: {
    height: "100%", background: "#80C6FF",
    transition: "width .25s ease",
  },
  progressLabel: { fontSize: 11.5, color: "#9BA3AA", textAlign: "right" },
  card: {
    background: "#17191C",
    border: "1px solid #2A2D31",
    borderLeft: "4px solid #80C6FF",
    borderRadius: 12, padding: 14, marginBottom: 10,
  },
  cardNum: {
    fontSize: 11, fontWeight: 700, color: "#80C6FF",
    background: "rgba(128,198,255,0.12)",
    borderRadius: 6, padding: "2px 7px",
  },
  voteBtn: {
    flex: 1, padding: "10px 8px", borderRadius: 9,
    border: "1px solid #2A2D31", background: "#1E2124",
    color: "#ECECEC", fontSize: 13, fontWeight: 600,
    cursor: "pointer", textAlign: "center",
    transition: "all .15s ease",
    fontFamily: "inherit",
  },
  voteSiActive: {
    background: "rgba(111,207,151,0.16)",
    border: "1px solid #6FCF97",
    color: "#6FCF97",
  },
  voteNoActive: {
    background: "rgba(232,131,122,0.16)",
    border: "1px solid #E8837A",
    color: "#E8837A",
  },
  submitBtn: {
    width: "100%", padding: 14, borderRadius: 10,
    border: "none", background: "#80C6FF",
    color: "#0E0F11", fontSize: 15, fontWeight: 700,
    cursor: "pointer", marginTop: 6,
    fontFamily: "inherit",
  },
  msg: { fontSize: 12.5, textAlign: "center", marginTop: 8, color: "#9BA3AA", minHeight: 16 },
  resetBtn: {
    marginTop: 18, padding: "10px 18px", borderRadius: 9,
    border: "1px solid #2A2D31", background: "#1E2124",
    color: "#ECECEC", fontSize: 13.5, cursor: "pointer",
    fontFamily: "inherit",
  },
  adminBtn: {
    padding: "10px 14px", borderRadius: 8,
    border: "1px solid #2A2D31", background: "#1E2124",
    color: "#ECECEC", cursor: "pointer",
    fontSize: 13, whiteSpace: "nowrap",
    fontFamily: "inherit",
  },
  th: { color: "#9BA3AA", fontWeight: 600, borderBottom: "1px solid #2A2D31", padding: "7px 6px", textAlign: "left" },
  td: { borderBottom: "1px solid #2A2D31", padding: "7px 6px", textAlign: "left", color: "#ECECEC" },
};

const CSS = `
  input:focus { outline: 2px solid #80C6FF; }
  .vote-btn:hover { border-color: #9BA3AA; }
  @media (max-width: 400px) {
    .vote-row { flex-direction: column; }
  }
  .admin-scroll { overflow-x: auto; -webkit-overflow-scrolling: touch; }
`;
