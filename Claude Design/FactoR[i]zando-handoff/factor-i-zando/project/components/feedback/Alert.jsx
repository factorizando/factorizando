import React from 'react';

const TONES = {
  success: ['var(--fx-success-bg)', 'var(--fx-success-border)', 'var(--fx-success-text)', 'var(--fx-success)', '✓'],
  warning: ['var(--fx-warning-bg)', 'var(--fx-warning-border)', 'var(--fx-warning-text)', 'var(--fx-warning)', '!'],
  error: ['var(--fx-error-bg)', 'var(--fx-error-border)', 'var(--fx-error-text)', 'var(--fx-error)', '×'],
  info: ['var(--fx-info-bg)', 'var(--fx-info-border)', 'var(--fx-info-text)', 'var(--fx-info)', 'i']
};

export function Alert({ tone = 'info', title, children, action, style }) {
  const [bg, bd, fg, dot, glyph] = TONES[tone] || TONES.info;
  return (
    <div role={tone === 'error' || tone === 'warning' ? 'alert' : 'status'}
      style={{ display: 'flex', gap: 14, alignItems: 'flex-start', background: bg, border: '1px solid ' + bd, borderRadius: 'var(--fx-radius-md)', padding: '14px 16px', fontFamily: 'var(--fx-font-body)', ...style }}>
      <span aria-hidden="true" style={{ width: 22, height: 22, borderRadius: '50%', background: dot, color: tone === 'error' || tone === 'warning' ? 'var(--fx-primary-900)' : '#fff', display: 'grid', placeItems: 'center', fontSize: 13, fontWeight: 700, flex: '0 0 auto' }}>{glyph}</span>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 3, flex: 1 }}>
        {title && <span style={{ fontSize: 15, fontWeight: 600, color: fg }}>{title}</span>}
        {children && <span style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--fx-text-body)' }}>{children}</span>}
      </div>
      {action}
    </div>
  );
}
