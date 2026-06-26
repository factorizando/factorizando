// Subsección 2.5 — Probabilidad, nivel universidad.
// Sección: Espacios de probabilidad · Probabilidad condicional e independencia.
// Nivel basado en Rincón, "Curso intermedio de probabilidad" (UNAM), §1.4.
export const DOCUMENTO = {
  id: "prob-uni-condicional-independencia",
  titulo: "Probabilidad condicional e independencia",
  materia: "Matemáticas",
  tema: "Probabilidad · Espacios de probabilidad",
  nivel: "universidad",
  examenes: ["UNAM"],
  contenido: [
    {
      tipo: "parrafo",
      cuerpo: [
        { p: "Con frecuencia disponemos de información parcial: sabemos que cierto evento $B$ ocurrió y queremos *actualizar* la probabilidad de otro evento $A$ a la luz de ese dato. Esa es la idea de la *probabilidad condicional*, y de ella surge el concepto de *independencia*." },
      ],
    },

    {
      tipo: "definicion",
      etiqueta: "def:condicional",
      titulo: "Probabilidad condicional",
      cuerpo: [
        { p: "Sean $A$ y $B$ eventos con $P(B)>0$. La *probabilidad condicional de $A$ dado $B$* es" },
        { math: "P(A\\mid B) = \\dfrac{P(A\\cap B)}{P(B)}." },
        { figura: "venn-dos", caption: "Al condicionar por $B$, el universo se “restringe” a $B$: $P(A\\mid B)$ es la proporción de $B$ ocupada por $A\\cap B$." },
        { p: "Intuitivamente, $B$ pasa a ser el nuevo espacio muestral y solo cuenta la parte de $A$ que cae dentro de $B$." },
      ],
    },
    {
      tipo: "observacion",
      etiqueta: "obs:condicional-medida",
      cuerpo: [
        { p: "Fijado $B$ con $P(B)>0$, la función $A\\mapsto P(A\\mid B)$ es a su vez una medida de probabilidad (cumple los tres axiomas). De la definición se obtiene la *regla del producto*:" },
        { math: "P(A\\cap B) = P(B)\\,P(A\\mid B)." },
      ],
    },
    {
      tipo: "ejemplo",
      etiqueta: "ej:condicional-dado",
      titulo: "Condicionar en un dado",
      cuerpo: [
        { p: "Sea $\\Omega=\\{1,\\dots,6\\}$ equiprobable, $A=\\{2,4,6\\}$ (par) y $B=\\{4,5,6\\}$ (mayor que $3$). Como $A\\cap B=\\{4,6\\}$," },
        { math: "P(A\\mid B)=\\dfrac{P(A\\cap B)}{P(B)}=\\dfrac{2/6}{3/6}=\\dfrac{2}{3}." },
        { p: "Saber que el resultado es mayor que $3$ *cambia* la probabilidad de “par” de $1/2$ a $2/3$." },
      ],
    },

    {
      tipo: "definicion",
      etiqueta: "def:independencia",
      titulo: "Independencia de dos eventos",
      cuerpo: [
        { p: "Dos eventos $A$ y $B$ son *independientes*, y se escribe $A\\perp B$, cuando" },
        { math: "P(A\\cap B) = P(A)\\,P(B)." },
      ],
    },
    {
      tipo: "observacion",
      etiqueta: "obs:independencia",
      titulo: "Independencia frente a condicional y a ser ajenos",
      cuerpo: [
        { p: "Si $P(B)>0$, la independencia equivale a $P(A\\mid B)=P(A)$: saber que ocurrió $B$ *no* aporta información sobre $A$." },
        { p: "Cuidado con dos confusiones frecuentes: independiente *no* es lo mismo que *ajeno*. De hecho, si $A$ y $B$ son ajenos con $P(A),P(B)>0$, entonces $P(A\\cap B)=0\\neq P(A)P(B)$, así que *no* son independientes. En el ejemplo del dado anterior, $A$ y $B$ tampoco son independientes, pues $P(A\\cap B)=1/3\\neq 1/2\\cdot 1/2 = P(A)P(B)$." },
      ],
    },
    {
      tipo: "definicion",
      etiqueta: "def:independencia-varios",
      titulo: "Independencia de varios eventos",
      cuerpo: [
        { p: "Los eventos $A_1,\\dots,A_n$ son *independientes* si toda subcolección factoriza; es decir, para cualesquiera índices distintos," },
        { math: "P(A_{i}\\cap A_{j}) = P(A_{i})P(A_{j}),\\quad P(A_{i}\\cap A_{j}\\cap A_{k}) = P(A_{i})P(A_{j})P(A_{k}),\\ \\dots" },
        { p: "hasta la igualdad con los $n$ eventos. *Atención:* la independencia *dos a dos* no implica, en general, la independencia del conjunto completo." },
      ],
    },

    {
      tipo: "ejercicio",
      etiqueta: "ej:baraja",
      titulo: "As y corazones",
      cuerpo: [
        { p: "De una baraja de $52$ cartas se extrae una al azar. Sean $A=$ “es un as” y $B=$ “es de corazones”. ¿Son $A$ y $B$ independientes?" },
      ],
      solucion: [
        { p: "Hay $4$ ases y $13$ corazones; el as de corazones es la única carta en $A\\cap B$. Entonces" },
        { math: "P(A)=\\dfrac{4}{52}=\\dfrac{1}{13},\\quad P(B)=\\dfrac{13}{52}=\\dfrac{1}{4},\\quad P(A\\cap B)=\\dfrac{1}{52}." },
        { p: "Como $P(A)\\,P(B)=\\dfrac{1}{13}\\cdot\\dfrac{1}{4}=\\dfrac{1}{52}=P(A\\cap B)$, los eventos *sí* son independientes." },
      ],
    },
  ],
};
