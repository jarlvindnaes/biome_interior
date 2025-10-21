import React from 'react';

interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: 'white' | 'gray' | 'dark';
}

export const SectionContainer: React.FC<SectionContainerProps> = ({ 
  children, 
  className = '',
  id,
  background = 'white'
}) => {
  const backgrounds = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    dark: 'bg-gray-900 text-white',
  };

  return (
    <section 
      id={id}
      className={`${backgrounds[background]} py-20 md:py-32 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {children}
      </div>
    </section>
  );
};

