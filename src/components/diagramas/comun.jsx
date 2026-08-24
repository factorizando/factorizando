import { Handle, Position } from "@xyflow/react";

/* eslint-disable react-refresh/only-export-components -- este módulo agrupa a propósito
   componentes (Bloque, Vector, EjesXY…) y funciones puras (arrowHead) que comparten los
   diagramas de varias materias; separarlos en dos archivos no compra nada. */
// Piezas compartidas por los diagramas de varias materias.
//
// Salieron de SlideRenderer.jsx en la fase 2b (docs/PLAN_MIGRACION.md): son lo
// único que impedía extraer los componentes de física, química y biología, que
// las usaban como funciones locales del archivo grande.
//
// Todas son puras y reciben lo que necesitan por argumento; ninguna conoce el
// tema, salvo donde se le pasa explícitamente.

export function arrowHead(x1, y1, x2, y2, s) {
  const ang = Math.atan2(y2 - y1, x2 - x1);
  const a1 = ang + Math.PI * 0.82, a2 = ang - Math.PI * 0.82;
  const p1 = `${(x2 + s * Math.cos(a1)).toFixed(1)},${(y2 + s * Math.sin(a1)).toFixed(1)}`;
  const p2 = `${(x2 + s * Math.cos(a2)).toFixed(1)},${(y2 + s * Math.sin(a2)).toFixed(1)}`;
  return `${x2},${y2} ${p1} ${p2}`;
}

export function EjesXY({ ox, oy, xEnd, yTop, tema, labelX, labelY }) {
  const mu = tema.muted;
  return (
    <>
      <line x1={ox} y1={oy} x2={xEnd} y2={oy} stroke={mu} strokeWidth="1.5" />
      <line x1={ox} y1={oy} x2={ox} y2={yTop} stroke={mu} strokeWidth="1.5" />
      <polygon points={`${xEnd + 6},${oy} ${xEnd},${oy - 3.5} ${xEnd},${oy + 3.5}`} fill={mu} />
      <polygon points={`${ox},${yTop - 6} ${ox - 3.5},${yTop} ${ox + 3.5},${yTop}`} fill={mu} />
      <text x={xEnd + 2} y={oy + 14} fill={mu} fontSize="11" fontFamily="Georgia,serif" fontStyle="italic">{labelX}</text>
      <text x={ox - 14} y={yTop + 2} fill={mu} fontSize="11" fontFamily="Georgia,serif" fontStyle="italic">{labelY}</text>
    </>
  );
}

export function Bloque({ x, y, w, h, tema, label, fill }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={4} fill={fill || tema.acentoMed} stroke={tema.acento} strokeWidth="1.8" />
      {label && <text x={x + w / 2} y={y + h / 2 + 5} fill={tema.texto} fontSize="14" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">{label}</text>}
    </g>
  );
}

export function Vector({ x1, y1, x2, y2, color, label, lx, ly, sw }) {
  return (
    <g>
      <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth={sw || 2.4} />
      <polygon points={arrowHead(x1, y1, x2, y2, 8)} fill={color} />
      {label && <text x={lx} y={ly} fill={color} fontSize="12" fontFamily="Georgia,serif" fontStyle="italic">{label}</text>}
    </g>
  );
}

export function GenDobleHelice({ tema, x0 = 0, w = 220, h = 130 }) {
  const a = tema.acento, bl = tema.azul;
  const cx = x0 + w / 2;
  const rungs = [];
  const N = 9;
  for (let i = 0; i < N; i++) {
    const t = i / (N - 1);
    const y = 14 + t * (h - 28);
    const phase = t * Math.PI * 2.4;
    const xL = cx + 26 * Math.sin(phase);
    const xR = cx - 26 * Math.sin(phase);
    rungs.push({ y, xL, xR, front: Math.cos(phase) > 0 });
  }
  return (
    <>
      <path d={`M ${rungs[0].xL} ${rungs[0].y} ` + rungs.map(r => `L ${r.xL} ${r.y}`).join(" ")} fill="none" stroke={a} strokeWidth="2.4" />
      <path d={`M ${rungs[0].xR} ${rungs[0].y} ` + rungs.map(r => `L ${r.xR} ${r.y}`).join(" ")} fill="none" stroke={bl} strokeWidth="2.4" />
      {rungs.map((r, i) => (
        <line key={i} x1={r.xL} y1={r.y} x2={r.xR} y2={r.y} stroke={r.front ? a : bl} strokeWidth="1.6" opacity={r.front ? 0.7 : 0.35} />
      ))}
    </>
  );
}

