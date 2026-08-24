// Diagrama «quimica-energia-reacciones» — matematicas.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { M } from "../../../data/teoria/shared.jsx";

export default function QuimicaEnergiaReaccionesSVG({ tema }) {
  const a = tema.acento, gold = "#f5c842", org = "#ff7755";
  return (
    <svg viewBox="0 0 320 130" width="100%" style={{ display:"block" }}>
      {/* LEFT: Exotérmica */}
      <rect x="1" y="1" width="154" height="128" rx="5"
        fill="rgba(0,0,0,0.28)" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
      <text x="78" y="11" textAnchor="middle" fill={org} fontSize="6.5" fontFamily="monospace" fontWeight="700">EXOTÉRMICA</text>
      <text x="78" y="19" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="5" fontFamily="monospace">libera energía al entorno</text>
      <line x1="22" y1="22" x2="22" y2="88" stroke="rgba(255,255,255,0.35)" strokeWidth="1"/>
      <polygon points="18,22 26,22 22,17" fill="rgba(255,255,255,0.35)"/>
      <text x="16" y="55" textAnchor="end" fill="rgba(255,255,255,0.4)" fontSize="5" fontFamily="monospace">Ep</text>
      <line x1="22" y1="88" x2="145" y2="88" stroke="rgba(255,255,255,0.35)" strokeWidth="1"/>
      <polygon points="145,84 145,92 150,88" fill="rgba(255,255,255,0.35)"/>
      <text x="148" y="96" fill="rgba(255,255,255,0.35)" fontSize="4.5" fontFamily="monospace">rxn</text>
      <path d="M 30,58 C 45,58 55,26 65,26 C 75,26 85,78 100,78 L 138,78"
        fill="none" stroke={org} strokeWidth="2.5"/>
      <path d="M 30,88 L 30,58 C 45,58 55,26 65,26 C 75,26 85,78 100,78 L 138,78 L 138,88 Z"
        fill={`${org}12`}/>
      <text x="30" y="56" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="5.5" fontFamily="monospace">R</text>
      <text x="102" y="76" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="5.5" fontFamily="monospace">P</text>
      <text x="65" y="23" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="4.5" fontFamily="monospace">Ea</text>
      <line x1="118" y1="58" x2="118" y2="78" stroke={gold} strokeWidth="1.5"/>
      <polygon points="114,74 122,74 118,79" fill={gold}/>
      <text x="126" y="67" fill={gold} fontSize="5" fontFamily="monospace">–ΔH</text>
      <text x="78" y="101" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="5" fontFamily="monospace">combustión, respiración</text>
      <text x="78" y="110" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="5" fontFamily="monospace">oxidación, explosión</text>
      <text x="78" y="121" textAnchor="middle" fill={org} fontSize="5.5" fontFamily="monospace">genera calor</text>
      {/* RIGHT: Endotérmica */}
      <rect x="165" y="1" width="154" height="128" rx="5"
        fill="rgba(0,0,0,0.28)" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
      <text x="242" y="11" textAnchor="middle" fill={a} fontSize="6.5" fontFamily="monospace" fontWeight="700">ENDOTÉRMICA</text>
      <text x="242" y="19" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="5" fontFamily="monospace">absorbe energía del entorno</text>
      <line x1="187" y1="22" x2="187" y2="88" stroke="rgba(255,255,255,0.35)" strokeWidth="1"/>
      <polygon points="183,22 191,22 187,17" fill="rgba(255,255,255,0.35)"/>
      <line x1="187" y1="88" x2="310" y2="88" stroke="rgba(255,255,255,0.35)" strokeWidth="1"/>
      <polygon points="310,84 310,92 315,88" fill="rgba(255,255,255,0.35)"/>
      <text x="313" y="96" fill="rgba(255,255,255,0.35)" fontSize="4.5" fontFamily="monospace">rxn</text>
      <path d="M 195,78 C 210,78 220,26 230,26 C 240,26 250,58 265,58 L 303,58"
        fill="none" stroke={a} strokeWidth="2.5"/>
      <path d="M 195,88 L 195,78 C 210,78 220,26 230,26 C 240,26 250,58 265,58 L 303,58 L 303,88 Z"
        fill={`${a}12`}/>
      <text x="195" y="76" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="5.5" fontFamily="monospace">R</text>
      <text x="267" y="56" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="5.5" fontFamily="monospace">P</text>
      <text x="230" y="23" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="4.5" fontFamily="monospace">Ea</text>
      <line x1="284" y1="78" x2="284" y2="58" stroke={gold} strokeWidth="1.5"/>
      <polygon points="280,62 288,62 284,57" fill={gold}/>
      <text x="292" y="67" fill={gold} fontSize="5" fontFamily="monospace">+ΔH</text>
      <text x="242" y="101" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="5" fontFamily="monospace">fotosíntesis, fusión del hielo</text>
      <text x="242" y="110" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="5" fontFamily="monospace">vaporización, electrólisis</text>
      <text x="242" y="121" textAnchor="middle" fill={a} fontSize="5.5" fontFamily="monospace">absorbe calor</text>
    </svg>
  );
}
