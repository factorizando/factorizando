import{u as y,a as j,r as o,s,j as r}from"./index-Bd36RRGt.js";function k(){return r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","aria-hidden":"true",children:[r.jsx("circle",{cx:"12",cy:"12",r:"9",strokeWidth:"1.7"}),r.jsx("path",{strokeLinecap:"round",strokeWidth:"1.7",d:"M12 7.5v5l3 1.8"})]})}function N(){const e=y();j();const[m,v]=o.useState(!0),[x,g]=o.useState(null),[c,l]=o.useState(null),[d,p]=o.useState(!1),[u,f]=o.useState("");o.useEffect(()=>{let i=!1;return(async()=>{const{data:{session:n}}=await s.auth.getSession();if(i)return;if(!n){e("/login?dest=cuenta-pendiente",{replace:!0});return}g(n.user.id);const{data:a}=await s.from("profiles").select("rol, bloque, estado_acceso, motivo_rechazo, perfil_completo").eq("id",n.user.id).single();if(!i){if(a&&!a.perfil_completo){e("/completar-perfil",{replace:!0});return}if(a?.rol==="admin"){e("/admin",{replace:!0});return}if(a?.estado_acceso==="aprobado"){e(`/${a.bloque||""}`,{replace:!0});return}l(a||{}),v(!1)}})(),()=>{i=!0}},[e]);async function b(){if(!x||d)return;p(!0),f("");const{error:i}=await s.from("profiles").update({estado_acceso:"pendiente",motivo_rechazo:null,revisado_en:null}).eq("id",x);if(p(!1),i){f("No se pudo reenviar la solicitud. Intenta de nuevo.");return}l(n=>({...n,estado_acceso:"pendiente",motivo_rechazo:null}))}async function h(){await s.auth.signOut(),e("/login",{replace:!0})}const t=c?.estado_acceso==="rechazado";return r.jsxs("div",{className:"cpx-root",children:[r.jsx("style",{children:z}),r.jsx("div",{className:"cpx-card",children:m?r.jsxs("div",{className:"cpx-loading",children:[r.jsx("span",{className:"cpx-spinner"})," Cargando…"]}):r.jsxs(r.Fragment,{children:[r.jsx("span",{className:`cpx-icono${t?" cpx-icono-rechazo":""}`,children:r.jsx(k,{})}),r.jsx("h1",{className:"cpx-titulo",children:t?"Tu solicitud no fue aprobada":"Tu cuenta está en revisión"}),r.jsx("p",{className:"cpx-texto",children:t?"Un administrador revisó tu registro y de momento no otorgó acceso. Puedes corregir tus datos y volver a enviar la solicitud.":"Registramos tu solicitud y un administrador la revisará pronto. En cuanto la apruebe, podrás entrar al bloque que te asigne."}),t&&c?.motivo_rechazo&&r.jsxs("div",{className:"cpx-motivo",children:[r.jsx("span",{className:"cpx-motivo-tit",children:"Motivo"}),r.jsx("p",{children:c.motivo_rechazo})]}),u&&r.jsx("div",{className:"cpx-error",children:u}),r.jsxs("div",{className:"cpx-acciones",children:[t&&r.jsxs(r.Fragment,{children:[r.jsx("button",{type:"button",className:"cpx-btn-primario",onClick:b,disabled:d,children:d?"Enviando…":"Volver a solicitar"}),r.jsx("button",{type:"button",className:"cpx-btn-secundario",onClick:()=>e("/completar-perfil"),children:"Corregir mis datos"})]}),r.jsx("button",{type:"button",className:"cpx-btn-secundario",onClick:h,children:"Cerrar sesión"})]})]})})]})}const z=`
.cpx-root { min-height: 100vh; min-height: 100dvh; background: var(--fx-surface-sunken);
  color: var(--fx-text-body); font-family: var(--fx-font-body);
  display: flex; align-items: center; justify-content: center; padding: 32px 16px; }
.cpx-card { width: 100%; max-width: 480px; background: var(--fx-surface);
  border: 1px solid var(--fx-border); border-radius: var(--fx-radius-xl);
  box-shadow: var(--fx-shadow-float); padding: 40px 36px 32px; text-align: center; }
.cpx-loading { display: flex; align-items: center; gap: 10px; justify-content: center;
  color: var(--fx-text-muted); padding: 24px; }
.cpx-icono { display: grid; place-items: center; width: 64px; height: 64px; margin: 0 auto 20px;
  border-radius: 50%; background: var(--fx-primary-50); color: var(--fx-primary-600); }
.cpx-icono svg { width: 30px; height: 30px; }
.cpx-icono-rechazo { background: var(--fx-surface-sunken); color: var(--fx-text-muted); }
.cpx-titulo { font-family: var(--fx-font-heading); font-size: clamp(22px, 5vw, 27px);
  font-weight: 600; letter-spacing: -0.015em; color: var(--fx-text-heading); margin: 0 0 14px; }
.cpx-texto { font-size: var(--fx-body-size); line-height: 1.62; color: var(--fx-text-body);
  margin: 0 0 22px; text-wrap: pretty; }
.cpx-motivo { text-align: left; background: var(--fx-surface-sunken); border: 1px solid var(--fx-border);
  border-radius: var(--fx-radius-md); padding: 14px 16px; margin-bottom: 22px; }
.cpx-motivo-tit { display: block; font-size: var(--fx-caption-size); font-weight: 700;
  letter-spacing: 0.08em; text-transform: uppercase; color: var(--fx-text-muted); margin-bottom: 6px; }
.cpx-motivo p { margin: 0; font-size: var(--fx-small-size); line-height: 1.55; color: var(--fx-text-body); }
.cpx-error { font-size: var(--fx-small-size); color: var(--fx-error-text);
  background: var(--fx-surface-sunken); border: 1px solid var(--fx-border);
  border-radius: var(--fx-radius-md); padding: 10px 14px; margin-bottom: 18px; }
.cpx-acciones { display: flex; flex-direction: column; gap: 10px; }
.cpx-btn-primario, .cpx-btn-secundario { height: 48px; border-radius: var(--fx-radius-md);
  font-family: var(--fx-font-body); font-size: 16px; font-weight: 600; cursor: pointer;
  transition: background var(--fx-transition), border-color var(--fx-transition); }
.cpx-btn-primario { background: var(--fx-primary-600); border: none; color: #fff; }
.cpx-btn-primario:hover:not(:disabled) { background: var(--fx-primary-700, var(--fx-primary-600)); }
.cpx-btn-primario:disabled { opacity: .6; cursor: default; }
.cpx-btn-secundario { background: transparent; border: 1px solid var(--fx-border);
  color: var(--fx-text-body); }
.cpx-btn-secundario:hover { border-color: var(--fx-primary-200); color: var(--fx-text-heading); }
.cpx-spinner { width: 18px; height: 18px; border: 2px solid var(--fx-primary-100);
  border-top-color: var(--fx-primary-600); border-radius: 50%; animation: cpx-spin .6s linear infinite; }
@keyframes cpx-spin { to { transform: rotate(360deg); } }
`;export{N as default};
