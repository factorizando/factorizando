import { useState, useEffect } from "react";
import { M, MB, StepRow, EjCard, QzCard, SHARED_STYLE } from "./shared";

/* ── FRACCIONES-SPECIFIC STYLES ──────────────────────────────────────────────── */

const FRACCIONES_STYLE = `
  .conv-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-top: 12px; }
  @media(max-width:560px){ .conv-grid { grid-template-columns: 1fr; } }
  .conv-card { background: rgba(0,0,0,0.32); border: 1px solid rgba(255,255,255,0.07); border-radius: 10px; padding: 20px 22px; transition: border-color 0.2s; }
  .conv-card:hover { border-color: rgba(245,200,66,0.22); }
  .conv-title { font-family: 'Playfair Display', serif; font-size: 15px; color: #f5c842; margin-bottom: 6px; font-style: italic; }
  .conv-rule  { font-size: 13.5px; color: #a09880; line-height: 1.7; font-weight: 300; }
  .prop-row { display: flex; align-items: flex-start; gap: 16px; padding: 16px 20px; background: rgba(0,0,0,0.3); border: 1px solid rgba(255,255,255,0.06); border-radius: 8px; margin-bottom: 10px; transition: border-color 0.2s; }
  .prop-row:hover { border-color: rgba(245,200,66,0.2); }
  .prop-num { flex-shrink: 0; width: 28px; height: 28px; background: linear-gradient(135deg,#c8960a,#f5c842); color: #0d0d0f; border-radius: 50%; font-family: 'IBM Plex Mono', monospace; font-size: 12px; font-weight: 700; display: flex; align-items: center; justify-content: center; margin-top: 2px; }
  .prop-body { flex: 1; }
  .prop-title { font-family: 'Playfair Display', serif; font-size: 16px; color: #f0ece3; margin-bottom: 5px; font-style: italic; }
  .prop-desc  { font-size: 14.5px; color: #a09880; line-height: 1.7; font-weight: 300; }
  .regla-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-top: 12px; }
  @media(max-width:560px){ .regla-grid { grid-template-columns: 1fr; } }
  .regla-card { background: rgba(0,0,0,0.3); border: 1px solid rgba(255,255,255,0.07); border-radius: 10px; padding: 18px 20px; }
  .regla-card h4 { font-family: 'IBM Plex Mono', monospace; font-size: 11px; letter-spacing: 0.15em; color: rgba(245,200,66,0.75); text-transform: uppercase; margin-bottom: 10px; }
  .regla-card p  { font-size: 14px; color: #a09880; line-height: 1.7; font-weight: 300; }
  .type-tag { display: inline-block; font-family: 'IBM Plex Mono', monospace; font-size: 10px; letter-spacing: 0.15em; padding: 3px 10px; border-radius: 2px; text-transform: uppercase; }
  .type-dir  { background: rgba(245,200,66,0.1); color: #f5c842; border: 1px solid rgba(245,200,66,0.25); }
  .type-inv  { background: rgba(100,190,255,0.1); color: #7acfff; border: 1px solid rgba(100,190,255,0.25); }
  .pasos-lista { counter-reset: paso; list-style: none; padding: 0; margin: 0; }
  .pasos-lista li { counter-increment: paso; display: flex; gap: 14px; align-items: flex-start; margin-bottom: 14px; }
  .pasos-lista li::before { content: counter(paso); flex-shrink: 0; width: 24px; height: 24px; background: rgba(245,200,66,0.12); border: 1px solid rgba(245,200,66,0.3); border-radius: 50%; font-family: 'IBM Plex Mono', monospace; font-size: 11px; color: #f5c842; display: flex; align-items: center; justify-content: center; margin-top: 1px; }
  .pasos-lista li span { font-size: 14.5px; color: #a09880; line-height: 1.75; font-weight: 300; }
`;

/* ── DATA ────────────────────────────────────────────────────────────────────── */

