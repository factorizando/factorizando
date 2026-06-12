// Presentación: Física — Pensamiento Científico (EXANI-I)
// Cubre los temas de física de las 3 subáreas del área de Pensamiento Científico.
// Estructura por tema: 1 regla_rica · 2-3 ejemplos · 5 ejercicios

export const PRESENTACION = {
  id: "fisica-pensamiento-cientifico",
  titulo: "Física: Pensamiento Científico",
  materia: "Ciencias",
  subtema: "Física · EXANI-I",
  slides: [

    // ── PORTADA ────────────────────────────────────────────────────────────────
    {
      id: 0,
      tipo: "portada",
      titulo: "Física",
      subtitulo: "Estados de la materia · Fuerzas · Movimiento · Energía · Electricidad",
      etiqueta: "Pensamiento Científico · EXANI-I",
    },

    // ══════════════════════════════════════════════════════════════════════════
    // TEMA 1 — ESTADOS DE LA MATERIA
    // ══════════════════════════════════════════════════════════════════════════
    {
      id: 1,
      tipo: "regla_rica",
      etiqueta: "1 / 7 — Estados de la materia",
      titulo: "Estados de agregación de la materia",
      bloques: [
        {
          tipo: "texto",
          texto: "La materia puede presentarse en distintos estados según la energía y las fuerzas entre sus partículas. Los tres estados cotidianos son sólido, líquido y gas; el plasma es el cuarto estado y el más abundante en el universo (estrellas, relámpagos, pantallas de televisión).",
        },
        {
          tipo: "diagrama",
          id: "fisica-estados-materia",
          titulo: "Organización de partículas en cada estado",
        },
        {
          tipo: "tabla",
          titulo: "Comparación de los estados de la materia",
          columnas: ["Estado", "Forma y volumen", "Ejemplo"],
          filas: [
            { tiempo: "Sólido",  correcto: "Forma y volumen fijos",        error: "Hielo, madera, metal" },
            { tiempo: "Líquido", correcto: "Volumen fijo, forma variable",  error: "Agua, aceite, mercurio" },
            { tiempo: "Gas",     correcto: "Forma y volumen variables",     error: "Aire, vapor de agua" },
            { tiempo: "Plasma",  correcto: "Gas ionizado, sin forma fija",  error: "Sol, neón, relámpagos" },
          ],
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "Los cambios de estado son cambios físicos, NO reacciones químicas",
          correcto: "Al hervir agua, las moléculas de H₂O siguen siendo H₂O; solo cambia la separación entre ellas.",
          incorrecto: "Confundir cambio de estado con reacción química: el agua que hierve no se convierte en otra sustancia.",
        },
      ],
    },

    // Ejemplo 1 — Cambios de estado del agua
    {
      id: 2,
      tipo: "ejemplo",
      etiqueta: "Ejemplo 1 — Estados de la materia",
      titulo: "Los seis cambios de estado del agua",
      svgDiagram: "fisica-cambios-estado",
      enunciado: "El agua es la sustancia más usada para ilustrar los cambios de estado porque los experimentamos en la vida diaria. Cada transición tiene un nombre específico y ocurre al absorber o liberar calor.",
      datos: [],
      pasos: [
        { pre: "Fusión (S→L): ", math: "\\text{hielo} \\xrightarrow{+Q} \\text{agua líquida} \\quad (0\\,°C)" },
        { pre: "Solidificación (L→S): ", math: "\\text{agua líquida} \\xrightarrow{-Q} \\text{hielo} \\quad (0\\,°C)" },
        { pre: "Vaporización (L→G): ", math: "\\text{agua líquida} \\xrightarrow{+Q} \\text{vapor} \\quad (100\\,°C \\text{ a 1 atm})" },
        { pre: "Condensación (G→L): ", math: "\\text{vapor} \\xrightarrow{-Q} \\text{agua líquida}" },
        { pre: "Sublimación (S→G): ", math: "\\text{hielo seco (CO}_2\\text{)} \\xrightarrow{+Q} \\text{gas directamente}" },
        { pre: "Deposición (G→S): ", math: "\\text{vapor de agua} \\xrightarrow{-Q} \\text{escarcha}" },
      ],
    },

    // Ejemplo 2 — El plasma en la vida cotidiana
    {
      id: 3,
      tipo: "ejemplo",
      etiqueta: "Ejemplo 2 — Estados de la materia",
      titulo: "El plasma: el estado más abundante del universo",
      enunciado: "El plasma se forma cuando se suministra tanta energía a un gas que los átomos pierden electrones, generando iones positivos y electrones libres. Aunque poco familiar en la Tierra, constituye más del 99 % de la materia visible del universo.",
      datos: [
        { label: "Natural (alta T)", math: "\\text{Sol, estrellas, relámpagos, auroras boreales}" },
        { label: "Artificial", math: "\\text{Lámparas de neón, pantallas de plasma, arco de soldadura}" },
      ],
      pasos: [
        { pre: "Temperatura: el plasma necesita miles o millones de grados kelvin — mucho más que el punto de ebullición del agua." },
        { pre: "Conductividad: a diferencia del gas común, el plasma conduce electricidad porque tiene partículas cargadas libres." },
        { pre: "Luminiscencia: al recombinarse los iones con los electrones, emiten luz (así funcionan los letreros de neón)." },
        { pre: "Diferencia clave con el gas: en un gas los átomos están completos (no ionizados); en el plasma están ionizados." },
      ],
    },

    // Ejercicio 1
    {
      id: 4,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Estados de la materia",
      pregunta: "Una sustancia ocupa siempre el mismo volumen, pero adopta la forma del recipiente que la contiene. ¿En qué estado de la materia se encuentra?",
      opciones: [
        "Estado sólido, porque mantiene su volumen.",
        "Estado líquido, porque tiene volumen fijo pero forma variable.",
        "Estado gaseoso, porque cambia tanto de forma como de volumen.",
      ],
      correcta: 1,
      explicacion: "El estado líquido se caracteriza por volumen definido (partículas juntas pero móviles) y forma variable (se adapta al recipiente). En el sólido, forma y volumen son fijos. En el gas, ambos cambian.",
      pasos: [],
    },

    // Ejercicio 2
    {
      id: 5,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Estados de la materia",
      pregunta: "¿Cuál de los siguientes procesos es un cambio de estado y NO una reacción química?",
      opciones: [
        "La condensación del vapor de agua en las ventanas frías.",
        "La oxidación del hierro que produce herrumbre.",
        "La combustión del papel que produce cenizas y CO₂.",
      ],
      correcta: 0,
      explicacion: "La condensación es un cambio físico: el vapor de agua (H₂O) solo cambia de estado gaseoso a líquido; la composición química no cambia. La oxidación y la combustión son reacciones químicas porque producen nuevas sustancias.",
      pasos: [],
    },

    // Ejercicio 3
    {
      id: 6,
      tipo: "ejercicio",
      etiqueta: "Reactivo 3 — Estados de la materia",
      pregunta: "El 'hielo seco' es CO₂ sólido que a temperatura ambiente pasa directamente al estado gaseoso sin volverse líquido. ¿Cómo se llama este cambio de estado?",
      opciones: [
        "Sublimación.",
        "Vaporización.",
        "Fusión.",
      ],
      correcta: 0,
      explicacion: "La sublimación es el cambio directo del estado sólido al gaseoso sin pasar por el líquido. El CO₂ sólido ('hielo seco') es el ejemplo más usado en laboratorio y producción de efectos especiales.",
      pasos: [],
    },

    // Ejercicio 4
    {
      id: 7,
      tipo: "ejercicio",
      etiqueta: "Reactivo 4 — Estados de la materia",
      pregunta: "¿En cuál de los cuatro estados de la materia las partículas tienen mayor separación y menor atracción entre sí?",
      opciones: [
        "En el estado gaseoso.",
        "En el estado líquido.",
        "En el estado sólido.",
      ],
      correcta: 0,
      explicacion: "En el gas, las partículas están muy separadas y las fuerzas de atracción entre ellas son despreciables, lo que permite que el gas se expanda y ocupe todo el volumen disponible. En el sólido las partículas están más juntas y más atraídas.",
      pasos: [],
    },

    // Ejercicio 5
    {
      id: 8,
      tipo: "ejercicio",
      etiqueta: "Reactivo 5 — Estados de la materia",
      pregunta: "Al enfriar vapor de agua por debajo de 100 °C a presión atmosférica, ¿qué cambio de estado ocurre y cómo se llama?",
      opciones: [
        "El vapor se convierte en líquido: condensación.",
        "El vapor se convierte en sólido directamente: sublimación.",
        "El vapor se convierte en plasma al perder energía.",
      ],
      correcta: 0,
      explicacion: "La condensación es el cambio de gas a líquido al disminuir la temperatura. El proceso inverso es la vaporización. La sublimación (sólido→gas) y la deposición (gas→sólido) no pasan por el estado líquido.",
      pasos: [],
    },

    // ══════════════════════════════════════════════════════════════════════════
    // TEMA 2 — EQUILIBRIO, FRICCIÓN Y FLOTACIÓN
    // ══════════════════════════════════════════════════════════════════════════
    {
      id: 9,
      tipo: "regla_rica",
      etiqueta: "2 / 7 — Fuerzas",
      titulo: "Equilibrio, fricción y flotación",
      bloques: [
        {
          tipo: "texto",
          texto: "Un objeto está en equilibrio cuando la suma de todas las fuerzas que actúan sobre él es cero (ΣF = 0). La fricción es una fuerza que se opone al movimiento relativo entre superficies. La flotación depende del principio de Arquímedes: un objeto sumergido recibe un empuje igual al peso del fluido desplazado.",
        },
        {
          tipo: "diagrama",
          id: "fisica-fuerzas",
          titulo: "Diagrama de fuerzas y principio de Arquímedes",
        },
        {
          tipo: "tabla",
          titulo: "Tipos de fricción",
          columnas: ["Tipo", "Cuándo ocurre", "Ejemplo"],
          filas: [
            { tiempo: "Estática",   correcto: "Objeto en reposo",           error: "Libro en mesa inclinada que no resbala" },
            { tiempo: "Cinética",   correcto: "Objeto en movimiento",       error: "Frenos de auto al deslizarse" },
            { tiempo: "Rodamiento", correcto: "Objeto rueda sobre sup.",    error: "Llanta de bicicleta" },
          ],
        },
        {
          tipo: "trampa",
          letra: "B",
          titulo: "Flotación: decide la DENSIDAD, no el peso total",
          correcto: "Un barco de acero flota porque su densidad promedio (incluido el aire interior) es menor que la del agua.",
          incorrecto: "Pensar que los objetos pesados siempre se hunden: un barco de miles de toneladas flota, mientras que un tornillo de acero se hunde.",
        },
      ],
    },

    // Ejemplo 1 — Cálculo del empuje de Arquímedes
    {
      id: 10,
      tipo: "ejemplo",
      etiqueta: "Ejemplo 1 — Fuerzas",
      titulo: "Cálculo del empuje sobre un bloque sumergido",
      enunciado: "Un bloque de madera con volumen 0.0002 m³ se sumerge completamente en agua (densidad = 1000 kg/m³, g = 10 m/s²). Calcula el empuje y determina si el bloque flota o se hunde si su masa es 150 g.",
      datos: [
        { label: "Datos", math: "V = 0.0002\\,\\text{m}^3,\\quad \\rho_{agua} = 1000\\,\\text{kg/m}^3,\\quad g = 10\\,\\text{m/s}^2" },
        { label: "Masa del bloque", math: "m = 150\\,\\text{g} = 0.150\\,\\text{kg}" },
      ],
      pasos: [
        { pre: "Empuje (Principio de Arquímedes): ", math: "E = \\rho_{fluido}\\cdot V\\cdot g = 1000 \\times 0.0002 \\times 10 = 2\\,\\text{N}" },
        { pre: "Peso del bloque: ", math: "W = m\\cdot g = 0.150 \\times 10 = 1.5\\,\\text{N}" },
        { pre: "Comparación: ", math: "E = 2\\,\\text{N} > W = 1.5\\,\\text{N}" },
        { pre: "Conclusión: el empuje supera al peso, por lo que el bloque ", math: "\\textbf{flota}\\text{ (sube hasta la superficie)}" },
      ],
    },

    // Ejemplo 2 — Fricción: caja en rampa
    {
      id: 11,
      tipo: "ejemplo",
      etiqueta: "Ejemplo 2 — Fuerzas",
      titulo: "Fricción estática: ¿cuándo comienza a deslizarse una caja?",
      enunciado: "Una caja de 10 kg descansa sobre un piso horizontal. El coeficiente de fricción estática es μ = 0.4 y g = 10 m/s². ¿Cuál es la fuerza máxima de fricción antes de que la caja empiece a moverse?",
      datos: [
        { label: "Datos", math: "m = 10\\,\\text{kg},\\quad \\mu_e = 0.4,\\quad g = 10\\,\\text{m/s}^2" },
        { label: "Normal en piso plano", math: "N = m\\cdot g = 10 \\times 10 = 100\\,\\text{N}" },
      ],
      pasos: [
        { pre: "Fuerza normal: ", math: "N = m\\cdot g = 100\\,\\text{N}" },
        { pre: "Fricción estática máxima: ", math: "f_{e,\\text{máx}} = \\mu_e \\cdot N = 0.4 \\times 100 = 40\\,\\text{N}" },
        { pre: "Interpretación: si empujas con menos de 40 N, la caja ", math: "\\textbf{no se mueve}\\text{ (la fricción cancela tu fuerza)}" },
        { pre: "Si empujas con más de 40 N, la caja comienza a deslizarse; entonces actúa la ", math: "\\text{fricción cinética } (f_c = \\mu_c \\cdot N < f_{e,\\text{máx}})" },
      ],
    },

    // Ejercicio 1
    {
      id: 12,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Fuerzas",
      pregunta: "Se coloca un cubo de madera en un recipiente con agua y el cubo flota. ¿Qué relación hay entre el peso del cubo y el empuje que recibe?",
      opciones: [
        "El empuje es mayor que el peso del cubo, por eso asciende hacia la superficie.",
        "El empuje es igual al peso del cubo, por eso permanece en equilibrio.",
        "El peso del cubo es mayor que el empuje, y por eso parte del cubo queda bajo el agua.",
      ],
      correcta: 1,
      explicacion: "Cuando un objeto flota en equilibrio, la fuerza de empuje (↑) es exactamente igual al peso del objeto (↓). Eso establece el principio de Arquímedes: el empuje equivale al peso del fluido desplazado por el objeto.",
      pasos: [],
    },

    // Ejercicio 2
    {
      id: 13,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Fuerzas",
      pregunta: "Un clavo de acero se hunde en agua. ¿Cuál es la razón correcta?",
      opciones: [
        "Su densidad es mayor que la del agua, por lo que su peso supera el empuje.",
        "No recibe ningún empuje porque es sólido.",
        "Su temperatura es mayor que la del agua, por lo que se hunde.",
      ],
      correcta: 0,
      explicacion: "El acero tiene densidad ~7800 kg/m³, mucho mayor que la del agua (1000 kg/m³). Por eso su peso (↓) supera al empuje (↑) y se hunde. El empuje sí actúa sobre él, pero no es suficiente para sostenerlo.",
      pasos: [],
    },

    // Ejercicio 3
    {
      id: 14,
      tipo: "ejercicio",
      etiqueta: "Reactivo 3 — Fuerzas",
      pregunta: "Un objeto está en reposo sobre una mesa horizontal. ¿Qué puede concluirse sobre las fuerzas que actúan sobre él?",
      opciones: [
        "La suma de todas las fuerzas es cero (ΣF = 0); está en equilibrio.",
        "No existe ninguna fuerza sobre el objeto porque está quieto.",
        "El peso es cero porque el objeto no se mueve.",
      ],
      correcta: 0,
      explicacion: "Que un objeto esté en reposo no significa que no haya fuerzas; significa que se equilibran. La gravedad (peso ↓) es balanceada por la fuerza normal de la mesa (↑). ΣF = 0 define el equilibrio, no la ausencia de fuerzas.",
      pasos: [],
    },

    // Ejercicio 4
    {
      id: 15,
      tipo: "ejercicio",
      etiqueta: "Reactivo 4 — Fuerzas",
      pregunta: "Un submarino puede hundirse o subir a la superficie. ¿Cuál es el mecanismo correcto?",
      opciones: [
        "Llena o vacía tanques de lastre con agua para cambiar su peso promedio y compararlo con el empuje.",
        "Enciende motores que aumentan o disminuyen la fuerza de gravedad sobre él.",
        "Cambia la densidad del agua que lo rodea calentándola o enfriándola.",
      ],
      correcta: 0,
      explicacion: "El submarino ajusta su densidad promedio llenando (para hundirse) o vaciando con aire (para subir) sus tanques de lastre. Al llenarlos, su peso total aumenta por encima del empuje, y desciende. Al vaciarlos, el empuje supera al peso, y asciende.",
      pasos: [],
    },

    // Ejercicio 5
    {
      id: 16,
      tipo: "ejercicio",
      etiqueta: "Reactivo 5 — Fuerzas",
      pregunta: "¿Por qué es más fácil deslizar una caja sobre hielo que sobre asfalto, aunque tenga el mismo peso?",
      opciones: [
        "El hielo tiene un coeficiente de fricción mucho menor que el asfalto.",
        "El hielo ejerce menor fuerza normal sobre la caja.",
        "La gravedad actúa de manera diferente sobre superficies frías.",
      ],
      correcta: 0,
      explicacion: "La fricción depende del coeficiente μ y de la fuerza normal (f = μ·N). El hielo es muy liso (μ muy pequeño), mientras que el asfalto es rugoso (μ grande). La fuerza normal es la misma en ambos casos (igual peso), pero la fricción es mucho menor sobre el hielo.",
      pasos: [],
    },

    // ══════════════════════════════════════════════════════════════════════════
    // TEMA 3 — VELOCIDAD Y ACELERACIÓN
    // ══════════════════════════════════════════════════════════════════════════
    {
      id: 17,
      tipo: "regla_rica",
      etiqueta: "3 / 7 — Movimiento",
      titulo: "Velocidad y aceleración",
      bloques: [
        {
          tipo: "texto",
          texto: "La velocidad mide qué tan rápido cambia la posición de un objeto (v = d/t). La aceleración mide qué tan rápido cambia la velocidad (a = Δv/t). Cuando la aceleración es cero, el movimiento es uniforme (MRU); cuando es constante y distinta de cero, es uniformemente acelerado (MRUA).",
        },
        {
          tipo: "diagrama",
          id: "fisica-vel-acel",
          titulo: "Gráficas de velocidad vs tiempo: MRU vs MRUA",
        },
        {
          tipo: "tabla",
          titulo: "Comparación MRU vs MRUA",
          columnas: ["Característica", "MRU", "MRUA"],
          filas: [
            { tiempo: "Velocidad",   correcto: "Constante",        error: "Cambia uniformemente" },
            { tiempo: "Aceleración", correcto: "a = 0",            error: "a = constante ≠ 0" },
            { tiempo: "Gráfica v-t", correcto: "Línea horizontal", error: "Línea diagonal" },
            { tiempo: "Gráfica d-t", correcto: "Línea diagonal",   error: "Parábola" },
          ],
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "Velocidad es un vector — rapidez es un escalar",
          correcto: "Un auto que da una curva puede mantener su rapidez (magnitud) constante, pero su velocidad cambia porque cambia la dirección.",
          incorrecto: "Confundir 'velocidad constante' con 'rapidez constante': en movimiento circular uniforme la rapidez es constante pero la velocidad (dirección) cambia continuamente.",
        },
      ],
    },

    // Ejemplo 1 — Velocidad promedio de un corredor
    {
      id: 18,
      tipo: "ejemplo",
      etiqueta: "Ejemplo 1 — Movimiento",
      titulo: "Velocidad promedio de un corredor de 100 m",
      enunciado: "En los Juegos Olímpicos de 2009, Usain Bolt corrió 100 m en 9.58 s. Calcula su velocidad promedio y compárala con la de un corredor aficionado que tarda 15 s.",
      datos: [
        { label: "Bolt", math: "d = 100\\,\\text{m},\\quad t = 9.58\\,\\text{s}" },
        { label: "Aficionado", math: "d = 100\\,\\text{m},\\quad t = 15\\,\\text{s}" },
      ],
      pasos: [
        { pre: "Velocidad de Bolt: ", math: "v = \\frac{d}{t} = \\frac{100}{9.58} \\approx 10.4\\,\\text{m/s} \\approx 37.6\\,\\text{km/h}" },
        { pre: "Velocidad del aficionado: ", math: "v = \\frac{100}{15} \\approx 6.7\\,\\text{m/s} \\approx 24.1\\,\\text{km/h}" },
        { pre: "Nota: la velocidad promedio no indica que el corredor fue siempre a esa misma rapidez; ", math: "\\text{al inicio acelera y a mitad de carrera alcanza su máxima rapidez}" },
      ],
    },

    // Ejemplo 2 — Caída libre
    {
      id: 19,
      tipo: "ejemplo",
      etiqueta: "Ejemplo 2 — Movimiento",
      titulo: "Caída libre: velocidad y distancia",
      svgDiagram: "fisica-caida-libre",
      enunciado: "Una pelota se deja caer desde una altura de 20 m. Usando g = 10 m/s², calcula la velocidad en distintos momentos y la velocidad al llegar al suelo.",
      datos: [],
      pasos: [
        { pre: "Fórmula de velocidad en caída libre (parte del reposo, v₀=0): ", math: "v = g \\cdot t \\quad \\text{o bien} \\quad v = \\sqrt{2gh}" },
        { pre: "Al cabo de t = 1 s: ", math: "v = 10 \\times 1 = 10\\,\\text{m/s} \\quad (\\text{altura recorrida: } h = \\tfrac{1}{2}gt^2 = 5\\,\\text{m})" },
        { pre: "Al cabo de t = 2 s: ", math: "v = 10 \\times 2 = 20\\,\\text{m/s} \\quad (h = \\tfrac{1}{2}\\times10\\times4 = 20\\,\\text{m})" },
        { pre: "Velocidad al llegar al suelo (h = 20 m): ", math: "v = \\sqrt{2 \\times 10 \\times 20} = \\sqrt{400} = 20\\,\\text{m/s}" },
        { pre: "Conclusión: la aceleración es constante (g=10 m/s²), por lo que la velocidad ", math: "\\text{aumenta 10 m/s cada segundo (MRUA)}." },
      ],
    },

    // Ejemplo 3 — Auto que acelera
    {
      id: 20,
      tipo: "ejemplo",
      etiqueta: "Ejemplo 3 — Movimiento",
      titulo: "MRUA: un auto que acelera en la autopista",
      enunciado: "Un auto parte del reposo y acelera uniformemente a 3 m/s² durante 8 segundos. Calcula la velocidad final y la distancia recorrida.",
      datos: [
        { label: "Datos", math: "v_0 = 0,\\quad a = 3\\,\\text{m/s}^2,\\quad t = 8\\,\\text{s}" },
      ],
      pasos: [
        { pre: "Velocidad final: ", math: "v = v_0 + a\\cdot t = 0 + 3 \\times 8 = 24\\,\\text{m/s} \\approx 86\\,\\text{km/h}" },
        { pre: "Distancia recorrida: ", math: "d = v_0 t + \\tfrac{1}{2}a t^2 = 0 + \\tfrac{1}{2}\\times 3 \\times 64 = 96\\,\\text{m}" },
        { pre: "Verificación con fórmula alternativa: ", math: "v^2 = v_0^2 + 2ad \\;\\Rightarrow\\; 576 = 0 + 2\\times3\\times96 = 576\\,\\checkmark" },
      ],
    },

    // Ejercicio 1
    {
      id: 21,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Movimiento",
      pregunta: "Identifica el enunciado que involucra el concepto de velocidad.",
      opciones: [
        "Una persona camina cierta distancia a su casa en un determinado tiempo.",
        "Un automóvil está en reposo y avanza con el cambio de color del semáforo.",
        "Un ciclista varía el ritmo del pedaleo al subir la pendiente en una montaña.",
      ],
      correcta: 0,
      explicacion: "La velocidad equivale a la razón entre la distancia recorrida y el tiempo (v = d/t). La opción A describe exactamente eso. Las opciones B y C describen variaciones de velocidad, es decir, aceleración.",
      pasos: [],
    },

    // Ejercicio 2
    {
      id: 22,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Movimiento",
      pregunta: "Un ciclista recorre 150 m en 30 s con velocidad constante. ¿Cuál es su velocidad?",
      opciones: [
        "5 m/s",
        "4 500 m/s",
        "0.2 m/s",
      ],
      correcta: 0,
      explicacion: "v = d/t = 150 m ÷ 30 s = 5 m/s. La opción B comete el error de multiplicar en lugar de dividir; la C invierte numerador y denominador.",
      pasos: [],
    },

    // Ejercicio 3
    {
      id: 23,
      tipo: "ejercicio",
      etiqueta: "Reactivo 3 — Movimiento",
      pregunta: "Un auto viaja a 20 m/s y frena uniformemente hasta detenerse en 4 s. ¿Cuál es su aceleración?",
      opciones: [
        "−5 m/s² (desaceleración)",
        "+5 m/s² (aceleración positiva)",
        "−80 m/s²",
      ],
      correcta: 0,
      explicacion: "a = Δv/t = (0 − 20)/4 = −5 m/s². El signo negativo indica que la velocidad disminuye (desaceleración). La opción C confunde la fórmula multiplicando en lugar de dividir.",
      pasos: [],
    },

    // Ejercicio 4
    {
      id: 24,
      tipo: "ejercicio",
      etiqueta: "Reactivo 4 — Movimiento",
      pregunta: "Una pelota cae libremente desde el reposo (g = 10 m/s²). ¿Cuál es su velocidad después de 3 segundos?",
      opciones: [
        "30 m/s",
        "15 m/s",
        "10 m/s",
      ],
      correcta: 0,
      explicacion: "En caída libre con v₀ = 0: v = g·t = 10 × 3 = 30 m/s. La opción B confunde v = ½·g·t (fórmula de distancia); la C solo multiplica por 1 s.",
      pasos: [],
    },

    // Ejercicio 5
    {
      id: 25,
      tipo: "ejercicio",
      etiqueta: "Reactivo 5 — Movimiento",
      pregunta: "En una gráfica de velocidad vs tiempo (v-t), ¿qué representa una línea horizontal?",
      opciones: [
        "Movimiento rectilíneo uniforme: la velocidad no cambia (a = 0).",
        "El objeto está en reposo (v = 0).",
        "Movimiento rectilíneo uniformemente acelerado (a = constante ≠ 0).",
      ],
      correcta: 0,
      explicacion: "Una línea horizontal en la gráfica v-t significa que la velocidad es constante para todos los instantes de tiempo, lo que define el MRU (a = 0). Una línea en v = 0 horizontal sí indicaría reposo, pero una horizontal a cualquier altura constante es MRU. El MRUA produce una línea diagonal.",
      pasos: [],
    },

    // ══════════════════════════════════════════════════════════════════════════
    // TEMA 4 — SISTEMA SOLAR Y GRAVITACIÓN
    // ══════════════════════════════════════════════════════════════════════════
    {
      id: 26,
      tipo: "regla_rica",
      etiqueta: "4 / 7 — Sistema solar",
      titulo: "Sistema solar y gravitación",
      bloques: [
        {
          tipo: "texto",
          texto: "El sistema solar está formado por el Sol y ocho planetas que orbitan a su alrededor. La gravedad es la fuerza que mantiene los planetas en órbita: según Newton, dos masas se atraen con una fuerza proporcional a sus masas e inversamente proporcional al cuadrado de la distancia entre ellas (F = G·m₁·m₂/r²).",
        },
        {
          tipo: "diagrama",
          id: "fisica-sistema-solar",
          titulo: "Planetas del sistema solar (escala de orden, no de tamaño real)",
        },
        {
          tipo: "tabla",
          titulo: "Planetas interiores vs exteriores",
          columnas: ["Grupo", "Planetas", "Características"],
          filas: [
            { tiempo: "Terrestres (interiores)", correcto: "Mercurio, Venus, Tierra, Marte",    error: "Rocosos, pequeños, cercanos al Sol" },
            { tiempo: "Jovianos (exteriores)",   correcto: "Júpiter, Saturno, Urano, Neptuno", error: "Gaseosos o helados, muy grandes" },
          ],
        },
        {
          tipo: "trampa",
          letra: "B",
          titulo: "Plutón ya NO es planeta — es planeta enano desde 2006",
          correcto: "El sistema solar tiene 8 planetas. Plutón fue reclasificado como planeta enano por la UAI en 2006.",
          incorrecto: "Mencionar 9 planetas incluyendo a Plutón es un error frecuente desde la reclasificación de 2006.",
        },
      ],
    },

    // Ejemplo 1 — Peso en distintos planetas
    {
      id: 27,
      tipo: "ejemplo",
      etiqueta: "Ejemplo 1 — Sistema solar",
      titulo: "¿Cuánto pesarías en la Luna, Marte y Júpiter?",
      enunciado: "Una persona tiene una masa de 70 kg en la Tierra (g_Tierra = 9.8 m/s²). Calcula su peso en la Luna, Marte y Júpiter usando los valores de g de cada astro.",
      datos: [
        { label: "Gravedad (m/s²)", math: "g_{\\text{Tierra}}=9.8,\\; g_{\\text{Luna}}=1.6,\\; g_{\\text{Marte}}=3.7,\\; g_{\\text{Júpiter}}=24.8" },
        { label: "Masa (constante)", math: "m = 70\\,\\text{kg} \\quad (\\text{la masa no cambia de planeta a planeta})" },
      ],
      pasos: [
        { pre: "Peso en la Tierra: ", math: "W = 70 \\times 9.8 = 686\\,\\text{N}" },
        { pre: "Peso en la Luna: ", math: "W = 70 \\times 1.6 = 112\\,\\text{N} \\approx \\tfrac{1}{6}\\text{ del peso terrestre}" },
        { pre: "Peso en Marte: ", math: "W = 70 \\times 3.7 = 259\\,\\text{N} \\approx 38\\%\\text{ del peso terrestre}" },
        { pre: "Peso en Júpiter: ", math: "W = 70 \\times 24.8 = 1736\\,\\text{N} \\approx 2.5\\times\\text{ el peso terrestre}" },
        { pre: "Clave: ", math: "\\text{La masa es constante; el peso cambia porque } g \\text{ cambia en cada astro}" },
      ],
    },

    // Ejemplo 2 — Ley de Gravitación Universal
    {
      id: 28,
      tipo: "ejemplo",
      etiqueta: "Ejemplo 2 — Sistema solar",
      titulo: "La gravedad mantiene la órbita lunar",
      enunciado: "La Luna orbita la Tierra en círculo casi perfecto. La gravedad de la Tierra actúa como fuerza centrípeta. Si la distancia se duplicara, ¿qué pasaría con esa fuerza gravitacional?",
      datos: [
        { label: "Ley de Newton", math: "F = G\\,\\frac{m_1 m_2}{r^2}" },
        { label: "Variable clave", math: "F \\propto \\frac{1}{r^2} \\quad (\\text{relación inversa con el cuadrado de la distancia})" },
      ],
      pasos: [
        { pre: "Si r se duplica (r → 2r), el denominador se cuadruplica: ", math: "F' = G\\,\\frac{m_1 m_2}{(2r)^2} = \\frac{G\\,m_1 m_2}{4r^2} = \\frac{F}{4}" },
        { pre: "Resultado: la fuerza gravitacional se reduce a ", math: "\\tfrac{1}{4}\\text{ de su valor original}" },
        { pre: "Consecuencia orbital: con menos fuerza centrípeta, la Luna necesitaría moverse más lento y tendría una órbita más amplia." },
        { pre: "Regla general: ", math: "\\text{si } r \\times n \\Rightarrow F \\div n^2" },
      ],
    },

    // Ejercicio 1
    {
      id: 29,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Sistema solar",
      pregunta: "Un astronauta pesa 780 N en la superficie de la Tierra. En la Luna, donde la gravedad es aproximadamente 1/6 de la terrestre, ¿cuánto pesará?",
      opciones: [
        "780 N, porque la masa del astronauta no cambia.",
        "130 N, porque el peso depende de la fuerza gravitacional local.",
        "0 N, porque en el espacio no existe gravedad.",
      ],
      correcta: 1,
      explicacion: "El peso W = m·g cambia porque g cambia. La masa del astronauta es constante, pero su peso en la Luna es W_luna = 780/6 = 130 N. La gravedad sí existe en el espacio; los astronautas en órbita están en caída libre, no en ausencia de gravedad.",
      pasos: [],
    },

    // Ejercicio 2
    {
      id: 30,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Sistema solar",
      pregunta: "¿Cuántos planetas reconoce el sistema solar según la clasificación de la UAI (Unión Astronómica Internacional) vigente desde 2006?",
      opciones: [
        "8 planetas.",
        "9 planetas (incluyendo Plutón).",
        "7 planetas.",
      ],
      correcta: 0,
      explicacion: "Desde 2006 la UAI reconoce 8 planetas: Mercurio, Venus, Tierra, Marte, Júpiter, Saturno, Urano y Neptuno. Plutón fue reclasificado como 'planeta enano' porque no ha despejado su órbita de otros objetos.",
      pasos: [],
    },

    // Ejercicio 3
    {
      id: 31,
      tipo: "ejercicio",
      etiqueta: "Reactivo 3 — Sistema solar",
      pregunta: "¿Qué planetas se clasifican como 'terrestres' o 'rocosos'?",
      opciones: [
        "Mercurio, Venus, Tierra y Marte.",
        "Júpiter, Saturno, Urano y Neptuno.",
        "Tierra, Marte, Júpiter y Saturno.",
      ],
      correcta: 0,
      explicacion: "Los planetas terrestres son los cuatro más cercanos al Sol: Mercurio, Venus, Tierra y Marte. Son rocosos, relativamente pequeños y tienen alta densidad. Los planetas jovianos (Júpiter, Saturno, Urano, Neptuno) son grandes, gaseosos o helados.",
      pasos: [],
    },

    // Ejercicio 4
    {
      id: 32,
      tipo: "ejercicio",
      etiqueta: "Reactivo 4 — Sistema solar",
      pregunta: "Si se duplica la distancia entre dos masas, ¿cómo cambia la fuerza gravitacional entre ellas?",
      opciones: [
        "Se reduce a la cuarta parte (1/4).",
        "Se reduce a la mitad.",
        "Se cuadruplica.",
      ],
      correcta: 0,
      explicacion: "Según F = G·m₁·m₂/r², si r → 2r entonces r² → 4r², y la fuerza se reduce a F/4. La relación es 'inversa al cuadrado de la distancia', no inversa directa.",
      pasos: [],
    },

    // Ejercicio 5
    {
      id: 33,
      tipo: "ejercicio",
      etiqueta: "Reactivo 5 — Sistema solar",
      pregunta: "¿Por qué los planetas no salen disparados en línea recta aunque se desplazan a altas velocidades?",
      opciones: [
        "La gravedad del Sol actúa constantemente como fuerza centrípeta, curvando su trayectoria en órbita.",
        "El espacio vacío detiene su movimiento.",
        "Los planetas no tienen inercia, por eso siguen la curva del Sol.",
      ],
      correcta: 0,
      explicacion: "Sin la gravedad del Sol, los planetas continuarían en línea recta (primera ley de Newton). La gravedad solar actúa siempre hacia el Sol, curvando continuamente la trayectoria de los planetas y manteniéndolos en órbita.",
      pasos: [],
    },

    // ══════════════════════════════════════════════════════════════════════════
    // TEMA 5 — ENERGÍA POTENCIAL Y CINÉTICA
    // ══════════════════════════════════════════════════════════════════════════
    {
      id: 34,
      tipo: "regla_rica",
      etiqueta: "5 / 7 — Energía mecánica",
      titulo: "Energía potencial y energía cinética",
      bloques: [
        {
          tipo: "texto",
          texto: "La energía mecánica total se conserva cuando no hay fricción. La energía potencial gravitacional (Ep = mgh) depende de la altura; la energía cinética (Ec = ½mv²) depende de la velocidad. Al caer, Ep se convierte en Ec; al subir, Ec se convierte en Ep. La suma Ep + Ec = constante.",
        },
        {
          tipo: "diagrama",
          id: "fisica-energia-mecanica",
          titulo: "Conversión de energía en un péndulo (A y C = alto, B = bajo)",
        },
        {
          tipo: "tabla",
          titulo: "Fórmulas de energía mecánica",
          columnas: ["Tipo", "Fórmula", "Variables clave"],
          filas: [
            { tiempo: "Ep (potencial grav.)", correcto: "Ep = m·g·h",    error: "m=masa, g=9.8 m/s², h=altura" },
            { tiempo: "Ec (cinética)",        correcto: "Ec = ½·m·v²",   error: "m=masa, v=velocidad" },
            { tiempo: "Em (mecánica total)",  correcto: "Em = Ep + Ec",  error: "Se conserva sin fricción" },
          ],
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "Ep = 0 en el nivel de referencia elegido, no necesariamente en el suelo",
          correcto: "Podemos elegir cualquier nivel como h = 0; lo importante es ser consistentes en un mismo problema.",
          incorrecto: "Asumir que la energía potencial siempre es cero en el suelo: el nivel de referencia es una elección del observador, no una propiedad absoluta.",
        },
      ],
    },

    // Ejemplo 1 — Energía cinética de un patinador
    {
      id: 35,
      tipo: "ejemplo",
      etiqueta: "Ejemplo 1 — Energía mecánica",
      titulo: "Energía cinética de un patinador",
      enunciado: "Un patinador de 60 kg viaja a 4 m/s. Calcula su energía cinética. Luego calcula qué velocidad necesitaría para tener el doble de energía cinética.",
      datos: [
        { label: "Datos", math: "m = 60\\,\\text{kg},\\quad v = 4\\,\\text{m/s}" },
      ],
      pasos: [
        { pre: "Energía cinética inicial: ", math: "E_c = \\tfrac{1}{2}mv^2 = \\tfrac{1}{2}\\times 60\\times 16 = 480\\,\\text{J}" },
        { pre: "Para el doble de Ec: ", math: "E_c' = 960\\,\\text{J}" },
        { pre: "Despejando v': ", math: "960 = \\tfrac{1}{2}\\times60\\times v'^2 \\Rightarrow v'^2 = 32 \\Rightarrow v' = \\sqrt{32} \\approx 5.66\\,\\text{m/s}" },
        { pre: "Observación importante: ", math: "\\text{para duplicar la }E_c\\text{, la velocidad solo aumenta en un factor }\\sqrt{2}\\approx 1.41" },
      ],
    },

    // Ejemplo 2 — Tobogán: conservación de energía
    {
      id: 36,
      tipo: "ejemplo",
      etiqueta: "Ejemplo 2 — Energía mecánica",
      titulo: "Tobogán: ¿a qué velocidad llega al fondo?",
      enunciado: "Un niño de 30 kg parte del reposo desde lo alto de un tobogán de 5 m de altura. Despreciando la fricción y usando g = 10 m/s², ¿cuál será su velocidad en la base del tobogán?",
      datos: [
        { label: "Datos", math: "m = 30\\,\\text{kg},\\quad h = 5\\,\\text{m},\\quad v_0 = 0,\\quad g = 10\\,\\text{m/s}^2" },
      ],
      pasos: [
        { pre: "Energía potencial en lo alto: ", math: "E_p = mgh = 30\\times10\\times5 = 1500\\,\\text{J}" },
        { pre: "En la base (h = 0) toda la Ep se convierte en Ec: ", math: "E_c = 1500\\,\\text{J}" },
        { pre: "Despejando la velocidad final: ", math: "\\tfrac{1}{2}mv^2 = 1500 \\Rightarrow v^2 = \\frac{2\\times1500}{30} = 100 \\Rightarrow v = 10\\,\\text{m/s}" },
        { pre: "Resultado: el niño llega al fondo a ", math: "v = 10\\,\\text{m/s} \\approx 36\\,\\text{km/h}" },
        { pre: "Nota: la velocidad no depende de la masa del niño, solo de ", math: "h \\text{ y } g" },
      ],
    },

    // Ejercicio 1
    {
      id: 37,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Energía mecánica",
      pregunta: "Una pelota cae libremente desde una altura de 5 m. Justo antes de tocar el suelo, ¿cómo se distribuye su energía mecánica?",
      opciones: [
        "Toda la energía es potencial gravitacional, porque está en caída libre.",
        "Toda la energía es cinética, porque la altura respecto al suelo es prácticamente cero.",
        "La mitad es potencial y la mitad es cinética, sin importar la altura.",
      ],
      correcta: 1,
      explicacion: "Al llegar casi al suelo, h ≈ 0, por lo que Ep = mgh ≈ 0. Toda la energía mecánica se ha convertido en Ec = ½mv². Este es el principio de conservación de la energía mecánica.",
      pasos: [],
    },

    // Ejercicio 2
    {
      id: 38,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Energía mecánica",
      pregunta: "Una piedra de 2 kg se encuentra en reposo a 10 m de altura (g = 10 m/s²). ¿Cuánta energía potencial gravitacional tiene?",
      opciones: [
        "200 J",
        "100 J",
        "20 J",
      ],
      correcta: 0,
      explicacion: "Ep = m·g·h = 2 × 10 × 10 = 200 J. La opción B olvida multiplicar por h completo; la C confunde la fórmula con solo m·h.",
      pasos: [],
    },

    // Ejercicio 3
    {
      id: 39,
      tipo: "ejercicio",
      etiqueta: "Reactivo 3 — Energía mecánica",
      pregunta: "Un patinador de 60 kg viaja a 3 m/s. ¿Cuál es su energía cinética?",
      opciones: [
        "270 J",
        "180 J",
        "90 J",
      ],
      correcta: 0,
      explicacion: "Ec = ½mv² = ½ × 60 × 9 = 270 J. La opción B olvida el factor ½; la C usa solo m×v en lugar de ½mv².",
      pasos: [],
    },

    // Ejercicio 4
    {
      id: 40,
      tipo: "ejercicio",
      etiqueta: "Reactivo 4 — Energía mecánica",
      pregunta: "¿En qué momento de su caída libre tiene una pelota la máxima energía cinética?",
      opciones: [
        "Justo antes de tocar el suelo, cuando ha caído la máxima distancia.",
        "A la mitad de la caída.",
        "Al inicio de la caída, cuando la velocidad aumenta más rápido.",
      ],
      correcta: 0,
      explicacion: "La Ec es máxima cuando la velocidad es máxima, y la velocidad es máxima justo antes de impactar el suelo (h = 0 → Ep = 0 → toda la energía mecánica es cinética). Al inicio v = 0, por lo que Ec = 0.",
      pasos: [],
    },

    // Ejercicio 5
    {
      id: 41,
      tipo: "ejercicio",
      etiqueta: "Reactivo 5 — Energía mecánica",
      pregunta: "¿Cuál de las siguientes situaciones ilustra mejor la conservación de la energía mecánica?",
      opciones: [
        "Un péndulo oscilando en el vacío (sin fricción ni aire).",
        "Una pelota rodando sobre una alfombra rugosa que se detiene.",
        "Un automóvil acelerando con el motor encendido.",
      ],
      correcta: 0,
      explicacion: "La conservación de la energía mecánica (Ep + Ec = constante) aplica cuando no hay fuerzas disipativas. Un péndulo en el vacío convierte Ep ↔ Ec continuamente sin pérdidas. La alfombra (fricción) convierte Ec en calor; el auto agrega energía química del motor.",
      pasos: [],
    },

    // ══════════════════════════════════════════════════════════════════════════
    // TEMA 6 — ELECTRICIDAD
    // ══════════════════════════════════════════════════════════════════════════
    {
      id: 42,
      tipo: "regla_rica",
      etiqueta: "6 / 7 — Electricidad",
      titulo: "Electricidad: conductores, circuitos y aplicaciones",
      bloques: [
        {
          tipo: "texto",
          texto: "La electricidad es el flujo de cargas eléctricas (electrones). Los conductores (metales como cobre y plata) permiten ese flujo fácilmente; los aislantes (madera, plástico, vidrio) lo impiden. La ley de Ohm establece que V = I·R. Los circuitos en serie comparten la misma corriente; los circuitos en paralelo comparten el mismo voltaje.",
        },
        {
          tipo: "diagrama",
          id: "fisica-circuito",
          titulo: "Circuito en serie vs circuito en paralelo",
        },
        {
          tipo: "tabla",
          titulo: "Conductores, semiconductores e aislantes",
          columnas: ["Tipo", "Ejemplos", "Aplicación"],
          filas: [
            { tiempo: "Conductores",     correcto: "Cobre, aluminio, plata",   error: "Cables eléctricos, electrodos" },
            { tiempo: "Semiconductores", correcto: "Silicio, germanio",        error: "Transistores, chips, diodos" },
            { tiempo: "Aislantes",       correcto: "Plástico, madera, vidrio", error: "Recubrimiento de cables, enchufes" },
          ],
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "El agua PURA no conduce — el agua con sales SÍ conduce",
          correcto: "Es el agua con iones disueltos (sales, minerales) la que conduce electricidad. El agua destilada es prácticamente un aislante.",
          incorrecto: "Pensar que toda el agua conduce por igual: la conductividad depende de los iones presentes, no del agua en sí.",
        },
      ],
    },

    // Ejemplo 1 — Ley de Ohm
    {
      id: 43,
      tipo: "ejemplo",
      etiqueta: "Ejemplo 1 — Electricidad",
      titulo: "Ley de Ohm: calcular corriente y resistencia",
      enunciado: "Un foco está conectado a 120 V (voltaje de la red doméstica en México). Si tiene una resistencia de 240 Ω, ¿qué corriente pasa por él? Luego, ¿cuántos ohmios necesita una resistencia para que pase 0.5 A con 12 V?",
      datos: [
        { label: "Caso 1: foco doméstico", math: "V = 120\\,\\text{V},\\quad R = 240\\,\\Omega" },
        { label: "Caso 2: circuito de 12 V", math: "V = 12\\,\\text{V},\\quad I = 0.5\\,\\text{A}" },
      ],
      pasos: [
        { pre: "Ley de Ohm: ", math: "V = I \\cdot R \\quad \\Rightarrow \\quad I = \\frac{V}{R} \\quad \\Rightarrow \\quad R = \\frac{V}{I}" },
        { pre: "Caso 1 — corriente del foco: ", math: "I = \\frac{120}{240} = 0.5\\,\\text{A}" },
        { pre: "Caso 2 — resistencia necesaria: ", math: "R = \\frac{V}{I} = \\frac{12}{0.5} = 24\\,\\Omega" },
        { pre: "Truco del triángulo: cubre la variable que buscas; las otras dos te dan la operación ", math: "(V=IR,\\; I=V/R,\\; R=V/I)" },
      ],
    },

    // Ejemplo 2 — Serie vs paralelo: resistencia total
    {
      id: 44,
      tipo: "ejemplo",
      etiqueta: "Ejemplo 2 — Electricidad",
      titulo: "Resistencia total en serie y en paralelo",
      enunciado: "Tienes tres resistencias idénticas de 60 Ω. Calcula la resistencia total si se conectan en serie y si se conectan en paralelo.",
      datos: [
        { label: "Dato", math: "R_1 = R_2 = R_3 = 60\\,\\Omega" },
      ],
      pasos: [
        { pre: "En serie — se suman directamente: ", math: "R_{\\text{total}} = R_1 + R_2 + R_3 = 60 + 60 + 60 = 180\\,\\Omega" },
        { pre: "En paralelo — inversos: ", math: "\\frac{1}{R_{\\text{total}}} = \\frac{1}{60}+\\frac{1}{60}+\\frac{1}{60} = \\frac{3}{60} = \\frac{1}{20}" },
        { pre: "Por lo tanto: ", math: "R_{\\text{total (paralelo)}} = 20\\,\\Omega" },
        { pre: "Conclusión: la serie AUMENTA la resistencia total; el paralelo la ", math: "\\textbf{disminuye}\\text{ (facilita el paso de corriente)}" },
        { pre: "Dato práctico: los electrodomésticos del hogar se conectan en paralelo para funcionar al mismo voltaje e independientemente." },
      ],
    },

    // Ejercicio 1
    {
      id: 45,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Electricidad",
      pregunta: "En un circuito en serie con tres focos, si uno de los focos se funde, ¿qué ocurre con los otros dos?",
      opciones: [
        "Siguen encendidos, porque cada foco tiene su propio camino para la corriente.",
        "También se apagan, porque en serie la corriente sigue un único camino.",
        "Brillan con más intensidad, porque la corriente se reparte entre menos focos.",
      ],
      correcta: 1,
      explicacion: "En un circuito en serie todos los componentes forman un único camino para la corriente. Si uno falla (circuito abierto), la corriente no puede fluir y todos los demás se apagan. En paralelo, cada componente tiene su propio camino y el fallo de uno no afecta a los demás.",
      pasos: [],
    },

    // Ejercicio 2
    {
      id: 46,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Electricidad",
      pregunta: "En un circuito, el voltaje es 12 V y la resistencia es 4 Ω. ¿Cuál es la corriente?",
      opciones: [
        "3 A",
        "48 A",
        "0.33 A",
      ],
      correcta: 0,
      explicacion: "I = V/R = 12/4 = 3 A. La opción B multiplica en lugar de dividir (V×R); la C invierte numerador y denominador (R/V).",
      pasos: [],
    },

    // Ejercicio 3
    {
      id: 47,
      tipo: "ejercicio",
      etiqueta: "Reactivo 3 — Electricidad",
      pregunta: "¿Cuál de los siguientes materiales es aislante eléctrico?",
      opciones: [
        "Plástico.",
        "Cobre.",
        "Aluminio.",
      ],
      correcta: 0,
      explicacion: "El plástico es aislante porque no tiene electrones libres que conduzcan electricidad. El cobre y el aluminio son conductores metálicos con muchos electrones libres. Por eso los cables eléctricos tienen núcleo de cobre (conductor) y recubrimiento de plástico (aislante).",
      pasos: [],
    },

    // Ejercicio 4
    {
      id: 48,
      tipo: "ejercicio",
      etiqueta: "Reactivo 4 — Electricidad",
      pregunta: "En un circuito en paralelo con dos focos idénticos, si uno de ellos se funde, ¿qué ocurre con el otro?",
      opciones: [
        "Sigue encendido con el mismo brillo, porque tiene su propio camino para la corriente.",
        "También se apaga, porque comparten la misma corriente.",
        "Brilla con más intensidad porque toda la corriente pasa por él.",
      ],
      correcta: 0,
      explicacion: "En paralelo, cada componente tiene su propio ramal. Si uno falla, los demás conservan su circuito intacto y siguen funcionando con el mismo voltaje. La corriente total del circuito sí aumenta levemente, pero el voltaje en cada ramal es el mismo.",
      pasos: [],
    },

    // Ejercicio 5
    {
      id: 49,
      tipo: "ejercicio",
      etiqueta: "Reactivo 5 — Electricidad",
      pregunta: "¿Por qué el agua del mar conduce electricidad, pero el agua destilada prácticamente no?",
      opciones: [
        "El agua del mar contiene iones (sales disueltas) que transportan la carga eléctrica.",
        "El agua del mar es más densa y los electrones fluyen mejor en líquidos densos.",
        "El agua destilada está a menor temperatura y los electrones se mueven más despacio.",
      ],
      correcta: 0,
      explicacion: "La conductividad eléctrica en soluciones acuosas depende de los iones libres, no del agua misma. Las sales disueltas en el agua del mar (Na⁺, Cl⁻, etc.) permiten el flujo de carga. El agua pura (H₂O) tiene muy pocos iones, por lo que es casi aislante.",
      pasos: [],
    },

    // ══════════════════════════════════════════════════════════════════════════
    // TEMA 7 — TRANSFORMACIONES DE ENERGÍA
    // ══════════════════════════════════════════════════════════════════════════
    {
      id: 50,
      tipo: "regla_rica",
      etiqueta: "7 / 7 — Transformaciones de energía",
      titulo: "Transformaciones e intercambios de energía",
      bloques: [
        {
          tipo: "texto",
          texto: "La energía no se crea ni se destruye, solo se transforma (ley de conservación de la energía). En procesos físicos y químicos, la energía pasa de una forma a otra: química, térmica, cinética, potencial, eléctrica, luminosa, sonora. Ninguna transformación es 100% eficiente; parte siempre se convierte en calor.",
        },
        {
          tipo: "diagrama",
          id: "fisica-transformaciones",
          titulo: "Cadena de transformaciones de energía",
        },
        {
          tipo: "tabla",
          titulo: "Ejemplos de transformaciones cotidianas",
          columnas: ["Proceso", "Energía entrada", "Energía salida"],
          filas: [
            { tiempo: "Planta eléctrica",     correcto: "Química (combustible)", error: "Eléctrica (+ calor)" },
            { tiempo: "Foco incandescente",   correcto: "Eléctrica",             error: "Luminosa + térmica" },
            { tiempo: "Motor de automóvil",   correcto: "Química (gasolina)",    error: "Cinética + térmica" },
            { tiempo: "Panel solar",          correcto: "Luminosa (sol)",        error: "Eléctrica" },
            { tiempo: "Micrófono",            correcto: "Sonora (voz)",          error: "Eléctrica" },
          ],
        },
        {
          tipo: "trampa",
          letra: "A",
          titulo: "\"Perder energía\" = transformarla en calor, NO hacerla desaparecer",
          correcto: "Cuando un motor 'desperdicia' energía, la convierte en calor: el total (útil + calor) siempre se conserva.",
          incorrecto: "Creer que la energía desaparece: en realidad se transforma en formas menos útiles (especialmente calor), pero el total del sistema permanece igual.",
        },
      ],
    },

    // Ejemplo 1 — Eficiencia energética
    {
      id: 51,
      tipo: "ejemplo",
      etiqueta: "Ejemplo 1 — Transformaciones de energía",
      titulo: "Eficiencia: lámpara LED vs incandescente",
      enunciado: "Una lámpara incandescente de 60 W solo convierte el 5% de la energía eléctrica en luz. Una lámpara LED equivalente consume 9 W y convierte el 80% en luz. Compara la potencia luminosa y el calor generado por cada una.",
      datos: [
        { label: "Incandescente", math: "P_{\\text{total}} = 60\\,\\text{W},\\quad \\eta = 5\\%" },
        { label: "LED", math: "P_{\\text{total}} = 9\\,\\text{W},\\quad \\eta = 80\\%" },
      ],
      pasos: [
        { pre: "Potencia luminosa incandescente: ", math: "P_{\\text{luz}} = 0.05 \\times 60 = 3\\,\\text{W}" },
        { pre: "Calor generado incandescente: ", math: "P_{\\text{calor}} = 0.95 \\times 60 = 57\\,\\text{W}" },
        { pre: "Potencia luminosa LED: ", math: "P_{\\text{luz}} = 0.80 \\times 9 = 7.2\\,\\text{W}" },
        { pre: "Calor generado LED: ", math: "P_{\\text{calor}} = 0.20 \\times 9 = 1.8\\,\\text{W}" },
        { pre: "Conclusión: el LED produce más luz (7.2 W > 3 W) con mucho menos calor residual y menor consumo eléctrico." },
      ],
    },

    // Ejemplo 2 — Cadena de transformaciones: energías renovables
    {
      id: 52,
      tipo: "ejemplo",
      etiqueta: "Ejemplo 2 — Transformaciones de energía",
      titulo: "Cadena de transformaciones: de la luz solar al movimiento",
      enunciado: "Un automóvil eléctrico usa paneles solares para cargar su batería, que luego mueve un motor eléctrico. Identifica cada transformación de energía en la cadena y señala dónde se producen pérdidas.",
      datos: [
        { label: "Cadena completa", math: "\\text{Luminosa} \\xrightarrow{\\text{panel}} \\text{Eléctrica} \\xrightarrow{\\text{batería}} \\text{Química} \\xrightarrow{\\text{motor}} \\text{Cinética}" },
      ],
      pasos: [
        { pre: "Panel solar (luminosa → eléctrica): eficiencia ~20%; el 80% restante se convierte en calor que calienta el panel." },
        { pre: "Batería (eléctrica → química): eficiencia ~95%; pequeña pérdida en calor por resistencia interna." },
        { pre: "Motor eléctrico (química → eléctrica → cinética): eficiencia ~90%; pérdidas en fricción mecánica y calor." },
        { pre: "Eficiencia total aproximada: ", math: "\\eta_{\\text{total}} = 0.20 \\times 0.95 \\times 0.90 \\approx 17\\%" },
        { pre: "La energía no usada como movimiento se convierte en calor (2ª ley de la termodinámica): nunca se pierde, solo cambia de forma." },
      ],
    },

    // Ejercicio 1
    {
      id: 53,
      tipo: "ejercicio",
      etiqueta: "Reactivo 1 — Transformaciones de energía",
      pregunta: "Al encender una lámpara incandescente, la mayor parte de la energía eléctrica se transforma en luz. ¿Es correcta esta afirmación?",
      opciones: [
        "Sí, porque el propósito de la lámpara es producir luz.",
        "No, porque en realidad la mayor parte de la energía se convierte en calor (energía térmica).",
        "No, porque la energía eléctrica se almacena en el filamento de tungsteno.",
      ],
      correcta: 1,
      explicacion: "Las lámparas incandescentes solo convierten ~5-10% de la energía eléctrica en luz visible; el 90-95% restante se convierte en calor. Por eso han sido reemplazadas por focos LED, que son mucho más eficientes.",
      pasos: [],
    },

    // Ejercicio 2
    {
      id: 54,
      tipo: "ejercicio",
      etiqueta: "Reactivo 2 — Transformaciones de energía",
      pregunta: "Al cargar un teléfono celular, la energía eléctrica se convierte principalmente en:",
      opciones: [
        "Energía química, almacenada en la batería de litio.",
        "Energía mecánica, para mover los componentes internos.",
        "Energía luminosa, que sale por la pantalla.",
      ],
      correcta: 0,
      explicacion: "Cargar una batería es una reacción electroquímica: la energía eléctrica se convierte en energía química almacenada en los electrodos de litio. Al usar el teléfono, esa energía química se convierte nuevamente en eléctrica.",
      pasos: [],
    },

    // Ejercicio 3
    {
      id: 55,
      tipo: "ejercicio",
      etiqueta: "Reactivo 3 — Transformaciones de energía",
      pregunta: "Una planta termoeléctrica de carbón convierte energía química en eléctrica con una eficiencia del 35%. ¿Qué ocurre con el 65% restante?",
      opciones: [
        "Se pierde como calor al ambiente (agua de enfriamiento, gases de escape).",
        "La energía desaparece por la fricción de los generadores.",
        "Se almacena en los cables de transmisión para uso posterior.",
      ],
      correcta: 0,
      explicacion: "La ley de conservación de la energía garantiza que la energía no desaparece. En las plantas termoeléctricas, el 65% no convertido en electricidad se libera como calor: en el condensador, las chimeneas y la fricción de los generadores. Esta es la razón por la que toda planta necesita agua de enfriamiento.",
      pasos: [],
    },

    // Ejercicio 4
    {
      id: 56,
      tipo: "ejercicio",
      etiqueta: "Reactivo 4 — Transformaciones de energía",
      pregunta: "Un motor eléctrico transforma principalmente:",
      opciones: [
        "Energía eléctrica en energía cinética (mecánica).",
        "Energía cinética en energía eléctrica.",
        "Energía química en energía luminosa.",
      ],
      correcta: 0,
      explicacion: "El motor eléctrico convierte la energía de la corriente eléctrica en movimiento mecánico (cinético). El proceso inverso (movimiento → electricidad) lo realiza el generador o dinamo. La energía química → luminosa sería una reacción quimiluminiscente.",
      pasos: [],
    },

    // Ejercicio 5
    {
      id: 57,
      tipo: "ejercicio",
      etiqueta: "Reactivo 5 — Transformaciones de energía",
      pregunta: "¿Cuál de las siguientes fuentes de energía se considera renovable?",
      opciones: [
        "Energía solar (paneles fotovoltaicos).",
        "Energía del carbón (termoeléctrica).",
        "Energía nuclear de fisión (uranio).",
      ],
      correcta: 0,
      explicacion: "Las fuentes renovables se reponen continuamente en escala humana. La energía solar proviene directamente del Sol, que brillará por miles de millones de años más. El carbón y el petróleo son fósiles (no renovables). La fisión nuclear usa uranio, un recurso mineral finito.",
      pasos: [],
    },

    // ── RESUMEN ───────────────────────────────────────────────────────────────
    {
      id: 58,
      tipo: "resumen",
      titulo: "Resumen — Física",
      etiqueta: "Conceptos clave para el EXANI-I",
      puntos: [
        {
          titulo: "Estados de la materia",
          texto: "Sólido (forma y volumen fijos) · Líquido (volumen fijo) · Gas (ambos variables) · Plasma (gas ionizado). Cambios de estado = cambios físicos, NO químicos.",
        },
        {
          titulo: "Fuerzas y equilibrio",
          texto: "ΣF = 0 → equilibrio · f = μ·N (fricción) · Empuje = peso del fluido desplazado (Arquímedes) · Flota si densidad_obj < densidad_fluido.",
        },
        {
          math: "v = \\frac{d}{t} \\qquad a = \\frac{\\Delta v}{t} \\qquad v = v_0 + at",
          texto: "MRU: v constante (a = 0) · MRUA: a constante. Caída libre: a = g ≈ 10 m/s² hacia abajo.",
        },
        {
          titulo: "Sistema solar",
          texto: "8 planetas: 4 terrestres + 4 jovianos · F_grav ∝ 1/r² · El peso cambia de planeta a planeta; la masa no.",
        },
        {
          math: "E_p = mgh \\qquad E_c = \\tfrac{1}{2}mv^2 \\qquad E_m = E_p + E_c = \\text{cte}",
          texto: "Sin fricción, la energía mecánica se conserva. Al caer: Ep → Ec; al subir: Ec → Ep.",
        },
        {
          titulo: "Electricidad",
          texto: "V = I·R (Ley de Ohm) · Serie: misma I, se suman V y R · Paralelo: mismo V, se suman I; R_total disminuye.",
        },
        {
          titulo: "Conservación de la energía",
          texto: "La energía no se crea ni se destruye, solo se transforma. Las pérdidas son conversiones a calor (no desaparición).",
        },
      ],
    },
  ],
};
