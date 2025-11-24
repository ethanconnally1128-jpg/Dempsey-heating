import React, { useState, useEffect } from 'react';
import { Phone, ThermometerSnowflake } from 'lucide-react';

const DempseyLogo = ({ className, jColorClass }: { className?: string, jColorClass: string }) => (
  <svg 
    viewBox="0 0 100 60" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Flame (Heating) */}
    <path 
      d="M30 55C30 55 20 45 20 35C20 25 30 15 30 15C30 15 40 25 40 35C40 45 30 55 30 55Z" 
      fill="#dc2626" 
      opacity="0.9"
    />
    <path 
      d="M30 50C30 50 25 42 25 35C25 30 30 25 30 25C30 25 35 30 35 35C35 42 30 50 30 50Z" 
      fill="#ffffff" 
      opacity="0.4"
    />

    {/* Snowflake (Cooling) - Intertwined */}
    <g transform="translate(60, 35)">
      <circle cx="0" cy="0" r="12" fill="none" stroke="#0284c7" strokeWidth="3" />
      <path d="M0 -15 L0 15" stroke="#0284c7" strokeWidth="3" strokeLinecap="round"/>
      <path d="M-13 -7.5 L13 7.5" stroke="#0284c7" strokeWidth="3" strokeLinecap="round"/>
      <path d="M-13 7.5 L13 -7.5" stroke="#0284c7" strokeWidth="3" strokeLinecap="round"/>
    </g>
    
    {/* Connection Text/Line */}
    <rect x="42" y="33" width="6" height="4" rx="2" fill="currentColor" className={jColorClass} opacity="0.5"/>
  </svg>
);

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Dynamic classes based on scroll state
  // CHANGED: Use dark background with backdrop blur for scroll state
  const navClasses = scrolled 
    ? 'bg-brand-dark/95 backdrop-blur-lg border-b border-white/10 py-3 shadow-md' 
    : 'bg-transparent py-5';
    
  const textClasses = 'text-brand-light';
  const jColorClass = 'text-brand-light';
  const subTextClasses = scrolled ? 'text-brand-muted' : 'text-gray-300';
  const phoneIconClasses = scrolled ? 'bg-brand-primary text-white' : 'bg-brand-primary/20 text-brand-primary';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navClasses}`}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Logo Icon Container */}
          <div className="flex items-center justify-center">
            <DempseyLogo className="w-16 h-10 md:w-20 md:h-12" jColorClass={jColorClass} />
          </div>
          
          {/* Logo Text */}
          <div className={`flex flex-col border-l pl-3 transition-colors ${scrolled ? 'border-brand-light/30' : 'border-white/30'}`}>
            <span className={`text-lg md:text-xl font-extrabold tracking-tight leading-none transition-colors ${textClasses}`}>
              DEMPSEY <span className="text-brand-primary">HEATING</span> & COOLING
            </span>
            <span className={`text-[0.6rem] font-bold tracking-[0.15em] uppercase mt-0.5 transition-colors ${subTextClasses}`}>
              Wheelersburg • OH
            </span>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <a 
            href="tel:7402508532" 
            className={`hidden lg:flex items-center gap-2 font-bold group transition-colors ${textClasses} hover:text-brand-primary`}
          >
            <div className={`p-2 rounded-full transition-colors ${phoneIconClasses}`}>
              <Phone className="w-4 h-4" />
            </div>
            <span>(740) 250-8532</span>
          </a>
          <button 
            onClick={() => document.getElementById('estimate-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-brand-primary hover:bg-sky-600 text-white font-extrabold py-3 px-6 rounded-sm uppercase tracking-wide text-sm transition-all transform hover:scale-105 shadow-lg shadow-brand-primary/20"
          >
            Free Estimate
          </button>
        </div>
      </div>
    </nav>
  );
};