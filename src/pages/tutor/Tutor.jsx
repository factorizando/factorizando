// Portal del tutor: /tutor
//
// Lista los alumnos vinculados al tutor que tiene la sesión (vía
// `tutores.profile_id` + `alumno_tutor`). La lectura la permite la RLS de la
// migración 20260921010000; aquí no hay consultas privilegiadas.
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../../lib/supabase";
import { useTemaClaro } from "../../lib/useTemaClaro";

const NIVEL_LABEL = {
  primaria: "Primaria",
  secundaria: "Secundaria",
  prepa: "Preparatoria",
  universidad: "Universidad",
};

function calcEdad(fecha) {
  if (!fecha) return null;
  const hoy = new Date();
  const n = new Date(fecha);
  let e = hoy.getFullYear() - n.getFullYear();
  const m = hoy.getMonth() - n.getMonth();
  if (m < 0 || (m === 0 && hoy.getDate() < n.getDate())) e--;
  return e >= 0 && e < 120 ? e : null;
}

function Barra({ nombre }) {
  const navigate = useNavigate();
  const salir = async () => {
    await supabase.auth.signOut();
    navigate("/login", { replace: true });
  };
  return (
    <header className="tut-top">
      <Link to="/" className="tut-marca">
        <img src={`${import.meta.env.BASE_URL}assets/marca/v-avatar.svg`} alt="" width="30" height="30" />
        <span>Factoℝ[i]zando</span>
      </Link>
      <div className="tut-cuenta">
        {nombre && <span className="tut-nombre">{nombre}</span>}
        <button type="button" onClick={salir} className="tut-ghost">Cerrar sesión</button>
      </div>
    </header>
  );
}

