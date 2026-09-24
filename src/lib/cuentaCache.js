// Caché en memoria del usuario del header público.
//
// La Home se remonta en cada navegación y `supabase.auth.getSession()` es
// asíncrono: sin caché, al volver a la Home el header pasaba por "Entrar /
// Crear cuenta" antes de mostrar el avatar. Guardar el último usuario resuelto
// hace que el avatar ya esté en el primer render.
//
// Un único listener global mantiene el caché al día sin importar en qué
// pantalla se cierre sesión: el header solo vive en la Home y en MateriaVer,
// pero el cierre puede ocurrir en el panel de admin, que también vuelve a "/".
import { supabase } from "./supabase";

// undefined = todavía sin resolver; null = se resolvió y no hay sesión.
let usuario;
let suscrito = false;

export function cuentaCacheada() {
  return usuario;
}

export function guardarCuenta(u) {
  usuario = u;
}

export function observarSesion() {
  if (suscrito) return;
  suscrito = true;
  supabase.auth.onAuthStateChange((_evento, session) => {
    if (!session) usuario = null;
  });
}
