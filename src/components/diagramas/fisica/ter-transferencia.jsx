// Diagrama «ter-transferencia» — fisica.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { Vector } from "../comun.jsx";

export default function TerTransferenciaSVG({ tema }) {
  const a = tema.acento, mu = tema.muted, rj = tema.rojo, az = tema.azul;
  return (
    <svg viewBox="0 0 250 104" width="100%" style={{ display: "block", maxHeight: 116 }}>
      {/* conducción */}
      <rect x={20} y={36} width={56} height={12} rx={2} fill={tema.acentoMed} stroke={a} strokeWidth="1.3" />
      <circle cx={20} cy={42} r={6} fill={rj} />
      <Vector x1={34} y1={42} x2={68} y2={42} color={mu} label="" sw={1.5} />
      <text x={48} y={66} fill={mu} fontSize="9.5" fontFamily="'Figtree', system-ui, sans-serif" textAnchor="middle">conducción</text>
      {/* convección */}
      <rect x={104} y={30} width={42} height={26} rx={2} fill="none" stroke={mu} strokeWidth="1.5" />
      <Vector x1={125} y1={54} x2={125} y2={34} color={rj} label="" sw={1.6} />
      <Vector x1={112} y1={34} x2={112} y2={54} color={az} label="" sw={1.6} />
      <Vector x1={138} y1={34} x2={138} y2={54} color={az} label="" sw={1.6} />
      <text x={125} y={66} fill={mu} fontSize="9.5" fontFamily="'Figtree', system-ui, sans-serif" textAnchor="middle">convección</text>
      {/* radiación */}
      <circle cx={205} cy={42} r={9} fill={rj} />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => {
        const r = deg * Math.PI / 180;
        return <line key={deg} x1={205 + 12 * Math.cos(r)} y1={42 + 12 * Math.sin(r)} x2={205 + 18 * Math.cos(r)} y2={42 + 18 * Math.sin(r)} stroke={rj} strokeWidth="1.4" />;
      })}
      <text x={205} y={66} fill={mu} fontSize="9.5" fontFamily="'Figtree', system-ui, sans-serif" textAnchor="middle">radiación</text>
    </svg>
  );
}
