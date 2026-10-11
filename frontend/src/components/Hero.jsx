import React, { useState } from 'react';
import { 
  ArrowRight, 
  PhoneCall, 
  X, 
  Plus,
  Minus
} from 'lucide-react';

export default function Home({ setActiveTab }) {
  const [lightboxImg, setLightboxImg] = useState(null);
  const [openFaq, setOpenFaq] = useState(0);

  const faqList = [
    { q: "How far in advance should we book?", a: "We typically book 3-6 months in advance for portraits, and 9-12 months for weddings at Kamal Digital Studio. However, we always welcome last-minute magic when possible." },
    { q: "Do you travel?", a: "Yes, our cinematography team based in Moradabad frequently travels across Uttar Pradesh and PAN India for destination events." },
    { q: "Can you help us with planning our timeline?", a: "Absolutely, Jitendra Ji guides you through custom event scheduling to capture optimal lighting and raw emotions." },
    { q: "What should be worn for a session?", a: "We recommend traditional or elegant attire matching the theme of your celebrations in Moradabad." },
    { q: "How will I receive my images?", a: "Delivered via a secure high-resolution online digital vault along with luxury physical handcrafted albums." },
    { q: "What if the weather doesn't cooperate?", a: "We monitor venue conditions closely and coordinate seamless adjustments to ensure zero disruption." }
  ];

  return (
    <div className="bg-[#F6F3EE] text-[#1A1A1A] font-sans tracking-tight relative overflow-x-hidden selection:bg-[#C5A059] selection:text-black" style={{ scrollBehavior: 'smooth' }}>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600&display=swap');

        .font-editorial { font-family: 'Cormorant Garamond', Georgia, serif; }
        .font-clean { font-family: 'Plus Jakarta Sans', sans-serif; }
      `}</style>

      {/* =========================================================================
          1. HERO SECTION (Laptop untouched, Mobile spacing optimized upwards)
      ======================================================================== */}
      <section className="relative z-10 w-full min-h-[90vh] sm:h-[110vh] bg-[#F6F3EE] text-[#1A1A1A] flex flex-col justify-center pt-2 sm:pt-20 pb-8 px-4 sm:px-12 overflow-hidden border-b border-stone-300">
        
        <div className="max-w-4xl mx-auto text-center space-y-2 sm:space-y-4 -mt-4 sm:mt-0">
          <h1 className="font-editorial text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight leading-[1.1] uppercase">
            Best Wedding Filmer <br />
            <span className="font-semibold text-[#B8860B]">Moradabad</span>
          </h1>
          <p className="font-clean text-[11px] sm:text-xs text-stone-600 max-w-md mx-auto font-light leading-relaxed px-2">
            We are a premier photography studio at Guratthi Court Road, Moradabad, providing exceptional cinematic services for weddings, portraits, and celebrations.
          </p>
          
          <div className="flex items-center justify-center gap-3 pt-2">
            <button
              onClick={() => setActiveTab && setActiveTab('contact')}
              className="px-6 py-2.5 rounded-full bg-[#C5A059] hover:bg-[#b08b45] text-stone-950 font-clean text-xs uppercase tracking-widest font-bold shadow-md transition-all cursor-pointer"
            >
              Get Cort
            </button>
            <button
              onClick={() => setActiveTab && setActiveTab('services')}
              className="px-6 py-2.5 rounded-full bg-transparent hover:bg-stone-200 text-stone-900 font-clean text-xs uppercase tracking-widest border border-[#C5A059]/60 transition-all cursor-pointer font-medium"
            >
              What We Do 
            </button>
          </div>
        </div>

        <div className="max-w-5xl mx-auto w-full grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 pt-6 items-center justify-center">
          {[
            "https://res.cloudinary.com/doa6d6cyf/image/upload/v1791139185/3-8mb_s1bb1v.jpg",
            "https://res.cloudinary.com/doa6d6cyf/image/upload/v1788587743/IMG_2855.JPG_mkzt7n.jpg",
            "https://res.cloudinary.com/doa6d6cyf/image/upload/v1787200591/IMG_5643.JPG_y7fuic.jpg",
            "https://res.cloudinary.com/doa6d6cyf/image/upload/v1784919032/Screenshot_2026-07-25_001554_tldmhh.jpg"
          ].map((imgUrl, i) => (
            <div 
              key={i} 
              className={`w-full aspect-[4/4.5] rounded-xl overflow-hidden bg-white p-2 shadow-lg border border-[#C5A059]/30 transition-transform duration-500 hover:rotate-0 hover:scale-105 ${
                i % 2 === 0 ? '-rotate-2 mt-2' : 'rotate-2 -mt-2'
              }`}
            >
              <img src={imgUrl} alt={`Hero Grid ${i}`} loading="eager" fetchPriority="high" className="w-full h-full object-cover rounded-lg" />
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          2. DEDICATED SEPARATE ABOUT SECTION (Professional & Compact)
      ======================================================================== */}
      <section className="relative z-20 py-16 sm:py-32 px-6 sm:px-16 bg-[#0A0908] text-[#F6F3EE] border-b border-[#C5A059]/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-3 mb-12 sm:mb-16">
            <span className="text-[#C5A059] font-clean text-xs uppercase tracking-[0.3em] font-bold block">
              THE ARTISAN BEHIND THE LENS
            </span>
            <h2 className="font-editorial text-3xl sm:text-6xl font-light tracking-tight italic">
              About Kamal Digital Studio
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12 items-center">
            <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl mx-auto max-w-[240px] sm:max-w-sm border border-[#C5A059]/40 bg-stone-900">
              <img 
                src="https://res.cloudinary.com/doa6d6cyf/image/upload/v1791289207/DSC_0280.JPG_wkqf3m.jpg" 
                alt="Jitendra Ji" 
                loading="lazy"
                className="w-full h-full object-cover grayscale-[15%]"
              />
            </div>

            <div className="space-y-4 sm:space-y-6 max-w-md mx-auto text-center lg:text-left">
              <h3 className="font-editorial text-2xl sm:text-3xl font-light italic text-[#E6C594]">Hey, Jitendra here!</h3>
              <p className="font-clean text-xs sm:text-sm text-stone-300 leading-relaxed font-light tracking-wide">
                Master photographer and memory-keeper at Kamal Digital Studio, Guratthi Court Road, Moradabad. My work is rooted in emotion, inspired by the quiet magic of everyday elegance and grand cultural celebrations across Uttar Pradesh.
              </p>
              <div className="pt-2 sm:pt-4">
                <button
                  onClick={() => setActiveTab && setActiveTab('contact')}
                  className="px-7 py-3.5 bg-transparent text-[#F6F3EE] font-clean text-[10px] uppercase tracking-[0.25em] border border-[#C5A059]/60 hover:bg-[#C5A059] hover:text-black transition-all duration-300 cursor-pointer rounded-full font-bold"
                >
                  MORE ABOUT ME
                </button>
              </div>
            </div>

            <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl mx-auto max-w-[280px] sm:max-w-xs border border-[#C5A059]/40 bg-stone-900">
              <img 
                src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80" 
                alt="Studio Gear" 
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. SELECTED WORKS SECTION (Original Links & 2x2 Grid)
      ======================================================================== */}
      <section className="relative z-20 py-20 sm:py-28 px-4 sm:px-16 max-w-7xl mx-auto text-center border-t border-stone-300">
        <div className="space-y-4 mb-12 sm:mb-16">
          <h2 className="font-editorial text-4xl sm:text-6xl font-light tracking-tight">
            Selected Works
          </h2>
          <p className="font-clean text-xs sm:text-sm text-stone-600 max-w-md mx-auto font-light">
            Browse a curated collection of moments that have made their way into the hearts of clients.
          </p>
          <div className="pt-2">
            <button
              onClick={() => setActiveTab && setActiveTab('portfolio')}
              className="px-6 py-3 bg-transparent text-[#1A1A1A] font-clean text-[10px] uppercase tracking-[0.25em] border border-stone-800 hover:bg-stone-900 hover:text-white transition-all duration-300 cursor-pointer font-bold"
            >
              CHECK OUT PORTFOLIO
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 gap-4 sm:gap-8 text-left pt-2 sm:pt-6">
          <div 
            onClick={() => setLightboxImg({ url: "https://res.cloudinary.com/doa6d6cyf/image/upload/v1787200601/DSC05369_vlepcy.jpg", title: "Bridal Portrait", category: "WEDDING" })}
            className="cursor-pointer group space-y-2 sm:space-y-3"
          >
            <div className="w-full aspect-[5/5] rounded-2xl overflow-hidden bg-stone-300">
              <img src="https://res.cloudinary.com/doa6d6cyf/image/upload/v1787200601/DSC05369_vlepcy.jpg" alt="Bridal" loading="eager" fetchPriority="high" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div>
              <span className="font-clean text-[9px] uppercase tracking-widest text-amber-800 font-bold">[01]</span>
              <h4 className="font-editorial text-base sm:text-xl font-medium">Bridal Portrait</h4>
              <span className="font-clean text-[10px] uppercase tracking-wider text-stone-600 hidden sm:inline">WEDDING</span>
            </div>
          </div>

          <div 
            onClick={() => setLightboxImg({ url: "https://res.cloudinary.com/tkhv6b6p/image/upload/v1791141092/vicky-photography-studio-nandauli-ayodhya-photographers-1q963uv9fi.avif", title: "Couple", category: "Couple Shoot" })}
            className="cursor-pointer group space-y-2 sm:space-y-3 md:mt-16"
          >
            <div className="w-full aspect-[5/4] rounded-2xl sm:rounded-3xl overflow-hidden bg-stone-100">
              <img src="https://res.cloudinary.com/tkhv6b6p/image/upload/v1791141092/vicky-photography-studio-nandauli-ayodhya-photographers-1q963uv9fi.avif" alt="Couple" loading="eager" fetchPriority="high" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div>
              <span className="font-clean text-[9px] uppercase tracking-widest text-amber-800 font-bold">[02]</span>
              <h4 className="font-editorial text-base sm:text-xl font-medium">Couple Shoot</h4>
              <span className="font-clean text-[10px] uppercase tracking-wider text-stone-800 hidden sm:inline">Couple Shoot</span>
            </div>
          </div>

          <div 
            onClick={() => setLightboxImg({ url: "https://res.cloudinary.com/tkhv6b6p/image/upload/v1791141091/9e91eb85f896212dccaf39f0682c985c.jpg", title: "Pre Wedding", category: "Pre Wedding" })}
            className="cursor-pointer group space-y-2 sm:space-y-3"
          >
            <div className="w-full aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden bg-stone-200 shadow-sm">
              <img 
                src="https://res.cloudinary.com/tkhv6b6p/image/upload/v1791141091/9e91eb85f896212dccaf39f0682c985c.jpg" 
                alt="Pre Wedding" 
                loading="eager" 
                fetchPriority="high"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              />
            </div>
            <div>
              <span className="font-clean text-[9px] uppercase tracking-widest text-amber-800 font-bold">[03]</span>
              <h4 className="font-editorial text-base sm:text-xl font-medium">Pre-Wedding Cinema</h4>
              <span className="font-clean text-[10px] uppercase tracking-wider text-stone-500 hidden sm:inline">Outdoor Locations</span>
            </div>
          </div>

          <div 
            onClick={() => setLightboxImg({ url: "https://res.cloudinary.com/tkhv6b6p/image/upload/v1791141093/vicky-photography-studio-nandauli-ayodhya-photographers-92bh153zha.avif", title: "Couple Wedding", category: "WEDDING" })}
            className="cursor-pointer group space-y-2 sm:space-y-3 md:-mt-12"
          >
            <div className="w-full aspect-[16/10] rounded-2xl overflow-hidden bg-stone-300">
              <img src="https://res.cloudinary.com/tkhv6b6p/image/upload/v1791141093/vicky-photography-studio-nandauli-ayodhya-photographers-92bh153zha.avif" alt="Wedding" loading="eager" fetchPriority="high" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div>
              <span className="font-clean text-[9px] uppercase tracking-widest text-amber-800 font-bold">[04]</span>
              <h4 className="font-editorial text-base sm:text-xl font-medium">Couple Wedding</h4>
              <span className="font-clean text-[10px] uppercase tracking-wider text-stone-600 hidden sm:inline">WEDDING</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. WEDDING COVERAGE SECTION (Dark Theme)
      ======================================================================== */}
      <section className="relative z-20 py-20 sm:py-28 px-6 sm:px-16 bg-[#0A0908] text-[#F6F3EE]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-12 sm:mb-16">
          <div className="space-y-2">
            <h2 className="font-editorial text-4xl sm:text-6xl font-light italic">
              Wedding Coverage
            </h2>
          </div>
          <div className="max-w-xl space-y-4">
            <p className="font-clean text-xs sm:text-sm text-stone-400 font-light leading-relaxed">
              Your wedding day is not a list of moments to caption — it's a feeling to be lived. At Kamal Digital Studio, we document weddings with absolute devotion to the real story of your day across Moradabad and beyond.
            </p>
            <div>
              <button
                onClick={() => setActiveTab && setActiveTab('services')}
                className="px-6 py-3 bg-transparent text-[#F6F3EE] font-clean text-[10px] uppercase tracking-[0.25em] border border-[#C5A059]/60 hover:bg-[#C5A059] hover:text-black transition-all duration-300 cursor-pointer font-bold"
              >
                LEARN MORE
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-4">
          {[
            "https://res.cloudinary.com/doa6d6cyf/image/upload/v1788587741/IMG_2859.JPG_kskybg.jpg",
            "https://res.cloudinary.com/doa6d6cyf/image/upload/v1787200591/IMG_5643.JPG_y7fuic.jpg",
            "https://res.cloudinary.com/doa6d6cyf/image/upload/v1784919032/Screenshot_2026-07-25_001554_tldmhh.jpg",
            "https://res.cloudinary.com/tkhv6b6p/image/upload/v1791140828/vicky-photography-studio-nandauli-ayodhya-photographers-d2gfw3ovz1.avif",
            "https://res.cloudinary.com/tkhv6b6p/image/upload/v1791140827/vicky-photography-studio-nandauli-ayodhya-photographers-rx9tzh0jtw.avif"
          ].map((imgUrl, i) => (
            <div key={i} className="w-full aspect-[3/5] rounded-xl overflow-hidden bg-stone-900 border border-[#C5A059]/30 group">
              <img src={imgUrl} alt={`Coverage ${i}`} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          5. QUESTIONS SECTION (Styled & Polished)
      ======================================================================== */}
      <section className="relative z-20 py-20 sm:py-28 px-6 sm:px-16 max-w-7xl mx-auto border-t border-stone-300">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-start">
          <div className="space-y-6 lg:sticky lg:top-28">
            <h2 className="font-editorial text-4xl sm:text-7xl font-light tracking-tight">
              Questions
            </h2>
            <p className="font-clean text-xs sm:text-sm text-stone-600 max-w-xs font-light leading-relaxed">
              Have questions? Find helpful answers to understand us and how our process makes design simple.
            </p>
            <div>
              <button
                onClick={() => setActiveTab && setActiveTab('contact')}
                className="px-6 py-3 bg-transparent text-[#1A1A1A] font-clean text-[10px] uppercase tracking-[0.25em] border border-stone-800 hover:bg-stone-900 hover:text-white transition-all duration-300 cursor-pointer font-bold"
              >
                ASK ME A QUESTION
              </button>
            </div>
          </div>

          <div className="divide-y divide-stone-300 border-t border-b border-stone-300">
            {faqList.map((faq, idx) => (
              <div key={idx} className="py-4 sm:py-5 transition-colors">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full text-left flex justify-between items-center gap-4 cursor-pointer focus:outline-none group"
                >
                  <span className="font-editorial text-lg sm:text-xl font-normal group-hover:text-amber-800 transition-colors">
                    {faq.q}
                  </span>
                  <span className="text-amber-800 p-2 rounded-full bg-stone-200/50 group-hover:bg-amber-100 transition-all">
                    {openFaq === idx ? <Minus size={14} /> : <Plus size={14} />}
                  </span>
                </button>
                {openFaq === idx && (
                  <p className="mt-3 font-clean text-xs sm:text-sm text-stone-600 font-light leading-relaxed pl-1 animate-fadeIn">
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. SHALL WE BEGIN? (Dark Theme CTA Banner)
      ======================================================================== */}
      <section className="relative z-20 w-full min-h-[70svh] sm:min-h-[80svh] bg-[#0A0908] text-[#F6F3EE] flex items-center justify-center overflow-hidden py-20 px-6 border-t border-[#C5A059]/20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://t3.ftcdn.net/jpg/03/38/79/70/360_F_338797073_CsO0jjvg8f8E9WqPJJn072tBwYrsFOcH.jpg" 
            alt="CTA Background" 
            loading="lazy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0A0908]/85" />
        </div>

        <div className="relative z-10 max-w-xl w-full mx-auto p-6 sm:p-14 bg-black/90 backdrop-blur-md rounded-2xl border border-[#C5A059]/40 text-center space-y-6 shadow-2xl">
          <h2 className="font-editorial text-3xl sm:text-5xl font-light italic tracking-wide text-[#E6C594]">
            SHALL WE BEGIN?
          </h2>
          <p className="font-clean text-xs sm:text-sm text-stone-300 font-light leading-relaxed">
            I'd love to work with you. In order to create from a place of inspiration, I accept a limited number of commissions each year. Inquire for collections and to reserve your date.
          </p>
          <div className="pt-2">
            <button
              onClick={() => setActiveTab && setActiveTab('contact')}
              className="px-8 py-4 bg-[#C5A059] hover:bg-[#b08b45] text-stone-950 font-clean text-[10px] uppercase tracking-[0.25em] font-bold rounded-full transition-all duration-300 cursor-pointer shadow-lg"
            >
              GET IN TOUCH
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          LIGHTBOX MODAL FOR IMAGES
      ======================================================================== */}
      {lightboxImg && (
        <div
          className="fixed inset-0 z-[99999] bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center p-4"
          onClick={() => setLightboxImg(null)}
        >
          <button
            onClick={() => setLightboxImg(null)}
            className="absolute top-6 right-6 z-50 px-5 py-2.5 rounded-full bg-white/10 text-white flex items-center gap-2 font-clean text-xs uppercase tracking-widest border border-white/20 transition-all cursor-pointer"
          >
            <span>Close</span>
            <X size={16} />
          </button>

          <div className="max-w-4xl max-h-[85vh] relative flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <img
              src={lightboxImg.url}
              alt="Kamal Digital Studio Masterpiece"
              className="max-w-full max-h-[75vh] object-contain rounded-2xl shadow-2xl border border-[#C5A059]/40"
            />
            <div className="mt-4 text-center text-white space-y-1">
              <span className="font-clean text-xs tracking-widest text-[#E6C594] uppercase block font-bold">
                {lightboxImg.category}
              </span>
              <h3 className="font-editorial text-2xl font-bold">{lightboxImg.title}</h3>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}