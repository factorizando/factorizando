import React from 'react';

const SIZES = { sm: 36, md: 44, lg: 52 };

export function IconButton({ label, size = 'md', variant = 'ghost', style, children, ...rest }) {
  const d = SIZES[size] || SIZES.md;
  const v = variant === 'solid'
    ? { background: 'var(--fx-primary-500)', color: '#fff', border: '1px solid transparent' }
    : variant === 'outline'
      ? { background: 'var(--fx-surface)', color: 'var(--fx-primary-700)', border: '1px solid var(--fx-border)' }
      : { background: 'transparent', color: 'var(--fx-text-body)', border: '1px solid transparent' };
  return (
    <button type="button" aria-label={label} title={label}
      style={{ width: d, height: d, borderRadius: 'var(--fx-radius-md)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontFamily: 'var(--fx-font-body)', fontSize: 17, transition: 'background var(--fx-transition)', ...v, ...style }} {...rest}>
      {children}
    </button>
  );
}
