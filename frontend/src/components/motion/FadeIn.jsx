import React from 'react';
import { motion, useReducedMotion } from 'motion/react';

export const FadeIn = ({
  children,
  delay = 0,
  duration = 0.5,
  className = '',
  once = true
}) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once, margin: '-20px' }}
      transition={{
        duration: shouldReduceMotion ? 0.05 : duration,
        delay: shouldReduceMotion ? 0 : delay,
        ease: 'easeOut'
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
