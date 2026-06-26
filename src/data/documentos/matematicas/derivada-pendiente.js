// Documento matemático (prototipo): "La derivada como pendiente".
// Demuestra la cadena definición → teorema → demostración → corolario,
// con un diagrama estático (figura) y un interactivo (mafs) en el mismo doc.
export const DOCUMENTO = {
  id: "derivada-pendiente",
  titulo: "La derivada como pendiente",
  materia: "Matemáticas",
  tema: "Cálculo diferencial",
  examenes: ["UNAM"],
  nivel: "universidad",
  contenido: [
    { tipo: "seccion", titulo: "De la secante a la tangente" },

    {
      tipo: "parrafo",
      cuerpo: [
        { p: "Queremos medir qué tan rápido cambia una función $f$ en un punto. La idea geométrica es aproximar la recta $tangente$ a la curva mediante rectas $secantes$ que pasan por dos puntos cada vez más cercanos." },
      ],
    },

    {
      tipo: "definicion",
      etiqueta: "def:secante",
      titulo: "Pendiente de la recta secante",
      cuerpo: [
        { p: "Dada $f$ y dos puntos $P=(a,\\,f(a))$ y $Q=(a+h,\\,f(a+h))$ con $h\\neq 0$, la pendiente de la recta secante $PQ$ es:" },
        { math: "m_{\\text{sec}} = \\dfrac{f(a+h)-f(a)}{h}" },
        { figura: "derivada-secante", caption: "La secante (rosa) corta a la curva en $P$ y $Q$; la tangente (verde) la toca solo en $P$." },
      ],
    },

    {
      tipo: "parrafo",
      cuerpo: [
        { p: "Conforme $Q$ se acerca a $P$ (es decir, $h\\to 0$), la secante gira hasta confundirse con la tangente. Arrastra el punto $Q$ y observa cómo su pendiente se aproxima a $2$:" },
        {
          interactivo: "derivada-tangente",
          instruccion: "Arrastra Q sobre la parábola y mira la pendiente de la secante",
          caption: "Para $f(x)=x^2$ con $P=(1,1)$, la pendiente de la secante tiende a $2$ cuando $Q\\to P$.",
        },
      ],
    },

    {
      tipo: "definicion",
      etiqueta: "def:derivada",
      titulo: "Derivada en un punto",
      cuerpo: [
        { p: "La $derivada$ de $f$ en $a$, denotada $f'(a)$, es el límite de la pendiente de la secante cuando $h\\to 0$, $siempre$ que dicho límite exista:" },
        { math: "f'(a) = \\lim_{h\\to 0} \\dfrac{f(a+h)-f(a)}{h}" },
        { p: "Geométricamente, $f'(a)$ es la pendiente de la recta tangente a la gráfica de $f$ en el punto $(a,\\,f(a))$." },
      ],
    },

    {
      tipo: "teorema",
      etiqueta: "thm:deriv-x2",
      titulo: "Derivada de la función cuadrática",
      cuerpo: [
        { p: "Si $f(x)=x^2$, entonces $f$ es derivable en todo $x\\in\\mathbb{R}$ y" },
        { math: "f'(x) = 2x." },
      ],
    },

    {
      tipo: "demostracion",
      metodo: "por la definición",
      pasos: [
        { texto: "Aplicamos la definición de derivada en un punto $x$ arbitrario:",
          math: "f'(x) = \\lim_{h\\to 0} \\dfrac{(x+h)^2 - x^2}{h}" },
        { texto: "Desarrollamos el binomio en el numerador:",
          math: "(x+h)^2 - x^2 = x^2 + 2xh + h^2 - x^2 = 2xh + h^2" },
        { texto: "Como $h\\neq 0$ dentro del límite, dividimos:",
          math: "\\dfrac{2xh + h^2}{h} = 2x + h" },
        { texto: "Finalmente tomamos el límite, que existe para todo $x$:",
          math: "f'(x) = \\lim_{h\\to 0} (2x + h) = 2x" },
      ],
    },

    {
      tipo: "corolario",
      etiqueta: "cor:tangente",
      titulo: "Recta tangente a la parábola",
      cuerpo: [
        { p: "Como consecuencia directa del [[thm:deriv-x2]], la recta tangente a $y=x^2$ en el punto $(a,\\,a^2)$ tiene pendiente $f'(a)=2a$, y su ecuación es:" },
        { math: "y = 2a\\,(x - a) + a^2 = 2a\\,x - a^2" },
        { p: "En particular, en $P=(1,1)$ la pendiente es $2$, como anticipaba el interactivo de arriba." },
      ],
    },
  ],
};
