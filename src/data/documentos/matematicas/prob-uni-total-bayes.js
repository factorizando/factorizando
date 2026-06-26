// Subsección 2.6 — Probabilidad, nivel universidad.
// Sección: Espacios de probabilidad · Fórmulas de probabilidad total y de Bayes.
export const DOCUMENTO = {
  id: "prob-uni-total-bayes",
  titulo: "Fórmulas de probabilidad total y de Bayes",
  materia: "Matemáticas",
  tema: "Probabilidad · Espacios de probabilidad",
  nivel: "universidad",
  examenes: ["UNAM"],
  contenido: [
    {
      tipo: "parrafo",
      cuerpo: [
        { p: "A menudo conocemos la probabilidad de un evento $A$ *condicionada* a cada una de varias situaciones excluyentes, y queremos la probabilidad global de $A$ —o, al revés, queremos invertir el condicionamiento. Para ello dividimos $\\Omega$ en una *partición*." },
      ],
    },
    {
      tipo: "definicion",
      etiqueta: "def:particion",
      titulo: "Partición",
      cuerpo: [
        { p: "Una colección de eventos $B_1,\\dots,B_n$ es una *partición* de $\\Omega$ si son ajenos dos a dos, su unión es $\\Omega$ y cada uno tiene probabilidad positiva:" },
        { math: "B_i\\cap B_j=\\varnothing\\ (i\\neq j),\\qquad \\bigcup_{i=1}^{n}B_i=\\Omega,\\qquad P(B_i)>0." },
      ],
    },
    {
      tipo: "teorema",
      etiqueta: "thm:total",
      titulo: "Teorema de la probabilidad total",
      cuerpo: [
        { p: "Si $B_1,\\dots,B_n$ es una partición de $\\Omega$, entonces para cualquier evento $A$:" },
        { math: "P(A)=\\sum_{i=1}^{n} P(A\\mid B_i)\\,P(B_i)." },
      ],
    },
    {
      tipo: "demostracion",
      metodo: "partición de A",
      pasos: [
        { texto: "Como los $B_i$ cubren $\\Omega$, el evento $A$ se descompone en la unión *ajena* $A=\\bigcup_{i=1}^{n}(A\\cap B_i)$. Por aditividad finita:", math: "P(A)=\\sum_{i=1}^{n}P(A\\cap B_i)." },
        { texto: "Por la regla del producto, $P(A\\cap B_i)=P(A\\mid B_i)\\,P(B_i)$, lo que da la fórmula." },
      ],
    },
    {
      tipo: "teorema",
      etiqueta: "thm:bayes",
      titulo: "Teorema de Bayes",
      cuerpo: [
        { p: "Con la misma partición y $P(A)>0$, para cada $j$:" },
        { math: "P(B_j\\mid A)=\\dfrac{P(A\\mid B_j)\\,P(B_j)}{\\displaystyle\\sum_{i=1}^{n} P(A\\mid B_i)\\,P(B_i)}." },
      ],
    },
    {
      tipo: "demostracion",
      metodo: "definición de condicional + probabilidad total",
      pasos: [
        { texto: "Por definición de probabilidad condicional y la regla del producto:", math: "P(B_j\\mid A)=\\dfrac{P(A\\cap B_j)}{P(A)}=\\dfrac{P(A\\mid B_j)\\,P(B_j)}{P(A)}." },
        { texto: "Basta sustituir $P(A)$ por la fórmula de la probabilidad total para obtener el resultado." },
      ],
    },
    {
      tipo: "ejemplo",
      etiqueta: "ej:prueba",
      titulo: "Una prueba diagnóstica",
      cuerpo: [
        { p: "Una enfermedad afecta al $1\\%$ de la población: $P(D)=0.01$. Una prueba detecta correctamente al enfermo el $99\\%$ de las veces, $P(+\\mid D)=0.99$, pero da un falso positivo en el $5\\%$ de los sanos, $P(+\\mid D^{c})=0.05$. Si una persona da positivo, ¿cuál es la probabilidad de que esté enferma?" },
        { p: "Por probabilidad total, $P(+)=0.99\\cdot 0.01+0.05\\cdot 0.99=0.0594$. Por Bayes:" },
        { math: "P(D\\mid +)=\\dfrac{0.99\\cdot 0.01}{0.0594}\\approx 0.167." },
        { p: "Aunque la prueba parece muy precisa, ¡solo un $16.7\\%$ de los positivos están realmente enfermos! La baja prevalencia domina el resultado." },
      ],
    },
    {
      tipo: "ejercicio",
      etiqueta: "ej:urnas",
      titulo: "Dos urnas",
      cuerpo: [
        { p: "La urna I contiene $3$ bolas rojas y $2$ azules; la urna II, $1$ roja y $4$ azules. Se elige una urna al azar (con igual probabilidad) y se extrae una bola. (a) ¿Cuál es la probabilidad de que sea roja? (b) Si salió roja, ¿cuál es la probabilidad de que provenga de la urna I?" },
      ],
      solucion: [
        { p: "Sea $R$ = “roja” y $\\{I, II\\}$ la partición por urna, con $P(I)=P(II)=1/2$, $P(R\\mid I)=3/5$ y $P(R\\mid II)=1/5$." },
        { p: "(a) Por probabilidad total:" },
        { math: "P(R)=\\dfrac{3}{5}\\cdot\\dfrac{1}{2}+\\dfrac{1}{5}\\cdot\\dfrac{1}{2}=\\dfrac{3}{10}+\\dfrac{1}{10}=\\dfrac{2}{5}." },
        { p: "(b) Por Bayes:" },
        { math: "P(I\\mid R)=\\dfrac{P(R\\mid I)\\,P(I)}{P(R)}=\\dfrac{3/10}{2/5}=\\dfrac{3}{4}." },
      ],
    },
  ],
};
