import React from 'react';
import clsx from 'clsx';
import { Loader2 } from 'lucide-react';

export const Button = React.forwardRef(({
  children,
  className = '',
  variant = 'primary',
  size = 'md',
  isLoading = false,
  disabled = false,
  icon: Icon,
  iconPosition = 'left',
  type = 'button',
  onClick,
  id,
  ...props
}, ref) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 select-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A15B] focus-visible:ring-offset-2 active:scale-[0.98]';

  const variants = {
    // Deep Navy Primary Action
    primary: 'bg-[#172033] hover:bg-[#0E1626] text-white shadow-sm hover:shadow focus-visible:ring-[#172033] focus-visible:ring-offset-[#F7F4EE]',
    
    // Crisp White Surface Secondary
    secondary: 'bg-white hover:bg-[#F7F4EE] text-[#18202F] border border-[#E7E2D8] hover:border-[#C6A15B] shadow-xs focus-visible:ring-[#172033]',
    
    // Champagne Gold Accent
    accent: 'bg-[#C6A15B] hover:bg-[#B59149] text-white shadow-sm hover:shadow focus-visible:ring-[#C6A15B]',
    
    // Deep Navy Outline
    outline: 'bg-transparent border border-[#172033] text-[#172033] hover:bg-[#172033] hover:text-white focus-visible:ring-[#172033]',
    
    // Gold Outline
    goldOutline: 'bg-transparent border border-[#C6A15B] text-[#C6A15B] hover:bg-[#C6A15B] hover:text-white focus-visible:ring-[#C6A15B]',
    
    // Ghost
    ghost: 'bg-transparent hover:bg-[#EEF1F6] text-[#18202F] hover:text-[#0E1626]',
    
    // Navy Dark
    dark: 'bg-[#0E1626] hover:bg-[#172033] text-white shadow-sm',
    
    // Danger
    danger: 'bg-rose-600 hover:bg-rose-700 text-white shadow-sm focus-visible:ring-rose-600'
  };

  const sizes = {
    sm: 'text-xs font-semibold px-3.5 py-1.5 min-h-[36px] rounded-xl gap-1.5',
    md: 'text-sm font-semibold px-5 py-2.5 min-h-[44px] rounded-xl gap-2', // Meets 44px touch target
    lg: 'text-base font-semibold px-6 py-3.5 min-h-[50px] rounded-xl gap-2.5'
  };

  return (
    <button
      ref={ref}
      id={id}
      type={type}
      disabled={disabled || isLoading}
      onClick={onClick}
      className={clsx(
        baseStyles,
        variants[variant] || variants.primary,
        sizes[size] || sizes.md,
        className
      )}
      {...props}
    >
      {isLoading ? (
        <Loader2 className="w-4 h-4 animate-spin" />
      ) : (
        <>
          {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 shrink-0" />}
          {children}
          {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 shrink-0" />}
        </>
      )}
    </button>
  );
});

Button.displayName = 'Button';
export default Button;
