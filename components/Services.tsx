import React from 'react';
import { Flame, Snowflake, Fan, CheckCircle2, ArrowRight } from 'lucide-react';

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-brand-dark relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-primary/20 to-transparent"></div>
        <div className="absolute top-20 right-0 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <span className="text-brand-primary font-bold uppercase tracking-widest text-sm block mb-3">Our Expertise</span>
          <h2 className="text-3xl md:text-5xl font-bold text-brand-light mb-6">Climate Control Experts.</h2>
          <p className="text-brand-muted text-lg font-light leading-relaxed">
            We provide top-tier heating and cooling solutions to ensure your home stays comfortable, efficient, and safe all year long.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          
          {/* Card 1: Heating */}
          <div className="bg-brand-card/50 backdrop-blur-sm p-8 md:p-10 rounded-sm border border-white/5 border-t-4 border-t-brand-accent shadow-lg hover:shadow-brand-accent/10 hover:-translate-y-2 transition-all duration-300 group overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.1] transition-opacity duration-500 transform group-hover:scale-110">
              <Flame className="w-48 h-48 text-brand-accent" />
            </div>
            <div className="relative z-10 flex flex-col h-full">
              <div className="bg-gradient-to-br from-brand-accent/20 to-transparent w-16 h-16 rounded-2xl flex items-center justify-center mb-8 text-brand-accent border border-brand-accent/10 shadow-[0_0_15px_rgba(220,38,38,0.2)]">
                <Flame className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-brand-light mb-4">Heating Systems</h3>
              <p className="text-brand-muted mb-8 leading-relaxed flex-grow">
                Stay warm when it matters most. We repair and install high-efficiency furnaces and heat pumps tailored to your home.
              </p>
              <ul className="space-y-4 mb-8">
                 <li className="flex items-center gap-3 text-sm text-brand-light font-medium"><CheckCircle2 className="w-5 h-5 text-brand-accent shrink-0"/> Furnace Repair & Install</li>
                 <li className="flex items-center gap-3 text-sm text-brand-light font-medium"><CheckCircle2 className="w-5 h-5 text-brand-accent shrink-0"/> Heat Pumps</li>
                 <li className="flex items-center gap-3 text-sm text-brand-light font-medium"><CheckCircle2 className="w-5 h-5 text-brand-accent shrink-0"/> Emergency Heating</li>
              </ul>
              <button onClick={() => document.getElementById('estimate-form')?.scrollIntoView({behavior: 'smooth'})} className="flex items-center gap-2 text-brand-accent font-bold uppercase tracking-wider text-xs group-hover:gap-3 transition-all">
                  Schedule Heating Service <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Card 2: Cooling */}
          <div className="bg-brand-card/50 backdrop-blur-sm p-8 md:p-10 rounded-sm border border-white/5 border-t-4 border-t-brand-primary shadow-lg hover:shadow-brand-primary/10 hover:-translate-y-2 transition-all duration-300 group overflow-hidden">
             <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.1] transition-opacity duration-500 transform group-hover:scale-110">
              <Snowflake className="w-48 h-48 text-brand-primary" />
            </div>
            <div className="relative z-10 flex flex-col h-full">
              <div className="bg-gradient-to-br from-brand-primary/20 to-transparent w-16 h-16 rounded-2xl flex items-center justify-center mb-8 text-brand-primary border border-brand-primary/10 shadow-[0_0_15px_rgba(2,132,199,0.2)]">
                <Snowflake className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-brand-light mb-4">Air Conditioning</h3>
              <p className="text-brand-muted mb-8 leading-relaxed flex-grow">
                Beat the heat with our reliable AC services. From routine tune-ups to full system replacements, we keep you cool.
              </p>
              <ul className="space-y-4 mb-8">
                 <li className="flex items-center gap-3 text-sm text-brand-light font-medium"><CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0"/> AC Installation</li>
                 <li className="flex items-center gap-3 text-sm text-brand-light font-medium"><CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0"/> Cooling Repairs</li>
                 <li className="flex items-center gap-3 text-sm text-brand-light font-medium"><CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0"/> Ductless Mini-Splits</li>
              </ul>
              <button onClick={() => document.getElementById('estimate-form')?.scrollIntoView({behavior: 'smooth'})} className="flex items-center gap-2 text-brand-primary font-bold uppercase tracking-wider text-xs group-hover:gap-3 transition-all">
                  Schedule AC Service <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Card 3: Maintenance */}
          <div className="bg-brand-card/50 backdrop-blur-sm p-8 md:p-10 rounded-sm border border-white/5 border-t-4 border-t-gray-400 hover:border-t-brand-primary transition-colors shadow-lg hover:shadow-white/5 hover:-translate-y-2 duration-300 group overflow-hidden">
             <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.1] transition-opacity duration-500 transform group-hover:scale-110">
              <Fan className="w-48 h-48 text-gray-400" />
            </div>
            <div className="relative z-10 flex flex-col h-full">
              <div className="bg-gradient-to-br from-gray-700/50 to-transparent w-16 h-16 rounded-2xl flex items-center justify-center mb-8 text-gray-300 border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                <Fan className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-brand-light mb-4">Air Quality & Maint.</h3>
              <p className="text-brand-muted mb-8 leading-relaxed flex-grow">
                Breathe easier with our indoor air quality solutions and preventative maintenance plans to extend system life.
              </p>
              <ul className="space-y-4 mb-8">
                 <li className="flex items-center gap-3 text-sm text-brand-light font-medium"><CheckCircle2 className="w-5 h-5 text-gray-400 shrink-0"/> Seasonal Tune-ups</li>
                 <li className="flex items-center gap-3 text-sm text-brand-light font-medium"><CheckCircle2 className="w-5 h-5 text-gray-400 shrink-0"/> Air Filtration Systems</li>
                 <li className="flex items-center gap-3 text-sm text-brand-light font-medium"><CheckCircle2 className="w-5 h-5 text-gray-400 shrink-0"/> Humidifiers</li>
              </ul>
              <button onClick={() => document.getElementById('estimate-form')?.scrollIntoView({behavior: 'smooth'})} className="flex items-center gap-2 text-gray-400 group-hover:text-brand-light font-bold uppercase tracking-wider text-xs group-hover:gap-3 transition-all">
                  Explore Plans <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
