// src/components/admin/TabNav.jsx
// Barra de navegación por tabs estilo pill — reutilizable en el panel admin.

const font = "'DM Sans', sans-serif";
const C = {
  surface: "#13151a",
  border: "#252830",
  blue: "#3b9eff",
  text: "#e8eaf0",
  muted: "#5a6070",
};

export default function TabNav({ tabs, active, onChange }) {
  return (
    <div style={{
      borderBottom: `1px solid ${C.border}`,
      marginBottom: 28,
      display: "flex",
      gap: 0,
      overflowX: "auto",
    }}>
      {tabs.map((t) => {
        const isActive = active === t.id;
        return (
          <button
            key={t.id}
            onClick={() => onChange(t.id)}
            style={{
              border: "none",
              borderBottom: `2px solid ${isActive ? C.blue : "transparent"}`,
              borderRadius: 0,
              padding: "12px 20px",
              fontSize: 13,
              fontWeight: isActive ? 700 : 500,
              cursor: "pointer",
              background: "transparent",
              color: isActive ? C.text : C.muted,
              fontFamily: font,
              transition: "color .15s, border-color .15s",
              whiteSpace: "nowrap",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
            onMouseEnter={(e) => {
              if (!isActive) e.currentTarget.style.color = C.text;
            }}
            onMouseLeave={(e) => {
              if (!isActive) e.currentTarget.style.color = C.muted;
            }}
          >
            {t.icon && <span style={{ fontSize: 14 }}>{t.icon}</span>}
            {t.label}
            {t.badge != null && (
              <span style={{
                background: isActive ? C.blue + "22" : C.surface,
                color: isActive ? C.blue : C.muted,
                borderRadius: 99,
                padding: "1px 8px",
                fontSize: 11,
                fontWeight: 700,
              }}>
                {t.badge}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
