// Catálogo de talleres de regularización (primaria / secundaria).
// Ruta admin: /regularizacion. El taller se abre a pantalla completa en
// /regularizacion/:id, fuera del panel admin, porque se usa frente al alumno.
//
// Se entra de dos maneras: hojeando por materia, o preguntando "hoy quiero
// trabajar divisiones". Lo segundo se resuelve con los temas que declara cada
// actividad (ver `src/data/talleres/temas.js`), no con el título del taller.
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import AdminHeader from "../components/admin/AdminHeader.jsx";
import { buscarPorTema, buscarTalleres } from "../data/talleres/talleresIndex.js";
import { TEMAS_POR_ID, buscarTemas, temasPorArea, etiquetaTema } from "../data/talleres/temas.js";

const C = {
  bg:      "#0e0f11",
  card:    "#16181f",
  surface: "#1c1f24",
  border:  "#252830",
  blue:    "#3b9eff",
  green:   "#34d399",
  text:    "#e8eaf0",
  muted:   "#5a6070",
  dim:     "#8a9ab8",
};

const font = "'DM Sans', sans-serif";

const NIVELES = [
  { id: "todos",      label: "Todos" },
  { id: "primaria",   label: "Primaria" },
  { id: "secundaria", label: "Secundaria" },
];

const NIVEL_COLOR = { primaria: "#34d399", secundaria: "#a78bfa" };

// El catálogo se lee por materia: es como el maestro planea la sesión.
// Las materias que no estén aquí caen al final, en orden alfabético.
const ORDEN_MATERIAS = ["Matemáticas", "Español"];

function agruparPorMateria(resultados) {
  const grupos = new Map();
  resultados.forEach((r) => {
    if (!grupos.has(r.taller.materia)) grupos.set(r.taller.materia, []);
    grupos.get(r.taller.materia).push(r);
  });
  return [...grupos.entries()].sort(([a], [b]) => {
    const ia = ORDEN_MATERIAS.indexOf(a), ib = ORDEN_MATERIAS.indexOf(b);
    if (ia !== -1 || ib !== -1) return (ia === -1 ? 99 : ia) - (ib === -1 ? 99 : ib);
    return a.localeCompare(b, "es");
  });
}

function Chip({ children, color = C.muted, fondo = C.surface }) {
  return (
    <span style={{
      background: fondo, color, borderRadius: 5, padding: "2px 8px",
      fontSize: 11, fontWeight: 700, whiteSpace: "nowrap",
    }}>
      {children}
    </span>
  );
}

