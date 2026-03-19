import { useState, useEffect } from "react";

const C = {
  bg:      "#0e0f11",
  surface: "#13151a",
  border:  "#252830",
  blue:    "#3b9eff",
  gold:    "#f59e0b",
  purple:  "#a78bfa",
  teal:    "#34d399",
  orange:  "#f97316",
  crimson: "#f43f5e",
  text:    "#e8eaf0",
  muted:   "#5a6070",
  dim:     "#8a9ab8",
};

const BLOCKS = [
  { label: "Suma y Resta",               color: "#3b9eff", range: [1,   35]  },
  { label: "Producto",                    color: "#34d399", range: [36,  65]  },
  { label: "División",                    color: "#a78bfa", range: [66,  95]  },
  { label: "Razonamiento",                color: "#f59e0b", range: [96,  130] },
  { label: "Decimal ↔ Fracción",          color: "#f97316", range: [131, 160] },
  { label: "Decimal ↔ Porcentaje",        color: "#f43f5e", range: [161, 190] },
  { label: "Problemas de Porcentaje",     color: "#3b9eff", range: [191, 225] },
  { label: "Proporcionalidad",            color: "#34d399", range: [226, 260] },
  { label: "Exponenciación y Radicación", color: "#a78bfa", range: [261, 295] },
  { label: "Signos de Agrupación",        color: "#f59e0b", range: [296, 325] },
];

function getBlock(id) {
  return BLOCKS.find(b => id >= b.range[0] && id <= b.range[1]) || BLOCKS[0];
}
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function fmt(s) {
  const m = Math.floor(s / 60), sec = s % 60;
  return String(m).padStart(2,"0")+":"+String(sec).padStart(2,"0");
}

// ════════════════════════════════════════════════════════════════════
//  MathText – convierte texto mezclado con notación matemática a
//  KaTeX. Carga la librería una sola vez desde CDN.
// ════════════════════════════════════════════════════════════════════

// Mapeo de caracteres Unicode → LaTeX
const SMAP = {
  // superíndices numéricos
  '\u2070':'0','\u00B9':'1','\u00B2':'2','\u00B3':'3','\u2074':'4',
  '\u2075':'5','\u2076':'6','\u2077':'7','\u2078':'8','\u2079':'9',
  '\u207B':'-','\u207A':'+',
  // letras superíndice (leyes de exponentes: aᵐ, aⁿ …)
  '\u1D43':'a','\u1D47':'b','\u1D48':'d','\u1D49':'e','\u1D4D':'g',
  '\u1D4F':'k','\u1D50':'m','\u207F':'n','\u1D52':'o','\u1D56':'p',
  '\u02B3':'r','\u02E2':'s','\u1D57':'t','\u1D58':'u','\u1D5B':'v',
  '\u02B7':'w','\u02E3':'x','\u02B8':'y','\u1D63':'r',
};
const SUP_RE  = new RegExp('[' + Object.keys(SMAP).join('') + ']+', 'g');
const HAS_SUP = new RegExp('[' + Object.keys(SMAP).join('') + ']');

// Marcadores que no pueden aparecer en el texto original
const M0 = '\x01', M1 = '\x02';   // delimitadores math
const PR = '\x03', PR1 = '\x04';  // protect (no-math)

function protect(s, re) {
  const saved = [];
  s = s.replace(re, m => { saved.push(m); return PR + (saved.length - 1) + PR1; });
  return [s, saved];
}
function restore(s, saved) {
  return s.replace(new RegExp(PR + '(\\d+)' + PR1, 'g'), (_, i) => saved[i]);
}

// Convierte un fragmento que ya sabemos que ES math a LaTeX puro
function toLatex(s) {
  // Primero proteger raíces para no tocarlas dos veces
  const saved = [];
  const prot  = x => { saved.push(x); return '\x05' + (saved.length - 1) + '\x06'; };

  // nth root: ³√(expr) o ³√n
  s = s.replace(/([²³⁴⁵])(√)([(（][^)）]+[)）]|[\w\d]+)/g, (_, r, __, x) => {
    const n = {'\u00B2':'2','\u00B3':'3','\u2074':'4','\u2075':'5'}[r] || '2';
    const inner = /^[(（]/.test(x) ? x.slice(1,-1) : x;
    return prot('\\sqrt[' + n + ']{' + toLatexInner(inner) + '}');
  });
  // √(expr) o √word
  s = s.replace(/√([(（][^)）]+[)）]|[\w\d\u00B2-\u00B3\u2070-\u2079\u207B\u00B9]+)/g, (_, x) => {
    const inner = /^[(（]/.test(x) ? x.slice(1,-1) : x;
    return prot('\\sqrt{' + toLatexInner(inner) + '}');
  });

  s = toLatexInner(s);

  // restore root placeholders
  s = s.replace(/\x05(\d+)\x06/g, (_, i) => saved[i]);
  return s;
}

function toLatexInner(s) {
  // 1. Exponente racional: base^(p/q) o base^(−p/q)
  //    base puede ser: dígitos, letra, ) o }
  s = s.replace(/([\w\d\)\}])\^\(([−-]?\d+)\/(\d+)\)/g,
    (_, b, n, d) => b + '^{\\frac{' + n + '}{' + d + '}}');

  // 2. Exponente simple con paréntesis: base^(n)
  s = s.replace(/([\w\d\)\}])\^\(([−-]?\d+)\)/g, (_, b, n) => b + '^{' + n + '}');

  // 3. Superíndices Unicode numéricos y de letras
  s = s.replace(/([a-zA-Z0-9\}\)])([\u2070\u00B9\u00B2\u00B3\u2074-\u2079\u207B\u207A\u1D43-\u1D63\u207F]+)/g,
    (_, base, sup) => {
      const exp = [...sup].map(c => SMAP[c] || c).join('');
      return base + '^{' + exp + '}';
    });

  // 4. Fracciones alfanuméricas: a/b donde a,b son dígito(s) o LETRA SOLA
  //    Excluir si el lado tiene más de 2 chars alfanuméricos (son palabras, no vars)
  s = s.replace(/(?<![a-zA-Z\d$])([−-]?[a-zA-Z\d]{1,3})\/([−-]?[a-zA-Z\d]{1,3})(?![a-zA-Z\d])/g,
    (m, n, d) => {
      // No convertir unidades tipo kg, km, mL
      if (/^[a-zA-Z]{2,}$/.test(n) || /^[a-zA-Z]{2,}$/.test(d)) return m;
      return '\\frac{' + n + '}{' + d + '}';
    });

  return s;
}

// Detecta si un token contiene notación matemática
function hasMath(tok) {
  return /[\^√\u00B2\u00B3\u2070-\u2079\u207A-\u207F\u1D43-\u1D63]/.test(tok)
    || /(?<![a-zA-Z$])[-−]?\d+\/\d+(?!\d)/.test(tok)          // fracción numérica
    || /(?<![a-zA-Z$\d])[a-zA-Z]\/\d|\d\/[a-zA-Z](?![a-zA-Z])/.test(tok); // frac alfanum
}

// Parte el texto en segmentos {math:bool, s:string}
function splitMath(text) {
  const s0 = String(text ?? '');

  // Proteger importes monetarios: $180, $1 200, $84 000
  const [s1, mon] = protect(s0, /\$[\d\s,\.]+(?=[^\d/]|$)/g);

  const out   = [];
  let   buf   = '';
  let   mMode = false;

  const flush = () => { if (buf) { out.push({ math: mMode, s: buf }); buf = ''; } };

  // Tokenizamos por espacios, comas, puntos, signos de puntuación
  const tokens = s1.split(/(\s+|[,;:¿?¡!\.]+)/);

  for (const tok of tokens) {
    const isMath = hasMath(tok);
    if (isMath !== mMode) { flush(); mMode = isMath; }
    buf += tok;
  }
  flush();

  // Restaurar importes y convertir partes math a LaTeX
  return out.map(seg => ({
    math: seg.math,
    s: restore(seg.s, mon),
    latex: seg.math ? toLatex(restore(seg.s, mon)) : '',
  }));
}

let _katex = null, _katexP = null;
function loadKaTeX() {
  if (_katex) return Promise.resolve(_katex);
  if (_katexP) return _katexP;
  _katexP = new Promise(res => {
    if (window.katex) { _katex = window.katex; res(_katex); return; }
    const lnk = document.createElement('link');
    lnk.rel  = 'stylesheet';
    lnk.href = 'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css';
    document.head.appendChild(lnk);
    const sc  = document.createElement('script');
    sc.src    = 'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js';
    sc.onload = () => { _katex = window.katex; res(_katex); };
    document.head.appendChild(sc);
  });
  return _katexP;
}

function MathText({ children, style }) {
  const [ktx, setKtx] = useState(null);
  useEffect(() => { loadKaTeX().then(setKtx); }, []);
  const text = String(children ?? '');
  if (!ktx) return <span style={style}>{text}</span>;
  const segs = splitMath(text);
  return (
    <span style={style}>
      {segs.map((seg, i) =>
        seg.math
          ? <span key={i} dangerouslySetInnerHTML={{
              __html: ktx.renderToString(seg.latex, { throwOnError: false, displayMode: false })
            }} />
          : <span key={i}>{seg.s}</span>
      )}
    </span>
  );
}
// ════════════════════════════════════════════════════════════════════


