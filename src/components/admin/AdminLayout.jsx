// Shell del panel de administración, en el design system (tema claro).
//
// Sustituye al viejo `AdminHeader` oscuro. La navegación va en un sidebar
// agrupado en escritorio y pasa a una tira horizontal por debajo de 900px.
// Conserva el contrato del anterior: `active` + `onChange` para el panel con
// pestañas, o `tabs=[]` para reusar solo la cáscara (Regularización).
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  LayoutDashboard, Inbox, GraduationCap, Users,
  BarChart3, Presentation, BookOpen,
  ClipboardList, Receipt, RefreshCw,
  Blocks, LogOut, ChevronRight, Gauge,
} from "lucide-react";
import { supabase } from "../../lib/supabase";
import { FxMarca } from "../FxHeader.jsx";
import { ADMIN_CSS } from "./ui.jsx";

// Los grupos son la información de arquitectura: Personas, Contenido, Cobranza.
const GRUPOS = [
  { titulo: "General", items: [
    { id: "inicio", label: "Inicio", Icon: LayoutDashboard },
    { id: "dashboard", label: "Dashboard", Icon: Gauge },
  ] },
  { titulo: "Personas", items: [
    { id: "solicitudes", label: "Solicitudes", Icon: Inbox },
    { id: "alumnos", label: "Alumnos", Icon: GraduationCap },
    { id: "tutores", label: "Tutores", Icon: Users },
  ] },
  { titulo: "Contenido", items: [
    { id: "cuestionarios", label: "Estadísticas", Icon: BarChart3 },
    { id: "presentaciones", label: "Presentaciones", Icon: Presentation },
    { id: "cursos", label: "Cursos", Icon: BookOpen },
  ] },
  { titulo: "Cobranza", items: [
    { id: "inscripciones", label: "Inscripciones", Icon: ClipboardList },
    { id: "cargos", label: "Cargos", Icon: Receipt },
    { id: "suscripciones", label: "Suscripciones", Icon: RefreshCw },
  ] },
];

export default function AdminLayout({ active, onChange, tabs, children }) {
  const navigate = useNavigate();
  const [perfil, setPerfil] = useState(null);
  const usaNav = tabs === undefined;
  const itemsFlat = usaNav ? GRUPOS : tabs;

  useEffect(() => {
    let cancelado = false;
    (async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (cancelado || !session) return;
      const { data } = await supabase
        .from("profiles").select("nombre, email, avatar_url").eq("id", session.user.id).single();
      if (!cancelado) setPerfil(data);
    })();
    return () => { cancelado = true; };
  }, []);

  async function cerrarSesion() {
    await supabase.auth.signOut();
    navigate("/", { replace: true });
  }

  function irA(tab) {
    if (tab.to) { navigate(tab.to); return; }
    if (onChange) { onChange(tab.id); return; }
    navigate("/admin");
  }

  const inicial = (perfil?.nombre || perfil?.email || "?").slice(0, 1).toUpperCase();
  const etiquetaCuenta = perfil?.nombre || perfil?.email || "Mi cuenta";

  return (
    <div className="ax-shell">
      <style>{ADMIN_CSS}</style>
      <style>{CSS}</style>

      <header className="ax-top">
        <FxMarca />

        <div className="ax-top-cuenta">
          <span className="ax-cuenta" title={etiquetaCuenta}>
            <span className="ax-avatar">
              {perfil?.avatar_url ? <img src={perfil.avatar_url} alt="" /> : inicial}
            </span>
            <span className="ax-cuenta-nombre">{etiquetaCuenta}</span>
          </span>
          <button type="button" className="ax-salir" onClick={cerrarSesion}>
            <LogOut size={16} aria-hidden="true" /> Salir
          </button>
        </div>
      </header>

      <div className={`ax-body${usaNav ? "" : " ax-body-solo"}`}>
        {usaNav ? (
          <nav className="ax-side">
            {GRUPOS.map((g) => (
              <div className="ax-grupo" key={g.titulo}>
                <span className="ax-grupo-t">{g.titulo}</span>
                {g.items.map((it) => (
                  <button
                    key={it.id}
                    type="button"
                    className={`ax-nav${active === it.id ? " ax-nav-on" : ""}`}
                    onClick={() => irA(it)}
                  >
                    <it.Icon size={17} aria-hidden="true" />
                    <span>{it.label}</span>
                  </button>
                ))}
              </div>
            ))}
            <div className="ax-grupo ax-grupo-fin">
              <Link to="/regularizacion" className="ax-nav">
                <Blocks size={17} aria-hidden="true" />
                <span>Regularización</span>
                <ChevronRight size={15} className="ax-nav-flecha" aria-hidden="true" />
              </Link>
            </div>
          </nav>
        ) : (
          <nav className="ax-side">
            {itemsFlat.map((it) => (
              <button
                key={it.id}
                type="button"
                className={`ax-nav${active === it.id ? " ax-nav-on" : ""}`}
                onClick={() => irA(it)}
              >
                <span>{it.label}</span>
              </button>
            ))}
          </nav>
        )}

        <main className="ax-main">{children}</main>
      </div>
    </div>
  );
}

