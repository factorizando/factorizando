// Vista de un documento matemático. Pública (experimento), como las páginas de teoría.
import { useParams } from "react-router-dom";
import { buscarDocumento } from "../data/documentos/documentosIndex.js";
import DocumentoRenderer from "../components/DocumentoRenderer.jsx";

export default function DocumentoVer() {
  const { id } = useParams();
  const doc = buscarDocumento(id);

  if (!doc) {
    return (
      <div style={{ minHeight: "100vh", background: "#0d0d0f", color: "#e8e4dc", display: "grid", placeItems: "center", fontFamily: "monospace" }}>
        Documento no encontrado: {id}
      </div>
    );
  }

  return <DocumentoRenderer doc={doc} />;
}
