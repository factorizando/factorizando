import{j as e,f as b,r as l}from"./index-DBgfQOJp.js";import{D as N,I as w}from"./index-xMAuetVz.js";const f={definicion:{label:"Definición",num:!0,color:"var(--c-definicion)"},axioma:{label:"Axioma",num:!0,color:"var(--c-axioma)"},notacion:{label:"Notación",num:!0,color:"var(--c-notacion)"},teorema:{label:"Teorema",num:!0,color:"var(--c-teorema)"},lema:{label:"Lema",num:!0,color:"var(--c-teorema)"},proposicion:{label:"Proposición",num:!0,color:"var(--c-teorema)"},corolario:{label:"Corolario",num:!0,color:"var(--c-corolario)"},observacion:{label:"Observación",num:!0,color:"var(--c-observacion)"},ejemplo:{label:"Ejemplo",num:!0,color:"var(--c-ejemplo)"},ejercicio:{label:"Ejercicio",num:!0,color:"var(--c-ejercicio)"}},k=new Set(["teorema","lema","proposicion","corolario","axioma"]);function S({tex:i}){const n=b(),s=l.useRef(null);return l.useEffect(()=>{if(n&&s.current)try{window.katex.render(i,s.current,{throwOnError:!1,displayMode:!1})}catch{}},[n,i]),n?e.jsx("span",{ref:s}):e.jsx("span",{style:{fontFamily:"monospace"},children:i})}function h({tex:i}){const n=b(),s=l.useRef(null);return l.useEffect(()=>{if(n&&s.current)try{window.katex.render(i,s.current,{throwOnError:!1,displayMode:!0})}catch{}},[n,i]),n?e.jsx("div",{className:"dm-display",ref:s}):e.jsx("div",{className:"dm-display",style:{fontFamily:"monospace"},children:i})}function I({doc:i,tema:n,embebido:s=!1}){const m=i?.contenido??[],p={};{let r=0,t={};for(const o of m){if(o.tipo==="seccion"){r++,t={};continue}const a=f[o.tipo];if(a&&a.num){t[o.tipo]=(t[o.tipo]||0)+1;const d=`${r||1}.${t[o.tipo]}`;o._num=d,o.etiqueta&&(p[o.etiqueta]=`${a.label} ${d}`)}}}function c({texto:r}){const t=/(\$[^$]+\$|\[\[[^\]]+\]\]|\*[^*]+\*)/g,o=String(r).split(t).filter(a=>a!=="");return e.jsx(e.Fragment,{children:o.map((a,d)=>{if(a.startsWith("$")&&a.endsWith("$"))return e.jsx(S,{tex:a.slice(1,-1)},d);if(a.startsWith("[[")&&a.endsWith("]]")){const v=a.slice(2,-2);return e.jsx("span",{className:"dm-ref",children:p[v]||v},d)}return a.startsWith("*")&&a.endsWith("*")?e.jsx("em",{className:"dm-em",children:a.slice(1,-1)},d):e.jsx("span",{children:a},d)})})}function u({el:r}){if(r.p!=null)return e.jsx("p",{className:"dm-p",children:e.jsx(c,{texto:r.p})});if(r.math!=null)return e.jsx(h,{tex:r.math});if(r.lista)return e.jsx("ul",{className:"dm-lista",children:r.lista.map((t,o)=>e.jsx("li",{children:e.jsx(c,{texto:t})},o))});if(r.figura){const t=N[r.figura];return e.jsxs("figure",{className:"dm-fig",children:[t?e.jsx(t,{tema:n}):e.jsx(j,{tipo:"figura",clave:r.figura}),r.caption&&e.jsx("figcaption",{children:e.jsx(c,{texto:r.caption})})]})}if(r.interactivo){const t=w[r.interactivo];return e.jsxs("figure",{className:"dm-fig dm-fig-int",children:[r.instruccion&&e.jsxs("div",{className:"dm-instr",children:["↔ ",e.jsx(c,{texto:r.instruccion})]}),t?e.jsx(t,{tema:n,...r.props||{}}):e.jsx(j,{tipo:"interactivo",clave:r.interactivo}),r.caption&&e.jsx("figcaption",{children:e.jsx(c,{texto:r.caption})})]})}return null}function x({items:r}){return(r||[]).map((t,o)=>e.jsx(u,{el:t},o))}function y({b:r}){if(r.tipo==="seccion")return e.jsx("h2",{className:"dm-seccion",children:r.titulo});if(r.tipo==="parrafo")return e.jsx("div",{className:"dm-parrafo",children:e.jsx(x,{items:r.cuerpo})});if(r.tipo==="demostracion")return e.jsxs("div",{className:"dm-env dm-demo",children:[e.jsxs("div",{className:"dm-demo-hd",children:["Demostración",r.metodo?` (${r.metodo})`:"","."]}),(r.pasos||[]).map((o,a)=>e.jsxs("div",{className:"dm-paso",children:[o.texto&&e.jsx("p",{className:"dm-p",children:e.jsx(c,{texto:o.texto})}),o.math&&e.jsx(h,{tex:o.math}),o.figura&&e.jsx(u,{el:{figura:o.figura,caption:o.caption}}),o.interactivo&&e.jsx(u,{el:{interactivo:o.interactivo,props:o.props,instruccion:o.instruccion}})]},a)),e.jsx("div",{className:"dm-qed",children:"∎"})]});if(r.tipo==="ejercicio"){const o=f.ejercicio;return e.jsxs("div",{className:"dm-env",style:{"--env":o.color},children:[e.jsxs("div",{className:"dm-env-hd",children:[e.jsxs("span",{className:"dm-env-nombre",children:[o.label,r._num?` ${r._num}`:""]}),r.titulo&&e.jsxs("span",{className:"dm-env-titulo",children:[" — ",r.titulo]})]}),e.jsx("div",{className:"dm-env-body",children:e.jsx(x,{items:r.cuerpo})}),r.pista&&e.jsx(g,{etiqueta:"Ver pista",children:e.jsx("p",{className:"dm-p",children:e.jsx(c,{texto:r.pista})})}),r.solucion&&e.jsx(g,{etiqueta:"Ver solución",children:e.jsx(x,{items:r.solucion})})]})}const t=f[r.tipo];return t?e.jsxs("div",{className:"dm-env",style:{"--env":t.color},children:[e.jsxs("div",{className:"dm-env-hd",children:[e.jsxs("span",{className:"dm-env-nombre",children:[t.label,r._num?` ${r._num}`:""]}),r.titulo&&e.jsxs("span",{className:"dm-env-titulo",children:[" — ",r.titulo]})]}),e.jsx("div",{className:`dm-env-body${k.has(r.tipo)?" dm-italic":""}`,children:e.jsx(x,{items:r.cuerpo})})]}):e.jsxs("div",{style:{color:"#e66"},children:['Tipo de bloque desconocido: "',r.tipo,'"']})}return e.jsxs("div",{className:`dm-root${s?" dm-embed":""}`,children:[e.jsx("style",{children:E}),e.jsxs("header",{className:`dm-hero${s?" dm-hero-sm":""}`,children:[i?.tema&&e.jsx("div",{className:"dm-tag",children:i.tema}),e.jsx("h1",{children:i?.titulo}),i?.materia&&e.jsx("p",{className:"dm-sub",children:i.materia})]}),e.jsx("article",{className:"dm-cw",children:m.map((r,t)=>e.jsx(y,{b:r},t))})]})}function g({etiqueta:i,children:n}){const[s,m]=l.useState(!1);return e.jsxs("div",{className:"dm-colap",children:[e.jsxs("button",{className:"dm-colap-btn",onClick:()=>m(p=>!p),children:[s?"▾":"▸"," ",i]}),s&&e.jsx("div",{className:"dm-colap-body",children:n})]})}function j({tipo:i,clave:n}){return e.jsxs("div",{style:{padding:16,border:"1px dashed #e66",borderRadius:8,color:"#e88",fontSize:13},children:[i," no registrado: ",e.jsx("code",{children:n})]})}const E=`
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400;1,600&family=IBM+Plex+Mono:wght@400;600&family=Source+Serif+4:ital,opsz,wght@0,8..60,300;0,8..60,500;1,8..60,400&display=swap');
.dm-root { font-family: 'Source Serif 4', Georgia, serif; background: var(--bg); color: var(--text); min-height: 100vh; padding: 0 0 90px; }
.dm-root .katex { color: var(--text); }
.dm-display { background: var(--sunken); border-radius: 6px; padding: 16px 24px; margin: 16px 0; overflow-x: auto; }
.dm-display .katex { color: var(--math); }
.dm-display .katex-display { margin: 0; }
/* HERO */
.dm-hero { text-align: center; padding: 70px 24px 50px; border-bottom: 1px solid var(--border); }
.dm-tag { display: inline-block; font-family: 'IBM Plex Mono', monospace; font-size: 11px; letter-spacing: 0.2em; color: var(--azul-suave); margin-bottom: 18px; text-transform: uppercase; }
.dm-hero h1 { font-family: 'Playfair Display', serif; font-size: clamp(38px,7vw,72px); font-weight: 700; line-height: 1.05; color: var(--text); }
.dm-sub { font-family: 'IBM Plex Mono', monospace; font-size: 12px; letter-spacing: 0.18em; text-transform: uppercase; color: var(--text); margin-top: 16px; }
/* LAYOUT */
.dm-cw { max-width: 760px; margin: 0 auto; padding: 0 24px; }
.dm-embed { min-height: 0; padding-bottom: 60px; background: transparent; }
.dm-embed .dm-cw { padding-top: 26px; }
/* HERO compacto (documento incrustado en un curso) */
.dm-hero-sm { padding: 26px 24px 20px; text-align: center; border-bottom: 1px solid var(--border); }
.dm-hero-sm .dm-tag { margin-bottom: 10px; }
.dm-hero-sm h1 { font-size: clamp(22px, 3.2vw, 30px); }
.dm-hero-sm .dm-sub { margin-top: 8px; }
/* COLAPSABLE (pista / solución) */
.dm-colap { margin-top: 14px; }
.dm-colap-btn { font-family: 'IBM Plex Mono', monospace; font-size: 12px; letter-spacing: .04em; color: var(--env, var(--accent)); background: var(--surface); border: 1px solid var(--border-strong); border-radius: 6px; padding: 7px 13px; cursor: pointer; }
.dm-colap-btn:hover { background: var(--surface-2); }
.dm-colap-body { margin-top: 10px; padding-left: 14px; border-left: 2px solid var(--border-strong); }
.dm-seccion { font-family: 'Playfair Display', serif; font-size: clamp(22px,3.5vw,30px); font-weight: 700; color: var(--heading); margin: 54px 0 24px; padding-bottom: 12px; border-bottom: 1px solid var(--border); }
.dm-p { font-size: 16px; line-height: 1.85; color: var(--text-dim); font-weight: 300; margin: 10px 0; }
.dm-parrafo { margin: 18px 0; }
.dm-lista { list-style: none; padding-left: 0; margin: 10px 0; }
.dm-lista li { position: relative; padding: 4px 0 4px 22px; font-size: 16px; line-height: 1.8; color: var(--text-dim); font-weight: 300; }
.dm-lista li::before { content: '→'; position: absolute; left: 0; top: 5px; color: var(--accent); }
.dm-ref { color: var(--accent); font-style: normal; white-space: nowrap; }
.dm-em { font-style: italic; color: var(--text); }
/* ENTORNOS (amsthm) */
.dm-env { background: var(--surface); border: 1px solid var(--border); border-radius: 8px; padding: 20px 26px; margin: 22px 0; }
.dm-env-hd { display: flex; align-items: center; gap: 10px; margin-bottom: 10px; }
.dm-env-hd::before { content: ""; width: 3px; height: 1.05em; border-radius: 2px; background: var(--env, var(--accent)); flex-shrink: 0; }
.dm-env-nombre { font-family: 'IBM Plex Mono', monospace; font-size: 12px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--env, var(--accent)); font-weight: 600; }
.dm-env-titulo { font-family: 'Playfair Display', serif; font-style: italic; font-size: 17px; color: var(--heading); }
.dm-env-body.dm-italic .dm-p { font-style: italic; color: var(--text); }
/* DEMOSTRACIÓN */
.dm-demo { background: transparent; border: none; border-left: 2px solid var(--border-strong); border-radius: 0; padding: 6px 0 6px 22px; margin: 18px 0; }
.dm-demo-hd { font-family: 'Playfair Display', serif; font-style: italic; font-size: 16px; color: var(--text-muted); margin-bottom: 8px; }
.dm-paso { margin: 8px 0; }
.dm-qed { text-align: right; font-size: 18px; color: var(--text-dim); margin-top: 6px; }
/* FIGURAS */
.dm-fig { margin: 20px 0; padding: 18px; background: var(--sunken); border: 1px solid var(--border); border-radius: 10px; }
.dm-fig figcaption { text-align: center; font-size: 13px; color: var(--text-muted); font-style: italic; margin-top: 12px; }
.dm-fig-int { background: var(--accent-soft); border-color: var(--border); }
.dm-instr { font-family: 'IBM Plex Mono', monospace; font-size: 12px; color: var(--c-definicion); margin-bottom: 12px; letter-spacing: 0.04em; }
/* ── RESPONSIVO: celular ── */
@media (max-width: 640px) {
  .dm-cw { padding: 0 16px; }
  .dm-hero { padding: 48px 18px 36px; }
  .dm-env { padding: 16px 16px; }
  .dm-display { padding: 14px 14px; }
}
`;export{I as D};