const ejemplos = [
  {
    titulo: "Fracción → decimal",
    prob: String.raw`\dfrac{3}{8}`,
    steps: [
      { pre: "Dividimos numerador entre denominador: ", math: String.raw`3 \div 8` },
      { pre: "Realizamos la división: 8 cabe 0 veces en 3 → 8 cabe 3 veces en 30 → 8 cabe 7 veces en 24..." },
      { pre: "Resultado: ", math: String.raw`\dfrac{3}{8} = 0.375` },
    ],
    res: String.raw`0.375`,
  },
  {
    titulo: "Decimal → fracción (decimal exacto)",
    prob: String.raw`0.64`,
    steps: [
      { pre: "Contamos los decimales: dos cifras decimales → denominador ", math: String.raw`10^2 = 100` },
      { pre: "Escribimos: ", math: String.raw`\dfrac{64}{100}` },
      { pre: "Simplificamos (÷ 4): ", math: String.raw`\dfrac{64}{100} = \dfrac{16}{25}` },
    ],
    res: String.raw`\dfrac{16}{25}`,
  },
  {
    titulo: "Fracción → porcentaje",
    prob: String.raw`\dfrac{7}{20}`,
    steps: [
      { pre: "Multiplicamos por 100: ", math: String.raw`\dfrac{7}{20} \times 100 = \dfrac{700}{20} = 35` },
      { pre: "Agregamos el símbolo %: ", math: String.raw`35\%` },
    ],
    res: String.raw`35\%`,
  },
  {
    titulo: "Porcentaje → fracción",
    prob: String.raw`72\%`,
    steps: [
      { pre: "Escribimos sobre 100: ", math: String.raw`\dfrac{72}{100}` },
      { pre: "Simplificamos (÷ 4): ", math: String.raw`\dfrac{72}{100} = \dfrac{18}{25}` },
    ],
    res: String.raw`\dfrac{18}{25}`,
  },
  {
    titulo: "Proporción — valor desconocido",
    prob: String.raw`\dfrac{3}{4} = \dfrac{x}{20}`,
    steps: [
      { pre: "Aplicamos la propiedad fundamental (producto cruzado): ", math: String.raw`3 \times 20 = 4 \times x` },
      { pre: "Despejamos x: ", math: String.raw`60 = 4x \;\Rightarrow\; x = \dfrac{60}{4} = 15` },
    ],
    res: String.raw`x = 15`,
  },
  {
    titulo: "Regla de tres directa",
    prob: String.raw`\text{Si 5 libros cuestan \$120, ¿cuánto cuestan 8 libros?}`,
    steps: [
      { pre: "Identificamos: más libros → más costo → proporción directa." },
      { pre: "Planteamos: ", math: String.raw`\dfrac{5}{120} = \dfrac{8}{x}` },
      { pre: "Cruzamos: ", math: String.raw`5x = 960 \;\Rightarrow\; x = 192` },
    ],
    res: String.raw`\$192`,
  },
  {
    titulo: "Regla de tres inversa",
    prob: String.raw`\text{10 obreros terminan una obra en 6 días. ¿Cuántos días tardan 15 obreros?}`,
    steps: [
      { pre: "Más obreros → menos días → proporción inversa." },
      { pre: "Invertimos una razón: ", math: String.raw`10 \times 6 = 15 \times x` },
      { pre: "Despejamos: ", math: String.raw`x = \dfrac{60}{15} = 4` },
    ],
    res: String.raw`4 \text{ días}`,
  },
  {
    titulo: "Problema de porcentaje — descuento",
    prob: String.raw`\text{Un artículo cuesta \$350. Se aplica un descuento del 15\%. ¿Cuál es el precio final?}`,
    steps: [
      { pre: "Calculamos el descuento: ", math: String.raw`350 \times 0.15 = 52.50` },
      { pre: "Precio final: ", math: String.raw`350 - 52.50 = 297.50` },
      { pre: "Alternativa directa: ", math: String.raw`350 \times 0.85 = 297.50` },
    ],
    res: String.raw`\$297.50`,
  },
];

const ejerciciosConversion = [
  {
    q: "Convierte la fracción a decimal:",
    prob: String.raw`\dfrac{5}{8}`,
    opts: [String.raw`0.525`, String.raw`0.625`, String.raw`0.658`, String.raw`0.825`],
    ans: 1,
    exp: "5 ÷ 8 = 0.625",
    steps: [
      { pre: "Dividimos: 5 ÷ 8" },
      { pre: "50 ÷ 8 = 6 (resto 2); 20 ÷ 8 = 2 (resto 4); 40 ÷ 8 = 5" },
      { pre: "Resultado: 0.625" },
    ],
  },
  {
    q: "Convierte el decimal a fracción simplificada:",
    prob: String.raw`0.45`,
    opts: [String.raw`\dfrac{9}{20}`, String.raw`\dfrac{45}{10}`, String.raw`\dfrac{4}{5}`, String.raw`\dfrac{9}{100}`],
    ans: 0,
    exp: "0.45 = 45/100 = 9/20",
    steps: [
      { pre: "Dos decimales → denominador 100: 45/100" },
      { pre: "MCD(45,100) = 5 → simplificamos: 9/20" },
    ],
  },
  {
    q: "Convierte la fracción a porcentaje:",
    prob: String.raw`\dfrac{3}{5}`,
    opts: [String.raw`35\%`, String.raw`53\%`, String.raw`60\%`, String.raw`65\%`],
    ans: 2,
    exp: "(3/5) × 100 = 60%",
    steps: [
      { pre: "Multiplicamos por 100: (3 × 100)/5 = 300/5 = 60" },
      { pre: "Resultado: 60%" },
    ],
  },
  {
    q: "Convierte el porcentaje a fracción simplificada:",
    prob: String.raw`85\%`,
    opts: [String.raw`\dfrac{85}{10}`, String.raw`\dfrac{17}{20}`, String.raw`\dfrac{8}{5}`, String.raw`\dfrac{17}{200}`],
    ans: 1,
    exp: "85/100 = 17/20",
    steps: [
      { pre: "85% = 85/100" },
      { pre: "MCD(85,100) = 5 → 17/20" },
    ],
  },
  {
    q: "¿Cuál de las siguientes expresiones es equivalente?",
    prob: String.raw`\dfrac{3}{4} = \; ?`,
    opts: [String.raw`0.34`, String.raw`34\%`, String.raw`0.75`, String.raw`7.5\%`],
    ans: 2,
    exp: "3/4 = 0.75 = 75%",
    steps: [
      { pre: "3 ÷ 4 = 0.75" },
      { pre: "0.75 × 100 = 75% (no 34%)" },
      { pre: "La correcta es 0.75" },
    ],
  },
];