export default function Tutor() {
  useTemaClaro();
  const [cargando, setCargando] = useState(true);
  const [tutor, setTutor] = useState(null);
  const [alumnos, setAlumnos] = useState([]);
  const [perfil, setPerfil] = useState(null);

  useEffect(() => {
    let cancelado = false;
    (async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (cancelado) return;
      if (!session) { setCargando(false); return; }

      const { data: p } = await supabase
        .from("profiles").select("nombre, rol").eq("id", session.user.id).single();
      if (cancelado) return;
      setPerfil(p);

      const { data: t } = await supabase
        .from("tutores").select("id, nombre, apellidos")
        .eq("profile_id", session.user.id).maybeSingle();
      if (cancelado) return;
      setTutor(t);

      if (t) {
        const { data: vinculos } = await supabase
          .from("alumno_tutor").select("alumno_id").eq("tutor_id", t.id);
        const ids = (vinculos || []).map((v) => v.alumno_id);
        if (ids.length) {
          const { data: als } = await supabase
            .from("alumnos").select("*").in("id", ids).order("apellidos", { ascending: true });
          if (!cancelado) setAlumnos(als || []);
        }
      }
      setCargando(false);
    })();
    return () => { cancelado = true; };
  }, []);

  return (
    <div className="tut-root">
      <style>{CSS}</style>
      <Barra nombre={perfil?.nombre} />

      <main className="tut-main">
        {cargando ? (
          <p className="tut-muted">Cargando…</p>
        ) : !tutor ? (
          <div className="tut-vacio">
            <h1>Tu cuenta aún no está vinculada</h1>
            <p>
              Estás dentro como <strong>{perfil?.rol || "usuario"}</strong>, pero todavía no hay una
              ficha de tutor asociada a tu cuenta. Pide al administrador que enlace tu registro.
            </p>
          </div>
        ) : (
          <>
            <header className="tut-cab">
              <span className="tut-eyebrow">Tutor</span>
              <h1 className="tut-h1">{tutor.nombre} {tutor.apellidos}</h1>
              <p className="tut-sub">
                {alumnos.length === 0
                  ? "Todavía no tienes alumnos vinculados."
                  : `${alumnos.length} ${alumnos.length === 1 ? "alumno" : "alumnos"} a tu cargo.`}
              </p>
            </header>

            <div className="tut-grid">
              {alumnos.map((a) => {
                const edad = calcEdad(a.fecha_nacimiento);
                return (
                  <Link key={a.id} to={`/tutor/alumno/${a.id}`} className="tut-card">
                    <div className="tut-card-cab">
                      <span className="tut-avatar">
                        {(a.nombre || "?").slice(0, 1).toUpperCase()}
                      </span>
                      <div>
                        <div className="tut-card-nombre">{a.nombre} {a.apellidos}</div>
                        <div className="tut-card-meta">
                          {NIVEL_LABEL[a.nivel] || a.nivel}
                          {edad != null && ` · ${edad} años`}
                        </div>
                      </div>
                    </div>
                    <div className="tut-card-pie">
                      <span>{a.email || a.telefono || "Sin contacto"}</span>
                      <span className="tut-flecha" aria-hidden="true">→</span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </>
        )}
      </main>
    </div>
  );
}

const CSS = `
.tut-root { min-height: 100vh; min-height: 100dvh; background: var(--fx-surface-sunken);
  color: var(--fx-text-body); font-family: var(--fx-font-body); }
.tut-top { display: flex; align-items: center; justify-content: space-between; gap: 16px;
  padding: 14px var(--fx-gutter); background: var(--fx-surface); border-bottom: 1px solid var(--fx-border); }
.tut-marca { display: inline-flex; align-items: center; gap: 10px; text-decoration: none;
  color: var(--fx-text-heading); font-family: var(--fx-font-heading); font-weight: 600; font-size: 17px; }
.tut-marca img { border-radius: 50%; }
.tut-cuenta { display: flex; align-items: center; gap: 12px; }
.tut-nombre { font-size: var(--fx-small-size); color: var(--fx-text-muted); }
.tut-ghost { background: none; border: 1px solid var(--fx-border); border-radius: var(--fx-radius-md);
  padding: 8px 14px; color: var(--fx-text-body); font-family: inherit; font-size: var(--fx-small-size);
  font-weight: 600; cursor: pointer; min-height: 40px; }
.tut-ghost:hover { border-color: var(--fx-primary-200); color: var(--fx-text-heading); }
.tut-main { max-width: 980px; margin: 0 auto; padding: clamp(24px, 4vw, 48px) var(--fx-gutter) 80px; }
.tut-muted { color: var(--fx-text-muted); }
.tut-cab { margin-bottom: 28px; }
.tut-eyebrow { font-size: var(--fx-caption-size); font-weight: 700; letter-spacing: 0.12em;
  text-transform: uppercase; color: var(--fx-primary-600); }
.tut-h1 { font-family: var(--fx-font-heading); font-size: clamp(24px, 4vw, 32px); font-weight: 600;
  letter-spacing: -0.015em; color: var(--fx-text-heading); margin: 6px 0 6px; }
.tut-sub { margin: 0; color: var(--fx-text-muted); font-size: var(--fx-body-size); }
.tut-grid { display: grid; gap: 14px; grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr)); }
.tut-card { display: flex; flex-direction: column; gap: 16px; background: var(--fx-surface);
  border: 1px solid var(--fx-border); border-radius: var(--fx-radius-lg); padding: 18px;
  text-decoration: none; transition: border-color var(--fx-transition), box-shadow var(--fx-transition); }
.tut-card:hover { border-color: var(--fx-primary-200); box-shadow: var(--fx-shadow-card); text-decoration: none; }
.tut-card-cab { display: flex; align-items: center; gap: 12px; }
.tut-avatar { display: grid; place-items: center; width: 44px; height: 44px; flex: 0 0 auto;
  border-radius: 50%; background: var(--fx-primary-50); color: var(--fx-primary-700);
  font-family: var(--fx-font-heading); font-weight: 700; font-size: 18px; }
.tut-card-nombre { font-family: var(--fx-font-heading); font-weight: 600; font-size: 16px; color: var(--fx-text-heading); }
.tut-card-meta { font-size: var(--fx-small-size); color: var(--fx-text-muted); margin-top: 2px; }
.tut-card-pie { display: flex; align-items: center; justify-content: space-between; gap: 10px;
  border-top: 1px solid var(--fx-border); padding-top: 12px;
  font-size: var(--fx-small-size); color: var(--fx-text-muted); }
.tut-flecha { color: var(--fx-primary-600); font-weight: 600; }
.tut-vacio h1 { font-family: var(--fx-font-heading); color: var(--fx-text-heading);
  font-size: 24px; margin: 0 0 10px; }
.tut-vacio p { margin: 0; max-width: 46ch; line-height: 1.6; }
`;
