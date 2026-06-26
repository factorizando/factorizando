// Renderer de "documento matemático" estilo libro (amsthm):
// entornos numerados (Definición, Teorema, Lema, Proposición, Corolario,
// Observación, Ejemplo) + Demostración con ∎, numeración automática por sección
// y referencias cruzadas. Reutiliza KaTeX (CDN) y los registros de
// diagramas/interactivos. Esquema en docs/CONVENCIONES.md.
import { useEffect, useRef, useState } from "react";
import { useKaTeX } from "../data/teoria/shared.jsx";
import { DIAGRAMS } from "./diagramas";
import { INTERACTIVOS } from "./interactivos";

// Nombre visible y color de acento por entorno
const ENTORNOS = {
  definicion:  { label: "Definición",  num: true,  color: "var(--c-definicion)" },
  axioma:      { label: "Axioma",      num: true,  color: "var(--c-axioma)" },
  notacion:    { label: "Notación",    num: true,  color: "var(--c-notacion)" },
  teorema:     { label: "Teorema",     num: true,  color: "var(--c-teorema)" },
  lema:        { label: "Lema",        num: true,  color: "var(--c-teorema)" },
  proposicion: { label: "Proposición", num: true,  color: "var(--c-teorema)" },
  corolario:   { label: "Corolario",   num: true,  color: "var(--c-corolario)" },
  observacion: { label: "Observación", num: true,  color: "var(--c-observacion)" },
  ejemplo:     { label: "Ejemplo",     num: true,  color: "var(--c-ejemplo)" },
  ejercicio:   { label: "Ejercicio",   num: true,  color: "var(--c-ejercicio)" },
};

// Entornos cuyo cuerpo va en cursiva (enunciados formales)
const ENV_CURSIVA = new Set(["teorema", "lema", "proposicion", "corolario", "axioma"]);

/* ── KaTeX helpers ───────────────────────────────────────────────────────── */
function Inline({ tex }) {
  const ready = useKaTeX();
  const ref = useRef(null);
  useEffect(() => {
    if (ready && ref.current) {
      try { window.katex.render(tex, ref.current, { throwOnError: false, displayMode: false }); }
      catch { /* deja el texto */ }
    }
  }, [ready, tex]);
  return ready
    ? <span ref={ref} />
    : <span style={{ fontFamily: "monospace" }}>{tex}</span>;
}

function Display({ tex }) {
  const ready = useKaTeX();
  const ref = useRef(null);
  useEffect(() => {
    if (ready && ref.current) {
      try { window.katex.render(tex, ref.current, { throwOnError: false, displayMode: true }); }
      catch { /* deja el texto */ }
    }
  }, [ready, tex]);
  return ready
    ? <div className="dm-display" ref={ref} />
    : <div className="dm-display" style={{ fontFamily: "monospace" }}>{tex}</div>;
}

