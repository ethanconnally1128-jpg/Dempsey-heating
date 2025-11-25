import React from 'react';
import { ArrowRight, ShieldCheck, ThermometerSun, Zap, Star } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-28 pb-16 md:pt-0 bg-brand-dark">
      {/* Background Image with Enhanced Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop" 
          alt="Modern Home Exterior at Dusk" 
          className="w-full h-full object-cover opacity-90 scale-105 animate-[slowZoom_20s_infinite_alternate]"
          loading="eager"
        />
        {/* Dark overlay for contrast - with a blue tint for that 'cool' HVAC feel */}
        <div className="absolute inset-0 bg-slate-900/80 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/50 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/80 via-transparent to-brand-dark/80"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center max-w-5xl">
        
        {/* Trust Badge */}
        <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/20 rounded-full px-5 py-2 mb-8 animate-[fadeInDown_1s_ease-out]">
          <div className="flex text-yellow-400 gap-0.5">
            <Star className="w-3 h-3 fill-current" />
            <Star className="w-3 h-3 fill-current" />
            <Star className="w-3 h-3 fill-current" />
            <Star className="w-3 h-3 fill-current" />
            <Star className="w-3 h-3 fill-current" />
          </div>
          <span className="text-xs font-bold uppercase tracking-widest text-white border-l border-white/20 pl-2 ml-1">#1 Rated in Wheelersburg</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-extrabold tracking-tight text-white mb-6 leading-[1] drop-shadow-2xl animate-[fadeInUp_1s_ease-out_0.2s_both]">
          PERFECT CLIMATE. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-sky-300">
            GUARANTEED.
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-2xl text-slate-200 mb-10 max-w-2xl mx-auto leading-relaxed font-light drop-shadow-md animate-[fadeInUp_1s_ease-out_0.4s_both]">
          Expert HVAC solutions for your home. We deliver cozy winters and refreshing summers with craftsmanship you can trust.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto animate-[fadeInUp_1s_ease-out_0.6s_both]">
          <button 
            onClick={() => document.getElementById('estimate-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="group w-full sm:w-auto bg-brand-primary hover:bg-sky-500 text-white text-lg font-bold py-4 px-10 rounded-sm uppercase tracking-wide transition-all shadow-[0_0_30px_-5px_rgba(2,132,199,0.5)] hover:shadow-[0_0_40px_-5px_rgba(2,132,199,0.7)] hover:-translate-y-1 flex items-center justify-center gap-2 relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Schedule Service
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 transform skew-y-12"></div>
          </button>
          
          <button 
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto bg-transparent hover:bg-white/10 border-2 border-white/20 text-white text-lg font-semibold py-4 px-10 rounded-sm uppercase tracking-wide transition-all flex items-center justify-center gap-2 backdrop-blur-sm hover:border-white/40"
          >
            Our Services
          </button>
        </div>

        {/* Mini Features */}
        <div className="mt-16 md:mt-24 flex flex-wrap justify-center gap-6 md:gap-12 text-slate-400 text-xs md:text-sm font-semibold uppercase tracking-wider animate-[fadeIn_2s_ease-out_1s_both]">
          <div className="flex items-center gap-3 px-4 py-2 rounded-full border border-white/5 bg-white/5 backdrop-blur-sm">
            <ShieldCheck className="w-5 h-5 text-brand-primary" />
            <span>Licensed & Insured</span>
          </div>
          <div className="flex items-center gap-3 px-4 py-2 rounded-full border border-white/5 bg-white/5 backdrop-blur-sm">
            <Zap className="w-5 h-5 text-yellow-400" />
            <span>Fast Response</span>
          </div>
          <div className="flex items-center gap-3 px-4 py-2 rounded-full border border-white/5 bg-white/5 backdrop-blur-sm">
            <ThermometerSun className="w-5 h-5 text-brand-accent" />
            <span>Local Experts</span>
          </div>
        </div>
      </div>
    </section>
  );
};
