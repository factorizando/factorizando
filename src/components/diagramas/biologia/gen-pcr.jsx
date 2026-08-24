// Diagrama «gen-pcr» — biologia.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { arrowHead } from "../comun.jsx";

export default function GenPcrSVG({ tema }) {
  const a = tema.acento, bl = tema.azul, mu = tema.muted, ro = tema.rojo, T = tema.texto;
  return (
    <svg viewBox="0 0 290 130" width="100%" style={{ display: "block", maxHeight: 140 }}>
      <text x={145} y={12} textAnchor="middle" fill={a} fontSize="8" fontFamily="'DM Sans',sans-serif">un ciclo de PCR (las copias se duplican)</text>
      {/* paso 1: desnaturalización */}
      <text x={48} y={28} textAnchor="middle" fill={ro} fontSize="7" fontFamily="'DM Sans',sans-serif" fontWeight="600">1. desnaturaliza</text>
      <line x1={26} y1={36} x2={70} y2={36} stroke={bl} strokeWidth="2.4" />
      <line x1={26} y1={58} x2={70} y2={58} stroke={a} strokeWidth="2.4" />
      <text x={48} y={74} textAnchor="middle" fill={mu} fontSize="6" fontFamily="'DM Sans',sans-serif">calor separa</text>
      {/* paso 2: hibridación */}
      <text x={145} y={28} textAnchor="middle" fill={bl} fontSize="7" fontFamily="'DM Sans',sans-serif" fontWeight="600">2. hibrida</text>
      <line x1={120} y1={40} x2={170} y2={40} stroke={bl} strokeWidth="2.4" />
      <line x1={120} y1={40} x2={134} y2={40} stroke={ro} strokeWidth="3" />
      <line x1={120} y1={56} x2={170} y2={56} stroke={a} strokeWidth="2.4" />
      <line x1={156} y1={56} x2={170} y2={56} stroke={ro} strokeWidth="3" />
      <text x={145} y={74} textAnchor="middle" fill={mu} fontSize="6" fontFamily="'DM Sans',sans-serif">cebadores</text>
      {/* paso 3: extensión */}
      <text x={242} y={28} textAnchor="middle" fill={a} fontSize="7" fontFamily="'DM Sans',sans-serif" fontWeight="600">3. extiende</text>
      <line x1={218} y1={40} x2={266} y2={40} stroke={bl} strokeWidth="2.4" />
      <line x1={218} y1={56} x2={266} y2={56} stroke={a} strokeWidth="2.4" />
      <line x1={218} y1={48} x2={266} y2={48} stroke={tema.verde} strokeWidth="2" strokeDasharray="2 2" />
      <text x={242} y={74} textAnchor="middle" fill={mu} fontSize="6" fontFamily="'DM Sans',sans-serif">polimerasa copia</text>
      {/* flechas entre pasos */}
      <polygon points={arrowHead(82, 47, 96, 47, 6)} fill={mu} />
      <polygon points={arrowHead(182, 47, 196, 47, 6)} fill={mu} />
      {/* crecimiento 2^n */}
      <text x={145} y={104} textAnchor="middle" fill={T} fontSize="8" fontFamily="'DM Sans',sans-serif">1 → 2 → 4 → 8 → … = 2ⁿ copias</text>
      <text x={145} y={120} textAnchor="middle" fill={mu} fontSize="6.6" fontFamily="'DM Sans',sans-serif">sin vector viral ni bacteriano: todo ocurre en un tubo</text>
    </svg>
  );
}
