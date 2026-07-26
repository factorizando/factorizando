// src/pages/alumno/MiSuscripcion.jsx
// Vista del alumno: estado de su suscripción, pagos recientes.

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

// ── Página principal ─────────────────────────────────────────────────────────
export default function MiSuscripcion() {
  const [susc, setSusc] = useState(null);
  const [plan, setPlan] = useState(null);
  const [pagos, setPagos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) return;

      // Buscar suscripción activa (o la más reciente)
      const { data: suscs } = await supabase
        .from("suscripciones")
        .select("*")
        .eq("alumno_id", session.user.id)
        .order("created_at", { ascending: false })
        .limit(1);

      const s = suscs?.[0];
      setSusc(s || null);

      if (s) {
        // Cargar plan
        const { data: pl } = await supabase.from("planes_suscripcion").select("*").eq("id", s.plan_id).single();
        setPlan(pl);

        // Cargar pagos
        const { data: pgs } = await supabase
          .from("pagos_suscripcion")
          .select("*")
          .eq("suscripcion_id", s.id)
          .order("fecha_pago", { ascending: false });
        setPagos(pgs || []);
      }

      setLoading(false);
    }
    load();
  }, []);

  const diasRestantes = susc?.fecha_vencimiento_actual
    ? Math.max(0, Math.ceil((new Date(susc.fecha_vencimiento_actual) - new Date()) / 86400000))
    : 0;

  return (
    <div style={{ minHeight: "100vh", background: C.bg, fontFamily: font }}>
      {/* Navbar */}
      <div style={{
        position: "sticky", top: 0, zIndex: 50,
        background: "rgba(14,15,17,0.96)", backdropFilter: "blur(12px)",
        borderBottom: `1px solid ${C.border}`, padding: "0 24px",
        display: "flex", alignItems: "center", justifyContent: "space-between", height: 56,
      }}>
        <span style={{ color: C.text, fontWeight: 700, fontSize: 15 }}>Mi suscripción</span>
        <Link to="/" style={{
          color: C.muted, fontSize: 13, textDecoration: "none",
          border: `1px solid ${C.border}`, borderRadius: 8,
          padding: "5px 14px", fontFamily: font,
        }}>← Inicio</Link>
      </div>

      <div style={{ maxWidth: 600, margin: "0 auto", padding: "32px 16px" }}>
        {loading ? <Spinner /> : !susc ? (
          <div style={{ textAlign: "center", padding: "80px 20px", color: C.muted, fontSize: 15 }}>
            <div style={{ fontSize: 40, marginBottom: 16, opacity: 0.4 }}>🔓</div>
            No tienes una suscripción activa.
            <div style={{ marginTop: 12, color: C.dim, fontSize: 13 }}>
              Contacta a tu asesor para activar el acceso a la plataforma.
            </div>
          </div>
        ) : (
          <>
            {/* Estado de suscripción */}
            <div style={{
              background: C.card, border: `1px solid ${C.border}`, borderRadius: 14,
              padding: "24px 28px", marginBottom: 24,
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
                <div>
                  <h2 style={{ margin: 0, color: C.text, fontSize: 20, fontWeight: 700, fontFamily: font }}>
                    {plan?.nombre || "Suscripción"}
                  </h2>
                  {plan && (
                    <div style={{ color: C.dim, fontSize: 14, marginTop: 4, fontFamily: font }}>
                      {fmtMoney(plan.precio_mensual)} / mes
                    </div>
                  )}
                </div>
                <EstadoBadge estado={susc.estado} />
              </div>

              <div style={{
                display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12,
              }}>
                <div style={{
                  background: C.surface, border: `1px solid ${C.border}`, borderRadius: 8, padding: "10px 14px",
                }}>
                  <div style={{ color: C.muted, fontSize: 10, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", fontFamily: font }}>Inicio</div>
                  <div style={{ color: C.text, fontSize: 13, fontWeight: 600, marginTop: 2, fontFamily: font }}>{fmtDate(susc.fecha_inicio)}</div>
                </div>
                <div style={{
                  background: C.surface, border: `1px solid ${C.border}`, borderRadius: 8, padding: "10px 14px",
                }}>
                  <div style={{ color: C.muted, fontSize: 10, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", fontFamily: font }}>Vence</div>
                  <div style={{
                    color: diasRestantes <= 7 ? C.yellow : C.text,
                    fontSize: 13, fontWeight: 600, marginTop: 2, fontFamily: font,
                  }}>
                    {fmtDate(susc.fecha_vencimiento_actual)}
                    {susc.estado === "activa" && (
                      <span style={{ color: diasRestantes <= 7 ? C.yellow : C.muted, fontSize: 11, marginLeft: 6 }}>
                        ({diasRestantes} días)
                      </span>
                    )}
                  </div>
                </div>
                <div style={{
                  background: C.surface, border: `1px solid ${C.border}`, borderRadius: 8, padding: "10px 14px",
                }}>
                  <div style={{ color: C.muted, fontSize: 10, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", fontFamily: font }}>Renovación</div>
                  <div style={{
                    color: susc.auto_renovar ? C.green : C.muted,
                    fontSize: 13, fontWeight: 600, marginTop: 2, fontFamily: font,
                  }}>
                    {susc.auto_renovar ? "Automática" : "Manual"}
                  </div>
                </div>
              </div>

              {plan?.descripcion && (
                <div style={{ color: C.dim, fontSize: 13, marginTop: 14, fontFamily: font }}>{plan.descripcion}</div>
              )}
            </div>

            {/* Historial de pagos */}
            <div>
              <h3 style={{ color: C.text, fontSize: 15, fontWeight: 700, marginBottom: 12, fontFamily: font }}>
                Historial de pagos
              </h3>
              {pagos.length === 0 ? (
                <div style={{ color: C.muted, fontSize: 13, fontFamily: font }}>Sin pagos registrados</div>
              ) : (
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  {pagos.map((p) => (
                    <div key={p.id} style={{
                      background: C.card, border: `1px solid ${C.border}`, borderRadius: 8,
                      padding: "10px 14px", display: "flex", justifyContent: "space-between", alignItems: "center",
                    }}>
                      <div>
                        <span style={{ color: C.text, fontSize: 13, fontWeight: 600, fontFamily: font }}>{p.periodo_cubierto}</span>
                        <span style={{ color: C.muted, fontSize: 12, marginLeft: 8, fontFamily: font }}>{fmtDate(p.fecha_pago)}</span>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <span style={{ color: C.text, fontWeight: 700, fontSize: 14, fontFamily: font }}>{fmtMoney(p.monto)}</span>
                        <EstadoBadge estado={p.estado} />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
