// Diagrama «mod-espectro» — fisica.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { Vector } from "../comun.jsx";

export default function ModEspectroSVG({ tema }) {
  const mu = tema.muted, T = tema.texto;
  return (
    <svg viewBox="0 0 250 108" width="100%" style={{ display: "block", maxHeight: 116 }}>
      <defs>
        <linearGradient id="mod-spec" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#7f1d1d" />
          <stop offset="20%" stopColor="#f97316" />
          <stop offset="45%" stopColor="#eab308" />
          <stop offset="55%" stopColor="#22c55e" />
          <stop offset="78%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
      </defs>
      <rect x={20} y={40} width={210} height={20} rx={3} fill="url(#mod-spec)" />
      <rect x={108} y={38} width={34} height={24} fill="none" stroke={T} strokeWidth="1.3" />
      <text x={125} y={32} fill={T} fontSize="9.5" fontFamily="'DM Sans',sans-serif" textAnchor="middle">visible</text>
      <text x={22} y={76} fill={mu} fontSize="9.5" fontFamily="'DM Sans',sans-serif">radio</text>
      <text x={228} y={76} fill={mu} fontSize="9.5" fontFamily="'DM Sans',sans-serif" textAnchor="end">gamma</text>
      <Vector x1={20} y1={92} x2={226} y2={92} color={mu} label="" sw={1.4} />
      <text x={226} y={104} fill={mu} fontSize="9" fontFamily="'DM Sans',sans-serif" textAnchor="end">frecuencia y energía →</text>
    </svg>
  );
}
