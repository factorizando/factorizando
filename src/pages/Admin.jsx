// src/pages/Admin.jsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../lib/supabase";
import { listaPresentaciones, buscarPresentacion } from "../data/presentaciones/presentacionesIndex.js";
import { obtenerTema } from "../data/presentaciones/temas.jsx";

const C = {
  bg:      "#0e0f11",
  surface: "#13151a",
  card:    "#16181f",
  border:  "#252830",
  blue:    "#3b9eff",
  green:   "#34d399",
  yellow:  "#fbbf24",
  orange:  "#f97316",
  red:     "#f43f5e",
  purple:  "#a78bfa",
  text:    "#e8eaf0",
  muted:   "#5a6070",
  dim:     "#8a9ab8",
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

// ── Stat card ─────────────────────────────────────────────────────────────────
function StatCard({ label, value, color, sub }) {
  return (
    <div style={{
      background: C.surface,
      border: `1px solid ${C.border}`,
      borderRadius: 14,
      padding: "20px 22px",
    }}>
      <div style={{
        color: color || C.text,
        fontWeight: 900,
        fontSize: 32,
        letterSpacing: "-1.5px",
        lineHeight: 1,
        fontFamily: font,
      }}>
        {value}
      </div>
      <div style={{
        color: C.muted,
        fontSize: 11,
        fontWeight: 700,
        textTransform: "uppercase",
        letterSpacing: 1,
        marginTop: 8,
        fontFamily: font,
      }}>
        {label}
      </div>
      {sub && (
        <div style={{ color: C.dim, fontSize: 11, marginTop: 4, fontFamily: font }}>
          {sub}
        </div>
      )}
    </div>
  );
}

// ── Tab button ────────────────────────────────────────────────────────────────
function TabBtn({ active, onClick, children, badge }) {
  return (
    <button
      onClick={onClick}
      style={{
        background: "none",
        border: "none",
        cursor: "pointer",
        padding: "12px 20px",
        fontSize: 14,
        fontWeight: active ? 700 : 500,
        color: active ? C.text : C.muted,
        borderBottom: active ? `2px solid ${C.blue}` : "2px solid transparent",
        marginBottom: -1,
        display: "flex",
        alignItems: "center",
        gap: 8,
        fontFamily: font,
        transition: "color .15s",
      }}
    >
      {children}
      {badge != null && (
        <span style={{
          background: active ? C.blue + "33" : C.border,
          color: active ? C.blue : C.dim,
          borderRadius: 99,
          padding: "1px 8px",
          fontSize: 11,
          fontWeight: 700,
        }}>
          {badge}
        </span>
      )}
    </button>
  );
}

// ── Tarjeta de presentación ───────────────────────────────────────────────────
function PresentacionCard({ id, titulo, materia }) {
  const tema = obtenerTema(materia);
  const pres = buscarPresentacion(id);
  const slides = pres?.slides || [];
  const nReglas  = slides.filter((s) => s.tipo === "regla" || s.tipo === "regla_rica" || s.tipo === "criterio_detalle" || s.tipo === "concepto" || s.tipo === "definicion").length;
  const nEjerc   = slides.filter((s) => s.tipo === "ejercicio").length;

  return (
    <div style={{
      background: C.surface,
      border: `1px solid ${tema.acentoBorde || C.border}`,
      borderRadius: 16,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      transition: "transform .15s, box-shadow .15s",
    }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-2px)";
        e.currentTarget.style.boxShadow = `0 8px 32px ${tema.acentoSuave || "rgba(0,0,0,.4)"}`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {/* Barra de acento superior */}
      <div style={{ height: 5, background: `linear-gradient(90deg, ${tema.acento}, ${tema.azul || tema.acento}88)` }} />

      <div style={{ padding: "20px 22px", flex: 1, display: "flex", flexDirection: "column", gap: 10 }}>
        {/* Materia */}
        <span style={{
          display: "inline-block",
          alignSelf: "flex-start",
          background: tema.acentoSuave,
          color: tema.acento,
          borderRadius: 99,
          padding: "3px 12px",
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: 0.5,
          fontFamily: font,
        }}>
          {materia}
        </span>

        {/* Título */}
        <div style={{
          color: C.text,
          fontWeight: 700,
          fontSize: 18,
          lineHeight: 1.25,
          flex: 1,
          fontFamily: font,
        }}>
          {titulo}
        </div>

        {/* Conteo de slides */}
        <div style={{ display: "flex", gap: 12, marginTop: 4 }}>
          {nReglas > 0 && (
            <span style={{ display: "flex", alignItems: "center", gap: 5, color: C.dim, fontSize: 12, fontFamily: font }}>
              <span style={{
                width: 6, height: 6, borderRadius: "50%",
                background: tema.acento, display: "inline-block",
              }} />
              {nReglas} {nReglas === 1 ? "sección" : "secciones"}
            </span>
          )}
          {nEjerc > 0 && (
            <span style={{ display: "flex", alignItems: "center", gap: 5, color: C.dim, fontSize: 12, fontFamily: font }}>
              <span style={{
                width: 6, height: 6, borderRadius: "50%",
                background: tema.azul || C.blue, display: "inline-block",
              }} />
              {nEjerc} reactivos
            </span>
          )}
          {nReglas === 0 && nEjerc === 0 && (
            <span style={{ color: C.muted, fontSize: 12, fontFamily: font }}>
              {slides.length} slides
            </span>
          )}
        </div>
      </div>

      {/* Footer */}
      <div style={{
        padding: "14px 22px",
        borderTop: `1px solid ${C.border}`,
        display: "flex",
        gap: 8,
      }}>
        <Link
          to={`/presentacion/${id}`}
          style={{
            flex: 1,
            display: "block",
            background: tema.acento,
            color: "#fff",
            borderRadius: 9,
            padding: "10px 0",
            textDecoration: "none",
            fontSize: 13,
            fontWeight: 700,
            textAlign: "center",
            fontFamily: font,
          }}
        >
          Abrir presentación →
        </Link>
      </div>
    </div>
  );
}

// ── Resultados de una presentación ───────────────────────────────────────────
function ResultadosPresentacion({ presentacion, resultados, profiles }) {
  const [open, setOpen] = useState(false);
  const propios = resultados
    .filter((r) => r.cuestionario_id === "presentacion-" + presentacion.id)
    .sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

  const promedio = propios.length
    ? Math.round(propios.reduce((s, r) => s + Math.round((r.puntaje / r.total) * 100), 0) / propios.length)
    : 0;

  return (
    <div style={{ border: `1px solid ${C.border}`, borderRadius: 12, overflow: "hidden", marginBottom: 10 }}>
      <button
        onClick={() => setOpen((o) => !o)}
        style={{
          width: "100%",
          background: open ? C.card : C.surface,
          border: "none",
          cursor: "pointer",
          padding: "14px 18px",
          display: "flex",
          alignItems: "center",
          gap: 12,
          textAlign: "left",
        }}
      >
        <div style={{
          width: 36, height: 36, borderRadius: 8,
          background: C.purple + "22",
          border: `1px solid ${C.purple}44`,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 18, flexShrink: 0,
        }}>
          📽
        </div>

        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ color: C.text, fontWeight: 700, fontSize: 14, fontFamily: font }}>
            {presentacion.titulo}
          </div>
          <div style={{ color: C.muted, fontSize: 11, marginTop: 2, fontFamily: font }}>
            {presentacion.materia}
          </div>
        </div>

        <div style={{ textAlign: "center", minWidth: 64 }}>
          <div style={{ color: C.dim, fontSize: 10, fontFamily: font, textTransform: "uppercase", letterSpacing: 1 }}>Sesiones</div>
          <div style={{ color: C.text, fontWeight: 700, fontSize: 17, fontFamily: font }}>{propios.length}</div>
        </div>
        {propios.length > 0 && (
          <div style={{ textAlign: "center", minWidth: 66 }}>
            <div style={{ color: C.dim, fontSize: 10, fontFamily: font, textTransform: "uppercase", letterSpacing: 1 }}>Promedio</div>
            <div style={{ color: pctColor(promedio), fontWeight: 700, fontSize: 17, fontFamily: font }}>{promedio}%</div>
          </div>
        )}
        <div style={{ color: C.muted, fontSize: 18, marginLeft: 4 }}>{open ? "▲" : "▼"}</div>
      </button>

      {open && (
        <div style={{ background: C.card, borderTop: `1px solid ${C.border}`, padding: "14px 18px" }}>
          {propios.length === 0 ? (
            <p style={{ color: C.muted, fontSize: 13, fontFamily: font }}>
              Ningún alumno ha completado esta presentación aún.
            </p>
          ) : (
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13, fontFamily: font }}>
              <thead>
                <tr>
                  {["Alumno", "Puntaje", "%", "Fecha"].map((h) => (
                    <th key={h} style={{
                      color: C.dim, fontWeight: 600, textAlign: "left",
                      padding: "4px 8px", fontSize: 11,
                      textTransform: "uppercase", letterSpacing: 1,
                    }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {propios.map((r) => {
                  const profile = profiles[r.user_id] || {};
                  const nombre = profile.nombre || profile.email || r.user_id.slice(0, 8);
                  const pct = Math.round((r.puntaje / r.total) * 100);
                  return (
                    <tr key={r.id} style={{ borderTop: `1px solid ${C.border}` }}>
                      <td style={{ padding: "8px 8px", color: C.text }}>{nombre}</td>
                      <td style={{ padding: "8px 8px", color: C.dim }}>{r.puntaje}/{r.total}</td>
                      <td style={{ padding: "8px 8px" }}>
                        <span style={{
                          background: pctColor(pct) + "22",
                          color: pctColor(pct),
                          borderRadius: 6,
                          padding: "2px 10px",
                          fontWeight: 700,
                          fontSize: 12,
                        }}>
                          {pct}%
                        </span>
                      </td>
                      <td style={{ padding: "8px 8px", color: C.muted, fontSize: 12, whiteSpace: "nowrap" }}>
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

// ── Resumen por alumno (Cuestionarios) ───────────────────────────────────────
function ResumenAlumno({ nombre, nivel, resultados }) {
  const [open, setOpen] = useState(false);
  const intentos  = resultados.length;
  const promedio  = intentos
    ? Math.round(resultados.reduce((s, r) => s + Math.round((r.puntaje / r.total) * 100), 0) / intentos)
    : 0;
  const mejorPct  = intentos
    ? Math.max(...resultados.map((r) => Math.round((r.puntaje / r.total) * 100)))
    : 0;

  const nivelColor =
    nivel === "preparatoria" ? C.blue :
    nivel === "universidad"  ? C.purple : C.green;

  return (
    <div style={{ border: `1px solid ${C.border}`, borderRadius: 12, overflow: "hidden", marginBottom: 10 }}>
      <button
        onClick={() => setOpen((o) => !o)}
        style={{
          width: "100%",
          background: open ? C.card : C.surface,
          border: "none",
          cursor: "pointer",
          padding: "14px 18px",
          display: "flex",
          alignItems: "center",
          gap: 12,
          textAlign: "left",
        }}
      >
        {/* Avatar inicial */}
        <div style={{
          width: 36, height: 36, borderRadius: "50%",
          background: nivelColor + "22",
          border: `1px solid ${nivelColor}44`,
          display: "flex", alignItems: "center", justifyContent: "center",
          color: nivelColor, fontWeight: 700, fontSize: 15, fontFamily: font,
          flexShrink: 0,
        }}>
          {(nombre || "?")[0].toUpperCase()}
        </div>

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

        <div style={{ textAlign: "center", minWidth: 56 }}>
          <div style={{ color: C.dim, fontSize: 10, fontFamily: font, textTransform: "uppercase", letterSpacing: 1 }}>Intentos</div>
          <div style={{ color: C.text, fontWeight: 700, fontSize: 17, fontFamily: font }}>{intentos}</div>
        </div>
        <div style={{ textAlign: "center", minWidth: 66 }}>
          <div style={{ color: C.dim, fontSize: 10, fontFamily: font, textTransform: "uppercase", letterSpacing: 1 }}>Promedio</div>
          <div style={{ color: pctColor(promedio), fontWeight: 700, fontSize: 17, fontFamily: font }}>{promedio}%</div>
        </div>
        <div style={{ textAlign: "center", minWidth: 56 }}>
          <div style={{ color: C.dim, fontSize: 10, fontFamily: font, textTransform: "uppercase", letterSpacing: 1 }}>Mejor</div>
          <div style={{ color: pctColor(mejorPct), fontWeight: 700, fontSize: 17, fontFamily: font }}>{mejorPct}%</div>
        </div>
        <div style={{ color: C.muted, fontSize: 18, marginLeft: 4 }}>{open ? "▲" : "▼"}</div>
      </button>

      {open && (
        <div style={{ background: C.card, borderTop: `1px solid ${C.border}`, padding: "14px 18px" }}>
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
                      <td style={{ padding: "8px 8px", color: C.text, maxWidth: 260 }}>
                        {r.cuestionario_titulo || r.cuestionario_id}
                      </td>
                      <td style={{ padding: "8px 8px", color: C.dim }}>
                        {r.puntaje}/{r.total}
                      </td>
                      <td style={{ padding: "8px 8px" }}>
                        <span style={{
                          background: pctColor(pct) + "22",
                          color: pctColor(pct),
                          borderRadius: 6,
                          padding: "2px 10px",
                          fontWeight: 700,
                          fontSize: 12,
                        }}>
                          {pct}%
                        </span>
                      </td>
                      <td style={{ padding: "8px 8px", color: C.muted, fontSize: 12, whiteSpace: "nowrap" }}>
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
  const [tab, setTab] = useState("cuestionarios");
  const [loading, setLoading] = useState(true);
  const [resultados, setResultados] = useState([]);
  const [profiles, setProfiles] = useState({});
  const [filtroNivel, setFiltroNivel] = useState("todos");
  const [busqueda, setBusqueda] = useState("");

  const presentaciones = listaPresentaciones();

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

  // Agrupar por alumno
  const byUser = {};
  resultados.forEach((r) => {
    if (!byUser[r.user_id]) byUser[r.user_id] = [];
    byUser[r.user_id].push(r);
  });

  const alumnos = Object.entries(byUser)
    .map(([uid, res]) => ({
      uid,
      profile: profiles[uid] || { nombre: "", nivel: "—" },
      resultados: res,
    }))
    .filter((a) => {
      if (filtroNivel !== "todos" && a.profile.nivel !== filtroNivel) return false;
      if (busqueda && !a.profile.nombre.toLowerCase().includes(busqueda.toLowerCase())) return false;
      return true;
    });

  const totalIntentos   = resultados.length;
  const promedioGlobal  = totalIntentos
    ? Math.round(resultados.reduce((s, r) => s + Math.round((r.puntaje / r.total) * 100), 0) / totalIntentos)
    : 0;

  if (loading) {
    return (
      <div style={{ minHeight: "100vh", background: C.bg, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{
          width: 32, height: 32, borderRadius: "50%",
          border: "2px solid rgba(59,158,255,.15)",
          borderTopColor: C.blue,
          animation: "spin .7s linear infinite",
        }} />
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", background: C.bg, fontFamily: font }}>
      {/* ── Navbar ─────────────────────────────────────────────────────────── */}
      <div style={{
        position: "sticky", top: 0, zIndex: 50,
        background: "rgba(14,15,17,0.96)",
        backdropFilter: "blur(12px)",
        borderBottom: `1px solid ${C.border}`,
        padding: "0 24px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        height: 56,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{
            width: 28, height: 28, borderRadius: 8,
            background: C.blue + "22",
            border: `1px solid ${C.blue}44`,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 14,
          }}>
            ⚙
          </div>
          <span style={{ color: C.text, fontWeight: 700, fontSize: 15 }}>
            Panel de Administrador
          </span>
        </div>
        <Link to="/" style={{
          color: C.muted, fontSize: 13, textDecoration: "none",
          border: `1px solid ${C.border}`, borderRadius: 8,
          padding: "5px 14px", fontFamily: font,
          transition: "color .15s",
        }}
          onMouseEnter={(e) => { e.currentTarget.style.color = C.text; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = C.muted; }}
        >
          ← Inicio
        </Link>
      </div>

      <div style={{ maxWidth: 980, margin: "0 auto", padding: "32px 16px" }}>

        {/* ── Stats globales ──────────────────────────────────────────────── */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: 14,
          marginBottom: 32,
        }}>
          <StatCard
            label="Alumnos registrados"
            value={Object.keys(byUser).length}
          />
          <StatCard
            label="Intentos totales"
            value={totalIntentos}
            sub="en todos los cuestionarios"
          />
          <StatCard
            label="Promedio global"
            value={`${promedioGlobal}%`}
            color={promedioGlobal > 0 ? pctColor(promedioGlobal) : C.muted}
          />
          <StatCard
            label="Presentaciones"
            value={presentaciones.length}
            color={C.purple}
            sub="disponibles"
          />
        </div>

        {/* ── Tabs ───────────────────────────────────────────────────────── */}
        <div style={{
          borderBottom: `1px solid ${C.border}`,
          marginBottom: 28,
          display: "flex",
          gap: 0,
        }}>
          <TabBtn
            active={tab === "cuestionarios"}
            onClick={() => setTab("cuestionarios")}
            badge={Object.keys(byUser).length}
          >
            Cuestionarios
          </TabBtn>
          <TabBtn
            active={tab === "presentaciones"}
            onClick={() => setTab("presentaciones")}
            badge={presentaciones.length}
          >
            Presentaciones
          </TabBtn>
        </div>

        {/* ── Tab: Cuestionarios ──────────────────────────────────────────── */}
        {tab === "cuestionarios" && (
          <>
            {/* Filtros */}
            <div style={{ display: "flex", gap: 10, marginBottom: 20, flexWrap: "wrap", alignItems: "center" }}>
              <div style={{ position: "relative", flex: "1 1 200px", maxWidth: 300 }}>
                <span style={{
                  position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)",
                  color: C.muted, fontSize: 14, pointerEvents: "none",
                }}>
                  ⌕
                </span>
                <input
                  value={busqueda}
                  onChange={(e) => setBusqueda(e.target.value)}
                  placeholder="Buscar alumno…"
                  style={{
                    width: "100%",
                    background: C.surface,
                    border: `1px solid ${C.border}`,
                    borderRadius: 9,
                    padding: "9px 14px 9px 34px",
                    color: C.text,
                    fontSize: 13,
                    fontFamily: font,
                    outline: "none",
                    boxSizing: "border-box",
                  }}
                  onFocus={(e) => { e.target.style.borderColor = C.blue + "66"; }}
                  onBlur={(e)  => { e.target.style.borderColor = C.border; }}
                />
              </div>
              <div style={{ display: "flex", gap: 6 }}>
                {["todos", "preparatoria", "universidad"].map((n) => (
                  <button
                    key={n}
                    onClick={() => setFiltroNivel(n)}
                    style={{
                      border: filtroNivel === n ? "none" : `1px solid ${C.border}`,
                      borderRadius: 99,
                      padding: "8px 16px",
                      fontSize: 12,
                      fontWeight: 700,
                      cursor: "pointer",
                      background: filtroNivel === n ? C.blue : C.surface,
                      color: filtroNivel === n ? "#fff" : C.muted,
                      fontFamily: font,
                      transition: "background .15s, color .15s",
                    }}
                  >
                    {n.charAt(0).toUpperCase() + n.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Lista de alumnos */}
            {alumnos.length === 0 ? (
              <div style={{
                textAlign: "center",
                padding: "80px 20px",
                color: C.muted,
                fontSize: 15,
                fontFamily: font,
              }}>
                <div style={{ fontSize: 40, marginBottom: 16, opacity: 0.4 }}>📋</div>
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
          </>
        )}

        {/* ── Tab: Presentaciones ─────────────────────────────────────────── */}
        {tab === "presentaciones" && (
          <>
            {presentaciones.length === 0 ? (
              <div style={{
                textAlign: "center",
                padding: "80px 20px",
                color: C.muted,
                fontSize: 15,
                fontFamily: font,
              }}>
                <div style={{ fontSize: 40, marginBottom: 16, opacity: 0.4 }}>📽</div>
                No hay presentaciones registradas aún.
              </div>
            ) : (
              <>
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                  gap: 20,
                }}>
                  {presentaciones.map((p) => (
                    <PresentacionCard
                      key={p.id}
                      id={p.id}
                      titulo={p.titulo}
                      materia={p.materia}
                    />
                  ))}
                </div>

                {/* Historial de puntuaciones */}
                <div style={{ marginTop: 40 }}>
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    marginBottom: 18,
                  }}>
                    <div style={{ flex: 1, height: 1, background: C.border }} />
                    <span style={{
                      color: C.dim,
                      fontSize: 11,
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.12em",
                      fontFamily: font,
                      whiteSpace: "nowrap",
                    }}>
                      Puntuaciones por presentación
                    </span>
                    <div style={{ flex: 1, height: 1, background: C.border }} />
                  </div>
                  {presentaciones.map((p) => (
                    <ResultadosPresentacion
                      key={p.id}
                      presentacion={p}
                      resultados={resultados}
                      profiles={profiles}
                    />
                  ))}
                </div>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}
