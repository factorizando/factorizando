// src/pages/admin/AdminInicio.jsx
// Dashboard del panel: cifras operativas y la cola de solicitudes pendientes.
import { useEffect, useState } from "react";
import { Inbox, GraduationCap, Users, Receipt, RefreshCw, ArrowRight, Clock } from "lucide-react";
import { supabase } from "../../lib/supabase";
import { Page, Card, Stat, Badge, Button, EmptyState } from "../../components/admin/ui.jsx";

function fmtMoney(n) {
  return `$${Number(n || 0).toLocaleString("es-MX", { minimumFractionDigits: 2 })}`;
}
function edadDe(fecha) {
  if (!fecha) return null;
  const hoy = new Date();
  const n = new Date(fecha);
  let e = hoy.getFullYear() - n.getFullYear();
  const m = hoy.getMonth() - n.getMonth();
  if (m < 0 || (m === 0 && hoy.getDate() < n.getDate())) e--;
  return e >= 0 && e < 120 ? e : null;
}

export default function AdminInicio({ onNavigate }) {
  const [cargando, setCargando] = useState(true);
  const [cifras, setCifras] = useState({ pendientes: 0, alumnos: 0, tutores: 0, porCobrar: 0, suscripciones: 0 });
  const [recientes, setRecientes] = useState([]);

  useEffect(() => {
    let cancelado = false;
    (async () => {
      const [
        { count: pendientes },
        { count: alumnos },
        { count: tutores },
        { data: cargos },
        { count: suscripciones },
        { data: cola },
      ] = await Promise.all([
        supabase.from("profiles").select("id", { count: "exact", head: true }).eq("estado_acceso", "pendiente"),
        supabase.from("alumnos").select("id", { count: "exact", head: true }),
        supabase.from("tutores").select("id", { count: "exact", head: true }),
        supabase.from("cargos").select("monto, estado").in("estado", ["pendiente", "vencido"]),
        supabase.from("suscripciones").select("id", { count: "exact", head: true }).eq("estado", "activa"),
        supabase.from("profiles").select("id, nombre, email, telefono, estado, fecha_nacimiento")
          .eq("estado_acceso", "pendiente").order("nombre", { ascending: true }).limit(5),
      ]);
      if (cancelado) return;
      const porCobrar = (cargos || []).reduce((s, c) => s + Number(c.monto || 0), 0);
      setCifras({
        pendientes: pendientes || 0, alumnos: alumnos || 0, tutores: tutores || 0,
        porCobrar, suscripciones: suscripciones || 0,
      });
      setRecientes(cola || []);
      setCargando(false);
    })();
    return () => { cancelado = true; };
  }, []);

  return (
    <Page
      eyebrow="Panel"
      titulo="Inicio"
      descripcion="Lo que está pendiente hoy y un atajo a cada área."
    >
      <div className="ax-grid-stats">
        <Stat label="Solicitudes pendientes" value={cargando ? "…" : cifras.pendientes}
          tone={cifras.pendientes > 0 ? "warning" : "neutral"} icono={Inbox} />
        <Stat label="Alumnos" value={cargando ? "…" : cifras.alumnos} tone="accent" icono={GraduationCap} />
        <Stat label="Tutores" value={cargando ? "…" : cifras.tutores} tone="accent" icono={Users} />
        <Stat label="Por cobrar" value={cargando ? "…" : fmtMoney(cifras.porCobrar)}
          tone={cifras.porCobrar > 0 ? "warning" : "neutral"} icono={Receipt} />
        <Stat label="Suscripciones activas" value={cargando ? "…" : cifras.suscripciones} tone="accent" icono={RefreshCw} />
      </div>

      <Card>
        <div className="ax-fila" style={{ justifyContent: "space-between", marginBottom: 12 }}>
          <h2 className="ax-card-tit" style={{ margin: 0 }}>Solicitudes recientes</h2>
          <Button variante="ghost" icono={ArrowRight} onClick={() => onNavigate?.("solicitudes")}>
            Ver todas
          </Button>
        </div>

        {cargando ? (
          <p className="ax-sub" style={{ margin: 0 }}>Cargando…</p>
        ) : recientes.length === 0 ? (
          <EmptyState icono={Inbox} titulo="Sin solicitudes pendientes">
            Todo el registro está al día.
          </EmptyState>
        ) : (
          <div className="ax-lista">
            {recientes.map((p) => {
              const edad = edadDe(p.fecha_nacimiento);
              return (
                <div className="ax-fila" key={p.id}>
                  <span className="ax-avatar">{(p.nombre || p.email || "?").slice(0, 1).toUpperCase()}</span>
                  <div className="ax-aparecer">
                    <div className="ax-nombre">{p.nombre || "(sin nombre)"}</div>
                    <div className="ax-sub">
                      {p.email || "—"}{p.estado ? ` · ${p.estado}` : ""}{edad != null ? ` · ${edad} años` : ""}
                    </div>
                  </div>
                  <Badge tone="warning" icono={Clock}>Pendiente</Badge>
                </div>
              );
            })}
          </div>
        )}
      </Card>

      <div className="ax-grid-stats">
        <Card>
          <h2 className="ax-card-tit">Personas</h2>
          <p className="ax-sub" style={{ margin: "0 0 14px" }}>Altas, tutores y cuentas por aprobar.</p>
          <div className="ax-acciones">
            <Button onClick={() => onNavigate?.("solicitudes")}>Solicitudes</Button>
            <Button onClick={() => onNavigate?.("alumnos")}>Alumnos</Button>
            <Button onClick={() => onNavigate?.("tutores")}>Tutores</Button>
          </div>
        </Card>
        <Card>
          <h2 className="ax-card-tit">Cobranza</h2>
          <p className="ax-sub" style={{ margin: "0 0 14px" }}>Inscripciones, cargos y suscripciones.</p>
          <div className="ax-acciones">
            <Button onClick={() => onNavigate?.("inscripciones")}>Inscripciones</Button>
            <Button onClick={() => onNavigate?.("cargos")}>Cargos</Button>
            <Button onClick={() => onNavigate?.("suscripciones")}>Suscripciones</Button>
          </div>
        </Card>
      </div>
    </Page>
  );
}
