// src/pages/Admin.jsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../lib/supabase";

const C = {
  bg: "#0e0f11",
  surface: "#13151a",
  border: "#252830",
  blue: "#3b9eff",
  green: "#34d399",
  yellow: "#fbbf24",
  orange: "#f97316",
  red: "#f43f5e",
  text: "#e8eaf0",
  muted: "#5a6070",
  dim: "#8a9ab8",
};

const font = "'DM Sans', sans-serif";

function pctColor(p) {
  if (p >= 80) return C.green;
  if (p >= 60) return C.yellow;
  if (p >= 40) return C.orange;
  return C.red;
}

function fmtDate(iso) {
  const d = new Date(iso);
  return d.toLocaleDateString("es-MX", {
    day: "2-digit", month: "short", year: "numeric",
    hour: "2-digit", minute: "2-digit",
  });
}

// ── Estadísticas por alumno ───────────────────────────────────────────────────
function ResumenAlumno({ nombre, nivel, resultados }) {
  const [open, setOpen] = useState(false);
  const intentos = resultados.length;
  const promedio = intentos
    ? Math.round(resultados.reduce((s, r) => s + Math.round((r.puntaje / r.total) * 100), 0) / intentos)
    : 0;
  const mejorPct = intentos
    ? Math.max(...resultados.map((r) => Math.round((r.puntaje / r.total) * 100)))
    : 0;

  const nivelColor = nivel === "preparatoria" ? C.blue : nivel === "universidad" ? "#a78bfa" : C.green;

  return (
    <div style={{
      border: `1px solid ${C.border}`,
      borderRadius: 12,
      overflow: "hidden",
      marginBottom: 10,
    }}>
      {/* Fila resumen */}
      <button
        onClick={() => setOpen((o) => !o)}
        style={{
          width: "100%",
          background: open ? C.surface : C.bg,
          border: "none",
          cursor: "pointer",
          padding: "14px 18px",
          display: "flex",
          alignItems: "center",
          gap: 12,
          textAlign: "left",
        }}
      >
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ color: C.text, fontWeight: 700, fontSize: 14, fontFamily: font }}>
            {nombre || "Sin nombre"}
          </div>
          <span style={{
            display: "inline-block",
            background: nivelColor + "22",
            color: nivelColor,
            borderRadius: 99,
            padding: "2px 10px",
            fontSize: 11,
            fontWeight: 700,
            fontFamily: font,
            marginTop: 3,
          }}>
            {nivel}
          </span>
        </div>
        <div style={{ textAlign: "center", minWidth: 60 }}>
          <div style={{ color: C.dim, fontSize: 10, fontFamily: font, textTransform: "uppercase", letterSpacing: 1 }}>Intentos</div>
          <div style={{ color: C.text, fontWeight: 700, fontSize: 16, fontFamily: font }}>{intentos}</div>
        </div>
        <div style={{ textAlign: "center", minWidth: 70 }}>
          <div style={{ color: C.dim, fontSize: 10, fontFamily: font, textTransform: "uppercase", letterSpacing: 1 }}>Promedio</div>
          <div style={{ color: pctColor(promedio), fontWeight: 700, fontSize: 16, fontFamily: font }}>{promedio}%</div>
        </div>
        <div style={{ textAlign: "center", minWidth: 60 }}>
          <div style={{ color: C.dim, fontSize: 10, fontFamily: font, textTransform: "uppercase", letterSpacing: 1 }}>Mejor</div>
          <div style={{ color: pctColor(mejorPct), fontWeight: 700, fontSize: 16, fontFamily: font }}>{mejorPct}%</div>
        </div>
        <div style={{ color: C.muted, fontSize: 18, marginLeft: 4 }}>{open ? "▲" : "▼"}</div>
      </button>

      {/* Detalle de intentos */}
      {open && (
        <div style={{ background: C.surface, borderTop: `1px solid ${C.border}`, padding: "12px 18px" }}>
          {resultados.length === 0 ? (
            <p style={{ color: C.muted, fontSize: 13, fontFamily: font }}>Sin resultados registrados.</p>
          ) : (
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13, fontFamily: font }}>
              <thead>
                <tr>
                  {["Cuestionario", "Puntaje", "%", "Fecha"].map((h) => (
                    <th key={h} style={{
                      color: C.dim, fontWeight: 600, textAlign: "left",
                      padding: "4px 8px", fontSize: 11,
                      textTransform: "uppercase", letterSpacing: 1,
                    }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {resultados.map((r) => {
                  const pct = Math.round((r.puntaje / r.total) * 100);
                  return (
                    <tr key={r.id} style={{ borderTop: `1px solid ${C.border}` }}>
                      <td style={{ padding: "7px 8px", color: C.text, maxWidth: 240 }}>
                        {r.cuestionario_titulo || r.cuestionario_id}
                      </td>
                      <td style={{ padding: "7px 8px", color: C.dim }}>
                        {r.puntaje}/{r.total}
                      </td>
                      <td style={{ padding: "7px 8px", color: pctColor(pct), fontWeight: 700 }}>
                        {pct}%
                      </td>
                      <td style={{ padding: "7px 8px", color: C.muted, fontSize: 12, whiteSpace: "nowrap" }}>
                        {fmtDate(r.created_at)}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      )}
    </div>
  );
}

// ── Página principal ──────────────────────────────────────────────────────────
export default function Admin() {
  const [loading, setLoading] = useState(true);
  const [resultados, setResultados] = useState([]);
  const [profiles, setProfiles] = useState({});
  const [filtroNivel, setFiltroNivel] = useState("todos");
  const [busqueda, setBusqueda] = useState("");

  useEffect(() => {
    const load = async () => {
      const [{ data: results }, { data: profs }] = await Promise.all([
        supabase.rpc("get_all_resultados"),
        supabase.rpc("get_all_profiles"),
      ]);
      setResultados(results || []);
      const map = {};
      (profs || []).forEach((p) => { map[p.id] = p; });
      setProfiles(map);
      setLoading(false);
    };
    load();
  }, []);

  // Agrupar resultados por alumno
  const byUser = {};
  resultados.forEach((r) => {
    if (!byUser[r.user_id]) byUser[r.user_id] = [];
    byUser[r.user_id].push(r);
  });

  const alumnos = Object.entries(byUser)
    .map(([uid, results]) => ({
      uid,
      profile: profiles[uid] || { nombre: "", nivel: "—" },
      resultados: results,
    }))
    .filter((a) => {
      if (filtroNivel !== "todos" && a.profile.nivel !== filtroNivel) return false;
      if (busqueda && !a.profile.nombre.toLowerCase().includes(busqueda.toLowerCase())) return false;
      return true;
    });

  const totalIntentos = resultados.length;
  const promedioGlobal = totalIntentos
    ? Math.round(resultados.reduce((s, r) => s + Math.round((r.puntaje / r.total) * 100), 0) / totalIntentos)
    : 0;

  if (loading) {
    return (
      <div style={{ minHeight: "100vh", background: C.bg, display: "flex", alignItems: "center", justifyContent: "center" }}>
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

  return (
    <div style={{ minHeight: "100vh", background: C.bg, fontFamily: font }}>
      {/* Navbar */}
      <div style={{
        position: "sticky", top: 0, zIndex: 50,
        background: "rgba(14,15,17,0.95)",
        backdropFilter: "blur(12px)",
        borderBottom: `1px solid ${C.border}`,
        padding: "12px 24px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <div style={{ color: C.text, fontWeight: 700, fontSize: 16 }}>
          Panel de Administrador
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <Link to="/presentacion/semejanza-triangulos" style={{
            color: "#f5c842", fontSize: 13, textDecoration: "none",
            border: "1px solid #f5c84244", borderRadius: 8,
            padding: "5px 14px", fontWeight: 600,
          }}>
            ▶ Presentación
          </Link>
          <Link to="/" style={{
            color: C.muted, fontSize: 13, textDecoration: "none",
            border: `1px solid ${C.border}`, borderRadius: 8,
            padding: "5px 14px",
          }}>
            ← Inicio
          </Link>
        </div>
      </div>

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "28px 16px" }}>
        {/* Stats globales */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
          gap: 14,
          marginBottom: 28,
        }}>
          {[
            { label: "Alumnos", val: Object.keys(byUser).length },
            { label: "Intentos totales", val: totalIntentos },
            { label: "Promedio global", val: `${promedioGlobal}%`, col: pctColor(promedioGlobal) },
          ].map((s) => (
            <div key={s.label} style={{
              background: C.surface,
              border: `1px solid ${C.border}`,
              borderRadius: 12,
              padding: "18px 20px",
              textAlign: "center",
            }}>
              <div style={{ color: s.col || C.text, fontWeight: 900, fontSize: 28, letterSpacing: "-1px" }}>
                {s.val}
              </div>
              <div style={{ color: C.muted, fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: 1, marginTop: 4 }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Filtros */}
        <div style={{ display: "flex", gap: 10, marginBottom: 18, flexWrap: "wrap" }}>
          <input
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            placeholder="Buscar alumno..."
            style={{
              background: C.surface, border: `1px solid ${C.border}`,
              borderRadius: 8, padding: "8px 14px",
              color: C.text, fontSize: 13, fontFamily: font,
              outline: "none", minWidth: 200,
            }}
          />
          {["todos", "preparatoria", "universidad"].map((n) => (
            <button
              key={n}
              onClick={() => setFiltroNivel(n)}
              style={{
                border: "none",
                borderRadius: 99,
                padding: "8px 16px",
                fontSize: 12, fontWeight: 700, cursor: "pointer",
                background: filtroNivel === n ? C.blue : C.surface,
                color: filtroNivel === n ? "#fff" : C.muted,
                fontFamily: font,
              }}
            >
              {n.charAt(0).toUpperCase() + n.slice(1)}
            </button>
          ))}
        </div>

        {/* Lista de alumnos */}
        {alumnos.length === 0 ? (
          <div style={{
            textAlign: "center", padding: "60px 20px",
            color: C.muted, fontSize: 15,
          }}>
            {totalIntentos === 0
              ? "Aún no hay resultados registrados."
              : "No hay alumnos que coincidan con el filtro."}
          </div>
        ) : (
          alumnos.map((a) => (
            <ResumenAlumno
              key={a.uid}
              nombre={a.profile.nombre || a.profile.email || a.uid.slice(0, 8)}
              nivel={a.profile.nivel}
              resultados={a.resultados}
            />
          ))
        )}
      </div>
    </div>
  );
}