const questions = [


  // ══ BLOQUE 0 · SUMA Y RESTA  (1–35) ══
  // Mismo denominador
  {id:1, block:0, q:"¿Cuánto es 1/4 + 2/4?", opts:["3/4","1/2","3/8","5/4"], ans:"3/4", exp:"Mismo denominador: suma numeradores. 1+2=3 → 3/4."},
  {id:2, block:0, q:"¿Cuánto es 3/8 + 4/8?", opts:["7/8","7/16","1","1/2"], ans:"7/8", exp:"Mismo denominador: 3+4=7 → 7/8."},
  {id:3, block:0, q:"¿Cuánto es 5/7 − 2/7?", opts:["3/7","3/14","7/7","1"], ans:"3/7", exp:"Mismo denominador: 5−2=3 → 3/7."},
  {id:4, block:0, q:"¿Cuánto es 4/9 + 2/9?", opts:["6/9","2/3","6/18","1/3"], ans:"2/3", exp:"4+2=6 → 6/9 = 2/3."},
  {id:5, block:0, q:"¿Cuánto es 9/10 − 4/10?", opts:["1/2","5/10","5/0","4/10"], ans:"1/2", exp:"9−4=5 → 5/10 = 1/2."},
  // Mitades y cuartos — se nota la necesidad del denominador común
  {id:6, block:0, q:"¿Cuánto es 1/2 + 1/4? (Pista: convierte 1/2 a cuartos)", opts:["3/4","2/6","1/3","5/8"], ans:"3/4", exp:"1/2 = 2/4. Entonces 2/4 + 1/4 = 3/4. La clave es convertir al mismo denominador."},
  {id:7, block:0, q:"¿Cuánto es 3/4 − 1/2? (Pista: convierte 1/2 a cuartos)", opts:["1/4","2/2","1/2","1/8"], ans:"1/4", exp:"1/2 = 2/4. Entonces 3/4 − 2/4 = 1/4."},
  {id:8, block:0, q:"¿Cuánto es 1/2 + 1/8? (Pista: convierte 1/2 a octavos)", opts:["5/8","2/10","4/10","6/8"], ans:"5/8", exp:"1/2 = 4/8. Entonces 4/8 + 1/8 = 5/8."},
  {id:9, block:0, q:"¿Cuánto es 3/4 + 3/8?", opts:["9/8","6/12","3/4","3/8"], ans:"9/8", exp:"MCM(4,8)=8. 3/4=6/8. 6/8+3/8=9/8."},
  {id:10, block:0, q:"¿Cuánto es 5/8 − 1/4?", opts:["3/8","4/4","1/2","4/8"], ans:"3/8", exp:"1/4=2/8. 5/8−2/8=3/8."},
  // Mitades y tercios
  {id:11, block:0, q:"¿Cuánto es 1/2 + 1/3? (Para sumar, ¿a qué denominador común se llega?)", opts:["5/6","2/5","2/6","1/6"], ans:"5/6", exp:"MCM(2,3)=6. 1/2=3/6, 1/3=2/6. Suma: 3/6+2/6=5/6. Las fracciones deben tener el mismo denominador para sumarse."},
  {id:12, block:0, q:"¿Cuánto es 2/3 + 1/6?", opts:["5/6","3/9","3/6","1/2"], ans:"5/6", exp:"MCM(3,6)=6. 2/3=4/6. 4/6+1/6=5/6."},
  {id:13, block:0, q:"¿Cuánto es 5/6 − 1/3?", opts:["1/2","4/3","4/6","1/3"], ans:"1/2", exp:"1/3=2/6. 5/6−2/6=3/6=1/2."},
  {id:14, block:0, q:"¿Cuánto es 1/3 + 1/4?", opts:["7/12","2/7","2/12","1/6"], ans:"7/12", exp:"MCM(3,4)=12. 1/3=4/12, 1/4=3/12. Suma: 7/12."},
  {id:15, block:0, q:"¿Cuánto es 3/4 + 2/3?", opts:["17/12","5/7","5/12","7/12"], ans:"17/12", exp:"MCM(4,3)=12. 3/4=9/12, 2/3=8/12. 9/12+8/12=17/12."},
  {id:16, block:0, q:"¿Cuánto es 5/6 − 3/4?", opts:["1/12","2/2","1/6","2/10"], ans:"1/12", exp:"MCM(6,4)=12. 5/6=10/12, 3/4=9/12. 10/12−9/12=1/12."},
  {id:17, block:0, q:"¿Cuánto es 2/5 + 1/3?", opts:["11/15","3/8","3/15","1/5"], ans:"11/15", exp:"MCM(5,3)=15. 2/5=6/15, 1/3=5/15. 6/15+5/15=11/15."},
  {id:18, block:0, q:"¿Cuánto es 7/8 − 2/3?", opts:["5/24","5/5","1/24","9/24"], ans:"5/24", exp:"MCM(8,3)=24. 7/8=21/24, 2/3=16/24. 21/24−16/24=5/24."},
  {id:19, block:0, q:"¿Cuánto es 3/5 + 4/7?", opts:["41/35","7/12","7/35","12/35"], ans:"41/35", exp:"MCM(5,7)=35. 3/5=21/35, 4/7=20/35. 21/35+20/35=41/35."},
  {id:20, block:0, q:"¿Cuánto es 5/9 − 1/6?", opts:["7/18","4/3","4/9","1/18"], ans:"7/18", exp:"MCM(9,6)=18. 5/9=10/18, 1/6=3/18. 10/18−3/18=7/18."},
  // Números mixtos
  {id:21, block:0, q:"¿Cuánto es 1½ + 2¼?", opts:["3¾","3½","4","3¼"], ans:"3¾", exp:"1½=6/4, 2¼=9/4. Suma: 15/4=3¾."},
  {id:22, block:0, q:"¿Cuánto es 4¼ − 1¾?", opts:["2½","2¼","3¼","3"], ans:"2½", exp:"4¼=17/4, 1¾=7/4. Resta: 10/4=5/2=2½."},
  {id:23, block:0, q:"¿Cuánto es 2⅔ − 1¼?", opts:["1 5/12","1¼","1⅓","1 7/12"], ans:"1 5/12", exp:"2⅔=32/12, 1¼=15/12. Resta: 17/12=1 5/12."},
  {id:24, block:0, q:"¿Cuánto es 3⅕ + 2⅔?", opts:["5 13/15","6 1/15","5⅓","5 11/15"], ans:"5 13/15", exp:"3⅕=48/15, 2⅔=40/15. Suma: 88/15=5 13/15."},
  // Fracciones negativas
  {id:25, block:0, q:"¿Cuánto es −1/3 + 2/3?", opts:["1/3","−1/3","1","−1"], ans:"1/3", exp:"(−1+2)/3=1/3."},
  {id:26, block:0, q:"¿Cuánto es 1/2 − 3/4?", opts:["−1/4","1/4","−1/2","1/6"], ans:"−1/4", exp:"1/2=2/4. 2/4−3/4=−1/4."},
  {id:27, block:0, q:"¿Cuánto es −3/4 + 1/8?", opts:["−5/8","−2/4","−4/8","−1/2"], ans:"−5/8", exp:"−3/4=−6/8. −6/8+1/8=−5/8."},
  {id:28, block:0, q:"¿Cuánto es −5/6 + 1/3?", opts:["−1/2","−4/3","−1/3","−2/9"], ans:"−1/2", exp:"1/3=2/6. −5/6+2/6=−3/6=−1/2."},
  // Tres fracciones
  {id:29, block:0, q:"¿Cuánto es 1/2 + 1/3 + 1/6?", opts:["1","3/11","1/2","2/3"], ans:"1", exp:"MCM=6. 3/6+2/6+1/6=6/6=1."},
  {id:30, block:0, q:"¿Cuánto es 3/4 − 1/2 + 1/8?", opts:["3/8","1/4","5/8","1/2"], ans:"3/8", exp:"MCM=8. 6/8−4/8+1/8=3/8."},
  {id:31, block:0, q:"¿Cuánto es 2/3 + 1/4 − 1/6?", opts:["3/4","1/2","7/12","11/12"], ans:"3/4", exp:"MCM=12. 8/12+3/12−2/12=9/12=3/4."},
  {id:32, block:0, q:"¿Cuánto es 7/12 + 5/8?", opts:["29/24","12/20","12/24","17/24"], ans:"29/24", exp:"MCM(12,8)=24. 14/24+15/24=29/24."},
  {id:33, block:0, q:"¿Cuánto es 11/15 − 7/10 + 1/6?", opts:["1/5","1/6","1/30","7/30"], ans:"1/5", exp:"MCM=30. 22/30−21/30+5/30=6/30=1/5."},
  {id:34, block:0, q:"¿Cuánto es 5/12 + 3/8 − 1/6?", opts:["5/8","5/9","13/24","7/24"], ans:"5/8", exp:"MCM=24. 10/24+9/24−4/24=15/24=5/8."},
  {id:35, block:0, q:"¿Cuánto es 7/8 + 5/6 − 3/4?", opts:["23/24","11/12","1","21/24"], ans:"23/24", exp:"MCM=24. 21/24+20/24−18/24=23/24."},

  // ══ BLOQUE 1 · PRODUCTO  (36–65) ══
  // Entero × fracción
  {id:36, block:1, q:"Calcula: 3 × 1/4", opts:["3/4","1/4","3/12","3/8"], ans:"3/4", exp:"3 × 1/4 = 3/4."},
  {id:37, block:1, q:"Calcula: 2 × 3/5", opts:["6/5","3/5","6/10","2/5"], ans:"6/5", exp:"2×3=6, denominador 5. Resultado: 6/5."},
  {id:38, block:1, q:"Calcula: 4 × 3/8", opts:["3/2","12/8","4/8","3/32"], ans:"3/2", exp:"4×3=12. 12/8=3/2."},
  {id:39, block:1, q:"Calcula: 6 × 5/9", opts:["10/3","5/9","30/9","11/9"], ans:"10/3", exp:"6×5=30. 30/9=10/3."},
  {id:40, block:1, q:"Calcula: 8 × 3/4", opts:["6","3/32","24/4","2"], ans:"6", exp:"8×3=24. 24/4=6."},
  {id:41, block:1, q:"Calcula: 5 × 2/15", opts:["2/3","10/15","5/15","1/3"], ans:"2/3", exp:"5×2=10. 10/15=2/3."},
  // Fracción × fracción (primero factores simples)
  {id:42, block:1, q:"Calcula: 1/2 × 1/3", opts:["1/6","2/5","1/5","2/6"], ans:"1/6", exp:"Multiplica numeradores y denominadores: 1×1=1, 2×3=6. Resultado: 1/6."},
  {id:43, block:1, q:"Calcula: 2/3 × 3/4", opts:["1/2","5/7","6/7","5/12"], ans:"1/2", exp:"2×3=6, 3×4=12. 6/12=1/2."},
  {id:44, block:1, q:"Calcula: 3/5 × 5/6", opts:["1/2","8/11","15/30","1/3"], ans:"1/2", exp:"3×5=15, 5×6=30. 15/30=1/2."},
  {id:45, block:1, q:"Calcula: 4/7 × 7/8", opts:["1/2","11/15","28/56","4/8"], ans:"1/2", exp:"4×7=28, 7×8=56. 28/56=1/2."},
  {id:46, block:1, q:"Calcula: 5/9 × 3/10", opts:["1/6","8/19","15/90","1/3"], ans:"1/6", exp:"5×3=15, 9×10=90. 15/90=1/6."},
  {id:47, block:1, q:"Calcula: 4/5 × 15/8", opts:["3/2","60/40","1/2","2/3"], ans:"3/2", exp:"Simplifica cruzado: 4÷4=1, 8÷4=2; 15÷5=3, 5÷5=1. Resultado: 3/2."},
  {id:48, block:1, q:"Calcula: 7/12 × 8/21", opts:["2/9","56/252","1/3","4/9"], ans:"2/9", exp:"Simplifica: 7÷7=1/3 y 8÷4=2, 12÷4=3. → 2/9."},
  {id:49, block:1, q:"Calcula: 9/16 × 4/3", opts:["3/4","36/48","12/48","1/2"], ans:"3/4", exp:"9÷3=3, 3÷3=1; 4÷4=1, 16÷4=4 → 3/4."},
  // Con negativos
  {id:50, block:1, q:"Calcula: (−2/3) × (3/4)", opts:["−1/2","1/2","−1/4","1/4"], ans:"−1/2", exp:"Signos distintos → resultado negativo. 2×3=6, 3×4=12 → −6/12=−1/2."},
  {id:51, block:1, q:"Calcula: (−3/5) × (−5/6)", opts:["1/2","−1/2","−8/11","1/4"], ans:"1/2", exp:"Signos iguales → positivo. 3×5=15, 5×6=30 → 15/30=1/2."},
  {id:52, block:1, q:"Calcula: (−4/9) × (3/8)", opts:["−1/6","1/6","−12/17","−7/17"], ans:"−1/6", exp:"Negativo. 4×3=12, 9×8=72 → −12/72=−1/6."},
  {id:53, block:1, q:"Calcula: (−2/5) × (−5/2)", opts:["1","−1","4/7","−4/7"], ans:"1", exp:"Signos iguales → positivo. 2×5=10, 5×2=10 → 10/10=1."},
  // Potencias de fracciones
  {id:54, block:1, q:"Calcula: (1/2)²", opts:["1/4","1/2","2","1/8"], ans:"1/4", exp:"(1/2)²=1²/2²=1/4."},
  {id:55, block:1, q:"Calcula: (2/3)²", opts:["4/9","2/6","4/6","2/3"], ans:"4/9", exp:"(2/3)²=4/9."},
  {id:56, block:1, q:"Calcula: (3/4)³", opts:["27/64","9/12","9/64","27/12"], ans:"27/64", exp:"(3/4)³=3³/4³=27/64."},
  {id:57, block:1, q:"Calcula: (−1/2)³", opts:["−1/8","1/8","−1/6","1/4"], ans:"−1/8", exp:"Potencia impar de negativo = negativo. (1/2)³=1/8 → −1/8."},
  // Números mixtos
  {id:58, block:1, q:"Calcula: 1½ × 2/3", opts:["1","2/3","3/2","4/3"], ans:"1", exp:"1½=3/2. 3/2 × 2/3 = 6/6 = 1."},
  {id:59, block:1, q:"Calcula: 2⅓ × 1½", opts:["3½","3","4","2⅚"], ans:"3½", exp:"2⅓=7/3, 1½=3/2. 7/3×3/2=21/6=7/2=3½."},
  {id:60, block:1, q:"Calcula: 3¼ × 4/13", opts:["1","2","3/4","1¼"], ans:"1", exp:"3¼=13/4. 13/4×4/13=52/52=1."},
  {id:61, block:1, q:"Calcula: 2⅔ × 1¼", opts:["10/3","3","8/3","3⅓"], ans:"10/3", exp:"2⅔=8/3, 1¼=5/4. 8/3×5/4=40/12=10/3."},
  // Tres factores
  {id:62, block:1, q:"Calcula: 1/2 × 2/3 × 3/4", opts:["1/4","6/24","1/2","3/8"], ans:"1/4", exp:"(1×2×3)/(2×3×4)=6/24=1/4."},
  {id:63, block:1, q:"Calcula: 3/4 × 8/9 × 3/2", opts:["1","72/72","3/2","2/3"], ans:"1", exp:"(3×8×3)/(4×9×2)=72/72=1."},
  {id:64, block:1, q:"Calcula: (−1/2) × (2/3) × (−3/4)", opts:["1/4","−1/4","1/2","−1/2"], ans:"1/4", exp:"Dos negativos → positivo. Resultado: (1×2×3)/(2×3×4)=1/4."},
  {id:65, block:1, q:"Calcula: 5/9 × 27/10", opts:["3/2","135/90","3/10","5/2"], ans:"3/2", exp:"5÷5=1, 10÷5=2; 27÷9=3, 9÷9=1 → 3/2."},

  // ══ BLOQUE 2 · DIVISIÓN  (66–95) ══
  // Entero ÷ fracción
  {id:66, block:2, q:"Calcula: 3 ÷ (1/2)", opts:["6","3/2","1/6","1/2"], ans:"6", exp:"Dividir = multiplicar por el recíproco. 3 × 2/1 = 6."},
  {id:67, block:2, q:"Calcula: 4 ÷ (2/3)", opts:["6","8/3","2/12","3/8"], ans:"6", exp:"4 × 3/2 = 12/2 = 6."},
  {id:68, block:2, q:"Calcula: 5 ÷ (5/6)", opts:["6","1","25/6","5/30"], ans:"6", exp:"5 × 6/5 = 30/5 = 6."},
  {id:69, block:2, q:"Calcula: 2 ÷ (4/5)", opts:["5/2","8/5","2/5","8/10"], ans:"5/2", exp:"2 × 5/4 = 10/4 = 5/2."},
  {id:70, block:2, q:"Calcula: 6 ÷ (3/4)", opts:["8","4","9/2","18/4"], ans:"8", exp:"6 × 4/3 = 24/3 = 8."},
  // Fracción ÷ entero
  {id:71, block:2, q:"Calcula: (1/2) ÷ 3", opts:["1/6","3/2","2/3","1/3"], ans:"1/6", exp:"1/2 × 1/3 = 1/6."},
  {id:72, block:2, q:"Calcula: (3/4) ÷ 2", opts:["3/8","6/4","3/2","2/3"], ans:"3/8", exp:"3/4 × 1/2 = 3/8."},
  {id:73, block:2, q:"Calcula: (2/5) ÷ 4", opts:["1/10","8/5","2/20","4/10"], ans:"1/10", exp:"2/5 × 1/4 = 2/20 = 1/10."},
  {id:74, block:2, q:"Calcula: (7/8) ÷ 7", opts:["1/8","7/56","8/7","7/8"], ans:"1/8", exp:"7/8 × 1/7 = 7/56 = 1/8."},
  // Fracción ÷ fracción
  {id:75, block:2, q:"Calcula: (1/2) ÷ (1/3)", opts:["3/2","1/6","2/3","1/5"], ans:"3/2", exp:"1/2 × 3/1 = 3/2. Recuerda: a/b ÷ c/d = a/b × d/c."},
  {id:76, block:2, q:"Calcula: (3/4) ÷ (1/2)", opts:["3/2","3/8","6/4","1/4"], ans:"3/2", exp:"3/4 × 2/1 = 6/4 = 3/2."},
  {id:77, block:2, q:"Calcula: (2/3) ÷ (4/9)", opts:["3/2","8/27","6/12","2/4"], ans:"3/2", exp:"2/3 × 9/4 = 18/12 = 3/2."},
  {id:78, block:2, q:"Calcula: (5/6) ÷ (5/3)", opts:["1/2","5/2","25/18","15/30"], ans:"1/2", exp:"5/6 × 3/5 = 15/30 = 1/2."},
  {id:79, block:2, q:"Calcula: (7/8) ÷ (7/4)", opts:["1/2","49/32","7/2","2/7"], ans:"1/2", exp:"7/8 × 4/7 = 28/56 = 1/2."},
  {id:80, block:2, q:"Calcula: (3/8) ÷ (9/16)", opts:["2/3","27/128","3/9","48/72"], ans:"2/3", exp:"3/8 × 16/9 = 48/72 = 2/3."},
  {id:81, block:2, q:"Calcula: (5/12) ÷ (15/8)", opts:["2/9","75/96","8/36","5/9"], ans:"2/9", exp:"5/12 × 8/15 = 40/180 = 2/9."},
  {id:82, block:2, q:"Calcula: (9/4) ÷ (3/8)", opts:["6","27/32","72/12","3/2"], ans:"6", exp:"9/4 × 8/3 = 72/12 = 6."},
  {id:83, block:2, q:"Calcula: (4/15) ÷ (8/5)", opts:["1/6","32/75","20/120","1/3"], ans:"1/6", exp:"4/15 × 5/8 = 20/120 = 1/6."},
  // Con negativos
  {id:84, block:2, q:"Calcula: (−2/3) ÷ (1/4)", opts:["−8/3","−2/12","−1/6","8/3"], ans:"−8/3", exp:"−2/3 × 4/1 = −8/3."},
  {id:85, block:2, q:"Calcula: (3/5) ÷ (−3/10)", opts:["−2","2","−9/50","9/50"], ans:"−2", exp:"3/5 × (−10/3) = −30/15 = −2."},
  {id:86, block:2, q:"Calcula: (−4/7) ÷ (−8/21)", opts:["3/2","−3/2","4/12","−4/12"], ans:"3/2", exp:"Signos iguales → positivo. 4/7 × 21/8 = 84/56 = 3/2."},
  // Números mixtos
  {id:87, block:2, q:"Calcula: 2½ ÷ (5/4)", opts:["2","10/8","8/10","1/2"], ans:"2", exp:"2½=5/2. 5/2 × 4/5 = 20/10 = 2."},
  {id:88, block:2, q:"Calcula: 3⅓ ÷ (5/6)", opts:["4","10/3","1/4","20/18"], ans:"4", exp:"3⅓=10/3. 10/3 × 6/5 = 60/15 = 4."},
  {id:89, block:2, q:"Calcula: 4½ ÷ 1½", opts:["3","9/3","6","2"], ans:"3", exp:"4½=9/2, 1½=3/2. 9/2 × 2/3 = 18/6 = 3."},
  // Comprobación de resultados
  {id:90, block:2, q:"Si 3/4 ÷ x = 3/8, ¿cuál es x?", opts:["2","1/2","3/2","8/3"], ans:"2", exp:"3/4 ÷ x = 3/8 → x = 3/4 ÷ (3/8) = 3/4 × 8/3 = 24/12 = 2."},
  {id:91, block:2, q:"Si x ÷ (2/5) = 6, ¿cuál es x?", opts:["12/5","3","12","5/12"], ans:"12/5", exp:"x = 6 × 2/5 = 12/5."},
  {id:92, block:2, q:"Calcula: (5/8) ÷ (15/4)", opts:["1/6","75/32","20/120","1/3"], ans:"1/6", exp:"5/8 × 4/15 = 20/120 = 1/6."},
  {id:93, block:2, q:"Calcula: (8/15) ÷ (4/5)", opts:["2/3","32/75","40/60","8/12"], ans:"2/3", exp:"8/15 × 5/4 = 40/60 = 2/3."},
  {id:94, block:2, q:"Calcula: (6/7) ÷ (12/7)", opts:["1/2","72/49","6/12","42/84"], ans:"1/2", exp:"6/7 × 7/12 = 42/84 = 1/2."},
  {id:95, block:2, q:"Calcula: (3/5) ÷ (9/10)", opts:["2/3","27/50","30/45","3/9"], ans:"2/3", exp:"3/5 × 10/9 = 30/45 = 2/3."},

  // ══ BLOQUE 3 · PROBLEMAS DE RAZONAMIENTO  (96–130) ══
  {id:96, block:3, q:"María comió 1/3 de una pizza y Juan comió 1/4. ¿Qué fracción comieron entre los dos?", opts:["7/12","2/7","5/12","1/2"], ans:"7/12", exp:"1/3+1/4 = 4/12+3/12 = 7/12."},
  {id:97, block:3, q:"De un rollo de tela de 5/6 m se usaron 1/3 m. ¿Cuántos metros sobraron?", opts:["1/2 m","4/3 m","2/3 m","1/6 m"], ans:"1/2 m", exp:"5/6−1/3=5/6−2/6=3/6=1/2 m."},
  {id:98, block:3, q:"Un albañil coloca 3/4 de muro por día. ¿Cuántos días necesita para completar 3 muros?", opts:["4 días","3 días","2 días","6 días"], ans:"4 días", exp:"3 ÷ (3/4) = 3 × 4/3 = 4 días."},
  {id:99, block:3, q:"De 12 kg de arroz se usaron 2/3. ¿Cuántos kg se usaron?", opts:["8 kg","6 kg","4 kg","10 kg"], ans:"8 kg", exp:"2/3 × 12 = 8 kg."},
  {id:100, block:3, q:"Un depósito tiene capacidad de 3/4 m³ y está lleno a 2/3 de su capacidad. ¿Cuántos m³ contiene?", opts:["1/2 m³","9/8 m³","1/4 m³","2/3 m³"], ans:"1/2 m³", exp:"2/3 × 3/4 = 6/12 = 1/2 m³."},
  {id:101, block:3, q:"Un estudiante ha leído 2/5 de un libro de 200 páginas. ¿Cuántas páginas le faltan?", opts:["120","80","100","60"], ans:"120", exp:"Leídas: 2/5×200=80. Faltan: 200−80=120 páginas."},
  {id:102, block:3, q:"En un grupo de 30 alumnos, 2/5 son mujeres. ¿Cuántos hombres hay?", opts:["18","12","15","20"], ans:"18", exp:"Mujeres: 2/5×30=12. Hombres: 30−12=18."},
  {id:103, block:3, q:"Un terreno de 5/6 de hectárea se divide en partes iguales entre 5 personas. ¿Qué fracción recibe cada una?", opts:["1/6 ha","5/30 ha","1/5 ha","1/3 ha"], ans:"1/6 ha", exp:"5/6 ÷ 5 = 5/6 × 1/5 = 1/6 ha."},
  {id:104, block:3, q:"Ana hizo 3/8 de su tarea el lunes y 1/4 el martes. ¿Qué fracción le falta?", opts:["3/8","5/8","1/2","1/4"], ans:"3/8", exp:"Hecha: 3/8+2/8=5/8. Falta: 1−5/8=3/8."},
  {id:105, block:3, q:"Un negocio tuvo ganancias de $1 200. Se destinó 1/3 para gastos y 1/4 para ahorros. ¿Cuánto queda?", opts:["$500","$600","$400","$700"], ans:"$500", exp:"1−1/3−1/4=5/12 queda. 5/12×$1200=$500."},
  {id:106, block:3, q:"Si 3/4 de un número es 18, ¿cuál es ese número?", opts:["24","16","12","27"], ans:"24", exp:"n × 3/4 = 18 → n = 18 × 4/3 = 24."},
  {id:107, block:3, q:"Si 2/5 de un número es 14, ¿cuál es ese número?", opts:["35","28","7","40"], ans:"35", exp:"n × 2/5 = 14 → n = 14 × 5/2 = 35."},
  {id:108, block:3, q:"Un auto recorre 3/4 de km por minuto. ¿Cuántos km recorre en 8 minutos?", opts:["6 km","8 km","5 km","10 km"], ans:"6 km", exp:"8 × 3/4 = 6 km."},
  {id:109, block:3, q:"¿Cuántos trozos de 3/8 m se pueden cortar de una tabla de 3 m?", opts:["8","6","4","10"], ans:"8", exp:"3 ÷ (3/8) = 3 × 8/3 = 8 trozos."},
  {id:110, block:3, q:"Un atleta corre 5/6 de km por minuto. ¿Cuántos minutos tarda en correr 5 km?", opts:["6 min","5 min","4 min","8 min"], ans:"6 min", exp:"5 ÷ (5/6) = 5 × 6/5 = 6 min."},
  {id:111, block:3, q:"Carlos tiene 3/4 de barra de chocolate y regala 1/3 de su parte. ¿Qué fracción de la barra original le queda?", opts:["1/2","1/4","2/3","5/12"], ans:"1/2", exp:"Regala: 1/3×3/4=1/4. Le queda: 3/4−1/4=1/2."},
  {id:112, block:3, q:"Una receta requiere 2/3 de taza de azúcar para 12 galletas. ¿Cuántas tazas para 36 galletas?", opts:["2 tazas","1 taza","3 tazas","4/3 tazas"], ans:"2 tazas", exp:"36 galletas=3 veces más. 3 × 2/3 = 2 tazas."},
  {id:113, block:3, q:"Se mezclan 1½ litros de jugo con 2/3 de litro de agua. ¿Cuántos litros en total?", opts:["13/6 L","2 1/6 L","7/5 L","2 L"], ans:"13/6 L", exp:"3/2+2/3=9/6+4/6=13/6 L."},
  {id:114, block:3, q:"Un pastel: 1/4 para Ana, 1/3 para Luis y el resto para Carmen. ¿Qué fracción recibe Carmen?", opts:["5/12","7/12","1/3","1/4"], ans:"5/12", exp:"1−1/4−1/3=12/12−3/12−4/12=5/12."},
  {id:115, block:3, q:"Una mezcla tiene 3/5 de agua y el resto es leche. Si hay 12 litros de leche, ¿cuántos litros tiene la mezcla?", opts:["30 L","20 L","18 L","25 L"], ans:"30 L", exp:"Leche=2/5 de la mezcla. 2/5×T=12 → T=30 L."},
  {id:116, block:3, q:"Un viaje de 360 km ya se completó en sus 3/4 partes. ¿Cuántos km faltan?", opts:["90 km","270 km","120 km","60 km"], ans:"90 km", exp:"Recorridos: 3/4×360=270. Faltan: 360−270=90 km."},
  {id:117, block:3, q:"Una persona gana $4 000 al mes. Gasta 2/5 en renta y 1/4 en comida. ¿Cuánto queda?", opts:["$1 400","$1 600","$1 000","$2 400"], ans:"$1 400", exp:"Renta: $1600. Comida: $1000. Queda: $4000−$1600−$1000=$1400."},
  {id:118, block:3, q:"Un grifo llena 1/6 del depósito por hora. ¿En cuántas horas llena el depósito?", opts:["6 h","3 h","12 h","4 h"], ans:"6 h", exp:"1 ÷ (1/6) = 6 horas."},
  {id:119, block:3, q:"Dos grifos: uno llena 1/3 del depósito por hora y otro 1/6. ¿Qué fracción llenan juntos en 1 hora?", opts:["1/2","1/3","1/4","2/9"], ans:"1/2", exp:"1/3+1/6=2/6+1/6=3/6=1/2 del depósito por hora."},
  {id:120, block:3, q:"Una tubería llena el depósito en 4 horas y otra lo vacía en 6 horas. Abiertas simultáneamente, ¿cuántas horas tarda en llenarse?", opts:["12 h","3 h","24 h","10 h"], ans:"12 h", exp:"Tasa neta: 1/4−1/6=3/12−2/12=1/12 por hora. Tiempo: 12 horas."},
  {id:121, block:3, q:"Pedro estudió 2¼ h el lunes, 1½ h el martes y 3/4 h el miércoles. ¿Cuántas horas estudió en total?", opts:["4½ h","5 h","4 h","3¾ h"], ans:"4½ h", exp:"9/4+6/4+3/4=18/4=4½ h."},
  {id:122, block:3, q:"Una herencia de $90 000: el hijo mayor recibe 2/3 y el menor el resto. ¿Cuánto recibe el menor?", opts:["$30 000","$60 000","$45 000","$20 000"], ans:"$30 000", exp:"Mayor: 2/3×90000=$60000. Menor: $90000−$60000=$30000."},
  {id:123, block:3, q:"Un queso de 2 kg se corta en porciones de 1/8 kg. ¿Cuántas porciones resultan?", opts:["16","8","12","24"], ans:"16", exp:"2 ÷ (1/8) = 2 × 8 = 16 porciones."},
  {id:124, block:3, q:"Un trabajador cobra $600 semanales y le descuentan 1/6 por impuestos. ¿Cuánto recibe neto?", opts:["$500","$100","$400","$550"], ans:"$500", exp:"Descuento: 1/6×600=$100. Neto: $600−$100=$500."},
  {id:125, block:3, q:"La longitud de un río es 4/5 de la de otro. Si el segundo mide 150 km, ¿cuánto mide el primero?", opts:["120 km","125 km","100 km","135 km"], ans:"120 km", exp:"4/5 × 150 = 120 km."},
  {id:126, block:3, q:"Un tanque se llena con 3 tuberías: la primera tarda 3 h, la segunda 6 h y la tercera 9 h sola. ¿Cuánto tardan las tres juntas (aprox)?", opts:["18/11 h","3/2 h","2 h","1 h"], ans:"18/11 h", exp:"Tasa: 1/3+1/6+1/9=6/18+3/18+2/18=11/18 del depósito por hora. Tiempo: 18/11 h ≈ 1.6 h."},
  {id:127, block:3, q:"Un trozo de cable mide 5/6 de metro. Se cortan 3/8 de metro. ¿Cuánto queda?", opts:["11/24 m","1/4 m","5/24 m","7/24 m"], ans:"11/24 m", exp:"MCM(6,8)=24. 20/24−9/24=11/24 m."},
  {id:128, block:3, q:"De 3/4 de litro de pintura se usaron 2/3 de esa cantidad. ¿Cuánto se usó?", opts:["1/2 L","1/4 L","2/4 L","3/8 L"], ans:"1/2 L", exp:"2/3 × 3/4 = 6/12 = 1/2 L."},
  {id:129, block:3, q:"Tres amigos compran una pizza. Andrés paga 2/5 del precio, Beto paga 1/3 y Carmen el resto. ¿Qué fracción del precio paga Carmen?", opts:["4/15","11/15","1/5","2/15"], ans:"4/15", exp:"2/5+1/3=6/15+5/15=11/15. Carmen: 1−11/15=4/15."},
  {id:130, block:3, q:"Un ciclista completa 2/3 de un recorrido de 48 km en la primera etapa y 1/4 del recorrido en la segunda. ¿Cuántos km completó en total en esas dos etapas?", opts:["44 km","40 km","36 km","32 km"], ans:"44 km", exp:"1ª etapa: 2/3×48=32 km. 2ª etapa: 1/4×48=12 km. Total: 44 km."},

  // ══ BLOQUE 4 · DECIMAL ↔ FRACCIÓN  (131–160) ══
  {id:131, block:4, q:"Convierte 0.5 a fracción en mínima expresión.", opts:["1/2","5/10","1/5","5/1"], ans:"1/2", exp:"0.5=5/10=1/2."},
  {id:132, block:4, q:"Convierte 0.25 a fracción en mínima expresión.", opts:["1/4","25/100","2/5","1/8"], ans:"1/4", exp:"0.25=25/100=1/4."},
  {id:133, block:4, q:"Convierte 0.75 a fracción en mínima expresión.", opts:["3/4","7/5","7/10","75/10"], ans:"3/4", exp:"0.75=75/100=3/4."},
  {id:134, block:4, q:"Convierte 0.4 a fracción en mínima expresión.", opts:["2/5","4/5","4/10","1/4"], ans:"2/5", exp:"0.4=4/10=2/5."},
  {id:135, block:4, q:"Convierte 0.125 a fracción en mínima expresión.", opts:["1/8","1/12","5/8","125/100"], ans:"1/8", exp:"0.125=125/1000=1/8."},
  {id:136, block:4, q:"Convierte 0.375 a fracción en mínima expresión.", opts:["3/8","3/7","37/100","3/10"], ans:"3/8", exp:"0.375=375/1000=3/8."},
  {id:137, block:4, q:"Convierte 0.625 a fracción en mínima expresión.", opts:["5/8","6/10","6/8","5/6"], ans:"5/8", exp:"0.625=625/1000=5/8."},
  {id:138, block:4, q:"Convierte 0.875 a fracción en mínima expresión.", opts:["7/8","8/7","7/10","8/9"], ans:"7/8", exp:"0.875=875/1000=7/8."},
  {id:139, block:4, q:"Convierte 1/5 a decimal.", opts:["0.2","0.5","0.15","0.02"], ans:"0.2", exp:"1÷5=0.2."},
  {id:140, block:4, q:"Convierte 3/4 a decimal.", opts:["0.75","0.34","0.43","1.33"], ans:"0.75", exp:"3÷4=0.75."},
  {id:141, block:4, q:"Convierte 7/8 a decimal.", opts:["0.875","0.78","0.87","1.14"], ans:"0.875", exp:"7÷8=0.875."},
  {id:142, block:4, q:"Convierte 1/3 a decimal (periódico).", opts:["0.333…","0.3","0.133…","3.0"], ans:"0.333…", exp:"1÷3=0.333… La parte decimal se repite infinitamente (período 3)."},
  {id:143, block:4, q:"Convierte el decimal periódico 0.333… a fracción.", opts:["1/3","3/10","33/100","3/9"], ans:"1/3", exp:"Sea x=0.333… Entonces 10x=3.333…, restando: 9x=3 → x=1/3."},
  {id:144, block:4, q:"Convierte el decimal periódico 0.666… a fracción.", opts:["2/3","6/10","3/5","66/100"], ans:"2/3", exp:"Sea x=0.666…, 10x=6.666…, 9x=6 → x=2/3."},
  {id:145, block:4, q:"Convierte el decimal periódico 0.4444… a fracción.", opts:["4/9","4/10","2/5","44/99"], ans:"4/9", exp:"Sea x=0.444…, 10x=4.444…, 9x=4 → x=4/9."},
  {id:146, block:4, q:"Convierte 2.5 a fracción impropia.", opts:["5/2","25/10","2½","3/1"], ans:"5/2", exp:"2.5=2+1/2=5/2."},
  {id:147, block:4, q:"Convierte 1.75 a fracción impropia.", opts:["7/4","1¾","17/10","175/100"], ans:"7/4", exp:"1.75=1+3/4=7/4."},
  {id:148, block:4, q:"Convierte 3.25 a fracción impropia.", opts:["13/4","3¼","32/5","325/100"], ans:"13/4", exp:"3.25=3+1/4=13/4."},
  {id:149, block:4, q:"Convierte 2.4 a fracción en mínima expresión.", opts:["12/5","24/10","2⅖","6/2"], ans:"12/5", exp:"2.4=24/10=12/5."},
  {id:150, block:4, q:"Convierte la fracción 11/4 a decimal.", opts:["2.75","2.5","3.75","11.4"], ans:"2.75", exp:"11÷4=2.75."},
  {id:151, block:4, q:"Convierte la fracción 7/2 a decimal.", opts:["3.5","3.7","2.7","1.75"], ans:"3.5", exp:"7÷2=3.5."},
  {id:152, block:4, q:"Convierte el decimal periódico 0.1666… a fracción.", opts:["1/6","1/16","16/100","2/11"], ans:"1/6", exp:"1÷6=0.1666… La fracción generatriz es 1/6."},
  {id:153, block:4, q:"Convierte el decimal periódico 0.8333… a fracción.", opts:["5/6","8/10","4/5","83/100"], ans:"5/6", exp:"5÷6=0.8333… La fracción generatriz es 5/6."},
  {id:154, block:4, q:"Ordena de menor a mayor: 1/2, 3/5, 0.4, 7/10.", opts:["0.4 < 1/2 < 3/5 < 7/10","1/2 < 0.4 < 7/10 < 3/5","0.4 < 3/5 < 1/2 < 7/10","3/5 < 7/10 < 1/2 < 0.4"], ans:"0.4 < 1/2 < 3/5 < 7/10", exp:"En decimal: 0.4, 0.5, 0.6, 0.7. Orden correcto: 0.4 < 0.5 < 0.6 < 0.7."},
  {id:155, block:4, q:"¿Cuál fracción es equivalente al decimal 0.6?", opts:["3/5","6/10","2/3","1/6"], ans:"3/5", exp:"0.6=6/10=3/5."},
  {id:156, block:4, q:"Convierte 1.125 a fracción en mínima expresión.", opts:["9/8","1⅛","1125/1000","11/8"], ans:"9/8", exp:"1.125=1125/1000=9/8."},
  {id:157, block:4, q:"Convierte el decimal periódico 0.09090909… a fracción.", opts:["1/11","9/100","1/9","9/99"], ans:"1/11", exp:"Sea x=0.0909…, 100x=9.0909…, 99x=9 → x=9/99=1/11."},
  {id:158, block:4, q:"Convierte 0.0625 a fracción en mínima expresión.", opts:["1/16","1/8","1/25","625/1000"], ans:"1/16", exp:"0.0625=625/10000=1/16."},
  {id:159, block:4, q:"Convierte 5/6 a decimal (periódico).", opts:["0.8333…","0.56","0.833","5/6"], ans:"0.8333…", exp:"5÷6=0.8333… (período 3)."},
  {id:160, block:4, q:"¿Cuál opción NO es un decimal exacto (periódico)?", opts:["1/4","1/5","1/3","1/8"], ans:"1/3", exp:"1/4=0.25, 1/5=0.2, 1/8=0.125 son exactos. 1/3=0.333… es periódico puro."},


  // ══ BLOQUE 5 · DECIMAL ↔ PORCENTAJE  (161–190) ══
  {id:161, block:5, q:"Convierte 0.5 a porcentaje.", opts:["50%","5%","0.5%","500%"], ans:"50%", exp:"0.5 × 100 = 50%."},
  {id:162, block:5, q:"Convierte 0.25 a porcentaje.", opts:["25%","2.5%","0.25%","250%"], ans:"25%", exp:"0.25 × 100 = 25%."},
  {id:163, block:5, q:"Convierte 0.75 a porcentaje.", opts:["75%","7.5%","0.075%","750%"], ans:"75%", exp:"0.75 × 100 = 75%."},
  {id:164, block:5, q:"Convierte 0.05 a porcentaje.", opts:["5%","50%","0.5%","0.05%"], ans:"5%", exp:"0.05 × 100 = 5%."},
  {id:165, block:5, q:"Convierte 0.125 a porcentaje.", opts:["12.5%","1.25%","125%","0.125%"], ans:"12.5%", exp:"0.125 × 100 = 12.5%."},
  {id:166, block:5, q:"Convierte 1.0 a porcentaje.", opts:["100%","10%","1%","1000%"], ans:"100%", exp:"1.0 × 100 = 100%. El entero 1 equivale a un 100%."},
  {id:167, block:5, q:"Convierte 1.5 a porcentaje.", opts:["150%","15%","1.5%","1500%"], ans:"150%", exp:"1.5 × 100 = 150%. Es posible tener porcentajes mayores a 100%."},
  {id:168, block:5, q:"Convierte 0.003 a porcentaje.", opts:["0.3%","3%","0.003%","30%"], ans:"0.3%", exp:"0.003 × 100 = 0.3%."},
  {id:169, block:5, q:"Convierte 45% a decimal.", opts:["0.45","4.5","0.045","45"], ans:"0.45", exp:"45 ÷ 100 = 0.45."},
  {id:170, block:5, q:"Convierte 80% a decimal.", opts:["0.8","8.0","0.08","0.008"], ans:"0.8", exp:"80 ÷ 100 = 0.8."},
  {id:171, block:5, q:"Convierte 12.5% a decimal.", opts:["0.125","1.25","0.0125","12.5"], ans:"0.125", exp:"12.5 ÷ 100 = 0.125."},
  {id:172, block:5, q:"Convierte 3% a decimal.", opts:["0.03","0.3","3","0.003"], ans:"0.03", exp:"3 ÷ 100 = 0.03."},
  {id:173, block:5, q:"Convierte 150% a decimal.", opts:["1.5","15","0.15","1500"], ans:"1.5", exp:"150 ÷ 100 = 1.5."},
  {id:174, block:5, q:"Convierte la fracción 1/4 a porcentaje.", opts:["25%","14%","40%","2.5%"], ans:"25%", exp:"1/4 = 0.25 = 25%."},
  {id:175, block:5, q:"Convierte la fracción 3/5 a porcentaje.", opts:["60%","35%","6%","3.5%"], ans:"60%", exp:"3/5 = 0.6 = 60%."},
  {id:176, block:5, q:"Convierte la fracción 7/20 a porcentaje.", opts:["35%","72%","7.2%","14%"], ans:"35%", exp:"7/20 = 0.35 = 35%."},
  {id:177, block:5, q:"Convierte la fracción 1/8 a porcentaje.", opts:["12.5%","8%","18%","1.8%"], ans:"12.5%", exp:"1/8 = 0.125 = 12.5%."},
  {id:178, block:5, q:"Convierte la fracción 5/4 a porcentaje.", opts:["125%","54%","25%","80%"], ans:"125%", exp:"5/4 = 1.25 = 125%."},
  {id:179, block:5, q:"¿A qué fracción equivale 33.33…%?", opts:["1/3","1/4","1/6","3/10"], ans:"1/3", exp:"33.33…% = 0.333… = 1/3."},
  {id:180, block:5, q:"¿A qué fracción equivale 16.66…%?", opts:["1/6","1/7","1/5","2/12"], ans:"1/6", exp:"16.66…% = 0.1666… = 1/6."},
  {id:181, block:5, q:"¿A qué fracción equivale 37.5%?", opts:["3/8","3/7","37/100","5/8"], ans:"3/8", exp:"37.5% = 0.375 = 375/1000 = 3/8."},
  {id:182, block:5, q:"¿A qué fracción equivale 87.5%?", opts:["7/8","8/7","87/100","6/7"], ans:"7/8", exp:"87.5% = 0.875 = 7/8."},
  {id:183, block:5, q:"Convierte 250% a decimal.", opts:["2.5","25","0.25","0.025"], ans:"2.5", exp:"250 ÷ 100 = 2.5."},
  {id:184, block:5, q:"Convierte la fracción 5/8 a porcentaje.", opts:["62.5%","58%","6.25%","80%"], ans:"62.5%", exp:"5/8 = 0.625 = 62.5%."},
  {id:185, block:5, q:"¿A qué fracción en mínima expresión equivale 225%?", opts:["9/4","22/5","2¼","225/10"], ans:"9/4", exp:"225% = 2.25 = 225/100 = 9/4."},
  {id:186, block:5, q:"Convierte 0.0625 a porcentaje.", opts:["6.25%","0.625%","625%","0.0625%"], ans:"6.25%", exp:"0.0625 × 100 = 6.25%."},
  {id:187, block:5, q:"¿Qué decimal corresponde a 0.4%?", opts:["0.004","0.04","0.4","4"], ans:"0.004", exp:"0.4 ÷ 100 = 0.004."},
  {id:188, block:5, q:"Convierte la fracción 2/3 a porcentaje (aproximado).", opts:["66.67%","23%","33.33%","67.5%"], ans:"66.67%", exp:"2/3 ≈ 0.6667 = 66.67%."},
  {id:189, block:5, q:"¿A qué porcentaje equivale 1/200?", opts:["0.5%","5%","0.05%","50%"], ans:"0.5%", exp:"1/200 = 0.005 = 0.5%."},
  {id:190, block:5, q:"Convierte 0.001 a porcentaje.", opts:["0.1%","1%","0.01%","10%"], ans:"0.1%", exp:"0.001 × 100 = 0.1%."},

  // ══ BLOQUE 6 · PROBLEMAS DE PORCENTAJES  (191–225) ══
  {id:191, block:6, q:"¿Cuánto es el 20% de 80?", opts:["16","20","8","12"], ans:"16", exp:"0.20 × 80 = 16."},
  {id:192, block:6, q:"¿Cuánto es el 15% de 200?", opts:["30","20","25","15"], ans:"30", exp:"0.15 × 200 = 30."},
  {id:193, block:6, q:"¿Cuánto es el 35% de 400?", opts:["140","35","120","160"], ans:"140", exp:"0.35 × 400 = 140."},
  {id:194, block:6, q:"¿Cuánto es el 7.5% de 120?", opts:["9","7.5","10","12"], ans:"9", exp:"0.075 × 120 = 9."},
  {id:195, block:6, q:"¿Cuánto es el 125% de 80?", opts:["100","80","125","64"], ans:"100", exp:"1.25 × 80 = 100. Un 125% = el total más un 25% extra."},
  {id:196, block:6, q:"¿Qué porcentaje representa 24 de 80?", opts:["30%","24%","40%","20%"], ans:"30%", exp:"24/80 × 100 = 30%."},
  {id:197, block:6, q:"¿Qué porcentaje representa 15 de 60?", opts:["25%","15%","20%","30%"], ans:"25%", exp:"15/60 × 100 = 25%."},
  {id:198, block:6, q:"¿Qué porcentaje representa 36 de 90?", opts:["40%","36%","50%","25%"], ans:"40%", exp:"36/90 × 100 = 40%."},
  {id:199, block:6, q:"El precio de un artículo sube un 20% desde $150. ¿Cuál es el nuevo precio?", opts:["$180","$170","$175","$165"], ans:"$180", exp:"$150 × 1.20 = $180."},
  {id:200, block:6, q:"Un artículo cuesta $200 con 15% de descuento. ¿Cuál es el precio final?", opts:["$170","$185","$175","$160"], ans:"$170", exp:"$200 × (1−0.15) = $200 × 0.85 = $170."},
  {id:201, block:6, q:"El precio de un artículo subió de $80 a $96. ¿En qué porcentaje aumentó?", opts:["20%","16%","25%","30%"], ans:"20%", exp:"Aumento: $16. 16/80 × 100 = 20%."},
  {id:202, block:6, q:"El precio bajó de $120 a $90. ¿En qué porcentaje disminuyó?", opts:["25%","20%","30%","33%"], ans:"25%", exp:"Baja: $30. 30/120 × 100 = 25%."},
  {id:203, block:6, q:"Una camisa de $250 tiene 40% de descuento. ¿Cuánto se ahorra?", opts:["$100","$150","$125","$90"], ans:"$100", exp:"0.40 × $250 = $100 de ahorro."},
  {id:204, block:6, q:"Un artículo de $350 tiene 30% de descuento. ¿Cuánto se paga?", opts:["$245","$315","$280","$105"], ans:"$245", exp:"$350 × 0.70 = $245."},
  {id:205, block:6, q:"Se aumenta un precio de $500 en un 25%. ¿Cuál es el nuevo precio?", opts:["$625","$600","$550","$525"], ans:"$625", exp:"$500 × 1.25 = $625."},
  {id:206, block:6, q:"Un préstamo de $10 000 cobra 8% de interés anual. ¿Cuánto interés se paga en 1 año?", opts:["$800","$80","$8 000","$180"], ans:"$800", exp:"0.08 × $10 000 = $800."},
  {id:207, block:6, q:"Precio sin IVA: $300. El IVA es del 16%. ¿Cuánto cuesta con IVA?", opts:["$348","$316","$330","$360"], ans:"$348", exp:"$300 × 1.16 = $348."},
  {id:208, block:6, q:"En una escuela de 450 alumnos, el 40% son mujeres. ¿Cuántos varones hay?", opts:["270","180","200","250"], ans:"270", exp:"Mujeres: 40%×450=180. Varones: 450−180=270."},
  {id:209, block:6, q:"¿Cuál es el número si el 30% de él es 45?", opts:["150","135","90","120"], ans:"150", exp:"n × 0.30 = 45 → n = 45/0.3 = 150."},
  {id:210, block:6, q:"¿Cuál es el número si el 8% de él es 16?", opts:["200","80","160","128"], ans:"200", exp:"n × 0.08 = 16 → n = 200."},
  {id:211, block:6, q:"Después de un descuento del 20%, el precio final es $160. ¿Cuál era el precio original?", opts:["$200","$180","$192","$210"], ans:"$200", exp:"n × 0.80 = $160 → n = $160/0.8 = $200."},
  {id:212, block:6, q:"De 240 postulantes, el 75% fue admitido. ¿Cuántos NO fueron admitidos?", opts:["60","180","120","80"], ans:"60", exp:"Admitidos: 75%×240=180. No admitidos: 60."},
  {id:213, block:6, q:"El peso de una persona bajó de 80 kg a 72 kg. ¿Qué porcentaje bajó?", opts:["10%","8%","12.5%","9%"], ans:"10%", exp:"Baja: 8 kg. 8/80 × 100 = 10%."},
  {id:214, block:6, q:"Una inversión de $5 000 creció 12% en un año. ¿Cuánto vale al final?", opts:["$5 600","$5 120","$6 000","$5 060"], ans:"$5 600", exp:"$5000 × 1.12 = $5 600."},
  {id:215, block:6, q:"En un examen, 180 alumnos pasan y 120 reprueban. ¿Qué porcentaje reprueba?", opts:["40%","60%","33%","30%"], ans:"40%", exp:"Total: 300. 120/300 × 100 = 40%."},
  {id:216, block:6, q:"Un precio sube 10% y luego baja 10%. ¿El precio final es igual al original?", opts:["Sí, es igual","No, es 1% menos","No, es 1% más","No, es 10% menos"], ans:"No, es 1% menos", exp:"P×1.1×0.9=0.99P. El resultado es el 99% del original: 1% menos."},
  {id:217, block:6, q:"Un artículo sube 30% y luego baja 30%. ¿Cuál es el cambio porcentual neto?", opts:["Bajó 9%","No cambia","Bajó 3%","Subió 9%"], ans:"Bajó 9%", exp:"P×1.3×0.7=0.91P. Bajó un 9% respecto al precio original."},
  {id:218, block:6, q:"Un vendedor cobra 5% de comisión sobre ventas de $8 000. ¿Cuánto recibe?", opts:["$400","$40","$4 000","$800"], ans:"$400", exp:"0.05 × $8 000 = $400."},
  {id:219, block:6, q:"Una tienda eleva todos sus precios en 15%. Una camisa que costaba $320 ahora cuesta:", opts:["$368","$336","$348","$380"], ans:"$368", exp:"$320 × 1.15 = $368."},
  {id:220, block:6, q:"Una empresa tenía 240 empleados. Si contrata el 25% más, ¿cuántos empleados tiene ahora?", opts:["300","60","280","360"], ans:"300", exp:"240 × 1.25 = 300 empleados."},
  {id:221, block:6, q:"Si el precio con IVA (16%) de un artículo es $464, ¿cuánto costaba sin IVA?", opts:["$400","$448","$380","$420"], ans:"$400", exp:"P × 1.16 = $464 → P = $464/1.16 = $400."},
  {id:222, block:6, q:"Un municipio tiene 50 000 habitantes. En 5 años creció el 20%. ¿Cuántos habitantes hay ahora?", opts:["60 000","55 000","52 000","65 000"], ans:"60 000", exp:"50000 × 1.20 = 60 000."},
  {id:223, block:6, q:"Se mezclan 300 mL de solución al 40% con 200 mL de solución al 20%. ¿Cuál es la concentración resultante?", opts:["32%","30%","36%","28%"], ans:"32%", exp:"Sustancia: 0.40×300+0.20×200=120+40=160 mL. Total: 500 mL. Concentración: 160/500=0.32=32%."},
  {id:224, block:6, q:"La población de una ciudad disminuyó del 2% anual. Si ahora hay 98 000 hab., ¿cuántos había el año pasado?", opts:["100 000","100 980","102 040","99 000"], ans:"100 000", exp:"n × 0.98 = 98000 → n = 100000."},
  {id:225, block:6, q:"Un artículo cuesta $520 después de aplicar un descuento del 35%. ¿Cuál era el precio original?", opts:["$800","$780","$750","$700"], ans:"$800", exp:"n × 0.65 = $520 → n = $520/0.65 = $800."},

  // ══ BLOQUE 7 · PROPORCIONALIDAD  (226–260) ══
  // Proporcionalidad directa
  {id:226, block:7, q:"Si 5 kg de fruta cuestan $80, ¿cuánto cuestan 12 kg?", opts:["$192","$96","$160","$120"], ans:"$192", exp:"Razón: $16/kg. 12 × $16 = $192."},
  {id:227, block:7, q:"Si 4 lápices cuestan $28, ¿cuánto cuestan 10 lápices?", opts:["$70","$40","$56","$84"], ans:"$70", exp:"$7/lápiz. 10 × $7 = $70."},
  {id:228, block:7, q:"Una máquina produce 120 piezas en 4 horas. ¿Cuántas produce en 10 horas?", opts:["300","240","480","200"], ans:"300", exp:"30 piezas/h × 10 h = 300 piezas."},
  {id:229, block:7, q:"Si 3 metros de tela cuestan $135, ¿cuánto cuestan 8 metros?", opts:["$360","$405","$270","$315"], ans:"$360", exp:"$45/m × 8 = $360."},
  {id:230, block:7, q:"Con $420 se compran 12 libros. ¿Cuántos libros se compran con $700?", opts:["20","25","18","16"], ans:"20", exp:"$35/libro. $700/$35 = 20 libros."},
  {id:231, block:7, q:"Un auto consume 8 L de gasolina cada 100 km. ¿Cuántos litros consume en 350 km?", opts:["28 L","35 L","24 L","32 L"], ans:"28 L", exp:"0.08 L/km × 350 = 28 L."},
  {id:232, block:7, q:"Si 1 dólar = $17 pesos, ¿cuántos pesos son 35 dólares?", opts:["$595","$510","$612","$630"], ans:"$595", exp:"35 × $17 = $595."},
  {id:233, block:7, q:"Una receta para 6 personas requiere 450 g de harina. ¿Cuántos gramos para 10 personas?", opts:["750 g","540 g","900 g","600 g"], ans:"750 g", exp:"75 g/persona × 10 = 750 g."},
  {id:234, block:7, q:"Un ciclista recorre 24 km en 40 minutos. ¿Cuántos km recorre en 1 hora?", opts:["36 km","24 km","48 km","30 km"], ans:"36 km", exp:"Velocidad: 0.6 km/min. En 60 min: 36 km."},
  // Proporcionalidad inversa
  {id:235, block:7, q:"Si 6 trabajadores terminan una obra en 12 días, ¿en cuántos días la terminan 9 trabajadores?", opts:["8 días","10 días","6 días","18 días"], ans:"8 días", exp:"Proporcionalidad inversa: 6×12=9×d → d=72/9=8 días."},
  {id:236, block:7, q:"Si 4 bombas vacían un depósito en 6 horas, ¿cuántas horas tardan 8 bombas?", opts:["3 h","4 h","12 h","2 h"], ans:"3 h", exp:"4×6=8×h → h=3 horas."},
  {id:237, block:7, q:"A 60 km/h un viaje dura 4 horas. ¿Cuánto dura a 80 km/h?", opts:["3 h","2 h","5 h","4.5 h"], ans:"3 h", exp:"60×4=80×t → t=3 h."},
  {id:238, block:7, q:"3 grifos llenan un tanque en 4 horas. ¿Cuántas horas tardan 6 grifos?", opts:["2 h","8 h","1 h","3 h"], ans:"2 h", exp:"3×4=6×h → h=2 h."},
  {id:239, block:7, q:"Una obra se hace con 15 obreros en 12 días. Para terminarla en 9 días, ¿cuántos obreros se necesitan?", opts:["20","18","16","24"], ans:"20", exp:"15×12=n×9 → n=20 obreros."},
  {id:240, block:7, q:"Si 12 impresoras hacen el trabajo en 5 horas, ¿cuántas horas tardan 4 impresoras?", opts:["15 h","10 h","20 h","6 h"], ans:"15 h", exp:"12×5=4×h → h=15 h."},
  // Razones y proporciones
  {id:241, block:7, q:"En un grupo la razón hombres:mujeres es 3:5. Si hay 40 personas, ¿cuántos hombres hay?", opts:["15","25","20","12"], ans:"15", exp:"Total partes: 8. Hombres: 3/8 × 40 = 15."},
  {id:242, block:7, q:"Una mezcla cemento:arena = 1:3. Para 80 kg de mezcla, ¿cuántos kg de cemento?", opts:["20 kg","60 kg","30 kg","40 kg"], ans:"20 kg", exp:"Cemento: 1/4 × 80 = 20 kg."},
  {id:243, block:7, q:"Un mapa escala 1:50 000. Si la distancia en el mapa es 4 cm, ¿cuántos km son en realidad?", opts:["2 km","5 km","0.5 km","20 km"], ans:"2 km", exp:"4 cm × 50 000 = 200 000 cm = 2 km."},
  {id:244, block:7, q:"Ganancias de $15 000 se reparten en razón 2:3. ¿Cuánto recibe la parte mayor?", opts:["$9 000","$6 000","$10 000","$7 500"], ans:"$9 000", exp:"Parte mayor: 3/5 × $15000 = $9000."},
  // Cuarto proporcional
  {id:245, block:7, q:"Encuentra el cuarto proporcional: 3 : 5 = 9 : x", opts:["15","5","27","18"], ans:"15", exp:"3×x=5×9 → x=45/3=15."},
  {id:246, block:7, q:"Resuelve la proporción: 2/x = 6/15", opts:["5","10","3","8"], ans:"5", exp:"2×15=6×x → x=30/6=5."},
  {id:247, block:7, q:"Halla la media proporcional entre 4 y 16.", opts:["8","10","6","12"], ans:"8", exp:"x²=4×16=64 → x=8."},
  {id:248, block:7, q:"Si a/4 = 9/12, ¿cuál es el valor de a?", opts:["3","4","6","9"], ans:"3", exp:"a=4×9/12=4×3/4=3."},
  // Proporcionalidad combinada
  {id:249, block:7, q:"4 obreros trabajando 6 h/día tardan 15 días. ¿Cuántos días tardan 5 obreros a 8 h/día?", opts:["9 días","12 días","6 días","10 días"], ans:"9 días", exp:"4×6×15=360 obreros-h. 5×8×d=360 → d=9 días."},
  {id:250, block:7, q:"3 personas a 8 h/día en 4 días terminan una tarea. ¿Cuántas personas la terminan en 2 días a 6 h/día?", opts:["8","6","12","4"], ans:"8", exp:"3×8×4=96. n×6×2=96 → n=8."},
  {id:251, block:7, q:"8 obreros terminan una obra en 15 días. ¿En cuántos días la terminan 20 obreros?", opts:["6 días","8 días","4 días","10 días"], ans:"6 días", exp:"8×15=20×d → d=6 días."},
  {id:252, block:7, q:"2 pintores pintan 3 paredes en 4 horas. ¿Cuántas paredes pintan 5 pintores en 6 horas?", opts:["11.25","9","12","15"], ans:"11.25", exp:"Ritmo: 3/(2×4)=3/8 pared/pintor-hora. 5×6×3/8=90/8=11.25 paredes."},
  {id:253, block:7, q:"En una fábrica 6 máquinas producen 360 piezas en 4 horas. ¿Cuántas piezas producen 9 máquinas en 6 horas?", opts:["810","540","720","900"], ans:"810", exp:"Ritmo: 360/(6×4)=15 piezas/máquina-hora. 9×6×15=810 piezas."},
  {id:254, block:7, q:"Si 3 kg de fertilizante cuestan $120 y la dosis es 5 kg/hectárea, ¿cuánto cuesta fertilizar 12 hectáreas?", opts:["$2 400","$1 800","$3 000","$1 200"], ans:"$2 400", exp:"Total: 5×12=60 kg. Costo: (60÷3)×$120=$2400."},
  {id:255, block:7, q:"Un coche recorre 240 km con 20 L de gasolina. ¿Cuántos km recorre con 35 L?", opts:["420 km","360 km","480 km","280 km"], ans:"420 km", exp:"12 km/L × 35 L = 420 km."},
  {id:256, block:7, q:"Un grifo llena 1/3 del depósito por hora y otro 1/6. Juntos, ¿en cuántas horas llenan el depósito?", opts:["2 h","3 h","4 h","1.5 h"], ans:"2 h", exp:"1/3+1/6=1/2 del depósito por hora. Tiempo: 2 horas."},
  {id:257, block:7, q:"Una canilla llena el depósito en 4 h y otra lo vacía en 6 h. Abiertas simultáneamente, ¿en cuántas horas se llena?", opts:["12 h","8 h","10 h","24 h"], ans:"12 h", exp:"Tasa neta: 1/4−1/6=1/12 por hora. Se llena en 12 h."},
  {id:258, block:7, q:"Reparte $84 000 entre A, B y C en razón 2:3:5. ¿Cuánto recibe C?", opts:["$42 000","$25 200","$16 800","$50 000"], ans:"$42 000", exp:"Total partes: 10. C: 5/10 × $84000 = $42000."},
  {id:259, block:7, q:"Las edades de Ana y Luis están en razón 3:4. Si Luis tiene 24 años, ¿cuántos tiene Ana?", opts:["18","16","20","12"], ans:"18", exp:"3/4 × 24 = 18 años."},
  {id:260, block:7, q:"Un tren recorre la distancia A-B en 3 h a 80 km/h. ¿A qué velocidad debe viajar para hacer el mismo recorrido en 2 h?", opts:["120 km/h","100 km/h","160 km/h","90 km/h"], ans:"120 km/h", exp:"Distancia: 3×80=240 km. Velocidad: 240/2=120 km/h."},

  // ══ BLOQUE 8 · EXPONENCIACIÓN Y RADICACIÓN  (261–295) ══
  // Bases enteras
  {id:261, block:8, q:"Calcula: 2³", opts:["8","6","9","16"], ans:"8", exp:"2³=2×2×2=8."},
  {id:262, block:8, q:"Calcula: 3⁴", opts:["81","64","12","27"], ans:"81", exp:"3⁴=3×3×3×3=81."},
  {id:263, block:8, q:"Calcula: (−2)⁴", opts:["16","−16","8","−8"], ans:"16", exp:"Potencia par de negativo = positivo. (−2)⁴=16."},
  {id:264, block:8, q:"Calcula: (−3)³", opts:["−27","27","−9","9"], ans:"−27", exp:"Potencia impar de negativo = negativo. (−3)³=−27."},
  // Bases fraccionarias
  {id:265, block:8, q:"Calcula: (1/2)⁴", opts:["1/16","1/8","1/4","1/2"], ans:"1/16", exp:"(1/2)⁴=1⁴/2⁴=1/16."},
  {id:266, block:8, q:"Calcula: (2/3)³", opts:["8/27","6/9","2/9","4/9"], ans:"8/27", exp:"(2/3)³=2³/3³=8/27."},
  {id:267, block:8, q:"Calcula: (3/4)³", opts:["27/64","9/12","9/64","27/12"], ans:"27/64", exp:"(3/4)³=27/64."},
  {id:268, block:8, q:"Calcula: (−1/2)³", opts:["−1/8","1/8","−1/6","1/4"], ans:"−1/8", exp:"Potencia impar de negativo = negativo. (1/2)³=1/8 → −1/8."},
  // Exponentes negativos
  {id:269, block:8, q:"Calcula: 2⁻²", opts:["1/4","−4","4","1/2"], ans:"1/4", exp:"2⁻²=1/2²=1/4."},
  {id:270, block:8, q:"Calcula: (3/4)⁻¹", opts:["4/3","3/4","−3/4","−4/3"], ans:"4/3", exp:"(3/4)⁻¹=4/3. El recíproco de 3/4."},
  {id:271, block:8, q:"Calcula: (2/5)⁻²", opts:["25/4","4/25","5/2","−4/25"], ans:"25/4", exp:"(2/5)⁻²=(5/2)²=25/4."},
  {id:272, block:8, q:"Calcula: 10⁻³", opts:["0.001","−1000","0.01","100"], ans:"0.001", exp:"10⁻³=1/10³=1/1000=0.001."},
  // Exponentes racionales (raíces)
  {id:273, block:8, q:"Calcula: 4^(1/2)", opts:["2","4","8","16"], ans:"2", exp:"4^(1/2)=√4=2."},
  {id:274, block:8, q:"Calcula: 27^(1/3)", opts:["3","9","6","27"], ans:"3", exp:"27^(1/3)=³√27=3."},
  {id:275, block:8, q:"Calcula: 16^(3/4)", opts:["8","4","12","16"], ans:"8", exp:"16^(3/4)=(16^(1/4))³=2³=8."},
  {id:276, block:8, q:"Calcula: 8^(2/3)", opts:["4","2","6","8"], ans:"4", exp:"8^(2/3)=(8^(1/3))²=2²=4."},
  {id:277, block:8, q:"Calcula: 32^(3/5)", opts:["8","4","16","6"], ans:"8", exp:"32^(3/5)=(32^(1/5))³=2³=8."},
  {id:278, block:8, q:"Calcula: 125^(2/3)", opts:["25","5","50","15"], ans:"25", exp:"125^(2/3)=(³√125)²=5²=25."},
  {id:279, block:8, q:"Calcula: (4/9)^(1/2)", opts:["2/3","4/9","1/3","2/9"], ans:"2/3", exp:"√(4/9)=√4/√9=2/3."},
  {id:280, block:8, q:"Calcula: (−8)^(1/3)", opts:["−2","2","−4","4"], ans:"−2", exp:"³√(−8)=−2 porque (−2)³=−8."},
  {id:281, block:8, q:"Calcula: 100^(−1/2)", opts:["1/10","10","1/100","−10"], ans:"1/10", exp:"100^(−1/2)=1/√100=1/10."},
  {id:282, block:8, q:"Calcula: 64^(2/3)", opts:["16","8","4","32"], ans:"16", exp:"64^(2/3)=(64^(1/3))²=4²=16."},
  // Leyes de exponentes
  {id:283, block:8, q:"Simplifica: x³ × x⁴", opts:["x⁷","x¹²","x¹","x³⁴"], ans:"x⁷", exp:"aᵐ × aⁿ = aᵐ⁺ⁿ. 3+4=7 → x⁷."},
  {id:284, block:8, q:"Simplifica: x⁶ ÷ x²", opts:["x⁴","x³","x⁸","x¹²"], ans:"x⁴", exp:"aᵐ ÷ aⁿ = aᵐ⁻ⁿ. 6−2=4 → x⁴."},
  {id:285, block:8, q:"Simplifica: (x²)³", opts:["x⁶","x⁵","x⁸","x²³"], ans:"x⁶", exp:"(aᵐ)ⁿ=aᵐⁿ. 2×3=6 → x⁶."},
  {id:286, block:8, q:"Simplifica: (2x²)³", opts:["8x⁶","6x⁵","2x⁶","8x⁵"], ans:"8x⁶", exp:"2³=8 y (x²)³=x⁶ → 8x⁶."},
  {id:287, block:8, q:"Calcula: 2³ × 2⁵", opts:["256","64","32","128"], ans:"256", exp:"2³×2⁵=2⁸=256."},
  {id:288, block:8, q:"Calcula: 3⁶ ÷ 3²", opts:["81","27","9","243"], ans:"81", exp:"3⁶÷3²=3⁴=81."},
  {id:289, block:8, q:"Simplifica: (a²b³)²", opts:["a⁴b⁶","a²b⁶","a⁴b⁵","a²b⁵"], ans:"a⁴b⁶", exp:"Distribuye el exponente: a²²=a⁴ y b³²=b⁶ → a⁴b⁶."},
  {id:290, block:8, q:"Calcula: (√3)⁴", opts:["9","3","√3","27"], ans:"9", exp:"(√3)⁴=(3^(1/2))⁴=3²=9."},
  // Radicación
  {id:291, block:8, q:"Simplifica: √50", opts:["5√2","10√5","25√2","5√10"], ans:"5√2", exp:"√50=√(25×2)=5√2."},
  {id:292, block:8, q:"Simplifica: √72", opts:["6√2","4√3","3√8","6√3"], ans:"6√2", exp:"√72=√(36×2)=6√2."},
  {id:293, block:8, q:"Calcula: ³√(8/125)", opts:["2/5","2/25","4/25","4/5"], ans:"2/5", exp:"³√8/³√125=2/5."},
  {id:294, block:8, q:"Simplifica: √(x⁶)", opts:["x³","x²","x⁶","x⁴"], ans:"x³", exp:"√(x⁶)=x^(6/2)=x³."},
  {id:295, block:8, q:"¿Cuánto es 9^(3/2)?", opts:["27","81","18","3"], ans:"27", exp:"9^(3/2)=(√9)³=3³=27."},
  // ══ BLOQUE 9 · SIGNOS DE AGRUPACIÓN  (296–325) ══
  {id:296, block:9, q:"Calcula: 2 + 3 × 4", opts:["14","20","24","10"], ans:"14", exp:"Primero la multiplicación: 3×4=12. Luego: 2+12=14. (Jerarquía: × antes que +)"},
  {id:297, block:9, q:"Calcula: (2 + 3) × 4", opts:["20","14","24","10"], ans:"20", exp:"El paréntesis se resuelve primero: (2+3)=5; 5×4=20."},
  {id:298, block:9, q:"Calcula: 10 − 2 × (3 + 1)", opts:["2","32","24","−2"], ans:"2", exp:"Paréntesis: 3+1=4. Multiplicación: 2×4=8. Resta: 10−8=2."},
  {id:299, block:9, q:"Calcula: 3 × [4 + 2 × (5 − 3)]", opts:["24","18","36","30"], ans:"24", exp:"Interior: 5−3=2; 2×2=4; 4+4=8; 3×8=24."},
  {id:300, block:9, q:"Calcula: 20 ÷ (2 + 3) + 4", opts:["8","24","12","6"], ans:"8", exp:"Paréntesis: 2+3=5. 20÷5=4. 4+4=8."},
  {id:301, block:9, q:"Calcula: 5 + 2 × [8 − (3 + 1)]", opts:["13","45","29","17"], ans:"13", exp:"(3+1)=4; [8−4]=4; 2×4=8; 5+8=13."},
  {id:302, block:9, q:"Calcula: {3 × [2 + (5 − 2)] − 4}", opts:["11","13","15","9"], ans:"11", exp:"(5−2)=3; [2+3]=5; 3×5=15; {15−4}=11."},
  {id:303, block:9, q:"Calcula: 2 × {5 − [4 − (3 − 1)]}", opts:["6","4","8","10"], ans:"6", exp:"(3−1)=2; [4−2]=2; {5−2}=3; 2×3=6."},
  {id:304, block:9, q:"Calcula: 4 × (3 + 2)² − 10", opts:["90","100","80","40"], ans:"90", exp:"(3+2)=5; 5²=25; 4×25=100; 100−10=90."},
  {id:305, block:9, q:"Calcula: (2 + 3)² − (4 − 1)²", opts:["16","34","−4","4"], ans:"16", exp:"(2+3)²=25; (4−1)²=9; 25−9=16."},
  {id:306, block:9, q:"Calcula: (1/2) × (3/4 + 1/4)", opts:["1/2","1/4","3/8","1/8"], ans:"1/2", exp:"Paréntesis: 3/4+1/4=1. Luego: 1/2×1=1/2."},
  {id:307, block:9, q:"Calcula: (1/2 + 1/3) × 6", opts:["5","3","6","10"], ans:"5", exp:"(1/2+1/3)=5/6; 5/6×6=5."},
  {id:308, block:9, q:"Calcula: (3/4) × (4/3 − 1/3)", opts:["3/4","1","1/4","1/2"], ans:"3/4", exp:"(4/3−1/3)=1; 3/4×1=3/4."},
  {id:309, block:9, q:"Calcula: (1/2 + 1/4) ÷ (3/4)", opts:["1","3/4","1/2","4/3"], ans:"1", exp:"(1/2+1/4)=3/4; (3/4)÷(3/4)=1."},
  {id:310, block:9, q:"Calcula: (2/3) × [3/4 ÷ (1/2 + 1/4)]", opts:["2/3","1/2","4/9","3/4"], ans:"2/3", exp:"(1/2+1/4)=3/4; [3/4÷3/4]=1; 2/3×1=2/3."},
  {id:311, block:9, q:"Calcula: (3/5 + 2/5) × (1/2 − 1/4)", opts:["1/4","1/2","1/8","3/4"], ans:"1/4", exp:"(3/5+2/5)=1; (1/2−1/4)=1/4; 1×1/4=1/4."},
  {id:312, block:9, q:"Calcula: [(2/3 + 1/6) × 2] ÷ (5/2)", opts:["2/3","1/2","5/6","4/5"], ans:"2/3", exp:"(2/3+1/6)=5/6; ×2=5/3; ÷(5/2)=5/3×2/5=2/3."},
  {id:313, block:9, q:"Calcula: √(9 + 16)", opts:["5","7","√9+√16","4"], ans:"5", exp:"√(9+16)=√25=5. Importante: √(a+b) ≠ √a+√b."},
  {id:314, block:9, q:"Calcula: (√4 + √9)²", opts:["25","13","5","√13"], ans:"25", exp:"(√4+√9)²=(2+3)²=5²=25."},
  {id:315, block:9, q:"Calcula: 2 × (3 + 4)² ÷ 7", opts:["14","2","98","28"], ans:"14", exp:"(3+4)=7; 7²=49; 2×49=98; 98÷7=14."},
  {id:316, block:9, q:"Calcula: 3² × (4 − 2)³", opts:["72","36","24","216"], ans:"72", exp:"3²=9; (4−2)³=2³=8; 9×8=72."},
  {id:317, block:9, q:"Calcula: [3² − (2² + 1)] ÷ 2", opts:["2","4","1","3"], ans:"2", exp:"2²+1=5; 3²=9; [9−5]=4; 4÷2=2."},
  {id:318, block:9, q:"Calcula: (2³ − 3²) × (√16 − √9)", opts:["−1","1","2","−2"], ans:"−1", exp:"(8−9)=−1; (4−3)=1; −1×1=−1."},
  {id:319, block:9, q:"Calcula: 3 + 4 × [5 − 2 × (3 − 1)]", opts:["7","11","23","3"], ans:"7", exp:"(3−1)=2; 2×2=4; [5−4]=1; 4×1=4; 3+4=7."},
  {id:320, block:9, q:"Calcula: (1/3 + 1/6) × (3/2 − 1/2)", opts:["1/2","1/3","1","3/4"], ans:"1/2", exp:"(1/3+1/6)=1/2; (3/2−1/2)=1; 1/2×1=1/2."},
  {id:321, block:9, q:"Calcula: {[2² + (3 − 1)²] ÷ 4} − 1", opts:["1","2","0","3"], ans:"1", exp:"(3−1)²=4; [4+4]=8; {8÷4}=2; 2−1=1."},
  {id:322, block:9, q:"Calcula: 2 × {3 + 4 × [5 − 3 × (2 − 1)]}", opts:["22","26","34","16"], ans:"22", exp:"(2−1)=1; 3×1=3; [5−3]=2; 4×2=8; {3+8}=11; 2×11=22."},
  {id:323, block:9, q:"Calcula: [(2/3)² + (1/3)²] × 9", opts:["5","1","5/9","9/5"], ans:"5", exp:"(2/3)²=4/9; (1/3)²=1/9; [5/9]×9=5."},
  {id:324, block:9, q:"Calcula: (√25 − √4) ÷ (√9 − √1)", opts:["3/2","1","5/3","2"], ans:"3/2", exp:"(5−2)=3; (3−1)=2; 3÷2=3/2."},
  {id:325, block:9, q:"Calcula: 4 − {3 − [2 − (1 − 0)]}", opts:["2","4","0","3"], ans:"2", exp:"(1−0)=1; [2−1]=1; {3−1}=2; 4−2=2."},
];


