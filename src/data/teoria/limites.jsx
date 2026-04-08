import { useState, useEffect } from "react";
import { M, MB, StepRow, EjCard, QzCard, SHARED_STYLE } from "./shared";

const LIMITES_STYLE = `
  .prop-table { width: 100%; border-collapse: collapse; margin-top: 10px; }
  .prop-table th { font-family: 'IBM Plex Mono', monospace; font-size: 11px; letter-spacing: 0.15em; color: #f5c842; text-transform: uppercase; text-align: left; padding: 10px 16px; border-bottom: 1px solid rgba(255,255,255,0.08); font-weight: 400; }
  .prop-table td { padding: 11px 16px; font-size: 14px; color: #c4bfb3; border-bottom: 1px solid rgba(255,255,255,0.04); vertical-align: middle; }
  .prop-table td:first-child { color: #e0dcd4; font-weight: 300; }
  .prop-table tr:hover td { background: rgba(255,255,255,0.02); }
  .indet-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(90px,1fr)); gap: 10px; margin-top: 14px; }
  .indet-chip { background: rgba(0,0,0,0.4); border: 1px solid rgba(255,255,255,0.08); border-radius: 6px; padding: 18px 8px; text-align: center; transition: border-color 0.2s, background 0.2s; overflow: hidden; }
  .indet-chip:hover { border-color: rgba(245,200,66,0.35); background: rgba(245,200,66,0.04); }
  .indet-chip .katex { font-size: 1.2em; }
  .indet-chip .katex, .indet-chip .katex * { color: #f5d060 !important; }
  .method-block { border: 1px solid rgba(255,255,255,0.06); border-radius: 10px; overflow: hidden; margin-bottom: 32px; }
  .method-desc { padding: 24px 28px; background: rgba(255,255,255,0.02); border-bottom: 1px solid rgba(255,255,255,0.06); }
  .method-desc h3 { font-family: 'Playfair Display', serif; font-size: 20px; color: #f5c842; margin-bottom: 12px; font-style: italic; }
  .method-desc p { font-size: 15px; color: #c4bfb3; line-height: 1.7; font-weight: 300; }
  .method-inner { padding: 22px 26px; }
  .method-sub { font-family: 'IBM Plex Mono', monospace; font-size: 9.5px; letter-spacing: 0.22em; color: rgba(245,200,66,0.55); text-transform: uppercase; margin: 24px 0 14px; }
  .method-sub:first-child { margin-top: 0; }
`;

function LimitGraph() {
  const W=460,H=240,ml=55,mr=20,mt=22,mb=45;
  const pw=W-ml-mr,ph=H-mt-mb;
  const xDom=3.5,yDom=4.3;
  const tx=x=>ml+(x/xDom)*pw;
  const ty=y=>(H-mb)-(y/yDom)*ph;
  const seg1=Array.from({length:20},(_,i)=>{const x=0.06+i*0.046;return`${tx(x).toFixed(1)},${ty(x+1).toFixed(1)}`;}).join(" ");
  const seg2=Array.from({length:28},(_,i)=>{const x=1.08+i*0.085;return`${tx(x).toFixed(1)},${ty(x+1).toFixed(1)}`;}).join(" ");
  const hx=tx(1),hy=ty(2),oy=ty(0),ox=tx(0);
  return (
    <div className="graph-container">
      <div className="graph-title">Comportamiento de f(x) cerca de x = a</div>
      <svg viewBox={`0 0 ${W} ${H}`} className="graph-svg">
        <defs>
          <marker id="lim-arH" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><polygon points="0,0 7,3.5 0,7" fill="rgba(200,195,185,0.4)"/></marker>
          <marker id="lim-arV" markerWidth="7" markerHeight="7" refX="3.5" refY="7" orient="auto"><polygon points="0,7 3.5,0 7,7" fill="rgba(200,195,185,0.4)"/></marker>
        </defs>
        {[1,2,3].map(v=><line key={`gx${v}`} x1={tx(v)} y1={mt} x2={tx(v)} y2={oy} stroke="rgba(255,255,255,0.04)" strokeWidth="1"/>)}
        {[1,2,3,4].map(v=><line key={`gy${v}`} x1={ml} y1={ty(v)} x2={W-mr} y2={ty(v)} stroke="rgba(255,255,255,0.04)" strokeWidth="1"/>)}
        <line x1={ml-6} y1={oy} x2={W-mr+4} y2={oy} stroke="rgba(200,195,185,0.38)" strokeWidth="1.5" markerEnd="url(#lim-arH)"/>
        <line x1={ox} y1={H-mb+6} x2={ox} y2={mt-4} stroke="rgba(200,195,185,0.38)" strokeWidth="1.5" markerEnd="url(#lim-arV)"/>
        {[1,2,3].map(v=><line key={`xt${v}`} x1={tx(v)} y1={oy-3} x2={tx(v)} y2={oy+3} stroke="rgba(200,195,185,0.22)" strokeWidth="1.5"/>)}
        {[1,2,3,4].map(v=><line key={`yt${v}`} x1={ox-3} y1={ty(v)} x2={ox+3} y2={ty(v)} stroke="rgba(200,195,185,0.22)" strokeWidth="1.5"/>)}
        <text x={W-mr+8} y={oy+5} fill="rgba(200,195,185,0.45)" fontSize="13" fontFamily="IBM Plex Mono,monospace">x</text>
        <text x={ox} y={mt-7} fill="rgba(200,195,185,0.45)" fontSize="13" fontFamily="IBM Plex Mono,monospace" textAnchor="middle">y</text>
        <line x1={hx} y1={oy} x2={hx} y2={hy+6} stroke="#f5c842" strokeWidth="1.2" strokeDasharray="5,4" opacity="0.5"/>
        <line x1={ml} y1={hy} x2={hx-6} y2={hy} stroke="#f5c842" strokeWidth="1.2" strokeDasharray="5,4" opacity="0.5"/>
        <polyline points={seg1} fill="none" stroke="#60b8d8" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"/>
        <polyline points={seg2} fill="none" stroke="#60b8d8" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx={hx} cy={hy} r="5.5" fill="#0d0d0f" stroke="#60b8d8" strokeWidth="2.2"/>
        <text x={hx-62} y={ty(1.52)} fill="#f0c860" fontSize="10.5" fontFamily="IBM Plex Mono,monospace" textAnchor="middle" opacity="0.85">x→a⁻</text>
        <text x={hx+64} y={ty(2.48)} fill="#f0c860" fontSize="10.5" fontFamily="IBM Plex Mono,monospace" textAnchor="middle" opacity="0.85">x→a⁺</text>
        <text x={hx} y={oy+17} textAnchor="middle" fill="#f5c842" fontSize="13" fontFamily="IBM Plex Mono,monospace" fontWeight="600">a</text>
        <text x={ml-10} y={hy+5} textAnchor="end" fill="#f5c842" fontSize="13" fontFamily="IBM Plex Mono,monospace" fontWeight="600">L</text>
        <text x={tx(2.75)} y={ty(3.8)-6} fill="#60b8d8" fontSize="12.5" fontFamily="IBM Plex Mono,monospace" fontStyle="italic">f(x)</text>
        <text x={hx+9} y={hy-10} fill="rgba(200,195,185,0.38)" fontSize="9" fontFamily="IBM Plex Mono,monospace">f(a) sin definir</text>
      </svg>
      <p className="graph-caption">Aunque <em>f(a)</em> no esté definida en <em>x = a</em>, la función se aproxima al valor <em>L</em> desde ambos lados.</p>
    </div>
  );
}

