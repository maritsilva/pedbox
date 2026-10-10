import React from 'react';

export default function PedBoxLogo({ variant = 'full', className = '', iconClassName = 'w-8 h-8' }) {
  if (variant === 'icon') {
    return (
      <img
        src="/assets/pedbox-icon.png"
        alt="PedBox"
        className={`object-contain select-none shrink-0 ${iconClassName}`}
      />
    );
  }

  return (
    <img
      src="/assets/pedbox-logo.png"
      alt="PedBox"
      className={`h-8 w-auto object-contain select-none shrink-0 ${className}`}
    />
  );
}