export default function NumerosRacionales() {
  const [mode, setMode]           = useState("menu");
  const [examMode, setExamMode]   = useState(null);
  const [queue, setQueue]         = useState([]);
  const [current, setCurrent]     = useState(0);
  const [answers, setAnswers]     = useState({});
  const [confirmed, setConfirmed] = useState(false);
  const [selected, setSelected]   = useState(null);
  const [timeLeft, setTimeLeft]   = useState(0);
  const [timerOn, setTimerOn]     = useState(false);
  const [filter, setFilter]       = useState("all");

  useEffect(() => {
    if (!timerOn || timeLeft <= 0) return;
    const t = setInterval(() => setTimeLeft(p => p - 1), 1000);
    return () => clearInterval(t);
  }, [timerOn, timeLeft]);

  useEffect(() => {
    if (timeLeft <= 0 && timerOn) { setTimerOn(false); setMode("results"); }
  }, [timeLeft, timerOn]);

  const startExam = (modeKey) => {
    let qs;
    if (modeKey === "all") { qs = shuffle(questions); }
    else {
      const idx = parseInt(modeKey.replace("block-",""), 10);
      qs = shuffle(questions.filter(q => q.block === idx));
    }
    qs = qs.map(q => ({ ...q, opts: shuffle(q.opts) }));
    setQueue(qs); setAnswers({}); setCurrent(0); setSelected(null);
    setConfirmed(false); setTimeLeft(qs.length * 30); setTimerOn(true);
    setExamMode(modeKey); setMode("exam");
  };

  const confirmAnswer = () => {
    if (!selected) return;
    setAnswers(p => ({ ...p, [queue[current].id]: selected }));
    setConfirmed(true);
  };

  const goNext = () => {
    if (current < queue.length - 1) {
      const nid = queue[current + 1].id;
      setCurrent(c => c + 1);
      setSelected(answers[nid] || null);
      setConfirmed(!!answers[nid]);
    } else { setTimerOn(false); setMode("results"); }
  };

  const score = Object.entries(answers).reduce((acc, [id, ans]) => {
    const q = questions.find(q => q.id === Number(id));
    return acc + (q?.ans === ans ? 1 : 0);
  }, 0);

  const timerWarning = timeLeft < 120;
  const CSS = `@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');*{box-sizing:border-box;margin:0;padding:0}::-webkit-scrollbar{width:5px;background:#0e0f11}::-webkit-scrollbar-thumb{background:#252830;border-radius:99px}`;

  if (mode === "menu") {
    const totalQ = questions.length;
    return (
      <div style={{minHeight:"100vh",background:C.bg,paddingBottom:64}}>
        <style>{CSS}</style>
        <div style={{background:C.surface,borderBottom:`1px solid ${C.border}`,padding:"44px 24px 36px",textAlign:"center",position:"relative",overflow:"hidden"}}>
          <div style={{position:"absolute",inset:0,opacity:0.03,backgroundImage:`radial-gradient(${C.blue} 1px,transparent 1px)`,backgroundSize:"36px 36px"}}/>
          <div style={{position:"relative"}}>
            <span style={{display:"inline-block",background:C.gold+"22",color:C.gold,borderRadius:99,padding:"3px 14px",fontSize:11,fontWeight:700,letterSpacing:2,textTransform:"uppercase",marginBottom:16,fontFamily:"'DM Sans',sans-serif"}}>
              FactoRizando · Matemáticas · UNAM / EXANI-II
            </span>
            <h1 style={{fontSize:"clamp(20px,4vw,36px)",fontWeight:700,color:C.text,letterSpacing:"-1.5px",lineHeight:1.1,marginBottom:10,fontFamily:"'DM Sans',sans-serif"}}>
              Números <span style={{color:C.blue}}>Racionales</span>
            </h1>
            <p style={{color:C.muted,fontSize:14,maxWidth:560,margin:"0 auto 24px",fontFamily:"'DM Sans',sans-serif"}}>
              {totalQ} reactivos · 10 bloques temáticos · 30 s por reactivo
            </p>
            <div style={{display:"flex",justifyContent:"center",gap:40,flexWrap:"wrap"}}>
              {[{label:"Reactivos",val:totalQ},{label:"Bloques",val:10},{label:"Tiempo completo",val:`${Math.round(totalQ*0.5)} min`}].map(s=>(
                <div key={s.label} style={{textAlign:"center"}}>
                  <div style={{fontSize:22,fontWeight:900,color:C.text,letterSpacing:"-1px",fontFamily:"'DM Sans',sans-serif"}}>{s.val}</div>
                  <div style={{fontSize:10,color:C.muted,fontWeight:700,textTransform:"uppercase",letterSpacing:1.5,fontFamily:"'DM Sans',sans-serif"}}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div style={{maxWidth:760,margin:"0 auto",padding:"32px 16px"}}>
          <p style={{color:C.muted,fontSize:11,fontWeight:700,letterSpacing:2,textTransform:"uppercase",marginBottom:12,fontFamily:"'DM Sans',sans-serif"}}>Examen completo</p>
          <button onClick={()=>startExam("all")} style={{width:"100%",background:C.surface,border:`1px solid ${C.border}`,borderRadius:14,padding:"22px 16px",cursor:"pointer",textAlign:"center",marginBottom:28,fontFamily:"'DM Sans',sans-serif",transition:"all 0.2s"}}
            onMouseEnter={e=>{e.currentTarget.style.borderColor=C.gold;e.currentTarget.style.background=C.gold+"11";}}
            onMouseLeave={e=>{e.currentTarget.style.borderColor=C.border;e.currentTarget.style.background=C.surface;}}>
            <div style={{fontSize:26,marginBottom:6}}>📋</div>
            <div style={{color:C.text,fontWeight:700,fontSize:15}}>Todos los reactivos</div>
            <div style={{color:C.muted,fontSize:12,marginTop:4}}>{totalQ} reactivos · {Math.round(totalQ*0.5)} min</div>
          </button>
          <p style={{color:C.muted,fontSize:11,fontWeight:700,letterSpacing:2,textTransform:"uppercase",marginBottom:12,fontFamily:"'DM Sans',sans-serif"}}>O elige un bloque</p>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(210px,1fr))",gap:10}}>
            {BLOCKS.map((bl,i)=>{
              const count=bl.range[1]-bl.range[0]+1;
              return(
                <button key={i} onClick={()=>startExam(`block-${i}`)} style={{background:C.surface,border:`1px solid ${bl.color}44`,borderRadius:12,padding:"16px 12px",cursor:"pointer",textAlign:"center",fontFamily:"'DM Sans',sans-serif",transition:"all 0.2s"}}
                  onMouseEnter={e=>{e.currentTarget.style.background=bl.color+"18";e.currentTarget.style.borderColor=bl.color;}}
                  onMouseLeave={e=>{e.currentTarget.style.background=C.surface;e.currentTarget.style.borderColor=bl.color+"44";}}>
                  <div style={{color:bl.color,fontWeight:700,fontSize:12,lineHeight:1.35,fontFamily:"'DM Sans',sans-serif"}}>{bl.label}</div>
                  <div style={{color:C.muted,fontSize:11,marginTop:5}}>{count} reactivos · {Math.round(count*0.5)} min</div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  if (mode === "results") {
    const total=queue.length, pct=total>0?Math.round((score/total)*100):0;
    const col=pct>=80?C.teal:pct>=60?C.gold:C.crimson;
    const msg=pct>=90?"¡Excelente! Dominio sólido de los racionales.":pct>=75?"¡Muy bien! Repasa los temas que fallaste.":pct>=50?"Sigue practicando.":"Necesitas reforzar el temario.";
    const displayQs=filter==="correct"?queue.filter(q=>answers[q.id]===q.ans):filter==="wrong"?queue.filter(q=>answers[q.id]&&answers[q.id]!==q.ans):queue;
    return(
      <div style={{minHeight:"100vh",background:C.bg,paddingBottom:64}}>
        <style>{CSS}</style>
        <div style={{maxWidth:760,margin:"0 auto",padding:"32px 16px"}}>
          <div style={{display:"flex",gap:12,marginBottom:24,flexWrap:"wrap"}}>
            <button onClick={()=>setMode("menu")} style={{background:C.surface,color:C.dim,border:`1px solid ${C.border}`,borderRadius:12,padding:"12px 28px",fontSize:14,fontWeight:600,fontFamily:"'DM Sans',sans-serif",cursor:"pointer"}}>← Menú</button>
            <button onClick={()=>startExam(examMode)} style={{background:`linear-gradient(135deg,${C.blue},${C.gold})`,color:"#fff",border:"none",borderRadius:12,padding:"12px 28px",fontSize:14,fontWeight:700,fontFamily:"'DM Sans',sans-serif",cursor:"pointer"}}>↺ Repetir</button>
          </div>
          <div style={{background:C.surface,border:`2px solid ${col}`,borderRadius:18,padding:"30px 36px",textAlign:"center",maxWidth:380,margin:"0 auto 32px",fontFamily:"'DM Sans',sans-serif"}}>
            <div style={{fontSize:58,fontWeight:900,color:col,letterSpacing:"-3px",lineHeight:1}}>{pct}%</div>
            <div style={{color:C.dim,fontSize:14,marginTop:8}}><span style={{color:C.text,fontWeight:700}}>{score}</span> de {total} correctas</div>
            <div style={{color:col,fontWeight:700,fontSize:15,marginTop:10}}>{msg}</div>
          </div>
          <div style={{display:"flex",gap:8,marginBottom:20,flexWrap:"wrap"}}>
            {[["all","Todas"],["correct",`✓ Correctas (${score})`],["wrong",`✗ Incorrectas (${total-score})`]].map(([f,label])=>(
              <button key={f} onClick={()=>setFilter(f)} style={{padding:"6px 14px",borderRadius:99,fontSize:12,fontWeight:700,cursor:"pointer",border:"none",background:filter===f?C.blue:C.surface,color:filter===f?"#fff":C.muted,fontFamily:"'DM Sans',sans-serif"}}>{label}</button>
            ))}
          </div>
          {displayQs.map(q=>{
            const bl=getBlock(q.id),sel=answers[q.id];
            return(
              <div key={q.id} style={{background:C.surface,border:`1px solid ${C.border}`,borderRadius:14,padding:"20px 24px",marginBottom:12}}>
                <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:10}}>
                  <span style={{background:bl.color+"1a",color:bl.color,borderRadius:6,padding:"2px 10px",fontSize:10,fontWeight:700,letterSpacing:1.5,textTransform:"uppercase",fontFamily:"'DM Sans',sans-serif"}}>{bl.label}</span>
                  <span style={{marginLeft:"auto",color:C.muted,fontSize:12,fontFamily:"'DM Sans',sans-serif"}}>#{q.id}</span>
                </div>
                <p style={{color:C.text,fontSize:14,fontWeight:600,marginBottom:10,lineHeight:1.6,fontFamily:"'DM Sans',sans-serif"}}><MathText>{q.q}</MathText></p>
                <div style={{display:"flex",flexDirection:"column",gap:6,marginBottom:10}}>
                  {q.opts.map(opt=>{
                    const isOk=opt===q.ans,isUser=opt===sel;
                    let bg=C.bg,bd=`1px solid ${C.border}`,co=C.dim;
                    if(isOk){bg=C.teal+"22";bd=`1px solid ${C.teal}`;co=C.teal;}
                    else if(isUser&&!isOk){bg=C.crimson+"22";bd=`1px solid ${C.crimson}`;co=C.crimson;}
                    return <div key={opt} style={{background:bg,border:bd,color:co,borderRadius:8,padding:"8px 12px",fontSize:13,fontFamily:"'DM Sans',sans-serif"}}>{isOk?"✓ ":""}{isUser&&!isOk?"✗ ":""}<MathText>{opt}</MathText></div>;
                  })}
                </div>
                <div style={{padding:"8px 12px",background:bl.color+"0e",borderRadius:8,border:`1px solid ${bl.color}22`}}>
                  <span style={{color:bl.color,fontSize:11,fontWeight:700,fontFamily:"'DM Sans',sans-serif"}}>💡 </span>
                  <span style={{color:C.dim,fontSize:12,fontFamily:"'DM Sans',sans-serif"}}><MathText>{q.exp}</MathText></span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  const q=queue[current],bl=getBlock(q.id),prog=((current+1)/queue.length)*100,answered=Object.keys(answers).length;
  return(
    <div style={{minHeight:"100vh",background:C.bg,paddingBottom:64}}>
      <style>{CSS}</style>
      <div style={{maxWidth:760,margin:"0 auto",padding:"24px 16px"}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:16,flexWrap:"wrap",gap:8}}>
          <div style={{fontFamily:"'DM Sans',sans-serif"}}>
            <span style={{color:C.muted,fontSize:13}}>Reactivo </span>
            <span style={{color:C.text,fontWeight:700}}>{current+1}</span>
            <span style={{color:C.muted}}> / {queue.length}</span>
            <span style={{color:C.muted,fontSize:12,marginLeft:10}}>({answered} respondidos)</span>
          </div>
          <div style={{display:"flex",alignItems:"center",gap:10}}>
            <span style={{fontSize:13,fontWeight:700,color:timerWarning?C.crimson:bl.color,background:timerWarning?C.crimson+"18":bl.color+"18",padding:"5px 12px",borderRadius:20,border:`1px solid ${timerWarning?C.crimson:bl.color}55`,fontFamily:"'DM Sans',sans-serif"}}>⏱ {fmt(timeLeft)}</span>
            <button onClick={()=>{setTimerOn(false);setMode("results");}} style={{padding:"5px 12px",background:C.crimson+"18",color:C.crimson,border:`1px solid ${C.crimson}44`,borderRadius:20,cursor:"pointer",fontSize:12,fontFamily:"'DM Sans',sans-serif"}}>Terminar</button>
          </div>
        </div>
        <div style={{background:C.border,borderRadius:99,height:4,overflow:"hidden",marginBottom:20}}>
          <div style={{height:"100%",width:`${prog}%`,background:`linear-gradient(90deg,${bl.color},${C.purple})`,transition:"width 0.3s",borderRadius:99}}/>
        </div>
        <div style={{marginBottom:12}}>
          <span style={{background:bl.color+"1a",color:bl.color,borderRadius:6,padding:"2px 10px",fontSize:10,fontWeight:700,letterSpacing:1.5,textTransform:"uppercase",fontFamily:"'DM Sans',sans-serif"}}>{bl.label}</span>
          <span style={{marginLeft:10,color:C.muted,fontSize:12,fontFamily:"'DM Sans',sans-serif"}}>#{q.id} / {questions.length}</span>
        </div>
        <div style={{background:C.surface,border:`1px solid ${C.border}`,borderRadius:14,padding:"22px 26px",marginBottom:16}}>
          <p style={{color:C.text,fontSize:"clamp(14px,2.5vw,17px)",fontWeight:600,lineHeight:1.7,fontFamily:"'DM Sans',sans-serif",margin:0}}><MathText>{q.q}</MathText></p>
        </div>
        <div style={{display:"flex",flexDirection:"column",gap:8,marginBottom:20}}>
          {q.opts.map(opt=>{
            const isSel=selected===opt,isOk=opt===q.ans;
            let bg=C.bg,bd=`1px solid ${C.border}`,co=C.dim;
            if(confirmed&&isSel&&isOk){bg=C.teal+"22";bd=`1px solid ${C.teal}`;co=C.teal;}
            else if(confirmed&&isSel){bg=C.crimson+"22";bd=`1px solid ${C.crimson}`;co=C.crimson;}
            else if(confirmed&&isOk){bg=C.teal+"0e";bd=`1px solid ${C.teal}55`;co=C.teal+"aa";}
            else if(isSel){bg=bl.color+"18";bd=`1px solid ${bl.color}`;co=bl.color;}
            return(
              <button key={opt} onClick={()=>!confirmed&&setSelected(opt)} style={{background:bg,border:bd,color:co,borderRadius:9,padding:"12px 16px",fontSize:14,fontWeight:500,cursor:confirmed?"default":"pointer",textAlign:"left",transition:"all 0.15s",outline:"none",fontFamily:"'DM Sans',sans-serif",lineHeight:1.5}}>
                {confirmed&&isOk?"✓ ":""}{confirmed&&isSel&&!isOk?"✗ ":""}<MathText>{opt}</MathText>
              </button>
            );
          })}
        </div>
        {confirmed&&(
          <div style={{background:bl.color+"0e",border:`1px solid ${bl.color}22`,borderRadius:10,padding:"12px 16px",marginBottom:16}}>
            <span style={{color:bl.color,fontSize:12,fontWeight:700,fontFamily:"'DM Sans',sans-serif"}}>💡 </span>
            <span style={{color:C.dim,fontSize:13,fontFamily:"'DM Sans',sans-serif"}}><MathText>{q.exp}</MathText></span>
          </div>
        )}
        <div style={{display:"flex",gap:10,justifyContent:"space-between",alignItems:"center"}}>
          <button onClick={()=>{if(current>0){const pid=queue[current-1].id;setCurrent(c=>c-1);setSelected(answers[pid]||null);setConfirmed(!!answers[pid]);}}} disabled={current===0} style={{padding:"10px 20px",background:C.surface,color:C.muted,border:`1px solid ${C.border}`,borderRadius:10,cursor:current===0?"not-allowed":"pointer",opacity:current===0?0.4:1,fontSize:14,fontFamily:"'DM Sans',sans-serif"}}>← Anterior</button>
          {!confirmed?(
            <button onClick={confirmAnswer} disabled={!selected} style={{padding:"10px 28px",fontSize:14,fontWeight:700,background:selected?`linear-gradient(135deg,${bl.color},${C.purple})`:C.surface,color:selected?"#fff":C.muted,border:"none",borderRadius:10,cursor:selected?"pointer":"not-allowed",boxShadow:selected?`0 4px 20px ${bl.color}33`:"none",fontFamily:"'DM Sans',sans-serif",transition:"all 0.2s"}}>Confirmar respuesta</button>
          ):(
            <button onClick={goNext} style={{padding:"10px 28px",fontSize:14,fontWeight:700,background:`linear-gradient(135deg,${bl.color},${C.purple})`,color:"#fff",border:"none",borderRadius:10,cursor:"pointer",boxShadow:`0 4px 20px ${bl.color}33`,fontFamily:"'DM Sans',sans-serif"}}>
              {current===queue.length-1?"Ver resultados →":"Siguiente →"}
            </button>
          )}
        </div>
        <div style={{marginTop:24,background:C.surface,borderRadius:12,padding:16,border:`1px solid ${C.border}`}}>
          <p style={{color:C.muted,fontSize:11,marginBottom:10,textTransform:"uppercase",letterSpacing:1,fontFamily:"'DM Sans',sans-serif"}}>Navegador de reactivos</p>
          <div style={{display:"flex",flexWrap:"wrap",gap:4}}>
            {queue.map((fq,i)=>{
              const fbl=getBlock(fq.id),a=answers[fq.id],isCurr=i===current;
              let bg=C.surface,co=C.muted,bdr=`1px solid ${C.border}`;
              if(isCurr){bg=fbl.color;co="#fff";bdr=`2px solid ${fbl.color}`;}
              else if(a===fq.ans){bg=C.teal+"33";co=C.teal;}
              else if(a){bg=C.crimson+"33";co=C.crimson;}
              return <button key={fq.id} onClick={()=>{setCurrent(i);setSelected(answers[fq.id]||null);setConfirmed(!!answers[fq.id]);}} style={{width:26,height:26,borderRadius:5,background:bg,color:co,border:bdr,cursor:"pointer",fontSize:10,fontWeight:isCurr?700:400,fontFamily:"'DM Sans',sans-serif"}}>{i+1}</button>;
            })}
          </div>
          <div style={{display:"flex",gap:14,marginTop:10,flexWrap:"wrap"}}>
            {[[C.teal+"33",C.teal,"Correcta"],[C.crimson+"33",C.crimson,"Incorrecta"],[C.surface,C.muted,"Sin contestar"]].map(([bg,co,label])=>(
              <div key={label} style={{display:"flex",alignItems:"center",gap:5}}>
                <div style={{width:11,height:11,borderRadius:3,background:bg,border:`1px solid ${co}`}}/>
                <span style={{color:C.muted,fontSize:11,fontFamily:"'DM Sans',sans-serif"}}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
