import{a as _,r,s as d,j as t,L as S,u as C}from"./index-Co7vd6XG.js";const k={primaria:"Primaria",secundaria:"Secundaria",prepa:"Preparatoria",universidad:"Universidad"};function E(i){if(!i)return null;const o=new Date,n=new Date(i);let l=o.getFullYear()-n.getFullYear();const s=o.getMonth()-n.getMonth();return(s<0||s===0&&o.getDate()<n.getDate())&&l--,l>=0&&l<120?l:null}function P({nombre:i}){const o=C(),n=async()=>{await d.auth.signOut(),o("/login",{replace:!0})};return t.jsxs("header",{className:"tut-top",children:[t.jsxs(S,{to:"/",className:"tut-marca",children:[t.jsx("img",{src:"/factorizando/assets/marca/v-avatar.svg",alt:"",width:"30",height:"30"}),t.jsx("span",{children:"Factoℝ[i]zando"})]}),t.jsxs("div",{className:"tut-cuenta",children:[i&&t.jsx("span",{className:"tut-nombre",children:i}),t.jsx("button",{type:"button",onClick:n,className:"tut-ghost",children:"Cerrar sesión"})]})]})}function T({onClose:i,onSolicitado:o}){const[n,l]=r.useState(""),[s,N]=r.useState(""),[h,g]=r.useState(!1),[f,v]=r.useState(null),[b,c]=r.useState(""),[j,a]=r.useState(null),[u,x]=r.useState("");async function y(e){if(e?.preventDefault(),c(""),x(""),!n.trim()&&!s.trim()){c("Escribe el correo o el teléfono del alumno.");return}g(!0);const{data:m,error:p}=await d.rpc("buscar_alumno_para_tutor",{p_email:n.trim()||null,p_telefono:s.trim()||null});if(g(!1),p){c("No se pudo buscar. Intenta de nuevo.");return}v(m||[])}async function w(e){c(""),x(""),a(e.id);const{error:m}=await d.rpc("solicitar_vinculo_tutor",{p_alumno_id:e.id});if(a(null),m){c(m.message||"No se pudo solicitar el vínculo.");return}x(`Solicitud enviada a ${e.nombre} ${e.apellidos}. Debe confirmarla desde su cuenta.`),v(p=>(p||[]).map(z=>z.id===e.id?{...z,ya_vinculado:!0}:z)),o?.()}return t.jsx("div",{className:"tut-overlay",onMouseDown:e=>{e.target===e.currentTarget&&i()},children:t.jsxs("div",{className:"tut-modal",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"tut-modal-cab",children:[t.jsx("h2",{children:"Agregar tutorado"}),t.jsx("button",{type:"button",className:"tut-x",onClick:i,"aria-label":"Cerrar",children:"×"})]}),t.jsx("p",{className:"tut-hint",children:"Busca al alumno por su correo o su teléfono (coincidencia exacta). Si no tiene cuenta, el administrador debe vincularlo."}),t.jsxs("form",{className:"tut-buscar",onSubmit:y,children:[t.jsxs("label",{children:[t.jsx("span",{children:"Correo"}),t.jsx("input",{value:n,onChange:e=>l(e.target.value),placeholder:"alumno@correo.com",autoFocus:!0})]}),t.jsxs("label",{children:[t.jsx("span",{children:"Teléfono (10 dígitos)"}),t.jsx("input",{value:s,onChange:e=>N(e.target.value),placeholder:"2221234567",inputMode:"numeric"})]}),t.jsx("button",{type:"submit",className:"tut-btn",disabled:h,children:h?"Buscando…":"Buscar"})]}),b&&t.jsx("div",{className:"tut-alerta tut-alerta-error",children:b}),u&&t.jsx("div",{className:"tut-alerta tut-alerta-ok",children:u}),f&&t.jsx("div",{className:"tut-resultados",children:f.length===0?t.jsx("p",{className:"tut-hint",children:"Ningún alumno coincide exactamente. Verifica el dato."}):f.map(e=>t.jsxs("div",{className:"tut-resultado",children:[t.jsxs("div",{children:[t.jsxs("div",{className:"tut-card-nombre",children:[e.nombre," ",e.apellidos]}),t.jsxs("div",{className:"tut-card-meta",children:[k[e.nivel]||e.nivel,!e.tiene_cuenta&&" · sin cuenta"]})]}),e.tiene_cuenta?e.ya_vinculado?t.jsx("span",{className:"tut-nota",children:"Ya vinculado"}):t.jsx("button",{type:"button",className:"tut-btn tut-btn-sm",disabled:j===e.id,onClick:()=>w(e),children:j===e.id?"Solicitando…":"Solicitar vínculo"}):t.jsx("span",{className:"tut-nota",children:"Pídele al administrador que lo vincule"})]},e.id))})]})})}function D(){_();const[i,o]=r.useState(!0),[n,l]=r.useState(null),[s,N]=r.useState([]),[h,g]=r.useState([]),[f,v]=r.useState(null),[b,c]=r.useState(!1);async function j(){const{data:a}=await d.rpc("solicitudes_pendientes_del_tutor");g(a||[])}return r.useEffect(()=>{let a=!1;return(async()=>{const{data:{session:u}}=await d.auth.getSession();if(a)return;if(!u){o(!1);return}const{data:x}=await d.from("profiles").select("*").eq("id",u.user.id).single();if(a)return;v(x);const y=x;if(l(y),y){const{data:w}=await d.from("alumno_tutor").select("alumno_id").eq("tutor_id",x.id).eq("estado","activo"),e=(w||[]).map(p=>p.alumno_id);if(e.length){const{data:p}=await d.from("alumnos").select("*").in("id",e).order("apellidos",{ascending:!0});a||N(p||[])}const{data:m}=await d.rpc("solicitudes_pendientes_del_tutor");a||g(m||[])}o(!1)})(),()=>{a=!0}},[]),t.jsxs("div",{className:"tut-root",children:[t.jsx("style",{children:A}),t.jsx(P,{nombre:f?.nombre}),t.jsx("main",{className:"tut-main",children:i?t.jsx("p",{className:"tut-muted",children:"Cargando…"}):n?t.jsxs(t.Fragment,{children:[t.jsxs("header",{className:"tut-cab",children:[t.jsx("span",{className:"tut-eyebrow",children:"Tutor"}),t.jsxs("h1",{className:"tut-h1",children:[n.nombre," ",n.apellidos]}),t.jsx("p",{className:"tut-sub",children:s.length===0?"Todavía no tienes alumnos vinculados.":`${s.length} ${s.length===1?"alumno":"alumnos"} a tu cargo.`}),t.jsx("div",{className:"tut-cab-acciones",children:t.jsx("button",{type:"button",className:"tut-btn",onClick:()=>c(!0),children:"Agregar tutorado"})})]}),h.length>0&&t.jsxs("section",{className:"tut-pendientes",children:[t.jsx("h2",{className:"tut-h2",children:"Pendientes de confirmación"}),h.map(a=>t.jsxs("div",{className:"tut-pendiente",children:[t.jsx("span",{className:"tut-avatar",children:(a.nombre||"?").slice(0,1).toUpperCase()}),t.jsxs("div",{className:"tut-pendiente-txt",children:[t.jsxs("div",{className:"tut-card-nombre",children:[a.nombre," ",a.apellidos]}),t.jsxs("div",{className:"tut-card-meta",children:[k[a.nivel]||a.nivel," · esperando que confirme"]})]})]},a.alumno_id))]}),t.jsx("h2",{className:"tut-h2",children:"Mis tutorados"}),t.jsx("div",{className:"tut-grid",children:s.map(a=>{const u=E(a.fecha_nacimiento);return t.jsxs(S,{to:`/tutor/alumno/${a.id}`,className:"tut-card",children:[t.jsxs("div",{className:"tut-card-cab",children:[t.jsx("span",{className:"tut-avatar",children:(a.nombre||"?").slice(0,1).toUpperCase()}),t.jsxs("div",{children:[t.jsxs("div",{className:"tut-card-nombre",children:[a.nombre," ",a.apellidos]}),t.jsxs("div",{className:"tut-card-meta",children:[k[a.nivel]||a.nivel,u!=null&&` · ${u} años`]})]})]}),t.jsxs("div",{className:"tut-card-pie",children:[t.jsx("span",{children:a.email||a.telefono||"Sin contacto"}),t.jsx("span",{className:"tut-flecha","aria-hidden":"true",children:"→"})]})]},a.id)})})]}):t.jsxs("div",{className:"tut-vacio",children:[t.jsx("h1",{children:"Tu cuenta aún no está vinculada"}),t.jsxs("p",{children:["Estás dentro como ",t.jsx("strong",{children:f?.rol||"usuario"}),", pero todavía no hay una ficha de tutor asociada a tu cuenta. Pide al administrador que enlace tu registro."]})]})}),b&&t.jsx(T,{onClose:()=>c(!1),onSolicitado:j})]})}const A=`
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
.tut-h2 { font-family: var(--fx-font-heading); font-size: 18px; font-weight: 600;
  color: var(--fx-text-heading); margin: 28px 0 12px; }
.tut-sub { margin: 0; color: var(--fx-text-muted); font-size: var(--fx-body-size); }
.tut-cab-acciones { margin-top: 14px; }
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

/* Pendientes */
.tut-pendientes { background: var(--fx-surface); border: 1px solid var(--fx-warning-border);
  border-radius: var(--fx-radius-lg); padding: 6px 18px 18px; }
.tut-pendiente { display: flex; align-items: center; gap: 12px; padding: 12px 0;
  border-top: 1px solid var(--fx-border); }
.tut-pendiente:first-of-type { border-top: none; }

/* Botones */
.tut-btn { display: inline-flex; align-items: center; justify-content: center; gap: 8px;
  min-height: 44px; padding: 0 18px; border: none; border-radius: var(--fx-radius-md);
  background: var(--fx-primary-500); color: var(--fx-text-on-primary); font-family: inherit;
  font-size: var(--fx-small-size); font-weight: 600; cursor: pointer; }
.tut-btn:hover:not(:disabled) { background: var(--fx-primary-600); }
.tut-btn:disabled { opacity: .55; cursor: default; }
.tut-btn-sm { min-height: 38px; padding: 0 14px; }
.tut-nota { font-size: var(--fx-small-size); color: var(--fx-text-muted); }

/* Modal */
.tut-overlay { position: fixed; inset: 0; z-index: 100; display: flex; align-items: center;
  justify-content: center; padding: 24px 16px; background: rgba(10, 37, 64, 0.35);
  backdrop-filter: blur(3px); overflow-y: auto; }
.tut-modal { background: var(--fx-surface); border: 1px solid var(--fx-border);
  border-radius: var(--fx-radius-xl); box-shadow: var(--fx-shadow-float); width: 100%;
  max-width: 520px; max-height: 88vh; overflow: auto; padding: 24px 26px; }
.tut-modal-cab { display: flex; align-items: center; justify-content: space-between; gap: 14px; }
.tut-modal-cab h2 { font-family: var(--fx-font-heading); font-size: 20px; font-weight: 600;
  color: var(--fx-text-heading); margin: 0; }
.tut-x { border: none; background: none; font-size: 22px; line-height: 1; color: var(--fx-text-muted);
  cursor: pointer; padding: 4px 8px; border-radius: var(--fx-radius-sm); }
.tut-x:hover { background: var(--fx-surface-sunken); color: var(--fx-text-heading); }
.tut-hint { color: var(--fx-text-muted); font-size: var(--fx-small-size); line-height: 1.55;
  margin: 8px 0 16px; }
.tut-buscar { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; align-items: end; }
.tut-buscar label { display: flex; flex-direction: column; gap: 6px; }
.tut-buscar span { font-size: var(--fx-caption-size); font-weight: 700; letter-spacing: 0.07em;
  text-transform: uppercase; color: var(--fx-text-muted); }
.tut-buscar input { min-height: var(--fx-control-md); padding: 10px 13px; background: var(--fx-surface);
  border: 1px solid var(--fx-border); border-radius: var(--fx-radius-md); color: var(--fx-text-heading);
  font-family: inherit; font-size: var(--fx-small-size); outline: none; }
.tut-buscar input:focus { border-color: var(--fx-primary-400); box-shadow: var(--fx-focus-ring); }
.tut-buscar .tut-btn { grid-column: 1 / -1; }
@media (max-width: 480px) { .tut-buscar { grid-template-columns: 1fr; } }
.tut-alerta { margin-top: 14px; border-radius: var(--fx-radius-md); padding: 10px 14px;
  font-size: var(--fx-small-size); border: 1px solid transparent; }
.tut-alerta-error { background: var(--fx-error-bg); color: var(--fx-error-text); border-color: var(--fx-error-border); }
.tut-alerta-ok { background: var(--fx-success-bg); color: var(--fx-success-text); border-color: var(--fx-success-border); }
.tut-resultados { margin-top: 16px; display: flex; flex-direction: column; gap: 10px; }
.tut-resultado { display: flex; align-items: center; justify-content: space-between; gap: 12px;
  background: var(--fx-surface-sunken); border: 1px solid var(--fx-border);
  border-radius: var(--fx-radius-md); padding: 12px 14px; }
`;export{D as default};
