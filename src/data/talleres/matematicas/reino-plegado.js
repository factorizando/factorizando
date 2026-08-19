// El Reino Plegado — juego de mundos y niveles para regularización de primaria.
//
// Cuatro mundos, uno por espacio topológico: el plano, la banda de Möbius, el
// toro (el mundo de Pac-Man) y el taller de Escher. La topología no es
// decorado: impone cómo se mueve el jugador y arrastra consigo los temas que
// se le parecen —la dona da vueltas y ahí viven los múltiplos y las
// sucesiones; la banda invierte y ahí viven multiplicar y dividir—.
//
// Se juega **por turnos en una sola tablet**: seis jugadores con su avatar,
// cada quien con su avance, todo guardado en el dispositivo. Los niveles se
// abren resolviendo acertijos de matemáticas y español que están dentro del
// nivel, como portales, no como una pantalla previa.
//
// Y debajo corre la medición: cada acertijo lleva tema y grado, se anota el
// primer intento y una escalera sube o baja de grado según cómo vaya. Al final
// el maestro sabe **qué grado domina cada quien** (3.º a 6.º) sin que ningún
// niño haya visto una calificación. Ver docs/JUEGO_REINO_PLEGADO.md.

export const TALLER = {
  id: "reino-plegado",
  titulo: "El Reino Plegado",
  materia: "Matemáticas",
  tema: "Juego de mundos: matemáticas y español",
  nivel: "primaria",
  edades: "8-12 años",
  icono: "🗺️",
  descripcion:
    "Juego por mundos y niveles donde el escenario es un espacio topológico. Se camina por el " +
    "mapa, se abren portales resolviendo acertijos de matemáticas y español, y por debajo el " +
    "juego estima en qué grado va cada jugador —de 3.º a 6.º— sin enseñarle nunca una calificación.",

  actividades: [
    { id: "flatland", nombre: "Mundo 1 · Flatland", edades: "8-12",
      temas: ["planos-trayectorias", "recta-numerica", "suma-resta", "multiplicacion", "perimetro-area",
              "clases-palabra", "mayusculas", "sujeto-predicado"] },
    { id: "mobius", nombre: "Mundo 2 · La Banda", edades: "8-12",
      temas: ["division-exacta", "multiplicacion", "fraccion-decimal", "decimales",
              "prefijos-sufijos", "literal-figurado"] },
    { id: "toro", nombre: "Mundo 3 · La Dona", edades: "8-12",
      temas: ["multiplos-divisores", "series", "promedio", "moda", "conectores", "jerarquizar", "signos"] },
    { id: "escher", nombre: "Mundo 4 · El Taller de Escher", edades: "10-12",
      temas: ["perimetro-area", "circunferencia", "fracciones", "comparar-fracciones",
              "operaciones-fracciones", "sintagmas", "mapas-conceptuales"] },
  ],

  objetivos: [
    "Practicar matemáticas y español dentro de un juego, no en una hoja de ejercicios.",
    "Ubicarse en un plano: leer un croquis, seguir una ruta y contar cuadras.",
    "Sumar y restar agrupando centenas, decenas y unidades.",
    "Reconocer las clases de palabra dentro de una oración de verdad.",
    "Estimar en qué grado va cada alumno sin aplicarle un examen.",
  ],

  render: { tipo: "react", componente: "reino-plegado" },
};
