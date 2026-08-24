// Diagrama «flu-arquimedes» — fisica.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { M } from "../../../data/teoria/shared.jsx";

import { Vector } from "../comun.jsx";

export default function FluArquimedesSVG({ tema }) {
  const a = tema.acento, mu = tema.muted, az = tema.azul, rj = tema.rojo, gr = tema.verde;
  const surf = 52;
  return (
    <svg viewBox="0 0 250 130" width="100%" style={{ display: "block", maxHeight: 140 }}>
      <path d="M 55 28 L 55 118 L 195 118 L 195 28" fill="none" stroke={mu} strokeWidth="1.8" />
      <rect x={56} y={surf} width={138} height={66} fill={`${az}22`} />
      <line x1={56} y1={surf} x2={194} y2={surf} stroke={az} strokeWidth="1.4" />
      <rect x={104} y={38} width={42} height={34} fill={tema.acentoMed} stroke={a} strokeWidth="1.6" />
      <Vector x1={125} y1={72} x2={125} y2={92} color={gr} label="E" lx={131} ly={88} />
      <Vector x1={125} y1={38} x2={125} y2={18} color={rj} label="P" lx={131} ly={26} />
    </svg>
  );
}
