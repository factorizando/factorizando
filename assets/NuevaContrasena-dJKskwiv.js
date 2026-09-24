import{u as w,a as N,r,s as c,j as e,L as k,E as z,b as C}from"./index-ItuEt5-S.js";import{C as S}from"./circle-check-CUg2QtQN.js";import{T as E}from"./triangle-alert-CpA-66Jm.js";function q(){const f=w();N();const[d,l]=r.useState(null),[n,m]=r.useState(""),[x,h]=r.useState(""),[t,v]=r.useState(!1),[o,p]=r.useState(!1),[u,s]=r.useState(""),[g,b]=r.useState(!1);r.useEffect(()=>{c.auth.getSession().then(({data:{session:i}})=>l(!!i));const{data:{subscription:a}}=c.auth.onAuthStateChange((i,j)=>{l(!!j)});return()=>a.unsubscribe()},[]);const y=async a=>{if(a.preventDefault(),s(""),n.length<8){s("La contraseña debe tener al menos 8 caracteres.");return}if(n!==x){s("Las contraseñas no coinciden.");return}p(!0);const{error:i}=await c.auth.updateUser({password:n});if(p(!1),i){s("No se pudo actualizar la contraseña. Solicita un enlace nuevo.");return}b(!0)};return e.jsxs("div",{className:"nc-page",children:[e.jsx("style",{children:L}),e.jsx("div",{className:"nc-card",children:g?e.jsxs("div",{className:"nc-state",children:[e.jsx("div",{className:"nc-ic nc-ic-ok",children:e.jsx(S,{size:30,"aria-hidden":"true"})}),e.jsx("h1",{className:"nc-h1",children:"Contraseña actualizada"}),e.jsx("p",{className:"nc-p",children:"Ya puedes usar tu nueva contraseña."}),e.jsx("button",{className:"nc-primary",onClick:()=>f("/"),children:"Continuar"})]}):d===!1?e.jsxs("div",{className:"nc-state",children:[e.jsx("div",{className:"nc-ic",children:e.jsx(E,{size:30,"aria-hidden":"true"})}),e.jsx("h1",{className:"nc-h1",children:"Enlace no válido"}),e.jsx("p",{className:"nc-p",children:"El enlace para restablecer tu contraseña caducó o ya se usó. Solicita uno nuevo."}),e.jsx(k,{to:"/login",className:"nc-link",children:"Volver a iniciar sesión"})]}):d===null?e.jsx("div",{className:"nc-state",children:e.jsx("div",{className:"nc-spin nc-spin-dark"})}):e.jsxs(e.Fragment,{children:[e.jsx("h1",{className:"nc-h1",children:"Crea una nueva contraseña"}),e.jsxs("form",{className:"nc-form",onSubmit:y,children:[e.jsxs("div",{className:"nc-field",children:[e.jsx("label",{htmlFor:"nc-p1",children:"Nueva contraseña"}),e.jsxs("div",{className:"nc-pw",children:[e.jsx("input",{id:"nc-p1",type:t?"text":"password",required:!0,autoComplete:"new-password",placeholder:"Mínimo 8 caracteres",value:n,onChange:a=>m(a.target.value)}),e.jsx("button",{type:"button",className:"nc-eye",onClick:()=>v(!t),"aria-label":"Mostrar u ocultar",children:t?e.jsx(z,{size:18,"aria-hidden":"true"}):e.jsx(C,{size:18,"aria-hidden":"true"})})]})]}),e.jsxs("div",{className:"nc-field",children:[e.jsx("label",{htmlFor:"nc-p2",children:"Confirmar contraseña"}),e.jsx("input",{id:"nc-p2",type:t?"text":"password",required:!0,autoComplete:"new-password",placeholder:"Repite tu contraseña",value:x,onChange:a=>h(a.target.value)})]}),u&&e.jsx("div",{className:"nc-error",children:u}),e.jsxs("button",{type:"submit",className:"nc-primary",disabled:o,children:[o&&e.jsx("span",{className:"nc-spin"}),o?"Guardando…":"Guardar contraseña"]})]})]})})]})}const L=`
.nc-page { min-height: 100vh; min-height: 100dvh; background: var(--fx-bg); display: flex;
  align-items: center; justify-content: center; padding: 24px 16px; font-family: var(--fx-font-body); }
.nc-page * { box-sizing: border-box; }
.nc-card { width: 100%; max-width: 420px; background: var(--fx-surface); border: 1px solid var(--fx-border);
  border-radius: var(--fx-radius-xl); box-shadow: var(--fx-shadow-float); padding: 36px 36px 30px; }
.nc-h1 { font-family: var(--fx-font-heading); font-size: 1.4rem; font-weight: 600; color: var(--fx-text-heading);
  text-align: center; margin-bottom: 20px; letter-spacing: -0.02em; }
.nc-form { display: flex; flex-direction: column; gap: 16px; }
.nc-field { display: flex; flex-direction: column; gap: 7px; }
.nc-field label { font-size: var(--fx-caption-size); letter-spacing: .06em; text-transform: uppercase;
  font-weight: 700; color: var(--fx-text-muted); }
.nc-field input { width: 100%; min-height: var(--fx-control-md); padding: 11px 13px; background: var(--fx-surface);
  border: 1px solid var(--fx-border); border-radius: var(--fx-radius-md); color: var(--fx-text-heading);
  font-size: var(--fx-small-size); outline: none; font-family: inherit;
  transition: border-color var(--fx-transition), box-shadow var(--fx-transition); }
.nc-field input::placeholder { color: var(--fx-text-disabled); }
.nc-field input:hover { border-color: var(--fx-border-strong); }
.nc-field input:focus { border-color: var(--fx-primary-400); box-shadow: var(--fx-focus-ring); }
.nc-pw { position: relative; }
.nc-pw input { padding-right: 46px; }
.nc-eye { position: absolute; right: 8px; top: 50%; transform: translateY(-50%); display: grid;
  place-items: center; background: none; border: none; cursor: pointer; color: var(--fx-text-muted); padding: 6px; }
.nc-eye:hover { color: var(--fx-text-heading); }
.nc-error { font-size: var(--fx-small-size); color: var(--fx-error-text); background: var(--fx-error-bg);
  border: 1px solid var(--fx-error-border); border-radius: var(--fx-radius-md); padding: .6rem .8rem; }
.nc-primary { display: inline-flex; align-items: center; justify-content: center; gap: 8px; width: 100%; min-height: 48px;
  background: var(--fx-primary-500); border: none; border-radius: var(--fx-radius-md); color: var(--fx-text-on-primary);
  font-size: 1rem; font-weight: 600; cursor: pointer; font-family: inherit;
  transition: background var(--fx-transition); margin-top: 2px; }
.nc-primary:hover:not(:disabled) { background: var(--fx-primary-600); }
.nc-primary:disabled { opacity: .7; cursor: not-allowed; }
.nc-state { text-align: center; padding: 14px 0; }
.nc-ic { display: grid; place-items: center; width: 60px; height: 60px; margin: 0 auto 12px;
  border-radius: 50%; background: var(--fx-surface-sunken); color: var(--fx-text-muted); }
.nc-ic-ok { background: var(--fx-primary-50); color: var(--fx-primary-600); }
.nc-p { font-size: var(--fx-small-size); color: var(--fx-text-body); line-height: 1.6; margin-bottom: 18px; }
.nc-link { color: var(--fx-primary-700); text-decoration: none; font-weight: 600; font-size: var(--fx-small-size); }
.nc-link:hover { text-decoration: underline; }
.nc-spin { width: 16px; height: 16px; border: 2px solid color-mix(in srgb, var(--fx-text-on-primary) 40%, transparent);
  border-top-color: var(--fx-text-on-primary); border-radius: 50%; animation: nc-spin .6s linear infinite; }
.nc-spin-dark { width: 28px; height: 28px; border-color: var(--fx-primary-100); border-top-color: var(--fx-primary-500); margin: 12px auto; }
@keyframes nc-spin { to { transform: rotate(360deg); } }
`;export{q as default};
