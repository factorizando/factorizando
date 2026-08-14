import React from 'react';

export function Card({ accent, interactive = false, padding = 28, style, children, ...rest }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: 'var(--fx-surface)',
        border: '1px solid var(--fx-border)',
        borderTop: accent ? `3px solid ${accent}` : '1px solid var(--fx-border)',
        borderRadius: 'var(--fx-radius-lg)',
        padding,
        boxShadow: hover && interactive ? 'var(--fx-shadow-card-hover)' : 'var(--fx-shadow-card)',
        transform: hover && interactive ? 'translateY(-3px)' : 'none',
        transition: 'transform var(--fx-transition-lift), box-shadow var(--fx-transition-lift)',
        ...style
      }} {...rest}>
      {children}
    </div>
  );
}
