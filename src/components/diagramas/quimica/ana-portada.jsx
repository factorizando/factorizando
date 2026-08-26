// Diagrama «ana-portada» — quimica.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { M } from "../../../data/teoria/shared.jsx";

export default function AnaPortadaSVG({ tema }) {
  const a = tema.acento, bl = tema.azul, mu = tema.muted, gr = tema.canal(1), T = tema.texto;
  return (
    <svg viewBox="0 0 230 140" width="100%" style={{ display: "block", maxHeight: 140, maxWidth: 280 }}>
      {/* hoja con estoma */}
      <path d="M 30 86 q 18 -44 44 -2 q -18 30 -44 2 Z" fill={`${gr}29`} stroke={gr} strokeWidth="1.6" />
      <line x1={36} y1={78} x2={66} y2={50} stroke={gr} strokeWidth="1.2" />
      <ellipse cx={52} cy={70} rx={5} ry={3} fill="none" stroke={a} strokeWidth="1.3" />
      <text x={52} y={100} textAnchor="middle" fill={mu} fontSize="7" fontFamily="'Figtree', system-ui, sans-serif">estoma</text>
      {/* tejido (rejilla de células) */}
      <g>
        {[0,1,2].map(i => [0,1,2].map(j => (
          <rect key={`${i}-${j}`} x={104 + j*15} y={44 + i*15} width={13} height={13} rx={3} fill="rgba(96,165,250,0.12)" stroke={bl} strokeWidth="1.1" />
        )))}
      </g>
      <text x={126} y={100} textAnchor="middle" fill={mu} fontSize="7" fontFamily="'Figtree', system-ui, sans-serif">tejido</text>
      {/* hongo (seta) */}
      <path d="M 178 64 q 18 -26 36 0 Z" fill="rgba(192,132,252,0.22)" stroke={a} strokeWidth="1.6" />
      <rect x={192} y={64} width={8} height={20} rx={2} fill="rgba(192,132,252,0.18)" stroke={a} strokeWidth="1.4" />
      <text x={196} y={100} textAnchor="middle" fill={mu} fontSize="7" fontFamily="'Figtree', system-ui, sans-serif">hongo</text>
      <text x={115} y={128} textAnchor="middle" fill={mu} fontSize="8.5" fontFamily="'Figtree', system-ui, sans-serif">tejidos · plantas · animales · hongos</text>
    </svg>
  );
}
