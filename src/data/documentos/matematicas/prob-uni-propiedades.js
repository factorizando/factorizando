// Subsección 2.4 — Probabilidad, nivel universidad.
// Sección: Espacios de probabilidad · Propiedades de la probabilidad.
// Nivel basado en Rincón, "Curso intermedio de probabilidad" (UNAM), §1.3.
export const DOCUMENTO = {
  id: "prob-uni-propiedades",
  titulo: "Propiedades de la probabilidad",
  materia: "Matemáticas",
  tema: "Probabilidad · Espacios de probabilidad",
  nivel: "universidad",
  examenes: ["UNAM"],
  contenido: [
    {
      tipo: "parrafo",
      cuerpo: [
        { p: "Los tres axiomas de Kolmogórov bastan para deducir todas las reglas con las que se opera en la práctica. A lo largo de esta lección, $P$ es una medida de probabilidad sobre un espacio muestral $\\Omega$, y $A,B$ son eventos." },
      ],
    },

    {
      tipo: "teorema",
      etiqueta: "thm:propiedades",
      titulo: "Propiedades de la probabilidad",
      cuerpo: [
        { lista: [
          "*Probabilidad del vacío:* $P(\\varnothing)=0$.",
          "*Aditividad finita:* si $A_1,\\dots,A_n$ son ajenos dos a dos, entonces $\\displaystyle P\\!\\left(\\bigcup_{k=1}^{n}A_k\\right)=\\sum_{k=1}^{n}P(A_k)$.",
          "*Complemento:* $P(A^{c})=1-P(A)$.",
          "*Diferencia:* si $A\\subseteq B$, entonces $P(B\\setminus A)=P(B)-P(A)$.",
          "*Monotonía:* si $A\\subseteq B$, entonces $P(A)\\le P(B)$.",
          "*Acotación:* $0\\le P(A)\\le 1$.",
          "*Inclusión–exclusión:* $P(A\\cup B)=P(A)+P(B)-P(A\\cap B)$.",
          "*Subaditividad:* $P(A\\cup B)\\le P(A)+P(B)$.",
        ] },
      ],
    },
    {
      tipo: "demostracion",
      metodo: "complemento, monotonía e inclusión–exclusión",
      pasos: [
        { texto: "*Complemento.* Como $\\Omega=A\\cup A^{c}$ es una unión de eventos ajenos, por aditividad y normalización:", math: "1=P(\\Omega)=P(A)+P(A^{c}) \\;\\Longrightarrow\\; P(A^{c})=1-P(A)." },
        { texto: "*Diferencia y monotonía.* Si $A\\subseteq B$, entonces $B=A\\cup(B\\setminus A)$ es unión ajena, de donde $P(B)=P(A)+P(B\\setminus A)$. Así $P(B\\setminus A)=P(B)-P(A)$, y como toda probabilidad es $\\ge 0$:", math: "P(B)-P(A)=P(B\\setminus A)\\ge 0 \\;\\Longrightarrow\\; P(A)\\le P(B)." },
        { texto: "*Inclusión–exclusión.* Escribimos dos uniones ajenas: $A\\cup B = A\\cup(B\\setminus A)$ y $B=(A\\cap B)\\cup(B\\setminus A)$. De la segunda, $P(B\\setminus A)=P(B)-P(A\\cap B)$. Sustituyendo en la primera:", math: "P(A\\cup B)=P(A)+P(B\\setminus A)=P(A)+P(B)-P(A\\cap B)." },
      ],
    },

    {
      tipo: "proposicion",
      etiqueta: "prop:boole",
      titulo: "Desigualdades de Boole",
      cuerpo: [
        { p: "Para cualquier sucesión de eventos $A_1,A_2,\\dots$ se cumple" },
        { math: "P\\!\\left(\\bigcup_{n=1}^{\\infty}A_n\\right)\\le \\sum_{n=1}^{\\infty}P(A_n), \\qquad P\\!\\left(\\bigcap_{n=1}^{\\infty}A_n\\right)\\ge 1-\\sum_{n=1}^{\\infty}P(A_n^{c})." },
        { p: "La primera generaliza la subaditividad a uniones numerables; la segunda se obtiene de la primera tomando complementos." },
      ],
    },

    {
      tipo: "ejemplo",
      etiqueta: "ej:inclusion-exclusion",
      titulo: "Unión de dos eventos en un dado",
      cuerpo: [
        { p: "Con $\\Omega=\\{1,\\dots,6\\}$ equiprobable, sean $A=\\{2,4,6\\}$ (par) y $B=\\{4,5,6\\}$ (mayor que $3$). Entonces $P(A)=\\dfrac{1}{2}$, $P(B)=\\dfrac{1}{2}$ y $P(A\\cap B)=\\dfrac{2}{6}=\\dfrac{1}{3}$, así que" },
        { math: "P(A\\cup B)=\\dfrac{1}{2}+\\dfrac{1}{2}-\\dfrac{1}{3}=\\dfrac{2}{3}," },
        { p: "que coincide con $|\\{2,4,5,6\\}|/6=4/6=2/3$." },
      ],
    },

    {
      tipo: "ejercicio",
      etiqueta: "ej:propiedades",
      titulo: "Usar las propiedades",
      cuerpo: [
        { p: "Sean $A,B$ eventos con $P(A)=0.6$, $P(B)=0.5$ y $P(A\\cup B)=0.8$. Calcula $P(A\\cap B)$ y $P(A^{c}\\cap B^{c})$." },
      ],
      solucion: [
        { p: "De la inclusión–exclusión, despejando la intersección:" },
        { math: "P(A\\cap B)=P(A)+P(B)-P(A\\cup B)=0.6+0.5-0.8=0.3." },
        { p: "Por la ley de De Morgan, $A^{c}\\cap B^{c}=(A\\cup B)^{c}$, y por la regla del complemento:" },
        { math: "P(A^{c}\\cap B^{c})=P\\big((A\\cup B)^{c}\\big)=1-P(A\\cup B)=1-0.8=0.2." },
      ],
    },
  ],
};