function PropAccordion({nombre,ejercicios,startIdx}){
  const [open,setOpen]=useState(false);
  return(
    <div className="acc-item">
      <div className="acc-hd" onClick={()=>setOpen(!open)}>
        <span className="acc-title">Propiedad de {nombre} <span className="acc-count">· 5 ejercicios</span></span>
        <span className={`chevron${open?" open":""}`}>▾</span>
      </div>
      <div className={`acc-body${open?" open":""}`}>
        {ejercicios.map((q,i)=><QzCard key={i} q={q} label={`Ejercicio ${startIdx+i+1} de 30`}/>)}
      </div>
    </div>
  );
}

/* ── DATA ────────────────────────────────────────────────────────────────────── */

const propEjemplos=[
  {titulo:"Combinando varias propiedades",prob:String.raw`\displaystyle\lim_{x\to 2}\left[3x^2+2x-4\right]`,steps:[{pre:"Polinomio continuo en ℝ: separamos usando las propiedades de suma, constante y potencia."},{pre:"Calculamos: ",math:String.raw`3\cdot\lim x^2+2\cdot\lim x-\lim4`},{pre:"Evaluamos: ",math:String.raw`3(4)+2(2)-4=12+4-4=12`}],res:String.raw`\displaystyle\lim_{x\to 2}\left[3x^2+2x-4\right]=12`},
  {titulo:"Propiedad de cociente — verificar denominador",prob:String.raw`\displaystyle\lim_{x\to -1}\dfrac{x^3-2x}{x^2+3}`,steps:[{pre:"Verificamos denominador≠0 en x=−1: ",math:String.raw`(-1)^2+3=4\neq0`,post:" ✓"},{pre:"Propiedad de cociente: numerador ",math:String.raw`(-1)^3-2(-1)=1`},{pre:"Denominador: ",math:String.raw`(-1)^2+3=4`},{pre:"Resultado: ",math:String.raw`\dfrac{1}{4}`}],res:String.raw`\displaystyle\lim_{x\to -1}\dfrac{x^3-2x}{x^2+3}=\dfrac{1}{4}`},
];

