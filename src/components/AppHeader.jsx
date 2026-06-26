// Barra superior de la app (estilo del lienzo de curso): marca a la izquierda,
// caja de búsqueda al centro y acciones de cuenta a la derecha. Calcado del
// `cv-top` de CursoVer, pero la franja central es una BÚSQUEDA en vez de la
// barra de progreso. Consume los tokens de tema (claro/oscuro) vía var(--…).
import { Link } from "react-router-dom";

// Wordmark "Factoℝ[i]zando" con efecto de "agua" (Uiverse, mrhyddenn): dos capas
// superpuestas del mismo texto — un contorno azul "vacío" y un relleno azul con
// una onda animada que sube y baja, como agua llenando las letras. Va sobre la
// barra oscura, por eso el azul brillante (#80c6ff) contrasta bien.
function BrandName() {
  const word = "Factoℝ[i]zando";
  return (
    <span className="ah-brand-name ah-water" aria-label="Factorizando">
      <span className="ah-water-line" aria-hidden="true">{word}</span>
      <span className="ah-water-fill" aria-hidden="true">{word}</span>
    </span>
  );
}

export default function AppHeader({ chip, query = "", onQuery, onSubmit, onLogin, onRegistro }) {
  return (
    <header className="ah-top">
      <style>{CSS}</style>

      <div className="ah-brand">
        <Link to="/" className="ah-logo-link" title="Inicio">
          <span className="ah-logo-ring">
            <img src={`${import.meta.env.BASE_URL}assets/logoX.png`} alt="Factorizando" />
          </span>
        </Link>
        <BrandName />
        {chip && (
          <>
            <span className="ah-sep">|</span>
            <span className="ah-chip">{chip}</span>
          </>
        )}
      </div>

      <form
        className="ah-search"
        onSubmit={(e) => { e.preventDefault(); onSubmit?.(query); }}
        role="search"
      >
        <svg className="ah-search-ic" width="17" height="17" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="11" cy="11" r="7" />
          <path d="m21 21-4.3-4.3" />
        </svg>
        <input
          className="ah-search-input"
          type="search"
          placeholder="Buscar cursos, temas, cuestionarios…"
          value={query}
          onChange={(e) => onQuery?.(e.target.value)}
          aria-label="Buscar"
        />
        <span className="ah-search-kbd">⏎</span>
      </form>

      <div className="ah-cuenta">
        {onLogin
          ? <button type="button" className="ah-ghost" onClick={onLogin}>Iniciar sesión</button>
          : <Link to="/login" className="ah-ghost">Iniciar sesión</Link>}
        {onRegistro
          ? <button type="button" className="ah-login" onClick={onRegistro}>Registrarse</button>
          : <Link to="/registro" className="ah-login">Registrarse</Link>}
      </div>
    </header>
  );
}

