// src/utils/calendarioPagosImagen.jsx
// Exporta el calendario de pagos como PNG. Mismo patrón que comprobantePago:
// renderiza el componente fuera de pantalla, espera imágenes y tipografías, y
// captura con html2canvas — pero termina en una imagen, no en un PDF.

import { createRoot } from "react-dom/client";
import html2canvas from "html2canvas";
import CalendarioPagos from "../components/CalendarioPagos.jsx";

function esperarImagenes(cont) {
  return Promise.all(
    Array.from(cont.querySelectorAll("img")).map(
      (img) =>
        new Promise((r) => {
          if (img.complete) return r();
          img.onload = r;
          img.onerror = r;
        })
    )
  );
}

function esperarFuentes() {
  return document.fonts?.ready || new Promise((r) => setTimeout(r, 300));
}

/** Renderiza el calendario offscreen y devuelve el canvas ya capturado. */
async function capturar({ desde, semanas, titulo }) {
  const cont = document.createElement("div");
  Object.assign(cont.style, {
    position: "fixed",
    left: "-9999px",
    top: "0",
    width: "620px",
    background: "#fff",
    zIndex: "-1",
  });
  document.body.appendChild(cont);

  const root = createRoot(cont);
  root.render(
    <CalendarioPagos desde={desde} semanas={semanas} titulo={titulo} paraCaptura />
  );

  await new Promise((r) => setTimeout(r, 60));
  await esperarImagenes(cont);
  await esperarFuentes();

  // scale 2: WhatsApp recomprime lo que enviamos, y partir de el doble de
  // resolución evita que el texto chico salga con halos.
  const canvas = await html2canvas(cont.firstElementChild, {
    scale: 2,
    useCORS: true,
    backgroundColor: "#ffffff",
    logging: false,
  });

  root.unmount();
  document.body.removeChild(cont);
  return canvas;
}

function nombreArchivo(desde) {
  const y = desde.getFullYear();
  const m = String(desde.getMonth() + 1).padStart(2, "0");
  const d = String(desde.getDate()).padStart(2, "0");
  return `calendario-pagos-${y}-${m}-${d}.png`;
}

/** PNG en dataURL, para previsualizar sin descargar. */
export async function calendarioPagosDataURL(opciones) {
  const canvas = await capturar(opciones);
  return canvas.toDataURL("image/png");
}

/**
 * Entrega el PNG por el mejor camino disponible.
 *
 * En el teléfono `navigator.share` abre la hoja del sistema con la imagen
 * adjunta, así que va a WhatsApp sin pasar por la galería. Hay que preguntar con
 * `canShare({ files })` y no solo por `share`: varios navegadores de escritorio
 * exponen `share` pero rechazan archivos, y ahí la promesa falla en vez de
 * abrir nada. Cuando no se puede compartir, se descarga.
 *
 * Devuelve "compartido" | "descargado" | "cancelado".
 */
export async function compartirCalendarioPagos(opciones) {
  const canvas = await capturar(opciones);
  const blob = await new Promise((r) => canvas.toBlob(r, "image/png"));
  const archivo = new File([blob], nombreArchivo(opciones.desde), {
    type: "image/png",
  });

  if (navigator.canShare?.({ files: [archivo] })) {
    try {
      await navigator.share({ files: [archivo], title: opciones.titulo });
      return "compartido";
    } catch (e) {
      // Cerrar la hoja de compartir llega como AbortError: no es un fallo, y
      // caer a la descarga ahí dejaría un archivo que nadie pidió.
      if (e?.name === "AbortError") return "cancelado";
    }
  }

  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = archivo.name;
  a.click();
  URL.revokeObjectURL(url);
  return "descargado";
}