const propEjercicios={
  "Suma":[
    {q:"Calcula:",prob:String.raw`\displaystyle\lim_{x\to 2}\!\left[x^2+3x\right]`,opts:[String.raw`10`,String.raw`8`,String.raw`12`,String.raw`14`],ans:0,exp:"4+6=10.",steps:[{pre:"Suma de límites: ",math:String.raw`\lim x^2+\lim3x=4+6=10`}]},
    {q:"Calcula:",prob:String.raw`\displaystyle\lim_{x\to -1}\!\left[x^3+2x\right]`,opts:[String.raw`-3`,String.raw`-1`,String.raw`1`,String.raw`3`],ans:0,exp:"-1-2=-3.",steps:[{pre:"Sustituimos x=−1: ",math:String.raw`(-1)^3+2(-1)=-1-2=-3`}]},
    {q:"Si lim f=5 y lim g=−2, ¿cuánto vale lim[f+g]?",prob:String.raw`\lim f=5,\;\lim g=-2`,opts:[String.raw`3`,String.raw`7`,String.raw`-10`,String.raw`-3`],ans:0,exp:"5+(−2)=3.",steps:[{pre:"Propiedad suma: ",math:String.raw`L+M=5+(-2)=3`}]},
    {q:"Calcula:",prob:String.raw`\displaystyle\lim_{x\to 0}\!\left[3x^2+5x+2\right]`,opts:[String.raw`0`,String.raw`1`,String.raw`2`,String.raw`5`],ans:2,exp:"0+0+2=2.",steps:[{pre:"Sustituimos x=0: ",math:String.raw`0+0+2=2`}]},
    {q:"Calcula:",prob:String.raw`\displaystyle\lim_{x\to 3}\!\left[(x+1)+(x^2-5)\right]`,opts:[String.raw`4`,String.raw`6`,String.raw`8`,String.raw`10`],ans:2,exp:"4+4=8.",steps:[{pre:"Evaluamos en x=3: ",math:String.raw`4+(9-5)=8`}]},
  ],
  "Diferencia":[
    {q:"Calcula:",prob:String.raw`\displaystyle\lim_{x\to 2}\!\left[x^2-3x\right]`,opts:[String.raw`-2`,String.raw`0`,String.raw`2`,String.raw`4`],ans:0,exp:"4−6=−2.",steps:[{pre:"Evaluamos en x=2: ",math:String.raw`4-6=-2`}]},
    {q:"Si lim f=8 y lim g=3, ¿cuánto vale lim[f−g]?",prob:String.raw`\lim f=8,\;\lim g=3`,opts:[String.raw`5`,String.raw`11`,String.raw`24`,String.raw`-5`],ans:0,exp:"8−3=5.",steps:[{pre:"Propiedad diferencia: ",math:String.raw`L-M=8-3=5`}]},
    {q:"Calcula:",prob:String.raw`\displaystyle\lim_{x\to 1}\!\left[x^3-x^2\right]`,opts:[String.raw`-1`,String.raw`0`,String.raw`1`,String.raw`2`],ans:1,exp:"1−1=0.",steps:[{pre:"Evaluamos en x=1: ",math:String.raw`1-1=0`}]},
    {q:"Calcula:",prob:String.raw`\displaystyle\lim_{x\to -2}\!\left[x^2-2x\right]`,opts:[String.raw`0`,String.raw`4`,String.raw`8`,String.raw`-8`],ans:2,exp:"4+4=8.",steps:[{pre:"Evaluamos en x=−2: ",math:String.raw`4-2(-2)=4+4=8`}]},
    {q:"Si lim f=12 y lim g=5, ¿cuánto vale lim[f−g]?",prob:String.raw`\lim f=12,\;\lim g=5`,opts:[String.raw`7`,String.raw`17`,String.raw`60`,String.raw`-7`],ans:0,exp:"12−5=7.",steps:[{pre:"Propiedad diferencia: ",math:String.raw`12-5=7`}]},
  ],
  "Producto":[
    {q:"Calcula:",prob:String.raw`\displaystyle\lim_{x\to 3}\!\left[x\cdot(x+1)\right]`,opts:[String.raw`9`,String.raw`12`,String.raw`15`,String.raw`6`],ans:1,exp:"3·4=12.",steps:[{pre:"Producto de límites: ",math:String.raw`3\cdot4=12`}]},
    {q:"Si lim f=4 y lim g=−2, ¿cuánto vale lim[f·g]?",prob:String.raw`\lim f=4,\;\lim g=-2`,opts:[String.raw`2`,String.raw`-8`,String.raw`8`,String.raw`-6`],ans:1,exp:"4·(−2)=−8.",steps:[{pre:"Propiedad producto: ",math:String.raw`4\cdot(-2)=-8`}]},
    {q:"Calcula:",prob:String.raw`\displaystyle\lim_{x\to -1}\!\left[x^2\cdot(2x+3)\right]`,opts:[String.raw`1`,String.raw`-1`,String.raw`2`,String.raw`-2`],ans:0,exp:"1·1=1.",steps:[{pre:"Evaluamos: ",math:String.raw`(-1)^2\cdot(2(-1)+3)=1\cdot1=1`}]},
    {q:"Calcula:",prob:String.raw`\displaystyle\lim_{x\to 2}\!\left[(x-1)\cdot(x+2)\right]`,opts:[String.raw`4`,String.raw`6`,String.raw`8`,String.raw`3`],ans:0,exp:"1·4=4.",steps:[{pre:"Evaluamos: ",math:String.raw`1\cdot4=4`}]},
    {q:"Si lim f=3 y lim g=3, ¿cuánto vale lim[f·g]?",prob:String.raw`\lim f=3,\;\lim g=3`,opts:[String.raw`6`,String.raw`9`,String.raw`0`,String.raw`3`],ans:1,exp:"3·3=9.",steps:[{pre:"Propiedad producto: ",math:String.raw`3\cdot3=9`}]},
  ],
  "Cociente":[
    {q:"Calcula:",prob:String.raw`\displaystyle\lim_{x\to 2}\dfrac{x^2+2x}{x+2}`,opts:[String.raw`1`,String.raw`2`,String.raw`4`,String.raw`0`],ans:1,exp:"8/4=2.",steps:[{pre:"Den≠0 en x=2 ✓  Evaluamos: ",math:String.raw`\dfrac{8}{4}=2`}]},
    {q:"Si lim f=10 y lim g=2, ¿cuánto vale lim[f/g]?",prob:String.raw`\lim f=10,\;\lim g=2`,opts:[String.raw`5`,String.raw`8`,String.raw`12`,String.raw`20`],ans:0,exp:"10/2=5.",steps:[{pre:"Propiedad cociente: ",math:String.raw`10/2=5`}]},
    {q:"Calcula:",prob:String.raw`\displaystyle\lim_{x\to 4}\dfrac{x+2}{x-2}`,opts:[String.raw`1`,String.raw`3`,String.raw`4`,String.raw`6`],ans:1,exp:"6/2=3.",steps:[{pre:"Den≠0 en x=4 ✓  Evaluamos: ",math:String.raw`6/2=3`}]},
    {q:"Si lim f=15 y lim g=3, ¿cuánto vale lim[f/g]?",prob:String.raw`\lim f=15,\;\lim g=3`,opts:[String.raw`5`,String.raw`12`,String.raw`45`,String.raw`18`],ans:0,exp:"15/3=5.",steps:[{pre:"Propiedad cociente: ",math:String.raw`15/3=5`}]},
    {q:"Calcula:",prob:String.raw`\displaystyle\lim_{x\to 1}\dfrac{x^2+x}{x+1}`,opts:[String.raw`1`,String.raw`2`,String.raw`0`,String.raw`3`],ans:0,exp:"2/2=1.",steps:[{pre:"Den≠0 en x=1 ✓  Evaluamos: ",math:String.raw`2/2=1`}]},
  ],
  "Constante":[
    {q:"Si lim f=4, ¿cuánto vale lim[5·f]?",prob:String.raw`\lim f=4`,opts:[String.raw`9`,String.raw`1`,String.raw`20`,String.raw`-1`],ans:2,exp:"5·4=20.",steps:[{pre:"Propiedad constante: ",math:String.raw`5\cdot4=20`}]},
    {q:"Calcula:",prob:String.raw`\displaystyle\lim_{x\to 3}\left[4x^2\right]`,opts:[String.raw`12`,String.raw`24`,String.raw`36`,String.raw`48`],ans:2,exp:"4·9=36.",steps:[{pre:"Propiedad constante: ",math:String.raw`4\cdot9=36`}]},
    {q:"Si lim f=−5, ¿cuánto vale lim[−3·f]?",prob:String.raw`\lim f=-5`,opts:[String.raw`-15`,String.raw`15`,String.raw`-8`,String.raw`8`],ans:1,exp:"(−3)(−5)=15.",steps:[{pre:"Propiedad constante: ",math:String.raw`(-3)(-5)=15`}]},
    {q:"Calcula:",prob:String.raw`\displaystyle\lim_{x\to 2}\left[7(x+1)\right]`,opts:[String.raw`14`,String.raw`21`,String.raw`28`,String.raw`7`],ans:1,exp:"7·3=21.",steps:[{pre:"Propiedad constante: ",math:String.raw`7\cdot3=21`}]},
    {q:"Calcula:",prob:String.raw`\displaystyle\lim_{x\to 0}\left[-2x+6\right]`,opts:[String.raw`6`,String.raw`-6`,String.raw`2`,String.raw`-2`],ans:0,exp:"0+6=6.",steps:[{pre:"Sustituimos x=0: ",math:String.raw`0+6=6`}]},
  ],
  "Potencia":[
    {q:"Si lim f=3, ¿cuánto vale lim[f²]?",prob:String.raw`\lim f=3`,opts:[String.raw`6`,String.raw`9`,String.raw`27`,String.raw`3`],ans:1,exp:"3²=9.",steps:[{pre:"Propiedad potencia: ",math:String.raw`3^2=9`}]},
    {q:"Calcula:",prob:String.raw`\displaystyle\lim_{x\to 2}\left[(x+1)^3\right]`,opts:[String.raw`27`,String.raw`9`,String.raw`8`,String.raw`3`],ans:0,exp:"3³=27.",steps:[{pre:"Primero: lim(x+1)=3, luego: ",math:String.raw`3^3=27`}]},
    {q:"Si lim f=−2, ¿cuánto vale lim[f⁴]?",prob:String.raw`\lim f=-2`,opts:[String.raw`-16`,String.raw`16`,String.raw`-8`,String.raw`8`],ans:1,exp:"(−2)⁴=16.",steps:[{pre:"Propiedad potencia: ",math:String.raw`(-2)^4=16`}]},
    {q:"Calcula:",prob:String.raw`\displaystyle\lim_{x\to 1}\left[(x^2+x)^2\right]`,opts:[String.raw`4`,String.raw`2`,String.raw`1`,String.raw`8`],ans:0,exp:"2²=4.",steps:[{pre:"Primero: lim(x²+x)=2, luego: ",math:String.raw`2^2=4`}]},
    {q:"Calcula:",prob:String.raw`\displaystyle\lim_{x\to 3}\left[x^3\right]`,opts:[String.raw`9`,String.raw`27`,String.raw`3`,String.raw`18`],ans:1,exp:"3³=27.",steps:[{pre:"Propiedad potencia: ",math:String.raw`3^3=27`}]},
  ],
};