const ejerciciosProporciones = [
  {
    q: "Encuentra el valor de x en la proporción:",
    prob: String.raw`\dfrac{4}{6} = \dfrac{x}{15}`,
    opts: [String.raw`x = 8`, String.raw`x = 10`, String.raw`x = 12`, String.raw`x = 9`],
    ans: 1,
    exp: "4×15 = 6x → 60 = 6x → x = 10",
    steps: [
      { pre: "Producto cruzado: ", math: String.raw`4 \times 15 = 6 \times x` },
      { pre: "60 = 6x → x = 10" },
    ],
  },
  {
    q: "Encuentra el valor de x en la proporción:",
    prob: String.raw`\dfrac{9}{x} = \dfrac{3}{7}`,
    opts: [String.raw`x = 18`, String.raw`x = 21`, String.raw`x = 24`, String.raw`x = 27`],
    ans: 1,
    exp: "9×7 = 3x → 63 = 3x → x = 21",
    steps: [
      { pre: "Cruzamos: ", math: String.raw`9 \times 7 = 3x` },
      { pre: "63 = 3x → x = 21" },
    ],
  },
  {
    q: "Si 3 kg de naranjas cuestan $45, ¿cuánto cuestan 7 kg? (regla de tres directa)",
    prob: String.raw`3 \text{ kg} \to \$45 \quad\quad 7 \text{ kg} \to \$x`,
    opts: [String.raw`\$95`, String.raw`\$100`, String.raw`\$105`, String.raw`\$110`],
    ans: 2,
    exp: "3/45 = 7/x → 3x = 315 → x = 105",
    steps: [
      { pre: "Más cantidad → más costo: proporción directa." },
      { pre: "3/45 = 7/x → 3x = 315 → x = 105" },
    ],
  },
  {
    q: "6 empleados terminan un trabajo en 8 días. ¿En cuántos días lo terminan 4 empleados? (regla de tres inversa)",
    prob: String.raw`6 \text{ emp.} \to 8 \text{ días} \quad\quad 4 \text{ emp.} \to x \text{ días}`,
    opts: [String.raw`10`, String.raw`12`, String.raw`14`, String.raw`16`],
    ans: 1,
    exp: "Inversa: 6×8 = 4×x → 48 = 4x → x = 12",
    steps: [
      { pre: "Menos empleados → más días: inversa." },
      { pre: "6 × 8 = 4 × x → 48 = 4x → x = 12 días" },
    ],
  },
  {
    q: "Verifica cuál de las siguientes es una proporción verdadera:",
    prob: String.raw``,
    opts: [
      String.raw`\dfrac{2}{5} = \dfrac{6}{20}`,
      String.raw`\dfrac{3}{7} = \dfrac{9}{21}`,
      String.raw`\dfrac{4}{9} = \dfrac{8}{20}`,
      String.raw`\dfrac{5}{8} = \dfrac{15}{28}`,
    ],
    ans: 1,
    exp: "3×21 = 63 y 7×9 = 63 ✓",
    steps: [
      { pre: "Verificamos con producto cruzado:" },
      { pre: "Opción B: 3×21 = 63; 7×9 = 63 → iguales → proporción verdadera ✓" },
    ],
  },
];

