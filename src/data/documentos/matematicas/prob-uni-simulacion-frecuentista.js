// Subsección 2.8 — Probabilidad, nivel universidad.
// Sección: Espacios de probabilidad · Simulación de la interpretación frecuentista.
export const DOCUMENTO = {
  id: "prob-uni-simulacion-frecuentista",
  titulo: "Simulación de la interpretación frecuentista",
  materia: "Matemáticas",
  tema: "Probabilidad · Espacios de probabilidad",
  nivel: "universidad",
  examenes: ["UNAM"],
  contenido: [
    {
      tipo: "parrafo",
      cuerpo: [
        { p: "La interpretación frecuentista (lección 2.2) afirma que la probabilidad de un evento $A$ es el límite de su frecuencia relativa, $P(A)=\\displaystyle\\lim_{n\\to\\infty}\\dfrac{n_A}{n}$. La *simulación* permite ilustrar este hecho: repetimos el experimento muchas veces y observamos cómo $n_A/n$ se estabiliza." },
      ],
    },
    {
      tipo: "parrafo",
      cuerpo: [
        { p: "Considera el lanzamiento de una moneda equilibrada, donde el evento es “águila”, con probabilidad teórica $P=\\dfrac{1}{2}$. Lanza una y otra vez y observa la frecuencia relativa (azul) acercándose a la línea teórica (dorada):" },
        {
          interactivo: "sim-frecuentista",
          props: { p: 0.5, evento: "águila" },
          instruccion: "Pulsa “Lanzar” y mira cómo la frecuencia relativa converge a 1/2.",
          caption: "Frecuencia relativa de “águila” conforme crece el número de lanzamientos.",
        },
      ],
    },
    {
      tipo: "observacion",
      etiqueta: "obs:lgn",
      titulo: "Lo que se observa, la teoría lo demuestra",
      cuerpo: [
        { p: "Dos cosas se aprecian al simular: con pocos lanzamientos la frecuencia *fluctúa* mucho, y al crecer $n$ se *estabiliza* alrededor del valor teórico. Esto no es casualidad ni un axioma: es precisamente lo que afirma la *ley de los grandes números* (Sección 5). El tamaño típico de las fluctuaciones decrece como $\\dfrac{1}{\\sqrt{n}}$, de modo que cuadruplicar los lanzamientos reduce el error a la mitad." },
      ],
    },
    {
      tipo: "observacion",
      etiqueta: "obs:como-se-simula",
      titulo: "¿Cómo se simula el azar?",
      cuerpo: [
        { p: "La computadora genera un número *pseudoaleatorio* $u$ distribuido uniformemente en $[0,1)$. Para un evento de probabilidad $p$, declaramos que “ocurre” si $u<p$ (por probabilidad geométrica sobre $[0,1)$, esto sucede con probabilidad $p$). Repitiendo, obtenemos una sucesión de ensayos con la probabilidad deseada." },
      ],
    },
    {
      tipo: "ejercicio",
      etiqueta: "ej:simulacion",
      titulo: "Experimenta",
      cuerpo: [
        { p: "Usa el simulador: (a) reinícialo y lanza solo $10$ veces, anotando la frecuencia; repite varias veces y observa cuánto varía. (b) Ahora llega a más de $1000$ lanzamientos. ¿Qué tan cerca de $0.5$ queda la frecuencia, y por qué?" },
      ],
      solucion: [
        { p: "(a) Con $n=10$ la frecuencia salta con facilidad entre valores como $0.3$ y $0.7$: la variabilidad es grande. (b) Con $n>1000$ la frecuencia se queda muy cerca de $0.5$ (típicamente a menos de $\\dfrac{1}{\\sqrt{1000}}\\approx 0.03$), porque las fluctuaciones se encogen como $\\dfrac{1}{\\sqrt{n}}$. Es la ley de los grandes números en acción." },
      ],
    },
  ],
};
