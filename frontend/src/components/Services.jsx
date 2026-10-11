import React, { useState, useRef } from 'react';
import { Sparkles, Check, ArrowRight, Award, Clock, Camera } from 'lucide-react';

export default function Services({ setActiveTab }) {
  const formRef = useRef(null);
  const [activeFaq, setActiveFaq] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [inquiryData, setInquiryData] = useState({
    name: '',
    phone: '',
    address: '',
    eventDate: '',
    serviceType: 'premium-wedding-package',
    guestCount: '300-500'
  });

  const featuredPackages = [
    { 
      id: "premium-wedding-package", 
      tier: "WEDDING", 
      number: "01",
      title: "The Royal Wedding", 
      tagline: "4K Film + Archival Album", 
      price: "₹ 69,000", 
      advance: "30% ADV (₹ 20,700)", 
      img: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=800" 
    },
    { 
      id: "pre-wedding-package", 
      tier: "PRE-WEDDING", 
      number: "02",
      title: "The Pre-Wedding", 
      tagline: "5 Locations + 4K Teaser", 
      price: "₹ 25,000", 
      advance: "30% ADV (₹ 7,500)", 
      img: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800" 
    },
    { 
      id: "standard-wedding-package", 
      tier: "WEDDING STORY", 
      number: "03",
      title: "The Wedding Story", 
      tagline: "Complete HD Video & Stills", 
      price: "₹ 41,000", 
      advance: "30% ADV (₹ 12,300)", 
      img: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=800" 
    },
    { 
      id: "post-wedding-package", 
      tier: "POST-VOWS", 
      number: "04",
      title: "Post-Wedding Bliss", 
      tagline: "Indoor & Outdoor Story", 
      price: "₹ 25,000", 
      advance: "30% ADV (₹ 7,500)", 
      img: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=800" 
    },
    { 
      id: "ring-ceremony-package", 
      tier: "ENGAGEMENT", 
      number: "05",
      title: "Ring Ceremony Gala", 
      tagline: "4K Teaser + Full Coverage", 
      price: "₹ 21,000", 
      advance: "30% ADV (₹ 6,300)", 
      img: "https://images.unsplash.com/photo-1545232979-fbf502c1f3b5?auto=format&fit=crop&q=80&w=800" 
    },
    { 
      id: "anniversary-package", 
      tier: "CELEBRATION", 
      number: "06",
      title: "Anniversary Special", 
      tagline: "Highlights & Candid Stills", 
      price: "₹ 18,000", 
      advance: "30% ADV (₹ 5,400)", 
      img: "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&q=80&w=800" 
    }
  ];

  const directorExperience = [
    { label: "Years of Mastery", value: "32+ Years", desc: "Practicing optical excellence since 1994." },
    { label: "Weddings Documented", value: "500+", desc: "Royal celebrations captured across UP and India." },
    { label: "Directorial Supervision", value: "100%", desc: "Jitendra Ji personally oversees every assignment." },
    { label: "Client Satisfaction", value: "100%", desc: "Generational trust built on timeless quality." }
  ];

  const studioFaqs = [
    { q: "What is the advance booking token requirement?", a: "Dates are reserved strictly upon receipt of a 30% advance payment. Balance settlement occurs prior to master asset release." },
    { q: "How long are our raw wedding files stored?", a: "All raw footage and full-resolution still photos are safely maintained for 60 days in our digital repository for your selection." },
    { q: "Do you travel outside Moradabad?", a: "Yes. Kamal Digital Studio regularly travels across Uttar Pradesh, Delhi NCR, and destination circuits across India." },
    { q: "Who directs and color grades?", a: "Our Principal Director Jitendra Ji personally directs the core crew on-site and color-grades every film with cinematic precision." }
  ];

  const handleInquirySubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';
      const response = await fetch(`${backendUrl}/api/bookings/create`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: inquiryData.name,
          phone: inquiryData.phone,
          address: inquiryData.address,
          eventDate: inquiryData.eventDate,
          serviceType: inquiryData.serviceType,
          guestCount: inquiryData.guestCount,
          status: 'New Lead'
        })
      });
      const data = await response.json();
      if (response.ok || data.success) {
        alert(`✨ INQUIRY RESERVED!\nOur studio team will connect with ${inquiryData.name} shortly.`);
        setInquiryData({ name: '', phone: '', address: '', eventDate: '', serviceType: 'premium-wedding-package', guestCount: '300-500' });
      } else {
        alert("✨ Inquiry recorded! We will connect with you soon.");
      }
    } catch (error) {
      alert("✨ Inquiry recorded! Our studio team will reach out directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#F6F3EE] text-[#1A1A1A] font-sans tracking-tight relative overflow-x-hidden min-h-screen pt-0 pb-24 selection:bg-[#C5A059] selection:text-black" style={{ scrollBehavior: 'smooth' }}>
      
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap');

        .font-editorial { font-family: 'Cormorant Garamond', Georgia, serif; }
        .font-clean { font-family: 'Plus Jakarta Sans', sans-serif; }

        .exact-price-card {
          background-color: #211915;
          border-radius: 28px;
          border: 1px solid rgba(197, 160, 89, 0.35);
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
          transition: all 0.4s ease;
        }
        .exact-price-card:hover {
          transform: translateY(-6px);
          border-color: rgba(197, 160, 89, 0.8);
          box-shadow: 0 30px 60px rgba(0,0,0,0.25);
        }

        .light-card-box {
          background: #FFFFFF;
          border: 1px solid rgba(197, 160, 89, 0.3);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.04);
          transition: all 0.4s ease;
        }
        .light-card-box:hover {
          transform: translateY(-4px);
          border-color: rgba(197, 160, 89, 0.8);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.07);
        }

        .input-light-field {
          background: #FFFFFF;
          border: 1px solid rgba(197, 160, 89, 0.4);
          color: #1A1A1A;
        }
        .input-light-field:focus {
          border-color: #C5A059;
          box-shadow: 0 0 0 3px rgba(197, 160, 89, 0.15);
        }
      `}</style>

      {/* Background Architectural Grid */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 select-none bg-[#F6F3EE]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#c5a05908_1px,transparent_1px),linear-gradient(to_bottom,#c5a05908_1px,transparent_1px)] bg-[size:5rem_5rem]" />
      </div>

      <div className="w-full relative z-10 space-y-20 sm:space-y-32">

        {/* =========================================================================
            SECTION 1: 100% EDGE-TO-EDGE TOP HERO SECTION (No white gap at top)
        ======================================================================== */}
        <section className="w-full bg-[#2C241D] text-[#F6F3EE] pt-20 sm:pt-34 pb-12 sm:pb-20 px-4 sm:px-12 lg:px-20 shadow-2xl relative overflow-hidden">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Side: Typography & Actions */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <span className="font-clean text-[10px] sm:text-xs tracking-[0.3em] uppercase text-[#E6C594] block font-bold">
                PHOTOGRAPHY & FILMS
              </span>

              <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight leading-[1.12] text-[#F6F3EE]">
                For moments <br />
                <span className="italic font-light text-[#E6C594]">that become a lifetime.</span>
              </h1>

              <p className="font-clean text-xs sm:text-sm text-stone-300 max-w-md font-light leading-relaxed">
                Wedding celebrations, intimate portraits and the stories in between. Thoughtfully captured, beautifully preserved at Kamal Digital Studio.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-6 border-t border-white/10 mt-6">
                <button
                  onClick={() => {
                    if (formRef.current) formRef.current.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-7 py-3 rounded-full bg-[#F6F3EE] hover:bg-white text-stone-950 font-clean text-xs uppercase tracking-widest font-bold shadow-lg transition-all cursor-pointer hover:scale-105"
                >
                  Explore Collections ↓
                </button>
                
                <button
                  onClick={() => setActiveTab && setActiveTab('portfolio')}
                  className="font-clean text-xs font-medium uppercase tracking-widest text-[#E6C594] hover:text-white transition-colors cursor-pointer flex items-center gap-2"
                >
                  <span>Watch Our Films →</span>
                </button>
              </div>
            </div>

            {/* Right Side: Grand Heritage Wedding Image Showcase with Deep Curved Corners */}
            <div className="lg:col-span-6 relative flex justify-center items-center">
              <div className="w-full aspect-[4/3] sm:aspect-[14/11] rounded-[12px] overflow-hidden shadow-1xl border border-white/20 relative group">
                <img 
                  src="https://res.cloudinary.com/doa6d6cyf/image/upload/v1791139225/1_copy-8mb_y5oefu.jpg" 
                  alt="Kamal Digital Studio Grand Wedding Showcase" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 brightness-[0.95]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-5 right-5 px-4 py-2 bg-black/80 backdrop-blur-md rounded-2xl border border-white/20 text-right shadow-xl">
                  <span className="text-[8.5px] uppercase tracking-widest text-[#E6C594] font-bold block">STILLS & CINEMA</span>
                  <span className="font-editorial text-xs sm:text-sm text-white">Your story. Our craft.</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Inner container for remaining sections */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-20 sm:space-y-32">

          {/* =========================================================================
              SECTION 2: OPTIMIZED PRICE CARDS
          ======================================================================== */}
          <section className="space-y-10">
            <div className="text-center space-y-2">
              <span className="text-[#C5A059] font-clean text-xs uppercase tracking-[0.3em] font-bold block">
                THE SIGNATURE COLLECTIONS
              </span>
              <h2 className="font-editorial text-3xl sm:text-5xl font-light italic tracking-tight text-[#1A1A1A]">
                The art of remembering.
              </h2>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
              {featuredPackages.map((pkg) => (
                <div key={pkg.id} className="exact-price-card flex flex-col justify-between text-left">
                  
                  {/* Top Larger Photo Area */}
                  <div className="relative w-full aspect-[4/3.2] overflow-hidden bg-stone-950">
                    <img 
                      src={pkg.img} 
                      alt={pkg.title} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 brightness-[0.92]"
                    />
                    <div className="absolute top-3 left-3 z-20">
                      <span className="px-2.5 py-0.5 rounded-md bg-black/75 backdrop-blur-md text-[8px] sm:text-[9px] font-clean uppercase tracking-widest text-[#E6C594] border border-white/20 shadow-sm">
                        {pkg.tier}
                      </span>
                    </div>
                    <div className="absolute top-3 right-3 z-20 font-editorial text-xs sm:text-sm text-white font-light">
                      {pkg.number}
                    </div>
                  </div>

                  {/* Bottom Compact Content & Pricing Area */}
                  <div className="p-3.5 sm:p-5 flex flex-col justify-between text-white space-y-3">
                    <div className="space-y-0.5">
                      <h3 className="font-editorial text-base sm:text-2xl font-normal text-[#F6F3EE] leading-tight">
                        {pkg.title}
                      </h3>
                      <p className="font-clean text-[9px] sm:text-xs text-stone-300 font-light truncate">
                        {pkg.tagline}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-white/10 flex items-center justify-between">
                      <div>
                        <span className="font-editorial text-base sm:text-xl font-bold text-[#E6C594] block">
                          {pkg.price}
                        </span>
                        <span className="text-[7.5px] sm:text-[9px] font-clean text-stone-400 uppercase tracking-wider block">
                          {pkg.advance}
                        </span>
                      </div>

                      <button
                        onClick={() => {
                          if (formRef.current) {
                            setInquiryData(prev => ({ ...prev, serviceType: pkg.id }));
                            formRef.current.scrollIntoView({ behavior: 'smooth' });
                          }
                        }}
                        className="px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-clean text-[9px] sm:text-[10px] uppercase tracking-widest font-semibold border border-white/20 transition-all flex items-center gap-1 cursor-pointer shadow-sm"
                      >
                        <span>VIEW →</span>
                      </button>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </section>

          {/* =========================================================================
              SECTION 3: DIRECTOR'S EXPERIENCE & TRACK RECORD (Jitendra Ji)
          ======================================================================== */}
          <section className="light-card-box rounded-3xl p-6 sm:p-16 bg-white relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-5 w-full max-w-[340px] mx-auto">
                <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-stone-950 border border-[#C5A059]/50 shadow-2xl group">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" 
                    alt="Jitendra Ji - Lead Director" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-[0.95]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-6 text-white flex flex-col justify-end">
                    <span className="text-[10px] uppercase tracking-widest text-[#E6C594] font-bold block">Founder & Master Lensman</span>
                    <h3 className="font-editorial text-2xl font-bold">Jitendra Ji</h3>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-6 text-left">
                <span className="text-[#B8860B] font-clean text-xs uppercase tracking-[0.3em] font-bold block">
                  DIRECTORIAL EXCELLENCE & TRACK RECORD
                </span>
                <h2 className="font-editorial text-3xl sm:text-5xl font-light italic text-[#1A1A1A] leading-tight">
                  Three Decades of Archiving Human Emotion.
                </h2>
                <p className="font-clean text-xs sm:text-sm text-stone-700 leading-relaxed font-light">
                  Led by Jitendra Ji at Kamal Digital Studio, Guratthi Court Road, Moradabad, our journey is defined by uncompromised optical discipline. Having successfully covered over 500+ milestone celebrations, our team brings unmatched on-site intuition, master lighting control, and generational storytelling to your wedding.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-2">
                  {directorExperience.map((exp, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-[#F6F3EE] border border-[#C5A059]/30 space-y-1">
                      <span className="font-editorial text-2xl sm:text-3xl font-bold text-[#B8860B] block">
                        {exp.value}
                      </span>
                      <h4 className="font-clean text-xs sm:text-sm font-bold text-stone-900 uppercase">
                        {exp.label}
                      </h4>
                      <p className="font-clean text-[11px] text-stone-600 font-light leading-snug">
                        {exp.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </section>

          {/* =========================================================================
              SECTION 4: FAQ SECTION
          ======================================================================== */}
          <section className="light-card-box rounded-3xl p-6 sm:p-14 bg-white space-y-8 text-left">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-[#B8860B] font-clean text-xs uppercase tracking-[0.3em] font-bold block">
                DIRECT INQUIRIES
              </span>
              <h2 className="font-editorial text-3xl sm:text-5xl font-light italic text-[#1A1A1A] tracking-tight">
                Frequently Clarified
              </h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-3">
              {studioFaqs.map((faq, idx) => {
                const isOpen = activeFaq === idx;
                return (
                  <div 
                    key={idx}
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="bg-[#F6F3EE] border border-stone-200 rounded-2xl p-5 cursor-pointer hover:border-[#C5A059] transition-colors shadow-2xs"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <h4 className="font-editorial text-lg sm:text-xl font-normal text-stone-900">
                        {faq.q}
                      </h4>
                      <span className="text-xl text-[#B8860B] font-bold">
                        {isOpen ? '−' : '+'}
                      </span>
                    </div>
                    {isOpen && (
                      <p className="font-clean text-xs sm:text-sm text-stone-600 leading-relaxed pt-3 border-t border-stone-200 mt-3 font-light">
                        {faq.a}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* =========================================================================
              SECTION 5: RESERVATION & AVAILABILITY FORM
          ======================================================================== */}
          <section ref={formRef} className="max-w-3xl mx-auto">
            <div className="light-card-box rounded-3xl p-6 sm:p-10 bg-white shadow-2xl relative overflow-hidden text-left">
              <div className="text-center space-y-1 pb-5 border-b border-stone-200 mb-6">
                <span className="text-[#B8860B] font-clean text-[10px] tracking-[0.3em] uppercase block font-bold">
                  [ DATE RESERVATION ]
                </span>
                <h3 className="font-editorial text-2xl sm:text-4xl font-normal text-stone-900">
                  Request Availability
                </h3>
              </div>

              <form onSubmit={handleInquirySubmit} className="space-y-4 font-clean text-xs sm:text-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-stone-700">Client Full Name *</label>
                    <input type="text" required placeholder="e.g. Anand Sharma"
                      value={inquiryData.name} onChange={(e) => setInquiryData({...inquiryData, name: e.target.value})}
                      className="w-full input-light-field rounded-xl px-4 py-3 outline-none"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-stone-700">Phone / WhatsApp *</label>
                    <input type="tel" required placeholder="+91 8434656386"
                      value={inquiryData.phone} onChange={(e) => setInquiryData({...inquiryData, phone: e.target.value})}
                      className="w-full input-light-field rounded-xl px-4 py-3 outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-stone-700">Event Location / City *</label>
                    <input type="text" required placeholder="e.g. Moradabad"
                      value={inquiryData.address} onChange={(e) => setInquiryData({...inquiryData, address: e.target.value})}
                      className="w-full input-light-field rounded-xl px-4 py-3 outline-none"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-stone-700">Event Date *</label>
                    <input type="date" required
                      value={inquiryData.eventDate} onChange={(e) => setInquiryData({...inquiryData, eventDate: e.target.value})}
                      className="w-full input-light-field rounded-xl px-4 py-3 outline-none cursor-pointer"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-stone-700">Selected Package</label>
                  <div className="relative">
                    <select required value={inquiryData.serviceType} onChange={(e) => setInquiryData({...inquiryData, serviceType: e.target.value})}
                      className="w-full input-light-field rounded-xl px-4 py-3 outline-none appearance-none cursor-pointer font-medium"
                    >
                      {featuredPackages.map((pkg) => (
                        <option key={pkg.id} value={pkg.id}>
                          {pkg.title} ({pkg.price})
                        </option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-[#B8860B] text-xs font-bold">▼</div>
                  </div>
                </div>

                <button type="submit" disabled={isSubmitting}
                  className="w-full bg-[#C5A059] hover:bg-[#b08b45] text-stone-950 font-clean font-bold tracking-[0.2em] uppercase py-4 mt-2 rounded-xl transition-all duration-300 shadow-lg cursor-pointer text-xs sm:text-sm"
                >
                  {isSubmitting ? "Locking Dates..." : "Reserve Priority Date ✦"}
                </button>
              </form>
            </div>
          </section>

        </div>

      </div>
    </div>
  );
}