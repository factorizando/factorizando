// Datos de la presentación: Fluidos (Física · UNAM)
// Estructura por subtema: Teoría → Ejemplos resueltos → Reactivos tipo UNAM.
// Subtemas: Densidad · Presión · Hidrostática · Pascal · Arquímedes · Gasto · Bernoulli → Resumen.

export const PRESENTACION = {
  id: "fluidos",
  titulo: "Fluidos",
  materia: "Física",
  examenes: ["UNAM"],
  subtema: "Hidrostática e hidrodinámica",
  slides: [
    {
      id: 0,
      tipo: "lienzo",
      bloques: [
        {
          tipo: "portada",
          kicker: "Física · UNAM",
          titulo: "Fluidos",
          subtitulo: "Densidad, presión, Pascal, Arquímedes, gasto y continuidad",
          figura: "flu-portada",
        },
      ],
    },
    {
      id: "densidad",
      tipo: "lienzo",
      etiqueta: "Masa en cada volumen",
      titulo: "Densidad",
      bloques: [
        {
          tipo: "formula",
          math: "\\rho = \\dfrac{m}{V}",
        },
        {
          tipo: "lista",
          items: [
            {
              math: "\\rho",
              texto: "densidad: masa entre volumen (kg/m³ o g/cm³)",
            },
            {
              math: "\\rho_{agua} = 1000\\ \\tfrac{kg}{m^3}",
              texto: "equivale a 1 g/cm³, valor de referencia",
            },
            {
              math: "\\rho < \\rho_{fluido}",
              texto: "si el cuerpo es menos denso que el fluido, flota",
            },
          ],
        },
        {
          tipo: "nota",
          texto: "La densidad indica qué tan «apretada» está la materia. Un cuerpo flota si es menos denso que el líquido; se hunde si es más denso. Por eso el aceite flota sobre el agua.",
        },
      ],
    },
    {
      id: "ej-densidad",
      tipo: "lienzo",
      etiqueta: "Masa entre volumen",
      titulo: "Ejemplo · Densidad",
      bloques: [
        {
          tipo: "destacado",
          texto: "Un objeto tiene una masa de 600 g y ocupa un volumen de 200 cm³. ¿Cuál es su densidad?",
        },
        {
          tipo: "formula",
          ancho: 12,
          math: "\\rho = \\dfrac{m}{V}",
        },
        {
          tipo: "nota",
          ancho: 12,
          revelar: true,
          etiqueta: "Por qué",
          texto: "Se divide la masa entre el volumen. Como el resultado (3 g/cm³) es mayor que la densidad del agua (1 g/cm³), este objeto se hundiría.",
        },
        {
          tipo: "formula",
          math: "\\rho = \\dfrac{600}{200} = 3\\ \\tfrac{\\text{g}}{\\text{cm}^3}",
        },
      ],
    },
    {
      id: "f1",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Fluidos · Densidad · Reactivo 1 / 3",
          enunciado: "La densidad de un cuerpo es la relación entre:",
          opciones: ["Su masa y su volumen", "Su peso y su área", "Su fuerza y su tiempo", "Su volumen y su masa"],
          correcta: 0,
          explicacion: "La densidad es la masa contenida en cada unidad de volumen: ρ = m/V.",
        },
      ],
    },
    {
      id: "f2",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Fluidos · Densidad · Reactivo 2 / 3",
          enunciado: "Un cuerpo tiene una masa de 600 g y un volumen de 200 cm³. ¿Cuál es su densidad?",
          opciones: ["3 g/cm³", "0.33 g/cm³", "120 000 g/cm³", "800 g/cm³"],
          correcta: 0,
          explicacion: "ρ = m/V = 600/200 = 3 g/cm³.",
        },
      ],
    },
    {
      id: "f3",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Fluidos · Densidad · Reactivo 3 / 3",
          enunciado: "Un objeto flota en el agua si su densidad es:",
          opciones: ["Menor que la del agua", "Mayor que la del agua", "Igual a su masa", "Igual a su volumen"],
          correcta: 0,
          explicacion: "Un cuerpo flota cuando es menos denso que el líquido: el empuje supera a su peso. Si es más denso, se hunde.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "flu-arquimedes",
        },
      ],
    },
    {
      id: "presion",
      tipo: "lienzo",
      etiqueta: "Fuerza repartida en un área",
      titulo: "Presión",
      bloques: [
        {
          tipo: "formula",
          math: "P = \\dfrac{F}{A}",
        },
        {
          tipo: "lista",
          items: [
            {
              math: "P = \\dfrac{F}{A}",
              texto: "fuerza perpendicular entre el área sobre la que actúa",
            },
            {
              math: "[\\,P\\,] = \\text{Pa}",
              texto: "se mide en pascales: 1 Pa = 1 N/m²",
            },
            {
              math: "A \\downarrow \\Rightarrow P \\uparrow",
              texto: "a menor área, mayor presión (con la misma fuerza)",
            },
          ],
        },
        {
          tipo: "nota",
          texto: "Por eso un cuchillo afilado corta mejor: concentra la fuerza en un área diminuta y la presión se dispara. Lo contrario que unas raquetas de nieve, que reparten el peso.",
        },
      ],
    },
    {
      id: "ej-presion",
      tipo: "lienzo",
      etiqueta: "Fuerza repartida en un área",
      titulo: "Ejemplo · Presión",
      bloques: [
        {
          tipo: "destacado",
          texto: "Una caja ejerce sobre el suelo una fuerza (su peso) de 300 N a través de una base de 1.5 m². ¿Qué presión ejerce?",
        },
        {
          tipo: "formula",
          ancho: 12,
          math: "P = \\dfrac{F}{A}",
        },
        {
          tipo: "nota",
          ancho: 12,
          revelar: true,
          etiqueta: "Por qué",
          texto: "La presión es la fuerza dividida entre el área de contacto. Con la misma fuerza, si la base fuera más pequeña la presión sería mayor.",
        },
        {
          tipo: "formula",
          math: "P = \\dfrac{300}{1.5} = 200\\ \\text{Pa}",
        },
      ],
    },
    {
      id: "f4",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Fluidos · Presión · Reactivo 1 / 5",
          enunciado: "La presión se define como:",
          opciones: [
            "La fuerza por unidad de área",
            "La fuerza por la distancia",
            "La masa por el volumen",
            "La fuerza por el tiempo",
          ],
          correcta: 0,
          explicacion: "La presión es la fuerza perpendicular repartida sobre el área en que actúa: P = F/A.",
        },
      ],
    },
    {
      id: "f5",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Fluidos · Presión · Reactivo 2 / 5",
          enunciado: "Una fuerza de 200 N actúa sobre un área de 4 m². ¿Cuál es la presión?",
          opciones: ["50 Pa", "800 Pa", "0.02 Pa", "204 Pa"],
          correcta: 0,
          explicacion: "P = F/A = 200/4 = 50 Pa.",
        },
      ],
    },
    {
      id: "f6",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Fluidos · Presión · Reactivo 3 / 5",
          enunciado: "¿En qué unidad se mide la presión en el Sistema Internacional?",
          opciones: ["Pascal (Pa)", "Newton (N)", "Joule (J)", "Watt (W)"],
          correcta: 0,
          explicacion: "La presión se mide en pascales. 1 Pa = 1 N/m².",
        },
      ],
    },
    {
      id: "f7",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Fluidos · Presión · Reactivo 4 / 5",
          enunciado: "Para una misma fuerza, si el área sobre la que se aplica disminuye, la presión:",
          opciones: ["Aumenta", "Disminuye", "No cambia", "Se vuelve cero"],
          correcta: 0,
          explicacion: "Como P = F/A, al reducir el área con la misma fuerza la presión aumenta. Por eso un objeto puntiagudo ejerce mucha presión.",
        },
      ],
    },
    {
      id: "f18",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Fluidos · Presión · Reactivo 5 / 5",
          enunciado: "El instrumento que se usa para medir la presión atmosférica es el:",
          opciones: ["Barómetro", "Termómetro", "Amperímetro", "Dinamómetro"],
          correcta: 0,
          explicacion: "El barómetro mide la presión atmosférica. El termómetro mide temperatura, el amperímetro corriente y el dinamómetro fuerza.",
        },
      ],
    },
    {
      id: "hidrostatica",
      tipo: "lienzo",
      etiqueta: "La presión dentro de un líquido",
      titulo: "Presión Hidrostática",
      bloques: [
        {
          tipo: "destacado",
          texto: "Dentro de un líquido en reposo, la presión aumenta con la profundidad. No depende de la forma del recipiente, solo de qué tan hondo estés.",
        },
        {
          tipo: "figura",
          ancho: 6,
          clave: "flu-presion",
        },
        {
          tipo: "formula",
          ancho: 6,
          math: "P = \\rho\\,g\\,h",
        },
        {
          tipo: "nota",
          ancho: 12,
          revelar: true,
          etiqueta: "Por qué",
          texto: "Cuanto más profundo, más líquido tienes encima empujando, así que mayor presión. Por eso a los buzos les duelen los oídos al bajar y las presas son más gruesas en la base.",
        },
        {
          tipo: "formula",
          math: "P \\propto h \\quad (\\text{a igual líquido y gravedad})",
        },
      ],
    },
    {
      id: "ej-hidrostatica",
      tipo: "lienzo",
      etiqueta: "Presión a cierta profundidad",
      titulo: "Ejemplo · Presión hidrostática",
      bloques: [
        {
          tipo: "destacado",
          texto: "¿Cuál es la presión hidrostática a 10 m de profundidad en agua? (ρ = 1000 kg/m³, g = 10 m/s²)",
        },
        {
          tipo: "figura",
          ancho: 6,
          clave: "flu-presion",
        },
        {
          tipo: "formula",
          ancho: 6,
          math: "P = \\rho\\,g\\,h",
        },
        {
          tipo: "nota",
          ancho: 12,
          revelar: true,
          etiqueta: "Por qué",
          texto: "Se multiplican densidad, gravedad y profundidad. El resultado es la presión que ejerce solo la columna de agua (sin contar la atmósfera).",
        },
        {
          tipo: "formula",
          math: "P = (1000)(10)(10) = 100\\,000\\ \\text{Pa} = 100\\ \\text{kPa}",
        },
      ],
    },
    {
      id: "f8",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Fluidos · Presión hidrostática · Reactivo 1 / 2",
          enunciado: "Dentro de un líquido en reposo, la presión hidrostática aumenta con:",
          opciones: ["La profundidad", "El color del líquido", "El ancho del recipiente", "La temperatura ambiente"],
          correcta: 0,
          explicacion: "P = ρgh: a mayor profundidad (h), mayor presión, porque hay más líquido encima. No depende de la forma del recipiente.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "flu-presion",
        },
      ],
    },
    {
      id: "f9",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Fluidos · Presión hidrostática · Reactivo 2 / 2",
          enunciado: "¿Cuál es la presión hidrostática a 20 m de profundidad en agua? (ρ = 1000 kg/m³, g = 10 m/s²)",
          opciones: ["200 000 Pa", "2000 Pa", "20 000 Pa", "2 000 000 Pa"],
          correcta: 0,
          explicacion: "P = ρgh = (1000)(10)(20) = 200 000 Pa.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "flu-presion",
        },
      ],
    },
    {
      id: "pascal",
      tipo: "lienzo",
      etiqueta: "La prensa hidráulica",
      titulo: "Principio de Pascal",
      bloques: [
        {
          tipo: "destacado",
          texto: "La presión que se aplica a un fluido encerrado se transmite por igual a todos sus puntos y en todas las direcciones. Es la base de la prensa y los frenos hidráulicos.",
        },
        {
          tipo: "figura",
          ancho: 6,
          clave: "flu-pascal",
        },
        {
          tipo: "formula",
          ancho: 6,
          math: "\\dfrac{F_1}{A_1} = \\dfrac{F_2}{A_2}",
        },
        {
          tipo: "nota",
          ancho: 12,
          revelar: true,
          etiqueta: "Por qué",
          texto: "Como la presión es la misma en ambos pistones, con una fuerza pequeña sobre un área pequeña puedes levantar un peso enorme en el área grande. Es un multiplicador de fuerza.",
        },
        {
          tipo: "formula",
          math: "F_2 = F_1\\,\\dfrac{A_2}{A_1}",
        },
      ],
    },
    {
      id: "ej-pascal",
      tipo: "lienzo",
      etiqueta: "Multiplicar la fuerza",
      titulo: "Ejemplo · Prensa hidráulica",
      bloques: [
        {
          tipo: "destacado",
          texto: "En una prensa hidráulica se aplican 20 N sobre un pistón de 5 cm². ¿Qué fuerza se obtiene en un pistón de 50 cm²?",
        },
        {
          tipo: "figura",
          ancho: 6,
          clave: "flu-pascal",
        },
        {
          tipo: "formula",
          ancho: 6,
          math: "\\dfrac{F_1}{A_1} = \\dfrac{F_2}{A_2}",
        },
        {
          tipo: "nota",
          ancho: 12,
          revelar: true,
          etiqueta: "Por qué",
          texto: "La presión es la misma en ambos pistones. Como el área grande es 10 veces mayor, la fuerza también se multiplica por 10.",
        },
        {
          tipo: "formula",
          math: "F_2 = 20\\cdot\\dfrac{50}{5} = 200\\ \\text{N}",
        },
      ],
    },
    {
      id: "f10",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Fluidos · Principio de Pascal · Reactivo 1 / 2",
          enunciado: "El principio de Pascal establece que la presión aplicada a un fluido encerrado:",
          opciones: [
            "Se transmite por igual en todas direcciones",
            "Solo actúa hacia abajo",
            "Disminuye con la distancia",
            "Solo se transmite en línea recta",
          ],
          correcta: 0,
          explicacion: "La presión sobre un fluido confinado se transmite sin disminuir a todos sus puntos y en todas direcciones. Es la base de la prensa hidráulica.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "flu-pascal",
        },
      ],
    },
    {
      id: "f11",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Fluidos · Principio de Pascal · Reactivo 2 / 2",
          enunciado: "En una prensa hidráulica se aplican 20 N sobre un pistón de 5 cm². ¿Qué fuerza se obtiene en otro pistón de 50 cm²?",
          opciones: ["200 N", "2 N", "20 N", "100 N"],
          correcta: 0,
          explicacion: "F₂ = F₁·(A₂/A₁) = 20·(50/5) = 20·10 = 200 N.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "flu-pascal",
        },
      ],
    },
    {
      id: "arquimedes",
      tipo: "lienzo",
      etiqueta: "La fuerza de empuje",
      titulo: "Principio de Arquímedes",
      bloques: [
        {
          tipo: "destacado",
          texto: "Todo cuerpo sumergido (total o parcialmente) en un fluido recibe un empuje hacia arriba igual al peso del fluido que desplaza.",
        },
        {
          tipo: "figura",
          ancho: 6,
          clave: "flu-arquimedes",
        },
        {
          tipo: "formula",
          ancho: 6,
          math: "E = \\rho_{fluido}\\,g\\,V_{desplazado}",
        },
        {
          tipo: "nota",
          ancho: 12,
          revelar: true,
          etiqueta: "Por qué",
          texto: "Si el empuje iguala o supera al peso, el cuerpo flota; si es menor, se hunde. Por eso un barco de acero flota: desplaza muchísima agua y el empuje compensa su peso.",
        },
        {
          tipo: "formula",
          math: "E \\ge P \\Rightarrow \\text{flota}, \\qquad E < P \\Rightarrow \\text{se hunde}",
        },
      ],
    },
    {
      id: "ej-arquimedes",
      tipo: "lienzo",
      etiqueta: "El peso del fluido desplazado",
      titulo: "Ejemplo · Fuerza de empuje",
      bloques: [
        {
          tipo: "destacado",
          texto: "Un cuerpo se sumerge por completo y desplaza 0.005 m³ de agua. ¿Cuál es el empuje que recibe? (ρ = 1000 kg/m³, g = 10 m/s²)",
        },
        {
          tipo: "figura",
          ancho: 6,
          clave: "flu-arquimedes",
        },
        {
          tipo: "formula",
          ancho: 6,
          math: "E = \\rho_{fluido}\\,g\\,V_{desplazado}",
        },
        {
          tipo: "nota",
          ancho: 12,
          revelar: true,
          etiqueta: "Por qué",
          texto: "El empuje es igual al peso del agua desplazada: se multiplican la densidad del agua, la gravedad y el volumen sumergido. Si este empuje supera el peso del cuerpo, flota.",
        },
        {
          tipo: "formula",
          math: "E = (1000)(10)(0.005) = 50\\ \\text{N}",
        },
      ],
    },
    {
      id: "f12",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Fluidos · Principio de Arquímedes · Reactivo 1 / 2",
          enunciado: "Según el principio de Arquímedes, el empuje sobre un cuerpo sumergido es igual al peso del:",
          opciones: ["Fluido que desplaza", "Propio cuerpo", "Aire sobre el fluido", "Recipiente"],
          correcta: 0,
          explicacion: "El empuje hacia arriba es igual al peso del fluido desplazado por el cuerpo: E = ρ_fluido·g·V_desplazado.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "flu-arquimedes",
        },
      ],
    },
    {
      id: "f13",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Fluidos · Principio de Arquímedes · Reactivo 2 / 2",
          enunciado: "Un cuerpo sumergido desplaza 0.002 m³ de agua. ¿Cuál es el empuje que recibe? (ρ = 1000 kg/m³, g = 10 m/s²)",
          opciones: ["20 N", "2 N", "200 N", "0.02 N"],
          correcta: 0,
          explicacion: "E = ρ·g·V = (1000)(10)(0.002) = 20 N.",
        },
      ],
    },
    {
      id: "gasto",
      tipo: "lienzo",
      etiqueta: "Fluidos en movimiento",
      titulo: "Gasto y Continuidad",
      bloques: [
        {
          tipo: "formula",
          math: "Q = A\\,v = \\dfrac{V}{t}",
        },
        {
          tipo: "figura",
          ancho: 6,
          clave: "flu-continuidad",
        },
        {
          tipo: "lista",
          ancho: 6,
          items: [
            {
              math: "Q = \\dfrac{V}{t}",
              texto: "gasto o caudal: volumen que pasa por segundo (m³/s)",
            },
            {
              math: "Q = A\\,v",
              texto: "también, área de la tubería por velocidad del fluido",
            },
            {
              math: "A_1 v_1 = A_2 v_2",
              texto: "continuidad: si el tubo se angosta, el fluido se acelera",
            },
          ],
        },
        {
          tipo: "nota",
          texto: "El gasto se conserva: en un tubo más estrecho el fluido va más rápido. Por eso al tapar parte de una manguera con el dedo, el chorro sale con más velocidad.",
        },
      ],
    },
    {
      id: "ej-caudal",
      tipo: "lienzo",
      etiqueta: "Caudal y tiempo",
      titulo: "Ejemplo · Gasto (llenar una alberca)",
      bloques: [
        {
          tipo: "destacado",
          texto: "Una alberca de 50 m × 25 m × 3 m se llena con un tubo de 0.4 m de diámetro por el que el agua fluye a 4 m/s. ¿En cuánto tiempo se llena (aprox.)?",
        },
        {
          tipo: "figura",
          ancho: 6,
          clave: "flu-continuidad",
        },
        {
          tipo: "formula",
          ancho: 6,
          math: "Q = A\\,v, \\qquad t = \\dfrac{V}{Q}",
        },
        {
          tipo: "nota",
          ancho: 12,
          revelar: true,
          etiqueta: "Por qué",
          texto: "Primero el volumen de la alberca y el área del tubo (A = πr²). El caudal es A·v, y el tiempo es el volumen entre el caudal. Conviene pasarlo a horas al final.",
        },
        {
          tipo: "formula",
          math: "V = 3750\\ \\text{m}^3,\\ Q \\approx 0.5\\ \\tfrac{\\text{m}^3}{\\text{s}} \\;\\Rightarrow\\; t \\approx 7460\\ \\text{s} \\approx 2.07\\ \\text{h}",
        },
      ],
    },
    {
      id: "f14",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Fluidos · Gasto y continuidad · Reactivo 1 / 3",
          enunciado: "Cuando un líquido pasa de una tubería ancha a una más estrecha, su velocidad:",
          opciones: ["Aumenta", "Disminuye", "No cambia", "Se vuelve cero"],
          correcta: 0,
          explicacion: "Por la ecuación de continuidad (A·v constante), al reducirse el área la velocidad debe aumentar para mantener el mismo gasto.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "flu-continuidad",
        },
      ],
    },
    {
      id: "f15",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Fluidos · Gasto y continuidad · Reactivo 2 / 3",
          enunciado: "Por una tubería de 10 cm² de sección el agua va a 2 m/s. Al pasar a una sección de 5 cm², su velocidad será:",
          opciones: ["4 m/s", "1 m/s", "2 m/s", "10 m/s"],
          correcta: 0,
          explicacion: "A₁v₁ = A₂v₂ → v₂ = (A₁v₁)/A₂ = (10·2)/5 = 4 m/s.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "flu-continuidad",
        },
      ],
    },
    {
      id: "f16",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Fluidos · Gasto y continuidad · Reactivo 3 / 3",
          enunciado: "El gasto o caudal de un fluido se define como:",
          opciones: [
            "El volumen que pasa por unidad de tiempo",
            "La presión en el fondo",
            "La masa total del fluido",
            "La densidad por la altura",
          ],
          correcta: 0,
          explicacion: "El gasto es el volumen de fluido que atraviesa una sección por segundo: Q = V/t = A·v. Se mide en m³/s.",
        },
      ],
    },
    {
      id: "bernoulli",
      tipo: "lienzo",
      etiqueta: "Velocidad y presión",
      titulo: "Principio de Bernoulli",
      bloques: [
        {
          tipo: "destacado",
          texto: "En un fluido en movimiento, donde la velocidad es mayor, la presión es menor, y viceversa. La energía total del fluido se conserva.",
        },
        {
          tipo: "formula",
          ancho: 12,
          math: "v \\uparrow \\;\\Rightarrow\\; P \\downarrow",
        },
        {
          tipo: "nota",
          ancho: 12,
          revelar: true,
          etiqueta: "Por qué",
          texto: "Explica por qué vuelan los aviones: el aire pasa más rápido por encima del ala (menor presión arriba) que por debajo, y la diferencia de presión genera la sustentación.",
        },
        {
          tipo: "formula",
          math: "P + \\tfrac12 \\rho v^2 + \\rho g h = \\text{constante}",
        },
      ],
    },
    {
      id: "ej-bernoulli",
      tipo: "lienzo",
      etiqueta: "Por qué vuela un avión",
      titulo: "Ejemplo · Principio de Bernoulli",
      bloques: [
        {
          tipo: "destacado",
          texto: "El aire pasa más rápido por encima del ala de un avión que por debajo. ¿Dónde es menor la presión y hacia dónde apunta la fuerza resultante?",
        },
        {
          tipo: "formula",
          ancho: 12,
          math: "v \\uparrow \\;\\Rightarrow\\; P \\downarrow",
        },
        {
          tipo: "nota",
          ancho: 12,
          revelar: true,
          etiqueta: "Por qué",
          texto: "Donde el aire va más rápido (arriba del ala) la presión es menor; abajo, donde va más lento, la presión es mayor. Esa diferencia de presión empuja el ala hacia arriba: es la sustentación que mantiene al avión en vuelo.",
        },
        {
          tipo: "formula",
          math: "P_{abajo} > P_{arriba} \\;\\Rightarrow\\; \\text{fuerza hacia arriba}",
        },
      ],
    },
    {
      id: "f17",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Fluidos · Principio de Bernoulli · Reactivo 1 / 1",
          enunciado: "Según el principio de Bernoulli, donde un fluido se mueve más rápido, su presión es:",
          opciones: ["Menor", "Mayor", "La misma", "Infinita"],
          correcta: 0,
          explicacion: "Bernoulli relaciona velocidad y presión: a mayor velocidad del fluido, menor presión. Así se explica la sustentación de las alas de un avión.",
        },
      ],
    },
    {
      id: "resumen",
      tipo: "lienzo",
      etiqueta: "Claves de los fluidos",
      titulo: "Resumen",
      bloques: [
        {
          tipo: "lista",
          items: [
            {
              math: "\\rho = \\tfrac{m}{V}",
              texto: "densidad: el cuerpo flota si es menos denso que el fluido",
            },
            {
              math: "P = \\tfrac{F}{A}",
              texto: "presión: fuerza por área (pascales)",
            },
            {
              math: "P = \\rho g h",
              texto: "presión hidrostática: crece con la profundidad",
            },
            {
              math: "\\tfrac{F_1}{A_1} = \\tfrac{F_2}{A_2}",
              texto: "Pascal: la prensa hidráulica multiplica la fuerza",
            },
            {
              math: "E = \\rho_f\\, g\\, V",
              texto: "Arquímedes: empuje = peso del fluido desplazado",
            },
            {
              math: "A_1 v_1 = A_2 v_2",
              texto: "continuidad: el tubo estrecho acelera el fluido",
            },
            {
              titulo: "Bernoulli",
              texto: "más velocidad del fluido ⇒ menos presión (vuelan los aviones)",
            },
            {
              titulo: "Gasto",
              texto: "Q = V/t = A·v, el volumen que pasa por segundo",
            },
          ],
        },
      ],
    },
  ],
};
