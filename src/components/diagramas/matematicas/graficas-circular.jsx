// Diagrama «graficas-circular» — matematicas.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { M } from "../../../data/teoria/shared.jsx";

export default function EstCircularSVG({ tema }) {
  const segs = [
    { lab: "calif. 6", p: 10, c: tema.rojo },
    { lab: "calif. 7", p: 25, c: tema.azul },
    { lab: "calif. 8", p: 40, c: tema.acento },
    { lab: "calif. 9", p: 20, c: tema.verde },
    { lab: "calif. 10", p: 5, c: tema.muted },
  ];
  const cx = 82, cy = 80, r = 60;
  let ang = -Math.PI / 2;
  const paths = segs.map((s, i) => {
    const a0 = ang, a1 = ang + (s.p / 100) * 2 * Math.PI;
    ang = a1;
    const x0 = cx + r * Math.cos(a0), y0 = cy + r * Math.sin(a0);
    const x1 = cx + r * Math.cos(a1), y1 = cy + r * Math.sin(a1);
    const large = (a1 - a0) > Math.PI ? 1 : 0;
    return <path key={i} d={`M ${cx} ${cy} L ${x0.toFixed(2)} ${y0.toFixed(2)} A ${r} ${r} 0 ${large} 1 ${x1.toFixed(2)} ${y1.toFixed(2)} Z`} fill={`${s.c}cc`} stroke={tema.bg} strokeWidth="1.5" />;
  });
  return (
    <svg viewBox="0 0 320 160" width="100%" style={{ display: "block", maxHeight: 168 }}>
      {paths}
      {segs.map((s, i) => (
        <g key={i} transform={`translate(176 ${32 + i * 24})`}>
          <rect x="0" y="-9" width="13" height="13" rx="3" fill={`${s.c}cc`} />
          <text x="20" y="2" fill={tema.texto} fontSize="11.5" fontFamily="'Figtree', system-ui, sans-serif">{s.lab}</text>
          <text x="120" y="2" fill={s.c} fontSize="11.5" fontFamily="'IBM Plex Mono',monospace" fontWeight="600" textAnchor="end">{s.p}%</text>
        </g>
      ))}
    </svg>
  );
}
