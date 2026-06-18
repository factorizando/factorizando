// Presentación: Compuestos del carbono y macromoléculas (química orgánica)
// EXANI-II · Módulo Ciencias Experimentales · Química

export const PRESENTACION = {
  id: "quimica-organica",
  titulo: "Compuestos del Carbono y Macromoléculas",
  materia: "Química",
  subtema: "Ciencias Experimentales",
  slides: [

    // ── Portada ────────────────────────────────────────────────────────────────
    {
      id: 0,
      tipo: "portada",
      titulo: "Compuestos del Carbono y Macromoléculas",
      subtitulo: "El carbono, hidrocarburos, grupos funcionales y las macromoléculas biológicas",
      etiqueta: "EXANI-II · Ciencias Experimentales"
    },

    // ── El carbono ─────────────────────────────────────────────────────────────
    {
      id: 1,
      tipo: "regla_rica",
      etiqueta: "Bloque 1 · El carbono",
      titulo: "El carbono y sus enlaces",
      bloques: [
        {
          tipo: "texto",
          texto: "La química orgánica estudia los compuestos del carbono. El carbono es tetravalente: forma siempre cuatro enlaces covalentes. Su gran versatilidad proviene de la catenación: puede unirse a otros carbonos formando cadenas lineales, ramificadas o cíclicas. Entre dos carbonos el enlace puede ser simple (C–C), doble (C=C) o triple (C≡C). Esta capacidad permite millones de compuestos distintos, base de la vida y de los materiales orgánicos."
        },
        {
          tipo: "tabla",
          titulo: "Enlaces del carbono",
          columnas: ["Enlace", "Notación", "Ejemplo"],
          filas: [
            { tiempo: "Simple", correcto: "C–C (saturado)", error: "Etano CH₃–CH₃" },
            { tiempo: "Doble",  correcto: "C=C (insaturado)", error: "Eteno CH₂=CH₂" },
            { tiempo: "Triple", correcto: "C≡C (insaturado)", error: "Etino CH≡CH" },
            { tiempo: "Tetravalencia", correcto: "4 enlaces siempre", error: "CH₄: carbono con 4 hidrógenos" }
          ]
        },
        {
          tipo: "par",
          etiqueta: "el carbono forma exactamente cuatro enlaces",
          correcto: "En CH₄ el carbono se une a 4 H (4 enlaces simples)",
          incorrecto: "Dibujar un carbono con 3 o 5 enlaces → siempre son 4 (tetravalente)"
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "Saturado significa solo enlaces simples; insaturado significa que hay al menos un doble o triple enlace",
          correcto: "Alcano (saturado) ↔ alqueno/alquino (insaturado)",
          incorrecto: "Llamar «saturado» a un compuesto con un doble enlace"
        }
      ]
    },
    {
      id: 2,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Tetravalencia",
      pregunta: "¿Cuántos enlaces covalentes forma siempre un átomo de carbono en los compuestos orgánicos?",
      opciones: ["4", "2", "6"],
      correcta: 0,
      explicacion: "El carbono es tetravalente: forma cuatro enlaces covalentes, ya sea con hidrógeno, con otros carbonos o con otros elementos. Esto explica la enorme variedad de compuestos orgánicos.",
      pasos: []
    },

    // ── Hidrocarburos ──────────────────────────────────────────────────────────
    {
      id: 3,
      tipo: "regla_rica",
      etiqueta: "Bloque 2 · Hidrocarburos",
      titulo: "Hidrocarburos: alcanos, alquenos y alquinos",
      bloques: [
        {
          tipo: "texto",
          texto: "Los hidrocarburos están formados solo por carbono e hidrógeno. Se clasifican según el tipo de enlace: alcanos (solo enlaces simples, saturados, fórmula CₙH₂ₙ₊₂, sufijo -ano); alquenos (al menos un doble enlace, CₙH₂ₙ, sufijo -eno); alquinos (al menos un triple enlace, CₙH₂ₙ₋₂, sufijo -ino). El prefijo indica el número de carbonos: met- (1), et- (2), prop- (3), but- (4), pent- (5)."
        },
        {
          tipo: "tabla",
          titulo: "Familias de hidrocarburos",
          columnas: ["Familia", "Enlace / sufijo", "Ejemplo (2 C)"],
          filas: [
            { tiempo: "Alcano", correcto: "simple · -ano · CₙH₂ₙ₊₂", error: "Etano C₂H₆" },
            { tiempo: "Alqueno", correcto: "doble · -eno · CₙH₂ₙ", error: "Eteno C₂H₄" },
            { tiempo: "Alquino", correcto: "triple · -ino · CₙH₂ₙ₋₂", error: "Etino C₂H₂" }
          ]
        },
        {
          tipo: "par",
          etiqueta: "prefijo = número de carbonos; sufijo = tipo de enlace",
          correcto: "Propeno: prop- (3 C) + -eno (doble enlace) → C₃H₆",
          incorrecto: "Llamar «propano» a un compuesto con doble enlace → el sufijo -ano es para enlaces simples"
        },
        {
          tipo: "trampa",
          letra: "B",
          titulo: "El sufijo revela el enlace: -ano (simple), -eno (doble), -ino (triple); no los confundas",
          correcto: "Butino = 4 C con triple enlace",
          incorrecto: "Suponer que «buteno» tiene triple enlace → -eno es doble enlace"
        }
      ]
    },
    {
      id: 4,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Nomenclatura orgánica",
      pregunta: "Un hidrocarburo de tres carbonos con un solo enlace doble se llama…",
      opciones: ["propeno", "propano", "propino"],
      correcta: 0,
      explicacion: "El prefijo prop- indica 3 carbonos y el sufijo -eno indica un doble enlace: propeno (C₃H₆). «Propano» tendría solo enlaces simples y «propino» un triple enlace.",
      pasos: []
    },

    // ── Grupos funcionales ─────────────────────────────────────────────────────
    {
      id: 5,
      tipo: "regla_rica",
      etiqueta: "Bloque 3 · Grupos funcionales",
      titulo: "Grupos funcionales",
      bloques: [
        {
          tipo: "texto",
          texto: "Un grupo funcional es un átomo o conjunto de átomos que da a la molécula propiedades características y determina su reactividad. Los compuestos se nombran según el grupo que contienen. Entre los más importantes: el grupo hidroxilo (–OH) de los alcoholes; el carboxilo (–COOH) de los ácidos carboxílicos; el carbonilo (C=O) de aldehídos y cetonas; y el grupo amino (–NH₂) de las aminas. Identificar el grupo funcional permite reconocer el tipo de compuesto."
        },
        {
          tipo: "tabla",
          titulo: "Grupos funcionales frecuentes",
          columnas: ["Grupo", "Función", "Ejemplo"],
          filas: [
            { tiempo: "–OH",   correcto: "Alcohol",            error: "Etanol CH₃CH₂OH" },
            { tiempo: "–COOH", correcto: "Ácido carboxílico",  error: "Ácido acético CH₃COOH" },
            { tiempo: "C=O",   correcto: "Aldehído / cetona",  error: "Acetona (cetona)" },
            { tiempo: "–NH₂",  correcto: "Amina",              error: "Metilamina CH₃NH₂" },
            { tiempo: "–COO–", correcto: "Éster (-oato de -ilo)", error: "Propanoato de etilo" }
          ]
        },
        {
          tipo: "par",
          etiqueta: "el grupo funcional define la familia del compuesto",
          correcto: "CH₃COOH tiene el grupo –COOH → es un ácido carboxílico (ácido acético)",
          incorrecto: "Clasificar CH₃COOH como alcohol → el grupo característico es –COOH, no –OH aislado"
        },
        {
          tipo: "trampa",
          letra: "C",
          titulo: "El grupo –COOH (carboxilo) no es lo mismo que el –OH (hidroxilo): el carboxilo hace ácida a la molécula",
          correcto: "Etanol (–OH) es un alcohol; ácido acético (–COOH) es un ácido",
          incorrecto: "Confundir un alcohol con un ácido por ver un oxígeno e hidrógeno"
        }
      ]
    },
    {
      id: 6,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Grupo funcional",
      pregunta: "El etanol (CH₃CH₂OH) pertenece a la familia de los…",
      opciones: ["alcoholes", "ácidos carboxílicos", "aminas"],
      correcta: 0,
      explicacion: "El etanol contiene el grupo hidroxilo –OH unido a un carbono: es un alcohol. Los ácidos carboxílicos llevan –COOH y las aminas el grupo –NH₂.",
      pasos: []
    },

    // ── Macromoléculas biológicas ──────────────────────────────────────────────
    {
      id: 7,
      tipo: "regla_rica",
      etiqueta: "Bloque 4 · Macromoléculas",
      titulo: "Macromoléculas biológicas",
      bloques: [
        {
          tipo: "texto",
          texto: "Las macromoléculas son moléculas muy grandes formadas por la unión de unidades pequeñas (monómeros) en cadenas (polímeros). Las cuatro familias biológicas son: carbohidratos (monómero: monosacáridos como la glucosa; función energética); lípidos (formados por ácidos grasos y glicerol; reserva de energía y membranas); proteínas (monómero: aminoácidos unidos por enlaces peptídicos; función estructural, enzimática y de transporte); y ácidos nucleicos (monómero: nucleótidos; almacenan y transmiten la información genética: ADN y ARN)."
        },
        {
          tipo: "tabla",
          titulo: "Las cuatro macromoléculas",
          columnas: ["Macromolécula", "Monómero", "Función principal"],
          filas: [
            { tiempo: "Carbohidratos", correcto: "Monosacáridos (glucosa)", error: "Energía inmediata" },
            { tiempo: "Lípidos",       correcto: "Ácidos grasos + glicerol", error: "Reserva de energía y membranas" },
            { tiempo: "Proteínas",     correcto: "Aminoácidos (enlace peptídico)", error: "Estructura, enzimas, transporte" },
            { tiempo: "Ácidos nucleicos", correcto: "Nucleótidos", error: "Información genética (ADN/ARN)" }
          ]
        },
        {
          tipo: "par",
          etiqueta: "cada macromolécula se construye con su monómero característico",
          correcto: "Las proteínas son polímeros de aminoácidos unidos por enlaces peptídicos",
          incorrecto: "Decir que las proteínas están hechas de nucleótidos → esos forman los ácidos nucleicos"
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "Los lípidos no son polímeros de un monómero repetido como los demás; se forman por ácidos grasos y glicerol, y son apolares (no se disuelven en agua)",
          correcto: "Lípidos: hidrofóbicos, reserva energética y componentes de membranas",
          incorrecto: "Tratar a los lípidos como cadenas de un único monómero igual que las proteínas"
        }
      ]
    },
    {
      id: 8,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Macromoléculas",
      pregunta: "¿Cuál es el monómero (unidad básica) de las proteínas?",
      opciones: ["Los aminoácidos", "Los monosacáridos", "Los nucleótidos"],
      correcta: 0,
      explicacion: "Las proteínas son cadenas de aminoácidos unidos por enlaces peptídicos. Los monosacáridos forman carbohidratos y los nucleótidos forman los ácidos nucleicos (ADN y ARN).",
      pasos: []
    },
    {
      id: 9,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Función biológica",
      pregunta: "¿Qué macromolécula almacena y transmite la información genética?",
      opciones: [
        "Los ácidos nucleicos (ADN y ARN)",
        "Los carbohidratos",
        "Los lípidos"
      ],
      correcta: 0,
      explicacion: "Los ácidos nucleicos (ADN y ARN), formados por nucleótidos, almacenan y transmiten la información genética. Los carbohidratos aportan energía y los lípidos sirven de reserva y forman membranas.",
      pasos: []
    },

    // ── Grupo funcional éster ──────────────────────────────────────────────────
    {
      id: 11,
      tipo: "regla_rica",
      etiqueta: "Bloque 5 · Ésteres",
      titulo: "El grupo funcional éster",
      bloques: [
        {
          tipo: "texto",
          texto: "Un éster tiene el grupo funcional R–COO–R′: proviene de la reacción entre un ácido carboxílico y un alcohol (esterificación), perdiendo agua. A diferencia del ácido carboxílico (–COOH), en el éster el hidrógeno del –OH ha sido sustituido por una cadena de carbono (R′). Se nombran con la terminación «-oato de -ilo»: la parte «-oato» viene del ácido y «-ilo» del alcohol. Por ejemplo, propanoato de etilo proviene del ácido propanoico y del etanol. Muchos ésteres tienen olores frutales agradables."
        },
        {
          tipo: "tabla",
          titulo: "El éster frente al ácido",
          columnas: ["Compuesto", "Grupo", "Nombre"],
          filas: [
            { tiempo: "Ácido carboxílico", correcto: "–COOH", error: "ácido propanoico" },
            { tiempo: "Éster", correcto: "–COO– (R–COO–R′)", error: "propanoato de etilo" },
            { tiempo: "Terminación del éster", correcto: "-oato de -ilo", error: "metanoato de metilo" }
          ]
        },
        {
          tipo: "par",
          etiqueta: "el éster sustituye el H del –COOH por una cadena R′",
          correcto: "Ácido propanoico (CH₃CH₂COOH) + etanol → propanoato de etilo (CH₃CH₂COOCH₂CH₃)",
          incorrecto: "Confundir el éster con un ácido carboxílico → en el éster no queda el H ácido del –OH"
        },
        {
          tipo: "trampa",
          letra: "B",
          titulo: "El nombre del éster lleva dos partes: «-oato» del ácido y «de -ilo» del alcohol; el orden importa",
          correcto: "Propanoato de etilo = ácido propanoico + etanol",
          incorrecto: "Decir «etanoato de propilo» para CH₃CH₂COOCH₂CH₃ → invierte ácido y alcohol"
        }
      ]
    },
    {
      id: 12,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Éster",
      pregunta: "¿Cuál es el grupo funcional característico de un éster como el propanoato de etilo?",
      opciones: ["R–COO–R′", "–COOH", "–OH"],
      correcta: 0,
      explicacion: "El éster tiene el grupo R–COO–R′: el hidrógeno del ácido carboxílico (–COOH) está sustituido por una cadena de carbono. El –COOH es del ácido carboxílico y el –OH del alcohol.",
      pasos: []
    },

    // ── Hibridación del carbono ─────────────────────────────────────────────────
    {
      id: 13,
      tipo: "regla_rica",
      etiqueta: "Bloque 6 · Hibridación",
      titulo: "Hibridación del carbono",
      bloques: [
        {
          tipo: "texto",
          texto: "La hibridación describe cómo se combinan los orbitales del carbono según el tipo de enlaces que forma, y determina la geometría de la molécula. Si el carbono solo tiene enlaces simples es sp³ (geometría tetraédrica, ángulos de 109.5°). Si tiene un doble enlace es sp² (geometría trigonal plana, 120°). Si tiene un triple enlace (o dos dobles) es sp (geometría lineal, 180°). Un truco: cuenta las regiones de enlace; sp³ = 4, sp² = 3, sp = 2 direcciones distintas."
        },
        {
          tipo: "tabla",
          titulo: "Tipos de hibridación",
          columnas: ["Hibridación", "Enlace", "Geometría"],
          filas: [
            { tiempo: "sp³", correcto: "enlace simple", error: "tetraédrica (109.5°), ej. CH₄" },
            { tiempo: "sp²", correcto: "doble enlace",  error: "trigonal plana (120°), ej. eteno" },
            { tiempo: "sp",  correcto: "triple enlace", error: "lineal (180°), ej. etino" }
          ]
        },
        {
          tipo: "par",
          etiqueta: "el tipo de enlace múltiple revela la hibridación",
          correcto: "El carbono del eteno (CH₂=CH₂) tiene un doble enlace → es sp² (trigonal plana)",
          incorrecto: "Asignar sp³ a un carbono con doble enlace → el doble enlace lo hace sp²"
        },
        {
          tipo: "trampa",
          letra: "C",
          titulo: "Más enlaces simples = más exponente: sp³ (simple), sp² (doble), sp (triple); a mayor insaturación, menor el número",
          correcto: "Triple enlace → sp (lineal)",
          incorrecto: "Pensar que el triple enlace es sp³"
        }
      ]
    },
    {
      id: 14,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Hibridación",
      pregunta: "¿Qué hibridación tiene cada carbono del eteno (CH₂=CH₂)?",
      opciones: ["sp²", "sp³", "sp"],
      correcta: 0,
      explicacion: "Cada carbono del eteno participa en un doble enlace (C=C), lo que corresponde a hibridación sp² y geometría trigonal plana (ángulos de 120°). El sp³ sería con enlaces simples y el sp con un triple enlace.",
      pasos: []
    },

    // ── Nomenclatura IUPAC e isomería ──────────────────────────────────────────
    {
      id: 15,
      tipo: "regla_rica",
      etiqueta: "Bloque 7 · IUPAC e isomería",
      titulo: "Nomenclatura IUPAC e isomería cis–trans",
      bloques: [
        {
          tipo: "texto",
          texto: "Para nombrar un compuesto orgánico según la IUPAC: 1) se elige la cadena más larga que contenga el grupo funcional principal (cadena principal); 2) se numera la cadena empezando por el extremo que dé los localizadores más bajos al grupo funcional y a las ramificaciones; 3) se nombran las ramificaciones (sustituyentes) con su localizador, en orden alfabético, y por último la cadena principal con su sufijo. La isomería cis–trans (geométrica) aparece en dobles enlaces: cis si los grupos quedan del mismo lado, trans si quedan en lados opuestos."
        },
        {
          tipo: "tabla",
          titulo: "Pasos para nombrar",
          columnas: ["Paso", "Acción", "Detalle"],
          filas: [
            { tiempo: "1. Cadena", correcto: "la más larga con el grupo principal", error: "fija el nombre base" },
            { tiempo: "2. Numerar", correcto: "localizadores más bajos al grupo", error: "empieza por el extremo correcto" },
            { tiempo: "3. Ramas",  correcto: "sustituyentes + localizador", error: "en orden alfabético" },
            { tiempo: "Isomería",  correcto: "cis (mismo lado) / trans (opuestos)", error: "solo con doble enlace" }
          ]
        },
        {
          tipo: "par",
          etiqueta: "el localizador indica en qué carbono está el grupo o la rama",
          correcto: "CH₃CH₂CH₂–CO–CH(CH₃)–CH₃ → 2-metil-3-hexanona (cadena de 6 C, cetona en C3, metilo en C2)",
          incorrecto: "Numerar desde el otro extremo y dar localizadores más altos al grupo carbonilo"
        },
        {
          tipo: "trampa",
          letra: "D",
          titulo: "Se numera por el extremo que da los NÚMEROS MÁS BAJOS al grupo funcional, no necesariamente de izquierda a derecha",
          correcto: "El doble enlace del 2-penteno está en el carbono 2",
          incorrecto: "Empezar siempre por la izquierda sin comparar cuál extremo da el localizador menor"
        }
      ]
    },
    {
      id: 16,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — IUPAC (cetona)",
      pregunta: "¿Cómo se nombra la cetona CH₃CH₂CH₂–CO–CH(CH₃)–CH₃ según la IUPAC?",
      opciones: ["2-metil-3-hexanona", "5-metil-4-hexanona", "2-metilpentan-3-ona"],
      correcta: 0,
      explicacion: "La cadena más larga tiene 6 carbonos (hexanona). Numerando para dar el localizador más bajo al grupo carbonilo, el C=O queda en el carbono 3 y el metilo en el carbono 2: 2-metil-3-hexanona.",
      pasos: []
    },
    {
      id: 17,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Localizador del doble enlace",
      pregunta: "El compuesto CH₃–CH=CH–CH₂–CH₃ se nombra como…",
      opciones: ["2-penteno", "3-penteno", "1-penteno"],
      correcta: 0,
      explicacion: "La cadena tiene 5 carbonos (pent-) con un doble enlace (-eno). Numerando para dar el localizador más bajo, el doble enlace queda entre los carbonos 2 y 3, así que se nombra 2-penteno.",
      pasos: []
    },

    // ── Disacáridos ─────────────────────────────────────────────────────────────
    {
      id: 18,
      tipo: "regla_rica",
      etiqueta: "Bloque 8 · Disacáridos",
      titulo: "Disacáridos: glucosa + otro monosacárido",
      bloques: [
        {
          tipo: "texto",
          texto: "Los disacáridos son carbohidratos formados por la unión de dos monosacáridos. Los tres más comunes parten siempre de la glucosa: la sacarosa (el azúcar de mesa) es glucosa + fructosa; la lactosa (el azúcar de la leche) es glucosa + galactosa; y la maltosa (el azúcar de la malta) es glucosa + glucosa. Un truco para recordarlos: «la SaCarosa lleva fruCtosa, la Lactosa de la Leche lleva galactosa, y la Maltosa es glucosa Más glucosa»."
        },
        {
          tipo: "tabla",
          titulo: "Los tres disacáridos clave",
          columnas: ["Disacárido", "Monosacáridos", "Dónde está"],
          filas: [
            { tiempo: "Sacarosa", correcto: "glucosa + fructosa", error: "azúcar de mesa" },
            { tiempo: "Lactosa",  correcto: "glucosa + galactosa", error: "azúcar de la leche" },
            { tiempo: "Maltosa",  correcto: "glucosa + glucosa", error: "azúcar de la malta" }
          ]
        },
        {
          tipo: "par",
          etiqueta: "los tres comparten la glucosa; cambia el segundo monosacárido",
          correcto: "Sacarosa = glucosa + fructosa",
          incorrecto: "Decir que la sacarosa es glucosa + galactosa → esa es la lactosa"
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "La lactosa lleva galactosa y la sacarosa fructosa; no las intercambies",
          correcto: "Lactosa (leche) = glucosa + galactosa",
          incorrecto: "Confundir la fructosa de la sacarosa con la galactosa de la lactosa"
        }
      ]
    },
    {
      id: 19,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Disacáridos",
      pregunta: "La unión de glucosa + fructosa forma el disacárido llamado…",
      opciones: ["Sacarosa", "Lactosa", "Maltosa"],
      correcta: 0,
      explicacion: "Glucosa + fructosa forman la sacarosa (el azúcar de mesa). La lactosa es glucosa + galactosa y la maltosa es glucosa + glucosa.",
      pasos: []
    },

    // ── Cierre ────────────────────────────────────────────────────────────────
    {
      id: 10,
      tipo: "resumen",
      titulo: "Resumen",
      etiqueta: "Lo esencial de la química del carbono",
      puntos: [
        { titulo: "El carbono", texto: "tetravalente; forma cadenas y enlaces simples, dobles y triples" },
        { titulo: "Hidrocarburos", texto: "alcanos (-ano), alquenos (-eno), alquinos (-ino); prefijo = n.º de C" },
        { titulo: "Grupos funcionales", texto: "–OH alcohol, –COOH ácido, C=O aldehído/cetona, –NH₂ amina" },
        { titulo: "Macromoléculas", texto: "carbohidratos, lípidos, proteínas y ácidos nucleicos" },
        { titulo: "Monómeros", texto: "glucosa, ácidos grasos+glicerol, aminoácidos, nucleótidos" },
        { titulo: "Éster", texto: "R–COO–R′; terminación -oato de -ilo (propanoato de etilo)" },
        { titulo: "Hibridación", texto: "sp³ simple (tetraédrica), sp² doble (trigonal plana), sp triple (lineal)" },
        { titulo: "IUPAC e isomería", texto: "cadena principal, localizadores bajos al grupo, ramas; cis–trans en dobles enlaces" },
        { titulo: "Disacáridos", texto: "sacarosa = glucosa+fructosa; lactosa = glucosa+galactosa; maltosa = glucosa+glucosa" }
      ]
    }

  ]
};
