import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  className = '',
  hoverable = false 
}) => {
  return (
    <motion.div
      className={`bg-white border-2 border-[var(--color-accent)]/30 rounded-lg p-6 shadow-sm hover:shadow-md hover:border-[var(--color-primary)] transition-all ${className}`}
      whileHover={hoverable ? { y: -4, boxShadow: '0 10px 30px rgba(45,95,63,0.15)' } : {}}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

