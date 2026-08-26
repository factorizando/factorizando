// Presentación: Geografía — Recursos, Mar y Política
// Subtemas complementarios de la Guía UNAM 2023:
//   1.3.1.4 Minerales · 1.3.2.2-5 Ríos, Lagos y Mar
//   2.1.4 Ciclones · 2.5 Organización política · División de México

export const PRESENTACION = {
  id: "geografia-complemento",
  titulo: "Geografía: Recursos, Mar y Política",
  materia: "Geografía",
  examenes: ["UNAM"],
  subtema: "Complemento Temas 1 y 2 · UNAM",
  slides: [
    {
      id: 0,
      tipo: "lienzo",
      bloques: [
        {
          tipo: "portada",
          kicker: "Geografía · Complemento · UNAM Licenciatura",
          titulo: "Geografía: Recursos, Mar y Política",
          subtitulo: "Minerales · Ríos y lagos · Mar · Ciclones · Organización política · División de México",
        },
      ],
    },
    {
      id: 1,
      tipo: "lienzo",
      etiqueta: "1 / 6 — Minerales",
      titulo: "Minerales preciosos, industriales y energéticos",
      bloques: [
        {
          tipo: "destacado",
          texto: "Los minerales se clasifican según su uso económico. Los preciosos (oro, plata, platino) se usan en joyería, electrónica y reservas monetarias. Los industriales (hierro, cobre, zinc, aluminio) son base de la manufactura. Los energéticos (petróleo, gas, carbón, uranio) mueven la economía mundial. México destaca como primer productor mundial de plata y está entre los diez principales productores de oro, cobre y zinc.",
        },
        {
          tipo: "figura",
          clave: "geo-minerales",
          titulo: "Tipos de minerales, principales productores mundiales y posición de México",
        },
        {
          tipo: "tabla",
          ancho: 7,
          alto: 1,
          titulo: "Minerales clave y su distribución en México",
          columnas: ["Mineral", "Zona productora en México", "Importancia mundial de México"],
          filas: [
            ["Plata (Ag)", "Zacatecas, Guanajuato, Durango", "1er productor mundial"],
            ["Oro (Au)", "Sonora, Guerrero, Durango", "Top 10 mundial"],
            ["Cobre (Cu)", "Sonora (Cananea — mayor mina México)", "Top 10 mundial"],
            ["Zinc (Zn)", "Zacatecas, Chihuahua, San Luis Potosí", "Top 5 mundial"],
            ["Petróleo", "Campeche (Sonda), Tabasco, Veracruz", "Pemex; exportación a EUA"],
            ["Gas natural", "Tamaulipas, Veracruz, Tabasco", "Producción en declive; importación de EUA"],
          ],
        },
        {
          tipo: "trampa",
          ancho: 5,
          revelar: true,
          letra: "A",
          titulo: "México es rico en minerales pero su distribución es muy desigual regionalmente",
          asi_es: "El norte de México (Sonora, Chihuahua, Zacatecas, Durango) concentra la minería metálica. El sur (Campeche, Tabasco) concentra los hidrocarburos. El Altiplano Central tiene ambos.",
          asi_no: "Pensar que el petróleo y la minería metálica se distribuyen por igual en todo el territorio: su localización depende de la geología específica de cada zona.",
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
          etiqueta: "Reactivo 1/5 — Minerales",
          enunciado: "«México ocupa el primer lugar mundial en la producción de:»",
          
          apoyoPie: "obsérvala antes de responder",
          opciones: [
            "Cobre, gracias a las grandes minas a cielo abierto en Sonora.",
            "Plata, con yacimientos concentrados en Zacatecas y Guanajuato.",
            "Petróleo, siendo el principal exportador de Latinoamérica.",
          ],
          correcta: 1,
          explicacion: "México es el primer productor mundial de plata, metal que extrae principalmente en Zacatecas (que produce cerca del 50% del total nacional), Guanajuato, Durango y Chihuahua. En cobre ocupa el 10mo lugar mundial (Sonora) y en petróleo ya no está entre los primeros, pues su producción ha caído desde los picos de los años 2000.",
        },
      ],
    },
    {
      id: 3,
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Reactivo 2/5 — Minerales",
          enunciado: "«Los minerales 'energéticos' son aquellos que se utilizan principalmente para:»",
          
          apoyoPie: "obsérvala antes de responder",
          opciones: [
            "La joyería, la electrónica y las reservas monetarias internacionales, como el oro y el platino.",
            "Generar energía como combustibles, entre ellos el petróleo, el gas natural, el carbón y el uranio.",
            "La manufactura de maquinaria y estructuras metálicas, como el hierro, el aluminio y el acero.",
          ],
          correcta: 1,
          explicacion: "Los minerales energéticos (o combustibles fósiles) son el petróleo, el gas natural, el carbón y el uranio (este último para energía nuclear). Se denominan energéticos porque su principal uso es la generación de energía (calor, electricidad, combustión). Los preciosos (oro, plata, platino) tienen valor monetario y ornamental; los industriales (hierro, cobre, zinc) sirven como materia prima manufacturera.",
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
          etiqueta: "Reactivo 3/5 — Minerales",
          enunciado: "«La mina de Cananea, en Sonora, es la más importante de México en la producción de:»",
          
          apoyoPie: "obsérvala antes de responder",
          opciones: [
            "Plata, pues sus vetas de sulfuros de plata son las más ricas del país en ley y volumen de producción.",
            "Cobre, siendo la mayor mina de este metal a cielo abierto en México y una de las más grandes de América Latina.",
            "Zinc, mineral del que México es top 5 mundial y que se concentra principalmente en el norte del país.",
          ],
          correcta: 1,
          explicacion: "La mina de Cananea (Sonora), operada por Grupo México, es la mayor mina de cobre del país y una de las más grandes de América Latina. Produce cobre en operaciones a cielo abierto desde finales del siglo XIX. Es históricamente significativa también por la huelga de mineros de 1906, considerada uno de los antecedentes de la Revolución Mexicana.",
        },
      ],
    },
    {
      id: 5,
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Reactivo 4/5 — Minerales",
          enunciado: "«La Sonda de Campeche, en el Golfo de México, es estratégica para la economía mexicana porque:»",
          
          apoyoPie: "obsérvala antes de responder",
          opciones: [
            "Es la zona con mayor producción de gas natural del país, que abastece principalmente al norte de México.",
            "Es la principal zona de extracción petrolera de México, donde se ubica el complejo Cantarell y otros campos que han producido la mayor parte del petróleo nacional.",
            "Contiene los depósitos más ricos de nódulos polimetálicos del Pacífico, con manganeso, cobre y níquel.",
          ],
          correcta: 1,
          explicacion: "La Sonda de Campeche es la zona marina más importante para la producción petrolera de México. En ella se ubica el complejo Cantarell, que durante los años 2000 fue el segundo campo petrolero más productivo del mundo. Aunque su producción ha declinado significativamente desde su pico en 2004, sigue siendo la principal región productora de petróleo del país, operada por PEMEX.",
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
          etiqueta: "Reactivo 5/5 — Minerales",
          enunciado: "«¿Cuál de los siguientes estados mexicanos es el principal productor nacional de plata?»",
          
          apoyoPie: "obsérvala antes de responder",
          opciones: [
            "Sonora, por sus grandes yacimientos de sulfuros de plata asociados a las minas de cobre de Cananea.",
            "Zacatecas, que aporta aproximadamente la mitad de la producción nacional de plata y es reconocido históricamente como el corazón minero de México.",
            "Chihuahua, que tiene el mayor número de minas activas en el país y produce la mayor variedad de metales preciosos.",
          ],
          correcta: 1,
          explicacion: "Zacatecas es el principal estado productor de plata de México, aportando aproximadamente el 45-50% del total nacional. Su historia minera data del siglo XVI, cuando la plata zacatecana fue clave para la economía colonial española. Actualmente alberga las minas Fresnillo, Saucito y Velardeña, entre otras. La plata mexicana abastece los mercados de joyería, industria electrónica e inversión a nivel mundial.",
        },
      ],
    },
    {
      id: 7,
      tipo: "lienzo",
      etiqueta: "2 / 6 — Ríos y lagos",
      titulo: "Principales ríos y lagos del mundo y de México",
      bloques: [
        {
          tipo: "destacado",
          texto: "Los ríos y lagos son fuentes de agua dulce, rutas de transporte, generadores de energía hidroeléctrica y núcleos de asentamiento humano. El río más largo del mundo es el Nilo (6,853 km); el de mayor caudal, el Amazonas. En México, el Bravo forma la frontera con EUA; el Lerma-Santiago es el más importante para la población del Altiplano; el Usumacinta-Grijalva tiene el mayor caudal. Los lagos más grandes del mundo están en Norteamérica (Grandes Lagos) y Asia Central (Mar Caspio).",
        },
        {
          tipo: "figura",
          clave: "geo-rios",
          titulo: "Comparación de longitud: principales ríos del mundo y de México",
        },
        {
          tipo: "tabla",
          ancho: 12,
          titulo: "Principales ríos y lagos: relación con población y economía",
          columnas: ["Cuerpo de agua", "Importancia para la población", "Actividad económica"],
          filas: [
            [
              "Nilo (África)",
              "Sustenta al 95% de la población egipcia",
              "Agricultura, turismo (Delta del Nilo)",
            ],
            [
              "Amazonas (S.Am.)",
              "Menor densidad, mayor biodiversidad",
              "Pesca, minería, navegación fluvial",
            ],
            [
              "Yang-Tsé (China)",
              "Más de 400 millones de personas",
              "Mayor presa del mundo (Tres Gargantas)",
            ],
            [
              "Bravo/Grande (México)",
              "Frontera México-EUA, abastece ciudades",
              "Riego en zona norte; conflicto de agua",
            ],
            [
              "Lerma-Santiago (Méx.)",
              "Abastece CDMX, Guadalajara, Toluca",
              "Agricultura del Bajío e industria",
            ],
            [
              "Mar Caspio",
              "Frontera de 5 países; mayor lago del mundo",
              "Petróleo, gas natural, pesca de esturión",
            ],
          ],
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
          etiqueta: "Reactivo 1/5 — Ríos y lagos",
          apoyoRotulo: "Completa la oración",
          apoyo: "El río __ forma la frontera natural entre México y Estados Unidos, y su aprovechamiento hídrico ha generado acuerdos y conflictos entre ambos países.",
          opciones: [
            "Lerma-Santiago, que nace en el Estado de México y desemboca en el Pacífico.",
            "Bravo (o Grande del Norte), que corre de El Paso/Ciudad Juárez hasta el Golfo de México.",
            "Usumacinta, que marca parcialmente la frontera con Guatemala al suroeste.",
          ],
          correcta: 1,
          explicacion: "El río Bravo (llamado Rio Grande en EUA) forma la frontera entre México y EUA desde Ciudad Juárez/El Paso hasta su desembocadura en el Golfo de México, recorriendo aproximadamente 2,018 km como límite fronterizo. Su agua es disputada por la intensa demanda agrícola e industrial en ambos lados. El Usumacinta forma parte de la frontera con Guatemala.",
        },
      ],
    },
    {
      id: 9,
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Reactivo 2/5 — Ríos y lagos",
          enunciado: "«El río Amazonas es el de mayor caudal del mundo. ¿Qué porcentaje aproximado del agua dulce que desemboca en los océanos representa?»",
          
          apoyoPie: "obsérvala antes de responder",
          opciones: [
            "Aproximadamente el 5%, pues aunque es extenso, comparte el volumen con otros grandes ríos tropicales.",
            "Aproximadamente el 20% de toda el agua dulce que desemboca en los océanos, reflejando la inmensidad de la cuenca amazónica.",
            "Aproximadamente el 50%, al ser no solo el más caudaloso sino también el más profundo y ancho de todos los ríos.",
          ],
          correcta: 1,
          explicacion: "El Amazonas descarga aproximadamente el 20% de toda el agua dulce que los ríos del mundo vierten al océano. Su caudal promedio es de unos 209,000 m³/s, varias veces mayor que el del Nilo o el Yang-Tsé. Su cuenca hidrográfica abarca unos 7 millones de km² en América del Sur. Es el más caudaloso aunque no el más largo (el Nilo y el Amazonas compiten por ese título).",
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
          etiqueta: "Reactivo 3/5 — Ríos y lagos",
          enunciado: "«El río Lerma-Santiago es considerado el más importante para el Altiplano Central de México porque:»",
          
          apoyoPie: "obsérvala antes de responder",
          opciones: [
            "Forma la frontera natural entre México y Guatemala en el extremo sur del país.",
            "Abastece de agua a ciudades como la Ciudad de México, Guadalajara y Toluca, y riega el Bajío, la zona agrícola más productiva de México.",
            "Tiene el mayor caudal de México, desembocando en el Golfo de México con más agua que cualquier otro río nacional.",
          ],
          correcta: 1,
          explicacion: "El sistema Lerma-Santiago es el más importante del Altiplano Central: nace en el Estado de México, abastece parcialmente a la CDMX a través del Sistema Cutzamala, atraviesa el Bajío (la zona agrícola más fértil de México: Guanajuato, Jalisco), y desemboca en el Océano Pacífico cerca de San Blas, Nayarit. Guadalajara y Toluca dependen de sus cuencas para abastecerse de agua.",
        },
      ],
    },
    {
      id: 11,
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Reactivo 4/5 — Ríos y lagos",
          enunciado: "«El Mar Caspio es técnicamente el lago más grande del mundo. Sus costas son compartidas por:»",
          
          apoyoPie: "obsérvala antes de responder",
          opciones: [
            "Rusia, Kazajistán, Uzbekistán, Irán y Afganistán.",
            "Rusia, Kazajistán, Turkmenistán, Irán y Azerbaiyán.",
            "Rusia, Ucrania, Georgia, Armenia y Turquía, que conforman la región del Cáucaso.",
          ],
          correcta: 1,
          explicacion: "El Mar Caspio (371,000 km²) es el lago más grande del mundo por superficie. Sus costas pertenecen a cinco países: Rusia (norte), Kazajistán (noreste), Turkmenistán (este), Irán (sur) y Azerbaiyán (oeste). Tiene agua salada y recursos de petróleo y gas en su lecho, lo que ha generado disputas entre los cinco países ribereños sobre derechos de explotación.",
        },
      ],
    },
    {
      id: 12,
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Reactivo 5/5 — Ríos y lagos",
          enunciado: "«Los Grandes Lagos de América del Norte (Superior, Hurón, Michigan, Erie y Ontario) son importantes porque:»",
          
          apoyoPie: "obsérvala antes de responder",
          opciones: [
            "Son la mayor reserva de agua salada del hemisferio occidental y permiten la navegación transatlántica hacia Europa.",
            "Constituyen la mayor concentración de agua dulce superficial del planeta y son fundamentales para el abastecimiento de agua, la navegación y la industria de EUA y Canadá.",
            "Funcionan como reguladores climáticos de toda América del Norte, moderando las temperaturas de EUA, Canadá y el norte de México.",
          ],
          correcta: 1,
          explicacion: "Los Grandes Lagos de Norteamérica contienen el 21% del agua dulce superficial del planeta (unos 22,671 km³). Abastecen a más de 40 millones de personas en EUA y Canadá, sirven como vía de navegación interior (conectados al Atlántico por el río San Lorenzo), y sostienen la industria pesada de la región de los Grandes Lagos (Detroit, Cleveland, Chicago). Son agua dulce, no salada.",
        },
      ],
    },
    {
      id: 13,
      tipo: "lienzo",
      etiqueta: "3 / 6 — El mar",
      titulo: "El mar: corrientes marinas, mareas y recursos",
      bloques: [
        {
          tipo: "destacado",
          texto: "Las corrientes marinas son flujos continuos de agua oceánica impulsados por el viento, la rotación terrestre y las diferencias de temperatura y salinidad. Las corrientes cálidas moderan el clima de las costas que bañan (más húmedas y templadas). Las corrientes frías generan afloramiento de nutrientes, lo que favorece la pesca pero produce costas más áridas y con neblina. Las mareas son variaciones periódicas del nivel del mar causadas por la atracción gravitacional de la Luna y el Sol.",
        },
        {
          tipo: "tabla",
          ancho: 7,
          alto: 1,
          titulo: "Corrientes marinas principales y sus efectos",
          columnas: ["Corriente", "Tipo", "Efecto climático y económico"],
          filas: [
            ["Corriente del Golfo", "Cálida", "Calienta Europa Occidental; navegación favorecida"],
            ["Corriente de Humboldt", "Fría", "Costa árida del Pacífico S.Am.; rica en pesca (anchoveta)"],
            ["El Niño (ENOS)", "Cálida anómala", "Altera lluvias globalmente; sequías y huracanes"],
            ["La Niña", "Fría anómala", "Intensifica lluvias en Asia y sequías en Sudamérica"],
            ["Corriente N. del Pacífico", "Cálida", "Modera clima de costas del noroeste de EUA y Canadá"],
          ],
        },
        {
          tipo: "tabla",
          ancho: 7,
          alto: 1,
          titulo: "Recursos del mar y su aprovechamiento",
          columnas: ["Recurso", "Descripción", "Zonas más productivas"],
          filas: [
            [
              "Pesca",
              "Banco de especies de aguas frías y cálidas",
              "Norpacífico, Atlántico Norte, Humboldt",
            ],
            [
              "Petróleo y gas",
              "Plataformas continentales submarinas",
              "Golfo Pérsico, Golfo de México, Mar del Norte",
            ],
            [
              "Nódulos polimetálicos",
              "Manganeso, cobre, níquel en fondos marinos",
              "Pacífico central a grandes profundidades",
            ],
            [
              "Energía mareomotriz",
              "Generación eléctrica por mareas",
              "Bretaña (Francia), bahía de Fundy (Canadá)",
            ],
          ],
        },
        {
          tipo: "trampa",
          ancho: 5,
          revelar: true,
          letra: "A",
          titulo: "El Niño ≠ huracán — son fenómenos distintos aunque ambos se relacionan con el mar",
          asi_es: "El Niño (ENOS) es un calentamiento anómalo del Pacífico tropical que altera la circulación atmosférica global → sequías, inundaciones, cambios en pesca. Los huracanes son tormentas ciclónicas tropicales locales.",
          asi_no: "Confundir El Niño con huracanes: El Niño inhibe los huracanes en el Atlántico pero puede intensificarlos en el Pacífico.",
        },
      ],
    },
    {
      id: 14,
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Reactivo 1/5 — El mar",
          enunciado: "«La Corriente del Golfo tiene una importancia climática fundamental porque:»",
          
          apoyoPie: "obsérvala antes de responder",
          opciones: [
            "Enfría las costas del este de Norteamérica, generando condiciones favorables para la pesca de profundidad.",
            "Transporta agua cálida del Caribe hacia Europa Occidental, moderando su clima e impidiendo inviernos más severos.",
            "Produce el fenómeno de El Niño al acercarse a las costas del Pacífico sudamericano en años irregulares.",
          ],
          correcta: 1,
          explicacion: "La Corriente del Golfo (Gulf Stream) transporta agua tropical cálida desde el Golfo de México hacia el norte del Atlántico y las costas europeas. Gracias a ella, países como el Reino Unido, Irlanda, Noruega y los Países Bajos tienen temperaturas mucho más suaves de lo que correspondería a su latitud. Sin esta corriente, el norte de Europa sería significativamente más frío.",
        },
      ],
    },
    {
      id: 15,
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Reactivo 2/5 — El mar",
          enunciado: "«La Corriente de Humboldt, que fluye frente a las costas de Perú y Chile, es una corriente:»",
          
          apoyoPie: "obsérvala antes de responder",
          opciones: [
            "Cálida que modera las temperaturas de las costas andinas y favorece la formación de nubes lluviosas sobre el desierto de Atacama.",
            "Fría que provoca afloramiento de nutrientes desde las profundidades, generando una de las zonas pesqueras más ricas del mundo y condiciones áridas en la costa.",
            "Estacional que alterna entre cálida en verano y fría en invierno, generando precipitaciones moderadas durante todo el año.",
          ],
          correcta: 1,
          explicacion: "La Corriente de Humboldt (o Corriente del Perú) es una corriente fría que fluye de sur a norte frente a las costas de Chile y Perú. Su baja temperatura provoca afloramiento de aguas profundas ricas en nutrientes, creando una de las zonas pesqueras más productivas del mundo (especialmente anchoveta). Paradójicamente, también genera el desierto de Atacama al enfriar el aire y evitar las precipitaciones.",
        },
      ],
    },
    {
      id: 16,
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Reactivo 3/5 — El mar",
          enunciado: "«El fenómeno de 'El Niño' (ENOS) consiste en:»",
          
          apoyoPie: "obsérvala antes de responder",
          opciones: [
            "Un huracán de escala 5 que se forma en el Pacífico tropical durante los años con mayor temperatura oceánica superficial.",
            "Un calentamiento anómalo de las aguas superficiales del Pacífico tropical que altera la circulación atmosférica global, provocando sequías, inundaciones y cambios en las zonas de pesca.",
            "Una corriente oceánica fría que surge periódicamente frente a las costas de Chile y Perú, destruyendo temporalmente la pesca de anchoveta.",
          ],
          correcta: 1,
          explicacion: "El Niño (ENOS: El Niño-Oscilación del Sur) es un calentamiento anómalo de las aguas superficiales del Pacífico tropical central y oriental que ocurre irregularmente cada 2-7 años. Altera la circulación atmosférica global: provoca sequías en Indonesia y Australia, inundaciones en costas del Pacífico sudamericano, menos huracanes en el Atlántico pero más en el Pacífico oriental, y reduce la pesca de anchoveta en Perú.",
        },
      ],
    },
    {
      id: 17,
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Reactivo 4/5 — El mar",
          enunciado: "«Las mareas son variaciones periódicas del nivel del mar causadas por:»",
          
          apoyoPie: "obsérvala antes de responder",
          opciones: [
            "Las variaciones de presión atmosférica generadas por los ciclones tropicales en las zonas costeras bajas.",
            "La atracción gravitacional de la Luna (principalmente) y del Sol sobre las masas de agua oceánica.",
            "Las corrientes termohalinas que generan diferencias de nivel entre el Atlántico y el Pacífico.",
          ],
          correcta: 1,
          explicacion: "Las mareas son producidas principalmente por la fuerza de atracción gravitacional de la Luna sobre las masas de agua oceánica, con una contribución menor del Sol. La Luna genera dos abultamientos de agua (marea alta) en los puntos más cercano y más lejano de la Tierra, y dos zonas de marea baja entre ellos. El ciclo de mareas dura aproximadamente 12 horas y 25 minutos (semidiurnas) o 24 horas (diurnas) según la región.",
        },
      ],
    },
    {
      id: 18,
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Reactivo 5/5 — El mar",
          enunciado: "«La 'Zona Económica Exclusiva' (ZEE) de un país costero se extiende hasta:»",
          
          apoyoPie: "obsérvala antes de responder",
          opciones: [
            "Las 12 millas náuticas desde la costa, que es la distancia del mar territorial donde el país ejerce soberanía plena.",
            "Las 200 millas náuticas desde la costa, dentro de las cuales el país tiene derechos exclusivos sobre la exploración y explotación de recursos marinos y del subsuelo.",
            "Las 350 millas náuticas desde la plataforma continental, donde el país tiene jurisdicción sobre todos los recursos del fondo marino.",
          ],
          correcta: 1,
          explicacion: "Según la Convención de la ONU sobre el Derecho del Mar (UNCLOS, 1982), la Zona Económica Exclusiva (ZEE) se extiende hasta 200 millas náuticas (~370 km) desde la línea de base costera. Dentro de ella, el Estado costero tiene derechos exclusivos para explorar y explotar recursos vivos (pesca) y no vivos (petróleo, gas) tanto en el agua como en el lecho marino. Las 12 millas corresponden al mar territorial (soberanía plena).",
        },
      ],
    },
    {
      id: 19,
      tipo: "lienzo",
      etiqueta: "4 / 6 — Ciclones en México",
      titulo: "Zonas de riesgo por ciclones en México",
      bloques: [
        {
          tipo: "destacado",
          texto: "Los ciclones tropicales (también llamados huracanes en el Atlántico y el Pacífico noreste) son tormentas de baja presión con vientos circulatorios intensos que se forman sobre aguas oceánicas cálidas (>26°C). México tiene dos costas con riesgo ciclónico: la del Pacífico (mayo-noviembre) y la del Golfo de México y Caribe (junio-noviembre). La escala Saffir-Simpson clasifica los huracanes en categorías del 1 al 5 según la velocidad del viento.",
        },
        {
          tipo: "figura",
          clave: "geo-ciclones",
          titulo: "Temporadas ciclónicas, escala Saffir-Simpson y zonas de riesgo en México",
        },
        {
          tipo: "tabla",
          ancho: 7,
          alto: 1,
          titulo: "Características de los ciclones que afectan a México",
          columnas: ["Característica", "Costa del Pacífico", "Costa del Golfo / Caribe"],
          filas: [
            ["Temporada", "15 mayo – 30 noviembre", "1 junio – 30 noviembre"],
            ["Pico de actividad", "Julio – octubre", "Agosto – octubre"],
            [
              "Estados en riesgo",
              "Sinaloa, Nayarit, Jalisco, Guerrero, Oaxaca",
              "Q. Roo, Yucatán, Veracruz, Tamaulipas",
            ],
            [
              "Ciclón histórico",
              "Patricia (2015) Cat. 5 — récord mundial",
              "Gilberto (1988) y Wilma (2005) Cat. 5",
            ],
          ],
        },
        {
          tipo: "trampa",
          ancho: 5,
          revelar: true,
          letra: "A",
          titulo: "Un huracán Categoría 5 no es el doble de destructivo que un Categoría 1 — es exponencialmente peor",
          asi_es: "Cat. 1: vientos 119–153 km/h (daño menor). Cat. 5: >252 km/h (destrucción catastrófica de viviendas, infraestructura y ecosistemas). El «Patricia» (Cat. 5, 2015) tuvo vientos de 325 km/h — récord del hemisferio occidental.",
          asi_no: "Subestimar la diferencia entre categorías: el daño crece exponencialmente. Un Cat. 5 puede arrasar poblaciones enteras en pocas horas.",
        },
      ],
    },
    {
      id: 20,
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Reactivo 1/5 — Ciclones",
          enunciado: "«Los ciclones tropicales que afectan las costas del Golfo de México y el Mar Caribe tienen su período de mayor actividad entre:»",
          
          apoyoPie: "obsérvala antes de responder",
          opciones: [
            "Enero y marzo, al inicio del año cuando los frentes fríos del norte impulsan la convección tropical.",
            "Agosto y octubre, cuando la temperatura superficial del Atlántico tropical es más elevada.",
            "Abril y junio, durante la primavera boreal cuando inicia el calentamiento del océano.",
          ],
          correcta: 1,
          explicacion: "La temporada oficial de huracanes en el Atlántico va del 1 de junio al 30 de noviembre, pero el pico de actividad ocurre de agosto a octubre cuando el Mar Caribe y el Golfo de México alcanzan sus temperaturas máximas (>26-28°C). El agua cálida es el «combustible» del ciclón. La temporada del Pacífico oriental inicia dos semanas antes (15 de mayo).",
        },
      ],
    },
    {
      id: 21,
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Reactivo 2/5 — Ciclones",
          enunciado: "«La escala Saffir-Simpson clasifica los huracanes en cinco categorías. Un huracán categoría 5 tiene vientos sostenidos de:»",
          
          apoyoPie: "obsérvala antes de responder",
          opciones: [
            "Entre 119 y 153 km/h, con daños menores a techos, señales y vegetación de escasa resistencia.",
            "Superiores a 252 km/h, capaces de causar destrucción catastrófica de viviendas e infraestructura en zonas expuestas.",
            "Entre 178 y 209 km/h, que producen daños severos pero recuperables en la mayor parte de las estructuras.",
          ],
          correcta: 1,
          explicacion: "La escala Saffir-Simpson va de Cat. 1 (vientos 119-153 km/h, daño menor) a Cat. 5 (>252 km/h, destrucción catastrófica). Categoría 5 implica pérdida total o casi total de techos de casas, derrumbe de muchas residencias, y la zona puede quedar inhabitable semanas o meses. El huracán Patricia (2015, Pacífico mexicano) alcanzó 325 km/h, récord del hemisferio occidental.",
        },
      ],
    },
    {
      id: 22,
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Reactivo 3/5 — Ciclones",
          enunciado: "«Los ciclones tropicales se forman exclusivamente sobre:»",
          
          apoyoPie: "obsérvala antes de responder",
          opciones: [
            "Las corrientes en chorro de la tropósfera alta, donde la energía cinética del viento genera sistemas de baja presión rotatorios.",
            "Aguas oceánicas cálidas con temperatura superficial superior a 26°C, donde la evaporación intensa proporciona la energía para desarrollar el sistema ciclónico.",
            "Las llanuras costeras de latitudes bajas, donde la confluencia de vientos alisios con brisas marinas genera la rotación ciclónica.",
          ],
          correcta: 1,
          explicacion: "Los ciclones tropicales necesitan agua oceánica con temperatura superficial superior a 26°C para formarse y mantenerse activos. La evaporación de esas aguas cálidas proporciona la energía (calor latente) que alimenta el sistema. Al tocar tierra o aguas más frías, el ciclón pierde su fuente de energía y se debilita. Por eso los ciclones no se forman en latitudes altas (aguas frías) ni en el ecuador (ausencia de fuerza de Coriolis).",
        },
      ],
    },
    {
      id: 23,
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Reactivo 4/5 — Ciclones",
          enunciado: "«El huracán 'Patricia' (2015) fue históricamente significativo porque:»",
          
          apoyoPie: "obsérvala antes de responder",
          opciones: [
            "Fue el primer huracán categoría 5 en impactar directamente las costas del Golfo de México en el siglo XXI.",
            "Alcanzó vientos sostenidos de 325 km/h, convirtiéndose en el huracán más intenso jamás registrado en el hemisferio occidental, tocando tierra en las costas de Jalisco y Colima.",
            "Destruyó completamente la ciudad de Acapulco y provocó el mayor número de víctimas mortales de un huracán en la historia de México.",
          ],
          correcta: 1,
          explicacion: "El huracán Patricia (23-24 de octubre de 2015) alcanzó vientos máximos de 325 km/h, convirtiéndose en el ciclón tropical más intenso jamás registrado en el hemisferio occidental (superando el anterior récord del huracán Wilma de 2005). Tocó tierra como categoría 5 en el municipio de Cuixmala, Jalisco. A pesar de su intensidad récord, causó relativamente pocas víctimas directas por la evacuación preventiva.",
        },
      ],
    },
    {
      id: 24,
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Reactivo 5/5 — Ciclones",
          enunciado: "«¿Cuál es la diferencia principal entre un 'ciclón tropical', un 'tifón' y un 'huracán'?»",
          
          apoyoPie: "obsérvala antes de responder",
          opciones: [
            "Son fenómenos climáticos distintos: el ciclón se forma en el Atlántico, el tifón en el Mediterráneo y el huracán en el Pacífico tropical.",
            "Son el mismo tipo de tormenta tropical con vientos circulares intensos, pero reciben distintos nombres según la cuenca: 'huracán' en el Atlántico y Pacífico noreste, 'tifón' en el Pacífico noreste asiático y 'ciclón' en el Índico y Pacífico sur.",
            "Los tres difieren en su origen: los huracanes nacen sobre tierra y se intensifican al tocar el mar; los tifones nacen en el mar y nunca tocan tierra; los ciclones son exclusivamente fenómenos terrestres.",
          ],
          correcta: 1,
          explicacion: "Huracán, tifón y ciclón son el mismo tipo de fenómeno meteorológico (ciclón tropical: sistema de baja presión con vientos circulares muy intensos que se forma sobre aguas oceánicas cálidas), pero reciben nombres distintos según la cuenca oceánica: 'huracán' en el Atlántico norte y Pacífico noreste; 'tifón' en el Pacífico noreste asiático (cerca de Filipinas, Japón, China); 'ciclón' en el océano Índico y Pacífico sur.",
        },
      ],
    },
    {
      id: 25,
      tipo: "lienzo",
      etiqueta: "5 / 6 — Organización política",
      titulo: "Organización política mundial: nuevos países y zonas de tensión",
      bloques: [
        {
          tipo: "destacado",
          texto: "El fin de la Guerra Fría (1989-1991) desencadenó la desintegración de varios estados multinacionales y el surgimiento de decenas de nuevos países, especialmente en Europa y Asia Central. Al mismo tiempo, persistieron y surgieron nuevas zonas de tensión política y conflicto armado. Hoy el mundo tiene 195 países reconocidos por la ONU. Los grandes bloques de poder se han reconfigurado desde la bipolaridad EUA-URSS hacia una multipolaridad con EUA, China, Rusia y la UE como actores principales.",
        },
        {
          tipo: "figura",
          clave: "geo-organizacion",
          titulo: "Desintegración de estados y zonas de tensión política (post-1990)",
        },
        {
          tipo: "tabla",
          ancho: 7,
          alto: 1,
          titulo: "Principales procesos de desintegración y unificación (post-Guerra Fría)",
          columnas: ["Proceso", "Año", "Resultado"],
          filas: [
            [
              "Disolución de la URSS",
              "1991",
              "15 repúblicas independientes (Rusia, Ucrania, Kazajistán, países bálticos…)",
            ],
            [
              "Disolución de Yugoslavia",
              "1991–2008",
              "7 países: Eslovenia, Croacia, Bosnia, Serbia, Montenegro, Macedonia, Kosovo",
            ],
            ["División de Checoslovaquia", "1993", "República Checa + Eslovaquia (divorcio de terciopelo)"],
            ["Reunificación alemana", "1990", "Alemania Occidental + Oriental = Alemania unificada"],
            ["Independencia Sudán del Sur", "2011", "Nación más nueva del mundo (África subsahariana)"],
            ["Kosovo", "2008", "Independencia de Serbia; reconocida por ~100 países"],
          ],
        },
        {
          tipo: "tabla",
          ancho: 7,
          alto: 1,
          titulo: "Principales zonas de tensión política en el mundo",
          columnas: ["Zona / Conflicto", "Países involucrados", "Causa principal"],
          filas: [
            [
              "Medio Oriente",
              "Israel-Palestina, Siria, Irak",
              "Disputas territoriales, religión y control del petróleo",
            ],
            [
              "Península de Corea",
              "Corea del Norte vs. Corea del Sur / EUA",
              "División ideológica desde 1953; amenaza nuclear norcoreana",
            ],
            [
              "Asia del Sur",
              "India vs. Pakistán (Cachemira)",
              "Disputa territorial desde la partición de 1947; ambos con armas nucleares",
            ],
            [
              "Europa del Este",
              "Rusia vs. Ucrania (invasión 2022)",
              "Expansión de la OTAN, control de territorio y recursos energéticos",
            ],
            [
              "África Subsahariana",
              "Sahel, RD Congo, Etiopía",
              "Pobreza extrema, grupos armados no estatales, disputas étnicas y recursos",
            ],
          ],
        },
        {
          tipo: "trampa",
          ancho: 5,
          revelar: true,
          letra: "A",
          titulo: "Las 15 repúblicas de la URSS no son lo mismo que los 7 países surgidos de Yugoslavia",
          asi_es: "URSS → Rusia, Ucrania, Bielorrusia, Kazajistán, Uzbekistán, Georgia, Armenia, Azerbaiyán, Moldavia, Turkmenistán, Kirguistán, Tayikistán, Estonia, Letonia, Lituania (15 países).",
          asi_no: "Confundir la disolución de la URSS (Asia Central + Europa del Este) con la de Yugoslavia (solo en los Balcanes): son procesos distintos, aunque contemporáneos.",
        },
      ],
    },
    {
      id: 26,
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Reactivo 1/5 — Organización política",
          enunciado: "«La disolución de la Unión Soviética (URSS) en 1991 dio origen a:»",
          
          apoyoPie: "obsérvala antes de responder",
          opciones: [
            "6 nuevos países en los Balcanes, incluyendo Rusia, Ucrania y Serbia.",
            "15 repúblicas independientes, entre ellas Rusia, Ucrania, Kazajistán y los países bálticos.",
            "20 estados federados que conforman hoy la Federación Rusa.",
          ],
          correcta: 1,
          explicacion: "La URSS se disolvió el 25 de diciembre de 1991, dando lugar a 15 repúblicas independientes: Rusia, Ucrania, Bielorrusia, Kazajistán, Uzbekistán, Georgia, Armenia, Azerbaiyán, Moldavia, Turkmenistán, Kirguistán, Tayikistán, Estonia, Letonia y Lituania. Los países balcánicos (Serbia, Croacia, etc.) provienen de la disolución de Yugoslavia, un proceso distinto aunque simultáneo.",
        },
      ],
    },
    {
      id: 27,
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Reactivo 2/5 — Organización política",
          enunciado: "«La desintegración de Yugoslavia (1991-2008) dio origen a siete nuevos estados. ¿Cuál fue el último en independizarse?»",
          
          apoyoPie: "obsérvala antes de responder",
          opciones: [
            "Eslovenia (1991), que fue el primero en declarar su independencia tras un conflicto breve de diez días.",
            "Kosovo (2008), que declaró su independencia de Serbia y es el estado más reciente surgido de la antigua Yugoslavia, con reconocimiento internacional aún parcial.",
            "Montenegro (2006), que se separó pacíficamente de Serbia mediante referéndum, siendo el penúltimo país surgido de la antigua Yugoslavia.",
          ],
          correcta: 1,
          explicacion: "Kosovo declaró su independencia de Serbia el 17 de febrero de 2008, convirtiéndose en el séptimo estado surgido de la antigua Yugoslavia. Su independencia fue declarada después de años de conflicto (Guerra de Kosovo 1998-99) y administración internacional de la ONU. Ha sido reconocida por más de 100 países (incluyendo EUA y la mayoría de la UE), pero no por Rusia, China, España ni Serbia.",
        },
      ],
    },
    {
      id: 28,
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Reactivo 3/5 — Organización política",
          enunciado: "«La división de Checoslovaquia en 1993, conocida como el 'divorcio de terciopelo', resultó en:»",
          
          apoyoPie: "obsérvala antes de responder",
          opciones: [
            "La creación de tres nuevos estados: Bohemia (al oeste), Moravia (al centro) y Eslovaquia (al este).",
            "La separación pacífica en dos países: la República Checa (más industrializada) y Eslovaquia (más agrícola), sin violencia ni conflicto armado.",
            "La unificación de ambos territorios con Austria, formando una nueva federación centroeuropea conocida como la Unión del Danubio.",
          ],
          correcta: 1,
          explicacion: "El «divorcio de terciopelo» (1 de enero de 1993) fue la pacífica separación de Checoslovaquia en dos estados: la República Checa (capital: Praga, más industrializada y occidentalizada) y Eslovaquia (capital: Bratislava, más agrícola). A diferencia de Yugoslavia, la división fue completamente pacífica y acordada, razón por la que recibe el calificativo de «terciopelo» (como la revolución de 1989 que derrocó al comunismo checoslovaco).",
        },
      ],
    },
    {
      id: 29,
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Reactivo 4/5 — Organización política",
          enunciado: "«El concepto de 'multipolaridad' en el orden político mundial del siglo XXI se refiere a:»",
          
          apoyoPie: "obsérvala antes de responder",
          opciones: [
            "La hegemonía absoluta de un solo país (EUA) que ejerce un dominio político, económico y militar sin contrapeso en todo el planeta.",
            "La existencia de varios centros de poder global (EUA, China, Rusia, Unión Europea) que compiten e influyen en la política internacional, en contraste con la bipolaridad EUA-URSS de la Guerra Fría.",
            "La organización del mundo en dos grandes bloques antagónicos separados por una cortina de hierro ideológica, similar a la Guerra Fría.",
          ],
          correcta: 1,
          explicacion: "La multipolaridad describe el orden geopolítico del siglo XXI, donde el poder mundial se distribuye entre varios actores: EUA (poder militar y tecnológico), China (poder económico y creciente militar), Rusia (poder energético y nuclear), la UE (poder económico y regulatorio) y potencias emergentes (India, Brasil). Contrasta con la bipolaridad de la Guerra Fría (EUA vs. URSS) y con la unipolaridad breve de los años 90 (EUA como única superpotencia).",
        },
      ],
    },
    {
      id: 30,
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Reactivo 5/5 — Organización política",
          enunciado: "«La reunificación alemana (1990) fue el resultado de:»",
          
          apoyoPie: "obsérvala antes de responder",
          opciones: [
            "Una guerra breve entre Alemania Occidental y Alemania Oriental que terminó con la rendición incondicional del gobierno comunista del Este.",
            "La caída del Muro de Berlín (noviembre 1989) y el proceso político que llevó a la absorción de la República Democrática Alemana (Este) por la República Federal Alemana (Oeste).",
            "Un plebiscito internacional supervisado por la ONU en el que la población de ambas Alemanias votó por la reunificación bajo un nuevo gobierno neutral.",
          ],
          correcta: 1,
          explicacion: "La reunificación alemana fue resultado directo de la caída del Muro de Berlín (9 de noviembre de 1989) y del colapso del régimen comunista de la RDA. El 3 de octubre de 1990, la RDA (Alemania Oriental) se integró a la República Federal Alemana (Alemania Occidental) mediante un proceso de adhesión formal, no mediante una guerra. Fue un proceso pacífico negociado con EUA, URSS, Reino Unido y Francia (acuerdo 2+4).",
        },
      ],
    },
    {
      id: 31,
      tipo: "lienzo",
      etiqueta: "6 / 6 — México político",
      titulo: "División política de México: fronteras, estados y regiones",
      bloques: [
        {
          tipo: "destacado",
          texto: "México es una república federal presidencialista integrada por 32 entidades federativas (31 estados y la Ciudad de México). Ocupa 1,964,375 km² — el 14° país más grande del mundo y el 3° de América Latina. Su frontera norte con EUA (3,185 km) es de las más transitadas del planeta. Al sur limita con Guatemala (965 km) y Belice (276 km). Tiene dos litorales: el Pacífico (7,828 km, el más extenso) y el Golfo de México / Caribe (3,294 km).",
        },
        {
          tipo: "tabla",
          ancho: 7,
          alto: 1,
          titulo: "Regiones de México: características y estados representativos",
          columnas: ["Región", "Estados representativos", "Características principales"],
          filas: [
            [
              "Norte",
              "Chihuahua, Sonora, Coahuila, Tamaulipas, Nuevo León, Baja California",
              "Desierto, ganadería, maquiladoras, minería; colinda con EUA",
            ],
            [
              "Centro-Norte",
              "Jalisco, Sinaloa, Durango, Nayarit, Zacatecas",
              "Agricultura comercial (Sinaloa), agave, minería de plata",
            ],
            [
              "Centro",
              "CDMX, Edo. Méx., Puebla, Hidalgo, Morelos, Tlaxcala",
              "Mayor densidad población; industria, manufactura, servicios",
            ],
            [
              "Occidente",
              "Guanajuato, Querétaro, Michoacán, Colima, Aguascalientes",
              "Corredor industrial automotriz (Bajío); aguacate, berries",
            ],
            [
              "Sur-Sureste",
              "Veracruz, Chiapas, Oaxaca, Tabasco, Guerrero",
              "Mayor biodiversidad; petróleo (Tabasco); turismo; pobreza",
            ],
            [
              "Península Y.",
              "Yucatán, Campeche, Quintana Roo",
              "Turismo masivo (Cancún); petróleo (Campeche); playas",
            ],
          ],
        },
        {
          tipo: "trampa",
          ancho: 5,
          revelar: true,
          letra: "A",
          titulo: "La Ciudad de México es una entidad federativa, NO un estado — es el equivalente al Distrito Federal anterior",
          asi_es: "En 2016, el Distrito Federal se transformó en la Ciudad de México (CDMX), que funciona como entidad federativa autónoma con congreso local y jefe de Gobierno propio.",
          asi_no: "Llamarle «estado» a la CDMX: es una entidad federativa con un régimen especial por ser la capital, pero no es un estado igual que Jalisco o Veracruz.",
        },
      ],
    },
    {
      id: 32,
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Reactivo 1/5 — México político",
          enunciado: "«¿Cuántas entidades federativas conforman la República Mexicana?»",
          
          apoyoPie: "obsérvala antes de responder",
          opciones: [
            "30 estados y un Distrito Federal como sede de los poderes nacionales.",
            "32 entidades: 31 estados y la Ciudad de México como entidad federativa autónoma.",
            "33 entidades, pues la Ciudad de México y el Estado de México se contabilizan por separado dentro de la capital.",
          ],
          correcta: 1,
          explicacion: "México tiene 32 entidades federativas desde 2016: 31 estados y la Ciudad de México. El antiguo Distrito Federal se convirtió en CDMX en 2016, adquiriendo mayor autonomía pero manteniendo su carácter de capital federal. El Estado de México es una entidad diferente, vecina de la CDMX, con capital en Toluca.",
        },
      ],
    },
    {
      id: 33,
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Reactivo 2/5 — México político",
          enunciado: "«La frontera norte de México con Estados Unidos tiene una longitud de aproximadamente:»",
          
          apoyoPie: "obsérvala antes de responder",
          opciones: [
            "1,500 km, siendo una de las fronteras continentales más cortas de América del Norte.",
            "3,185 km, siendo considerada una de las fronteras más transitadas del mundo, con miles de cruces legales diariamente.",
            "4,800 km, cifra que incluye tanto la frontera terrestre como la marítima en el Golfo de México.",
          ],
          correcta: 1,
          explicacion: "La frontera México-EUA tiene 3,185 km de longitud, siendo una de las fronteras más largas y transitadas del mundo. En ella operan decenas de puertos de entrada (cruces fronterizos), siendo los más importantes Tijuana-San Diego, Ciudad Juárez-El Paso y Nuevo Laredo-Laredo. Es también la frontera que más migrantes irregulares intenta cruzar anualmente a nivel mundial.",
        },
      ],
    },
    {
      id: 34,
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Reactivo 3/5 — México político",
          enunciado: "«La región Norte de México se caracteriza principalmente por:»",
          
          apoyoPie: "obsérvala antes de responder",
          opciones: [
            "Ser la región con mayor producción de café, caña de azúcar y cacao, aprovechando su clima cálido y húmedo subtropical.",
            "Concentrar la industria maquiladora, la minería metálica y la ganadería extensiva, con alta integración económica con EUA por su cercanía fronteriza.",
            "Tener la mayor biodiversidad del país, con selvas tropicales y la mayor densidad de especies endémicas de México.",
          ],
          correcta: 1,
          explicacion: "La región Norte de México (Chihuahua, Sonora, Coahuila, Tamaulipas, Nuevo León, Baja California) se caracteriza por: industria maquiladora en ciudades fronterizas (Tijuana, Ciudad Juárez, Reynosa, Matamoros), ganadería extensiva en praderas y desiertos, minería metálica (cobre en Sonora, zinc y plata en Chihuahua) y alta dependencia económica de EUA por su cercanía. Nuevo León (Monterrey) es el centro industrial más importante del Norte.",
        },
      ],
    },
    {
      id: 35,
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Reactivo 4/5 — México político",
          enunciado: "«La Zona Metropolitana del Valle de México (ZMVM) concentra aproximadamente qué porcentaje de la población nacional:»",
          
          apoyoPie: "obsérvala antes de responder",
          opciones: [
            "Menos del 5% de la población total, pues las políticas de descentralización han dispersado la población hacia otras ciudades.",
            "Aproximadamente el 20% de la población nacional, lo que la convierte en una de las megalópolis más grandes del mundo con más de 21 millones de habitantes.",
            "Más del 40% de la población total del país, reflejando el extremo nivel de concentración demográfica en la capital.",
          ],
          correcta: 1,
          explicacion: "La Zona Metropolitana del Valle de México (CDMX + municipios conurbados del Estado de México e Hidalgo) concentra alrededor del 20% de la población total de México, con más de 21 millones de habitantes. Es la aglomeración urbana más grande del hemisferio occidental y una de las diez más grandes del mundo. Esta concentración genera problemas de movilidad, contaminación y provisión de servicios.",
        },
      ],
    },
    {
      id: 36,
      tipo: "lienzo",
      bloques: [
        {
          tipo: "pregunta",
          disposicion: "lado",
          ancho: 12,
          etiqueta: "Reactivo 5/5 — México político",
          enunciado: "«La región Sur-Sureste de México (Veracruz, Chiapas, Oaxaca, Tabasco, Guerrero) se distingue porque:»",
          
          apoyoPie: "obsérvala antes de responder",
          opciones: [
            "Es la región con mayor nivel de desarrollo económico e IDH del país, gracias a sus extensas reservas de petróleo y gas.",
            "Concentra la mayor biodiversidad del país, importantes reservas de petróleo en Tabasco, pero también los índices más altos de pobreza y marginación de México.",
            "Es la zona con mayor densidad de industria automotriz y aeroespacial del país, gracias a los tratados de libre comercio con Europa.",
          ],
          correcta: 1,
          explicacion: "La región Sur-Sureste es la más biodiversa de México (selvas tropicales de Chiapas, Oaxaca y Veracruz) y concentra recursos estratégicos como el petróleo de Tabasco (PEMEX). Sin embargo, paradójicamente, es también la región con mayor pobreza y marginación: Chiapas, Oaxaca y Guerrero encabezan los índices de pobreza nacional. Esta contradicción entre riqueza natural y pobreza humana es uno de los problemas estructurales más profundos de México.",
        },
      ],
    },
    {
      id: 37,
      tipo: "lienzo",
      etiqueta: "Resumen",
      titulo: "Lo más importante — Complemento",
      bloques: [
        {
          tipo: "lista",
          items: [
            {
              titulo: "Minerales",
              texto: "Preciosos: México es 1er productor mundial de plata (Zacatecas). Industriales: cobre en Sonora (Cananea), zinc en Zacatecas. Energéticos: petróleo en Campeche/Tabasco (Sonda de Campeche), gas en Tamaulipas.",
            },
            {
              titulo: "Ríos y lagos",
              texto: "Nilo = más largo (6,853 km); Amazonas = mayor caudal (~20% del agua dulce mundial). México: Bravo = frontera con EUA; Lerma-Santiago = abastece Altiplano; Usumacinta-Grijalva = mayor caudal en México. Mar Caspio = mayor lago (5 países). Grandes Lagos = 21% agua dulce superficial del planeta.",
            },
            {
              titulo: "Mar y corrientes",
              texto: "Corrientes cálidas moderan climas costeros (Corriente del Golfo → Europa). Corrientes frías generan pesca y costas áridas (Humboldt → Perú-Chile). El Niño = calentamiento anómalo Pacífico → altera lluvias globales. ZEE = 200 millas náuticas.",
            },
            {
              titulo: "Ciclones en México",
              texto: "Pacífico: 15 mayo-30 nov. (pico julio-oct.). Atlántico/Caribe: 1 jun.-30 nov. (pico ago.-oct.). Escala Saffir-Simpson: Cat. 1 (119 km/h) a Cat. 5 (>252 km/h). Patricia (2015) = Cat. 5, 325 km/h, récord hemisferio W.",
            },
            {
              titulo: "Organización política",
              texto: "URSS (1991) → 15 repúblicas. Yugoslavia (1991-2008) → 7 países. Checoslovaquia (1993) → 2 (divorcio de terciopelo). Multipolaridad: EUA, China, Rusia, UE. México: 32 entidades, fronteras con EUA/Guatemala/Belice. ZMVM: ~20% de población nacional.",
            },
          ],
        },
      ],
    },
  ],
};