export default function DocumentoRenderer({ doc, tema, embebido = false }) {
  const contenido = doc?.contenido ?? [];

  // ── Paso 1: numeración + mapa de etiquetas → "Tipo S.N" ──
  const labels = {};
  {
    let sec = 0;
    let cont = {}; // contador independiente por tipo de entorno, por sección
    for (const b of contenido) {
      if (b.tipo === "seccion") { sec++; cont = {}; continue; }
      const env = ENTORNOS[b.tipo];
      if (env && env.num) {
        cont[b.tipo] = (cont[b.tipo] || 0) + 1;
        const numero = `${sec || 1}.${cont[b.tipo]}`;
        b._num = numero;
        if (b.etiqueta) labels[b.etiqueta] = `${env.label} ${numero}`;
      }
    }
  }

  // ── Prosa con $math$ inline, referencias [[etiqueta]] y énfasis *término* ──
  function Prosa({ texto }) {
    const re = /(\$[^$]+\$|\[\[[^\]]+\]\]|\*[^*]+\*)/g;
    const partes = String(texto).split(re).filter((p) => p !== "");
    return (
      <>
        {partes.map((p, i) => {
          if (p.startsWith("$") && p.endsWith("$")) return <Inline key={i} tex={p.slice(1, -1)} />;
          if (p.startsWith("[[") && p.endsWith("]]")) {
            const k = p.slice(2, -2);
            return <span key={i} className="dm-ref">{labels[k] || k}</span>;
          }
          if (p.startsWith("*") && p.endsWith("*")) return <em key={i} className="dm-em">{p.slice(1, -1)}</em>;
          return <span key={i}>{p}</span>;
        })}
      </>
    );
  }

  // ── Un elemento de cuerpo: prosa / fórmula / lista / figura / interactivo ──
  function Elemento({ el }) {
    if (el.p != null) return <p className="dm-p"><Prosa texto={el.p} /></p>;
    if (el.math != null) return <Display tex={el.math} />;
    if (el.lista) return (
      <ul className="dm-lista">
        {el.lista.map((x, i) => <li key={i}><Prosa texto={x} /></li>)}
      </ul>
    );
    if (el.figura) {
      const D = DIAGRAMS[el.figura];
      return (
        <figure className="dm-fig">
          {D ? <D tema={tema} /> : <Faltante tipo="figura" clave={el.figura} />}
          {el.caption && <figcaption><Prosa texto={el.caption} /></figcaption>}
        </figure>
      );
    }
    if (el.interactivo) {
      const C = INTERACTIVOS[el.interactivo];
      return (
        <figure className="dm-fig dm-fig-int">
          {el.instruccion && <div className="dm-instr">↔ <Prosa texto={el.instruccion} /></div>}
          {C ? <C tema={tema} {...(el.props || {})} /> : <Faltante tipo="interactivo" clave={el.interactivo} />}
          {el.caption && <figcaption><Prosa texto={el.caption} /></figcaption>}
        </figure>
      );
    }
    return null;
  }

  function Cuerpo({ items }) {
    return (items || []).map((el, i) => <Elemento key={i} el={el} />);
  }

  // ── Render de cada bloque de contenido ──
  function Bloque({ b }) {
    if (b.tipo === "seccion") {
      return <h2 className="dm-seccion">{b.titulo}</h2>;
    }
    if (b.tipo === "parrafo") {
      return <div className="dm-parrafo"><Cuerpo items={b.cuerpo} /></div>;
    }
    if (b.tipo === "demostracion") {
      return (
        <div className="dm-env dm-demo">
          <div className="dm-demo-hd">Demostración{b.metodo ? ` (${b.metodo})` : ""}.</div>
          {(b.pasos || []).map((paso, i) => (
            <div className="dm-paso" key={i}>
              {paso.texto && <p className="dm-p"><Prosa texto={paso.texto} /></p>}
              {paso.math && <Display tex={paso.math} />}
              {paso.figura && <Elemento el={{ figura: paso.figura, caption: paso.caption }} />}
              {paso.interactivo && <Elemento el={{ interactivo: paso.interactivo, props: paso.props, instruccion: paso.instruccion }} />}
            </div>
          ))}
          <div className="dm-qed">∎</div>
        </div>
      );
    }
    if (b.tipo === "ejercicio") {
      const env = ENTORNOS.ejercicio;
      return (
        <div className="dm-env" style={{ "--env": env.color }}>
          <div className="dm-env-hd">
            <span className="dm-env-nombre">{env.label}{b._num ? ` ${b._num}` : ""}</span>
            {b.titulo && <span className="dm-env-titulo"> — {b.titulo}</span>}
          </div>
          <div className="dm-env-body"><Cuerpo items={b.cuerpo} /></div>
          {b.pista && (
            <Colapsable etiqueta="Ver pista">
              <p className="dm-p"><Prosa texto={b.pista} /></p>
            </Colapsable>
          )}
          {b.solucion && (
            <Colapsable etiqueta="Ver solución">
              <Cuerpo items={b.solucion} />
            </Colapsable>
          )}
        </div>
      );
    }
    const env = ENTORNOS[b.tipo];
    if (env) {
      return (
        <div className="dm-env" style={{ "--env": env.color }}>
          <div className="dm-env-hd">
            <span className="dm-env-nombre">{env.label}{b._num ? ` ${b._num}` : ""}</span>
            {b.titulo && <span className="dm-env-titulo"> — {b.titulo}</span>}
          </div>
          <div className={`dm-env-body${ENV_CURSIVA.has(b.tipo) ? " dm-italic" : ""}`}>
            <Cuerpo items={b.cuerpo} />
          </div>
        </div>
      );
    }
    return <div style={{ color: "#e66" }}>Tipo de bloque desconocido: "{b.tipo}"</div>;
  }

  return (
    <div className={`dm-root${embebido ? " dm-embed" : ""}`}>
      <style>{CSS}</style>
      <header className={`dm-hero${embebido ? " dm-hero-sm" : ""}`}>
        {doc?.tema && <div className="dm-tag">{doc.tema}</div>}
        <h1>{doc?.titulo}</h1>
        {doc?.materia && <p className="dm-sub">{doc.materia}</p>}
      </header>
      <article className="dm-cw">
        {contenido.map((b, i) => <Bloque key={i} b={b} />)}
      </article>
    </div>
  );
}

