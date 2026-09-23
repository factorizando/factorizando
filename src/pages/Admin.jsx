// src/pages/Admin.jsx
// Panel de administración. El shell y los tabs viven en AdminLayout; aquí solo
// se orquesta qué pestaña se muestra. Los tabs de Contenido (Estadísticas y
// Presentaciones) siguen inline por indicación, pero ya sobre el design system
// claro: cero hex a mano, cero verde/rojo, íconos lucide en vez de emoji/glifos.
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Users, ClipboardList, TrendingUp, Presentation as PresentationIcon,
  Layers, BookOpen, ListChecks, Pencil, Trash2, CircleCheck, CircleX, Minus,
} from "lucide-react";
import { supabase } from "../lib/supabase";
import { listaPresentaciones, buscarPresentacion } from "../data/presentaciones/presentacionesIndex.js";
import { obtenerTema } from "../data/presentaciones/temas.jsx";
import { SUBJECTS_PREP } from "../data/preparatoriaData.js";
import { SUBJECTS_UNI } from "../data/universidadData.js";
import { SUBJECTS_EXANI_II } from "../data/exaniIIData.js";
import AdminAlumnos from "./admin/AdminAlumnos.jsx";
import AdminSolicitudes from "./admin/AdminSolicitudes.jsx";
import AdminTutores from "./admin/AdminTutores.jsx";
import AdminCuentas from "./admin/AdminCuentas.jsx";
import AdminInicio from "./admin/AdminInicio.jsx";
import AdminDashboard from "./admin/AdminDashboard.jsx";
import AdminInscripciones from "./admin/AdminInscripciones.jsx";
import AdminCargos from "./admin/AdminCargos.jsx";
import AdminSuscripciones from "./admin/AdminSuscripciones.jsx";
import AdminCursos from "./admin/AdminCursos.jsx";
import AdminLayout from "../components/admin/AdminLayout.jsx";
import {
  Page, Card, Badge, Button, SearchField, Stat, EmptyState, Medidor,
} from "../components/admin/ui.jsx";

const NIVEL_LABEL = {
  primaria: "Primaria", secundaria: "Secundaria",
  prepa: "Preparatoria", preparatoria: "Preparatoria", universidad: "Universidad",
};

function fmtDate(iso) {
  if (!iso) return "—";
  const [y, m, d] = iso.split("T")[0].split("-").map(Number);
  const fecha = new Date(y, m - 1, d).toLocaleDateString("es-MX", {
    day: "2-digit", month: "short", year: "numeric",
  });
  if (!iso.includes("T")) return fecha;
  const hora = new Date(iso).toLocaleTimeString("es-MX", { hour: "2-digit", minute: "2-digit" });
  return `${fecha} · ${hora}`;
}

function Cargando() { return <p className="ax-sub">Cargando…</p>; }

// ── Índice inverso: en qué nivel(es) se usa cada presentación ─────────────────
function recolectarSlugs(nodos, set) {
  for (const n of nodos || []) {
    if (typeof n.presentacion === "string") {
      const m = n.presentacion.match(/\/ver\/([a-z0-9-]+)/i);
      if (m) set.add(m[1]);
    }
    if (n.children) recolectarSlugs(n.children, set);
  }
}

const NIVELES = ["Prepa", "UNAM", "EXANI-II"];

const NIVELES_POR_SLUG = (() => {
  const map = {};
  const add = (subjects, nivel) => {
    const set = new Set();
    recolectarSlugs(subjects, set);
    set.forEach((slug) => { (map[slug] ||= []).push(nivel); });
  };
  add(SUBJECTS_PREP, "Prepa");
  add(SUBJECTS_UNI, "UNAM");
  add(SUBJECTS_EXANI_II, "EXANI-II");
  return map; // slug -> [niveles]
})();

