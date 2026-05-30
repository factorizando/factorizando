// Presentación: Geografía Humana — el paisaje cultural
// Tema 2 de la Guía UNAM 2023 (Área 1): regiones naturales, deterioro
// ambiental, población, migraciones, economía mundial y México.

export const PRESENTACION = {
  id: "geografia-humana",
  titulo: "Geografía Humana",
  materia: "Geografía",
  subtema: "Tema 2 · UNAM Licenciatura",
  slides: [

    // ── Portada ────────────────────────────────────────────────────────────────
    {
      id: 0,
      tipo: "portada",
      titulo: "Geografía Humana: el paisaje cultural",
      subtitulo: "Regiones naturales · Deterioro ambiental · Población · Migración · Economía mundial",
      etiqueta: "Geografía · Tema 2 · UNAM Licenciatura",
    },

    // ── Regiones naturales ────────────────────────────────────────────────────
    {
      id: 1,
      tipo: "regla_rica",
      etiqueta: "1 / 6 — Regiones naturales",
      titulo: "Las regiones naturales (biomas): distribución y recursos",
      bloques: [
        {
          tipo: "texto",
          texto: "Las regiones naturales o biomas son grandes áreas de la Tierra con clima, suelo, flora y fauna característicos. Su distribución depende principalmente de la temperatura (latitud y altitud) y la precipitación. Cada bioma posee recursos naturales renovables (agua, madera, pesca) y no renovables (minerales, petróleo) que determinan las actividades económicas de la región. México es uno de los países con mayor diversidad de biomas del planeta.",
        },
        {
          tipo: "diagrama",
          id: "geo-regiones",
          titulo: "Biomas mundiales y principales biomas de México (norte → sur)",
        },
        {
          tipo: "tabla",
          titulo: "Recursos de las principales regiones naturales",
          columnas: ["Región natural", "Recurso renovable clave", "Recurso no renovable clave"],
          filas: [
            { tiempo: "Selva tropical",         correcto: "Biodiversidad, madera, agua",      error: "Minerales; petróleo (subsuelo)" },
            { tiempo: "Bosque templado",         correcto: "Madera, agua, suelos fértiles",    error: "Carbón, minerales metálicos" },
            { tiempo: "Estepa / pastizal",       correcto: "Ganadería, agricultura de secano", error: "Gas natural, carbón" },
            { tiempo: "Desierto subtropical",    correcto: "Energía solar, minería artesanal", error: "Petróleo, gas, minerales" },
            { tiempo: "Tundra / polar",          correcto: "Pesca, fauna silvestre",           error: "Petróleo ártico, gas natural" },
          ],
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "La actividad humana altera las regiones naturales — la deforestación es su efecto más visible",
          correcto: "La selva tropical (mayor biodiversidad del planeta) pierde cada año millones de hectáreas por agricultura, ganadería y minería. Una vez destruida, su recuperación tarda siglos.",
          incorrecto: "Pensar que las regiones naturales son estables: la concentración de población y la industria las modifican constantemente, generando zonas de riesgo ambiental.",
        },
      ],
    },
    {
      id: 2,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Regiones naturales",
      pregunta: "«¿Cuál de los siguientes biomas posee la mayor biodiversidad del planeta y constituye el principal reservorio mundial de especies, agua dulce y recursos genéticos?»",
      opciones: [
        "La tundra ártica, por su extensión y por preservar el permafrost con recursos minerales.",
        "La selva tropical húmeda, por su alta precipitación, calor constante y enorme diversidad de especies.",
        "La estepa templada, por su suelo fértil y su extensa cobertura en el hemisferio Norte.",
      ],
      correcta: 1,
      explicacion: "La selva tropical húmeda (o bosque tropical lluvioso) concentra entre el 50 y el 80% de todas las especies del planeta en apenas el 6% de la superficie terrestre. Su alta precipitación (>1,500 mm/año) y temperatura constante (>18°C) generan las condiciones para esta extraordinaria diversidad. Se encuentra principalmente en la cuenca del Amazonas, el Congo y el sudeste asiático.",
      pasos: [],
    },

    // ── Deterioro ambiental ───────────────────────────────────────────────────
    {
      id: 3,
      tipo: "regla_rica",
      etiqueta: "2 / 6 — Deterioro ambiental",
      titulo: "Problemas de deterioro ambiental global: causas y consecuencias",
      bloques: [
        {
          tipo: "texto",
          texto: "La actividad industrial, agropecuaria y el consumo doméstico han generado cuatro grandes crisis ambientales globales: el cambio climático por efecto invernadero, el adelgazamiento de la capa de ozono, la contaminación y sobreexplotación del agua, y los derrames de petróleo (mareas negras). Todos son problemas de causas humanas con consecuencias que afectan a ecosistemas y poblaciones en todo el planeta.",
        },
        {
          tipo: "diagrama",
          id: "geo-deterioro",
          titulo: "Los cuatro grandes problemas de deterioro ambiental",
        },
        {
          tipo: "tabla",
          titulo: "Causas y consecuencias del deterioro ambiental",
          columnas: ["Problema", "Principal causa", "Consecuencia directa"],
          filas: [
            { tiempo: "Cambio climático",   correcto: "Gases de efecto invernadero (CO₂, CH₄, N₂O)",       error: "↑ Temperatura global, deshielo, ↑ nivel del mar" },
            { tiempo: "Capa de ozono",      correcto: "Clorofluorocarbonos (CFC) en aerosoles y refriger.", error: "↑ Radiación UV, cáncer de piel, daño a ecosistemas" },
            { tiempo: "Agua",               correcto: "Actividad agropecuaria, industrial y doméstica",     error: "Escasez, enfermedades, pérdida de acuíferos" },
            { tiempo: "Marea negra",        correcto: "Derrames en extracción y transporte de petróleo",    error: "Muerte de ecosistemas marinos, aves y peces" },
          ],
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "Efecto invernadero ≠ destrucción de la capa de ozono — son fenómenos distintos",
          correcto: "El efecto invernadero lo causan el CO₂ y CH₄ (quema de combustibles) → calentamiento global. La capa de ozono la destruyen los CFC (aerosoles) → más radiación UV.",
          incorrecto: "Confundir ambos problemas es un error frecuente en el UNAM: los gases responsables son diferentes y los efectos también.",
        },
      ],
    },
    {
      id: 4,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Deterioro ambiental",
      pregunta: "«La destrucción de la capa de ozono estratosférica, que protege la vida terrestre de la radiación ultravioleta, se debe principalmente a:»",
      opciones: [
        "El dióxido de carbono (CO₂) emitido por la combustión de gasolina y carbón.",
        "Los clorofluorocarbonos (CFC) utilizados en aerosoles, refrigerantes y espumas.",
        "El metano (CH₄) producido por la ganadería intensiva y los vertederos.",
      ],
      correcta: 1,
      explicacion: "Los CFC (clorofluorocarbonos) son los principales responsables del adelgazamiento de la capa de ozono. Al ascender a la estratósfera, las moléculas de cloro que liberan reaccionan con el ozono (O₃) y lo destruyen. Esto permite que mayor radiación UV llegue a la superficie, causando cáncer de piel, cataratas y daño a ecosistemas acuáticos. El CO₂ y el CH₄ causan el efecto invernadero, no el deterioro del ozono.",
      pasos: [],
    },

    // ── Población ─────────────────────────────────────────────────────────────
    {
      id: 5,
      tipo: "regla_rica",
      etiqueta: "3 / 6 — Población",
      titulo: "La población mundial y de México: distribución y crecimiento",
      bloques: [
        {
          tipo: "texto",
          texto: "La población mundial superó los 8,000 millones de personas en 2023. Su distribución es muy desigual: se concentra en zonas con clima templado, agua disponible y suelos fértiles (valles fluviales, llanuras costeras, Asia del Este, Europa Occidental). Los 'vacíos demográficos' son las zonas desérticas, polares y montañas elevadas. México tiene ~130 millones de habitantes y concentra el 20% en la Zona Metropolitana del Valle de México.",
        },
        {
          tipo: "diagrama",
          id: "geo-poblacion",
          titulo: "Estructura poblacional: países en desarrollo vs. países desarrollados",
        },
        {
          tipo: "tabla",
          titulo: "Conceptos demográficos clave para el UNAM",
          columnas: ["Concepto", "Definición", "Implicación"],
          filas: [
            { tiempo: "Tasa de natalidad",       correcto: "Nacimientos por cada 1,000 hab./año",            error: "Alta (>20‰) en países en desarrollo; baja (<12‰) en desarrollados" },
            { tiempo: "Tasa de mortalidad",       correcto: "Defunciones por cada 1,000 hab./año",            error: "Alta correlación con pobreza y falta de servicios médicos" },
            { tiempo: "Crecimiento nat.",         correcto: "Natalidad − Mortalidad",                         error: "México ~1.1%; Alemania ~−0.1% (decrecimiento)" },
            { tiempo: "Densidad de población",    correcto: "Hab./km² en un territorio",                      error: "Bangladesh ~1,100 hab./km²; Mongolia ~2 hab./km²" },
            { tiempo: "Transición demográfica",   correcto: "Paso de alta a baja natalidad y mortalidad",     error: "México está en etapa intermedia de transición" },
          ],
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "La PIRÁMIDE POBLACIONAL revela la estructura por edad y el futuro del país",
          correcto: "Base ancha (muchos jóvenes) = país en desarrollo con alta natalidad. Forma de bulbo/campana = país desarrollado con población envejecida y baja natalidad.",
          incorrecto: "Una pirámide invertida no significa que hay más mujeres que hombres: significa que hay más personas mayores que jóvenes (país envejecido).",
        },
      ],
    },
    {
      id: 6,
      tipo: "ejercicio",
      etiqueta: "Reactivo 3 — Población",
      pregunta: "«Las zonas de mayor concentración de la población mundial corresponden principalmente a:»",
      opciones: [
        "Las regiones polares y desérticas, donde los recursos naturales son más abundantes y accesibles.",
        "Los valles fluviales, llanuras costeras y zonas de clima templado con acceso al agua.",
        "Las mesetas elevadas por encima de los 3,000 metros, donde el clima es más frío y estable.",
      ],
      correcta: 1,
      explicacion: "La población mundial se concentra en áreas que ofrecen condiciones favorables para asentarse: valles fluviales fértiles (Nilo, Ganges, Yang-Tsé), llanuras costeras, climas templados y acceso a agua. Los ejemplos más claros son Asia del Este y del Sur (60% de la población mundial), Europa Occidental y el noreste de América. Los desiertos, polos y montañas altas son vacíos demográficos.",
      pasos: [],
    },

    // ── Migraciones ───────────────────────────────────────────────────────────
    {
      id: 7,
      tipo: "regla_rica",
      etiqueta: "4 / 6 — Migraciones",
      titulo: "Movimientos migratorios: causas y consecuencias",
      bloques: [
        {
          tipo: "texto",
          texto: "La migración es el desplazamiento de personas de un lugar de origen a un destino, motivado por factores de expulsión (pobreza, violencia, desempleo, desastres) y factores de atracción (mejores salarios, seguridad, servicios, oportunidades). Se clasifica en internacional (entre países) o interna (dentro del país), y en temporal o definitiva. México es simultáneamente país de origen, tránsito y destino de migrantes.",
        },
        {
          tipo: "tabla",
          titulo: "Tipos de migración y sus características",
          columnas: ["Tipo", "Principales flujos", "Factores de expulsión / atracción"],
          filas: [
            { tiempo: "Internacional Sur-Norte", correcto: "Latinoamérica → EUA; África/Oriente → Europa",  error: "Expulsión: pobreza, violencia · Atracción: salarios, seguridad" },
            { tiempo: "Nacional campo-ciudad",   correcto: "Zonas rurales → CDMX, Guadalajara, Monterrey",  error: "Expulsión: falta de oportunidades · Atracción: empleo, servicios" },
            { tiempo: "Migrante de tránsito",    correcto: "Centroamérica cruza México hacia EUA",           error: "México como corredor migratorio; riesgos en el trayecto" },
            { tiempo: "Migración de retorno",    correcto: "Migrantes regresan al país de origen",           error: "Crisis económica en destino o mejora en el lugar de origen" },
          ],
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "La migración campo-ciudad no es un fenómeno solo del presente — lleva décadas en México",
          correcto: "Desde los años 1950-1970 (industrialización por sustitución de importaciones) México ya experimentó un éxodo rural masivo hacia la Ciudad de México y otras metrópolis.",
          incorrecto: "Pensar que la migración campo-ciudad es reciente: para 2020 ya el 80% de la población mexicana era urbana, resultado de décadas de migración interna.",
        },
        {
          tipo: "trampa",
          letra: "B",
          titulo: "Las remesas son la segunda fuente de divisas de México — detrás de la manufactura",
          correcto: "En 2023 México recibió más de 63,000 millones de dólares en remesas, principalmente desde EUA. Superan al turismo y al petróleo.",
          incorrecto: "Subestimar el impacto económico de la migración: las remesas sostienen directamente a millones de familias y municipios rurales.",
        },
      ],
    },
    {
      id: 8,
      tipo: "ejercicio",
      etiqueta: "Reactivo 4 — Migraciones",
      pregunta: "«La principal causa del proceso migratorio campo-ciudad en México durante el siglo XX fue:»",
      opciones: [
        "El envejecimiento de la población rural que buscaba climas más cálidos en las ciudades costeras.",
        "La búsqueda de empleo, servicios educativos y de salud que las zonas rurales no ofrecían.",
        "La decisión gubernamental de reubicar campesinos en las principales ciudades industriales.",
      ],
      correcta: 1,
      explicacion: "El éxodo campo-ciudad en México respondió principalmente a factores económicos: la falta de oportunidades de empleo, bajos ingresos agrícolas, escasa infraestructura de salud y educación en el campo, y la concentración de industria, servicios y oportunidades en las ciudades. Este proceso transformó a México de un país predominantemente rural (1950) a uno mayoritariamente urbano (>80% en 2020).",
      pasos: [],
    },

    // ── Economía mundial ──────────────────────────────────────────────────────
    {
      id: 9,
      tipo: "regla_rica",
      etiqueta: "5 / 6 — Economía mundial",
      titulo: "Países desarrollados y en desarrollo: la brecha y la globalización",
      bloques: [
        {
          tipo: "texto",
          texto: "El mundo se divide entre países con alto nivel de desarrollo (IDH > 0.8, alto ingreso per cápita, baja natalidad, alta esperanza de vida) y países en vías de desarrollo (IDH menor, más dependientes de la exportación de materias primas). La globalización económica ha profundizado esta brecha mediante las empresas trasnacionales y organismos como el FMI y el Banco Mundial. Los bloques económicos regionales (T-MEC, UE, APEC) concentran el 85% del comercio mundial.",
        },
        {
          tipo: "diagrama",
          id: "geo-economia",
          titulo: "Indicadores de desarrollo y principales bloques económicos",
        },
        {
          tipo: "tabla",
          titulo: "Indicadores socioeconómicos: comparación clave",
          columnas: ["Indicador", "Países desarrollados", "Países en desarrollo"],
          filas: [
            { tiempo: "IDH",                 correcto: "> 0.80",          error: "0.40 – 0.75" },
            { tiempo: "PIB per cápita",      correcto: "> US$ 30,000",    error: "US$ 1,000 – 10,000" },
            { tiempo: "Esperanza de vida",   correcto: "> 78 años",       error: "60 – 72 años" },
            { tiempo: "Alfabetismo",         correcto: "> 99%",           error: "60 – 85%" },
            { tiempo: "Tasa de natalidad",   correcto: "8 – 12 ‰ (baja)", error: "20 – 35 ‰ (alta)" },
          ],
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "El IDH incluye tres dimensiones — no solo el ingreso económico",
          correcto: "IDH = (Esperanza de vida + Educación + Ingreso per cápita) / 3. Un país puede tener petróleo pero IDH bajo si su población no tiene acceso a educación ni salud.",
          incorrecto: "Confundir IDH con PIB per cápita: Arabia Saudita tiene alto PIB pero IDH moderado por desigualdad en educación y condición de la mujer.",
        },
      ],
    },
    {
      id: 10,
      tipo: "ejercicio",
      etiqueta: "Reactivo 5 — Economía mundial",
      pregunta: "«¿Cuál de los siguientes indicadores socioeconómicos distingue de manera integral a un país desarrollado de uno en vías de desarrollo?»",
      opciones: [
        "La extensión territorial y la cantidad de recursos naturales disponibles en el subsuelo.",
        "El Índice de Desarrollo Humano (IDH) alto, baja natalidad y elevada esperanza de vida.",
        "La densidad de población y la antigüedad histórica de su civilización.",
      ],
      correcta: 1,
      explicacion: "El IDH integra tres dimensiones del desarrollo: salud (esperanza de vida), educación (años de escolaridad) e ingreso (PIB per cápita). Los países más desarrollados tienen IDH > 0.8, baja natalidad (<12‰) y esperanza de vida >78 años. La extensión del territorio y los recursos naturales no garantizan desarrollo: hay países pequeños y sin recursos naturales con alto IDH (Singapur, Luxemburgo) y países ricos en recursos con bajo desarrollo.",
      pasos: [],
    },

    // ── México: organización política y economía ───────────────────────────────
    {
      id: 11,
      tipo: "regla_rica",
      etiqueta: "6 / 6 — México",
      titulo: "México: organización política y aspectos económicos",
      bloques: [
        {
          tipo: "texto",
          texto: "México es una república federal compuesta por 31 estados y la Ciudad de México. Limita al norte con EUA (3,185 km de frontera), al sur con Guatemala (965 km) y Belice (276 km). Tiene costas en el Pacífico (7,828 km, la más larga) y en el Golfo de México y Mar Caribe (3,294 km). Su economía combina manufactura (principal sector exportador), agropecuaria, minería, petróleo y servicios.",
        },
        {
          tipo: "tabla",
          titulo: "Principales zonas económicas de México",
          columnas: ["Sector / actividad", "Principales zonas productoras", "Importancia"],
        filas: [
            { tiempo: "Agricultura",     correcto: "Sinaloa, Sonora, Bajío, Veracruz, Chiapas",     error: "México: top mundial en aguacate, jitomate, chile, café, caña" },
            { tiempo: "Ganadería",       correcto: "Jalisco, Veracruz, Sonora, Chihuahua",           error: "Ganadería bovina (carne y leche) — zona Norte y Occidente" },
            { tiempo: "Minería",         correcto: "Sonora (cobre), Zacatecas (plata, oro)",         error: "México: 1er productor mundial de plata; top 10 en oro" },
            { tiempo: "Petróleo",        correcto: "Tabasco, Campeche (Golfo de México)",            error: "PEMEX; Sonda de Campeche = principal zona productora" },
            { tiempo: "Manufactura",     correcto: "Monterrey, Bajío, CDMX, Maquila (frontera N.)", error: "Automotriz, electrónica, aeroespacial; mayor rubro de exportación" },
            { tiempo: "Turismo",         correcto: "Cancún, Los Cabos, CDMX, Puerto Vallarta",       error: "3a fuente de divisas tras manufactura y remesas" },
          ],
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "México pertenece al T-MEC, la UE NO — sus exportaciones van mayoritariamente a EUA",
          correcto: "El 80% de las exportaciones mexicanas tienen como destino EUA. El T-MEC (2020) sustituyó al TLCAN (1994) y es el marco que regula este comercio bilateral.",
          incorrecto: "Confundir bloques: México es parte del T-MEC (con EUA y Canadá) y del APEC, pero NO de la Unión Europea.",
        },
      ],
    },
    {
      id: 12,
      tipo: "ejercicio",
      etiqueta: "Reactivo 6 — México",
      pregunta: "«México comparte fronteras terrestres con:»",
      opciones: [
        "Estados Unidos al norte, y únicamente con Guatemala al sur.",
        "Estados Unidos al norte, y con Guatemala y Belice al sur.",
        "Estados Unidos y Canadá al norte, y con Guatemala y Belice al sur.",
      ],
      correcta: 1,
      explicacion: "México limita al norte con los Estados Unidos (frontera de 3,185 km, la más larga del mundo entre un país desarrollado y uno en desarrollo). Al sur limita con Guatemala (965 km) y Belice (276 km). México no comparte frontera con Canadá: ambos son vecinos de EUA pero no entre sí. Su territorio ocupa 1,964,375 km², el 14° país más grande del mundo.",
      pasos: [],
    },

    // ── Resumen ───────────────────────────────────────────────────────────────
    {
      id: 13,
      tipo: "resumen",
      titulo: "Lo más importante del Tema 2",
      etiqueta: "Resumen",
      puntos: [
        {
          titulo: "Regiones naturales",
          texto: "Biomas determinados por temperatura + precipitación. Selva tropical = mayor biodiversidad. Recursos renovables (madera, agua, pesca) y no renovables (minerales, petróleo). México: desierto (Norte) → bosque pino-encino (Sierra) → selva (Sur).",
        },
        {
          titulo: "Deterioro ambiental",
          texto: "Cambio climático: CO₂, CH₄, N₂O → calentamiento global. Capa de ozono: CFC → más UV. Agua: agropecuaria + industria = escasez. Marea negra: derrame de petróleo = muerte de ecosistemas marinos.",
        },
        {
          titulo: "Población y migración",
          texto: "Mundo: >8,000 millones. Concentración en valles, llanuras templadas y Asia. Pirámide joven = país en desarrollo; pirámide envejecida = desarrollado. Migración: sur-norte (internacional) y campo-ciudad (nacional). Remesas: 2da fuente de divisas de México.",
        },
        {
          titulo: "Economía mundial",
          texto: "IDH = esperanza de vida + educación + ingreso. Desarrollados: IDH > 0.8, alta esperanza de vida, baja natalidad. Bloques: T-MEC (EUA, Canadá, México), UE (Alemania), APEC (Asia-Pacífico). Globalización: trasnacionales y FMI.",
        },
        {
          titulo: "México",
          texto: "32 estados. Fronteras: EUA (norte), Guatemala y Belice (sur). Economía: manufactura (1er exportador), plata (1er mundial), petróleo (Golfo), turismo (3er rubro). T-MEC: 80% exportaciones van a EUA.",
        },
      ],
    },

  ],
};
