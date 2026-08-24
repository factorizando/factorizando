// Diagrama «fisica-vel-acel» — fisica.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { M } from "../../../data/teoria/shared.jsx";

export default function FisicaVelAcelSVG({ tema }) {
  const a = tema.acento, grn = "#4ab890";
  return (
    <svg viewBox="0 0 320 130" width="100%" style={{ display:"block" }}>
      {/* LEFT: MRU */}
      <rect x="1" y="1" width="154" height="128" rx="5"
        fill="rgba(0,0,0,0.28)" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
      <text x="78" y="11" textAnchor="middle" fill={grn} fontSize="7" fontFamily="monospace" fontWeight="700">M.R.U.</text>
      <text x="78" y="19" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="5.5" fontFamily="monospace">Movimiento Rectilíneo Uniforme</text>
      <line x1="28" y1="24" x2="28" y2="88" stroke="rgba(255,255,255,0.4)" strokeWidth="1"/>
      <polygon points="24,24 32,24 28,19" fill="rgba(255,255,255,0.4)"/>
      <text x="21" y="22" textAnchor="end" fill="rgba(255,255,255,0.5)" fontSize="7.5" fontFamily="monospace">v</text>
      <line x1="28" y1="88" x2="142" y2="88" stroke="rgba(255,255,255,0.4)" strokeWidth="1"/>
      <polygon points="142,84 142,92 147,88" fill="rgba(255,255,255,0.4)"/>
      <text x="149" y="91" fill="rgba(255,255,255,0.5)" fontSize="7.5" fontFamily="monospace">t</text>
      <line x1="28" y1="58" x2="135" y2="58" stroke={grn} strokeWidth="2.5"/>
      <line x1="25" y1="58" x2="31" y2="58" stroke="rgba(255,255,255,0.3)" strokeWidth="0.8"/>
      <text x="22" y="61" textAnchor="end" fill="rgba(255,255,255,0.3)" fontSize="5" fontFamily="monospace">v₀</text>
      <text x="78" y="100" textAnchor="middle" fill={grn} fontSize="9" fontFamily="monospace" fontWeight="700">v = d / t</text>
      <text x="78" y="111" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="5.5" fontFamily="monospace">a = 0 · velocidad constante</text>
      <text x="78" y="120" textAnchor="middle" fill="rgba(255,255,255,0.25)" fontSize="5" fontFamily="monospace">gráfica v-t: línea horizontal</text>
      {/* RIGHT: MRUA */}
      <rect x="165" y="1" width="154" height="128" rx="5"
        fill="rgba(0,0,0,0.28)" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
      <text x="242" y="11" textAnchor="middle" fill={a} fontSize="7" fontFamily="monospace" fontWeight="700">M.R.U.A.</text>
      <text x="242" y="19" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="5.5" fontFamily="monospace">Rect. Unif. Acelerado</text>
      <line x1="192" y1="24" x2="192" y2="88" stroke="rgba(255,255,255,0.4)" strokeWidth="1"/>
      <polygon points="188,24 196,24 192,19" fill="rgba(255,255,255,0.4)"/>
      <text x="185" y="22" textAnchor="end" fill="rgba(255,255,255,0.5)" fontSize="7.5" fontFamily="monospace">v</text>
      <line x1="192" y1="88" x2="306" y2="88" stroke="rgba(255,255,255,0.4)" strokeWidth="1"/>
      <polygon points="306,84 306,92 311,88" fill="rgba(255,255,255,0.4)"/>
      <text x="313" y="91" fill="rgba(255,255,255,0.5)" fontSize="7.5" fontFamily="monospace">t</text>
      <line x1="192" y1="85" x2="300" y2="30" stroke={a} strokeWidth="2.5"/>
      <line x1="189" y1="85" x2="195" y2="85" stroke="rgba(255,255,255,0.3)" strokeWidth="0.8"/>
      <text x="186" y="88" textAnchor="end" fill="rgba(255,255,255,0.3)" fontSize="5" fontFamily="monospace">v₀</text>
      <text x="242" y="100" textAnchor="middle" fill={a} fontSize="8" fontFamily="monospace" fontWeight="700">v = v₀ + a·t</text>
      <text x="242" y="111" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="5.5" fontFamily="monospace">a = Δv / t = constante</text>
      <text x="242" y="120" textAnchor="middle" fill="rgba(255,255,255,0.25)" fontSize="5" fontFamily="monospace">gráfica v-t: línea diagonal</text>
    </svg>
  );
}
