import{c as fe,r as o,j as e,a as Ee,u as _e,s as b,X as Me}from"./index-DATqdMx1.js";import{C as De}from"./chevron-down-Dh5isyy4.js";import{G as Ae,U as Te}from"./users-D5NQ018z.js";import{T as Fe}from"./trash-2--LAJVmST.js";import{P as Pe}from"./plus-BbkGJZyx.js";const $e=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],ue=fe("arrow-left",$e);const Le=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Ie=fe("check",Le),Oe=["Aguascalientes","Baja California","Baja California Sur","Campeche","Chiapas","Chihuahua","Ciudad de México","Coahuila","Colima","Durango","Estado de México","Guanajuato","Guerrero","Hidalgo","Jalisco","Michoacán","Morelos","Nayarit","Nuevo León","Oaxaca","Puebla","Querétaro","Quintana Roo","San Luis Potosí","Sinaloa","Sonora","Tabasco","Tamaulipas","Tlaxcala","Veracruz","Yucatán","Zacatecas"];function ae(p){return(p||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase()}function L({value:p,onChange:h,options:c=[],placeholder:u="Selecciona…",disabled:E=!1,textoVacio:J="Sin resultados",...Q}){const[d,D]=o.useState(!1),[F,l]=o.useState(p||""),[j,z]=o.useState(-1),f=o.useRef(null),A=o.useRef(null),S=`combo-lista-${o.useId().replace(/[^a-zA-Z0-9]/g,"")}`,w=o.useMemo(()=>(c||[]).map(i=>typeof i=="string"?{value:i,label:i}:i),[c]),T=o.useMemo(()=>{const i=w.find(s=>s.value===p);return i?i.label:p||""},[w,p]),N=o.useMemo(()=>{const i=ae(F);return i?w.filter(s=>ae(s.label).includes(i)||ae(s.value).includes(i)):w},[w,F]);function P(){E||(l(""),z(-1),D(!0),requestAnimationFrame(()=>{A.current?.focus()}))}function m(i=!0){D(!1),z(-1),i&&l(T)}function O(i){h(i.value),l(i.label),D(!1),z(-1),A.current?.blur()}o.useEffect(()=>{if(!d)return;const i=s=>{f.current&&!f.current.contains(s.target)&&m(!0)};return document.addEventListener("mousedown",i),document.addEventListener("touchstart",i,{passive:!0}),()=>{document.removeEventListener("mousedown",i),document.removeEventListener("touchstart",i)}},[d]),o.useEffect(()=>{d||l(T)},[T,d]),o.useEffect(()=>{!d||j<0||document.getElementById(`${S}-op-${j}`)?.scrollIntoView({block:"nearest"})},[d,j,S]);const[k,$]=o.useState(0);o.useEffect(()=>{if(!d){$(0);return}const i=window.matchMedia("(max-width: 480px)").matches,s=window.visualViewport;if(!i||!s)return;const x=()=>{$(Math.max(0,window.innerHeight-s.height-(s.offsetTop||0)))};return x(),s.addEventListener("resize",x),s.addEventListener("scroll",x),()=>{s.removeEventListener("resize",x),s.removeEventListener("scroll",x)}},[d]);function _(i){if(i.key==="ArrowDown"||i.key==="ArrowUp"){if(i.preventDefault(),!d){P();return}const s=i.key==="ArrowDown"?1:-1;z(x=>{if(N.length===0)return-1;const y=x+s;return y<0?N.length-1:y>=N.length?0:y})}else i.key==="Enter"?d&&j>=0&&N[j]&&(i.preventDefault(),O(N[j])):i.key==="Escape"&&(i.preventDefault(),m(!0),A.current?.blur())}return e.jsxs("div",{className:"combo",ref:f,children:[e.jsx("style",{children:qe}),e.jsx("input",{ref:A,className:"combo-entrada",...Q,role:"combobox","aria-expanded":d,"aria-controls":S,"aria-activedescendant":j>=0?`${S}-op-${j}`:void 0,"aria-autocomplete":"list",value:d?F:T,placeholder:u,disabled:E,autoComplete:"off",onFocus:()=>{d||P()},onChange:i=>{l(i.target.value),z(-1),d||D(!0)},onKeyDown:_}),e.jsx("button",{type:"button",className:"combo-flecha",tabIndex:-1,"aria-hidden":"true",disabled:E,onClick:()=>d?m(!0):P(),children:e.jsx(De,{size:18,className:d?"combo-flecha-arriba":""})}),d&&e.jsx("div",{className:"combo-desplegable",style:k>0?{bottom:12+k}:void 0,children:e.jsx("ul",{className:"combo-lista",role:"listbox",id:S,children:N.length===0?e.jsx("li",{className:"combo-vacio",role:"presentation",children:J}):N.map((i,s)=>{const x=i.value===p;return e.jsxs("li",{id:`${S}-op-${s}`,role:"option","aria-selected":x,className:`combo-opcion${s===j?" combo-opcion-resaltada":""}${x?" combo-opcion-elegida":""}`,onMouseDown:y=>{y.preventDefault(),O(i)},children:[e.jsx("span",{children:i.label}),x&&e.jsx(Ie,{size:16,"aria-hidden":"true"})]},i.value)})})})]})}const qe=`
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
`,Ge=[{v:"primaria",label:"Educación Básica (Primaria)"},{v:"secundaria",label:"Educación Básica (Secundaria)"},{v:"media_superior",label:"Educación Media Superior (Preparatoria/Bachillerato)"},{v:"superior",label:"Educación Superior"}],Re=[{value:"01",label:"Ene"},{value:"02",label:"Feb"},{value:"03",label:"Mar"},{value:"04",label:"Abr"},{value:"05",label:"May"},{value:"06",label:"Jun"},{value:"07",label:"Jul"},{value:"08",label:"Ago"},{value:"09",label:"Sep"},{value:"10",label:"Oct"},{value:"11",label:"Nov"},{value:"12",label:"Dic"}],Ue=["Puebla","Veracruz","Estado de México","Ciudad de México"],Y=p=>(p||"").toLowerCase().replace(/(^|\s|-)([a-záéíóúñ])/g,(h,c,u)=>c+u.toUpperCase());function re(p){if(!p)return null;const h=new Date,c=new Date(p);let u=h.getFullYear()-c.getFullYear();const E=h.getMonth()-c.getMonth();return(E<0||E===0&&h.getDate()<c.getDate())&&u--,u>=0&&u<120?u:null}function Be(p,h){if(p==="primaria")return"primaria";if(p==="secundaria")return"secundaria";if(p==="media_superior")return"prepa";if(p==="superior")return"universidad";const c=re(h);return c!=null&&c<12?"primaria":"secundaria"}const Ve={nombre:"",telefono:"",parentesco:""};function Ke({modo:p="alta"}){Ee();const h=_e(),c=p==="editar",[u,E]=o.useState(null),[J,Q]=o.useState(!0),[d,D]=o.useState(!1),[F,l]=o.useState(""),[j,z]=o.useState(c?"form":"tipo"),[f,A]=o.useState(null),[I,S]=o.useState(""),[w,T]=o.useState(""),[N,P]=o.useState(""),[m,O]=o.useState(""),[k,$]=o.useState(""),[_,i]=o.useState(""),[s,x]=o.useState(""),[y,G]=o.useState(""),[te,R]=o.useState(""),[U,B]=o.useState([]),[H,me]=o.useState(""),[q,xe]=o.useState(null),[he,ge]=o.useState(""),X=o.useRef(null),[ve,oe]=o.useState([]),[ie,Z]=o.useState([]),[be,V]=o.useState(!1);o.useEffect(()=>{let a=!1;return b.auth.getSession().then(async({data:{session:t}})=>{if(a)return;if(!t){h(`/login?dest=${c?"mis-datos":"completar-perfil"}`);return}E(t.user.id);const{data:r}=await b.from("profiles").select("nombre, apellidos, telefono, estado, ciudad, fecha_nacimiento, nivel_educativo, institucion, institucion_cct, avatar_url, tipo_solicitado, rol").eq("id",t.user.id).single();if(a)return;if(r){S(r.nombre||""),T(r.apellidos||""),P(r.telefono||""),O(r.estado||"Puebla"),$(r.ciudad||"Tecamachalco"),i(r.fecha_nacimiento||"");{const v=/^(\d{4})-(\d{2})-(\d{2})$/.exec(r.fecha_nacimiento||"");v&&ce({d:v[3],m:v[2],a:v[1]})}x(r.nivel_educativo||""),G(r.institucion||""),R(r.institucion_cct||""),me(r.avatar_url||"");const g=r.tipo_solicitado||(c?r.rol==="tutor"?"tutor":"alumno":null);g&&(A(g),z("form"))}const{data:n}=await b.from("alumnos").select("id").eq("profile_id",t.user.id).maybeSingle();if(n){const{data:g}=await b.from("contactos_emergencia").select("nombre, telefono, relacion, orden").eq("alumno_id",n.id).order("orden");!a&&g&&B(g.map(v=>({nombre:v.nombre,telefono:v.telefono,parentesco:v.relacion})))}Q(!1)}),()=>{a=!0}},[h,c]),o.useEffect(()=>{if(!m){oe([]);return}let a=!1;return b.rpc("municipios_por_estado",{p_estado:m}).then(({data:t})=>{a||oe((t||[]).map(r=>Y(r.municipio)))}),()=>{a=!0}},[m]),o.useEffect(()=>{if(!m){Z([]);return}const a=y.trim(),t=k.trim();if(!t&&a.length<3){Z([]);return}const r=setTimeout(async()=>{const{data:n}=await b.rpc("buscar_escuelas",{p_estado:m,p_municipio:t||null,p_q:a.length>=2?a:null});Z(n||[])},250);return()=>clearTimeout(r)},[y,m,k]);const je=a=>{const t=a.target.files?.[0];if(t){if(t.size>3*1024*1024){l("La imagen no debe superar 3 MB.");return}l(""),xe(t),ge(URL.createObjectURL(t))}},ye=o.useCallback(async()=>{if(!q||!u)return H;const a=(q.name.split(".").pop()||"jpg").toLowerCase(),t=`${u}/${Date.now()}.${a}`,{error:r}=await b.storage.from("avatars").upload(t,q,{contentType:q.type,upsert:!1});if(r)throw r;const{data:n}=b.storage.from("avatars").getPublicUrl(t);return n.publicUrl},[q,u,H]);function ne(a){A(a),l(""),z("form")}function K(a,t,r){B(n=>n.map((g,v)=>v===a?{...g,[t]:r}:g))}const we=()=>B(a=>a.length<2?[...a,{...Ve}]:a),Ne=a=>B(t=>t.filter((r,n)=>n!==a));async function Ce(a){if(a.preventDefault(),l(""),!I.trim()){l("Ingresa tu nombre.");return}if(!w.trim()){l("Ingresa tus apellidos.");return}const t=N.replace(/\D/g,"");if(t.length!==10){l("El teléfono debe tener 10 dígitos.");return}if(f==="alumno"){if(!m){l("Selecciona tu estado.");return}if(!k.trim()){l("Ingresa tu ciudad.");return}if(!_){l("Ingresa tu fecha de nacimiento.");return}const r=re(_);if(r==null||r<8||r>100){l("Revisa tu fecha de nacimiento: la edad no es válida.");return}if(!s){l("Selecciona tu nivel educativo actual.");return}if(!y.trim()){l("Ingresa tu institución educativa.");return}if(Ue.includes(m)&&!te){l("Elige tu escuela de la lista de sugerencias (debe estar en el catálogo).");return}for(const n of U)if(n.nombre.trim()||n.telefono.trim()||n.parentesco.trim()){if(!n.nombre.trim()||!n.telefono.trim()||!n.parentesco.trim()){l("Completa nombre, teléfono y parentesco de cada contacto de emergencia.");return}if(n.telefono.replace(/\D/g,"").length!==10){l("El teléfono de un contacto de emergencia debe tener 10 dígitos.");return}}}D(!0);try{const r=await ye(),n={nombre:I.trim(),apellidos:w.trim(),telefono:t,avatar_url:r||null};c||Object.assign(n,{perfil_completo:!0,tipo_solicitado:f}),f==="alumno"&&Object.assign(n,{estado:m,ciudad:k.trim(),fecha_nacimiento:_,nivel_educativo:s,institucion:y.trim(),institucion_cct:te||null});const{error:g}=await b.from("profiles").update(n).eq("id",u);if(g)throw g;if(f==="alumno"){const v=Be(s,_),{error:le}=await b.from("alumnos").upsert({id:u,profile_id:u,nombre:I.trim(),apellidos:w.trim(),fecha_nacimiento:_,email:null,telefono:t,nivel:v},{onConflict:"id"});if(le)throw le;const{error:de}=await b.from("contactos_emergencia").delete().eq("alumno_id",u);if(de)throw de;const pe=U.filter(M=>M.nombre.trim()).map((M,ke)=>({alumno_id:u,nombre:M.nombre.trim(),telefono:M.telefono.replace(/\D/g,""),relacion:M.parentesco.trim(),orden:ke+1}));if(pe.length){const{error:M}=await b.from("contactos_emergencia").insert(pe);if(M)throw M}}h(c?f==="alumno"?"/alumno":"/tutor":"/cuenta-pendiente")}catch(r){console.error(r);const n=r?.message||r?.error_description||r?.details||"";l(n?`No se pudo guardar tu perfil: ${n}`:"No se pudo guardar tu perfil. Intenta de nuevo."),D(!1)}}const se=re(_),W=he||H,[C,ce]=o.useState({d:"",m:"",a:""}),ze=o.useMemo(()=>{const a=new Date().getFullYear()-8,t=[];for(let r=a;r>=a-92;r--)t.push(String(r));return t},[]),Se=o.useMemo(()=>{const a=C.m&&C.a?new Date(Number(C.a),Number(C.m),0).getDate():31,t=[];for(let r=1;r<=a;r++)t.push(String(r).padStart(2,"0"));return t},[C.m,C.a]);function ee(a){const t={...C,...a};if(ce(t),!t.d||!t.m||!t.a){i("");return}const r=new Date(Number(t.a),Number(t.m),0).getDate(),n=String(Math.min(Number(t.d),r)).padStart(2,"0");i(`${t.a}-${t.m}-${n}`)}return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:Ye}),e.jsx("div",{className:"cp-root",children:e.jsx("div",{className:"cp-card",children:J?e.jsxs("div",{className:"cp-loading",children:[e.jsx("span",{className:"cp-spinner"})," Cargando…"]}):j==="tipo"?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"cp-head",children:[e.jsx("span",{className:"cp-eyebrow",children:"Casi listo"}),e.jsx("h1",{className:"cp-title",children:"¿Qué tipo de cuenta es?"}),e.jsx("p",{className:"cp-sub",children:"Elige una opción para continuar. El administrador revisará tu solicitud."})]}),e.jsxs("div",{className:"cp-tipos",children:[e.jsxs("button",{type:"button",className:`cp-tipo${f==="alumno"?" cp-tipo-on":""}`,onClick:()=>ne("alumno"),children:[e.jsx("span",{className:"cp-tipo-ic",children:e.jsx(Ae,{size:24,"aria-hidden":"true"})}),e.jsx("span",{className:"cp-tipo-tit",children:"Alumno"}),e.jsx("span",{className:"cp-tipo-txt",children:"Voy a tomar clases y quiero ver mi avance."})]}),e.jsxs("button",{type:"button",className:`cp-tipo${f==="tutor"?" cp-tipo-on":""}`,onClick:()=>ne("tutor"),children:[e.jsx("span",{className:"cp-tipo-ic",children:e.jsx(Te,{size:24,"aria-hidden":"true"})}),e.jsx("span",{className:"cp-tipo-tit",children:"Tutor"}),e.jsx("span",{className:"cp-tipo-txt",children:"Acompaño a uno o varios alumnos."})]})]})]}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"cp-head",children:[c?e.jsxs("button",{type:"button",className:"cp-volver",onClick:()=>h(f==="alumno"?"/alumno":"/tutor"),children:[e.jsx(ue,{size:15,"aria-hidden":"true"})," Volver"]}):e.jsxs("button",{type:"button",className:"cp-volver",onClick:()=>z("tipo"),children:[e.jsx(ue,{size:15,"aria-hidden":"true"})," Cambiar tipo"]}),e.jsx("span",{className:"cp-eyebrow",children:c?"Mi cuenta":"Casi listo"}),e.jsx("h1",{className:"cp-title",children:c?f==="alumno"?"Edita tus datos de alumno":"Edita tus datos de tutor":f==="alumno"?"Completa tu perfil de alumno":"Completa tu perfil de tutor"}),e.jsx("p",{className:"cp-sub",children:c?"Corrige lo que haga falta. Los cambios se guardan en tu cuenta y en tu expediente.":f==="alumno"?"Necesitamos estos datos para personalizar tu preparación.":"Solo lo básico para identificarte."})]}),e.jsxs("form",{className:"cp-form",onSubmit:Ce,children:[e.jsxs("div",{className:"cp-avatar-row",children:[e.jsx("div",{className:"cp-avatar",onClick:()=>X.current?.click(),children:W?e.jsx("img",{src:W,alt:"avatar"}):e.jsx("span",{className:"cp-avatar-ph",children:"＋"})}),e.jsxs("div",{className:"cp-avatar-txt",children:[e.jsx("button",{type:"button",className:"cp-avatar-btn",onClick:()=>X.current?.click(),children:W?"Cambiar foto":"Subir foto"}),e.jsx("span",{className:"cp-hint",children:"JPG o PNG, máx. 3 MB"})]}),e.jsx("input",{ref:X,type:"file",accept:"image/*",hidden:!0,onChange:je})]}),e.jsxs("div",{className:"cp-grid2",children:[e.jsxs("div",{className:"cp-field",children:[e.jsx("label",{children:"Nombre(s)"}),e.jsx("input",{value:I,onChange:a=>S(a.target.value),placeholder:"Ej. Ana"})]}),e.jsxs("div",{className:"cp-field",children:[e.jsx("label",{children:"Apellidos"}),e.jsx("input",{value:w,onChange:a=>T(a.target.value),placeholder:"Ej. López García"})]})]}),e.jsxs("div",{className:"cp-field",children:[e.jsx("label",{children:"Teléfono (WhatsApp)"}),e.jsx("input",{type:"tel",value:N,onChange:a=>P(a.target.value),placeholder:"Ej. 2221234567"})]}),f==="alumno"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"cp-field",children:[e.jsxs("label",{children:["Fecha de nacimiento ",se!=null&&e.jsxs("span",{className:"cp-edad",children:["· ",se," años"]})]}),e.jsxs("div",{className:"cp-fecha",children:[e.jsx(L,{value:C.d,onChange:a=>ee({d:a}),options:Se,placeholder:"Día","aria-label":"Día de nacimiento"}),e.jsx(L,{value:C.m,onChange:a=>ee({m:a}),options:Re,placeholder:"Mes","aria-label":"Mes de nacimiento"}),e.jsx(L,{value:C.a,onChange:a=>ee({a}),options:ze,placeholder:"Año","aria-label":"Año de nacimiento"})]})]}),e.jsxs("div",{className:"cp-grid2",children:[e.jsxs("div",{className:"cp-field",children:[e.jsx("label",{children:"Estado"}),e.jsx(L,{value:m,onChange:a=>{O(a),$(""),G(""),R("")},options:Oe,placeholder:"Selecciona…"})]}),e.jsxs("div",{className:"cp-field",children:[e.jsx("label",{children:"Ciudad / Municipio"}),e.jsx(L,{value:k,onChange:$,options:ve,placeholder:m?"Escribe o elige tu municipio":"Primero elige tu estado",textoVacio:m?"Sin resultados":"Primero elige tu estado"})]})]}),e.jsxs("div",{className:"cp-field",children:[e.jsx("label",{children:"Nivel educativo actual"}),e.jsx(L,{value:s,onChange:x,options:Ge.map(a=>({value:a.v,label:a.label})),placeholder:"Selecciona…"})]}),e.jsxs("div",{className:"cp-field cp-autocomplete",children:[e.jsx("label",{children:"Institución educativa"}),e.jsx("input",{value:y,onChange:a=>{G(a.target.value),R(""),V(!0)},onFocus:()=>V(!0),onBlur:()=>setTimeout(()=>V(!1),150),placeholder:k?"Elige tu escuela, o busca por nombre o CCT":"Escribe el nombre o la CCT de tu escuela",autoComplete:"off"}),be&&ie.length>0&&e.jsx("ul",{className:"cp-sug",children:ie.map(a=>e.jsxs("li",{onMouseDown:()=>{G(a.nombre),R(a.cct),V(!1)},children:[e.jsx("span",{className:"cp-sug-nombre",children:a.nombre}),e.jsx("span",{className:"cp-sug-meta",children:(()=>{const t=[Y(a.servicio),Y(a.municipio),Y(a.localidad)].filter(Boolean);return e.jsxs(e.Fragment,{children:[t.join(" · "),a.cct?e.jsx("span",{className:"cp-sug-cct",children:t.length?` · ${a.cct}`:a.cct}):null]})})()})]},a.cct))})]}),e.jsxs("div",{className:"cp-contactos",children:[e.jsxs("span",{className:"cp-contactos-tit",children:["Contactos de emergencia ",e.jsx("span",{className:"cp-hint",children:"(opcional, hasta 2)"})]}),U.map((a,t)=>e.jsxs("div",{className:"cp-contacto",children:[e.jsxs("div",{className:"cp-contacto-campos",children:[e.jsx("input",{value:a.nombre,onChange:r=>K(t,"nombre",r.target.value),placeholder:"Nombre"}),e.jsx("input",{value:a.telefono,onChange:r=>K(t,"telefono",r.target.value),placeholder:"Teléfono",inputMode:"numeric"}),e.jsx("input",{value:a.parentesco,onChange:r=>K(t,"parentesco",r.target.value),placeholder:"Parentesco (madre, tío…)"})]}),e.jsx("button",{type:"button",className:"cp-contacto-x",onClick:()=>Ne(t),"aria-label":"Quitar contacto",children:e.jsx(Fe,{size:16,"aria-hidden":"true"})})]},t)),U.length<2&&e.jsxs("button",{type:"button",className:"cp-agregar",onClick:we,children:[e.jsx(Pe,{size:15,"aria-hidden":"true"})," Agregar contacto"]})]})]}),F&&e.jsxs("div",{className:"cp-error",children:[e.jsx(Me,{size:15,"aria-hidden":"true"})," ",e.jsx("span",{children:F})]}),e.jsxs("button",{type:"submit",className:"cp-submit",disabled:d,children:[d&&e.jsx("span",{className:"cp-spinner cp-spinner-w"}),d?"Guardando…":c?"Guardar cambios":"Guardar y continuar"]})]})]})})})]})}const Ye=`
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
`;export{Ke as default};
