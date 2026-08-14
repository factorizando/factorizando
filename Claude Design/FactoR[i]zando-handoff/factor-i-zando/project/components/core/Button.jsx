import React from 'react';

const SIZES = {
  sm: { height: 'var(--fx-control-sm)', padding: '0 16px', fontSize: 14, radius: 'var(--fx-radius-sm)' },
  md: { height: 'var(--fx-control-md)', padding: '0 20px', fontSize: 15, radius: 'var(--fx-radius-md)' },
  lg: { height: 'var(--fx-control-lg)', padding: '0 28px', fontSize: 17, radius: 'var(--fx-radius-md)' }
};

const VARIANTS = {
  primary: { background: 'var(--fx-primary-500)', color: 'var(--fx-text-on-primary)', border: '1px solid transparent', boxShadow: 'var(--fx-shadow-primary)' },
  secondary: { background: 'var(--fx-primary-50)', color: 'var(--fx-primary-700)', border: '1px solid var(--fx-primary-100)' },
  tertiary: { background: 'transparent', color: 'var(--fx-text-body)', border: '1px solid var(--fx-border)' },
  success: { background: 'var(--fx-success)', color: '#fff', border: '1px solid transparent' },
  onDark: { background: 'var(--fx-surface)', color: 'var(--fx-primary-900)', border: '1px solid transparent' }
};

export function Button({ variant = 'primary', size = 'md', disabled = false, fullWidth = false, iconLeft, iconRight, style, children, ...rest }) {
  const s = SIZES[size] || SIZES.md;
  const v = VARIANTS[variant] || VARIANTS.primary;
  const base = {
    fontFamily: 'var(--fx-font-body)', fontWeight: 600, fontSize: s.fontSize,
    height: s.height, padding: s.padding, borderRadius: s.radius,
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8, whiteSpace: 'nowrap',
    cursor: disabled ? 'not-allowed' : 'pointer', width: fullWidth ? '100%' : undefined,
    transition: 'background var(--fx-transition), border-color var(--fx-transition)',
    ...v,
    ...(disabled ? { background: 'var(--fx-surface-sunken)', color: 'var(--fx-text-disabled)', border: '1px solid transparent', boxShadow: 'none' } : null),
    ...style
  };
  return (
    <button type="button" disabled={disabled} style={base} {...rest}>
      {iconLeft}{children}{iconRight}
    </button>
  );
}