export function _svgH() {
  function mid([x1,y1],[x2,y2]){return[(x1+x2)/2,(y1+y2)/2];}
  function vsub([x1,y1],[x2,y2]){return[x1-x2,y1-y2];}
  function vadd([x1,y1],[x2,y2]){return[x1+x2,y1+y2];}
  function vscale([x,y],s){return[x*s,y*s];}
  function vunit([x,y]){const l=Math.hypot(x,y);return[x/l,y/l];}
  function vperp([x,y]){return[-y,x];}
  function fmt([x,y]){return`${x.toFixed(1)},${y.toFixed(1)}`;}
  return{mid,vsub,vadd,vscale,vunit,vperp,fmt};
}

export function qRegPoly(cx, cy, r, n, offset = -Math.PI / 2) {
  return Array.from({ length: n }, (_, k) => {
    const a = offset + (2 * Math.PI * k) / n;
    return `${(cx + r * Math.cos(a)).toFixed(1)},${(cy + r * Math.sin(a)).toFixed(1)}`;
  }).join(" ");
}

export function estChips(tema, valores, destacados, etiqueta) {
  const a = tema.acento, T = tema.texto, mu = tema.muted;
  const w = 40, h = 40, gap = 9, x0 = 10, y = 12;
  const totalW = x0 * 2 + valores.length * w + (valores.length - 1) * gap;
  const vbH = etiqueta ? 84 : 64;
  return (
    <svg viewBox={`0 0 ${totalW} ${vbH}`} width="100%" style={{ display: "block", maxHeight: etiqueta ? 94 : 74 }}>
      {valores.map((v, i) => {
        const hi = destacados.includes(i);
        const x = x0 + i * (w + gap);
        return (
          <g key={i}>
            <rect x={x} y={y} width={w} height={h} rx={8} fill={hi ? tema.acentoMed : tema.card} stroke={hi ? a : tema.border} strokeWidth={hi ? 2 : 1.4} />
            <text x={x + w / 2} y={y + h / 2 + 6} fill={hi ? a : T} fontSize="17" fontFamily="'IBM Plex Mono',monospace" textAnchor="middle">{v}</text>
          </g>
        );
      })}
      {etiqueta && <text x={totalW / 2} y={y + h + 20} fill={mu} fontSize="12" fontFamily="'Figtree', system-ui, sans-serif" textAnchor="middle">{etiqueta}</text>}
    </svg>
  );
}

export function estBarras(tema, items, hiIdx, etiqueta) {
  const a = tema.acento, mu = tema.muted, T = tema.texto;
  const bw = 34, gap = 18, x0 = 18, base = 86, unit = 20;
  const totalW = x0 * 2 + items.length * bw + (items.length - 1) * gap;
  return (
    <svg viewBox={`0 0 ${totalW} ${etiqueta ? 122 : 104}`} width="100%" style={{ display: "block", maxHeight: etiqueta ? 132 : 112 }}>
      {items.map((d, i) => {
        const hi = i === hiIdx;
        const hgt = d.f * unit;
        const x = x0 + i * (bw + gap);
        return (
          <g key={i}>
            <rect x={x} y={base - hgt} width={bw} height={hgt} rx={4} fill={hi ? tema.acentoMed : tema.azulSuave} stroke={hi ? a : tema.azulBorde} strokeWidth={hi ? 2 : 1.3} />
            <text x={x + bw / 2} y={base - hgt - 5} fill={hi ? a : mu} fontSize="11" fontFamily="'IBM Plex Mono',monospace" textAnchor="middle">{d.f}</text>
            <text x={x + bw / 2} y={base + 15} fill={hi ? a : T} fontSize="13" fontFamily="'Figtree', system-ui, sans-serif" textAnchor="middle">{d.x}</text>
          </g>
        );
      })}
      <line x1={8} y1={base} x2={totalW - 8} y2={base} stroke={tema.border} strokeWidth="1.4" />
      {etiqueta && <text x={totalW / 2} y={base + 34} fill={mu} fontSize="11.5" fontFamily="'Figtree', system-ui, sans-serif" textAnchor="middle">{etiqueta}</text>}
    </svg>
  );
}

