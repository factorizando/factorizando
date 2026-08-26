// Presentación: Triángulos — ángulos, Teorema de Pitágoras y desigualdad triangular
// Pensamiento Matemático · Geometría · EXANI-I

export const PRESENTACION = {
  id: "triangulos-pitagoras",
  titulo: "Triángulos: Ángulos y Teorema de Pitágoras",
  materia: "Pensamiento Matemático",
  examenes: ["EXANI-I"],
  subtema: "Geometría",
  slides: [
    {
      id: 0,
      tipo: "lienzo",
      bloques: [
        {
          tipo: "portada",
          kicker: "Pensamiento Matemático · EXANI-I",
          titulo: "Triángulos: Ángulos y Pitágoras",
          subtitulo: "Clasificación, suma de ángulos internos, Teorema de Pitágoras y desigualdad triangular",
        },
      ],
    },
    {
      id: 1,
      tipo: "lienzo",
      etiqueta: "Concepto 1 · Ángulos",
      titulo: "Clasificación y suma de ángulos internos",
      bloques: [
        {
          tipo: "destacado",
          texto: "Los triángulos se clasifican por sus lados (equilátero: 3 lados iguales; isósceles: 2 iguales; escaleno: todos distintos) y por sus ángulos (acutángulo: todos menores de 90°; rectángulo: uno de 90°; obtusángulo: uno mayor de 90°). En todo triángulo, la suma de los tres ángulos internos es siempre 180°. Esa regla permite hallar un ángulo faltante cuando se conocen los otros dos.",
        },
        {
          tipo: "figura",
          clave: "geo-triangulo-angulos",
          titulo: "Suma de ángulos internos",
        },
        {
          tipo: "tabla",
          ancho: 7,
          alto: 2,
          titulo: "Clasificación de triángulos",
          columnas: ["Criterio", "Tipos", "Característica"],
          filas: [
            ["Por sus lados", "Equilátero · Isósceles · Escaleno", "3 iguales · 2 iguales · 0 iguales"],
            ["Por sus ángulos", "Acutángulo · Rectángulo · Obtusángulo", "<90° · =90° · >90°"],
            ["Equilátero", "Cada ángulo mide 60°", "180° / 3 = 60°"],
            ["Suma interna", "A + B + C = 180°", "vale para todo triángulo"],
          ],
        },
        {
          tipo: "par",
          ancho: 5,
          revelar: true,
          etiqueta: "hallar el ángulo faltante con la suma 180°",
          asi_es: "Si dos ángulos miden 70° y 60°, el tercero es 180° − 70° − 60° = 50°",
          asi_no: "Suponer que los ángulos suman 360° → 360° es la suma de los ángulos de un cuadrilátero, no de un triángulo",
        },
        {
          tipo: "trampa",
          ancho: 5,
          revelar: true,
          letra: "A",
          titulo: "En un triángulo rectángulo, los dos ángulos que no son el recto suman 90° (son complementarios), porque 90° + 90° = 180°",
          asi_es: "Si un ángulo agudo mide 30°, el otro mide 60°",
          asi_no: "Pensar que los dos ángulos agudos suman 180° → ya el ángulo recto ocupa 90° de los 180°",
        },
      ],
    },
    {
      id: 2,
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Reactivo 1 — Ángulo faltante",
          enunciado: "Un mosaico se arma con triángulos rectángulos isósceles (un ángulo de 90° y los otros dos iguales). ¿Cuánto mide cada uno de los otros dos ángulos?",
          opciones: ["45°", "60°", "90°"],
          correcta: 0,
          explicacion: "Los tres ángulos suman 180°. Si uno mide 90°, los otros dos suman 90°; como son iguales, cada uno mide 90°/2 = 45°. (Un triángulo no puede tener dos ángulos de 90°, eso sumaría 180° sin el tercero.)",
        },
      ],
    },
    {
      id: 3,
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Reactivo 2 — Clasificación",
          enunciado: "Un triángulo tiene lados de 7 cm, 7 cm y 10 cm y todos sus ángulos son menores de 90°. ¿Cómo se clasifica por sus lados?",
          opciones: ["Equilátero", "Isósceles", "Escaleno"],
          correcta: 1,
          explicacion: "Tiene exactamente dos lados iguales (7 y 7), así que es isósceles. Equilátero sería con los tres lados iguales; escaleno, con los tres distintos. La clasificación por lados es independiente de la de ángulos.",
        },
      ],
    },
    {
      id: 4,
      tipo: "lienzo",
      etiqueta: "Concepto 2 · Pitágoras",
      titulo: "Teorema de Pitágoras",
      bloques: [
        {
          tipo: "destacado",
          texto: "En todo triángulo rectángulo, el cuadrado de la hipotenusa (el lado opuesto al ángulo de 90°, siempre el más largo) es igual a la suma de los cuadrados de los catetos: c² = a² + b². Sirve para hallar un lado cuando se conocen los otros dos. Para encontrar un cateto, se despeja restando: a² = c² − b². Conviene recordar las ternas pitagóricas, que aparecen una y otra vez.",
        },
        {
          tipo: "figura",
          clave: "geo-pitagoras",
          titulo: "El triángulo 3-4-5 y sus cuadrados",
        },
        {
          tipo: "tabla",
          ancho: 7,
          alto: 2,
          titulo: "Ternas pitagóricas frecuentes",
          columnas: ["Catetos", "Hipotenusa", "Comprobación"],
          filas: [
            ["3 y 4", "5", "9 + 16 = 25 = 5²"],
            ["6 y 8", "10", "36 + 64 = 100 = 10²"],
            ["5 y 12", "13", "25 + 144 = 169 = 13²"],
            ["8 y 15", "17", "64 + 225 = 289 = 17²"],
          ],
        },
        {
          tipo: "par",
          ancho: 5,
          revelar: true,
          etiqueta: "para un cateto se resta, no se suma",
          asi_es: "Si la hipotenusa es 10 y un cateto es 8: a = √(10² − 8²) = √(100−64) = √36 = 6",
          asi_no: "Sumar (10² + 8²) para hallar el cateto → eso daría la hipotenusa de otro triángulo, no el cateto",
        },
        {
          tipo: "trampa",
          ancho: 5,
          revelar: true,
          letra: "B",
          titulo: "La hipotenusa es SIEMPRE el lado más largo y va sola en un lado de la fórmula. Pitágoras solo vale en triángulos rectángulos",
          asi_es: "c² = a² + b² con c = hipotenusa (frente al ángulo de 90°)",
          asi_no: "Aplicar Pitágoras a un triángulo sin ángulo recto → la igualdad no se cumple",
        },
      ],
    },
    {
      id: 5,
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Reactivo 1 — Hallar la hipotenusa",
          enunciado: "Una escalera se apoya formando un triángulo rectángulo cuyos catetos miden 6 m y 8 m. ¿Cuánto mide la hipotenusa?",
          opciones: ["10 m", "14 m", "48 m"],
          correcta: 0,
          explicacion: "c² = a² + b² = 6² + 8² = 36 + 64 = 100, así que c = √100 = 10 m. (Es la terna 6-8-10. Sumar los catetos, 6+8 = 14, no da la hipotenusa.)",
        },
      ],
    },
    {
      id: 6,
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Reactivo 2 — Hallar un cateto",
          enunciado: "En un triángulo rectángulo la hipotenusa mide 13 cm y un cateto mide 5 cm. ¿Cuánto mide el otro cateto?",
          opciones: ["8 cm", "12 cm", "18 cm"],
          correcta: 1,
          explicacion: "Se despeja el cateto restando: a² = c² − b² = 13² − 5² = 169 − 25 = 144, así que a = √144 = 12 cm. (Es la terna 5-12-13.)",
        },
      ],
    },
    {
      id: 7,
      tipo: "lienzo",
      etiqueta: "Concepto 3 · Existencia",
      titulo: "Desigualdad triangular: ¿estas medidas forman un triángulo?",
      bloques: [
        {
          tipo: "destacado",
          texto: "Tres longitudes forman un triángulo solo si cada lado es menor que la suma de los otros dos. Basta comprobar el lado más largo: si el lado mayor es menor que la suma de los otros dos, el triángulo existe; si es igual o mayor, no se cierra. Es una verificación rápida que aparece como reactivo de «¿cuáles valores forman un triángulo?».",
        },
        {
          tipo: "figura",
          clave: "geo-desigualdad",
          titulo: "¿Cierra el triángulo?",
        },
        {
          tipo: "tabla",
          ancho: 7,
          alto: 2,
          titulo: "Comprobar el lado mayor contra la suma de los otros",
          columnas: ["Lados", "Comprobación", "¿Forma triángulo?"],
          filas: [
            ["5, 5, 8", "8 < 5 + 5 = 10", "Sí"],
            ["5, 5, 10", "10 = 5 + 5", "No (queda plano)"],
            ["5, 5, 12", "12 > 5 + 5 = 10", "No (no se cierra)"],
            ["3, 4, 5", "5 < 3 + 4 = 7", "Sí (y es rectángulo)"],
          ],
        },
        {
          tipo: "par",
          ancho: 5,
          revelar: true,
          etiqueta: "se compara el lado mayor con la suma de los otros dos",
          asi_es: "Lados 6, 8, 9: el mayor es 9 y 9 < 6 + 8 = 14 → sí forman triángulo",
          asi_no: "Aceptar 2, 3, 7 como triángulo → 7 > 2 + 3 = 5, los lados cortos no alcanzan a unirse",
        },
        {
          tipo: "trampa",
          ancho: 5,
          revelar: true,
          letra: "C",
          titulo: "Si el lado mayor es exactamente igual a la suma de los otros dos, NO hay triángulo: los tres puntos quedan alineados (triángulo degenerado)",
          asi_es: "4, 6, 10 → 10 = 4 + 6 → no forma triángulo (es un segmento)",
          asi_no: "Pensar que «igual» también vale → la desigualdad debe ser estricta (menor que)",
        },
      ],
    },
    {
      id: 8,
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Reactivo 1 — ¿Forman triángulo?",
          enunciado: "¿Cuál de estos conjuntos de longitudes (en cm) puede formar un triángulo?",
          opciones: ["5, 5, 14", "5, 5, 12", "5, 5, 8"],
          correcta: 2,
          explicacion: "Hay que comparar el lado mayor con la suma de los otros dos. 5, 5, 8: 8 < 5+5 = 10 ✓ sí forma triángulo. 5, 5, 12: 12 > 10 ✗. 5, 5, 14: 14 > 10 ✗. Solo 5, 5, 8 cumple la desigualdad triangular.",
        },
      ],
    },
    {
      id: 9,
      tipo: "lienzo",
      etiqueta: "Lo esencial de triángulos",
      titulo: "Resumen",
      bloques: [
        {
          tipo: "lista",
          items: [
            {
              math: "A + B + C = 180^\\circ",
              texto: "los ángulos internos suman siempre 180°",
            },
            {
              titulo: "Rectángulo",
              texto: "los dos ángulos agudos son complementarios (suman 90°)",
            },
            {
              math: "c^2 = a^2 + b^2",
              texto: "Pitágoras: la hipotenusa al cuadrado = suma de cuadrados de los catetos",
            },
            {
              math: "a = \\sqrt{c^2 - b^2}",
              texto: "para un cateto se resta; la hipotenusa es el lado mayor",
            },
            {
              titulo: "Ternas útiles",
              texto: "3-4-5, 6-8-10, 5-12-13, 8-15-17",
            },
            {
              titulo: "Desigualdad triangular",
              texto: "el lado mayor debe ser menor que la suma de los otros dos",
            },
          ],
        },
      ],
    },
  ],
};
