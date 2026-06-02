// Presentación: Geografía — Recursos, Mar y Política
// Subtemas complementarios de la Guía UNAM 2023:
//   1.3.1.4 Minerales · 1.3.2.2-5 Ríos, Lagos y Mar
//   2.1.4 Ciclones · 2.5 Organización política · División de México

export const PRESENTACION = {
  id: "geografia-complemento",
  titulo: "Geografía: Recursos, Mar y Política",
  materia: "Geografía",
  subtema: "Complemento Temas 1 y 2 · UNAM",
  slides: [

    // ── Portada ────────────────────────────────────────────────────────────────
    {
      id: 0,
      tipo: "portada",
      titulo: "Geografía: Recursos, Mar y Política",
      subtitulo: "Minerales · Ríos y lagos · Mar · Ciclones · Organización política · División de México",
      etiqueta: "Geografía · Complemento · UNAM Licenciatura",
    },

    // ── Minerales ─────────────────────────────────────────────────────────────
    {
      id: 1,
      tipo: "regla_rica",
      etiqueta: "1 / 6 — Minerales",
      titulo: "Minerales preciosos, industriales y energéticos",
      bloques: [
        {
          tipo: "texto",
          texto: "Los minerales se clasifican según su uso económico. Los preciosos (oro, plata, platino) se usan en joyería, electrónica y reservas monetarias. Los industriales (hierro, cobre, zinc, aluminio) son base de la manufactura. Los energéticos (petróleo, gas, carbón, uranio) mueven la economía mundial. México destaca como primer productor mundial de plata y está entre los diez principales productores de oro, cobre y zinc.",
        },
        {
          tipo: "diagrama",
          id: "geo-minerales",
          titulo: "Tipos de minerales, principales productores mundiales y posición de México",
        },
        {
          tipo: "tabla",
          titulo: "Minerales clave y su distribución en México",
          columnas: ["Mineral", "Zona productora en México", "Importancia mundial de México"],
          filas: [
            { tiempo: "Plata (Ag)",   correcto: "Zacatecas, Guanajuato, Durango",          error: "1er productor mundial" },
            { tiempo: "Oro (Au)",     correcto: "Sonora, Guerrero, Durango",                error: "Top 10 mundial" },
            { tiempo: "Cobre (Cu)",   correcto: "Sonora (Cananea — mayor mina México)",     error: "Top 10 mundial" },
            { tiempo: "Zinc (Zn)",    correcto: "Zacatecas, Chihuahua, San Luis Potosí",    error: "Top 5 mundial" },
            { tiempo: "Petróleo",     correcto: "Campeche (Sonda), Tabasco, Veracruz",      error: "Pemex; exportación a EUA" },
            { tiempo: "Gas natural",  correcto: "Tamaulipas, Veracruz, Tabasco",            error: "Producción en declive; importación de EUA" },
          ],
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "México es rico en minerales pero su distribución es muy desigual regionalmente",
          correcto: "El norte de México (Sonora, Chihuahua, Zacatecas, Durango) concentra la minería metálica. El sur (Campeche, Tabasco) concentra los hidrocarburos. El Altiplano Central tiene ambos.",
          incorrecto: "Pensar que el petróleo y la minería metálica se distribuyen por igual en todo el territorio: su localización depende de la geología específica de cada zona.",
        },
      ],
    },
    {
      id: 2,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Minerales",
      pregunta: "«México ocupa el primer lugar mundial en la producción de:»",
      opciones: [
        "Cobre, gracias a las grandes minas a cielo abierto en Sonora.",
        "Plata, con yacimientos concentrados en Zacatecas y Guanajuato.",
        "Petróleo, siendo el principal exportador de Latinoamérica.",
      ],
      correcta: 1,
      explicacion: "México es el primer productor mundial de plata, metal que extrae principalmente en Zacatecas (que produce cerca del 50% del total nacional), Guanajuato, Durango y Chihuahua. En cobre ocupa el 10mo lugar mundial (Sonora) y en petróleo ya no está entre los primeros, pues su producción ha caído desde los picos de los años 2000.",
      pasos: [],
    },

    // ── Ríos y lagos ──────────────────────────────────────────────────────────
    {
      id: 3,
      tipo: "regla_rica",
      etiqueta: "2 / 6 — Ríos y lagos",
      titulo: "Principales ríos y lagos del mundo y de México",
      bloques: [
        {
          tipo: "texto",
          texto: "Los ríos y lagos son fuentes de agua dulce, rutas de transporte, generadores de energía hidroeléctrica y núcleos de asentamiento humano. El río más largo del mundo es el Nilo (6,853 km); el de mayor caudal, el Amazonas. En México, el Bravo forma la frontera con EUA; el Lerma-Santiago es el más importante para la población del Altiplano; el Usumacinta-Grijalva tiene el mayor caudal. Los lagos más grandes del mundo están en Norteamérica (Grandes Lagos) y Asia Central (Mar Caspio).",
        },
        {
          tipo: "diagrama",
          id: "geo-rios",
          titulo: "Comparación de longitud: principales ríos del mundo y de México",
        },
        {
          tipo: "tabla",
          titulo: "Principales ríos y lagos: relación con población y economía",
          columnas: ["Cuerpo de agua", "Importancia para la población", "Actividad económica"],
          filas: [
            { tiempo: "Nilo (África)",         correcto: "Sustenta al 95% de la población egipcia",  error: "Agricultura, turismo (Delta del Nilo)" },
            { tiempo: "Amazonas (S.Am.)",       correcto: "Menor densidad, mayor biodiversidad",      error: "Pesca, minería, navegación fluvial" },
            { tiempo: "Yang-Tsé (China)",       correcto: "Más de 400 millones de personas",          error: "Mayor presa del mundo (Tres Gargantas)" },
            { tiempo: "Bravo/Grande (México)",  correcto: "Frontera México-EUA, abastece ciudades",   error: "Riego en zona norte; conflicto de agua" },
            { tiempo: "Lerma-Santiago (Méx.)",  correcto: "Abastece CDMX, Guadalajara, Toluca",      error: "Agricultura del Bajío e industria" },
            { tiempo: "Mar Caspio",             correcto: "Frontera de 5 países; mayor lago del mundo", error: "Petróleo, gas natural, pesca de esturión" },
          ],
        },
      ],
    },
    {
      id: 4,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Ríos y lagos",
      pregunta: "«El río __ forma la frontera natural entre México y Estados Unidos, y su aprovechamiento hídrico ha generado acuerdos y conflictos entre ambos países.»",
      opciones: [
        "Lerma-Santiago, que nace en el Estado de México y desemboca en el Pacífico.",
        "Bravo (o Grande del Norte), que corre de El Paso/Ciudad Juárez hasta el Golfo de México.",
        "Usumacinta, que marca parcialmente la frontera con Guatemala al suroeste.",
      ],
      correcta: 1,
      explicacion: "El río Bravo (llamado Rio Grande en EUA) forma la frontera entre México y EUA desde Ciudad Juárez/El Paso hasta su desembocadura en el Golfo de México, recorriendo aproximadamente 2,018 km como límite fronterizo (total: ~3,034 km). Su agua es disputada por la intensa demanda agrícola e industrial en ambos lados de la frontera. El Usumacinta forma parte de la frontera con Guatemala, no con EUA.",
      pasos: [],
    },

    // ── El mar ────────────────────────────────────────────────────────────────
    {
      id: 5,
      tipo: "regla_rica",
      etiqueta: "3 / 6 — El mar",
      titulo: "El mar: corrientes marinas, mareas y recursos",
      bloques: [
        {
          tipo: "texto",
          texto: "Las corrientes marinas son flujos continuos de agua oceánica impulsados por el viento, la rotación terrestre y las diferencias de temperatura y salinidad. Las corrientes cálidas moderan el clima de las costas que bañan (más húmedas y templadas). Las corrientes frías generan afloramiento de nutrientes, lo que favorece la pesca pero produce costas más áridas y con neblina. Las mareas son variaciones periódicas del nivel del mar causadas por la atracción gravitacional de la Luna y el Sol.",
        },
        {
          tipo: "tabla",
          titulo: "Corrientes marinas principales y sus efectos",
          columnas: ["Corriente", "Tipo", "Efecto climático y económico"],
          filas: [
            { tiempo: "Corriente del Golfo",    correcto: "Cálida",  error: "Calienta Europa Occidental; navigación favorecida" },
            { tiempo: "Corriente de Humboldt",  correcto: "Fría",    error: "Costa árida del Pacífico S.Am.; rica en pesca (anchoveta)" },
            { tiempo: "El Niño (ENOS)",          correcto: "Cálida anómala", error: "Altera lluvias globalmente; sequías y huracanes" },
            { tiempo: "La Niña",                correcto: "Fría anómala",   error: "Intensifica lluvias en Asia y sequías en Sudamérica" },
            { tiempo: "Corriente N. del Pacífico", correcto: "Cálida", error: "Modera clima de costas del noroeste de EUA y Canadá" },
          ],
        },
        {
          tipo: "tabla",
          titulo: "Recursos del mar y su aprovechamiento",
          columnas: ["Recurso", "Descripción", "Zonas más productivas"],
          filas: [
            { tiempo: "Pesca",                  correcto: "Banco de especies de aguas frías y cálidas",    error: "Norpacífico, Atlántico Norte, Humboldt" },
            { tiempo: "Petróleo y gas",          correcto: "Plataformas continentales submarinas",          error: "Golfo Pérsico, Golfo de México, Mar del Norte" },
            { tiempo: "Nódulos polimetálicos",   correcto: "Manganeso, cobre, níquel en fondos marinos",   error: "Pacífico central a grandes profundidades" },
            { tiempo: "Energía mareomotriz",     correcto: "Generación eléctrica por mareas",              error: "Bretaña (Francia), bahía de Fundy (Canadá)" },
          ],
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "El Niño ≠ huracán — son fenómenos distintos aunque ambos se relacionan con el mar",
          correcto: "El Niño (ENOS) es un calentamiento anómalo del Pacífico tropical que altera la circulación atmosférica global → sequías, inundaciones, cambios en pesca. Los huracanes son tormentas ciclónicas tropicales locales.",
          incorrecto: "Confundir El Niño con huracanes: El Niño inhibe los huracanes en el Atlántico pero puede intensificarlos en el Pacífico.",
        },
      ],
    },
    {
      id: 6,
      tipo: "ejercicio",
      etiqueta: "Reactivo 3 — El mar",
      pregunta: "«La Corriente del Golfo tiene una importancia climática fundamental porque:»",
      opciones: [
        "Enfría las costas del este de Norteamérica, generando condiciones favorables para la pesca de profundidad.",
        "Transporta agua cálida del Caribe hacia Europa Occidental, moderando su clima e impidiendo inviernos más severos.",
        "Produce el fenómeno de El Niño al acercarse a las costas del Pacífico sudamericano en años irregulares.",
      ],
      correcta: 1,
      explicacion: "La Corriente del Golfo (Gulf Stream) transporta agua tropical cálida desde el Golfo de México hacia el norte del Atlántico y las costas europeas. Gracias a ella, países como el Reino Unido, Irlanda, Noruega y los Países Bajos tienen temperaturas mucho más suaves de lo que correspondería a su latitud. Sin esta corriente, el norte de Europa sería significativamente más frío y menos habitable.",
      pasos: [],
    },

    // ── Ciclones ──────────────────────────────────────────────────────────────
    {
      id: 7,
      tipo: "regla_rica",
      etiqueta: "4 / 6 — Ciclones en México",
      titulo: "Zonas de riesgo por ciclones en México",
      bloques: [
        {
          tipo: "texto",
          texto: "Los ciclones tropicales (también llamados huracanes en el Atlántico y el Pacífico noreste) son tormentas de baja presión con vientos circulatorios intensos que se forman sobre aguas oceánicas cálidas (>26°C). México tiene dos costas con riesgo ciclónico: la del Pacífico (mayo-noviembre) y la del Golfo de México y Caribe (junio-noviembre). La escala Saffir-Simpson clasifica los huracanes en categorías del 1 al 5 según la velocidad del viento.",
        },
        {
          tipo: "diagrama",
          id: "geo-ciclones",
          titulo: "Temporadas ciclónicas, escala Saffir-Simpson y zonas de riesgo en México",
        },
        {
          tipo: "tabla",
          titulo: "Características de los ciclones que afectan a México",
          columnas: ["Característica", "Costa del Pacífico", "Costa del Golfo / Caribe"],
          filas: [
            { tiempo: "Temporada",         correcto: "15 mayo – 30 noviembre",           error: "1 junio – 30 noviembre" },
            { tiempo: "Pico de actividad", correcto: "Julio – octubre",                  error: "Agosto – octubre" },
            { tiempo: "Estados en riesgo", correcto: "Sinaloa, Nayarit, Jalisco, Guerrero, Oaxaca", error: "Q. Roo, Yucatán, Veracruz, Tamaulipas" },
            { tiempo: "Ciclón histórico",  correcto: "Patricia (2015) Cat. 5 — récord mundial", error: "Gilberto (1988) y Wilma (2005) Cat. 5" },
          ],
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "Un huracán Categoría 5 no es el doble de destructivo que un Categoría 1 — es exponencialmente peor",
          correcto: "Cat. 1: vientos 119–153 km/h (daño menor). Cat. 5: >252 km/h (destrucción catastrófica de viviendas, infraestructura y ecosistemas). El «Patricia» (Cat. 5, 2015) tuvo vientos de 325 km/h — récord del hemisferio occidental.",
          incorrecto: "Subestimar la diferencia entre categorías: el daño crece exponencialmente. Un Cat. 5 puede arrasar poblaciones enteras en pocas horas.",
        },
      ],
    },
    {
      id: 8,
      tipo: "ejercicio",
      etiqueta: "Reactivo 4 — Ciclones",
      pregunta: "«Los ciclones tropicales que afectan las costas del Golfo de México y el Mar Caribe tienen su período de mayor actividad entre:»",
      opciones: [
        "Enero y marzo, al inicio del año cuando los frentes fríos del norte impulsan la convección tropical.",
        "Agosto y octubre, cuando la temperatura superficial del Atlántico tropical es más elevada.",
        "Abril y junio, durante la primavera boreal cuando inicia el calentamiento del océano.",
      ],
      correcta: 1,
      explicacion: "La temporada oficial de huracanes en el Atlántico va del 1 de junio al 30 de noviembre, pero el pico de actividad ocurre de agosto a octubre cuando el Mar Caribe y el Golfo de México alcanzan sus temperaturas máximas (>26-28°C). El agua cálida es el «combustible» del ciclón: a mayor temperatura superficial, mayor potencia. La temporada del Pacífico oriental inicia dos semanas antes (15 de mayo).",
      pasos: [],
    },

    // ── Organización política mundial ─────────────────────────────────────────
    {
      id: 9,
      tipo: "regla_rica",
      etiqueta: "5 / 6 — Organización política",
      titulo: "Organización política mundial: nuevos países y zonas de tensión",
      bloques: [
        {
          tipo: "texto",
          texto: "El fin de la Guerra Fría (1989-1991) desencadenó la desintegración de varios estados multinacionales y el surgimiento de decenas de nuevos países, especialmente en Europa y Asia Central. Al mismo tiempo, persistieron y surgieron nuevas zonas de tensión política y conflicto armado. Hoy el mundo tiene 195 países reconocidos por la ONU. Los grandes bloques de poder se han reconfigurado desde la bipolaridad EUA-URSS hacia una multipolaridad con EUA, China, Rusia y la UE como actores principales.",
        },
        {
          tipo: "diagrama",
          id: "geo-organizacion",
          titulo: "Desintegración de estados y zonas de tensión política (post-1990)",
        },
        {
          tipo: "tabla",
          titulo: "Principales procesos de desintegración y unificación (post-Guerra Fría)",
          columnas: ["Proceso", "Año", "Resultado"],
          filas: [
            { tiempo: "Disolución de la URSS",   correcto: "1991",    error: "15 repúblicas independientes (Rusia, Ucrania, Kazajistán, países bálticos…)" },
            { tiempo: "Disolución de Yugoslavia", correcto: "1991–2008", error: "7 países: Eslovenia, Croacia, Bosnia, Serbia, Montenegro, Macedonia, Kosovo" },
            { tiempo: "División de Checoslovaquia", correcto: "1993",  error: "República Checa + Eslovaquia (divorcio de terciopelo)" },
            { tiempo: "Reunificación alemana",    correcto: "1990",    error: "Alemania Occidental + Oriental = Alemania unificada" },
            { tiempo: "Independencia Sudán del Sur", correcto: "2011", error: "Nación más nueva del mundo (Africa subsahariana)" },
            { tiempo: "Kosovo",                   correcto: "2008",    error: "Independencia de Serbia; reconocida por ~100 países" },
          ],
        },
        {
          tipo: "tabla",
          titulo: "Principales zonas de tensión política en el mundo",
          columnas: ["Zona / Conflicto", "Países involucrados", "Causa principal"],
          filas: [
            { tiempo: "Medio Oriente",        correcto: "Israel-Palestina, Siria, Irak",             error: "Disputas territoriales, religión y control del petróleo" },
            { tiempo: "Península de Corea",   correcto: "Corea del Norte vs. Corea del Sur / EUA",   error: "División ideológica desde 1953; amenaza nuclear norcoreana" },
            { tiempo: "Asia del Sur",         correcto: "India vs. Pakistán (Cachemira)",             error: "Disputa territorial desde la partición de 1947; ambos con armas nucleares" },
            { tiempo: "Europa del Este",      correcto: "Rusia vs. Ucrania (invasión 2022)",          error: "Expansión de la OTAN, control de territorio y recursos energéticos" },
            { tiempo: "África Subsahariana",  correcto: "Sahel, RD Congo, Etiopía",                  error: "Pobreza extrema, grupos armados no estatales, disputas étnicas y recursos" },
          ],
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "Las 15 repúblicas de la URSS no son lo mismo que los 7 países surgidos de Yugoslavia",
          correcto: "URSS → Rusia, Ucrania, Bielorrusia, Kazajistán, Uzbekistán, Georgia, Armenia, Azerbaiyán, Moldavia, Turkmenistán, Kirguistán, Tayikistán, Estonia, Letonia, Lituania (15 países).",
          incorrecto: "Confundir la disolución de la URSS (en Asia Central + Europa del Este) con la de Yugoslavia (solo en los Balcanes): son procesos distintos, aunque contemporáneos.",
        },
      ],
    },
    {
      id: 10,
      tipo: "ejercicio",
      etiqueta: "Reactivo 5 — Organización política",
      pregunta: "«La disolución de la Unión Soviética (URSS) en 1991 dio origen a:»",
      opciones: [
        "6 nuevos países en los Balcanes, incluyendo Rusia, Ucrania y Serbia.",
        "15 repúblicas independientes, entre ellas Rusia, Ucrania, Kazajistán y los países bálticos.",
        "20 estados federados que conforman hoy la Federación Rusa.",
      ],
      correcta: 1,
      explicacion: "La URSS se disolvió el 25 de diciembre de 1991, dando lugar a 15 repúblicas independientes: Rusia (la mayor), Ucrania, Bielorrusia, Kazajistán, Uzbekistán, Georgia, Armenia, Azerbaiyán, Moldavia, Turkmenistán, Kirguistán, Tayikistán, Estonia, Letonia y Lituania. Los países balcánicos (Serbia, Croacia, etc.) provienen de la disolución de Yugoslavia, un proceso distinto aunque simultáneo.",
      pasos: [],
    },

    // ── División política de México ────────────────────────────────────────────
    {
      id: 11,
      tipo: "regla_rica",
      etiqueta: "6 / 6 — México político",
      titulo: "División política de México: fronteras, estados y regiones",
      bloques: [
        {
          tipo: "texto",
          texto: "México es una república federal presidencialista integrada por 32 entidades federativas (31 estados y la Ciudad de México). Ocupa 1,964,375 km² — el 14° país más grande del mundo y el 3° de América Latina. Su frontera norte con EUA (3,185 km) es de las más transitadas del planeta. Al sur limita con Guatemala (965 km) y Belice (276 km). Tiene dos litorales: el Pacífico (7,828 km, el más extenso) y el Golfo de México / Caribe (3,294 km).",
        },
        {
          tipo: "tabla",
          titulo: "Regiones de México: características y estados representativos",
          columnas: ["Región", "Estados representativos", "Características principales"],
          filas: [
            { tiempo: "Norte",        correcto: "Chihuahua, Sonora, Coahuila, Tamaulipas, Nuevo León, Baja California", error: "Desierto, ganadería, maquiladoras, minería; colinda con EUA" },
            { tiempo: "Centro-Norte", correcto: "Jalisco, Sinaloa, Durango, Nayarit, Zacatecas",     error: "Agricultura comercial (Sinaloa), agave, minería de plata" },
            { tiempo: "Centro",       correcto: "CDMX, Edo. Méx., Puebla, Hidalgo, Morelos, Tlaxcala", error: "Mayor densidad población; industria, manufactura, servicios" },
            { tiempo: "Occidente",    correcto: "Guanajuato, Querétaro, Michoacán, Colima, Aguascalientes", error: "Corredor industrial automotriz (Bajío); aguacate, berries" },
            { tiempo: "Sur-Sureste",  correcto: "Veracruz, Chiapas, Oaxaca, Tabasco, Guerrero",      error: "Mayor biodiversidad; petróleo (Tabasco); turismo; pobreza" },
            { tiempo: "Península Y.", correcto: "Yucatán, Campeche, Quintana Roo",                   error: "Turismo masivo (Cancún); petróleo (Campeche); playas" },
          ],
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "La Ciudad de México es una entidad federativa, NO un estado — es el equivalente al Distrito Federal anterior",
          correcto: "En 2016, el Distrito Federal se transformó en la Ciudad de México (CDMX), que funciona como entidad federativa autónoma con congreso local y jefe de Gobierno propio.",
          incorrecto: "Llamarle «estado» a la CDMX: es una entidad federativa con un régimen especial por ser la capital, pero no es un estado igual que Jalisco o Veracruz.",
        },
      ],
    },
    {
      id: 12,
      tipo: "ejercicio",
      etiqueta: "Reactivo 6 — México político",
      pregunta: "«¿Cuántas entidades federativas conforman la República Mexicana?»",
      opciones: [
        "30 estados y un Distrito Federal como sede de los poderes nacionales.",
        "32 entidades: 31 estados y la Ciudad de México como entidad federativa autónoma.",
        "33 entidades, pues la Ciudad de México y el Estado de México se contabilizan por separado dentro de la capital.",
      ],
      correcta: 1,
      explicacion: "México tiene 32 entidades federativas desde 2016: 31 estados (Aguascalientes, Baja California, Baja California Sur, Campeche, Chiapas, Chihuahua, Coahuila, Colima, Durango, Guanajuato, Guerrero, Hidalgo, Jalisco, México, Michoacán, Morelos, Nayarit, Nuevo León, Oaxaca, Puebla, Querétaro, Quintana Roo, San Luis Potosí, Sinaloa, Sonora, Tabasco, Tamaulipas, Tlaxcala, Veracruz, Yucatán y Zacatecas) más la Ciudad de México. El antiguo Distrito Federal se convirtió en CDMX en 2016.",
      pasos: [],
    },

    // ── Resumen ───────────────────────────────────────────────────────────────
    {
      id: 13,
      tipo: "resumen",
      titulo: "Lo más importante — Complemento",
      etiqueta: "Resumen",
      puntos: [
        {
          titulo: "Minerales",
          texto: "Preciosos: México es 1er productor mundial de plata (Zacatecas). Industriales: cobre en Sonora, zinc en Zacatecas. Energéticos: petróleo en Campeche/Tabasco, gas en Tamaulipas.",
        },
        {
          titulo: "Ríos y lagos",
          texto: "Nilo = más largo (6,853 km); Amazonas = mayor caudal. México: Bravo = frontera con EUA; Lerma-Santiago = abastece Altiplano; Usumacinta-Grijalva = mayor caudal en México. Mar Caspio = mayor lago del mundo.",
        },
        {
          titulo: "Mar y corrientes",
          texto: "Corrientes cálidas moderan climas costeros (Corriente del Golfo → Europa). Corrientes frías generan pesca y costas áridas (Humboldt → Perú-Chile). El Niño = calentamiento anómalo Pacífico → altera lluvias globales. Recursos: pesca, petróleo, nódulos polimetálicos.",
        },
        {
          titulo: "Ciclones en México",
          texto: "Pacífico: 15 mayo-30 nov. (pico julio-oct.). Atlántico/Caribe: 1 jun.-30 nov. (pico ago.-oct.). Escala Saffir-Simpson: Cat. 1 (119 km/h) a Cat. 5 (>252 km/h). Patricia (2015) = Cat. 5, récord hemisferio W.",
        },
        {
          titulo: "Organización política",
          texto: "URSS (1991) → 15 repúblicas. Yugoslavia (1991-2008) → 7 países. Checoslovaquia (1993) → 2. México: 32 entidades (31 estados + CDMX). Fronteras: EUA (norte), Guatemala y Belice (sur). Litorales: Pacífico (7,828 km) y Golfo/Caribe (3,294 km). Zonas de tensión política: Medio Oriente, Corea, Cachemira (India-Pakistán), Rusia-Ucrania, Sahel africano.",
        },
      ],
    },

  ],
};
