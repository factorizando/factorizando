// src/components/MarcaTribar.jsx
// La marca de Factorizando: el tribar de prismas 3D en la orientación Ult(V,U).
// Tres vigas recorriendo el circuito (0,0,0) → (L,0,0) → (L,L,0) → (L,L,L),
// proyectadas isométricamente y rotadas 90° para caer en la disposición del
// diagrama: V arriba-izquierda, Ult_U(V) arriba-derecha, M abajo. El punto
// final cae sobre el origen porque (1,1,1) es la dirección de vista — de ahí
// que el circuito parezca cerrar sin cerrar. Es el pliego "Prismas 3D" de
// Figuras/biblioteca.html.
//
// Las nueve caras se copian LITERALES de ese pliego. No se re-derivan con una
// fórmula: cualquier recálculo da otra figura. Los SVG sueltos (favicon,
// avatar, el PNG del comprobante) salen de Figuras/marca-v/generar.py, que
// tiene esta misma lista.

// [d, tono] — el tono es la orientación de la cara: z opaca, x media, y tenue.
const CARAS = [
  ["M 80.69 42.41 L 88 29.75 L 26.62 29.75 L 19.31 42.41 Z", "x"],
  ["M 80.69 17.09 L 88 29.75 L 26.62 29.75 L 19.31 17.09 Z", "y"],
  ["M 12 29.75 L 19.31 42.41 L 26.62 29.75 L 19.31 17.09 Z", "z"],
  ["M 57.31 82.91 L 88 29.75 L 73.38 29.75 L 42.69 82.91 Z", "x"],
  ["M 80.69 17.09 L 88 29.75 L 73.38 29.75 L 66.08 17.09 Z", "y"],
  ["M 35.38 70.25 L 42.69 82.91 L 73.38 29.75 L 66.08 17.09 Z", "z"],
  ["M 57.31 82.91 L 64.62 70.25 L 50 70.25 L 42.69 82.91 Z", "x"],
  ["M 33.92 17.09 L 64.62 70.25 L 50 70.25 L 19.31 17.09 Z", "y"],
  ["M 12 29.75 L 42.69 82.91 L 50 70.25 L 19.31 17.09 Z", "z"],
];

// El sombreado no es decoración: es lo único que hace legible la V a tamaño
// chico, porque las dos caras z SON los dos trazos de la V. Aplanarlo a un
// tono da un trapecio macizo — comprobado rasterizando, Figuras/marca-v/.
const PLIEGO = { z: 1, x: 0.55, y: 0.3 };

// Sobre el disco azul hay que subir el contraste: el blanco al 30 % sobre azul
// se lava por debajo de 32 px y el favicon se vuelve una mancha clara. Con
// 1/.38/.12 la V aguanta a 16 px. En cambio la variante de tinta NO necesita
// corte chico: a 28 y a 16 px las opacidades del pliego se leen igual.
const SOBRE_DISCO = { z: 1, x: 0.38, y: 0.12 };

// El pliego dibuja la figura ocupando 76 de 100 (x de 12 a 88). Suelta, sin
// disco, se agranda a 92; dentro del disco baja a .80 del lienzo.
const SUELTA = 92 / 76;
const AZUL_DISCO = "#4A9EE8";

/**
 * @param {number} tam        lado en px.
 * @param {"tinta"|"disco"} fondo
 *   - `tinta` (por defecto): las caras van en `currentColor`, así que el color
 *     lo pone quien la usa y funciona igual en tema claro y oscuro.
 *   - `disco`: disco azul con la figura calada en blanco. Lleva su propio
 *     fondo, que es lo que necesitan el favicon y los avatares — un trazo
 *     suelto no se lee igual en una pestaña clara que en una oscura.
 */
export default function MarcaTribar({ tam = 28, fondo = "tinta", titulo, style }) {
  const disco = fondo === "disco";
  const op = disco ? SOBRE_DISCO : PLIEGO;
  const escala = disco ? 0.8 : SUELTA;

  return (
    <svg
      viewBox="0 0 100 100"
      width={tam}
      height={tam}
      role={titulo ? "img" : undefined}
      aria-hidden={titulo ? undefined : true}
      style={{ display: "block", flex: "none", ...style }}
    >
      {titulo && <title>{titulo}</title>}
      {disco && <circle cx="50" cy="50" r="50" fill={AZUL_DISCO} />}
      <g
        fill={disco ? "#fff" : "currentColor"}
        transform={`translate(50 50) scale(${escala}) translate(-50 -50)`}
      >
        {CARAS.map(([d, tono], i) => (
          <path key={i} d={d} opacity={op[tono]} />
        ))}
      </g>
    </svg>
  );
}
