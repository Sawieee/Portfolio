import { ReactNode } from 'react';

interface NeonBorderProps {
  children: ReactNode;
  className?: string;
  color?: 'cyan' | 'purple' | 'pink';
}

export function NeonBorder({ children, className = '', color = 'cyan' }: NeonBorderProps) {
  const colorClasses = {
    cyan: 'border-cyan-400 shadow-lg shadow-cyan-500/50',
    purple: 'border-purple-500 shadow-lg shadow-purple-500/50',
    pink: 'border-pink-500 shadow-lg shadow-pink-500/50',
  };

  return (
    <div className={`border-2 ${colorClasses[color]} rounded-lg ${className}`}>
      {children}
    </div>
  );
}
