import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function GlassCard({ children, className = '', hover = true }: GlassCardProps) {
  return (
    <div
      className={`
        backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-6
        transition-all duration-300
        ${hover ? 'hover:bg-white/10 hover:border-white/20 hover:shadow-lg hover:shadow-cyan-500/10' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
