// src/pages/alumno/MisInscripciones.jsx
// Vista del alumno: sus inscripciones, cursos activos y pagos pendientes.

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../../lib/supabase";
import EstadoBadge from "../../components/admin/EstadoBadge.jsx";

const font = "'DM Sans', sans-serif";
const C = {
  bg:      "#0e0f11",
  surface: "#13151a",
  card:    "#16181f",
  border:  "#252830",
  blue:    "#3b9eff",
  green:   "#34d399",
  yellow:  "#fbbf24",
  red:     "#f43f5e",
  text:    "#e8eaf0",
  muted:   "#5a6070",
  dim:     "#8a9ab8",
};

function fmtDate(iso) {
  if (!iso) return "—";
  return new Date(iso).toLocaleDateString("es-MX", { day: "2-digit", month: "short", year: "numeric" });
}

function fmtMoney(n) {
  return `$${Number(n).toLocaleString("es-MX", { minimumFractionDigits: 2 })}`;
}

function Spinner() {
  return (
    <div style={{
      minHeight: "100vh", background: C.bg,
      display: "flex", alignItems: "center", justifyContent: "center",
    }}>
      <div style={{
        width: 32, height: 32, borderRadius: "50%",
        border: `2px solid ${C.blue}22`, borderTopColor: C.blue,
        animation: "spin .7s linear infinite",
      }} />
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}

// ── Tarjeta de inscripción ───────────────────────────────────────────────────
function InscripcionCard({ insc, curso, cargos }) {
  const pendientes = cargos.filter((c) => c.estado === "pendiente");
  const totalPendiente = pendientes.reduce((s, c) => s + Number(c.monto), 0);

  return (
    <div style={{
      background: C.card, border: `1px solid ${C.border}`, borderRadius: 12,
      padding: "18px 20px", display: "flex", flexDirection: "column", gap: 12,
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div>
          <h3 style={{ margin: 0, color: C.text, fontSize: 16, fontWeight: 700, fontFamily: font }}>
            {curso?.nombre || "Curso"}
          </h3>
          <div style={{ color: C.muted, fontSize: 13, marginTop: 4, fontFamily: font }}>
            Inscrito el {fmtDate(insc.fecha_inscripcion)}
          </div>
        </div>
        <EstadoBadge estado={insc.estado} />
      </div>

      {curso && (
        <div style={{ color: C.dim, fontSize: 13, fontFamily: font }}>{curso.descripcion}</div>
      )}

      {pendientes.length > 0 && (
        <div style={{
          background: C.yellow + "11", border: `1px solid ${C.yellow}33`, borderRadius: 8,
          padding: "10px 14px",
        }}>
          <div style={{ color: C.yellow, fontSize: 12, fontWeight: 700, fontFamily: font }}>
            {pendientes.length} pago{pendientes.length > 1 ? "s" : ""} pendiente{pendientes.length > 1 ? "s" : ""} · {fmtMoney(totalPendiente)}
          </div>
          {pendientes.slice(0, 3).map((c) => (
            <div key={c.id} style={{ color: C.muted, fontSize: 12, marginTop: 4, fontFamily: font }}>
              {c.concepto} — vence {fmtDate(c.fecha_vencimiento)}
            </div>
          ))}
        </div>
      )}

      {insc.estado === "activa" && curso && (
        <Link to={`/curso/${curso.id}`} style={{
          display: "inline-flex", alignItems: "center", gap: 6,
          color: C.blue, fontSize: 13, fontWeight: 600, textDecoration: "none", fontFamily: font,
        }}>
          Ir al curso →
        </Link>
      )}
    </div>
  );
}

// ── Página principal ─────────────────────────────────────────────────────────
export default function MisInscripciones() {
  const [inscripciones, setInscripciones] = useState([]);
  const [cursos, setCursos] = useState({});
  const [cargosPorInsc, setCargosPorInsc] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) return;

      const { data: inscs } = await supabase
        .from("inscripciones")
        .select("*")
        .eq("alumno_id", session.user.id)
        .order("fecha_inscripcion", { ascending: false });

      setInscripciones(inscs || []);

      // Cargar cursos
      const cursoIds = [...new Set((inscs || []).map((i) => i.curso_id))];
      if (cursoIds.length > 0) {
        const { data: crs } = await supabase.from("cursos").select("*").in("id", cursoIds);
        const map = {};
        (crs || []).forEach((c) => { map[c.id] = c; });
        setCursos(map);
      }

      // Cargar cargos
      const inscIds = (inscs || []).map((i) => i.id);
      if (inscIds.length > 0) {
        const { data: cgs } = await supabase.from("cargos").select("*").in("inscripcion_id", inscIds);
        const byInsc = {};
        (cgs || []).forEach((c) => {
          if (!byInsc[c.inscripcion_id]) byInsc[c.inscripcion_id] = [];
          byInsc[c.inscripcion_id].push(c);
        });
        setCargosPorInsc(byInsc);
      }

      setLoading(false);
    }
    load();
  }, []);

  return (
    <div style={{ minHeight: "100vh", background: C.bg, fontFamily: font }}>
      {/* Navbar */}
      <div style={{
        position: "sticky", top: 0, zIndex: 50,
        background: "rgba(14,15,17,0.96)", backdropFilter: "blur(12px)",
        borderBottom: `1px solid ${C.border}`, padding: "0 24px",
        display: "flex", alignItems: "center", justifyContent: "space-between", height: 56,
      }}>
        <span style={{ color: C.text, fontWeight: 700, fontSize: 15 }}>Mis inscripciones</span>
        <Link to="/" style={{
          color: C.muted, fontSize: 13, textDecoration: "none",
          border: `1px solid ${C.border}`, borderRadius: 8,
          padding: "5px 14px", fontFamily: font,
        }}>← Inicio</Link>
      </div>

      <div style={{ maxWidth: 720, margin: "0 auto", padding: "32px 16px" }}>
        {loading ? <Spinner /> : inscripciones.length === 0 ? (
          <div style={{ textAlign: "center", padding: "80px 20px", color: C.muted, fontSize: 15 }}>
            <div style={{ fontSize: 40, marginBottom: 16, opacity: 0.4 }}>📚</div>
            Aún no tienes inscripciones a cursos.
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {inscripciones.map((insc) => (
              <InscripcionCard
                key={insc.id}
                insc={insc}
                curso={cursos[insc.curso_id]}
                cargos={cargosPorInsc[insc.id] || []}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
