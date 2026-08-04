// src/components/ComprobantePDF.jsx
// Componente visual del comprobante de pago. Se renderiza offscreen para
// capturar con html2canvas y generar PDF.

import { useEffect, useRef } from "react";
import { useKaTeX } from "../data/teoria/shared.jsx";

function fmtMoney(n) {
  return `$${Number(n).toLocaleString("es-MX", { minimumFractionDigits: 2 })}`;
}

function fmtFecha(iso) {
  if (!iso) return "—";
  const [y, m, d] = iso.split("T")[0].split("-").map(Number);
  return new Date(y, m - 1, d).toLocaleDateString("es-MX", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

function metodoPagoLabel(m) {
  const map = {
    efectivo: "Efectivo",
    transferencia: "Transferencia",
    tarjeta: "Tarjeta",
    oxxo: "OXXO",
  };
  return map[m] || m || "—";
}

export default function ComprobantePDF({ pago, cargo, alumno }) {
  const folio = pago?.id ? pago.id.slice(0, 8).toUpperCase() : "—";
  const nombreAlumno =
    `${alumno?.nombre || ""} ${alumno?.apellidos || ""}`.trim() || "—";
  const pagado = Number(pago?.monto || 0);
  const montoCargo = Number(cargo?.monto || 0);
  const concepto = (cargo?.concepto || "—").replace(/\s*[-–—([]?\s*semanal\s*[\])]?\s*/gi, "").trim();

  const katexReady = useKaTeX();
  const mathRef = useRef(null);
  useEffect(() => {
    if (katexReady && window.katex && mathRef.current) {
      try { window.katex.render("\\mathbb{R}[i]", mathRef.current, { throwOnError: false, displayMode: false }); }
      catch { /* fallback */ }
    }
  }, [katexReady]);

  return (
    <div style={S.root}>
      <style>{CSS}</style>

      {/* ── Header ── */}
      <div style={S.header}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <img
            src={`${import.meta.env.BASE_URL}assets/logoX.png`}
            alt="Factorizando"
            style={{ height: 40, display: "block" }}
          />
          <span className="cp-wordmark">
            Facto<span ref={mathRef} style={{ color: "#80c6ff" }}>{katexReady ? "" : "ℝ[i]"}</span>zando
          </span>
        </div>
        <div style={{ flex: 1 }} />
        <div style={{ textAlign: "right" }}>
          <p style={S.eyebrow}>Comprobante de pago</p>
          <p style={S.folio}>Folio N.º {folio}</p>
        </div>
      </div>

      {/* ── Body ── */}
      <div style={S.body}>
        {/* Meta row */}
        <div style={S.metaRow}>
          <div style={S.metaItem}>
            <p style={S.metaLabel}>Estudiante</p>
            <p style={S.metaValue}>{nombreAlumno}</p>
          </div>
          <div style={S.metaItem}>
            <p style={S.metaLabel}>Fecha de emisión</p>
            <p style={S.metaValue}>{fmtFecha(pago?.fecha_pago)}</p>
          </div>
          {/* La última columna se alinea a la derecha para cerrar la fila contra
              el mismo margen que el folio y la columna "Monto"; alineada a la
              izquierda dejaba un hueco de ~167px con valores cortos. */}
          <div style={{ ...S.metaItem, textAlign: "right" }}>
            <p style={S.metaLabel}>Método de pago</p>
            <p style={S.metaValue}>{metodoPagoLabel(pago?.metodo_pago)}</p>
          </div>
        </div>

        {/* Detalle */}
        <p style={S.sectionTitle}>Detalle</p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Concepto</th>
              <th style={{ ...S.th, textAlign: "right" }}>Monto</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>{concepto}</td>
              <td style={{ ...S.td, textAlign: "right" }}>
                {fmtMoney(montoCargo)}
              </td>
            </tr>
            <tr>
              <td
                style={{
                  ...S.td,
                  ...S.metaLabel,
                  borderBottom: "none",
                  paddingTop: 30,
                  textAlign: "right",
                  paddingRight: 14,
                  verticalAlign: "middle",
                }}
              >
                Total pagado
              </td>
              {/* El total va en DM Sans (no en la serif del wordmark): a este
                  cuerpo la Cormorant adelgaza mucho las cifras y se leían mal.
                  tabular-nums evita que los dígitos bailen de ancho. */}
              <td
                style={{
                  ...S.td,
                  borderBottom: "none",
                  paddingTop: 30,
                  textAlign: "right",
                  verticalAlign: "middle",
                  fontSize: 25,
                  fontWeight: 700,
                  letterSpacing: "-0.015em",
                  fontVariantNumeric: "tabular-nums",
                  color: "#0e0f11",
                }}
              >
                {fmtMoney(pagado)}
                <span style={{ fontSize: 13, fontWeight: 600, color: "#6b7280", marginLeft: 6 }}>
                  MXN
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* ── Términos y preguntas ── */}
      <div style={S.legal}>
        <div style={S.legalCol}>
          <p style={S.legalTitle}>Términos y Condiciones</p>
          <p style={S.legalText}>
            Este comprobante certifica la recepción del pago señalado arriba y
            no constituye una factura fiscal (CFDI). Consérvalo como respaldo
            de tu inscripción o suscripción.
          </p>
        </div>
        <div style={S.legalCol}>
          <p style={S.legalTitle}>Preguntas</p>
          <p style={S.legalText}>
            Envía un correo a factorizandoeluniverso@gmail.com o un WhatsApp al
            249 137 4886.
          </p>
        </div>
      </div>
    </div>
  );
}

const S = {
  root: {
    width: 800,
    background: "#fff",
    color: "#1a1c1f",
    fontFamily: "'DM Sans', sans-serif",
    borderRadius: 14,
    overflow: "hidden",
  },
  // El margen va en los cuatro lados: antes era "0 14px" y la caja oscura
  // quedaba pegada al borde superior mientras respiraba a los costados.
  header: {
    background: "#16181f",
    padding: "16px 36px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 14,
    borderRadius: 10,
    border: "1px solid #252830",
  },
  eyebrow: {
    fontSize: 11,
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    color: "#3b9eff",
    fontWeight: 700,
    margin: "0 0 4px",
  },
  folio: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 20,
    fontWeight: 700,
    margin: 0,
    color: "#e8eaf0",
  },
  body: { padding: "32px 36px" },
  metaRow: {
    display: "flex",
    justifyContent: "space-between",
    gap: 24,
    paddingBottom: 24,
    marginBottom: 32,
    borderBottom: "1px dashed #e3e6ea",
    flexWrap: "wrap",
  },
  metaItem: { flex: "1 1 0", minWidth: 160 },
  metaLabel: {
    fontSize: 10.5,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    color: "#6b7280",
    margin: "0 0 3px",
  },
  metaValue: { fontSize: 15, fontWeight: 700, margin: 0 },
  sectionTitle: {
    fontSize: 10.5,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    color: "#6b7280",
    margin: "0 0 12px",
  },
  table: { width: "100%", borderCollapse: "collapse" },
  th: {
    textAlign: "left",
    fontSize: 10.5,
    letterSpacing: "0.06em",
    textTransform: "uppercase",
    color: "#6b7280",
    fontWeight: 600,
    padding: "0 0 8px",
    borderBottom: "1px solid #e3e6ea",
  },
  td: {
    padding: "14px 0",
    borderBottom: "1px solid #e3e6ea",
    fontSize: 14,
    verticalAlign: "top",
  },
  // Bloque de cierre a dos columnas, tomado del recibo anterior: los términos
  // a la izquierda y a quién escribirle a la derecha, separados del cuerpo por
  // una línea que abarca el ancho de contenido (de ahí margin + borderTop en
  // el contenedor, en vez de padding lateral).
  legal: {
    display: "flex",
    gap: 40,
    margin: "0 36px",
    paddingTop: 24,
    paddingBottom: 32,
    borderTop: "1px solid #e3e6ea",
  },
  legalCol: { flex: "1 1 0" },
  legalTitle: {
    fontSize: 12,
    fontWeight: 700,
    color: "#1a1c1f",
    margin: "0 0 8px",
  },
  legalText: {
    fontSize: 10,
    color: "#6b7280",
    lineHeight: 1.65,
    margin: 0,
    textAlign: "justify",
  },
};

const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Cormorant+Garamond:wght@700&display=swap');

  /* Wordmark del encabezado, centrado con el logo por flex align-items:center.
     Dos cosas lo descuadraban: KaTeX inyecta font-size 1.21em en .katex, así que
     el ℝ[i] salía bastante más grande que las letras, y su line-height 1.2
     inflaba la caja de línea del texto. Fijamos line-height y bajamos el math a
     1.05em para que el conjunto quede parejo.
     El margin-top es un ajuste óptico: el centrado flex alinea la *caja* del
     texto, no su banda de mayúsculas, que queda más arriba por el hueco del
     descendente. Ojo: en un flex item centrado el margen desplaza solo la mitad
     de su valor, así que 2.25px ≈ 1.12px de corrección real (medido sobre la
     captura de html2canvas: banda de mayúsculas a 0.25px del centro del logo,
     contra 1.25px por debajo antes). */
  .cp-wordmark {
    font-family: 'Cormorant Garamond', Georgia, serif;
    font-weight: 700;
    font-size: 19px;
    line-height: 1;
    color: #e8e8e8;
    letter-spacing: .01em;
    margin-top: 2.25px;
  }
  .cp-wordmark .katex { font-size: 1.05em; line-height: 1; }
`;
