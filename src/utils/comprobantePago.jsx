// src/utils/comprobantePago.js
// Genera un comprobante de pago en PDF: renderiza ComprobantePDF offscreen,
// captura con html2canvas y exporta con jsPDF.

import { createRoot } from "react-dom/client";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import ComprobantePDF from "../components/ComprobantePDF.jsx";

function waitForImages(container) {
  const imgs = Array.from(container.querySelectorAll("img"));
  return Promise.all(
    imgs.map(
      (img) =>
        new Promise((resolve) => {
          if (img.complete) return resolve();
          img.onload = resolve;
          img.onerror = resolve;
        })
    )
  );
}

function waitForFonts() {
  if (document.fonts?.ready) return document.fonts.ready;
  return new Promise((r) => setTimeout(r, 300));
}

export async function generarComprobantePago({ pago, cargo, alumno }) {
  const folio = pago?.id ? pago.id.slice(0, 8).toUpperCase() : "—";

  // Container offscreen
  const container = document.createElement("div");
  Object.assign(container.style, {
    position: "fixed",
    left: "-9999px",
    top: 0,
    width: "800px",
    zIndex: "-1",
    background: "#fff",
  });
  document.body.appendChild(container);

  const root = createRoot(container);
  root.render(
    <ComprobantePDF pago={pago} cargo={cargo} alumno={alumno} capturaPDF />
  );

  // Wait for React to commit + images + fonts
  await new Promise((r) => setTimeout(r, 50));
  await waitForImages(container);
  await waitForFonts();

  // Capture
  const canvas = await html2canvas(container.firstElementChild, {
    scale: 2,
    useCORS: true,
    backgroundColor: "#ffffff",
    logging: false,
  });

  // Build PDF (letter size in mm)
  const pageW = 215.9;
  const margin = 10;
  const usableW = pageW - margin * 2;
  const pxPerMm = canvas.width / usableW;
  const imgH = canvas.height / pxPerMm;

  const doc = new jsPDF({ unit: "mm", format: "letter" });
  const imgData = canvas.toDataURL("image/png");

  // Anchor to the top of the page, like a receipt, instead of centering
  doc.addImage(imgData, "PNG", margin, margin, usableW, imgH);

  // Cleanup
  root.unmount();
  document.body.removeChild(container);

  const fileName = `comprobante-${folio}.pdf`;
  doc.save(fileName);
  return fileName;
}
