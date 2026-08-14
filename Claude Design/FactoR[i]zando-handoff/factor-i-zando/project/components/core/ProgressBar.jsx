import React from 'react';

export function ProgressBar({ value = 0, max = 100, color = 'var(--fx-primary-500)', label, valueLabel, size = 'md', style }) {
  const pct = Math.max(0, Math.min(100, (value / max) * 100));
  const h = size === 'sm' ? 5 : size === 'lg' ? 10 : 7;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 7, ...style }}>
      {(label || valueLabel) && (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
          <span style={{ fontFamily: 'var(--fx-font-body)', fontSize: 12, fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--fx-text-muted)' }}>{label}</span>
          <span style={{ fontFamily: 'var(--fx-font-heading)', fontSize: 14, fontWeight: 500, color: 'var(--fx-text-heading)', fontVariantNumeric: 'tabular-nums', whiteSpace: 'nowrap' }}>{valueLabel}</span>
        </div>
      )}
      <div role="progressbar" aria-valuenow={value} aria-valuemin={0} aria-valuemax={max} aria-label={label}
        style={{ height: h, borderRadius: 'var(--fx-radius-pill)', background: 'var(--fx-surface-sunken)', overflow: 'hidden' }}>
        <div style={{ width: pct + '%', height: '100%', background: color, borderRadius: 'var(--fx-radius-pill)', transition: 'width 240ms ease' }} />
      </div>
    </div>
  );
}
