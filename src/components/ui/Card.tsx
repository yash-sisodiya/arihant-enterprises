import React from 'react';
import { motion } from 'framer-motion';
import { THEME } from '../../config/constants';

interface CardProps {
  className?: string;
  children: React.ReactNode;
  hover?: boolean;
}

const Card: React.FC<CardProps> = ({ className = '', children, hover = false }) => {
  return (
    <motion.div 
      className={`
        bg-white/80 backdrop-blur-sm 
        border border-gradient-to-r from-blue-500/20 to-purple-500/20
        rounded-lg shadow-lg
        ${hover ? 'transition-all duration-300 hover:-translate-y-1 hover:shadow-xl' : ''}
        ${className}
      `}
      initial={THEME.animations.fadeIn.initial}
      whileInView={THEME.animations.fadeIn.animate}
      viewport={{ once: true }}
      transition={THEME.animations.fadeIn.transition}
    >
      {children}
    </motion.div>
  );
};

interface CardHeaderProps {
  className?: string;
  children: React.ReactNode;
}

const CardHeader: React.FC<CardHeaderProps> = ({ className = '', children }) => {
  return (
    <div className={`p-6 border-b border-gradient-to-r from-blue-500/10 to-purple-500/10 ${className}`}>
      {children}
    </div>
  );
};

interface CardTitleProps {
  className?: string;
  children: React.ReactNode;
}

const CardTitle: React.FC<CardTitleProps> = ({ className = '', children }) => {
  return (
    <motion.h3 
      className={`text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent ${className}`}
      initial={THEME.animations.slideIn.initial}
      whileInView={THEME.animations.slideIn.animate}
      viewport={{ once: true }}
      transition={THEME.animations.slideIn.transition}
    >
      {children}
    </motion.h3>
  );
};

interface CardContentProps {
  className?: string;
  children: React.ReactNode;
}

const CardContent: React.FC<CardContentProps> = ({ className = '', children }) => {
  return (
    <div className={`p-6 ${className}`}>
      {children}
    </div>
  );
};

interface CardFooterProps {
  className?: string;
  children: React.ReactNode;
}

const CardFooter: React.FC<CardFooterProps> = ({ className = '', children }) => {
  return (
    <div className={`p-6 border-t border-gradient-to-r from-blue-500/10 to-purple-500/10 ${className}`}>
      {children}
    </div>
  );
};

interface CardImageProps {
  src: string;
  alt: string;
  className?: string;
}

const CardImage: React.FC<CardImageProps> = ({ src, alt, className = '' }) => {
  return (
    <div className="relative pt-[60%] overflow-hidden">
      <motion.img
        src={src}
        alt={alt}
        className={`absolute inset-0 w-full h-full object-cover transition-transform duration-300 ${className}`}
        initial={{ scale: 1.1, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      />
    </div>
  );
};

export { Card, CardHeader, CardTitle, CardContent, CardFooter, CardImage };