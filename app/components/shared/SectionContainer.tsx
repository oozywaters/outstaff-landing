import React from 'react';

interface SectionContainerProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  fullWidth?: boolean;
}

export default function SectionContainer({
  children,
  id,
  className = '',
  fullWidth = false
}: SectionContainerProps) {
  return (
    <section
      id={id}
      className={`py-20 md:py-32 ${className}`}
    >
      <div className={fullWidth ? 'w-full' : 'container mx-auto px-6 md:px-12 max-w-7xl'}>
        {children}
      </div>
    </section>
  );
}
