import { useState, useEffect } from "react";

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

const questions = [
  // ── BLOQUE 1: Español (1–15) ───────────────────────────────────────────────
  {
    id: 1,
    q: "Seleccione la oración CORRECTA.",
    opts: [
      "A nadie nos gusta la violencia.",
      "La gente mexicana es muy amable.",
      "Dijeron que nadien debía salir.",
      "Las gentes pasan mucho por aquí.",
    ],
    ans: "La gente mexicana es muy amable.",
    exp: "'Gente' es un sustantivo colectivo singular; no se debe pluralizar como 'gentes' en este contexto, y 'nadien' es un error ortográfico.",
  },
  {
    id: 2,
    q: "Seleccione la oración cuya parte en mayúsculas es un adjetivo.",
    opts: [
      "EL niño come su paleta lentamente.",
      "ESA guitarra perteneció a Kurt Cobain.",
      "La serie DE TELEVISIÓN me parece interesante.",
      "El entrenador DEL EQUIPO es mi amigo.",
    ],
    ans: "ESA guitarra perteneció a Kurt Cobain.",
    exp: "'Esa' funciona como adjetivo demostrativo que modifica al sustantivo 'guitarra'.",
  },
  {
    id: 3,
    q: "En la oración 'El maestro de mi hermano viajó a la India para aprender más sobre yoga', el núcleo del predicado es:",
    opts: ["aprender", "hermano", "yoga", "viajó"],
    ans: "viajó",
    exp: "El núcleo del predicado siempre es el verbo principal conjugado de la oración.",
  },
  {
    id: 4,
    q: "En la oración 'Fue una gran tragedia para la humanidad el incendio del museo brasileño', el sujeto de la oración es:",
    opts: [
      "una gran tragedia",
      "para la humanidad",
      "el incendio del museo brasileño",
      "museo brasileño",
    ],
    ans: "el incendio del museo brasileño",
    exp: "¿Qué fue una gran tragedia? El incendio del museo brasileño (sujeto).",
  },
  {
    id: 5,
    q: "Seleccione la oración cuya parte en mayúsculas es un pronombre posesivo.",
    opts: [
      "MI gato es negro.",
      "Ese lapicero es MÍO.",
      "Juan me quiere a MÍ.",
      "Afiné el piano en MI.",
    ],
    ans: "Ese lapicero es MÍO.",
    exp: "'Mío' sustituye al sustantivo indicando posesión, mientras que 'Mi' es adjetivo.",
  },
  {
    id: 6,
    q: "Elige la oración en donde la palabra en mayúsculas sea un adverbio.",
    opts: [
      "ME miró amorosamente.",
      "Mi madre vivió AQUÍ.",
      "Mi perro está ENTERRADO ahí.",
      "Ella lo besó CON mucha pasión.",
    ],
    ans: "Mi madre vivió AQUÍ.",
    exp: "'Aquí' es un adverbio de lugar.",
  },
  {
    id: 7,
    q: "En la oración 'Benito Taibo donó varios libros a nuestra biblioteca escolar', el objeto directo es:",
    opts: [
      "autor de Corazonadas",
      "donó varios libros",
      "nuestra biblioteca",
      "varios libros",
    ],
    ans: "varios libros",
    exp: "El objeto directo responde a la pregunta ¿qué donó? -> Varios libros.",
  },
  {
    id: 8,
    q: "En la oración 'El director de cine Alfonso Cuarón ganó un premio Oscar' la palabra 'Oscar' es un:",
    opts: ["adjetivo", "pronombre", "sustantivo", "nexo"],
    ans: "sustantivo",
    exp: "Es un sustantivo propio que nombra al premio.",
  },
  {
    id: 9,
    q: "Seleccione la oración CORRECTA respecto al uso del verbo haber.",
    opts: [
      "Hubieron muchos heridos en el accidente aéreo.",
      "Habían problemas con el docente de Arte.",
      "Hubo problemas con el registro en línea.",
      "Habían personas desesperadas en la fila.",
    ],
    ans: "Hubo problemas con el registro en línea.",
    exp: "El verbo haber como impersonal se usa siempre en singular ('hubo', 'había').",
  },
  {
    id: 10,
    q: "Seleccione la oración CORRECTA en participios.",
    opts: [
      "Hemos imprimido todos los ejemplares.",
      "Ya he accesado correctamente a mi mail.",
      "El niño ha rompido su juguete.",
      "El técnico ha particionado el disco duro.",
    ],
    ans: "Hemos imprimido todos los ejemplares.",
    exp: "'Imprimido' es un participio válido y aceptado por la RAE, junto con 'impreso'.",
  },
  {
    id: 11,
    q: "En la oración 'Joaquín compró un bello vestido a su hija' el objeto directo es:",
    opts: ["Joaquín compró", "bello vestido", "un bello vestido", "a su hija"],
    ans: "un bello vestido",
    exp: "¿Qué compró? Un bello vestido.",
  },
  {
    id: 12,
    q: "Seleccione la oración en donde el posesivo se use de modo INCORRECTO.",
    opts: [
      "Los padres de mi novia son franceses.",
      "Su amigo de Fernanda es ingeniero.",
      "Esa película me recuerda a mi abuelo.",
      "El hijo de mi vecina chocó en la madrugada.",
    ],
    ans: "Su amigo de Fernanda es ingeniero.",
    exp: "Es un pleonasmo incorrecto; lo correcto es 'El amigo de Fernanda'.",
  },
  {
    id: 13,
    q: "Seleccione la oración INCORRECTA sobre sustantivos colectivos.",
    opts: [
      "La jauría de lobos fue localizada.",
      "El cardumen se veía desde el barco.",
      "Los cazadores esperaron a la parvada.",
      "Una piara de cerdos escaparon de la granja.",
    ],
    ans: "Una piara de cerdos escaparon de la granja.",
    exp: "El verbo debe coincidir con el núcleo singular 'piara': Una piara escapó.",
  },
  {
    id: 14,
    q: "Seleccione la oración CORRECTA de preposiciones.",
    opts: [
      "El jabón de niños es muy solicitado.",
      "Perdí mis guantes del frío.",
      "Llegó la caja con los perfumes de madres.",
      "El llavero rojo es de mi hermano.",
    ],
    ans: "El llavero rojo es de mi hermano.",
    exp: "Expresa posesión correctamente. 'Guantes del frío' es incorrecto (es para el frío).",
  },
  {
    id: 15,
    q: "En la oración 'La viuda regaló a su amante todas las propiedades', la parte 'a su amante' es:",
    opts: ["predicado", "sujeto", "circunstancial", "objeto indirecto"],
    ans: "objeto indirecto",
    exp: "Indica a quién va dirigida la acción del verbo.",
  },

  // ── BLOQUE 2: Razonamiento Verbal (16–30) ──────────────────────────────────
  {
    id: 16,
    q: "Profesor es a salón de dar clases, como mecánico es a:",
    opts: ["Automóvil", "Grasa", "Taller", "Autódromo"],
    ans: "Taller",
    exp: "Relación de profesión a lugar de trabajo.",
  },
  {
    id: 17,
    q: "Hombre es a masculino, como mujer es a:",
    opts: ["Femenina", "Feminista", "Masculina", "Afeminado"],
    ans: "Femenina",
    exp: "Relación de individuo a su género.",
  },
  {
    id: 18,
    q: "Vestido es a seda, como pintura es a:",
    opts: ["Óleo", "Cuadro", "Picasso", "Brocha"],
    ans: "Óleo",
    exp: "Relación de objeto a material con el que está hecho.",
  },
  {
    id: 19,
    q: "Ave es a cielo, como pez es a:",
    opts: ["Mar", "Aire", "Bosque", "Playa"],
    ans: "Mar",
    exp: "Relación de animal a su medio natural de desplazamiento.",
  },
  {
    id: 20,
    q: "Hambre es a comida, como frío es a:",
    opts: ["Suéter", "Calor", "Ropa", "Helado"],
    ans: "Suéter",
    exp: "Relación de necesidad a lo que la satisface/mitiga.",
  },
  {
    id: 21,
    q: "Puerta es a casa, como tapa es a:",
    opts: ["Botella", "Tapón", "Ventana", "Etiqueta"],
    ans: "Botella",
    exp: "Relación de elemento de cierre al objeto que cierra.",
  },
  {
    id: 22,
    q: "Hablar es a callar, como salir es a:",
    opts: ["Entrar", "Llegar", "Salida", "Entrada"],
    ans: "Entrar",
    exp: "Relación de antónimos (acciones opuestas).",
  },
  {
    id: 23,
    q: "León es a selva, como camello es a:",
    opts: ["Bosque", "Desierto", "Costa", "Sabana"],
    ans: "Desierto",
    exp: "Relación de animal a su hábitat característico.",
  },
  {
    id: 24,
    q: "Trigo es a campo, como árbol es a:",
    opts: ["Selva", "Arboleda", "Bosque", "Montaña"],
    ans: "Bosque",
    exp: "El trigo se cultiva masivamente en el campo; los árboles forman los bosques.",
  },
  {
    id: 25,
    q: "Perro es a jauría, como pez es a:",
    opts: ["Mar", "Peces", "Cardumen", "Manada"],
    ans: "Cardumen",
    exp: "Relación de individuo a su sustantivo colectivo.",
  },
  {
    id: 26,
    q: "Beneficiar es a perjudicar, como dar es a:",
    opts: ["Quitar", "Tener", "Preguntar", "Necesitar"],
    ans: "Quitar",
    exp: "Relación de antonimia directa.",
  },
  {
    id: 27,
    q: "Pintura es a color, como música es a:",
    opts: ["Belleza", "Melodía", "Nota", "Recreación"],
    ans: "Nota",
    exp: "El color es el elemento básico compositivo de la pintura; la nota lo es de la música.",
  },
  {
    id: 28,
    q: "Frontera es a país, como lindero es a:",
    opts: ["Terreno", "Geografía", "Construcción", "Línea"],
    ans: "Terreno",
    exp: "La frontera delimita a un país; el lindero delimita a un terreno.",
  },
  {
    id: 29,
    q: "Alegría es a éxtasis, como brisa es a:",
    opts: ["Lluvia", "Arroyo", "Sequía", "Huracán"],
    ans: "Huracán",
    exp: "Relación de intensidad: el éxtasis es alegría extrema; el huracán es viento (brisa) extremo.",
  },
  {
    id: 30,
    q: "'Cabellos de los árboles' en sentido metafórico, se refiere a:",
    opts: ["Raíces", "Mariposas", "Ramas", "Hojas"],
    ans: "Hojas",
    exp: "Metáfora literaria común para describir el follaje (las hojas).",
  },

  // ── BLOQUE 3: Matemáticas (31–45) ──────────────────────────────────────────
  {
    id: 31,
    q: "Realice la siguiente suma: $-\\frac{5}{11} + \\frac{10}{22}$",
    opts: ["$\\frac{55}{61}$", "$-\\frac{55}{61}$", "$0$", "$1$"],
    ans: "$0$",
    exp: "Simplificando $\\frac{10}{22}$ obtenemos $\\frac{5}{11}$. Entonces $-\\frac{5}{11} + \\frac{5}{11} = 0$.",
  },
  {
    id: 32,
    q: "Evalúe: $-3^3$",
    opts: ["$-27$", "$6$", "$27$", "$-6$"],
    ans: "$-27$",
    exp: "Un número negativo elevado a una potencia impar conserva el signo: $-(3 \\times 3 \\times 3) = -27$.",
  },
  {
    id: 33,
    q: "Evalúe: $\\frac{10^7}{10^5}$",
    opts: ["$1$", "$10$", "$100$", "$1000$"],
    ans: "$100$",
    exp: "Se restan los exponentes: $10^{7-5} = 10^2 = 100$.",
  },
  {
    id: 34,
    q: "Simplifique: $(\\frac{1}{2})^2 \\cdot (-2^3)$",
    opts: ["$-2$", "$2$", "$32$", "$-32$"],
    ans: "$-2$",
    exp: "$(\\frac{1}{4}) \\cdot (-8) = -\\frac{8}{4} = -2$.",
  },
  {
    id: 35,
    q: "Simplifique: $\\frac{50^2}{100^2}$",
    opts: [
      "$\\frac{500}{100}$",
      "$\\frac{50}{1000}$",
      "$\\frac{2500}{1000}$",
      "$\\frac{1}{4}$",
    ],
    ans: "$\\frac{1}{4}$",
    exp: "Por leyes de exponentes: $(\\frac{50}{100})^2 = (\\frac{1}{2})^2 = \\frac{1}{4}$.",
  },
  {
    id: 36,
    q: "Simplifique: $\\sqrt{20} + 5\\sqrt{5}$",
    opts: ["$\\sqrt{5}$", "$2\\sqrt{5}$", "$5\\sqrt{5}$", "$7\\sqrt{5}$"],
    ans: "$7\\sqrt{5}$",
    exp: "$\\sqrt{20} = \\sqrt{4 \\cdot 5} = 2\\sqrt{5}$. Sumando: $2\\sqrt{5} + 5\\sqrt{5} = 7\\sqrt{5}$.",
  },
  {
    id: 37,
    q: "Simplifique: $\\sqrt[3]{\\frac{27}{-125}}$",
    opts: ["$-3$", "$\\frac{1}{3}$", "$-\\frac{3}{5}$", "$\\frac{3}{5}$"],
    ans: "$-\\frac{3}{5}$",
    exp: "Raíz cúbica de $27$ es $3$, raíz cúbica de $-125$ es $-5$. Resultado: $-\\frac{3}{5}$.",
  },
  {
    id: 38,
    q: "Evalúe: $\\sqrt[3]{4} \\cdot \\sqrt[3]{16}$",
    opts: ["$4$", "$16$", "$2$", "$-2$"],
    ans: "$4$",
    exp: "Como tienen el mismo índice, se multiplican radicandos: $\\sqrt[3]{64} = 4$.",
  },
  {
    id: 39,
    q: "Evalúe: $1^{\\frac{99}{100}}$",
    opts: ["$\\frac{99}{100}$", "$0.99$", "$1$", "$0$"],
    ans: "$1$",
    exp: "El número 1 elevado a cualquier potencia real es siempre 1.",
  },
  {
    id: 40,
    q: "¿A qué es igual la siguiente expresión: $2^{0.2}$?",
    opts: [
      "$2^{\\frac{1}{2}}$",
      "$\\sqrt{2}$",
      "$\\sqrt[5]{2}$",
      "$\\frac{2}{5}$",
    ],
    ans: "$\\sqrt[5]{2}$",
    exp: "$0.2$ en fracción es $\\frac{1}{5}$, lo cual representa la raíz quinta de 2.",
  },
  {
    id: 41,
    q: "Simplifique: $\\frac{y^9 \\cdot y^0}{y^6}$",
    opts: ["$3y$", "$y^3$", "$\\sqrt{y}$", "$y^2$"],
    ans: "$y^3$",
    exp: "$y^0 = 1$. Entonces $y^9 / y^6 = y^{9-6} = y^3$.",
  },
  {
    id: 42,
    q: "Simplifique: $\\frac{10y^3 z^5}{5y^6 z^3}$",
    opts: [
      "$\\frac{1}{2}yz$",
      "$\\frac{5z^2}{y^3}$",
      "$5y^3 z^2$",
      "$\\frac{2z^2}{y^3}$",
    ],
    ans: "$\\frac{2z^2}{y^3}$",
    exp: "Coeficientes: $10/5 = 2$. Variables: $z^{5-3}=z^2$ arriba, y $y^{6-3}=y^3$ abajo.",
  },
  {
    id: 43,
    q: "¿Cuál es la suma de $(3x^2 + x + 1)$ con $(2x^2 - 3x - 5)$?",
    opts: [
      "$6x^2 - 4x - 5$",
      "$5x^2 - 2x - 4$",
      "$5x^2 - 2x - 5$",
      "$6x^2 + 4x + 6$",
    ],
    ans: "$5x^2 - 2x - 4$",
    exp: "Sumando términos semejantes: $(3+2)x^2 + (1-3)x + (1-5) = 5x^2 - 2x - 4$.",
  },
  {
    id: 44,
    q: "Simplifique la siguiente expresión: $3(x - 1) + 4(x + 2)$",
    opts: ["$7x + 1$", "$12x - 24$", "$7x + 5$", "$7x^2 - 24$"],
    ans: "$7x + 5$",
    exp: "Distribuyendo: $3x - 3 + 4x + 8 = 7x + 5$.",
  },
  {
    id: 45,
    q: "Factorice: $a^4 - b^6$",
    opts: [
      "$a^2 - b^2$",
      "$(a - b)(a + b)$",
      "$(a^2 - b^3)(a^2 + b^3)$",
      "$a - b$",
    ],
    ans: "$(a^2 - b^3)(a^2 + b^3)$",
    exp: "Diferencia de cuadrados, las raíces son $a^2$ y $b^3$.",
  },

  // ── BLOQUE 4: Razonamiento Matemático (46–55) ──────────────────────────────
  {
    id: 46,
    q: "Dos trenes idénticos con 31 vagones viajan en direcciones opuestas. Cuando los vagones #19 están frente a frente, ¿qué vagón del segundo tren está frente al #12 del primer tren?",
    diagram: (
      <svg
        width="100%"
        height="160"
        viewBox="0 0 500 160"
        style={{
          background: C.surface,
          borderRadius: 8,
          border: `1px solid ${C.border}`,
        }}
      >
        {/* Vías */}
        <line
          x1="50"
          y1="80"
          x2="450"
          y2="80"
          stroke={C.muted}
          strokeWidth="2"
          strokeDasharray="6,6"
        />
        {/* Tren 1 (Azul) */}
        <rect x="80" y="30" width="160" height="36" fill={C.blue} rx="4" />
        <text
          x="160"
          y="52"
          fill="#fff"
          fontSize="13"
          fontWeight="bold"
          textAnchor="middle"
          fontFamily="sans-serif"
        >
          Tren 1 (Vagón 12)
        </text>
        <path d="M 245 48 L 265 48 L 255 35 Z" fill={C.blue} />{" "}
        {/* Flecha de dirección */}
        {/* Tren 2 (Rojo) */}
        <rect x="260" y="94" width="160" height="36" fill={C.crimson} rx="4" />
        <text
          x="340"
          y="116"
          fill="#fff"
          fontSize="13"
          fontWeight="bold"
          textAnchor="middle"
          fontFamily="sans-serif"
        >
          Tren 2 (Vagón 19)
        </text>
        <path d="M 255 112 L 235 112 L 245 99 Z" fill={C.crimson} />{" "}
        {/* Flecha de dirección */}
        {/* Línea de encuentro */}
        <line
          x1="250"
          y1="10"
          x2="250"
          y2="150"
          stroke={C.teal}
          strokeWidth="2"
          strokeDasharray="4,4"
        />
        <text
          x="250"
          y="15"
          fill={C.teal}
          fontSize="11"
          fontWeight="bold"
          textAnchor="middle"
          fontFamily="sans-serif"
        >
          Punto Frontal
        </text>
      </svg>
    ),
    opts: ["7", "12", "21", "26"],
    ans: "26",
    exp: "La diferencia de posiciones es $19 - 12 = 7$ vagones. En dirección opuesta, sumamos esos 7 al vagón 19: $19 + 7 = 26$.",
  },

  {
    id: 47,
    q: "Sobre la recta numérica, el número 1 está marcado. Si a y b son menores que 1 pero positivos, ¿cuál de las letras representa la ubicación de su producto (ab)?",
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
    opts: ["p", "q", "r", "s"],
    ans: "q",
    exp: "Al multiplicar dos números positivos menores que 1 (como a y b), el resultado siempre será menor que ambos factores originales (se 'hace más pequeño'). Por lo tanto, el producto ab debe ser menor que 'a', ubicándose a su izquierda, pero sin ser negativo. El único punto que cumple esto es 'q'.",
  },

  {
    id: 48,
    q: "En cada cara de un cubo hay un número del 1 al 9 (todos distintos). Si la suma de caras opuestas es siempre la misma, y vemos las caras 4, 5 y 8 juntas, ¿qué número está opuesto al 5?",
    opts: ["3", "5", "6", "7"],
    ans: "9",
    exp: "Para que las tres sumas sean iguales con esos números a la vista, las parejas deben sumar 14. Opuesto a 5 es 9. (Adaptado para opciones estándar).",
  },
  {
    id: 49,
    q: "Una hormiga camina recto de A a B (separados 5m). Se encuentra dos bloques de 1m de alto en el camino. ¿Qué distancia total recorrerá si tiene que subir y bajar ambos bloques y luego seguir recto?",
    opts: ["7 m", "9 m", "5 + 4√2 m", "Falta información"],
    ans: "9 m",
    exp: "Sube 1m y baja 1m por cada bloque (4m verticales en total). La distancia horizontal sigue siendo 5m. $5 + 4 = 9$m.",
  },
  {
    id: 50,
    q: "A Carol le toma 3 horas ir y volver de la escuela si va en autobús y regresa caminando. Le toma 1 hora ir y volver si usa autobús en ambos trayectos. ¿Cuánto le toma si solo camina en ambos trayectos?",
    opts: ["3.5 h", "4 h", "4.5 h", "5 h"],
    ans: "5 h",
    exp: "Autobús(ida) = 0.5h. Si Bus + Caminar = 3h, entonces Caminar = 2.5h. Caminar ida y vuelta = 5 horas.",
  },
  {
    id: 51,
    q: "En un grupo de chicas interconectadas, cada una tiene un número específico de amigas. Si Ivonne, Dani y Fany tienen 4 amigas cada una, y Beatriz solo conoce a Ivonne y Dani. ¿Cuántas conexiones tiene Beatriz en total?",
    opts: ["2", "3", "4", "5"],
    ans: "2",
    exp: "El problema establece explícitamente que Beatriz es amiga de Ivonne y Dani y de nadie más.",
  },
  {
    id: 52,
    q: "Si 9 fichas son negras por un lado y blancas por el otro, 4 muestran negro y 5 blanco. Si debes voltear exactamente 3 en cada turno, ¿cuál es el mínimo de turnos para que todas sean del mismo color?",
    opts: ["1", "2", "3", "4"],
    ans: "2",
    exp: "En un turno volteas 3 blancas a negras (queda 7 negras, 2 blancas). En el siguiente, volteas 2 blancas y 1 negra... Analizando matemáticamente, el mínimo es 2.",
  },

  // ── PUZZLE VISUAL DE PENTÁGONOS AÑADIDO (SVG GENERADO POR CÓDIGO) ────────
  {
    id: 53,
    q: "Con fichas en forma de pentágono (todas idénticas) como la que se muestra a la izquierda, se quiere formar la corona que se muestra a la derecha, de manera que al pegar dos pentágonos, los triángulos adyacentes tengan el mismo número y color. Ya se han colocado 4 fichas. ¿Qué número queda en el triángulo marcado con X?",
    diagram: (() => {
      const R = 32;
      const PI = Math.PI;
      const v = [
        { x: 0, y: R },
        { x: R * Math.cos((18 * PI) / 180), y: R * Math.sin((18 * PI) / 180) },
        { x: R * Math.cos((54 * PI) / 180), y: -R * Math.sin((54 * PI) / 180) },
        {
          x: -R * Math.cos((54 * PI) / 180),
          y: -R * Math.sin((54 * PI) / 180),
        },
        { x: -R * Math.cos((18 * PI) / 180), y: R * Math.sin((18 * PI) / 180) },
      ];
      const V = [v[3], v[2], v[1], v[0], v[4]];
      const s = 2 * R * Math.cos((54 * PI) / 180);
      const r_dec = s / 2 / Math.tan((18 * PI) / 180);
      const D = r_dec + R * Math.sin((54 * PI) / 180);

      const baseColors = [
        "#1a1a1a",
        "#e8eaf0",
        "#34d399",
        "#f43f5e",
        "#3b9eff",
      ]; // Negro, Blanco, Verde, Rosa, Azul
      const baseNums = ["4", "3", "2", "1", "5"];
      const textColors = [
        "#e8eaf0",
        "#0e0f11",
        "#0e0f11",
        "#e8eaf0",
        "#0e0f11",
      ];

      const renderTile = (i, isStandalone = false) => {
        const shift = isStandalone ? 0 : (((1 - 2 * i) % 5) + 5) % 5;
        const isColored = isStandalone || [9, 0, 1, 2].includes(i);
        const isX = i === 5 && !isStandalone;

        return (
          <g
            key={isStandalone ? "s" : i}
            transform={
              isStandalone
                ? `translate(120, 175)`
                : `translate(400, 175) rotate(${-i * 36}) translate(0, ${D})`
            }
          >
            {[0, 1, 2, 3, 4].map((j) => {
              const valIdx = (j - shift + 5) % 5;
              const color = isColored ? baseColors[valIdx] : "transparent";
              const num = baseNums[valIdx];
              const tColor = isColored ? textColors[valIdx] : C.dim;

              const p1 = V[j];
              const p2 = V[(j + 1) % 5];
              const cx = (p1.x + p2.x) / 3;
              const cy = (p1.y + p2.y) / 3;
              const angle = (Math.atan2(cy, cx) * 180) / Math.PI + 90;

              let displayTxt = isColored ? num : "";
              if (isX && j === 1) displayTxt = "X";

              return (
                <g key={j}>
                  <polygon
                    points={`0,0 ${p1.x},${p1.y} ${p2.x},${p2.y}`}
                    fill={color}
                    stroke={isColored ? "#444" : C.dim}
                    strokeWidth="1"
                  />
                  {displayTxt && (
                    <text
                      x={cx}
                      y={cy}
                      fill={displayTxt === "X" ? C.text : tColor}
                      fontSize={displayTxt === "X" ? "18" : "14"}
                      fontWeight="bold"
                      textAnchor="middle"
                      dominantBaseline="central"
                      transform={`rotate(${angle}, ${cx}, ${cy})`}
                    >
                      {displayTxt}
                    </text>
                  )}
                </g>
              );
            })}
          </g>
        );
      };

      return (
        <svg
          width="100%"
          height="350"
          viewBox="0 0 600 350"
          style={{
            background: C.surface,
            borderRadius: 8,
            border: `1px solid ${C.border}`,
          }}
        >
          {renderTile(0, true)}
          <text
            x="120"
            y="240"
            fill={C.muted}
            fontSize="14"
            textAnchor="middle"
            fontFamily="'DM Sans', sans-serif"
          >
            Ficha base
          </text>
          {[...Array(10)].map((_, i) => renderTile(i))}
        </svg>
      );
    })(),
    opts: ["1", "2", "4", "5"],
    ans: "4",
    exp: "Al analizar la secuencia de los bordes de la ficha base (4, 3, 2, 1, 5 en sentido horario), podemos deducir la orientación de cada ficha en la corona. Las fichas se alternan rotando matemáticamente para encajar. Siguiendo este riguroso patrón de encaje desde las piezas ubicadas abajo hacia arriba, deducimos que la pieza superior está rotada 180° y la 'X' corresponde a la posición del 4 (triángulo negro en la ficha base).",
  },

  {
    id: 54,
    q: "¿Cuál de las siguientes figuras tiene la mayor área sombreada?",
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
    opts: ["(a)", "(b)", "(c)", "(d)"],
    ans: "(a)",
    exp: "Si calculamos el área asignando 1 unidad a cada cuadrito entero: la figura (a) tiene 2 cuadros blancos en total (un cuadro entero y dos mitades), por lo que su área sombreada es 14 (16 - 2). Las demás tienen mayor área blanca y por ende menor área sombreada: (b)=12.5, (c)=12, (d)=13, (e)=12.5. Por lo tanto, la (a) es la mayor.",
  },

  // ── GRAFO DIRIGIDO AÑADIDO (POSICIONES MATEMÁTICAS MEJORADAS) ──────────────
  {
    id: 55,
    q: "En el esquema, cada letra representa una persona y hay una flecha de una a otra si la segunda persona es más alta que la primera; por ejemplo, la flecha de B a A indica que A es más alta que B. ¿Quién es la persona más alta de las seis?",
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
    opts: ["A", "C", "E", "F"],
    ans: "A",
    exp: "Si seguimos el flujo de las flechas (que apuntan siempre a alguien más alto), notamos que todas las rutas finalmente desembocan en 'A'. Nadie apunta desde 'A' hacia otra letra, lo que significa que no hay nadie más alto que A.",
  },

  // ── BLOQUE 5: Biología (56–65) ─────────────────────────────────────────────
  {
    id: 56,
    q: "¿Qué tipo de célula es una bacteria?",
    opts: ["Eucariota", "Animal", "Pluricelular", "Procariota"],
    ans: "Procariota",
    exp: "Las bacterias no tienen núcleo definido, característica principal de las células procariotas.",
  },
  {
    id: 57,
    q: "¿Cuál es la función principal del ribosoma?",
    opts: [
      "La producción de proteínas",
      "Dirigir el tráfico de micromoléculas",
      "Almacenar enzimas",
      "Organizar los microtúbulos",
    ],
    ans: "La producción de proteínas",
    exp: "Los ribosomas son los encargados de la síntesis de proteínas (traducción).",
  },
  {
    id: 58,
    q: "¿Qué es el ácido desoxirribonucleico (ADN)?",
    opts: [
      "Es un ácido que ayuda a la digestión",
      "Es el código genético de los virus ARN",
      "Es el ácido nucleico que contiene la información hereditaria",
      "Un organelo celular",
    ],
    ans: "Es el ácido nucleico que contiene la información hereditaria",
    exp: "El ADN almacena la información genética necesaria para el desarrollo y funcionamiento de los seres vivos.",
  },
  {
    id: 59,
    q: "La división celular que mantiene el número de cromosomas diploides en las células hijas se denomina:",
    opts: ["Mitosis", "Meiosis", "Amitosis", "Cariocinesis"],
    ans: "Mitosis",
    exp: "En la mitosis, de una célula madre surgen dos células hijas idénticas con el mismo número de cromosomas.",
  },
  {
    id: 60,
    q: "Las neuronas son células que en los adultos no se dividen, por lo que se dice que se encuentran en el periodo:",
    opts: ["G1", "S", "G2", "G0"],
    ans: "G0",
    exp: "La fase G0 es una fase de reposo o quiescencia donde la célula cumple su función pero no se prepara para dividirse.",
  },
  {
    id: 61,
    q: "El huso acromático se forma durante la división celular mediante la acción directa de:",
    opts: ["Los cromosomas", "Los genes", "Los centriolos", "Las mitocondrias"],
    ans: "Los centriolos",
    exp: "Los centriolos organizan los microtúbulos que formarán el huso acromático en células animales.",
  },
  {
    id: 62,
    q: "Es aquel organelo celular encargado de producir la mayor parte de la energía (ATP):",
    opts: [
      "Aparato de Golgi",
      "Retículo Endoplasmático",
      "Mitocondria",
      "Núcleo",
    ],
    ans: "Mitocondria",
    exp: "Las mitocondrias son consideradas las 'centrales energéticas' de la célula eucariota.",
  },
  {
    id: 63,
    q: "Son características de la meiosis, EXCEPTO:",
    opts: [
      "El número de cromosomas se reduce",
      "Da lugar a 4 células",
      "Se presenta sólo en células somáticas",
      "La meiosis I es reduccional",
    ],
    ans: "Se presenta sólo en células somáticas",
    exp: "La meiosis ocurre EXCLUSIVAMENTE en las células germinales para producir gametos (espermatozoides y óvulos).",
  },
  {
    id: 64,
    q: "¿Cuáles son los dos tipos principales de respiración celular?",
    opts: [
      "Aerobia y Anaerobia",
      "Aerobia y Glucólisis",
      "Glucólisis y Ciclo de Krebs",
      "Anaerobia y Mitótica",
    ],
    ans: "Aerobia y Anaerobia",
    exp: "Se dividen según utilicen oxígeno (aerobia) o no lo requieran (anaerobia).",
  },
  {
    id: 65,
    q: "¿Qué proceso general se realiza durante la respiración celular?",
    opts: [
      "Pérdida de ATP",
      "Liberación de energía",
      "Condensación metabólica",
      "Fotosíntesis",
    ],
    ans: "Liberación de energía",
    exp: "Su propósito principal es degradar glucosa para liberar la energía química almacenada en forma de ATP.",
  },

  // ── BLOQUE 6: Química (66–75) ──────────────────────────────────────────────
  {
    id: 66,
    q: "Son combinaciones binarias de un elemento no metal con el oxígeno:",
    opts: ["Óxidos metálicos", "Óxidos no metálicos", "Peróxidos", "Hidruros"],
    ans: "Óxidos no metálicos",
    exp: "También conocidos como anhídridos, se forman de un no metal + oxígeno.",
  },
  {
    id: 67,
    q: "Nombra correctamente el siguiente compuesto: N2O",
    opts: [
      "Óxido de nitrógeno",
      "Óxido de dinitrógeno",
      "Dióxido de nitrógeno",
      "Nitrato de oxígeno",
    ],
    ans: "Óxido de dinitrógeno",
    exp: "Por la nomenclatura sistemática (prefijos): 1 Oxígeno (monóxido/óxido) y 2 Nitrógenos (dinitrógeno).",
  },
  {
    id: 68,
    q: "Nombra correctamente el siguiente compuesto: As2O5",
    opts: [
      "Pentaóxido de arsénico",
      "Pentaóxido de diarsénico",
      "Óxido de diarsénico",
      "Ácido arsénico",
    ],
    ans: "Pentaóxido de diarsénico",
    exp: "5 oxígenos (pentaóxido) y 2 arsénicos (diarsénico).",
  },
  {
    id: 69,
    q: "Las cargas eléctricas del electrón, protón y neutrón son respectivamente:",
    opts: ["+, -, +/-", "-, +, neutro", "+, +, -", "-, -, +"],
    ans: "-, +, neutro",
    exp: "Electrón es negativo, Protón es positivo y Neutrón no tiene carga neta (cero).",
  },
  {
    id: 70,
    q: "Cuando el número cuántico 'l' (azimutal) es igual a 2, significa que el electrón diferencial se encuentra en el subnivel:",
    opts: ["s", "p", "d", "f"],
    ans: "d",
    exp: "Los valores de l son: s=0, p=1, d=2, f=3.",
  },
  {
    id: 71,
    q: "El número máximo de electrones que se pueden alojar en el nivel principal n=2 es:",
    opts: ["18", "32", "8", "14"],
    ans: "8",
    exp: "Fórmula $2n^2$. Si n=2, $2(2^2) = 2(4) = 8$.",
  },
  {
    id: 72,
    q: "¿Qué número cuántico adquiere exclusivamente los valores de +1/2 y -1/2?",
    opts: [
      "Número cuántico principal (n)",
      "Número cuántico de spin (s)",
      "Número cuántico orbital (m)",
      "Número cuántico azimutal (l)",
    ],
    ans: "Número cuántico de spin (s)",
    exp: "El spin indica el sentido de giro del electrón sobre su propio eje.",
  },
  {
    id: 73,
    q: "De los siguientes grupos, ¿cuáles elementos son los más electronegativos?",
    opts: ["K, Sr, Bi", "Ca, Mg, Be", "Fr, Cs, Ba", "F, O, Cl"],
    ans: "F, O, Cl",
    exp: "La electronegatividad aumenta hacia arriba y a la derecha en la tabla. Flúor, Oxígeno y Cloro están en esa zona.",
  },
  {
    id: 74,
    q: "Los elementos de la familia o grupo IA (Metales Alcalinos) se caracterizan por tener en su último nivel:",
    opts: ["7 electrones", "1 electrón", "2 electrones", "8 electrones"],
    ans: "1 electrón",
    exp: "El grupo indica los electrones de valencia. El grupo 1A tiene 1 electrón.",
  },
  {
    id: 75,
    q: "El número de electrones de valencia es igual para todos los elementos ubicados en la misma:",
    opts: [
      "Columna (Grupo) de la tabla periódica",
      "Fila (Periodo) de la tabla periódica",
      "Masa atómica",
      "Estructura cristalina",
    ],
    ans: "Columna (Grupo) de la tabla periódica",
    exp: "Los elementos de un mismo grupo comparten propiedades químicas debido a sus mismos electrones de valencia.",
  },

  // ── BLOQUE 7: Física (76–85) ───────────────────────────────────────────────
  {
    id: 76,
    q: "De la Primera Ley de Newton (Inercia) se deduce que:",
    opts: [
      "Un objeto en movimiento se detiene siempre",
      "Si la aceleración es mayor que cero, no cambia la velocidad",
      "Un objeto se mantiene en su estado de reposo o movimiento rectilíneo uniforme si la fuerza neta es cero",
      "Para toda fuerza existe una reacción",
    ],
    ans: "Un objeto se mantiene en su estado de reposo o movimiento rectilíneo uniforme si la fuerza neta es cero",
    exp: "La inercia dicta que sin una fuerza externa neta, la velocidad no cambia.",
  },
  {
    id: 77,
    q: "De la Tercera Ley de Newton (Acción y Reacción) se deduce que:",
    opts: [
      "La gravedad atrae todo al centro",
      "Para toda fuerza de acción existe otra de igual magnitud pero en sentido contrario",
      "Si aceleras un cuerpo, ganas inercia",
      "La masa es proporcional a la fuerza",
    ],
    ans: "Para toda fuerza de acción existe otra de igual magnitud pero en sentido contrario",
    exp: "Es el principio clásico de interacción entre dos cuerpos.",
  },
  {
    id: 78,
    q: "Un coche se mueve a una velocidad constante de 15 m/s. ¿Cuántos metros recorrerá en 30 segundos?",
    opts: ["45 m", "0.45 km", "450 m", "500 m"],
    ans: "450 m",
    exp: "Distancia = Velocidad × Tiempo. d = 15 m/s × 30 s = 450 m.",
  },
  {
    id: 79,
    q: "Un objeto se mueve con una velocidad de 1 m/s. ¿Cuántos kilómetros recorrerá en exactamente una hora?",
    opts: ["6 km", "36 km", "3 km", "3.6 km"],
    ans: "3.6 km",
    exp: "En 1 hora hay 3600 segundos. Recorrerá 3600 metros, que equivalen a 3.6 kilómetros.",
  },
  {
    id: 80,
    q: "¿Cuál es la velocidad media de un coche que recorre 120 km en 2 horas?",
    opts: ["120 km/h", "240 km/h", "100 km/h", "60 km/h"],
    ans: "60 km/h",
    exp: "v = d / t = 120 km / 2 h = 60 km/h.",
  },
  {
    id: 81,
    q: "Convertir 2.5 kilómetros a metros:",
    opts: ["250 m", "2,500 m", "25.00 m", "25,000 m"],
    ans: "2,500 m",
    exp: "1 km = 1000 m. Por tanto, 2.5 × 1000 = 2500 metros.",
  },
  {
    id: 82,
    q: "Convertir 2 horas y 30 minutos a segundos:",
    opts: ["9,000 s", "7,200 s", "8,000 s", "150 s"],
    ans: "9,000 s",
    exp: "2 horas = 7200 s. 30 minutos = 1800 s. 7200 + 1800 = 9000 segundos.",
  },
  {
    id: 83,
    q: "Convertir 780 gramos a kilogramos:",
    opts: ["7.8 kg", "78 kg", "0.78 kg (780 milésimos)", "1000/78 kg"],
    ans: "0.78 kg (780 milésimos)",
    exp: "Para pasar de gramos a kilos se divide entre 1000. 780 / 1000 = 0.78 kg.",
  },
  {
    id: 84,
    q: "Convertir 3.25 metros a centímetros:",
    opts: ["32.5 cm", "325 cm", "3.25 cm", "300 cm"],
    ans: "325 cm",
    exp: "1 metro = 100 cm. Multiplicamos 3.25 × 100 = 325 centímetros.",
  },
  {
    id: 85,
    q: "Convertir 25° Celsius a grados Fahrenheit usando F = (C × 1.8) + 32",
    opts: ["77 °F", "76 °F", "75 °F", "74 °F"],
    ans: "77 °F",
    exp: "25 × 1.8 = 45. Sumando 32 obtenemos 77 °F.",
  },

  // ── BLOQUE 8: Ciencias Sociales (86–100) ───────────────────────────────────
  {
    id: 86,
    q: "De acuerdo a la geografía del viejo mundo, ¿qué país ocupa la costa atlántica occidental de la Península Ibérica?",
    opts: ["Francia", "Italia", "Portugal", "España"],
    ans: "Portugal",
    exp: "Portugal comparte la Península Ibérica con España y mira hacia el Océano Atlántico.",
  },
  {
    id: 87,
    q: "¿Qué país europeo tiene una frontera natural conformada por los montes Pirineos y ocupa la mayor parte de la Península Ibérica?",
    opts: ["Portugal", "Francia", "Italia", "España"],
    ans: "España",
    exp: "España colinda al norte con Francia a través de los Pirineos.",
  },
  {
    id: 88,
    q: "¿Qué país de Europa occidental tiene costas tanto en el Océano Atlántico como en el Mar Mediterráneo y es famoso por su capital, París?",
    opts: ["Francia", "Italia", "Portugal", "Reino Unido"],
    ans: "Francia",
    exp: "Francia está ubicada estratégicamente en el centro-occidente europeo.",
  },
  {
    id: 89,
    q: "¿Qué poderosa nación de Europa Central colinda con Francia, Polonia y Austria, y tiene como capital a Berlín?",
    opts: ["Turquía", "Alemania", "Italia", "Suiza"],
    ans: "Alemania",
    exp: "Alemania es el corazón económico e industrial de Europa Central.",
  },
  {
    id: 90,
    q: "¿Qué pequeño país de Europa Occidental alberga las sedes de importantes institutions de la Unión Europea en su capital, Bruselas?",
    opts: ["Bélgica", "Países Bajos", "Dinamarca", "Suiza"],
    ans: "Bélgica",
    exp: "Bélgica se ubica entre Francia, Alemania y los Países Bajos.",
  },
  {
    id: 91,
    q: "¿Qué país europeo es famoso por sus sistemas de diques, canales y tulipanes, teniendo a Ámsterdam como su capital?",
    opts: ["Países Bajos", "Bélgica", "Dinamarca", "Finlandia"],
    ans: "Países Bajos",
    exp: "Los Países Bajos (Holanda) han ganado terreno al mar históricamente.",
  },
  {
    id: 92,
    q: "¿Qué país nórdico está formado principalmente por la península de Jutlandia y limita al sur con Alemania?",
    opts: ["Suecia", "Noruega", "Dinamarca", "Finlandia"],
    ans: "Dinamarca",
    exp: "Dinamarca es el país escandinavo más meridional.",
  },
  {
    id: 93,
    q: "La Revolución Industrial se define conceptualmente como:",
    opts: [
      "Una edad antes de la edad antigua",
      "La transición de una economía esclavista al feudalismo",
      "La etapa de transición de una economía agraria y manual a una economía industrializada y mecánica",
      "Una revuelta militar del siglo XX",
    ],
    ans: "La etapa de transición de una economía agraria y manual a una economía industrializada y mecánica",
    exp: "Cambió radicalmente el modo de producción global hacia la fábrica mecanizada.",
  },
  {
    id: 94,
    q: "¿Entre qué siglos tuvo lugar principalmente la primera Revolución Industrial?",
    opts: [
      "Entre el siglo XIII a.c y XIX a.c",
      "Entre finales del siglo XVIII y principios del XIX",
      "Exclusivamente en el siglo XX",
      "En el Imperio Romano",
    ],
    ans: "Entre finales del siglo XVIII y principios del XIX",
    exp: "Inició en Gran Bretaña alrededor de 1760 y se consolidó en las décadas posteriores.",
  },
  {
    id: 95,
    q: "Fueron los principales avances tecnológicos (máquinas) que detonaron la Revolución Industrial:",
    opts: [
      "El telégrafo, la televisión a color y el iPad",
      "La máquina de vapor, la hiladora mecánica y el telar mecánico",
      "La carreta, la yunta y el buey",
      "El motor de combustión interna y la aviación",
    ],
    ans: "La máquina de vapor, la hiladora mecánica y el telar mecánico",
    exp: "La energía del vapor y la mecanización textil fueron los pilares iniciales.",
  },
  {
    id: 96,
    q: "¿A qué fenómeno demográfico y socioeconómico contribuyó directamente la Revolución Industrial?",
    opts: [
      "La reducción de la población mundial",
      "La migración masiva de trabajadores de las zonas rurales a las ciudades",
      "El regreso del sistema feudal",
      "La desaparición de los bancos",
    ],
    ans: "La migración masiva de trabajadores de las zonas rurales a las ciudades",
    exp: "La creación de fábricas en urbes concentró la oferta laboral, creando el proletariado urbano.",
  },
  {
    id: 97,
    q: "A largo plazo, la Revolución Industrial sentó las bases para el surgimiento de:",
    opts: [
      "La cacería nómada",
      "La economía globalizada e industrializada moderna",
      "Las guerras púnicas",
      "La astrología",
    ],
    ans: "La economía globalizada e industrializada moderna",
    exp: "Configuró el modelo de consumo, producción en masa y comercio internacional que prevalece hoy.",
  },
  {
    id: 98,
    q: "¿Qué nación euroasiática, conocida por la forma de bota de su territorio, se ubica en el mar Mediterráneo?",
    opts: ["España", "Francia", "Grecia", "Italia"],
    ans: "Italia",
    exp: "Italia es fácilmente reconocible geográficamente por su forma de bota itálica.",
  },
  {
    id: 99,
    q: "País de Europa Oriental, el segundo más grande del continente, que ha estado históricamente conectado con Rusia y cuya capital es Kiev:",
    opts: ["Rusia", "Bielorrusia", "Lituania", "Ucrania"],
    ans: "Ucrania",
    exp: "Ucrania es vital en la geografía de Europa del Este.",
  },
  {
    id: 100,
    q: "¿Qué país euroasiático sirve de puente histórico entre Europa y Medio Oriente, controlando el estrecho del Bósforo?",
    opts: ["Alemania", "Grecia", "Turquía", "Bulgaria"],
    ans: "Turquía",
    exp: "La ciudad de Estambul en Turquía se asienta en dos continentes: Europa y Asia.",
  },

  // ── EJEMPLO CON IMAGEN ───────────────────────────────────────────────────
  {
    id: 101,
    q: "Observa el siguiente esquema. ¿Qué organelo celular está marcado en color rojo?",
    img: "https://via.placeholder.com/600x250/252830/e8eaf0?text=Esquema+de+C%C3%A9lula+Animal",
    opts: ["Mitocondria", "Núcleo", "Aparato de Golgi", "Ribosoma"],
    ans: "Mitocondria",
    exp: "La mitocondria suele representarse con pliegues internos llamados crestas.",
  },

  // ── EJEMPLO CON GRÁFICA VECTORIAL NATIVA (SVG) ───────────────────────────
  {
    id: 102,
    q: "Observa la siguiente gráfica generada con código matemático. ¿Cuál es el punto de intersección (solución del sistema) de las rectas $y = 2x - 2$ (azul) y $y = -x + 4$ (rojo)?",
    diagram: (
      <svg
        width="100%"
        height="240"
        viewBox="0 0 240 240"
        style={{
          background: C.bg,
          borderRadius: 8,
          border: `1px solid ${C.border}`,
        }}
      >
        {/* Cuadrícula base */}
        {[...Array(11)].map((_, i) => (
          <g key={i}>
            <line
              x1={20 + i * 20}
              y1="0"
              x2={20 + i * 20}
              y2="240"
              stroke={C.border}
              strokeWidth="1"
            />
            <line
              x1="0"
              y1={20 + i * 20}
              x2="240"
              y2={20 + i * 20}
              stroke={C.border}
              strokeWidth="1"
            />
          </g>
        ))}
        {/* Ejes X e Y Cartesianos (Centro en 120, 120) */}
        <line
          x1="120"
          y1="0"
          x2="120"
          y2="240"
          stroke={C.muted}
          strokeWidth="2"
        />
        <line
          x1="0"
          y1="120"
          x2="240"
          y2="120"
          stroke={C.muted}
          strokeWidth="2"
        />

        {/* Recta y = 2x - 2 (Puntos cartesianos reales mapeados a SVG) */}
        <line
          x1="80"
          y1="240"
          x2="200"
          y2="0"
          stroke={C.blue}
          strokeWidth="3"
        />

        {/* Recta y = -x + 4 (Puntos cartesianos reales mapeados a SVG) */}
        <line
          x1="40"
          y1="-40"
          x2="240"
          y2="160"
          stroke={C.crimson}
          strokeWidth="3"
        />

        {/* Punto de Intersección Exacto en (2, 2) */}
        <circle cx="160" cy="80" r="6" fill={C.gold} />
        <text
          x="175"
          y="75"
          fill={C.gold}
          fontSize="14"
          fontWeight="bold"
          fontFamily="sans-serif"
        >
          (2, 2)
        </text>
      </svg>
    ),
    opts: ["(2, 2)", "(0, 4)", "(1, 0)", "(4, 0)"],
    ans: "(2, 2)",
    exp: "El punto donde se cruzan las gráficas equivale a igualar el sistema: $2x - 2 = -x + 4 \\rightarrow 3x = 6 \\rightarrow x=2$.",
  },
];

