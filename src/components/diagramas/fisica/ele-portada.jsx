// Diagrama «ele-portada» — fisica.
// Recibe { tema } y pinta con la paleta de la materia; sin estado propio.
// Salió de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md).

export default function ElePortadaSVG({ tema }) {
  const a = tema.acento;
  return (
    <svg viewBox="0 0 250 120" width="100%" style={{ display: "block", maxHeight: 132, maxWidth: 320 }}>
      <polygon points="138,14 104,62 124,62 100,106 152,52 130,52 152,14" fill={tema.acentoMed} stroke={a} strokeWidth="2.2" strokeLinejoin="round" />
    </svg>
  );
}
