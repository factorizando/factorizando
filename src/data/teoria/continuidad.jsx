import { useState, useEffect } from "react";
import { M, MB, StepRow, EjCard, QzCard, SHARED_STYLE } from "./shared";

/* ── CONTINUIDAD-SPECIFIC STYLES ─────────────────────────────────────────────── */

const CONTINUIDAD_STYLE = `
  .cond-grid { display: grid; gap: 12px; margin-top: 6px; }
  .cond-row { display: flex; align-items: flex-start; gap: 16px; padding: 16px 20px; background: rgba(0,0,0,0.3); border: 1px solid rgba(255,255,255,0.06); border-radius: 8px; transition: border-color 0.2s; }
  .cond-row:hover { border-color: rgba(245,200,66,0.2); }
  .cond-num { flex-shrink: 0; width: 28px; height: 28px; background: linear-gradient(135deg,#c8960a,#f5c842); color: #0d0d0f; border-radius: 50%; font-family: 'IBM Plex Mono', monospace; font-size: 12px; font-weight: 700; display: flex; align-items: center; justify-content: center; margin-top: 2px; }
  .cond-body { flex: 1; }
  .cond-title { font-family: 'Playfair Display', serif; font-size: 16px; color: #f0ece3; margin-bottom: 6px; font-style: italic; }
  .cond-desc { font-size: 14.5px; color: #a09880; line-height: 1.7; font-weight: 300; }
  .cond-math { margin-top: 8px; }
  .disc-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 14px; margin: 24px 0; }
  @media(max-width:580px){ .disc-grid { grid-template-columns: 1fr; } }
  .disc-panel { background: rgba(0,0,0,0.35); border: 1px solid rgba(255,255,255,0.07); border-radius: 10px; padding: 18px 14px 14px; text-align: center; transition: border-color 0.2s; }
  .disc-panel:hover { border-color: rgba(245,200,66,0.22); }
  .disc-name { font-family: 'Playfair Display', serif; font-size: 15px; color: #f5c842; margin-bottom: 4px; font-style: italic; }
  .disc-sub  { font-family: 'IBM Plex Mono', monospace; font-size: 9.5px; letter-spacing: 0.18em; color: rgba(245,200,66,0.45); text-transform: uppercase; margin-bottom: 14px; }
  .disc-desc { font-size: 13px; color: #7a756e; line-height: 1.6; margin-top: 10px; font-weight: 300; }
  .type-tag { display: inline-block; font-family: 'IBM Plex Mono', monospace; font-size: 10px; letter-spacing: 0.15em; padding: 3px 10px; border-radius: 2px; text-transform: uppercase; }
  .type-evit  { background: rgba(245,200,66,0.1); color: #f5c842; border: 1px solid rgba(245,200,66,0.25); }
  .type-salto { background: rgba(100,190,255,0.1); color: #7acfff; border: 1px solid rgba(100,190,255,0.25); }
  .type-inf   { background: rgba(255,110,100,0.1); color: #ff9090; border: 1px solid rgba(255,110,100,0.25); }
  .interval-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-top: 10px; }
  @media(max-width:520px){ .interval-grid { grid-template-columns: 1fr; } }
  .interval-card { background: rgba(0,0,0,0.3); border: 1px solid rgba(255,255,255,0.07); border-radius: 8px; padding: 18px 20px; }
  .interval-card h4 { font-family: 'IBM Plex Mono', monospace; font-size: 11px; letter-spacing: 0.15em; color: rgba(245,200,66,0.75); text-transform: uppercase; margin-bottom: 10px; }
  .interval-card p { font-size: 14px; color: #a09880; line-height: 1.7; font-weight: 300; }
`;

/* ── DISCONTINUITY GRAPH (3 panels in one SVG) ───────────────────────────────── */