// ─── NIVELES Y BLOQUES ────────────────────────────────────────────────────
const LEVELS = [
  { label: "Español", range: [1, 15], color: C.blue },
  { label: "Razonamiento Verbal", range: [16, 30], color: C.teal },
  { label: "Matemáticas", range: [31, 45], color: C.purple },
  { label: "Raz. Matemático", range: [46, 55], color: C.gold },
  { label: "Biología", range: [56, 65], color: C.orange },
  { label: "Química", range: [66, 75], color: C.crimson },
  { label: "Física", range: [76, 85], color: C.blue },
  { label: "Ciencias Sociales", range: [86, 105], color: C.teal },
];

function getLvl(id) {
  return LEVELS.find((l) => id >= l.range[0] && id <= l.range[1]) || LEVELS[0];
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function fmt(s) {
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sec = s % 60;
  if (h > 0)
    return `${h}:${m.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`;
  return `${m}:${sec.toString().padStart(2, "0")}`;
}

export default function ExamenEGA() {
  const [mode, setMode] = useState("menu");
  const [examMode, setExamMode] = useState("");
  const [queue, setQueue] = useState([]);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(0);
  const [timerOn, setTimerOn] = useState(false);

  const [selected, setSelected] = useState(null);
  const [confirmed, setConfirmed] = useState(false);
  const [filter, setFilter] = useState("all");

  const [katexLoaded, setKatexLoaded] = useState(false);

  // Cargar KaTeX dinámicamente
  useEffect(() => {
    if (!document.getElementById("katex-css")) {
      const link = document.createElement("link");
      link.id = "katex-css";
      link.rel = "stylesheet";
      link.href =
        "https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css";
      document.head.appendChild(link);
    }
    if (!document.getElementById("katex-js")) {
      const script = document.createElement("script");
      script.id = "katex-js";
      script.src =
        "https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.js";
      script.onload = () => setKatexLoaded(true);
      document.head.appendChild(script);
    } else {
      setKatexLoaded(true);
    }
  }, []);

  // Función para renderizar KaTeX en strings de texto mezclado
  const renderMathText = (txt) => {
    if (!katexLoaded || !window.katex || typeof txt !== "string") return txt;

    const parts = txt.split(/(\$.*?\$)/g);
    return parts.map((part, i) => {
      if (part.startsWith("$") && part.endsWith("$")) {
        const math = part.slice(1, -1);
        try {
          return (
            <span
              key={i}
              dangerouslySetInnerHTML={{
                __html: window.katex.renderToString(math, {
                  throwOnError: false,
                }),
              }}
            />
          );
        } catch (e) {
          return <span key={i}>{part}</span>;
        }
      }
      return <span key={i}>{part}</span>;
    });
  };

  useEffect(() => {
    let interval;
    if (timerOn && timeLeft > 0) {
      interval = setInterval(() => setTimeLeft((t) => t - 1), 1000);
    } else if (timeLeft === 0 && timerOn) {
      setTimerOn(false);
      setMode("results");
    }
    return () => clearInterval(interval);
  }, [timerOn, timeLeft]);

  const startExam = (modeKey) => {
    let qList = [];
    if (modeKey === "full") {
      qList = [...questions];
    } else if (modeKey.startsWith("block-")) {
      const idx = parseInt(modeKey.split("-")[1], 10);
      const lv = LEVELS[idx];
      qList = questions.filter(
        (q) => q.id >= lv.range[0] && q.id <= lv.range[1],
      );
    }

    if (qList.length === 0) {
      alert("Este bloque aún no tiene preguntas generadas.");
      return;
    }

    const prepared = qList.map((q) => ({
      ...q,
      opts: shuffle(q.opts),
    }));

    setQueue(shuffle(prepared));
    setCurrent(0);
    setAnswers({});
    setSelected(null);
    setConfirmed(false);

    // Asignar 60 segundos por pregunta como default
    setTimeLeft(prepared.length * 60);
    setTimerOn(true);
    setExamMode(modeKey);
    setMode("exam");
  };

  const confirmAnswer = () => {
    if (!selected) return;
    setAnswers((p) => ({ ...p, [queue[current].id]: selected }));
    setConfirmed(true);
  };

  const goNext = () => {
    if (current < queue.length - 1) {
      const nextId = queue[current + 1].id;
      setCurrent((c) => c + 1);
      setSelected(answers[nextId] || null);
      setConfirmed(!!answers[nextId]);
    } else {
      setTimerOn(false);
      setMode("results");
    }
  };

  const goPrev = () => {
    if (current > 0) {
      const prevId = queue[current - 1].id;
      setCurrent((c) => c - 1);
      setSelected(answers[prevId] || null);
      setConfirmed(!!answers[prevId]);
    }
  };

  const score = Object.entries(answers).reduce((acc, [id, ans]) => {
    const q = questions.find((q) => q.id === Number(id));
    return acc + (q?.ans === ans ? 1 : 0);
  }, 0);

  const timerWarning = timeLeft < 300;

  if (mode === "menu")
    return (
      <div style={{ minHeight: "100vh", background: C.bg, paddingBottom: 64 }}>
        <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');
        *{box-sizing:border-box;margin:0;padding:0}
        ::-webkit-scrollbar{width:5px;background:${C.bg}}
        ::-webkit-scrollbar-thumb{background:${C.border};border-radius:99px}
        .katex { font-size: 1.1em; }
      `}</style>

        <div
          style={{
            background: C.surface,
            borderBottom: `1px solid ${C.border}`,
            padding: "44px 24px 32px",
            textAlign: "center",
            position: "relative",
          }}
        >
          <span
            style={{
              display: "inline-block",
              background: C.blue + "22",
              color: C.blue,
              borderRadius: 99,
              padding: "3px 14px",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: 2,
              textTransform: "uppercase",
              marginBottom: 14,
              fontFamily: "'DM Sans',sans-serif",
            }}
          >
            Simulador Multidisciplinario
          </span>
          <h1
            style={{
              color: C.text,
              fontSize: 32,
              fontWeight: 800,
              letterSpacing: "-0.5px",
              marginBottom: 12,
              fontFamily: "'DM Sans',sans-serif",
            }}
          >
            Examen General <span style={{ color: C.purple }}>EGA II</span>
          </h1>
          <p
            style={{
              color: C.muted,
              fontSize: 15,
              maxWidth: 500,
              margin: "0 auto",
              lineHeight: 1.5,
              fontFamily: "'DM Sans',sans-serif",
            }}
          >
            Versión interactiva y adaptada del documento original de marzo.
            Selecciona un bloque o el examen completo.
          </p>
        </div>

        <div style={{ maxWidth: 800, margin: "0 auto", padding: "32px 24px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 16,
              marginBottom: 40,
            }}
          >
            <button
              onClick={() => startExam("full")}
              style={{
                background: C.surface,
                border: `1px solid ${C.border}`,
                borderRadius: 14,
                padding: "22px 16px",
                cursor: "pointer",
                textAlign: "center",
                transition: "all 0.2s",
                fontFamily: "'DM Sans',sans-serif",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = C.blue;
                e.currentTarget.style.background = C.blue + "11";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = C.border;
                e.currentTarget.style.background = C.surface;
              }}
            >
              <div style={{ fontSize: 28, marginBottom: 8 }}>🚀</div>
              <div style={{ color: C.text, fontWeight: 700, fontSize: 15 }}>
                Presentar Simulador Completo
              </div>
              <div style={{ color: C.muted, fontSize: 12, marginTop: 4 }}>
                {questions.length} reactivos en total · Incluye todas las áreas
              </div>
            </button>
          </div>

          <p
            style={{
              color: C.muted,
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: 2,
              textTransform: "uppercase",
              marginBottom: 12,
              fontFamily: "'DM Sans',sans-serif",
            }}
          >
            Áreas de Evaluación
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(160px,1fr))",
              gap: 12,
            }}
          >
            {LEVELS.map((lv, i) => (
              <button
                key={i}
                onClick={() => startExam(`block-${i}`)}
                style={{
                  background: C.surface,
                  border: `1px solid ${lv.color}44`,
                  borderRadius: 12,
                  padding: "14px 12px",
                  cursor: "pointer",
                  textAlign: "center",
                  transition: "all 0.2s",
                  fontFamily: "'DM Sans',sans-serif",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = lv.color + "18";
                  e.currentTarget.style.borderColor = lv.color;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = C.surface;
                  e.currentTarget.style.borderColor = lv.color + "44";
                }}
              >
                <div style={{ color: lv.color, fontWeight: 700, fontSize: 13 }}>
                  {lv.label}
                </div>
                <div style={{ color: C.muted, fontSize: 11, marginTop: 4 }}>
                  {lv.range[1] - lv.range[0] + 1} preguntas
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    );

  if (mode === "results") {
    const total = queue.length;
    const pct = total > 0 ? Math.round((score / total) * 100) : 0;
    const col = pct >= 80 ? C.teal : pct >= 60 ? C.gold : C.crimson;
    const msg =
      pct >= 90
        ? "¡Excelente! Estás más que listo."
        : pct >= 60
          ? "¡Buen puntaje! Hay detalles que pulir."
          : "Necesitas estudiar los fundamentos.";

    let displayQs = queue;
    if (filter === "correct")
      displayQs = queue.filter((q) => answers[q.id] === q.ans);
    if (filter === "wrong")
      displayQs = queue.filter((q) => answers[q.id] !== q.ans);

    return (
      <div style={{ minHeight: "100vh", background: C.bg, paddingBottom: 64 }}>
        <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');*{box-sizing:border-box;margin:0;padding:0}::-webkit-scrollbar{width:5px;background:${C.bg}}::-webkit-scrollbar-thumb{background:${C.border};border-radius:99px}`}</style>

        <div style={{ maxWidth: 760, margin: "0 auto", padding: "24px 16px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 32,
            }}
          >
            <h2
              style={{
                color: C.text,
                fontSize: 22,
                fontWeight: 700,
                fontFamily: "'DM Sans',sans-serif",
              }}
            >
              Hoja de Resultados
            </h2>
            <button
              onClick={() => setMode("menu")}
              style={{
                background: C.surface,
                border: `1px solid ${C.border}`,
                color: C.text,
                padding: "8px 16px",
                borderRadius: 8,
                cursor: "pointer",
                fontSize: 13,
                fontWeight: 600,
                fontFamily: "'DM Sans',sans-serif",
              }}
            >
              Volver al inicio
            </button>
          </div>

          <div
            style={{
              background: C.surface,
              border: `2px solid ${col}`,
              borderRadius: 18,
              padding: "30px 36px",
              textAlign: "center",
              maxWidth: 380,
              margin: "0 auto 32px",
              fontFamily: "'DM Sans',sans-serif",
            }}
          >
            <div
              style={{
                fontSize: 58,
                fontWeight: 900,
                color: col,
                letterSpacing: "-3px",
                lineHeight: 1,
              }}
            >
              {pct}%
            </div>
            <div style={{ color: C.dim, fontSize: 14, marginTop: 8 }}>
              <span style={{ color: C.text, fontWeight: 700 }}>{score}</span>{" "}
              aciertos de {total}
            </div>
            <div
              style={{
                color: col,
                fontWeight: 700,
                fontSize: 15,
                marginTop: 10,
              }}
            >
              {msg}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              gap: 8,
              marginBottom: 20,
              flexWrap: "wrap",
            }}
          >
            {[
              ["all", "Todas"],
              ["correct", `✓ Correctas (${score})`],
              ["wrong", `✗ Incorrectas (${total - score})`],
            ].map(([f, label]) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                style={{
                  padding: "6px 14px",
                  borderRadius: 99,
                  fontSize: 12,
                  fontWeight: 700,
                  cursor: "pointer",
                  border: "none",
                  background: filter === f ? C.blue : C.surface,
                  color: filter === f ? "#fff" : C.muted,
                  fontFamily: "'DM Sans',sans-serif",
                }}
              >
                {label}
              </button>
            ))}
          </div>

          {displayQs.map((q) => {
            const lv = getLvl(q.id);
            const userAns = answers[q.id];
            return (
              <div
                key={q.id}
                style={{
                  background: C.surface,
                  border: `1px solid ${C.border}`,
                  borderRadius: 16,
                  padding: 20,
                  marginBottom: 16,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: 12,
                  }}
                >
                  <span
                    style={{
                      background: lv.color + "22",
                      color: lv.color,
                      padding: "3px 8px",
                      borderRadius: 6,
                      fontSize: 11,
                      fontWeight: 700,
                      fontFamily: "'DM Sans',sans-serif",
                    }}
                  >
                    {lv.label}
                  </span>
                  <span
                    style={{
                      marginLeft: "auto",
                      color: C.muted,
                      fontSize: 12,
                      fontFamily: "'DM Sans',sans-serif",
                    }}
                  >
                    Reactivo #{q.id}
                  </span>
                </div>
                <p
                  style={{
                    color: C.text,
                    fontSize: 15,
                    fontWeight: 600,
                    marginBottom: q.img || q.diagram ? 12 : 12,
                    fontFamily: "'DM Sans',sans-serif",
                  }}
                >
                  {renderMathText(q.q)}
                </p>

                {q.img && (
                  <div style={{ marginBottom: 16, textAlign: "left" }}>
                    <img
                      src={q.img}
                      alt="Esquema del reactivo"
                      style={{
                        maxWidth: "100%",
                        maxHeight: "250px",
                        borderRadius: 8,
                        border: `1px solid ${C.border}`,
                      }}
                      onError={(e) => {
                        e.target.style.display = "none";
                      }}
                    />
                  </div>
                )}

                {q.diagram && (
                  <div
                    style={{
                      marginBottom: 16,
                      textAlign: "center",
                      width: "100%",
                      overflow: "hidden",
                    }}
                  >
                    {q.diagram}
                  </div>
                )}

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 6,
                  }}
                >
                  {q.opts.map((opt) => {
                    const isOk = opt === q.ans;
                    const isUser = opt === userAns;
                    let bg = C.bg,
                      bd = `1px solid ${C.border}`,
                      co = C.dim;

                    if (isOk) {
                      bg = C.teal + "22";
                      bd = `1px solid ${C.teal}`;
                      co = C.teal;
                    } else if (isUser && !isOk) {
                      bg = C.crimson + "22";
                      bd = `1px solid ${C.crimson}`;
                      co = C.crimson;
                    }

                    return (
                      <div
                        key={opt}
                        style={{
                          background: bg,
                          border: bd,
                          color: co,
                          borderRadius: 9,
                          padding: "10px 12px",
                          fontSize: 13,
                          fontWeight: 600,
                          fontFamily: "'DM Sans',sans-serif",
                        }}
                      >
                        {isOk ? "✓ " : ""}
                        {isUser && !isOk ? "✗ " : ""}
                        {renderMathText(opt)}
                      </div>
                    );
                  })}
                </div>

                {q.exp && (
                  <div
                    style={{
                      marginTop: 16,
                      paddingTop: 16,
                      borderTop: `1px solid ${C.border}`,
                    }}
                  >
                    <p
                      style={{
                        color: C.blue,
                        fontSize: 12,
                        fontWeight: 700,
                        marginBottom: 4,
                        fontFamily: "'DM Sans',sans-serif",
                      }}
                    >
                      JUSTIFICACIÓN:
                    </p>
                    <p
                      style={{
                        color: C.dim,
                        fontSize: 14,
                        lineHeight: 1.4,
                        fontFamily: "'DM Sans',sans-serif",
                      }}
                    >
                      {renderMathText(q.exp)}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  const q = queue[current];
  const lv = getLvl(q.id);
  const prog = ((current + 1) / queue.length) * 100;
  const answered = Object.keys(answers).length;

  return (
    <div style={{ minHeight: "100vh", background: C.bg, paddingBottom: 64 }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');*{box-sizing:border-box;margin:0;padding:0}::-webkit-scrollbar{width:5px;background:${C.bg}}::-webkit-scrollbar-thumb{background:${C.border};border-radius:99px}`}</style>

      <div style={{ maxWidth: 760, margin: "0 auto", padding: "24px 16px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          <button
            onClick={() => {
              setTimerOn(false);
              setMode("menu");
            }}
            style={{
              background: "none",
              border: "none",
              color: C.muted,
              cursor: "pointer",
              fontSize: 14,
              fontWeight: 600,
              fontFamily: "'DM Sans',sans-serif",
            }}
          >
            ✕ Salir
          </button>
          <div
            style={{
              color: timerWarning ? C.crimson : C.text,
              fontWeight: 700,
              fontSize: 16,
              fontFamily: "'DM Sans',sans-serif",
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            <span style={{ fontSize: 18 }}>⏱</span> {fmt(timeLeft)}
          </div>
          <button
            onClick={() => {
              setTimerOn(false);
              setMode("results");
            }}
            style={{
              background: C.surface,
              border: `1px solid ${C.border}`,
              color: C.text,
              padding: "6px 14px",
              borderRadius: 8,
              cursor: "pointer",
              fontSize: 13,
              fontWeight: 600,
              fontFamily: "'DM Sans',sans-serif",
            }}
          >
            Finalizar prueba
          </button>
        </div>

        <div
          style={{
            background: C.surface,
            height: 6,
            borderRadius: 99,
            overflow: "hidden",
            marginBottom: 24,
          }}
        >
          <div
            style={{
              width: `${prog}%`,
              background: lv.color,
              height: "100%",
              transition: "all 0.3s ease",
            }}
          />
        </div>

        <div
          style={{
            background: C.surface,
            border: `1px solid ${C.border}`,
            borderRadius: 20,
            padding: "32px 24px",
          }}
        >
          <div
            style={{ display: "flex", alignItems: "center", marginBottom: 20 }}
          >
            <span
              style={{
                background: lv.color + "22",
                color: lv.color,
                padding: "4px 10px",
                borderRadius: 6,
                fontSize: 12,
                fontWeight: 700,
                fontFamily: "'DM Sans',sans-serif",
              }}
            >
              {lv.label}
            </span>
            <span
              style={{
                marginLeft: "auto",
                color: C.muted,
                fontSize: 13,
                fontFamily: "'DM Sans',sans-serif",
              }}
            >
              Reactivo <b>{current + 1}</b> de {queue.length}
            </span>
          </div>

          <p
            style={{
              color: C.text,
              fontSize: 18,
              fontWeight: 600,
              marginBottom: q.img || q.diagram ? 16 : 24,
              lineHeight: 1.5,
              fontFamily: "'DM Sans',sans-serif",
            }}
          >
            {renderMathText(q.q)}
          </p>

          {q.img && (
            <div
              style={{
                marginBottom: 24,
                textAlign: "center",
                background: C.bg,
                padding: 10,
                borderRadius: 12,
                border: `1px solid ${C.border}`,
              }}
            >
              <img
                src={q.img}
                alt="Esquema del reactivo"
                style={{
                  maxWidth: "100%",
                  maxHeight: "300px",
                  borderRadius: 6,
                  objectFit: "contain",
                }}
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
            </div>
          )}

          {q.diagram && (
            <div
              style={{
                marginBottom: 24,
                textAlign: "center",
                width: "100%",
                overflow: "hidden",
              }}
            >
              {q.diagram}
            </div>
          )}

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 10,
              marginBottom: 24,
            }}
          >
            {q.opts.map((opt) => {
              const isSel = selected === opt;
              const isOk = opt === q.ans;
              let bg = C.bg,
                bd = `1px solid ${C.border}`,
                co = C.dim;

              if (confirmed && isSel && !isOk) {
                bg = C.crimson + "22";
                bd = `1px solid ${C.crimson}`;
                co = C.crimson;
              } else if (confirmed && isOk) {
                bg = C.teal + "0e";
                bd = `1px solid ${C.teal}55`;
                co = C.teal + "99";
              } else if (isSel) {
                bg = lv.color + "18";
                bd = `1px solid ${lv.color}`;
                co = lv.color;
              }

              return (
                <button
                  key={opt}
                  onClick={() => !confirmed && setSelected(opt)}
                  style={{
                    background: bg,
                    border: bd,
                    color: co,
                    borderRadius: 12,
                    padding: "16px 20px",
                    fontSize: 15,
                    fontWeight: 600,
                    cursor: confirmed ? "default" : "pointer",
                    textAlign: "left",
                    transition: "all 0.15s",
                    fontFamily: "'DM Sans',sans-serif",
                  }}
                >
                  {confirmed && isOk ? "✓ " : ""}
                  {confirmed && isSel && !isOk ? "✗ " : ""}
                  {renderMathText(opt)}
                </button>
              );
            })}
          </div>

          {confirmed && q.exp && (
            <div
              style={{
                marginBottom: 24,
                padding: 18,
                background: C.bg,
                border: `1px solid ${selected === q.ans ? C.teal : C.crimson}55`,
                borderRadius: 12,
              }}
            >
              <p
                style={{
                  color: C.dim,
                  fontSize: 12,
                  fontWeight: 700,
                  marginBottom: 8,
                  letterSpacing: 1,
                  fontFamily: "'DM Sans',sans-serif",
                }}
              >
                EXPLICACIÓN
              </p>
              <p
                style={{
                  color: C.text,
                  fontSize: 14,
                  lineHeight: 1.5,
                  fontFamily: "'DM Sans',sans-serif",
                }}
              >
                {renderMathText(q.exp)}
              </p>
            </div>
          )}

          <div style={{ display: "flex", gap: 12 }}>
            <button
              onClick={goPrev}
              disabled={current === 0}
              style={{
                flex: 1,
                padding: "14px",
                background: C.surface,
                color: C.text,
                border: `1px solid ${C.border}`,
                borderRadius: 12,
                cursor: current === 0 ? "not-allowed" : "pointer",
                opacity: current === 0 ? 0.4 : 1,
                fontSize: 14,
                fontWeight: 600,
                fontFamily: "'DM Sans',sans-serif",
              }}
            >
              ← Anterior
            </button>
            {!confirmed ? (
              <button
                onClick={confirmAnswer}
                disabled={!selected}
                style={{
                  flex: 2,
                  padding: "14px",
                  background: selected ? C.blue : C.surface,
                  color: selected ? "#fff" : C.muted,
                  border: selected ? "none" : `1px solid ${C.border}`,
                  borderRadius: 12,
                  cursor: selected ? "pointer" : "not-allowed",
                  fontSize: 14,
                  fontWeight: 700,
                  transition: "all 0.2s",
                  fontFamily: "'DM Sans',sans-serif",
                }}
              >
                Confirmar
              </button>
            ) : (
              <button
                onClick={goNext}
                style={{
                  flex: 2,
                  padding: "14px",
                  background: C.text,
                  color: C.bg,
                  border: "none",
                  borderRadius: 12,
                  cursor: "pointer",
                  fontSize: 14,
                  fontWeight: 700,
                  fontFamily: "'DM Sans',sans-serif",
                }}
              >
                {current === queue.length - 1
                  ? "Ver resultados finales"
                  : "Siguiente →"}
              </button>
            )}
          </div>
        </div>

        {/* Navegador inferior para saltar entre preguntas */}
        <div
          style={{
            marginTop: 24,
            background: C.surface,
            borderRadius: 16,
            padding: 20,
            border: `1px solid ${C.border}`,
          }}
        >
          <p
            style={{
              color: C.muted,
              fontSize: 12,
              marginBottom: 12,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: 1,
              fontFamily: "'DM Sans',sans-serif",
            }}
          >
            Navegador del Examen ({answered}/{queue.length})
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
            {queue.map((fq, i) => {
              const ans = answers[fq.id],
                isCurr = i === current;
              let bg = C.surface,
                co = C.dim,
                bdr = `1px solid ${C.border}`;
              if (isCurr) {
                bg = C.blue;
                co = "#fff";
                bdr = `1px solid ${C.blue}`;
              } else if (ans === fq.ans) {
                bg = C.teal + "22";
                co = C.teal;
                bdr = `1px solid ${C.teal}66`;
              } else if (ans) {
                bg = C.crimson + "22";
                co = C.crimson;
                bdr = `1px solid ${C.crimson}66`;
              }
              return (
                <button
                  key={fq.id}
                  onClick={() => {
                    setCurrent(i);
                    setSelected(answers[fq.id] || null);
                    setConfirmed(!!answers[fq.id]);
                  }}
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 8,
                    background: bg,
                    color: co,
                    border: bdr,
                    cursor: "pointer",
                    fontSize: 12,
                    fontWeight: isCurr ? 700 : 500,
                    fontFamily: "'DM Sans',sans-serif",
                    transition: "all 0.1s",
                  }}
                >
                  {i + 1}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
