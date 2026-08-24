// Diagrama «cin-desplazamiento» — fisica.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { M } from "../../../data/teoria/shared.jsx";

import { arrowHead } from "../comun.jsx";

export default function CinDesplazamientoSVG({ tema }) {
  const a = tema.acento, bl = tema.azul, T = tema.texto;
  const Ax = 32, Ay = 92, Bx = 242, By = 56;
  return (
    <svg viewBox="0 0 280 120" width="100%" style={{ display: "block", maxHeight: 128 }}>
      <path d={`M ${Ax} ${Ay} C 78 18, 128 124, 172 62 S 214 30 ${Bx} ${By}`} stroke={bl} strokeWidth="2.2" fill="none" />
      <line x1={Ax} y1={Ay} x2={Bx} y2={By} stroke={a} strokeWidth="2.5" />
      <polygon points={arrowHead(Ax, Ay, Bx, By, 9)} fill={a} />
      <circle cx={Ax} cy={Ay} r="4" fill={T} />
      <circle cx={Bx} cy={By} r="4" fill={T} />
      <text x={Ax - 12} y={Ay + 6} fill={T} fontSize="13" fontFamily="Georgia,serif">A</text>
      <text x={Bx + 6} y={By + 4} fill={T} fontSize="13" fontFamily="Georgia,serif">B</text>
      <text x="86" y="34" fill={bl} fontSize="11" fontFamily="'Figtree', system-ui, sans-serif">distancia (trayectoria)</text>
      <text x="118" y="86" fill={a} fontSize="11" fontFamily="'Figtree', system-ui, sans-serif">desplazamiento</text>
    </svg>
  );
}
