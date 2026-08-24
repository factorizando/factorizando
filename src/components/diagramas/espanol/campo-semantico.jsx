// Diagrama «campo-semantico» — espanol.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

export default function CampoSemanticoSVG({ tema }) {
  const az = tema.azul, vd = tema.verde, ac = tema.acento;
  const lv2 = [
    { x: 20,  label: "mamífero" },
    { x: 200, label: "ave" },
    { x: 378, label: "reptil" },
  ];
  const lv3 = [
    { x: 6,   w: 62,  label: "perro",     px: 55  },
    { x: 76,  w: 58,  label: "gato",      px: 95  },
    { x: 186, w: 68,  label: "águila",    px: 250 },
    { x: 262, w: 56,  label: "pato",      px: 248 },
    { x: 358, w: 72,  label: "serpiente", px: 418 },
    { x: 438, w: 68,  label: "lagarto",   px: 418 },
  ];
  return (
    <svg viewBox="0 0 520 148" width="100%" style={{ display: "block" }}>
      {/* Level 0: hiperónimo */}
      <rect x="185" y="4" width="150" height="24" rx="6" fill={`${az}22`} stroke={az} strokeWidth="1.5"/>
      <text x="260" y="20" fill={az} fontSize="11" fontFamily="Georgia,serif" fontStyle="italic" fontWeight="700" textAnchor="middle">ANIMAL</text>
      <text x="260" y="35" fill={az} fontSize="7" fontFamily="'Figtree', system-ui, sans-serif" textAnchor="middle" letterSpacing="0.1em" opacity="0.7">HIPERÓNIMO</text>
      {/* Lines to level 1 */}
      <line x1="215" y1="28" x2="75"  y2="62" stroke={`${az}55`} strokeWidth="1.3"/>
      <line x1="260" y1="28" x2="255" y2="62" stroke={`${az}55`} strokeWidth="1.3"/>
      <line x1="305" y1="28" x2="433" y2="62" stroke={`${az}55`} strokeWidth="1.3"/>
      {/* Level 1: cohipónimos */}
      {lv2.map(({ x, label }) => (
        <g key={label}>
          <rect x={x} y="62" width="110" height="22" rx="5" fill={`${vd}18`} stroke={vd} strokeWidth="1.3"/>
          <text x={x + 55} y="77" fill={vd} fontSize="10" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">{label}</text>
        </g>
      ))}
      <text x="260" y="96" fill={vd} fontSize="7" fontFamily="'Figtree', system-ui, sans-serif" textAnchor="middle" letterSpacing="0.1em" opacity="0.7">COHIPÓNIMOS</text>
      {/* Lines to level 2 */}
      {[
        [55, 37], [55, 105], [255, 222], [255, 290], [433, 394], [433, 472],
      ].map((_, i) => {
        const lv1x = [75, 75, 245, 245, 423, 423][i];
        const lv2cx = [37, 105, 220, 290, 394, 472][i];
        return <line key={i} x1={lv1x} y1="84" x2={lv2cx} y2="108" stroke={`${vd}44`} strokeWidth="1.2"/>;
      })}
      {/* Level 2: hipónimos */}
      {lv3.map(({ x, w, label }) => (
        <g key={label}>
          <rect x={x} y="108" width={w} height="20" rx="4" fill={`${ac}14`} stroke={`${ac}44`} strokeWidth="1"/>
          <text x={x + w / 2} y="122" fill={ac} fontSize="9" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">{label}</text>
        </g>
      ))}
      <text x="260" y="143" fill={ac} fontSize="7" fontFamily="'Figtree', system-ui, sans-serif" textAnchor="middle" letterSpacing="0.1em" opacity="0.7">HIPÓNIMOS (más específicos)</text>
    </svg>
  );
}
