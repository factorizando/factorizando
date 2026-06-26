// Subsección 2.1 — Probabilidad, nivel universidad.
// Sección: Espacios de probabilidad · Espacio muestral, eventos y su interpretación.
// Nivel basado en Rincón, "Curso intermedio de probabilidad" (UNAM): formal,
// con la terna (Ω,𝓕,P) mencionada pero sin énfasis en σ-álgebras (temario 1.x).
export const DOCUMENTO = {
  id: "prob-uni-espacio-muestral-eventos",
  titulo: "Espacio muestral, eventos y su interpretación",
  materia: "Matemáticas",
  tema: "Probabilidad · Espacios de probabilidad",
  nivel: "universidad",
  examenes: ["UNAM"],
  contenido: [
    {
      tipo: "parrafo",
      cuerpo: [
        { p: "La teoría de la probabilidad modela matemáticamente los *experimentos aleatorios*. El primer paso es describir, con el lenguaje de conjuntos de la sección anterior, *qué* puede ocurrir: el espacio muestral y los eventos." },
      ],
    },
    {
      tipo: "definicion",
      etiqueta: "def:experimento",
      titulo: "Experimento aleatorio",
      cuerpo: [
        { p: "Un *experimento aleatorio* es aquel que, repetido bajo las mismas condiciones iniciales, no siempre produce el mismo resultado: aunque se conozca el conjunto de resultados posibles, no se puede predecir con certeza cuál ocurrirá en una realización particular." },
        { p: "Lanzar un dado, lanzar una moneda o medir el tiempo de vida de un componente son experimentos aleatorios." },
      ],
    },
    {
      tipo: "definicion",
      etiqueta: "def:espacio-muestral",
      titulo: "Espacio muestral",
      cuerpo: [
        { p: "El *espacio muestral* de un experimento aleatorio es el conjunto $\\Omega$ de *todos* sus resultados posibles. A cada resultado individual $\\omega\\in\\Omega$ se le llama *punto muestral*." },
        { p: "Matemáticamente, $\\Omega$ es simplemente un conjunto; no es imprescindible darle una interpretación, aunque casi siempre la tiene." },
      ],
    },
    {
      tipo: "ejemplo",
      etiqueta: "ej:espacios",
      titulo: "Distintos espacios muestrales",
      cuerpo: [
        { lista: [
          "Lanzar un dado: $\\Omega=\\{1,2,3,4,5,6\\}$ (finito).",
          "Lanzar una moneda: $\\Omega=\\{a,\\,s\\}$, con $a$ = águila y $s$ = sol (finito).",
          "Número de llamadas a un conmutador en un día: $\\Omega=\\{0,1,2,\\dots\\}=\\mathbb{N}$ (infinito numerable).",
          "Tiempo de espera de un cliente: $\\Omega=[0,\\infty)$ (infinito no numerable).",
        ] },
      ],
    },
    {
      tipo: "definicion",
      etiqueta: "def:evento",
      titulo: "Evento",
      cuerpo: [
        { p: "Un *evento* (o *suceso*) es un subconjunto del espacio muestral, $A\\subseteq\\Omega$. Decimos que el evento $A$ *ocurre* si el resultado $\\omega$ del experimento cumple $\\omega\\in A$." },
        { p: "Un evento es *simple* (o *elemental*) si consta de un solo punto muestral, y *compuesto* si consta de dos o más." },
      ],
    },
    {
      tipo: "notacion",
      etiqueta: "not:especiales",
      titulo: "Evento seguro y evento imposible",
      cuerpo: [
        { p: "Hay dos eventos extremos: el propio $\\Omega$ es el *evento seguro* (siempre ocurre, pues $\\omega\\in\\Omega$ por definición), y el conjunto vacío $\\varnothing$ es el *evento imposible* (nunca ocurre)." },
      ],
    },
    {
      tipo: "observacion",
      etiqueta: "obs:terna",
      titulo: "Sobre el formalismo: la terna (Ω, 𝓕, P)",
      cuerpo: [
        { p: "En un tratamiento completamente formal, los eventos no son *todos* los subconjuntos de $\\Omega$, sino los de una colección $\\mathcal{F}$ llamada *$\\sigma$-álgebra* (cerrada bajo complementos y uniones numerables). El modelo completo es la *terna* $(\\Omega,\\mathcal{F},P)$, donde $P$ es la *medida de probabilidad*." },
        { p: "En este curso no haremos énfasis en las $\\sigma$-álgebras: cuando $\\Omega$ es finito o numerable se toma como eventos a *todos* los subconjuntos de $\\Omega$, y basta pensar un evento como un subconjunto. La medida $P$ se estudia en las siguientes lecciones." },
      ],
    },
    {
      tipo: "parrafo",
      cuerpo: [
        { p: "Como los eventos son conjuntos, las operaciones de la sección anterior se traducen en afirmaciones sobre su ocurrencia:" },
        { figura: "venn-dos", caption: "Dos eventos $A$ y $B$ dentro del espacio muestral $\\Omega$." },
        { lista: [
          "$A\\cup B$: ocurre $A$ *o* ocurre $B$ (al menos uno de los dos).",
          "$A\\cap B$: ocurren $A$ *y* $B$ a la vez.",
          "$A^{c}$: *no* ocurre $A$.",
          "$A\\setminus B$: ocurre $A$ pero no $B$.",
          "$A\\subseteq B$: si ocurre $A$, entonces necesariamente ocurre $B$.",
          "$A\\cap B=\\varnothing$: $A$ y $B$ son *mutuamente excluyentes* (no pueden ocurrir juntos).",
        ] },
      ],
    },
    {
      tipo: "ejemplo",
      etiqueta: "ej:dado",
      titulo: "Eventos al lanzar un dado",
      cuerpo: [
        { p: "Sea $\\Omega=\\{1,2,3,4,5,6\\}$ y consideremos los eventos $A=\\{2,4,6\\}$ (“sale par”) y $B=\\{4,5,6\\}$ (“sale mayor que $3$”). Entonces:" },
        { lista: [
          "$A\\cup B=\\{2,4,5,6\\}$: “sale par o mayor que $3$”.",
          "$A\\cap B=\\{4,6\\}$: “sale par y mayor que $3$”.",
          "$A^{c}=\\{1,3,5\\}$: “no sale par”, es decir, sale impar.",
          "$A$ e $\\{1,3,5\\}$ son mutuamente excluyentes: $A\\cap\\{1,3,5\\}=\\varnothing$.",
        ] },
      ],
    },
    {
      tipo: "ejercicio",
      etiqueta: "ej:moneda",
      titulo: "Una moneda dos veces",
      cuerpo: [
        { p: "Se lanza una moneda dos veces (con $a$ = águila, $s$ = sol). Describe el espacio muestral $\\Omega$ y el evento $A=$ “se obtiene al menos un águila”. ¿Cuántos puntos muestrales tiene $A$?" },
      ],
      solucion: [
        { p: "Registramos el resultado de cada lanzamiento en orden, de modo que" },
        { math: "\\Omega=\\{\\,aa,\\ as,\\ sa,\\ ss\\,\\}," },
        { p: "con $4$ puntos muestrales. El evento “al menos un águila” es" },
        { math: "A=\\{\\,aa,\\ as,\\ sa\\,\\}," },
        { p: "que tiene $3$ puntos muestrales. Su complemento $A^{c}=\\{ss\\}$ es el evento “ningún águila”." },
      ],
    },
  ],
};
