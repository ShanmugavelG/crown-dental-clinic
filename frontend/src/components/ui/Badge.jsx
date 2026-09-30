import React from 'react';
import clsx from 'clsx';

export const Badge = ({
  children,
  className = '',
  variant = 'navy',
  size = 'md',
  dot = false,
  icon: Icon
}) => {
  const variants = {
    navy: 'bg-[#EEF1F6] text-[#172033] border-[#172033]/15 font-semibold',
    gold: 'bg-[#F7F4EE] text-[#8C6D2D] border-[#C6A15B]/35 font-semibold',
    slate: 'bg-[#EEF1F6] text-[#697386] border-[#E7E2D8]',
    success: 'bg-emerald-50 text-emerald-800 border-emerald-200',
    danger: 'bg-rose-50 text-rose-800 border-rose-200',
    outline: 'bg-transparent text-[#18202F] border-[#E7E2D8]',
    
    // Graceful aliases
    teal: 'bg-[#EEF1F6] text-[#172033] border-[#172033]/15 font-semibold',
    amber: 'bg-[#F7F4EE] text-[#8C6D2D] border-[#C6A15B]/35 font-semibold'
  };

  const dotColors = {
    navy: 'bg-[#172033]',
    gold: 'bg-[#C6A15B]',
    slate: 'bg-[#697386]',
    success: 'bg-emerald-600',
    danger: 'bg-rose-600',
    outline: 'bg-[#697386]',
    teal: 'bg-[#172033]',
    amber: 'bg-[#C6A15B]'
  };

  const sizes = {
    sm: 'text-[11px] font-semibold tracking-wide px-2.5 py-0.5 rounded-full',
    md: 'text-xs font-semibold tracking-wide px-3 py-1 rounded-full'
  };

  return (
    <span
      className={clsx(
        'inline-flex items-center gap-1.5 border select-none',
        variants[variant] || variants.navy,
        sizes[size] || sizes.md,
        className
      )}
    >
      {dot && (
        <span className={clsx('w-1.5 h-1.5 rounded-full shrink-0', dotColors[variant] || dotColors.navy)} />
      )}
      {Icon && <Icon className="w-3.5 h-3.5 shrink-0" />}
      {children}
    </span>
  );
};

export default Badge;
