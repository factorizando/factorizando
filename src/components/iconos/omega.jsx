// Ícono: letra griega Omega (Ω) encerrada en un círculo.
// Usa currentColor para heredar el color del contexto (paleta del tema).
export default function IconoOmega({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" style={{ display: "block" }}>
      <circle cx="12" cy="12" r="10.6" fill="none" stroke="var(--border)" strokeWidth="1" />
      <text
        x="12" y="12.5" textAnchor="middle" dominantBaseline="central"
        fontFamily="'Playfair Display', Georgia, serif" fontWeight="700" fontSize="13.5"
        fill="var(--azul-suave)"
      >
        Ω
      </text>
    </svg>
  );
}