const indetEjemplos=[
  {forma:String.raw`\tfrac{0}{0}`,titulo:"Factorización",prob:String.raw`\displaystyle\lim_{x\to 3}\dfrac{x^2-9}{x-3}`,steps:[{pre:"Sustituimos x=3 → ",math:String.raw`\tfrac{0}{0}`},{pre:"Factorizamos: ",math:String.raw`(x-3)(x+3)`,post:", cancelamos."},{pre:"Evaluamos: ",math:String.raw`x+3=6`}],res:String.raw`\displaystyle\lim_{x\to 3}\dfrac{x^2-9}{x-3}=6`},
  {forma:String.raw`\tfrac{\infty}{\infty}`,titulo:"División por potencia mayor",prob:String.raw`\displaystyle\lim_{x\to\infty}\dfrac{2x^2-3x}{x^2+1}`,steps:[{pre:"Dividimos entre ",math:String.raw`x^2`},{pre:"Obtenemos: ",math:String.raw`\dfrac{2-\tfrac{3}{x}}{1+\tfrac{1}{x^2}}\to\dfrac{2}{1}=2`}],res:String.raw`\displaystyle\lim_{x\to\infty}\dfrac{2x^2-3x}{x^2+1}=2`},
  {forma:String.raw`0\cdot\infty`,titulo:"Reescribir algebraicamente",prob:String.raw`\displaystyle\lim_{x\to\infty}\dfrac{3}{x}\cdot x^2`,steps:[{pre:"Simplificamos: ",math:String.raw`\dfrac{3}{x}\cdot x^2=3x`},{pre:"El límite es: ",math:String.raw`\lim_{x\to\infty}3x=\infty`}],res:String.raw`\displaystyle\lim_{x\to\infty}\dfrac{3}{x}\cdot x^2=\infty`},
  {forma:String.raw`\infty-\infty`,titulo:"Conjugado",prob:String.raw`\displaystyle\lim_{x\to\infty}\!\left[\sqrt{x^2+x}-x\right]`,steps:[{pre:"Multiplicamos por el conjugado."},{pre:"Numerador: ",math:String.raw`x^2+x-x^2=x`},{pre:"Dividimos por x: ",math:String.raw`\dfrac{1}{\sqrt{1+\tfrac{1}{x}}+1}\to\dfrac{1}{2}`}],res:String.raw`\displaystyle\lim_{x\to\infty}\!\left[\sqrt{x^2+x}-x\right]=\dfrac{1}{2}`},
  {forma:String.raw`0^0`,titulo:"Técnica del logaritmo",prob:String.raw`\displaystyle\lim_{x\to 0^+}x^x`,steps:[{pre:"Sea ",math:String.raw`y=x^x`},{pre:"Logaritmo: ",math:String.raw`\ln y=x\ln x\to0`},{pre:"Por continuidad: ",math:String.raw`y\to e^0=1`}],res:String.raw`\displaystyle\lim_{x\to 0^+}x^x=1`},
  {forma:String.raw`1^\infty`,titulo:"Número e de Euler",prob:String.raw`\displaystyle\lim_{x\to\infty}\!\left(1+\dfrac{1}{x}\right)^{\!x}`,steps:[{pre:"Sea ",math:String.raw`y=(1+\tfrac{1}{x})^x`},{pre:"Logaritmo: ",math:String.raw`\ln y=x\ln(1+\tfrac{1}{x})\to1`},{pre:"Por tanto: ",math:String.raw`y\to e`}],res:String.raw`\displaystyle\lim_{x\to\infty}\!\left(1+\dfrac{1}{x}\right)^{\!x}=e`},
  {forma:String.raw`\infty^0`,titulo:"Técnica del logaritmo",prob:String.raw`\displaystyle\lim_{x\to\infty}x^{1/x}`,steps:[{pre:"Logaritmo: ",math:String.raw`\ln y=\dfrac{\ln x}{x}\to0`},{pre:"Por tanto: ",math:String.raw`y\to e^0=1`}],res:String.raw`\displaystyle\lim_{x\to\infty}x^{1/x}=1`},
];

