import{u,a as f,r as c,s as d,j as e}from"./index-DfCmmbM8.js";const m={pago:"Falta de pago",ban:"Cuenta bloqueada",curso:"Periodo de curso finalizado",manual:"Decisión administrativa"};function h(s){if(!s)return null;const[i,n,r]=s.split("T")[0].split("-").map(Number);return new Date(i,n-1,r).toLocaleDateString("es-MX",{day:"2-digit",month:"long",year:"numeric"})}function g(){return e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","aria-hidden":"true",children:[e.jsx("path",{strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round",d:"M12 3l7 3v5.5c0 4.2-2.9 7.6-7 9-4.1-1.4-7-4.8-7-9V6l7-3z"}),e.jsx("path",{strokeWidth:"1.7",strokeLinecap:"round",d:"M9 12h6"})]})}function j(){const s=u();f();const[i,n]=c.useState(!0),[r,x]=c.useState(null);c.useEffect(()=>{let o=!1;return(async()=>{const{data:{session:l}}=await d.auth.getSession();if(o)return;if(!l){s("/login?dest=cuenta-suspendida",{replace:!0});return}const{data:a}=await d.from("profiles").select("*").eq("id",l.user.id).single();if(o)return;if(a&&!a.perfil_completo){s("/completar-perfil",{replace:!0});return}if(a?.rol==="admin"||a?.rol==="profesor"){s("/admin",{replace:!0});return}if(!(a?.estado_acceso==="aprobado"&&a?.suspendido_en&&(!a.suspendido_hasta||new Date(a.suspendido_hasta)>new Date))){a?.estado_acceso==="aprobado"?s(a.rol==="tutor"?"/tutor":`/${a.bloque||""}`,{replace:!0}):s("/cuenta-pendiente",{replace:!0});return}x(a),n(!1)})(),()=>{o=!0}},[s]);async function p(){await d.auth.signOut(),s("/login",{replace:!0})}const t=h(r?.suspendido_hasta);return e.jsxs("div",{className:"csx-root",children:[e.jsx("style",{children:v}),e.jsx("div",{className:"csx-card",children:i?e.jsxs("div",{className:"csx-loading",children:[e.jsx("span",{className:"csx-spinner"})," Cargando…"]}):e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"csx-icono",children:e.jsx(g,{})}),e.jsx("h1",{className:"csx-titulo",children:"Tu acceso está suspendido"}),e.jsx("p",{className:"csx-texto",children:t?`Puedes volver a entrar a partir del ${t}. Si tu situación ya se resolvió, pide a la coordinación que reactive tu cuenta.`:"Un administrador suspendió tu acceso. Si crees que es un error, contacta a la coordinación para revisarlo."}),e.jsxs("div",{className:"csx-detalle",children:[r?.suspension_origen&&e.jsxs("div",{className:"csx-fila",children:[e.jsx("span",{className:"csx-fila-t",children:"Motivo"}),e.jsx("span",{className:"csx-fila-v",children:m[r.suspension_origen]||r.suspension_origen})]}),r?.motivo_suspension&&e.jsxs("div",{className:"csx-fila",children:[e.jsx("span",{className:"csx-fila-t",children:"Detalle"}),e.jsx("span",{className:"csx-fila-v",children:r.motivo_suspension})]}),e.jsxs("div",{className:"csx-fila",children:[e.jsx("span",{className:"csx-fila-t",children:"Vigente"}),e.jsx("span",{className:"csx-fila-v",children:t?`hasta el ${t}`:"sin fecha de término"})]})]}),e.jsx("div",{className:"csx-acciones",children:e.jsx("button",{type:"button",className:"csx-btn-secundario",onClick:p,children:"Cerrar sesión"})})]})})]})}const v=`
.csx-root { min-height: 100vh; min-height: 100dvh; background: var(--fx-surface-sunken);
  color: var(--fx-text-body); font-family: var(--fx-font-body);
  display: flex; align-items: center; justify-content: center; padding: 32px 16px; }
.csx-card { width: 100%; max-width: 480px; background: var(--fx-surface);
  border: 1px solid var(--fx-border); border-radius: var(--fx-radius-xl);
  box-shadow: var(--fx-shadow-float); padding: 40px 36px 32px; text-align: center; }
.csx-loading { display: flex; align-items: center; gap: 10px; justify-content: center;
  color: var(--fx-text-muted); padding: 24px; }
.csx-icono { display: grid; place-items: center; width: 64px; height: 64px; margin: 0 auto 20px;
  border-radius: 50%; background: var(--fx-warning-bg); color: var(--fx-warning-text); }
.csx-icono svg { width: 30px; height: 30px; }
.csx-titulo { font-family: var(--fx-font-heading); font-size: clamp(22px, 5vw, 27px);
  font-weight: 600; letter-spacing: -0.015em; color: var(--fx-text-heading); margin: 0 0 14px; }
.csx-texto { font-size: var(--fx-body-size); line-height: 1.62; color: var(--fx-text-body);
  margin: 0 0 22px; text-wrap: pretty; }
.csx-detalle { text-align: left; background: var(--fx-surface-sunken); border: 1px solid var(--fx-border);
  border-radius: var(--fx-radius-md); padding: 14px 16px; margin-bottom: 22px;
  display: flex; flex-direction: column; gap: 10px; }
.csx-fila { display: flex; flex-direction: column; gap: 2px; }
.csx-fila-t { font-size: var(--fx-caption-size); font-weight: 700;
  letter-spacing: 0.08em; text-transform: uppercase; color: var(--fx-text-muted); }
.csx-fila-v { font-size: var(--fx-small-size); line-height: 1.5; color: var(--fx-text-body); }
.csx-acciones { display: flex; flex-direction: column; gap: 10px; }
.csx-btn-secundario { height: 48px; border-radius: var(--fx-radius-md);
  background: transparent; border: 1px solid var(--fx-border); color: var(--fx-text-body);
  font-family: var(--fx-font-body); font-size: 16px; font-weight: 600; cursor: pointer;
  transition: border-color var(--fx-transition), color var(--fx-transition); }
.csx-btn-secundario:hover { border-color: var(--fx-primary-200); color: var(--fx-text-heading); }
.csx-spinner { width: 18px; height: 18px; border: 2px solid var(--fx-primary-100);
  border-top-color: var(--fx-primary-600); border-radius: 50%; animation: csx-spin .6s linear infinite; }
@keyframes csx-spin { to { transform: rotate(360deg); } }
`;export{j as default};
