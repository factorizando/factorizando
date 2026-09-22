// Página del tutorado: /tutor/alumno/:id
//
// Reúne lo que el tutor puede ver de un alumno suyo. La RLS de la migración
// 20260921010000 limita cada consulta a los alumnos del tutor; si el id no le
// pertenece, las lecturas vuelven vacías y se muestra "sin acceso".
import { useEffect, useState, useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { supabase } from "../../lib/supabase";
import { useTemaClaro } from "../../lib/useTemaClaro";
import { listaTalleres } from "../../data/talleres/talleresIndex.js";
import { obtenerTodosCuestionarios } from "../../data/cuestionarios/cuestionariosIndex.js";

const NIVEL_LABEL = {
  primaria: "Primaria",
  secundaria: "Secundaria",
  prepa: "Preparatoria",
  universidad: "Universidad",
};

const ESTADO_CARGO = {
  pendiente: "Pendiente",
  pagado: "Pagado",
  vencido: "Vencido",
  cancelado: "Cancelado",
};

function fmtFecha(iso) {
  if (!iso) return "—";
  const [y, m, d] = iso.split("T")[0].split("-").map(Number);
  return new Date(y, m - 1, d).toLocaleDateString("es-MX", { day: "2-digit", month: "short", year: "numeric" });
}
function fmtMoney(n) { return `$${Number(n).toLocaleString("es-MX", { minimumFractionDigits: 2 })}`; }
function calcEdad(fecha) {
  if (!fecha) return null;
  const hoy = new Date();
  const n = new Date(fecha);
  let e = hoy.getFullYear() - n.getFullYear();
  const m = hoy.getMonth() - n.getMonth();
  if (m < 0 || (m === 0 && hoy.getDate() < n.getDate())) e--;
  return e >= 0 && e < 120 ? e : null;
}

export default function TutorAlumno() {
  useTemaClaro();
  const { id } = useParams();
  const [cargando, setCargando] = useState(true);
  const [alumno, setAlumno] = useState(null);
  const [resultados, setResultados] = useState([]);
  const [sesiones, setSesiones] = useState([]);
  const [cargos, setCargos] = useState([]);
  const [suscripciones, setSuscripciones] = useState([]);
  const [q, setQ] = useState("");

  useEffect(() => {
    let cancelado = false;
    (async () => {
      const { data: al } = await supabase.from("alumnos").select("*").eq("id", id).maybeSingle();
      if (cancelado) return;
      if (!al) { setCargando(false); return; }
      setAlumno(al);

      const [res, ses, cg, su] = await Promise.all([
        supabase.from("resultados").select("*").eq("user_id", id).order("created_at", { ascending: false }).limit(50),
        supabase.from("taller_sesiones").select("*").eq("alumno_id", id).order("creado_en", { ascending: false }).limit(50),
        supabase.from("cargos").select("*").eq("alumno_id", id).order("fecha_vencimiento", { ascending: false }),
        supabase.from("suscripciones").select("*").eq("alumno_id", id).order("fecha_inicio", { ascending: false }),
      ]);
      if (cancelado) return;
      setResultados(res.data || []);
      setSesiones(ses.data || []);
      setCargos(cg.data || []);
      setSuscripciones(su.data || []);
      setCargando(false);
    })();
    return () => { cancelado = true; };
  }, [id]);

  const edad = alumno ? calcEdad(alumno.fecha_nacimiento) : null;
  const talleres = useMemo(
    () => (alumno && (alumno.nivel === "primaria" || alumno.nivel === "secundaria")
      ? listaTalleres().filter((t) => t.nivel === alumno.nivel)
      : []),
    [alumno]
  );
  const cuestionarios = useMemo(() => {
    const todos = obtenerTodosCuestionarios();
    const s = q.trim().toLowerCase();
    const base = s
      ? todos.filter((c) => `${c.titulo} ${c.materia || ""} ${c.nivel || ""}`.toLowerCase().includes(s))
      : todos;
    return base.slice(0, 12);
  }, [q]);
  const promedio = resultados.length
    ? Math.round(resultados.reduce((s, r) => s + (r.total ? (r.puntaje / r.total) * 100 : 0), 0) / resultados.length)
    : null;
  const porPagar = cargos
    .filter((c) => c.estado === "pendiente" || c.estado === "vencido")
    .reduce((s, c) => s + Number(c.monto || 0), 0);

  return (
    <div className="ta-root">
      <style>{CSS}</style>
      <header className="ta-top">
        <Link to="/tutor" className="ta-volver">← Mis tutorados</Link>
      </header>

      <main className="ta-main">
        {cargando ? (
          <p className="ta-muted">Cargando…</p>
        ) : !alumno ? (
          <div className="ta-vacio">
            <h1>Alumno no encontrado</h1>
            <p>O no tienes acceso a este alumno.</p>
            <Link to="/tutor" className="ta-link">Volver a mis tutorados</Link>
          </div>
        ) : (
          <>
            {/* Ficha básica */}
            <section className="ta-ficha">
              <span className="ta-avatar">{(alumno.nombre || "?").slice(0, 1).toUpperCase()}</span>
              <div className="ta-ficha-txt">
                <h1 className="ta-nombre">{alumno.nombre} {alumno.apellidos}</h1>
                <p className="ta-meta">
                  {NIVEL_LABEL[alumno.nivel] || alumno.nivel}
                  {edad != null && ` · ${edad} años`}
                </p>
              </div>
            </section>

            <div className="ta-datos">
              <Dato label="Correo" valor={alumno.email} />
              <Dato label="Teléfono" valor={alumno.telefono} />
              <Dato label="Nacimiento" valor={fmtFecha(alumno.fecha_nacimiento)} />
            </div>

            {/* Avance */}
            <section className="ta-sec">
              <div className="ta-sec-cab">
                <h2>Avance</h2>
                {promedio != null && <span className="ta-chip">Promedio {promedio}%</span>}
              </div>

              <h3 className="ta-h3">Cuestionarios</h3>
              {resultados.length === 0 ? (
                <p className="ta-muted">Sin intentos registrados.</p>
              ) : (
                <ul className="ta-lista">
                  {resultados.map((r) => {
                    const pct = r.total ? Math.round((r.puntaje / r.total) * 100) : 0;
                    return (
                      <li key={r.id} className="ta-item">
                        <span className="ta-item-tit">{r.cuestionario_titulo || r.cuestionario_id}</span>
                        <span className="ta-item-der">
                          <strong>{pct}%</strong>
                          <span className="ta-item-sub">{fmtFecha(r.created_at)}</span>
                        </span>
                      </li>
                    );
                  })}
                </ul>
              )}

              <h3 className="ta-h3">Talleres de regularización</h3>
              {sesiones.length === 0 ? (
                <p className="ta-muted">Sin sesiones de taller registradas.</p>
              ) : (
                <ul className="ta-lista">
                  {sesiones.map((s) => (
                    <li key={s.id} className="ta-item">
                      <span className="ta-item-tit">{s.actividad}<span className="ta-item-sub"> · {s.taller_id}</span></span>
                      <span className="ta-item-der">
                        <strong>{s.aciertos} / {s.aciertos + s.errores}</strong>
                        <span className="ta-item-sub">{fmtFecha(s.creado_en)}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </section>

            {/* Práctica de regularización operada por el tutor.
                Es el camino para los alumnos sin cuenta: el tutor practica en su
                nombre y el avance queda en el expediente del alumno. */}
            {talleres.length > 0 && (
              <section className="ta-sec">
                <div className="ta-sec-cab">
                  <h2>Práctica de regularización</h2>
                </div>
                <p className="ta-muted">
                  Abre un taller con {alumno.nombre} ya seleccionado. Su avance se guarda en su expediente.
                </p>
                <div className="ta-talleres">
                  {talleres.map((t) => (
                    <Link
                      key={t.id}
                      to={`/tutor/alumno/${alumno.id}/practicar/${t.id}`}
                      className="ta-taller"
                    >
                      <span className="ta-taller-icono" aria-hidden="true">{t.icono}</span>
                      <span className="ta-taller-txt">
                        <span className="ta-taller-tit">{t.titulo}</span>
                        <span className="ta-item-sub">{t.materia}</span>
                      </span>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {/* Cuestionarios: el tutor los abre a nombre del alumno; el resultado
                se guarda en el expediente del alumno (user_id = su id). */}
            <section className="ta-sec">
              <div className="ta-sec-cab">
                <h2>Cuestionarios</h2>
              </div>
              <p className="ta-muted">
                Ábrelos con {alumno.nombre} ya seleccionado; su resultado queda en su expediente.
              </p>
              <input
                className="ta-buscar"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Buscar cuestionario por título o materia…"
              />
              <div className="ta-talleres">
                {cuestionarios.map((c) => (
                  <Link
                    key={c.id}
                    to={`/cuestionario/${c.id}?alumno=${alumno.id}`}
                    className="ta-taller"
                  >
                    <span className="ta-taller-txt">
                      <span className="ta-taller-tit">{c.titulo}</span>
                      <span className="ta-item-sub">{c.materia || c.nivel || ""}</span>
                    </span>
                  </Link>
                ))}
              </div>
            </section>

            {/* Pagos */}
            <section className="ta-sec">
              <div className="ta-sec-cab">
                <h2>Pagos</h2>
                {porPagar > 0 && <span className="ta-chip ta-chip-alerta">Por pagar {fmtMoney(porPagar)}</span>}
              </div>

              <h3 className="ta-h3">Suscripción</h3>
              {suscripciones.length === 0 ? (
                <p className="ta-muted">Sin suscripción.</p>
              ) : (
                <ul className="ta-lista">
                  {suscripciones.map((s) => (
                    <li key={s.id} className="ta-item">
                      <span className="ta-item-tit">Vence {fmtFecha(s.fecha_vencimiento_actual)}</span>
                      <span className="ta-item-der"><span className="ta-badge">{s.estado}</span></span>
                    </li>
                  ))}
                </ul>
              )}

              <h3 className="ta-h3">Cargos</h3>
              {cargos.length === 0 ? (
                <p className="ta-muted">Sin cargos registrados.</p>
              ) : (
                <ul className="ta-lista">
                  {cargos.map((c) => (
                    <li key={c.id} className="ta-item">
                      <span className="ta-item-tit">
                        {c.concepto}
                        <span className="ta-item-sub"> · vence {fmtFecha(c.fecha_vencimiento)}</span>
                      </span>
                      <span className="ta-item-der">
                        <strong>{fmtMoney(c.monto)}</strong>
                        <span className="ta-badge">{ESTADO_CARGO[c.estado] || c.estado}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          </>
        )}
      </main>
    </div>
  );
}

function Dato({ label, valor }) {
  return (
    <div className="ta-dato">
      <span className="ta-dato-label">{label}</span>
      <span className="ta-dato-valor">{valor || "—"}</span>
    </div>
  );
}

const CSS = `
.ta-root { min-height: 100vh; min-height: 100dvh; background: var(--fx-surface-sunken);
  color: var(--fx-text-body); font-family: var(--fx-font-body); }
.ta-top { padding: 14px var(--fx-gutter); background: var(--fx-surface); border-bottom: 1px solid var(--fx-border); }
.ta-volver { color: var(--fx-primary-700); text-decoration: none; font-weight: 600; font-size: var(--fx-small-size); }
.ta-volver:hover { text-decoration: underline; }
.ta-main { max-width: 820px; margin: 0 auto; padding: clamp(20px, 4vw, 40px) var(--fx-gutter) 80px; }
.ta-muted { color: var(--fx-text-muted); font-size: var(--fx-small-size); }
.ta-ficha { display: flex; align-items: center; gap: 16px; margin-bottom: 18px; }
.ta-avatar { display: grid; place-items: center; width: 60px; height: 60px; flex: 0 0 auto; border-radius: 50%;
  background: var(--fx-primary-50); color: var(--fx-primary-700);
  font-family: var(--fx-font-heading); font-weight: 700; font-size: 24px; }
.ta-nombre { font-family: var(--fx-font-heading); font-size: clamp(22px, 4vw, 28px); font-weight: 600;
  letter-spacing: -0.015em; color: var(--fx-text-heading); margin: 0; }
.ta-meta { margin: 4px 0 0; color: var(--fx-text-muted); font-size: var(--fx-small-size); }
.ta-datos { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(160px, 100%), 1fr));
  gap: 12px; background: var(--fx-surface); border: 1px solid var(--fx-border);
  border-radius: var(--fx-radius-lg); padding: 16px; margin-bottom: 28px; }
.ta-dato { display: flex; flex-direction: column; gap: 2px; }
.ta-dato-label { font-size: var(--fx-caption-size); font-weight: 700; letter-spacing: 0.07em;
  text-transform: uppercase; color: var(--fx-text-muted); }
.ta-dato-valor { color: var(--fx-text-heading); font-size: var(--fx-small-size); word-break: break-word; }
.ta-sec { background: var(--fx-surface); border: 1px solid var(--fx-border);
  border-radius: var(--fx-radius-lg); padding: 20px 22px; margin-bottom: 20px; }
.ta-sec-cab { display: flex; align-items: center; justify-content: space-between; gap: 12px; margin-bottom: 14px; }
.ta-sec-cab h2 { font-family: var(--fx-font-heading); font-size: 19px; font-weight: 600;
  color: var(--fx-text-heading); margin: 0; }
.ta-chip { background: var(--fx-primary-50); color: var(--fx-primary-700); border: 1px solid var(--fx-primary-100);
  border-radius: var(--fx-radius-pill); padding: 4px 12px; font-size: var(--fx-small-size); font-weight: 600; }
.ta-chip-alerta { background: var(--fx-warning-bg); color: var(--fx-warning-text); border-color: var(--fx-warning-border); }
.ta-h3 { font-size: var(--fx-caption-size); font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase;
  color: var(--fx-text-muted); margin: 18px 0 8px; }
.ta-h3:first-of-type { margin-top: 0; }
.ta-lista { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; }
.ta-item { display: flex; align-items: center; justify-content: space-between; gap: 12px;
  padding: 10px 0; border-top: 1px solid var(--fx-border); flex-wrap: wrap; }
.ta-item:first-child { border-top: none; }
.ta-item-tit { color: var(--fx-text-heading); font-size: var(--fx-small-size); font-weight: 600; }
.ta-item-sub { color: var(--fx-text-muted); font-weight: 400; font-size: var(--fx-caption-size); }
.ta-item-der { display: flex; align-items: center; gap: 10px; }
.ta-item-der strong { color: var(--fx-text-heading); font-size: var(--fx-small-size); }
.ta-badge { background: var(--fx-surface-sunken); border: 1px solid var(--fx-border);
  border-radius: var(--fx-radius-pill); padding: 3px 10px; font-size: var(--fx-caption-size);
  font-weight: 600; color: var(--fx-text-body); text-transform: capitalize; }
.ta-vacio h1 { font-family: var(--fx-font-heading); color: var(--fx-text-heading); font-size: 24px; margin: 0 0 10px; }
.ta-link { color: var(--fx-primary-700); }
.ta-talleres { display: grid; gap: 10px; margin-top: 12px;
  grid-template-columns: repeat(auto-fit, minmax(min(220px, 100%), 1fr)); }
.ta-taller { display: flex; align-items: center; gap: 12px; background: var(--fx-surface-sunken);
  border: 1px solid var(--fx-border); border-radius: var(--fx-radius-md); padding: 12px 14px;
  text-decoration: none; transition: border-color var(--fx-transition); }
.ta-taller:hover { border-color: var(--fx-primary-200); text-decoration: none; }
.ta-taller-icono { font-size: 22px; flex: 0 0 auto; }
.ta-taller-txt { display: flex; flex-direction: column; min-width: 0; }
.ta-taller-tit { font-family: var(--fx-font-heading); font-weight: 600; font-size: var(--fx-small-size);
  color: var(--fx-text-heading); }
.ta-buscar { width: 100%; min-height: var(--fx-control-md); padding: 10px 13px; margin-top: 12px;
  background: var(--fx-surface); border: 1px solid var(--fx-border); border-radius: var(--fx-radius-md);
  color: var(--fx-text-heading); font-family: inherit; font-size: var(--fx-small-size); outline: none; }
.ta-buscar:focus { border-color: var(--fx-primary-400); box-shadow: var(--fx-focus-ring); }
`;