function DiscontinuityGraphs() {
  // Shared coordinate helpers per panel
  // Panel offsets: px = left edge of plot area for each panel
  // Each panel: viewBox width per panel ≈ 190, total SVG: 590 x 155
  // Axes: x-axis at y=115, y-axis at x=px+18
  // tx(x,px,xSpan) = px+18 + (x/xSpan)*147
  // Axis color for all
  const ax = "rgba(200,195,185,0.32)";
  const gold = "#f5c842";
  const blue = "#60b8d8";
  const red  = "#ff8888";

  // ── Panel 1 — Evitable ──
  // f(x)=x+1, x∈[0,2.5], y∈[0,3.5]
  // tx1 = 18 + (x/2.5)*147 = 18 + 58.8x
  // ty1 = 115 - (y/3.5)*95 = 115 - 27.14y
  const p1x = 0;
  const tx1 = x => p1x + 18 + (x / 2.5) * 147;
  const ty1 = y => 115 - (y / 3.5) * 95;
  // Seg1: x=0→1.4, f=1→2.4
  const s1x1 = tx1(0),   s1y1 = ty1(1);       // (18, 87.86)
  const s1x2 = tx1(1.4), s1y2 = ty1(2.4);     // (100.3, 50)
  // hole at (1.5, 2.5)
  const hx1 = tx1(1.5),  hy1 = ty1(2.5);      // (106.2, 42.14)
  // dot at (1.5, 3.2) = wrong f(a)
  const dx1 = tx1(1.5),  dy1 = ty1(3.2);      // (106.2, 28.15)
  // Seg2: x=1.6→2.5, f=2.6→3.5
  const s2x1 = tx1(1.6), s2y1 = ty1(2.6);     // (112.1, 44.43)
  const s2x2 = tx1(2.5), s2y2 = ty1(3.5);     // (165, 20)

  // ── Panel 2 — Salto ──
  // f1=1 for x<1.5, f2=3 for x≥1.5, y∈[0,4]
  // tx2 = 200 + 18 + (x/2.5)*147 = 218 + 58.8x
  // ty2 = 115 - (y/4)*95 = 115 - 23.75y
  const p2x = 200;
  const tx2 = x => p2x + 18 + (x / 2.5) * 147;
  const ty2 = y => 115 - (y / 4) * 95;
  const ly1_2 = ty2(1);   // 91.25 — y=1 left piece
  const ly2_2 = ty2(3);   // 43.75 — y=3 right piece
  const jx2   = tx2(1.5); // jump x
  // right piece start / left piece end
  const lx1_2  = tx2(0);   const rx2_2 = tx2(2.5);

  // ── Panel 3 — Infinita ──
  // f(x)=1/(x−1.5), asymptote at x=1.5
  // y range [−3.5, 3.5], x-axis at y=62.5 of SVG
  // ty3(y) = 62.5 - (y/3.5)*47.5
  // tx3 = 400 + 18 + (x/2.5)*147
  const p3x = 400;
  const tx3 = x  => p3x + 18 + (x / 2.5) * 147;
  const ty3 = y  => 62.5 - (y / 3.5) * 47.5;
  // left branch points (x<1.5, f<0)
  const lb = [
    [0.0,  1 / (0.0  - 1.5)],  // -0.667
    [0.6,  1 / (0.6  - 1.5)],  // -1.111
    [1.0,  1 / (1.0  - 1.5)],  // -2
    [1.2,  1 / (1.2  - 1.5)],  // -3.333 → clip -3.5
    [1.35, -3.5],
  ].map(([x, y]) => `${tx3(x).toFixed(1)},${ty3(Math.max(-3.5, y)).toFixed(1)}`).join(" ");
  // right branch points (x>1.5, f>0)
  const rb = [
    [1.65, 3.5],
    [1.8,  1 / (1.8 - 1.5)],   // 3.333
    [2.0,  1 / (2.0 - 1.5)],   // 2
    [2.5,  1 / (2.5 - 1.5)],   // 1
  ].map(([x, y]) => `${tx3(x).toFixed(1)},${ty3(Math.min(3.5, y)).toFixed(1)}`).join(" ");
  const asym3 = tx3(1.5);

  // Shared axis helpers
  const yBot = 115, yTop = 15;
  const xLeft1 = p1x + 18, xRight1 = p1x + 165;
  const xLeft2 = p2x + 18, xRight2 = p2x + 165;
  const xLeft3 = p3x + 18, xRight3 = p3x + 165;

  return (
    <div className="disc-grid">
      {/* ── Panel 1: Evitable ── */}
      <div className="disc-panel">
        <div className="disc-name">Evitable</div>
        <div className="disc-sub">Removible</div>
        <svg viewBox="0 0 183 140" style={{ width: "100%", display: "block" }}>
          {/* axes */}
          <line x1={xLeft1} y1={yBot} x2={xRight1+8} y2={yBot} stroke={ax} strokeWidth="1.4"/>
          <line x1={xLeft1} y1={yBot+5} x2={xLeft1} y2={yTop} stroke={ax} strokeWidth="1.4"/>
          {/* function segments */}
          <line x1={s1x1} y1={s1y1} x2={s1x2} y2={s1y2} stroke={blue} strokeWidth="2.4" strokeLinecap="round"/>
          <line x1={s2x1} y1={s2y1} x2={s2x2} y2={s2y2} stroke={blue} strokeWidth="2.4" strokeLinecap="round"/>
          {/* dashed guides */}
          <line x1={hx1} y1={yBot} x2={hx1} y2={hy1+6} stroke={gold} strokeWidth="1" strokeDasharray="4,3" opacity="0.5"/>
          <line x1={xLeft1} y1={hy1} x2={hx1-6} y2={hy1} stroke={gold} strokeWidth="1" strokeDasharray="4,3" opacity="0.5"/>
          <line x1={xLeft1} y1={dy1} x2={dx1-6} y2={dy1} stroke={gold} strokeWidth="1" strokeDasharray="4,3" opacity="0.35"/>
          {/* open circle = hole */}
          <circle cx={hx1} cy={hy1} r="4.5" fill="#0d0d0f" stroke={blue} strokeWidth="2"/>
          {/* filled dot = wrong f(a) */}
          <circle cx={dx1} cy={dy1} r="4.5" fill={blue}/>
          {/* labels */}
          <text x={hx1} y={yBot+13} textAnchor="middle" fill={gold} fontSize="11" fontFamily="IBM Plex Mono,monospace">a</text>
          <text x={xLeft1-4} y={hy1+4} textAnchor="end" fill={gold} fontSize="10" fontFamily="IBM Plex Mono,monospace">L</text>
          <text x={xLeft1-4} y={dy1+4} textAnchor="end" fill="rgba(200,195,185,0.5)" fontSize="9" fontFamily="IBM Plex Mono,monospace">f(a)</text>
        </svg>
        <p className="disc-desc">El límite existe, pero <em>f(a) ≠ L</em> o no está definida. Puede «repararse» redefiniendo el valor.</p>
      </div>

      {/* ── Panel 2: Salto ── */}
      <div className="disc-panel">
        <div className="disc-name">Salto</div>
        <div className="disc-sub">Discontinuidad de salto</div>
        <svg viewBox="0 0 383 140" style={{ width: "100%", display: "block" }}>
          {/* axes */}
          <line x1={xLeft2} y1={yBot} x2={xRight2+8} y2={yBot} stroke={ax} strokeWidth="1.4"/>
          <line x1={xLeft2} y1={yBot+5} x2={xLeft2} y2={yTop} stroke={ax} strokeWidth="1.4"/>
          {/* dashed vertical at jump */}
          <line x1={jx2} y1={yTop} x2={jx2} y2={yBot} stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="4,3"/>
          {/* left piece: y=1 */}
          <line x1={lx1_2} y1={ly1_2} x2={jx2-1} y2={ly1_2} stroke={blue} strokeWidth="2.4" strokeLinecap="round"/>
          {/* open circle end of left */}
          <circle cx={jx2} cy={ly1_2} r="4.5" fill="#0d0d0f" stroke={blue} strokeWidth="2"/>
          {/* right piece: y=3 */}
          <line x1={jx2} y1={ly2_2} x2={rx2_2} y2={ly2_2} stroke={blue} strokeWidth="2.4" strokeLinecap="round"/>
          {/* filled dot start of right */}
          <circle cx={jx2} cy={ly2_2} r="4.5" fill={blue}/>
          {/* dashed guides */}
          <line x1={xLeft2} y1={ly1_2} x2={jx2-6} y2={ly1_2} stroke={gold} strokeWidth="1" strokeDasharray="4,3" opacity="0.4"/>
          <line x1={xLeft2} y1={ly2_2} x2={jx2-6} y2={ly2_2} stroke={gold} strokeWidth="1" strokeDasharray="4,3" opacity="0.4"/>
          {/* labels */}
          <text x={jx2} y={yBot+13} textAnchor="middle" fill={gold} fontSize="11" fontFamily="IBM Plex Mono,monospace">a</text>
          <text x={xLeft2-4} y={ly1_2+4} textAnchor="end" fill={gold} fontSize="10" fontFamily="IBM Plex Mono,monospace">L₁</text>
          <text x={xLeft2-4} y={ly2_2+4} textAnchor="end" fill={gold} fontSize="10" fontFamily="IBM Plex Mono,monospace">L₂</text>
        </svg>
        <p className="disc-desc">Los límites laterales existen pero son distintos: <em>L₁ ≠ L₂</em>. El límite bilateral no existe.</p>
      </div>

      {/* ── Panel 3: Infinita ── */}
      <div className="disc-panel">
        <div className="disc-name">Infinita</div>
        <div className="disc-sub">Esencial</div>
        <svg viewBox="0 0 583 140" style={{ width: "100%", display: "block" }}>
          {/* x-axis at y=62.5 */}
          <line x1={xLeft3} y1={62.5} x2={xRight3+8} y2={62.5} stroke={ax} strokeWidth="1.4"/>
          {/* y-axis */}
          <line x1={xLeft3} y1={yBot} x2={xLeft3} y2={yTop} stroke={ax} strokeWidth="1.4"/>
          {/* asymptote */}
          <line x1={asym3} y1={yTop} x2={asym3} y2={yBot} stroke={red} strokeWidth="1.2" strokeDasharray="5,3" opacity="0.6"/>
          {/* left branch */}
          <polyline points={lb} fill="none" stroke={blue} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
          {/* right branch */}
          <polyline points={rb} fill="none" stroke={blue} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
          {/* labels */}
          <text x={asym3} y={62.5+16} textAnchor="middle" fill={gold} fontSize="11" fontFamily="IBM Plex Mono,monospace">a</text>
          <text x={asym3+5} y={yTop+8} fill={red} fontSize="9" fontFamily="IBM Plex Mono,monospace" opacity="0.7">asíntota</text>
        </svg>
        <p className="disc-desc">Al menos uno de los límites laterales es <em>±∞</em>. No puede repararse.</p>
      </div>
    </div>
  );
}

