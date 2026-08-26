// Diagrama «combinaciones-casillas» — matematicas.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { M } from "../../../data/teoria/shared.jsx";

export default function CombinacionesCasillasSVG({ tema }) {
  const a = tema.acento, gr = tema.canal(1), mu = tema.muted, T = tema.texto;
  const perms = ["ABC", "ACB", "BAC", "BCA", "CAB", "CBA"];
  return (
    <svg viewBox="0 0 250 158" width="100%" style={{ display: "block", maxHeight: 170 }}>
      {perms.map((p, i) => (
        <text key={i} x={44} y={22 + i * 21} fill={mu} fontSize="14" fontFamily="'IBM Plex Mono',monospace" textAnchor="middle">{p}</text>
      ))}
      {/* corchete */}
      <path d="M 74 14 L 80 14 L 80 138 L 74 138" fill="none" stroke={mu} strokeWidth="1.4"/>
      <text x="86" y="80" fill={a} fontSize="11" fontFamily="'IBM Plex Mono',monospace">3! = 6</text>
      {/* flecha */}
      <text x="130" y="80" fill={T} fontSize="22" textAnchor="middle">→</text>
      {/* comité */}
      <rect x={158} y={56} width={80} height={42} rx={10} fill={`${gr}22`} stroke={gr} strokeWidth="2"/>
      <text x={198} y={82} fill={gr} fontSize="15" fontFamily="'IBM Plex Mono',monospace" textAnchor="middle">{"{A,B,C}"}</text>
      <text x={198} y={116} fill={mu} fontSize="10.5" fontFamily="'Figtree', system-ui, sans-serif" textAnchor="middle">1 grupo</text>
      <text x="125" y="150" fill={T} fontSize="12.5" fontFamily="'IBM Plex Mono',monospace" textAnchor="middle">6 órdenes ÷ 3! = 1</text>
    </svg>
  );
}
