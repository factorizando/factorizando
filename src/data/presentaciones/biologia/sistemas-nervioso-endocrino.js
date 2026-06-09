// Presentación: Sistemas de integración y regulación — nervioso y endócrino
// EXANI-II · Módulo Ciencias Experimentales · Biología

export const PRESENTACION = {
  id: "sistemas-nervioso-endocrino",
  titulo: "Sistemas Nervioso y Endócrino",
  materia: "Biología",
  subtema: "Ciencias Experimentales",
  slides: [

    // ── Portada ────────────────────────────────────────────────────────────────
    {
      id: 0,
      tipo: "portada",
      titulo: "Sistemas Nervioso y Endócrino",
      subtitulo: "Integración y regulación del organismo: la neurona, el impulso nervioso, las hormonas y la homeostasis",
      etiqueta: "EXANI-II · Ciencias Experimentales"
    },

    // ── Integración y regulación ───────────────────────────────────────────────
    {
      id: 1,
      tipo: "regla_rica",
      etiqueta: "Bloque 1 · Panorama",
      titulo: "Dos sistemas de control del cuerpo",
      bloques: [
        {
          tipo: "texto",
          texto: "El organismo coordina sus funciones mediante dos sistemas de integración y regulación. El sistema nervioso transmite señales eléctricas y químicas rápidas y de corta duración, ideales para respuestas inmediatas. El sistema endócrino libera hormonas a la sangre, con efectos más lentos pero duraderos. Ambos colaboran para mantener la homeostasis: el equilibrio interno del cuerpo (temperatura, glucosa, etc.) frente a los cambios del entorno."
        },
        {
          tipo: "tabla",
          titulo: "Nervioso vs. endócrino",
          columnas: ["Característica", "Sistema nervioso", "Sistema endócrino"],
          filas: [
            { tiempo: "Mensajero", correcto: "Impulso eléctrico / neurotransmisor", error: "Hormona (por la sangre)" },
            { tiempo: "Velocidad", correcto: "Rápida (milisegundos)", error: "Lenta (segundos a horas)" },
            { tiempo: "Duración",  correcto: "Breve", error: "Prolongada" },
            { tiempo: "Función",   correcto: "Respuestas inmediatas", error: "Regulación sostenida" }
          ]
        },
        {
          tipo: "par",
          etiqueta: "ambos mantienen la homeostasis, pero a distinta velocidad",
          correcto: "Nervioso: retirar la mano del fuego (instantáneo); endócrino: regular la glucosa (sostenido)",
          incorrecto: "Pensar que solo el sistema nervioso regula el cuerpo → el endócrino también, vía hormonas"
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "Homeostasis es mantener el equilibrio interno; no significa «inmovilidad», sino ajuste constante",
          correcto: "Regular la temperatura corporal a ~37 °C pese al frío o el calor",
          incorrecto: "Entender homeostasis como ausencia de cambios → en realidad es ajuste dinámico"
        }
      ]
    },
    {
      id: 2,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Comparación",
      pregunta: "¿Cuál es una diferencia correcta entre el sistema nervioso y el endócrino?",
      opciones: [
        "El nervioso actúa rápido y breve; el endócrino, lento y duradero",
        "El nervioso usa hormonas y el endócrino, impulsos eléctricos",
        "Ambos transmiten señales solo por la sangre"
      ],
      correcta: 0,
      explicacion: "El sistema nervioso responde con rapidez y por poco tiempo (impulsos), mientras que el endócrino actúa de forma más lenta y prolongada mediante hormonas que viajan por la sangre.",
      pasos: []
    },

    // ── La neurona ─────────────────────────────────────────────────────────────
    {
      id: 3,
      tipo: "regla_rica",
      etiqueta: "Bloque 2 · La neurona",
      titulo: "La neurona y sus partes",
      bloques: [
        {
          tipo: "texto",
          texto: "La neurona es la célula básica del sistema nervioso, especializada en recibir y transmitir información. Sus partes principales: las dendritas, que reciben las señales de otras neuronas; el cuerpo o soma, que contiene el núcleo y procesa la información; y el axón, una prolongación larga que conduce el impulso hacia otras células. Muchos axones están recubiertos de mielina, una vaina que acelera la transmisión del impulso."
        },
        {
          tipo: "tabla",
          titulo: "Partes de la neurona",
          columnas: ["Parte", "Función", "Nota"],
          filas: [
            { tiempo: "Dendritas", correcto: "Reciben señales", error: "Entrada de información" },
            { tiempo: "Soma (cuerpo)", correcto: "Contiene el núcleo", error: "Procesa la señal" },
            { tiempo: "Axón", correcto: "Conduce el impulso", error: "Salida hacia otras células" },
            { tiempo: "Mielina", correcto: "Aísla y acelera", error: "Vaina del axón" }
          ]
        },
        {
          tipo: "par",
          etiqueta: "el impulso entra por las dendritas y sale por el axón",
          correcto: "Dendritas (reciben) → soma (procesa) → axón (transmite)",
          incorrecto: "Invertir el sentido: el axón no recibe, transmite; las dendritas reciben"
        },
        {
          tipo: "trampa",
          letra: "B",
          titulo: "La mielina no genera el impulso: lo acelera; su pérdida (como en algunas enfermedades) enlentece la transmisión",
          correcto: "La vaina de mielina aumenta la velocidad del impulso nervioso",
          incorrecto: "Creer que la mielina produce la señal → solo la conduce más rápido"
        }
      ]
    },
    {
      id: 4,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Neurona",
      pregunta: "¿Cuál es la parte de la neurona que conduce el impulso nervioso hacia otras células?",
      opciones: ["El axón", "Las dendritas", "El soma"],
      correcta: 0,
      explicacion: "El axón es la prolongación que conduce el impulso desde el cuerpo de la neurona hacia otras neuronas o células efectoras. Las dendritas reciben señales y el soma las procesa.",
      pasos: []
    },

    // ── Impulso, sinapsis y arco reflejo ───────────────────────────────────────
    {
      id: 5,
      tipo: "regla_rica",
      etiqueta: "Bloque 3 · Transmisión",
      titulo: "Impulso, sinapsis y arco reflejo",
      bloques: [
        {
          tipo: "texto",
          texto: "El impulso nervioso es una señal eléctrica que viaja por la neurona. Al llegar al final del axón, pasa a la siguiente célula en la sinapsis, un punto de contacto donde se liberan neurotransmisores (mensajeros químicos). El arco reflejo es la vía más rápida de respuesta: un estímulo activa un receptor, la señal viaja por una neurona sensitiva hasta la médula espinal, y una neurona motora ordena la respuesta a un músculo (efector), sin necesidad de pasar por el cerebro."
        },
        {
          tipo: "tabla",
          titulo: "El arco reflejo, paso a paso",
          columnas: ["Etapa", "Elemento", "Función"],
          filas: [
            { tiempo: "1", correcto: "Receptor", error: "Detecta el estímulo" },
            { tiempo: "2", correcto: "Neurona sensitiva", error: "Lleva la señal a la médula" },
            { tiempo: "3", correcto: "Médula espinal", error: "Centro integrador (sin pasar por el cerebro)" },
            { tiempo: "4", correcto: "Neurona motora → efector", error: "Ejecuta la respuesta (músculo)" }
          ]
        },
        {
          tipo: "par",
          etiqueta: "el reflejo es rápido porque no espera al cerebro",
          correcto: "Retirar la mano de un objeto caliente: la médula coordina la respuesta de inmediato",
          incorrecto: "Suponer que todo movimiento pasa primero por el cerebro → el arco reflejo se resuelve en la médula"
        },
        {
          tipo: "trampa",
          letra: "C",
          titulo: "En la sinapsis la señal eléctrica se convierte en química (neurotransmisores) para cruzar a la siguiente neurona",
          correcto: "Impulso eléctrico → neurotransmisor en la sinapsis → nueva señal",
          incorrecto: "Creer que la electricidad «salta» directo de una neurona a otra sin mediador químico"
        }
      ]
    },
    {
      id: 6,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Arco reflejo",
      pregunta: "En un acto reflejo, como retirar la mano del fuego, ¿qué estructura coordina la respuesta rápida?",
      opciones: [
        "La médula espinal",
        "El cerebro",
        "El sistema endócrino"
      ],
      correcta: 0,
      explicacion: "El arco reflejo se integra en la médula espinal, lo que permite una respuesta casi inmediata sin esperar al procesamiento del cerebro. Por eso retiramos la mano antes de «pensarlo».",
      pasos: []
    },

    // ── Sistema endócrino: hormonas ────────────────────────────────────────────
    {
      id: 7,
      tipo: "regla_rica",
      etiqueta: "Bloque 4 · Sistema endócrino",
      titulo: "Glándulas y hormonas",
      bloques: [
        {
          tipo: "texto",
          texto: "El sistema endócrino está formado por glándulas que secretan hormonas directamente a la sangre, la cual las distribuye por todo el cuerpo. Cada hormona actúa sobre órganos específicos. Glándulas clave: la hipófisis (glándula «maestra» que controla a otras), la tiroides (tiroxina, que regula el metabolismo), el páncreas (insulina y glucagón, que regulan la glucosa) y las glándulas suprarrenales (adrenalina, asociada al estrés). Las hormonas regulan procesos como el crecimiento, la reproducción y el metabolismo."
        },
        {
          tipo: "tabla",
          titulo: "Glándulas y sus hormonas",
          columnas: ["Glándula", "Hormona", "Función"],
          filas: [
            { tiempo: "Hipófisis", correcto: "Varias (glándula maestra)", error: "Controla otras glándulas" },
            { tiempo: "Tiroides",  correcto: "Tiroxina", error: "Regula el metabolismo" },
            { tiempo: "Páncreas",  correcto: "Insulina / glucagón", error: "Regulan la glucosa en sangre" },
            { tiempo: "Suprarrenales", correcto: "Adrenalina", error: "Respuesta al estrés (lucha o huida)" }
          ]
        },
        {
          tipo: "par",
          etiqueta: "insulina y glucagón regulan la glucosa de forma opuesta",
          correcto: "Insulina BAJA la glucosa (la guarda); glucagón la SUBE (la libera)",
          incorrecto: "Confundir sus papeles: la insulina no eleva la glucosa, la reduce"
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "Las glándulas endócrinas vierten hormonas a la SANGRE (no por conductos); por eso su efecto llega a todo el cuerpo",
          correcto: "La tiroides libera tiroxina a la sangre",
          incorrecto: "Confundirlas con glándulas exocrinas (sudoríparas, salivales), que usan conductos"
        }
      ]
    },
    {
      id: 8,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Hormonas",
      pregunta: "¿Qué hormona disminuye el nivel de glucosa en la sangre?",
      opciones: ["La insulina", "El glucagón", "La adrenalina"],
      correcta: 0,
      explicacion: "La insulina, producida por el páncreas, permite que las células capten glucosa y así baja su nivel en la sangre. El glucagón hace lo opuesto (la eleva) y la adrenalina prepara al cuerpo ante el estrés.",
      pasos: []
    },

    // ── Homeostasis y alteraciones ─────────────────────────────────────────────
    {
      id: 9,
      tipo: "regla_rica",
      etiqueta: "Bloque 5 · Regulación y alteraciones",
      titulo: "Retroalimentación y alteraciones",
      bloques: [
        {
          tipo: "texto",
          texto: "La regulación hormonal suele funcionar por retroalimentación negativa: cuando una variable se aleja de su valor normal, el cuerpo activa mecanismos que la devuelven al equilibrio (como un termostato). Por ejemplo, al subir la glucosa tras comer, el páncreas libera insulina para normalizarla. Cuando estos sistemas fallan aparecen alteraciones: la diabetes (deficiencia o mala acción de la insulina, con glucosa alta), el hipotiroidismo (poca tiroxina, metabolismo lento) o el hipertiroidismo (exceso de tiroxina)."
        },
        {
          tipo: "tabla",
          titulo: "Alteraciones frecuentes",
          columnas: ["Alteración", "Causa", "Efecto"],
          filas: [
            { tiempo: "Diabetes", correcto: "Falta o mala acción de insulina", error: "Glucosa alta en sangre" },
            { tiempo: "Hipotiroidismo", correcto: "Poca tiroxina", error: "Metabolismo lento, fatiga" },
            { tiempo: "Hipertiroidismo", correcto: "Exceso de tiroxina", error: "Metabolismo acelerado" }
          ]
        },
        {
          tipo: "par",
          etiqueta: "retroalimentación negativa: el cuerpo corrige el desvío",
          correcto: "Glucosa alta → insulina → glucosa normal (se apaga la señal)",
          incorrecto: "Pensar que la retroalimentación negativa «empeora» el desvío → lo corrige hacia el equilibrio"
        },
        {
          tipo: "trampa",
          letra: "B",
          titulo: "La diabetes se relaciona con la insulina (páncreas), no con la tiroides; no confundas las glándulas implicadas",
          correcto: "Diabetes → insulina (páncreas) ;  hipotiroidismo → tiroxina (tiroides)",
          incorrecto: "Atribuir la diabetes a un fallo de la tiroides"
        }
      ]
    },
    {
      id: 10,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Alteraciones",
      pregunta: "La diabetes está relacionada principalmente con un problema en…",
      opciones: [
        "la producción o acción de la insulina (páncreas)",
        "la cantidad de tiroxina (tiroides)",
        "la adrenalina (suprarrenales)"
      ],
      correcta: 0,
      explicacion: "La diabetes se debe a la falta de insulina o a que las células no responden bien a ella, lo que eleva la glucosa en la sangre. La tiroxina se asocia a trastornos tiroideos y la adrenalina a la respuesta de estrés.",
      pasos: []
    },

    // ── Cierre ────────────────────────────────────────────────────────────────
    {
      id: 11,
      tipo: "resumen",
      titulo: "Resumen",
      etiqueta: "Lo esencial de nervioso y endócrino",
      puntos: [
        { titulo: "Dos sistemas", texto: "nervioso: rápido y breve; endócrino: lento y duradero; ambos dan homeostasis" },
        { titulo: "Neurona", texto: "dendritas (reciben) → soma (procesa) → axón (transmite); mielina acelera" },
        { titulo: "Sinapsis y reflejo", texto: "neurotransmisores en la sinapsis; el arco reflejo se coordina en la médula" },
        { titulo: "Hormonas", texto: "hipófisis (maestra), tiroides (tiroxina), páncreas (insulina/glucagón), suprarrenales (adrenalina)" },
        { titulo: "Regulación", texto: "retroalimentación negativa; fallos: diabetes, hipo/hipertiroidismo" }
      ]
    }

  ]
};