const ejerciciosAplicacion = [
  {
    q: "En una clase de 30 alumnos, el 40% son mujeres. ¿Cuántas mujeres hay?",
    prob: String.raw`30 \text{ alumnos}, \quad 40\%\text{ son mujeres}`,
    opts: [String.raw`10`, String.raw`12`, String.raw`15`, String.raw`18`],
    ans: 1,
    exp: "30 × 0.40 = 12",
    steps: [
      { pre: "Calculamos el 40% de 30: 30 × 0.40 = 12" },
    ],
  },
  {
    q: "Un producto costaba $200. Subió el 15%. ¿Cuál es el nuevo precio?",
    prob: String.raw`\$200 \;\xrightarrow{+15\%}\; \$x`,
    opts: [String.raw`\$215`, String.raw`\$225`, String.raw`\$230`, String.raw`\$240`],
    ans: 2,
    exp: "200 × 1.15 = 230",
    steps: [
      { pre: "Aumento: 200 × 0.15 = 30" },
      { pre: "Nuevo precio: 200 + 30 = 230 (o directamente 200 × 1.15 = 230)" },
    ],
  },
  {
    q: "De 120 estudiantes, 90 aprobaron. ¿Qué porcentaje aprobó?",
    prob: String.raw`\dfrac{90}{120} \times 100 = ?`,
    opts: [String.raw`65\%`, String.raw`70\%`, String.raw`75\%`, String.raw`80\%`],
    ans: 2,
    exp: "(90/120) × 100 = 75%",
    steps: [
      { pre: "Fracción: 90/120 = 3/4" },
      { pre: "(3/4) × 100 = 75%" },
    ],
  },
  {
    q: "Una motocicleta recorre 180 km en 3 horas. ¿Cuántos kilómetros recorre en 5 horas a la misma velocidad?",
    prob: String.raw`3 \text{ h} \to 180 \text{ km} \quad\quad 5 \text{ h} \to x \text{ km}`,
    opts: [String.raw`250 \text{ km}`, String.raw`280 \text{ km}`, String.raw`300 \text{ km}`, String.raw`320 \text{ km}`],
    ans: 2,
    exp: "3/180 = 5/x → 3x = 900 → x = 300",
    steps: [
      { pre: "Más tiempo → más distancia: proporción directa." },
      { pre: "3 × x = 180 × 5 → 3x = 900 → x = 300 km" },
    ],
  },
  {
    q: "Una tienda ofrece un descuento del 20% sobre un artículo de $480. ¿Cuánto se paga finalmente?",
    prob: String.raw`\$480 \;\xrightarrow{-20\%}\; \$x`,
    opts: [String.raw`\$364`, String.raw`\$376`, String.raw`\$380`, String.raw`\$384`],
    ans: 3,
    exp: "480 × 0.80 = 384",
    steps: [
      { pre: "Descuento: 480 × 0.20 = 96" },
      { pre: "Precio final: 480 − 96 = 384 (o directamente 480 × 0.80 = 384)" },
    ],
  },
];

