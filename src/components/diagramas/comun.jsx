/* eslint-disable react-refresh/only-export-components -- este módulo agrupa a propósito
   componentes (Bloque, Vector, EjesXY…) y funciones puras (arrowHead) que comparten los
   diagramas de varias materias; separarlos en dos archivos no compra nada. */
// Piezas compartidas por los diagramas de varias materias.
//
// Salieron de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md): son lo
// único que impedía extraer los componentes de física, química y biología, que
// las usaban como funciones locales del archivo grande.
//
// Todas son puras y reciben lo que necesitan por argumento; ninguna conoce el
// tema, salvo donde se le pasa explícitamente.

export function arrowHead(x1, y1, x2, y2, s) {
  const ang = Math.atan2(y2 - y1, x2 - x1);
  const a1 = ang + Math.PI * 0.82, a2 = ang - Math.PI * 0.82;
  const p1 = `${(x2 + s * Math.cos(a1)).toFixed(1)},${(y2 + s * Math.sin(a1)).toFixed(1)}`;
  const p2 = `${(x2 + s * Math.cos(a2)).toFixed(1)},${(y2 + s * Math.sin(a2)).toFixed(1)}`;
  return `${x2},${y2} ${p1} ${p2}`;
}

export function EjesXY({ ox, oy, xEnd, yTop, tema, labelX, labelY }) {
  const mu = tema.muted;
  return (
    <>
      <line x1={ox} y1={oy} x2={xEnd} y2={oy} stroke={mu} strokeWidth="1.5" />
      <line x1={ox} y1={oy} x2={ox} y2={yTop} stroke={mu} strokeWidth="1.5" />
      <polygon points={`${xEnd + 6},${oy} ${xEnd},${oy - 3.5} ${xEnd},${oy + 3.5}`} fill={mu} />
      <polygon points={`${ox},${yTop - 6} ${ox - 3.5},${yTop} ${ox + 3.5},${yTop}`} fill={mu} />
      <text x={xEnd + 2} y={oy + 14} fill={mu} fontSize="11" fontFamily="Georgia,serif" fontStyle="italic">{labelX}</text>
      <text x={ox - 14} y={yTop + 2} fill={mu} fontSize="11" fontFamily="Georgia,serif" fontStyle="italic">{labelY}</text>
    </>
  );
}

export function Bloque({ x, y, w, h, tema, label, fill }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={4} fill={fill || tema.acentoMed} stroke={tema.acento} strokeWidth="1.8" />
      {label && <text x={x + w / 2} y={y + h / 2 + 5} fill={tema.texto} fontSize="14" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">{label}</text>}
    </g>
  );
}

export function Vector({ x1, y1, x2, y2, color, label, lx, ly, sw }) {
  return (
    <g>
      <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth={sw || 2.4} />
      <polygon points={arrowHead(x1, y1, x2, y2, 8)} fill={color} />
      {label && <text x={lx} y={ly} fill={color} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic">{label}</text>}
    </g>
  );
}

export function GenDobleHelice({ tema, x0 = 0, w = 220, h = 130 }) {
  const a = tema.acento, bl = tema.azul;
  const cx = x0 + w / 2;
  const rungs = [];
  const N = 9;
  for (let i = 0; i < N; i++) {
    const t = i / (N - 1);
    const y = 14 + t * (h - 28);
    const phase = t * Math.PI * 2.4;
    const xL = cx + 26 * Math.sin(phase);
    const xR = cx - 26 * Math.sin(phase);
    rungs.push({ y, xL, xR, front: Math.cos(phase) > 0 });
  }
  return (
    <>
      <path d={`M ${rungs[0].xL} ${rungs[0].y} ` + rungs.map(r => `L ${r.xL} ${r.y}`).join(" ")} fill="none" stroke={a} strokeWidth="2.4" />
      <path d={`M ${rungs[0].xR} ${rungs[0].y} ` + rungs.map(r => `L ${r.xR} ${r.y}`).join(" ")} fill="none" stroke={bl} strokeWidth="2.4" />
      {rungs.map((r, i) => (
        <line key={i} x1={r.xL} y1={r.y} x2={r.xR} y2={r.y} stroke={r.front ? a : bl} strokeWidth="1.6" opacity={r.front ? 0.7 : 0.35} />
      ))}
    </>
  );
}
