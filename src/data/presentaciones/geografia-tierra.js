// Presentación: Geografía — La Tierra, base del desarrollo del hombre
// Tema 1 de la Guía UNAM 2023 (Área 1): coordenadas, husos horarios,
// tectónica global y ciclo hidrológico.

export const PRESENTACION = {
  id: "geografia-tierra",
  titulo: "La Tierra: Geografía Física",
  materia: "Geografía",
  subtema: "Tema 1 · UNAM Licenciatura",
  slides: [

    // ── Portada ────────────────────────────────────────────────────────────────
    {
      id: 0,
      tipo: "portada",
      titulo: "La Tierra, base del desarrollo del hombre",
      subtitulo: "Coordenadas geográficas · Husos horarios · Tectónica global · Ciclo hidrológico",
      etiqueta: "Geografía · Tema 1 · UNAM Licenciatura",
    },

    // ── La Geografía como ciencia ─────────────────────────────────────────────
    {
      id: 1,
      tipo: "regla_rica",
      etiqueta: "1 / 6 — La Geografía",
      titulo: "La Geografía: ciencia natural y social",
      bloques: [
        {
          tipo: "texto",
          texto: "La Geografía estudia la relación del ser humano con la naturaleza y el espacio. Es a la vez ciencia natural (analiza el medio físico: relieve, clima, hidrología) y ciencia social (estudia cómo las sociedades ocupan, transforman y organizan el espacio). En el examen UNAM se divide en dos grandes ramas: Geografía Física y Geografía Humana.",
        },
        {
          tipo: "tabla",
          titulo: "Las dos ramas de la Geografía",
          columnas: ["Rama", "Objeto de estudio", "Temas UNAM representativos"],
          filas: [
            { tiempo: "Geografía Física",  correcto: "El medio natural",    error: "Relieve, clima, tectónica, hidrología, biomas" },
            { tiempo: "Geografía Humana",  correcto: "El espacio humanizado", error: "Población, economía, política, migración, regiones" },
          ],
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "Geografía ≠ solo memorizar mapas — la clave es la RELACIÓN hombre-naturaleza",
          correcto: "La Geografía explica por qué las ciudades surgen cerca del agua, por qué las industrias se ubican en zonas con infraestructura de transporte.",
          incorrecto: "Pensar que Geografía solo sirve para ubicar capitales o trazar fronteras en un mapa.",
        },
      ],
    },
    {
      id: 2,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — La Geografía",
      pregunta: "«¿Cuál de las siguientes afirmaciones describe correctamente a la Geografía como ciencia?»",
      opciones: [
        "Es una ciencia exclusivamente natural que estudia solo el relieve y el clima del planeta.",
        "Es una ciencia que estudia la relación del ser humano con su espacio natural y social.",
        "Es una disciplina que se limita a la elaboración de mapas y a la medición de distancias.",
      ],
      correcta: 1,
      explicacion: "La Geografía es simultáneamente una ciencia natural y social: analiza el medio físico (relieve, clima, hidrología) y estudia cómo las sociedades organizan, transforman y habitan ese espacio. Va mucho más allá de los mapas.",
      pasos: [],
    },

    // ── Coordenadas geográficas ────────────────────────────────────────────────
    {
      id: 3,
      tipo: "regla_rica",
      etiqueta: "2 / 6 — Coordenadas geográficas",
      titulo: "Latitud y longitud: sistema de localización universal",
      bloques: [
        {
          tipo: "texto",
          texto: "Las coordenadas geográficas son líneas imaginarias que permiten localizar cualquier punto en la superficie terrestre. La latitud mide la distancia angular desde el Ecuador (0°) hacia los Polos (máx. 90°N o 90°S). La longitud mide la distancia desde el Meridiano de Greenwich (0°) hacia el Este u Oeste (máx. 180°). Todo punto en la Tierra se expresa como (latitud, longitud).",
        },
        {
          tipo: "diagrama",
          id: "geo-coordenadas",
          titulo: "Sistema de coordenadas: paralelos (latitud) y meridianos (longitud)",
        },
        {
          tipo: "tabla",
          titulo: "Paralelos y meridianos clave",
          columnas: ["Línea", "Coordenada", "Importancia"],
          filas: [
            { tiempo: "Ecuador",                    correcto: "Latitud 0°",    error: "Divide la Tierra en hemisferio Norte y Sur" },
            { tiempo: "Trópico de Cáncer",          correcto: "23.5°N",       error: "Límite norte de la zona intertropical; sol cenital en solsticio de verano" },
            { tiempo: "Trópico de Capricornio",     correcto: "23.5°S",       error: "Límite sur de la zona intertropical; sol cenital en solsticio de invierno" },
            { tiempo: "Círculo Polar Ártico",        correcto: "66.5°N",       error: "Norte del cual hay noche/día polar" },
            { tiempo: "Meridiano de Greenwich",      correcto: "Longitud 0°",  error: "Divide hemisferio Este y Oeste; origen del tiempo UTC/GMT" },
            { tiempo: "Línea Internacional de Fecha", correcto: "Longitud 180°", error: "Al cruzarla hacia el Oeste avanzas un día; hacia el Este retrocedes" },
          ],
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "Latitud = horizontal (paralelos) · Longitud = vertical (meridianos) — nunca al revés",
          correcto: "Ciudad de México: latitud 19°N (distancia al Ecuador), longitud 99°O (distancia al Meridiano de Greenwich hacia el Oeste).",
          incorrecto: "Invertir latitud y longitud es el error más frecuente: la latitud va de norte a sur (0–90°), la longitud de este a oeste (0–180°).",
        },
      ],
    },
    {
      id: 4,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Coordenadas",
      pregunta: "«Un punto se localiza a 45° al sur del Ecuador y a 90° al este del Meridiano de Greenwich. Sus coordenadas correctas son:»",
      opciones: [
        "Latitud 90°E, Longitud 45°S",
        "Latitud 45°S, Longitud 90°E",
        "Latitud 45°N, Longitud 90°O",
      ],
      correcta: 1,
      explicacion: "La latitud indica la distancia al Ecuador (norte/sur) y la longitud la distancia al Meridiano de Greenwich (este/oeste). El punto está 45° al sur → Latitud 45°S; y 90° al este → Longitud 90°E. Se escribe siempre latitud primero.",
      pasos: [],
    },

    // ── Husos horarios ────────────────────────────────────────────────────────
    {
      id: 5,
      tipo: "regla_rica",
      etiqueta: "3 / 6 — Husos horarios",
      titulo: "Husos horarios y el cambio de fecha internacional",
      bloques: [
        {
          tipo: "texto",
          texto: "La Tierra gira 360° en 24 horas, es decir, 15° por hora. Por eso se divide en 24 husos horarios de 15° de longitud cada uno. El huso 0 corresponde al Meridiano de Greenwich (UTC/GMT). Hacia el Este se suma una hora por huso; hacia el Oeste se resta. La Línea Internacional de Cambio de Fecha (180°) es donde cambia el día del calendario.",
        },
        {
          tipo: "diagrama",
          id: "geo-husos",
          titulo: "Los 24 husos horarios y las zonas de México",
        },
        {
          tipo: "tabla",
          titulo: "Zonas horarias de México",
          columnas: ["Zona", "Estados principales", "UTC estándar"],
          filas: [
            { tiempo: "Zona Centro",    correcto: "CDMX, Jalisco, Veracruz, Puebla…", error: "UTC−6 (UTC−5 en horario de verano)" },
            { tiempo: "Zona Pacífico",  correcto: "Sinaloa, Nayarit, Chihuahua…",     error: "UTC−7 (UTC−6 en horario de verano)" },
            { tiempo: "Zona Noroeste",  correcto: "Baja California",                   error: "UTC−8 (UTC−7 en horario de verano)" },
            { tiempo: "Zona Sureste",   correcto: "Quintana Roo",                      error: "UTC−5 fijo (sin cambio de horario)" },
          ],
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "Al cruzar la Línea de Fecha (180°) hacia el OESTE: avanzas un día; hacia el ESTE: retrocedes un día",
          correcto: "Si vuelas de Tokio (UTC+9) a Honolulú (UTC−10) cruzando el Pacífico hacia el Este, retrocedes un día en el calendario.",
          incorrecto: "Confundir cambio de hora (entre husos) con cambio de fecha: el cambio de fecha solo ocurre al cruzar el meridiano 180°.",
        },
      ],
    },
    {
      id: 6,
      tipo: "ejercicio",
      etiqueta: "Reactivo 3 — Husos horarios",
      pregunta: "«Si en la Ciudad de México (UTC−6) son las 09:00 h, ¿qué hora es simultáneamente en Madrid, España (UTC+1)?»",
      opciones: [
        "02:00 h del día siguiente.",
        "16:00 h del mismo día.",
        "03:00 h del día anterior.",
      ],
      correcta: 1,
      explicacion: "La diferencia entre UTC−6 y UTC+1 es de 7 horas. Madrid está 7 zonas al este de Ciudad de México, por lo que su hora es mayor: 09:00 + 7 = 16:00 h del mismo día. Hacia el Este se suma; hacia el Oeste se resta.",
      pasos: [],
    },

    // ── Tectónica global ──────────────────────────────────────────────────────
    {
      id: 7,
      tipo: "regla_rica",
      etiqueta: "4 / 6 — Tectónica global",
      titulo: "Placas tectónicas: sismos, volcanes y formas del relieve",
      bloques: [
        {
          tipo: "texto",
          texto: "La litósfera está dividida en placas tectónicas rígidas que se desplazan sobre el manto. En sus bordes ocurren los principales fenómenos geológicos: terremotos, erupciones volcánicas y la formación de cadenas montañosas. México se ubica sobre la confluencia de cinco placas: Norteamericana, del Pacífico, de Cocos, del Caribe y de Rivera.",
        },
        {
          tipo: "diagrama",
          id: "geo-placas",
          titulo: "Tipos de bordes de placas tectónicas",
        },
        {
          tipo: "tabla",
          titulo: "Tipos de bordes de placas y sus efectos",
          columnas: ["Tipo de borde", "Movimiento de las placas", "Fenómenos y ejemplos"],
          filas: [
            { tiempo: "Convergente",  correcto: "Las placas chocan y una se hunde (subducción)", error: "Sismos intensos, volcanes, montañas. Ej.: Andes, Himalaya, Popocatépetl" },
            { tiempo: "Divergente",   correcto: "Las placas se separan",                          error: "Dorsal oceánica, rift valley, magma nuevo. Ej.: Dorsales del Atlántico e Índico, Islandia" },
            { tiempo: "Transformante", correcto: "Las placas se deslizan lateralmente",            error: "Sismos sin vulcanismo. Ej.: Falla de San Andrés (California)" },
          ],
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "El Cinturón de Fuego concentra el 90% de sismos y el 75% de volcanes activos del mundo",
          correcto: "El Cinturón de Fuego del Pacífico: bordes convergentes donde placas oceánicas se subduce bajo continentales → alta energía sísmica y volcánica.",
          incorrecto: "Pensar que los volcanes solo existen en bordes de placa: los puntos calientes (hot spots) como Hawái están en el interior de la placa del Pacífico.",
        },
      ],
    },
    {
      id: 8,
      tipo: "ejercicio",
      etiqueta: "Reactivo 4 — Tectónica global",
      pregunta: "«El volcán Popocatépetl en México debe su actividad principalmente a:»",
      opciones: [
        "La presencia de un punto caliente (hot spot) bajo la placa Norteamericana.",
        "La subducción de la placa de Cocos bajo la placa Norteamericana (borde convergente).",
        "La separación de las placas del Pacífico y Norteamericana en un borde divergente.",
      ],
      correcta: 1,
      explicacion: "El Popocatépetl es un volcán de arco continental: la placa oceánica de Cocos se subduce bajo la placa continental Norteamericana en la Fosa Mesoamericana. Al hundirse, la corteza oceánica libera agua que reduce el punto de fusión del manto, generando el magma que alimenta los volcanes del eje volcánico transversal de México.",
      pasos: [],
    },

    // ── El relieve ────────────────────────────────────────────────────────────
    {
      id: 9,
      tipo: "regla_rica",
      etiqueta: "5 / 6 — Formas del relieve",
      titulo: "Llanuras, mesetas y montañas: distribución mundial y en México",
      bloques: [
        {
          tipo: "texto",
          texto: "Las formas del relieve condicionan directamente la distribución de la población, las actividades económicas y los patrones climáticos. Las llanuras concentran agricultura intensiva y grandes ciudades; las mesetas se usan en ganadería extensiva y minería; las montañas son barreras climáticas y fuentes de agua dulce. En México predominan sierras y mesetas; las llanuras costeras son relativamente estrechas.",
        },
        {
          tipo: "tabla",
          titulo: "Formas del relieve: altitud, ejemplos mundiales y en México",
          columnas: ["Forma", "Altitud aprox.", "Ejemplo mundial", "En México"],
          filas: [
            { tiempo: "Llanura",  correcto: "0 – 200 m",   error: "Llanuras del Misisipi; Pampa argentina",         extra: "Llanura Costera del Golfo; Llanura Costera del Pacífico" },
            { tiempo: "Meseta",   correcto: "200 – 1 500 m", error: "Meseta del Decán (India); Gran Llanura de Siberia", extra: "Altiplano Central mexicano (1 800 – 2 300 m)" },
            { tiempo: "Montaña",  correcto: "> 1 500 m",   error: "Himalaya (Everest 8 849 m); Andes",              extra: "Sierra Madre Occidental, Oriental y del Sur; Eje Volcánico Transversal" },
          ],
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "El relieve NO determina por sí solo dónde vive la gente — el agua y el clima también importan",
          correcto: "Los valles intermontanos de México (como el Valle de México, a ~2 240 m) concentran población por su clima templado y acceso al agua, no solo por su topografía relativamente plana.",
          incorrecto: "Pensar que las llanuras siempre tienen más población: el Altiplano Central de México (2 000 m) tiene más densidad poblacional que muchas llanuras costeras.",
        },
      ],
    },
    {
      id: 10,
      tipo: "ejercicio",
      etiqueta: "Reactivo 5 — Formas del relieve",
      pregunta: "«¿Cuál es la principal razón por la que las llanuras costas e interiores concentran la mayor actividad agrícola del mundo?»",
      opciones: [
        "Porque las llanuras contienen la mayor concentración de minerales preciosos del planeta.",
        "Porque sus suelos planos y fértiles facilitan el cultivo mecanizado, el riego y el transporte de productos.",
        "Porque en las llanuras siempre llueve más que en las montañas y mesetas cercanas.",
      ],
      correcta: 1,
      explicacion: "Las llanuras favorecen la agricultura por su topografía plana (facilita maquinaria agrícola e infraestructura de riego), suelos generalmente profundos y fértiles (acumulación de sedimentos), y mejor conectividad para transportar productos. La precipitación es variable y no siempre mayor en llanuras que en montañas.",
      pasos: [],
    },

    // ── El ciclo hidrológico ──────────────────────────────────────────────────
    {
      id: 11,
      tipo: "regla_rica",
      etiqueta: "6 / 6 — El agua como recurso",
      titulo: "El ciclo hidrológico: procesos y esferas terrestres",
      bloques: [
        {
          tipo: "texto",
          texto: "El ciclo hidrológico es el conjunto de procesos continuos que transfieren agua entre la hidrósfera, la atmósfera, la litósfera y la biósfera. El calor solar impulsa la evaporación; el vapor asciende, se condensa en nubes y precipita de regreso a la superficie como lluvia o nieve; el agua escurre hacia ríos y mares o se infiltra al subsuelo formando acuíferos. Este ciclo regula el clima y distribuye el agua dulce en el planeta.",
        },
        {
          tipo: "diagrama",
          id: "geo-ciclo-hidrologico",
          titulo: "El ciclo hidrológico y las cuatro esferas terrestres",
        },
        {
          tipo: "tabla",
          titulo: "Fases del ciclo hidrológico",
          columnas: ["Fase", "Proceso", "Esferas involucradas"],
          filas: [
            { tiempo: "Evaporación",   correcto: "El calor convierte agua líquida en vapor",         error: "Hidrósfera → Atmósfera" },
            { tiempo: "Transpiración", correcto: "Las plantas liberan vapor de agua",                 error: "Biósfera → Atmósfera" },
            { tiempo: "Condensación",  correcto: "El vapor se enfría y forma nubes",                  error: "Atmósfera" },
            { tiempo: "Precipitación", correcto: "El agua cae como lluvia, nieve o granizo",          error: "Atmósfera → Litósfera / Hidrósfera" },
            { tiempo: "Escurrimiento", correcto: "El agua fluye por la superficie hacia ríos y mar",  error: "Litósfera → Hidrósfera" },
            { tiempo: "Infiltración",  correcto: "El agua penetra el suelo y recarga acuíferos",      error: "Litósfera (subterránea)" },
          ],
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "El ciclo hidrológico involucra CUATRO esferas — no solo agua y atmósfera",
          correcto: "Hidrósfera (océanos, ríos) + Atmósfera (nubes, lluvia) + Litósfera (suelo, acuíferos, escurrimiento) + Biósfera (transpiración vegetal).",
          incorrecto: "Olvidar la biósfera y la litósfera: la transpiración de los bosques aporta hasta el 50% de la humedad en zonas tropicales; los acuíferos son parte esencial del ciclo.",
        },
      ],
    },
    {
      id: 12,
      tipo: "ejercicio",
      etiqueta: "Reactivo 6 — Ciclo hidrológico",
      pregunta: "«El ciclo hidrológico relaciona cuatro esferas terrestres. ¿Cuál de las siguientes opciones las menciona correctamente?»",
      opciones: [
        "Hidrósfera, atmósfera, magnetósfera y litósfera.",
        "Hidrósfera, atmósfera, litósfera y biósfera.",
        "Hidrósfera, termósfera, corteza terrestre y biósfera.",
      ],
      correcta: 1,
      explicacion: "El ciclo hidrológico involucra: la hidrósfera (océanos, ríos, lagos), la atmósfera (nubes, precipitación, vapor), la litósfera (suelo, escurrimiento superficial, acuíferos) y la biósfera (transpiración de plantas). La magnetósfera y la termósfera no participan en el ciclo del agua.",
      pasos: [],
    },

    // ── Resumen ───────────────────────────────────────────────────────────────
    {
      id: 13,
      tipo: "resumen",
      titulo: "Lo más importante del Tema 1",
      etiqueta: "Resumen",
      puntos: [
        {
          titulo: "Coordenadas geográficas",
          texto: "Latitud (paralelos, horizontal): 0°–90° N/S, referencia el Ecuador. Longitud (meridianos, vertical): 0°–180° E/O, referencia el Meridiano de Greenwich.",
        },
        {
          titulo: "Husos horarios",
          texto: "24 husos de 15° cada uno. Hacia el Este +1 h por huso; hacia el Oeste −1 h. México: UTC−5 (Quintana Roo), UTC−6 (Centro), UTC−7 (Pacífico), UTC−8 (Noroeste). Línea de Fecha Internacional: 180°.",
        },
        {
          titulo: "Placas tectónicas",
          texto: "Borde convergente → subducción, sismos + volcanes (Cinturón de Fuego, 90% de sismos). Borde divergente → dorsal oceánica, magma nuevo (Atlántico). Borde transformante → fallas, sismos sin volcanes (Falla de San Andrés).",
        },
        {
          titulo: "Formas del relieve",
          texto: "Llanuras (0–200 m): mayor densidad poblacional y agricultura mecanizada. Mesetas: ganadería y minería. Montañas: barreras climáticas y reservorios de agua dulce. México: predominan sierras y el Altiplano Central.",
        },
        {
          titulo: "Ciclo hidrológico",
          texto: "Relaciona 4 esferas: hidrósfera, atmósfera, litósfera y biósfera. Fases clave: evaporación → condensación → precipitación → escurrimiento/infiltración → transpiración.",
        },
      ],
    },

  ],
};
