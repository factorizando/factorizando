// Diagrama «fisica-energia-mecanica» — fisica.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

export default function FisicaEnergiaMecanicaSVG({ tema }) {
  const a = tema.acento, grn = "#4ab890";
  const PIV = { x: 160, y: 20 };
  const L = 50;
  const toXY = (angleDeg) => {
    const r = (angleDeg * Math.PI) / 180;
    return { x: PIV.x + L * Math.sin(r), y: PIV.y + L * Math.cos(r) };
  };
  const posA = toXY(-38);
  const posB = toXY(0);
  const posC = toXY(38);
  const BH = 26, BY = 102;
  return (
    <svg viewBox="0 0 320 128" width="100%" style={{ display:"block" }}>
      <rect x="0" y="0" width="320" height="128" rx="5"
        fill="rgba(0,0,0,0.28)" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
      <text x="160" y="11" textAnchor="middle" fill={a}
        fontSize="6.5" fontFamily="monospace" fontWeight="700">PÉNDULO: CONVERSIÓN Ep ↔ Ec</text>
      {/* Ceiling */}
      <line x1="100" y1="20" x2="220" y2="20" stroke="rgba(255,255,255,0.3)" strokeWidth="2"/>
      {[104,112,120,128,136,144,152,160,168,176,184,192,200,208,216].map(x=>(
        <line key={x} x1={x} y1="20" x2={x-4} y2="26" stroke="rgba(255,255,255,0.12)" strokeWidth="1"/>
      ))}
      <circle cx={PIV.x} cy={PIV.y} r="3" fill="rgba(255,255,255,0.5)"/>
      {/* Pendulum A (left, dashed) */}
      <line x1={PIV.x} y1={PIV.y+3} x2={posA.x} y2={posA.y-7}
        stroke="rgba(255,255,255,0.25)" strokeWidth="1" strokeDasharray="2,2"/>
      <circle cx={posA.x} cy={posA.y} r="8" fill={a} opacity="0.65"/>
      <text x={posA.x} y={posA.y+3} textAnchor="middle" fill="white" fontSize="7" fontWeight="700">A</text>
      {/* Pendulum C (right, dashed) */}
      <line x1={PIV.x} y1={PIV.y+3} x2={posC.x} y2={posC.y-7}
        stroke="rgba(255,255,255,0.25)" strokeWidth="1" strokeDasharray="2,2"/>
      <circle cx={posC.x} cy={posC.y} r="8" fill={a} opacity="0.65"/>
      <text x={posC.x} y={posC.y+3} textAnchor="middle" fill="white" fontSize="7" fontWeight="700">C</text>
      {/* Pendulum B (center, solid) */}
      <line x1={PIV.x} y1={PIV.y+3} x2={posB.x} y2={posB.y-9}
        stroke="rgba(255,255,255,0.5)" strokeWidth="1.5"/>
      <circle cx={posB.x} cy={posB.y} r="9" fill={grn} opacity="0.9"/>
      <text x={posB.x} y={posB.y+3} textAnchor="middle" fill="white" fontSize="7" fontWeight="700">B</text>
      {/* Reference height line */}
      <line x1="110" y1={posA.y+8} x2="210" y2={posA.y+8}
        stroke="rgba(255,255,255,0.1)" strokeWidth="0.8" strokeDasharray="2,2"/>
      {/* Separator */}
      <line x1="20" y1="78" x2="300" y2="78" stroke="rgba(255,255,255,0.1)" strokeWidth="0.7"/>
      {/* Energy bars */}
      {[
        { cx: posA.x, ep:BH, ec:0,  label:"A" },
        { cx: posB.x, ep:0,  ec:BH, label:"B" },
        { cx: posC.x, ep:BH, ec:0,  label:"C" },
      ].map(({ cx, ep, ec, label }, i) => {
        const bx = Math.round(cx) - 14;
        return (
          <g key={i}>
            <rect x={bx}    y={BY-ep}       width="12" height={Math.max(ep,1)} rx="1" fill={a}   opacity={ep>0?0.85:0.2}/>
            <rect x={bx+14} y={BY-ec}       width="12" height={Math.max(ec,1)} rx="1" fill={grn} opacity={ec>0?0.85:0.2}/>
            <line x1={bx-2} y1={BY} x2={bx+28} y2={BY} stroke="rgba(255,255,255,0.2)" strokeWidth="0.7"/>
            <text x={bx+13} y={BY+8} textAnchor="middle"
              fill="rgba(255,255,255,0.4)" fontSize="6" fontFamily="monospace">{label}</text>
          </g>
        );
      })}
      {/* Bar legend */}
      <rect x="50"  y="116" width="8" height="6" fill={a}   opacity="0.8" rx="1"/>
      <text x="61"  y="122" fill={a}   fontSize="5.5" fontFamily="monospace">Ep (potencial)</text>
      <rect x="160" y="116" width="8" height="6" fill={grn} opacity="0.8" rx="1"/>
      <text x="171" y="122" fill={grn} fontSize="5.5" fontFamily="monospace">Ec (cinética)</text>
    </svg>
  );
}
