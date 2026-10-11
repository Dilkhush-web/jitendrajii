import React, { useState } from 'react';
import { Phone, MessageCircle, Mail, CreditCard, MapPin, Clock, ShieldCheck, Sparkles, Send, CheckCircle2, Award, Camera, Check, Star, Compass } from 'lucide-react';
import { FaInstagram, FaFacebook, FaYoutube, FaWhatsapp } from 'react-icons/fa';

export default function Footer({ onSecretTrigger, currentView, setCurrentView, setActiveTab }) {
  const [email, setEmail] = useState('');
  const [showAugModal, setShowAugModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const triggerSecretPrompt = () => {
    const key = prompt("ENTER EXECUTIVE SYSTEM COMMAND KEY:");
    if (key && onSecretTrigger) {
      const isSuccess = onSecretTrigger(key);
      if (!isSuccess) alert("ACCESS DENIED. INCORRECT SECURITY ACCESS PARAMETERS.");
    }
  };

  const handleNewsletter = async (e) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitting(true);

    try {
      const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';
      await fetch(`${backendUrl}/api/newsletter/subscribe`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim() })
      });
    } catch (err) {
      console.log("Local subscription active for:", email);
    }

    alert("Thank you for subscribing to Kamal Digital Studio. Exclusive updates recorded.");
    setEmail('');
    setIsSubmitting(false);
  };

  const handleNavClick = (tabId) => {
    if (setCurrentView) setCurrentView('public');
    if (setActiveTab) setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCrewLoginClick = () => {
    if (setCurrentView) setCurrentView('crew');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#0A0908] text-[#F6F3EE] border-t border-[#C5A059]/20 py-4 sm:py-8 px-4 sm:px-12 relative overflow-hidden font-sans">
      
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600&display=swap');

        .font-brand-serif { font-family: 'Cormorant Garamond', Georgia, serif; }
        .font-brand-sans { font-family: 'Plus Jakarta Sans', sans-serif; }

        .glass-footer-card {
          background: rgba(18, 16, 14, 0.95);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(197, 160, 89, 0.3);
          box-shadow: 0 20px 45px -15px rgba(0, 0, 0, 0.8);
        }

        @media (max-width: 768px) {
          footer {
            padding-top: 1rem !important;
            padding-bottom: 5rem !important;
          }
        }
      `}</style>

      {/* 🔮 Ambient Gold Glow Watermark */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] sm:w-[600px] h-[100px] bg-gradient-to-t from-[#C5A059]/10 via-transparent to-transparent blur-[80px] rounded-full pointer-events-none" />
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[3rem] sm:text-[8rem] md:text-[10rem] font-brand-serif font-light text-[#F6F3EE]/[0.02] pointer-events-none select-none tracking-widest leading-none">
        KAMAL
      </div>

      {/* 🎯 4-COLUMN SYNC */}
      <div className="w-full max-w-7xl mx-auto px-2 sm:px-8 lg:px-12 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 lg:gap-10 mb-4 sm:mb-10 relative z-10">
        
        {/* Column 1: Studio Identity */}
        <div className="space-y-1.5 sm:space-y-3 text-left">
          <div className="flex flex-col">
            <h3 className="font-brand-serif text-sm sm:text-xl tracking-[0.1em] font-normal text-[#F6F3EE] leading-tight uppercase">
              KAMAL <span className="text-[#C5A059] italic font-light">DIGITAL</span>
            </h3>
            <span className="text-[7.5px] sm:text-[9px] tracking-[0.2em] sm:tracking-[0.25em] text-[#C5A059] font-brand-sans mt-0.5 sm:mt-1 uppercase font-bold">
              Master Cinematography & Heritage
            </span>
          </div>
          <p className="text-stone-400 text-[10px] sm:text-sm tracking-wide leading-relaxed font-light hidden sm:block">
            Archiving unscripted human emotions and elite cultural weddings across Moradabad & Uttar Pradesh.
          </p>
        </div>

        {/* Column 2: Studio Navigation Handles (Home, Portfolio, Services, Contact, Crew Portal) */}
        <div className="text-left">
          <h4 className="font-brand-serif text-[10px] sm:text-sm tracking-[0.2em] text-[#C5A059] mb-1.5 sm:mb-3 uppercase font-semibold border-b border-stone-800 pb-0.5 sm:pb-1 inline-block">
            The Studio
          </h4>
          <ul className="space-y-1 sm:space-y-2 text-[10px] sm:text-sm tracking-wide font-brand-sans font-normal text-stone-300">
            <li>
              <button onClick={() => handleNavClick('home')} className="hover:text-[#C5A059] cursor-pointer text-left truncate">
                Home Gateway
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick('portfolio')} className="hover:text-[#C5A059] cursor-pointer text-left truncate">
                Visual Archive
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick('services')} className="hover:text-[#C5A059] cursor-pointer text-left truncate">
                Bespoke Tariffs
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick('contact')} className="hover:text-[#C5A059] cursor-pointer text-left truncate">
                Private Inquiries
              </button>
            </li>
            <li>
              <button onClick={handleCrewLoginClick} className="text-[#C5A059] font-semibold hover:underline cursor-pointer text-left truncate flex items-center gap-1">
                <span>🔒 Crew Member Portal</span>
              </button>
            </li>
          </ul>
        </div>

        {/* Column 3: Headquarters Contact */}
        <div className="text-left">
          <h4 className="font-brand-serif text-[10px] sm:text-sm tracking-[0.2em] text-[#C5A059] mb-1.5 sm:mb-3 uppercase font-semibold border-b border-stone-800 pb-0.5 sm:pb-1 inline-block">
            HQ Contact
          </h4>
          <ul className="space-y-1.5 sm:space-y-2.5 text-[10px] sm:text-sm tracking-wide text-stone-300 font-brand-sans">
            <li className="flex items-start gap-1.5 sm:gap-2.5">
              <span className="mt-0.5 text-[#C5A059] shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" className="sm:w-3.5 sm:h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>
              </span>
              <span className="font-medium text-stone-200">+91 8434656386</span>
            </li>
            <li className="flex items-start gap-1.5 sm:gap-2.5">
              <span className="mt-0.5 text-[#C5A059] shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" className="sm:w-3.5 sm:h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              </span>
              <span className="break-all font-medium text-stone-200">kamaldigitalstudio@gmail.com</span>
            </li>
            <li className="flex items-start gap-1.5 sm:gap-2.5">
              <span className="mt-0.5 text-[#C5A059] shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" className="sm:w-3.5 sm:h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              </span>
              <span className="leading-snug font-medium text-stone-200">Guratthi Court Road, Moradabad, UP</span>
            </li>
          </ul>
        </div>

        {/* Column 4: Newsletter */}
        <div className="text-left col-span-2 sm:col-span-1 mt-2 sm:mt-0">
          <h4 className="font-brand-serif text-[10px] sm:text-sm tracking-[0.2em] text-[#C5A059] mb-1.5 sm:mb-3 uppercase font-semibold border-b border-stone-800 pb-0.5 sm:pb-1 inline-block">
            Elite Access
          </h4>
          <p className="text-stone-400 text-[10px] sm:text-sm tracking-wide font-light mb-2 sm:mb-3 leading-relaxed hidden sm:block">
            Subscribe for priority booking dates & studio updates.
          </p>
          <form onSubmit={handleNewsletter} className="group relative flex items-center border-b border-stone-600 pb-1.5 sm:pb-2 focus-within:border-[#C5A059]">
            <input 
              type="email" 
              required
              placeholder="ENTER YOUR EMAIL" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-transparent text-[10px] sm:text-sm tracking-wider font-brand-sans font-medium w-full focus:outline-none placeholder-stone-500 text-white pr-6"
            />
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="absolute right-0 text-stone-400 hover:text-[#C5A059] transition-colors cursor-pointer disabled:opacity-50" 
              aria-label="Subscribe"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" className="sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </button>
          </form>
        </div>

      </div>

      {/* Footer Bottom Metadata Bar */}
      <div className="w-full max-w-7xl mx-auto px-2 sm:px-8 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-3 relative z-10 pt-3 sm:pt-6 border-t border-stone-800">
        
        {/* Social Matrix Streams */}
        <div className="flex items-center gap-3">
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noreferrer" 
            className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-300 hover:text-[#C5A059] hover:border-[#C5A059] transition-all duration-300"
            aria-label="Instagram"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
          </a>
          
          <a 
            href="https://wa.me/918434656386" 
            target="_blank" 
            rel="noreferrer" 
            className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-300 hover:text-emerald-400 hover:border-emerald-500 transition-all duration-300"
            aria-label="WhatsApp"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          </a>
        </div>

        {/* Copyright & Developer Tag */}
        <div className="flex flex-col sm:flex-row items-center sm:items-end gap-1 sm:gap-3 text-center sm:text-right">
          <div className="text-[9px] sm:text-xs tracking-[0.15em] sm:tracking-[0.2em] font-brand-sans font-medium text-stone-400">
            © {new Date().getFullYear()} KAMAL DIGITAL STUDIO
            <span 
              onClick={triggerSecretPrompt}
              className="cursor-default text-transparent hover:text-[#C5A059] transition-colors ml-1"
              title="Console"
            >
              .
            </span>
          </div>

          <div className="text-[9px] sm:text-xs tracking-[0.15em] sm:tracking-[0.2em] font-brand-sans font-medium text-stone-400">
            DEVELOPED BY{' '}
            <button 
              onClick={() => setShowAugModal(true)} 
              className="text-[#C5A059] hover:underline font-bold tracking-[0.2em] outline-none cursor-pointer"
            >
              AUG CONSULTANCY
            </button>
          </div>
        </div>

      </div>

      {/* =========================================================================
          💎 AUG CONSULTANCY POPUP MODAL
      ======================================================================== */}
      {showAugModal && (
        <div className="fixed inset-0 z-[999999] bg-black/85 backdrop-blur-xl flex items-center justify-center p-4">
          <div className="glass-footer-card rounded-2xl p-6 sm:p-10 max-w-md w-full relative shadow-2xl text-stone-100 border border-[#C5A059]/40">
            
            <button 
              onClick={() => setShowAugModal(false)} 
              className="absolute top-5 right-5 text-stone-400 hover:text-white transition-colors text-xs tracking-widest font-brand-sans uppercase cursor-pointer"
            >
              ✕ CLOSE
            </button>
            
            <div className="text-center space-y-3 relative z-10 pt-2">
              <span className="text-[#C5A059] font-brand-sans text-[10px] tracking-[0.4em] uppercase block font-bold">DIGITAL ARCHITECTS</span>
              <h3 className="font-brand-serif text-2xl sm:text-3xl text-white font-normal tracking-wide">
                AUG <span className="italic font-light text-[#C5A059]">Consultancy.</span>
              </h3>
              
              <div className="w-12 h-[1px] bg-[#C5A059]/60 mx-auto my-3" />
              
              <p className="text-stone-300 text-xs sm:text-sm tracking-wide leading-relaxed font-light pb-3">
                We engineer ultra-premium digital experiences, combining cutting-edge web architecture with luxury design aesthetics to elevate modern brands.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                <a 
                  href="https://afterusglobal.com/" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="w-full sm:w-auto bg-[#C5A059] text-stone-950 font-brand-sans text-[10px] font-bold uppercase tracking-[0.25em] px-6 py-3 rounded-full hover:bg-[#b08b45] transition-colors shadow-lg text-center"
                >
                  Visit Website
                </a>
                
                <a 
                  href="https://wa.me/918002468432" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="w-full sm:w-auto bg-stone-900 border border-[#C5A059]/50 text-[#C5A059] font-brand-sans text-[10px] font-bold uppercase tracking-[0.25em] px-6 py-3 rounded-full hover:bg-stone-800 transition-all shadow-lg flex items-center justify-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
            
          </div>
        </div>
      )}
    </footer>
  );
}