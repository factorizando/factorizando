// Diagrama «din-hooke» — fisica.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { Bloque, Vector } from "../comun.jsx";

export default function DinHookeSVG({ tema }) {
  const a = tema.acento, gr = tema.canal(1), mu = tema.muted;
  const zig = "22,60 34,48 46,72 58,48 70,72 82,48 94,72 106,48 118,72 130,60";
  return (
    <svg viewBox="0 0 250 110" width="100%" style={{ display: "block", maxHeight: 120 }}>
      <rect x={12} y={34} width={10} height={52} fill={tema.card} stroke={mu} strokeWidth="1.5" />
      {[38, 48, 58, 68, 78].map((y) => (
        <line key={y} x1={12} y1={y} x2={6} y2={y + 6} stroke={mu} strokeWidth="1" opacity="0.6" />
      ))}
      <polyline points={zig} fill="none" stroke={a} strokeWidth="2.2" />
      <Bloque x={130} y={44} w={40} h={32} tema={tema} label="m" />
      <Vector x1={170} y1={60} x2={216} y2={60} color={gr} label="F" lx={192} ly={54} />
      <line x1={70} y1={90} x2={150} y2={90} stroke={mu} strokeWidth="1" />
      <line x1={70} y1={86} x2={70} y2={94} stroke={mu} strokeWidth="1" />
      <line x1={150} y1={86} x2={150} y2={94} stroke={mu} strokeWidth="1" />
      <text x={108} y={103} fill={mu} fontSize="11" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">x</text>
    </svg>
  );
}