export const DADO_PIPS = {
  1: [[0.5, 0.5]],
  2: [[0.28, 0.28], [0.72, 0.72]],
  3: [[0.28, 0.28], [0.5, 0.5], [0.72, 0.72]],
  4: [[0.28, 0.28], [0.72, 0.28], [0.28, 0.72], [0.72, 0.72]],
  5: [[0.28, 0.28], [0.72, 0.28], [0.5, 0.5], [0.28, 0.72], [0.72, 0.72]],
  6: [[0.28, 0.28], [0.28, 0.5], [0.28, 0.72], [0.72, 0.28], [0.72, 0.5], [0.72, 0.72]],
};

export function DadoSVG({ x, y, s, n, color, fill, stroke, rPip }) {
  const r = rPip || s * 0.07;
  return (
    <g>
      <rect x={x} y={y} width={s} height={s} rx={s * 0.18} fill={fill} stroke={stroke} strokeWidth="2"/>
      {DADO_PIPS[n].map(([fx, fy], i) => (
        <circle key={i} cx={x + fx * s} cy={y + fy * s} r={r} fill={color}/>
      ))}
    </g>
  );
}

export function UrnaSVG({ tema, rojas = 0, azules = 0, verdes = 0 }) {
  const rj = tema.rojo, az = tema.azul, gr = tema.verde;
  const colores = [...Array(rojas).fill(rj), ...Array(azules).fill(az), ...Array(verdes).fill(gr)];
  const partes = [];
  if (rojas) partes.push(`${rojas}R`);
  if (azules) partes.push(`${azules}A`);
  if (verdes) partes.push(`${verdes}V`);
  return (
    <svg viewBox="0 0 150 152" width="100%" style={{ display: "block", maxHeight: 162, maxWidth: 170 }}>
      <path d="M34,32 L34,120 Q34,134 48,134 L102,134 Q116,134 116,120 L116,32"
        fill="rgba(255,255,255,0.03)" stroke={tema.border} strokeWidth="2"/>
      {colores.map((c, i) => {
        const col = i % 3, row = Math.floor(i / 3);
        const cx = 55 + col * 20, cy = 114 - row * 23;
        return <circle key={i} cx={cx} cy={cy} r={9.5} fill={`${c}59`} stroke={c} strokeWidth="1.8"/>;
      })}
      <text x="75" y="22" fill={tema.acento} fontSize="13" fontFamily="'Figtree', system-ui, sans-serif" textAnchor="middle">{partes.join(" · ")}</text>
    </svg>
  );
}

export const PROB_HANDLE_OCULTO = { background: 'transparent', border: 'none', width: 6, height: 6 };

export function ProbNodo({ data }) {
  const col = data.col || '#3b9eff';
  return (
    <div style={{ padding: '5px 12px', borderRadius: 8, minWidth: 52, background: `${col}1a`, border: `1.5px solid ${col}80`, fontSize: 11, color: data.t, textAlign: 'center', fontWeight: 600, whiteSpace: 'nowrap' }}>
      <Handle type="target" position={Position.Left} style={PROB_HANDLE_OCULTO} />
      {data.label}
      <Handle type="source" position={Position.Right} style={PROB_HANDLE_OCULTO} />
    </div>
  );
}

export const PROB_NODE_TYPES = { probnodo: ProbNodo };

export const DIST_SUMA_DADOS = [
  { x: "2", n: 1 }, { x: "3", n: 2 }, { x: "4", n: 3 }, { x: "5", n: 4 },
  { x: "6", n: 5 }, { x: "7", n: 6 }, { x: "8", n: 5 }, { x: "9", n: 4 },
  { x: "10", n: 3 }, { x: "11", n: 2 }, { x: "12", n: 1 },
];

export const DIST_BINOMIAL = [
  { k: "0", p: 1 / 16 }, { k: "1", p: 4 / 16 }, { k: "2", p: 6 / 16 },
  { k: "3", p: 4 / 16 }, { k: "4", p: 1 / 16 },
];

export const DADO_FREC = [
  { cara: "1", fr: 0.160 },
  { cara: "2", fr: 0.173 },
  { cara: "3", fr: 0.163 },
  { cara: "4", fr: 0.183 },
  { cara: "5", fr: 0.153 },
  { cara: "6", fr: 0.167 },
];

export const GRADE_FREC = [
  { x: "6", f: 2 },
  { x: "7", f: 5 },
  { x: "8", f: 8 },
  { x: "9", f: 4 },
  { x: "10", f: 1 },
];
