import React from 'react';
import { ArrowRight, ShieldCheck, ThermometerSun, Zap } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[85vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden pt-28 pb-16 md:pt-20 md:pb-0 bg-slate-900">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop" 
          alt="Modern Home Exterior at Dusk" 
          className="w-full h-full object-cover opacity-90"
          loading="eager"
        />
        {/* Dark overlay for contrast - Darker on mobile (opacity-85) to reduce visual clutter */}
        <div className="absolute inset-0 bg-slate-900/85 md:bg-slate-900/60"></div>
        {/* Top gradient for Navbar visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-transparent to-transparent"></div>
        {/* Subtle bottom gradient for depth */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900/80 to-transparent opacity-60"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center max-w-5xl">
        
        {/* Trust Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 md:px-5 md:py-2 mb-6 md:mb-8 animate-fade-in">
          <div className="flex text-brand-primary">
            <ThermometerSun className="w-3 h-3 md:w-4 md:h-4" />
          </div>
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-white">Wheelersburg's Trusted HVAC Experts</span>
        </div>

        {/* Main Headline - Scaled down for mobile */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-4 md:mb-6 leading-[1.1] drop-shadow-xl">
          PERFECT COMFORT <br />
          <span className="text-brand-primary">
            ALL YEAR ROUND.
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-gray-200 mb-8 md:mb-10 max-w-xl md:max-w-2xl mx-auto leading-relaxed font-light drop-shadow-md px-2">
          Dempsey Heating & Cooling LLC keeps your home cozy in the winter and cool in the summer. Expert installation, repair, and maintenance in Wheelersburg.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <button 
            onClick={() => document.getElementById('estimate-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto bg-brand-primary hover:bg-sky-600 text-white text-lg font-bold py-4 px-8 rounded-sm uppercase tracking-wide transition-all shadow-xl shadow-brand-primary/20 flex items-center justify-center gap-2"
          >
            Schedule Service
            <ArrowRight className="w-5 h-5" />
          </button>
          
          <button 
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto bg-white/5 hover:bg-white/10 border border-white/30 text-white text-lg font-semibold py-4 px-8 rounded-sm uppercase tracking-wide transition-all flex items-center justify-center gap-2 backdrop-blur-sm"
          >
            Our Services
          </button>
        </div>

        {/* Mini Features */}
        <div className="mt-12 md:mt-20 pt-8 border-t border-white/10 flex flex-wrap justify-center gap-x-6 md:gap-x-12 gap-y-3 text-gray-300 text-xs md:text-sm font-medium uppercase tracking-wider">
          <span className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 md:w-5 md:h-5 text-brand-primary" />
            5.0 Star Rated
          </span>
          <span className="flex items-center gap-2">
            <Zap className="w-4 h-4 md:w-5 md:h-5 text-brand-accent" />
            Fast Response
          </span>
          <span className="flex items-center gap-2">
            <ThermometerSun className="w-4 h-4 md:w-5 md:h-5 text-brand-primary" />
            Licensed & Insured
          </span>
        </div>
      </div>
    </section>
  );
};