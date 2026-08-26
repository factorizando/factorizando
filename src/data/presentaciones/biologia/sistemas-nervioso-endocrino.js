// Presentación: Sistemas de integración y regulación — nervioso y endócrino
// EXANI-II · Módulo Ciencias Experimentales · Biología

export const PRESENTACION = {
  id: "sistemas-nervioso-endocrino",
  titulo: "Sistemas Nervioso y Endócrino",
  materia: "Biología",
  subtema: "Ciencias Experimentales",
  slides: [
    {
      id: 0,
      tipo: "lienzo",
      bloques: [
        {
          tipo: "portada",
          kicker: "EXANI-II · Ciencias Experimentales",
          titulo: "Sistemas Nervioso y Endócrino",
          subtitulo: "Integración y regulación del organismo: la neurona, el impulso nervioso, las hormonas y la homeostasis",
        },
      ],
    },
    {
      id: 1,
      tipo: "lienzo",
      etiqueta: "Bloque 1 · Panorama",
      titulo: "Dos sistemas de control del cuerpo",
      bloques: [
        {
          tipo: "destacado",
          texto: "El organismo coordina sus funciones mediante dos sistemas de integración y regulación. El sistema nervioso transmite señales eléctricas y químicas rápidas y de corta duración, ideales para respuestas inmediatas. El sistema endócrino libera hormonas a la sangre, con efectos más lentos pero duraderos. Ambos colaboran para mantener la homeostasis: el equilibrio interno del cuerpo (temperatura, glucosa, etc.) frente a los cambios del entorno.",
        },
        {
          tipo: "tabla",
          ancho: 7,
          alto: 2,
          titulo: "Nervioso vs. endócrino",
          columnas: ["Característica", "Sistema nervioso", "Sistema endócrino"],
          filas: [
            ["Mensajero", "Impulso eléctrico / neurotransmisor", "Hormona (por la sangre)"],
            ["Velocidad", "Rápida (milisegundos)", "Lenta (segundos a horas)"],
            ["Duración", "Breve", "Prolongada"],
            ["Función", "Respuestas inmediatas", "Regulación sostenida"],
          ],
        },
        {
          tipo: "par",
          ancho: 5,
          revelar: true,
          etiqueta: "ambos mantienen la homeostasis, pero a distinta velocidad",
          asi_es: "Nervioso: retirar la mano del fuego (instantáneo); endócrino: regular la glucosa (sostenido)",
          asi_no: "Pensar que solo el sistema nervioso regula el cuerpo → el endócrino también, vía hormonas",
        },
        {
          tipo: "trampa",
          ancho: 5,
          revelar: true,
          letra: "A",
          titulo: "Homeostasis es mantener el equilibrio interno; no significa «inmovilidad», sino ajuste constante",
          asi_es: "Regular la temperatura corporal a ~37 °C pese al frío o el calor",
          asi_no: "Entender homeostasis como ausencia de cambios → en realidad es ajuste dinámico",
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
          etiqueta: "Reactivo 1 — Comparación",
          enunciado: "¿Cuál es una diferencia correcta entre el sistema nervioso y el endócrino?",
          opciones: [
            "El nervioso actúa rápido y breve; el endócrino, lento y duradero",
            "El nervioso usa hormonas y el endócrino, impulsos eléctricos",
            "Ambos transmiten señales solo por la sangre",
          ],
          correcta: 0,
          explicacion: "El sistema nervioso responde con rapidez y por poco tiempo (impulsos), mientras que el endócrino actúa de forma más lenta y prolongada mediante hormonas que viajan por la sangre.",
        },
      ],
    },
    {
      id: 3,
      tipo: "lienzo",
      etiqueta: "Bloque 2 · La neurona",
      titulo: "La neurona y sus partes",
      bloques: [
        {
          tipo: "destacado",
          texto: "La neurona es la célula básica del sistema nervioso, especializada en recibir y transmitir información. Sus partes principales: las dendritas, que reciben las señales de otras neuronas; el cuerpo o soma, que contiene el núcleo y procesa la información; y el axón, una prolongación larga que conduce el impulso hacia otras células. Muchos axones están recubiertos de mielina, una vaina que acelera la transmisión del impulso.",
        },
        {
          tipo: "tabla",
          ancho: 7,
          alto: 2,
          titulo: "Partes de la neurona",
          columnas: ["Parte", "Función", "Nota"],
          filas: [
            ["Dendritas", "Reciben señales", "Entrada de información"],
            ["Soma (cuerpo)", "Contiene el núcleo", "Procesa la señal"],
            ["Axón", "Conduce el impulso", "Salida hacia otras células"],
            ["Mielina", "Aísla y acelera", "Vaina del axón"],
          ],
        },
        {
          tipo: "par",
          ancho: 5,
          revelar: true,
          etiqueta: "el impulso entra por las dendritas y sale por el axón",
          asi_es: "Dendritas (reciben) → soma (procesa) → axón (transmite)",
          asi_no: "Invertir el sentido: el axón no recibe, transmite; las dendritas reciben",
        },
        {
          tipo: "trampa",
          ancho: 5,
          revelar: true,
          letra: "B",
          titulo: "La mielina no genera el impulso: lo acelera; su pérdida (como en algunas enfermedades) enlentece la transmisión",
          asi_es: "La vaina de mielina aumenta la velocidad del impulso nervioso",
          asi_no: "Creer que la mielina produce la señal → solo la conduce más rápido",
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
          etiqueta: "Reactivo 1 — Neurona",
          enunciado: "¿Cuál es la parte de la neurona que conduce el impulso nervioso hacia otras células?",
          opciones: ["El axón", "Las dendritas", "El soma"],
          correcta: 0,
          explicacion: "El axón es la prolongación que conduce el impulso desde el cuerpo de la neurona hacia otras neuronas o células efectoras. Las dendritas reciben señales y el soma las procesa.",
        },
      ],
    },
    {
      id: 5,
      tipo: "lienzo",
      etiqueta: "Bloque 3 · Transmisión",
      titulo: "Impulso, sinapsis y arco reflejo",
      bloques: [
        {
          tipo: "destacado",
          texto: "El impulso nervioso es una señal eléctrica que viaja por la neurona. Al llegar al final del axón, pasa a la siguiente célula en la sinapsis, un punto de contacto donde se liberan neurotransmisores (mensajeros químicos). El arco reflejo es la vía más rápida de respuesta: un estímulo activa un receptor, la señal viaja por una neurona sensitiva hasta la médula espinal, y una neurona motora ordena la respuesta a un músculo (efector), sin necesidad de pasar por el cerebro.",
        },
        {
          tipo: "tabla",
          ancho: 7,
          alto: 2,
          titulo: "El arco reflejo, paso a paso",
          columnas: ["Etapa", "Elemento", "Función"],
          filas: [
            ["1", "Receptor", "Detecta el estímulo"],
            ["2", "Neurona sensitiva", "Lleva la señal a la médula"],
            ["3", "Médula espinal", "Centro integrador (sin pasar por el cerebro)"],
            ["4", "Neurona motora → efector", "Ejecuta la respuesta (músculo)"],
          ],
        },
        {
          tipo: "par",
          ancho: 5,
          revelar: true,
          etiqueta: "el reflejo es rápido porque no espera al cerebro",
          asi_es: "Retirar la mano de un objeto caliente: la médula coordina la respuesta de inmediato",
          asi_no: "Suponer que todo movimiento pasa primero por el cerebro → el arco reflejo se resuelve en la médula",
        },
        {
          tipo: "trampa",
          ancho: 5,
          revelar: true,
          letra: "C",
          titulo: "En la sinapsis la señal eléctrica se convierte en química (neurotransmisores) para cruzar a la siguiente neurona",
          asi_es: "Impulso eléctrico → neurotransmisor en la sinapsis → nueva señal",
          asi_no: "Creer que la electricidad «salta» directo de una neurona a otra sin mediador químico",
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
          etiqueta: "Reactivo 1 — Arco reflejo",
          enunciado: "En un acto reflejo, como retirar la mano del fuego, ¿qué estructura coordina la respuesta rápida?",
          opciones: ["La médula espinal", "El cerebro", "El sistema endócrino"],
          correcta: 0,
          explicacion: "El arco reflejo se integra en la médula espinal, lo que permite una respuesta casi inmediata sin esperar al procesamiento del cerebro. Por eso retiramos la mano antes de «pensarlo».",
        },
      ],
    },
    {
      id: 7,
      tipo: "lienzo",
      etiqueta: "Bloque 4 · Sistema endócrino",
      titulo: "Glándulas y hormonas",
      bloques: [
        {
          tipo: "destacado",
          texto: "El sistema endócrino está formado por glándulas que secretan hormonas directamente a la sangre, la cual las distribuye por todo el cuerpo. Cada hormona actúa sobre órganos específicos. Glándulas clave: la hipófisis (glándula «maestra» que controla a otras), la tiroides (tiroxina, que regula el metabolismo), el páncreas (insulina y glucagón, que regulan la glucosa) y las glándulas suprarrenales (adrenalina, asociada al estrés). Las hormonas regulan procesos como el crecimiento, la reproducción y el metabolismo.",
        },
        {
          tipo: "tabla",
          ancho: 7,
          alto: 2,
          titulo: "Glándulas y sus hormonas",
          columnas: ["Glándula", "Hormona", "Función"],
          filas: [
            ["Hipófisis", "Varias (glándula maestra)", "Controla otras glándulas"],
            ["Tiroides", "Tiroxina", "Regula el metabolismo"],
            ["Páncreas", "Insulina / glucagón", "Regulan la glucosa en sangre"],
            ["Suprarrenales", "Adrenalina", "Respuesta al estrés (lucha o huida)"],
          ],
        },
        {
          tipo: "par",
          ancho: 5,
          revelar: true,
          etiqueta: "insulina y glucagón regulan la glucosa de forma opuesta",
          asi_es: "Insulina BAJA la glucosa (la guarda); glucagón la SUBE (la libera)",
          asi_no: "Confundir sus papeles: la insulina no eleva la glucosa, la reduce",
        },
        {
          tipo: "trampa",
          ancho: 5,
          revelar: true,
          letra: "A",
          titulo: "Las glándulas endócrinas vierten hormonas a la SANGRE (no por conductos); por eso su efecto llega a todo el cuerpo",
          asi_es: "La tiroides libera tiroxina a la sangre",
          asi_no: "Confundirlas con glándulas exocrinas (sudoríparas, salivales), que usan conductos",
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
          etiqueta: "Reactivo 1 — Hormonas",
          enunciado: "¿Qué hormona disminuye el nivel de glucosa en la sangre?",
          opciones: ["La insulina", "El glucagón", "La adrenalina"],
          correcta: 0,
          explicacion: "La insulina, producida por el páncreas, permite que las células capten glucosa y así baja su nivel en la sangre. El glucagón hace lo opuesto (la eleva) y la adrenalina prepara al cuerpo ante el estrés.",
        },
      ],
    },
    {
      id: 9,
      tipo: "lienzo",
      etiqueta: "Bloque 5 · Regulación y alteraciones",
      titulo: "Retroalimentación y alteraciones",
      bloques: [
        {
          tipo: "destacado",
          texto: "La regulación hormonal suele funcionar por retroalimentación negativa: cuando una variable se aleja de su valor normal, el cuerpo activa mecanismos que la devuelven al equilibrio (como un termostato). Por ejemplo, al subir la glucosa tras comer, el páncreas libera insulina para normalizarla. Cuando estos sistemas fallan aparecen alteraciones: la diabetes (deficiencia o mala acción de la insulina, con glucosa alta), el hipotiroidismo (poca tiroxina, metabolismo lento) o el hipertiroidismo (exceso de tiroxina).",
        },
        {
          tipo: "tabla",
          ancho: 7,
          alto: 2,
          titulo: "Alteraciones frecuentes",
          columnas: ["Alteración", "Causa", "Efecto"],
          filas: [
            ["Diabetes", "Falta o mala acción de insulina", "Glucosa alta en sangre"],
            ["Hipotiroidismo", "Poca tiroxina", "Metabolismo lento, fatiga"],
            ["Hipertiroidismo", "Exceso de tiroxina", "Metabolismo acelerado"],
          ],
        },
        {
          tipo: "par",
          ancho: 5,
          revelar: true,
          etiqueta: "retroalimentación negativa: el cuerpo corrige el desvío",
          asi_es: "Glucosa alta → insulina → glucosa normal (se apaga la señal)",
          asi_no: "Pensar que la retroalimentación negativa «empeora» el desvío → lo corrige hacia el equilibrio",
        },
        {
          tipo: "trampa",
          ancho: 5,
          revelar: true,
          letra: "B",
          titulo: "La diabetes se relaciona con la insulina (páncreas), no con la tiroides; no confundas las glándulas implicadas",
          asi_es: "Diabetes → insulina (páncreas) ;  hipotiroidismo → tiroxina (tiroides)",
          asi_no: "Atribuir la diabetes a un fallo de la tiroides",
        },
      ],
    },
    {
      id: 10,
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Reactivo 1 — Alteraciones",
          enunciado: "La diabetes está relacionada principalmente con un problema en…",
          opciones: [
            "la producción o acción de la insulina (páncreas)",
            "la cantidad de tiroxina (tiroides)",
            "la adrenalina (suprarrenales)",
          ],
          correcta: 0,
          explicacion: "La diabetes se debe a la falta de insulina o a que las células no responden bien a ella, lo que eleva la glucosa en la sangre. La tiroxina se asocia a trastornos tiroideos y la adrenalina a la respuesta de estrés.",
        },
      ],
    },
    {
      id: 11,
      tipo: "lienzo",
      etiqueta: "Lo esencial de nervioso y endócrino",
      titulo: "Resumen",
      bloques: [
        {
          tipo: "lista",
          items: [
            {
              titulo: "Dos sistemas",
              texto: "nervioso: rápido y breve; endócrino: lento y duradero; ambos dan homeostasis",
            },
            {
              titulo: "Neurona",
              texto: "dendritas (reciben) → soma (procesa) → axón (transmite); mielina acelera",
            },
            {
              titulo: "Sinapsis y reflejo",
              texto: "neurotransmisores en la sinapsis; el arco reflejo se coordina en la médula",
            },
            {
              titulo: "Hormonas",
              texto: "hipófisis (maestra), tiroides (tiroxina), páncreas (insulina/glucagón), suprarrenales (adrenalina)",
            },
            {
              titulo: "Regulación",
              texto: "retroalimentación negativa; fallos: diabetes, hipo/hipertiroidismo",
            },
          ],
        },
      ],
    },
  ],
};