// ── Tarjeta de presentación ───────────────────────────────────────────────────
function PresentacionCard({ id, titulo, materia, subtema }) {
  const tema = obtenerTema(materia, "claro");
  const pres = buscarPresentacion(id);
  const slides = pres?.slides || [];
  const nSecc = slides.filter((s) => ["regla", "regla_rica", "criterio_detalle", "concepto", "definicion"].includes(s.tipo)).length;
  const nEj = slides.filter((s) => s.tipo === "ejercicio").length;
  const niveles = NIVELES_POR_SLUG[id] || [];

  return (
    <Card style={{ borderTop: `3px solid ${tema.acento}`, display: "flex", flexDirection: "column", gap: 12 }}>
      <div>
        <div className="ax-nombre" style={{ whiteSpace: "normal" }}>{titulo}</div>
        {subtema && (
          <div className="ax-sub" style={{ marginTop: 3, color: tema.acento }}>{subtema}</div>
        )}
      </div>

      <div className="ax-acciones" style={{ gap: 14 }}>
        <span className="ax-sub" style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
          <Layers size={14} aria-hidden="true" /> {slides.length} diapositivas
        </span>
        {nSecc > 0 && (
          <span className="ax-sub" style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
            <BookOpen size={14} aria-hidden="true" /> {nSecc} secciones
          </span>
        )}
        {nEj > 0 && (
          <span className="ax-sub" style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
            <ListChecks size={14} aria-hidden="true" /> {nEj} ejercicios
          </span>
        )}
      </div>

      {niveles.length > 0 && (
        <div className="ax-acciones" style={{ gap: 6 }}>
          {niveles.map((n) => <Badge key={n} tone="neutral">{n}</Badge>)}
        </div>
      )}

      <Link to={`/presentacion/${id}`} className="ax-btn ax-btn-secondary" style={{ alignSelf: "flex-start" }}>
        <PresentationIcon size={16} aria-hidden="true" /> Abrir
      </Link>
    </Card>
  );
}

// ── Sección de materia del catálogo ───────────────────────────────────────────
function MateriaSeccion({ materia, presentaciones: items }) {
  const tema = obtenerTema(materia, "claro");
  return (
    <section style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <div className="ax-fila" style={{ gap: 10 }}>
        <span style={{ width: 10, height: 10, borderRadius: "50%", background: tema.acento, flex: "none" }} aria-hidden="true" />
        <h2 className="ax-card-tit" style={{ margin: 0 }}>{materia}</h2>
        <Badge tone="neutral">{items.length}</Badge>
      </div>
      <div style={{ display: "grid", gap: 14, gridTemplateColumns: "repeat(auto-fit, minmax(min(260px, 100%), 1fr))" }}>
        {items.map((p) => <PresentacionCard key={p.id} {...p} />)}
      </div>
    </section>
  );
}

