// Diagrama «mod-portada» — fisica.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

export default function ModPortadaSVG({ tema }) {
  const a = tema.acento, bl = tema.azul;
  return (
    <svg viewBox="0 0 250 120" width="100%" style={{ display: "block", maxHeight: 132, maxWidth: 320 }}>
      <g transform="translate(125 60)">
        <ellipse rx="72" ry="26" fill="none" stroke={a} strokeWidth="1.6" />
        <ellipse rx="72" ry="26" fill="none" stroke={a} strokeWidth="1.6" transform="rotate(60)" />
        <ellipse rx="72" ry="26" fill="none" stroke={a} strokeWidth="1.6" transform="rotate(120)" />
        <circle r="11" fill={tema.acentoMed} stroke={a} strokeWidth="2" />
        <g><circle cx="72" cy="0" r="4.5" fill={bl} /></g>
        <g transform="rotate(60)"><circle cx="-72" cy="0" r="4.5" fill={bl} /></g>
        <g transform="rotate(120)"><circle cx="72" cy="0" r="4.5" fill={bl} /></g>
      </g>
    </svg>
  );
}
