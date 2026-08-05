// Catálogo de talleres de regularización (primaria / secundaria).
// Ruta admin: /regularizacion. El taller se abre a pantalla completa en
// /regularizacion/:id, fuera del panel admin, porque se usa frente al alumno.
import { useState } from "react";
import { Link } from "react-router-dom";
import AdminHeader from "../components/admin/AdminHeader.jsx";
import { listaTalleres } from "../data/talleres/talleresIndex.js";

const C = {
  bg:      "#0e0f11",
  card:    "#16181f",
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

function agruparPorMateria(talleres) {
  const grupos = new Map();
  talleres.forEach((t) => {
    if (!grupos.has(t.materia)) grupos.set(t.materia, []);
    grupos.get(t.materia).push(t);
  });
  return [...grupos.entries()].sort(([a], [b]) => {
    const ia = ORDEN_MATERIAS.indexOf(a), ib = ORDEN_MATERIAS.indexOf(b);
    if (ia !== -1 || ib !== -1) return (ia === -1 ? 99 : ia) - (ib === -1 ? 99 : ib);
    return a.localeCompare(b, "es");
  });
}

export default function Regularizacion() {
  const [nivel, setNivel] = useState("todos");
  const talleres = listaTalleres();
  const visibles = nivel === "todos" ? talleres : talleres.filter((t) => t.nivel === nivel);
  const porMateria = agruparPorMateria(visibles);

  return (
    <div style={{ minHeight: "100vh", background: C.bg, color: C.text, fontFamily: font }}>
      {/* Sin las pestañas del back-office: desde aquí no se llega a Alumnos,
          Cargos ni Suscripciones. La entrada es de ida — se accede desde el
          panel admin o desde Inicio, no al revés. */}
      <AdminHeader chip="Regularización" tabs={[]} />

      <main style={{ maxWidth: 1000, margin: "0 auto", padding: "32px 24px 80px" }}>
        <header style={{ marginBottom: 26 }}>
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

        <div style={{ display: "flex", gap: 8, marginBottom: 22, flexWrap: "wrap" }}>
          {NIVELES.map((n) => (
            <button
              key={n.id}
              type="button"
              onClick={() => setNivel(n.id)}
              style={{
                background: nivel === n.id ? "#1c1f24" : "transparent",
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
            No hay talleres para este nivel todavía.
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
                {lista.map((t) => (
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
                        borderRadius: 13, background: "#1c1f24", fontSize: 26, lineHeight: 1,
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

                    <div style={{ display: "flex", gap: 7, flexWrap: "wrap" }}>
                      <span style={{
                        background: (NIVEL_COLOR[t.nivel] || C.blue) + "22",
                        color: NIVEL_COLOR[t.nivel] || C.blue,
                        borderRadius: 5, padding: "2px 9px", fontSize: 11, fontWeight: 700,
                        textTransform: "capitalize",
                      }}>{t.nivel}</span>
                      <span style={{
                        background: "#1c1f24", color: C.muted,
                        borderRadius: 5, padding: "2px 9px", fontSize: 11, fontWeight: 700,
                      }}>{t.edades}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          ))
        )}
      </main>
    </div>
  );
}
