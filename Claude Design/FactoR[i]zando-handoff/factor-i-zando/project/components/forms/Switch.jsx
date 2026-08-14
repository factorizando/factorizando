import React from 'react';

export function Switch({ label, checked = false, onChange, disabled, style }) {
  return (
    <label style={{ display: 'inline-flex', alignItems: 'center', gap: 12, cursor: disabled ? 'not-allowed' : 'pointer', fontFamily: 'var(--fx-font-body)', opacity: disabled ? 0.6 : 1, ...style }}>
      <span onClick={() => !disabled && onChange && onChange(!checked)}
        style={{ width: 46, height: 26, borderRadius: 'var(--fx-radius-pill)', background: checked ? 'var(--fx-primary-500)' : 'var(--fx-border-strong)', position: 'relative', transition: 'background var(--fx-transition)', flex: '0 0 auto' }}>
        <span style={{ position: 'absolute', top: 3, left: checked ? 23 : 3, width: 20, height: 20, borderRadius: '50%', background: '#fff', transition: 'left var(--fx-transition)', boxShadow: '0 1px 3px rgba(10,37,64,.25)' }} />
      </span>
      {label && <span style={{ fontSize: 15, color: 'var(--fx-text-heading)' }}>{label}</span>}
    </label>
  );
}