// ── Tabla de intentos (cuestionarios o presentaciones) ────────────────────────
function TablaIntentos({ rows, primeraCol, getTitulo, onDelete, onUpdate }) {
  const [editingId, setEditingId] = useState(null);
  const [editValues, setEditValues] = useState({ puntaje: 0, total: 1 });
  const [confirmId, setConfirmId] = useState(null);
  const inp = { width: 58, minHeight: "auto", padding: "4px 8px", textAlign: "center" };

  return (
    <div style={{ overflowX: "auto" }}>
      <table className="ax-tabla">
        <thead>
          <tr>{[primeraCol, "Puntaje", "%", "Fecha", ""].map((h, i) => <th key={i}>{h}</th>)}</tr>
        </thead>
        <tbody>
          {rows.map((r) => {
            const editing = editingId === r.id;
            const pct = editing
              ? Math.round((editValues.puntaje / Math.max(1, editValues.total)) * 100)
              : Math.round((r.puntaje / Math.max(1, r.total)) * 100);
            return (
              <tr key={r.id}>
                <td>{getTitulo(r)}</td>
                <td>
                  {editing ? (
                    <span style={{ display: "inline-flex", gap: 4, alignItems: "center" }}>
                      <input className="ax-input" type="number" min={0} value={editValues.puntaje} style={inp}
                        onChange={(e) => setEditValues((v) => ({ ...v, puntaje: Number(e.target.value) }))} />
                      <span className="ax-sub">/</span>
                      <input className="ax-input" type="number" min={1} value={editValues.total} style={inp}
                        onChange={(e) => setEditValues((v) => ({ ...v, total: Number(e.target.value) }))} />
                    </span>
                  ) : `${r.puntaje}/${r.total}`}
                </td>
                <td><Medidor valor={pct} /></td>
                <td className="ax-sub" style={{ whiteSpace: "nowrap" }}>{fmtDate(r.created_at)}</td>
                <td>
                  <div className="ax-acciones" style={{ justifyContent: "flex-end" }}>
                    {editing ? (
                      <>
                        <Button variante="subtle" onClick={() => { onUpdate(r.id, editValues); setEditingId(null); }}>Guardar</Button>
                        <Button variante="ghost" onClick={() => setEditingId(null)}>Cancelar</Button>
                      </>
                    ) : confirmId === r.id ? (
                      <>
                        <span className="ax-sub">¿Eliminar?</span>
                        <Button variante="primary" onClick={() => { onDelete(r.id); setConfirmId(null); }}>Sí</Button>
                        <Button variante="ghost" onClick={() => setConfirmId(null)}>No</Button>
                      </>
                    ) : (
                      <>
                        <Button variante="ghost" icono={Pencil} title="Editar puntaje"
                          onClick={() => { setEditingId(r.id); setEditValues({ puntaje: r.puntaje, total: r.total }); }} />
                        <Button variante="ghost" icono={Trash2} title="Eliminar registro" onClick={() => setConfirmId(r.id)} />
                      </>
                    )}
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

// ── Resumen por alumno (cuestionarios + presentaciones) ──────────────────────
function ResumenAlumno({ nombre, nivel, resultados, onDelete, onUpdate }) {
  const [open, setOpen] = useState(false);
  const intentos = resultados.length;
  const promedio = intentos
    ? Math.round(resultados.reduce((s, r) => s + Math.round((r.puntaje / Math.max(1, r.total)) * 100), 0) / intentos)
    : 0;
  const mejorPct = intentos
    ? Math.max(...resultados.map((r) => Math.round((r.puntaje / Math.max(1, r.total)) * 100)))
    : 0;

  const esPres = (r) => typeof r.cuestionario_id === "string" && r.cuestionario_id.startsWith("presentacion-");
  const ordenar = (arr) => [...arr].sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
  const cuests = ordenar(resultados.filter((r) => !esPres(r)));
  const preses = ordenar(resultados.filter(esPres));

  const tituloPres = (r) => {
    if (r.cuestionario_titulo) return r.cuestionario_titulo;
    const slug = r.cuestionario_id.replace(/^presentacion-/, "");
    return buscarPresentacion(slug)?.titulo || r.cuestionario_id;
  };

  return (
    <Card>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        style={{
          display: "flex", alignItems: "center", gap: 14, width: "100%",
          background: "none", border: "none", padding: 0, cursor: "pointer",
          font: "inherit", textAlign: "left", color: "inherit", flexWrap: "wrap",
        }}
      >
        <span className="ax-avatar">{(nombre || "?").slice(0, 1).toUpperCase()}</span>
        <div className="ax-aparecer">
          <div className="ax-nombre">{nombre || "Sin nombre"}</div>
          <div style={{ marginTop: 4 }}>
            <Badge tone="accent">{NIVEL_LABEL[nivel] || nivel || "—"}</Badge>
          </div>
        </div>
        <div className="ax-acciones" style={{ gap: 16, justifyContent: "flex-end" }}>
          <div style={{ textAlign: "right" }}>
            <div className="ax-stat-val" style={{ fontSize: 18 }}>{intentos}</div>
            <div className="ax-stat-lbl">intentos</div>
          </div>
          <div style={{ textAlign: "right" }}>
            <Medidor valor={promedio} />
            <div className="ax-stat-lbl">promedio</div>
          </div>
          <div style={{ textAlign: "right" }}>
            <Medidor valor={mejorPct} />
            <div className="ax-stat-lbl">mejor</div>
          </div>
        </div>
      </button>

      {open && (
        <div style={{ marginTop: 16 }}>
          {resultados.length === 0 ? (
            <p className="ax-sub" style={{ margin: 0 }}>Sin resultados registrados.</p>
          ) : (
            <>
              {cuests.length > 0 && (
                <div style={{ marginBottom: preses.length ? 20 : 0 }}>
                  <span className="ax-eyebrow">Cuestionarios · {cuests.length}</span>
                  <TablaIntentos rows={cuests} primeraCol="Cuestionario"
                    getTitulo={(r) => r.cuestionario_titulo || r.cuestionario_id}
                    onDelete={onDelete} onUpdate={onUpdate} />
                </div>
              )}
              {preses.length > 0 && (
                <div>
                  <span className="ax-eyebrow">Presentaciones · {preses.length}</span>
                  <TablaIntentos rows={preses} primeraCol="Presentación"
                    getTitulo={tituloPres} onDelete={onDelete} onUpdate={onUpdate} />
                </div>
              )}
            </>
          )}
        </div>
      )}
    </Card>
  );
}

// ── Desglose por pregunta ─────────────────────────────────────────────────────
function Celda({ v }) {
  if (v === "ok") return <CircleCheck size={16} className="ax-celda-ok" aria-label="Acierto" />;
  if (v === "bad") return <CircleX size={16} className="ax-celda-no" aria-label="Error" />;
  return <Minus size={14} style={{ color: "var(--fx-text-disabled)" }} aria-label="Sin responder" />;
}

function DesgloseSesion({ sesion }) {
  return (
    <div style={{ marginTop: 14 }}>
      <div className="ax-sub" style={{ marginBottom: 6 }}>
        Sesión <strong>{sesion.codigo}</strong> · {fmtDate(sesion.created_at)} · {sesion.rows.length} alumno{sesion.rows.length === 1 ? "" : "s"}
      </div>
      <div style={{ overflowX: "auto" }}>
        <table className="ax-tabla">
          <thead>
            <tr>
              <th>Alumno</th>
              {sesion.cols.map((c) => <th key={c.sid} title={c.pregunta} style={{ textAlign: "center" }}>P{c.n}</th>)}
              <th style={{ textAlign: "center" }}>Aciertos</th>
            </tr>
          </thead>
          <tbody>
            {sesion.rows.map((r) => {
              const pct = r.respondidas ? Math.round((r.aciertos / r.respondidas) * 100) : 0;
              return (
                <tr key={r.uid}>
                  <td style={{ whiteSpace: "nowrap" }}>{r.nombre}</td>
                  {sesion.cols.map((c) => (
                    <td key={c.sid} style={{ textAlign: "center" }}><Celda v={r.cells[c.sid]} /></td>
                  ))}
                  <td style={{ textAlign: "center" }}><Medidor valor={pct} ancho={56} /></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function DesglosePresentacion({ presentacion, profiles }) {
  const [estado, setEstado] = useState("idle"); // idle | cargando | listo | error
  const [sesiones, setSesiones] = useState([]);

  async function cargar() {
    setEstado("cargando");
    const fullPres = buscarPresentacion(presentacion.id);
    const ejercicios = (fullPres?.slides || []).filter((s) => s.tipo === "ejercicio");
    const numEj = new Map(ejercicios.map((e, i) => [String(e.id), i + 1]));
    const correctaEj = new Map(ejercicios.map((e) => [String(e.id), e.correcta]));
    const preguntaEj = new Map(ejercicios.map((e) => [String(e.id), e.pregunta]));

    const { data: ses, error: e1 } = await supabase
      .from("sesiones_presentacion")
      .select("id, codigo, created_at")
      .eq("presentacion_id", presentacion.id)
      .order("created_at", { ascending: false });
    if (e1) { console.error("[Admin] sesiones:", e1); setEstado("error"); return; }

    const ids = (ses || []).map((s) => s.id);
    if (ids.length === 0) { setSesiones([]); setEstado("listo"); return; }

    const { data: resp, error: e2 } = await supabase
      .from("respuestas_presentacion")
      .select("sesion_id, slide_id, opcion_elegida, user_id")
      .in("sesion_id", ids);
    if (e2) { console.error("[Admin] respuestas:", e2); setEstado("error"); return; }

    const bySes = {};
    (resp || []).forEach((r) => { (bySes[r.sesion_id] ||= []).push(r); });

    const armadas = (ses || []).map((s) => {
      const rs = bySes[s.id] || [];
      if (rs.length === 0) return null;

      const slidesAnswered = [...new Set(rs.map((r) => String(r.slide_id)))]
        .filter((sid) => numEj.has(sid))
        .sort((a, b) => numEj.get(a) - numEj.get(b));
      if (slidesAnswered.length === 0) return null;

      const byUser = {};
      rs.forEach((r) => {
        const sid = String(r.slide_id);
        if (!numEj.has(sid)) return;
        (byUser[r.user_id] ||= {})[sid] = r.opcion_elegida;
      });

      const rows = Object.entries(byUser).map(([uid, answers]) => {
        let aciertos = 0, respondidas = 0;
        const cells = {};
        slidesAnswered.forEach((sid) => {
          if (answers[sid] === undefined) { cells[sid] = null; return; }
          respondidas++;
          const ok = answers[sid] === correctaEj.get(sid);
          if (ok) aciertos++;
          cells[sid] = ok ? "ok" : "bad";
        });
        const prof = profiles[uid] || {};
        return { uid, nombre: prof.nombre || prof.email || uid.slice(0, 8), cells, aciertos, respondidas };
      }).sort((a, b) => a.nombre.localeCompare(b.nombre));

      const cols = slidesAnswered.map((sid) => ({ sid, n: numEj.get(sid), pregunta: preguntaEj.get(sid) }));
      return { id: s.id, codigo: s.codigo, created_at: s.created_at, cols, rows };
    }).filter(Boolean);

    setSesiones(armadas);
    setEstado("listo");
  }

  if (estado === "idle") {
    return (
      <Button variante="subtle" icono={ListChecks} onClick={cargar} style={{ marginTop: 12 }}>
        Ver desglose por pregunta
      </Button>
    );
  }
  if (estado === "cargando") return <div style={{ marginTop: 12 }}><Cargando /></div>;
  if (estado === "error") {
    return <p className="ax-sub" style={{ marginTop: 12, whiteSpace: "normal" }}>No se pudo cargar el desglose (permisos o conexión).</p>;
  }
  if (sesiones.length === 0) {
    return <p className="ax-sub" style={{ marginTop: 12, whiteSpace: "normal" }}>No hay respuestas registradas por pregunta para esta presentación.</p>;
  }
  return (
    <div style={{ marginTop: 14 }}>
      <span className="ax-eyebrow">Desglose por pregunta</span>
      {sesiones.map((s) => <DesgloseSesion key={s.id} sesion={s} />)}
    </div>
  );
}

// ── Resultados de una presentación ────────────────────────────────────────────
function ResultadosPresentacion({ presentacion, resultados, profiles, onDelete, onUpdate }) {
  const [open, setOpen] = useState(false);
  const propios = resultados
    .filter((r) => r.cuestionario_id === "presentacion-" + presentacion.id)
    .sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

  const promedio = propios.length
    ? Math.round(propios.reduce((s, r) => s + Math.round((r.puntaje / Math.max(1, r.total)) * 100), 0) / propios.length)
    : 0;

  return (
    <Card>
      <div className="ax-fila">
        <div className="ax-aparecer">
          <div className="ax-nombre">{presentacion.titulo}</div>
          <div className="ax-sub">{presentacion.materia}</div>
        </div>
        <div style={{ textAlign: "right" }}>
          <div className="ax-stat-val" style={{ fontSize: 18 }}>{propios.length}</div>
          <div className="ax-stat-lbl">sesiones</div>
        </div>
        {propios.length > 0 && (
          <div style={{ textAlign: "right" }}>
            <Medidor valor={promedio} />
            <div className="ax-stat-lbl">promedio</div>
          </div>
        )}
        <Button variante="ghost" onClick={() => setOpen((o) => !o)}>
          {open ? "Ocultar" : "Ver"}
        </Button>
      </div>

      {open && (
        <div style={{ marginTop: 16 }}>
          {propios.length === 0 ? (
            <p className="ax-sub" style={{ margin: 0 }}>Ningún alumno ha completado esta presentación aún.</p>
          ) : (
            <TablaIntentos
              rows={propios}
              primeraCol="Alumno"
              getTitulo={(r) => {
                const profile = profiles[r.user_id] || {};
                return profile.nombre || profile.email || r.user_id.slice(0, 8);
              }}
              onDelete={onDelete}
              onUpdate={onUpdate}
            />
          )}
          <DesglosePresentacion presentacion={presentacion} profiles={profiles} />
        </div>
      )}
    </Card>
  );
}

// ── Página principal ──────────────────────────────────────────────────────────
export default function Admin() {
  const [tab, setTab] = useState("inicio");
  const [resultados, setResultados] = useState([]);
  const [profiles, setProfiles] = useState({});
  const [alumnosMap, setAlumnosMap] = useState({});
  const [datosListos, setDatosListos] = useState(false);
  const [cargandoDatos, setCargandoDatos] = useState(false);
  const [filtroNivel, setFiltroNivel] = useState("todos");
  const [busqueda, setBusqueda] = useState("");
  const [presBusqueda, setPresBusqueda] = useState("");
  const [presNivel, setPresNivel] = useState("todas");

  const presentaciones = listaPresentaciones();
  const quiereDatos = tab === "cuestionarios" || tab === "presentaciones";

  // Los resultados solo se cargan al abrir un tab de Contenido: Inicio y Personas
  // no se bloquean tras un RPC que no usan.
  useEffect(() => {
    if (!quiereDatos || datosListos || cargandoDatos) return;
    setCargandoDatos(true);
    (async () => {
      const [{ data: results }, { data: profs }, { data: als }] = await Promise.all([
        supabase.rpc("get_all_resultados"),
        supabase.rpc("get_all_profiles"),
        supabase.from("alumnos").select("id, nombre, apellidos, nivel"),
      ]);
      setResultados(results || []);
      const map = {};
      (profs || []).forEach((p) => { map[p.id] = p; });
      setProfiles(map);
      // Los alumnos sin cuenta no están en `profiles`; su `user_id` en resultados
      // es su id de `alumnos`. Este mapa les da nombre y nivel para las cifras.
      const amap = {};
      (als || []).forEach((a) => { amap[a.id] = { nombre: `${a.nombre} ${a.apellidos}`, nivel: a.nivel }; });
      setAlumnosMap(amap);
      setDatosListos(true);
      setCargandoDatos(false);
    })();
  }, [quiereDatos, datosListos, cargandoDatos]);

  async function handleDelete(id) {
    const { error } = await supabase.from("resultados").delete().eq("id", id);
    if (error) { console.error("Error eliminando registro:", error); return; }
    setResultados((prev) => prev.filter((r) => r.id !== id));
  }

  async function handleUpdate(id, { puntaje, total }) {
    const { error } = await supabase.from("resultados").update({ puntaje, total }).eq("id", id);
    if (error) { console.error("Error actualizando registro:", error); return; }
    setResultados((prev) => prev.map((r) => r.id === id ? { ...r, puntaje, total } : r));
  }

  // Agrupar por alumno
  const byUser = {};
  resultados.forEach((r) => {
    if (!byUser[r.user_id]) byUser[r.user_id] = [];
    byUser[r.user_id].push(r);
  });

  const alumnos = Object.entries(byUser)
    .map(([uid, res]) => ({
      uid,
      profile: profiles[uid] || alumnosMap[uid] || { nombre: "", nivel: "—" },
      resultados: res,
    }))
    .filter((a) => {
      if (filtroNivel !== "todos" && a.profile.nivel !== filtroNivel) return false;
      if (busqueda && !(a.profile.nombre || "").toLowerCase().includes(busqueda.toLowerCase())) return false;
      return true;
    });

  const totalIntentos = resultados.length;
  const promedioGlobal = totalIntentos
    ? Math.round(resultados.reduce((s, r) => s + Math.round((r.puntaje / Math.max(1, r.total)) * 100), 0) / totalIntentos)
    : 0;

  return (
    <AdminLayout active={tab} onChange={setTab}>

      {/* ── Tab: Inicio ───────────────────────────────────────────────── */}
      {tab === "inicio" && <AdminInicio onNavigate={setTab} />}

      {/* ── Tab: Dashboard (interno) ──────────────────────────────────── */}
      {tab === "dashboard" && <AdminDashboard onNavigate={setTab} />}

      {/* ── Tab: Alumnos ──────────────────────────────────────────────── */}
      {tab === "alumnos" && <AdminAlumnos embedded />}

      {/* ── Tab: Solicitudes ──────────────────────────────────────────── */}
      {tab === "solicitudes" && <AdminSolicitudes embedded />}

      {/* ── Tab: Tutores ──────────────────────────────────────────────── */}
      {tab === "tutores" && <AdminTutores embedded />}

      {/* ── Tab: Cuentas (control de acceso) ──────────────────────────── */}
      {tab === "cuentas" && <AdminCuentas embedded onNavigate={setTab} />}

      {/* ── Tab: Inscripciones ────────────────────────────────────────── */}
      {tab === "inscripciones" && <AdminInscripciones embedded />}

      {/* ── Tab: Cursos ───────────────────────────────────────────────── */}
      {tab === "cursos" && <AdminCursos embedded />}

      {/* ── Tab: Cargos ───────────────────────────────────────────────── */}
      {tab === "cargos" && <AdminCargos embedded />}

      {/* ── Tab: Suscripciones ────────────────────────────────────────── */}
      {tab === "suscripciones" && <AdminSuscripciones embedded />}

      {/* ── Tab: Estadísticas (Cuestionarios) ──────────────────────────── */}
      {tab === "cuestionarios" && (
        <Page
          eyebrow="Contenido"
          titulo="Estadísticas"
          descripcion="Resultados de cuestionarios y presentaciones por alumno."
        >
          <div className="ax-grid-stats">
            <Stat label="Alumnos" value={datosListos ? Object.keys(byUser).length : "…"} tone="accent" icono={Users} />
            <Stat label="Intentos" value={datosListos ? totalIntentos : "…"} tone="accent" icono={ClipboardList} />
            <Stat label="Promedio" value={datosListos ? `${promedioGlobal}%` : "…"} tone="accent" icono={TrendingUp} />
            <Stat label="Presentaciones" value={presentaciones.length} tone="accent" icono={PresentationIcon} />
          </div>

          <div className="ax-acciones" style={{ justifyContent: "space-between" }}>
            <SearchField value={busqueda} onChange={(e) => setBusqueda(e.target.value)}
              placeholder="Buscar alumno…" style={{ flex: "1 1 220px", maxWidth: 320 }} />
            <div className="ax-acciones">
              {["todos", "preparatoria", "universidad"].map((n) => (
                <Button key={n} variante={filtroNivel === n ? "primary" : "subtle"} onClick={() => setFiltroNivel(n)}>
                  {n === "todos" ? "Todos" : NIVEL_LABEL[n] || n}
                </Button>
              ))}
            </div>
          </div>

          {!datosListos ? <Cargando /> : alumnos.length === 0 ? (
            <EmptyState icono={ClipboardList} titulo="Sin resultados">
              {totalIntentos === 0
                ? "Aún no hay resultados registrados."
                : "Ningún alumno coincide con el filtro."}
            </EmptyState>
          ) : (
            <div className="ax-lista">
              {alumnos.map((a) => (
                <ResumenAlumno
                  key={a.uid}
                  nombre={a.profile.nombre || a.profile.email || a.uid.slice(0, 8)}
                  nivel={a.profile.nivel}
                  resultados={a.resultados}
                  onDelete={handleDelete}
                  onUpdate={handleUpdate}
                />
              ))}
            </div>
          )}
        </Page>
      )}

      {/* ── Tab: Presentaciones ─────────────────────────────────────────── */}
      {tab === "presentaciones" && (
        <Page
          eyebrow="Contenido"
          titulo="Presentaciones"
          descripcion="Catálogo de presentaciones y las puntuaciones que han dejado."
        >
          {presentaciones.length === 0 ? (
            <EmptyState icono={PresentationIcon} titulo="Sin presentaciones">
              No hay presentaciones registradas aún.
            </EmptyState>
          ) : (
            <>
              <div className="ax-acciones" style={{ justifyContent: "space-between" }}>
                <SearchField value={presBusqueda} onChange={(e) => setPresBusqueda(e.target.value)}
                  placeholder="Buscar presentación…" style={{ flex: "1 1 220px", maxWidth: 340 }} />
                <div className="ax-acciones">
                  {["todas", ...NIVELES].map((n) => (
                    <Button key={n} variante={presNivel === n ? "primary" : "subtle"} onClick={() => setPresNivel(n)}>
                      {n === "todas" ? "Todas" : n}
                    </Button>
                  ))}
                </div>
              </div>

              {(() => {
                const presFiltradas = presentaciones.filter((p) => {
                  const nivs = NIVELES_POR_SLUG[p.id] || [];
                  if (presNivel !== "todas" && !nivs.includes(presNivel)) return false;
                  if (presBusqueda) {
                    const q = presBusqueda.toLowerCase();
                    if (!`${p.titulo} ${p.materia} ${p.subtema || ""}`.toLowerCase().includes(q)) return false;
                  }
                  return true;
                });
                if (presFiltradas.length === 0) {
                  return (
                    <EmptyState icono={PresentationIcon} titulo="Nada que mostrar">
                      Ninguna presentación coincide con la búsqueda o el filtro.
                    </EmptyState>
                  );
                }
                const byMateria = {};
                presFiltradas.forEach((p) => { (byMateria[p.materia] ||= []).push(p); });
                return (
                  <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
                    {Object.entries(byMateria).map(([materia, items]) => (
                      <MateriaSeccion key={materia} materia={materia} presentaciones={items} />
                    ))}
                  </div>
                );
              })()}

              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <span className="ax-eyebrow">Puntuaciones por presentación</span>
                {!datosListos ? <Cargando /> : presentaciones.map((p) => (
                  <ResultadosPresentacion
                    key={p.id}
                    presentacion={p}
                    resultados={resultados}
                    profiles={profiles}
                    onDelete={handleDelete}
                    onUpdate={handleUpdate}
                  />
                ))}
              </div>
            </>
          )}
        </Page>
      )}
    </AdminLayout>
  );
}
