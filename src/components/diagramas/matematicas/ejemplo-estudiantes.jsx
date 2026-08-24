// Diagrama «ejemplo-estudiantes» — matematicas.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

export default function EjemploEstudiantesTabla({ tema }) {
  const cols = [
    { t: "Estudiante",   sub: "individuo",       color: tema.muted },
    { t: "Sexo",         sub: "cualit. nominal", color: tema.azul },
    { t: "Inglés",       sub: "cualit. ordinal", color: tema.azul },
    { t: "Hermanos",     sub: "cuant. discreta", color: tema.acento },
    { t: "Estatura (m)", sub: "cuant. continua", color: tema.acento },
  ];
  const filas = [
    ["Ana",   "Mujer",  "Intermedio", "2", "1.60"],
    ["Luis",  "Hombre", "Básico",     "1", "1.72"],
    ["Sofía", "Mujer",  "Avanzado",   "0", "1.58"],
    ["Diego", "Hombre", "Intermedio", "3", "1.68"],
    ["María", "Mujer",  "Básico",     "1", "1.65"],
  ];
  const td = { padding: "5px 12px", fontFamily: tema.mono, fontSize: 13, textAlign: "center", borderBottom: `1px solid ${tema.border}` };
  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <table style={{ borderCollapse: "collapse", background: tema.card, borderRadius: 8, overflow: "hidden" }}>
        <thead>
          <tr>
            {cols.map((c, i) => (
              <th key={i} style={{ padding: "7px 12px", borderBottom: `1px solid ${tema.acentoBorde}` }}>
                <div style={{ color: c.color, fontFamily: tema.mono, fontSize: 12, letterSpacing: "0.04em", fontWeight: 700 }}>{c.t}</div>
                <div style={{ color: tema.muted, fontSize: 9, fontStyle: "italic", marginTop: 2 }}>{c.sub}</div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filas.map((r, i) => (
            <tr key={i}>
              {r.map((cell, j) => (
                <td key={j} style={{ ...td, color: j === 0 ? tema.azul : tema.texto, fontWeight: j === 0 ? 700 : 400 }}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
