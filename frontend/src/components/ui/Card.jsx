import React from 'react';
import clsx from 'clsx';

export const Card = ({
  children,
  className = '',
  hoverEffect = false,
  glass = false,
  as: Component = 'div',
  ...props
}) => {
  return (
    <Component
      className={clsx(
        'rounded-2xl border transition-all duration-300',
        glass ? 'glass-card' : 'bg-white border-[#E7E2D8] shadow-xs',
        hoverEffect && 'hover:shadow-md hover:border-[#C6A15B]/70 hover:-translate-y-1',
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

export const CardHeader = ({ children, className = '' }) => (
  <div className={clsx('p-6 pb-3', className)}>{children}</div>
);

export const CardTitle = ({ children, className = '', as: Component = 'h3' }) => (
  <Component className={clsx('text-lg font-semibold text-[#18202F] tracking-tight', className)}>
    {children}
  </Component>
);

export const CardDescription = ({ children, className = '' }) => (
  <p className={clsx('text-sm text-[#697386] mt-1 leading-relaxed', className)}>{children}</p>
);

export const CardContent = ({ children, className = '' }) => (
  <div className={clsx('p-6 pt-0', className)}>{children}</div>
);

export const CardFooter = ({ children, className = '' }) => (
  <div className={clsx('p-6 pt-0 flex items-center justify-between', className)}>{children}</div>
);

export default Card;
