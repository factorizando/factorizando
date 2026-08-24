// Diagrama «dardo-diana» — matematicas.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

export default function DardoDianaSVG({ tema }) {
  const a = tema.acento, bl = tema.azul, rj = tema.rojo, T = tema.texto;
  const cx = 84, cy = 88, R = 72, r = 36;
  return (
    <svg viewBox="0 0 250 182" width="100%" style={{ display: "block", maxHeight: 194 }}>
      {/* Diana (área total) */}
      <circle cx={cx} cy={cy} r={R} fill={tema.azulSuave} stroke={bl} strokeWidth="2.5"/>
      <circle cx={cx} cy={cy} r={R * 0.72} fill="none" stroke={bl} strokeWidth="1" opacity="0.35"/>
      {/* Blanco (área favorable) */}
      <circle cx={cx} cy={cy} r={r} fill={`${rj}40`} stroke={rj} strokeWidth="2"/>
      {/* Radios R y r */}
      <line x1={cx} y1={cy} x2={cx + R} y2={cy} stroke={bl} strokeWidth="1.4" strokeDasharray="4 3"/>
      <line x1={cx} y1={cy} x2={cx} y2={cy - r} stroke={rj} strokeWidth="1.8"/>
      <text x={cx + R / 2} y={cy - 7} fill={bl} fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">R</text>
      <text x={cx - 11} y={cy - r / 2 + 5} fill={rj} fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">r</text>
      {/* Centro e impacto del dardo */}
      <circle cx={cx} cy={cy} r="2.5" fill={rj}/>
      <circle cx={cx + 13} cy={cy - 10} r="3.8" fill={T}/>
      {/* Etiquetas */}
      <text x="176" y="58" fill={rj} fontSize="12" fontFamily="'Figtree', system-ui, sans-serif" fontWeight="600">blanco</text>
      <text x="176" y="76" fill={T} fontSize="14" fontFamily="'IBM Plex Mono',monospace">πr²</text>
      <text x="176" y="106" fill={bl} fontSize="12" fontFamily="'Figtree', system-ui, sans-serif" fontWeight="600">diana</text>
      <text x="176" y="124" fill={T} fontSize="14" fontFamily="'IBM Plex Mono',monospace">πR²</text>
      <text x="176" y="156" fill={a} fontSize="15" fontFamily="'IBM Plex Mono',monospace">P = ¼</text>
    </svg>
  );
}