/* ── DATA ────────────────────────────────────────────────────────────────────── */

const condiciones = [
  {
    num: 1, titulo: "f(a) existe",
    desc: "La función debe estar definida en el punto x = a. Si hay división por cero, raíz negativa u otra indeterminación en x = a, la condición falla.",
    math: String.raw`f(a) \in \mathbb{R}`,
  },
  {
    num: 2, titulo: "El límite existe en x = a",
    desc: "Ambos límites laterales deben existir y ser iguales entre sí.",
    math: String.raw`\displaystyle\lim_{x\to a^-}f(x) = \lim_{x\to a^+}f(x) = L`,
  },
  {
    num: 3, titulo: "El límite coincide con f(a)",
    desc: "El valor de la función en el punto debe ser igual al límite. Las tres condiciones deben cumplirse simultáneamente.",
    math: String.raw`\displaystyle\lim_{x\to a}f(x) = f(a)`,
  },
];

const ejemplos = [
  {
    titulo: "Verificar continuidad — polinomio",
    prob: String.raw`f(x)=x^2+2x-3 \text{ en } x=1`,
    steps: [
      { pre: "Cond. 1 — f(1) existe: ", math: String.raw`f(1)=1+2-3=0`, post: " ✓" },
      { pre: "Cond. 2 — el límite existe: polinomio → ", math: String.raw`\displaystyle\lim_{x\to1}(x^2+2x-3)=0`, post: " ✓" },
      { pre: "Cond. 3 — límite = f(1): ", math: String.raw`0=0`, post: " ✓" },
      { pre: "Las tres condiciones se cumplen. La función es continua en x = 1." },
    ],
    res: String.raw`f \text{ es continua en } x=1`,
  },
  {
    titulo: "Discontinuidad evitable",
    prob: String.raw`f(x)=\dfrac{x^2-4}{x-2} \text{ en } x=2`,
    steps: [
      { pre: "Cond. 1 — f(2): denominador = 0 → ", math: String.raw`f(2)`, post: " no está definida. ✗" },
      { pre: "Sin embargo, el límite existe: factorizamos ", math: String.raw`\dfrac{(x-2)(x+2)}{x-2}=x+2` },
      { pre: "Entonces: ", math: String.raw`\displaystyle\lim_{x\to2}f(x)=4` },
      { pre: "Discontinuidad evitable en x = 2. Se repara definiendo f(2) = 4." },
    ],
    res: String.raw`\text{Discontinuidad evitable: } \lim_{x\to2}f(x)=4`,
  },
  {
    titulo: "Función por tramos — verificar continuidad",
    prob: String.raw`f(x)=\begin{cases}x^2+1 & x<1 \\ 3x-1 & x\geq1\end{cases} \text{ en } x=1`,
    steps: [
      { pre: "Cond. 1 — f(1): usamos la rama ", math: String.raw`x\geq1`, post: ":  ", math2: String.raw`f(1)=3(1)-1=2`, post2: " ✓" },
      { pre: "Cond. 2 — límite lateral izquierdo: ", math: String.raw`\displaystyle\lim_{x\to1^-}(x^2+1)=2`, post: " ✓" },
      { pre: "Límite lateral derecho: ", math: String.raw`\displaystyle\lim_{x\to1^+}(3x-1)=2`, post: " ✓ — ambos iguales." },
      { pre: "Cond. 3 — límite = f(1): ", math: String.raw`2=2`, post: " ✓" },
    ],
    res: String.raw`f \text{ es continua en } x=1`,
  },
  {
    titulo: "Encontrar k para que sea continua",
    prob: String.raw`f(x)=\begin{cases}x^2+k & x\leq2 \\ 3x-1 & x>2\end{cases}`,
    steps: [
      { pre: "Para continuidad en x = 2, los dos límites laterales deben ser iguales a f(2)." },
      { pre: "Desde la izquierda: ", math: String.raw`f(2)=4+k` },
      { pre: "Desde la derecha: ", math: String.raw`\displaystyle\lim_{x\to2^+}(3x-1)=5` },
      { pre: "Igualamos: ", math: String.raw`4+k=5\;\Rightarrow\;k=1` },
    ],
    res: String.raw`k=1`,
  },
];

