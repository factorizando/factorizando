// Presentación: Razones y relaciones trigonométricas
// Pensamiento Matemático · Comprensión de lo matemático / Matematización · EXANI-II

export const PRESENTACION = {
  id: "trigonometria",
  titulo: "Razones y Relaciones Trigonométricas",
  materia: "Pensamiento Matemático",
  subtema: "Matematización",
  slides: [
    {
      id: 0,
      tipo: "lienzo",
      bloques: [
        {
          tipo: "portada",
          kicker: "Pensamiento Matemático · EXANI-II",
          titulo: "Razones y Relaciones Trigonométricas",
          subtitulo: "Seno, coseno y tangente en el triángulo rectángulo, valores notables e identidades básicas",
        },
      ],
    },
    {
      id: 1,
      tipo: "lienzo",
      etiqueta: "Bloque 1 · Base",
      titulo: "El triángulo rectángulo y Pitágoras",
      bloques: [
        {
          tipo: "destacado",
          texto: "La trigonometría básica se apoya en el triángulo rectángulo: el que tiene un ángulo de 90°. El lado opuesto al ángulo recto, el más largo, es la hipotenusa; los otros dos son los catetos. El teorema de Pitágoras relaciona sus lados: la suma de los cuadrados de los catetos es igual al cuadrado de la hipotenusa, a² + b² = c². Respecto a un ángulo agudo θ, un cateto es el opuesto (enfrente del ángulo) y el otro es el adyacente (junto al ángulo).",
        },
        {
          tipo: "tabla",
          ancho: 7,
          alto: 2,
          titulo: "Lados del triángulo rectángulo",
          columnas: ["Lado", "Ubicación", "Nota"],
          filas: [
            ["Hipotenusa", "Opuesta al ángulo de 90°", "Siempre el lado más largo"],
            ["Cateto opuesto", "Enfrente del ángulo θ", "Cambia según el ángulo elegido"],
            ["Cateto adyacente", "Junto al ángulo θ", "El que forma θ con la hipotenusa"],
            ["Pitágoras", "a² + b² = c²", "Catetos a, b; hipotenusa c"],
          ],
        },
        {
          tipo: "par",
          ancho: 5,
          revelar: true,
          etiqueta: "el triángulo 3-4-5 cumple Pitágoras",
          asi_es: "3² + 4² = 9 + 16 = 25 = 5² → catetos 3 y 4, hipotenusa 5",
          asi_no: "Sumar los lados sin elevar al cuadrado (3+4 = 7 ≠ 5) → Pitágoras usa cuadrados",
        },
        {
          tipo: "trampa",
          ancho: 5,
          revelar: true,
          letra: "A",
          titulo: "El cateto opuesto y el adyacente dependen del ángulo de referencia: cambian si cambias de ángulo agudo",
          asi_es: "Para el otro ángulo agudo, lo que era opuesto pasa a ser adyacente",
          asi_no: "Fijar «opuesto» y «adyacente» como lados absolutos del triángulo",
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
          etiqueta: "Reactivo 1 — Pitágoras",
          enunciado: "Un triángulo rectángulo tiene catetos de 6 y 8. ¿Cuánto mide la hipotenusa?",
          opciones: ["10", "14", "√14"],
          correcta: 0,
          explicacion: "Por Pitágoras: c² = 6² + 8² = 36 + 64 = 100, así que c = √100 = 10. (Es un triángulo 6-8-10, múltiplo del 3-4-5.)",
        },
      ],
    },
    {
      id: 3,
      tipo: "lienzo",
      etiqueta: "Bloque 2 · Razones",
      titulo: "Seno, coseno y tangente",
      bloques: [
        {
          tipo: "destacado",
          texto: "Las razones trigonométricas relacionan un ángulo agudo con los lados del triángulo rectángulo. Las tres principales se memorizan con la regla SOH-CAH-TOA: Seno = Opuesto/Hipotenusa; Coseno = Adyacente/Hipotenusa; Tangente = Opuesto/Adyacente. Cada razón es un cociente que depende solo del ángulo, no del tamaño del triángulo: dos triángulos semejantes tienen las mismas razones.",
        },
        {
          tipo: "tabla",
          ancho: 7,
          alto: 2,
          titulo: "Las tres razones (SOH-CAH-TOA)",
          columnas: ["Razón", "Definición", "En 3-4-5 (opuesto 3, ady. 4)"],
          filas: [
            ["sen θ", "opuesto / hipotenusa", "sen θ = 3/5 = 0.6"],
            ["cos θ", "adyacente / hipotenusa", "cos θ = 4/5 = 0.8"],
            ["tan θ", "opuesto / adyacente", "tan θ = 3/4 = 0.75"],
          ],
        },
        {
          tipo: "par",
          ancho: 5,
          revelar: true,
          etiqueta: "la tangente también es seno entre coseno",
          asi_es: "tan θ = sen θ / cos θ = (3/5)/(4/5) = 3/4",
          asi_no: "Confundir seno con coseno: sen usa el OPUESTO, cos usa el ADYACENTE",
        },
        {
          tipo: "trampa",
          ancho: 5,
          revelar: true,
          letra: "B",
          titulo: "El seno y el coseno de un ángulo agudo siempre están entre 0 y 1 (un cateto es menor que la hipotenusa)",
          asi_es: "sen θ = 0.6 y cos θ = 0.8 son válidos (< 1)",
          asi_no: "Obtener sen θ = 1.25 → imposible: el opuesto no puede superar a la hipotenusa",
        },
      ],
    },
    {
      id: 4,
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Reactivo 1 — Razones",
          enunciado: "En un triángulo rectángulo, el cateto opuesto a θ mide 5 y la hipotenusa 13. ¿Cuál es cos θ? (cateto adyacente = 12)",
          opciones: ["5/13", "12/13", "5/12"],
          correcta: 1,
          explicacion: "El adyacente se obtiene por Pitágoras: √(13² − 5²) = √(169 − 25) = √144 = 12. Entonces cos θ = adyacente/hipotenusa = 12/13. (5/13 sería el seno y 5/12 la tangente.)",
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
          etiqueta: "Reactivo 2 — Tangente",
          enunciado: "Si en un triángulo rectángulo el cateto opuesto a θ mide 7 y el adyacente 24, ¿cuál es tan θ?",
          opciones: ["24/7", "7/25", "7/24"],
          correcta: 2,
          explicacion: "tan θ = opuesto/adyacente = 7/24. La opción 24/7 invierte la razón y 7/25 usaría la hipotenusa (que es 25), lo cual corresponde al seno, no a la tangente.",
        },
      ],
    },
    {
      id: 6,
      tipo: "lienzo",
      etiqueta: "Bloque 3 · Ángulos notables",
      titulo: "Valores de 30°, 45° y 60°",
      bloques: [
        {
          tipo: "destacado",
          texto: "Algunos ángulos aparecen tan seguido que conviene memorizar sus razones: 30°, 45° y 60°. Una forma de recordarlos: los senos de 30°, 45° y 60° son √1/2, √2/2 y √3/2 (es decir 1/2, √2/2, √3/2), y los cosenos van en orden inverso. La tangente es el cociente seno/coseno. Estos valores permiten resolver problemas sin calculadora.",
        },
        {
          tipo: "tabla",
          ancho: 7,
          alto: 2,
          titulo: "Razones de ángulos notables",
          columnas: ["Ángulo", "sen / cos", "tan"],
          filas: [
            ["30°", "sen = 1/2 ;  cos = √3/2", "tan 30° = √3/3 ≈ 0.577"],
            ["45°", "sen = √2/2 ; cos = √2/2", "tan 45° = 1"],
            ["60°", "sen = √3/2 ; cos = 1/2", "tan 60° = √3 ≈ 1.732"],
          ],
        },
        {
          tipo: "par",
          ancho: 5,
          revelar: true,
          etiqueta: "seno y coseno se intercambian entre 30° y 60° (ángulos complementarios)",
          asi_es: "sen 30° = cos 60° = 1/2 ;  cos 30° = sen 60° = √3/2",
          asi_no: "Suponer sen 60° = 1/2 → es √3/2; el 1/2 corresponde a sen 30°",
        },
        {
          tipo: "trampa",
          ancho: 5,
          revelar: true,
          letra: "C",
          titulo: "En 45° el seno y el coseno son iguales (√2/2) y la tangente vale exactamente 1",
          asi_es: "tan 45° = sen45°/cos45° = (√2/2)/(√2/2) = 1",
          asi_no: "Decir tan 45° = √2/2 → confunde la tangente con el seno",
        },
      ],
    },
    {
      id: 7,
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Reactivo 1 — Valores notables",
          enunciado: "¿Cuál es el valor de cos 60°?",
          opciones: ["1/2", "√3/2", "√2/2"],
          correcta: 0,
          explicacion: "cos 60° = 1/2. Conviene recordar que cos 60° = sen 30° = 1/2 (ángulos complementarios). El valor √3/2 corresponde a cos 30° y √2/2 a cos 45°.",
        },
      ],
    },
    {
      id: 8,
      tipo: "lienzo",
      etiqueta: "Bloque 4 · Relaciones",
      titulo: "Relaciones e identidades básicas",
      bloques: [
        {
          tipo: "destacado",
          texto: "Las razones trigonométricas se vinculan entre sí mediante identidades, válidas para cualquier ángulo. La fundamental es la identidad pitagórica: sen²θ + cos²θ = 1 (consecuencia directa del teorema de Pitágoras). Otra relación clave es la de cociente: tan θ = sen θ / cos θ. Existen además las razones recíprocas: cosecante (1/sen), secante (1/cos) y cotangente (1/tan). Con estas relaciones se obtiene una razón a partir de otra.",
        },
        {
          tipo: "tabla",
          ancho: 7,
          alto: 2,
          titulo: "Identidades y recíprocas",
          columnas: ["Relación", "Fórmula", "Uso"],
          filas: [
            ["Pitagórica", "sen²θ + cos²θ = 1", "Hallar cos si conoces sen"],
            ["Cociente", "tan θ = sen θ / cos θ", "Relaciona las tres principales"],
            ["Cosecante", "csc θ = 1 / sen θ", "Recíproca del seno"],
            ["Secante / cotangente", "sec θ = 1/cos θ ; cot θ = 1/tan θ", "Recíprocas de coseno y tangente"],
          ],
        },
        {
          tipo: "par",
          ancho: 5,
          revelar: true,
          etiqueta: "de la identidad pitagórica se despeja una razón",
          asi_es: "Si sen θ = 0.6 → cos²θ = 1 − 0.36 = 0.64 → cos θ = 0.8",
          asi_no: "Escribir sen²θ como (sen θ)·2 → sen²θ significa (sen θ)², al cuadrado",
        },
        {
          tipo: "trampa",
          ancho: 5,
          revelar: true,
          letra: "A",
          titulo: "sen²θ significa (sen θ)², no el seno de θ²: primero se calcula el seno y luego se eleva al cuadrado",
          asi_es: "sen²30° = (1/2)² = 1/4",
          asi_no: "Interpretar sen²30° como sen(900°) → notación mal leída",
        },
      ],
    },
    {
      id: 9,
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Reactivo 1 — Identidad pitagórica",
          enunciado: "Si sen θ = 8/17 y θ es agudo, ¿cuánto vale cos θ?",
          opciones: ["15/17", "9/17", "8/15"],
          correcta: 0,
          explicacion: "Por la identidad: cos²θ = 1 − sen²θ = 1 − (8/17)² = 1 − 64/289 = 225/289. Entonces cos θ = √(225/289) = 15/17. (Es el triángulo 8-15-17.)",
        },
      ],
    },
    {
      id: 10,
      tipo: "lienzo",
      etiqueta: "Bloque 5 · Aplicación",
      titulo: "Resolver triángulos y ángulos de elevación",
      bloques: [
        {
          tipo: "destacado",
          texto: "Una aplicación típica es calcular alturas o distancias usando una razón trigonométrica. El ángulo de elevación es el que forma la línea de visión hacia un objeto alto con la horizontal. Para resolver: se identifica el ángulo, se decide qué lados intervienen (opuesto, adyacente o hipotenusa) y se elige la razón que los relaciona. Luego se despeja la incógnita.",
        },
        {
          tipo: "tabla",
          ancho: 7,
          alto: 2,
          titulo: "Elegir la razón correcta",
          columnas: ["Datos que tienes", "Incógnita", "Razón a usar"],
          filas: [
            ["Ángulo + adyacente", "Lado opuesto (altura)", "tan θ = opuesto/adyacente"],
            ["Ángulo + hipotenusa", "Lado opuesto", "sen θ = opuesto/hipotenusa"],
            ["Ángulo + hipotenusa", "Lado adyacente", "cos θ = adyacente/hipotenusa"],
          ],
        },
        {
          tipo: "par",
          ancho: 5,
          revelar: true,
          etiqueta: "altura con ángulo de elevación y distancia horizontal",
          asi_es: "A 30 m, ángulo 45°: altura = 30·tan 45° = 30·1 = 30 m",
          asi_no: "Usar sen en lugar de tan cuando el dato es el cateto adyacente, no la hipotenusa",
        },
        {
          tipo: "trampa",
          ancho: 5,
          revelar: true,
          letra: "B",
          titulo: "Elige la razón según los lados disponibles: con cateto adyacente y opuesto se usa la tangente, no el seno",
          asi_es: "Tienes adyacente y buscas opuesto → tan θ",
          asi_no: "Aplicar sen θ cuando no conoces la hipotenusa → no podrás despejar",
        },
      ],
    },
    {
      id: 11,
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Reactivo 1 — Aplicación",
          enunciado: "Desde 40 m de la base de un edificio, el ángulo de elevación a la punta es 60°. ¿Cuál es la altura? (tan 60° = √3 ≈ 1.73)",
          opciones: ["≈ 69 m", "≈ 23 m", "≈ 40 m"],
          correcta: 0,
          explicacion: "El dato es el cateto adyacente (40 m) y se busca el opuesto (altura): tan 60° = altura/40 → altura = 40·tan 60° = 40·1.73 ≈ 69 m.",
        },
      ],
    },
    {
      id: 12,
      tipo: "lienzo",
      etiqueta: "Lo esencial de la trigonometría",
      titulo: "Resumen",
      bloques: [
        {
          tipo: "lista",
          items: [
            {
              math: "a^2 + b^2 = c^2",
              texto: "teorema de Pitágoras en el triángulo rectángulo",
            },
            {
              titulo: "SOH-CAH-TOA",
              texto: "sen = op/hip ; cos = ady/hip ; tan = op/ady",
            },
            {
              titulo: "Notables",
              texto: "sen 30° = 1/2 ; sen 45° = √2/2 ; sen 60° = √3/2 ; tan 45° = 1",
            },
            {
              math: "\\operatorname{sen}^2\\theta + \\cos^2\\theta = 1",
              texto: "identidad pitagórica",
            },
            {
              math: "\\tan\\theta = \\dfrac{\\operatorname{sen}\\theta}{\\cos\\theta}",
              texto: "relación de cociente",
            },
            {
              titulo: "Aplicación",
              texto: "elige la razón según los lados conocidos y despeja",
            },
          ],
        },
      ],
    },
  ],
};
