import React from 'react';

interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  align?: 'left' | 'center';
  className?: string;
}

export default function SectionTitle({
  eyebrow,
  title,
  align = 'center',
  className = '',
}: SectionTitleProps) {
  return (
    <div className={`flex flex-col ${align === 'center' ? 'items-center text-center' : 'items-start text-left'} ${className}`}>
      {eyebrow && (
        <span className="text-secondary font-serif text-sm tracking-widest uppercase mb-3 block">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-serif text-primary leading-tight whitespace-pre-line">
        {title}
      </h2>
    </div>
  );
}
