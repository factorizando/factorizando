// Diagrama «cel-proc-euc» — biologia.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { M } from "../../../data/teoria/shared.jsx";

export default function CelProcEucSVG({ tema }) {
  const a = tema.acento, bl = tema.azul, mu = tema.muted, T = tema.texto;
  return (
    <svg viewBox="0 0 280 130" width="100%" style={{ display: "block", maxHeight: 140 }}>
      {/* Procariota */}
      <rect x={20} y={36} width={96} height={58} rx={26} fill="rgba(52,211,153,0.05)" stroke={a} strokeWidth="2" />
      <path d="M 44 66 q 12 -10 24 0 q 12 10 24 0" fill="none" stroke={bl} strokeWidth="2" />
      <text x={68} y={28} textAnchor="middle" fill={T} fontSize="9" fontFamily="'Figtree', system-ui, sans-serif" fontWeight="600">Procariota</text>
      <text x={68} y={108} textAnchor="middle" fill={mu} fontSize="7.5" fontFamily="'Figtree', system-ui, sans-serif">ADN libre · sin núcleo</text>
      {/* Eucariota */}
      <ellipse cx={216} cy={65} rx={52} ry={34} fill="rgba(52,211,153,0.05)" stroke={a} strokeWidth="2" />
      <circle cx={214} cy={64} r={17} fill="rgba(134,239,172,0.12)" stroke={bl} strokeWidth="1.8" />
      <circle cx={214} cy={64} r={6} fill={a} opacity="0.5" />
      <ellipse cx={186} cy={48} rx={8} ry={4} fill="rgba(248,113,113,0.2)" stroke={tema.canal(2)} strokeWidth="1.2" />
      <text x={216} y={28} textAnchor="middle" fill={T} fontSize="9" fontFamily="'Figtree', system-ui, sans-serif" fontWeight="600">Eucariota</text>
      <text x={216} y={113} textAnchor="middle" fill={mu} fontSize="7.5" fontFamily="'Figtree', system-ui, sans-serif">núcleo + organelos</text>
    </svg>
  );
}
