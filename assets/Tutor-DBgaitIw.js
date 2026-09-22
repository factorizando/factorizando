import{a as b,r as d,s as l,j as t,L as m,u as y}from"./index-B-GolWzK.js";const j={primaria:"Primaria",secundaria:"Secundaria",prepa:"Preparatoria",universidad:"Universidad"};function w(n){if(!n)return null;const r=new Date,e=new Date(n);let s=r.getFullYear()-e.getFullYear();const i=r.getMonth()-e.getMonth();return(i<0||i===0&&r.getDate()<e.getDate())&&s--,s>=0&&s<120?s:null}function N({nombre:n}){const r=y(),e=async()=>{await l.auth.signOut(),r("/login",{replace:!0})};return t.jsxs("header",{className:"tut-top",children:[t.jsxs(m,{to:"/",className:"tut-marca",children:[t.jsx("img",{src:"/factorizando/assets/marca/v-avatar.svg",alt:"",width:"30",height:"30"}),t.jsx("span",{children:"Factoℝ[i]zando"})]}),t.jsxs("div",{className:"tut-cuenta",children:[n&&t.jsx("span",{className:"tut-nombre",children:n}),t.jsx("button",{type:"button",onClick:e,className:"tut-ghost",children:"Cerrar sesión"})]})]})}function k(){b();const[n,r]=d.useState(!0),[e,s]=d.useState(null),[i,p]=d.useState([]),[x,h]=d.useState(null);return d.useEffect(()=>{let a=!1;return(async()=>{const{data:{session:o}}=await l.auth.getSession();if(a)return;if(!o){r(!1);return}const{data:g}=await l.from("profiles").select("nombre, rol").eq("id",o.user.id).single();if(a)return;h(g);const{data:c}=await l.from("tutores").select("id, nombre, apellidos").eq("profile_id",o.user.id).maybeSingle();if(!a){if(s(c),c){const{data:v}=await l.from("alumno_tutor").select("alumno_id").eq("tutor_id",c.id),f=(v||[]).map(u=>u.alumno_id);if(f.length){const{data:u}=await l.from("alumnos").select("*").in("id",f).order("apellidos",{ascending:!0});a||p(u||[])}}r(!1)}})(),()=>{a=!0}},[]),t.jsxs("div",{className:"tut-root",children:[t.jsx("style",{children:z}),t.jsx(N,{nombre:x?.nombre}),t.jsx("main",{className:"tut-main",children:n?t.jsx("p",{className:"tut-muted",children:"Cargando…"}):e?t.jsxs(t.Fragment,{children:[t.jsxs("header",{className:"tut-cab",children:[t.jsx("span",{className:"tut-eyebrow",children:"Tutor"}),t.jsxs("h1",{className:"tut-h1",children:[e.nombre," ",e.apellidos]}),t.jsx("p",{className:"tut-sub",children:i.length===0?"Todavía no tienes alumnos vinculados.":`${i.length} ${i.length===1?"alumno":"alumnos"} a tu cargo.`})]}),t.jsx("div",{className:"tut-grid",children:i.map(a=>{const o=w(a.fecha_nacimiento);return t.jsxs(m,{to:`/tutor/alumno/${a.id}`,className:"tut-card",children:[t.jsxs("div",{className:"tut-card-cab",children:[t.jsx("span",{className:"tut-avatar",children:(a.nombre||"?").slice(0,1).toUpperCase()}),t.jsxs("div",{children:[t.jsxs("div",{className:"tut-card-nombre",children:[a.nombre," ",a.apellidos]}),t.jsxs("div",{className:"tut-card-meta",children:[j[a.nivel]||a.nivel,o!=null&&` · ${o} años`]})]})]}),t.jsxs("div",{className:"tut-card-pie",children:[t.jsx("span",{children:a.email||a.telefono||"Sin contacto"}),t.jsx("span",{className:"tut-flecha","aria-hidden":"true",children:"→"})]})]},a.id)})})]}):t.jsxs("div",{className:"tut-vacio",children:[t.jsx("h1",{children:"Tu cuenta aún no está vinculada"}),t.jsxs("p",{children:["Estás dentro como ",t.jsx("strong",{children:x?.rol||"usuario"}),", pero todavía no hay una ficha de tutor asociada a tu cuenta. Pide al administrador que enlace tu registro."]})]})})]})}const z=`
.tut-root { min-height: 100vh; min-height: 100dvh; background: var(--fx-surface-sunken);
  color: var(--fx-text-body); font-family: var(--fx-font-body); }
.tut-top { display: flex; align-items: center; justify-content: space-between; gap: 16px;
  padding: 14px var(--fx-gutter); background: var(--fx-surface); border-bottom: 1px solid var(--fx-border); }
.tut-marca { display: inline-flex; align-items: center; gap: 10px; text-decoration: none;
  color: var(--fx-text-heading); font-family: var(--fx-font-heading); font-weight: 600; font-size: 17px; }
.tut-marca img { border-radius: 50%; }
.tut-cuenta { display: flex; align-items: center; gap: 12px; }
.tut-nombre { font-size: var(--fx-small-size); color: var(--fx-text-muted); }
.tut-ghost { background: none; border: 1px solid var(--fx-border); border-radius: var(--fx-radius-md);
  padding: 8px 14px; color: var(--fx-text-body); font-family: inherit; font-size: var(--fx-small-size);
  font-weight: 600; cursor: pointer; min-height: 40px; }
.tut-ghost:hover { border-color: var(--fx-primary-200); color: var(--fx-text-heading); }
.tut-main { max-width: 980px; margin: 0 auto; padding: clamp(24px, 4vw, 48px) var(--fx-gutter) 80px; }
.tut-muted { color: var(--fx-text-muted); }
.tut-cab { margin-bottom: 28px; }
.tut-eyebrow { font-size: var(--fx-caption-size); font-weight: 700; letter-spacing: 0.12em;
  text-transform: uppercase; color: var(--fx-primary-600); }
.tut-h1 { font-family: var(--fx-font-heading); font-size: clamp(24px, 4vw, 32px); font-weight: 600;
  letter-spacing: -0.015em; color: var(--fx-text-heading); margin: 6px 0 6px; }
.tut-sub { margin: 0; color: var(--fx-text-muted); font-size: var(--fx-body-size); }
.tut-grid { display: grid; gap: 14px; grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr)); }
.tut-card { display: flex; flex-direction: column; gap: 16px; background: var(--fx-surface);
  border: 1px solid var(--fx-border); border-radius: var(--fx-radius-lg); padding: 18px;
  text-decoration: none; transition: border-color var(--fx-transition), box-shadow var(--fx-transition); }
.tut-card:hover { border-color: var(--fx-primary-200); box-shadow: var(--fx-shadow-card); text-decoration: none; }
.tut-card-cab { display: flex; align-items: center; gap: 12px; }
.tut-avatar { display: grid; place-items: center; width: 44px; height: 44px; flex: 0 0 auto;
  border-radius: 50%; background: var(--fx-primary-50); color: var(--fx-primary-700);
  font-family: var(--fx-font-heading); font-weight: 700; font-size: 18px; }
.tut-card-nombre { font-family: var(--fx-font-heading); font-weight: 600; font-size: 16px; color: var(--fx-text-heading); }
.tut-card-meta { font-size: var(--fx-small-size); color: var(--fx-text-muted); margin-top: 2px; }
.tut-card-pie { display: flex; align-items: center; justify-content: space-between; gap: 10px;
  border-top: 1px solid var(--fx-border); padding-top: 12px;
  font-size: var(--fx-small-size); color: var(--fx-text-muted); }
.tut-flecha { color: var(--fx-primary-600); font-weight: 600; }
.tut-vacio h1 { font-family: var(--fx-font-heading); color: var(--fx-text-heading);
  font-size: 24px; margin: 0 0 10px; }
.tut-vacio p { margin: 0; max-width: 46ch; line-height: 1.6; }
`;export{k as default};
