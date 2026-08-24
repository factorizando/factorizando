// Diagrama «orden-importa» — matematicas.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

export default function OrdenImportaSVG({ tema }) {
  const bl = tema.azul, gr = tema.verde, T = tema.texto;
  const tEst = { fontFamily: "'Figtree', system-ui, sans-serif" };
  return (
    <svg viewBox="0 0 300 118" width="100%" style={{ display: "block", maxHeight: 130 }}>
      <line x1="150" y1="8" x2="150" y2="110" stroke={tema.border} strokeWidth="1"/>
      {/* Permutaciones */}
      <text x="74" y="20" fill={bl} fontSize="12" fontWeight="700" textAnchor="middle" style={tEst}>Permutación · P(3,2)=6</text>
      <text x="74" y="52" fill={T} fontSize="15" fontFamily="'IBM Plex Mono',monospace" textAnchor="middle">AB   BA   AC</text>
      <text x="74" y="78" fill={T} fontSize="15" fontFamily="'IBM Plex Mono',monospace" textAnchor="middle">CA   BC   CB</text>
      <text x="74" y="102" fill={tema.muted} fontSize="10" textAnchor="middle" style={tEst}>el orden cuenta</text>
      {/* Combinaciones */}
      <text x="226" y="20" fill={gr} fontSize="12" fontWeight="700" textAnchor="middle" style={tEst}>Combinación · C(3,2)=3</text>
      <text x="226" y="48" fill={T} fontSize="15" fontFamily="'IBM Plex Mono',monospace" textAnchor="middle">{"{A,B}"}</text>
      <text x="226" y="70" fill={T} fontSize="15" fontFamily="'IBM Plex Mono',monospace" textAnchor="middle">{"{A,C}   {B,C}"}</text>
      <text x="226" y="102" fill={tema.muted} fontSize="10" textAnchor="middle" style={tEst}>el orden no cuenta</text>
    </svg>
  );
}
