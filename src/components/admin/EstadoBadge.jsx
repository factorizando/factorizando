// src/components/admin/EstadoBadge.jsx
// Badge de estado con color — reutilizable para inscripciones, cargos, suscripciones.

const font = "'DM Sans', sans-serif";

const COLORES = {
  // Inscripciones
  activa:    { bg: "#34d39922", fg: "#34d399" },
  pausada:   { bg: "#fbbf2422", fg: "#fbbf24" },
  finalizada:{ bg: "#5a607022", fg: "#5a6070" },
  cancelada: { bg: "#f43f5e22", fg: "#f43f5e" },
  // Cargos
  pendiente: { bg: "#fbbf2422", fg: "#fbbf24" },
  pagado:    { bg: "#34d39922", fg: "#34d399" },
  vencido:   { bg: "#f43f5e22", fg: "#f43f5e" },
  // Suscripciones
  fallido:   { bg: "#f43f5e22", fg: "#f43f5e" },
};

const DEFAULT = { bg: "#5a607022", fg: "#5a6070" };

export default function EstadoBadge({ estado }) {
  const c = COLORES[estado] || DEFAULT;
  return (
    <span style={{
      background: c.bg,
      color: c.fg,
      borderRadius: 99,
      padding: "2px 10px",
      fontSize: 11,
      fontWeight: 700,
      fontFamily: font,
      textTransform: "capitalize",
      whiteSpace: "nowrap",
    }}>
      {estado}
    </span>
  );
}