const metodosData=[
  {id:1,titulo:"① Sustitución directa",desc:"Sustituye x = a directamente. Si el resultado es un número real definido, ese es el límite. Funciona con polinomios y funciones continuas.",
   ejemplos:[
     {titulo:"Polinomio cúbico",prob:String.raw`\displaystyle\lim_{x\to 2}\!\left[x^3-3x+1\right]`,steps:[{pre:"Polinomio continuo: sustituimos x=2 directamente."},{pre:"Calculamos: ",math:String.raw`8-6+1=3`}],res:String.raw`\displaystyle\lim_{x\to 2}\!\left[x^3-3x+1\right]=3`},
     {titulo:"Producto de expresiones",prob:String.raw`\displaystyle\lim_{x\to -1}\!\left[(x^2+2x)(x-3)\right]`,steps:[{pre:"Sustituimos x=−1."},{pre:"Factor 1: ",math:String.raw`1-2=-1`},{pre:"Factor 2: ",math:String.raw`-1-3=-4`},{pre:"Producto: ",math:String.raw`(-1)(-4)=4`}],res:String.raw`\displaystyle\lim_{x\to -1}\!\left[(x^2+2x)(x-3)\right]=4`},
   ],
   ejercicios:[
     {q:"Calcula:",prob:String.raw`\displaystyle\lim_{x\to 3}\!\left[x^2+2x-1\right]`,opts:[String.raw`12`,String.raw`13`,String.raw`14`,String.raw`15`],ans:2,exp:"9+6−1=14.",steps:[{pre:"Sustituimos x=3: ",math:String.raw`9+6-1=14`}]},
     {q:"Calcula:",prob:String.raw`\displaystyle\lim_{x\to -2}\!\left[x^3+x\right]`,opts:[String.raw`-10`,String.raw`-6`,String.raw`10`,String.raw`-12`],ans:0,exp:"−8+(−2)=−10.",steps:[{pre:"Sustituimos x=−2: ",math:String.raw`-8-2=-10`}]},
     {q:"Calcula:",prob:String.raw`\displaystyle\lim_{x\to 0}\!\left[5x^2-3x+2\right]`,opts:[String.raw`0`,String.raw`1`,String.raw`2`,String.raw`5`],ans:2,exp:"0−0+2=2.",steps:[{pre:"Sustituimos x=0: ",math:String.raw`0-0+2=2`}]},
     {q:"Calcula:",prob:String.raw`\displaystyle\lim_{x\to 1}\!\left[(x+1)(x-2)\right]`,opts:[String.raw`-2`,String.raw`0`,String.raw`2`,String.raw`-1`],ans:0,exp:"2·(−1)=−2.",steps:[{pre:"Sustituimos x=1: ",math:String.raw`2\cdot(-1)=-2`}]},
     {q:"Calcula:",prob:String.raw`\displaystyle\lim_{x\to 4}\sqrt{x+12}`,opts:[String.raw`2`,String.raw`4`,String.raw`8`,String.raw`16`],ans:1,exp:"√16=4.",steps:[{pre:"Sustituimos x=4: ",math:String.raw`\sqrt{16}=4`}]},
   ]},
  {id:2,titulo:"② Factorización",desc:"Se usa cuando la sustitución produce 0/0. Factoriza para cancelar el factor que genera el cero. Técnicas: diferencia de cuadrados, trinomio, diferencia de cubos.",
   ejemplos:[
     {titulo:"Trinomio cuadrado",prob:String.raw`\displaystyle\lim_{x\to -3}\dfrac{x^2+5x+6}{x+3}`,steps:[{pre:"Sustitución → 0/0. Factorizamos: ",math:String.raw`(x+2)(x+3)`},{pre:"Cancelamos (x+3): ",math:String.raw`x+2`},{pre:"Evaluamos en x=−3: ",math:String.raw`-1`}],res:String.raw`\displaystyle\lim_{x\to -3}\dfrac{x^2+5x+6}{x+3}=-1`},
     {titulo:"Diferencia de cubos",prob:String.raw`\displaystyle\lim_{x\to 2}\dfrac{x^3-8}{x-2}`,steps:[{pre:"Sustitución → 0/0. Diferencia de cubos: ",math:String.raw`(x-2)(x^2+2x+4)`},{pre:"Cancelamos (x−2). Evaluamos en x=2: ",math:String.raw`4+4+4=12`}],res:String.raw`\displaystyle\lim_{x\to 2}\dfrac{x^3-8}{x-2}=12`},
   ],
   ejercicios:[
     {q:"Calcula:",prob:String.raw`\displaystyle\lim_{x\to 2}\dfrac{x^2-4}{x-2}`,opts:[String.raw`0`,String.raw`2`,String.raw`4`,String.raw`\infty`],ans:2,exp:"x+2=4.",steps:[{pre:"Factorizamos y cancelamos: ",math:String.raw`x+2`},{pre:"Evaluamos en x=2: ",math:String.raw`4`}]},
     {q:"Calcula:",prob:String.raw`\displaystyle\lim_{x\to -1}\dfrac{x^2+x}{x+1}`,opts:[String.raw`-1`,String.raw`0`,String.raw`1`,String.raw`-2`],ans:0,exp:"x=−1.",steps:[{pre:"Factorizamos: ",math:String.raw`\dfrac{x(x+1)}{x+1}=x`},{pre:"Evaluamos: ",math:String.raw`-1`}]},
     {q:"Calcula:",prob:String.raw`\displaystyle\lim_{x\to 3}\dfrac{x^2-9}{x-3}`,opts:[String.raw`0`,String.raw`3`,String.raw`6`,String.raw`9`],ans:2,exp:"x+3=6.",steps:[{pre:"Factorizamos: ",math:String.raw`x+3`},{pre:"Evaluamos: ",math:String.raw`6`}]},
     {q:"Calcula:",prob:String.raw`\displaystyle\lim_{x\to 1}\dfrac{x^3-1}{x-1}`,opts:[String.raw`1`,String.raw`2`,String.raw`3`,String.raw`0`],ans:2,exp:"x²+x+1=3.",steps:[{pre:"Diferencia de cubos, cancelamos, evaluamos en x=1: ",math:String.raw`1+1+1=3`}]},
     {q:"Calcula:",prob:String.raw`\displaystyle\lim_{x\to -2}\dfrac{x^2-x-6}{x+2}`,opts:[String.raw`-5`,String.raw`-3`,String.raw`5`,String.raw`-1`],ans:0,exp:"x−3=−5.",steps:[{pre:"Factorizamos: ",math:String.raw`(x-3)(x+2)`},{pre:"Cancelamos y evaluamos: ",math:String.raw`-2-3=-5`}]},
   ]},
  {id:3,titulo:"③ Racionalización",desc:"Cuando aparecen radicales y la sustitución produce 0/0, multiplica por el conjugado. Usa (a+b)(a−b)=a²−b² para eliminar el radical.",
   ejemplos:[
     {titulo:"Radical en el numerador",prob:String.raw`\displaystyle\lim_{x\to 0}\dfrac{\sqrt{x+4}-2}{x}`,steps:[{pre:"Sustitución → 0/0. Multiplicamos por el conjugado ",math:String.raw`\dfrac{\sqrt{x+4}+2}{\sqrt{x+4}+2}`},{pre:"Numerador: ",math:String.raw`(x+4)-4=x`},{pre:"Cancelamos x. Evaluamos en x=0: ",math:String.raw`\dfrac{1}{4}`}],res:String.raw`\displaystyle\lim_{x\to 0}\dfrac{\sqrt{x+4}-2}{x}=\dfrac{1}{4}`},
     {titulo:"Radical en el denominador",prob:String.raw`\displaystyle\lim_{x\to 1}\dfrac{x-1}{\sqrt{x}-1}`,steps:[{pre:"Sustitución → 0/0. Multiplicamos por ",math:String.raw`\dfrac{\sqrt{x}+1}{\sqrt{x}+1}`},{pre:"Denominador: ",math:String.raw`x-1`, post:", cancelamos."},{pre:"Evaluamos: ",math:String.raw`\sqrt{1}+1=2`}],res:String.raw`\displaystyle\lim_{x\to 1}\dfrac{x-1}{\sqrt{x}-1}=2`},
   ],
   ejercicios:[
     {q:"Calcula:",prob:String.raw`\displaystyle\lim_{x\to 4}\dfrac{\sqrt{x}-2}{x-4}`,opts:[String.raw`\tfrac{1}{2}`,String.raw`\tfrac{1}{4}`,String.raw`1`,String.raw`2`],ans:1,exp:"1/(√4+2)=1/4.",steps:[{pre:"Conjugado, cancelamos, evaluamos: ",math:String.raw`\dfrac{1}{\sqrt{4}+2}=\dfrac{1}{4}`}]},
     {q:"Calcula:",prob:String.raw`\displaystyle\lim_{x\to 9}\dfrac{x-9}{\sqrt{x}-3}`,opts:[String.raw`3`,String.raw`6`,String.raw`9`,String.raw`0`],ans:1,exp:"√9+3=6.",steps:[{pre:"Conjugado, cancelamos, evaluamos: ",math:String.raw`\sqrt{9}+3=6`}]},
     {q:"Calcula:",prob:String.raw`\displaystyle\lim_{x\to 0}\dfrac{\sqrt{x+9}-3}{x}`,opts:[String.raw`\tfrac{1}{3}`,String.raw`\tfrac{1}{6}`,String.raw`\tfrac{1}{9}`,String.raw`0`],ans:1,exp:"1/(√9+3)=1/6.",steps:[{pre:"Conjugado, cancelamos, evaluamos: ",math:String.raw`\dfrac{1}{\sqrt{9}+3}=\dfrac{1}{6}`}]},
     {q:"Calcula:",prob:String.raw`\displaystyle\lim_{x\to 1}\dfrac{\sqrt{x}-1}{x-1}`,opts:[String.raw`1`,String.raw`\tfrac{1}{2}`,String.raw`2`,String.raw`0`],ans:1,exp:"1/(√1+1)=1/2.",steps:[{pre:"Notamos: ",math:String.raw`x-1=(\sqrt{x}-1)(\sqrt{x}+1)`},{pre:"Cancelamos y evaluamos: ",math:String.raw`\dfrac{1}{\sqrt{1}+1}=\dfrac{1}{2}`}]},
     {q:"Calcula:",prob:String.raw`\displaystyle\lim_{x\to 3}\dfrac{x-3}{\sqrt{x+1}-2}`,opts:[String.raw`2`,String.raw`3`,String.raw`4`,String.raw`6`],ans:2,exp:"√4+2=4.",steps:[{pre:"Conjugado, cancelamos, evaluamos: ",math:String.raw`\sqrt{3+1}+2=4`}]},
   ]},
  {id:4,titulo:"④ Límites al infinito",desc:"Cuando x→∞, divide entre xⁿ donde n es el grado máximo del denominador. Los términos con x en denominador tienden a 0.",
   ejemplos:[
     {titulo:"Mismo grado num y den",prob:String.raw`\displaystyle\lim_{x\to\infty}\dfrac{3x^2+2x}{x^2-5}`,steps:[{pre:"Dividimos entre ",math:String.raw`x^2`},{pre:"Resultado: ",math:String.raw`\dfrac{3+0}{1-0}=3`}],res:String.raw`\displaystyle\lim_{x\to\infty}\dfrac{3x^2+2x}{x^2-5}=3`},
     {titulo:"Grado num < grado den",prob:String.raw`\displaystyle\lim_{x\to\infty}\dfrac{5x^2+x}{2x^3-1}`,steps:[{pre:"Dividimos entre ",math:String.raw`x^3`},{pre:"Resultado: ",math:String.raw`\dfrac{0+0}{2-0}=0`}],res:String.raw`\displaystyle\lim_{x\to\infty}\dfrac{5x^2+x}{2x^3-1}=0`},
   ],
   ejercicios:[
     {q:"Calcula:",prob:String.raw`\displaystyle\lim_{x\to\infty}\dfrac{3x+1}{x-2}`,opts:[String.raw`0`,String.raw`1`,String.raw`3`,String.raw`\infty`],ans:2,exp:"3/1=3.",steps:[{pre:"Dividimos entre x: ",math:String.raw`\dfrac{3+0}{1-0}=3`}]},
     {q:"Calcula:",prob:String.raw`\displaystyle\lim_{x\to\infty}\dfrac{x^2+x}{2x^2+1}`,opts:[String.raw`0`,String.raw`\tfrac{1}{2}`,String.raw`1`,String.raw`2`],ans:1,exp:"1/2.",steps:[{pre:"Dividimos entre ",math:String.raw`x^2`, post:":  ", math2:String.raw`\dfrac{1}{2}`}]},
     {q:"Calcula:",prob:String.raw`\displaystyle\lim_{x\to\infty}\dfrac{5x^3+x}{x^4+2}`,opts:[String.raw`0`,String.raw`5`,String.raw`\infty`,String.raw`1`],ans:0,exp:"Grado num < den → 0.",steps:[{pre:"Dividimos entre ",math:String.raw`x^4`, post:":  ", math2:String.raw`0`}]},
     {q:"Calcula:",prob:String.raw`\displaystyle\lim_{x\to\infty}\dfrac{2x^3-1}{x^3+x}`,opts:[String.raw`0`,String.raw`1`,String.raw`2`,String.raw`\infty`],ans:2,exp:"2/1=2.",steps:[{pre:"Dividimos entre ",math:String.raw`x^3`, post:":  ", math2:String.raw`\dfrac{2}{1}=2`}]},
     {q:"Calcula:",prob:String.raw`\displaystyle\lim_{x\to\infty}\dfrac{x+1}{x^2-1}`,opts:[String.raw`0`,String.raw`1`,String.raw`\infty`,String.raw`-1`],ans:0,exp:"Grado num < den → 0.",steps:[{pre:"Dividimos entre ",math:String.raw`x^2`, post:":  ", math2:String.raw`0`}]},
   ]},
];