const miniExamen = [
  {
    q: "¿Cuál es el decimal equivalente a la fracción?",
    prob: String.raw`\dfrac{7}{4}`,
    opts: [String.raw`1.25`, String.raw`1.50`, String.raw`1.75`, String.raw`2.75`],
    ans: 2,
    exp: "7 ÷ 4 = 1.75",
    steps: [{ pre: "7 ÷ 4: 4 cabe 1 vez en 7 (resto 3); 30 ÷ 4 = 7 (resto 2); 20 ÷ 4 = 5 → 1.75" }],
  },
  {
    q: "¿Cuál es la fracción simplificada equivalente?",
    prob: String.raw`0.36`,
    opts: [String.raw`\dfrac{36}{10}`, String.raw`\dfrac{18}{50}`, String.raw`\dfrac{9}{25}`, String.raw`\dfrac{4}{11}`],
    ans: 2,
    exp: "36/100 = 9/25",
    steps: [{ pre: "0.36 = 36/100; MCD(36,100)=4 → 9/25" }],
  },
  {
    q: "Convierte a porcentaje:",
    prob: String.raw`\dfrac{11}{25}`,
    opts: [String.raw`40\%`, String.raw`42\%`, String.raw`44\%`, String.raw`46\%`],
    ans: 2,
    exp: "(11/25)×100 = 44%",
    steps: [{ pre: "(11 × 100)/25 = 1100/25 = 44%" }],
  },
  {
    q: "¿Cuál es el valor de x?",
    prob: String.raw`\dfrac{5}{8} = \dfrac{x}{40}`,
    opts: [String.raw`x = 20`, String.raw`x = 25`, String.raw`x = 30`, String.raw`x = 35`],
    ans: 1,
    exp: "5×40 = 8x → 200 = 8x → x = 25",
    steps: [{ pre: "Cruzados: 5×40 = 8x → 200 = 8x → x = 25" }],
  },
  {
    q: "Si 4 latas de pintura alcanzan para 24 m², ¿cuántas latas se necesitan para 54 m²?",
    prob: String.raw`4 \text{ latas} \to 24 \text{ m}^2 \quad\quad x \text{ latas} \to 54 \text{ m}^2`,
    opts: [String.raw`7`, String.raw`8`, String.raw`9`, String.raw`10`],
    ans: 2,
    exp: "4/24 = x/54 → 24x = 216 → x = 9",
    steps: [
      { pre: "Proporción directa: más área → más latas." },
      { pre: "4/24 = x/54 → 24x = 216 → x = 9" },
    ],
  },
  {
    q: "4 máquinas producen 200 piezas en 5 horas. ¿Cuántas horas tardarán 10 máquinas en producir las mismas 200 piezas?",
    prob: String.raw`4 \text{ máq.} \to 5 \text{ h} \quad\quad 10 \text{ máq.} \to x \text{ h}`,
    opts: [String.raw`2 \text{ h}`, String.raw`2.5 \text{ h}`, String.raw`3 \text{ h}`, String.raw`4 \text{ h}`],
    ans: 0,
    exp: "Inversa: 4×5 = 10×x → 20 = 10x → x = 2",
    steps: [
      { pre: "Más máquinas → menos horas: inversa." },
      { pre: "4 × 5 = 10 × x → 20 = 10x → x = 2 h" },
    ],
  },
  {
    q: "¿Cuánto es el 35% de $640?",
    prob: String.raw`35\% \times 640 = ?`,
    opts: [String.raw`\$214`, String.raw`\$224`, String.raw`\$234`, String.raw`\$244`],
    ans: 1,
    exp: "640 × 0.35 = 224",
    steps: [{ pre: "640 × 0.35 = 224" }],
  },
  {
    q: "Un artículo que costaba $560 bajó de precio y ahora cuesta $448. ¿Qué porcentaje de descuento se aplicó?",
    prob: String.raw`\dfrac{560 - 448}{560} \times 100 = ?`,
    opts: [String.raw`15\%`, String.raw`18\%`, String.raw`20\%`, String.raw`22\%`],
    ans: 2,
    exp: "(112/560)×100 = 20%",
    steps: [
      { pre: "Diferencia: 560 − 448 = 112" },
      { pre: "(112/560) × 100 = 20%" },
    ],
  },
  {
    q: "¿Cuál es la razón simplificada entre 36 y 48?",
    prob: String.raw`36 : 48`,
    opts: [String.raw`3:4`, String.raw`4:3`, String.raw`6:8`, String.raw`2:3`],
    ans: 0,
    exp: "MCD(36,48)=12 → 3:4",
    steps: [{ pre: "MCD(36,48) = 12; 36/12 = 3; 48/12 = 4 → razón 3:4" }],
  },
  {
    q: "Si 15 es el 60% de un número, ¿cuál es ese número?",
    prob: String.raw`15 = 60\% \times x`,
    opts: [String.raw`20`, String.raw`22`, String.raw`25`, String.raw`30`],
    ans: 2,
    exp: "x = 15/0.60 = 25",
    steps: [
      { pre: "15 = 0.60 × x" },
      { pre: "x = 15 ÷ 0.60 = 25" },
    ],
  },
  {
    q: "Un mapa tiene escala 1:50 000. Si dos ciudades están a 7 cm en el mapa, ¿cuál es la distancia real en km?",
    prob: String.raw`\text{Escala }1:50\,000 \quad 7\text{ cm} \to x\text{ km}`,
    opts: [String.raw`3 \text{ km}`, String.raw`3.5 \text{ km}`, String.raw`7 \text{ km}`, String.raw`35 \text{ km}`],
    ans: 1,
    exp: "7 × 50 000 = 350 000 cm = 3.5 km",
    steps: [
      { pre: "Distancia real: 7 × 50 000 = 350 000 cm" },
      { pre: "Convertimos: 350 000 cm ÷ 100 000 = 3.5 km" },
    ],
  },
  {
    q: "¿Cuál de estas opciones NO es equivalente a las demás?",
    prob: String.raw``,
    opts: [
      String.raw`\dfrac{2}{5}`,
      String.raw`0.4`,
      String.raw`40\%`,
      String.raw`\dfrac{4}{25}`,
    ],
    ans: 3,
    exp: "4/25 = 0.16 ≠ 0.40",
    steps: [
      { pre: "2/5 = 0.40 = 40% — todas iguales." },
      { pre: "4/25 = 0.16 ≠ 0.40 → esta NO es equivalente." },
    ],
  },
];

