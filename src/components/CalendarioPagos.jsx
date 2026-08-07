// src/components/CalendarioPagos.jsx
// Imagen compartible con las fechas de pago semanales. Es general: no lleva
// nombres, montos ni estados, así que la misma imagen sirve para todo el grupo
// y puede reenviarse sin exponer datos de ninguna familia.
//
// Se captura con html2canvas igual que el comprobante, de ahí `paraCaptura`.

import MarcaImpresa from "./MarcaImpresa.jsx";
import { lunesDeLaSemana, domingoDeLaSemana, sumarDias } from "../utils/fechas.js";

const MESES = [
  "enero", "febrero", "marzo", "abril", "mayo", "junio",
  "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre",
];

/** "3 al 9 de agosto", o "31 de agosto al 6 de septiembre" si cruza de mes. */
function rangoSemana(lunes, domingo) {
  const mismoMes = lunes.getMonth() === domingo.getMonth();
  return mismoMes
    ? `${lunes.getDate()} al ${domingo.getDate()} de ${MESES[domingo.getMonth()]}`
    : `${lunes.getDate()} de ${MESES[lunes.getMonth()]} al ${domingo.getDate()} de ${MESES[domingo.getMonth()]}`;
}

export default function CalendarioPagos({
  desde,
  semanas = 8,
  titulo = "Calendario de pagos",
  paraCaptura = false,
}) {
  const primerLunes = lunesDeLaSemana(desde || new Date());
  const filas = Array.from({ length: semanas }, (_, i) => {
    const lunes = sumarDias(primerLunes, i * 7);
    return { lunes, domingo: domingoDeLaSemana(lunes) };
  });

  // El mes se escribe solo cuando cambia: repetirlo en cada renglón convierte la
  // lista en una columna de ruido y lo que hay que leer es el día.
  let mesPrevio = null;

  return (
    <div style={S.root}>
      <div style={S.accento} />
      <div style={S.header}>
        <MarcaImpresa paraCaptura={paraCaptura} altoLogo={34} />
      </div>

      <div style={S.cuerpo}>
        <h1 style={S.titulo}>{titulo}</h1>
        <p style={S.bajada}>
          Cada semana se paga el lunes que la inicia.
        </p>

        <div style={S.lista}>
          {filas.map(({ lunes, domingo }, i) => {
            const mes = `${lunes.getMonth()}-${lunes.getFullYear()}`;
            const nuevoMes = mes !== mesPrevio;
            mesPrevio = mes;
            return (
              <div key={i}>
                {nuevoMes && (
                  <p style={S.mes}>
                    {MESES[lunes.getMonth()]} {lunes.getFullYear()}
                  </p>
                )}
                {/* Sin el nombre del día: todas las filas son lunes y la bajada
                    ya lo dice, así que repetirlo ocho veces solo es ruido. */}
                <div style={S.fila}>
                  <span style={S.dia}>{lunes.getDate()}</span>
                  <span style={S.filaRango}>
                    semana del {rangoSemana(lunes, domingo)}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div style={S.pie}>
        <p style={S.pieTexto}>
          Dudas o comprobantes: WhatsApp 249 137 4886
        </p>
      </div>
    </div>
  );
}

const S = {
  root: {
    width: 620,
    background: "#fff",
    color: "#1a1c1f",
    fontFamily: "'DM Sans', sans-serif",
    overflow: "hidden",
  },
  accento: { height: 6, background: "#3b9eff" },
  header: { padding: "20px 32px 0" },
  cuerpo: { padding: "18px 32px 8px" },
  titulo: {
    margin: "0 0 4px",
    fontSize: 30,
    fontWeight: 800,
    letterSpacing: "-0.02em",
  },
  bajada: { margin: "0 0 22px", fontSize: 14, color: "#6b7280" },
  lista: { display: "flex", flexDirection: "column" },
  mes: {
    margin: "14px 0 8px",
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: "#3b9eff",
  },
  fila: {
    display: "flex",
    alignItems: "center",
    gap: 16,
    padding: "10px 0",
    borderBottom: "1px solid #eef0f3",
  },
  // El número del día es el dato que se busca de un vistazo, así que carga todo
  // el peso tipográfico; el resto lo acompaña.
  dia: {
    flex: "0 0 46px",
    fontSize: 26,
    fontWeight: 800,
    textAlign: "right",
    fontVariantNumeric: "tabular-nums",
    letterSpacing: "-0.02em",
  },
  filaRango: { fontSize: 14.5, color: "#4b5563", minWidth: 0 },
  pie: {
    margin: "10px 32px 0",
    padding: "14px 0 22px",
    borderTop: "1px solid #e3e6ea",
  },
  pieTexto: { margin: 0, fontSize: 12, color: "#8b919b", textAlign: "center" },
};
