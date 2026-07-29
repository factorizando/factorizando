// Configuración global de la app.

// Modo mantenimiento: con `true`, el público ve la pantalla "Próximamente" y
// SOLO los admins (sesión iniciada con rol=admin) entran al sitio completo.
// `/login` y `/nueva-contrasena` siguen accesibles para poder autenticarse.
// Cambia a `false` (y redeploy) para abrir el sitio al público.
export const MANTENIMIENTO = true;
