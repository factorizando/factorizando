import{b as S,u as $,r as p,j as e,L as R,e as I,f as E,I as P}from"./index-PFIajzfb.js";import{b as M}from"./presentacionesIndex-BQxF11Em.js";import{b as A}from"./documentosIndex-XoTmcR8c.js";import{o as D}from"./temas-Dzl3k1AY.js";import{S as L}from"./SlideRenderer-_ABU2Ams.js";import{D as B}from"./DocumentoRenderer-w-efyEmd.js";import"./cohesion-textual-exani-ii-DmGbzJgs.js";import"./CartesianChart-CbKaZQSa.js";import"./BarChart-DyBIGtJT.js";import"./ReferenceLine-Dj4i-b2J.js";const O={presentacion:"Presentación",documento:"Documento",cuestionario:"Cuestionario",video:"Video"};function T(){const a=E(),r=p.useRef(null);return p.useEffect(()=>{if(a&&window.katex&&r.current)try{window.katex.render("\\mathbb{R}[i]",r.current,{throwOnError:!1,displayMode:!1})}catch{}},[a]),e.jsxs("span",{className:"cv-brand-name",children:["Facto",e.jsx("span",{className:"cv-brand-math",ref:r,children:"ℝ[i]"}),"zando"]})}function N({icono:a,size:r=20}){const o=P[a];return o?e.jsx(o,{size:r}):e.jsx("span",{children:a})}function w({size:a=18}){return e.jsxs("svg",{width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[e.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}),e.jsx("path",{d:"M9 3v18"})]})}function ae(){const{id:a}=S(),r=$(),o=I(a),[x,v]=p.useState(0),[c,m]=p.useState(null),[b,h]=p.useState(()=>typeof window>"u"?!0:window.innerWidth>820),j=p.useMemo(()=>(o?.secciones||[]).flatMap(i=>i.subsecciones.flatMap(s=>s.habilidades||[])),[o]);if(!o)return e.jsxs("div",{style:{minHeight:"100vh",display:"grid",placeItems:"center",fontFamily:"monospace"},children:["Curso no encontrado: ",a]});const g=j.length,y=j.filter(i=>i.completado).length,f=g?Math.round(y/g*100):0,k=Math.max(0,Math.min(3,Math.round(f/100*3))),z=i=>v(s=>s===i?null:i);return e.jsxs("div",{className:"cv-root",children:[e.jsx("style",{children:X}),e.jsxs("header",{className:"cv-top",children:[e.jsxs("div",{className:"cv-brand",children:[e.jsx(R,{to:"/",className:"cv-logo-link",title:"Inicio",children:e.jsx("span",{className:"cv-logo-ring",children:e.jsx("img",{src:"/factorizando/assets/logoX.png",alt:"Factorizando"})})}),e.jsx(T,{}),e.jsx("span",{className:"cv-sep",children:"|"}),e.jsxs("button",{className:"cv-materia-trigger",type:"button",title:"Cambiar materia / curso (próximamente)",children:[o.area,e.jsx("svg",{className:"cv-chevron",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:e.jsx("path",{d:"m6 9 6 6 6-6"})})]})]}),e.jsxs("div",{className:"cv-progreso",children:[e.jsxs("span",{className:"cv-progreso-txt",children:[y,"/",g," habilidades"]}),e.jsx("div",{className:"cv-bar",children:e.jsx("div",{className:"cv-bar-fill",style:{width:`${f}%`}})}),e.jsxs("span",{className:"cv-stars",children:["★".repeat(k),e.jsx("span",{className:"cv-stars-off",children:"★".repeat(3-k)})]})]}),e.jsx("div",{className:"cv-cuenta",children:e.jsx("span",{className:"cv-avatar",children:"J"})})]}),e.jsxs("div",{className:"cv-body",children:[b?e.jsxs("aside",{className:"cv-side",children:[e.jsxs("div",{className:"cv-side-hd",children:[e.jsxs("span",{className:"cv-side-hd-tit",children:[e.jsx(N,{icono:o.icono,size:24})," ",o.area]}),e.jsx("button",{className:"cv-x",onClick:()=>h(!1),title:"Contraer menú","aria-label":"Contraer menú",children:e.jsx(w,{})})]}),o.secciones.map((i,s)=>{const d=x===s;return e.jsxs("div",{className:"cv-sec",children:[e.jsx("button",{className:"cv-sec-hd",onClick:()=>z(s),children:e.jsxs("div",{className:"cv-sec-tit",children:[e.jsxs("div",{className:"cv-sec-num",children:["Sección ",s+1]}),e.jsx("div",{className:"cv-sec-nombre",children:i.titulo})]})}),d&&e.jsx("div",{className:"cv-sec-body",children:i.subsecciones.map(t=>{if(t.documentoRef||t.proximamente&&!t.habilidades){const n=`${i.id}/${t.id}`,u=c?.key===n,l=!t.documentoRef;return e.jsx("button",{className:`cv-hab${u?" activa":""}${l?" prox":""}`,onClick:()=>!l&&m({hab:{tipo:"documento",ref:t.documentoRef,titulo:t.titulo},key:n}),children:e.jsxs("span",{className:"cv-hab-txt",children:[e.jsx("span",{className:"cv-hab-tit",children:t.titulo}),e.jsxs("span",{className:"cv-hab-meta",children:["Lección",l?" · próximamente":""]})]})},t.id)}return e.jsxs("div",{className:"cv-sub",children:[e.jsx("div",{className:"cv-sub-tit",children:t.titulo}),(t.habilidades||[]).map((n,u)=>{const l=`${i.id}/${t.id}/${u}`,C=c?.key===l;return e.jsx("button",{className:`cv-hab${C?" activa":""}${n.proximamente?" prox":""}`,onClick:()=>!n.proximamente&&m({hab:n,key:l}),children:e.jsxs("span",{className:"cv-hab-txt",children:[e.jsx("span",{className:"cv-hab-tit",children:n.titulo}),e.jsxs("span",{className:"cv-hab-meta",children:[O[n.tipo]||n.tipo,n.duracion?` · ${n.duracion}`:"",n.proximamente?" · próximamente":""]})]})},l)})]},t.id)})})]},i.id)})]}):e.jsxs("nav",{className:"cv-rail",children:[e.jsx("button",{className:"cv-rail-btn",onClick:()=>h(!0),title:"Expandir menú","aria-label":"Expandir menú",children:e.jsx(w,{})}),e.jsx("div",{className:"cv-rail-curso",title:o.area,children:e.jsx(N,{icono:o.icono,size:38})}),e.jsx("div",{className:"cv-rail-secs",children:o.secciones.map((i,s)=>e.jsxs("div",{className:"cv-rail-grupo",children:[e.jsx("button",{className:"cv-rail-sec",title:`Sección ${s+1} · ${i.titulo}`,onClick:()=>{v(s),h(!0)},children:s+1}),e.jsx("div",{className:"cv-rail-dots",children:i.subsecciones.map(d=>{const t=`${i.id}/${d.id}`,n=c?.key===t,u=!d.documentoRef&&!d.habilidades;return e.jsx("button",{className:`cv-rail-dot${n?" activa":""}${u?" prox":""}`,title:d.titulo,"aria-label":d.titulo,onClick:()=>{u||(v(s),d.documentoRef?m({hab:{tipo:"documento",ref:d.documentoRef,titulo:d.titulo},key:t}):h(!0))}},d.id)})})]},i.id))})]}),e.jsx("main",{className:"cv-pizarra",children:c?e.jsx(V,{hab:c.hab,navigate:r},c.key):e.jsx(G,{curso:o,pct:f})})]})]})}function V({hab:a,navigate:r}){return a.tipo==="presentacion"?e.jsx(F,{presId:a.ref}):a.tipo==="documento"?e.jsx(W,{docId:a.ref}):a.tipo==="cuestionario"?e.jsxs("div",{className:"cv-card",children:[e.jsx("h2",{children:a.titulo}),e.jsxs("p",{children:["Cuestionario · ",a.duracion||""]}),a.ref?e.jsx("button",{className:"cv-btn",onClick:()=>r(`/cuestionario/${a.ref}`),children:"Comenzar cuestionario"}):e.jsx("p",{className:"cv-prox",children:"Este cuestionario aún no está disponible."})]}):e.jsx("div",{className:"cv-card",children:e.jsxs("p",{children:["Tipo no soportado: ",a.tipo]})})}function F({presId:a}){const r=M(a),o=D(r?.materia),[x,v]=p.useState(0);if(!r)return e.jsx("div",{className:"cv-card",children:e.jsxs("p",{children:["Presentación no encontrada: ",a]})});const c=r.slides||[],m=c[x];return e.jsxs("div",{className:"cv-pres",children:[e.jsxs("div",{className:"cv-pres-nav",children:[e.jsx("button",{className:"cv-btn-sm",disabled:x===0,onClick:()=>v(b=>Math.max(0,b-1)),children:"‹ Anterior"}),e.jsxs("span",{className:"cv-pres-pos",children:[r.titulo," — ",x+1,"/",c.length]}),e.jsx("button",{className:"cv-btn-sm",disabled:x>=c.length-1,onClick:()=>v(b=>Math.min(c.length-1,b+1)),children:"Siguiente ›"})]}),e.jsx("div",{className:"cv-pres-slide",children:e.jsx(L,{slide:m,tema:o,modo:"alumno"})})]})}function W({docId:a}){const r=A(a);return r?e.jsx(B,{doc:r,embebido:!0}):e.jsx("div",{className:"cv-card",children:e.jsxs("p",{children:["Documento no encontrado: ",a]})})}function G({curso:a,pct:r}){return e.jsxs("div",{className:"cv-bienvenida",children:[e.jsx("div",{className:"cv-bien-ic",children:a.icono}),e.jsx("h1",{children:a.area}),e.jsx("p",{children:"Selecciona una habilidad en el panel de contenido para empezar."}),e.jsx("div",{className:"cv-bien-bar",children:e.jsx("div",{style:{width:`${r}%`}})}),e.jsxs("span",{className:"cv-bien-pct",children:[r,"% completado"]})]})}const X=`
/* Alias locales mapeados a los tokens globales (ver src/styles/theme.css).
   Cambiar el tema = redefinir los tokens globales; este componente no se toca. */
.cv-root { --azul: var(--brand); --tinta: var(--text); --gris: var(--text-muted); --linea: var(--border);
  font-family: var(--font-ui); color: var(--tinta); height: 100vh; display: flex; flex-direction: column; background: var(--bg); }
.cv-root * { box-sizing: border-box; }
/* TOP */
.cv-top { display: flex; align-items: center; justify-content: space-between; gap: 16px; height: 56px; padding: 0 18px; background: var(--bg); border-bottom: 1px solid var(--border-soft); flex-shrink: 0; }
.cv-brand { display: flex; align-items: center; gap: 9px; font-weight: 700; }
.cv-logo-link { display: inline-flex; align-items: center; }
.cv-logo-ring { display: inline-block; width: 34px; height: 34px; border-radius: 50%; border: 1px dashed var(--border-strong); overflow: hidden; flex-shrink: 0; }
.cv-logo-ring img { width: 100%; height: 100%; object-fit: cover; display: block; }
.cv-brand-math { color: var(--azul-suave); }
.cv-brand-math .katex { color: var(--azul-suave); }
.cv-brand-name { font-family: 'Cormorant Garamond', Georgia, serif; font-weight: 700; font-size: clamp(16px, 3.4vw, 20px); letter-spacing: .01em; color: var(--azul); white-space: nowrap; }
.cv-sep { color: var(--linea); font-weight: 400; }
.cv-materia-trigger { display: inline-flex; align-items: center; gap: 6px; background: none; border: none; color: var(--tinta); font-weight: 600; font-size: 14px; cursor: pointer; padding: 4px 8px; border-radius: 8px; }
.cv-materia-trigger:hover { background: var(--surface-2); }
.cv-chevron { opacity: .55; }
.cv-progreso { display: flex; align-items: center; gap: 12px; }
.cv-progreso-txt { font-size: 13px; color: var(--text); }
.cv-bar { width: 180px; height: 7px; background: var(--surface-2); border-radius: 99px; overflow: hidden; }
.cv-bar-fill { height: 100%; background: var(--azul); border-radius: 99px; transition: width .3s; }
.cv-stars { color: var(--accent); letter-spacing: 1px; font-size: 14px; }
.cv-stars-off { color: var(--border-strong); }
.cv-cuenta { display: flex; align-items: center; gap: 12px; }
.cv-ic { color: var(--gris); cursor: default; }
.cv-avatar { width: 30px; height: 30px; border-radius: 50%; background: var(--azul-suave); color: var(--bg); display: grid; place-items: center; font-size: 13px; font-weight: 700; }
/* BODY — los paneles flotan sobre el fondo de página con margen y separación */
.cv-body { flex: 1; display: flex; min-height: 0; padding: 14px; gap: 14px; }
/* SIDEBAR (caja) */
.cv-side { width: 360px; flex-shrink: 0; background: var(--bg); border: 1px solid var(--border-soft); border-radius: 14px; overflow-y: auto; overflow-x: hidden; }
.cv-sec:last-child { border-bottom: none; }
/* RAIL (menú compacto) */
.cv-rail { width: 64px; flex-shrink: 0; background: var(--bg); border: 1px solid var(--border-soft); border-radius: 14px; display: flex; flex-direction: column; align-items: center; gap: 8px; padding: 12px 0; overflow-y: auto; }
.cv-rail-btn { display: inline-flex; align-items: center; justify-content: center; width: 40px; height: 40px; border: none; background: none; color: var(--gris); border-radius: 8px; cursor: pointer; }
.cv-rail-btn:hover { color: var(--text); background: var(--surface-2); }
.cv-rail-curso { font-size: 22px; margin: 2px 0 6px; }
.cv-rail-secs { display: flex; flex-direction: column; gap: 12px; width: 100%; align-items: center; }
.cv-rail-grupo { display: flex; flex-direction: column; align-items: center; gap: 6px; }
.cv-rail-sec { width: 32px; height: 32px; border-radius: 50%; border: 1px solid var(--linea); background: none; color: var(--text); font-weight: 700; font-size: 13px; cursor: pointer; display: inline-flex; align-items: center; justify-content: center; }
.cv-rail-sec:hover { background: var(--surface-2); }
.cv-rail-dots { display: flex; flex-direction: column; align-items: center; gap: 3px; }
.cv-rail-dot { width: 16px; height: 16px; border: none; background: transparent; padding: 0; cursor: pointer; display: inline-flex; align-items: center; justify-content: center; }
.cv-rail-dot::before { content: ""; width: 7px; height: 7px; border-radius: 50%; background: var(--text-muted); opacity: .55; transition: opacity .15s; }
.cv-rail-dot:hover::before { opacity: 1; }
.cv-rail-dot.activa::before { background: var(--azul-suave); opacity: 1; box-shadow: 0 0 0 3px var(--azul-suave-soft); }
.cv-rail-dot.prox { cursor: default; }
.cv-rail-dot.prox::before { opacity: .22; }
.cv-side-hd { display: flex; align-items: center; justify-content: space-between; padding: 18px 20px; font-size: 17px; font-weight: 700; border-bottom: 1px solid var(--linea); position: sticky; top: 0; background: var(--bg); }
.cv-side-hd-tit { display: inline-flex; align-items: center; gap: 8px; }
.cv-x { display: inline-flex; align-items: center; border: none; background: none; color: var(--gris); cursor: pointer; padding: 2px; border-radius: 6px; }
.cv-x:hover { color: var(--text); background: var(--surface-2); }
.cv-sec { border-bottom: 1px solid var(--linea); }
.cv-sec-hd { width: 100%; display: flex; align-items: center; justify-content: space-between; gap: 10px; padding: 16px 20px; background: none; border: none; text-align: left; cursor: pointer; }
.cv-sec-hd:hover { background: var(--surface-2); }
.cv-sec-num { font-size: 12px; color: var(--text); font-weight: 600; }
.cv-sec-nombre { font-size: 15px; font-weight: 700; margin-top: 2px; }
.cv-sec-body { padding: 4px 0 12px; }
.cv-sub { padding: 8px 0; }
.cv-sub-tit { font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: .04em; color: var(--text); padding: 6px 20px; }
.cv-hab { width: 100%; display: flex; gap: 12px; align-items: flex-start; padding: 9px 20px; background: none; border: none; border-left: 3px solid transparent; text-align: left; cursor: pointer; }
.cv-hab:hover { background: var(--surface-2); }
.cv-hab.activa { background: var(--azul-suave-soft); border-left-color: var(--azul-suave); }
.cv-hab.prox { cursor: default; opacity: .55; }
.cv-hab-txt { display: flex; flex-direction: column; gap: 2px; }
.cv-hab-tit { font-size: 14px; color: var(--tinta); line-height: 1.3; }
.cv-hab-meta { font-size: 12px; color: var(--text-muted); }
.cv-hab.prox .cv-hab-meta { color: var(--gris); }
/* PIZARRA (caja) */
.cv-pizarra { flex: 1; min-width: 0; overflow-y: auto; background: var(--bg); border: 1px solid var(--border-soft); border-radius: 14px; position: relative; }
.cv-pres-nav { position: sticky; top: 0; z-index: 4; display: flex; align-items: center; justify-content: space-between; gap: 12px; padding: 10px 16px; background: var(--bg); border-bottom: 1px solid var(--linea); }
.cv-pres-pos { font-size: 13px; color: var(--gris); font-weight: 600; }
.cv-btn-sm { border: 1px solid var(--linea); background: var(--surface); padding: 7px 14px; border-radius: 8px; cursor: pointer; font-size: 13px; color: var(--tinta); }
.cv-btn-sm:disabled { opacity: .4; cursor: default; }
.cv-pres-slide { background: var(--bg); min-height: calc(100vh - 56px - 41px); }
/* CARD / BIENVENIDA */
.cv-card { max-width: 620px; margin: 60px auto; background: var(--bg); border: 1px solid var(--border-soft); border-radius: 12px; padding: 36px; text-align: center; }
.cv-card h2 { font-size: 22px; margin-bottom: 8px; }
.cv-card p { color: var(--gris); margin-bottom: 18px; }
.cv-btn { background: var(--azul); color: var(--bg); border: none; padding: 12px 22px; border-radius: 8px; font-size: 15px; font-weight: 600; cursor: pointer; }
.cv-prox { color: var(--gris); font-style: italic; }
.cv-bienvenida { max-width: 560px; margin: 90px auto; text-align: center; }
.cv-bien-ic { font-size: 56px; }
.cv-bienvenida h1 { font-size: 32px; margin: 12px 0 8px; }
.cv-bienvenida p { color: var(--gris); margin-bottom: 22px; }
.cv-bien-bar { width: 280px; height: 9px; margin: 0 auto 8px; background: var(--surface-2); border-radius: 99px; overflow: hidden; }
.cv-bien-bar > div { height: 100%; background: var(--azul); }
.cv-bien-pct { font-size: 13px; color: var(--gris); }
/* ── RESPONSIVO: en pantallas chicas el menú flota como overlay sobre la pizarra ── */
@media (max-width: 820px) {
  .cv-body { padding: 8px; gap: 8px; position: relative; }
  .cv-side { position: absolute; top: 8px; left: 8px; bottom: 8px; z-index: 30; width: min(340px, 86vw); box-shadow: 0 12px 44px rgba(0,0,0,0.55); }
  .cv-top { padding: 0 12px; gap: 10px; }
  .cv-progreso { display: none; }
  .cv-card, .cv-bienvenida { margin: 32px auto; }
}
@media (max-width: 520px) {
  .cv-sep, .cv-materia-trigger { display: none; }   /* en celular: solo logo + wordmark */
}
`;export{ae as default};