const CSS = `
.ax-shell { min-height: 100vh; min-height: 100dvh; background: var(--fx-bg);
  color: var(--fx-text-body); font-family: var(--fx-font-body); }
.ax-shell *, .ax-shell *::before, .ax-shell *::after { box-sizing: border-box; }

.ax-top { position: sticky; top: 0; z-index: 30; display: flex; align-items: center;
  justify-content: space-between; gap: 16px; min-height: 64px; padding: 10px var(--fx-gutter);
  background: var(--fx-nav-bg); backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--fx-border); }
.ax-top-cuenta { display: flex; align-items: center; gap: 10px; flex: none; }
.ax-cuenta { display: inline-flex; align-items: center; gap: 9px; min-width: 0; }
.ax-cuenta-nombre { font-size: var(--fx-small-size); font-weight: 600; color: var(--fx-text-heading);
  max-width: 160px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.ax-salir { display: inline-flex; align-items: center; gap: 6px; height: var(--fx-control-sm);
  padding: 0 14px; border: 1px solid var(--fx-border); background: var(--fx-surface);
  border-radius: var(--fx-radius-md); color: var(--fx-text-body); font-family: inherit;
  font-size: var(--fx-small-size); font-weight: 600; cursor: pointer; }
.ax-salir:hover { border-color: var(--fx-primary-200); color: var(--fx-text-heading); }

.ax-body { display: flex; align-items: flex-start; }
.ax-side { width: 248px; flex: none; position: sticky; top: 64px; align-self: flex-start;
  max-height: calc(100vh - 64px); overflow-y: auto; padding: 18px 12px 32px;
  border-right: 1px solid var(--fx-border); }
.ax-body-solo .ax-side { width: auto; }
.ax-grupo { display: flex; flex-direction: column; gap: 2px; margin-bottom: 18px; }
.ax-grupo-fin { margin-top: 6px; padding-top: 14px; border-top: 1px solid var(--fx-border); }
.ax-grupo-t { font-family: var(--fx-font-mono); font-size: 11px; letter-spacing: 0.13em;
  text-transform: uppercase; color: var(--fx-text-muted); padding: 0 10px 6px; }
.ax-nav { display: flex; align-items: center; gap: 11px; width: 100%; min-height: 42px;
  padding: 0 10px; border: none; background: none; border-radius: var(--fx-radius-md);
  color: var(--fx-text-body); font-family: inherit; font-size: var(--fx-small-size);
  font-weight: 500; text-decoration: none; cursor: pointer; text-align: left;
  transition: background var(--fx-transition), color var(--fx-transition); }
.ax-nav svg { flex: none; color: var(--fx-text-muted); }
.ax-nav:hover { background: var(--fx-surface-sunken); color: var(--fx-text-heading); text-decoration: none; }
.ax-nav-on { background: var(--fx-primary-50); color: var(--fx-primary-700); font-weight: 700; }
.ax-nav-on svg { color: var(--fx-primary-600); }
.ax-nav-flecha { margin-left: auto; }

.ax-main { flex: 1; min-width: 0; max-width: 1080px; padding: clamp(22px, 3vw, 40px) var(--fx-gutter) 80px; }

@media (max-width: 899px) {
  .ax-body { flex-direction: column; align-items: stretch; }
  .ax-side { position: static; align-self: stretch; width: 100%; max-height: none; overflow: visible;
    display: flex; flex-direction: row; gap: 6px; padding: 10px var(--fx-gutter);
    border-right: none; border-bottom: 1px solid var(--fx-border); overflow-x: auto;
    scrollbar-width: none; }
  .ax-side::-webkit-scrollbar { display: none; }
  .ax-grupo { flex-direction: row; gap: 6px; margin-bottom: 0; }
  .ax-grupo-t, .ax-grupo-fin { display: none; }
  .ax-grupo-fin { display: flex; }
  .ax-nav { width: auto; white-space: nowrap; background: var(--fx-surface);
    border: 1px solid var(--fx-border); }
  .ax-nav-on { border-color: transparent; }
  .ax-nav-flecha { display: none; }
  .ax-main { max-width: none; padding-top: 22px; }
}
@media (max-width: 560px) {
  .ax-cuenta-nombre { display: none; }
}
`;