export default function Regularizacion() {
  const [nivel, setNivel] = useState("todos");
  const [q, setQ] = useState("");
  const [tema, setTema] = useState(null);
  const [verTemas, setVerTemas] = useState(false);

  const consulta = q.trim();
  const hayFiltro = Boolean(tema || consulta);

  const resultados = useMemo(
    () => (tema ? buscarPorTema(tema) : buscarTalleres(consulta)),
    [tema, consulta]
  );
  const visibles = resultados.filter(
    (r) => nivel === "todos" || r.taller.nivel === nivel
  );
  const porMateria = agruparPorMateria(visibles);

  // Mientras se escribe se ofrecen los temas que casan: un clic fija el filtro
  // y deja de depender de que la palabra exacta aparezca en algún lado.
  const sugerencias = tema ? [] : buscarTemas(consulta).slice(0, 8);

  function limpiar() {
    setTema(null);
    setQ("");
  }
  function elegirTema(id) {
    setTema(id);
    setQ("");
    setVerTemas(false);
  }

  return (
    <div style={{ minHeight: "100vh", background: C.bg, color: C.text, fontFamily: font }}>
      {/* Sin las pestañas del back-office: desde aquí no se llega a Alumnos,
          Cargos ni Suscripciones. La entrada es de ida — se accede desde el
          panel admin o desde Inicio, no al revés. */}
      <AdminHeader chip="Regularización" tabs={[]} />

      <main style={{ maxWidth: 1000, margin: "0 auto", padding: "32px 24px 80px" }}>
        <header style={{ marginBottom: 22 }}>
          <h1 style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 700,
            fontSize: "clamp(26px, 4.5vw, 38px)", margin: "0 0 10px", letterSpacing: ".005em",
          }}>
            Regularización
          </h1>
          <p style={{ color: C.dim, fontSize: 15, lineHeight: 1.6, maxWidth: 640, margin: 0 }}>
            Talleres manipulativos para acompañar sesiones presenciales de primaria y
            secundaria. Cada sesión de práctica queda registrada en el expediente del alumno.
          </p>
        </header>

        {/* ── Buscador por tema ───────────────────────────────────────────── */}
        <section style={{
          background: C.card, border: `1px solid ${C.border}`, borderRadius: 14,
          padding: "16px 18px", marginBottom: 20,
        }}>
          <label htmlFor="buscaTema" style={{
            display: "block", fontSize: 12, fontWeight: 700, textTransform: "uppercase",
            letterSpacing: ".07em", color: C.muted, marginBottom: 10,
          }}>
            ¿Qué quieres trabajar hoy?
          </label>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center" }}>
            <input
              id="buscaTema"
              value={q}
              onChange={(e) => { setQ(e.target.value); setTema(null); }}
              placeholder="divisiones, adjetivos, fracciones, acentuación…"
              style={{
                flex: "1 1 260px", background: C.bg, border: `1px solid ${C.border}`,
                borderRadius: 10, padding: "10px 13px", color: C.text,
                fontSize: 14, fontFamily: font, outline: "none",
              }}
            />
            <button
              type="button"
              onClick={() => setVerTemas((v) => !v)}
              style={{
                background: verTemas ? C.surface : "transparent", color: verTemas ? C.text : C.dim,
                border: `1px solid ${C.border}`, borderRadius: 10, padding: "10px 14px",
                fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: font,
              }}
            >
              {verTemas ? "Ocultar temas" : "Ver todos los temas"}
            </button>
            {hayFiltro && (
              <button
                type="button"
                onClick={limpiar}
                style={{
                  background: "transparent", color: C.muted, border: "none",
                  fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: font,
                }}
              >
                Quitar filtro ✕
              </button>
            )}
          </div>

          {tema && (
            <p style={{ margin: "12px 0 0", fontSize: 13.5, color: C.dim }}>
              Mostrando lo que trabaja{" "}
              <strong style={{ color: C.text }}>{etiquetaTema(tema)}</strong>
              {" "}· {TEMAS_POR_ID[tema]?.materia}
            </p>
          )}

          {!tema && sugerencias.length > 0 && (
            <div style={{ display: "flex", gap: 7, flexWrap: "wrap", marginTop: 12 }}>
              {sugerencias.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => elegirTema(t.id)}
                  style={{
                    background: C.surface, color: C.text, border: `1px solid ${C.border}`,
                    borderRadius: 99, padding: "5px 13px", fontSize: 12.5,
                    cursor: "pointer", fontFamily: font,
                  }}
                >
                  {t.label} <span style={{ color: C.muted }}>· {t.materia}</span>
                </button>
              ))}
            </div>
          )}

          {verTemas && (
            <div style={{ marginTop: 16, display: "grid", gap: 18 }}>
              {ORDEN_MATERIAS.map((m) => (
                <div key={m}>
                  <div style={{
                    fontSize: 12, fontWeight: 700, textTransform: "uppercase",
                    letterSpacing: ".07em", color: C.dim, marginBottom: 10,
                  }}>{m}</div>
                  <div style={{ display: "grid", gap: 10 }}>
                    {temasPorArea(m).map(([area, lista]) => (
                      <div key={area} style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
                        <span style={{ fontSize: 12, color: C.muted, minWidth: 150 }}>{area}</span>
                        {lista.map((t) => (
                          <button
                            key={t.id}
                            type="button"
                            onClick={() => elegirTema(t.id)}
                            style={{
                              background: "transparent", color: C.text, border: `1px solid ${C.border}`,
                              borderRadius: 99, padding: "4px 12px", fontSize: 12.5,
                              cursor: "pointer", fontFamily: font,
                            }}
                          >
                            {t.label}
                          </button>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* ── Filtro por nivel ────────────────────────────────────────────── */}
        <div style={{ display: "flex", gap: 8, marginBottom: 22, flexWrap: "wrap" }}>
          {NIVELES.map((n) => (
            <button
              key={n.id}
              type="button"
              onClick={() => setNivel(n.id)}
              style={{
                background: nivel === n.id ? C.surface : "transparent",
                color: nivel === n.id ? C.text : C.muted,
                border: `1px solid ${nivel === n.id ? C.border : "transparent"}`,
                borderRadius: 99, padding: "7px 16px", fontSize: 13,
                fontWeight: nivel === n.id ? 700 : 500,
                cursor: "pointer", fontFamily: font,
              }}
            >
              {n.label}
            </button>
          ))}
        </div>

        {visibles.length === 0 ? (
          <p style={{ color: C.muted, fontSize: 14 }}>
            {hayFiltro
              ? "Ningún taller trabaja eso todavía. Prueba con «Ver todos los temas»."
              : "No hay talleres para este nivel todavía."}
          </p>
        ) : (
          porMateria.map(([materia, lista], i) => (
            <section key={materia} style={{ marginTop: i === 0 ? 0 : 34 }}>
              <div style={{
                display: "flex", alignItems: "baseline", gap: 10, marginBottom: 14,
                paddingBottom: 8, borderBottom: `1px solid ${C.border}`,
              }}>
                <h2 style={{
                  fontSize: 12, fontWeight: 700, textTransform: "uppercase",
                  letterSpacing: ".07em", color: C.dim, margin: 0,
                }}>
                  {materia}
                </h2>
                <span style={{ fontSize: 12, color: C.muted }}>
                  {lista.length} {lista.length === 1 ? "taller" : "talleres"}
                </span>
              </div>

              <div style={{
                display: "grid", gap: 16,
                gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              }}>
                {lista.map(({ taller: t, actividades }) => {
                  // Con filtro se listan solo las actividades que lo trabajan;
                  // sin filtro, todas: la tarjeta es la ficha del taller.
                  const mostradas = hayFiltro && actividades.length ? actividades : t.actividades;
                  return (
                    <Link
                      key={t.id}
                      to={`/regularizacion/${t.id}`}
                      style={{
                        display: "block", background: C.card, border: `1px solid ${C.border}`,
                        borderRadius: 16, padding: "20px 22px", textDecoration: "none", color: C.text,
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 12 }}>
                        <span style={{
                          display: "grid", placeItems: "center", width: 48, height: 48, flexShrink: 0,
                          borderRadius: 13, background: C.surface, fontSize: 26, lineHeight: 1,
                        }}>{t.icono}</span>
                        <div style={{ minWidth: 0 }}>
                          <div style={{ fontSize: 17, fontWeight: 700, marginBottom: 3 }}>{t.titulo}</div>
                          {/* La materia ya la dice el encabezado del bloque. */}
                          <div style={{ fontSize: 13, color: C.muted }}>{t.tema}</div>
                        </div>
                      </div>

                      <p style={{ fontSize: 13.5, color: C.dim, lineHeight: 1.55, margin: "0 0 14px" }}>
                        {t.descripcion}
                      </p>

                      {mostradas.length > 0 && (
                        <div style={{ marginBottom: 14 }}>
                          <div style={{
                            fontSize: 11, fontWeight: 700, textTransform: "uppercase",
                            letterSpacing: ".06em", color: C.muted, marginBottom: 7,
                          }}>
                            {hayFiltro && actividades.length
                              ? `Lo trabaja en ${actividades.length === 1 ? "esta actividad" : "estas actividades"}`
                              : "Lo que se trabaja"}
                          </div>
                          <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gap: 7 }}>
                            {mostradas.map((a) => (
                              <li key={a.id} style={{ fontSize: 13, lineHeight: 1.4 }}>
                                <div style={{ display: "flex", gap: 8, alignItems: "baseline" }}>
                                  <span style={{ color: C.text, fontWeight: 600 }}>{a.nombre}</span>
                                  <span style={{ color: C.muted, fontSize: 11, whiteSpace: "nowrap" }}>
                                    {a.edades} años
                                  </span>
                                </div>
                                <div style={{ display: "flex", gap: 5, flexWrap: "wrap", marginTop: 4 }}>
                                  {a.temas.map((id) => (
                                    <Chip
                                      key={id}
                                      color={id === tema ? C.green : C.muted}
                                      fondo={id === tema ? C.green + "22" : C.surface}
                                    >
                                      {etiquetaTema(id)}
                                    </Chip>
                                  ))}
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <div style={{ display: "flex", gap: 7, flexWrap: "wrap" }}>
                        <Chip
                          color={NIVEL_COLOR[t.nivel] || C.blue}
                          fondo={(NIVEL_COLOR[t.nivel] || C.blue) + "22"}
                        >
                          <span style={{ textTransform: "capitalize" }}>{t.nivel}</span>
                        </Chip>
                        <Chip>{t.edades}</Chip>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </section>
          ))
        )}
      </main>
    </div>
  );
}
