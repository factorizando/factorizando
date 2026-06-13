// Presentación: Transformaciones geométricas, simetría y congruencia
// Pensamiento Matemático · Geometría · EXANI-I

export const PRESENTACION = {
  id: "transformaciones-congruencia",
  titulo: "Transformaciones Geométricas y Congruencia",
  materia: "Pensamiento Matemático",
  subtema: "Geometría",
  slides: [

    // ── Portada ────────────────────────────────────────────────────────────────
    {
      id: 0,
      tipo: "portada",
      titulo: "Transformaciones Geométricas y Congruencia",
      subtitulo: "Mover una figura sin deformarla: traslación, rotación, reflexión, simetría y congruencia",
      etiqueta: "Pensamiento Matemático · EXANI-I"
    },

    // ── Transformaciones isométricas ───────────────────────────────────────────
    {
      id: 1,
      tipo: "regla_rica",
      etiqueta: "Concepto 1 · Movimientos",
      titulo: "Transformaciones isométricas: mover sin deformar",
      bloques: [
        {
          tipo: "texto",
          texto: "Una transformación isométrica cambia la posición de una figura pero conserva su forma y su tamaño: la figura resultante es idéntica a la original. Hay tres movimientos básicos: la traslación (deslizar en línea recta), la rotación (girar alrededor de un punto) y la reflexión (voltear como en un espejo). En todas ellas se conservan las distancias y los ángulos; solo cambia dónde —o cómo está orientada— la figura."
        },
        {
          tipo: "diagrama",
          id: "geo-isometrias",
          titulo: "Traslación, rotación y reflexión"
        },
        {
          tipo: "tabla",
          titulo: "Los tres movimientos en el plano",
          columnas: ["Movimiento", "Qué hace", "Lo que define"],
          filas: [
            { tiempo: "Traslación", correcto: "Desliza la figura en línea recta", error: "Dirección y distancia (vector)" },
            { tiempo: "Rotación",   correcto: "Gira la figura sobre un punto",    error: "Centro, ángulo y sentido" },
            { tiempo: "Reflexión",  correcto: "Voltea la figura como un espejo",  error: "Eje (línea) de reflexión" }
          ]
        },
        {
          tipo: "par",
          etiqueta: "el sentido del giro importa en una rotación",
          correcto: "Girar 90° en sentido horario (el de las manecillas del reloj) lleva el lado de arriba hacia la derecha",
          incorrecto: "Girar 90° y suponer que da igual el sentido → horario y antihorario dan resultados distintos"
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "Una rotación NO cambia el tamaño ni invierte la figura: solo la gira. Si la figura aparece «en espejo», eso es una reflexión, no una rotación",
          correcto: "Tras rotar, la figura es la misma, solo con otra orientación",
          incorrecto: "Marcar como rotación una imagen reflejada (volteada) → la reflexión invierte, la rotación no"
        }
      ]
    },
    {
      id: 2,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Rotación",
      pregunta: "Una figura con una marca «A» en la parte superior se rota 90° en sentido horario (manecillas del reloj) sobre su centro. ¿Dónde queda la marca «A»?",
      opciones: ["A la izquierda", "A la derecha", "Abajo"],
      correcta: 1,
      explicacion: "En un giro de 90° en sentido horario, lo que estaba arriba pasa a la derecha (arriba → derecha → abajo → izquierda). Si el giro fuera antihorario, lo de arriba pasaría a la izquierda. Tres giros de 90° equivalen a un giro de 270° (o uno de 90° en sentido contrario).",
      pasos: []
    },
    {
      id: 3,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Identificar el movimiento",
      pregunta: "La huella del pie izquierdo y la del pie derecho, una junto a la otra, se relacionan por una transformación. ¿Cuál es?",
      opciones: ["Traslación", "Rotación", "Reflexión"],
      correcta: 2,
      explicacion: "Una huella es la imagen «en espejo» de la otra: están invertidas respecto a un eje vertical entre ellas. Eso es una reflexión. Una traslación solo las deslizaría (quedarían iguales, no invertidas).",
      pasos: []
    },

    // ── Simetría ───────────────────────────────────────────────────────────────
    {
      id: 4,
      tipo: "regla_rica",
      etiqueta: "Concepto 2 · Simetría",
      titulo: "Simetría axial y central",
      bloques: [
        {
          tipo: "texto",
          texto: "Una figura tiene simetría axial si una recta (eje de simetría) la divide en dos mitades que son reflejo una de la otra. Tiene simetría central si al girarla 180° sobre un punto queda igual. Una figura puede tener varios ejes de simetría: el cuadrado tiene 4, el rectángulo solo 2, el círculo tiene infinitos. Contar correctamente los ejes es un reactivo típico."
        },
        {
          tipo: "diagrama",
          id: "geo-ejes-simetria",
          titulo: "Cuadrado vs. rectángulo"
        },
        {
          tipo: "tabla",
          titulo: "Ejes de simetría de figuras regulares",
          columnas: ["Figura", "Ejes de simetría", "Nota"],
          filas: [
            { tiempo: "Triángulo equilátero", correcto: "3 ejes",        error: "uno por cada vértice" },
            { tiempo: "Cuadrado",             correcto: "4 ejes",        error: "2 diagonales + 2 medianas" },
            { tiempo: "Rectángulo",           correcto: "2 ejes",        error: "solo las medianas, no las diagonales" },
            { tiempo: "Pentágono regular",    correcto: "5 ejes",        error: "tantos como lados" },
            { tiempo: "Círculo",              correcto: "infinitos",     error: "cualquier diámetro es eje" }
          ]
        },
        {
          tipo: "par",
          etiqueta: "la diagonal del rectángulo NO es eje de simetría",
          correcto: "El rectángulo tiene 2 ejes: las rectas que pasan por los puntos medios de los lados opuestos",
          incorrecto: "Contar las diagonales del rectángulo como ejes → al doblar por la diagonal las mitades no coinciden"
        },
        {
          tipo: "trampa",
          letra: "B",
          titulo: "Un polígono regular de n lados tiene exactamente n ejes de simetría; no confundas con el número de diagonales",
          correcto: "Hexágono regular: 6 ejes de simetría",
          incorrecto: "Decir que cualquier paralelogramo tiene 4 ejes como el cuadrado → solo el cuadrado los tiene"
        }
      ]
    },
    {
      id: 5,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Ejes de simetría",
      pregunta: "¿Cuántos ejes de simetría tiene un cuadrado?",
      opciones: ["2", "4", "8"],
      correcta: 1,
      explicacion: "El cuadrado tiene 4 ejes de simetría: las dos diagonales y las dos rectas que unen los puntos medios de lados opuestos. (El rectángulo no cuadrado tiene solo 2, porque sus diagonales no son ejes.)",
      pasos: []
    },

    // ── Congruencia y semejanza ────────────────────────────────────────────────
    {
      id: 6,
      tipo: "regla_rica",
      etiqueta: "Concepto 3 · Igualdad de figuras",
      titulo: "Congruencia y semejanza: ¿iguales o solo proporcionales?",
      bloques: [
        {
          tipo: "texto",
          texto: "Dos figuras son congruentes si tienen la misma forma y el mismo tamaño: una se puede llevar exactamente sobre la otra mediante traslación, rotación o reflexión. Son semejantes si tienen la misma forma pero distinto tamaño (sus lados son proporcionales y sus ángulos iguales). Toda figura congruente es también semejante (con razón 1), pero no al revés. Para triángulos, basta verificar ciertos criterios sin medir todo."
        },
        {
          tipo: "diagrama",
          id: "geo-congruencia",
          titulo: "Congruentes vs. semejantes"
        },
        {
          tipo: "tabla",
          titulo: "Criterios de congruencia de triángulos",
          columnas: ["Criterio", "Qué debe coincidir", "Significado"],
          filas: [
            { tiempo: "LLL", correcto: "Los tres lados",                error: "lado-lado-lado" },
            { tiempo: "LAL", correcto: "Dos lados y el ángulo entre ellos", error: "lado-ángulo-lado" },
            { tiempo: "ALA", correcto: "Dos ángulos y el lado entre ellos", error: "ángulo-lado-ángulo" }
          ]
        },
        {
          tipo: "par",
          etiqueta: "congruente conserva el tamaño; semejante solo la forma",
          correcto: "Dos triángulos con lados 3-4-5 y 3-4-5 son congruentes (mismo tamaño)",
          incorrecto: "Llamar congruentes a triángulos 3-4-5 y 6-8-10 → son semejantes (proporcionales), no congruentes"
        },
        {
          tipo: "trampa",
          letra: "C",
          titulo: "Tener los mismos ángulos NO garantiza congruencia: garantiza semejanza. Para congruencia hace falta al menos un lado igual",
          correcto: "Dos triángulos con ángulos 60°-60°-60° son semejantes; serán congruentes solo si además un lado coincide",
          incorrecto: "Concluir «mismos ángulos ⇒ figuras iguales» → pueden ser de tamaños muy distintos"
        }
      ]
    },
    {
      id: 7,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Figuras congruentes",
      pregunta: "¿Cuál de estas parejas de figuras es CONGRUENTE (misma forma y mismo tamaño)?",
      opciones: [
        "Dos rectángulos: uno de 4×6 cm y otro de 8×12 cm",
        "Dos rectángulos de 4×6 cm, uno girado 90°",
        "Un cuadrado de 5 cm y un rombo de lado 5 cm"
      ],
      correcta: 1,
      explicacion: "Dos rectángulos de 4×6 cm tienen idéntica forma y tamaño aunque uno esté girado: la rotación no cambia el tamaño, así que son congruentes. El par 4×6 y 8×12 es semejante (el doble). El cuadrado y el rombo comparten lado pero tienen ángulos distintos: ni siquiera son semejantes.",
      pasos: []
    },
    {
      id: 8,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Criterio de congruencia",
      pregunta: "Dos triángulos coinciden en dos lados y en el ángulo comprendido entre ellos. ¿Por qué criterio son congruentes?",
      opciones: ["LLL", "LAL", "ALA"],
      correcta: 1,
      explicacion: "Coinciden dos Lados y el Ángulo entre ellos: es el criterio LAL (lado-ángulo-lado). El ángulo debe ser el comprendido entre los dos lados; si fuera otro ángulo, el criterio no garantiza la congruencia.",
      pasos: []
    },

    // ── Cierre ─────────────────────────────────────────────────────────────────
    {
      id: 9,
      tipo: "resumen",
      titulo: "Resumen",
      etiqueta: "Lo esencial de transformaciones y congruencia",
      puntos: [
        { titulo: "Isometrías", texto: "traslación, rotación y reflexión conservan forma y tamaño" },
        { titulo: "Rotación", texto: "se define por centro, ángulo y sentido; horario ≠ antihorario" },
        { titulo: "Reflexión", texto: "voltea la figura como un espejo (la invierte)" },
        { titulo: "Ejes de simetría", texto: "polígono regular de n lados ⇒ n ejes; rectángulo: 2; círculo: infinitos" },
        { titulo: "Congruencia", texto: "misma forma Y mismo tamaño (criterios LLL, LAL, ALA)" },
        { titulo: "Semejanza", texto: "misma forma, tamaño proporcional; mismos ángulos no bastan para congruencia" }
      ]
    }

  ]
};