/* ── STYLE INJECTION ─────────────────────────────────────────────────────────── */

function useStyles() {
  useEffect(() => {
    if (!document.getElementById("factorizando-shared")) {
      const s = document.createElement("style");
      s.id = "factorizando-shared";
      s.textContent = SHARED_STYLE;
      document.head.appendChild(s);
    }
    if (!document.getElementById("factorizando-fracciones")) {
      const s = document.createElement("style");
      s.id = "factorizando-fracciones";
      s.textContent = FRACCIONES_STYLE;
      document.head.appendChild(s);
    }
  }, []);
}

/* ── ACCORDION ───────────────────────────────────────────────────────────────── */

function Acordeon({ titulo, count, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="acc-item">
      <div className="acc-hd" onClick={() => setOpen(!open)}>
        <span className="acc-title">{titulo} <span className="acc-count">· {count} ejercicios</span></span>
        <span className={`chevron${open ? " open" : ""}`}>▾</span>
      </div>
      <div className={`acc-body${open ? " open" : ""}`}>
        {children}
      </div>
    </div>
  );
}

/* ── MAIN COMPONENT ──────────────────────────────────────────────────────────── */

export default function FraccionesGuia() {
  useStyles();
  return (
    <div className="lr">

      {/* HERO */}
      <div className="hero">
        <div className="hero-tag">EXANI-I · Pensamiento Matemático</div>
        <h1>Fracciones, Decimales y Proporciones</h1>
        <div className="hero-math">
          <M>{String.raw`\dfrac{a}{b} = a \div b \quad\longleftrightarrow\quad a.xx\% `}</M>
        </div>
        <p>Convierte entre fracciones, decimales y porcentajes con fluidez, y aplica proporciones y regla de tres para resolver problemas del EXANI-I.</p>
      </div>

      <div className="cw">

        {/* ── 01 FRACCIONES ↔ DECIMALES ─────────────────────────────────── */}
        <div className="section">
          <div className="sec-hd"><span className="sec-num">01</span><h2>Fracciones ↔ Decimales</h2></div>

          <div className="card">
            <h3>Reglas de conversión</h3>
            <div className="conv-grid">
              <div className="conv-card">
                <div className="conv-title">Fracción → Decimal</div>
                <div className="conv-rule">
                  Divide el <strong>numerador</strong> entre el <strong>denominador</strong>.
                </div>
                <div style={{ marginTop: 12 }}>
                  <MB>{String.raw`\dfrac{3}{4} = 3 \div 4 = 0.75`}</MB>
                </div>
              </div>
              <div className="conv-card">
                <div className="conv-title">Decimal → Fracción</div>
                <div className="conv-rule">
                  Escribe el decimal sobre <M>10^n</M> (donde <M>n</M> = cifras decimales) y simplifica.
                </div>
                <div style={{ marginTop: 12 }}>
                  <MB>{String.raw`0.6 = \dfrac{6}{10} = \dfrac{3}{5}`}</MB>
                </div>
              </div>
            </div>

            <div className="tip-box" style={{ marginTop: 20 }}>
              <div className="tip-label">Fracciones clave para memorizar</div>
              <p>
                <M>{String.raw`\tfrac{1}{4}=0.25`}</M> &nbsp;·&nbsp;
                <M>{String.raw`\tfrac{1}{2}=0.5`}</M> &nbsp;·&nbsp;
                <M>{String.raw`\tfrac{3}{4}=0.75`}</M> &nbsp;·&nbsp;
                <M>{String.raw`\tfrac{1}{3}\approx0.333`}</M> &nbsp;·&nbsp;
                <M>{String.raw`\tfrac{2}{3}\approx0.667`}</M> &nbsp;·&nbsp;
                <M>{String.raw`\tfrac{1}{5}=0.2`}</M> &nbsp;·&nbsp;
                <M>{String.raw`\tfrac{1}{8}=0.125`}</M>
              </p>
            </div>
          </div>
        </div>

        <div className="divider" />

        {/* ── 02 FRACCIONES ↔ PORCENTAJES ───────────────────────────────── */}
        <div className="section">
          <div className="sec-hd"><span className="sec-num">02</span><h2>Fracciones ↔ Porcentajes</h2></div>

          <div className="card">
            <h3>Reglas de conversión</h3>
            <div className="conv-grid">
              <div className="conv-card">
                <div className="conv-title">Fracción → Porcentaje</div>
                <div className="conv-rule">
                  Multiplica la fracción por 100 y agrega el símbolo %.
                </div>
                <div style={{ marginTop: 12 }}>
                  <MB>{String.raw`\dfrac{3}{5} \times 100 = 60\%`}</MB>
                </div>
              </div>
              <div className="conv-card">
                <div className="conv-title">Porcentaje → Fracción</div>
                <div className="conv-rule">
                  Escribe el porcentaje sobre 100 y simplifica.
                </div>
                <div style={{ marginTop: 12 }}>
                  <MB>{String.raw`45\% = \dfrac{45}{100} = \dfrac{9}{20}`}</MB>
                </div>
              </div>
            </div>

            <div style={{ marginTop: 20 }}>
              <h3>Triángulo de equivalencias</h3>
              <p style={{ fontSize: 14.5, color: "#a09880", lineHeight: 1.75, fontWeight: 300, marginTop: 8 }}>
                Todo número puede expresarse de tres formas equivalentes. Conocer las tres y pasar entre ellas con rapidez es clave para el examen:
              </p>
              <MB>{String.raw`\dfrac{a}{b} \;\longleftrightarrow\; \text{decimal} \;\longleftrightarrow\; \%`}</MB>
              <p style={{ fontSize: 14.5, color: "#a09880", lineHeight: 1.75, fontWeight: 300, marginTop: 12 }}>
                Ejemplo completo: &nbsp;
                <M>{String.raw`\tfrac{7}{20} = 0.35 = 35\%`}</M>
              </p>
            </div>
          </div>
        </div>

        <div className="divider" />

        {/* ── 03 PROPORCIONES ───────────────────────────────────────────── */}
        <div className="section">
          <div className="sec-hd"><span className="sec-num">03</span><h2>Proporciones</h2></div>

          <div className="card">
            <h3>Definición y propiedad fundamental</h3>
            <p style={{ fontSize: 14.5, color: "#a09880", lineHeight: 1.75, fontWeight: 300, marginBottom: 16 }}>
              Una <strong style={{ color: "#e0dcd4" }}>proporción</strong> es una igualdad entre dos razones. Si <M>{String.raw`\tfrac{a}{b} = \tfrac{c}{d}`}</M>, entonces se cumple la <strong style={{ color: "#f5c842" }}>propiedad fundamental</strong>:
            </p>
            <MB>{String.raw`\dfrac{a}{b} = \dfrac{c}{d} \;\Longleftrightarrow\; a \times d = b \times c`}</MB>
            <p style={{ fontSize: 14, color: "#7a756e", lineHeight: 1.7, fontWeight: 300, marginTop: 12 }}>
              Este resultado —llamado <em>producto cruzado</em>— permite despejar cualquiera de los cuatro términos cuando los demás son conocidos.
            </p>

            <div style={{ marginTop: 20 }}>
              <h3>Tipos de proporciones</h3>
              <div className="regla-grid" style={{ marginTop: 12 }}>
                <div className="regla-card">
                  <h4><span className="type-tag type-dir">Directa</span></h4>
                  <p>Al aumentar una cantidad, la otra también aumenta en la misma razón. Ejemplo: distancia y tiempo a velocidad constante.</p>
                  <div style={{ marginTop: 10 }}>
                    <MB>{String.raw`\dfrac{a_1}{b_1} = \dfrac{a_2}{b_2}`}</MB>
                  </div>
                </div>
                <div className="regla-card">
                  <h4><span className="type-tag type-inv">Inversa</span></h4>
                  <p>Al aumentar una cantidad, la otra disminuye en la misma razón. Ejemplo: número de trabajadores y días para terminar una obra.</p>
                  <div style={{ marginTop: 10 }}>
                    <MB>{String.raw`a_1 \times b_1 = a_2 \times b_2`}</MB>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider" />

        {/* ── 04 REGLA DE TRES ──────────────────────────────────────────── */}
        <div className="section">
          <div className="sec-hd"><span className="sec-num">04</span><h2>Regla de tres</h2></div>

          <div className="card">
            <h3>¿Cómo identificar si es directa o inversa?</h3>
            <p style={{ fontSize: 14.5, color: "#a09880", lineHeight: 1.75, fontWeight: 300, marginBottom: 18 }}>
              Antes de plantear la operación, pregunta: <em>"¿si la primera cantidad sube, la segunda sube o baja?"</em>
            </p>

            {[
              {
                num: 1,
                titulo: "Directa",
                desc: "Ambas cantidades van en el mismo sentido. Más de una → más de la otra. Se plantea como igualdad de fracciones.",
                math: String.raw`\dfrac{a_1}{b_1} = \dfrac{a_2}{x} \;\Rightarrow\; x = \dfrac{a_2 \times b_1}{a_1}`,
              },
              {
                num: 2,
                titulo: "Inversa",
                desc: "Las cantidades van en sentido opuesto. Más de una → menos de la otra. Se igualan los productos.",
                math: String.raw`a_1 \times b_1 = a_2 \times x \;\Rightarrow\; x = \dfrac{a_1 \times b_1}{a_2}`,
              },
            ].map(p => (
              <div className="prop-row" key={p.num}>
                <div className="prop-num">{p.num}</div>
                <div className="prop-body">
                  <div className="prop-title">{p.titulo}</div>
                  <div className="prop-desc">{p.desc}</div>
                  <div style={{ marginTop: 10 }}><MB>{p.math}</MB></div>
                </div>
              </div>
            ))}

            <div className="tip-box" style={{ marginTop: 20 }}>
              <div className="tip-label">Truco rápido para el examen</div>
              <p>Si las dos variables son del mismo tipo (dinero-dinero, km-km), suele ser <strong>directa</strong>. Si son de tipo contrario (trabajadores-días, velocidad-tiempo), suele ser <strong>inversa</strong>.</p>
            </div>
          </div>
        </div>

        <div className="divider" />

        {/* ── 05 EJEMPLOS RESUELTOS ─────────────────────────────────────── */}
        <div className="section">
          <div className="sec-hd"><span className="sec-num">05</span><h2>Ejemplos resueltos</h2></div>
          <p className="hint">Haz clic en cada tarjeta para ver el desarrollo completo.</p>
          <div className="ex-grid">
            {ejemplos.map((ej, i) => <EjCard key={i} ej={ej} prefix={`EJEMPLO ${i + 1}  ·  `} />)}
          </div>
        </div>

        <div className="divider" />

        {/* ── 06 EJERCICIOS POR TIPO ────────────────────────────────────── */}
        <div className="section">
          <div className="sec-hd"><span className="sec-num">06</span><h2>Ejercicios por tipo</h2></div>
          <p className="hint">15 ejercicios agrupados por habilidad. Si te equivocas, aparece la solución paso a paso.</p>
          <div className="accordion">
            <Acordeon titulo="Conversión — fracciones, decimales y porcentajes" count={5}>
              {ejerciciosConversion.map((q, i) => <QzCard key={i} q={q} label={`Ejercicio ${i + 1} de 5`} />)}
            </Acordeon>
            <Acordeon titulo="Proporciones y regla de tres" count={5}>
              {ejerciciosProporciones.map((q, i) => <QzCard key={i} q={q} label={`Ejercicio ${i + 1} de 5`} />)}
            </Acordeon>
            <Acordeon titulo="Problemas de aplicación" count={5}>
              {ejerciciosAplicacion.map((q, i) => <QzCard key={i} q={q} label={`Ejercicio ${i + 1} de 5`} />)}
            </Acordeon>
          </div>
        </div>

        <div className="divider" />

        {/* ── 07 MINI-EXAMEN ────────────────────────────────────────────── */}
        <div className="section">
          <div className="sec-hd"><span className="sec-num">07</span><h2>Mini-examen de práctica</h2></div>
          <p className="hint">12 preguntas al estilo EXANI-I que integran todos los conceptos del tema.</p>
          {miniExamen.map((q, i) => <QzCard key={i} q={q} label={`Pregunta ${i + 1} de ${miniExamen.length}`} />)}
        </div>

        {/* ── RESUMEN RÁPIDO ────────────────────────────────────────────── */}
        <div className="divider" />
        <div className="card" style={{ borderColor: "rgba(245,200,66,0.18)" }}>
          <h3>📌 Resumen rápido para el examen</h3>
          <ul style={{ marginTop: 10 }}>
            <li><strong>Fracción → decimal:</strong> numerador ÷ denominador.</li>
            <li><strong>Decimal → fracción:</strong> escribe sobre 10ⁿ (n = cifras decimales) y simplifica.</li>
            <li><strong>Fracción → %:</strong> multiplica por 100.</li>
            <li><strong>% → fracción:</strong> escribe sobre 100 y simplifica.</li>
            <li><strong>Proporción:</strong> <M>{String.raw`a/b = c/d \Leftrightarrow ad = bc`}</M> (producto cruzado).</li>
            <li><span className="type-tag type-dir" style={{ marginRight: 8 }}>Directa</span>más de una → más de la otra. Iguala fracciones.</li>
            <li><span className="type-tag type-inv" style={{ marginRight: 8 }}>Inversa</span>más de una → menos de la otra. Iguala productos.</li>
            <li><strong>% de un número:</strong> multiplica por el decimal (35% → × 0.35).</li>
            <li><strong>Descuento:</strong> precio × (1 − tasa). <strong>Aumento:</strong> precio × (1 + tasa).</li>
          </ul>
        </div>

      </div>
    </div>
  );
}