const CSS = `
.ah-top { display: flex; align-items: center; justify-content: space-between; gap: 18px;
  height: 60px; padding: 0 18px; background: #0e0f11;
  border-bottom: 1px solid var(--border-soft); flex-shrink: 0; position: sticky; top: 0; z-index: 20;
  /* Isla oscura: la barra mantiene la paleta oscura aunque la página esté en
     tema claro, redefiniendo localmente los tokens que consumen sus hijos. */
  --bg: #0e0f11; --surface: #16181c; --surface-2: #1c1f24;
  --border: rgba(255,255,255,0.09); --border-soft: rgba(255,255,255,0.05); --border-strong: rgba(255,255,255,0.16);
  --text: #e8e4dc; --text-muted: #9c958a; --heading: #f0ece3;
  --brand: #f2ede4; --azul-suave: #80c6ff; --azul-suave-soft: rgba(128,198,255,0.13); }
.ah-top * { box-sizing: border-box; }
/* MARCA */
.ah-brand { display: flex; align-items: center; gap: 9px; font-weight: 700; flex-shrink: 0; }
.ah-logo-link { display: inline-flex; align-items: center; }
.ah-logo-ring { display: inline-block; width: 34px; height: 34px; border-radius: 50%;
  border: 1px dashed var(--border-strong); overflow: hidden; flex-shrink: 0; }
.ah-logo-ring img { width: 100%; height: 100%; object-fit: cover; display: block; }
.ah-brand-name { font-family: 'Cormorant Garamond', Georgia, serif; font-weight: 700;
  font-size: clamp(17px, 3.4vw, 21px); letter-spacing: .01em; white-space: nowrap; }
/* Efecto "agua" (Uiverse by mrhyddenn): contorno azul + relleno con onda animada. */
.ah-water { position: relative; display: inline-block; line-height: 1.15; }
.ah-water-line, .ah-water-fill { display: block; white-space: nowrap; }
.ah-water-line { color: transparent; -webkit-text-stroke: 0.4px var(--azul-suave); }
.ah-water-fill { position: absolute; left: 0; top: 0; color: var(--azul-suave);
  -webkit-text-stroke: 0.8px var(--azul-suave); animation: ah-water 3s ease-in-out infinite; }
@keyframes ah-water {
  0%, 100% { clip-path: polygon(0% 45%, 15% 44%, 32% 50%, 54% 60%, 70% 61%, 84% 59%, 100% 52%, 100% 100%, 0% 100%); }
  50%      { clip-path: polygon(0% 60%, 16% 65%, 34% 66%, 51% 62%, 67% 50%, 84% 45%, 100% 46%, 100% 100%, 0% 100%); }
}
@media (prefers-reduced-motion: reduce) { .ah-water-fill { animation: none; } }
.ah-sep { color: var(--border-strong); font-weight: 400; }
.ah-chip { font-size: 14px; font-weight: 600; color: var(--text); white-space: nowrap; }
/* BÚSQUEDA */
.ah-search { flex: 1; max-width: 560px; display: flex; align-items: center; gap: 9px;
  height: 40px; padding: 0 12px; background: var(--surface-2);
  border: 1px solid var(--border); border-radius: 99px; transition: border-color .2s, box-shadow .2s, background .2s; }
.ah-search:focus-within { border-color: var(--azul-suave); background: var(--surface);
  box-shadow: 0 0 0 3px var(--azul-suave-soft); }
.ah-search-ic { color: var(--text-muted); flex-shrink: 0; }
.ah-search-input { flex: 1; min-width: 0; border: none; background: none; outline: none;
  font-family: var(--font-ui); font-size: 14px; color: var(--text); }
.ah-search-input::placeholder { color: var(--text-muted); }
.ah-search-input::-webkit-search-cancel-button { display: none; }
.ah-search-kbd { flex-shrink: 0; font-size: 12px; color: var(--text-muted);
  border: 1px solid var(--border); border-radius: 6px; padding: 1px 6px; line-height: 1.4; }
/* CUENTA */
.ah-cuenta { display: flex; align-items: center; gap: 12px; flex-shrink: 0; }
.ah-ghost { display: inline-flex; align-items: center; text-decoration: none;
  font-size: 14px; font-weight: 600; color: var(--text); padding: 9px 14px;
  border-radius: 99px; transition: background .15s, color .15s; white-space: nowrap;
  background: none; border: none; cursor: pointer; font-family: inherit; }
.ah-ghost:hover { background: var(--surface-2); color: var(--heading); }
.ah-login { display: inline-flex; align-items: center; text-decoration: none;
  font-size: 14px; font-weight: 600; color: var(--bg); background: var(--brand);
  padding: 9px 18px; border-radius: 99px; transition: opacity .2s, transform .15s; white-space: nowrap;
  border: none; cursor: pointer; font-family: inherit; }
.ah-login:hover { opacity: .88; transform: translateY(-1px); }
/* RESPONSIVO */
@media (max-width: 720px) {
  .ah-search-kbd { display: none; }
  .ah-chip, .ah-sep { display: none; }
}
@media (max-width: 520px) {
  .ah-top { gap: 10px; padding: 0 12px; }
  .ah-search { max-width: none; }
  .ah-brand-name { display: none; }
  .ah-ghost { display: none; }
  .ah-login { padding: 9px 14px; }
}
`;
