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
            { tiempo: "–NH₂",  correcto: "Amina",              error: "Metilamina CH₃NH₂" }
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
        { titulo: "Monómeros", texto: "glucosa, ácidos grasos+glicerol, aminoácidos, nucleótidos" }
      ]
    }

  ]
};
