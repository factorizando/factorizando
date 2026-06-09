// Presentación: Física — Pensamiento Científico (EXANI-I)
// Cubre los temas de física de las 3 subáreas del área de Pensamiento Científico.

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

    // ── ESTADOS DE AGREGACIÓN ──────────────────────────────────────────────────
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

    {
      id: 2,
      tipo: "ejercicio",
      etiqueta: "Reactivo — Estados de la materia",
      pregunta: "Una sustancia ocupa siempre el mismo volumen, pero adopta la forma del recipiente que la contiene. ¿En qué estado de la materia se encuentra?",
      opciones: [
        "Estado sólido, porque mantiene su volumen.",
        "Estado líquido, porque tiene volumen fijo pero forma variable.",
        "Estado gaseoso, porque cambia tanto de forma como de volumen.",
      ],
      correcta: 1,
      explicacion: "El estado líquido se caracteriza por volumen definido (las partículas están juntas pero pueden moverse) y forma variable (se adapta al recipiente). En el sólido, tanto la forma como el volumen son fijos. En el gas, ambos cambian.",
      pasos: [],
    },

    // ── EQUILIBRIO, FRICCIÓN Y FLOTACIÓN ──────────────────────────────────────
    {
      id: 3,
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

    {
      id: 4,
      tipo: "ejercicio",
      etiqueta: "Reactivo — Equilibrio y flotación",
      pregunta: "Se coloca un cubo de madera en un recipiente con agua y el cubo flota. ¿Qué relación hay entre el peso del cubo y el empuje que recibe?",
      opciones: [
        "El empuje es mayor que el peso del cubo, por eso asciende hacia la superficie.",
        "El empuje es igual al peso del cubo, por eso permanece en equilibrio.",
        "El peso del cubo es mayor que el empuje, y por eso parte del cubo queda bajo el agua.",
      ],
      correcta: 1,
      explicacion: "Cuando un objeto flota en equilibrio, la fuerza de empuje (hacia arriba) es exactamente igual al peso del objeto (hacia abajo). Eso es lo que establece el principio de Arquímedes: el empuje equivale al peso del fluido desplazado por el objeto.",
      pasos: [],
    },

    // ── VELOCIDAD Y ACELERACIÓN ───────────────────────────────────────────────
    {
      id: 5,
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
          incorrecto: "Confundir 'velocidad constante' con 'rapidez constante': en movimiento circular uniforme la rapidez es constante, pero la velocidad (dirección) cambia continuamente.",
        },
      ],
    },

    {
      id: 6,
      tipo: "ejercicio",
      etiqueta: "Reactivo — Velocidad (ejemplo del examen CENEVAL)",
      pregunta: "Identifica el enunciado que involucra el concepto de velocidad.",
      opciones: [
        "Una persona camina cierta distancia a su casa en un determinado tiempo.",
        "Un automóvil está en reposo y avanza con el cambio de color del semáforo.",
        "Un ciclista varía el ritmo del pedaleo al subir la pendiente en una montaña.",
      ],
      correcta: 0,
      explicacion: "La velocidad equivale a la razón entre la distancia recorrida y el tiempo que tarda en transitarla (v = d/t). Conocer la distancia y el tiempo que camina la persona sirve para calcular la velocidad. Las opciones B y C describen aceleración (cambio de velocidad), no velocidad constante.",
      pasos: [],
    },

    // ── SISTEMA SOLAR Y GRAVITACIÓN ───────────────────────────────────────────
    {
      id: 7,
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
          incorrecto: "Mencionar 9 planetas incluyendo a Plutón es un error frecuente, ya que desde 2006 la definición oficial excluye a Plutón del conjunto de planetas.",
        },
      ],
    },

    {
      id: 8,
      tipo: "ejercicio",
      etiqueta: "Reactivo — Gravitación",
      pregunta: "Un astronauta pesa 780 N en la superficie de la Tierra. En la Luna, donde la gravedad es aproximadamente 1/6 de la terrestre, ¿cuánto pesará?",
      opciones: [
        "780 N, porque la masa del astronauta no cambia.",
        "130 N, porque el peso depende de la fuerza gravitacional local.",
        "0 N, porque en el espacio no existe gravedad.",
      ],
      correcta: 1,
      explicacion: "El peso (W = mg) cambia porque depende de la aceleración gravitacional g del lugar. La masa del astronauta es constante, pero su peso en la Luna es W_luna = 780 / 6 = 130 N. La masa no varía, el peso sí depende de la gravedad local.",
      pasos: [],
    },

    // ── ENERGÍA POTENCIAL Y CINÉTICA ──────────────────────────────────────────
    {
      id: 9,
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

    {
      id: 10,
      tipo: "ejercicio",
      etiqueta: "Reactivo — Energía mecánica",
      pregunta: "Una pelota cae libremente desde una altura de 5 m. Justo antes de tocar el suelo, ¿cómo se distribuye su energía mecánica?",
      opciones: [
        "Toda la energía es potencial gravitacional, porque está en caída libre.",
        "Toda la energía es cinética, porque la altura respecto al suelo es prácticamente cero.",
        "La mitad es potencial y la mitad es cinética, sin importar la altura.",
      ],
      correcta: 1,
      explicacion: "Al llegar casi al suelo, h ≈ 0, por lo que Ep = mgh ≈ 0. Toda la energía mecánica se ha convertido en energía cinética (Ec = ½mv²). Este es el principio de conservación de la energía mecánica: la energía no desaparece, solo cambia de forma.",
      pasos: [],
    },

    // ── ELECTRICIDAD ──────────────────────────────────────────────────────────
    {
      id: 11,
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
            { tiempo: "Conductores",     correcto: "Cobre, aluminio, plata",  error: "Cables eléctricos, electrodos" },
            { tiempo: "Semiconductores", correcto: "Silicio, germanio",       error: "Transistores, chips, diodos" },
            { tiempo: "Aislantes",       correcto: "Plástico, madera, vidrio",error: "Recubrimiento de cables, enchufes" },
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

    {
      id: 12,
      tipo: "ejercicio",
      etiqueta: "Reactivo — Circuito en serie",
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

    // ── TRANSFORMACIONES DE ENERGÍA ───────────────────────────────────────────
    {
      id: 13,
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

    {
      id: 14,
      tipo: "ejercicio",
      etiqueta: "Reactivo — Transformaciones de energía",
      pregunta: "Al encender una lámpara incandescente, la mayor parte de la energía eléctrica se transforma en luz. ¿Es correcta esta afirmación?",
      opciones: [
        "Sí, porque el propósito de la lámpara es producir luz.",
        "No, porque en realidad la mayor parte de la energía se convierte en calor (energía térmica).",
        "No, porque la energía eléctrica se almacena en el filamento de tungsteno.",
      ],
      correcta: 1,
      explicacion: "Las lámparas incandescentes son muy ineficientes: solo convierten alrededor del 5–10% de la energía eléctrica en luz visible; el 90–95% restante se convierte en calor. Por eso han sido reemplazadas por focos LED, que son mucho más eficientes.",
      pasos: [],
    },

    // ── RESUMEN ───────────────────────────────────────────────────────────────
    {
      id: 15,
      tipo: "resumen",
      titulo: "Resumen — Física",
      etiqueta: "Conceptos clave para el EXANI-I",
      puntos: [
        {
          titulo: "Estados de la materia",
          texto: "Sólido (forma y volumen fijos) · Líquido (volumen fijo) · Gas (ambos variables) · Plasma (gas ionizado)",
        },
        {
          titulo: "Fuerzas y equilibrio",
          texto: "ΣF = 0 → equilibrio · Fricción se opone al movimiento · Empuje = peso del fluido desplazado (Arquímedes)",
        },
        {
          math: "v = d/t \\quad a = \\Delta v / t",
          texto: "MRU: velocidad constante (a = 0) · MRUA: aceleración constante, gráfica v-t diagonal",
        },
        {
          titulo: "Sistema solar",
          texto: "8 planetas: 4 terrestres (rocosos) + 4 jovianos (gaseosos/helados) · La gravedad mantiene las órbitas",
        },
        {
          math: "E_p = mgh \\quad E_c = \\tfrac{1}{2}mv^2",
          texto: "Energía mecánica: Ep + Ec = constante (sin fricción) · Al caer, Ep → Ec; al subir, Ec → Ep",
        },
        {
          titulo: "Electricidad",
          texto: "V = I·R (Ley de Ohm) · Serie: misma I, V se suma · Paralelo: mismo V, I se suma",
        },
        {
          titulo: "Conservación de la energía",
          texto: "La energía no se crea ni se destruye, solo se transforma. Transformaciones nunca son 100% eficientes.",
        },
      ],
    },
  ],
};
