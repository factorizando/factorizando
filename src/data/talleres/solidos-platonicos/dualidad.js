// El guion de la sala del Dual: los cinco pasos de la animación, con lo que se
// dice en cada uno.
//
// Está aquí y no en el componente porque es contenido: un maestro puede querer
// decirlo con otras palabras sin tocar la animación. Los números no se
// escriben, se piden al sólido, así que el texto no puede desmentir al dibujo.
//
// El paso 2 carga con la parte que casi nunca se explica —por qué las aristas
// no cambian— y el 3 con la que casi nunca se ve: que una cara del dual sale de
// dar la vuelta alrededor de un vértice del original.
import { SOLIDOS_POR_ID } from "./solidos.js";

export function pasosDual(solidoId) {
  const s = SOLIDOS_POR_ID[solidoId];
  const d = SOLIDOS_POR_ID[s.dual];
  const el = `el ${s.nombre.toLowerCase()}`;

  return [
    {
      titulo: `Esto es ${el}`,
      texto: `${s.numCaras} caras, ${s.numAristas} aristas y ${s.numVertices} vértices. Gíralo con el dedo para verlo por detrás.`,
      resalta: null,
    },
    {
      titulo: "Un punto en el centro de cada cara",
      texto: `Uno por cara, ni uno más: ${s.numCaras} caras, ${s.numCaras} puntos. Estos puntos van a ser los vértices del sólido nuevo.`,
      resalta: "vertices",
    },
    {
      titulo: "Se unen los puntos vecinos",
      texto: `Dos puntos se unen cuando sus caras se tocan. Y como cada una de las ${s.numAristas} aristas es justo donde se tocan dos caras, salen ${s.numAristas} varillas: ni una más ni una menos. Por eso el dual tiene siempre las mismas aristas que el original.`,
      resalta: "aristas",
    },
    {
      titulo: "Las varillas cierran caras",
      texto: `Alrededor de cada vértice de${el.slice(1)} hay ${s.carasPorVertice} caras, y sus ${s.carasPorVertice} puntos cierran ${
        s.carasPorVertice === 3 ? "un triángulo" : s.carasPorVertice === 4 ? "un cuadrado" : "un pentágono"
      }. Un vértice, una cara: ${s.numVertices} vértices → ${s.numVertices} caras.`,
      resalta: "caras",
    },
    {
      titulo: s.id === d.id ? "Es otro tetraedro, volteado" : `Es el ${d.nombre.toLowerCase()}`,
      texto: s.id === d.id
        ? "El tetraedro tiene 4 caras y 4 vértices, así que al intercambiarlos vuelve a salir un tetraedro: es el único de los cinco que es su propio dual. Los dos juntos forman una estrella de ocho puntas."
        : `Se saca para verlo del mismo tamaño. Las ${s.numCaras} caras se volvieron ${s.numCaras} vértices, los ${s.numVertices} vértices se volvieron ${s.numVertices} caras, y las ${s.numAristas} aristas siguen siendo ${s.numAristas}. A esto se le llama el dual, y los cinco sólidos vienen en parejas por esto.`,
      resalta: null,
    },
  ];
}

// El botón del final. Recibe el sólido que quedó en pantalla —el dual— y
// ofrece repetirle la operación, que es donde se ve que el dual del dual es el
// de partida y que por eso son parejas y no una fila.
export function frasePasoSiguiente(enPantalla) {
  const s = SOLIDOS_POR_ID[enPantalla];
  const d = SOLIDOS_POR_ID[s.dual];
  return s.id === d.id
    ? "Otra vez, ahora sobre este tetraedro"
    : `Ahora el dual del ${s.nombre.toLowerCase()}: regresa el ${d.nombre.toLowerCase()}`;
}
