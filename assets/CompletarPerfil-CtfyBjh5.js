import{c as se,r as t,j as e,a as je,u as ye,s as g,X as we}from"./index-B2d7MkBN.js";import{C as Ne}from"./chevron-down-NkuE5-Zi.js";import{G as Ce,U as ze}from"./users-bTN2Kat1.js";import{T as Se}from"./trash-2-C4B11QtG.js";import{P as ke}from"./plus-CvLX5sV2.js";const Ee=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],_e=se("arrow-left",Ee);const Ae=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],De=se("check",Ae),Te=["Aguascalientes","Baja California","Baja California Sur","Campeche","Chiapas","Chihuahua","Ciudad de México","Coahuila","Colima","Durango","Estado de México","Guanajuato","Guerrero","Hidalgo","Jalisco","Michoacán","Morelos","Nayarit","Nuevo León","Oaxaca","Puebla","Querétaro","Quintana Roo","San Luis Potosí","Sinaloa","Sonora","Tabasco","Tamaulipas","Tlaxcala","Veracruz","Yucatán","Zacatecas"];function J(c){return(c||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase()}function X({value:c,onChange:d,options:m=[],placeholder:v="Selecciona…",disabled:C=!1,textoVacio:P="Sin resultados"}){const[l,_]=t.useState(!1),[n,A]=t.useState(c||""),[x,u]=t.useState(-1),T=t.useRef(null),b=t.useRef(null),h=`combo-lista-${t.useId().replace(/[^a-zA-Z0-9]/g,"")}`,z=t.useMemo(()=>(m||[]).map(r=>typeof r=="string"?{value:r,label:r}:r),[m]),S=t.useMemo(()=>{const r=z.find(f=>f.value===c);return r?r.label:c||""},[z,c]),j=t.useMemo(()=>{const r=J(n);return r?z.filter(f=>J(f.label).includes(r)||J(f.value).includes(r)):z},[z,n]);function p(){C||(A(S),u(-1),_(!0),requestAnimationFrame(()=>{b.current?.focus(),b.current?.select()}))}function M(r=!0){_(!1),u(-1),r&&A(S)}function w(r){d(r.value),A(r.label),_(!1),u(-1),b.current?.blur()}t.useEffect(()=>{if(!l)return;const r=f=>{T.current&&!T.current.contains(f.target)&&M(!0)};return document.addEventListener("mousedown",r),document.addEventListener("touchstart",r,{passive:!0}),()=>{document.removeEventListener("mousedown",r),document.removeEventListener("touchstart",r)}},[l]),t.useEffect(()=>{l||A(S)},[S,l]),t.useEffect(()=>{!l||x<0||document.getElementById(`${h}-op-${x}`)?.scrollIntoView({block:"nearest"})},[l,x,h]);function I(r){if(r.key==="ArrowDown"||r.key==="ArrowUp"){if(r.preventDefault(),!l){p();return}const f=r.key==="ArrowDown"?1:-1;u(y=>{if(j.length===0)return-1;const k=y+f;return k<0?j.length-1:k>=j.length?0:k})}else r.key==="Enter"?l&&x>=0&&j[x]&&(r.preventDefault(),w(j[x])):r.key==="Escape"&&(r.preventDefault(),M(!0),b.current?.blur())}return e.jsxs("div",{className:"combo",ref:T,children:[e.jsx("style",{children:Me}),e.jsx("input",{ref:b,className:"combo-entrada",role:"combobox","aria-expanded":l,"aria-controls":h,"aria-activedescendant":x>=0?`${h}-op-${x}`:void 0,"aria-autocomplete":"list",value:l?n:S,placeholder:v,disabled:C,autoComplete:"off",onFocus:()=>{l||p()},onChange:r=>{A(r.target.value),u(-1),l||_(!0)},onKeyDown:I}),e.jsx("button",{type:"button",className:"combo-flecha",tabIndex:-1,"aria-hidden":"true",disabled:C,onClick:()=>l?M(!0):p(),children:e.jsx(Ne,{size:18,className:l?"combo-flecha-arriba":""})}),l&&e.jsx("div",{className:"combo-desplegable",children:e.jsx("ul",{className:"combo-lista",role:"listbox",id:h,children:j.length===0?e.jsx("li",{className:"combo-vacio",role:"presentation",children:P}):j.map((r,f)=>{const y=r.value===c;return e.jsxs("li",{id:`${h}-op-${f}`,role:"option","aria-selected":y,className:`combo-opcion${f===x?" combo-opcion-resaltada":""}${y?" combo-opcion-elegida":""}`,onMouseDown:k=>{k.preventDefault(),w(r)},children:[e.jsx("span",{children:r.label}),y&&e.jsx(De,{size:16,"aria-hidden":"true"})]},r.value)})})})]})}const Me=`
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
`,Pe=[{v:"basica",label:"Educación básica (primaria/secundaria)"},{v:"media_superior",label:"Media superior (preparatoria)"},{v:"superior",label:"Superior (universidad)"}],Ie=["Puebla","Veracruz","Estado de México","Ciudad de México"],Z=c=>(c||"").toLowerCase().replace(/(^|\s|-)([a-záéíóúñ])/g,(d,m,v)=>m+v.toUpperCase());function K(c){if(!c)return null;const d=new Date,m=new Date(c);let v=d.getFullYear()-m.getFullYear();const C=d.getMonth()-m.getMonth();return(C<0||C===0&&d.getDate()<m.getDate())&&v--,v>=0&&v<120?v:null}function Fe(c,d){if(c==="media_superior")return"prepa";if(c==="superior")return"universidad";const m=K(d);return m!=null&&m<12?"primaria":"secundaria"}const Le={nombre:"",telefono:"",parentesco:""};function Be(){je();const c=ye(),[d,m]=t.useState(null),[v,C]=t.useState(!0),[P,l]=t.useState(!1),[_,n]=t.useState(""),[A,x]=t.useState("tipo"),[u,T]=t.useState(null),[b,U]=t.useState(""),[h,z]=t.useState(""),[S,j]=t.useState(""),[p,M]=t.useState(""),[w,I]=t.useState(""),[r,f]=t.useState(""),[y,k]=t.useState(""),[F,$]=t.useState(""),[W,O]=t.useState(""),[R,q]=t.useState([]),[B,ce]=t.useState(""),[L,le]=t.useState(null),[de,pe]=t.useState(""),V=t.useRef(null),[ue,ee]=t.useState([]),[ae,Q]=t.useState([]),[fe,G]=t.useState(!1);t.useEffect(()=>{let a=!1;return g.auth.getSession().then(async({data:{session:i}})=>{if(a)return;if(!i){c("/login?dest=completar-perfil");return}m(i.user.id);const{data:o}=await g.from("profiles").select("nombre, apellidos, telefono, estado, ciudad, fecha_nacimiento, nivel_educativo, institucion, institucion_cct, avatar_url, tipo_solicitado").eq("id",i.user.id).single();if(a)return;o&&(U(o.nombre||""),z(o.apellidos||""),j(o.telefono||""),M(o.estado||"Puebla"),I(o.ciudad||"Tecamachalco"),f(o.fecha_nacimiento||""),k(o.nivel_educativo||""),$(o.institucion||""),O(o.institucion_cct||""),ce(o.avatar_url||""),o.tipo_solicitado&&(T(o.tipo_solicitado),x("form")));const{data:s}=await g.from("alumnos").select("id").eq("profile_id",i.user.id).maybeSingle();if(s){const{data:N}=await g.from("contactos_emergencia").select("nombre, telefono, relacion, orden").eq("alumno_id",s.id).order("orden");!a&&N&&q(N.map(D=>({nombre:D.nombre,telefono:D.telefono,parentesco:D.relacion})))}C(!1)}),()=>{a=!0}},[c]),t.useEffect(()=>{if(!p){ee([]);return}let a=!1;return g.rpc("municipios_por_estado",{p_estado:p}).then(({data:i})=>{a||ee((i||[]).map(o=>Z(o.municipio)))}),()=>{a=!0}},[p]),t.useEffect(()=>{if(!p){Q([]);return}const a=F.trim(),i=w.trim();if(!i&&a.length<3){Q([]);return}const o=setTimeout(async()=>{const{data:s}=await g.rpc("buscar_escuelas",{p_estado:p,p_municipio:i||null,p_q:a.length>=2?a:null});Q(s||[])},250);return()=>clearTimeout(o)},[F,p,w]);const me=a=>{const i=a.target.files?.[0];if(i){if(i.size>3*1024*1024){n("La imagen no debe superar 3 MB.");return}n(""),le(i),pe(URL.createObjectURL(i))}},xe=t.useCallback(async()=>{if(!L||!d)return B;const a=(L.name.split(".").pop()||"jpg").toLowerCase(),i=`${d}/${Date.now()}.${a}`,{error:o}=await g.storage.from("avatars").upload(i,L,{contentType:L.type,upsert:!1});if(o)throw o;const{data:s}=g.storage.from("avatars").getPublicUrl(i);return s.publicUrl},[L,d,B]);function re(a){T(a),n(""),x("form")}function Y(a,i,o){q(s=>s.map((N,D)=>D===a?{...N,[i]:o}:N))}const ge=()=>q(a=>a.length<2?[...a,{...Le}]:a),he=a=>q(i=>i.filter((o,s)=>s!==a));async function ve(a){if(a.preventDefault(),n(""),!b.trim()){n("Ingresa tu nombre.");return}if(!h.trim()){n("Ingresa tus apellidos.");return}const i=S.replace(/\D/g,"");if(i.length!==10){n("El teléfono debe tener 10 dígitos.");return}if(u==="alumno"){if(!p){n("Selecciona tu estado.");return}if(!w.trim()){n("Ingresa tu ciudad.");return}if(!r){n("Ingresa tu fecha de nacimiento.");return}const o=K(r);if(o==null||o<8||o>100){n("Revisa tu fecha de nacimiento: la edad no es válida.");return}if(!y){n("Selecciona tu nivel educativo actual.");return}if(!F.trim()){n("Ingresa tu institución educativa.");return}if(Ie.includes(p)&&!W){n("Elige tu escuela de la lista de sugerencias (debe estar en el catálogo).");return}for(const s of R)if(s.nombre.trim()||s.telefono.trim()||s.parentesco.trim()){if(!s.nombre.trim()||!s.telefono.trim()||!s.parentesco.trim()){n("Completa nombre, teléfono y parentesco de cada contacto de emergencia.");return}if(s.telefono.replace(/\D/g,"").length!==10){n("El teléfono de un contacto de emergencia debe tener 10 dígitos.");return}}}l(!0);try{const o=await xe(),s={nombre:b.trim(),apellidos:h.trim(),telefono:i,avatar_url:o||null,perfil_completo:!0,tipo_solicitado:u};u==="alumno"&&Object.assign(s,{estado:p,ciudad:w.trim(),fecha_nacimiento:r,nivel_educativo:y,institucion:F.trim(),institucion_cct:W||null});const{error:N}=await g.from("profiles").update(s).eq("id",d);if(N)throw N;if(u==="alumno"){const D=Fe(y,r),{error:oe}=await g.from("alumnos").upsert({id:d,profile_id:d,nombre:b.trim(),apellidos:h.trim(),fecha_nacimiento:r,email:null,telefono:i,nivel:D},{onConflict:"id"});if(oe)throw oe;const{error:ie}=await g.from("contactos_emergencia").delete().eq("alumno_id",d);if(ie)throw ie;const ne=R.filter(E=>E.nombre.trim()).map((E,be)=>({alumno_id:d,nombre:E.nombre.trim(),telefono:E.telefono.replace(/\D/g,""),relacion:E.parentesco.trim(),orden:be+1}));if(ne.length){const{error:E}=await g.from("contactos_emergencia").insert(ne);if(E)throw E}}c("/cuenta-pendiente")}catch(o){console.error(o),n("No se pudo guardar tu perfil. Intenta de nuevo."),l(!1)}}const te=K(r),H=de||B;return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:$e}),e.jsx("div",{className:"cp-root",children:e.jsx("div",{className:"cp-card",children:v?e.jsxs("div",{className:"cp-loading",children:[e.jsx("span",{className:"cp-spinner"})," Cargando…"]}):A==="tipo"?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"cp-head",children:[e.jsx("span",{className:"cp-eyebrow",children:"Casi listo"}),e.jsx("h1",{className:"cp-title",children:"¿Qué tipo de cuenta es?"}),e.jsx("p",{className:"cp-sub",children:"Elige una opción para continuar. El administrador revisará tu solicitud."})]}),e.jsxs("div",{className:"cp-tipos",children:[e.jsxs("button",{type:"button",className:`cp-tipo${u==="alumno"?" cp-tipo-on":""}`,onClick:()=>re("alumno"),children:[e.jsx("span",{className:"cp-tipo-ic",children:e.jsx(Ce,{size:24,"aria-hidden":"true"})}),e.jsx("span",{className:"cp-tipo-tit",children:"Alumno"}),e.jsx("span",{className:"cp-tipo-txt",children:"Voy a tomar clases y quiero ver mi avance."})]}),e.jsxs("button",{type:"button",className:`cp-tipo${u==="tutor"?" cp-tipo-on":""}`,onClick:()=>re("tutor"),children:[e.jsx("span",{className:"cp-tipo-ic",children:e.jsx(ze,{size:24,"aria-hidden":"true"})}),e.jsx("span",{className:"cp-tipo-tit",children:"Tutor"}),e.jsx("span",{className:"cp-tipo-txt",children:"Acompaño a uno o varios alumnos."})]})]})]}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"cp-head",children:[e.jsxs("button",{type:"button",className:"cp-volver",onClick:()=>x("tipo"),children:[e.jsx(_e,{size:15,"aria-hidden":"true"})," Cambiar tipo"]}),e.jsx("span",{className:"cp-eyebrow",children:"Casi listo"}),e.jsx("h1",{className:"cp-title",children:u==="alumno"?"Completa tu perfil de alumno":"Completa tu perfil de tutor"}),e.jsx("p",{className:"cp-sub",children:u==="alumno"?"Necesitamos estos datos para personalizar tu preparación.":"Solo lo básico para identificarte."})]}),e.jsxs("form",{className:"cp-form",onSubmit:ve,children:[e.jsxs("div",{className:"cp-avatar-row",children:[e.jsx("div",{className:"cp-avatar",onClick:()=>V.current?.click(),children:H?e.jsx("img",{src:H,alt:"avatar"}):e.jsx("span",{className:"cp-avatar-ph",children:"＋"})}),e.jsxs("div",{className:"cp-avatar-txt",children:[e.jsx("button",{type:"button",className:"cp-avatar-btn",onClick:()=>V.current?.click(),children:H?"Cambiar foto":"Subir foto"}),e.jsx("span",{className:"cp-hint",children:"JPG o PNG, máx. 3 MB"})]}),e.jsx("input",{ref:V,type:"file",accept:"image/*",hidden:!0,onChange:me})]}),e.jsxs("div",{className:"cp-grid2",children:[e.jsxs("div",{className:"cp-field",children:[e.jsx("label",{children:"Nombre(s)"}),e.jsx("input",{value:b,onChange:a=>U(a.target.value),placeholder:"Ej. Ana"})]}),e.jsxs("div",{className:"cp-field",children:[e.jsx("label",{children:"Apellidos"}),e.jsx("input",{value:h,onChange:a=>z(a.target.value),placeholder:"Ej. López García"})]})]}),e.jsxs("div",{className:"cp-field",children:[e.jsx("label",{children:"Teléfono (WhatsApp)"}),e.jsx("input",{type:"tel",value:S,onChange:a=>j(a.target.value),placeholder:"Ej. 2221234567"})]}),u==="alumno"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"cp-field",children:[e.jsxs("label",{children:["Fecha de nacimiento ",te!=null&&e.jsxs("span",{className:"cp-edad",children:["· ",te," años"]})]}),e.jsx("input",{type:"date",value:r,onChange:a=>f(a.target.value),max:new Date().toISOString().slice(0,10)})]}),e.jsxs("div",{className:"cp-grid2",children:[e.jsxs("div",{className:"cp-field",children:[e.jsx("label",{children:"Estado"}),e.jsx(X,{value:p,onChange:a=>{M(a),I(""),$(""),O("")},options:Te,placeholder:"Selecciona…"})]}),e.jsxs("div",{className:"cp-field",children:[e.jsx("label",{children:"Ciudad / Municipio"}),e.jsx(X,{value:w,onChange:I,options:ue,placeholder:p?"Escribe o elige tu municipio":"Primero elige tu estado",textoVacio:p?"Sin resultados":"Primero elige tu estado"})]})]}),e.jsxs("div",{className:"cp-field",children:[e.jsx("label",{children:"Nivel educativo actual"}),e.jsx(X,{value:y,onChange:k,options:Pe.map(a=>({value:a.v,label:a.label})),placeholder:"Selecciona…"})]}),e.jsxs("div",{className:"cp-field cp-autocomplete",children:[e.jsx("label",{children:"Institución educativa"}),e.jsx("input",{value:F,onChange:a=>{$(a.target.value),O(""),G(!0)},onFocus:()=>G(!0),onBlur:()=>setTimeout(()=>G(!1),150),placeholder:w?"Elige tu escuela, o busca por nombre o CCT":"Escribe el nombre o la CCT de tu escuela",autoComplete:"off"}),fe&&ae.length>0&&e.jsx("ul",{className:"cp-sug",children:ae.map(a=>e.jsxs("li",{onMouseDown:()=>{$(a.nombre),O(a.cct),G(!1)},children:[e.jsx("span",{className:"cp-sug-nombre",children:a.nombre}),e.jsxs("span",{className:"cp-sug-meta",children:[e.jsx("span",{className:"cp-sug-cct",children:a.cct})," · ",[Z(a.servicio),Z(a.municipio)].filter(Boolean).join(" · ")]})]},a.cct))})]}),e.jsxs("div",{className:"cp-contactos",children:[e.jsxs("span",{className:"cp-contactos-tit",children:["Contactos de emergencia ",e.jsx("span",{className:"cp-hint",children:"(opcional, hasta 2)"})]}),R.map((a,i)=>e.jsxs("div",{className:"cp-contacto",children:[e.jsxs("div",{className:"cp-contacto-campos",children:[e.jsx("input",{value:a.nombre,onChange:o=>Y(i,"nombre",o.target.value),placeholder:"Nombre"}),e.jsx("input",{value:a.telefono,onChange:o=>Y(i,"telefono",o.target.value),placeholder:"Teléfono",inputMode:"numeric"}),e.jsx("input",{value:a.parentesco,onChange:o=>Y(i,"parentesco",o.target.value),placeholder:"Parentesco (madre, tío…)"})]}),e.jsx("button",{type:"button",className:"cp-contacto-x",onClick:()=>he(i),"aria-label":"Quitar contacto",children:e.jsx(Se,{size:16,"aria-hidden":"true"})})]},i)),R.length<2&&e.jsxs("button",{type:"button",className:"cp-agregar",onClick:ge,children:[e.jsx(ke,{size:15,"aria-hidden":"true"})," Agregar contacto"]})]})]}),_&&e.jsxs("div",{className:"cp-error",children:[e.jsx(we,{size:15,"aria-hidden":"true"})," ",e.jsx("span",{children:_})]}),e.jsxs("button",{type:"submit",className:"cp-submit",disabled:P,children:[P&&e.jsx("span",{className:"cp-spinner cp-spinner-w"}),P?"Guardando…":"Guardar y continuar"]})]})]})})})]})}const $e=`
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
.cp-spinner { width: 18px; height: 18px; border: 2px solid color-mix(in srgb, var(--fx-primary-500) 30%, transparent);
  border-top-color: var(--fx-primary-500); border-radius: 50%; animation: cp-spin .6s linear infinite; }
.cp-spinner-w { border-color: color-mix(in srgb, var(--fx-text-on-primary) 40%, transparent); border-top-color: var(--fx-text-on-primary); }
@keyframes cp-spin { to { transform: rotate(360deg); } }
`;export{Be as default};
