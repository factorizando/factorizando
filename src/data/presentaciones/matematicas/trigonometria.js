// Presentación: Razones y relaciones trigonométricas
// Pensamiento Matemático · Comprensión de lo matemático / Matematización · EXANI-II

export const PRESENTACION = {
  id: "trigonometria",
  titulo: "Razones y Relaciones Trigonométricas",
  materia: "Pensamiento Matemático",
  subtema: "Matematización",
  slides: [

    // ── Portada ────────────────────────────────────────────────────────────────
    {
      id: 0,
      tipo: "portada",
      titulo: "Razones y Relaciones Trigonométricas",
      subtitulo: "Seno, coseno y tangente en el triángulo rectángulo, valores notables e identidades básicas",
      etiqueta: "Pensamiento Matemático · EXANI-II"
    },

    // ── El triángulo rectángulo ────────────────────────────────────────────────
    {
      id: 1,
      tipo: "regla_rica",
      etiqueta: "Bloque 1 · Base",
      titulo: "El triángulo rectángulo y Pitágoras",
      bloques: [
        {
          tipo: "texto",
          texto: "La trigonometría básica se apoya en el triángulo rectángulo: el que tiene un ángulo de 90°. El lado opuesto al ángulo recto, el más largo, es la hipotenusa; los otros dos son los catetos. El teorema de Pitágoras relaciona sus lados: la suma de los cuadrados de los catetos es igual al cuadrado de la hipotenusa, a² + b² = c². Respecto a un ángulo agudo θ, un cateto es el opuesto (enfrente del ángulo) y el otro es el adyacente (junto al ángulo)."
        },
        {
          tipo: "tabla",
          titulo: "Lados del triángulo rectángulo",
          columnas: ["Lado", "Ubicación", "Nota"],
          filas: [
            { tiempo: "Hipotenusa", correcto: "Opuesta al ángulo de 90°", error: "Siempre el lado más largo" },
            { tiempo: "Cateto opuesto",  correcto: "Enfrente del ángulo θ", error: "Cambia según el ángulo elegido" },
            { tiempo: "Cateto adyacente", correcto: "Junto al ángulo θ",    error: "El que forma θ con la hipotenusa" },
            { tiempo: "Pitágoras",  correcto: "a² + b² = c²",               error: "Catetos a, b; hipotenusa c" }
          ]
        },
        {
          tipo: "par",
          etiqueta: "el triángulo 3-4-5 cumple Pitágoras",
          correcto: "3² + 4² = 9 + 16 = 25 = 5² → catetos 3 y 4, hipotenusa 5",
          incorrecto: "Sumar los lados sin elevar al cuadrado (3+4 = 7 ≠ 5) → Pitágoras usa cuadrados"
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "El cateto opuesto y el adyacente dependen del ángulo de referencia: cambian si cambias de ángulo agudo",
          correcto: "Para el otro ángulo agudo, lo que era opuesto pasa a ser adyacente",
          incorrecto: "Fijar «opuesto» y «adyacente» como lados absolutos del triángulo"
        }
      ]
    },
    {
      id: 2,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Pitágoras",
      pregunta: "Un triángulo rectángulo tiene catetos de 6 y 8. ¿Cuánto mide la hipotenusa?",
      opciones: ["10", "14", "√14"],
      correcta: 0,
      explicacion: "Por Pitágoras: c² = 6² + 8² = 36 + 64 = 100, así que c = √100 = 10. (Es un triángulo 6-8-10, múltiplo del 3-4-5.)",
      pasos: []
    },

    // ── Razones trigonométricas ────────────────────────────────────────────────
    {
      id: 3,
      tipo: "regla_rica",
      etiqueta: "Bloque 2 · Razones",
      titulo: "Seno, coseno y tangente",
      bloques: [
        {
          tipo: "texto",
          texto: "Las razones trigonométricas relacionan un ángulo agudo con los lados del triángulo rectángulo. Las tres principales se memorizan con la regla SOH-CAH-TOA: Seno = Opuesto/Hipotenusa; Coseno = Adyacente/Hipotenusa; Tangente = Opuesto/Adyacente. Cada razón es un cociente que depende solo del ángulo, no del tamaño del triángulo: dos triángulos semejantes tienen las mismas razones."
        },
        {
          tipo: "tabla",
          titulo: "Las tres razones (SOH-CAH-TOA)",
          columnas: ["Razón", "Definición", "En 3-4-5 (opuesto 3, ady. 4)"],
          filas: [
            { tiempo: "sen θ", correcto: "opuesto / hipotenusa", error: "sen θ = 3/5 = 0.6" },
            { tiempo: "cos θ", correcto: "adyacente / hipotenusa", error: "cos θ = 4/5 = 0.8" },
            { tiempo: "tan θ", correcto: "opuesto / adyacente",  error: "tan θ = 3/4 = 0.75" }
          ]
        },
        {
          tipo: "par",
          etiqueta: "la tangente también es seno entre coseno",
          correcto: "tan θ = sen θ / cos θ = (3/5)/(4/5) = 3/4",
          incorrecto: "Confundir seno con coseno: sen usa el OPUESTO, cos usa el ADYACENTE"
        },
        {
          tipo: "trampa",
          letra: "B",
          titulo: "El seno y el coseno de un ángulo agudo siempre están entre 0 y 1 (un cateto es menor que la hipotenusa)",
          correcto: "sen θ = 0.6 y cos θ = 0.8 son válidos (< 1)",
          incorrecto: "Obtener sen θ = 1.25 → imposible: el opuesto no puede superar a la hipotenusa"
        }
      ]
    },
    {
      id: 4,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Razones",
      pregunta: "En un triángulo rectángulo, el cateto opuesto a θ mide 5 y la hipotenusa 13. ¿Cuál es cos θ? (cateto adyacente = 12)",
      opciones: ["5/13", "12/13", "5/12"],
      correcta: 1,
      explicacion: "El adyacente se obtiene por Pitágoras: √(13² − 5²) = √(169 − 25) = √144 = 12. Entonces cos θ = adyacente/hipotenusa = 12/13. (5/13 sería el seno y 5/12 la tangente.)",
      pasos: []
    },
    {
      id: 5,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Tangente",
      pregunta: "Si en un triángulo rectángulo el cateto opuesto a θ mide 7 y el adyacente 24, ¿cuál es tan θ?",
      opciones: ["24/7", "7/25", "7/24"],
      correcta: 2,
      explicacion: "tan θ = opuesto/adyacente = 7/24. La opción 24/7 invierte la razón y 7/25 usaría la hipotenusa (que es 25), lo cual corresponde al seno, no a la tangente.",
      pasos: []
    },

    // ── Valores notables ───────────────────────────────────────────────────────
    {
      id: 6,
      tipo: "regla_rica",
      etiqueta: "Bloque 3 · Ángulos notables",
      titulo: "Valores de 30°, 45° y 60°",
      bloques: [
        {
          tipo: "texto",
          texto: "Algunos ángulos aparecen tan seguido que conviene memorizar sus razones: 30°, 45° y 60°. Una forma de recordarlos: los senos de 30°, 45° y 60° son √1/2, √2/2 y √3/2 (es decir 1/2, √2/2, √3/2), y los cosenos van en orden inverso. La tangente es el cociente seno/coseno. Estos valores permiten resolver problemas sin calculadora."
        },
        {
          tipo: "tabla",
          titulo: "Razones de ángulos notables",
          columnas: ["Ángulo", "sen / cos", "tan"],
          filas: [
            { tiempo: "30°", correcto: "sen = 1/2 ;  cos = √3/2", error: "tan 30° = √3/3 ≈ 0.577" },
            { tiempo: "45°", correcto: "sen = √2/2 ; cos = √2/2", error: "tan 45° = 1" },
            { tiempo: "60°", correcto: "sen = √3/2 ; cos = 1/2",  error: "tan 60° = √3 ≈ 1.732" }
          ]
        },
        {
          tipo: "par",
          etiqueta: "seno y coseno se intercambian entre 30° y 60° (ángulos complementarios)",
          correcto: "sen 30° = cos 60° = 1/2 ;  cos 30° = sen 60° = √3/2",
          incorrecto: "Suponer sen 60° = 1/2 → es √3/2; el 1/2 corresponde a sen 30°"
        },
        {
          tipo: "trampa",
          letra: "C",
          titulo: "En 45° el seno y el coseno son iguales (√2/2) y la tangente vale exactamente 1",
          correcto: "tan 45° = sen45°/cos45° = (√2/2)/(√2/2) = 1",
          incorrecto: "Decir tan 45° = √2/2 → confunde la tangente con el seno"
        }
      ]
    },
    {
      id: 7,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Valores notables",
      pregunta: "¿Cuál es el valor de cos 60°?",
      opciones: ["1/2", "√3/2", "√2/2"],
      correcta: 0,
      explicacion: "cos 60° = 1/2. Conviene recordar que cos 60° = sen 30° = 1/2 (ángulos complementarios). El valor √3/2 corresponde a cos 30° y √2/2 a cos 45°.",
      pasos: []
    },

    // ── Identidades / relaciones ───────────────────────────────────────────────
    {
      id: 8,
      tipo: "regla_rica",
      etiqueta: "Bloque 4 · Relaciones",
      titulo: "Relaciones e identidades básicas",
      bloques: [
        {
          tipo: "texto",
          texto: "Las razones trigonométricas se vinculan entre sí mediante identidades, válidas para cualquier ángulo. La fundamental es la identidad pitagórica: sen²θ + cos²θ = 1 (consecuencia directa del teorema de Pitágoras). Otra relación clave es la de cociente: tan θ = sen θ / cos θ. Existen además las razones recíprocas: cosecante (1/sen), secante (1/cos) y cotangente (1/tan). Con estas relaciones se obtiene una razón a partir de otra."
        },
        {
          tipo: "tabla",
          titulo: "Identidades y recíprocas",
          columnas: ["Relación", "Fórmula", "Uso"],
          filas: [
            { tiempo: "Pitagórica",  correcto: "sen²θ + cos²θ = 1", error: "Hallar cos si conoces sen" },
            { tiempo: "Cociente",    correcto: "tan θ = sen θ / cos θ", error: "Relaciona las tres principales" },
            { tiempo: "Cosecante",   correcto: "csc θ = 1 / sen θ", error: "Recíproca del seno" },
            { tiempo: "Secante / cotangente", correcto: "sec θ = 1/cos θ ; cot θ = 1/tan θ", error: "Recíprocas de coseno y tangente" }
          ]
        },
        {
          tipo: "par",
          etiqueta: "de la identidad pitagórica se despeja una razón",
          correcto: "Si sen θ = 0.6 → cos²θ = 1 − 0.36 = 0.64 → cos θ = 0.8",
          incorrecto: "Escribir sen²θ como (sen θ)·2 → sen²θ significa (sen θ)², al cuadrado"
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "sen²θ significa (sen θ)², no el seno de θ²: primero se calcula el seno y luego se eleva al cuadrado",
          correcto: "sen²30° = (1/2)² = 1/4",
          incorrecto: "Interpretar sen²30° como sen(900°) → notación mal leída"
        }
      ]
    },
    {
      id: 9,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Identidad pitagórica",
      pregunta: "Si sen θ = 8/17 y θ es agudo, ¿cuánto vale cos θ?",
      opciones: ["15/17", "9/17", "8/15"],
      correcta: 0,
      explicacion: "Por la identidad: cos²θ = 1 − sen²θ = 1 − (8/17)² = 1 − 64/289 = 225/289. Entonces cos θ = √(225/289) = 15/17. (Es el triángulo 8-15-17.)",
      pasos: []
    },

    // ── Aplicación ─────────────────────────────────────────────────────────────
    {
      id: 10,
      tipo: "regla_rica",
      etiqueta: "Bloque 5 · Aplicación",
      titulo: "Resolver triángulos y ángulos de elevación",
      bloques: [
        {
          tipo: "texto",
          texto: "Una aplicación típica es calcular alturas o distancias usando una razón trigonométrica. El ángulo de elevación es el que forma la línea de visión hacia un objeto alto con la horizontal. Para resolver: se identifica el ángulo, se decide qué lados intervienen (opuesto, adyacente o hipotenusa) y se elige la razón que los relaciona. Luego se despeja la incógnita."
        },
        {
          tipo: "tabla",
          titulo: "Elegir la razón correcta",
          columnas: ["Datos que tienes", "Incógnita", "Razón a usar"],
          filas: [
            { tiempo: "Ángulo + adyacente", correcto: "Lado opuesto (altura)", error: "tan θ = opuesto/adyacente" },
            { tiempo: "Ángulo + hipotenusa", correcto: "Lado opuesto",          error: "sen θ = opuesto/hipotenusa" },
            { tiempo: "Ángulo + hipotenusa", correcto: "Lado adyacente",        error: "cos θ = adyacente/hipotenusa" }
          ]
        },
        {
          tipo: "par",
          etiqueta: "altura con ángulo de elevación y distancia horizontal",
          correcto: "A 30 m, ángulo 45°: altura = 30·tan 45° = 30·1 = 30 m",
          incorrecto: "Usar sen en lugar de tan cuando el dato es el cateto adyacente, no la hipotenusa"
        },
        {
          tipo: "trampa",
          letra: "B",
          titulo: "Elige la razón según los lados disponibles: con cateto adyacente y opuesto se usa la tangente, no el seno",
          correcto: "Tienes adyacente y buscas opuesto → tan θ",
          incorrecto: "Aplicar sen θ cuando no conoces la hipotenusa → no podrás despejar"
        }
      ]
    },
    {
      id: 11,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Aplicación",
      pregunta: "Desde 40 m de la base de un edificio, el ángulo de elevación a la punta es 60°. ¿Cuál es la altura? (tan 60° = √3 ≈ 1.73)",
      opciones: ["≈ 69 m", "≈ 23 m", "≈ 40 m"],
      correcta: 0,
      explicacion: "El dato es el cateto adyacente (40 m) y se busca el opuesto (altura): tan 60° = altura/40 → altura = 40·tan 60° = 40·1.73 ≈ 69 m.",
      pasos: []
    },

    // ── Cierre ────────────────────────────────────────────────────────────────
    {
      id: 12,
      tipo: "resumen",
      titulo: "Resumen",
      etiqueta: "Lo esencial de la trigonometría",
      puntos: [
        { math: "a^2 + b^2 = c^2", texto: "teorema de Pitágoras en el triángulo rectángulo" },
        { titulo: "SOH-CAH-TOA", texto: "sen = op/hip ; cos = ady/hip ; tan = op/ady" },
        { titulo: "Notables", texto: "sen 30° = 1/2 ; sen 45° = √2/2 ; sen 60° = √3/2 ; tan 45° = 1" },
        { math: "\\operatorname{sen}^2\\theta + \\cos^2\\theta = 1", texto: "identidad pitagórica" },
        { math: "\\tan\\theta = \\dfrac{\\operatorname{sen}\\theta}{\\cos\\theta}", texto: "relación de cociente" },
        { titulo: "Aplicación", texto: "elige la razón según los lados conocidos y despeja" }
      ]
    }

  ]
};
