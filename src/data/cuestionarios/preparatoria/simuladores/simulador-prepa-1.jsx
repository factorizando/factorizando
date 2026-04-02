// src/data/cuestionarios/preparatoria/simuladores/simulador-prepa-1.jsx

// Constantes de color usadas en los diagramas
const C = {
  bg: "#0e0f11",
  surface: "#13151a",
  border: "#252830",
  blue: "#3b9eff",
  gold: "#f59e0b",
  purple: "#a78bfa",
  teal: "#34d399",
  orange: "#f97316",
  crimson: "#f43f5e",
  text: "#e8eaf0",
  muted: "#5a6070",
  dim: "#8a9ab8",
};

export default {
  metadata: {
    id: "simulador-prepa-1",
    titulo: "Simulador Preparatoria 1",
    nivel: "preparatoria",
    materia: "Entrenamiento Simulado",
    tema: "Simulador",
  },
  config: { timePerQuestion: 90 },
  bloques: [
    {
      id: "espanol",
      titulo: "Español",
      from: 0,
      to: 14,
      cantidad: 15,
      color: "#3b9eff",
    },
    {
      id: "raz-verbal",
      titulo: "Razonamiento Verbal",
      from: 15,
      to: 29,
      cantidad: 15,
      color: "#34d399",
    },
    {
      id: "matematicas",
      titulo: "Matemáticas",
      from: 30,
      to: 44,
      cantidad: 15,
      color: "#a78bfa",
    },
    {
      id: "raz-matematico",
      titulo: "Raz. Matemático",
      from: 45,
      to: 54,
      cantidad: 10,
      color: "#fbbf24",
    },
    {
      id: "biologia",
      titulo: "Biología",
      from: 55,
      to: 64,
      cantidad: 10,
      color: "#f97316",
    },
    {
      id: "quimica",
      titulo: "Química",
      from: 65,
      to: 74,
      cantidad: 10,
      color: "#f43f5e",
    },
    {
      id: "fisica",
      titulo: "Física",
      from: 75,
      to: 84,
      cantidad: 10,
      color: "#3b9eff",
    },
    {
      id: "ciencias-sociales",
      titulo: "Ciencias Sociales",
      from: 85,
      to: 101,
      cantidad: 17,
      color: "#34d399",
    },
  ],
  questions: [
    {
      question: "Seleccione la oración CORRECTA.",
      options: [
        "A nadie nos gusta la violencia.",
        "La gente mexicana es muy amable.",
        "Dijeron que nadien debía salir.",
        "Las gentes pasan mucho por aquí.",
      ],
      correctAnswer: 1,
      explanation:
        "'Gente' es un sustantivo colectivo singular; no se debe pluralizar como 'gentes' en este contexto, y 'nadien' es un error ortográfico.",
    },
    {
      question:
        "Seleccione la oración cuya parte en mayúsculas es un adjetivo.",
      options: [
        "EL niño come su paleta lentamente.",
        "ESA guitarra perteneció a Kurt Cobain.",
        "La serie DE TELEVISIÓN me parece interesante.",
        "El entrenador DEL EQUIPO es mi amigo.",
      ],
      correctAnswer: 1,
      explanation:
        "'Esa' funciona como adjetivo demostrativo que modifica al sustantivo 'guitarra'.",
    },
    {
      question:
        "En la oración 'El maestro de mi hermano viajó a la India para aprender más sobre yoga', el núcleo del predicado es:",
      options: ["aprender", "hermano", "yoga", "viajó"],
      correctAnswer: 3,
      explanation:
        "El núcleo del predicado siempre es el verbo principal conjugado de la oración.",
    },
    {
      question:
        "En la oración 'Fue una gran tragedia para la humanidad el incendio del museo brasileño', el sujeto de la oración es:",
      options: [
        "una gran tragedia",
        "para la humanidad",
        "el incendio del museo brasileño",
        "museo brasileño",
      ],
      correctAnswer: 2,
      explanation:
        "¿Qué fue una gran tragedia? El incendio del museo brasileño (sujeto).",
    },
    {
      question:
        "Seleccione la oración cuya parte en mayúsculas es un pronombre posesivo.",
      options: [
        "MI gato es negro.",
        "Ese lapicero es MÍO.",
        "Juan me quiere a MÍ.",
        "Afiné el piano en MI.",
      ],
      correctAnswer: 1,
      explanation:
        "'Mío' sustituye al sustantivo indicando posesión, mientras que 'Mi' es adjetivo.",
    },
    {
      question:
        "Elige la oración en donde la palabra en mayúsculas sea un adverbio.",
      options: [
        "ME miró amorosamente.",
        "Mi madre vivió AQUÍ.",
        "Mi perro está ENTERRADO ahí.",
        "Ella lo besó CON mucha pasión.",
      ],
      correctAnswer: 1,
      explanation: "'Aquí' es un adverbio de lugar.",
    },
    {
      question:
        "En la oración 'Benito Taibo donó varios libros a nuestra biblioteca escolar', el objeto directo es:",
      options: [
        "autor de Corazonadas",
        "donó varios libros",
        "nuestra biblioteca",
        "varios libros",
      ],
      correctAnswer: 3,
      explanation:
        "El objeto directo responde a la pregunta ¿qué donó? -> Varios libros.",
    },
    {
      question:
        "En la oración 'El director de cine Alfonso Cuarón ganó un premio Oscar' la palabra 'Oscar' es un:",
      options: ["adjetivo", "pronombre", "sustantivo", "nexo"],
      correctAnswer: 2,
      explanation: "Es un sustantivo propio que nombra al premio.",
    },
    {
      question:
        "Seleccione la oración CORRECTA respecto al uso del verbo haber.",
      options: [
        "Hubieron muchos heridos en el accidente aéreo.",
        "Habían problemas con el docente de Arte.",
        "Hubo problemas con el registro en línea.",
        "Habían personas desesperadas en la fila.",
      ],
      correctAnswer: 2,
      explanation:
        "El verbo haber como impersonal se usa siempre en singular ('hubo', 'había').",
    },
    {
      question: "Seleccione la oración CORRECTA en participios.",
      options: [
        "Hemos imprimido todos los ejemplares.",
        "Ya he accesado correctamente a mi mail.",
        "El niño ha rompido su juguete.",
        "El técnico ha particionado el disco duro.",
      ],
      correctAnswer: 0,
      explanation:
        "'Imprimido' es un participio válido y aceptado por la RAE, junto con 'impreso'.",
    },
    {
      question:
        "En la oración 'Joaquín compró un bello vestido a su hija' el objeto directo es:",
      options: [
        "Joaquín compró",
        "bello vestido",
        "un bello vestido",
        "a su hija",
      ],
      correctAnswer: 2,
      explanation: "¿Qué compró? Un bello vestido.",
    },
    {
      question:
        "Seleccione la oración en donde el posesivo se use de modo INCORRECTO.",
      options: [
        "Los padres de mi novia son franceses.",
        "Su amigo de Fernanda es ingeniero.",
        "Esa película me recuerda a mi abuelo.",
        "El hijo de mi vecina chocó en la madrugada.",
      ],
      correctAnswer: 1,
      explanation:
        "Es un pleonasmo incorrecto; lo correcto es 'El amigo de Fernanda'.",
    },
    {
      question:
        "Seleccione la oración INCORRECTA sobre sustantivos colectivos.",
      options: [
        "La jauría de lobos fue localizada.",
        "El cardumen se veía desde el barco.",
        "Los cazadores esperaron a la parvada.",
        "Una piara de cerdos escaparon de la granja.",
      ],
      correctAnswer: 3,
      explanation:
        "El verbo debe coincidir con el núcleo singular 'piara': Una piara escapó.",
    },
    {
      question: "Seleccione la oración CORRECTA de preposiciones.",
      options: [
        "El jabón de niños es muy solicitado.",
        "Perdí mis guantes del frío.",
        "Llegó la caja con los perfumes de madres.",
        "El llavero rojo es de mi hermano.",
      ],
      correctAnswer: 3,
      explanation:
        "Expresa posesión correctamente. 'Guantes del frío' es incorrecto (es para el frío).",
    },
    {
      question:
        "En la oración 'La viuda regaló a su amante todas las propiedades', la parte 'a su amante' es:",
      options: ["predicado", "sujeto", "circunstancial", "objeto indirecto"],
      correctAnswer: 3,
      explanation: "Indica a quién va dirigida la acción del verbo.",
    },
    {
      question: "Profesor es a salón de dar clases, como mecánico es a:",
      options: ["Automóvil", "Grasa", "Taller", "Autódromo"],
      correctAnswer: 2,
      explanation: "Relación de profesión a lugar de trabajo.",
    },
    {
      question: "Hombre es a masculino, como mujer es a:",
      options: ["Femenina", "Feminista", "Masculina", "Afeminado"],
      correctAnswer: 0,
      explanation: "Relación de individuo a su género.",
    },
    {
      question: "Vestido es a seda, como pintura es a:",
      options: ["Óleo", "Cuadro", "Picasso", "Brocha"],
      correctAnswer: 0,
      explanation: "Relación de objeto a material con el que está hecho.",
    },
    {
      question: "Ave es a cielo, como pez es a:",
      options: ["Mar", "Aire", "Bosque", "Playa"],
      correctAnswer: 0,
      explanation: "Relación de animal a su medio natural de desplazamiento.",
    },
    {
      question: "Hambre es a comida, como frío es a:",
      options: ["Suéter", "Calor", "Ropa", "Helado"],
      correctAnswer: 0,
      explanation: "Relación de necesidad a lo que la satisface/mitiga.",
    },
    {
      question: "Puerta es a casa, como tapa es a:",
      options: ["Botella", "Tapón", "Ventana", "Etiqueta"],
      correctAnswer: 0,
      explanation: "Relación de elemento de cierre al objeto que cierra.",
    },
    {
      question: "Hablar es a callar, como salir es a:",
      options: ["Entrar", "Llegar", "Salida", "Entrada"],
      correctAnswer: 0,
      explanation: "Relación de antónimos (acciones opuestas).",
    },
    {
      question: "León es a selva, como camello es a:",
      options: ["Bosque", "Desierto", "Costa", "Sabana"],
      correctAnswer: 1,
      explanation: "Relación de animal a su hábitat característico.",
    },
    {
      question: "Trigo es a campo, como árbol es a:",
      options: ["Selva", "Arboleda", "Bosque", "Montaña"],
      correctAnswer: 2,
      explanation:
        "El trigo se cultiva masivamente en el campo; los árboles forman los bosques.",
    },
    {
      question: "Perro es a jauría, como pez es a:",
      options: ["Mar", "Peces", "Cardumen", "Manada"],
      correctAnswer: 2,
      explanation: "Relación de individuo a su sustantivo colectivo.",
    },
    {
      question: "Beneficiar es a perjudicar, como dar es a:",
      options: ["Quitar", "Tener", "Preguntar", "Necesitar"],
      correctAnswer: 0,
      explanation: "Relación de antonimia directa.",
    },
    {
      question: "Pintura es a color, como música es a:",
      options: ["Belleza", "Melodía", "Nota", "Recreación"],
      correctAnswer: 2,
      explanation:
        "El color es el elemento básico compositivo de la pintura; la nota lo es de la música.",
    },
    {
      question: "Frontera es a país, como lindero es a:",
      options: ["Terreno", "Geografía", "Construcción", "Línea"],
      correctAnswer: 0,
      explanation:
        "La frontera delimita a un país; el lindero delimita a un terreno.",
    },
    {
      question: "Alegría es a éxtasis, como brisa es a:",
      options: ["Lluvia", "Arroyo", "Sequía", "Huracán"],
      correctAnswer: 3,
      explanation:
        "Relación de intensidad: el éxtasis es alegría extrema; el huracán es viento (brisa) extremo.",
    },
    {
      question:
        "'Cabellos de los árboles' en sentido metafórico, se refiere a:",
      options: ["Raíces", "Mariposas", "Ramas", "Hojas"],
      correctAnswer: 3,
      explanation:
        "Metáfora literaria común para describir el follaje (las hojas).",
    },
    {
      question: "Realice la siguiente suma: $-\\frac{5}{11} + \\frac{10}{22}$",
      options: ["$\\frac{55}{61}$", "$-\\frac{55}{61}$", "$0$", "$1$"],
      correctAnswer: 2,
      explanation:
        "Simplificando $\\frac{10}{22}$ obtenemos $\\frac{5}{11}$. Entonces $-\\frac{5}{11} + \\frac{5}{11} = 0$.",
    },
    {
      question: "Evalúe: $-3^3$",
      options: ["$-27$", "$6$", "$27$", "$-6$"],
      correctAnswer: 0,
      explanation:
        "Un número negativo elevado a una potencia impar conserva el signo: $-(3 \\times 3 \\times 3) = -27$.",
    },
    {
      question: "Evalúe: $\\frac{10^7}{10^5}$",
      options: ["$1$", "$10$", "$100$", "$1000$"],
      correctAnswer: 2,
      explanation: "Se restan los exponentes: $10^{7-5} = 10^2 = 100$.",
    },
    {
      question: "Simplifique: $(\\frac{1}{2})^2 \\cdot (-2^3)$",
      options: ["$-2$", "$2$", "$32$", "$-32$"],
      correctAnswer: 0,
      explanation: "$(\\frac{1}{4}) \\cdot (-8) = -\\frac{8}{4} = -2$.",
    },
    {
      question: "Simplifique: $\\frac{50^2}{100^2}$",
      options: [
        "$\\frac{500}{100}$",
        "$\\frac{50}{1000}$",
        "$\\frac{2500}{1000}$",
        "$\\frac{1}{4}$",
      ],
      correctAnswer: 3,
      explanation:
        "Por leyes de exponentes: $(\\frac{50}{100})^2 = (\\frac{1}{2})^2 = \\frac{1}{4}$.",
    },
    {
      question: "Simplifique: $\\sqrt{20} + 5\\sqrt{5}$",
      options: ["$\\sqrt{5}$", "$2\\sqrt{5}$", "$5\\sqrt{5}$", "$7\\sqrt{5}$"],
      correctAnswer: 3,
      explanation:
        "$\\sqrt{20} = \\sqrt{4 \\cdot 5} = 2\\sqrt{5}$. Sumando: $2\\sqrt{5} + 5\\sqrt{5} = 7\\sqrt{5}$.",
    },
    {
      question: "Simplifique: $\\sqrt[3]{\\frac{27}{-125}}$",
      options: ["$-3$", "$\\frac{1}{3}$", "$-\\frac{3}{5}$", "$\\frac{3}{5}$"],
      correctAnswer: 2,
      explanation:
        "Raíz cúbica de $27$ es $3$, raíz cúbica de $-125$ es $-5$. Resultado: $-\\frac{3}{5}$.",
    },
    {
      question: "Evalúe: $\\sqrt[3]{4} \\cdot \\sqrt[3]{16}$",
      options: ["$4$", "$16$", "$2$", "$-2$"],
      correctAnswer: 0,
      explanation:
        "Como tienen el mismo índice, se multiplican radicandos: $\\sqrt[3]{64} = 4$.",
    },
    {
      question: "Evalúe: $1^{\\frac{99}{100}}$",
      options: ["$\\frac{99}{100}$", "$0.99$", "$1$", "$0$"],
      correctAnswer: 2,
      explanation:
        "El número 1 elevado a cualquier potencia real es siempre 1.",
    },
    {
      question: "¿A qué es igual la siguiente expresión: $2^{0.2}$?",
      options: ["$2^{\\frac{1}{2}}$", "$\\sqrt{2}$"],
      correctAnswer: -1,
      explanation:
        "$0.2$ en fracción es $\\frac{1}{5}$, lo cual representa la raíz quinta de 2.",
    },
    {
      question: "Simplifique: $\\frac{y^9 \\cdot y^0}{y^6}$",
      options: ["$3y$", "$y^3$", "$\\sqrt{y}$", "$y^2$"],
      correctAnswer: 1,
      explanation: "$y^0 = 1$. Entonces $y^9 / y^6 = y^{9-6} = y^3$.",
    },
    {
      question: "Simplifique: $\\frac{10y^3 z^5}{5y^6 z^3}$",
      options: [
        "$\\frac{1}{2}yz$",
        "$\\frac{5z^2}{y^3}$",
        "$5y^3 z^2$",
        "$\\frac{2z^2}{y^3}$",
      ],
      correctAnswer: 3,
      explanation:
        "Coeficientes: $10/5 = 2$. Variables: $z^{5-3}=z^2$ arriba, y $y^{6-3}=y^3$ abajo.",
    },
    {
      question: "¿Cuál es la suma de $(3x^2 + x + 1)$ con $(2x^2 - 3x - 5)$?",
      options: [
        "$6x^2 - 4x - 5$",
        "$5x^2 - 2x - 4$",
        "$5x^2 - 2x - 5$",
        "$6x^2 + 4x + 6$",
      ],
      correctAnswer: 1,
      explanation:
        "Sumando términos semejantes: $(3+2)x^2 + (1-3)x + (1-5) = 5x^2 - 2x - 4$.",
    },
    {
      question: "Simplifique la siguiente expresión: $3(x - 1) + 4(x + 2)$",
      options: ["$7x + 1$", "$12x - 24$", "$7x + 5$", "$7x^2 - 24$"],
      correctAnswer: 2,
      explanation: "Distribuyendo: $3x - 3 + 4x + 8 = 7x + 5$.",
    },
    {
      question: "Factorice: $a^4 - b^6$",
      options: [
        "$a^2 - b^2$",
        "$(a - b)(a + b)$",
        "$(a^2 - b^3)(a^2 + b^3)$",
        "$a - b$",
      ],
      correctAnswer: 2,
      explanation: "Diferencia de cuadrados, las raíces son $a^2$ y $b^3$.",
    },
    {
      question:
        "Dos trenes idénticos con 31 vagones viajan en direcciones opuestas. Cuando los vagones #19 están frente a frente, ¿qué vagón del segundo tren está frente al #12 del primer tren?",
      options: ["7", "12", "21", "26"],
      correctAnswer: 3,
      explanation:
        "La diferencia de posiciones es $19 - 12 = 7$ vagones. En dirección opuesta, sumamos esos 7 al vagón 19: $19 + 7 = 26$.",
    },
    {
      question:
        "Sobre la recta numérica, el número 1 está marcado. Si a y b son menores que 1 pero positivos, ¿cuál de las letras representa la ubicación de su producto (ab)?",
      options: ["p", "q", "r", "s"],
      correctAnswer: 1,
      explanation:
        "Al multiplicar dos números positivos menores que 1 (como a y b), el resultado siempre será menor que ambos factores originales (se 'hace más pequeño'). Por lo tanto, el producto ab debe ser menor que 'a', ubicándose a su izquierda, pero sin ser negativo. El único punto que cumple esto es 'q'.",
      diagram: (
        <svg
          width="100%"
          height="160"
          viewBox="0 0 600 160"
          style={{
            background: C.surface,
            borderRadius: 8,
            border: `1px solid ${C.border}`,
          }}
        >
          {/* Linea principal */}
          <line
            x1="20"
            y1="80"
            x2="580"
            y2="80"
            stroke={C.text}
            strokeWidth="1.5"
          />

          {/* 0, 1, 2 Ticks y texto */}
          <line
            x1="60"
            y1="75"
            x2="60"
            y2="85"
            stroke={C.text}
            strokeWidth="1.5"
          />
          <text
            x="55"
            y="70"
            fill={C.text}
            fontSize="20"
            fontFamily="serif"
            fontStyle="italic"
          >
            0
          </text>

          <line
            x1="300"
            y1="75"
            x2="300"
            y2="85"
            stroke={C.text}
            strokeWidth="1.5"
          />
          <text
            x="310"
            y="70"
            fill={C.text}
            fontSize="20"
            fontFamily="serif"
            fontStyle="italic"
          >
            1
          </text>

          <line
            x1="540"
            y1="75"
            x2="540"
            y2="85"
            stroke={C.text}
            strokeWidth="1.5"
          />
          <text
            x="540"
            y="70"
            fill={C.text}
            fontSize="20"
            fontFamily="serif"
            fontStyle="italic"
            textAnchor="middle"
          >
            2
          </text>

          {/* a y b */}
          <line
            x1="220"
            y1="75"
            x2="220"
            y2="85"
            stroke={C.text}
            strokeWidth="1.5"
          />
          <text
            x="220"
            y="30"
            fill={C.text}
            fontSize="20"
            fontFamily="serif"
            fontStyle="italic"
            textAnchor="middle"
          >
            a
          </text>
          <line
            x1="220"
            y1="40"
            x2="220"
            y2="65"
            stroke={C.text}
            strokeWidth="1.5"
          />
          <polygon points="220,70 215,60 225,60" fill={C.text} />

          <line
            x1="260"
            y1="75"
            x2="260"
            y2="85"
            stroke={C.text}
            strokeWidth="1.5"
          />
          <text
            x="260"
            y="30"
            fill={C.text}
            fontSize="20"
            fontFamily="serif"
            fontStyle="italic"
            textAnchor="middle"
          >
            b
          </text>
          <line
            x1="260"
            y1="40"
            x2="260"
            y2="65"
            stroke={C.text}
            strokeWidth="1.5"
          />
          <polygon points="260,70 255,60 265,60" fill={C.text} />

          {/* p, q, r, s, t */}
          <text
            x="40"
            y="145"
            fill={C.text}
            fontSize="20"
            fontFamily="serif"
            fontStyle="italic"
            textAnchor="middle"
          >
            p
          </text>
          <line
            x1="40"
            y1="120"
            x2="40"
            y2="95"
            stroke={C.text}
            strokeWidth="1.5"
          />
          <polygon points="40,90 35,100 45,100" fill={C.text} />

          <text
            x="180"
            y="145"
            fill={C.text}
            fontSize="20"
            fontFamily="serif"
            fontStyle="italic"
            textAnchor="middle"
          >
            q
          </text>
          <line
            x1="180"
            y1="120"
            x2="180"
            y2="95"
            stroke={C.text}
            strokeWidth="1.5"
          />
          <polygon points="180,90 175,100 185,100" fill={C.text} />

          <text
            x="240"
            y="145"
            fill={C.text}
            fontSize="20"
            fontFamily="serif"
            fontStyle="italic"
            textAnchor="middle"
          >
            r
          </text>
          <line
            x1="240"
            y1="120"
            x2="240"
            y2="95"
            stroke={C.text}
            strokeWidth="1.5"
          />
          <polygon points="240,90 235,100 245,100" fill={C.text} />

          <text
            x="280"
            y="145"
            fill={C.text}
            fontSize="20"
            fontFamily="serif"
            fontStyle="italic"
            textAnchor="middle"
          >
            s
          </text>
          <line
            x1="280"
            y1="120"
            x2="280"
            y2="95"
            stroke={C.text}
            strokeWidth="1.5"
          />
          <polygon points="280,90 275,100 285,100" fill={C.text} />

          <text
            x="390"
            y="145"
            fill={C.text}
            fontSize="20"
            fontFamily="serif"
            fontStyle="italic"
            textAnchor="middle"
          >
            t
          </text>
          <line
            x1="390"
            y1="120"
            x2="390"
            y2="95"
            stroke={C.text}
            strokeWidth="1.5"
          />
          <polygon points="390,90 385,100 395,100" fill={C.text} />
        </svg>
      ),
    },
    {
      question:
        "En cada cara de un cubo hay un número del 1 al 9 (todos distintos). Si la suma de caras opuestas es siempre la misma, y vemos las caras 4, 5 y 8 juntas, ¿qué número está opuesto al 5?",
      options: ["6", "7", "9", "3"],
      correctAnswer: 2,
      explanation:
        "Para que las tres sumas sean iguales con esos números a la vista, las parejas deben sumar 14. Opuesto a 5 es 9. (Adaptado para opciones estándar).",
    },
    {
      question:
        "Una hormiga camina recto de A a B (separados 5m). Se encuentra dos bloques de 1m de alto en el camino. ¿Qué distancia total recorrerá si tiene que subir y bajar ambos bloques y luego seguir recto?",
      options: ["7 m", "9 m", "5 + 4√2 m", "Falta información"],
      correctAnswer: 1,
      explanation:
        "Sube 1m y baja 1m por cada bloque (4m verticales en total). La distancia horizontal sigue siendo 5m. $5 + 4 = 9$m.",
    },
    {
      question:
        "A Carol le toma 3 horas ir y volver de la escuela si va en autobús y regresa caminando. Le toma 1 hora ir y volver si usa autobús en ambos trayectos. ¿Cuánto le toma si solo camina en ambos trayectos?",
      options: ["3.5 h", "4 h", "4.5 h", "5 h"],
      correctAnswer: 3,
      explanation:
        "Autobús(ida) = 0.5h. Si Bus + Caminar = 3h, entonces Caminar = 2.5h. Caminar ida y vuelta = 5 horas.",
    },
    {
      question:
        "En un grupo de chicas interconectadas, cada una tiene un número específico de amigas. Si Ivonne, Dani y Fany tienen 4 amigas cada una, y Beatriz solo conoce a Ivonne y Dani. ¿Cuántas conexiones tiene Beatriz en total?",
      options: ["2", "3", "4", "5"],
      correctAnswer: 0,
      explanation:
        "El problema establece explícitamente que Beatriz es amiga de Ivonne y Dani y de nadie más.",
    },
    {
      question:
        "Si 9 fichas son negras por un lado y blancas por el otro, 4 muestran negro y 5 blanco. Si debes voltear exactamente 3 en cada turno, ¿cuál es el mínimo de turnos para que todas sean del mismo color?",
      options: ["1", "2", "3", "4"],
      correctAnswer: 1,
      explanation:
        "En un turno volteas 3 blancas a negras (queda 7 negras, 2 blancas). En el siguiente, volteas 2 blancas y 1 negra... Analizando matemáticamente, el mínimo es 2.",
    },
    {
      question:
        "Con fichas en forma de pentágono (todas idénticas) como la que se muestra a la izquierda, se quiere formar la corona que se muestra a la derecha, de manera que al pegar dos pentágonos, los triángulos adyacentes tengan el mismo número y color. Ya se han colocado 4 fichas. ¿Qué número queda en el triángulo marcado con X?",
      options: ["1", "2", "4", "5"],
      correctAnswer: 2,
      explanation:
        "Al analizar la secuencia de los bordes de la ficha base (4, 3, 2, 1, 5 en sentido horario), podemos deducir la orientación de cada ficha en la corona. Las fichas se alternan rotando matemáticamente para encajar. Siguiendo este riguroso patrón de encaje desde las piezas ubicadas abajo hacia arriba, deducimos que la pieza superior está rotada 180° y la 'X' corresponde a la posición del 4 (triángulo negro en la ficha base).",
    },
    {
      question:
        "¿Cuál de las siguientes figuras tiene la mayor área sombreada?",
      options: ["(a)", "(b)", "(c)", "(d)"],
      correctAnswer: 0,
      explanation:
        "Si calculamos el área asignando 1 unidad a cada cuadrito entero: la figura (a) tiene 2 cuadros blancos en total (un cuadro entero y dos mitades), por lo que su área sombreada es 14 (16 - 2). Las demás tienen mayor área blanca y por ende menor área sombreada: (b)=12.5, (c)=12, (d)=13, (e)=12.5. Por lo tanto, la (a) es la mayor.",
      diagram: (() => {
        const wA = [
          { t: "tl", c: 0, r: 0 },
          { t: "full", c: 1, r: 1 },
          { t: "br", c: 3, r: 3 },
        ];
        const wB = [
          { t: "full", c: 3, r: 0 },
          { t: "full", c: 3, r: 1 },
          { t: "full", c: 3, r: 2 },
          { t: "bl", c: 0, r: 3 },
        ];
        const wC = [
          { t: "tl", c: 0, r: 0 },
          { t: "full", c: 2, r: 0 },
          { t: "bl", c: 0, r: 1 },
          { t: "full", c: 2, r: 1 },
          { t: "tl", c: 0, r: 2 },
          { t: "br", c: 2, r: 3 },
        ];
        const wD = [
          { t: "tl", c: 0, r: 0 },
          { t: "full", c: 3, r: 0 },
          { t: "bl", c: 0, r: 3 },
          { t: "full", c: 3, r: 3 },
        ];
        const wE = [
          { t: "tl", c: 0, r: 0 },
          { t: "tl", c: 1, r: 0 },
          { t: "tr", c: 3, r: 1 },
          { t: "br", c: 3, r: 2 },
          { t: "bl", c: 0, r: 3 },
          { t: "bl", c: 1, r: 3 },
          { t: "bl", c: 2, r: 3 },
        ];

        const renderFig = (label, whites) => (
          <div
            key={label}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <svg
              width="64"
              height="64"
              viewBox="0 0 80 80"
              style={{ background: C.teal, borderRadius: 4 }}
            >
              {whites.map((w, i) => {
                if (w.t === "full")
                  return (
                    <rect
                      key={i}
                      x={w.c * 20}
                      y={w.r * 20}
                      width="20"
                      height="20"
                      fill={C.surface}
                    />
                  );
                if (w.t === "tl")
                  return (
                    <polygon
                      key={i}
                      points={`${w.c * 20},${w.r * 20} ${(w.c + 1) * 20},${w.r * 20} ${w.c * 20},${(w.r + 1) * 20}`}
                      fill={C.surface}
                    />
                  );
                if (w.t === "tr")
                  return (
                    <polygon
                      key={i}
                      points={`${w.c * 20},${w.r * 20} ${(w.c + 1) * 20},${w.r * 20} ${(w.c + 1) * 20},${(w.r + 1) * 20}`}
                      fill={C.surface}
                    />
                  );
                if (w.t === "bl")
                  return (
                    <polygon
                      key={i}
                      points={`${w.c * 20},${w.r * 20} ${w.c * 20},${(w.r + 1) * 20} ${(w.c + 1) * 20},${(w.r + 1) * 20}`}
                      fill={C.surface}
                    />
                  );
                if (w.t === "br")
                  return (
                    <polygon
                      key={i}
                      points={`${(w.c + 1) * 20},${w.r * 20} ${(w.c + 1) * 20},${(w.r + 1) * 20} ${w.c * 20},${(w.r + 1) * 20}`}
                      fill={C.surface}
                    />
                  );
                return null;
              })}
              {[1, 2, 3].map((i) => (
                <g key={`g-${i}`}>
                  <line
                    x1={i * 20}
                    y1="0"
                    x2={i * 20}
                    y2="80"
                    stroke={C.bg}
                    strokeWidth="1"
                  />
                  <line
                    x1="0"
                    y1={i * 20}
                    x2="80"
                    y2={i * 20}
                    stroke={C.bg}
                    strokeWidth="1"
                  />
                </g>
              ))}
              <rect
                x="0"
                y="0"
                width="80"
                height="80"
                fill="none"
                stroke={C.bg}
                strokeWidth="2"
              />
            </svg>
            <span
              style={{
                color: C.text,
                fontSize: "13px",
                fontWeight: "bold",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              ({label})
            </span>
          </div>
        );

        return (
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "20px",
              justifyContent: "center",
              padding: "16px 0",
            }}
          >
            {renderFig("a", wA)}
            {renderFig("b", wB)}
            {renderFig("c", wC)}
            {renderFig("d", wD)}
            {renderFig("e", wE)}
          </div>
        );
      })(),
    },
    {
      question:
        "En el esquema, cada letra representa una persona y hay una flecha de una a otra si la segunda persona es más alta que la primera; por ejemplo, la flecha de B a A indica que A es más alta que B. ¿Quién es la persona más alta de las seis?",
      options: ["A", "C", "E", "F"],
      correctAnswer: 0,
      explanation:
        "Si seguimos el flujo de las flechas (que apuntan siempre a alguien más alto), notamos que todas las rutas finalmente desembocan en 'A'. Nadie apunta desde 'A' hacia otra letra, lo que significa que no hay nadie más alto que A.",
      diagram: (() => {
        // Coordenadas base centrales de cada letra para replicar la imagen original
        const nodes = {
          A: { x: 230, y: 40 },
          B: { x: 180, y: 220 },
          C: { x: 300, y: 180 },
          D: { x: 100, y: 150 },
          E: { x: 120, y: 70 },
          F: { x: 320, y: 90 },
        };

        // Pares [origen, destino] de cada flecha
        const edges = [
          ["F", "E"],
          ["F", "A"],
          ["C", "F"],
          ["D", "C"],
          ["D", "A"],
          ["E", "D"],
          ["B", "C"],
          ["B", "A"],
        ];

        // Función que usa trigonometría para despegar la línea del borde de la letra
        const drawLine = (id1, id2) => {
          const n1 = nodes[id1];
          const n2 = nodes[id2];
          const dx = n2.x - n1.x;
          const dy = n2.y - n1.y;
          const angle = Math.atan2(dy, dx);

          const r1 = 18; // Radio para despegar desde el inicio
          const r2 = 22; // Radio para terminar justo antes de la letra destino

          const x1 = n1.x + r1 * Math.cos(angle);
          const y1 = n1.y + r1 * Math.sin(angle);
          const x2 = n2.x - r2 * Math.cos(angle);
          const y2 = n2.y - r2 * Math.sin(angle);

          return (
            <line
              key={`${id1}-${id2}`}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke={C.text}
              strokeWidth="2.5"
              markerEnd="url(#arrowhead)"
            />
          );
        };

        return (
          <svg
            width="100%"
            height="260"
            viewBox="0 0 400 260"
            style={{
              background: C.surface,
              borderRadius: 8,
              border: `1px solid ${C.border}`,
            }}
          >
            <defs>
              <marker
                id="arrowhead"
                markerWidth="8"
                markerHeight="8"
                refX="8"
                refY="4"
                orient="auto-start-reverse"
              >
                <path d="M 0 0 L 8 4 L 0 8 Z" fill={C.text} />
              </marker>
            </defs>

            {/* Renderizado de las flechas (las líneas primero para que queden por debajo de las letras por si acaso) */}
            <g>{edges.map((edge) => drawLine(edge[0], edge[1]))}</g>

            {/* Renderizado de las letras perfectamente centradas en sus coordenadas */}
            <g
              fill={C.blue}
              fontSize="26"
              fontFamily="'Times New Roman', serif"
              fontStyle="italic"
              textAnchor="middle"
              dominantBaseline="central"
            >
              {Object.entries(nodes).map(([id, pos]) => (
                <text key={id} x={pos.x} y={pos.y}>
                  {id}
                </text>
              ))}
            </g>
          </svg>
        );
      })(),
    },
    {
      question: "¿Qué tipo de célula es una bacteria?",
      options: ["Eucariota", "Animal", "Pluricelular", "Procariota"],
      correctAnswer: 3,
      explanation:
        "Las bacterias no tienen núcleo definido, característica principal de las células procariotas.",
    },
    {
      question: "¿Cuál es la función principal del ribosoma?",
      options: [
        "La producción de proteínas",
        "Dirigir el tráfico de micromoléculas",
        "Almacenar enzimas",
        "Organizar los microtúbulos",
      ],
      correctAnswer: 0,
      explanation:
        "Los ribosomas son los encargados de la síntesis de proteínas (traducción).",
    },
    {
      question: "¿Qué es el ácido desoxirribonucleico (ADN)?",
      options: [
        "Es un ácido que ayuda a la digestión",
        "Es el código genético de los virus ARN",
        "Es el ácido nucleico que contiene la información hereditaria",
        "Un organelo celular",
      ],
      correctAnswer: 2,
      explanation:
        "El ADN almacena la información genética necesaria para el desarrollo y funcionamiento de los seres vivos.",
    },
    {
      question:
        "La división celular que mantiene el número de cromosomas diploides en las células hijas se denomina:",
      options: ["Mitosis", "Meiosis", "Amitosis", "Cariocinesis"],
      correctAnswer: 0,
      explanation:
        "En la mitosis, de una célula madre surgen dos células hijas idénticas con el mismo número de cromosomas.",
    },
    {
      question:
        "Las neuronas son células que en los adultos no se dividen, por lo que se dice que se encuentran en el periodo:",
      options: ["G1", "S", "G2", "G0"],
      correctAnswer: 3,
      explanation:
        "La fase G0 es una fase de reposo o quiescencia donde la célula cumple su función pero no se prepara para dividirse.",
    },
    {
      question:
        "El huso acromático se forma durante la división celular mediante la acción directa de:",
      options: [
        "Los cromosomas",
        "Los genes",
        "Los centriolos",
        "Las mitocondrias",
      ],
      correctAnswer: 2,
      explanation:
        "Los centriolos organizan los microtúbulos que formarán el huso acromático en células animales.",
    },
    {
      question:
        "Es aquel organelo celular encargado de producir la mayor parte de la energía (ATP):",
      options: [
        "Aparato de Golgi",
        "Retículo Endoplasmático",
        "Mitocondria",
        "Núcleo",
      ],
      correctAnswer: 2,
      explanation:
        "Las mitocondrias son consideradas las 'centrales energéticas' de la célula eucariota.",
    },
    {
      question: "Son características de la meiosis, EXCEPTO:",
      options: [
        "El número de cromosomas se reduce",
        "Da lugar a 4 células",
        "Se presenta sólo en células somáticas",
        "La meiosis I es reduccional",
      ],
      correctAnswer: 2,
      explanation:
        "La meiosis ocurre EXCLUSIVAMENTE en las células germinales para producir gametos (espermatozoides y óvulos).",
    },
    {
      question: "¿Cuáles son los dos tipos principales de respiración celular?",
      options: [
        "Aerobia y Anaerobia",
        "Aerobia y Glucólisis",
        "Glucólisis y Ciclo de Krebs",
        "Anaerobia y Mitótica",
      ],
      correctAnswer: 0,
      explanation:
        "Se dividen según utilicen oxígeno (aerobia) o no lo requieran (anaerobia).",
    },
    {
      question:
        "¿Qué proceso general se realiza durante la respiración celular?",
      options: [
        "Pérdida de ATP",
        "Liberación de energía",
        "Condensación metabólica",
        "Fotosíntesis",
      ],
      correctAnswer: 1,
      explanation:
        "Su propósito principal es degradar glucosa para liberar la energía química almacenada en forma de ATP.",
    },
    {
      question:
        "Son combinaciones binarias de un elemento no metal con el oxígeno:",
      options: [
        "Óxidos metálicos",
        "Óxidos no metálicos",
        "Peróxidos",
        "Hidruros",
      ],
      correctAnswer: 1,
      explanation:
        "También conocidos como anhídridos, se forman de un no metal + oxígeno.",
    },
    {
      question: "Nombra correctamente el siguiente compuesto: N2O",
      options: [
        "Óxido de nitrógeno",
        "Óxido de dinitrógeno",
        "Dióxido de nitrógeno",
        "Nitrato de oxígeno",
      ],
      correctAnswer: 1,
      explanation:
        "Por la nomenclatura sistemática (prefijos): 1 Oxígeno (monóxido/óxido) y 2 Nitrógenos (dinitrógeno).",
    },
    {
      question: "Nombra correctamente el siguiente compuesto: As2O5",
      options: [
        "Pentaóxido de arsénico",
        "Pentaóxido de diarsénico",
        "Óxido de diarsénico",
        "Ácido arsénico",
      ],
      correctAnswer: 1,
      explanation: "5 oxígenos (pentaóxido) y 2 arsénicos (diarsénico).",
    },
    {
      question:
        "Las cargas eléctricas del electrón, protón y neutrón son respectivamente:",
      options: ["+, -, +/-", "-, +, neutro", "+, +, -", "-, -, +"],
      correctAnswer: 1,
      explanation:
        "Electrón es negativo, Protón es positivo y Neutrón no tiene carga neta (cero).",
    },
    {
      question:
        "Cuando el número cuántico 'l' (azimutal) es igual a 2, significa que el electrón diferencial se encuentra en el subnivel:",
      options: ["s", "p", "d", "f"],
      correctAnswer: 2,
      explanation: "Los valores de l son: s=0, p=1, d=2, f=3.",
    },
    {
      question:
        "El número máximo de electrones que se pueden alojar en el nivel principal n=2 es:",
      options: ["18", "32", "8", "14"],
      correctAnswer: 2,
      explanation: "Fórmula $2n^2$. Si n=2, $2(2^2) = 2(4) = 8$.",
    },
    {
      question:
        "¿Qué número cuántico adquiere exclusivamente los valores de +1/2 y -1/2?",
      options: [
        "Número cuántico principal (n)",
        "Número cuántico de spin (s)",
        "Número cuántico orbital (m)",
        "Número cuántico azimutal (l)",
      ],
      correctAnswer: 1,
      explanation:
        "El spin indica el sentido de giro del electrón sobre su propio eje.",
    },
    {
      question:
        "De los siguientes grupos, ¿cuáles elementos son los más electronegativos?",
      options: ["K, Sr, Bi", "Ca, Mg, Be", "Fr, Cs, Ba", "F, O, Cl"],
      correctAnswer: 3,
      explanation:
        "La electronegatividad aumenta hacia arriba y a la derecha en la tabla. Flúor, Oxígeno y Cloro están en esa zona.",
    },
    {
      question:
        "Los elementos de la familia o grupo IA (Metales Alcalinos) se caracterizan por tener en su último nivel:",
      options: ["7 electrones", "1 electrón", "2 electrones", "8 electrones"],
      correctAnswer: 1,
      explanation:
        "El grupo indica los electrones de valencia. El grupo 1A tiene 1 electrón.",
    },
    {
      question:
        "El número de electrones de valencia es igual para todos los elementos ubicados en la misma:",
      options: [
        "Columna (Grupo) de la tabla periódica",
        "Fila (Periodo) de la tabla periódica",
        "Masa atómica",
        "Estructura cristalina",
      ],
      correctAnswer: 0,
      explanation:
        "Los elementos de un mismo grupo comparten propiedades químicas debido a sus mismos electrones de valencia.",
    },
    {
      question: "De la Primera Ley de Newton (Inercia) se deduce que:",
      options: [
        "Un objeto en movimiento se detiene siempre",
        "Si la aceleración es mayor que cero, no cambia la velocidad",
        "Un objeto se mantiene en su estado de reposo o movimiento rectilíneo uniforme si la fuerza neta es cero",
        "Para toda fuerza existe una reacción",
      ],
      correctAnswer: 2,
      explanation:
        "La inercia dicta que sin una fuerza externa neta, la velocidad no cambia.",
    },
    {
      question:
        "De la Tercera Ley de Newton (Acción y Reacción) se deduce que:",
      options: [
        "La gravedad atrae todo al centro",
        "Para toda fuerza de acción existe otra de igual magnitud pero en sentido contrario",
        "Si aceleras un cuerpo, ganas inercia",
        "La masa es proporcional a la fuerza",
      ],
      correctAnswer: 1,
      explanation: "Es el principio clásico de interacción entre dos cuerpos.",
    },
    {
      question:
        "Un coche se mueve a una velocidad constante de 15 m/s. ¿Cuántos metros recorrerá en 30 segundos?",
      options: ["45 m", "0.45 km", "450 m", "500 m"],
      correctAnswer: 2,
      explanation: "Distancia = Velocidad × Tiempo. d = 15 m/s × 30 s = 450 m.",
    },
    {
      question:
        "Un objeto se mueve con una velocidad de 1 m/s. ¿Cuántos kilómetros recorrerá en exactamente una hora?",
      options: ["6 km", "36 km", "3 km", "3.6 km"],
      correctAnswer: 3,
      explanation:
        "En 1 hora hay 3600 segundos. Recorrerá 3600 metros, que equivalen a 3.6 kilómetros.",
    },
    {
      question:
        "¿Cuál es la velocidad media de un coche que recorre 120 km en 2 horas?",
      options: ["120 km/h", "240 km/h", "100 km/h", "60 km/h"],
      correctAnswer: 3,
      explanation: "v = d / t = 120 km / 2 h = 60 km/h.",
    },
    {
      question: "Convertir 2.5 kilómetros a metros:",
      options: ["250 m", "2,500 m", "25.00 m", "25,000 m"],
      correctAnswer: 1,
      explanation: "1 km = 1000 m. Por tanto, 2.5 × 1000 = 2500 metros.",
    },
    {
      question: "Convertir 2 horas y 30 minutos a segundos:",
      options: ["9,000 s", "7,200 s", "8,000 s", "150 s"],
      correctAnswer: 0,
      explanation:
        "2 horas = 7200 s. 30 minutos = 1800 s. 7200 + 1800 = 9000 segundos.",
    },
    {
      question: "Convertir 780 gramos a kilogramos:",
      options: ["7.8 kg", "78 kg", "0.78 kg (780 milésimos)", "1000/78 kg"],
      correctAnswer: 2,
      explanation:
        "Para pasar de gramos a kilos se divide entre 1000. 780 / 1000 = 0.78 kg.",
    },
    {
      question: "Convertir 3.25 metros a centímetros:",
      options: ["32.5 cm", "325 cm", "3.25 cm", "300 cm"],
      correctAnswer: 1,
      explanation:
        "1 metro = 100 cm. Multiplicamos 3.25 × 100 = 325 centímetros.",
    },
    {
      question:
        "Convertir 25° Celsius a grados Fahrenheit usando F = (C × 1.8) + 32",
      options: ["77 °F", "76 °F", "75 °F", "74 °F"],
      correctAnswer: 0,
      explanation: "25 × 1.8 = 45. Sumando 32 obtenemos 77 °F.",
    },
    {
      question:
        "De acuerdo a la geografía del viejo mundo, ¿qué país ocupa la costa atlántica occidental de la Península Ibérica?",
      options: ["Francia", "Italia", "Portugal", "España"],
      correctAnswer: 2,
      explanation:
        "Portugal comparte la Península Ibérica con España y mira hacia el Océano Atlántico.",
    },
    {
      question:
        "¿Qué país europeo tiene una frontera natural conformada por los montes Pirineos y ocupa la mayor parte de la Península Ibérica?",
      options: ["Portugal", "Francia", "Italia", "España"],
      correctAnswer: 3,
      explanation:
        "España colinda al norte con Francia a través de los Pirineos.",
    },
    {
      question:
        "¿Qué país de Europa occidental tiene costas tanto en el Océano Atlántico como en el Mar Mediterráneo y es famoso por su capital, París?",
      options: ["Francia", "Italia", "Portugal", "Reino Unido"],
      correctAnswer: 0,
      explanation:
        "Francia está ubicada estratégicamente en el centro-occidente europeo.",
    },
    {
      question:
        "¿Qué poderosa nación de Europa Central colinda con Francia, Polonia y Austria, y tiene como capital a Berlín?",
      options: ["Turquía", "Alemania", "Italia", "Suiza"],
      correctAnswer: 1,
      explanation:
        "Alemania es el corazón económico e industrial de Europa Central.",
    },
    {
      question:
        "¿Qué pequeño país de Europa Occidental alberga las sedes de importantes institutions de la Unión Europea en su capital, Bruselas?",
      options: ["Bélgica", "Países Bajos", "Dinamarca", "Suiza"],
      correctAnswer: 0,
      explanation:
        "Bélgica se ubica entre Francia, Alemania y los Países Bajos.",
    },
    {
      question:
        "¿Qué país europeo es famoso por sus sistemas de diques, canales y tulipanes, teniendo a Ámsterdam como su capital?",
      options: ["Países Bajos", "Bélgica", "Dinamarca", "Finlandia"],
      correctAnswer: 0,
      explanation:
        "Los Países Bajos (Holanda) han ganado terreno al mar históricamente.",
    },
    {
      question:
        "¿Qué país nórdico está formado principalmente por la península de Jutlandia y limita al sur con Alemania?",
      options: ["Suecia", "Noruega", "Dinamarca", "Finlandia"],
      correctAnswer: 2,
      explanation: "Dinamarca es el país escandinavo más meridional.",
    },
    {
      question: "La Revolución Industrial se define conceptualmente como:",
      options: [
        "Una edad antes de la edad antigua",
        "La transición de una economía esclavista al feudalismo",
        "La etapa de transición de una economía agraria y manual a una economía industrializada y mecánica",
        "Una revuelta militar del siglo XX",
      ],
      correctAnswer: 2,
      explanation:
        "Cambió radicalmente el modo de producción global hacia la fábrica mecanizada.",
    },
    {
      question:
        "¿Entre qué siglos tuvo lugar principalmente la primera Revolución Industrial?",
      options: [
        "Entre el siglo XIII a.c y XIX a.c",
        "Entre finales del siglo XVIII y principios del XIX",
        "Exclusivamente en el siglo XX",
        "En el Imperio Romano",
      ],
      correctAnswer: 1,
      explanation:
        "Inició en Gran Bretaña alrededor de 1760 y se consolidó en las décadas posteriores.",
    },
    {
      question:
        "Fueron los principales avances tecnológicos (máquinas) que detonaron la Revolución Industrial:",
      options: [
        "El telégrafo, la televisión a color y el iPad",
        "La máquina de vapor, la hiladora mecánica y el telar mecánico",
        "La carreta, la yunta y el buey",
        "El motor de combustión interna y la aviación",
      ],
      correctAnswer: 1,
      explanation:
        "La energía del vapor y la mecanización textil fueron los pilares iniciales.",
    },
    {
      question:
        "¿A qué fenómeno demográfico y socioeconómico contribuyó directamente la Revolución Industrial?",
      options: [
        "La reducción de la población mundial",
        "La migración masiva de trabajadores de las zonas rurales a las ciudades",
        "El regreso del sistema feudal",
        "La desaparición de los bancos",
      ],
      correctAnswer: 1,
      explanation:
        "La creación de fábricas en urbes concentró la oferta laboral, creando el proletariado urbano.",
    },
    {
      question:
        "A largo plazo, la Revolución Industrial sentó las bases para el surgimiento de:",
      options: [
        "La cacería nómada",
        "La economía globalizada e industrializada moderna",
        "Las guerras púnicas",
        "La astrología",
      ],
      correctAnswer: 1,
      explanation:
        "Configuró el modelo de consumo, producción en masa y comercio internacional que prevalece hoy.",
    },
    {
      question:
        "¿Qué nación euroasiática, conocida por la forma de bota de su territorio, se ubica en el mar Mediterráneo?",
      options: ["España", "Francia", "Grecia", "Italia"],
      correctAnswer: 3,
      explanation:
        "Italia es fácilmente reconocible geográficamente por su forma de bota itálica.",
    },
    {
      question:
        "País de Europa Oriental, el segundo más grande del continente, que ha estado históricamente conectado con Rusia y cuya capital es Kiev:",
      options: ["Rusia", "Bielorrusia", "Lituania", "Ucrania"],
      correctAnswer: 3,
      explanation: "Ucrania es vital en la geografía de Europa del Este.",
    },
    {
      question:
        "¿Qué país euroasiático sirve de puente histórico entre Europa y Medio Oriente, controlando el estrecho del Bósforo?",
      options: ["Alemania", "Grecia", "Turquía", "Bulgaria"],
      correctAnswer: 2,
      explanation:
        "La ciudad de Estambul en Turquía se asienta en dos continentes: Europa y Asia.",
    },
    {
      question:
        "Observa el siguiente esquema. ¿Qué organelo celular está marcado en color rojo?",
      options: ["Mitocondria", "Núcleo", "Aparato de Golgi", "Ribosoma"],
      correctAnswer: 0,
      explanation:
        "La mitocondria suele representarse con pliegues internos llamados crestas.",
    },
    {
      question:
        "Observa la siguiente gráfica generada con código matemático. ¿Cuál es el punto de intersección (solución del sistema) de las rectas $y = 2x - 2$ (azul) y $y = -x + 4$ (rojo)?",
      options: ["(2, 2)", "(0, 4)", "(1, 0)", "(4, 0)"],
      correctAnswer: 0,
      explanation:
        "El punto donde se cruzan las gráficas equivale a igualar el sistema: $2x - 2 = -x + 4 \\rightarrow 3x = 6 \\rightarrow x=2$.",
    },
  ],
};
