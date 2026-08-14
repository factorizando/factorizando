import React from 'react';

export function Checkbox({ label, description, checked, onChange, disabled, id, style }) {
  const fid = id || React.useId();
  return (
    <label htmlFor={fid} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', cursor: disabled ? 'not-allowed' : 'pointer', fontFamily: 'var(--fx-font-body)', opacity: disabled ? 0.6 : 1, ...style }}>
      <input id={fid} type="checkbox" checked={checked} onChange={onChange} disabled={disabled}
        style={{ appearance: 'none', width: 22, height: 22, flex: '0 0 auto', marginTop: 1, borderRadius: 6, border: '1px solid ' + (checked ? 'var(--fx-primary-500)' : 'var(--fx-border-strong)'), background: checked ? 'var(--fx-primary-500)' : 'var(--fx-surface)', display: 'grid', placeItems: 'center', cursor: 'inherit' }} />
      <span style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <span style={{ fontSize: 15, color: 'var(--fx-text-heading)' }}>{label}</span>
        {description && <span style={{ fontSize: 13, color: 'var(--fx-text-muted)' }}>{description}</span>}
      </span>
    </label>
  );
}