function Colapsable({ etiqueta, children }) {
  const [abierto, setAbierto] = useState(false);
  return (
    <div className="dm-colap">
      <button className="dm-colap-btn" onClick={() => setAbierto((o) => !o)}>
        {abierto ? "▾" : "▸"} {etiqueta}
      </button>
      {abierto && <div className="dm-colap-body">{children}</div>}
    </div>
  );
}

function Faltante({ tipo, clave }) {
  return (
    <div style={{ padding: 16, border: "1px dashed #e66", borderRadius: 8, color: "#e88", fontSize: 13 }}>
      {tipo} no registrado: <code>{clave}</code>
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400;1,600&family=IBM+Plex+Mono:wght@400;600&family=Source+Serif+4:ital,opsz,wght@0,8..60,300;0,8..60,500;1,8..60,400&display=swap');
.dm-root { font-family: 'Source Serif 4', Georgia, serif; background: var(--bg); color: var(--text); min-height: 100vh; padding: 0 0 90px; }
.dm-root .katex { color: var(--text); }
.dm-display { background: var(--sunken); border-radius: 6px; padding: 16px 24px; margin: 16px 0; overflow-x: auto; }
.dm-display .katex { color: var(--math); }
.dm-display .katex-display { margin: 0; }
/* HERO */
.dm-hero { text-align: center; padding: 70px 24px 50px; border-bottom: 1px solid var(--border); }
.dm-tag { display: inline-block; font-family: 'IBM Plex Mono', monospace; font-size: 11px; letter-spacing: 0.2em; color: var(--azul-suave); margin-bottom: 18px; text-transform: uppercase; }
.dm-hero h1 { font-family: 'Playfair Display', serif; font-size: clamp(38px,7vw,72px); font-weight: 700; line-height: 1.05; color: var(--text); }
.dm-sub { font-family: 'IBM Plex Mono', monospace; font-size: 12px; letter-spacing: 0.18em; text-transform: uppercase; color: var(--text); margin-top: 16px; }
/* LAYOUT */
.dm-cw { max-width: 760px; margin: 0 auto; padding: 0 24px; }
.dm-embed { min-height: 0; padding-bottom: 60px; background: transparent; }
.dm-embed .dm-cw { padding-top: 26px; }
/* HERO compacto (documento incrustado en un curso) */
.dm-hero-sm { padding: 26px 24px 20px; text-align: center; border-bottom: 1px solid var(--border); }
.dm-hero-sm .dm-tag { margin-bottom: 10px; }
.dm-hero-sm h1 { font-size: clamp(22px, 3.2vw, 30px); }
.dm-hero-sm .dm-sub { margin-top: 8px; }
/* COLAPSABLE (pista / solución) */
.dm-colap { margin-top: 14px; }
.dm-colap-btn { font-family: 'IBM Plex Mono', monospace; font-size: 12px; letter-spacing: .04em; color: var(--env, var(--accent)); background: var(--surface); border: 1px solid var(--border-strong); border-radius: 6px; padding: 7px 13px; cursor: pointer; }
.dm-colap-btn:hover { background: var(--surface-2); }
.dm-colap-body { margin-top: 10px; padding-left: 14px; border-left: 2px solid var(--border-strong); }
.dm-seccion { font-family: 'Playfair Display', serif; font-size: clamp(22px,3.5vw,30px); font-weight: 700; color: var(--heading); margin: 54px 0 24px; padding-bottom: 12px; border-bottom: 1px solid var(--border); }
.dm-p { font-size: 16px; line-height: 1.85; color: var(--text-dim); font-weight: 300; margin: 10px 0; }
.dm-parrafo { margin: 18px 0; }
.dm-lista { list-style: none; padding-left: 0; margin: 10px 0; }
.dm-lista li { position: relative; padding: 4px 0 4px 22px; font-size: 16px; line-height: 1.8; color: var(--text-dim); font-weight: 300; }
.dm-lista li::before { content: '→'; position: absolute; left: 0; top: 5px; color: var(--accent); }
.dm-ref { color: var(--accent); font-style: normal; white-space: nowrap; }
.dm-em { font-style: italic; color: var(--text); }
/* ENTORNOS (amsthm) */
.dm-env { background: var(--surface); border: 1px solid var(--border); border-radius: 8px; padding: 20px 26px; margin: 22px 0; }
.dm-env-hd { display: flex; align-items: center; gap: 10px; margin-bottom: 10px; }
.dm-env-hd::before { content: ""; width: 3px; height: 1.05em; border-radius: 2px; background: var(--env, var(--accent)); flex-shrink: 0; }
.dm-env-nombre { font-family: 'IBM Plex Mono', monospace; font-size: 12px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--env, var(--accent)); font-weight: 600; }
.dm-env-titulo { font-family: 'Playfair Display', serif; font-style: italic; font-size: 17px; color: var(--heading); }
.dm-env-body.dm-italic .dm-p { font-style: italic; color: var(--text); }
/* DEMOSTRACIÓN */
.dm-demo { background: transparent; border: none; border-left: 2px solid var(--border-strong); border-radius: 0; padding: 6px 0 6px 22px; margin: 18px 0; }
.dm-demo-hd { font-family: 'Playfair Display', serif; font-style: italic; font-size: 16px; color: var(--text-muted); margin-bottom: 8px; }
.dm-paso { margin: 8px 0; }
.dm-qed { text-align: right; font-size: 18px; color: var(--text-dim); margin-top: 6px; }
/* FIGURAS */
.dm-fig { margin: 20px 0; padding: 18px; background: var(--sunken); border: 1px solid var(--border); border-radius: 10px; }
.dm-fig figcaption { text-align: center; font-size: 13px; color: var(--text-muted); font-style: italic; margin-top: 12px; }
.dm-fig-int { background: var(--accent-soft); border-color: var(--border); }
.dm-instr { font-family: 'IBM Plex Mono', monospace; font-size: 12px; color: var(--c-definicion); margin-bottom: 12px; letter-spacing: 0.04em; }
/* ── RESPONSIVO: celular ── */
@media (max-width: 640px) {
  .dm-cw { padding: 0 16px; }
  .dm-hero { padding: 48px 18px 36px; }
  .dm-env { padding: 16px 16px; }
  .dm-display { padding: 14px 14px; }
}
`;
