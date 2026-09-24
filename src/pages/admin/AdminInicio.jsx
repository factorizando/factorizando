// src/pages/admin/AdminInicio.jsx
// Portada del panel, pensada para verse frente a un cliente: sin cifras
// internas. Busca un alumno por nombre, apellidos o correo y ofrece atajos.
// Las métricas viven en AdminDashboard.
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Search, GraduationCap, Users, Inbox, ClipboardList, Receipt, RefreshCw, ArrowRight } from "lucide-react";
import { supabase } from "../../lib/supabase";
import { Page, Card, Button, SearchField, EmptyState } from "../../components/admin/ui.jsx";

const NIVEL_LABEL = { primaria: "Primaria", secundaria: "Secundaria", prepa: "Preparatoria", universidad: "Universidad" };

const ATAJOS = [
  { grupo: "Personas", items: [
    { id: "solicitudes", label: "Solicitudes", Icon: Inbox },
    { id: "alumnos", label: "Alumnos", Icon: GraduationCap },
    { id: "tutores", label: "Tutores", Icon: Users },
  ] },
  { grupo: "Cobranza", items: [
    { id: "inscripciones", label: "Inscripciones", Icon: ClipboardList },
    { id: "cargos", label: "Cargos", Icon: Receipt },
    { id: "suscripciones", label: "Suscripciones", Icon: RefreshCw },
  ] },
];

export default function AdminInicio({ onNavigate }) {
  const [q, setQ] = useState("");
  const [resultados, setResultados] = useState([]);
  const [buscando, setBuscando] = useState(false);

  useEffect(() => {
    const termino = q.trim();
    if (termino.length < 2) { setResultados([]); setBuscando(false); return; }
    setBuscando(true);
    let cancelado = false;
    const t = setTimeout(async () => {
      const like = `%${termino}%`;
      // El correo de un alumno con cuenta vive en `profiles` (su expediente lo
      // deja en NULL); el de un alumno manual, en `alumnos.email`. Se buscan los
      // tres caminos y se unen por id.
      const [{ data: porNombre }, { data: perfilesCorreo }] = await Promise.all([
        supabase
          .from("alumnos")
          .select("id, nombre, apellidos, nivel, email, profile_id")
          .or(`nombre.ilike.${like},apellidos.ilike.${like},email.ilike.${like}`)
          .order("apellidos", { ascending: true })
          .limit(8),
        supabase.from("profiles").select("id").ilike("email", like).limit(8),
      ]);
      if (cancelado) return;
      const idsCorreo = (perfilesCorreo || []).map((p) => p.id);
      const { data: porCorreo } = idsCorreo.length
        ? await supabase
            .from("alumnos")
            .select("id, nombre, apellidos, nivel, email, profile_id")
            .in("profile_id", idsCorreo)
        : { data: [] };
      if (cancelado) return;
      const unicos = new Map();
      [...(porNombre || []), ...(porCorreo || [])].forEach((a) => unicos.set(a.id, a));
      const filas = [...unicos.values()].slice(0, 8);
      const profileIds = [...new Set(filas.map((a) => a.profile_id).filter(Boolean))];
      const { data: perfiles } = profileIds.length
        ? await supabase.from("profiles").select("id, email").in("id", profileIds)
        : { data: [] };
      if (cancelado) return;
      const emailDe = new Map((perfiles || []).map((p) => [p.id, p.email]));
      setResultados(filas.map((a) => ({ ...a, email: emailDe.get(a.profile_id) || a.email || null })));
      setBuscando(false);
    }, 250);
    return () => { cancelado = true; clearTimeout(t); };
  }, [q]);

  return (
    <Page
      eyebrow="Panel"
      titulo="Inicio"
      descripcion="Busca a un alumno o entra a un área. Para ver cifras del negocio, abre Dashboard."
    >
      <Card>
        <h2 className="ax-card-tit">Buscar alumno</h2>
        <SearchField
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Nombre, apellidos o correo…"
        />
        {q.trim().length >= 2 && (
          <div style={{ marginTop: 14 }}>
            {buscando ? (
              <p className="ax-sub" style={{ margin: 0 }}>Buscando…</p>
            ) : resultados.length === 0 ? (
              <EmptyState icono={Search} titulo="Sin resultados">
                Ningún alumno coincide con «{q.trim()}».
              </EmptyState>
            ) : (
              <div className="ax-lista">
                {resultados.map((a) => (
                  <Link key={a.id} to={`/admin/alumnos/${a.id}`} className="ax-fila"
                    style={{ textDecoration: "none", padding: "8px 6px", borderRadius: "var(--fx-radius-md)" }}>
                    <span className="ax-avatar">{(a.nombre || "?").slice(0, 1).toUpperCase()}</span>
                    <div className="ax-aparecer">
                      <div className="ax-nombre">{a.nombre} {a.apellidos}</div>
                      <div className="ax-sub">{a.email || NIVEL_LABEL[a.nivel] || "—"}</div>
                    </div>
                    <ArrowRight size={16} style={{ color: "var(--fx-text-muted)", flex: "none" }} aria-hidden="true" />
                  </Link>
                ))}
              </div>
            )}
          </div>
        )}
      </Card>

      {ATAJOS.map((g) => (
        <Card key={g.grupo}>
          <h2 className="ax-card-tit">{g.grupo}</h2>
          <div className="ax-acciones">
            {g.items.map((it) => (
              <Button key={it.id} icono={it.Icon} onClick={() => onNavigate?.(it.id)}>
                {it.label}
              </Button>
            ))}
          </div>
        </Card>
      ))}
    </Page>
  );
}
