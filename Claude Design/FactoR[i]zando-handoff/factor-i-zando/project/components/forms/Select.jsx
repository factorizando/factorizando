import React from 'react';

export function Select({ label, hint, options = [], id, style, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const fid = id || React.useId();
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, fontFamily: 'var(--fx-font-body)', ...style }}>
      {label && <label htmlFor={fid} style={{ fontSize: 14, fontWeight: 600, color: 'var(--fx-text-heading)' }}>{label}</label>}
      <div style={{ position: 'relative' }}>
        <select id={fid} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
          style={{ width: '100%', height: 'var(--fx-control-md)', padding: '0 38px 0 14px', appearance: 'none', background: 'var(--fx-surface)', border: '1px solid ' + (focus ? 'var(--fx-primary-500)' : 'var(--fx-border-strong)'), borderRadius: 'var(--fx-radius-md)', boxShadow: focus ? 'var(--fx-focus-ring)' : 'none', fontFamily: 'var(--fx-font-body)', fontSize: 15, color: 'var(--fx-text-heading)', outline: 'none' }} {...rest}>
          {options.map(o => typeof o === 'string' ? <option key={o} value={o}>{o}</option> : <option key={o.value} value={o.value}>{o.label}</option>)}
        </select>
        <span aria-hidden="true" style={{ position: 'absolute', right: 14, top: '50%', transform: 'translateY(-60%) rotate(45deg)', width: 8, height: 8, borderRight: '2px solid var(--fx-text-muted)', borderBottom: '2px solid var(--fx-text-muted)', pointerEvents: 'none' }} />
      </div>
      {hint && <span style={{ fontSize: 13, color: 'var(--fx-text-muted)' }}>{hint}</span>}
    </div>
  );
}
