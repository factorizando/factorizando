// Diagrama «ej-ruleta» — matematicas.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { M } from "../../../data/teoria/shared.jsx";

export default function RuletaSVG({ tema }) {
  const a = tema.acento, bl = tema.azul;
  const cx = 80, cy = 80, r = 66;
  const primes = new Set([2, 3, 5, 7]);
  const D = (d) => d * Math.PI / 180;
  const partes = [];
  for (let k = 0; k < 8; k++) {
    const a0 = k * 45 - 90, a1 = a0 + 45;
    const x0 = cx + r * Math.cos(D(a0)), y0 = cy + r * Math.sin(D(a0));
    const x1 = cx + r * Math.cos(D(a1)), y1 = cy + r * Math.sin(D(a1));
    const num = k + 1, hi = primes.has(num);
    partes.push(
      <path key={`s${k}`} d={`M ${cx},${cy} L ${x0.toFixed(1)},${y0.toFixed(1)} A ${r},${r} 0 0,1 ${x1.toFixed(1)},${y1.toFixed(1)} Z`}
        fill={hi ? `${a}40` : tema.azulSuave} stroke={tema.border} strokeWidth="1"/>
    );
    const am = D(a0 + 22.5);
    const lx = cx + r * 0.66 * Math.cos(am), ly = cy + r * 0.66 * Math.sin(am);
    partes.push(<text key={`n${k}`} x={lx.toFixed(1)} y={(ly + 4).toFixed(1)} fill={hi ? a : tema.muted} fontSize="13" fontFamily="Georgia,serif" textAnchor="middle">{num}</text>);
  }
  return (
    <svg viewBox="0 0 220 160" width="100%" style={{ display: "block", maxHeight: 168 }}>
      {partes}
      <circle cx={cx} cy={cy} r={r} fill="none" stroke={bl} strokeWidth="2"/>
      <circle cx={cx} cy={cy} r="4" fill={bl}/>
      <text x="172" y="74" fill={a} fontSize="12" fontFamily="'DM Sans',sans-serif">primos</text>
      <text x="172" y="92" fill={tema.muted} fontSize="12" fontFamily="'IBM Plex Mono',monospace">2·3·5·7</text>
    </svg>
  );
}
