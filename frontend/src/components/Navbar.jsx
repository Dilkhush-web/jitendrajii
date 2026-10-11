import React, { useState, useEffect } from 'react';
import { 
  Home, 
  Image, 
  Briefcase, 
  PhoneCall, 
  Lock, 
  LogOut, 
  ArrowRight, 
  X,
  Menu
} from 'lucide-react';

export default function Navbar({ currentView, setCurrentView, onLogout, activeTab, setActiveTab, openLoginModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

  const navTabs = [
    { id: 'home', label: 'Home' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'services', label: 'Tariffs' },
    { id: 'contact', label: 'Contact' }
  ];

  const mobileQuickTabs = [
    { id: 'home', label: 'Home', icon: <Home size={17} /> },
    { id: 'portfolio', label: 'Gallery', icon: <Image size={17} /> },
    { id: 'services', label: 'Tariffs', icon: <Briefcase size={17} /> },
    { id: 'contact', label: 'Book', icon: <PhoneCall size={17} /> }
  ];

  const handleTabSelect = (id) => {
    if (setCurrentView) setCurrentView('public');
    if (setActiveTab) setActiveTab(id);
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Hero section height ke mutabiq threshold (jaise hi hero cross hoga, navbar hide ho jayega)
      const heroHeight = window.innerHeight * 0.8;
      if (window.scrollY > heroHeight) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600&display=swap');

        .font-luxury-serif { font-family: 'Cormorant Garamond', Georgia, serif; }
        .font-luxury-sans { font-family: 'Plus Jakarta Sans', sans-serif; }

        .luxury-nav-glass {
          background: rgba(246, 243, 238, 0.88);
          backdrop-filter: blur(25px) saturate(190%);
          border: 1px solid rgba(197, 160, 89, 0.25);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
        }

        .mobile-glass-dock {
          background: rgba(10, 9, 8, 0.96);
          backdrop-filter: blur(24px) saturate(180%);
          border: 1px solid rgba(197, 160, 89, 0.35);
          box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.8);
        }

        @keyframes fadeInDrawer {
          from { opacity: 0; transform: scale(0.98); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-drawer { animation: fadeInDrawer 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
      `}</style>

      {/* =========================================================================
          1. DESKTOP FLOATING ULTRA-PREMIUM NAVBAR (Smooth Fade In/Out based on Hero)
      ========================================================================= */}
      <nav className={`hidden lg:flex fixed top-4 left-1/2 -translate-x-1/2 z-[9000] w-[92%] max-w-7xl items-center justify-between px-8 py-3.5 rounded-full luxury-nav-glass transition-all duration-700 ease-in-out ${
        showNavbar ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-10 pointer-events-none'
      }`}>
        
        {/* Brand Logo */}
        <div 
          onClick={() => handleTabSelect('home')}
          className="cursor-pointer text-left group shrink-0"
        >
          <span className="font-luxury-serif text-xl font-medium tracking-[0.25em] text-[#1A1A1A] block group-hover:text-[#B8860B] transition-colors uppercase">
            KAMAL <span className="italic font-light text-[#B8860B]">DIGITAL</span>
          </span>
        </div>

        {/* Center Minimal Navigation Links */}
        <div className="flex items-center gap-8 bg-white/60 px-6 py-2 rounded-full border border-stone-200/80 shadow-2xs">
          {currentView === 'public' && navTabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => handleTabSelect(tab.id)}
                className={`font-luxury-sans text-xs font-medium tracking-[0.2em] uppercase transition-all duration-300 cursor-pointer relative py-1 ${
                  isActive ? 'text-[#B8860B] font-bold' : 'text-stone-600 hover:text-black'
                }`}
              >
                <span>{tab.label}</span>
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#B8860B] rounded-full animate-pulse" />
                )}
              </button>
            );
          })}
        </div>

        {/* Right Actions (Vault & Luxury CTA) */}
        <div className="flex items-center gap-3.5">
          {currentView === 'public' ? (
            <>
              <button
                onClick={openLoginModal}
                className="w-9 h-9 rounded-full bg-white hover:bg-stone-100 text-stone-800 border border-stone-200 flex items-center justify-center transition-all cursor-pointer shadow-2xs hover:scale-105"
                title="Client Vault / Admin Portal"
              >
                <Lock size={13} className="text-[#B8860B]" />
              </button>

              <button
                onClick={() => handleTabSelect('contact')}
                className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#C5A059] to-[#b08b45] hover:from-[#d4af37] hover:to-[#c5a059] text-stone-950 font-luxury-sans text-[11px] font-bold uppercase tracking-[0.25em] transition-all hover:scale-105 cursor-pointer flex items-center gap-2 shadow-md border border-amber-200/50"
              >
                <span>Book Shoot</span>
                <ArrowRight size={12} />
              </button>
            </>
          ) : (
            <button
              onClick={onLogout}
              className="px-5 py-2 rounded-full bg-rose-600 text-white font-luxury-sans text-xs uppercase font-bold tracking-wider hover:bg-rose-700 transition-colors flex items-center gap-2 cursor-pointer shadow-md"
            >
              <LogOut size={13} />
              <span>Disconnect</span>
            </button>
          )}
        </div>
      </nav>

      {/* =========================================================================
          2. LUXURY MOBILE TOP BRAND HEADER (Smooth Scroll Aware)
      ========================================================================= */}
      <header className={`lg:hidden fixed top-0 left-0 w-full z-[8998] px-5 py-3.5 bg-[#F6F3EE]/95 backdrop-blur-md border-b border-stone-300 flex items-center justify-between text-[#1A1A1A] shadow-sm transition-all duration-700 ease-in-out ${
        showNavbar ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-10 pointer-events-none'
      }`}>
        <div 
          onClick={() => handleTabSelect('home')}
          className="cursor-pointer shrink-0 text-left"
        >
          <span className="font-luxury-serif text-base font-medium tracking-[0.2em] text-[#1A1A1A] block uppercase">
            KAMAL <span className="italic text-[#B8860B]">DIGITAL</span>
          </span>
        </div>

        <div className="flex items-center gap-2.5">
          {currentView === 'public' && (
            <button
              onClick={openLoginModal}
              className="px-3.5 py-1.5 rounded-full bg-stone-200/90 border border-stone-300 text-stone-900 text-[10px] font-luxury-sans font-bold uppercase tracking-wider flex items-center gap-1 shadow-2xs"
            >
              <Lock size={11} className="text-[#B8860B]" />
              <span>Vault</span>
            </button>
          )}

          <button
            onClick={() => setMobileMenuOpen(true)}
            className="w-9 h-9 flex items-center justify-center rounded-xl bg-stone-900 text-[#C5A059] cursor-pointer active:scale-95 transition-transform shadow-sm"
            aria-label="Open Full Menu"
          >
            <Menu size={18} />
          </button>
        </div>
      </header>

      {/* =========================================================================
          3. MOBILE FLOATING GLASS BOTTOM DOCK
      ========================================================================= */}
      <div className="lg:hidden fixed bottom-3 left-1/2 -translate-x-1/2 z-[8999] w-[94%] max-w-sm pointer-events-auto">
        <div className="mobile-glass-dock rounded-2xl p-2 flex items-center justify-around shadow-2xl">
          {mobileQuickTabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => handleTabSelect(tab.id)}
                className={`flex flex-col items-center justify-center py-1.5 px-3 rounded-xl transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-[#C5A059] text-stone-950 font-bold shadow-lg scale-105'
                    : 'text-stone-400 hover:text-stone-100'
                }`}
              >
                <span>{tab.icon}</span>
                <span className="text-[9px] font-luxury-sans uppercase tracking-wider mt-0.5">
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* =========================================================================
          4. FULL-SCREEN EDITORIAL MOBILE DRAWER
      ========================================================================= */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-[9999] bg-[#0A0908]/98 backdrop-blur-3xl p-6 flex flex-col justify-between text-[#F6F3EE] overflow-y-auto animate-drawer">
          <div className="flex items-center justify-between border-b border-[#C5A059]/30 pb-4">
            <div className="text-left">
              <h3 className="font-luxury-serif text-lg font-light tracking-widest text-[#F6F3EE]">
                KAMAL <span className="italic text-[#C5A059]">DIGITAL</span>
              </h3>
            </div>

            <button
              onClick={() => setMobileMenuOpen(false)}
              className="w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-stone-200 hover:text-white cursor-pointer"
            >
              <X size={18} />
            </button>
          </div>

          <div className="space-y-4 py-8 text-left">
            <span className="text-[10px] font-luxury-sans tracking-[0.3em] text-[#C5A059] uppercase font-bold block mb-2">
              NAVIGATION
            </span>

            <div className="flex flex-col space-y-3">
              {navTabs.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => handleTabSelect(tab.id)}
                    className={`w-full text-left py-4 px-5 rounded-2xl flex items-center justify-between font-luxury-serif text-2xl tracking-wide transition-all cursor-pointer ${
                      isActive 
                        ? 'bg-[#C5A059]/20 text-[#C5A059] font-bold border border-[#C5A059]/40 shadow-md' 
                        : 'text-stone-300 hover:bg-white/5 border border-transparent'
                    }`}
                  >
                    <span>{tab.label}</span>
                    <ArrowRight size={16} className={isActive ? 'text-[#C5A059]' : 'text-stone-600'} />
                  </button>
                );
              })}
            </div>
          </div>

          <div className="pt-4 border-t border-[#C5A059]/30 space-y-3.5 pb-8">
            <button
              onClick={() => handleTabSelect('contact')}
              className="w-full py-4 bg-[#C5A059] text-stone-950 font-luxury-sans font-bold uppercase text-xs tracking-widest rounded-xl shadow-xl cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Book Appointment</span>
              <ArrowRight size={14} />
            </button>

            <a
              href="tel:08439292226"
              className="w-full py-3 bg-[#12100E] border border-[#C5A059]/40 text-stone-300 text-xs font-luxury-sans font-semibold rounded-xl flex items-center justify-center gap-2"
            >
              <PhoneCall size={14} className="text-[#C5A059]" />
              <span>Call: 084392 92226</span>
            </a>

            <p className="text-center text-[10px] font-luxury-sans text-stone-500 uppercase tracking-widest pt-1">
              Kamal Digital Studio © 2026 • Jitendra Ji
            </p>
          </div>
        </div>
      )}
    </>
  );
}