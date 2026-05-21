import React from 'react';
import { motion } from 'framer-motion';

export default function AnimatedCard({ children, className = '', hoverScale = 1.02 }) {
  return (
    <motion.div
      className={className}
      whileHover={{ scale: hoverScale, y: -5 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {children}
    </motion.div>
  );
}

export function AnimatedButton({ children, onClick, className = '', variant = 'primary' }) {
  const variants = {
    primary: 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white',
    secondary: 'bg-white text-gray-700 border-2 border-gray-200 hover:border-indigo-600',
  };

  return (
    <motion.button
      onClick={onClick}
      className={`${variants[variant]} px-8 py-4 rounded-xl font-semibold ${className}`}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      {children}
    </motion.button>
  );
}