const miniExamen=[
  {q:"Evalúa el límite:",prob:String.raw`\displaystyle\lim_{x\to 1}\!\left(x^2+3x-4\right)`,opts:[String.raw`0`,String.raw`4`,String.raw`5`,String.raw`-2`],ans:0,exp:"1+3−4=0.",steps:[{pre:"Sustitución directa: ",math:String.raw`1+3-4=0`}]},
  {q:"¿Cuál es el resultado?",prob:String.raw`\displaystyle\lim_{x\to 3}\dfrac{x^2-9}{x-3}`,opts:[String.raw`0`,String.raw`3`,String.raw`6`,String.raw`\infty`],ans:2,exp:"x+3=6.",steps:[{pre:"Factorizamos y evaluamos: ",math:String.raw`3+3=6`}]},
  {q:"Determina el límite:",prob:String.raw`\displaystyle\lim_{x\to\infty}\dfrac{5x^3}{2x^3+x}`,opts:[String.raw`0`,String.raw`\tfrac{5}{2}`,String.raw`\infty`,String.raw`\tfrac{1}{2}`],ans:1,exp:"5/2.",steps:[{pre:"Dividimos entre ",math:String.raw`x^3`, post:":  ", math2:String.raw`\dfrac{5}{2+0}=\dfrac{5}{2}`}]},
  {q:"¿Qué valor tiene?",prob:String.raw`\displaystyle\lim_{x\to -2}\dfrac{x^2-4}{x+2}`,opts:[String.raw`-4`,String.raw`0`,String.raw`4`,String.raw`\text{No existe}`],ans:0,exp:"x−2=−4.",steps:[{pre:"Factorizamos: ",math:String.raw`x-2`},{pre:"Evaluamos en x=−2: ",math:String.raw`-4`}]},
  {q:"Evalúa:",prob:String.raw`\displaystyle\lim_{x\to 0^+}\dfrac{1}{x}`,opts:[String.raw`0`,String.raw`-\infty`,String.raw`+\infty`,String.raw`1`],ans:2,exp:"x→0⁺ → 1/x→+∞.",steps:[{pre:"Valores positivos muy pequeños: ",math:String.raw`\tfrac{1}{x}\to+\infty`}]},
];

