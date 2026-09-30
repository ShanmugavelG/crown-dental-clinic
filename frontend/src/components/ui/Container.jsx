import React from 'react';
import clsx from 'clsx';

export const Container = ({ children, className = '', size = 'default' }) => {
  const sizeClasses = {
    sm: 'max-w-4xl',
    default: 'max-w-7xl',
    wide: 'max-w-[1400px]',
    full: 'max-w-full'
  };

  return (
    <div className={clsx('mx-auto w-full px-4 sm:px-6 lg:px-8', sizeClasses[size] || sizeClasses.default, className)}>
      {children}
    </div>
  );
};

export default Container;
