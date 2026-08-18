import{u as p,j as a,L as o,f as h,r as s}from"./index-gAROnWhb.js";const x=[{id:"alumnos",label:"Alumnos"},{id:"tutores",label:"Tutores"},{id:"cuestionarios",label:"Estadísticas"},{id:"presentaciones",label:"Presentaciones"},{id:"cursos",label:"Cursos"},{id:"inscripciones",label:"Inscripciones"},{id:"cargos",label:"Cargos"},{id:"suscripciones",label:"Suscripciones"},{id:"regularizacion",label:"Regularización",to:"/regularizacion"}];function g(){const r=h(),n=s.useRef(null);return s.useEffect(()=>{if(r&&window.katex&&n.current)try{window.katex.render("\\mathbb{R}[i]",n.current,{throwOnError:!1,displayMode:!1})}catch{}},[r]),a.jsxs("span",{className:"ah-brand-name",children:["Facto",a.jsx("span",{className:"ah-brand-math",ref:n,children:"ℝ[i]"}),"zando"]})}function u({active:r,onChange:n,tabs:t,chip:l="Panel Admin"}){const i=p(),c=t||x;function d(e){e.to?i(e.to):n?n(e.id):i("/admin")}return a.jsxs("header",{className:"ah-top",children:[a.jsx("style",{children:f}),a.jsxs("div",{className:"ah-brand",children:[a.jsx(o,{to:"/",className:"ah-logo-link",title:"Inicio",children:a.jsx("span",{className:"ah-logo-ring",children:a.jsx("img",{src:"/factorizando/assets/logoX.png",alt:"Factorizando"})})}),a.jsx(g,{}),a.jsx("span",{className:"ah-sep",children:"|"}),a.jsx("span",{className:"ah-chip",children:l})]}),a.jsx("nav",{className:"ahn-nav",children:c.map(e=>a.jsx("button",{type:"button",className:`ahn-btn ${r===e.id?"ahn-active":""}`,onClick:()=>d(e),children:e.label},e.id))}),a.jsx("div",{className:"ah-cuenta",children:a.jsx(o,{to:"/",className:"ah-ghost",children:"← Inicio"})})]})}const f=`
.ah-top { display: flex; align-items: center; justify-content: space-between; gap: 18px;
  height: 60px; padding: 0 18px; background: #0e0f11;
  border-bottom: 1px solid var(--border-soft); flex-shrink: 0; position: sticky; top: 0; z-index: 20;
  --bg: #0e0f11; --surface: #16181c; --surface-2: #1c1f24;
  --border: rgba(255,255,255,0.09); --border-soft: rgba(255,255,255,0.05); --border-strong: rgba(255,255,255,0.16);
  --text: #e8e8e8; --text-muted: #9c958a; --heading: #e8e8e8;
  --brand: #e8e8e8; --azul-suave: #80c6ff; --azul-suave-soft: rgba(128,198,255,0.13); }
.ah-top * { box-sizing: border-box; }
/* MARCA */
.ah-brand { display: flex; align-items: center; gap: 9px; font-weight: 700; flex-shrink: 0; }
.ah-logo-link { display: inline-flex; align-items: center; }
.ah-logo-ring { display: inline-block; width: 34px; height: 34px; border-radius: 50%;
  border: 1px dashed var(--border-strong); overflow: hidden; flex-shrink: 0; }
.ah-logo-ring img { width: 100%; height: 100%; object-fit: cover; display: block; }
.ah-brand-name { font-family: 'Cormorant Garamond', Georgia, serif; font-weight: 700;
  font-size: clamp(16px, 3.4vw, 20px); letter-spacing: .01em; white-space: nowrap; color: var(--brand); }
.ah-brand-math { color: var(--azul-suave); }
.ah-brand-math .katex { color: var(--azul-suave); }
.ah-sep { color: var(--border-strong); font-weight: 400; }
.ah-chip { font-size: 14px; font-weight: 600; color: var(--text); white-space: nowrap; }
/* CUENTA */
.ah-cuenta { display: flex; align-items: center; gap: 12px; flex-shrink: 0; }
.ah-ghost { display: inline-flex; align-items: center; text-decoration: none;
  font-size: 14px; font-weight: 600; color: var(--text); padding: 9px 14px;
  border-radius: 99px; transition: background .15s, color .15s; white-space: nowrap;
  background: none; border: none; cursor: pointer; font-family: inherit; }
.ah-ghost:hover { background: var(--surface-2); color: var(--heading); }
/* NAVEGACIÓN ADMIN */
.ahn-nav { flex: 1; display: flex; align-items: center; gap: 2px;
  overflow-x: auto; scrollbar-width: none; padding: 0 8px; justify-content: center; }
.ahn-nav::-webkit-scrollbar { display: none; }
.ahn-btn { border: none; background: transparent; color: var(--text-muted);
  font-size: 13px; font-weight: 500; padding: 7px 12px; border-radius: 6px;
  cursor: pointer; white-space: nowrap; transition: color .15s, background .15s;
  font-family: 'DM Sans', sans-serif; }
.ahn-btn:hover { color: var(--text); background: var(--surface-2); }
.ahn-active { color: var(--text) !important; font-weight: 700; background: var(--surface-2); }
/* RESPONSIVO */
@media (max-width: 900px) {
  .ahn-nav { justify-content: flex-start; }
}
@media (max-width: 720px) {
  .ah-chip, .ah-sep { display: none; }
}
@media (max-width: 520px) {
  .ah-top { gap: 10px; padding: 0 12px; }
  .ah-brand-name { display: none; }
  .ah-ghost { padding: 9px 10px; font-size: 13px; }
  .ahn-btn { padding: 6px 8px; font-size: 12px; }
}
`;export{u as A};
