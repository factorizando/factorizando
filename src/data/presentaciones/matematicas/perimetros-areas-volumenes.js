// Presentación: Perímetros, áreas y volúmenes (figuras planas y cuerpos geométricos)
// Pensamiento Matemático · Geometría · EXANI-I

export const PRESENTACION = {
  id: "perimetros-areas-volumenes",
  titulo: "Perímetros, Áreas y Volúmenes",
  materia: "Pensamiento Matemático",
  subtema: "Geometría",
  slides: [

    // ── Portada ────────────────────────────────────────────────────────────────
    {
      id: 0,
      tipo: "portada",
      titulo: "Perímetros, Áreas y Volúmenes",
      subtitulo: "Medir el contorno, la superficie y el espacio: de las figuras planas a los cuerpos geométricos",
      etiqueta: "Pensamiento Matemático · EXANI-I"
    },

    // ── Perímetro y área de figuras planas ─────────────────────────────────────
    {
      id: 1,
      tipo: "regla_rica",
      etiqueta: "Concepto 1 · Figuras planas",
      titulo: "Perímetro y área de figuras planas",
      bloques: [
        {
          tipo: "texto",
          texto: "El perímetro es la suma de los lados: mide el contorno y se da en unidades de longitud (m, cm). El área mide la superficie encerrada y se da en unidades cuadradas (m², cm²). Cada figura tiene su fórmula de área, pero todas las áreas de polígonos se reducen a «base por altura» (entera para el rectángulo, la mitad para el triángulo). Reconocer la figura y su altura correcta es el primer paso."
        },
        {
          tipo: "diagrama",
          id: "geo-figuras-planas",
          titulo: "Rectángulo, triángulo y círculo"
        },
        {
          tipo: "tabla",
          titulo: "Fórmulas de área de las figuras básicas",
          columnas: ["Figura", "Área", "Perímetro"],
          filas: [
            { tiempo: "Cuadrado",    correcto: "A = l²",            error: "P = 4·l" },
            { tiempo: "Rectángulo",  correcto: "A = b·h",           error: "P = 2(b + h)" },
            { tiempo: "Triángulo",   correcto: "A = (b·h)/2",       error: "P = a + b + c" },
            { tiempo: "Trapecio",    correcto: "A = (B + b)·h / 2", error: "P = suma de los 4 lados" },
            { tiempo: "Círculo",     correcto: "A = π·r²",          error: "P = 2π·r (circunferencia)" }
          ]
        },
        {
          tipo: "par",
          etiqueta: "la altura del triángulo es perpendicular a la base, no un lado inclinado",
          correcto: "Triángulo de base 10 y altura 6: A = (10·6)/2 = 30 u²",
          incorrecto: "Usar un lado inclinado como «altura» → la altura siempre forma 90° con la base"
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "Perímetro y área no son lo mismo: el perímetro se mide en unidades lineales y el área en unidades cuadradas",
          correcto: "Cuadrado de lado 5: P = 20 cm, A = 25 cm²",
          incorrecto: "Reportar el área en cm o el perímetro en cm² → confunde longitud con superficie"
        }
      ]
    },
    {
      id: 2,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Área de rectángulo",
      pregunta: "Un terreno rectangular mide 18 m de largo y 12 m de ancho. ¿Cuál es su área?",
      opciones: ["60 m²", "216 m²", "108 m²"],
      correcta: 1,
      explicacion: "Área del rectángulo = base × altura = 18 × 12 = 216 m². (60 m sería el perímetro a medias: el perímetro real es 2·(18+12) = 60 m, pero eso es contorno, no superficie.)",
      pasos: []
    },
    {
      id: 3,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Área compuesta",
      pregunta: "Un terreno cuadrado de 20 m de lado tiene en una esquina un jardín triangular de base 20 m y altura 6 m. ¿Qué área del terreno NO ocupa el jardín?",
      opciones: ["340 m²", "400 m²", "60 m²"],
      correcta: 0,
      explicacion: "Área del cuadrado = 20² = 400 m². Área del triángulo = (20·6)/2 = 60 m². El resto: 400 − 60 = 340 m². En áreas compuestas se suma o resta según la figura se agregue o se quite.",
      pasos: []
    },

    // ── Cuerpos geométricos y volumen ──────────────────────────────────────────
    {
      id: 4,
      tipo: "regla_rica",
      etiqueta: "Concepto 2 · Volumen",
      titulo: "Cuerpos geométricos y volumen",
      bloques: [
        {
          tipo: "texto",
          texto: "El volumen mide el espacio que ocupa un cuerpo y se da en unidades cúbicas (m³, cm³). Para los prismas y el cilindro, el volumen es «área de la base por la altura». Para la pirámide y el cono, es un tercio de ese producto. La esfera tiene su propia fórmula. Un litro equivale a un decímetro cúbico: 1 L = 1 dm³ = 1000 cm³."
        },
        {
          tipo: "diagrama",
          id: "geo-cuerpos-volumen",
          titulo: "Cubo, cilindro y esfera"
        },
        {
          tipo: "tabla",
          titulo: "Volumen de los cuerpos más frecuentes",
          columnas: ["Cuerpo", "Volumen", "Nota"],
          filas: [
            { tiempo: "Cubo",                 correcto: "V = a³",           error: "a = arista" },
            { tiempo: "Prisma rectangular",   correcto: "V = largo·ancho·alto", error: "caja / ortoedro" },
            { tiempo: "Cilindro",             correcto: "V = π·r²·h",       error: "base circular × altura" },
            { tiempo: "Pirámide",             correcto: "V = (A_base·h)/3", error: "un tercio del prisma" },
            { tiempo: "Cono",                 correcto: "V = (π·r²·h)/3",   error: "un tercio del cilindro" },
            { tiempo: "Esfera",               correcto: "V = (4/3)·π·r³",   error: "depende solo del radio" }
          ]
        },
        {
          tipo: "par",
          etiqueta: "el problema inverso: del volumen a la dimensión",
          correcto: "Si un cubo tiene V = 1000 cm³, su arista es ∛1000 = 10 cm",
          incorrecto: "Dividir el volumen entre 3 para «hallar el lado» → la arista de un cubo es la raíz cúbica, no V/3"
        },
        {
          tipo: "trampa",
          letra: "B",
          titulo: "1 m³ NO es 100 cm³: el factor de longitud se eleva al cubo, así que 1 m³ = 1 000 000 cm³",
          correcto: "1 m = 100 cm → 1 m³ = (100 cm)³ = 1 000 000 cm³ = 1000 L",
          incorrecto: "Suponer 1 m³ = 100 cm³ → olvida elevar al cubo el factor de conversión"
        }
      ]
    },
    {
      id: 5,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Volumen de prisma",
      pregunta: "Una caja tiene 8 cm de largo, 5 cm de ancho y 10 cm de alto. ¿Cuál es su volumen?",
      opciones: ["23 cm³", "400 cm³", "200 cm³"],
      correcta: 1,
      explicacion: "Volumen del prisma rectangular = largo × ancho × alto = 8 × 5 × 10 = 400 cm³. (Sumar las dimensiones, 8+5+10 = 23, no da volumen: el volumen multiplica las tres medidas.)",
      pasos: []
    },
    {
      id: 6,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Problema inverso (arista)",
      pregunta: "Una caja cúbica tiene un volumen de 1000 cm³. Se quieren empacar 8 de estas cajas, sin huecos, dentro de una caja cúbica mayor. ¿Cuánto mide la arista de la caja mayor?",
      opciones: ["13.4 cm", "20 cm", "80 cm"],
      correcta: 1,
      explicacion: "Las 8 cajas suman 8 × 1000 = 8000 cm³, que es el volumen de la caja mayor. Su arista es ∛8000 = 20 cm. (Comprobación: cada caja mide ∛1000 = 10 cm de arista; 2 × 2 × 2 = 8 cajas caben en un cubo de 20 cm de lado.)",
      pasos: []
    },

    // ── Área total (superficie) de cuerpos ─────────────────────────────────────
    {
      id: 7,
      tipo: "regla_rica",
      etiqueta: "Concepto 3 · Superficie",
      titulo: "Área total de un cuerpo: sumar todas sus caras",
      bloques: [
        {
          tipo: "texto",
          texto: "El área total (o superficie) de un cuerpo es la suma de las áreas de todas sus caras; se mide en unidades cuadradas, no cúbicas. Sirve, por ejemplo, para saber cuánto material se necesita para forrar o pintar un objeto. Conviene imaginar el cuerpo «desplegado» (su desarrollo plano) y sumar cada cara."
        },
        {
          tipo: "diagrama",
          id: "geo-cubo-desarrollo",
          titulo: "Desarrollo plano del cubo"
        },
        {
          tipo: "tabla",
          titulo: "Área total de cuerpos comunes",
          columnas: ["Cuerpo", "Área total", "Nota"],
          filas: [
            { tiempo: "Cubo",               correcto: "A = 6·a²",            error: "6 caras cuadradas iguales" },
            { tiempo: "Prisma rectangular", correcto: "A = 2(lw + lh + wh)", error: "3 pares de caras" },
            { tiempo: "Cilindro",           correcto: "A = 2πr² + 2πr·h",    error: "2 tapas + cara lateral" },
            { tiempo: "Esfera",             correcto: "A = 4·π·r²",          error: "solo depende del radio" }
          ]
        },
        {
          tipo: "par",
          etiqueta: "superficie se mide en unidades cuadradas",
          correcto: "Cubo de arista 4: A = 6·4² = 6·16 = 96 cm²",
          incorrecto: "Calcular 4³ = 64 «de superficie» → eso es el volumen (cm³), no el área"
        },
        {
          tipo: "trampa",
          letra: "C",
          titulo: "No confundas volumen con superficie: el volumen llena el cuerpo (cm³), la superficie lo recubre (cm²)",
          correcto: "Para pintar una caja usas el ÁREA total; para saber cuánta agua le cabe usas el VOLUMEN",
          incorrecto: "Usar V = a³ cuando piden cuánta pintura se necesita → se necesita el área 6a²"
        }
      ]
    },
    {
      id: 8,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Superficie del cubo",
      pregunta: "¿Cuánto cartón se necesita, como mínimo, para forrar todas las caras de un cubo de 5 cm de arista?",
      opciones: ["25 cm²", "125 cm²", "150 cm²"],
      correcta: 2,
      explicacion: "El área total del cubo = 6·a² = 6·5² = 6·25 = 150 cm². (25 cm² es solo una cara; 125 cm³ sería el volumen, pero piden superficie.)",
      pasos: []
    },

    // ── Cierre ─────────────────────────────────────────────────────────────────
    {
      id: 9,
      tipo: "resumen",
      titulo: "Resumen",
      etiqueta: "Lo esencial de perímetros, áreas y volúmenes",
      puntos: [
        { titulo: "Tres magnitudes", texto: "perímetro (longitud), área (superficie, u²) y volumen (espacio, u³)" },
        { math: "A_{rect} = b\\cdot h \\quad A_{tri} = \\dfrac{b\\cdot h}{2}", texto: "áreas planas se reducen a base por altura" },
        { math: "A_{circ} = \\pi r^2 \\quad P_{circ} = 2\\pi r", texto: "círculo: área y circunferencia" },
        { math: "V_{prisma} = A_{base}\\cdot h \\quad V_{cubo} = a^3", texto: "prismas y cilindro: base por altura" },
        { math: "a = \\sqrt[3]{V}", texto: "problema inverso: la arista de un cubo es la raíz cúbica del volumen" },
        { titulo: "Conversión", texto: "1 m³ = 1 000 000 cm³ = 1000 L; el factor se eleva al cubo" }
      ]
    }

  ]
};
