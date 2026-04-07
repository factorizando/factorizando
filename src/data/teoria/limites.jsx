import { useState, useEffect, useRef } from "react";

/* ── KATEX ──────────────────────────────────────────────────────────────────── */

function useKaTeX() {
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
      const script = document.createElement("script");
      script.id = "katex-js";
      script.src = "https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.16.9/katex.min.js";
      script.onload = () => setReady(true);
      document.head.appendChild(script);
    }
  }, []);
  return ready;
}

function M({ children }) {
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

function MB({ children, label }) {
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

/* ── STYLES ──────────────────────────────────────────────────────────────────── */

const style = `
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
  /* GRAPH */
  .graph-container { background: rgba(0,0,0,0.35); border: 1px solid rgba(255,255,255,0.07); border-radius: 10px; padding: 22px 20px 18px; margin: 24px 0; }
  .graph-title { font-family: 'IBM Plex Mono', monospace; font-size: 10.5px; letter-spacing: 0.2em; color: rgba(245,200,66,0.75); text-transform: uppercase; margin-bottom: 16px; text-align: center; }
  .graph-svg { width: 100%; max-width: 460px; display: block; margin: 0 auto; }
  .graph-caption { font-size: 13px; color: #7a756e; text-align: center; margin-top: 14px; font-weight: 300; font-style: italic; line-height: 1.6; }
  /* PROP TABLE */
  .prop-table { width: 100%; border-collapse: collapse; margin-top: 10px; }
  .prop-table th { font-family: 'IBM Plex Mono', monospace; font-size: 11px; letter-spacing: 0.15em; color: #f5c842; text-transform: uppercase; text-align: left; padding: 10px 16px; border-bottom: 1px solid rgba(255,255,255,0.08); font-weight: 400; }
  .prop-table td { padding: 11px 16px; font-size: 14px; color: #c4bfb3; border-bottom: 1px solid rgba(255,255,255,0.04); vertical-align: middle; }
  .prop-table td:first-child { color: #e0dcd4; font-weight: 300; }
  .prop-table tr:hover td { background: rgba(255,255,255,0.02); }
  /* INDET CHIPS */
  .indet-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(90px,1fr)); gap: 10px; margin-top: 14px; }
  .indet-chip { background: rgba(0,0,0,0.4); border: 1px solid rgba(255,255,255,0.08); border-radius: 6px; padding: 18px 8px; text-align: center; transition: border-color 0.2s, background 0.2s; overflow: hidden; }
  .indet-chip:hover { border-color: rgba(245,200,66,0.35); background: rgba(245,200,66,0.04); }
  .indet-chip .katex { font-size: 1.2em; }
  .indet-chip .katex, .indet-chip .katex * { color: #f5d060 !important; }
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
  .ex-body.open { max-height: 1400px; padding: 24px; }
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
  /* METHOD BLOCK */
  .method-block { border: 1px solid rgba(255,255,255,0.06); border-radius: 10px; overflow: hidden; margin-bottom: 32px; }
  .method-desc { padding: 24px 28px; background: rgba(255,255,255,0.02); border-bottom: 1px solid rgba(255,255,255,0.06); }
  .method-desc h3 { font-family: 'Playfair Display', serif; font-size: 20px; color: #f5c842; margin-bottom: 12px; font-style: italic; }
  .method-desc p { font-size: 15px; color: #c4bfb3; line-height: 1.7; font-weight: 300; }
  .method-inner { padding: 22px 26px; }
  .method-sub { font-family: 'IBM Plex Mono', monospace; font-size: 9.5px; letter-spacing: 0.22em; color: rgba(245,200,66,0.55); text-transform: uppercase; margin: 24px 0 14px; }
  .method-sub:first-child { margin-top: 0; }
  /* MISC */
  .divider { height: 1px; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent); margin: 56px 0; }
  .sub-label { font-family: 'IBM Plex Mono', monospace; font-size: 9.5px; letter-spacing: 0.22em; color: rgba(200,195,185,0.38); text-transform: uppercase; margin: 32px 0 14px; }
  .hint { font-size: 13.5px; color: #6a6560; margin-bottom: 18px; font-weight: 300; line-height: 1.6; }
`;

/* ── LIMIT GRAPH (SVG) ──────────────────────────────────────────────────────── */

function LimitGraph() {
  const W=460, H=240, ml=55, mr=20, mt=22, mb=45;
  const pw=W-ml-mr, ph=H-mt-mb;          // 385, 173
  const xDom=3.5, yDom=4.3;

  const tx = x => ml + (x / xDom) * pw;
  const ty = y => (H - mb) - (y / yDom) * ph;

  // f(x) = x+1, two polyline segments with hole at x=1 (y=2)
  const seg1 = Array.from({ length: 20 }, (_, i) => {
    const x = 0.06 + i * 0.046; // 0.06 → 0.93
    return `${tx(x).toFixed(1)},${ty(x + 1).toFixed(1)}`;
  }).join(" ");

  const seg2 = Array.from({ length: 28 }, (_, i) => {
    const x = 1.08 + i * 0.085; // 1.08 → 3.46
    return `${tx(x).toFixed(1)},${ty(x + 1).toFixed(1)}`;
  }).join(" ");

  const hx = tx(1),  hy = ty(2);
  const oy = ty(0),  ox = tx(0);

  return (
    <div className="graph-container">
      <div className="graph-title">Comportamiento de f(x) cerca de x = a</div>
      <svg viewBox={`0 0 ${W} ${H}`} className="graph-svg">
        <defs>
          <marker id="arH" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
            <polygon points="0,0 7,3.5 0,7" fill="rgba(200,195,185,0.4)" />
          </marker>
          <marker id="arV" markerWidth="7" markerHeight="7" refX="3.5" refY="7" orient="auto">
            <polygon points="0,7 3.5,0 7,7" fill="rgba(200,195,185,0.4)" />
          </marker>
        </defs>

        {/* Subtle grid */}
        {[1,2,3].map(v => (
          <line key={`gx${v}`} x1={tx(v)} y1={mt} x2={tx(v)} y2={oy} stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
        ))}
        {[1,2,3,4].map(v => (
          <line key={`gy${v}`} x1={ml} y1={ty(v)} x2={W-mr} y2={ty(v)} stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
        ))}

        {/* Axes */}
        <line x1={ml-6} y1={oy} x2={W-mr+4} y2={oy} stroke="rgba(200,195,185,0.38)" strokeWidth="1.5" markerEnd="url(#arH)" />
        <line x1={ox} y1={H-mb+6} x2={ox} y2={mt-4} stroke="rgba(200,195,185,0.38)" strokeWidth="1.5" markerEnd="url(#arV)" />

        {/* Tick marks */}
        {[1,2,3].map(v => <line key={`xt${v}`} x1={tx(v)} y1={oy-3} x2={tx(v)} y2={oy+3} stroke="rgba(200,195,185,0.22)" strokeWidth="1.5" />)}
        {[1,2,3,4].map(v => <line key={`yt${v}`} x1={ox-3} y1={ty(v)} x2={ox+3} y2={ty(v)} stroke="rgba(200,195,185,0.22)" strokeWidth="1.5" />)}

        {/* Axis labels */}
        <text x={W-mr+8} y={oy+5} fill="rgba(200,195,185,0.45)" fontSize="13" fontFamily="IBM Plex Mono,monospace">x</text>
        <text x={ox} y={mt-7} fill="rgba(200,195,185,0.45)" fontSize="13" fontFamily="IBM Plex Mono,monospace" textAnchor="middle">y</text>

        {/* Dashed guide lines to the hole */}
        <line x1={hx} y1={oy} x2={hx} y2={hy+6} stroke="#f5c842" strokeWidth="1.2" strokeDasharray="5,4" opacity="0.5" />
        <line x1={ml} y1={hy} x2={hx-6} y2={hy} stroke="#f5c842" strokeWidth="1.2" strokeDasharray="5,4" opacity="0.5" />

        {/* Curve */}
        <polyline points={seg1} fill="none" stroke="#60b8d8" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points={seg2} fill="none" stroke="#60b8d8" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />

        {/* Open circle (hole at x=1) */}
        <circle cx={hx} cy={hy} r="5.5" fill="#0d0d0f" stroke="#60b8d8" strokeWidth="2.2" />

        {/* Approach labels */}
        <text x={hx-62} y={ty(1.52)} fill="#f0c860" fontSize="10.5" fontFamily="IBM Plex Mono,monospace" textAnchor="middle" opacity="0.85">x→a⁻</text>
        <text x={hx+64} y={ty(2.48)} fill="#f0c860" fontSize="10.5" fontFamily="IBM Plex Mono,monospace" textAnchor="middle" opacity="0.85">x→a⁺</text>

        {/* Axis value labels */}
        <text x={hx} y={oy+17} textAnchor="middle" fill="#f5c842" fontSize="13" fontFamily="IBM Plex Mono,monospace" fontWeight="600">a</text>
        <text x={ml-10} y={hy+5} textAnchor="end" fill="#f5c842" fontSize="13" fontFamily="IBM Plex Mono,monospace" fontWeight="600">L</text>

        {/* f(x) label */}
        <text x={tx(2.75)} y={ty(3.8)-6} fill="#60b8d8" fontSize="12.5" fontFamily="IBM Plex Mono,monospace" fontStyle="italic">f(x)</text>

        {/* "Not defined" annotation */}
        <text x={hx+9} y={hy-10} fill="rgba(200,195,185,0.38)" fontSize="9" fontFamily="IBM Plex Mono,monospace">f(a) sin definir</text>
      </svg>
      <p className="graph-caption">
        Aunque <em>f(a)</em> no esté definida en <em>x&nbsp;=&nbsp;a</em>,
        la función se aproxima al valor <em>L</em> desde ambos lados.
      </p>
    </div>
  );
}

/* ── HELPER COMPONENTS ──────────────────────────────────────────────────────── */

function StepRow({ s, i, dim }) {
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

function EjCard({ ej, prefix }) {
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

function QzCard({ q, label }) {
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

function PropAccordion({ nombre, ejercicios, startIdx }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="acc-item">
      <div className="acc-hd" onClick={() => setOpen(!open)}>
        <span className="acc-title">Propiedad de {nombre} <span className="acc-count">· 5 ejercicios</span></span>
        <span className={`chevron${open ? " open" : ""}`}>▾</span>
      </div>
      <div className={`acc-body${open ? " open" : ""}`}>
        {ejercicios.map((q, i) => (
          <QzCard key={i} q={q} label={`Ejercicio ${startIdx + i + 1} de 30`} />
        ))}
      </div>
    </div>
  );
}

/* ── DATA ───────────────────────────────────────────────────────────────────── */

// ── Propiedades — 2 complex examples ─────────────────────────────────────────

const propEjemplos = [
  {
    titulo: "Combinando varias propiedades",
    prob: String.raw`\displaystyle\lim_{x\to 2}\left[3x^2+2x-4\right]`,
    steps: [
      { pre: "La función es un polinomio (continua en ℝ): aplicamos sustitución directa usando las propiedades de suma, constante y potencia." },
      { pre: "Separamos: ", math: String.raw`3\cdot\lim_{x\to 2}x^2 + 2\cdot\lim_{x\to 2}x - \lim_{x\to 2}4` },
      { pre: "Evaluamos cada límite: ", math: String.raw`\lim x^2 = 4`, post: ",  ", math2: String.raw`\lim x = 2`, post2: ",  ", math3: String.raw`\lim 4 = 4` },
      { pre: "Resultado: ", math: String.raw`3(4)+2(2)-4 = 12+4-4 = 12` },
    ],
    res: String.raw`\displaystyle\lim_{x\to 2}\left[3x^2+2x-4\right] = 12`,
  },
  {
    titulo: "Propiedad de cociente — verificar el denominador",
    prob: String.raw`\displaystyle\lim_{x\to -1}\dfrac{x^3-2x}{x^2+3}`,
    steps: [
      { pre: "Primero verificamos que el denominador no sea cero en ", math: String.raw`x=-1`, post: ":  ", math2: String.raw`(-1)^2+3 = 4 \neq 0`, post2: " ✓" },
      { pre: "Aplicamos la propiedad de cociente: límite del cociente = cociente de los límites." },
      { pre: "Numerador: ", math: String.raw`(-1)^3 - 2(-1) = -1+2 = 1` },
      { pre: "Denominador: ", math: String.raw`(-1)^2+3 = 4` },
      { pre: "Resultado: ", math: String.raw`\dfrac{1}{4}` },
    ],
    res: String.raw`\displaystyle\lim_{x\to -1}\dfrac{x^3-2x}{x^2+3} = \dfrac{1}{4}`,
  },
];

// ── Propiedades — 5 exercises per property ────────────────────────────────────

const propEjercicios = {
  "Suma": [
    {
      q: "Calcula el límite:", prob: String.raw`\displaystyle\lim_{x\to 2}\!\left[x^2+3x\right]`,
      opts: [String.raw`10`, String.raw`8`, String.raw`12`, String.raw`14`], ans: 0, exp: "(2)²+3(2)=4+6=10.",
      steps: [
        { pre: "Propiedad de suma: ", math: String.raw`\lim[f+g] = \lim f + \lim g` },
        { pre: "Calculamos por separado: ", math: String.raw`\lim_{x\to 2}x^2=4`, post: "  y  ", math2: String.raw`\lim_{x\to 2}3x=6` },
        { pre: "Suma: ", math: String.raw`4+6 = 10` },
      ],
    },
    {
      q: "Calcula el límite:", prob: String.raw`\displaystyle\lim_{x\to -1}\!\left[x^3+2x\right]`,
      opts: [String.raw`-3`, String.raw`-1`, String.raw`1`, String.raw`3`], ans: 0, exp: "(-1)³+2(-1)=-1-2=-3.",
      steps: [
        { pre: "Aplicamos suma de límites: ", math: String.raw`\lim x^3 + \lim 2x` },
        { pre: "Evaluamos: ", math: String.raw`(-1)^3=-1`, post: "  y  ", math2: String.raw`2(-1)=-2` },
        { pre: "Suma: ", math: String.raw`-1+(-2) = -3` },
      ],
    },
    {
      q: "Si lim f(x) = 5 y lim g(x) = −2, ¿cuánto vale lim[f(x) + g(x)]?",
      prob: String.raw`\displaystyle\lim_{x\to a}f(x)=5,\quad\lim_{x\to a}g(x)=-2`,
      opts: [String.raw`3`, String.raw`7`, String.raw`-10`, String.raw`-3`], ans: 0, exp: "L+M = 5+(−2) = 3.",
      steps: [
        { pre: "Propiedad de suma: ", math: String.raw`\lim[f+g] = L+M` },
        { pre: "Sustituimos ", math: String.raw`L=5`, post: "  y  ", math2: String.raw`M=-2` },
        { pre: "Resultado: ", math: String.raw`5+(-2) = 3` },
      ],
    },
    {
      q: "Calcula el límite:", prob: String.raw`\displaystyle\lim_{x\to 0}\!\left[3x^2+5x+2\right]`,
      opts: [String.raw`0`, String.raw`1`, String.raw`2`, String.raw`5`], ans: 2, exp: "3(0)²+5(0)+2=2.",
      steps: [
        { pre: "Aplicamos suma de límites tres veces: ", math: String.raw`\lim 3x^2 + \lim 5x + \lim 2` },
        { pre: "Evaluamos en x=0: ", math: String.raw`0+0+2 = 2` },
      ],
    },
    {
      q: "Calcula el límite:", prob: String.raw`\displaystyle\lim_{x\to 3}\!\left[(x+1)+(x^2-5)\right]`,
      opts: [String.raw`4`, String.raw`6`, String.raw`8`, String.raw`10`], ans: 2, exp: "(3+1)+(9-5)=4+4=8.",
      steps: [
        { pre: "Propiedad de suma: ", math: String.raw`\lim(x+1) + \lim(x^2-5)` },
        { pre: "Evaluamos en x=3: ", math: String.raw`(3+1)=4`, post: "  y  ", math2: String.raw`(9-5)=4` },
        { pre: "Suma: ", math: String.raw`4+4 = 8` },
      ],
    },
  ],
  "Diferencia": [
    {
      q: "Calcula el límite:", prob: String.raw`\displaystyle\lim_{x\to 2}\!\left[x^2-3x\right]`,
      opts: [String.raw`-2`, String.raw`0`, String.raw`2`, String.raw`4`], ans: 0, exp: "4−6=−2.",
      steps: [
        { pre: "Propiedad de diferencia: ", math: String.raw`\lim x^2 - \lim 3x` },
        { pre: "Evaluamos en x=2: ", math: String.raw`4-6 = -2` },
      ],
    },
    {
      q: "Si lim f(x) = 8 y lim g(x) = 3, ¿cuánto vale lim[f − g]?",
      prob: String.raw`\displaystyle\lim_{x\to a}f(x)=8,\quad\lim_{x\to a}g(x)=3`,
      opts: [String.raw`5`, String.raw`11`, String.raw`24`, String.raw`-5`], ans: 0, exp: "L−M=8−3=5.",
      steps: [
        { pre: "Propiedad de diferencia: ", math: String.raw`\lim[f-g] = L-M = 8-3 = 5` },
      ],
    },
    {
      q: "Calcula el límite:", prob: String.raw`\displaystyle\lim_{x\to 1}\!\left[x^3-x^2\right]`,
      opts: [String.raw`-1`, String.raw`0`, String.raw`1`, String.raw`2`], ans: 1, exp: "1−1=0.",
      steps: [
        { pre: "Evaluamos en x=1: ", math: String.raw`(1)^3-(1)^2 = 1-1 = 0` },
      ],
    },
    {
      q: "Calcula el límite:", prob: String.raw`\displaystyle\lim_{x\to -2}\!\left[x^2-2x\right]`,
      opts: [String.raw`0`, String.raw`4`, String.raw`8`, String.raw`-8`], ans: 2, exp: "4−(−4)=8.",
      steps: [
        { pre: "Evaluamos en x=−2: ", math: String.raw`(-2)^2 - 2(-2) = 4+4 = 8` },
      ],
    },
    {
      q: "Si lim f(x) = 12 y lim g(x) = 5, ¿cuánto vale lim[f − g]?",
      prob: String.raw`\displaystyle\lim_{x\to a}f(x)=12,\quad\lim_{x\to a}g(x)=5`,
      opts: [String.raw`7`, String.raw`17`, String.raw`60`, String.raw`-7`], ans: 0, exp: "12−5=7.",
      steps: [
        { pre: "Propiedad de diferencia: ", math: String.raw`L-M = 12-5 = 7` },
      ],
    },
  ],
  "Producto": [
    {
      q: "Calcula el límite:", prob: String.raw`\displaystyle\lim_{x\to 3}\!\left[x\cdot(x+1)\right]`,
      opts: [String.raw`9`, String.raw`12`, String.raw`15`, String.raw`6`], ans: 1, exp: "3·4=12.",
      steps: [
        { pre: "Propiedad de producto: ", math: String.raw`\lim x \cdot \lim(x+1)` },
        { pre: "Evaluamos en x=3: ", math: String.raw`3 \cdot 4 = 12` },
      ],
    },
    {
      q: "Si lim f(x) = 4 y lim g(x) = −2, ¿cuánto vale lim[f·g]?",
      prob: String.raw`\displaystyle\lim_{x\to a}f(x)=4,\quad\lim_{x\to a}g(x)=-2`,
      opts: [String.raw`2`, String.raw`-8`, String.raw`8`, String.raw`-6`], ans: 1, exp: "4·(−2)=−8.",
      steps: [
        { pre: "Propiedad de producto: ", math: String.raw`L \cdot M = 4\cdot(-2) = -8` },
      ],
    },
    {
      q: "Calcula el límite:", prob: String.raw`\displaystyle\lim_{x\to -1}\!\left[x^2\cdot(2x+3)\right]`,
      opts: [String.raw`1`, String.raw`-1`, String.raw`2`, String.raw`-2`], ans: 0, exp: "(1)·(1)=1.",
      steps: [
        { pre: "Evaluamos en x=−1: ", math: String.raw`(-1)^2=1`, post: "  y  ", math2: String.raw`2(-1)+3=1` },
        { pre: "Producto: ", math: String.raw`1 \cdot 1 = 1` },
      ],
    },
    {
      q: "Calcula el límite:", prob: String.raw`\displaystyle\lim_{x\to 2}\!\left[(x-1)\cdot(x+2)\right]`,
      opts: [String.raw`4`, String.raw`6`, String.raw`8`, String.raw`3`], ans: 0, exp: "1·4=4.",
      steps: [
        { pre: "Evaluamos en x=2: ", math: String.raw`(2-1)\cdot(2+2) = 1\cdot 4 = 4` },
      ],
    },
    {
      q: "Si lim f(x) = 3 y lim g(x) = 3, ¿cuánto vale lim[f·g]?",
      prob: String.raw`\displaystyle\lim_{x\to a}f(x)=3,\quad\lim_{x\to a}g(x)=3`,
      opts: [String.raw`6`, String.raw`9`, String.raw`0`, String.raw`3`], ans: 1, exp: "3·3=9.",
      steps: [
        { pre: "Propiedad de producto: ", math: String.raw`L \cdot M = 3 \cdot 3 = 9` },
      ],
    },
  ],
  "Cociente": [
    {
      q: "Calcula el límite:", prob: String.raw`\displaystyle\lim_{x\to 2}\dfrac{x^2+2x}{x+2}`,
      opts: [String.raw`1`, String.raw`2`, String.raw`4`, String.raw`0`], ans: 1, exp: "8/4=2.",
      steps: [
        { pre: "Verificamos denominador ≠ 0 en x=2:  2+2=4 ✓" },
        { pre: "Propiedad de cociente: ", math: String.raw`\dfrac{\lim(x^2+2x)}{\lim(x+2)} = \dfrac{4+4}{2+2} = \dfrac{8}{4} = 2` },
      ],
    },
    {
      q: "Si lim f(x) = 10 y lim g(x) = 2, ¿cuánto vale lim[f/g]?",
      prob: String.raw`\displaystyle\lim_{x\to a}f(x)=10,\quad\lim_{x\to a}g(x)=2`,
      opts: [String.raw`5`, String.raw`8`, String.raw`12`, String.raw`20`], ans: 0, exp: "10/2=5.",
      steps: [
        { pre: "Propiedad de cociente: ", math: String.raw`\dfrac{L}{M} = \dfrac{10}{2} = 5` },
      ],
    },
    {
      q: "Calcula el límite:", prob: String.raw`\displaystyle\lim_{x\to 4}\dfrac{x+2}{x-2}`,
      opts: [String.raw`1`, String.raw`3`, String.raw`4`, String.raw`6`], ans: 1, exp: "6/2=3.",
      steps: [
        { pre: "Verificamos denominador ≠ 0 en x=4:  4−2=2 ✓" },
        { pre: "Evaluamos: ", math: String.raw`\dfrac{4+2}{4-2} = \dfrac{6}{2} = 3` },
      ],
    },
    {
      q: "Si lim f(x) = 15 y lim g(x) = 3, ¿cuánto vale lim[f/g]?",
      prob: String.raw`\displaystyle\lim_{x\to a}f(x)=15,\quad\lim_{x\to a}g(x)=3`,
      opts: [String.raw`5`, String.raw`12`, String.raw`45`, String.raw`18`], ans: 0, exp: "15/3=5.",
      steps: [
        { pre: "Propiedad de cociente: ", math: String.raw`\dfrac{L}{M} = \dfrac{15}{3} = 5` },
      ],
    },
    {
      q: "Calcula el límite:", prob: String.raw`\displaystyle\lim_{x\to 1}\dfrac{x^2+x}{x+1}`,
      opts: [String.raw`1`, String.raw`2`, String.raw`0`, String.raw`3`], ans: 0, exp: "2/2=1.",
      steps: [
        { pre: "Verificamos denominador ≠ 0 en x=1:  1+1=2 ✓" },
        { pre: "Evaluamos: ", math: String.raw`\dfrac{1+1}{1+1} = \dfrac{2}{2} = 1` },
      ],
    },
  ],
  "Constante": [
    {
      q: "Si lim f(x) = 4, ¿cuánto vale lim[5·f(x)]?",
      prob: String.raw`\displaystyle\lim_{x\to a}f(x)=4`,
      opts: [String.raw`9`, String.raw`1`, String.raw`20`, String.raw`-1`], ans: 2, exp: "5·4=20.",
      steps: [
        { pre: "Propiedad de constante: ", math: String.raw`c \cdot L = 5 \cdot 4 = 20` },
      ],
    },
    {
      q: "Calcula el límite:", prob: String.raw`\displaystyle\lim_{x\to 3}\left[4x^2\right]`,
      opts: [String.raw`12`, String.raw`24`, String.raw`36`, String.raw`48`], ans: 2, exp: "4·9=36.",
      steps: [
        { pre: "Propiedad de constante: ", math: String.raw`4 \cdot \lim_{x\to 3}x^2 = 4 \cdot 9 = 36` },
      ],
    },
    {
      q: "Si lim f(x) = −5, ¿cuánto vale lim[−3·f(x)]?",
      prob: String.raw`\displaystyle\lim_{x\to a}f(x)=-5`,
      opts: [String.raw`-15`, String.raw`15`, String.raw`-8`, String.raw`8`], ans: 1, exp: "(−3)·(−5)=15.",
      steps: [
        { pre: "Propiedad de constante: ", math: String.raw`c \cdot L = (-3)(-5) = 15` },
      ],
    },
    {
      q: "Calcula el límite:", prob: String.raw`\displaystyle\lim_{x\to 2}\left[7(x+1)\right]`,
      opts: [String.raw`14`, String.raw`21`, String.raw`28`, String.raw`7`], ans: 1, exp: "7·3=21.",
      steps: [
        { pre: "Propiedad de constante: ", math: String.raw`7 \cdot \lim(x+1) = 7 \cdot 3 = 21` },
      ],
    },
    {
      q: "Calcula el límite:", prob: String.raw`\displaystyle\lim_{x\to 0}\left[-2x+6\right]`,
      opts: [String.raw`6`, String.raw`-6`, String.raw`2`, String.raw`-2`], ans: 0, exp: "−2(0)+6=6.",
      steps: [
        { pre: "Propiedad de constante + diferencia: ", math: String.raw`-2\cdot\lim x + \lim 6 = 0 + 6 = 6` },
      ],
    },
  ],
  "Potencia": [
    {
      q: "Si lim f(x) = 3, ¿cuánto vale lim[f(x)²]?",
      prob: String.raw`\displaystyle\lim_{x\to a}f(x)=3`,
      opts: [String.raw`6`, String.raw`9`, String.raw`27`, String.raw`3`], ans: 1, exp: "3²=9.",
      steps: [
        { pre: "Propiedad de potencia: ", math: String.raw`L^n = 3^2 = 9` },
      ],
    },
    {
      q: "Calcula el límite:", prob: String.raw`\displaystyle\lim_{x\to 2}\left[(x+1)^3\right]`,
      opts: [String.raw`27`, String.raw`9`, String.raw`8`, String.raw`3`], ans: 0, exp: "3³=27.",
      steps: [
        { pre: "Primero: ", math: String.raw`\lim_{x\to 2}(x+1) = 3` },
        { pre: "Potencia: ", math: String.raw`3^3 = 27` },
      ],
    },
    {
      q: "Si lim f(x) = −2, ¿cuánto vale lim[f(x)⁴]?",
      prob: String.raw`\displaystyle\lim_{x\to a}f(x)=-2`,
      opts: [String.raw`-16`, String.raw`16`, String.raw`-8`, String.raw`8`], ans: 1, exp: "(−2)⁴=16.",
      steps: [
        { pre: "Propiedad de potencia: ", math: String.raw`L^4 = (-2)^4 = 16` },
      ],
    },
    {
      q: "Calcula el límite:", prob: String.raw`\displaystyle\lim_{x\to 1}\left[(x^2+x)^2\right]`,
      opts: [String.raw`4`, String.raw`2`, String.raw`1`, String.raw`8`], ans: 0, exp: "(1+1)²=4.",
      steps: [
        { pre: "Primero: ", math: String.raw`\lim_{x\to 1}(x^2+x) = 1+1 = 2` },
        { pre: "Potencia: ", math: String.raw`2^2 = 4` },
      ],
    },
    {
      q: "Calcula el límite:", prob: String.raw`\displaystyle\lim_{x\to 3}\left[x^3\right]`,
      opts: [String.raw`9`, String.raw`27`, String.raw`3`, String.raw`18`], ans: 1, exp: "3³=27.",
      steps: [
        { pre: "Propiedad de potencia: ", math: String.raw`3^3 = 27` },
      ],
    },
  ],
};

// ── Formas indeterminadas — 1 example per type ────────────────────────────────

const indetEjemplos = [
  {
    forma: String.raw`\tfrac{0}{0}`,
    titulo: "Factorización",
    prob: String.raw`\displaystyle\lim_{x\to 3}\dfrac{x^2-9}{x-3}`,
    steps: [
      { pre: "Sustituimos x=3: ", math: String.raw`\tfrac{9-9}{3-3}=\tfrac{0}{0}`, post: " → forma indeterminada." },
      { pre: "Factorizamos el numerador: ", math: String.raw`x^2-9 = (x-3)(x+3)` },
      { pre: "Cancelamos ", math: String.raw`(x-3)`, post: ":  ", math2: String.raw`\dfrac{(x-3)(x+3)}{x-3} = x+3` },
      { pre: "Evaluamos: ", math: String.raw`\lim_{x\to 3}(x+3) = 6` },
    ],
    res: String.raw`\displaystyle\lim_{x\to 3}\dfrac{x^2-9}{x-3} = 6`,
  },
  {
    forma: String.raw`\tfrac{\infty}{\infty}`,
    titulo: "División por la potencia mayor",
    prob: String.raw`\displaystyle\lim_{x\to\infty}\dfrac{2x^2-3x}{x^2+1}`,
    steps: [
      { pre: "Cuando x→∞: numerador→∞ y denominador→∞ → forma ", math: String.raw`\tfrac{\infty}{\infty}` },
      { pre: "Dividimos todo entre ", math: String.raw`x^2`, post: " (potencia mayor del denominador):" },
      { pre: "Obtenemos: ", math: String.raw`\dfrac{2-\tfrac{3}{x}}{1+\tfrac{1}{x^2}}` },
      { pre: "Cuando x→∞: ", math: String.raw`\tfrac{3}{x}\to 0`, post: "  y  ", math2: String.raw`\tfrac{1}{x^2}\to 0` },
      { pre: "Resultado: ", math: String.raw`\dfrac{2-0}{1+0} = 2` },
    ],
    res: String.raw`\displaystyle\lim_{x\to\infty}\dfrac{2x^2-3x}{x^2+1} = 2`,
  },
  {
    forma: String.raw`0\cdot\infty`,
    titulo: "Reescribir como cociente",
    prob: String.raw`\displaystyle\lim_{x\to\infty}\dfrac{3}{x}\cdot x^2`,
    steps: [
      { pre: "Cuando x→∞: ", math: String.raw`\tfrac{3}{x}\to 0`, post: "  y  ", math2: String.raw`x^2\to\infty`, post2: " → forma ", math3: String.raw`0\cdot\infty` },
      { pre: "Simplificamos algebraicamente antes de tomar el límite: ", math: String.raw`\dfrac{3}{x}\cdot x^2 = 3x` },
      { pre: "El límite se convierte en: ", math: String.raw`\displaystyle\lim_{x\to\infty}3x = \infty` },
      { pre: "Conclusión: la forma 0·∞ puede resultar en 0, un valor finito o ∞ — depende del ritmo de crecimiento de cada factor." },
    ],
    res: String.raw`\displaystyle\lim_{x\to\infty}\dfrac{3}{x}\cdot x^2 = \infty`,
  },
  {
    forma: String.raw`\infty-\infty`,
    titulo: "Multiplicar por el conjugado",
    prob: String.raw`\displaystyle\lim_{x\to\infty}\!\left[\sqrt{x^2+x}-x\right]`,
    steps: [
      { pre: "Cuando x→∞: ambos términos →∞ → forma ", math: String.raw`\infty-\infty` },
      { pre: "Multiplicamos y dividimos por el conjugado: ", math: String.raw`\dfrac{\sqrt{x^2+x}+x}{\sqrt{x^2+x}+x}` },
      { pre: "El numerador queda: ", math: String.raw`(\sqrt{x^2+x})^2-x^2 = x^2+x-x^2 = x` },
      { pre: "El denominador queda: ", math: String.raw`\sqrt{x^2+x}+x` },
      { pre: "Dividimos por x: ", math: String.raw`\dfrac{1}{\sqrt{1+\tfrac{1}{x}}+1}` },
      { pre: "Cuando x→∞: ", math: String.raw`\dfrac{1}{\sqrt{1+0}+1} = \dfrac{1}{2}` },
    ],
    res: String.raw`\displaystyle\lim_{x\to\infty}\!\left[\sqrt{x^2+x}-x\right] = \dfrac{1}{2}`,
  },
  {
    forma: String.raw`0^0`,
    titulo: "Técnica del logaritmo",
    prob: String.raw`\displaystyle\lim_{x\to 0^+}x^x`,
    steps: [
      { pre: "Cuando x→0⁺: la base ", math: String.raw`x\to 0`, post: " y el exponente ", math2: String.raw`x\to 0`, post2: " → forma ", math3: String.raw`0^0` },
      { pre: "Sea ", math: String.raw`y = x^x`, post: ". Tomamos logaritmo natural: ", math2: String.raw`\ln y = x\ln x` },
      { pre: "Usando L'Hôpital se demuestra que ", math: String.raw`\lim_{x\to 0^+}x\ln x = 0`, post: "  ⟹  ", math2: String.raw`\ln y \to 0` },
      { pre: "Por continuidad del exponencial: ", math: String.raw`y = e^{\ln y} \to e^0 = 1` },
    ],
    res: String.raw`\displaystyle\lim_{x\to 0^+}x^x = 1`,
  },
  {
    forma: String.raw`1^\infty`,
    titulo: "El número e de Euler",
    prob: String.raw`\displaystyle\lim_{x\to\infty}\!\left(1+\dfrac{1}{x}\right)^{\!x}`,
    steps: [
      { pre: "Cuando x→∞: la base ", math: String.raw`1+\tfrac{1}{x}\to 1`, post: " y el exponente ", math2: String.raw`x\to\infty`, post2: " → forma ", math3: String.raw`1^\infty` },
      { pre: "Sea ", math: String.raw`y=\!\left(1+\tfrac{1}{x}\right)^x`, post: ". Logaritmo: ", math2: String.raw`\ln y = x\ln\!\left(1+\tfrac{1}{x}\right)` },
      { pre: "Usando L'Hôpital se obtiene que ", math: String.raw`\ln y \to 1` },
      { pre: "Por lo tanto: ", math: String.raw`y \to e^1 = e \approx 2.71828` },
      { pre: "Este es el límite fundamental que define el número de Euler, base del logaritmo natural." },
    ],
    res: String.raw`\displaystyle\lim_{x\to\infty}\!\left(1+\dfrac{1}{x}\right)^{\!x} = e`,
  },
  {
    forma: String.raw`\infty^0`,
    titulo: "Técnica del logaritmo",
    prob: String.raw`\displaystyle\lim_{x\to\infty}x^{1/x}`,
    steps: [
      { pre: "Cuando x→∞: la base ", math: String.raw`x\to\infty`, post: " y el exponente ", math2: String.raw`\tfrac{1}{x}\to 0`, post2: " → forma ", math3: String.raw`\infty^0` },
      { pre: "Sea ", math: String.raw`y = x^{1/x}`, post: ". Logaritmo: ", math2: String.raw`\ln y = \dfrac{\ln x}{x}` },
      { pre: "Cuando x→∞: ", math: String.raw`\dfrac{\ln x}{x}\to 0`, post: " (el denominador crece más rápido que el logaritmo)." },
      { pre: "Por continuidad: ", math: String.raw`y = e^{\ln y} \to e^0 = 1` },
    ],
    res: String.raw`\displaystyle\lim_{x\to\infty}x^{1/x} = 1`,
  },
];

// ── Methods — 2 examples + 5 exercises each ───────────────────────────────────

const metodosData = [
  {
    id: 1,
    titulo: "① Sustitución directa",
    desc: "Sustituye x = a directamente en la expresión. Si el resultado es un número real definido, ese es el límite. Este método funciona siempre con polinomios y funciones continuas en el punto.",
    ejemplos: [
      {
        titulo: "Polinomio cúbico",
        prob: String.raw`\displaystyle\lim_{x\to 2}\!\left[x^3-3x+1\right]`,
        steps: [
          { pre: "La función es un polinomio, continua en todos los reales." },
          { pre: "Sustituimos directamente x=2: ", math: String.raw`(2)^3-3(2)+1 = 8-6+1 = 3` },
        ],
        res: String.raw`\displaystyle\lim_{x\to 2}\!\left[x^3-3x+1\right] = 3`,
      },
      {
        titulo: "Producto de expresiones lineales",
        prob: String.raw`\displaystyle\lim_{x\to -1}\!\left[(x^2+2x)(x-3)\right]`,
        steps: [
          { pre: "Función continua: sustituimos x=−1 directamente." },
          { pre: "Factor 1: ", math: String.raw`(-1)^2+2(-1) = 1-2 = -1` },
          { pre: "Factor 2: ", math: String.raw`(-1)-3 = -4` },
          { pre: "Producto: ", math: String.raw`(-1)\cdot(-4) = 4` },
        ],
        res: String.raw`\displaystyle\lim_{x\to -1}\!\left[(x^2+2x)(x-3)\right] = 4`,
      },
    ],
    ejercicios: [
      {
        q: "Calcula el límite:", prob: String.raw`\displaystyle\lim_{x\to 3}\!\left[x^2+2x-1\right]`,
        opts: [String.raw`12`, String.raw`13`, String.raw`14`, String.raw`15`], ans: 2, exp: "9+6−1=14.",
        steps: [
          { pre: "Polinomio: sustitución directa en x=3." },
          { pre: "Calculamos: ", math: String.raw`(3)^2+2(3)-1 = 9+6-1 = 14` },
        ],
      },
      {
        q: "Calcula el límite:", prob: String.raw`\displaystyle\lim_{x\to -2}\!\left[x^3+x\right]`,
        opts: [String.raw`-10`, String.raw`-6`, String.raw`10`, String.raw`-12`], ans: 0, exp: "−8+(−2)=−10.",
        steps: [
          { pre: "Sustituimos x=−2: ", math: String.raw`(-2)^3+(-2) = -8-2 = -10` },
        ],
      },
      {
        q: "Calcula el límite:", prob: String.raw`\displaystyle\lim_{x\to 0}\!\left[5x^2-3x+2\right]`,
        opts: [String.raw`0`, String.raw`1`, String.raw`2`, String.raw`5`], ans: 2, exp: "0−0+2=2.",
        steps: [
          { pre: "Sustituimos x=0: ", math: String.raw`5(0)^2-3(0)+2 = 2` },
        ],
      },
      {
        q: "Calcula el límite:", prob: String.raw`\displaystyle\lim_{x\to 1}\!\left[(x+1)(x-2)\right]`,
        opts: [String.raw`-2`, String.raw`0`, String.raw`2`, String.raw`-1`], ans: 0, exp: "2·(−1)=−2.",
        steps: [
          { pre: "Sustituimos x=1: ", math: String.raw`(1+1)(1-2) = 2\cdot(-1) = -2` },
        ],
      },
      {
        q: "Calcula el límite:", prob: String.raw`\displaystyle\lim_{x\to 4}\sqrt{x+12}`,
        opts: [String.raw`2`, String.raw`4`, String.raw`8`, String.raw`16`], ans: 1, exp: "√16=4.",
        steps: [
          { pre: "Sustituimos x=4: ", math: String.raw`\sqrt{4+12} = \sqrt{16} = 4` },
        ],
      },
    ],
  },
  {
    id: 2,
    titulo: "② Factorización",
    desc: "Se usa cuando la sustitución directa produce la forma 0/0. Factoriza numerador y/o denominador para cancelar el factor que genera el cero. Técnicas útiles: diferencia de cuadrados, trinomio, factor común, diferencia de cubos.",
    ejemplos: [
      {
        titulo: "Trinomio cuadrado perfecto",
        prob: String.raw`\displaystyle\lim_{x\to -3}\dfrac{x^2+5x+6}{x+3}`,
        steps: [
          { pre: "Sustituimos x=−3: ", math: String.raw`\tfrac{9-15+6}{0}=\tfrac{0}{0}`, post: " → indeterminado." },
          { pre: "Factorizamos el numerador: ", math: String.raw`x^2+5x+6 = (x+2)(x+3)` },
          { pre: "Cancelamos ", math: String.raw`(x+3)`, post: ":  ", math2: String.raw`\dfrac{(x+2)(x+3)}{x+3} = x+2` },
          { pre: "Evaluamos: ", math: String.raw`\lim_{x\to -3}(x+2) = -1` },
        ],
        res: String.raw`\displaystyle\lim_{x\to -3}\dfrac{x^2+5x+6}{x+3} = -1`,
      },
      {
        titulo: "Diferencia de cubos",
        prob: String.raw`\displaystyle\lim_{x\to 2}\dfrac{x^3-8}{x-2}`,
        steps: [
          { pre: "Sustituimos x=2: ", math: String.raw`\tfrac{8-8}{0}=\tfrac{0}{0}`, post: " → indeterminado." },
          { pre: "Diferencia de cubos: ", math: String.raw`x^3-8 = (x-2)(x^2+2x+4)` },
          { pre: "Cancelamos ", math: String.raw`(x-2)`, post: ":  ", math2: String.raw`x^2+2x+4` },
          { pre: "Evaluamos en x=2: ", math: String.raw`4+4+4 = 12` },
        ],
        res: String.raw`\displaystyle\lim_{x\to 2}\dfrac{x^3-8}{x-2} = 12`,
      },
    ],
    ejercicios: [
      {
        q: "Calcula el límite:", prob: String.raw`\displaystyle\lim_{x\to 2}\dfrac{x^2-4}{x-2}`,
        opts: [String.raw`0`, String.raw`2`, String.raw`4`, String.raw`\infty`], ans: 2, exp: "(x−2)(x+2)/(x−2) = x+2 = 4.",
        steps: [
          { pre: "Forma 0/0: factorizamos ", math: String.raw`x^2-4 = (x-2)(x+2)` },
          { pre: "Cancelamos: ", math: String.raw`\dfrac{(x-2)(x+2)}{x-2} = x+2` },
          { pre: "Evaluamos: ", math: String.raw`\lim_{x\to 2}(x+2) = 4` },
        ],
      },
      {
        q: "Calcula el límite:", prob: String.raw`\displaystyle\lim_{x\to -1}\dfrac{x^2+x}{x+1}`,
        opts: [String.raw`-1`, String.raw`0`, String.raw`1`, String.raw`-2`], ans: 0, exp: "x(x+1)/(x+1)=x → −1.",
        steps: [
          { pre: "Factorizamos el numerador: ", math: String.raw`\dfrac{x(x+1)}{x+1} = x\quad(x\neq -1)` },
          { pre: "Evaluamos: ", math: String.raw`\lim_{x\to -1}x = -1` },
        ],
      },
      {
        q: "Calcula el límite:", prob: String.raw`\displaystyle\lim_{x\to 3}\dfrac{x^2-9}{x-3}`,
        opts: [String.raw`0`, String.raw`3`, String.raw`6`, String.raw`9`], ans: 2, exp: "(x−3)(x+3)/(x−3) = x+3 = 6.",
        steps: [
          { pre: "Factorizamos: ", math: String.raw`\dfrac{(x-3)(x+3)}{x-3} = x+3` },
          { pre: "Evaluamos: ", math: String.raw`\lim_{x\to 3}(x+3) = 6` },
        ],
      },
      {
        q: "Calcula el límite:", prob: String.raw`\displaystyle\lim_{x\to 1}\dfrac{x^3-1}{x-1}`,
        opts: [String.raw`1`, String.raw`2`, String.raw`3`, String.raw`0`], ans: 2, exp: "Diferencia de cubos → x²+x+1 = 3.",
        steps: [
          { pre: "Diferencia de cubos: ", math: String.raw`x^3-1 = (x-1)(x^2+x+1)` },
          { pre: "Cancelamos y evaluamos en x=1: ", math: String.raw`1+1+1 = 3` },
        ],
      },
      {
        q: "Calcula el límite:", prob: String.raw`\displaystyle\lim_{x\to -2}\dfrac{x^2-x-6}{x+2}`,
        opts: [String.raw`-5`, String.raw`-3`, String.raw`5`, String.raw`-1`], ans: 0, exp: "(x−3)(x+2)/(x+2) = x−3 = −5.",
        steps: [
          { pre: "Factorizamos el numerador: ", math: String.raw`x^2-x-6 = (x-3)(x+2)` },
          { pre: "Cancelamos: ", math: String.raw`x-3` },
          { pre: "Evaluamos en x=−2: ", math: String.raw`-2-3 = -5` },
        ],
      },
    ],
  },
  {
    id: 3,
    titulo: "③ Racionalización",
    desc: "Cuando aparecen radicales y la sustitución directa produce 0/0, multiplica por el conjugado: el conjugado de (√a + b) es (√a − b). Usa la identidad (a+b)(a−b) = a²−b² para eliminar el radical.",
    ejemplos: [
      {
        titulo: "Radical en el numerador",
        prob: String.raw`\displaystyle\lim_{x\to 0}\dfrac{\sqrt{x+4}-2}{x}`,
        steps: [
          { pre: "Sustituimos x=0: ", math: String.raw`\tfrac{2-2}{0}=\tfrac{0}{0}`, post: " → indeterminado." },
          { pre: "Multiplicamos por el conjugado: ", math: String.raw`\dfrac{\sqrt{x+4}+2}{\sqrt{x+4}+2}` },
          { pre: "Numerador: ", math: String.raw`(\sqrt{x+4})^2-4 = (x+4)-4 = x` },
          { pre: "Cancelamos la x: ", math: String.raw`\dfrac{x}{x\cdot(\sqrt{x+4}+2)} = \dfrac{1}{\sqrt{x+4}+2}` },
          { pre: "Evaluamos en x=0: ", math: String.raw`\dfrac{1}{\sqrt{4}+2} = \dfrac{1}{4}` },
        ],
        res: String.raw`\displaystyle\lim_{x\to 0}\dfrac{\sqrt{x+4}-2}{x} = \dfrac{1}{4}`,
      },
      {
        titulo: "Radical en el denominador",
        prob: String.raw`\displaystyle\lim_{x\to 1}\dfrac{x-1}{\sqrt{x}-1}`,
        steps: [
          { pre: "Sustituimos x=1: ", math: String.raw`\tfrac{0}{\sqrt{1}-1}=\tfrac{0}{0}`, post: " → indeterminado." },
          { pre: "Multiplicamos por el conjugado del denominador: ", math: String.raw`\dfrac{\sqrt{x}+1}{\sqrt{x}+1}` },
          { pre: "Nuevo denominador: ", math: String.raw`(\sqrt{x})^2-1^2 = x-1` },
          { pre: "El numerador también es ", math: String.raw`x-1`, post: " → cancelamos." },
          { pre: "Nos queda: ", math: String.raw`\lim_{x\to 1}(\sqrt{x}+1) = 1+1 = 2` },
        ],
        res: String.raw`\displaystyle\lim_{x\to 1}\dfrac{x-1}{\sqrt{x}-1} = 2`,
      },
    ],
    ejercicios: [
      {
        q: "Calcula el límite:", prob: String.raw`\displaystyle\lim_{x\to 4}\dfrac{\sqrt{x}-2}{x-4}`,
        opts: [String.raw`\tfrac{1}{2}`, String.raw`\tfrac{1}{4}`, String.raw`1`, String.raw`2`], ans: 1, exp: "Conjugado → 1/(√4+2)=1/4.",
        steps: [
          { pre: "Forma 0/0: multiplicamos por ", math: String.raw`\dfrac{\sqrt{x}+2}{\sqrt{x}+2}` },
          { pre: "Denominador: ", math: String.raw`x-4`, post: "  (mismo que numerador), cancelamos." },
          { pre: "Queda: ", math: String.raw`\dfrac{1}{\sqrt{x}+2}` },
          { pre: "Evaluamos en x=4: ", math: String.raw`\dfrac{1}{\sqrt{4}+2} = \dfrac{1}{4}` },
        ],
      },
      {
        q: "Calcula el límite:", prob: String.raw`\displaystyle\lim_{x\to 9}\dfrac{x-9}{\sqrt{x}-3}`,
        opts: [String.raw`3`, String.raw`6`, String.raw`9`, String.raw`0`], ans: 1, exp: "Multiplicar por (√x+3) → lim(√x+3)=6.",
        steps: [
          { pre: "Multiplicamos por ", math: String.raw`\dfrac{\sqrt{x}+3}{\sqrt{x}+3}` },
          { pre: "Denominador: ", math: String.raw`x-9`, post: ", cancelamos con el numerador." },
          { pre: "Queda: ", math: String.raw`\lim_{x\to 9}(\sqrt{x}+3) = 3+3 = 6` },
        ],
      },
      {
        q: "Calcula el límite:", prob: String.raw`\displaystyle\lim_{x\to 0}\dfrac{\sqrt{x+9}-3}{x}`,
        opts: [String.raw`\tfrac{1}{3}`, String.raw`\tfrac{1}{6}`, String.raw`\tfrac{1}{9}`, String.raw`0`], ans: 1, exp: "1/(√9+3)=1/6.",
        steps: [
          { pre: "Multiplicamos por ", math: String.raw`\dfrac{\sqrt{x+9}+3}{\sqrt{x+9}+3}` },
          { pre: "Numerador: ", math: String.raw`(x+9)-9 = x`, post: ", cancelamos la x." },
          { pre: "Queda: ", math: String.raw`\dfrac{1}{\sqrt{x+9}+3}` },
          { pre: "Evaluamos en x=0: ", math: String.raw`\dfrac{1}{\sqrt{9}+3} = \dfrac{1}{6}` },
        ],
      },
      {
        q: "Calcula el límite:", prob: String.raw`\displaystyle\lim_{x\to 1}\dfrac{\sqrt{x}-1}{x-1}`,
        opts: [String.raw`1`, String.raw`\tfrac{1}{2}`, String.raw`2`, String.raw`0`], ans: 1, exp: "x−1=(√x−1)(√x+1), cancelar → 1/(√1+1)=1/2.",
        steps: [
          { pre: "Notamos que ", math: String.raw`x-1 = (\sqrt{x}-1)(\sqrt{x}+1)` },
          { pre: "Cancelamos ", math: String.raw`(\sqrt{x}-1)`, post: ":  ", math2: String.raw`\dfrac{1}{\sqrt{x}+1}` },
          { pre: "Evaluamos en x=1: ", math: String.raw`\dfrac{1}{\sqrt{1}+1} = \dfrac{1}{2}` },
        ],
      },
      {
        q: "Calcula el límite:", prob: String.raw`\displaystyle\lim_{x\to 3}\dfrac{x-3}{\sqrt{x+1}-2}`,
        opts: [String.raw`2`, String.raw`3`, String.raw`4`, String.raw`6`], ans: 2, exp: "Conjugado → lim(√(x+1)+2)=4.",
        steps: [
          { pre: "Multiplicamos por ", math: String.raw`\dfrac{\sqrt{x+1}+2}{\sqrt{x+1}+2}` },
          { pre: "Denominador: ", math: String.raw`(x+1)-4 = x-3`, post: ", cancelamos." },
          { pre: "Queda: ", math: String.raw`\lim_{x\to 3}(\sqrt{x+1}+2) = \sqrt{4}+2 = 4` },
        ],
      },
    ],
  },
  {
    id: 4,
    titulo: "④ Límites al infinito",
    desc: "Cuando x→∞, divide todos los términos entre xⁿ, donde n es el grado máximo del denominador. Los términos con x en el denominador tienden a 0. El resultado depende solo de los coeficientes del término de mayor grado.",
    ejemplos: [
      {
        titulo: "Mismo grado en numerador y denominador",
        prob: String.raw`\displaystyle\lim_{x\to\infty}\dfrac{3x^2+2x}{x^2-5}`,
        steps: [
          { pre: "Dividimos numerador y denominador entre ", math: String.raw`x^2` },
          { pre: "Obtenemos: ", math: String.raw`\dfrac{3+\tfrac{2}{x}}{1-\tfrac{5}{x^2}}` },
          { pre: "Cuando x→∞: ", math: String.raw`\tfrac{2}{x}\to 0`, post: "  y  ", math2: String.raw`\tfrac{5}{x^2}\to 0` },
          { pre: "Resultado: ", math: String.raw`\dfrac{3+0}{1-0} = 3` },
        ],
        res: String.raw`\displaystyle\lim_{x\to\infty}\dfrac{3x^2+2x}{x^2-5} = 3`,
      },
      {
        titulo: "Grado del numerador menor que el denominador",
        prob: String.raw`\displaystyle\lim_{x\to\infty}\dfrac{5x^2+x}{2x^3-1}`,
        steps: [
          { pre: "Grado numerador=2, grado denominador=3: dividimos entre ", math: String.raw`x^3` },
          { pre: "Obtenemos: ", math: String.raw`\dfrac{\tfrac{5}{x}+\tfrac{1}{x^2}}{2-\tfrac{1}{x^3}}` },
          { pre: "Cuando x→∞: todos los términos fraccionarios → 0." },
          { pre: "Resultado: ", math: String.raw`\dfrac{0}{2} = 0` },
        ],
        res: String.raw`\displaystyle\lim_{x\to\infty}\dfrac{5x^2+x}{2x^3-1} = 0`,
      },
    ],
    ejercicios: [
      {
        q: "Calcula el límite:", prob: String.raw`\displaystyle\lim_{x\to\infty}\dfrac{3x+1}{x-2}`,
        opts: [String.raw`0`, String.raw`1`, String.raw`3`, String.raw`\infty`], ans: 2, exp: "Coeficientes principales: 3/1=3.",
        steps: [
          { pre: "Dividimos entre x: ", math: String.raw`\dfrac{3+\tfrac{1}{x}}{1-\tfrac{2}{x}} \to \dfrac{3+0}{1-0} = 3` },
        ],
      },
      {
        q: "Calcula el límite:", prob: String.raw`\displaystyle\lim_{x\to\infty}\dfrac{x^2+x}{2x^2+1}`,
        opts: [String.raw`0`, String.raw`\tfrac{1}{2}`, String.raw`1`, String.raw`2`], ans: 1, exp: "Coeficientes principales: 1/2.",
        steps: [
          { pre: "Dividimos entre ", math: String.raw`x^2`, post: ":  ", math2: String.raw`\dfrac{1+\tfrac{1}{x}}{2+\tfrac{1}{x^2}} \to \dfrac{1}{2}` },
        ],
      },
      {
        q: "Calcula el límite:", prob: String.raw`\displaystyle\lim_{x\to\infty}\dfrac{5x^3+x}{x^4+2}`,
        opts: [String.raw`0`, String.raw`5`, String.raw`\infty`, String.raw`1`], ans: 0, exp: "Grado num < grado den → 0.",
        steps: [
          { pre: "Dividimos entre ", math: String.raw`x^4`, post: ":  ", math2: String.raw`\dfrac{\tfrac{5}{x}+\tfrac{1}{x^3}}{1+\tfrac{2}{x^4}} \to \dfrac{0}{1} = 0` },
        ],
      },
      {
        q: "Calcula el límite:", prob: String.raw`\displaystyle\lim_{x\to\infty}\dfrac{2x^3-1}{x^3+x}`,
        opts: [String.raw`0`, String.raw`1`, String.raw`2`, String.raw`\infty`], ans: 2, exp: "Coeficientes principales: 2/1=2.",
        steps: [
          { pre: "Dividimos entre ", math: String.raw`x^3`, post: ":  ", math2: String.raw`\dfrac{2-\tfrac{1}{x^3}}{1+\tfrac{1}{x^2}} \to \dfrac{2}{1} = 2` },
        ],
      },
      {
        q: "Calcula el límite:", prob: String.raw`\displaystyle\lim_{x\to\infty}\dfrac{x+1}{x^2-1}`,
        opts: [String.raw`0`, String.raw`1`, String.raw`\infty`, String.raw`-1`], ans: 0, exp: "Grado num < grado den → 0.",
        steps: [
          { pre: "Dividimos entre ", math: String.raw`x^2`, post: ":  ", math2: String.raw`\dfrac{\tfrac{1}{x}+\tfrac{1}{x^2}}{1-\tfrac{1}{x^2}} \to \dfrac{0}{1} = 0` },
        ],
      },
    ],
  },
];

// ── Mini-examen (5 questions) ─────────────────────────────────────────────────

const miniExamen = [
  {
    q: "Evalúa el límite:", prob: String.raw`\displaystyle\lim_{x\to 1}\!\left(x^2+3x-4\right)`,
    opts: [String.raw`0`, String.raw`4`, String.raw`5`, String.raw`-2`], ans: 0, exp: "Por sustitución: 1+3−4=0.",
    steps: [
      { pre: "Polinomio continuo: sustituimos x=1." },
      { pre: "Calculamos: ", math: String.raw`(1)^2+3(1)-4 = 1+3-4 = 0` },
    ],
  },
  {
    q: "¿Cuál es el resultado?", prob: String.raw`\displaystyle\lim_{x\to 3}\dfrac{x^2-9}{x-3}`,
    opts: [String.raw`0`, String.raw`3`, String.raw`6`, String.raw`\infty`], ans: 2, exp: "(x−3)(x+3)/(x−3)=x+3=6.",
    steps: [
      { pre: "Forma 0/0: factorizamos ", math: String.raw`x^2-9 = (x-3)(x+3)` },
      { pre: "Cancelamos: ", math: String.raw`\lim_{x\to 3}(x+3) = 6` },
    ],
  },
  {
    q: "Determina el límite al infinito:", prob: String.raw`\displaystyle\lim_{x\to\infty}\dfrac{5x^3}{2x^3+x}`,
    opts: [String.raw`0`, String.raw`\tfrac{5}{2}`, String.raw`\infty`, String.raw`\tfrac{1}{2}`], ans: 1, exp: "Dividimos entre x³: 5/(2+1/x²)→5/2.",
    steps: [
      { pre: "Dividimos entre ", math: String.raw`x^3`, post: ":  ", math2: String.raw`\dfrac{5}{2+\tfrac{1}{x^2}} \to \dfrac{5}{2}` },
    ],
  },
  {
    q: "¿Qué valor tiene?", prob: String.raw`\displaystyle\lim_{x\to -2}\dfrac{x^2-4}{x+2}`,
    opts: [String.raw`-4`, String.raw`0`, String.raw`4`, String.raw`\text{No existe}`], ans: 0, exp: "(x+2)(x−2)/(x+2)=x−2=−4.",
    steps: [
      { pre: "Forma 0/0: factorizamos ", math: String.raw`x^2-4 = (x+2)(x-2)` },
      { pre: "Cancelamos: ", math: String.raw`\lim_{x\to -2}(x-2) = -4` },
    ],
  },
  {
    q: "Evalúa el límite lateral:", prob: String.raw`\displaystyle\lim_{x\to 0^+}\dfrac{1}{x}`,
    opts: [String.raw`0`, String.raw`-\infty`, String.raw`+\infty`, String.raw`1`], ans: 2, exp: "x→0⁺ con valores positivos → 1/x→+∞.",
    steps: [
      { pre: "Cuando x→0⁺ (valores positivos muy pequeños): ", math: String.raw`\dfrac{1}{x}`, post: " crece sin límite." },
      { pre: "El límite es ", math: String.raw`+\infty` },
    ],
  },
];

/* ── DATA: static tables ────────────────────────────────────────────────────── */

const propiedades = [
  ["Suma",       String.raw`\displaystyle\lim[f(x)+g(x)] = L+M`],
  ["Diferencia", String.raw`\displaystyle\lim[f(x)-g(x)] = L-M`],
  ["Producto",   String.raw`\displaystyle\lim[f(x)\cdot g(x)] = L\cdot M`],
  ["Cociente",   String.raw`\displaystyle\lim\dfrac{f(x)}{g(x)} = \dfrac{L}{M},\quad M\neq 0`],
  ["Constante",  String.raw`\displaystyle\lim[c\cdot f(x)] = c\cdot L`],
  ["Potencia",   String.raw`\displaystyle\lim[f(x)]^n = L^n`],
];

const formasIndet = [
  String.raw`\tfrac{0}{0}`, String.raw`\tfrac{\infty}{\infty}`, String.raw`0\cdot\infty`,
  String.raw`\infty-\infty`, String.raw`0^0`, String.raw`1^\infty`, String.raw`\infty^0`,
];

/* ── APP ────────────────────────────────────────────────────────────────────── */

export default function LimitesGuia() {
  return (
    <>
      <style>{style}</style>
      <div className="lr">

        {/* HERO */}
        <div className="hero">
          <div className="hero-tag">EXANI-II · Cálculo Diferencial e Integral</div>
          <h1>Límites</h1>
          <div className="hero-math">
            <M>{String.raw`\displaystyle\lim_{x \to a} f(x) = L`}</M>
          </div>
          <p>La piedra angular del cálculo. Comprender los límites es el primer paso para dominar la derivada y la integral.</p>
        </div>

        <div className="cw">

          {/* ── 01 DEFINICIÓN ─────────────────────────────────────────────── */}
          <div className="section">
            <div className="sec-hd"><span className="sec-num">01</span><h2>¿Qué es un límite?</h2></div>

            <div className="card">
              <h3>Definición intuitiva</h3>
              <p>El límite de <M>f(x)</M> cuando <M>x</M> se acerca a <M>a</M> es el valor al que <M>f(x)</M> se aproxima, independientemente de si <M>f(a)</M> está definida.</p>
              <MB label="Notación">{String.raw`\displaystyle\lim_{x \to a} f(x) = L`}</MB>
              <p>Se lee: <em>"el límite de f(x) cuando x tiende a a es L"</em>. Lo clave: <M>x</M> se <strong>aproxima</strong> a <M>a</M> sin necesariamente llegar.</p>
            </div>

            <LimitGraph />

            <div className="card">
              <h3>Límites laterales</h3>
              <ul>
                <li><strong>Por la izquierda:</strong> <M>{String.raw`\displaystyle\lim_{x\to a^-} f(x)`}</M> — <M>x</M> se aproxima desde valores menores que <M>a</M>.</li>
                <li><strong>Por la derecha:</strong> <M>{String.raw`\displaystyle\lim_{x\to a^+} f(x)`}</M> — <M>x</M> se aproxima desde valores mayores que <M>a</M>.</li>
                <li>El límite <strong>existe</strong> si y solo si ambos laterales son iguales: <M>{String.raw`\displaystyle\lim_{x\to a^-}f = \lim_{x\to a^+}f`}</M></li>
              </ul>
            </div>
          </div>

          <div className="divider" />

          {/* ── 02 PROPIEDADES ────────────────────────────────────────────── */}
          <div className="section">
            <div className="sec-hd"><span className="sec-num">02</span><h2>Propiedades de los límites</h2></div>

            <div className="card">
              <p style={{ marginBottom: 16 }}>
                Si <M>{String.raw`\displaystyle\lim_{x\to a}f(x)=L`}</M> y <M>{String.raw`\displaystyle\lim_{x\to a}g(x)=M`}</M>, entonces:
              </p>
              <table className="prop-table">
                <thead><tr><th>Propiedad</th><th>Fórmula</th></tr></thead>
                <tbody>
                  {propiedades.map(([n, t]) => (
                    <tr key={n}><td>{n}</td><td><M>{t}</M></td></tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="sub-label">Ejemplos resueltos — combinando propiedades</div>
            <div className="ex-grid">
              {propEjemplos.map((ej, i) => (
                <EjCard key={i} ej={ej} prefix={`EJEMPLO ${i + 1}  ·  `} />
              ))}
            </div>

            <div className="sub-label">Ejercicios de práctica — 5 por propiedad</div>
            <p className="hint">Selecciona una propiedad para practicar. Si te equivocas, aparece la solución completa paso a paso.</p>
            <div className="accordion">
              {Object.entries(propEjercicios).map(([nombre, ejercicios], i) => (
                <PropAccordion key={nombre} nombre={nombre} ejercicios={ejercicios} startIdx={i * 5} />
              ))}
            </div>
          </div>

          <div className="divider" />

          {/* ── 03 FORMAS INDETERMINADAS ──────────────────────────────────── */}
          <div className="section">
            <div className="sec-hd"><span className="sec-num">03</span><h2>Formas indeterminadas</h2></div>

            <div className="card">
              <h3>Las 7 formas indeterminadas</h3>
              <p style={{ marginBottom: 16 }}>Cuando la sustitución directa produce alguna de estas expresiones, se requiere un método adicional.</p>
              <div className="indet-grid">
                {formasIndet.map((f, i) => (
                  <div className="indet-chip" key={i}><M>{f}</M></div>
                ))}
              </div>
              <div className="tip-box">
                <div className="tip-label">Estrategia EXANI-II</div>
                <p>
                  En el examen, <M>{String.raw`\tfrac{0}{0}`}</M> se resuelve casi siempre por <strong>factorización</strong> o <strong>racionalización</strong>.
                  Para <M>{String.raw`\tfrac{\infty}{\infty}`}</M>, dividir entre la potencia mayor es suficiente.
                  Las formas <M>{String.raw`0^0`}</M>, <M>{String.raw`1^\infty`}</M> y <M>{String.raw`\infty^0`}</M> son de nivel avanzado y requieren logaritmos.
                </p>
              </div>
            </div>

            <div className="sub-label">Un ejemplo resuelto por cada forma</div>
            <p className="hint">Haz clic en cada tarjeta para ver la resolución.</p>
            <div className="ex-grid">
              {indetEjemplos.map((ej, i) => (
                <EjCard key={i} ej={ej} prefix={<span style={{ display:"inline-flex", alignItems:"center", gap:8 }}><M>{ej.forma}</M>  ·  </span>} />
              ))}
            </div>
          </div>

          <div className="divider" />

          {/* ── 04 MÉTODOS ────────────────────────────────────────────────── */}
          <div className="section">
            <div className="sec-hd"><span className="sec-num">04</span><h2>Métodos de resolución</h2></div>

            {metodosData.map(m => (
              <div className="method-block" key={m.id}>
                <div className="method-desc">
                  <h3>{m.titulo}</h3>
                  <p>{m.desc}</p>
                </div>
                <div className="method-inner">
                  <div className="method-sub">Ejemplos resueltos</div>
                  <div className="ex-grid">
                    {m.ejemplos.map((ej, i) => (
                      <EjCard key={i} ej={ej} prefix={`EJ. ${i + 1}  ·  `} />
                    ))}
                  </div>
                  <div className="method-sub">Ejercicios de práctica</div>
                  {m.ejercicios.map((q, i) => (
                    <QzCard key={i} q={q} label={`Ejercicio ${i + 1} de ${m.ejercicios.length}`} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="divider" />

          {/* ── 05 MINI-EXAMEN ────────────────────────────────────────────── */}
          <div className="section">
            <div className="sec-hd"><span className="sec-num">05</span><h2>Mini-examen de práctica</h2></div>
            <p className="hint">5 preguntas que integran todos los métodos, al estilo EXANI-II. Si te equivocas aparece la solución completa.</p>
            {miniExamen.map((q, i) => (
              <QzCard key={i} q={q} label={`Pregunta ${i + 1} de ${miniExamen.length}`} />
            ))}
          </div>

          {/* ── QUICK REF ─────────────────────────────────────────────────── */}
          <div className="divider" />
          <div className="card" style={{ borderColor: "rgba(245,200,66,0.18)" }}>
            <h3>📌 Resumen rápido para el examen</h3>
            <ul style={{ marginTop: 10 }}>
              <li>Sustituye directo → si da número real, ese es el límite.</li>
              <li><M>{String.raw`\tfrac{0}{0}`}</M> → factoriza o racionaliza.</li>
              <li><M>{String.raw`\tfrac{k}{0}`}</M> con <M>{String.raw`k\neq 0`}</M> → el límite es <M>{String.raw`\pm\infty`}</M> o no existe.</li>
              <li><M>{String.raw`\tfrac{\infty}{\infty}`}</M> → divide entre la potencia mayor del denominador.</li>
              <li>Límite existe <M>{String.raw`\Leftrightarrow`}</M> límite lateral izq. = límite lateral der.</li>
            </ul>
          </div>

        </div>
      </div>
    </>
  );
}
