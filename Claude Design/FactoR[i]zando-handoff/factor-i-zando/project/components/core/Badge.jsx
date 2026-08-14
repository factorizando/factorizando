import React from 'react';

const TONES = {
  math: ['var(--fx-math-tint)', 'var(--fx-math-text)'],
  sage: ['var(--fx-sage-tint)', 'var(--fx-sage-text)'],
  coral: ['var(--fx-coral-tint)', 'var(--fx-coral-text)'],
  amber: ['var(--fx-amber-tint)', 'var(--fx-amber-text)'],
  indigo: ['var(--fx-indigo-tint)', 'var(--fx-indigo-text)'],
  neutral: ['var(--fx-surface-sunken)', 'var(--fx-text-body)'],
  success: ['var(--fx-success-bg)', 'var(--fx-success-text)'],
  warning: ['var(--fx-warning-bg)', 'var(--fx-warning-text)'],
  error: ['var(--fx-error-bg)', 'var(--fx-error-text)']
};

export function Badge({ tone = 'neutral', uppercase = true, style, children, ...rest }) {
  const [bg, fg] = TONES[tone] || TONES.neutral;
  return (
    <span style={{ background: bg, color: fg, fontFamily: 'var(--fx-font-body)', fontSize: 12, fontWeight: 600, letterSpacing: uppercase ? '0.06em' : 0, textTransform: uppercase ? 'uppercase' : 'none', padding: '5px 10px', borderRadius: 'var(--fx-radius-pill)', display: 'inline-block', ...style }} {...rest}>
      {children}
    </span>
  );
}
