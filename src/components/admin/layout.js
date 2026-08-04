// src/components/admin/layout.js
// Constantes de layout compartidas por el panel admin. Las páginas usan estilos
// inline, donde no se pueden declarar media queries, así que lo adaptativo se
// resuelve con primitivas de CSS que reaccionan al ancho disponible.

/**
 * Rejilla de dos columnas para los formularios de los modales, que colapsa sola
 * a una columna en teléfono. Sustituye a `"1fr 1fr"`, que mantenía dos columnas
 * a cualquier ancho y dejaba campos de ~134px en un teléfono de 375px.
 *
 * El mínimo de 160px fija el punto de colapso. Los modales miden
 * `min(90%, 480–520px)` y descuentan 56px de padding:
 *   · teléfono 375px → 281px de contenido → 2×160+12 = 332 no cabe → 1 columna
 *   · modal de 520px → 464px de contenido → 3×160+24 = 504 no cabe → 2 columnas
 * Es decir: nunca pasa de dos columnas y colapsa por debajo de ~390px de
 * viewport. Si se cambia el ancho de un modal, hay que rehacer esta cuenta.
 */
export const GRID_FORM = "repeat(auto-fit, minmax(160px, 1fr))";

/**
 * Para el bloque de texto de una fila de datos (nombre, correo, concepto).
 *
 * Los hijos de un flex traen `min-width: auto`, que impide encoger por debajo
 * del contenido más ancho. Con un correo largo —una cadena sin espacios— la
 * columna de texto se niega a ceder y empuja los botones fuera de la fila:
 * medido, 13px de desborde a 343px de ancho. `minWidth: 0` levanta ese piso y
 * `overflowWrap` permite partir la cadena.
 */
export const TEXTO_FLEXIBLE = { minWidth: 0, overflowWrap: "anywhere" };
