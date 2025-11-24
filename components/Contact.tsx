import React, { useState } from 'react';
import { Send, MapPin, Phone, Check, Sparkles, Star, Clock } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    details: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isAiGenerating, setIsAiGenerating] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Helper to encode data for Netlify
  const encode = (data: any) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formState })
    })
      .then(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormState({ name: '', phone: '', details: '' });
      })
      .catch((error) => {
        console.error(error);
        setIsSubmitting(false);
        setErrorMessage('Something went wrong. Please call us directly.');
      });
  };

  // Smart AI Project Assistant feature using Gemini
  const handleAiAssist = async () => {
    if (formState.details.length < 5) return;
    
    setIsAiGenerating(true);
    
    try {
      if (process.env.API_KEY) {
          const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
          const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: `Refine this HVAC service request to be professional. Keep it concise. The user wrote: "${formState.details}"`,
          });
          const text = response.text;
          if (text) {
             setFormState(prev => ({ ...prev, details: text }));
          }
      } else {
          // Fallback simulation
          setTimeout(() => {
             const refined = `I am interested in a quote for ${formState.details}. Please contact me to schedule a visit.`;
             setFormState(prev => ({ ...prev, details: refined }));
          }, 1000);
      }
    } catch (error) {
      console.error("AI help failed", error);
    } finally {
      setIsAiGenerating(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-brand-dark relative border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Reviews Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <span className="text-brand-primary font-bold uppercase tracking-widest text-xs">Testimonials</span>
            <h2 className="text-3xl font-bold text-brand-light mt-2">Rated 5.0 Stars by Locals</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="bg-brand-card p-8 rounded-sm border border-white/5 shadow-lg shadow-black/20">
              <div className="flex gap-1 text-brand-primary mb-6">
                <Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" />
              </div>
              <p className="text-brand-muted mb-6 italic">"Dempsey saved us in the middle of summer. Our AC died and they had it running again in no time. Honest and fair pricing."</p>
              <div className="flex justify-between items-center text-sm border-t border-white/10 pt-4">
                <span className="font-bold text-brand-light uppercase tracking-wider">Michael T.</span>
                <span className="text-brand-primary text-xs">AC Repair</span>
              </div>
            </div>

            <div className="bg-brand-card p-8 rounded-sm border border-white/5 shadow-lg shadow-black/20">
              <div className="flex gap-1 text-brand-primary mb-6">
                <Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" />
              </div>
              <p className="text-brand-muted mb-6 italic">"Great experience. They installed our new furnace professionally and left everything clean. Highly recommend!"</p>
              <div className="flex justify-between items-center text-sm border-t border-white/10 pt-4">
                <span className="font-bold text-brand-light uppercase tracking-wider">Karen W.</span>
                <span className="text-brand-primary text-xs">Furnace Install</span>
              </div>
            </div>

            <div className="bg-brand-card p-8 rounded-sm border border-white/5 shadow-lg shadow-black/20">
              <div className="flex gap-1 text-brand-primary mb-6">
                <Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" />
              </div>
              <p className="text-brand-muted mb-6 italic">"Reliable and friendly service. It's hard to find good contractors these days, but Dempsey delivers."</p>
              <div className="flex justify-between items-center text-sm border-t border-white/10 pt-4">
                <span className="font-bold text-brand-light uppercase tracking-wider">Steve R.</span>
                <span className="text-brand-primary text-xs">Maintenance</span>
              </div>
            </div>

          </div>
        </div>

        {/* Contact Info & Form Grid */}
        <div id="estimate-form" className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center scroll-mt-32">
          
          {/* Contact Info */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-brand-light mb-6">Comfort You<br/>Can Count On.</h2>
            <p className="text-brand-muted text-lg mb-12 max-w-md font-light">
              Contact Dempsey Heating & Cooling LLC today. We're here to solve your HVAC problems fast.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4 group">
                <div className="bg-brand-card border border-brand-primary/20 p-4 rounded-full text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-brand-light font-bold text-lg uppercase tracking-wide">Location</h4>
                  <p className="text-brand-muted">830 Central Ave<br/>Wheelersburg, OH 45694</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 group">
                <div className="bg-brand-card border border-brand-primary/20 p-4 rounded-full text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-brand-light font-bold text-lg uppercase tracking-wide">Call Us</h4>
                  <a href="tel:7402508532" className="text-brand-muted hover:text-brand-primary transition-colors text-xl font-medium">(740) 250-8532</a>
                </div>
              </div>

               <div className="flex items-start gap-4 group">
                <div className="bg-brand-card border border-brand-primary/20 p-4 rounded-full text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-brand-light font-bold text-lg uppercase tracking-wide">Business Hours</h4>
                  <p className="text-brand-muted">Open daily until 8:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-brand-card p-8 md:p-10 rounded-sm border-t-4 border-brand-primary shadow-2xl shadow-black/30">
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 animate-fade-in">
                <div className="w-20 h-20 bg-brand-primary/10 rounded-full flex items-center justify-center mb-6 text-brand-primary">
                  <Check className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-brand-light mb-2">Request Received</h3>
                <p className="text-brand-muted">We will be in touch shortly to assist with your heating or cooling needs.</p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-8 text-brand-primary hover:text-sky-700 font-bold uppercase tracking-wide text-sm"
                >
                  Start New Request
                </button>
              </div>
            ) : (
              <form 
                name="contact" 
                method="POST" 
                data-netlify="true" 
                onSubmit={handleSubmit} 
                className="space-y-6"
              >
                <input type="hidden" name="form-name" value="contact" />
                
                <div>
                  <label htmlFor="name" className="block text-xs font-bold text-brand-primary uppercase tracking-widest mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                    className="w-full bg-brand-dark border border-white/10 rounded-sm px-4 py-4 text-brand-light focus:ring-1 focus:ring-brand-primary focus:border-brand-primary outline-none transition-all placeholder:text-gray-600"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs font-bold text-brand-primary uppercase tracking-widest mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formState.phone}
                    onChange={(e) => setFormState({...formState, phone: e.target.value})}
                    className="w-full bg-brand-dark border border-white/10 rounded-sm px-4 py-4 text-brand-light focus:ring-1 focus:ring-brand-primary focus:border-brand-primary outline-none transition-all placeholder:text-gray-600"
                    placeholder="(740) 250-8532"
                  />
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label htmlFor="details" className="block text-xs font-bold text-brand-primary uppercase tracking-widest">How can we help?</label>
                    {formState.details.length > 5 && (
                        <button 
                            type="button"
                            onClick={handleAiAssist}
                            disabled={isAiGenerating}
                            className="flex items-center gap-1 text-[10px] uppercase tracking-wider text-brand-primary hover:text-brand-accent transition-colors disabled:opacity-50"
                        >
                            <Sparkles className="w-3 h-3" />
                            {isAiGenerating ? 'Enhancing...' : 'AI Enhance'}
                        </button>
                    )}
                  </div>
                  <textarea
                    id="details"
                    name="details"
                    required
                    rows={4}
                    value={formState.details}
                    onChange={(e) => setFormState({...formState, details: e.target.value})}
                    className="w-full bg-brand-dark border border-white/10 rounded-sm px-4 py-4 text-brand-light focus:ring-1 focus:ring-brand-primary focus:border-brand-primary outline-none transition-all resize-none placeholder:text-gray-600"
                    placeholder="E.g., AC isn't cooling, furnace maintenance needed..."
                  />
                </div>

                {errorMessage && (
                    <p className="text-red-500 text-sm font-medium text-center">{errorMessage}</p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-brand-primary hover:bg-sky-600 text-white font-extrabold py-4 rounded-sm transition-all shadow-lg flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed uppercase tracking-wide text-sm"
                >
                  {isSubmitting ? 'Sending Request...' : 'Get Free Estimate'}
                  {!isSubmitting && <Send className="w-4 h-4" />}
                </button>
                
                <p className="text-center text-xs text-brand-muted">
                  Your privacy is paramount. Information is used strictly for scheduling.
                </p>
              </form>
            )}
          </div>
        </div>
        
        {/* Footer */}
        <div className="mt-24 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-brand-muted text-xs uppercase tracking-wider font-medium">
           <p>&copy; {new Date().getFullYear()} Dempsey Heating And Cooling LLC. All rights reserved.</p>
           <div className="flex gap-6">
             <span>Licensed & Insured</span>
             <span>Wheelersburg, OH</span>
           </div>
        </div>
      </div>
    </section>
  );
};