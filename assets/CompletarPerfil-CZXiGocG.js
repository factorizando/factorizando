import{c as de,r as o,j as e,a as Se,u as ze,s as v,X as ke}from"./index-Co7vd6XG.js";import{C as Ee}from"./chevron-down-D6-brVDW.js";import{G as _e,U as De}from"./users-Djzrt_zT.js";import{T as Me}from"./trash-2-jzIqXXWI.js";import{P as Ae}from"./plus-XR6m-LzF.js";const Te=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],Fe=de("arrow-left",Te);const Le=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Pe=de("check",Le),$e=["Aguascalientes","Baja California","Baja California Sur","Campeche","Chiapas","Chihuahua","Ciudad de México","Coahuila","Colima","Durango","Estado de México","Guanajuato","Guerrero","Hidalgo","Jalisco","Michoacán","Morelos","Nayarit","Nuevo León","Oaxaca","Puebla","Querétaro","Quintana Roo","San Luis Potosí","Sinaloa","Sonora","Tabasco","Tamaulipas","Tlaxcala","Veracruz","Yucatán","Zacatecas"];function W(l){return(l||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase()}function $({value:l,onChange:m,options:g=[],placeholder:b="Selecciona…",disabled:S=!1,textoVacio:I="Sin resultados",...q}){const[d,c]=o.useState(!1),[R,w]=o.useState(l||""),[u,z]=o.useState(-1),k=o.useRef(null),M=o.useRef(null),N=`combo-lista-${o.useId().replace(/[^a-zA-Z0-9]/g,"")}`,E=o.useMemo(()=>(g||[]).map(i=>typeof i=="string"?{value:i,label:i}:i),[g]),A=o.useMemo(()=>{const i=E.find(s=>s.value===l);return i?i.label:l||""},[E,l]),p=o.useMemo(()=>{const i=W(R);return i?E.filter(s=>W(s.label).includes(i)||W(s.value).includes(i)):E},[E,R]);function T(){S||(w(""),z(-1),c(!0),requestAnimationFrame(()=>{M.current?.focus()}))}function j(i=!0){c(!1),z(-1),i&&w(A)}function F(i){m(i.value),w(i.label),c(!1),z(-1),M.current?.blur()}o.useEffect(()=>{if(!d)return;const i=s=>{k.current&&!k.current.contains(s.target)&&j(!0)};return document.addEventListener("mousedown",i),document.addEventListener("touchstart",i,{passive:!0}),()=>{document.removeEventListener("mousedown",i),document.removeEventListener("touchstart",i)}},[d]),o.useEffect(()=>{d||w(A)},[A,d]),o.useEffect(()=>{!d||u<0||document.getElementById(`${N}-op-${u}`)?.scrollIntoView({block:"nearest"})},[d,u,N]);const[C,L]=o.useState(0);o.useEffect(()=>{if(!d){L(0);return}const i=window.matchMedia("(max-width: 480px)").matches,s=window.visualViewport;if(!i||!s)return;const x=()=>{L(Math.max(0,window.innerHeight-s.height-(s.offsetTop||0)))};return x(),s.addEventListener("resize",x),s.addEventListener("scroll",x),()=>{s.removeEventListener("resize",x),s.removeEventListener("scroll",x)}},[d]);function P(i){if(i.key==="ArrowDown"||i.key==="ArrowUp"){if(i.preventDefault(),!d){T();return}const s=i.key==="ArrowDown"?1:-1;z(x=>{if(p.length===0)return-1;const _=x+s;return _<0?p.length-1:_>=p.length?0:_})}else i.key==="Enter"?d&&u>=0&&p[u]&&(i.preventDefault(),F(p[u])):i.key==="Escape"&&(i.preventDefault(),j(!0),M.current?.blur())}return e.jsxs("div",{className:"combo",ref:k,children:[e.jsx("style",{children:Ie}),e.jsx("input",{ref:M,className:"combo-entrada",...q,role:"combobox","aria-expanded":d,"aria-controls":N,"aria-activedescendant":u>=0?`${N}-op-${u}`:void 0,"aria-autocomplete":"list",value:d?R:A,placeholder:b,disabled:S,autoComplete:"off",onFocus:()=>{d||T()},onChange:i=>{w(i.target.value),z(-1),d||c(!0)},onKeyDown:P}),e.jsx("button",{type:"button",className:"combo-flecha",tabIndex:-1,"aria-hidden":"true",disabled:S,onClick:()=>d?j(!0):T(),children:e.jsx(Ee,{size:18,className:d?"combo-flecha-arriba":""})}),d&&e.jsx("div",{className:"combo-desplegable",style:C>0?{bottom:12+C}:void 0,children:e.jsx("ul",{className:"combo-lista",role:"listbox",id:N,children:p.length===0?e.jsx("li",{className:"combo-vacio",role:"presentation",children:I}):p.map((i,s)=>{const x=i.value===l;return e.jsxs("li",{id:`${N}-op-${s}`,role:"option","aria-selected":x,className:`combo-opcion${s===u?" combo-opcion-resaltada":""}${x?" combo-opcion-elegida":""}`,onMouseDown:_=>{_.preventDefault(),F(i)},children:[e.jsx("span",{children:i.label}),x&&e.jsx(Pe,{size:16,"aria-hidden":"true"})]},i.value)})})})]})}const Ie=`
.combo { position: relative; }
.combo-entrada { width: 100%; min-height: var(--fx-control-md); padding: 10px 40px 10px 13px;
  background: var(--fx-surface); border: 1px solid var(--fx-border); border-radius: var(--fx-radius-md);
  color: var(--fx-text-heading); font-family: inherit; font-size: var(--fx-small-size); outline: none;
  transition: border-color var(--fx-transition), box-shadow var(--fx-transition); }
.combo-entrada:focus { border-color: var(--fx-primary-400); box-shadow: var(--fx-focus-ring); }
.combo-entrada::placeholder { color: var(--fx-text-disabled); }
.combo-entrada:disabled { opacity: .6; }
.combo-flecha { position: absolute; right: 6px; top: 50%; transform: translateY(-50%);
  display: grid; place-items: center; width: 32px; height: 32px; border: none; background: none;
  color: var(--fx-text-muted); cursor: pointer; border-radius: var(--fx-radius-sm); }
.combo-flecha svg { transition: transform var(--fx-transition); }
.combo-flecha-arriba { transform: rotate(180deg); }
.combo-desplegable { position: absolute; top: 100%; left: 0; right: 0; z-index: 40; margin-top: 4px; }
.combo-lista { margin: 0; padding: 4px; list-style: none; background: var(--fx-surface);
  border: 1px solid var(--fx-border); border-radius: var(--fx-radius-md);
  box-shadow: var(--fx-shadow-float); max-height: 260px; overflow-y: auto; }
.combo-opcion { display: flex; align-items: center; justify-content: space-between; gap: 10px;
  min-height: 44px; padding: 8px 12px; border-radius: var(--fx-radius-sm); cursor: pointer;
  font-size: var(--fx-small-size); color: var(--fx-text-body); }
.combo-opcion-resaltada, .combo-opcion:hover { background: var(--fx-surface-sunken); }
.combo-opcion-elegida { color: var(--fx-text-heading); font-weight: 600; }
.combo-opcion-elegida svg { color: var(--fx-primary-600); flex: none; }
.combo-vacio { padding: 12px; font-size: var(--fx-small-size); color: var(--fx-text-muted); }
@media (max-width: 480px) {
  .combo-entrada, .combo-opcion { font-size: 16px; }
  .combo-desplegable { position: fixed; left: 12px; right: 12px; bottom: 12px; top: auto;
    margin: 0; z-index: 200; padding-top: 14px; }
  .combo-desplegable::before { content: ""; position: absolute; top: 0; left: 50%;
    transform: translateX(-50%); width: 44px; height: 4px; border-radius: 99px;
    background: var(--fx-border-strong); }
  .combo-lista { max-height: 46dvh; }
}
`,Re=[{v:"primaria",label:"Educación Básica (Primaria)"},{v:"secundaria",label:"Educación Básica (Secundaria)"},{v:"media_superior",label:"Educación Media Superior (Preparatoria/Bachillerato)"},{v:"superior",label:"Educación Superior"}],Oe=[{value:"01",label:"Ene"},{value:"02",label:"Feb"},{value:"03",label:"Mar"},{value:"04",label:"Abr"},{value:"05",label:"May"},{value:"06",label:"Jun"},{value:"07",label:"Jul"},{value:"08",label:"Ago"},{value:"09",label:"Sep"},{value:"10",label:"Oct"},{value:"11",label:"Nov"},{value:"12",label:"Dic"}],Ue=["Puebla","Veracruz","Estado de México","Ciudad de México"],ee=l=>(l||"").toLowerCase().replace(/(^|\s|-)([a-záéíóúñ])/g,(m,g,b)=>g+b.toUpperCase());function ae(l){if(!l)return null;const m=new Date,g=new Date(l);let b=m.getFullYear()-g.getFullYear();const S=m.getMonth()-g.getMonth();return(S<0||S===0&&m.getDate()<g.getDate())&&b--,b>=0&&b<120?b:null}function qe(l,m){if(l==="primaria")return"primaria";if(l==="secundaria")return"secundaria";if(l==="media_superior")return"prepa";if(l==="superior")return"universidad";const g=ae(m);return g!=null&&g<12?"primaria":"secundaria"}const Ge={nombre:"",telefono:"",parentesco:""};function Xe(){Se();const l=ze(),[m,g]=o.useState(null),[b,S]=o.useState(!0),[I,q]=o.useState(!1),[d,c]=o.useState(""),[R,w]=o.useState("tipo"),[u,z]=o.useState(null),[k,M]=o.useState(""),[O,N]=o.useState(""),[E,A]=o.useState(""),[p,T]=o.useState(""),[j,F]=o.useState(""),[C,L]=o.useState(""),[P,i]=o.useState(""),[s,x]=o.useState(""),[_,G]=o.useState(""),[B,V]=o.useState([]),[J,pe]=o.useState(""),[U,ue]=o.useState(null),[fe,me]=o.useState(""),Q=o.useRef(null),[xe,re]=o.useState([]),[te,H]=o.useState([]),[he,Y]=o.useState(!1);o.useEffect(()=>{let a=!1;return v.auth.getSession().then(async({data:{session:r}})=>{if(a)return;if(!r){l("/login?dest=completar-perfil");return}g(r.user.id);const{data:t}=await v.from("profiles").select("nombre, apellidos, telefono, estado, ciudad, fecha_nacimiento, nivel_educativo, institucion, institucion_cct, avatar_url, tipo_solicitado").eq("id",r.user.id).single();if(a)return;if(t){M(t.nombre||""),N(t.apellidos||""),A(t.telefono||""),T(t.estado||"Puebla"),F(t.ciudad||"Tecamachalco"),L(t.fecha_nacimiento||"");{const f=/^(\d{4})-(\d{2})-(\d{2})$/.exec(t.fecha_nacimiento||"");f&&ne({d:f[3],m:f[2],a:f[1]})}i(t.nivel_educativo||""),x(t.institucion||""),G(t.institucion_cct||""),pe(t.avatar_url||""),t.tipo_solicitado&&(z(t.tipo_solicitado),w("form"))}const{data:n}=await v.from("alumnos").select("id").eq("profile_id",r.user.id).maybeSingle();if(n){const{data:f}=await v.from("contactos_emergencia").select("nombre, telefono, relacion, orden").eq("alumno_id",n.id).order("orden");!a&&f&&V(f.map(h=>({nombre:h.nombre,telefono:h.telefono,parentesco:h.relacion})))}S(!1)}),()=>{a=!0}},[l]),o.useEffect(()=>{if(!p){re([]);return}let a=!1;return v.rpc("municipios_por_estado",{p_estado:p}).then(({data:r})=>{a||re((r||[]).map(t=>ee(t.municipio)))}),()=>{a=!0}},[p]),o.useEffect(()=>{if(!p){H([]);return}const a=s.trim(),r=j.trim();if(!r&&a.length<3){H([]);return}const t=setTimeout(async()=>{const{data:n}=await v.rpc("buscar_escuelas",{p_estado:p,p_municipio:r||null,p_q:a.length>=2?a:null});H(n||[])},250);return()=>clearTimeout(t)},[s,p,j]);const ge=a=>{const r=a.target.files?.[0];if(r){if(r.size>3*1024*1024){c("La imagen no debe superar 3 MB.");return}c(""),ue(r),me(URL.createObjectURL(r))}},ve=o.useCallback(async()=>{if(!U||!m)return J;const a=(U.name.split(".").pop()||"jpg").toLowerCase(),r=`${m}/${Date.now()}.${a}`,{error:t}=await v.storage.from("avatars").upload(r,U,{contentType:U.type,upsert:!1});if(t)throw t;const{data:n}=v.storage.from("avatars").getPublicUrl(r);return n.publicUrl},[U,m,J]);function oe(a){z(a),c(""),w("form")}function X(a,r,t){V(n=>n.map((f,h)=>h===a?{...f,[r]:t}:f))}const be=()=>V(a=>a.length<2?[...a,{...Ge}]:a),je=a=>V(r=>r.filter((t,n)=>n!==a));async function ye(a){if(a.preventDefault(),c(""),!k.trim()){c("Ingresa tu nombre.");return}if(!O.trim()){c("Ingresa tus apellidos.");return}const r=E.replace(/\D/g,"");if(r.length!==10){c("El teléfono debe tener 10 dígitos.");return}if(u==="alumno"){if(!p){c("Selecciona tu estado.");return}if(!j.trim()){c("Ingresa tu ciudad.");return}if(!C){c("Ingresa tu fecha de nacimiento.");return}const t=ae(C);if(t==null||t<8||t>100){c("Revisa tu fecha de nacimiento: la edad no es válida.");return}if(!P){c("Selecciona tu nivel educativo actual.");return}if(!s.trim()){c("Ingresa tu institución educativa.");return}if(Ue.includes(p)&&!_){c("Elige tu escuela de la lista de sugerencias (debe estar en el catálogo).");return}for(const n of B)if(n.nombre.trim()||n.telefono.trim()||n.parentesco.trim()){if(!n.nombre.trim()||!n.telefono.trim()||!n.parentesco.trim()){c("Completa nombre, teléfono y parentesco de cada contacto de emergencia.");return}if(n.telefono.replace(/\D/g,"").length!==10){c("El teléfono de un contacto de emergencia debe tener 10 dígitos.");return}}}q(!0);try{const t=await ve(),n={nombre:k.trim(),apellidos:O.trim(),telefono:r,avatar_url:t||null,perfil_completo:!0,tipo_solicitado:u};u==="alumno"&&Object.assign(n,{estado:p,ciudad:j.trim(),fecha_nacimiento:C,nivel_educativo:P,institucion:s.trim(),institucion_cct:_||null});const{error:f}=await v.from("profiles").update(n).eq("id",m);if(f)throw f;if(u==="alumno"){const h=qe(P,C),{error:se}=await v.from("alumnos").upsert({id:m,profile_id:m,nombre:k.trim(),apellidos:O.trim(),fecha_nacimiento:C,email:null,telefono:r,nivel:h},{onConflict:"id"});if(se)throw se;const{error:ce}=await v.from("contactos_emergencia").delete().eq("alumno_id",m);if(ce)throw ce;const le=B.filter(D=>D.nombre.trim()).map((D,Ce)=>({alumno_id:m,nombre:D.nombre.trim(),telefono:D.telefono.replace(/\D/g,""),relacion:D.parentesco.trim(),orden:Ce+1}));if(le.length){const{error:D}=await v.from("contactos_emergencia").insert(le);if(D)throw D}}l("/cuenta-pendiente")}catch(t){console.error(t),c("No se pudo guardar tu perfil. Intenta de nuevo."),q(!1)}}const ie=ae(C),Z=fe||J,[y,ne]=o.useState({d:"",m:"",a:""}),we=o.useMemo(()=>{const a=new Date().getFullYear()-8,r=[];for(let t=a;t>=a-92;t--)r.push(String(t));return r},[]),Ne=o.useMemo(()=>{const a=y.m&&y.a?new Date(Number(y.a),Number(y.m),0).getDate():31,r=[];for(let t=1;t<=a;t++)r.push(String(t).padStart(2,"0"));return r},[y.m,y.a]);function K(a){const r={...y,...a};if(ne(r),!r.d||!r.m||!r.a){L("");return}const t=new Date(Number(r.a),Number(r.m),0).getDate(),n=String(Math.min(Number(r.d),t)).padStart(2,"0");L(`${r.a}-${r.m}-${n}`)}return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:Be}),e.jsx("div",{className:"cp-root",children:e.jsx("div",{className:"cp-card",children:b?e.jsxs("div",{className:"cp-loading",children:[e.jsx("span",{className:"cp-spinner"})," Cargando…"]}):R==="tipo"?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"cp-head",children:[e.jsx("span",{className:"cp-eyebrow",children:"Casi listo"}),e.jsx("h1",{className:"cp-title",children:"¿Qué tipo de cuenta es?"}),e.jsx("p",{className:"cp-sub",children:"Elige una opción para continuar. El administrador revisará tu solicitud."})]}),e.jsxs("div",{className:"cp-tipos",children:[e.jsxs("button",{type:"button",className:`cp-tipo${u==="alumno"?" cp-tipo-on":""}`,onClick:()=>oe("alumno"),children:[e.jsx("span",{className:"cp-tipo-ic",children:e.jsx(_e,{size:24,"aria-hidden":"true"})}),e.jsx("span",{className:"cp-tipo-tit",children:"Alumno"}),e.jsx("span",{className:"cp-tipo-txt",children:"Voy a tomar clases y quiero ver mi avance."})]}),e.jsxs("button",{type:"button",className:`cp-tipo${u==="tutor"?" cp-tipo-on":""}`,onClick:()=>oe("tutor"),children:[e.jsx("span",{className:"cp-tipo-ic",children:e.jsx(De,{size:24,"aria-hidden":"true"})}),e.jsx("span",{className:"cp-tipo-tit",children:"Tutor"}),e.jsx("span",{className:"cp-tipo-txt",children:"Acompaño a uno o varios alumnos."})]})]})]}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"cp-head",children:[e.jsxs("button",{type:"button",className:"cp-volver",onClick:()=>w("tipo"),children:[e.jsx(Fe,{size:15,"aria-hidden":"true"})," Cambiar tipo"]}),e.jsx("span",{className:"cp-eyebrow",children:"Casi listo"}),e.jsx("h1",{className:"cp-title",children:u==="alumno"?"Completa tu perfil de alumno":"Completa tu perfil de tutor"}),e.jsx("p",{className:"cp-sub",children:u==="alumno"?"Necesitamos estos datos para personalizar tu preparación.":"Solo lo básico para identificarte."})]}),e.jsxs("form",{className:"cp-form",onSubmit:ye,children:[e.jsxs("div",{className:"cp-avatar-row",children:[e.jsx("div",{className:"cp-avatar",onClick:()=>Q.current?.click(),children:Z?e.jsx("img",{src:Z,alt:"avatar"}):e.jsx("span",{className:"cp-avatar-ph",children:"＋"})}),e.jsxs("div",{className:"cp-avatar-txt",children:[e.jsx("button",{type:"button",className:"cp-avatar-btn",onClick:()=>Q.current?.click(),children:Z?"Cambiar foto":"Subir foto"}),e.jsx("span",{className:"cp-hint",children:"JPG o PNG, máx. 3 MB"})]}),e.jsx("input",{ref:Q,type:"file",accept:"image/*",hidden:!0,onChange:ge})]}),e.jsxs("div",{className:"cp-grid2",children:[e.jsxs("div",{className:"cp-field",children:[e.jsx("label",{children:"Nombre(s)"}),e.jsx("input",{value:k,onChange:a=>M(a.target.value),placeholder:"Ej. Ana"})]}),e.jsxs("div",{className:"cp-field",children:[e.jsx("label",{children:"Apellidos"}),e.jsx("input",{value:O,onChange:a=>N(a.target.value),placeholder:"Ej. López García"})]})]}),e.jsxs("div",{className:"cp-field",children:[e.jsx("label",{children:"Teléfono (WhatsApp)"}),e.jsx("input",{type:"tel",value:E,onChange:a=>A(a.target.value),placeholder:"Ej. 2221234567"})]}),u==="alumno"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"cp-field",children:[e.jsxs("label",{children:["Fecha de nacimiento ",ie!=null&&e.jsxs("span",{className:"cp-edad",children:["· ",ie," años"]})]}),e.jsxs("div",{className:"cp-fecha",children:[e.jsx($,{value:y.d,onChange:a=>K({d:a}),options:Ne,placeholder:"Día","aria-label":"Día de nacimiento"}),e.jsx($,{value:y.m,onChange:a=>K({m:a}),options:Oe,placeholder:"Mes","aria-label":"Mes de nacimiento"}),e.jsx($,{value:y.a,onChange:a=>K({a}),options:we,placeholder:"Año","aria-label":"Año de nacimiento"})]})]}),e.jsxs("div",{className:"cp-grid2",children:[e.jsxs("div",{className:"cp-field",children:[e.jsx("label",{children:"Estado"}),e.jsx($,{value:p,onChange:a=>{T(a),F(""),x(""),G("")},options:$e,placeholder:"Selecciona…"})]}),e.jsxs("div",{className:"cp-field",children:[e.jsx("label",{children:"Ciudad / Municipio"}),e.jsx($,{value:j,onChange:F,options:xe,placeholder:p?"Escribe o elige tu municipio":"Primero elige tu estado",textoVacio:p?"Sin resultados":"Primero elige tu estado"})]})]}),e.jsxs("div",{className:"cp-field",children:[e.jsx("label",{children:"Nivel educativo actual"}),e.jsx($,{value:P,onChange:i,options:Re.map(a=>({value:a.v,label:a.label})),placeholder:"Selecciona…"})]}),e.jsxs("div",{className:"cp-field cp-autocomplete",children:[e.jsx("label",{children:"Institución educativa"}),e.jsx("input",{value:s,onChange:a=>{x(a.target.value),G(""),Y(!0)},onFocus:()=>Y(!0),onBlur:()=>setTimeout(()=>Y(!1),150),placeholder:j?"Elige tu escuela, o busca por nombre o CCT":"Escribe el nombre o la CCT de tu escuela",autoComplete:"off"}),he&&te.length>0&&e.jsx("ul",{className:"cp-sug",children:te.map(a=>e.jsxs("li",{onMouseDown:()=>{x(a.nombre),G(a.cct),Y(!1)},children:[e.jsx("span",{className:"cp-sug-nombre",children:a.nombre}),e.jsx("span",{className:"cp-sug-meta",children:(()=>{const r=["servicio","nivel","municipio","localidad","turno"],t=new Set(["cct","nombre","id","estado","created_at","updated_at",...r]),n=[];for(const f of r){const h=a[f];h!=null&&String(h).trim()!==""&&n.push(ee(String(h)))}for(const[f,h]of Object.entries(a||{})){if(n.length>=4)break;t.has(String(f).toLowerCase())||h==null||typeof h=="object"||String(h).trim()===""||n.push(ee(String(h)))}return n.length?n.join(" · "):a.cct})()})]},a.cct))})]}),e.jsxs("div",{className:"cp-contactos",children:[e.jsxs("span",{className:"cp-contactos-tit",children:["Contactos de emergencia ",e.jsx("span",{className:"cp-hint",children:"(opcional, hasta 2)"})]}),B.map((a,r)=>e.jsxs("div",{className:"cp-contacto",children:[e.jsxs("div",{className:"cp-contacto-campos",children:[e.jsx("input",{value:a.nombre,onChange:t=>X(r,"nombre",t.target.value),placeholder:"Nombre"}),e.jsx("input",{value:a.telefono,onChange:t=>X(r,"telefono",t.target.value),placeholder:"Teléfono",inputMode:"numeric"}),e.jsx("input",{value:a.parentesco,onChange:t=>X(r,"parentesco",t.target.value),placeholder:"Parentesco (madre, tío…)"})]}),e.jsx("button",{type:"button",className:"cp-contacto-x",onClick:()=>je(r),"aria-label":"Quitar contacto",children:e.jsx(Me,{size:16,"aria-hidden":"true"})})]},r)),B.length<2&&e.jsxs("button",{type:"button",className:"cp-agregar",onClick:be,children:[e.jsx(Ae,{size:15,"aria-hidden":"true"})," Agregar contacto"]})]})]}),d&&e.jsxs("div",{className:"cp-error",children:[e.jsx(ke,{size:15,"aria-hidden":"true"})," ",e.jsx("span",{children:d})]}),e.jsxs("button",{type:"submit",className:"cp-submit",disabled:I,children:[I&&e.jsx("span",{className:"cp-spinner cp-spinner-w"}),I?"Guardando…":"Guardar y continuar"]})]})]})})})]})}const Be=`
.cp-root { min-height: 100vh; min-height: 100dvh; background: var(--fx-surface-sunken);
  color: var(--fx-text-body); font-family: var(--fx-font-body);
  display: flex; align-items: flex-start; justify-content: center; padding: 48px 16px; }
.cp-root * { box-sizing: border-box; }
.cp-card { width: 100%; max-width: 580px; background: var(--fx-surface); border: 1px solid var(--fx-border);
  border-radius: var(--fx-radius-xl); padding: 36px 34px; box-shadow: var(--fx-shadow-float); }
.cp-loading { display: flex; align-items: center; gap: 10px; color: var(--fx-text-muted); justify-content: center; padding: 30px; }
.cp-head { margin-bottom: 24px; }
.cp-volver { display: inline-flex; align-items: center; gap: 6px; background: none; border: none; cursor: pointer;
  color: var(--fx-text-muted); font-family: inherit; font-size: var(--fx-small-size); font-weight: 600;
  padding: 0; margin-bottom: 12px; }
.cp-volver:hover { color: var(--fx-text-heading); }
.cp-eyebrow { display: block; font-family: var(--fx-font-mono); font-size: var(--fx-caption-size);
  letter-spacing: .16em; text-transform: uppercase; color: var(--fx-primary-600); font-weight: 700; }
.cp-title { font-family: var(--fx-font-heading); font-size: clamp(24px, 4vw, 30px); font-weight: 600;
  color: var(--fx-text-heading); line-height: 1.12; margin: .4rem 0; letter-spacing: -0.02em; }
.cp-sub { font-size: var(--fx-body-size); color: var(--fx-text-muted); line-height: 1.5; margin: 0; }

/* Paso de tipo */
.cp-tipos { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
.cp-tipo { display: flex; flex-direction: column; align-items: flex-start; gap: 6px; text-align: left;
  background: var(--fx-surface); border: 1.5px solid var(--fx-border); border-radius: var(--fx-radius-lg);
  padding: 20px 18px; cursor: pointer; font-family: inherit; transition: border-color var(--fx-transition), background var(--fx-transition); }
.cp-tipo:hover { border-color: var(--fx-primary-300); }
.cp-tipo-on { border-color: var(--fx-primary-500); background: var(--fx-primary-50); }
.cp-tipo-ic { display: grid; place-items: center; width: 44px; height: 44px; border-radius: var(--fx-radius-md);
  background: var(--fx-primary-50); color: var(--fx-primary-700); margin-bottom: 4px; }
.cp-tipo-tit { font-family: var(--fx-font-heading); font-weight: 600; font-size: var(--fx-h5-size); color: var(--fx-text-heading); }
.cp-tipo-txt { font-size: var(--fx-small-size); color: var(--fx-text-muted); line-height: 1.45; }

/* Formulario */
.cp-form { display: flex; flex-direction: column; gap: 1rem; }
.cp-avatar-row { display: flex; align-items: center; gap: 16px; padding-bottom: 4px; }
.cp-avatar { width: 76px; height: 76px; border-radius: 50%; flex-shrink: 0; cursor: pointer; overflow: hidden;
  border: 2px dashed var(--fx-border-strong); display: grid; place-items: center; background: var(--fx-surface-sunken); }
.cp-avatar img { width: 100%; height: 100%; object-fit: cover; }
.cp-avatar-ph { font-size: 1.8rem; color: var(--fx-text-muted); }
.cp-avatar-txt { display: flex; flex-direction: column; gap: 4px; }
.cp-avatar-btn { align-self: flex-start; background: var(--fx-surface-sunken); border: 1px solid var(--fx-border);
  border-radius: var(--fx-radius-md); padding: 8px 14px; font-size: var(--fx-small-size); font-weight: 600;
  color: var(--fx-text-body); cursor: pointer; font-family: inherit; }
.cp-avatar-btn:hover { border-color: var(--fx-border-strong); color: var(--fx-text-heading); }
.cp-hint { font-size: var(--fx-caption-size); color: var(--fx-text-muted); }

.cp-grid2 { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
@media (max-width: 480px) { .cp-grid2 { grid-template-columns: 1fr; } .cp-tipos { grid-template-columns: 1fr; } }
.cp-field { display: flex; flex-direction: column; gap: .4rem; position: relative; }
.cp-field label { font-size: var(--fx-caption-size); letter-spacing: .08em; text-transform: uppercase;
  color: var(--fx-text-muted); font-weight: 700; }
.cp-edad { color: var(--fx-primary-600); text-transform: none; letter-spacing: 0; }
.cp-field input, .cp-field select { width: 100%; min-height: var(--fx-control-md); padding: 10px 13px;
  background: var(--fx-surface); border: 1px solid var(--fx-border); border-radius: var(--fx-radius-md);
  color: var(--fx-text-heading); font-family: inherit; font-size: var(--fx-small-size); outline: none;
  transition: border-color var(--fx-transition), box-shadow var(--fx-transition); }
.cp-field input:focus, .cp-field select:focus { border-color: var(--fx-primary-400); box-shadow: var(--fx-focus-ring); }
.cp-field input::placeholder { color: var(--fx-text-disabled); }

.cp-autocomplete { position: relative; }
.cp-sug { position: absolute; top: 100%; left: 0; right: 0; z-index: 10; margin-top: 4px; list-style: none;
  padding: 4px; background: var(--fx-surface); border: 1px solid var(--fx-border);
  border-radius: var(--fx-radius-md); box-shadow: var(--fx-shadow-float); max-height: 260px; overflow-y: auto; }
.cp-sug li { min-height: 44px; justify-content: center; padding: 8px 10px; border-radius: var(--fx-radius-sm); cursor: pointer; display: flex; flex-direction: column; gap: 2px; }
.cp-sug li:hover { background: var(--fx-surface-sunken); }
.cp-sug-nombre { font-size: var(--fx-small-size); color: var(--fx-text-heading); }
.cp-sug-meta { font-size: var(--fx-caption-size); color: var(--fx-text-muted); }

/* Contactos de emergencia */
.cp-contactos { display: flex; flex-direction: column; gap: 10px; border-top: 1px solid var(--fx-border); padding-top: 16px; }
.cp-contactos-tit { font-size: var(--fx-caption-size); letter-spacing: .08em; text-transform: uppercase;
  color: var(--fx-text-muted); font-weight: 700; }
.cp-contacto { display: flex; align-items: flex-start; gap: 8px; }
.cp-contacto-campos { flex: 1; min-width: 0; display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }
.cp-contacto-campos input:last-child { grid-column: 1 / -1; }
.cp-contacto-campos input { min-width: 0; min-height: var(--fx-control-md); padding: 10px 13px; background: var(--fx-surface);
  border: 1px solid var(--fx-border); border-radius: var(--fx-radius-md); color: var(--fx-text-heading);
  font-family: inherit; font-size: var(--fx-small-size); outline: none; }
.cp-contacto-campos input:focus { border-color: var(--fx-primary-400); box-shadow: var(--fx-focus-ring); }
.cp-contacto-x { display: grid; place-items: center; width: var(--fx-control-md); height: var(--fx-control-md);
  flex: none; background: none; border: 1px solid var(--fx-border); border-radius: var(--fx-radius-md);
  color: var(--fx-text-muted); cursor: pointer; }
.cp-contacto-x:hover { color: var(--fx-error-text); border-color: var(--fx-error-border); }
.cp-agregar { display: inline-flex; align-items: center; gap: 7px; align-self: flex-start; background: none;
  border: 1px solid var(--fx-border); border-radius: var(--fx-radius-md); padding: 8px 14px;
  color: var(--fx-primary-700); font-family: inherit; font-size: var(--fx-small-size); font-weight: 600; cursor: pointer; }
.cp-agregar:hover { background: var(--fx-primary-50); border-color: var(--fx-primary-200); }

.cp-error { display: flex; align-items: center; gap: 8px; font-size: var(--fx-small-size);
  color: var(--fx-error-text); background: var(--fx-error-bg); border: 1px solid var(--fx-error-border);
  border-radius: var(--fx-radius-md); padding: .6rem .8rem; }
.cp-error svg { flex: none; }
.cp-submit { display: inline-flex; align-items: center; justify-content: center; gap: .5rem; width: 100%;
  min-height: 48px; background: var(--fx-primary-500); border: none; border-radius: var(--fx-radius-md);
  color: var(--fx-text-on-primary); font-family: inherit; font-size: 1rem; font-weight: 600; cursor: pointer;
  transition: background var(--fx-transition); }
.cp-submit:hover:not(:disabled) { background: var(--fx-primary-600); }
.cp-submit:disabled { opacity: .6; cursor: default; }
/* iOS hace auto-zoom al enfocar controles de menos de 16px: en teléfono van a 16px. */
@media (max-width: 480px) {
  .cp-field input, .cp-contacto-campos input, .cp-sug-nombre { font-size: 16px; }
}
.cp-fecha { display: grid; grid-template-columns: 1fr 1.2fr 1fr; gap: 8px; }
@media (max-width: 480px) {
  .cp-root { padding: 24px 12px; }
  .cp-card { padding: 24px 18px; }
  .cp-fecha .combo-entrada { padding: 10px 30px 10px 10px; }
  .cp-fecha .combo-flecha { width: 26px; right: 4px; }
}
.cp-spinner { width: 18px; height: 18px; border: 2px solid color-mix(in srgb, var(--fx-primary-500) 30%, transparent);
  border-top-color: var(--fx-primary-500); border-radius: 50%; animation: cp-spin .6s linear infinite; }
.cp-spinner-w { border-color: color-mix(in srgb, var(--fx-text-on-primary) 40%, transparent); border-top-color: var(--fx-text-on-primary); }
@keyframes cp-spin { to { transform: rotate(360deg); } }
`;export{Xe as default};
