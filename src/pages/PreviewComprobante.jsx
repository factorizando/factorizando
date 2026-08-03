// Banco de pruebas del comprobante: sirve para iterar el diseño sin descargar
// el PDF en cada cambio. Montado solo en dev (ver la ruta en App.jsx).
import ComprobantePDF from "../components/ComprobantePDF.jsx";

export default function PreviewComprobante() {
  const pago = {
    id: "e7a701fa-1234-4321-abcd-000000000000",
    monto: 1300,
    fecha_pago: "2026-05-01",
    metodo_pago: "efectivo",
  };
  const cargo = { concepto: "Modalidad Semipresencial | Curso de Admisión Nivel Superior", monto: 1300 };
  const alumno = { nombre: "Maria Jose", apellidos: "Romero Cruz" };
  return (
    <div style={{ background: "#555", minHeight: "100vh", padding: 24 }}>
      <div style={{ width: 800 }}>
        <ComprobantePDF pago={pago} cargo={cargo} alumno={alumno} />
      </div>
    </div>
  );
}
