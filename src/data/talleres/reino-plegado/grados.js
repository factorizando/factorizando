// La tabla de grados del juego: qué tema se trabaja en qué grado.
//
// Es el instrumento de medición entero. El juego estima "qué grado domina"
// preguntando temas etiquetados con grado y viendo hasta dónde aguanta el
// jugador, así que si esta tabla está mal, la medición mide otra cosa.
// La revisó y corrigió el maestro (18 ago 2026).
//
// Un tema puede vivir en varios grados: lo que cambia es la dificultad con la
// que lo genera su generador, no el tema. `perimetro-area` en 4.º es el
// perímetro de un rectángulo y en 6.º es el área de un círculo.

export const GRADOS = [3, 4, 5, 6];

export const TEMAS_JUEGO = [
  // ── Matemáticas ────────────────────────────────────────────────────────
  { tema: "suma-resta", materia: "matematicas", grados: [3, 4],
    nota: "Sumar y restar agrupando centenas, decenas y unidades." },
  { tema: "multiplicacion", materia: "matematicas", grados: [3, 4],
    nota: "Multiplicar es sumar el mismo grupo varias veces." },
  { tema: "division-exacta", materia: "matematicas", grados: [4, 5],
    nota: "La división como la vuelta de la multiplicación." },
  { tema: "planos-trayectorias", materia: "matematicas", grados: [4, 5, 6] },
  { tema: "recta-numerica", materia: "matematicas", grados: [4, 5, 6] },
  { tema: "perimetro-area", materia: "matematicas", grados: [4, 5],
    nota: "4.º perímetro de rectángulos; 5.º área de rectángulos y triángulos." },
  { tema: "circunferencia", materia: "matematicas", grados: [6] },
  { tema: "fracciones", materia: "matematicas", grados: [4, 5] },
  { tema: "comparar-fracciones", materia: "matematicas", grados: [5] },
  { tema: "operaciones-fracciones", materia: "matematicas", grados: [6] },
  { tema: "fraccion-decimal", materia: "matematicas", grados: [6] },
  { tema: "decimales", materia: "matematicas", grados: [5, 6] },
  { tema: "multiplos-divisores", materia: "matematicas", grados: [5] },
  { tema: "series", materia: "matematicas", grados: [5, 6],
    nota: "5.º progresión aritmética (también con fracciones); 6.º geométrica." },
  { tema: "promedio", materia: "matematicas", grados: [6] },
  { tema: "moda", materia: "matematicas", grados: [6] },

  // ── Español ────────────────────────────────────────────────────────────
  { tema: "clases-palabra", materia: "espanol", grados: [3, 4],
    nota: "3.º sustantivo, verbo y adjetivo; 4.º entra el adverbio." },
  { tema: "mayusculas", materia: "espanol", grados: [3] },
  { tema: "signos", materia: "espanol", grados: [3],
    nota: "Enunciados interrogativos." },
  { tema: "sujeto-predicado", materia: "espanol", grados: [4],
    nota: "Oraciones completas: sus elementos principales." },
  { tema: "prefijos-sufijos", materia: "espanol", grados: [5] },
  { tema: "sintagmas", materia: "espanol", grados: [5, 6],
    nota: "5.º adjetival y verbal; 6.º preposicional." },
  { tema: "literal-figurado", materia: "espanol", grados: [5] },
  { tema: "conectores", materia: "espanol", grados: [5] },
  { tema: "mapas-conceptuales", materia: "espanol", grados: [6] },
  { tema: "jerarquizar", materia: "espanol", grados: [6] },
];

export const MATERIAS = ["matematicas", "espanol"];

export function temasDe(grado, materia) {
  return TEMAS_JUEGO
    .filter((t) => t.materia === materia && t.grados.includes(grado))
    .map((t) => t.tema);
}

export function gradosDe(tema) {
  return TEMAS_JUEGO.find((t) => t.tema === tema)?.grados || [];
}
