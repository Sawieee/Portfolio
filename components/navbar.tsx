'use client';

import { useState, useEffect } from 'react';
import { Menu, X, FileText } from 'lucide-react';
import { GlowButton } from './ui/glow-button';
import { portfolioData } from '@/lib/portfolio-data';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${scrolled ? 'bg-background/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'}
      `}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="#home" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 hover:from-purple-500 hover:to-cyan-400 transition-all duration-300">
            MJN
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground hover:text-cyan-400 transition-colors duration-300"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Resume Button */}
          <div className="hidden sm:flex items-center gap-4">
            <a href={portfolioData.profile.resume} target="_blank" rel="noopener noreferrer">
              <GlowButton variant="outline" size="sm">
                <FileText className="w-4 h-4 mr-2" />
                Resume
              </GlowButton>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground hover:text-cyan-400"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-white/10 py-4">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="px-4 py-2 text-foreground hover:text-cyan-400 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href={portfolioData.profile.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4"
              >
                <GlowButton variant="outline" size="sm" className="w-full">
                  Resume
                </GlowButton>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