const ejerciciosVerificar = [
  {
    q: "¿Es continua en el punto indicado?",
    prob: String.raw`f(x)=x^3-2x \text{ en } x=1`,
    opts: [String.raw`\text{Sí, continua}`, String.raw`\text{No, discontinuidad evitable}`, String.raw`\text{No, discontinuidad de salto}`, String.raw`\text{No, discontinuidad infinita}`],
    ans: 0,
    exp: "Polinomio: continuo en todo ℝ. f(1)=−1, lim=−1 ✓",
    steps: [
      { pre: "f(1) = 1−2 = −1 ✓" },
      { pre: "Polinomio: lim = −1 ✓" },
      { pre: "Límite = f(1) ✓ → continua." },
    ],
  },
  {
    q: "¿Es continua en el punto indicado?",
    prob: String.raw`f(x)=\dfrac{1}{x-3} \text{ en } x=3`,
    opts: [String.raw`\text{Sí, continua}`, String.raw`\text{No, discontinuidad evitable}`, String.raw`\text{No, discontinuidad de salto}`, String.raw`\text{No, discontinuidad infinita}`],
    ans: 3,
    exp: "f(3) no definida; el límite es ±∞.",
    steps: [
      { pre: "Cond. 1: f(3) = 1/0 → no definida ✗" },
      { pre: "El límite no es finito → discontinuidad infinita." },
    ],
  },
  {
    q: "¿Es continua en el punto indicado?",
    prob: String.raw`f(x)=\sqrt{x+4} \text{ en } x=0`,
    opts: [String.raw`\text{Sí, continua}`, String.raw`\text{No, discontinuidad evitable}`, String.raw`\text{No, discontinuidad de salto}`, String.raw`\text{No, discontinuidad infinita}`],
    ans: 0,
    exp: "f(0)=√4=2, lim=2, iguales ✓",
    steps: [
      { pre: "f(0) = √4 = 2 ✓" },
      { pre: "Lim = √4 = 2 ✓" },
      { pre: "Límite = f(0) → continua." },
    ],
  },
  {
    q: "¿Es continua en x = 1?",
    prob: String.raw`f(x)=\begin{cases}x+2 & x\neq1 \\ 5 & x=1\end{cases}`,
    opts: [String.raw`\text{Sí, continua}`, String.raw`\text{No — lim}\neq f(1)`, String.raw`\text{No, lim no existe}`, String.raw`\text{No, f(1) no definida}`],
    ans: 1,
    exp: "f(1)=5 pero lim_{x→1}(x+2)=3. Cond. 3 falla.",
    steps: [
      { pre: "f(1) = 5 ✓" },
      { pre: "lim_{x→1}(x+2) = 3 ✓" },
      { pre: "3 ≠ 5 → discontinuidad evitable." },
    ],
  },
  {
    q: "¿Es continua en x = 2?",
    prob: String.raw`f(x)=\begin{cases}x^2-1 & x<2 \\ 4 & x\geq2\end{cases}`,
    opts: [String.raw`\text{Sí, continua}`, String.raw`\text{No — lim izq}\neq f(2)`, String.raw`\text{No, f(2) no existe}`, String.raw`\text{No, lim no existe}`],
    ans: 1,
    exp: "lim izq = 3 ≠ 4 = f(2). Cond. 3 falla.",
    steps: [
      { pre: "f(2) = 4 ✓" },
      { pre: "lim izq = (2)²−1 = 3" },
      { pre: "3 ≠ 4 → discontinuidad evitable." },
    ],
  },
];

