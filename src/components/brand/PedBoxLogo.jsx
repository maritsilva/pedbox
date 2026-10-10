import React from 'react';

export default function PedBoxLogo({ variant = 'full', className = '', iconClassName = 'w-8 h-8' }) {
  const IconSvg = (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={iconClassName}
      aria-hidden="true"
    >
      {/* Top Face */}
      <path d="M24 5L39.5 13.9487L24 22.8974L8.5 13.9487L24 5Z" fill="#1A4A6E" />
      {/* Left Face */}
      <path d="M8.5 13.9487L24 22.8974V40.7948L8.5 31.8462V13.9487Z" fill="#123B59" />
      {/* Right Face (Teal with Stethoscope) */}
      <path d="M24 22.8974L39.5 13.9487V31.8462L24 40.7948V22.8974Z" fill="#20A6A6" />
      
      {/* Stethoscope */}
      <path
        d="M29 23.5V26.5C29 28.5 30.5 30 32.5 30C34.5 30 36 28.5 36 26.5V23.5"
        stroke="#FFFFFF"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M32.5 30V33.5C32.5 34.5 33.5 35 34.5 35"
        stroke="#FFFFFF"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle cx="35.5" cy="35.5" r="1.8" fill="#FFFFFF" />
      <circle cx="29" cy="23" r="1.2" fill="#FFFFFF" />
      <circle cx="36" cy="23" r="1.2" fill="#FFFFFF" />
    </svg>
  );

  if (variant === 'icon') {
    return IconSvg;
  }

  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {IconSvg}
      <div className="flex items-baseline font-display tracking-tight font-extrabold text-2xl leading-none">
        <span className="text-brand-navy">Ped</span>
        <span className="text-brand-teal">Box</span>
      </div>
    </div>
  );
}
