// Diagrama «pe2-rombo» — matematicas.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { M } from "../../../data/teoria/shared.jsx";

export default function Pe2RomboSVG({ tema }) {
  return (
    <svg viewBox="0 0 280 158" width="100%" style={{ display: "block", maxHeight: 138 }}>
      <polygon points="140,8 262,79 140,150 18,79" fill={tema.azulSuave} stroke={tema.azul} strokeWidth="2" opacity="0.85"/>
      <line x1="140" y1="8" x2="140" y2="150" stroke={tema.verde} strokeWidth="1.8" strokeDasharray="6,4" opacity="0.65"/>
      <line x1="18" y1="79" x2="262" y2="79" stroke={tema.acento} strokeWidth="1.8" strokeDasharray="6,4" opacity="0.65"/>
      <path d="M 140,79 L 140,69 L 150,69" stroke="rgba(255,255,255,0.4)" strokeWidth="1.3" fill="none"/>
      <text x="148" y="44" fill={tema.verde} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic">d₁=10</text>
      <text x="182" y="76" fill={tema.acento} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic">d₂=24</text>
    </svg>
  );
}