const ejerciciosK = [
  {
    q: "Halla k para que f sea continua en x = 2:",
    prob: String.raw`f(x)=\begin{cases}kx & x\leq2 \\ x+k & x>2\end{cases}`,
    opts: [String.raw`k=1`, String.raw`k=2`, String.raw`k=3`, String.raw`k=4`],
    ans: 1,
    exp: "2k = 2+k → k = 2.",
    steps: [
      { pre: "Igualamos límites: ", math: String.raw`\lim_{x\to2^-}kx = 2k` },
      { pre: "Límite derecho: ", math: String.raw`\lim_{x\to2^+}(x+k) = 2+k` },
      { pre: "Resolvemos: ", math: String.raw`2k=2+k\;\Rightarrow\;k=2` },
    ],
  },
  {
    q: "Halla k para que f sea continua en x = 0:",
    prob: String.raw`f(x)=\begin{cases}x+k & x<0 \\ kx+3 & x\geq0\end{cases}`,
    opts: [String.raw`k=1`, String.raw`k=2`, String.raw`k=3`, String.raw`k=4`],
    ans: 2,
    exp: "lim izq = k; f(0) = 3 → k = 3.",
    steps: [
      { pre: "lim izq: ", math: String.raw`\lim_{x\to0^-}(x+k)=k` },
      { pre: "f(0) = k(0)+3 = 3" },
      { pre: "Igualamos: ", math: String.raw`k=3` },
    ],
  },
  {
    q: "Halla k para que f sea continua en x = 2:",
    prob: String.raw`f(x)=\begin{cases}x^2+k & x<2 \\ 3x-1 & x\geq2\end{cases}`,
    opts: [String.raw`k=0`, String.raw`k=1`, String.raw`k=2`, String.raw`k=3`],
    ans: 1,
    exp: "4+k = 5 → k = 1.",
    steps: [
      { pre: "lim izq: ", math: String.raw`(2)^2+k=4+k` },
      { pre: "f(2): ", math: String.raw`3(2)-1=5` },
      { pre: "Igualamos: ", math: String.raw`4+k=5\;\Rightarrow\;k=1` },
    ],
  },
  {
    q: "Halla k para que f sea continua en x = 3:",
    prob: String.raw`f(x)=\begin{cases}kx & x<3 \\ 2x-3 & x\geq3\end{cases}`,
    opts: [String.raw`k=0`, String.raw`k=1`, String.raw`k=2`, String.raw`k=3`],
    ans: 1,
    exp: "3k = 3 → k = 1.",
    steps: [
      { pre: "lim izq: ", math: String.raw`3k` },
      { pre: "f(3): ", math: String.raw`2(3)-3=3` },
      { pre: "Igualamos: ", math: String.raw`3k=3\;\Rightarrow\;k=1` },
    ],
  },
  {
    q: "Halla k para que f sea continua en x = 2:",
    prob: String.raw`f(x)=\begin{cases}x+2k & x\leq2 \\ k^2+x & x>2\end{cases}`,
    opts: [String.raw`k=0`, String.raw`k=1`, String.raw`k=2`, String.raw`k=-2`],
    ans: 2,
    exp: "2+2k = k²+2 → 2k=k² → k=2 (k≠0).",
    steps: [
      { pre: "f(2) = 2+2k" },
      { pre: "lim der: ", math: String.raw`k^2+2` },
      { pre: "Ecuación: ", math: String.raw`2+2k=k^2+2\;\Rightarrow\;2k=k^2` },
      { pre: "Factorizamos: ", math: String.raw`k(k-2)=0\;\Rightarrow\;k=0\text{ o }k=2` },
      { pre: "Si k=0 la función es trivial; la respuesta útil es k = 2." },
    ],
  },
];

const ejerciciosClasificar = [
  {
    q: "Identifica el tipo de discontinuidad en x = 1:",
    prob: String.raw`f(x)=\dfrac{x^2-1}{x-1}`,
    opts: [String.raw`\text{Evitable}`, String.raw`\text{Salto}`, String.raw`\text{Infinita}`, String.raw`\text{No hay discontinuidad}`],
    ans: 0,
    exp: "f(1) no existe, pero lim = 2 (finito). Evitable.",
    steps: [
      { pre: "f(1): denominador = 0 → no definida." },
      { pre: "Factorizamos: ", math: String.raw`x+1`, post: ". lim_{x→1} = 2 (finito)." },
      { pre: "Límite existe pero f(1) no → discontinuidad evitable." },
    ],
  },
  {
    q: "¿Qué tipo de discontinuidad tiene en x = 2?",
    prob: String.raw`f(x)=\begin{cases}3 & x<2 \\ 7 & x\geq2\end{cases}`,
    opts: [String.raw`\text{Evitable}`, String.raw`\text{Salto}`, String.raw`\text{Infinita}`, String.raw`\text{Ninguna}`],
    ans: 1,
    exp: "lim izq=3 ≠ 7=lim der. Salto.",
    steps: [
      { pre: "lim izq = 3,  lim der = 7" },
      { pre: "Los límites existen pero son distintos → discontinuidad de salto." },
    ],
  },
  {
    q: "Clasifica la discontinuidad en x = −3:",
    prob: String.raw`f(x)=\dfrac{1}{x+3}`,
    opts: [String.raw`\text{Evitable}`, String.raw`\text{Salto}`, String.raw`\text{Infinita}`, String.raw`\text{No hay discontinuidad}`],
    ans: 2,
    exp: "f(−3) no definida; lim = ±∞. Infinita.",
    steps: [
      { pre: "f(−3) = 1/0 → no existe." },
      { pre: "lim = ±∞ → discontinuidad infinita." },
    ],
  },
  {
    q: "¿Qué tipo de discontinuidad tiene en x = 0?",
    prob: String.raw`f(x)=\begin{cases}x & x\leq0 \\ x+4 & x>0\end{cases}`,
    opts: [String.raw`\text{Evitable}`, String.raw`\text{Salto}`, String.raw`\text{Infinita}`, String.raw`\text{Ninguna}`],
    ans: 1,
    exp: "lim izq=0, lim der=4. Los límites son distintos → salto.",
    steps: [
      { pre: "lim izq = 0,  lim der = 4" },
      { pre: "0 ≠ 4 → discontinuidad de salto." },
    ],
  },
  {
    q: "Clasifica la discontinuidad en x = 2:",
    prob: String.raw`f(x)=\begin{cases}x^2 & x\neq2 \\ 5 & x=2\end{cases}`,
    opts: [String.raw`\text{Evitable}`, String.raw`\text{Salto}`, String.raw`\text{Infinita}`, String.raw`\text{No hay discontinuidad}`],
    ans: 0,
    exp: "lim = 4 ≠ 5 = f(2). El límite existe: evitable.",
    steps: [
      { pre: "f(2) = 5 ✓" },
      { pre: "lim_{x→2} x² = 4" },
      { pre: "4 ≠ 5 → discontinuidad evitable." },
    ],
  },
];

