// Diagrama «din-friccion» — fisica.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { Bloque, Vector } from "../comun.jsx";

export default function DinFriccionSVG({ tema }) {
  const a = tema.acento, gr = tema.verde, rj = tema.rojo, az = tema.azul, mu = tema.muted;
  const gy = 92;
  return (
    <svg viewBox="0 0 250 140" width="100%" style={{ display: "block", maxHeight: 150 }}>
      <line x1={28} y1={gy} x2={222} y2={gy} stroke={mu} strokeWidth="1.5" />
      {[40, 60, 80, 100, 120, 140, 160, 180, 200].map((x) => (
        <line key={x} x1={x} y1={gy} x2={x - 8} y2={gy + 8} stroke={mu} strokeWidth="1" opacity="0.5" />
      ))}
      <Bloque x={88} y={56} w={56} h={36} tema={tema} label="m" />
      <Vector x1={116} y1={56} x2={116} y2={22} color={a} label="N" lx={122} ly={34} />
      <Vector x1={116} y1={92} x2={116} y2={126} color={rj} label="P" lx={122} ly={116} />
      <Vector x1={144} y1={74} x2={198} y2={74} color={gr} label="F" lx={176} ly={68} />
      <Vector x1={88} y1={74} x2={44} y2={74} color={az} label="f" lx={48} ly={68} />
    </svg>
  );
}
