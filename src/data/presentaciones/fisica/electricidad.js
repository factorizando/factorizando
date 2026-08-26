// Datos de la presentación: Electricidad y Magnetismo (Física · UNAM)
// Estructura por subtema: Teoría → Ejemplos resueltos → Reactivos tipo UNAM.
// Subtemas: Carga · Coulomb · Corriente · Ohm · Circuitos · Potencia · Magnetismo → Resumen.

export const PRESENTACION = {
  id: "electricidad",
  titulo: "Electricidad y Magnetismo",
  materia: "Física",
  subtema: "Electromagnetismo",
  slides: [
    {
      id: 0,
      tipo: "lienzo",
      bloques: [
        {
          tipo: "portada",
          kicker: "Física · UNAM",
          titulo: "Electricidad y Magnetismo",
          subtitulo: "Carga, Ley de Coulomb, Ley de Ohm, circuitos, potencia y magnetismo",
          figura: "ele-portada",
        },
      ],
    },
    {
      id: "carga",
      tipo: "lienzo",
      etiqueta: "Positiva y negativa",
      titulo: "Carga Eléctrica",
      bloques: [
        {
          tipo: "formula",
          math: "[\\,q\\,] = \\text{C (coulomb)}",
        },
        {
          tipo: "figura",
          ancho: 6,
          clave: "ele-coulomb",
        },
        {
          tipo: "lista",
          ancho: 6,
          items: [
            {
              math: "+\\ \\text{y}\\ -",
              texto: "hay dos tipos de carga: positiva y negativa",
            },
            {
              math: "\\text{igual} \\to \\text{repele}",
              texto: "cargas del mismo signo se repelen",
            },
            {
              math: "\\text{distinto} \\to \\text{atrae}",
              texto: "cargas de signo contrario se atraen",
            },
            {
              math: "\\text{se conserva}",
              texto: "la carga total no se crea ni se destruye",
            },
          ],
        },
        {
          tipo: "nota",
          texto: "La unidad de carga es el coulomb (C). Los materiales conductores (metales) dejan fluir las cargas; los aislantes (plástico, vidrio) no.",
        },
      ],
    },
    {
      id: "ej-carga",
      tipo: "lienzo",
      etiqueta: "El signo decide la fuerza",
      titulo: "Ejemplo · Atracción y repulsión",
      bloques: [
        {
          tipo: "destacado",
          texto: "Frotas dos globos con tu cabello y ambos quedan cargados negativamente. Al acercarlos, ¿se atraen o se repelen?",
        },
        {
          tipo: "figura",
          ancho: 6,
          clave: "ele-coulomb",
        },
        {
          tipo: "formula",
          ancho: 6,
          math: "\\text{igual} \\to \\text{repele}, \\quad \\text{distinto} \\to \\text{atrae}",
        },
        {
          tipo: "nota",
          ancho: 12,
          revelar: true,
          etiqueta: "Por qué",
          texto: "Las dos cargas son del mismo signo (ambos globos negativos), así que se repelen y los globos tienden a separarse. Solo cargas de signo contrario se atraerían.",
        },
        {
          tipo: "formula",
          math: "(-)\\ \\text{y}\\ (-) \\Rightarrow \\text{se repelen}",
        },
      ],
    },
    {
      id: "el1",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Electricidad · Carga eléctrica · Reactivo 1 / 4",
          enunciado: "Dos cargas eléctricas del mismo signo, al acercarse:",
          opciones: ["Se repelen", "Se atraen", "No interactúan", "Se neutralizan"],
          correcta: 0,
          explicacion: "Cargas del mismo signo (ambas + o ambas −) se repelen. Solo las de signo opuesto se atraen.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "ele-coulomb",
        },
      ],
    },
    {
      id: "el2",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Electricidad · Carga eléctrica · Reactivo 2 / 4",
          enunciado: "Una carga positiva y una negativa colocadas cerca:",
          opciones: ["Se atraen", "Se repelen", "Permanecen inmóviles", "Pierden su carga"],
          correcta: 0,
          explicacion: "Las cargas de signo contrario se atraen. Es el principio detrás de muchísimos fenómenos eléctricos.",
        },
      ],
    },
    {
      id: "el4",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Electricidad · Carga eléctrica · Reactivo 3 / 4",
          enunciado: "¿En qué unidad se mide la carga eléctrica?",
          opciones: ["Coulomb (C)", "Ampere (A)", "Volt (V)", "Ohm (Ω)"],
          correcta: 0,
          explicacion: "La carga eléctrica se mide en coulombs (C). El ampere mide corriente, el volt voltaje y el ohm resistencia.",
        },
      ],
    },
    {
      id: "el16",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Electricidad · Carga eléctrica · Reactivo 4 / 4",
          enunciado: "Un material que permite el paso fácil de la corriente eléctrica es un:",
          opciones: ["Conductor", "Aislante", "Dieléctrico", "Imán"],
          correcta: 0,
          explicacion: "Los conductores (como los metales) dejan fluir las cargas con facilidad. Los aislantes (plástico, vidrio) se oponen a su paso.",
        },
      ],
    },
    {
      id: "coulomb",
      tipo: "lienzo",
      etiqueta: "La fuerza entre cargas",
      titulo: "Ley de Coulomb",
      bloques: [
        {
          tipo: "destacado",
          texto: "La fuerza eléctrica entre dos cargas es proporcional al producto de las cargas e inversamente proporcional al cuadrado de la distancia que las separa.",
        },
        {
          tipo: "figura",
          ancho: 6,
          clave: "ele-coulomb",
        },
        {
          tipo: "formula",
          ancho: 6,
          math: "F = k\\,\\dfrac{q_1\\,q_2}{r^2}",
        },
        {
          tipo: "nota",
          ancho: 12,
          revelar: true,
          etiqueta: "Por qué",
          texto: "Tiene la misma forma que la gravitación: si la distancia se duplica, la fuerza baja a la cuarta parte. La constante k vale aproximadamente 9 × 10⁹ N·m²/C².",
        },
        {
          tipo: "formula",
          math: "r \\to 2r \\;\\Rightarrow\\; F \\to \\dfrac{F}{4}",
        },
      ],
    },
    {
      id: "ej-coulomb",
      tipo: "lienzo",
      etiqueta: "Fuerza entre dos cargas",
      titulo: "Ejemplo · Ley de Coulomb",
      bloques: [
        {
          tipo: "destacado",
          texto: "Dos cargas de 2 × 10⁻⁶ C y 3 × 10⁻⁶ C están separadas 0.10 m. ¿Cuál es la fuerza eléctrica entre ellas? (k = 9 × 10⁹ N·m²/C²)",
        },
        {
          tipo: "figura",
          ancho: 6,
          clave: "ele-coulomb",
        },
        {
          tipo: "formula",
          ancho: 6,
          math: "F = k\\,\\dfrac{q_1 q_2}{r^2}",
        },
        {
          tipo: "nota",
          ancho: 12,
          revelar: true,
          etiqueta: "Por qué",
          texto: "Se sustituyen las cargas, la distancia (al cuadrado) y la constante k. El producto de las cargas va en el numerador y el cuadrado de la distancia en el denominador.",
        },
        {
          tipo: "formula",
          math: "F = (9\\times 10^9)\\dfrac{(2\\times 10^{-6})(3\\times 10^{-6})}{(0.1)^2} = 5.4\\ \\text{N}",
        },
      ],
    },
    {
      id: "el3",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Electricidad · Ley de Coulomb · Reactivo 1 / 1",
          enunciado: "Según la ley de Coulomb, si se duplica la distancia entre dos cargas, la fuerza entre ellas se vuelve:",
          opciones: ["La cuarta parte", "La mitad", "El doble", "El cuádruple"],
          correcta: 0,
          explicacion: "La fuerza es inversamente proporcional al cuadrado de la distancia. Al duplicar r, se divide entre 2² = 4.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "ele-coulomb",
        },
      ],
    },
    {
      id: "corriente",
      tipo: "lienzo",
      etiqueta: "Cargas en movimiento",
      titulo: "Corriente Eléctrica",
      bloques: [
        {
          tipo: "formula",
          math: "I = \\dfrac{Q}{t}",
        },
        {
          tipo: "lista",
          items: [
            {
              math: "I",
              texto: "corriente: carga que pasa por unidad de tiempo",
            },
            {
              math: "[\\,I\\,] = \\text{A}",
              texto: "se mide en amperes: 1 A = 1 C/s",
            },
            {
              math: "V",
              texto: "voltaje o diferencia de potencial: «empuja» a las cargas (volts)",
            },
          ],
        },
        {
          tipo: "nota",
          texto: "El voltaje es como la «presión» que impulsa a las cargas por el circuito; la corriente es el flujo de esas cargas. Sin diferencia de potencial no hay corriente.",
        },
      ],
    },
    {
      id: "ej-corriente",
      tipo: "lienzo",
      etiqueta: "Carga que fluye por segundo",
      titulo: "Ejemplo · Corriente eléctrica",
      bloques: [
        {
          tipo: "destacado",
          texto: "Por un cable pasan 60 C de carga en 12 s. ¿Cuál es la corriente eléctrica?",
        },
        {
          tipo: "formula",
          ancho: 12,
          math: "I = \\dfrac{Q}{t}",
        },
        {
          tipo: "nota",
          ancho: 12,
          revelar: true,
          etiqueta: "Por qué",
          texto: "La corriente es la carga dividida entre el tiempo que tarda en pasar. El resultado está en amperes (1 A = 1 C/s).",
        },
        {
          tipo: "formula",
          math: "I = \\dfrac{60}{12} = 5\\ \\text{A}",
        },
      ],
    },
    {
      id: "el5",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Electricidad · Corriente eléctrica · Reactivo 1 / 2",
          enunciado: "La corriente eléctrica se define como:",
          opciones: [
            "La carga que fluye por unidad de tiempo",
            "La resistencia del cable",
            "La energía almacenada",
            "El número de cargas en reposo",
          ],
          correcta: 0,
          explicacion: "La corriente es la cantidad de carga que atraviesa un punto por segundo: I = Q/t.",
        },
      ],
    },
    {
      id: "el6",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Electricidad · Corriente eléctrica · Reactivo 2 / 2",
          enunciado: "¿En qué unidad se mide la corriente eléctrica?",
          opciones: ["Ampere (A)", "Volt (V)", "Watt (W)", "Coulomb (C)"],
          correcta: 0,
          explicacion: "La corriente se mide en amperes. 1 A equivale a 1 coulomb por segundo.",
        },
      ],
    },
    {
      id: "ohm",
      tipo: "lienzo",
      etiqueta: "Voltaje, corriente y resistencia",
      titulo: "Ley de Ohm",
      bloques: [
        {
          tipo: "destacado",
          texto: "En muchos materiales, el voltaje aplicado es igual a la corriente por la resistencia. La resistencia se opone al paso de la corriente.",
        },
        {
          tipo: "figura",
          ancho: 6,
          clave: "ele-circuito",
        },
        {
          tipo: "formula",
          ancho: 6,
          math: "V = I\\,R",
        },
        {
          tipo: "nota",
          ancho: 12,
          revelar: true,
          etiqueta: "Por qué",
          texto: "Con un mismo voltaje, a mayor resistencia menor corriente. La resistencia se mide en ohms (Ω). De aquí se despeja cualquiera de las tres cantidades.",
        },
        {
          tipo: "formula",
          math: "I = \\dfrac{V}{R}, \\qquad R = \\dfrac{V}{I}",
        },
      ],
    },
    {
      id: "ej-ohm",
      tipo: "lienzo",
      etiqueta: "Hallar el voltaje",
      titulo: "Ejemplo · Ley de Ohm",
      bloques: [
        {
          tipo: "destacado",
          texto: "Por un cable con resistencia de 10 Ω circula una corriente de 10 A. ¿Cuál es el voltaje en el cable?",
        },
        {
          tipo: "figura",
          ancho: 6,
          clave: "ele-circuito",
        },
        {
          tipo: "formula",
          ancho: 6,
          math: "V = I\\,R",
        },
        {
          tipo: "nota",
          ancho: 12,
          revelar: true,
          etiqueta: "Por qué",
          texto: "La ley de Ohm relaciona las tres cantidades directamente. Solo se multiplican la corriente y la resistencia.",
        },
        {
          tipo: "formula",
          math: "V = (10)(10) = 100\\ \\text{V}",
        },
      ],
    },
    {
      id: "el7",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Electricidad · Ley de Ohm · Reactivo 1 / 3",
          enunciado: "Si a una resistencia de 4 Ω se le aplica un voltaje de 12 V, ¿qué corriente circula?",
          opciones: ["3 A", "48 A", "0.33 A", "8 A"],
          correcta: 0,
          explicacion: "De la ley de Ohm, I = V/R = 12/4 = 3 A.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "ele-circuito",
        },
      ],
    },
    {
      id: "el8",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Electricidad · Ley de Ohm · Reactivo 2 / 3",
          enunciado: "Por un cable de resistencia 10 Ω circula una corriente de 10 A. ¿Cuál es el voltaje?",
          opciones: ["100 V", "1 V", "20 V", "10 V"],
          correcta: 0,
          explicacion: "V = I·R = (10)(10) = 100 V.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "ele-circuito",
        },
      ],
    },
    {
      id: "el9",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Electricidad · Ley de Ohm · Reactivo 3 / 3",
          enunciado: "Si un voltaje de 20 V produce una corriente de 4 A, ¿cuál es la resistencia?",
          opciones: ["5 Ω", "80 Ω", "0.2 Ω", "24 Ω"],
          correcta: 0,
          explicacion: "R = V/I = 20/4 = 5 Ω.",
        },
      ],
    },
    {
      id: "circuitos",
      tipo: "lienzo",
      etiqueta: "Resistencia equivalente",
      titulo: "Circuitos en Serie y Paralelo",
      bloques: [
        {
          tipo: "destacado",
          texto: "Las resistencias se pueden conectar una tras otra (serie) o en ramas separadas (paralelo). Cada arreglo combina la resistencia de forma distinta.",
        },
        {
          tipo: "figura",
          ancho: 6,
          clave: "ele-serie-paralelo",
        },
        {
          tipo: "formula",
          ancho: 6,
          math: "R_{serie} = R_1 + R_2 + \\cdots",
        },
        {
          tipo: "nota",
          ancho: 12,
          revelar: true,
          etiqueta: "Por qué",
          texto: "En serie la corriente es la misma en todos y las resistencias se suman. En paralelo el voltaje es el mismo en cada rama y la resistencia total es menor que la más pequeña.",
        },
        {
          tipo: "formula",
          math: "\\dfrac{1}{R_{paralelo}} = \\dfrac{1}{R_1} + \\dfrac{1}{R_2} + \\cdots",
        },
      ],
    },
    {
      id: "ej-serie",
      tipo: "lienzo",
      etiqueta: "Se suman",
      titulo: "Ejemplo 1 · Resistencias en serie",
      bloques: [
        {
          tipo: "destacado",
          texto: "Dos resistencias de 4 Ω y 6 Ω se conectan en serie. ¿Cuál es la resistencia total?",
        },
        {
          tipo: "formula",
          ancho: 12,
          math: "R_{serie} = R_1 + R_2",
        },
        {
          tipo: "nota",
          ancho: 12,
          revelar: true,
          etiqueta: "Por qué",
          texto: "En serie las resistencias se suman directamente, porque la corriente debe atravesarlas una tras otra.",
        },
        {
          tipo: "formula",
          math: "R = 4 + 6 = 10\\ \\Omega",
        },
      ],
    },
    {
      id: "ej-paralelo",
      tipo: "lienzo",
      etiqueta: "La total baja",
      titulo: "Ejemplo 2 · Resistencias en paralelo",
      bloques: [
        {
          tipo: "destacado",
          texto: "Dos resistencias iguales de 6 Ω se conectan en paralelo. ¿Cuál es la resistencia equivalente?",
        },
        {
          tipo: "figura",
          ancho: 6,
          clave: "ele-serie-paralelo",
        },
        {
          tipo: "formula",
          ancho: 6,
          math: "\\dfrac{1}{R} = \\dfrac{1}{R_1} + \\dfrac{1}{R_2}",
        },
        {
          tipo: "nota",
          ancho: 12,
          revelar: true,
          etiqueta: "Por qué",
          texto: "En paralelo se suman los inversos. Para dos resistencias iguales, el resultado es la mitad de una. Siempre es menor que la más pequeña.",
        },
        {
          tipo: "formula",
          math: "\\dfrac{1}{R} = \\dfrac{1}{6} + \\dfrac{1}{6} = \\dfrac{2}{6} \\;\\Rightarrow\\; R = 3\\ \\Omega",
        },
      ],
    },
    {
      id: "el10",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Electricidad · Circuitos · Reactivo 1 / 4",
          enunciado: "Tres resistencias de 2 Ω, 3 Ω y 5 Ω se conectan en serie. ¿Cuál es la resistencia total?",
          opciones: ["10 Ω", "0.97 Ω", "30 Ω", "3.3 Ω"],
          correcta: 0,
          explicacion: "En serie se suman: R = 2 + 3 + 5 = 10 Ω.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "ele-serie-paralelo",
        },
      ],
    },
    {
      id: "el11",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Electricidad · Circuitos · Reactivo 2 / 4",
          enunciado: "Dos resistencias de 4 Ω se conectan en paralelo. ¿Cuál es la resistencia equivalente?",
          opciones: ["2 Ω", "8 Ω", "4 Ω", "16 Ω"],
          correcta: 0,
          explicacion: "Para dos resistencias iguales en paralelo, la equivalente es la mitad: 4/2 = 2 Ω.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "ele-serie-paralelo",
        },
      ],
    },
    {
      id: "el12",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Electricidad · Circuitos · Reactivo 3 / 4",
          enunciado: "En un circuito en serie, la corriente eléctrica:",
          opciones: [
            "Es la misma en todos los elementos",
            "Se divide entre los elementos",
            "Es cero",
            "Aumenta en cada resistencia",
          ],
          correcta: 0,
          explicacion: "En serie hay un solo camino, así que la misma corriente pasa por todos los componentes. Lo que se reparte es el voltaje.",
        },
      ],
    },
    {
      id: "el13",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Electricidad · Circuitos · Reactivo 4 / 4",
          enunciado: "En un circuito en paralelo, el voltaje en cada rama:",
          opciones: [
            "Es el mismo en todas las ramas",
            "Se divide entre las ramas",
            "Es siempre cero",
            "Aumenta en cada rama",
          ],
          correcta: 0,
          explicacion: "En paralelo todas las ramas están conectadas a los mismos dos puntos, así que comparten el mismo voltaje. Lo que se reparte es la corriente.",
        },
      ],
    },
    {
      id: "potencia",
      tipo: "lienzo",
      etiqueta: "Energía por segundo",
      titulo: "Potencia Eléctrica",
      bloques: [
        {
          tipo: "formula",
          math: "P = V\\,I",
        },
        {
          tipo: "lista",
          items: [
            {
              math: "P = V I",
              texto: "potencia: voltaje por corriente",
            },
            {
              math: "P = I^2 R",
              texto: "también, en términos de la resistencia",
            },
            {
              math: "[\\,P\\,] = \\text{W}",
              texto: "se mide en watts (W)",
            },
          ],
        },
        {
          tipo: "nota",
          texto: "La potencia indica cuánta energía consume un aparato por segundo. El recibo de luz se cobra en kilowatt-hora (kWh), que es energía: potencia por tiempo.",
        },
      ],
    },
    {
      id: "ej-potencia",
      tipo: "lienzo",
      etiqueta: "Consumo de un aparato",
      titulo: "Ejemplo · Potencia eléctrica",
      bloques: [
        {
          tipo: "destacado",
          texto: "Un aparato conectado a 120 V deja pasar una corriente de 2 A. ¿Qué potencia consume?",
        },
        {
          tipo: "formula",
          ancho: 12,
          math: "P = V\\,I",
        },
        {
          tipo: "nota",
          ancho: 12,
          revelar: true,
          etiqueta: "Por qué",
          texto: "La potencia es el producto del voltaje por la corriente. El resultado, en watts, indica cuánta energía gasta por segundo.",
        },
        {
          tipo: "formula",
          math: "P = (120)(2) = 240\\ \\text{W}",
        },
      ],
    },
    {
      id: "el14",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Electricidad · Potencia eléctrica · Reactivo 1 / 2",
          enunciado: "Un aparato funciona a 120 V con una corriente de 5 A. ¿Qué potencia consume?",
          opciones: ["600 W", "24 W", "125 W", "115 W"],
          correcta: 0,
          explicacion: "P = V·I = (120)(5) = 600 W.",
        },
      ],
    },
    {
      id: "el15",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Electricidad · Potencia eléctrica · Reactivo 2 / 2",
          enunciado: "¿En qué unidad se mide la potencia eléctrica?",
          opciones: ["Watt (W)", "Volt (V)", "Ampere (A)", "Ohm (Ω)"],
          correcta: 0,
          explicacion: "La potencia se mide en watts. 1 W = 1 J/s = 1 V·A.",
        },
      ],
    },
    {
      id: "magnetismo",
      tipo: "lienzo",
      etiqueta: "Imanes y electroimanes",
      titulo: "Magnetismo",
      bloques: [
        {
          tipo: "formula",
          math: "N \\;\\;\\longleftrightarrow\\;\\; S",
        },
        {
          tipo: "figura",
          ancho: 6,
          clave: "ele-magnetismo",
        },
        {
          tipo: "lista",
          ancho: 6,
          items: [
            {
              math: "\\text{dos polos}",
              texto: "todo imán tiene polo norte y polo sur, inseparables",
            },
            {
              math: "\\text{igual} \\to \\text{repele}",
              texto: "polos iguales se repelen; opuestos se atraen",
            },
            {
              math: "I \\to \\vec{B}",
              texto: "una corriente eléctrica crea un campo magnético a su alrededor",
            },
          ],
        },
        {
          tipo: "nota",
          texto: "Electricidad y magnetismo están unidos: una corriente genera magnetismo (electroimán) y un imán en movimiento genera corriente (inducción, base de los generadores).",
        },
      ],
    },
    {
      id: "ej-magnetismo",
      tipo: "lienzo",
      etiqueta: "La corriente crea magnetismo",
      titulo: "Ejemplo · Electroimán",
      bloques: [
        {
          tipo: "destacado",
          texto: "Enrollas un cable alrededor de un clavo de hierro y conectas los extremos a una pila. El clavo empieza a atraer clips. ¿Por qué?",
        },
        {
          tipo: "figura",
          ancho: 6,
          clave: "ele-magnetismo",
        },
        {
          tipo: "formula",
          ancho: 6,
          math: "I \\to \\vec{B}",
        },
        {
          tipo: "nota",
          ancho: 12,
          revelar: true,
          etiqueta: "Por qué",
          texto: "Toda corriente eléctrica genera un campo magnético a su alrededor. Al enrollar el cable y pasar corriente, los campos se suman y magnetizan el clavo: es un electroimán. Si cortas la corriente, deja de atraer.",
        },
        {
          tipo: "formula",
          math: "\\text{corriente} \\Rightarrow \\text{campo magnético} \\Rightarrow \\text{electroimán}",
        },
      ],
    },
    {
      id: "el17",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Electricidad · Magnetismo · Reactivo 1 / 2",
          enunciado: "Si acercas los polos norte de dos imanes, estos:",
          opciones: ["Se repelen", "Se atraen", "Se unen sin fuerza", "Pierden el magnetismo"],
          correcta: 0,
          explicacion: "Los polos magnéticos iguales (norte con norte, o sur con sur) se repelen; los opuestos se atraen, igual que las cargas.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "ele-magnetismo",
        },
      ],
    },
    {
      id: "el18",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Electricidad · Magnetismo · Reactivo 2 / 2",
          enunciado: "Una corriente eléctrica que circula por un cable genera a su alrededor un campo:",
          opciones: ["Magnético", "Gravitatorio", "Únicamente eléctrico", "Sonoro"],
          correcta: 0,
          explicacion: "Toda corriente eléctrica produce un campo magnético a su alrededor (descubrimiento de Oersted). Es la base de los electroimanes y los motores.",
        },
      ],
    },
    {
      id: "magnetismo-cuantitativo",
      tipo: "lienzo",
      etiqueta: "Flujo, fuerzas magnéticas y luz",
      titulo: "Magnetismo Cuantitativo y Ondas EM",
      bloques: [
        {
          tipo: "formula",
          math: "\\Phi = B\\,A",
        },
        {
          tipo: "figura",
          ancho: 6,
          clave: "ele-magnetismo",
        },
        {
          tipo: "lista",
          ancho: 6,
          items: [
            {
              math: "\\Phi = B A",
              texto: "flujo magnético: campo B por el área A que atraviesa (en weber, Wb)",
            },
            {
              math: "F = q\\,v\\,B",
              texto: "fuerza sobre una carga en movimiento perpendicular al campo",
            },
            {
              math: "F = \\dfrac{\\mu_0 I_1 I_2 L}{2\\pi d}",
              texto: "fuerza entre dos conductores paralelos con corriente",
            },
            {
              math: "B = \\mu \\tfrac{N}{L} I",
              texto: "campo en un solenoide; un imán en movimiento induce corriente",
            },
            {
              math: "\\lambda = \\dfrac{c}{f}",
              texto: "longitud de onda de una onda electromagnética (luz, láser, radio)",
            },
          ],
        },
        {
          tipo: "nota",
          texto: "Una carga en movimiento dentro de un campo magnético siente una fuerza F = q·v·B (máxima cuando v es perpendicular a B). Dos cables con corriente se atraen o repelen según el sentido de sus corrientes. Las ondas electromagnéticas (como la luz del láser) viajan a c = 3×10⁸ m/s y cumplen λ = c/f. Se usa μ₀ = 4π×10⁻⁷.",
        },
      ],
    },
    {
      id: "ej-flujo",
      tipo: "lienzo",
      etiqueta: "Campo por área",
      titulo: "Ejemplo · Flujo magnético",
      bloques: [
        {
          tipo: "destacado",
          texto: "Un imán produce un campo B = 2×10⁻³ T sobre la cara de una caja de área 0.05 m². ¿Cuál es el flujo magnético?",
        },
        {
          tipo: "figura",
          ancho: 6,
          clave: "ele-magnetismo",
        },
        {
          tipo: "formula",
          ancho: 6,
          math: "\\Phi = B\\,A",
        },
        {
          tipo: "nota",
          ancho: 12,
          revelar: true,
          etiqueta: "Por qué",
          texto: "El flujo magnético es simplemente el campo multiplicado por el área que atraviesa perpendicularmente. El resultado se mide en weber (Wb).",
        },
        {
          tipo: "formula",
          math: "\\Phi = (2\\times 10^{-3})(0.05) = 1\\times 10^{-4}\\ \\text{Wb}",
        },
      ],
    },
    {
      id: "magc1",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          ancho: 7,
          etiqueta: "Electricidad · Magnetismo cuantitativo · Reactivo 1 / 5",
          enunciado: "Un imán produce B = 2×10⁻³ T sobre una cara de 0.05 m². ¿Cuál es el flujo magnético?",
          opciones: ["1×10⁻⁴ Wb", "4×10⁻² Wb", "2.05×10⁻³ Wb", "1×10⁻² Wb"],
          correcta: 0,
          explicacion: "Φ = B·A = (2×10⁻³)·(0.05) = 1×10⁻⁴ Wb.",
        },
        {
          tipo: "figura",
          ancho: 5,
          clave: "ele-magnetismo",
        },
      ],
    },
    {
      id: "magc2",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Electricidad · Magnetismo cuantitativo · Reactivo 2 / 5",
          enunciado: "Una carga de 4 µC se mueve a 1500 m/s perpendicular a un campo de 0.12 T. ¿Qué fuerza magnética siente?",
          opciones: ["7.2×10⁻⁴ N", "4.8×10⁻⁴ N", "7.2×10⁻² N", "1.8×10⁻³ N"],
          correcta: 0,
          explicacion: "F = q·v·B = (4×10⁻⁶)·(1500)·(0.12) = 7.2×10⁻⁴ N. Con v perpendicular a B la fuerza es máxima.",
        },
      ],
    },
    {
      id: "magc3",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Electricidad · Magnetismo cuantitativo · Reactivo 3 / 5",
          enunciado: "Dos conductores paralelos de 0.5 m, con 7 A cada uno, se atraen con 2.25×10⁻⁴ N. ¿Cuál es su separación d? (μ₀ = 4π×10⁻⁷)",
          opciones: ["≈ 0.022 m", "≈ 0.22 m", "≈ 0.0022 m", "≈ 0.11 m"],
          correcta: 0,
          explicacion: "De F = μ₀·I₁·I₂·L/(2π·d) se despeja d = μ₀·I₁·I₂·L/(2π·F) = (4π×10⁻⁷·7·7·0.5)/(2π·2.25×10⁻⁴) ≈ 0.022 m.",
        },
      ],
    },
    {
      id: "magc4",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Electricidad · Magnetismo cuantitativo · Reactivo 4 / 5",
          enunciado: "Una onda electromagnética tiene una frecuencia de 2.5×10¹³ Hz. ¿Cuál es su longitud de onda? (c = 3×10⁸ m/s)",
          opciones: ["1.2×10⁻⁵ m", "1.2×10⁻⁴ m", "7.5×10²¹ m", "8.3×10⁴ m"],
          correcta: 0,
          explicacion: "λ = c/f = (3×10⁸)/(2.5×10¹³) = 1.2×10⁻⁵ m.",
        },
      ],
    },
    {
      id: "magc5",
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Electricidad · Magnetismo cuantitativo · Reactivo 5 / 5",
          enunciado: "¿Cuál de los siguientes dispositivos emplea ondas electromagnéticas?",
          opciones: ["Un apuntador láser", "Un motor eléctrico", "Una bocina", "Un resorte"],
          correcta: 0,
          explicacion: "El apuntador láser emite luz, que es una onda electromagnética. El motor eléctrico y la bocina aprovechan campos magnéticos y movimiento, pero no emiten ondas electromagnéticas como función principal.",
        },
      ],
    },
    {
      id: "resumen",
      tipo: "lienzo",
      etiqueta: "Electricidad y magnetismo",
      titulo: "Resumen",
      bloques: [
        {
          tipo: "lista",
          items: [
            {
              titulo: "Cargas",
              texto: "iguales se repelen, opuestas se atraen; se miden en coulombs",
            },
            {
              math: "F = k\\tfrac{q_1 q_2}{r^2}",
              texto: "Ley de Coulomb: inversa al cuadrado de la distancia",
            },
            {
              math: "I = \\tfrac{Q}{t}",
              texto: "corriente: carga por segundo (amperes)",
            },
            {
              math: "V = I R",
              texto: "Ley de Ohm: voltaje = corriente × resistencia",
            },
            {
              math: "R_{serie} = R_1 + R_2",
              texto: "en serie se suman; en paralelo la total baja",
            },
            {
              math: "P = V I",
              texto: "potencia eléctrica en watts",
            },
            {
              titulo: "Magnetismo",
              texto: "polos iguales se repelen; toda corriente crea campo magnético",
            },
            {
              math: "\\Phi = B A,\\ F = q v B",
              texto: "flujo magnético y fuerza sobre cargas; λ = c/f para ondas electromagnéticas (láser)",
            },
            {
              titulo: "Conductor/aislante",
              texto: "el conductor deja fluir la carga; el aislante se opone",
            },
          ],
        },
      ],
    },
  ],
};
