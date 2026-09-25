import{a as S,u as C,r as t,s,j as a,L as p}from"./index-yp8oLty4.js";const _={primaria:"Primaria",secundaria:"Secundaria",prepa:"Preparatoria",universidad:"Universidad"},q="activo";function L(){S();const j=C(),[N,f]=t.useState(!0),[n,w]=t.useState(null),[o,z]=t.useState(null),[u,d]=t.useState([]),[c,x]=t.useState(null),[h,m]=t.useState("");async function g(e){const{data:r}=await s.from("alumnos").select("id, nombre, apellidos, nivel").eq("profile_id",e).maybeSingle();if(z(r||null),!r){d([]);return}const{data:i,error:l}=await s.rpc("tutores_del_alumno");if(l){m(l.message),d([]);return}d(i||[])}t.useEffect(()=>{let e=!1;return(async()=>{const{data:{session:r}}=await s.auth.getSession();if(e)return;if(!r){f(!1);return}const{data:i}=await s.from("profiles").select("nombre, bloque").eq("id",r.user.id).single();e||(w(i),await g(r.user.id),f(!1))})(),()=>{e=!0}},[]);async function v(e,r){m(""),x(e);const{error:i}=await s.rpc("resolver_vinculo_tutor",{p_tutor_id:e,p_aceptar:r});if(i){m(i.message||"No se pudo resolver la solicitud."),x(null);return}const{data:{session:l}}=await s.auth.getSession();await g(l.user.id),x(null)}async function k(){await s.auth.signOut(),j("/login",{replace:!0})}const b=u.filter(e=>e.estado==="pendiente"),y=u.filter(e=>e.estado===q);return a.jsxs("div",{className:"al-root",children:[a.jsx("style",{children:E}),a.jsxs("header",{className:"al-top",children:[a.jsxs(p,{to:"/",className:"al-marca",children:[a.jsx("img",{src:"/factorizando/assets/marca/v-avatar.svg",alt:"",width:"30",height:"30"}),a.jsx("span",{children:"Factoℝ[i]zando"})]}),a.jsxs("div",{className:"al-cuenta",children:[n?.nombre&&a.jsx("span",{className:"al-nombre",children:n.nombre}),a.jsx(p,{to:"/mis-datos",className:"al-ghost",style:{textDecoration:"none"},children:"Mis datos"}),a.jsx("button",{type:"button",onClick:k,className:"al-ghost",children:"Cerrar sesión"})]})]}),a.jsx("main",{className:"al-main",children:N?a.jsx("p",{className:"al-muted",children:"Cargando…"}):o?a.jsxs(a.Fragment,{children:[a.jsxs("header",{className:"al-cab",children:[a.jsx("span",{className:"al-eyebrow",children:"Mi perfil"}),a.jsxs("h1",{className:"al-h1",children:[o.nombre," ",o.apellidos]}),a.jsx("p",{className:"al-sub",children:_[o.nivel]||o.nivel}),n?.bloque&&a.jsx("div",{className:"al-acciones",children:a.jsx(p,{className:"al-btn",to:`/${n.bloque}`,children:"Ir a mi material"})})]}),h&&a.jsx("div",{className:"al-alerta al-alerta-error",children:h}),a.jsxs("section",{className:"al-sec",children:[a.jsx("h2",{className:"al-h2",children:"Solicitudes de tutores"}),b.length===0?a.jsx("p",{className:"al-muted",children:"No tienes solicitudes pendientes."}):b.map(e=>a.jsxs("div",{className:"al-tutor",children:[a.jsx("span",{className:"al-avatar",children:(e.nombre||"?").slice(0,1).toUpperCase()}),a.jsxs("div",{className:"al-tutor-txt",children:[a.jsxs("div",{className:"al-tutor-nombre",children:[e.nombre," ",e.apellidos]}),a.jsxs("div",{className:"al-tutor-meta",children:[e.relacion," · quiere ser tu tutor"]})]}),a.jsxs("div",{className:"al-tutor-acciones",children:[a.jsx("button",{type:"button",className:"al-btn",disabled:c===e.id,onClick:()=>v(e.id,!0),children:c===e.id?"…":"Aceptar"}),a.jsx("button",{type:"button",className:"al-ghost",disabled:c===e.id,onClick:()=>v(e.id,!1),children:"Rechazar"})]})]},e.id))]}),a.jsxs("section",{className:"al-sec",children:[a.jsx("h2",{className:"al-h2",children:"Mis tutores"}),y.length===0?a.jsx("p",{className:"al-muted",children:"Todavía no tienes tutores confirmados."}):y.map(e=>a.jsxs("div",{className:"al-tutor",children:[a.jsx("span",{className:"al-avatar",children:(e.nombre||"?").slice(0,1).toUpperCase()}),a.jsxs("div",{className:"al-tutor-txt",children:[a.jsxs("div",{className:"al-tutor-nombre",children:[e.nombre," ",e.apellidos]}),a.jsx("div",{className:"al-tutor-meta",children:e.relacion})]}),a.jsx("span",{className:"al-badge",children:"Vinculado"})]},e.id))]})]}):a.jsxs("div",{className:"al-vacio",children:[a.jsx("h1",{children:"Tu perfil de alumno aún no está listo"}),a.jsx("p",{children:"Pide al administrador que cree tu expediente para ver tus cursos y tu avance."})]})})]})}const E=`
.al-root { min-height: 100vh; min-height: 100dvh; background: var(--fx-surface-sunken);
  color: var(--fx-text-body); font-family: var(--fx-font-body); }
.al-top { display: flex; align-items: center; justify-content: space-between; gap: 16px;
  padding: 14px var(--fx-gutter); background: var(--fx-surface); border-bottom: 1px solid var(--fx-border); }
.al-marca { display: inline-flex; align-items: center; gap: 10px; text-decoration: none;
  color: var(--fx-text-heading); font-family: var(--fx-font-heading); font-weight: 600; font-size: 17px; }
.al-marca img { border-radius: 50%; }
.al-cuenta { display: flex; align-items: center; gap: 12px; }
.al-nombre { font-size: var(--fx-small-size); color: var(--fx-text-muted); }
.al-ghost { background: none; border: 1px solid var(--fx-border); border-radius: var(--fx-radius-md);
  padding: 8px 14px; color: var(--fx-text-body); font-family: inherit; font-size: var(--fx-small-size);
  font-weight: 600; cursor: pointer; min-height: 40px; }
.al-ghost:hover:not(:disabled) { border-color: var(--fx-primary-200); color: var(--fx-text-heading); }
.al-ghost:disabled { opacity: .55; cursor: default; }
.al-main { max-width: 820px; margin: 0 auto; padding: clamp(24px, 4vw, 48px) var(--fx-gutter) 80px; }
.al-muted { color: var(--fx-text-muted); font-size: var(--fx-small-size); }
.al-cab { margin-bottom: 24px; }
.al-eyebrow { font-size: var(--fx-caption-size); font-weight: 700; letter-spacing: 0.12em;
  text-transform: uppercase; color: var(--fx-primary-600); }
.al-h1 { font-family: var(--fx-font-heading); font-size: clamp(24px, 4vw, 32px); font-weight: 600;
  letter-spacing: -0.015em; color: var(--fx-text-heading); margin: 6px 0; }
.al-sub { margin: 0; color: var(--fx-text-muted); font-size: var(--fx-body-size); }
.al-acciones { margin-top: 14px; }
.al-btn { display: inline-flex; align-items: center; justify-content: center; min-height: 44px;
  padding: 0 18px; border: none; border-radius: var(--fx-radius-md); background: var(--fx-primary-500);
  color: var(--fx-text-on-primary); font-family: inherit; font-size: var(--fx-small-size);
  font-weight: 600; cursor: pointer; text-decoration: none; }
.al-btn:hover { background: var(--fx-primary-600); text-decoration: none; }
.al-btn:disabled { opacity: .55; cursor: default; }
.al-sec { background: var(--fx-surface); border: 1px solid var(--fx-border);
  border-radius: var(--fx-radius-lg); padding: 20px 22px; margin-bottom: 20px; }
.al-h2 { font-family: var(--fx-font-heading); font-size: 19px; font-weight: 600;
  color: var(--fx-text-heading); margin: 0 0 14px; }
.al-tutor { display: flex; align-items: center; gap: 12px; padding: 12px 0;
  border-top: 1px solid var(--fx-border); flex-wrap: wrap; }
.al-tutor:first-of-type { border-top: none; }
.al-avatar { display: grid; place-items: center; width: 44px; height: 44px; flex: 0 0 auto;
  border-radius: 50%; background: var(--fx-primary-50); color: var(--fx-primary-700);
  font-family: var(--fx-font-heading); font-weight: 700; font-size: 18px; }
.al-tutor-txt { flex: 1; min-width: 0; }
.al-tutor-nombre { font-family: var(--fx-font-heading); font-weight: 600; font-size: 16px;
  color: var(--fx-text-heading); }
.al-tutor-meta { font-size: var(--fx-small-size); color: var(--fx-text-muted); margin-top: 2px; }
.al-tutor-acciones { display: flex; gap: 8px; flex-wrap: wrap; }
.al-badge { background: var(--fx-primary-50); color: var(--fx-primary-700);
  border: 1px solid var(--fx-primary-100); border-radius: var(--fx-radius-pill);
  padding: 4px 12px; font-size: var(--fx-small-size); font-weight: 600; }
.al-alerta { margin-bottom: 16px; border-radius: var(--fx-radius-md); padding: 10px 14px;
  font-size: var(--fx-small-size); border: 1px solid transparent; }
.al-alerta-error { background: var(--fx-error-bg); color: var(--fx-error-text); border-color: var(--fx-error-border); }
.al-vacio h1 { font-family: var(--fx-font-heading); color: var(--fx-text-heading); font-size: 24px; margin: 0 0 10px; }
.al-vacio p { margin: 0; max-width: 46ch; line-height: 1.6; }
`;export{L as default};
