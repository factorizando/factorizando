import React from 'react';

export function Input({ label, hint, error, prefix, suffix, mono = false, id, style, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const fid = id || React.useId();
  const borderColor = error ? 'var(--fx-warning)' : focus ? 'var(--fx-primary-500)' : 'var(--fx-border-strong)';
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, fontFamily: 'var(--fx-font-body)', ...style }}>
      {label && <label htmlFor={fid} style={{ fontSize: 14, fontWeight: 600, color: 'var(--fx-text-heading)' }}>{label}</label>}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, height: 'var(--fx-control-md)', padding: '0 14px', background: 'var(--fx-surface)', border: '1px solid ' + borderColor, borderRadius: 'var(--fx-radius-md)', boxShadow: focus ? 'var(--fx-focus-ring)' : 'none', transition: 'border-color var(--fx-transition), box-shadow var(--fx-transition)' }}>
        {prefix && <span style={{ color: 'var(--fx-text-muted)', fontSize: 15 }}>{prefix}</span>}
        <input id={fid} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
          style={{ flex: 1, border: 'none', outline: 'none', background: 'transparent', fontFamily: mono ? 'var(--fx-font-mono)' : 'var(--fx-font-body)', fontSize: 15, color: 'var(--fx-text-heading)', minWidth: 0 }} {...rest} />
        {suffix && <span style={{ color: 'var(--fx-text-muted)', fontSize: 13 }}>{suffix}</span>}
      </div>
      {(error || hint) && <span style={{ fontSize: 13, color: error ? 'var(--fx-warning-text)' : 'var(--fx-text-muted)' }}>{error || hint}</span>}
    </div>
  );
}
