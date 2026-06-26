// Subsección 2.7 — Probabilidad, nivel universidad.
// Sección: Espacios de probabilidad · Teorema de continuidad de la probabilidad.
// Nivel basado en Rincón, "Curso intermedio de probabilidad" (UNAM), §1.3.
export const DOCUMENTO = {
  id: "prob-uni-continuidad",
  titulo: "Teorema de continuidad de la probabilidad",
  materia: "Matemáticas",
  tema: "Probabilidad · Espacios de probabilidad",
  nivel: "universidad",
  examenes: ["UNAM"],
  contenido: [
    {
      tipo: "parrafo",
      cuerpo: [
        { p: "La $\\sigma$-aditividad tiene una consecuencia muy útil: la probabilidad se comporta *continuamente* frente a sucesiones de eventos que crecen o decrecen hacia un límite. Primero precisamos qué significa ese límite." },
      ],
    },
    {
      tipo: "definicion",
      etiqueta: "def:sucesiones-monotonas",
      titulo: "Sucesiones monótonas de eventos",
      cuerpo: [
        { p: "Una sucesión de eventos $A_1,A_2,\\dots$ es *creciente* si $A_1\\subseteq A_2\\subseteq\\cdots$, y su límite es la unión $\\displaystyle\\bigcup_{n=1}^{\\infty}A_n$. Es *decreciente* si $A_1\\supseteq A_2\\supseteq\\cdots$, y su límite es la intersección $\\displaystyle\\bigcap_{n=1}^{\\infty}A_n$. En ambos casos escribimos $A=\\lim_{n\\to\\infty}A_n$." },
      ],
    },
    {
      tipo: "teorema",
      etiqueta: "thm:continuidad",
      titulo: "Continuidad de la probabilidad",
      cuerpo: [
        { p: "Si $A_n$ es una sucesión monótona de eventos (creciente o decreciente) con límite $A$, entonces" },
        { math: "P\\!\\left(\\lim_{n\\to\\infty}A_n\\right)=\\lim_{n\\to\\infty}P(A_n)." },
      ],
    },
    {
      tipo: "demostracion",
      metodo: "caso creciente; el decreciente, por complementos",
      pasos: [
        { texto: "Supongamos $A_n$ creciente. Definimos los “anillos” ajenos $B_1=A_1$ y $B_n=A_n\\setminus A_{n-1}$ para $n\\ge 2$. Son ajenos dos a dos y cumplen $A_n=\\bigcup_{k=1}^{n}B_k$ y $A=\\bigcup_{k=1}^{\\infty}B_k$." },
        { texto: "Por $\\sigma$-aditividad y la definición de suma como límite de sumas parciales:", math: "P(A)=\\sum_{k=1}^{\\infty}P(B_k)=\\lim_{n\\to\\infty}\\sum_{k=1}^{n}P(B_k)=\\lim_{n\\to\\infty}P(A_n)." },
        { texto: "Si $A_n$ es decreciente, entonces $A_n^{c}$ es creciente; aplicando lo anterior a los complementos y usando $P(A^{c})=1-P(A)$ se obtiene la igualdad para el caso decreciente." },
      ],
    },
    {
      tipo: "ejemplo",
      etiqueta: "ej:dado-infinito",
      titulo: "Siempre par",
      cuerpo: [
        { p: "Se lanza un dado equilibrado una infinidad de veces. Sea $A_n$ el evento “sale par en cada uno de los primeros $n$ lanzamientos”. La sucesión es decreciente ($A_{n+1}\\subseteq A_n$) y, por independencia, $P(A_n)=(1/2)^{n}$. Su límite es el evento “sale par siempre”, y por continuidad:" },
        { math: "P\\!\\left(\\bigcap_{n=1}^{\\infty}A_n\\right)=\\lim_{n\\to\\infty}\\left(\\dfrac{1}{2}\\right)^{n}=0." },
        { p: "Es decir, la probabilidad de obtener par en *todos* los lanzamientos es cero; con probabilidad $1$, eventualmente aparece un número impar." },
      ],
    },
    {
      tipo: "ejercicio",
      etiqueta: "ej:continuidad",
      titulo: "Un punto al azar en un intervalo",
      cuerpo: [
        { p: "Se elige un punto al azar en $[0,1]$ con la probabilidad geométrica (longitud). Sea $A_n=[0,\\dfrac{1}{n}]$. Describe $\\lim_{n\\to\\infty}A_n$ y calcula su probabilidad usando continuidad." },
      ],
      solucion: [
        { p: "La sucesión es decreciente y $\\displaystyle\\bigcap_{n=1}^{\\infty}\\left[0,\\dfrac{1}{n}\\right]=\\{0\\}$. Como $P(A_n)=\\dfrac{1}{n}$, por continuidad" },
        { math: "P(\\{0\\})=\\lim_{n\\to\\infty}\\dfrac{1}{n}=0." },
        { p: "En un modelo continuo, cada punto individual tiene probabilidad cero." },
      ],
    },
  ],
};
