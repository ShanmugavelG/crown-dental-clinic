import React from 'react';
import clsx from 'clsx';

export const Section = ({
  children,
  className = '',
  id,
  variant = 'default',
  spacing = 'default',
  ariaLabel
}) => {
  const variantClasses = {
    default: 'bg-[#F7F4EE] text-[#18202F]',
    surface: 'bg-[#FFFFFF] text-[#18202F]',
    softNavy: 'bg-[#EEF1F6] text-[#18202F]',
    subtle: 'bg-[#FAF7F0] text-[#18202F]',
    dark: 'bg-[#172033] text-white',
    navyDark: 'bg-[#0E1626] text-white',
    tealTint: 'bg-[#EEF1F6] text-[#18202F]' // Safely override legacy teal tint
  };

  const spacingClasses = {
    none: 'py-0',
    compact: 'py-10 sm:py-14',
    default: 'py-14 sm:py-20 lg:py-24',
    spacious: 'py-20 sm:py-28 lg:py-32'
  };

  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={clsx(
        'relative w-full overflow-hidden transition-colors duration-300',
        variantClasses[variant] || variantClasses.default,
        spacingClasses[spacing] || spacingClasses.default,
        className
      )}
    >
      {children}
    </section>
  );
};

export default Section;
