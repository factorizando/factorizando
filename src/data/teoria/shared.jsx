import { useState, useEffect, useRef } from "react";

/* ── KATEX ──────────────────────────────────────────────────────────────────── */

export function useKaTeX() {
  const [ready, setReady] = useState(
    typeof window !== "undefined" && !!window.katex
  );
  useEffect(() => {
    if (window.katex) { setReady(true); return; }
    if (!document.getElementById("katex-css")) {
      const link = document.createElement("link");
      link.id = "katex-css";
      link.rel = "stylesheet";
      link.href = "https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.16.9/katex.min.css";
      document.head.appendChild(link);
    }
    if (!document.getElementById("katex-js")) {
      const s = document.createElement("script");
      s.id = "katex-js";
      s.src = "https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.16.9/katex.min.js";
      s.onload = () => setReady(true);
      document.head.appendChild(s);
    }
  }, []);
  return ready;
}

export function M({ children }) {
  const ready = useKaTeX();
  const ref = useRef(null);
  useEffect(() => {
    if (ready && ref.current) {
      try { window.katex.render(children, ref.current, { throwOnError: false, displayMode: false }); }
      catch (_) {}
    }
  }, [ready, children]);
  return ready
    ? <span ref={ref} style={{ color: "#f5d060" }} />
    : <span style={{ fontFamily: "monospace", color: "#f5d060" }}>{children}</span>;
}

export function MB({ children, label }) {
  const ready = useKaTeX();
  const ref = useRef(null);
  useEffect(() => {
    if (ready && ref.current) {
      try { window.katex.render(children, ref.current, { throwOnError: false, displayMode: true }); }
      catch (_) {}
    }
  }, [ready, children]);
  return (
    <div className="math-block">
      {label && <div className="label">{label}</div>}
      {ready
        ? <div ref={ref} />
        : <div style={{ fontFamily: "monospace", textAlign: "center", color: "#f5d060" }}>{children}</div>}
    </div>
  );
}

/* ── SHARED STYLE ────────────────────────────────────────────────────────────── */

