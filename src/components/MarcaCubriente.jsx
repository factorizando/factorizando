// src/components/MarcaCubriente.jsx
// La marca de Factorizando: el cubriente universal ℝ → S¹. Una hélice sobre una
// circunferencia — la circunferencia es el espacio, la hélice su desenrollado, y
// cada vuelta cae sobre el mismo lazo. Es el "Cubriente universal" del pliego de
// exploración; la hoja de marca está en Figuras/hoja-marca.html.
//
// La curva es una bézier trazada a mano, NO una paramétrica: si alguien la
// "regenera" con una fórmula sale otra figura. RUTA es la fuente y no se toca.
//
// Los SVG sueltos (favicon, avatar, medallón, una tinta) se emiten desde
// Figuras/marca/generar.py a partir de esta misma ruta.

const RUTA = "M22 62C22 53 78 53 78 44S22 35 22 26C22 19 44 16 62 20";

/**
 * Dos cortes, y el umbral entre ellos es la regla de la hoja de marca:
 *
 *  - `principal` (≥ 32 px): trazo 3.8, elipse al 45 %, con punto base.
 *  - `corte`     (≤ 32 px): la misma curva a 7.5, elipse opaca y SIN punto base.
 *
 * El punto base se cae en el corte a propósito: con la elipse engrosada, un
 * punto centrado deja de leerse como el punto base y la marca se convierte en un
 * ojo. Comprobado rasterizando a 32 y 16 px — no devolverlo.
 */
export default function MarcaCubriente({ tam = 28, corte, titulo, style }) {
  const chico = corte ? corte === "corte" : tam <= 32;
  const grosor = chico ? 7.5 : 3.8;

  return (
    <svg
      viewBox="0 0 100 100"
      width={tam}
      height={tam}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      role={titulo ? "img" : undefined}
      aria-hidden={titulo ? undefined : true}
      style={{ display: "block", flex: "none", ...style }}
    >
      {titulo && <title>{titulo}</title>}
      <ellipse
        cx="50"
        cy="80"
        rx="28"
        ry="9"
        strokeWidth={chico ? 5.5 : 3.8}
        opacity={chico ? 1 : 0.45}
      />
      <path d={RUTA} strokeWidth={grosor} />
      {!chico && <circle cx="50" cy="80" r="5.5" fill="currentColor" stroke="none" />}
    </svg>
  );
}
