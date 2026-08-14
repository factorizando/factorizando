import React from 'react';

export function Radio({ label, name, value, checked, onChange, disabled, id, style }) {
  const fid = id || React.useId();
  return (
    <label htmlFor={fid} style={{ display: 'flex', gap: 12, alignItems: 'center', cursor: disabled ? 'not-allowed' : 'pointer', fontFamily: 'var(--fx-font-body)', opacity: disabled ? 0.6 : 1, ...style }}>
      <span style={{ width: 22, height: 22, borderRadius: '50%', flex: '0 0 auto', border: '1px solid ' + (checked ? 'var(--fx-primary-500)' : 'var(--fx-border-strong)'), background: 'var(--fx-surface)', display: 'grid', placeItems: 'center' }}>
        {checked && <span style={{ width: 11, height: 11, borderRadius: '50%', background: 'var(--fx-primary-500)' }} />}
      </span>
      <input id={fid} type="radio" name={name} value={value} checked={checked} onChange={onChange} disabled={disabled} style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }} />
      <span style={{ fontSize: 15, color: 'var(--fx-text-heading)' }}>{label}</span>
    </label>
  );
}