const miniExamen = [
  {
    q: "¿Es continua la función en x = 3?",
    prob: String.raw`f(x)=x^3-2x`,
    opts: [String.raw`\text{Sí}`, String.raw`\text{No — no definida}`, String.raw`\text{No — salto}`, String.raw`\text{No — infinita}`],
    ans: 0,
    exp: "Polinomio → continuo en todo ℝ. f(3)=21, lim=21 ✓",
    steps: [{ pre: "Todo polinomio es continuo en ℝ. f(3)=27−6=21 ✓" }],
  },
  {
    q: "¿Qué tipo de discontinuidad tiene en x = −3?",
    prob: String.raw`f(x)=\dfrac{x^2-9}{x+3}`,
    opts: [String.raw`\text{Ninguna}`, String.raw`\text{Evitable}`, String.raw`\text{Salto}`, String.raw`\text{Infinita}`],
    ans: 1,
    exp: "f(−3) no definida pero lim = −6 (finito). Evitable.",
    steps: [
      { pre: "f(−3): denominador = 0 → no definida." },
      { pre: "Factorizamos: ", math: String.raw`\dfrac{(x-3)(x+3)}{x+3}=x-3` },
      { pre: "lim = −3−3 = −6 (finito) → evitable." },
    ],
  },
  {
    q: "¿Cuántas condiciones deben cumplirse para que f sea continua en x = a?",
    prob: String.raw``,
    opts: [String.raw`1`, String.raw`2`, String.raw`3`, String.raw`4`],
    ans: 2,
    exp: "Las tres condiciones: f(a) existe, lim existe, lim = f(a).",
    steps: [
      { pre: "1. f(a) definida." },
      { pre: "2. lim_{x→a} f(x) existe." },
      { pre: "3. lim = f(a)." },
    ],
  },
  {
    q: "Halla k para que f sea continua en x = 2:",
    prob: String.raw`f(x)=\begin{cases}2x+k & x<2 \\ x^2-1 & x\geq2\end{cases}`,
    opts: [String.raw`k=-1`, String.raw`k=0`, String.raw`k=1`, String.raw`k=3`],
    ans: 0,
    exp: "4+k = 3 → k = −1.",
    steps: [
      { pre: "lim izq: ", math: String.raw`2(2)+k=4+k` },
      { pre: "f(2): ", math: String.raw`4-1=3` },
      { pre: "Ecuación: ", math: String.raw`4+k=3\;\Rightarrow\;k=-1` },
    ],
  },
  {
    q: "¿Qué tipo de discontinuidad tiene en x = 1?",
    prob: String.raw`f(x)=\begin{cases}3 & x<1 \\ 7 & x\geq1\end{cases}`,
    opts: [String.raw`\text{Evitable}`, String.raw`\text{Salto}`, String.raw`\text{Infinita}`, String.raw`\text{Ninguna}`],
    ans: 1,
    exp: "lim izq=3 ≠ 7=lim der → salto.",
    steps: [
      { pre: "lim izq = 3,  lim der = 7." },
      { pre: "Límites desiguales → discontinuidad de salto." },
    ],
  },
  {
    q: "¿Qué tipo de discontinuidad tiene en x = 4?",
    prob: String.raw`f(x)=\dfrac{1}{x-4}`,
    opts: [String.raw`\text{Evitable}`, String.raw`\text{Salto}`, String.raw`\text{Infinita}`, String.raw`\text{Ninguna}`],
    ans: 2,
    exp: "f(4) no definida; lim = ±∞. Discontinuidad infinita.",
    steps: [
      { pre: "Denominador = 0 en x=4 → no definida." },
      { pre: "lim → ±∞ → discontinuidad infinita." },
    ],
  },
  {
    q: "¿Es continua en x = 1?",
    prob: String.raw`f(x)=\begin{cases}x^2 & x\leq1 \\ 2x-1 & x>1\end{cases}`,
    opts: [String.raw`\text{Sí}`, String.raw`\text{No — lim no existe}`, String.raw`\text{No — f(1) no existe}`, String.raw`\text{No — lim}\neq f(1)`],
    ans: 0,
    exp: "f(1)=1, lim izq=1, lim der=1 → continua.",
    steps: [
      { pre: "f(1) = 1 ✓" },
      { pre: "lim izq = 1,  lim der = 1 ✓" },
      { pre: "lim = f(1) ✓ → continua." },
    ],
  },
  {
    q: "Halla k para que f sea continua en x = 3:",
    prob: String.raw`f(x)=\begin{cases}kx & x<3 \\ 2x-3 & x\geq3\end{cases}`,
    opts: [String.raw`k=0`, String.raw`k=1`, String.raw`k=2`, String.raw`k=3`],
    ans: 1,
    exp: "3k = 3 → k = 1.",
    steps: [
      { pre: "lim izq: 3k;  f(3) = 3." },
      { pre: "Ecuación: ", math: String.raw`3k=3\;\Rightarrow\;k=1` },
    ],
  },
  {
    q: "¿Qué tipo de discontinuidad puede eliminarse redefiniendo f(a)?",
    prob: String.raw``,
    opts: [String.raw`\text{Salto}`, String.raw`\text{Infinita}`, String.raw`\text{Evitable}`, String.raw`\text{Ninguna puede eliminarse}`],
    ans: 2,
    exp: "La discontinuidad evitable: el límite existe, solo falta redefinir f(a)=L.",
    steps: [{ pre: "Si lim existe pero f(a) ≠ lim, basta redefinir f(a) = L para restaurar continuidad." }],
  },
  {
    q: "¿Es continua en x = 0?",
    prob: String.raw`f(x)=\begin{cases}x+1 & x<0 \\ x+3 & x\geq0\end{cases}`,
    opts: [String.raw`\text{Sí}`, String.raw`\text{No — salto}`, String.raw`\text{No — infinita}`, String.raw`\text{No — evitable}`],
    ans: 1,
    exp: "lim izq=1, f(0)=3. Límites distintos → salto.",
    steps: [
      { pre: "lim izq = 0+1 = 1" },
      { pre: "f(0) = 0+3 = 3" },
      { pre: "1 ≠ 3 → discontinuidad de salto." },
    ],
  },
  {
    q: "¿Qué valor de f(2) haría continua la función?",
    prob: String.raw`f(x)=\dfrac{x^2-4}{x-2},\quad x\neq2`,
    opts: [String.raw`2`, String.raw`4`, String.raw`-4`, String.raw`0`],
    ans: 1,
    exp: "lim = x+2 = 4. Para continuidad: f(2) = 4.",
    steps: [
      { pre: "Factorizamos: ", math: String.raw`\dfrac{(x-2)(x+2)}{x-2}=x+2` },
      { pre: "lim_{x→2}(x+2) = 4." },
      { pre: "Definir f(2) = 4 elimina la discontinuidad." },
    ],
  },
  {
    q: "Halla k para que f sea continua en x = 1:",
    prob: String.raw`f(x)=\begin{cases}x^2+k & x\leq1 \\ 3x+1 & x>1\end{cases}`,
    opts: [String.raw`k=1`, String.raw`k=2`, String.raw`k=3`, String.raw`k=4`],
    ans: 2,
    exp: "1+k = 4 → k = 3.",
    steps: [
      { pre: "f(1) = 1+k" },
      { pre: "lim der: ", math: String.raw`3(1)+1=4` },
      { pre: "Ecuación: ", math: String.raw`1+k=4\;\Rightarrow\;k=3` },
    ],
  },
];

