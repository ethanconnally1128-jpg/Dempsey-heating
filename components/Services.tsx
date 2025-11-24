import React from 'react';
import { Flame, Snowflake, Fan, CheckCircle2 } from 'lucide-react';

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-brand-dark">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <span className="text-brand-primary font-bold uppercase tracking-widest text-sm block mb-3">Our Expertise</span>
          <h2 className="text-3xl md:text-5xl font-bold text-brand-light mb-6">Climate Control Experts.</h2>
          <p className="text-brand-muted text-lg font-light">
            We provide top-tier heating and cooling solutions to ensure your home stays comfortable, efficient, and safe.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          
          {/* Card 1: Heating */}
          <div className="bg-brand-card p-10 rounded-sm border border-slate-200 border-t-4 border-t-brand-accent shadow-xl shadow-slate-200/50 hover:-translate-y-1 transition-transform duration-300 relative group overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity">
              <Flame className="w-40 h-40 text-brand-accent" />
            </div>
            <div className="relative z-10">
              <div className="bg-brand-accent/10 w-14 h-14 rounded-full flex items-center justify-center mb-8 text-brand-accent">
                <Flame className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-brand-light mb-4">Heating Systems</h3>
              <p className="text-brand-muted mb-6 leading-relaxed">
                Stay warm when it matters most. We repair and install high-efficiency furnaces and heat pumps tailored to your home.
              </p>
              <ul className="space-y-3">
                 <li className="flex items-center gap-3 text-sm text-brand-light font-medium"><CheckCircle2 className="w-4 h-4 text-brand-accent"/> Furnace Repair & Install</li>
                 <li className="flex items-center gap-3 text-sm text-brand-light font-medium"><CheckCircle2 className="w-4 h-4 text-brand-accent"/> Heat Pumps</li>
                 <li className="flex items-center gap-3 text-sm text-brand-light font-medium"><CheckCircle2 className="w-4 h-4 text-brand-accent"/> Emergency Heating Repair</li>
              </ul>
            </div>
          </div>

          {/* Card 2: Cooling */}
          <div className="bg-brand-card p-10 rounded-sm border border-slate-200 border-t-4 border-t-brand-primary shadow-xl shadow-slate-200/50 hover:-translate-y-1 transition-transform duration-300 relative group overflow-hidden">
             <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity">
              <Snowflake className="w-40 h-40 text-brand-primary" />
            </div>
            <div className="relative z-10">
              <div className="bg-brand-primary/10 w-14 h-14 rounded-full flex items-center justify-center mb-8 text-brand-primary">
                <Snowflake className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-brand-light mb-4">Air Conditioning</h3>
              <p className="text-brand-muted mb-6 leading-relaxed">
                Beat the heat with our reliable AC services. From routine tune-ups to full system replacements, we keep you cool.
              </p>
              <ul className="space-y-3">
                 <li className="flex items-center gap-3 text-sm text-brand-light font-medium"><CheckCircle2 className="w-4 h-4 text-brand-primary"/> AC Installation</li>
                 <li className="flex items-center gap-3 text-sm text-brand-light font-medium"><CheckCircle2 className="w-4 h-4 text-brand-primary"/> Cooling Repairs</li>
                 <li className="flex items-center gap-3 text-sm text-brand-light font-medium"><CheckCircle2 className="w-4 h-4 text-brand-primary"/> Ductless Mini-Splits</li>
              </ul>
            </div>
          </div>

          {/* Card 3: Maintenance */}
          <div className="bg-brand-card p-10 rounded-sm border border-slate-200 border-t-4 border-t-brand-muted hover:border-t-brand-primary transition-colors shadow-xl shadow-slate-200/50 hover:-translate-y-1 duration-300 relative group overflow-hidden">
             <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity">
              <Fan className="w-40 h-40 text-brand-light" />
            </div>
            <div className="relative z-10">
              <div className="bg-brand-muted/10 w-14 h-14 rounded-full flex items-center justify-center mb-8 text-brand-muted">
                <Fan className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-brand-light mb-4">Air Quality & Maint.</h3>
              <p className="text-brand-muted mb-6 leading-relaxed">
                Breathe easier with our indoor air quality solutions and preventative maintenance plans to extend system life.
              </p>
              <ul className="space-y-3">
                 <li className="flex items-center gap-3 text-sm text-brand-light font-medium"><CheckCircle2 className="w-4 h-4 text-brand-muted"/> Seasonal Tune-ups</li>
                 <li className="flex items-center gap-3 text-sm text-brand-light font-medium"><CheckCircle2 className="w-4 h-4 text-brand-muted"/> Air Filtration Systems</li>
                 <li className="flex items-center gap-3 text-sm text-brand-light font-medium"><CheckCircle2 className="w-4 h-4 text-brand-muted"/> Humidifiers</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};