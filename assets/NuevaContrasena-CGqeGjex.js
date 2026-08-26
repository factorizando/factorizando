import{u as j,a as N,r as a,s as c,j as e,L as k}from"./index-D1q4hXku.js";function z(){const x=j();N();const[l,d]=a.useState(null),[n,m]=a.useState(""),[p,g]=a.useState(""),[s,f]=a.useState(!1),[i,u]=a.useState(!1),[h,t]=a.useState(""),[b,v]=a.useState(!1);a.useEffect(()=>{c.auth.getSession().then(({data:{session:o}})=>d(!!o));const{data:{subscription:r}}=c.auth.onAuthStateChange((o,w)=>{d(!!w)});return()=>r.unsubscribe()},[]);const y=async r=>{if(r.preventDefault(),t(""),n.length<8){t("La contraseña debe tener al menos 8 caracteres.");return}if(n!==p){t("Las contraseñas no coinciden.");return}u(!0);const{error:o}=await c.auth.updateUser({password:n});if(u(!1),o){t("No se pudo actualizar la contraseña. Solicita un enlace nuevo.");return}v(!0)};return e.jsxs("div",{className:"nc-page",children:[e.jsx("style",{children:S}),e.jsx("div",{className:"nc-card",children:b?e.jsxs("div",{className:"nc-state",children:[e.jsx("div",{className:"nc-ic",children:"✅"}),e.jsx("h1",{className:"nc-h1",children:"Contraseña actualizada"}),e.jsx("p",{className:"nc-p",children:"Ya puedes usar tu nueva contraseña."}),e.jsx("button",{className:"nc-primary",onClick:()=>x("/"),children:"Continuar"})]}):l===!1?e.jsxs("div",{className:"nc-state",children:[e.jsx("div",{className:"nc-ic",children:"⚠️"}),e.jsx("h1",{className:"nc-h1",children:"Enlace no válido"}),e.jsx("p",{className:"nc-p",children:"El enlace para restablecer tu contraseña caducó o ya se usó. Solicita uno nuevo."}),e.jsx(k,{to:"/login",className:"nc-link",children:"Volver a iniciar sesión"})]}):l===null?e.jsx("div",{className:"nc-state",children:e.jsx("div",{className:"nc-spin nc-spin-dark"})}):e.jsxs(e.Fragment,{children:[e.jsx("h1",{className:"nc-h1",children:"Crea una nueva contraseña"}),e.jsxs("form",{className:"nc-form",onSubmit:y,children:[e.jsxs("div",{className:"nc-field",children:[e.jsx("label",{htmlFor:"nc-p1",children:"Nueva contraseña"}),e.jsxs("div",{className:"nc-pw",children:[e.jsx("input",{id:"nc-p1",type:s?"text":"password",required:!0,autoComplete:"new-password",placeholder:"Mínimo 8 caracteres",value:n,onChange:r=>m(r.target.value)}),e.jsx("button",{type:"button",className:"nc-eye",onClick:()=>f(!s),"aria-label":"Mostrar u ocultar",children:s?"🙈":"👁"})]})]}),e.jsxs("div",{className:"nc-field",children:[e.jsx("label",{htmlFor:"nc-p2",children:"Confirmar contraseña"}),e.jsx("input",{id:"nc-p2",type:s?"text":"password",required:!0,autoComplete:"new-password",placeholder:"Repite tu contraseña",value:p,onChange:r=>g(r.target.value)})]}),h&&e.jsx("div",{className:"nc-error",children:h}),e.jsxs("button",{type:"submit",className:"nc-primary",disabled:i,children:[i&&e.jsx("span",{className:"nc-spin"}),i?"Guardando…":"Guardar contraseña"]})]})]})})]})}const S=`
.nc-page { min-height: 100vh; min-height: 100dvh; background: var(--app-bg); display: flex;
  align-items: center; justify-content: center; padding: 24px 16px; font-family: var(--font-ui); }
.nc-page * { box-sizing: border-box; }
.nc-card { width: 100%; max-width: 420px; background: var(--card-bg); border: 1px solid var(--card-border);
  border-radius: 16px; box-shadow: var(--card-shadow); padding: 36px 36px 30px; }
.nc-h1 { font-size: 1.45rem; font-weight: 700; color: var(--gray-900); text-align: center; margin-bottom: 20px; }
.nc-form { display: flex; flex-direction: column; gap: 16px; }
.nc-field { display: flex; flex-direction: column; gap: 7px; }
.nc-field label { font-size: .86rem; font-weight: 600; color: var(--gray-700); }
.nc-field input { width: 100%; height: 46px; padding: 0 13px; background: var(--input-bg); border: 2px solid var(--input-border);
  border-radius: 11px; color: var(--gray-900); font-size: .95rem; outline: none; font-family: var(--font-ui);
  transition: border-color .18s, background .18s, box-shadow .18s; }
.nc-field input::placeholder { color: var(--gray-400); }
.nc-field input:hover { border-color: var(--input-border-hover); }
.nc-field input:focus { border-color: var(--accent-blue-ink); background: var(--card-bg); box-shadow: 0 0 0 4px var(--focus-ring); }
.nc-pw { position: relative; }
.nc-pw input { padding-right: 44px; }
.nc-eye { position: absolute; right: 8px; top: 50%; transform: translateY(-50%); background: none;
  border: none; cursor: pointer; font-size: 1rem; padding: 6px; line-height: 1; }
.nc-error { font-size: .85rem; color: #b42318; background: #fef3f2; border: 1px solid #fecdca; border-radius: 8px; padding: .6rem .8rem; }
.nc-primary { display: inline-flex; align-items: center; justify-content: center; gap: 8px; width: 100%; height: 48px;
  background-image: linear-gradient(to right, var(--gray-900), var(--gray-700)); border: none; border-radius: 12px; color: #fff;
  font-size: .98rem; font-weight: 600; cursor: pointer; font-family: var(--font-ui);
  transition: background-image .25s, box-shadow .25s, transform .25s; margin-top: 2px; }
.nc-primary:hover:not(:disabled) { background-image: linear-gradient(to right, var(--gray-800), var(--gray-600));
  box-shadow: 0 12px 24px rgba(17,24,39,.25); transform: scale(1.015); }
.nc-primary:active:not(:disabled) { transform: scale(.985); }
.nc-primary:disabled { opacity: .7; cursor: not-allowed; }
.nc-state { text-align: center; padding: 14px 0; }
.nc-ic { font-size: 2.6rem; margin-bottom: 8px; }
.nc-p { font-size: .92rem; color: var(--gray-600); line-height: 1.6; margin-bottom: 18px; }
.nc-link { color: var(--accent-blue-ink); text-decoration: none; font-weight: 600; font-size: .92rem; }
.nc-link:hover { color: var(--accent-blue-ink-hover); text-decoration: underline; }
.nc-spin { width: 16px; height: 16px; border: 2px solid rgba(255,255,255,.45); border-top-color: #fff;
  border-radius: 50%; animation: nc-spin .6s linear infinite; }
.nc-spin-dark { width: 28px; height: 28px; border-color: var(--accent-blue-soft); border-top-color: var(--accent-blue-ink); margin: 12px auto; }
@keyframes nc-spin { to { transform: rotate(360deg); } }
`;export{z as default};
