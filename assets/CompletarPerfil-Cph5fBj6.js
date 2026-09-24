import{c as de,r as o,j as e,a as ze,u as Se,s as g,X as ke}from"./index-ItuEt5-S.js";import{C as Ee}from"./chevron-down-DUUEXl6A.js";import{G as _e,U as De}from"./users-fH3O7222.js";import{T as Me}from"./trash-2-D00CW0zW.js";import{P as Ae}from"./plus-D_JYjESI.js";const Te=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],Fe=de("arrow-left",Te);const Pe=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],$e=de("check",Pe),Le=["Aguascalientes","Baja California","Baja California Sur","Campeche","Chiapas","Chihuahua","Ciudad de México","Coahuila","Colima","Durango","Estado de México","Guanajuato","Guerrero","Hidalgo","Jalisco","Michoacán","Morelos","Nayarit","Nuevo León","Oaxaca","Puebla","Querétaro","Quintana Roo","San Luis Potosí","Sinaloa","Sonora","Tabasco","Tamaulipas","Tlaxcala","Veracruz","Yucatán","Zacatecas"];function ee(l){return(l||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase()}function L({value:l,onChange:f,options:h=[],placeholder:v="Selecciona…",disabled:C=!1,textoVacio:I="Sin resultados",...G}){const[d,c]=o.useState(!1),[O,y]=o.useState(l||""),[u,z]=o.useState(-1),S=o.useRef(null),D=o.useRef(null),w=`combo-lista-${o.useId().replace(/[^a-zA-Z0-9]/g,"")}`,k=o.useMemo(()=>(h||[]).map(i=>typeof i=="string"?{value:i,label:i}:i),[h]),M=o.useMemo(()=>{const i=k.find(s=>s.value===l);return i?i.label:l||""},[k,l]),p=o.useMemo(()=>{const i=ee(O);return i?k.filter(s=>ee(s.label).includes(i)||ee(s.value).includes(i)):k},[k,O]);function T(){C||(y(""),z(-1),c(!0),requestAnimationFrame(()=>{D.current?.focus()}))}function b(i=!0){c(!1),z(-1),i&&y(M)}function F(i){f(i.value),y(i.label),c(!1),z(-1),D.current?.blur()}o.useEffect(()=>{if(!d)return;const i=s=>{S.current&&!S.current.contains(s.target)&&b(!0)};return document.addEventListener("mousedown",i),document.addEventListener("touchstart",i,{passive:!0}),()=>{document.removeEventListener("mousedown",i),document.removeEventListener("touchstart",i)}},[d]),o.useEffect(()=>{d||y(M)},[M,d]),o.useEffect(()=>{!d||u<0||document.getElementById(`${w}-op-${u}`)?.scrollIntoView({block:"nearest"})},[d,u,w]);const[N,P]=o.useState(0);o.useEffect(()=>{if(!d){P(0);return}const i=window.matchMedia("(max-width: 480px)").matches,s=window.visualViewport;if(!i||!s)return;const m=()=>{P(Math.max(0,window.innerHeight-s.height-(s.offsetTop||0)))};return m(),s.addEventListener("resize",m),s.addEventListener("scroll",m),()=>{s.removeEventListener("resize",m),s.removeEventListener("scroll",m)}},[d]);function $(i){if(i.key==="ArrowDown"||i.key==="ArrowUp"){if(i.preventDefault(),!d){T();return}const s=i.key==="ArrowDown"?1:-1;z(m=>{if(p.length===0)return-1;const E=m+s;return E<0?p.length-1:E>=p.length?0:E})}else i.key==="Enter"?d&&u>=0&&p[u]&&(i.preventDefault(),F(p[u])):i.key==="Escape"&&(i.preventDefault(),b(!0),D.current?.blur())}return e.jsxs("div",{className:"combo",ref:S,children:[e.jsx("style",{children:Ie}),e.jsx("input",{ref:D,className:"combo-entrada",...G,role:"combobox","aria-expanded":d,"aria-controls":w,"aria-activedescendant":u>=0?`${w}-op-${u}`:void 0,"aria-autocomplete":"list",value:d?O:M,placeholder:v,disabled:C,autoComplete:"off",onFocus:()=>{d||T()},onChange:i=>{y(i.target.value),z(-1),d||c(!0)},onKeyDown:$}),e.jsx("button",{type:"button",className:"combo-flecha",tabIndex:-1,"aria-hidden":"true",disabled:C,onClick:()=>d?b(!0):T(),children:e.jsx(Ee,{size:18,className:d?"combo-flecha-arriba":""})}),d&&e.jsx("div",{className:"combo-desplegable",style:N>0?{bottom:12+N}:void 0,children:e.jsx("ul",{className:"combo-lista",role:"listbox",id:w,children:p.length===0?e.jsx("li",{className:"combo-vacio",role:"presentation",children:I}):p.map((i,s)=>{const m=i.value===l;return e.jsxs("li",{id:`${w}-op-${s}`,role:"option","aria-selected":m,className:`combo-opcion${s===u?" combo-opcion-resaltada":""}${m?" combo-opcion-elegida":""}`,onMouseDown:E=>{E.preventDefault(),F(i)},children:[e.jsx("span",{children:i.label}),m&&e.jsx($e,{size:16,"aria-hidden":"true"})]},i.value)})})})]})}const Ie=`
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
`,Oe=[{v:"primaria",label:"Educación Básica (Primaria)"},{v:"secundaria",label:"Educación Básica (Secundaria)"},{v:"media_superior",label:"Educación Media Superior (Preparatoria/Bachillerato)"},{v:"superior",label:"Educación Superior"}],Re=[{value:"01",label:"Ene"},{value:"02",label:"Feb"},{value:"03",label:"Mar"},{value:"04",label:"Abr"},{value:"05",label:"May"},{value:"06",label:"Jun"},{value:"07",label:"Jul"},{value:"08",label:"Ago"},{value:"09",label:"Sep"},{value:"10",label:"Oct"},{value:"11",label:"Nov"},{value:"12",label:"Dic"}],qe=["Puebla","Veracruz","Estado de México","Ciudad de México"],J=l=>(l||"").toLowerCase().replace(/(^|\s|-)([a-záéíóúñ])/g,(f,h,v)=>h+v.toUpperCase());function ae(l){if(!l)return null;const f=new Date,h=new Date(l);let v=f.getFullYear()-h.getFullYear();const C=f.getMonth()-h.getMonth();return(C<0||C===0&&f.getDate()<h.getDate())&&v--,v>=0&&v<120?v:null}function Ge(l,f){if(l==="primaria")return"primaria";if(l==="secundaria")return"secundaria";if(l==="media_superior")return"prepa";if(l==="superior")return"universidad";const h=ae(f);return h!=null&&h<12?"primaria":"secundaria"}const Ue={nombre:"",telefono:"",parentesco:""};function Xe(){ze();const l=Se(),[f,h]=o.useState(null),[v,C]=o.useState(!0),[I,G]=o.useState(!1),[d,c]=o.useState(""),[O,y]=o.useState("tipo"),[u,z]=o.useState(null),[S,D]=o.useState(""),[R,w]=o.useState(""),[k,M]=o.useState(""),[p,T]=o.useState(""),[b,F]=o.useState(""),[N,P]=o.useState(""),[$,i]=o.useState(""),[s,m]=o.useState(""),[E,U]=o.useState(""),[B,V]=o.useState([]),[Q,pe]=o.useState(""),[q,ue]=o.useState(null),[fe,me]=o.useState(""),H=o.useRef(null),[xe,re]=o.useState([]),[te,X]=o.useState([]),[he,Y]=o.useState(!1);o.useEffect(()=>{let a=!1;return g.auth.getSession().then(async({data:{session:t}})=>{if(a)return;if(!t){l("/login?dest=completar-perfil");return}h(t.user.id);const{data:r}=await g.from("profiles").select("nombre, apellidos, telefono, estado, ciudad, fecha_nacimiento, nivel_educativo, institucion, institucion_cct, avatar_url, tipo_solicitado").eq("id",t.user.id).single();if(a)return;if(r){D(r.nombre||""),w(r.apellidos||""),M(r.telefono||""),T(r.estado||"Puebla"),F(r.ciudad||"Tecamachalco"),P(r.fecha_nacimiento||"");{const x=/^(\d{4})-(\d{2})-(\d{2})$/.exec(r.fecha_nacimiento||"");x&&ne({d:x[3],m:x[2],a:x[1]})}i(r.nivel_educativo||""),m(r.institucion||""),U(r.institucion_cct||""),pe(r.avatar_url||""),r.tipo_solicitado&&(z(r.tipo_solicitado),y("form"))}const{data:n}=await g.from("alumnos").select("id").eq("profile_id",t.user.id).maybeSingle();if(n){const{data:x}=await g.from("contactos_emergencia").select("nombre, telefono, relacion, orden").eq("alumno_id",n.id).order("orden");!a&&x&&V(x.map(A=>({nombre:A.nombre,telefono:A.telefono,parentesco:A.relacion})))}C(!1)}),()=>{a=!0}},[l]),o.useEffect(()=>{if(!p){re([]);return}let a=!1;return g.rpc("municipios_por_estado",{p_estado:p}).then(({data:t})=>{a||re((t||[]).map(r=>J(r.municipio)))}),()=>{a=!0}},[p]),o.useEffect(()=>{if(!p){X([]);return}const a=s.trim(),t=b.trim();if(!t&&a.length<3){X([]);return}const r=setTimeout(async()=>{const{data:n}=await g.rpc("buscar_escuelas",{p_estado:p,p_municipio:t||null,p_q:a.length>=2?a:null});X(n||[])},250);return()=>clearTimeout(r)},[s,p,b]);const ge=a=>{const t=a.target.files?.[0];if(t){if(t.size>3*1024*1024){c("La imagen no debe superar 3 MB.");return}c(""),ue(t),me(URL.createObjectURL(t))}},ve=o.useCallback(async()=>{if(!q||!f)return Q;const a=(q.name.split(".").pop()||"jpg").toLowerCase(),t=`${f}/${Date.now()}.${a}`,{error:r}=await g.storage.from("avatars").upload(t,q,{contentType:q.type,upsert:!1});if(r)throw r;const{data:n}=g.storage.from("avatars").getPublicUrl(t);return n.publicUrl},[q,f,Q]);function oe(a){z(a),c(""),y("form")}function Z(a,t,r){V(n=>n.map((x,A)=>A===a?{...x,[t]:r}:x))}const be=()=>V(a=>a.length<2?[...a,{...Ue}]:a),je=a=>V(t=>t.filter((r,n)=>n!==a));async function ye(a){if(a.preventDefault(),c(""),!S.trim()){c("Ingresa tu nombre.");return}if(!R.trim()){c("Ingresa tus apellidos.");return}const t=k.replace(/\D/g,"");if(t.length!==10){c("El teléfono debe tener 10 dígitos.");return}if(u==="alumno"){if(!p){c("Selecciona tu estado.");return}if(!b.trim()){c("Ingresa tu ciudad.");return}if(!N){c("Ingresa tu fecha de nacimiento.");return}const r=ae(N);if(r==null||r<8||r>100){c("Revisa tu fecha de nacimiento: la edad no es válida.");return}if(!$){c("Selecciona tu nivel educativo actual.");return}if(!s.trim()){c("Ingresa tu institución educativa.");return}if(qe.includes(p)&&!E){c("Elige tu escuela de la lista de sugerencias (debe estar en el catálogo).");return}for(const n of B)if(n.nombre.trim()||n.telefono.trim()||n.parentesco.trim()){if(!n.nombre.trim()||!n.telefono.trim()||!n.parentesco.trim()){c("Completa nombre, teléfono y parentesco de cada contacto de emergencia.");return}if(n.telefono.replace(/\D/g,"").length!==10){c("El teléfono de un contacto de emergencia debe tener 10 dígitos.");return}}}G(!0);try{const r=await ve(),n={nombre:S.trim(),apellidos:R.trim(),telefono:t,avatar_url:r||null,perfil_completo:!0,tipo_solicitado:u};u==="alumno"&&Object.assign(n,{estado:p,ciudad:b.trim(),fecha_nacimiento:N,nivel_educativo:$,institucion:s.trim(),institucion_cct:E||null});const{error:x}=await g.from("profiles").update(n).eq("id",f);if(x)throw x;if(u==="alumno"){const A=Ge($,N),{error:se}=await g.from("alumnos").upsert({id:f,profile_id:f,nombre:S.trim(),apellidos:R.trim(),fecha_nacimiento:N,email:null,telefono:t,nivel:A},{onConflict:"id"});if(se)throw se;const{error:ce}=await g.from("contactos_emergencia").delete().eq("alumno_id",f);if(ce)throw ce;const le=B.filter(_=>_.nombre.trim()).map((_,Ce)=>({alumno_id:f,nombre:_.nombre.trim(),telefono:_.telefono.replace(/\D/g,""),relacion:_.parentesco.trim(),orden:Ce+1}));if(le.length){const{error:_}=await g.from("contactos_emergencia").insert(le);if(_)throw _}}l("/cuenta-pendiente")}catch(r){console.error(r);const n=r?.message||r?.error_description||r?.details||"";c(n?`No se pudo guardar tu perfil: ${n}`:"No se pudo guardar tu perfil. Intenta de nuevo."),G(!1)}}const ie=ae(N),K=fe||Q,[j,ne]=o.useState({d:"",m:"",a:""}),we=o.useMemo(()=>{const a=new Date().getFullYear()-8,t=[];for(let r=a;r>=a-92;r--)t.push(String(r));return t},[]),Ne=o.useMemo(()=>{const a=j.m&&j.a?new Date(Number(j.a),Number(j.m),0).getDate():31,t=[];for(let r=1;r<=a;r++)t.push(String(r).padStart(2,"0"));return t},[j.m,j.a]);function W(a){const t={...j,...a};if(ne(t),!t.d||!t.m||!t.a){P("");return}const r=new Date(Number(t.a),Number(t.m),0).getDate(),n=String(Math.min(Number(t.d),r)).padStart(2,"0");P(`${t.a}-${t.m}-${n}`)}return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:Be}),e.jsx("div",{className:"cp-root",children:e.jsx("div",{className:"cp-card",children:v?e.jsxs("div",{className:"cp-loading",children:[e.jsx("span",{className:"cp-spinner"})," Cargando…"]}):O==="tipo"?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"cp-head",children:[e.jsx("span",{className:"cp-eyebrow",children:"Casi listo"}),e.jsx("h1",{className:"cp-title",children:"¿Qué tipo de cuenta es?"}),e.jsx("p",{className:"cp-sub",children:"Elige una opción para continuar. El administrador revisará tu solicitud."})]}),e.jsxs("div",{className:"cp-tipos",children:[e.jsxs("button",{type:"button",className:`cp-tipo${u==="alumno"?" cp-tipo-on":""}`,onClick:()=>oe("alumno"),children:[e.jsx("span",{className:"cp-tipo-ic",children:e.jsx(_e,{size:24,"aria-hidden":"true"})}),e.jsx("span",{className:"cp-tipo-tit",children:"Alumno"}),e.jsx("span",{className:"cp-tipo-txt",children:"Voy a tomar clases y quiero ver mi avance."})]}),e.jsxs("button",{type:"button",className:`cp-tipo${u==="tutor"?" cp-tipo-on":""}`,onClick:()=>oe("tutor"),children:[e.jsx("span",{className:"cp-tipo-ic",children:e.jsx(De,{size:24,"aria-hidden":"true"})}),e.jsx("span",{className:"cp-tipo-tit",children:"Tutor"}),e.jsx("span",{className:"cp-tipo-txt",children:"Acompaño a uno o varios alumnos."})]})]})]}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"cp-head",children:[e.jsxs("button",{type:"button",className:"cp-volver",onClick:()=>y("tipo"),children:[e.jsx(Fe,{size:15,"aria-hidden":"true"})," Cambiar tipo"]}),e.jsx("span",{className:"cp-eyebrow",children:"Casi listo"}),e.jsx("h1",{className:"cp-title",children:u==="alumno"?"Completa tu perfil de alumno":"Completa tu perfil de tutor"}),e.jsx("p",{className:"cp-sub",children:u==="alumno"?"Necesitamos estos datos para personalizar tu preparación.":"Solo lo básico para identificarte."})]}),e.jsxs("form",{className:"cp-form",onSubmit:ye,children:[e.jsxs("div",{className:"cp-avatar-row",children:[e.jsx("div",{className:"cp-avatar",onClick:()=>H.current?.click(),children:K?e.jsx("img",{src:K,alt:"avatar"}):e.jsx("span",{className:"cp-avatar-ph",children:"＋"})}),e.jsxs("div",{className:"cp-avatar-txt",children:[e.jsx("button",{type:"button",className:"cp-avatar-btn",onClick:()=>H.current?.click(),children:K?"Cambiar foto":"Subir foto"}),e.jsx("span",{className:"cp-hint",children:"JPG o PNG, máx. 3 MB"})]}),e.jsx("input",{ref:H,type:"file",accept:"image/*",hidden:!0,onChange:ge})]}),e.jsxs("div",{className:"cp-grid2",children:[e.jsxs("div",{className:"cp-field",children:[e.jsx("label",{children:"Nombre(s)"}),e.jsx("input",{value:S,onChange:a=>D(a.target.value),placeholder:"Ej. Ana"})]}),e.jsxs("div",{className:"cp-field",children:[e.jsx("label",{children:"Apellidos"}),e.jsx("input",{value:R,onChange:a=>w(a.target.value),placeholder:"Ej. López García"})]})]}),e.jsxs("div",{className:"cp-field",children:[e.jsx("label",{children:"Teléfono (WhatsApp)"}),e.jsx("input",{type:"tel",value:k,onChange:a=>M(a.target.value),placeholder:"Ej. 2221234567"})]}),u==="alumno"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"cp-field",children:[e.jsxs("label",{children:["Fecha de nacimiento ",ie!=null&&e.jsxs("span",{className:"cp-edad",children:["· ",ie," años"]})]}),e.jsxs("div",{className:"cp-fecha",children:[e.jsx(L,{value:j.d,onChange:a=>W({d:a}),options:Ne,placeholder:"Día","aria-label":"Día de nacimiento"}),e.jsx(L,{value:j.m,onChange:a=>W({m:a}),options:Re,placeholder:"Mes","aria-label":"Mes de nacimiento"}),e.jsx(L,{value:j.a,onChange:a=>W({a}),options:we,placeholder:"Año","aria-label":"Año de nacimiento"})]})]}),e.jsxs("div",{className:"cp-grid2",children:[e.jsxs("div",{className:"cp-field",children:[e.jsx("label",{children:"Estado"}),e.jsx(L,{value:p,onChange:a=>{T(a),F(""),m(""),U("")},options:Le,placeholder:"Selecciona…"})]}),e.jsxs("div",{className:"cp-field",children:[e.jsx("label",{children:"Ciudad / Municipio"}),e.jsx(L,{value:b,onChange:F,options:xe,placeholder:p?"Escribe o elige tu municipio":"Primero elige tu estado",textoVacio:p?"Sin resultados":"Primero elige tu estado"})]})]}),e.jsxs("div",{className:"cp-field",children:[e.jsx("label",{children:"Nivel educativo actual"}),e.jsx(L,{value:$,onChange:i,options:Oe.map(a=>({value:a.v,label:a.label})),placeholder:"Selecciona…"})]}),e.jsxs("div",{className:"cp-field cp-autocomplete",children:[e.jsx("label",{children:"Institución educativa"}),e.jsx("input",{value:s,onChange:a=>{m(a.target.value),U(""),Y(!0)},onFocus:()=>Y(!0),onBlur:()=>setTimeout(()=>Y(!1),150),placeholder:b?"Elige tu escuela, o busca por nombre o CCT":"Escribe el nombre o la CCT de tu escuela",autoComplete:"off"}),he&&te.length>0&&e.jsx("ul",{className:"cp-sug",children:te.map(a=>e.jsxs("li",{onMouseDown:()=>{m(a.nombre),U(a.cct),Y(!1)},children:[e.jsx("span",{className:"cp-sug-nombre",children:a.nombre}),e.jsx("span",{className:"cp-sug-meta",children:(()=>{const t=[J(a.servicio),J(a.municipio),J(a.localidad)].filter(Boolean);return e.jsxs(e.Fragment,{children:[t.join(" · "),a.cct?e.jsx("span",{className:"cp-sug-cct",children:t.length?` · ${a.cct}`:a.cct}):null]})})()})]},a.cct))})]}),e.jsxs("div",{className:"cp-contactos",children:[e.jsxs("span",{className:"cp-contactos-tit",children:["Contactos de emergencia ",e.jsx("span",{className:"cp-hint",children:"(opcional, hasta 2)"})]}),B.map((a,t)=>e.jsxs("div",{className:"cp-contacto",children:[e.jsxs("div",{className:"cp-contacto-campos",children:[e.jsx("input",{value:a.nombre,onChange:r=>Z(t,"nombre",r.target.value),placeholder:"Nombre"}),e.jsx("input",{value:a.telefono,onChange:r=>Z(t,"telefono",r.target.value),placeholder:"Teléfono",inputMode:"numeric"}),e.jsx("input",{value:a.parentesco,onChange:r=>Z(t,"parentesco",r.target.value),placeholder:"Parentesco (madre, tío…)"})]}),e.jsx("button",{type:"button",className:"cp-contacto-x",onClick:()=>je(t),"aria-label":"Quitar contacto",children:e.jsx(Me,{size:16,"aria-hidden":"true"})})]},t)),B.length<2&&e.jsxs("button",{type:"button",className:"cp-agregar",onClick:be,children:[e.jsx(Ae,{size:15,"aria-hidden":"true"})," Agregar contacto"]})]})]}),d&&e.jsxs("div",{className:"cp-error",children:[e.jsx(ke,{size:15,"aria-hidden":"true"})," ",e.jsx("span",{children:d})]}),e.jsxs("button",{type:"submit",className:"cp-submit",disabled:I,children:[I&&e.jsx("span",{className:"cp-spinner cp-spinner-w"}),I?"Guardando…":"Guardar y continuar"]})]})]})})})]})}const Be=`
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
.cp-sug-cct { font-family: var(--fx-font-mono); color: var(--fx-primary-700); font-weight: 600; }

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
