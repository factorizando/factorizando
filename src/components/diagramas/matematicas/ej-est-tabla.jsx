// Diagrama «ej-est-tabla», «tabla-frecuencias» — matematicas.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

export default function TablaFrecuenciasEst({ tema }) {
  const rows = [
    ["6", 2, "0.10", "10%", 2],
    ["7", 5, "0.25", "25%", 7],
    ["8", 8, "0.40", "40%", 15],
    ["9", 4, "0.20", "20%", 19],
    ["10", 1, "0.05", "5%", 20],
  ];
  // Sin uppercase: la distinción f (absoluta) vs F (acumulada) es semántica y debe conservarse.
  const th = { padding: "7px 12px", color: tema.acento, fontFamily: tema.mono, fontSize: 12, letterSpacing: "0.06em", borderBottom: `1px solid ${tema.acentoBorde}`, textAlign: "center" };
  const td = { padding: "6px 12px", fontFamily: tema.mono, fontSize: 13, textAlign: "center", borderBottom: `1px solid ${tema.border}` };
  const tot = { ...td, color: tema.acento, fontWeight: 700, borderBottom: "none" };
  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <table style={{ borderCollapse: "collapse", background: tema.card, borderRadius: 8, overflow: "hidden" }}>
        <thead>
          <tr>
            <th style={th}>Calif. (xᵢ)</th><th style={th}>f</th><th style={th}>fᵣ</th><th style={th}>%</th><th style={th}>F</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}>
              {r.map((c, j) => (
                <td key={j} style={{ ...td, color: j === 0 ? tema.azul : tema.texto }}>{c}</td>
              ))}
            </tr>
          ))}
          <tr>
            <td style={tot}>Σ</td><td style={tot}>20</td><td style={tot}>1.00</td><td style={tot}>100%</td>
            <td style={{ ...td, color: tema.muted, borderBottom: "none" }}>—</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
