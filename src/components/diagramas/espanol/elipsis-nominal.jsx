// Diagrama «elipsis-nominal» — espanol.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

import { M } from "../../../data/teoria/shared.jsx";

export default function ElipsisNominalSVG({ tema }) {
  const az = tema.azul;
  const tokens  = [
    { x: 8,   w: 80, label: "Quiero el", hi: false, gap: false },
    { x: 96,  w: 50, label: "libro",     hi: true,  gap: false },
    { x: 154, w: 40, label: "azul",      hi: false, gap: false },
    { x: 202, w: 40, label: "y el",      hi: false, gap: false },
    { x: 250, w: 50, label: "libro",     hi: true,  gap: false },
    { x: 308, w: 46, label: "rojo.",     hi: false, gap: false },
  ];
  const tokensE = tokens.map((t, i) => i === 4 ? { ...t, label: "∅", hi: false, gap: true } : t);
  const ry = [26, 72];
  const h  = 22;
  return (
    <svg viewBox="0 0 520 105" width="100%" style={{ display: "block" }}>
      <text x="8" y="14" fill={tema.muted} fontSize="7.5" fontFamily="'Figtree', system-ui, sans-serif" letterSpacing="0.15em" fontWeight="600">ORACIÓN ORIGINAL</text>
      <text x="8" y="60" fill={tema.muted} fontSize="7.5" fontFamily="'Figtree', system-ui, sans-serif" letterSpacing="0.15em" fontWeight="600">CON ELIPSIS NOMINAL</text>
      {tokens.map((tok, i) => (
        <g key={i}>
          <rect x={tok.x} y={ry[0]} width={tok.w} height={h} rx="4"
            fill={tok.hi ? `${az}22` : "rgba(255,255,255,0.04)"}
            stroke={tok.hi ? `${az}88` : "rgba(255,255,255,0.1)"}
            strokeWidth={tok.hi ? 1.5 : 1}/>
          <text x={tok.x + tok.w / 2} y={ry[0] + 15} textAnchor="middle"
            fill={tok.hi ? az : tema.sub} fontSize="11" fontFamily="Georgia,serif"
            fontStyle="italic" fontWeight={tok.hi ? "700" : "400"}>{tok.label}</text>
        </g>
      ))}
      {tokensE.map((tok, i) => (
        <g key={i}>
          <rect x={tok.x} y={ry[1]} width={tok.w} height={h} rx="4"
            fill={tok.gap ? "none" : tok.hi ? `${az}22` : "rgba(255,255,255,0.04)"}
            stroke={tok.gap ? az : tok.hi ? `${az}88` : "rgba(255,255,255,0.1)"}
            strokeWidth={tok.gap || tok.hi ? 1.5 : 1}
            strokeDasharray={tok.gap ? "5,3" : undefined}/>
          <text x={tok.x + tok.w / 2} y={ry[1] + 15} textAnchor="middle"
            fill={tok.gap ? `${az}99` : tok.hi ? az : tema.sub}
            fontSize="11" fontFamily="Georgia,serif"
            fontStyle="italic" fontWeight={tok.hi ? "700" : "400"}>{tok.label}</text>
        </g>
      ))}
      {/* Recovery arc from first "libro" (cx=121, top y=26) to gap (cx=275, top y=72) */}
      <path d="M 121,26 C 121,6 275,6 275,72" fill="none"
        stroke={`${az}88`} strokeWidth="1.3" strokeDasharray="5,3"/>
      <polygon points="270,68 275,76 280,68" fill={`${az}88`}/>
      <text x="200" y="10" fill={az} fontSize="7.5" fontFamily="'Figtree', system-ui, sans-serif" textAnchor="middle">elemento recuperado del contexto</text>
      <text x="8" y="100" fill={tema.muted} fontSize="8" fontFamily="Georgia,serif" fontStyle="italic">Forma completa: «Quiero el libro azul y el libro rojo.»</text>
    </svg>
  );
}
