import React from 'react';
import { motion, useReducedMotion } from 'motion/react';

// Reusable smooth easing: Apple-like cubic bezier
const smoothEase = [0.22, 1, 0.36, 1];

export const ImageReveal = ({
  children,
  delay = 0.4,
  duration = 0.7,
  className = ''
}) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 1.04 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{
        duration: shouldReduceMotion ? 0.05 : duration,
        delay: shouldReduceMotion ? 0 : delay,
        ease: smoothEase
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const TextReveal = ({
  children,
  delay = 0.2,
  duration = 0.5,
  className = ''
}) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: shouldReduceMotion ? 0.05 : duration,
        delay: shouldReduceMotion ? 0 : delay,
        ease: smoothEase
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const SoftScale = ({
  children,
  delay = 0,
  duration = 0.4,
  className = ''
}) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: shouldReduceMotion ? 0.05 : duration,
        delay: shouldReduceMotion ? 0 : delay,
        ease: smoothEase
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const CardHover = ({
  children,
  className = ''
}) => {
  return (
    <motion.div
      whileHover={{ y: -3, scale: 1.01 }}
      transition={{ duration: 0.25, ease: smoothEase }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
