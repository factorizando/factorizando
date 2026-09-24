import{c as pe,r as o,j as e,a as Se,u as ke,s as h,X as Ee}from"./index-CqaaE4_b.js";import{C as _e}from"./chevron-down-CKVqp51j.js";import{G as Me,U as De}from"./users-Bydzi-nD.js";import{T as Ae}from"./trash-2-tBCQWT5N.js";import{P as Te}from"./plus-CmHznod1.js";const Le=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],Fe=pe("arrow-left",Le);const $e=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Pe=pe("check",$e),Ie=["Aguascalientes","Baja California","Baja California Sur","Campeche","Chiapas","Chihuahua","Ciudad de México","Coahuila","Colima","Durango","Estado de México","Guanajuato","Guerrero","Hidalgo","Jalisco","Michoacán","Morelos","Nayarit","Nuevo León","Oaxaca","Puebla","Querétaro","Quintana Roo","San Luis Potosí","Sinaloa","Sonora","Tabasco","Tamaulipas","Tlaxcala","Veracruz","Yucatán","Zacatecas"];function ae(p){return(p||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase()}function $({value:p,onChange:f,options:x=[],placeholder:b="Selecciona…",disabled:N=!1,textoVacio:P="Sin resultados",...U}){const[l,c]=o.useState(!1),[I,y]=o.useState(p||""),[u,C]=o.useState(-1),z=o.useRef(null),_=o.useRef(null),w=`combo-lista-${o.useId().replace(/[^a-zA-Z0-9]/g,"")}`,S=o.useMemo(()=>(x||[]).map(i=>typeof i=="string"?{value:i,label:i}:i),[x]),M=o.useMemo(()=>{const i=S.find(n=>n.value===p);return i?i.label:p||""},[S,p]),d=o.useMemo(()=>{const i=ae(I);return i?S.filter(n=>ae(n.label).includes(i)||ae(n.value).includes(i)):S},[S,I]);function A(){N||(y(""),C(-1),c(!0),requestAnimationFrame(()=>{_.current?.focus()}))}function j(i=!0){c(!1),C(-1),i&&y(M)}function T(i){f(i.value),y(i.label),c(!1),C(-1),_.current?.blur()}o.useEffect(()=>{if(!l)return;const i=n=>{z.current&&!z.current.contains(n.target)&&j(!0)};return document.addEventListener("mousedown",i),document.addEventListener("touchstart",i,{passive:!0}),()=>{document.removeEventListener("mousedown",i),document.removeEventListener("touchstart",i)}},[l]),o.useEffect(()=>{l||y(M)},[M,l]),o.useEffect(()=>{!l||u<0||document.getElementById(`${w}-op-${u}`)?.scrollIntoView({block:"nearest"})},[l,u,w]);const[g,L]=o.useState(0);o.useEffect(()=>{if(!l){L(0);return}const i=window.matchMedia("(max-width: 480px)").matches,n=window.visualViewport;if(!i||!n)return;const m=()=>{L(Math.max(0,window.innerHeight-n.height-(n.offsetTop||0)))};return m(),n.addEventListener("resize",m),n.addEventListener("scroll",m),()=>{n.removeEventListener("resize",m),n.removeEventListener("scroll",m)}},[l]);function F(i){if(i.key==="ArrowDown"||i.key==="ArrowUp"){if(i.preventDefault(),!l){A();return}const n=i.key==="ArrowDown"?1:-1;C(m=>{if(d.length===0)return-1;const k=m+n;return k<0?d.length-1:k>=d.length?0:k})}else i.key==="Enter"?l&&u>=0&&d[u]&&(i.preventDefault(),T(d[u])):i.key==="Escape"&&(i.preventDefault(),j(!0),_.current?.blur())}return e.jsxs("div",{className:"combo",ref:z,children:[e.jsx("style",{children:Oe}),e.jsx("input",{ref:_,className:"combo-entrada",...U,role:"combobox","aria-expanded":l,"aria-controls":w,"aria-activedescendant":u>=0?`${w}-op-${u}`:void 0,"aria-autocomplete":"list",value:l?I:M,placeholder:b,disabled:N,autoComplete:"off",onFocus:()=>{l||A()},onChange:i=>{y(i.target.value),C(-1),l||c(!0)},onKeyDown:F}),e.jsx("button",{type:"button",className:"combo-flecha",tabIndex:-1,"aria-hidden":"true",disabled:N,onClick:()=>l?j(!0):A(),children:e.jsx(_e,{size:18,className:l?"combo-flecha-arriba":""})}),l&&e.jsx("div",{className:"combo-desplegable",style:g>0?{bottom:12+g}:void 0,children:e.jsx("ul",{className:"combo-lista",role:"listbox",id:w,children:d.length===0?e.jsx("li",{className:"combo-vacio",role:"presentation",children:P}):d.map((i,n)=>{const m=i.value===p;return e.jsxs("li",{id:`${w}-op-${n}`,role:"option","aria-selected":m,className:`combo-opcion${n===u?" combo-opcion-resaltada":""}${m?" combo-opcion-elegida":""}`,onMouseDown:k=>{k.preventDefault(),T(i)},children:[e.jsx("span",{children:i.label}),m&&e.jsx(Pe,{size:16,"aria-hidden":"true"})]},i.value)})})})]})}const Oe=`
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
`,Re=[{v:"basica",label:"Educación básica (primaria/secundaria)"},{v:"media_superior",label:"Media superior (preparatoria)"},{v:"superior",label:"Superior (universidad)"}],qe=[{value:"01",label:"Ene"},{value:"02",label:"Feb"},{value:"03",label:"Mar"},{value:"04",label:"Abr"},{value:"05",label:"May"},{value:"06",label:"Jun"},{value:"07",label:"Jul"},{value:"08",label:"Ago"},{value:"09",label:"Sep"},{value:"10",label:"Oct"},{value:"11",label:"Nov"},{value:"12",label:"Dic"}],Ge=["Puebla","Veracruz","Estado de México","Ciudad de México"],Q=p=>(p||"").toLowerCase().replace(/(^|\s|-)([a-záéíóúñ])/g,(f,x,b)=>x+b.toUpperCase());function re(p){if(!p)return null;const f=new Date,x=new Date(p);let b=f.getFullYear()-x.getFullYear();const N=f.getMonth()-x.getMonth();return(N<0||N===0&&f.getDate()<x.getDate())&&b--,b>=0&&b<120?b:null}function Ue(p,f){if(p==="media_superior")return"prepa";if(p==="superior")return"universidad";const x=re(f);return x!=null&&x<12?"primaria":"secundaria"}const Be={nombre:"",telefono:"",parentesco:""};function Ze(){Se();const p=ke(),[f,x]=o.useState(null),[b,N]=o.useState(!0),[P,U]=o.useState(!1),[l,c]=o.useState(""),[I,y]=o.useState("tipo"),[u,C]=o.useState(null),[z,_]=o.useState(""),[O,w]=o.useState(""),[S,M]=o.useState(""),[d,A]=o.useState(""),[j,T]=o.useState(""),[g,L]=o.useState(""),[F,i]=o.useState(""),[n,m]=o.useState(""),[k,B]=o.useState(""),[V,Y]=o.useState([]),[H,ue]=o.useState(""),[R,fe]=o.useState(null),[me,xe]=o.useState(""),X=o.useRef(null),[he,te]=o.useState([]),[oe,Z]=o.useState([]),[ge,J]=o.useState(!1);o.useEffect(()=>{let a=!1;return h.auth.getSession().then(async({data:{session:t}})=>{if(a)return;if(!t){p("/login?dest=completar-perfil");return}x(t.user.id);const{data:r}=await h.from("profiles").select("nombre, apellidos, telefono, estado, ciudad, fecha_nacimiento, nivel_educativo, institucion, institucion_cct, avatar_url, tipo_solicitado").eq("id",t.user.id).single();if(a)return;r&&(_(r.nombre||""),w(r.apellidos||""),M(r.telefono||""),A(r.estado||"Puebla"),T(r.ciudad||"Tecamachalco"),L(r.fecha_nacimiento||""),i(r.nivel_educativo||""),m(r.institucion||""),B(r.institucion_cct||""),ue(r.avatar_url||""),r.tipo_solicitado&&(C(r.tipo_solicitado),y("form")));const{data:s}=await h.from("alumnos").select("id").eq("profile_id",t.user.id).maybeSingle();if(s){const{data:v}=await h.from("contactos_emergencia").select("nombre, telefono, relacion, orden").eq("alumno_id",s.id).order("orden");!a&&v&&Y(v.map(D=>({nombre:D.nombre,telefono:D.telefono,parentesco:D.relacion})))}N(!1)}),()=>{a=!0}},[p]),o.useEffect(()=>{if(!d){te([]);return}let a=!1;return h.rpc("municipios_por_estado",{p_estado:d}).then(({data:t})=>{a||te((t||[]).map(r=>Q(r.municipio)))}),()=>{a=!0}},[d]),o.useEffect(()=>{if(!d){Z([]);return}const a=n.trim(),t=j.trim();if(!t&&a.length<3){Z([]);return}const r=setTimeout(async()=>{const{data:s}=await h.rpc("buscar_escuelas",{p_estado:d,p_municipio:t||null,p_q:a.length>=2?a:null});Z(s||[])},250);return()=>clearTimeout(r)},[n,d,j]);const ve=a=>{const t=a.target.files?.[0];if(t){if(t.size>3*1024*1024){c("La imagen no debe superar 3 MB.");return}c(""),fe(t),xe(URL.createObjectURL(t))}},be=o.useCallback(async()=>{if(!R||!f)return H;const a=(R.name.split(".").pop()||"jpg").toLowerCase(),t=`${f}/${Date.now()}.${a}`,{error:r}=await h.storage.from("avatars").upload(t,R,{contentType:R.type,upsert:!1});if(r)throw r;const{data:s}=h.storage.from("avatars").getPublicUrl(t);return s.publicUrl},[R,f,H]);function ie(a){C(a),c(""),y("form")}function K(a,t,r){Y(s=>s.map((v,D)=>D===a?{...v,[t]:r}:v))}const je=()=>Y(a=>a.length<2?[...a,{...Be}]:a),ye=a=>Y(t=>t.filter((r,s)=>s!==a));async function we(a){if(a.preventDefault(),c(""),!z.trim()){c("Ingresa tu nombre.");return}if(!O.trim()){c("Ingresa tus apellidos.");return}const t=S.replace(/\D/g,"");if(t.length!==10){c("El teléfono debe tener 10 dígitos.");return}if(u==="alumno"){if(!d){c("Selecciona tu estado.");return}if(!j.trim()){c("Ingresa tu ciudad.");return}if(!g){c("Ingresa tu fecha de nacimiento.");return}const r=re(g);if(r==null||r<8||r>100){c("Revisa tu fecha de nacimiento: la edad no es válida.");return}if(!F){c("Selecciona tu nivel educativo actual.");return}if(!n.trim()){c("Ingresa tu institución educativa.");return}if(Ge.includes(d)&&!k){c("Elige tu escuela de la lista de sugerencias (debe estar en el catálogo).");return}for(const s of V)if(s.nombre.trim()||s.telefono.trim()||s.parentesco.trim()){if(!s.nombre.trim()||!s.telefono.trim()||!s.parentesco.trim()){c("Completa nombre, teléfono y parentesco de cada contacto de emergencia.");return}if(s.telefono.replace(/\D/g,"").length!==10){c("El teléfono de un contacto de emergencia debe tener 10 dígitos.");return}}}U(!0);try{const r=await be(),s={nombre:z.trim(),apellidos:O.trim(),telefono:t,avatar_url:r||null,perfil_completo:!0,tipo_solicitado:u};u==="alumno"&&Object.assign(s,{estado:d,ciudad:j.trim(),fecha_nacimiento:g,nivel_educativo:F,institucion:n.trim(),institucion_cct:k||null});const{error:v}=await h.from("profiles").update(s).eq("id",f);if(v)throw v;if(u==="alumno"){const D=Ue(F,g),{error:ce}=await h.from("alumnos").upsert({id:f,profile_id:f,nombre:z.trim(),apellidos:O.trim(),fecha_nacimiento:g,email:null,telefono:t,nivel:D},{onConflict:"id"});if(ce)throw ce;const{error:le}=await h.from("contactos_emergencia").delete().eq("alumno_id",f);if(le)throw le;const de=V.filter(E=>E.nombre.trim()).map((E,ze)=>({alumno_id:f,nombre:E.nombre.trim(),telefono:E.telefono.replace(/\D/g,""),relacion:E.parentesco.trim(),orden:ze+1}));if(de.length){const{error:E}=await h.from("contactos_emergencia").insert(de);if(E)throw E}}p("/cuenta-pendiente")}catch(r){console.error(r),c("No se pudo guardar tu perfil. Intenta de nuevo."),U(!1)}}const ne=re(g),W=me||H,[se,q,G]=o.useMemo(()=>{const a=/^(\d{4})-(\d{2})-(\d{2})$/.exec(g||"");return a?[a[3],a[2],a[1]]:["","",""]},[g]),Ne=o.useMemo(()=>{const a=new Date().getFullYear()-8,t=[];for(let r=a;r>=a-92;r--)t.push(String(r));return t},[]),Ce=o.useMemo(()=>{const a=q&&G?new Date(Number(G),Number(q),0).getDate():31,t=[];for(let r=1;r<=a;r++)t.push(String(r).padStart(2,"0"));return t},[q,G]);function ee({d:a=se,m:t=q,a:r=G}){if(!a||!t||!r){L("");return}const s=new Date(Number(r),Number(t),0).getDate(),v=String(Math.min(Number(a),s)).padStart(2,"0");L(`${r}-${t}-${v}`)}return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:Ve}),e.jsx("div",{className:"cp-root",children:e.jsx("div",{className:"cp-card",children:b?e.jsxs("div",{className:"cp-loading",children:[e.jsx("span",{className:"cp-spinner"})," Cargando…"]}):I==="tipo"?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"cp-head",children:[e.jsx("span",{className:"cp-eyebrow",children:"Casi listo"}),e.jsx("h1",{className:"cp-title",children:"¿Qué tipo de cuenta es?"}),e.jsx("p",{className:"cp-sub",children:"Elige una opción para continuar. El administrador revisará tu solicitud."})]}),e.jsxs("div",{className:"cp-tipos",children:[e.jsxs("button",{type:"button",className:`cp-tipo${u==="alumno"?" cp-tipo-on":""}`,onClick:()=>ie("alumno"),children:[e.jsx("span",{className:"cp-tipo-ic",children:e.jsx(Me,{size:24,"aria-hidden":"true"})}),e.jsx("span",{className:"cp-tipo-tit",children:"Alumno"}),e.jsx("span",{className:"cp-tipo-txt",children:"Voy a tomar clases y quiero ver mi avance."})]}),e.jsxs("button",{type:"button",className:`cp-tipo${u==="tutor"?" cp-tipo-on":""}`,onClick:()=>ie("tutor"),children:[e.jsx("span",{className:"cp-tipo-ic",children:e.jsx(De,{size:24,"aria-hidden":"true"})}),e.jsx("span",{className:"cp-tipo-tit",children:"Tutor"}),e.jsx("span",{className:"cp-tipo-txt",children:"Acompaño a uno o varios alumnos."})]})]})]}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"cp-head",children:[e.jsxs("button",{type:"button",className:"cp-volver",onClick:()=>y("tipo"),children:[e.jsx(Fe,{size:15,"aria-hidden":"true"})," Cambiar tipo"]}),e.jsx("span",{className:"cp-eyebrow",children:"Casi listo"}),e.jsx("h1",{className:"cp-title",children:u==="alumno"?"Completa tu perfil de alumno":"Completa tu perfil de tutor"}),e.jsx("p",{className:"cp-sub",children:u==="alumno"?"Necesitamos estos datos para personalizar tu preparación.":"Solo lo básico para identificarte."})]}),e.jsxs("form",{className:"cp-form",onSubmit:we,children:[e.jsxs("div",{className:"cp-avatar-row",children:[e.jsx("div",{className:"cp-avatar",onClick:()=>X.current?.click(),children:W?e.jsx("img",{src:W,alt:"avatar"}):e.jsx("span",{className:"cp-avatar-ph",children:"＋"})}),e.jsxs("div",{className:"cp-avatar-txt",children:[e.jsx("button",{type:"button",className:"cp-avatar-btn",onClick:()=>X.current?.click(),children:W?"Cambiar foto":"Subir foto"}),e.jsx("span",{className:"cp-hint",children:"JPG o PNG, máx. 3 MB"})]}),e.jsx("input",{ref:X,type:"file",accept:"image/*",hidden:!0,onChange:ve})]}),e.jsxs("div",{className:"cp-grid2",children:[e.jsxs("div",{className:"cp-field",children:[e.jsx("label",{children:"Nombre(s)"}),e.jsx("input",{value:z,onChange:a=>_(a.target.value),placeholder:"Ej. Ana"})]}),e.jsxs("div",{className:"cp-field",children:[e.jsx("label",{children:"Apellidos"}),e.jsx("input",{value:O,onChange:a=>w(a.target.value),placeholder:"Ej. López García"})]})]}),e.jsxs("div",{className:"cp-field",children:[e.jsx("label",{children:"Teléfono (WhatsApp)"}),e.jsx("input",{type:"tel",value:S,onChange:a=>M(a.target.value),placeholder:"Ej. 2221234567"})]}),u==="alumno"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"cp-field",children:[e.jsxs("label",{children:["Fecha de nacimiento ",ne!=null&&e.jsxs("span",{className:"cp-edad",children:["· ",ne," años"]})]}),e.jsxs("div",{className:"cp-fecha",children:[e.jsx($,{value:se,onChange:a=>ee({d:a}),options:Ce,placeholder:"Día","aria-label":"Día de nacimiento"}),e.jsx($,{value:q,onChange:a=>ee({m:a}),options:qe,placeholder:"Mes","aria-label":"Mes de nacimiento"}),e.jsx($,{value:G,onChange:a=>ee({a}),options:Ne,placeholder:"Año","aria-label":"Año de nacimiento"})]})]}),e.jsxs("div",{className:"cp-grid2",children:[e.jsxs("div",{className:"cp-field",children:[e.jsx("label",{children:"Estado"}),e.jsx($,{value:d,onChange:a=>{A(a),T(""),m(""),B("")},options:Ie,placeholder:"Selecciona…"})]}),e.jsxs("div",{className:"cp-field",children:[e.jsx("label",{children:"Ciudad / Municipio"}),e.jsx($,{value:j,onChange:T,options:he,placeholder:d?"Escribe o elige tu municipio":"Primero elige tu estado",textoVacio:d?"Sin resultados":"Primero elige tu estado"})]})]}),e.jsxs("div",{className:"cp-field",children:[e.jsx("label",{children:"Nivel educativo actual"}),e.jsx($,{value:F,onChange:i,options:Re.map(a=>({value:a.v,label:a.label})),placeholder:"Selecciona…"})]}),e.jsxs("div",{className:"cp-field cp-autocomplete",children:[e.jsx("label",{children:"Institución educativa"}),e.jsx("input",{value:n,onChange:a=>{m(a.target.value),B(""),J(!0)},onFocus:()=>J(!0),onBlur:()=>setTimeout(()=>J(!1),150),placeholder:j?"Elige tu escuela, o busca por nombre o CCT":"Escribe el nombre o la CCT de tu escuela",autoComplete:"off"}),ge&&oe.length>0&&e.jsx("ul",{className:"cp-sug",children:oe.map(a=>e.jsxs("li",{onMouseDown:()=>{m(a.nombre),B(a.cct),J(!1)},children:[e.jsx("span",{className:"cp-sug-nombre",children:a.nombre}),e.jsx("span",{className:"cp-sug-meta",children:(()=>{const t=[Q(a.servicio),Q(a.municipio),Q(a.localidad)].filter(Boolean);return a.localidad?t.join(" · "):[a.cct,...t].filter(Boolean).join(" · ")})()})]},a.cct))})]}),e.jsxs("div",{className:"cp-contactos",children:[e.jsxs("span",{className:"cp-contactos-tit",children:["Contactos de emergencia ",e.jsx("span",{className:"cp-hint",children:"(opcional, hasta 2)"})]}),V.map((a,t)=>e.jsxs("div",{className:"cp-contacto",children:[e.jsxs("div",{className:"cp-contacto-campos",children:[e.jsx("input",{value:a.nombre,onChange:r=>K(t,"nombre",r.target.value),placeholder:"Nombre"}),e.jsx("input",{value:a.telefono,onChange:r=>K(t,"telefono",r.target.value),placeholder:"Teléfono",inputMode:"numeric"}),e.jsx("input",{value:a.parentesco,onChange:r=>K(t,"parentesco",r.target.value),placeholder:"Parentesco (madre, tío…)"})]}),e.jsx("button",{type:"button",className:"cp-contacto-x",onClick:()=>ye(t),"aria-label":"Quitar contacto",children:e.jsx(Ae,{size:16,"aria-hidden":"true"})})]},t)),V.length<2&&e.jsxs("button",{type:"button",className:"cp-agregar",onClick:je,children:[e.jsx(Te,{size:15,"aria-hidden":"true"})," Agregar contacto"]})]})]}),l&&e.jsxs("div",{className:"cp-error",children:[e.jsx(Ee,{size:15,"aria-hidden":"true"})," ",e.jsx("span",{children:l})]}),e.jsxs("button",{type:"submit",className:"cp-submit",disabled:P,children:[P&&e.jsx("span",{className:"cp-spinner cp-spinner-w"}),P?"Guardando…":"Guardar y continuar"]})]})]})})})]})}const Ve=`
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
`;export{Ze as default};