const propiedades=[["Suma",String.raw`\displaystyle\lim[f+g]=L+M`],["Diferencia",String.raw`\displaystyle\lim[f-g]=L-M`],["Producto",String.raw`\displaystyle\lim[f\cdot g]=L\cdot M`],["Cociente",String.raw`\displaystyle\lim\dfrac{f}{g}=\dfrac{L}{M},\;M\neq0`],["Constante",String.raw`\displaystyle\lim[c\cdot f]=c\cdot L`],["Potencia",String.raw`\displaystyle\lim[f]^n=L^n`]];
const formasIndet=[String.raw`\tfrac{0}{0}`,String.raw`\tfrac{\infty}{\infty}`,String.raw`0\cdot\infty`,String.raw`\infty-\infty`,String.raw`0^0`,String.raw`1^\infty`,String.raw`\infty^0`];

function useStyles(){useEffect(()=>{if(!document.getElementById("factorizando-shared")){const s=document.createElement("style");s.id="factorizando-shared";s.textContent=SHARED_STYLE;document.head.appendChild(s);}if(!document.getElementById("factorizando-limites")){const s=document.createElement("style");s.id="factorizando-limites";s.textContent=LIMITES_STYLE;document.head.appendChild(s);}},[]);}

export default function LimitesGuia(){
  useStyles();
  return(
    <div className="lr">
      <div className="hero">
        <div className="hero-tag">EXANI-II · Cálculo Diferencial e Integral</div>
        <h1>Límites</h1>
        <div className="hero-math"><M>{String.raw`\displaystyle\lim_{x\to a}f(x)=L`}</M></div>
        <p>La piedra angular del cálculo. Comprender los límites es el primer paso para dominar la derivada y la integral.</p>
      </div>
      <div className="cw">
        <div className="section">
          <div className="sec-hd"><span className="sec-num">01</span><h2>¿Qué es un límite?</h2></div>
          <div className="card"><h3>Definición intuitiva</h3><p>El límite de <M>f(x)</M> cuando <M>x</M> se acerca a <M>a</M> es el valor al que <M>f(x)</M> se aproxima, independientemente de si <M>f(a)</M> está definida.</p><MB label="Notación">{String.raw`\displaystyle\lim_{x\to a}f(x)=L`}</MB><p>Lo clave: <M>x</M> se <strong>aproxima</strong> a <M>a</M> sin necesariamente llegar.</p></div>
          <LimitGraph/>
          <div className="card"><h3>Límites laterales</h3><ul><li><strong>Por la izquierda:</strong> <M>{String.raw`\displaystyle\lim_{x\to a^-}f(x)`}</M> — se aproxima desde valores menores que <M>a</M>.</li><li><strong>Por la derecha:</strong> <M>{String.raw`\displaystyle\lim_{x\to a^+}f(x)`}</M> — se aproxima desde valores mayores que <M>a</M>.</li><li>El límite existe si y solo si: <M>{String.raw`\displaystyle\lim_{x\to a^-}f=\lim_{x\to a^+}f`}</M></li></ul></div>
        </div>
        <div className="divider"/>
        <div className="section">
          <div className="sec-hd"><span className="sec-num">02</span><h2>Propiedades de los límites</h2></div>
          <div className="card"><p style={{marginBottom:16}}>Si <M>{String.raw`\displaystyle\lim_{x\to a}f(x)=L`}</M> y <M>{String.raw`\displaystyle\lim_{x\to a}g(x)=M`}</M>, entonces:</p><table className="prop-table"><thead><tr><th>Propiedad</th><th>Fórmula</th></tr></thead><tbody>{propiedades.map(([n,t])=><tr key={n}><td>{n}</td><td><M>{t}</M></td></tr>)}</tbody></table></div>
          <div className="sub-label">Ejemplos resueltos</div>
          <div className="ex-grid">{propEjemplos.map((ej,i)=><EjCard key={i} ej={ej} prefix={`EJEMPLO ${i+1}  ·  `}/>)}</div>
          <div className="sub-label">Ejercicios — 5 por propiedad</div>
          <p className="hint">Si te equivocas, aparece la solución completa paso a paso.</p>
          <div className="accordion">{Object.entries(propEjercicios).map(([n,e],i)=><PropAccordion key={n} nombre={n} ejercicios={e} startIdx={i*5}/>)}</div>
        </div>
        <div className="divider"/>
        <div className="section">
          <div className="sec-hd"><span className="sec-num">03</span><h2>Formas indeterminadas</h2></div>
          <div className="card"><h3>Las 7 formas indeterminadas</h3><p style={{marginBottom:16}}>Cuando la sustitución directa produce alguna de estas, se requiere un método adicional.</p><div className="indet-grid">{formasIndet.map((f,i)=><div className="indet-chip" key={i}><M>{f}</M></div>)}</div><div className="tip-box"><div className="tip-label">Estrategia EXANI-II</div><p>En el examen, <M>{String.raw`\tfrac{0}{0}`}</M> casi siempre se resuelve por <strong>factorización</strong> o <strong>racionalización</strong>. Para <M>{String.raw`\tfrac{\infty}{\infty}`}</M>, dividir entre la potencia mayor es suficiente.</p></div></div>
          <div className="sub-label">Un ejemplo por cada forma</div>
          <p className="hint">Haz clic para ver la resolución.</p>
          <div className="ex-grid">{indetEjemplos.map((ej,i)=><EjCard key={i} ej={ej} prefix={<span style={{display:"inline-flex",alignItems:"center",gap:8}}><M>{ej.forma}</M>  ·  </span>}/>)}</div>
        </div>
        <div className="divider"/>
        <div className="section">
          <div className="sec-hd"><span className="sec-num">04</span><h2>Métodos de resolución</h2></div>
          {metodosData.map(m=>(
            <div className="method-block" key={m.id}>
              <div className="method-desc"><h3>{m.titulo}</h3><p>{m.desc}</p></div>
              <div className="method-inner">
                <div className="method-sub">Ejemplos resueltos</div>
                <div className="ex-grid">{m.ejemplos.map((ej,i)=><EjCard key={i} ej={ej} prefix={`EJ. ${i+1}  ·  `}/>)}</div>
                <div className="method-sub">Ejercicios de práctica</div>
                {m.ejercicios.map((q,i)=><QzCard key={i} q={q} label={`Ejercicio ${i+1} de ${m.ejercicios.length}`}/>)}
              </div>
            </div>
          ))}
        </div>
        <div className="divider"/>
        <div className="section">
          <div className="sec-hd"><span className="sec-num">05</span><h2>Mini-examen de práctica</h2></div>
          <p className="hint">5 preguntas al estilo EXANI-II integrando todos los métodos.</p>
          {miniExamen.map((q,i)=><QzCard key={i} q={q} label={`Pregunta ${i+1} de ${miniExamen.length}`}/>)}
        </div>
        <div className="divider"/>
        <div className="card" style={{borderColor:"rgba(245,200,66,0.18)"}}>
          <h3>📌 Resumen rápido</h3>
          <ul style={{marginTop:10}}>
            <li>Sustituye directo → si da número real, ese es el límite.</li>
            <li><M>{String.raw`\tfrac{0}{0}`}</M> → factoriza o racionaliza.</li>
            <li><M>{String.raw`\tfrac{k}{0}`}</M> con <M>{String.raw`k\neq0`}</M> → el límite es <M>{String.raw`\pm\infty`}</M> o no existe.</li>
            <li><M>{String.raw`\tfrac{\infty}{\infty}`}</M> → divide entre la potencia mayor del denominador.</li>
            <li>Límite existe <M>{String.raw`\Leftrightarrow`}</M> límite lateral izq. = límite lateral der.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
