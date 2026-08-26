// Los íconos con los que el sistema marca acierto y error, dibujados en SVG.
//
// Existen porque `docs/DISENO.md` §2.4 prohíbe dos cosas a la vez: los glifos
// ✓/✗ —que cada sistema operativo pinta distinto, y algunos como emoji a
// color— y el semáforo verde/rojo. La deficiencia rojo-verde afecta a uno de
// cada doce hombres: si el matiz es el único canal, uno o dos alumnos de cada
// veinte no leen la retroalimentación. Por eso la distinción la carga la FORMA.
//
// Estaban duplicados dentro de `SlideRenderer.jsx`, donde sólo los alcanzaban
// las presentaciones. Al sacarlos aquí, el cuestionario usa exactamente los
// mismos y no puede volver a inventarse un ✓.
//
// Reciben `color` en vez de `tema` para no atarlos al objeto de tema de las
// presentaciones: quien llama pasa `tema.acento` o `var(--fx-math)`, según de
// dónde venga. Por omisión heredan el color del texto.

const base = { flexShrink: 0, verticalAlign: "-2px" };

// «Así es»: la respuesta buscada. Va en el acento.
export function IconoAsiEs({ color = "currentColor", size = 13 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" style={base} aria-hidden="true">
      <path d="M3.5 8.4l3 3 6-7" stroke={color} strokeWidth="1.9"
        strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// «Así no»: contraste didáctico. Habla de la lengua o del procedimiento, no de
// una persona, y por eso puede ser tajante. Va en gris, nunca en rojo.
export function IconoAsiNo({ color = "currentColor", size = 13 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" style={base} aria-hidden="true">
      <circle cx="8" cy="8" r="6" stroke={color} strokeWidth="1.6" />
      <line x1="3.8" y1="12.2" x2="12.2" y2="3.8" stroke={color} strokeWidth="1.6" />
    </svg>
  );
}

// «Aún no»: lo que respondió el alumno. Es una lupa, no una cruz, y ese cambio
// es todo el argumento: no dice «te equivocaste», dice «mira aquí». Por eso
// acompaña siempre a la explicación, nunca aparece sola.
export function IconoAunNo({ color = "currentColor", size = 13 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" style={base} aria-hidden="true">
      <circle cx="7" cy="7" r="4.2" stroke={color} strokeWidth="1.6" />
      <line x1="10.2" y1="10.2" x2="13.4" y2="13.4" stroke={color} strokeWidth="1.8"
        strokeLinecap="round" />
    </svg>
  );
}
