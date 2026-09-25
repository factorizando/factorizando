import{u as I,j as e,L as W,i as L,r as c}from"./index-yp8oLty4.js";import{b as P,a as D}from"./talleresIndex-CfvW054g.js";import{b as V,T as q,e as A,t as G}from"./ReinoPlegado-Cyqj4fQY.js";import"./Decodificacion-BdQ1mh8s.js";import"./BarChart-DSstLfBb.js";import"./PizzasCajasVasos-BCQAKmX5.js";import"./ui-DvqQCyK4.js";import"./PanelProfesor-DSe3IbKt.js";import"./hooks-DekttxbT.js";import"./ElTerreno-CFpvRe_R.js";import"./SolidosPlatonicos-BRcwWcpK.js";import"./DescomponerSuma-ln56DLvV.js";import"./Shell-Bwt-uDtP.js";import"./DescomponerProducto-nNLbkcpp.js";import"./DescomponerDivision-uJ-gxQTt.js";const H=[{id:"alumnos",label:"Alumnos"},{id:"solicitudes",label:"Solicitudes"},{id:"tutores",label:"Tutores"},{id:"cuestionarios",label:"Estadísticas"},{id:"presentaciones",label:"Presentaciones"},{id:"cursos",label:"Cursos"},{id:"inscripciones",label:"Inscripciones"},{id:"cargos",label:"Cargos"},{id:"suscripciones",label:"Suscripciones"},{id:"regularizacion",label:"Regularización",to:"/regularizacion"}];function Q(){const s=L(),n=c.useRef(null);return c.useEffect(()=>{if(s&&window.katex&&n.current)try{window.katex.render("\\mathbb{R}[i]",n.current,{throwOnError:!1,displayMode:!1})}catch{}},[s]),e.jsxs("span",{className:"ah-brand-name",children:["Facto",e.jsx("span",{className:"ah-brand-math",ref:n,children:"ℝ[i]"}),"zando"]})}function _({active:s,onChange:n,tabs:l,chip:h="Panel Admin"}){const t=I(),m=l||H;function u(p){p.to?t(p.to):n?n(p.id):t("/admin")}return e.jsxs("header",{className:"ah-top",children:[e.jsx("style",{children:X}),e.jsxs("div",{className:"ah-brand",children:[e.jsx(W,{to:"/",className:"ah-logo-link",title:"Inicio",children:e.jsx("span",{className:"ah-logo-ring",children:e.jsx("img",{src:"/factorizando/assets/marca/v-avatar.svg",alt:"Factorizando"})})}),e.jsx(Q,{}),e.jsx("span",{className:"ah-sep",children:"|"}),e.jsx("span",{className:"ah-chip",children:h})]}),e.jsx("nav",{className:"ahn-nav",children:m.map(p=>e.jsx("button",{type:"button",className:`ahn-btn ${s===p.id?"ahn-active":""}`,onClick:()=>u(p),children:p.label},p.id))}),e.jsx("div",{className:"ah-cuenta",children:e.jsx(W,{to:"/",className:"ah-ghost",children:"← Inicio"})})]})}const X=`
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
`,r={bg:"#0e0f11",card:"#16181f",surface:"#1c1f24",border:"#252830",blue:"#3b9eff",green:"#34d399",text:"#e8eaf0",muted:"#5a6070",dim:"#8a9ab8"},x="'DM Sans', sans-serif",Y=`
.rz-card { display:block; width:100%; text-align:left; background:${r.card};
  border:1px solid ${r.border}; border-radius:14px; padding:14px 16px;
  color:${r.text}; font-family:${x}; cursor:pointer;
  transition:border-color .15s ease, transform .1s ease; }
.rz-card:hover { border-color:#3a4250; }
.rz-card:active { transform:translateY(1px); }
.rz-card-ic { display:grid; place-items:center; width:38px; height:38px; flex:none;
  border-radius:10px; background:${r.surface}; font-size:21px; line-height:1; }
.rz-card-tit { font-size:15px; font-weight:700; line-height:1.2; }
.rz-card-tema { font-size:12px; color:${r.muted}; margin-top:2px; }
.rz-desc { font-size:12.5px; color:${r.dim}; line-height:1.45; margin:10px 0 12px;
  display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden; }
.rz-chips { display:flex; gap:6px; flex-wrap:wrap; align-items:center; }

.rz-velo { position:fixed; inset:0; background:rgba(0,0,0,.55); z-index:60;
  animation:rz-velo .16s ease; }
@keyframes rz-velo { from{opacity:0} to{opacity:1} }
.rz-drawer { position:fixed; z-index:61; top:0; right:0; height:100dvh;
  width:min(440px, 100vw); background:${r.bg}; border-left:1px solid ${r.border};
  display:flex; flex-direction:column; animation:rz-entra .2s ease; }
@keyframes rz-entra { from{transform:translateX(24px); opacity:.4} to{transform:none; opacity:1} }
.rz-drawer-cab { display:flex; align-items:flex-start; gap:12px;
  padding:20px 20px 14px; border-bottom:1px solid ${r.border}; }
.rz-drawer-ic { display:grid; place-items:center; width:44px; height:44px; flex:none;
  border-radius:12px; background:${r.surface}; font-size:24px; line-height:1; }
.rz-drawer-tit { font-size:19px; font-weight:700; margin:0; line-height:1.2; }
.rz-drawer-tema { font-size:13px; color:${r.muted}; margin-top:3px; }
.rz-cerrar { margin-left:auto; width:40px; height:40px; flex:none; border-radius:10px;
  border:1px solid ${r.border}; background:transparent; color:${r.dim};
  font-size:15px; cursor:pointer; font-family:${x}; }
.rz-cerrar:hover { color:${r.text}; border-color:#3a4250; }
.rz-drawer-cuerpo { padding:18px 20px; overflow-y:auto; flex:1; }
.rz-drawer-desc { font-size:14px; color:${r.dim}; line-height:1.6; margin:14px 0 20px; }
.rz-sec { margin-bottom:22px; }
.rz-sec-tit { font-size:11px; font-weight:700; text-transform:uppercase;
  letter-spacing:.07em; color:${r.muted}; margin:0 0 10px; }
.rz-obj { list-style:none; margin:0; padding:0; display:grid; gap:8px; }
.rz-obj li { font-size:13px; color:${r.dim}; line-height:1.5; padding-left:18px; position:relative; }
.rz-obj li::before { content:"–"; position:absolute; left:0; color:${r.muted}; }
.rz-act { list-style:none; margin:0; padding:0; display:grid; gap:12px; }
.rz-drawer-pie { padding:14px 20px calc(14px + env(safe-area-inset-bottom,0px));
  border-top:1px solid ${r.border}; }
.rz-abrir { width:100%; min-height:48px; border:none; border-radius:12px;
  background:${r.blue}; color:#0e0f11; font-family:${x}; font-size:15px;
  font-weight:700; cursor:pointer; }
.rz-abrir:hover { filter:brightness(1.05); }
@media (max-width: 720px) {
  .rz-drawer { top:auto; bottom:0; left:0; right:0; width:auto; height:auto;
    max-height:86dvh; border-left:none; border-top:1px solid ${r.border};
    border-radius:18px 18px 0 0; animation:rz-sube .2s ease; }
  @keyframes rz-sube { from{transform:translateY(24px); opacity:.4} to{transform:none; opacity:1} }
}
`,K=[{id:"todos",label:"Todos"},{id:"primaria",label:"Primaria"},{id:"secundaria",label:"Secundaria"}],w={primaria:"#34d399",secundaria:"#a78bfa"},N=["Matemáticas","Español"];function U(s){const n=new Map;return s.forEach(l=>{n.has(l.taller.materia)||n.set(l.taller.materia,[]),n.get(l.taller.materia).push(l)}),[...n.entries()].sort(([l],[h])=>{const t=N.indexOf(l),m=N.indexOf(h);return t!==-1||m!==-1?(t===-1?99:t)-(m===-1?99:m):l.localeCompare(h,"es")})}function f({children:s,color:n=r.muted,fondo:l=r.surface}){return e.jsx("span",{style:{background:l,color:n,borderRadius:5,padding:"2px 8px",fontSize:11,fontWeight:700,whiteSpace:"nowrap"},children:s})}function me(){const[s,n]=c.useState("todos"),[l,h]=c.useState(""),[t,m]=c.useState(null),[u,p]=c.useState(!1),[i,k]=c.useState(null),S=c.useRef(null),$=c.useRef(null),F=I(),b=l.trim(),y=!!(t||b),T=c.useMemo(()=>t?P(t):D(b),[t,b]),v=T.filter(a=>s==="todos"||a.taller.nivel===s),M=U(v),C=t?[]:V(b).slice(0,8);function B(){m(null),h("")}function R(a){m(a),h(""),p(!1)}const z=c.useCallback(()=>{k(null),$.current?.focus?.()},[]);c.useEffect(()=>{if(!i)return;S.current?.focus();const a=g=>{g.key==="Escape"&&z()},d=document.body.style.overflow;return document.body.style.overflow="hidden",window.addEventListener("keydown",a),()=>{document.body.style.overflow=d,window.removeEventListener("keydown",a)}},[i,z]),c.useEffect(()=>{i&&!v.some(a=>a.taller.id===i.id)&&k(null)},[v,i]);const j=i?T.find(a=>a.taller.id===i.id):null,E=i?y&&j?.actividades?.length?j.actividades:i.actividades:[];return e.jsxs("div",{style:{minHeight:"100vh",background:r.bg,color:r.text,fontFamily:x},children:[e.jsx("style",{children:Y}),e.jsx(_,{chip:"Regularización",tabs:[]}),e.jsxs("main",{style:{maxWidth:1e3,margin:"0 auto",padding:"32px 24px 80px"},children:[e.jsxs("header",{style:{marginBottom:22},children:[e.jsx("h1",{style:{fontFamily:"'Cormorant Garamond', Georgia, serif",fontWeight:700,fontSize:"clamp(26px, 4.5vw, 38px)",margin:"0 0 10px",letterSpacing:".005em"},children:"Regularización"}),e.jsx("p",{style:{color:r.dim,fontSize:15,lineHeight:1.6,maxWidth:640,margin:0},children:"Talleres manipulativos para acompañar sesiones presenciales de primaria y secundaria. Cada sesión de práctica queda registrada en el expediente del alumno."})]}),e.jsxs("section",{style:{background:r.card,border:`1px solid ${r.border}`,borderRadius:14,padding:"16px 18px",marginBottom:20},children:[e.jsx("label",{htmlFor:"buscaTema",style:{display:"block",fontSize:12,fontWeight:700,textTransform:"uppercase",letterSpacing:".07em",color:r.muted,marginBottom:10},children:"¿Qué quieres trabajar hoy?"}),e.jsxs("div",{style:{display:"flex",gap:10,flexWrap:"wrap",alignItems:"center"},children:[e.jsx("input",{id:"buscaTema",value:l,onChange:a=>{h(a.target.value),m(null)},placeholder:"divisiones, adjetivos, fracciones, acentuación…",style:{flex:"1 1 260px",background:r.bg,border:`1px solid ${r.border}`,borderRadius:10,padding:"10px 13px",color:r.text,fontSize:14,fontFamily:x,outline:"none"}}),e.jsx("button",{type:"button",onClick:()=>p(a=>!a),style:{background:u?r.surface:"transparent",color:u?r.text:r.dim,border:`1px solid ${r.border}`,borderRadius:10,padding:"10px 14px",fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:x},children:u?"Ocultar temas":"Ver todos los temas"}),y&&e.jsx("button",{type:"button",onClick:B,style:{background:"transparent",color:r.muted,border:"none",fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:x},children:"Quitar filtro ✕"})]}),t&&e.jsxs("p",{style:{margin:"12px 0 0",fontSize:13.5,color:r.dim},children:["Mostrando lo que trabaja"," ",e.jsx("strong",{style:{color:r.text},children:A(t)})," ","· ",q[t]?.materia]}),!t&&C.length>0&&e.jsx("div",{style:{display:"flex",gap:7,flexWrap:"wrap",marginTop:12},children:C.map(a=>e.jsxs("button",{type:"button",onClick:()=>R(a.id),style:{background:r.surface,color:r.text,border:`1px solid ${r.border}`,borderRadius:99,padding:"5px 13px",fontSize:12.5,cursor:"pointer",fontFamily:x},children:[a.label," ",e.jsxs("span",{style:{color:r.muted},children:["· ",a.materia]})]},a.id))}),u&&e.jsx("div",{style:{marginTop:16,display:"grid",gap:18},children:N.map(a=>e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:12,fontWeight:700,textTransform:"uppercase",letterSpacing:".07em",color:r.dim,marginBottom:10},children:a}),e.jsx("div",{style:{display:"grid",gap:10},children:G(a).map(([d,g])=>e.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:12,color:r.muted,minWidth:150},children:d}),g.map(o=>e.jsx("button",{type:"button",onClick:()=>R(o.id),style:{background:"transparent",color:r.text,border:`1px solid ${r.border}`,borderRadius:99,padding:"4px 12px",fontSize:12.5,cursor:"pointer",fontFamily:x},children:o.label},o.id))]},d))})]},a))})]}),e.jsx("div",{style:{display:"flex",gap:8,marginBottom:22,flexWrap:"wrap"},children:K.map(a=>e.jsx("button",{type:"button",onClick:()=>n(a.id),style:{background:s===a.id?r.surface:"transparent",color:s===a.id?r.text:r.muted,border:`1px solid ${s===a.id?r.border:"transparent"}`,borderRadius:99,padding:"7px 16px",fontSize:13,fontWeight:s===a.id?700:500,cursor:"pointer",fontFamily:x},children:a.label},a.id))}),v.length===0?e.jsx("p",{style:{color:r.muted,fontSize:14},children:y?"Ningún taller trabaja eso todavía. Prueba con «Ver todos los temas».":"No hay talleres para este nivel todavía."}):M.map(([a,d],g)=>e.jsxs("section",{style:{marginTop:g===0?0:34},children:[e.jsxs("div",{style:{display:"flex",alignItems:"baseline",gap:10,marginBottom:14,paddingBottom:8,borderBottom:`1px solid ${r.border}`},children:[e.jsx("h2",{style:{fontSize:12,fontWeight:700,textTransform:"uppercase",letterSpacing:".07em",color:r.dim,margin:0},children:a}),e.jsxs("span",{style:{fontSize:12,color:r.muted},children:[d.length," ",d.length===1?"taller":"talleres"]})]}),e.jsx("div",{style:{display:"grid",gap:12,gridTemplateColumns:"repeat(auto-fill, minmax(200px, 1fr))"},children:d.map(({taller:o})=>e.jsxs("button",{type:"button",className:"rz-card",onClick:O=>{$.current=O.currentTarget,k(o)},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:2},children:[e.jsx("span",{className:"rz-card-ic",children:o.icono}),e.jsxs("div",{style:{minWidth:0},children:[e.jsx("div",{className:"rz-card-tit",children:o.titulo}),e.jsx("div",{className:"rz-card-tema",children:o.tema})]})]}),e.jsx("p",{className:"rz-desc",children:o.descripcion}),e.jsxs("div",{className:"rz-chips",children:[e.jsx(f,{color:w[o.nivel]||r.blue,fondo:(w[o.nivel]||r.blue)+"22",children:e.jsx("span",{style:{textTransform:"capitalize"},children:o.nivel})}),e.jsx(f,{children:o.edades}),e.jsxs(f,{children:[o.actividades.length," ",o.actividades.length===1?"actividad":"actividades"]})]})]},o.id))})]},a))]}),i&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"rz-velo",onClick:z,"aria-hidden":"true"}),e.jsxs("aside",{className:"rz-drawer",role:"dialog","aria-modal":"true","aria-label":`Detalle de ${i.titulo}`,children:[e.jsxs("div",{className:"rz-drawer-cab",children:[e.jsx("span",{className:"rz-drawer-ic",children:i.icono}),e.jsxs("div",{style:{minWidth:0},children:[e.jsx("h2",{className:"rz-drawer-tit",children:i.titulo}),e.jsx("div",{className:"rz-drawer-tema",children:i.tema})]}),e.jsx("button",{ref:S,type:"button",className:"rz-cerrar",onClick:z,"aria-label":"Cerrar",children:"✕"})]}),e.jsxs("div",{className:"rz-drawer-cuerpo",children:[e.jsxs("div",{className:"rz-chips",children:[e.jsx(f,{color:w[i.nivel]||r.blue,fondo:(w[i.nivel]||r.blue)+"22",children:e.jsx("span",{style:{textTransform:"capitalize"},children:i.nivel})}),e.jsx(f,{children:i.edades})]}),e.jsx("p",{className:"rz-drawer-desc",children:i.descripcion}),i.objetivos?.length>0&&e.jsxs("div",{className:"rz-sec",children:[e.jsx("div",{className:"rz-sec-tit",children:"Qué se trabaja"}),e.jsx("ul",{className:"rz-obj",children:i.objetivos.map(a=>e.jsx("li",{children:a},a))})]}),E.length>0&&e.jsxs("div",{className:"rz-sec",children:[e.jsx("div",{className:"rz-sec-tit",children:y&&j?.actividades?.length?`Lo trabaja en ${j.actividades.length===1?"esta actividad":"estas actividades"}`:"Lo que se trabaja"}),e.jsx("ul",{className:"rz-act",children:E.map(a=>e.jsxs("li",{style:{fontSize:13,lineHeight:1.4},children:[e.jsxs("div",{style:{display:"flex",gap:8,alignItems:"baseline"},children:[e.jsx("span",{style:{color:r.text,fontWeight:600},children:a.nombre}),e.jsxs("span",{style:{color:r.muted,fontSize:11,whiteSpace:"nowrap"},children:[a.edades," años"]})]}),e.jsx("div",{style:{display:"flex",gap:5,flexWrap:"wrap",marginTop:4},children:a.temas.map(d=>e.jsx(f,{color:d===t?r.green:r.muted,fondo:d===t?r.green+"22":r.surface,children:A(d)},d))})]},a.id))})]})]}),e.jsx("div",{className:"rz-drawer-pie",children:e.jsx("button",{type:"button",className:"rz-abrir",onClick:()=>F(`/regularizacion/${i.id}`),children:"Abrir taller →"})})]})]})]})}export{me as default};
