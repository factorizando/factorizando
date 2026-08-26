// Diagrama «proceso-sigma» — matematicas.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

export default function ProcesoSigmaSVG({ tema }) {
  const bl = tema.azul, gr = tema.canal(1), a = tema.acento, mu = tema.muted, bor = tema.border;
  const C = [57, 160, 263];
  const rows = [
    { x: "4", dx: "−2", dx2: "4" },
    { x: "6", dx: " 0", dx2: "0" },
    { x: "8", dx: "+2", dx2: "4" },
  ];
  const rowsY = [49, 70, 91];
  return (
    <svg viewBox="0 0 320 148" width="100%" style={{ display: "block", maxHeight: 156 }}>
      <rect x="14" y="8" width="292" height="106" rx="6" fill="none" stroke={bor} strokeWidth="1" />
      <rect x="14" y="8" width="292" height="24" rx="6" fill={`${bl}22`} />
      <rect x="14" y="99" width="292" height="15" rx="0" fill={`${gr}1a`} />
      {[100, 200].map(x => <line key={x} x1={x} y1="8" x2={x} y2="114" stroke={bor} strokeWidth="0.8" />)}
      {[32, 57, 78, 99].map(y => <line key={y} x1="14" y1={y} x2="306" y2={y} stroke={bor} strokeWidth="0.8" />)}
      <text x={C[0]} y={26} fill={bl} fontSize="11" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">x</text>
      <text x={C[1]} y={26} fill={bl} fontSize="10.5" fontFamily="'Figtree', system-ui, sans-serif" textAnchor="middle">{"x − x̅"}</text>
      <text x={C[2]} y={26} fill={bl} fontSize="10.5" fontFamily="'Figtree', system-ui, sans-serif" textAnchor="middle">{"(x − x̅)²"}</text>
      {rows.map((r, i) => (
        <g key={i}>
          <text x={C[0]} y={rowsY[i]} fill={tema.texto} fontSize="12" fontFamily="'IBM Plex Mono',monospace" textAnchor="middle">{r.x}</text>
          <text x={C[1]} y={rowsY[i]} fill={a} fontSize="12" fontFamily="'IBM Plex Mono',monospace" textAnchor="middle">{r.dx}</text>
          <text x={C[2]} y={rowsY[i]} fill={gr} fontSize="12" fontFamily="'IBM Plex Mono',monospace" textAnchor="middle">{r.dx2}</text>
        </g>
      ))}
      <text x={C[0]} y={110} fill={mu} fontSize="10.5" fontFamily="'Figtree', system-ui, sans-serif" textAnchor="middle">Σ</text>
      <text x={C[1]} y={110} fill={mu} fontSize="10.5" textAnchor="middle">—</text>
      <text x={C[2]} y={110} fill={gr} fontSize="12.5" fontFamily="'IBM Plex Mono',monospace" fontWeight="700" textAnchor="middle">8</text>
      <text x="160" y="136" fill={a} fontSize="10.5" fontFamily="'IBM Plex Mono',monospace" textAnchor="middle">{"σ² = 8/3 ≈ 2.67  →  σ = √2.67 ≈ 1.63"}</text>
    </svg>
  );
}
