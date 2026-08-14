import React from 'react';

/** La "i" va en modo matemático: corchetes redondos, variable en itálica serif. */
export function Logo({ size = 19, mark = true, onDark = false, style }) {
  const markSize = Math.round(size * 1.7);
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: Math.round(size * 0.55), ...style }}>
      {mark && (
        <span style={{ width: markSize, height: markSize, borderRadius: markSize * 0.28, background: onDark ? '#fff' : 'var(--fx-primary-500)', color: onDark ? 'var(--fx-primary-900)' : '#fff', display: 'grid', placeItems: 'center', fontFamily: 'var(--fx-font-heading)', fontWeight: 700, fontSize: Math.round(size * 0.85) }}>F</span>
      )}
      <span style={{ fontFamily: 'var(--fx-font-heading)', fontWeight: 600, fontSize: size, letterSpacing: '-0.02em', color: onDark ? '#fff' : 'var(--fx-text-heading)' }}>
        FactoR
        <span style={{ fontFamily: 'var(--fx-font-math)', fontWeight: 400, color: onDark ? 'var(--fx-primary-300)' : 'var(--fx-primary-500)' }}>
          [<span style={{ fontStyle: 'italic' }}>i</span>]
        </span>
        zando
      </span>
    </span>
  );
}
