// Congela las cifras del catálogo para la portada.
//
// La portada muestra cuántos reactivos, cuestionarios y presentaciones hay, y
// cuántas piezas tiene cada materia. Esos números salían de recorrer el
// contenido real en cada render, lo cual era cómodo —nunca hay que
// actualizarlos a mano— pero obligaba a la portada a cargar TODO el sitio: tres
// megas de bancos de preguntas para imprimir un "1 234".
//
// Este script conserva la comodidad sin el costo: recorre el contenido real
// una vez, al compilar, y deja el resultado en `src/data/catalogo.generado.json`.
// Corre solo (`prebuild` y `predev` en package.json); si publicas material
// nuevo, el siguiente build actualiza las cifras sin que toques nada.
//
// Usa el cargador de módulos de Vite en lugar de node a secas porque
// `materias-contenido.js` depende de cosas que solo Vite entiende:
// `import.meta.glob` y los módulos de contenido escritos en .jsx.
import { writeFileSync } from "node:fs";
import { createServer } from "vite";

const DESTINO = "src/data/catalogo.generado.json";

const servidor = await createServer({
  server: { middlewareMode: true },
  appType: "custom",
  logLevel: "warn",
});

try {
  const { catalogoCompleto } = await servidor.ssrLoadModule("/src/data/materias-contenido.js");
  const catalogo = catalogoCompleto();
  writeFileSync(DESTINO, JSON.stringify(catalogo, null, 2) + "\n");
  const { reactivos, cuestionarios, presentaciones } = catalogo.cifras;
  console.log(
    `[catálogo] ${DESTINO}: ${reactivos} reactivos · ${cuestionarios} cuestionarios · ${presentaciones} presentaciones`
  );
} finally {
  await servidor.close();
}
