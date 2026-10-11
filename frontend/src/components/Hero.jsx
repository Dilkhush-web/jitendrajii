import React, { useState, useEffect, useRef } from 'react';
import { 
  X,
  MessageCircle,
  ArrowDown
} from 'lucide-react';

export default function Home({ setActiveTab }) {
  const [lightboxImg, setLightboxImg] = useState(null);
  
  // Hero section image slideshow state (3 images changing every 3 seconds)
  const heroImages = [
    "https://res.cloudinary.com/doa6d6cyf/image/upload/v1791702602/Centered_couple_in_a_mirrored_setting_ubeyue.png",
    "https://res.cloudinary.com/tkhv6b6p/image/upload/v1791141091/9e91eb85f896212dccaf39f0682c985c.jpg",
    "https://res.cloudinary.com/tkhv6b6p/image/upload/v1791141093/vicky-photography-studio-nandauli-ayodhya-photographers-92bh153zha.avif"
  ];
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  const worksRef = useRef(null);
  const coverageRef = useRef(null);
  const storyRef = useRef(null);

  const scrollToSection = (elementRef) => {
    if (elementRef && elementRef.current) {
      elementRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsAppChat = () => {
    const phoneNumber = "919837000000"; 
    const message = "Hello Jitendra Ji, I would like to book a consultation for our wedding/events with Kamal Digital Studio.";
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="bg-[#F6F3EE] text-[#1A1A1A] font-sans tracking-tight relative overflow-x-hidden selection:bg-[#C5A059] selection:text-black" style={{ scrollBehavior: 'smooth' }}>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600&display=swap');

        .font-luxury-serif { font-family: 'Cormorant Garamond', Georgia, serif; }
        .font-luxury-sans { font-family: 'Plus Jakarta Sans', sans-serif; }

        /* Exactly 2 columns per row with zero gap */
        .zero-gap-grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 0px;
        }
        @media (min-width: 768px) {
          .zero-gap-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>

      {/* =========================================================================
          1. HERO SECTION (3-Image Slideshow, No Text, Single Scroll Button)
      ======================================================================== */}
      <section className="relative z-10 w-full min-h-[100vh] sm:h-screen flex flex-col justify-end items-center text-center pb-16 px-6 overflow-hidden bg-[#F6F3EE]">
        
        {/* Slideshow Background Images */}
        {heroImages.map((img, idx) => (
          <div 
            key={idx}
            className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${idx === currentHeroIndex ? 'opacity-100' : 'opacity-0'}`}
          >
            <img 
              src={img} 
              alt="Kamal Digital Studio Hero Slide" 
              loading="eager"
              fetchPriority="high"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
        ))}

        {/* Hero Bottom Center Clean Button to Portfolio/Works */}
        <div className="relative z-10 pb-8">
          <button
            onClick={() => scrollToSection(worksRef)}
            className="px-8 py-4 rounded-full bg-white/90 hover:bg-white text-stone-900 font-luxury-sans text-xs uppercase tracking-[0.3em] font-bold shadow-2xl backdrop-blur-md transition-all duration-300 flex items-center gap-3 cursor-pointer hover:scale-105"
          >
            <span>Explore Portfolio</span>
            <ArrowDown size={16} className="animate-bounce" />
          </button>
        </div>
      </section>


      {/* =========================================================================
          2. THE ARTISAN STORY SECTION (Director Profile)
      ======================================================================== */}
      <section ref={storyRef} className="relative z-25 py-20 sm:py-28 px-6 sm:px-16 bg-[#F6F3EE] text-[#1A1A1A] border-b border-stone-300">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          
          <div className="space-y-2">
            <span className="text-[#B8860B] font-luxury-sans text-xs uppercase tracking-[0.35em] font-bold block">
              THE MASTERMIND BEHIND THE LENS
            </span>
            <h2 className="font-luxury-serif text-3xl sm:text-5xl font-light tracking-wide italic text-stone-900">
              Jitendra Ji — Master Cinematographer
            </h2>
          </div>

          <div className="w-full max-w-xs sm:max-w-sm mx-auto aspect-[4/5] rounded-2xl overflow-hidden shadow-xl border border-stone-300 bg-white p-2">
            <img 
              src="https://res.cloudinary.com/doa6d6cyf/image/upload/v1791289207/DSC_0280.JPG_wkqf3m.jpg" 
              alt="Jitendra Ji - Director" 
              loading="lazy"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>

          <div className="space-y-4 max-w-2xl mx-auto">
            <div className="inline-block px-4 py-1.5 rounded-full bg-amber-100/90 border border-amber-200 text-amber-900 text-[10px] uppercase tracking-widest font-bold">
              Lead Director & Founder • Kamal Digital Studio
            </div>
            
            <h3 className="font-luxury-serif text-2xl sm:text-3xl font-light text-stone-900 leading-snug">
              "Every frame is crafted to evoke true emotion, heritage, and timeless beauty."
            </h3>
            
            <p className="font-luxury-sans text-sm sm:text-base text-stone-700 leading-relaxed font-light tracking-wide text-justify sm:text-center">
              Operating from Guratthi Court Road, Moradabad, Jitendra Ji brings over a decade of unmatched mastery in luxury wedding storytelling, blending candid precision with majestic cinematic vision.
            </p>

            <div className="pt-3 flex flex-col items-center justify-center">
              <button
                onClick={handleWhatsAppChat}
                className="px-8 py-3.5 bg-[#25D366] hover:bg-[#20ba5a] text-white font-luxury-sans text-xs uppercase tracking-[0.2em] transition-all duration-300 cursor-pointer rounded-full font-bold shadow-md flex items-center gap-2 hover:scale-105"
              >
                <MessageCircle size={16} />
                Connect on WhatsApp with Jitendra Ji
              </button>
            </div>
          </div>

        </div>
      </section>


      {/* =========================================================================
          3. EXPLORE YOUR VISUALS (Romantic Atmospheric Quote Section)
      ======================================================================== */}
      <section className="relative z-20 py-36 sm:py-48 px-6 text-center text-white overflow-hidden border-b border-stone-200">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://res.cloudinary.com/tkhv6b6p/image/upload/v1791141091/9e91eb85f896212dccaf39f0682c985c.jpg" 
            alt="Explore Your Visuals" 
            className="w-full h-full object-cover filter brightness-[0.55]"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto space-y-6">
          <span className="text-[#E6C594] font-luxury-sans text-xs uppercase tracking-[0.5em] font-bold block drop-shadow">
            CURATED ARTISTRY
          </span>
          <h2 className="font-luxury-serif text-4xl sm:text-6xl font-light italic text-white drop-shadow-lg">
            Explore Your Visuals
          </h2>
          <div className="w-20 h-[1px] bg-[#E6C594] mx-auto" />
          <p className="font-luxury-serif text-lg sm:text-2xl text-stone-200 font-light italic max-w-xl mx-auto drop-shadow leading-relaxed pt-2">
            "Where two souls intertwine in pure devotion, every glance becomes an immortal masterpiece of love."
          </p>
        </div>
      </section>


      {/* =========================================================================
          4. SELECTED WORKS (Strictly 2 Columns Per Row, 100% Zero Gap, Dynamic)
      ======================================================================== */}
      <section 
        ref={worksRef}
        className="relative z-20 py-24 sm:py-36 px-0 max-w-full mx-auto text-center bg-[#F6F3EE]"
      >
        <div className="relative z-10 space-y-3 mb-16 px-6 max-w-4xl mx-auto">
          <span className="text-[#B8860B] font-luxury-sans text-xs uppercase tracking-[0.35em] font-bold block">
            PORTFOLIO HIGHLIGHTS
          </span>
          <h2 className="font-luxury-serif text-4xl sm:text-6xl font-light tracking-wide text-stone-900">
            Selected Works
          </h2>
          <p className="font-luxury-sans text-xs sm:text-sm text-stone-600 max-w-md mx-auto font-light tracking-wider">
            A continuous, flush mosaic of cinematic milestones and raw emotional chapters.
          </p>
        </div>

        {/* 2-Column Zero-Gap Grid filling full width */}
        <div className="zero-gap-grid w-full m-0 p-0 shadow-2xl">
          {[
            { url: "https://res.cloudinary.com/doa6d6cyf/image/upload/v1787200601/DSC05369_vlepcy.jpg", span: "aspect-[4/5]" },
            { url: "https://res.cloudinary.com/tkhv6b6p/image/upload/v1791141092/vicky-photography-studio-nandauli-ayodhya-photographers-1q963uv9fi.avif", span: "aspect-[16/10]" },
            { url: "https://res.cloudinary.com/tkhv6b6p/image/upload/v1791141091/9e91eb85f896212dccaf39f0682c985c.jpg", span: "aspect-[1/1]" },
            { url: "https://res.cloudinary.com/tkhv6b6p/image/upload/v1791141093/vicky-photography-studio-nandauli-ayodhya-photographers-92bh153zha.avif", span: "aspect-[4/5]" },
            { url: "https://res.cloudinary.com/doa6d6cyf/image/upload/v1788587741/IMG_2859.JPG_kskybg.jpg", span: "aspect-[16/10]" },
            { url: "https://res.cloudinary.com/doa6d6cyf/image/upload/v1787200591/IMG_5643.JPG_y7fuic.jpg", span: "aspect-[4/5]" }
          ].map((item, i) => (
            <div 
              key={i}
              onClick={() => setLightboxImg({ url: item.url, title: "Masterpiece", category: "KAMAL DIGITAL STUDIO" })}
              className={`cursor-pointer group relative overflow-hidden bg-stone-200 ${item.span} w-full m-0 p-0`}
            >
              <img 
                src={item.url} 
                alt="Selected Work" 
                loading="lazy" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 block m-0 p-0" 
              />
            </div>
          ))}
        </div>
      </section>


      {/* =========================================================================
          5. WEDDING COVERAGE
      ======================================================================== */}
      <section 
        ref={coverageRef}
        className="relative z-20 py-24 sm:py-36 px-6 sm:px-16 bg-[#EFECE6] text-[#1A1A1A] border-t border-stone-300"
      >
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-12">
          <div className="space-y-2">
            <span className="text-[#B8860B] font-luxury-sans text-xs uppercase tracking-[0.35em] font-bold block">
              TIMELESS CELEBRATIONS
            </span>
            <h2 className="font-luxury-serif text-3xl sm:text-5xl font-light italic text-stone-900">
              Wedding Coverage
            </h2>
          </div>
          <div className="max-w-xl">
            <p className="font-luxury-sans text-sm text-stone-700 font-light leading-relaxed tracking-wider">
              Documenting grand rituals, quiet emotional pauses, and legendary celebrations across Moradabad and destination venues with absolute artistic integrity.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "https://res.cloudinary.com/doa6d6cyf/image/upload/v1788587741/IMG_2859.JPG_kskybg.jpg",
            "https://res.cloudinary.com/doa6d6cyf/image/upload/v1787200591/IMG_5643.JPG_y7fuic.jpg",
            "https://res.cloudinary.com/doa6d6cyf/image/upload/v1784919032/Screenshot_2026-07-25_001554_tldmhh.jpg",
            "https://res.cloudinary.com/tkhv6b6p/image/upload/v1791140828/vicky-photography-studio-nandauli-ayodhya-photographers-d2gfw3ovz1.avif"
          ].map((imgUrl, i) => (
            <div 
              key={i} 
              onClick={() => setLightboxImg({ url: imgUrl, title: "Wedding Coverage", category: "KAMAL DIGITAL STUDIO" })}
              className="w-full aspect-[3/4.5] rounded-xl overflow-hidden bg-white border border-stone-300 group shadow-sm cursor-pointer p-1.5 transition-all duration-500 hover:shadow-xl"
            >
              <img src={imgUrl} alt={`Coverage ${i}`} loading="lazy" className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-700" />
            </div>
          ))}
        </div>
      </section>


      {/* =========================================================================
          LIGHTBOX MODAL
      ======================================================================== */}
      {lightboxImg && (
        <div
          className="fixed inset-0 z-[99999] bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-center p-4"
          onClick={() => setLightboxImg(null)}
        >
          <button
            onClick={() => setLightboxImg(null)}
            className="absolute top-6 right-6 z-50 px-5 py-2 rounded-full bg-white/10 text-white flex items-center gap-2 font-luxury-sans text-xs uppercase tracking-widest border border-white/20 transition-all cursor-pointer hover:bg-white/20"
          >
            <span>Close</span>
            <X size={16} />
          </button>

          <div className="max-w-4xl max-h-[85vh] relative flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <img
              src={lightboxImg.url}
              alt="Kamal Digital Studio Masterpiece"
              className="max-w-full max-h-[75vh] object-contain rounded-xl shadow-2xl border border-stone-700"
            />
            <div className="mt-4 text-center text-white space-y-1">
              <span className="font-luxury-sans text-xs tracking-widest text-[#E6C594] uppercase block font-bold">
                {lightboxImg.category}
              </span>
              <h3 className="font-luxury-serif text-xl font-bold">{lightboxImg.title}</h3>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}