export const SHARED_STYLE = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400&family=IBM+Plex+Mono:wght@400;600&family=Source+Serif+4:ital,opsz,wght@0,8..60,300;0,8..60,600;1,8..60,300&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  .lr { font-family: 'Source Serif 4', Georgia, serif; background: #0d0d0f; color: #e8e4dc; min-height: 100vh; padding: 0 0 80px; overflow-x: hidden; }
  .lr::before { content: ''; position: fixed; inset: 0; background: radial-gradient(ellipse 80% 50% at 20% 10%, rgba(255,180,40,0.06) 0%, transparent 60%), radial-gradient(ellipse 60% 40% at 80% 80%, rgba(100,200,255,0.05) 0%, transparent 60%); pointer-events: none; z-index: 0; }
  .lr .katex { color: #e8e4dc; }
  .lr .math-block .katex, .lr .math-block .katex * { color: #f5d060; }
  .lr .math-block .katex-display { margin: 0; }
  .lr .katex-html { overflow-x: auto; overflow-y: hidden; }
  /* HERO */
  .hero { position: relative; text-align: center; padding: 80px 24px 64px; border-bottom: 1px solid rgba(255,255,255,0.07); z-index: 1; }
  .hero-tag { display: inline-block; font-family: 'IBM Plex Mono', monospace; font-size: 11px; letter-spacing: 0.2em; color: #f5c842; background: rgba(245,200,66,0.1); border: 1px solid rgba(245,200,66,0.25); padding: 5px 14px; border-radius: 2px; margin-bottom: 28px; text-transform: uppercase; }
  .hero h1 { font-family: 'Playfair Display', serif; font-size: clamp(48px,8vw,96px); font-weight: 700; line-height: 1; letter-spacing: -0.02em; margin-bottom: 24px; background: linear-gradient(135deg, #f5f0e8 0%, #c8b98a 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
  .hero-math { display: flex; justify-content: center; margin-bottom: 24px; }
  .hero-math .katex { font-size: 2.2em !important; }
  .hero-math .katex, .hero-math .katex * { color: #f5c842 !important; }
  .hero p { font-size: 17px; color: #a09880; max-width: 520px; margin: 0 auto; line-height: 1.7; font-weight: 300; }
  /* LAYOUT */
  .cw { max-width: 860px; margin: 0 auto; padding: 0 24px; position: relative; z-index: 1; }
  .section { margin-top: 64px; }
  .sec-hd { display: flex; align-items: center; gap: 14px; margin-bottom: 28px; }
  .sec-num { font-family: 'IBM Plex Mono', monospace; font-size: 11px; color: #f5c842; letter-spacing: 0.15em; background: rgba(245,200,66,0.1); border: 1px solid rgba(245,200,66,0.2); padding: 3px 10px; border-radius: 2px; flex-shrink: 0; }
  .section h2 { font-family: 'Playfair Display', serif; font-size: clamp(22px,3.5vw,32px); font-weight: 700; color: #f0ece3; letter-spacing: -0.01em; }
  /* CARD */
  .card { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07); border-radius: 8px; padding: 28px 32px; margin-bottom: 18px; transition: border-color 0.2s; }
  .card:hover { border-color: rgba(245,200,66,0.2); }
  .card h3 { font-family: 'Playfair Display', serif; font-size: 19px; color: #f5c842; margin-bottom: 14px; font-style: italic; }
  .card p, .card li { font-size: 15.5px; line-height: 1.85; color: #c4bfb3; font-weight: 300; }
  .card ul { list-style: none; padding-left: 0; }
  .card li { padding: 5px 0 5px 22px; position: relative; }
  .card li::before { content: '→'; position: absolute; left: 0; top: 7px; color: #f5c842; font-size: 13px; }
  /* MATH BLOCK */
  .math-block { background: rgba(0,0,0,0.38); border-left: 3px solid #f5c842; border-radius: 0 6px 6px 0; padding: 20px 28px; margin: 20px 0; overflow-x: auto; }
  .math-block .label { font-family: 'IBM Plex Mono', monospace; font-size: 10px; letter-spacing: 0.22em; color: #f5c842; text-transform: uppercase; margin-bottom: 12px; opacity: 0.65; }
  /* TIP BOX */
  .tip-box { background: rgba(100,160,255,0.06); border: 1px solid rgba(100,160,255,0.2); border-radius: 8px; padding: 18px 22px; margin-top: 20px; }
  .tip-box .tip-label { font-family: 'IBM Plex Mono', monospace; font-size: 10px; letter-spacing: 0.2em; color: #78b0ff; text-transform: uppercase; margin-bottom: 8px; }
  .tip-box p { font-size: 14.5px; color: #b0c8f0; line-height: 1.7; font-weight: 300; }
  /* EXAMPLE CARDS */
  .ex-grid { display: grid; gap: 14px; margin-bottom: 8px; }
  .ex-card { background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.07); border-radius: 8px; overflow: hidden; transition: transform 0.2s, border-color 0.2s; }
  .ex-card:hover { transform: translateY(-2px); border-color: rgba(245,200,66,0.25); }
  .ex-hd { display: flex; justify-content: space-between; align-items: center; padding: 16px 22px; background: rgba(245,200,66,0.04); border-bottom: 1px solid rgba(255,255,255,0.05); cursor: pointer; user-select: none; gap: 12px; }
  .ex-label { font-family: 'IBM Plex Mono', monospace; font-size: 10.5px; color: rgba(245,200,66,0.7); letter-spacing: 0.12em; margin-bottom: 8px; text-transform: uppercase; }
  .ex-prob { overflow-x: auto; }
  .ex-prob .katex { font-size: 1.08em; color: #f0ece3; }
  .ex-prob .katex * { color: #f0ece3; }
  .chevron { color: #f5c842; font-size: 18px; transition: transform 0.25s; flex-shrink: 0; line-height: 1; }
  .chevron.open { transform: rotate(180deg); }
  .ex-body { padding: 0 24px; max-height: 0; overflow: hidden; transition: max-height 0.45s ease, padding 0.3s; }
  .ex-body.open { max-height: 1600px; padding: 24px; }
  /* STEPS */
  .step { display: flex; gap: 14px; align-items: flex-start; margin-bottom: 16px; }
  .step-n { flex-shrink: 0; width: 24px; height: 24px; background: #f5c842; color: #0d0d0f; border-radius: 50%; font-family: 'IBM Plex Mono', monospace; font-size: 11px; font-weight: 600; display: flex; align-items: center; justify-content: center; margin-top: 3px; }
  .step-n.dim { background: rgba(255,255,255,0.15); color: #f0ece3; }
  .step-t { font-size: 14.5px; color: #c4bfb3; line-height: 1.75; font-weight: 300; flex: 1; }
  .result-box { background: rgba(245,200,66,0.08); border: 1px solid rgba(245,200,66,0.28); border-radius: 6px; padding: 14px 20px; margin-top: 16px; text-align: center; overflow-x: auto; }
  .result-box .katex { font-size: 1.05em; }
  .result-box .katex, .result-box .katex * { color: #f5d060 !important; }
  /* ACCORDION */
  .accordion { margin-top: 4px; display: grid; gap: 10px; }
  .acc-item { background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.07); border-radius: 8px; overflow: hidden; }
  .acc-hd { display: flex; justify-content: space-between; align-items: center; padding: 14px 20px; cursor: pointer; user-select: none; transition: background 0.2s; }
  .acc-hd:hover { background: rgba(245,200,66,0.05); }
  .acc-title { font-family: 'IBM Plex Mono', monospace; font-size: 11.5px; letter-spacing: 0.12em; color: #f5c842; text-transform: uppercase; }
  .acc-count { font-family: 'IBM Plex Mono', monospace; font-size: 10px; color: rgba(245,200,66,0.4); margin-left: 8px; }
  .acc-body { padding: 0 20px; max-height: 0; overflow: hidden; transition: max-height 0.55s ease, padding 0.3s; }
  .acc-body.open { max-height: 4000px; padding: 20px; }
  /* QUIZ */
  .qz-card { background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.08); border-radius: 10px; padding: 22px 26px; margin-bottom: 14px; transition: border-color 0.25s; }
  .qz-card.correct { border-color: rgba(80,220,120,0.4); background: rgba(80,220,120,0.03); }
  .qz-card.wrong { border-color: rgba(255,100,100,0.35); background: rgba(255,100,100,0.025); }
  .qz-num { font-family: 'IBM Plex Mono', monospace; font-size: 10px; letter-spacing: 0.2em; color: #5a5550; text-transform: uppercase; margin-bottom: 10px; }
  .qz-q { font-size: 15px; color: #e0dcd4; margin-bottom: 14px; line-height: 1.6; }
  .qz-prob { text-align: center; margin-bottom: 18px; padding: 14px 12px; background: rgba(0,0,0,0.3); border-radius: 6px; overflow-x: auto; }
  .qz-prob .katex { font-size: 1.18em; }
  .qz-prob .katex, .qz-prob .katex * { color: #f5c842 !important; }
  .opts { display: grid; grid-template-columns: 1fr 1fr; gap: 9px; margin-bottom: 14px; }
  .opt { padding: 11px 14px; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.1); border-radius: 6px; color: #c4bfb3; cursor: pointer; transition: all 0.2s; text-align: center; font-size: 15px; font-family: inherit; }
  .opt:hover:not(:disabled) { background: rgba(245,200,66,0.1); border-color: rgba(245,200,66,0.4); color: #f5d060; }
  .opt.ok   { background: rgba(80,220,120,0.15); border-color: rgba(80,220,120,0.5); color: #6ddc9a; }
  .opt.bad  { background: rgba(255,100,100,0.12); border-color: rgba(255,100,100,0.4); color: #ff8080; }
  .opt.show-ok { background: rgba(80,220,120,0.08); border-color: rgba(80,220,120,0.3); color: #6ddc9a; }
  .opt:disabled { cursor: default; }
  .fb { font-size: 14px; padding: 14px 16px; border-radius: 6px; margin-top: 6px; line-height: 1.65; }
  .fb.ok  { background: rgba(80,220,120,0.1);  border: 1px solid rgba(80,220,120,0.2);  color: #8ee8a8; }
  .fb.bad { background: rgba(255,100,100,0.08); border: 1px solid rgba(255,100,100,0.18); color: #ffaaaa; }
  .fb-steps { margin-top: 14px; padding-top: 14px; border-top: 1px solid rgba(255,100,100,0.15); }
  .fb-steps-title { font-family: 'IBM Plex Mono', monospace; font-size: 9.5px; letter-spacing: 0.2em; color: rgba(255,150,150,0.7); text-transform: uppercase; margin-bottom: 14px; }
  /* GRAPH */
  .graph-container { background: rgba(0,0,0,0.35); border: 1px solid rgba(255,255,255,0.07); border-radius: 10px; padding: 22px 20px 18px; margin: 24px 0; }
  .graph-title { font-family: 'IBM Plex Mono', monospace; font-size: 10.5px; letter-spacing: 0.2em; color: rgba(245,200,66,0.75); text-transform: uppercase; margin-bottom: 16px; text-align: center; }
  .graph-svg { width: 100%; max-width: 460px; display: block; margin: 0 auto; }
  .graph-caption { font-size: 13px; color: #7a756e; text-align: center; margin-top: 14px; font-weight: 300; font-style: italic; line-height: 1.6; }
  /* MISC */
  .divider { height: 1px; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent); margin: 56px 0; }
  .sub-label { font-family: 'IBM Plex Mono', monospace; font-size: 9.5px; letter-spacing: 0.22em; color: rgba(200,195,185,0.38); text-transform: uppercase; margin: 32px 0 14px; }
  .hint { font-size: 13.5px; color: #6a6560; margin-bottom: 18px; font-weight: 300; line-height: 1.6; }
`;

/* ── SHARED COMPONENTS ───────────────────────────────────────────────────────── */

export function StepRow({ s, i, dim }) {
  return (
    <div className="step">
      <div className={`step-n${dim ? " dim" : ""}`}>{i + 1}</div>
      <div className="step-t">
        {s.pre}
        {s.math  && <M>{s.math}</M>}
        {s.post}
        {s.math2 && <M>{s.math2}</M>}
        {s.post2}
        {s.math3 && <M>{s.math3}</M>}
        {s.post3}
      </div>
    </div>
  );
}

export function EjCard({ ej, prefix }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="ex-card">
      <div className="ex-hd" onClick={() => setOpen(!open)}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div className="ex-label">{prefix}{ej.titulo}</div>
          <div className="ex-prob"><M>{ej.prob}</M></div>
        </div>
        <span className={`chevron${open ? " open" : ""}`}>▾</span>
      </div>
      <div className={`ex-body${open ? " open" : ""}`}>
        {ej.steps.map((s, i) => <StepRow key={i} s={s} i={i} />)}
        <div className="result-box">✓&nbsp;&nbsp;<M>{ej.res}</M></div>
      </div>
    </div>
  );
}

export function QzCard({ q, label }) {
  const [sel, setSel] = useState(null);
  const done = sel !== null;
  const ok   = sel === q.ans;
  return (
    <div className={`qz-card${done ? (ok ? " correct" : " wrong") : ""}`}>
      <div className="qz-num">{label}</div>
      <div className="qz-q">{q.q}</div>
      {q.prob && <div className="qz-prob"><M>{q.prob}</M></div>}
      <div className="opts">
        {q.opts.map((o, i) => {
          let cls = "opt";
          if (done) {
            if (i === q.ans)                cls += " show-ok";
            if (i === sel && sel !== q.ans) cls += " bad";
            if (i === sel && sel === q.ans) cls += " ok";
          }
          return <button key={i} className={cls} disabled={done} onClick={() => setSel(i)}><M>{o}</M></button>;
        })}
      </div>
      {done && (
        <div className={`fb ${ok ? "ok" : "bad"}`}>
          {ok ? (
            <span>✓ Correcto.{q.exp ? "  " + q.exp : ""}</span>
          ) : (
            <div>
              <div style={{ marginBottom: 12 }}>
                ✗ Incorrecto. La respuesta correcta es&nbsp;<M>{q.opts[q.ans]}</M>
              </div>
              {q.steps && (
                <div className="fb-steps">
                  <div className="fb-steps-title">Solución paso a paso</div>
                  {q.steps.map((s, i) => <StepRow key={i} s={s} i={i} dim />)}
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