/* ── TYPE TAGS ───────────────────────────────────────────────────────────────── */

function TypeTag({ type }) {
  const cfg = {
    evitable: ["type-tag type-evit",  "Evitable"],
    salto:    ["type-tag type-salto", "Salto"],
    infinita: ["type-tag type-inf",   "Infinita / Esencial"],
  };
  const [cls, label] = cfg[type] || ["type-tag", type];
  return <span className={cls}>{label}</span>;
}

/* ── STYLE INJECTION ─────────────────────────────────────────────────────────── */

function useStyles() {
  useEffect(() => {
    if (!document.getElementById("factorizando-shared")) {
      const s = document.createElement("style");
      s.id = "factorizando-shared";
      s.textContent = SHARED_STYLE;
      document.head.appendChild(s);
    }
    if (!document.getElementById("factorizando-continuidad")) {
      const s = document.createElement("style");
      s.id = "factorizando-continuidad";
      s.textContent = CONTINUIDAD_STYLE;
      document.head.appendChild(s);
    }
  }, []);
}

/* ── ACCORDION WRAPPER ───────────────────────────────────────────────────────── */

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

export default function ContinuidadGuia() {
  useStyles();
  return (
    <div className="lr">

      {/* HERO */}
      <div className="hero">
        <div className="hero-tag">EXANI-II · Cálculo Diferencial e Integral</div>
        <h1>Continuidad</h1>
        <div className="hero-math">
          <M>{String.raw`\displaystyle\lim_{x \to a} f(x) = f(a)`}</M>
        </div>
        <p>Una función es continua cuando su gráfica puede trazarse sin levantar el lápiz. Tres condiciones precisas definen este concepto.</p>
      </div>

      <div className="cw">

        {/* ── 01 DEFINICIÓN ─────────────────────────────────────────────── */}
        <div className="section">
          <div className="sec-hd"><span className="sec-num">01</span><h2>Definición de continuidad</h2></div>
          <div className="card">
            <h3>Tres condiciones necesarias y suficientes</h3>
            <p style={{ marginBottom: 20 }}>
              Una función <M>f</M> es <strong>continua en x = a</strong> si y solo si se cumplen simultáneamente:
            </p>
            <div className="cond-grid">
              {condiciones.map(c => (
                <div className="cond-row" key={c.num}>
                  <div className="cond-num">{c.num}</div>
                  <div className="cond-body">
                    <div className="cond-title">{c.titulo}</div>
                    <div className="cond-desc">{c.desc}</div>
                    <div className="cond-math"><MB>{c.math}</MB></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="tip-box" style={{ marginTop: 20 }}>
              <div className="tip-label">Regla práctica EXANI-II</div>
              <p>Los <strong>polinomios</strong> son continuos en todo ℝ. Las <strong>funciones racionales</strong> son continuas en todos los puntos donde el denominador no es cero. Empieza siempre verificando estas dos reglas antes de aplicar la definición formal.</p>
            </div>
          </div>
        </div>

        <div className="divider" />

        {/* ── 02 TIPOS DE DISCONTINUIDAD ────────────────────────────────── */}
        <div className="section">
          <div className="sec-hd"><span className="sec-num">02</span><h2>Tipos de discontinuidad</h2></div>

          <DiscontinuityGraphs />

          <div className="card" style={{ marginTop: 8 }}>
            <h3>Descripción de cada tipo</h3>
            <div style={{ display: "grid", gap: 16, marginTop: 12 }}>

              <div style={{ paddingBottom: 16, borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
                  <TypeTag type="evitable" />
                  <span style={{ fontFamily: "Playfair Display, serif", fontSize: 17, color: "#f0ece3", fontStyle: "italic" }}>Discontinuidad evitable</span>
                </div>
                <p style={{ fontSize: 14.5, color: "#a09880", lineHeight: 1.75, fontWeight: 300 }}>
                  El límite <M>{String.raw`\displaystyle\lim_{x\to a}f(x)=L`}</M> existe y es finito, pero <M>f(a)\neq L</M> o <M>f(a)</M> no está definida.
                  Puede <em>repararse</em> redefiniendo <M>f(a)=L</M>.
                </p>
              </div>

              <div style={{ paddingBottom: 16, borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
                  <TypeTag type="salto" />
                  <span style={{ fontFamily: "Playfair Display, serif", fontSize: 17, color: "#f0ece3", fontStyle: "italic" }}>Discontinuidad de salto</span>
                </div>
                <p style={{ fontSize: 14.5, color: "#a09880", lineHeight: 1.75, fontWeight: 300 }}>
                  Ambos límites laterales existen y son finitos, pero son distintos:{" "}
                  <M>{String.raw`\displaystyle\lim_{x\to a^-}f\neq\lim_{x\to a^+}f`}</M>.
                  El límite bilateral no existe. Ocurre en funciones definidas por tramos.
                </p>
              </div>

              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
                  <TypeTag type="infinita" />
                  <span style={{ fontFamily: "Playfair Display, serif", fontSize: 17, color: "#f0ece3", fontStyle: "italic" }}>Discontinuidad infinita</span>
                </div>
                <p style={{ fontSize: 14.5, color: "#a09880", lineHeight: 1.75, fontWeight: 300 }}>
                  Al menos uno de los límites laterales es <M>\pm\infty</M>. Indica la presencia de una
                  <strong> asíntota vertical</strong> en <M>x=a</M>. No puede eliminarse redefiniendo la función.
                </p>
              </div>

            </div>
          </div>
        </div>

        <div className="divider" />

        {/* ── 03 RELACIÓN CON LÍMITES LATERALES ────────────────────────── */}
        <div className="section">
          <div className="sec-hd"><span className="sec-num">03</span><h2>Relación con límites laterales</h2></div>
          <div className="card">
            <h3>Diagrama de decisión</h3>
            <p style={{ marginBottom: 18, fontWeight: 300, fontSize: 15, color: "#a09880", lineHeight: 1.7 }}>
              Para analizar la continuidad de una función en <M>x=a</M>, sigue este orden:
            </p>
            {[
              { paso: "1", texto: "¿Está f(a) definida?", si: "Continúa al paso 2.", no: "Pasa al límite — puede ser evitable o infinita." },
              { paso: "2", texto: "¿Existen los límites laterales?", si: "Continúa al paso 3.", no: "Discontinuidad de salto (si son distintos y finitos) o infinita (si alguno es ±∞)." },
              { paso: "3", texto: "¿El límite bilateral = f(a)?", si: "¡La función es continua en x = a!", no: "Discontinuidad evitable." },
            ].map(({ paso, texto, si, no }) => (
              <div key={paso} style={{ display: "flex", gap: 16, marginBottom: 18, alignItems: "flex-start" }}>
                <div style={{ flexShrink: 0, width: 26, height: 26, borderRadius: "50%", background: "rgba(245,200,66,0.15)", border: "1px solid rgba(245,200,66,0.3)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "IBM Plex Mono, monospace", fontSize: 11, color: "#f5c842", marginTop: 2 }}>{paso}</div>
                <div>
                  <div style={{ fontSize: 15, color: "#e0dcd4", marginBottom: 6, fontWeight: 600 }}>{texto}</div>
                  <div style={{ fontSize: 14, color: "#7db87a", marginBottom: 4 }}>✓ Sí → {si}</div>
                  <div style={{ fontSize: 14, color: "#c07070" }}>✗ No → {no}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="divider" />

        {/* ── 04 CONTINUIDAD EN INTERVALOS ──────────────────────────────── */}
        <div className="section">
          <div className="sec-hd"><span className="sec-num">04</span><h2>Continuidad en intervalos</h2></div>
          <div className="card">
            <p style={{ marginBottom: 16, fontWeight: 300, fontSize: 15, color: "#a09880", lineHeight: 1.7 }}>
              La continuidad puede extenderse de un punto a un conjunto de puntos:
            </p>
            <div className="interval-grid">
              <div className="interval-card">
                <h4>Intervalo abierto (a, b)</h4>
                <p>f es continua en (a, b) si es continua en <em>cada punto interior</em>. No se exigen condiciones en los extremos.</p>
                <div className="cond-math"><MB>{String.raw`f \text{ continua en } (a,b)`}</MB></div>
              </div>
              <div className="interval-card">
                <h4>Intervalo cerrado [a, b]</h4>
                <p>f es continua en [a, b] si es continua en (a, b), continua por la <em>derecha</em> en a, y por la <em>izquierda</em> en b.</p>
                <div className="cond-math"><MB>{String.raw`f \text{ continua en } [a,b]`}</MB></div>
              </div>
            </div>
            <div className="tip-box" style={{ marginTop: 18 }}>
              <div className="tip-label">Funciones continuas en intervalos comunes</div>
              <p>
                Polinomios: <M>{String.raw`(-\infty,+\infty)`}</M> &nbsp;·&nbsp;
                Funciones racionales: todo ℝ excepto donde el denominador es 0 &nbsp;·&nbsp;
                <M>{String.raw`\sqrt{x}`}</M>: <M>{String.raw`[0,+\infty)`}</M> &nbsp;·&nbsp;
                Seno y coseno: <M>{String.raw`(-\infty,+\infty)`}</M>
              </p>
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
            <Acordeon titulo="Verificar continuidad en un punto" count={5}>
              {ejerciciosVerificar.map((q, i) => <QzCard key={i} q={q} label={`Ejercicio ${i + 1} de 5`} />)}
            </Acordeon>
            <Acordeon titulo="Encontrar la constante k" count={5}>
              {ejerciciosK.map((q, i) => <QzCard key={i} q={q} label={`Ejercicio ${i + 1} de 5`} />)}
            </Acordeon>
            <Acordeon titulo="Identificar y clasificar discontinuidades" count={5}>
              {ejerciciosClasificar.map((q, i) => <QzCard key={i} q={q} label={`Ejercicio ${i + 1} de 5`} />)}
            </Acordeon>
          </div>
        </div>

        <div className="divider" />

        {/* ── 07 MINI-EXAMEN ────────────────────────────────────────────── */}
        <div className="section">
          <div className="sec-hd"><span className="sec-num">07</span><h2>Mini-examen de práctica</h2></div>
          <p className="hint">12 preguntas al estilo EXANI-II que integran todos los conceptos del tema.</p>
          {miniExamen.map((q, i) => <QzCard key={i} q={q} label={`Pregunta ${i + 1} de ${miniExamen.length}`} />)}
        </div>

        {/* ── RESUMEN RÁPIDO ────────────────────────────────────────────── */}
        <div className="divider" />
        <div className="card" style={{ borderColor: "rgba(245,200,66,0.18)" }}>
          <h3>📌 Resumen rápido para el examen</h3>
          <ul style={{ marginTop: 10 }}>
            <li>f continua en x=a ⟺ f(a) existe, lim existe, y lim = f(a).</li>
            <li>Polinomios y funciones racionales (den ≠ 0): continuas automáticamente.</li>
            <li><span className="type-tag type-evit" style={{ marginRight: 8 }}>Evitable</span>lim existe pero ≠ f(a). Reparable redefiniendo f(a) = L.</li>
            <li><span className="type-tag type-salto" style={{ marginRight: 8 }}>Salto</span>lim izq ≠ lim der, ambos finitos. El límite bilateral no existe.</li>
            <li><span className="type-tag type-inf" style={{ marginRight: 8 }}>Infinita</span>Algún límite lateral es ±∞. Indica asíntota vertical.</li>
            <li>Para hallar k: iguala los límites laterales en el punto de unión del tramo.</li>
          </ul>
        </div>

      </div>
    </div>
  );
}
