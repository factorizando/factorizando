// Utilidades para escribir en columnas DATE de Supabase.
//
// `Date.toISOString()` serializa en UTC: en UTC-6, una fecha construida después
// de las 18:00 hora local se guarda con el día SIGUIENTE. Es el reverso del
// problema de lectura documentado en CLAUDE.md (ahí el desfase resta un día al
// mostrar; aquí suma un día al guardar). Estas funciones trabajan siempre sobre
// el calendario local, que es el que ve y espera el usuario.

/** Date → "YYYY-MM-DD" según el calendario local, nunca UTC. */
export function aFechaISO(fecha) {
  const y = fecha.getFullYear();
  const m = String(fecha.getMonth() + 1).padStart(2, "0");
  const d = String(fecha.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

/**
 * "YYYY-MM-DD" (columna DATE de Supabase) → Date en el calendario local.
 * `new Date("2026-01-31")` se interpreta como medianoche UTC, que en UTC-6 es el
 * día anterior a las 18:00; operar sobre esa fecha arrastra el desfase.
 */
export function desdeFechaISO(iso) {
  const [y, m, d] = iso.split("T")[0].split("-").map(Number);
  return new Date(y, m - 1, d);
}

/**
 * Suma días naturales. Usa setDate en vez de aritmética de milisegundos
 * (`+ n * 86400000`), que se desfasa una hora en los cambios de horario de
 * verano y puede cruzar de día.
 */
export function sumarDias(fecha, dias) {
  const f = new Date(fecha);
  f.setDate(f.getDate() + dias);
  return f;
}

/**
 * Lunes de la semana que contiene a `fecha`. Las semanas de cobro van de lunes a
 * domingo. `getDay()` numera 0=domingo … 6=sábado, así que el domingo pertenece
 * a la semana que EMPEZÓ seis días antes, no a la que empieza al día siguiente:
 * ese es el caso que se equivoca si se resta `getDay() - 1` sin más.
 */
export function lunesDeLaSemana(fecha) {
  const f = new Date(fecha);
  f.setHours(0, 0, 0, 0);
  const dia = f.getDay();
  f.setDate(f.getDate() + (dia === 0 ? -6 : 1 - dia));
  return f;
}

/** Domingo que cierra la semana de `fecha` (lunes + 6). */
export function domingoDeLaSemana(fecha) {
  return sumarDias(lunesDeLaSemana(fecha), 6);
}

/**
 * Etiqueta legible de un periodo facturado: "4 – 10 ago 2026", o
 * "30 ago – 5 sep 2026" cuando cruza de mes.
 */
export function textoPeriodo(inicioISO, finISO) {
  if (!inicioISO || !finISO) return "—";
  const a = desdeFechaISO(inicioISO);
  const b = desdeFechaISO(finISO);
  const mismoMes = a.getMonth() === b.getMonth() && a.getFullYear() === b.getFullYear();
  const ini = a.toLocaleDateString("es-MX", mismoMes ? { day: "numeric" } : { day: "numeric", month: "short" });
  const fin = b.toLocaleDateString("es-MX", { day: "numeric", month: "short" });
  return `${ini} – ${fin} ${b.getFullYear()}`;
}

/**
 * Suma meses naturales conservando el día del mes. Si el día no existe en el mes
 * destino, cae al último día de ese mes: 31 ene + 1 mes = 28/29 feb, no 2 o 3 mar
 * (que es lo que da `setMonth` por sí solo al desbordar).
 */
export function sumarMeses(fecha, meses) {
  const f = new Date(fecha);
  const dia = f.getDate();
  f.setDate(1); // evita el desbordamiento antes de mover el mes
  f.setMonth(f.getMonth() + meses);
  const ultimoDia = new Date(f.getFullYear(), f.getMonth() + 1, 0).getDate();
  f.setDate(Math.min(dia, ultimoDia));
  return f;
}
