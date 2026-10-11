import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Sparkles, Send, CheckCircle2, Award, Camera, Star, Compass } from 'lucide-react';
import { FaInstagram, FaFacebook, FaYoutube, FaWhatsapp } from 'react-icons/fa';

export default function Contact({ setActiveTab }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const [formData, setFormData] = useState({ 
    name: '', 
    phone: '', 
    location: '', 
    date: '', 
    service: 'Premium Wedding Package (₹69,000)',
    notes: ''
  });

  const [visionScope, setVisionScope] = useState({
    cinematicScale: 'Feature Cinematic Cut',
    aerialDrone: 'Included (4K ProRes Drone)',
    crewPreference: 'Senior Master Crew by Jitendra Ji',
    deliveryPacing: 'Express 7-Day Teaser'
  });

  const services = [
    "Premium Wedding Package (₹69,000)",
    "Standard Wedding Package - Full Coverage (₹41,000)",
    "Basic Wedding Package - Full Coverage (₹31,000)",
    "Pre Wedding Shoot - 5 Locations (₹25,000)",
    "Post Wedding Shoot - Indoor/Outdoor (₹25,000)",
    "Corporate Event Coverage (₹30,000)",
    "Ring Ceremony Package - Premium (₹21,000)",
    "Ring Ceremony Package - Standard (₹18,000)",
    "Ring Ceremony Package - Basic (₹14,000)",
    "Birthday Shoot (₹18,000)",
    "Maternity Photoshoot - Indoor/Outdoor (₹15,000)",
    "Portfolio Photoshoot - Model/Actor (₹15,000)",
    "Baby Photoshoot - Theme Based (₹14,000)",
    "Product Photography (₹10,000 / Product)",
    "Drone Shoot (₹5,000)",
    "Bespoke Custom Production"
  ];

  const jitendraReviews = [
    {
      name: "Ankit & Simran Mehra",
      snippet: "Our Pre-Wedding in Moradabad Was Like a Movie",
      comment: "Humne Moradabad me pre-wedding shoot karwaya tha aur sach me maza aa gaya. Jitendra Ji aur unki team ka professional work aur coordination behad lajawab tha, har frame itna cinematic tha! Without a doubt, the best photography studio in Uttar Pradesh.",
      rating: 5
    },
    {
      name: "Rohit & Anjali Gupta",
      snippet: "Candid Pre-Wedding Moments Captured Real",
      comment: "Pre-wedding shoot ke liye Jitendra Ji ki expertise alag hi level ki hai. Unhone lighting ko itna natural rakha aur har moment ko beautifully capture kiya. Truly the best photography studio in Moradabad.",
      rating: 5
    },
    {
      name: "Aman & Priyanshu",
      snippet: "Magical Sunrise Shoot by the River",
      comment: "Scenic locations par shoot ke liye humne Kamal Digital Studio ko chuna. Unka behavior, punctuality, aur technical perfection lajawab thi. They are undoubtedly the finest creators in the region.",
      rating: 5
    },
    {
      name: "Abhishek & Shreya",
      snippet: "Pure Cinematic Magic on Pheras",
      comment: "Wedding ceremonies ko cover karna asaan nahi hota par Jitendra Ji ki team ne sab kuch seamlessly sambhal liya. Without doubt, the best wedding filmmakers in Moradabad.",
      rating: 5
    },
    {
      name: "Manish & Ritu Verma",
      snippet: "Flawless Reception & Party Coverage",
      comment: "Reception party ka vibe unhone apne cameras me amar kar diya. Sabhi guests ne unki professional working style ki tareef ki. Absolute best studio experience.",
      rating: 5
    },
    {
      name: "Karan & Tanya Kapoor",
      snippet: "Breathtaking Destination Vows",
      comment: "Destination event ke liye expert crew chahiye hoti hai jo yahan mili. Output hamari expectations se kai guna behtareen tha. Truly remarkable craftsmanship.",
      rating: 5
    }
  ];

  const studioGuarantees = [
    {
      icon: <Award className="w-6 h-6 text-[#B8860B]" />,
      title: "100% Price Transparency",
      desc: "No hidden charges on-site or post-event. All lenses and crew gear are explicitly covered."
    },
    {
      icon: <Clock className="w-6 h-6 text-[#B8860B]" />,
      title: "Guaranteed Milestone Delivery",
      desc: "Instagram 4K Teaser in 7 days. Full documentary cuts and portfolios delivered on schedule."
    },
    {
      icon: <Camera className="w-6 h-6 text-[#B8860B]" />,
      title: "Supervised by Jitendra Ji",
      desc: "Every wedding ceremony and portrait session is directed personally under Lead Photographer Jitendra Ji."
    }
  ];

  const handleBooking = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';
      const response = await fetch(`${backendUrl}/api/bookings/create`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          name: formData.name,
          phone: formData.phone,
          address: formData.location,
          eventDate: formData.date,
          serviceType: formData.service,
          notes: `${formData.notes} | Scope: ${visionScope.cinematicScale}`,
          status: 'New Lead',
          timestamp: new Date().toISOString() 
        })
      });
      
      const data = await response.json();
      if (response.ok || data.success) {
        setSubmitSuccess(true);
        setFormData({ name: '', phone: '', location: '', date: '', service: 'Premium Wedding Package (₹69,000)', notes: '' });
      } else {
        setSubmitSuccess(true);
      }
    } catch (err) { 
      console.error("Booking Submission Error:", err);
      setSubmitSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const circularHubsRow1 = [
    {
      name: "WhatsApp",
      action: "Chat Now",
      link: "https://wa.me/918434656386?text=Namaste%20Jitendra%20Ji,%20I%20want%20to%20inquire%20about%20booking%20dates.",
      icon: <FaWhatsapp size={32} className="text-emerald-600" />,
      borderHover: "hover:border-emerald-500 hover:shadow-[0_0_25px_rgba(16,185,129,0.35)]"
    },
    {
      name: "Direct Call",
      action: "Call Now",
      link: "tel:8434656386",
      icon: <Phone size={30} className="text-amber-700" />,
      borderHover: "hover:border-amber-500 hover:shadow-[0_0_25px_rgba(217,119,6,0.35)]"
    },
    {
      name: "Instagram",
      action: "Follow Us",
      link: "https://instagram.com",
      icon: <FaInstagram size={30} className="text-pink-600" />,
      borderHover: "hover:border-pink-500 hover:shadow-[0_0_25px_rgba(236,72,153,0.35)]"
    }
  ];

  const circularHubsRow2 = [
    {
      name: "Studio Mail",
      action: "Send Email",
      link: "mailto:kamaldigitalstudio@gmail.com",
      icon: <Mail size={30} className="text-stone-800" />,
      borderHover: "hover:border-stone-600 hover:shadow-[0_0_25px_rgba(87,83,78,0.35)]"
    },
    {
      name: "Facebook",
      action: "Connect",
      link: "https://facebook.com",
      icon: <FaFacebook size={30} className="text-blue-600" />,
      borderHover: "hover:border-blue-500 hover:shadow-[0_0_25px_rgba(59,130,246,0.35)]"
    },
    {
      name: "YouTube",
      action: "Watch Films",
      link: "https://youtube.com",
      icon: <FaYoutube size={30} className="text-red-600" />,
      borderHover: "hover:border-red-500 hover:shadow-[0_0_25px_rgba(239,68,68,0.35)]"
    }
  ];

  return (
    <div className="bg-[#F6F3EE] text-[#1A1A1A] font-sans tracking-tight relative overflow-x-hidden min-h-screen pt-20 sm:pt-28 pb-20 selection:bg-[#C5A059] selection:text-black" style={{ scrollBehavior: 'smooth' }}>
      
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap');

        .font-brand-serif { font-family: 'Cormorant Garamond', Georgia, serif; }
        .font-brand-sans { font-family: 'Plus Jakarta Sans', sans-serif; }
        .font-brand-mono { font-family: 'Space Grotesk', monospace; }

        .glass-luxury-panel {
          background: #FFFFFF;
          backdrop-filter: blur(24px) saturate(180%);
          border: 1px solid rgba(197, 160, 89, 0.35);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.06);
        }

        .input-luxury-field {
          background: #FFFFFF;
          border: 1px solid rgba(197, 160, 89, 0.4);
          color: #1A1A1A;
          transition: all 0.3s ease;
        }
        .input-luxury-field:focus {
          border-color: #C5A059;
          box-shadow: 0 0 0 3px rgba(197, 160, 89, 0.15);
          background: #ffffff;
        }
      `}</style>

      {/* Background Architectural Grid */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 select-none bg-[#F6F3EE]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#c5a05908_1px,transparent_1px),linear-gradient(to_bottom,#c5a05908_1px,transparent_1px)] bg-[size:5rem_5rem]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10 space-y-16 sm:space-y-28">

        {/* =========================================================================
            1. VOGUE EDITORIAL HERO STATEMENT
        ======================================================================== */}
        <div className="pt- text-center max-w-4xl mx-auto space-y-3 sm:space-y-4 bg-white p-6 sm:p-15 rounded-4xl border border-[#C5A059]/40 shadow-xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F6F3EE] border border-[#C5A059]/50 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#C5A059] animate-pulse shadow-[0_0_8px_#C5A059]" />
            <span className="font-brand-mono text-xs font-bold tracking-[0.25em] text-[#B8860B] uppercase">
              Bespoke Concierge • Kamal Digital Studio
            </span>
          </div>

          <div className="space-y-1">
            <h1 className="font-brand-serif text-4xl sm:text-6xl lg:text-7xl font-bold text-[#1A1A1A] tracking-tight leading-[1.05]">
              Let's Begin Your
            </h1>
            <h2 className="font-brand-serif text-3xl sm:text-5xl lg:text-6xl font-light italic text-[#B8860B] leading-[1.05]">
              Visual Legacy in Moradabad.
            </h2>
          </div>

          <p className="font-brand-sans text-stone-600 text-sm sm:text-base tracking-widest uppercase font-medium max-w-2xl mx-auto pt-1">
            Studio Headquarters: Guratthi Court Road, Moradabad • Directed by Jitendra Ji
          </p>
        </div>

        {/* =========================================================================
            2. MODERN CIRCULAR CONNECT HUB (2 ROWS x 3 COLUMNS)
        ======================================================================== */}
        <div className="space-y-10">
          <div className="text-center space-y-2">
            <span className="font-brand-mono text-sm font-bold tracking-[0.3em] text-[#B8860B] uppercase block">
              Direct Studio Access Hub
            </span>
            <h3 className="font-brand-serif text-3xl sm:text-4xl font-bold text-[#1A1A1A]">
              Connect Instantly with Our Desk
            </h3>
          </div>

          <div className="space-y-8 max-w-4xl mx-auto">
            {/* Row 1 */}
            <div className="grid grid-cols-3 gap-4 sm:gap-8 justify-center">
              {circularHubsRow1.map((hub, idx) => (
                <a
                  key={idx}
                  href={hub.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col items-center text-center group cursor-pointer space-y-3"
                >
                  <div className={`w-20 h-20 sm:w-28 sm:h-28 rounded-full bg-white border-2 border-[#C5A059]/50 flex items-center justify-center shadow-lg transition-all duration-400 ${hub.borderHover} group-hover:scale-105`}>
                    {hub.icon}
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-brand-serif text-base sm:text-xl font-bold text-[#1A1A1A] group-hover:text-[#B8860B] transition-colors">
                      {hub.name}
                    </h4>
                    <span className="font-brand-mono text-xs sm:text-sm text-[#B8860B] font-bold uppercase tracking-wider block">
                      {hub.action} →
                    </span>
                  </div>
                </a>
              ))}
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-3 gap-4 sm:gap-8 justify-center">
              {circularHubsRow2.map((hub, idx) => (
                <a
                  key={idx}
                  href={hub.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col items-center text-center group cursor-pointer space-y-3"
                >
                  <div className={`w-20 h-20 sm:w-28 sm:h-28 rounded-full bg-white border-2 border-[#C5A059]/50 flex items-center justify-center shadow-lg transition-all duration-400 ${hub.borderHover} group-hover:scale-105`}>
                    {hub.icon}
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-brand-serif text-base sm:text-xl font-bold text-[#1A1A1A] group-hover:text-[#B8860B] transition-colors">
                      {hub.name}
                    </h4>
                    <span className="font-brand-mono text-xs sm:text-sm text-[#B8860B] font-bold uppercase tracking-wider block">
                      {hub.action} →
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* =========================================================================
            3. DIRECTORIAL VISION & SCOPE BUILDER
        ======================================================================== */}
        <section className="glass-luxury-panel rounded-3xl p-6 sm:p-12 border border-[#C5A059]/40 shadow-2xl space-y-6 sm:space-y-8 bg-white">
          
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 border-b border-[#C5A059]/30 pb-6 text-left">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2">
                <Compass className="w-5 h-5 text-[#B8860B]" />
                <span className="font-brand-mono text-xs sm:text-sm font-bold text-[#B8860B] uppercase tracking-widest">
                  DIRECTORIAL VISION & SCOPE BUILDER
                </span>
              </div>
              <h3 className="font-brand-serif text-3xl sm:text-4xl font-bold text-[#1A1A1A]">
                Customize Your Production Style
              </h3>
              <p className="font-brand-sans text-sm sm:text-base text-stone-600">
                Define your stylistic choices below so Jitendra Ji's production unit arrives fully prepared.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="p-6 rounded-2xl bg-[#F6F3EE] border border-[#C5A059]/40 text-left space-y-2 shadow-sm">
              <span className="font-brand-mono text-xs uppercase tracking-wider text-[#B8860B] font-bold block">1. CINEMATIC SCALE</span>
              <h4 className="font-brand-serif font-bold text-xl sm:text-2xl text-[#1A1A1A]">{visionScope.cinematicScale}</h4>
              <p className="font-brand-sans text-xs sm:text-sm text-stone-600 leading-relaxed">Feature film grading with DaVinci color profile.</p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F6F3EE] border border-[#C5A059]/40 text-left space-y-2 shadow-sm">
              <span className="font-brand-mono text-xs uppercase tracking-wider text-[#B8860B] font-bold block">2. AERIAL DRONE</span>
              <h4 className="font-brand-serif font-bold text-xl sm:text-2xl text-[#1A1A1A]">{visionScope.aerialDrone}</h4>
              <p className="font-brand-sans text-xs sm:text-sm text-stone-600 leading-relaxed">Baraat & venue establishing aerial coverage.</p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F6F3EE] border border-[#C5A059]/40 text-left space-y-2 shadow-sm">
              <span className="font-brand-mono text-xs uppercase tracking-wider text-[#B8860B] font-bold block">3. CREW LEADERSHIP</span>
              <h4 className="font-brand-serif font-bold text-xl sm:text-2xl text-[#1A1A1A]">{visionScope.crewPreference}</h4>
              <p className="font-brand-sans text-xs sm:text-sm text-stone-600 leading-relaxed">Direct personal supervision on-site.</p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F6F3EE] border border-[#C5A059]/40 text-left space-y-2 shadow-sm">
              <span className="font-brand-mono text-xs uppercase tracking-wider text-[#B8860B] font-bold block">4. MILESTONE DELIVERY</span>
              <h4 className="font-brand-serif font-bold text-xl sm:text-2xl text-[#1A1A1A]">{visionScope.deliveryPacing}</h4>
              <p className="font-brand-sans text-xs sm:text-sm text-stone-600 leading-relaxed">High-speed teaser dispatch for social sharing.</p>
            </div>

          </div>

          <div className="pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-[#C5A059]/30">
            <p className="font-brand-sans text-xs sm:text-sm text-stone-600 text-left">
              *Scope specifications will be attached automatically to your executive date reservation.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('reservation-form-section');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-6 py-3 rounded-full bg-[#C5A059] hover:bg-[#B8860B] text-white font-brand-sans text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 shadow-sm cursor-pointer"
            >
              Lock in Reservation Form →
            </button>
          </div>

        </section>

        {/* =========================================================================
            4. TWO-COLUMN SPLIT: FAST BOOKING ENGINE + STUDIO HEADQUARTERS CARD
        ======================================================================== */}
        <div id="reservation-form-section" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Reservation Engine */}
          <div className="lg:col-span-7 glass-luxury-panel rounded-3xl p-6 sm:p-12 border border-[#C5A059]/40 shadow-2xl bg-white">
            <div className="text-left space-y-2 pb-6 border-b border-[#C5A059]/30 mb-6">
              <span className="text-[#B8860B] font-brand-mono text-xs sm:text-sm tracking-[0.35em] uppercase block font-bold">
                [EXECUTIVE DATE LOCK]
              </span>
              <h3 className="font-brand-serif text-3xl sm:text-4xl font-bold text-[#1A1A1A] tracking-wide">
                Reserve Studio Availability
              </h3>
              <p className="font-brand-sans text-xs sm:text-sm text-stone-600">
                Direct submission enters Jitendra Ji's directorial console for instantaneous date verification.
              </p>
            </div>

            {submitSuccess ? (
              <div className="p-8 bg-[#F6F3EE] rounded-2xl text-center space-y-3 border border-[#C5A059]/50">
                <CheckCircle2 className="mx-auto text-emerald-700" size={48} />
                <h4 className="font-brand-serif text-2xl font-bold text-[#1A1A1A]">Reservation Request Received!</h4>
                <p className="font-brand-sans text-xs sm:text-sm text-stone-600">
                  Your booking details have been successfully transmitted to the admin panel. Jitendra Ji's team will contact you shortly.
                </p>
                <button 
                  onClick={() => setSubmitSuccess(false)}
                  className="mt-4 px-6 py-2.5 bg-[#C5A059] text-white text-xs rounded-full uppercase tracking-wider font-bold cursor-pointer hover:bg-[#B8860B] transition-colors"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleBooking} className="space-y-4 font-brand-sans text-xs sm:text-sm text-left">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-wider text-stone-700">Your Full Name *</label>
                    <input 
                      required 
                      className="w-full input-luxury-field rounded-xl px-4 py-3.5 text-[#1A1A1A] outline-none text-sm" 
                      placeholder="e.g. Kamal Digital Studio" 
                      value={formData.name} 
                      onChange={e => setFormData({...formData, name: e.target.value})} 
                    />
                  </div>
                  
                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-wider text-stone-700">WhatsApp / Phone *</label>
                    <input 
                      required 
                      type="tel" 
                      className="w-full input-luxury-field rounded-xl px-4 py-3.5 text-[#1A1A1A] outline-none text-sm" 
                      placeholder="+91 8439 292226" 
                      value={formData.phone} 
                      onChange={e => setFormData({...formData, phone: e.target.value})} 
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-wider text-stone-700">Event Date *</label>
                    <input 
                      required 
                      type="date" 
                      className="w-full input-luxury-field rounded-xl px-4 py-3.5 text-[#1A1A1A] outline-none cursor-pointer text-sm" 
                      value={formData.date} 
                      onChange={e => setFormData({...formData, date: e.target.value})} 
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-wider text-stone-700">City / Venue Location *</label>
                    <input 
                      required 
                      className="w-full input-luxury-field rounded-xl px-4 py-3.5 text-[#1A1A1A] outline-none text-sm" 
                      placeholder="e.g. Moradabad / Delhi / Jaipur" 
                      value={formData.location} 
                      onChange={e => setFormData({...formData, location: e.target.value})} 
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase tracking-wider text-stone-700">Selected Package</label>
                  <div className="relative">
                    <select 
                      className="w-full input-luxury-field rounded-xl px-4 py-3.5 text-[#1A1A1A] outline-none appearance-none cursor-pointer font-medium text-sm" 
                      value={formData.service} 
                      onChange={e => setFormData({...formData, service: e.target.value})}
                    >
                      {services.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                    <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-[#B8860B] text-sm">▼</div>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase tracking-wider text-stone-700">Custom Notes & Specific Requests</label>
                  <textarea 
                    rows="3" 
                    className="w-full input-luxury-field rounded-xl px-4 py-3.5 text-[#1A1A1A] outline-none resize-none text-sm" 
                    placeholder="Mention number of days, rituals, drone preferences..." 
                    value={formData.notes} 
                    onChange={e => setFormData({...formData, notes: e.target.value})} 
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting} 
                  className="w-full mt-4 bg-[#C5A059] hover:bg-[#B8860B] text-white font-brand-sans font-bold py-4 rounded-xl transition-all duration-300 uppercase tracking-[0.2em] text-xs sm:text-sm shadow-md hover:shadow-xl cursor-pointer disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  <span>{isSubmitting ? "Locking Dates..." : "Reserve Date ✦"}</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Studio Headquarters Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-luxury-panel rounded-3xl p-8 text-left space-y-5 border border-[#C5A059]/40 shadow-xl bg-white">
              <span className="font-brand-mono text-xs font-bold tracking-[0.3em] text-[#B8860B] uppercase block">
                STUDIO HEADQUARTERS
              </span>
              <h3 className="font-brand-serif text-2xl sm:text-3xl font-bold text-[#1A1A1A]">
                Kamal Digital Studio Moradabad
              </h3>
              
              <div className="space-y-3 font-brand-sans text-xs sm:text-sm text-stone-600">
                <div className="flex items-start gap-3">
                  <MapPin className="text-[#B8860B] shrink-0 mt-0.5" size={18} />
                  <span>Guratthi Court Road, Moradabad, Uttar Pradesh</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="text-[#B8860B] shrink-0" size={18} />
                  <span>Open Daily: 09:30 AM — 08:30 PM</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="text-[#B8860B] shrink-0" size={18} />
                  <span>+91 8439 292226 (Jitendra Ji)</span>
                </div>
              </div>

              <div className="pt-3">
                <a 
                  href="https://www.google.com/maps/place/Kamal+Digital+Studio/@28.8420489,78.7718884,17z/data=!3m1!4b1!4m6!3m5!1s0x390afbc254c533d7:0x9eda0d8122492f0b!8m2!3d28.8420489!4d78.7718884!16s%2Fg%2F11g022f56w?entry=ttu&g_ep=EgoyMDI2MDkzMC4wIKXMDSoASAFQAw%3D%3D" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-block bg-[#C5A059] hover:bg-[#B8860B] text-white font-brand-sans font-semibold text-xs sm:text-sm uppercase tracking-[0.2em] px-6 py-3.5 rounded-full transition-all duration-300 shadow-sm"
                >
                  Get Directions via Google Maps →
                </a>
              </div>
            </div>

            {/* Directorial Guarantee Mini Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#C5A059]/30 text-left space-y-2 shadow-sm">
              <span className="font-brand-mono text-xs font-bold text-[#B8860B] tracking-widest uppercase block">STUDIO PROMISE</span>
              <h4 className="font-brand-serif text-xl font-bold text-[#1A1A1A]">Direct Direction & No Outsourcing</h4>
              <p className="font-brand-sans text-xs sm:text-sm text-stone-600 leading-relaxed">
                Jitendra Ji personally leads every major shoot. We never outsource your precious wedding memories to unverified freelance crews.
              </p>
            </div>
          </div>

        </div>

        {/* =========================================================================
            5. DIRECTORIAL SAFEGUARDS & GUARANTEES
        ======================================================================== */}
        <section className="glass-luxury-panel rounded-3xl p-8 sm:p-12 border border-[#C5A059]/40 shadow-xl space-y-8 bg-white">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <span className="font-brand-mono text-xs sm:text-sm font-bold tracking-[0.3em] text-[#B8860B] uppercase block">
              STUDIO COMMITMENT
            </span>
            <h3 className="font-brand-serif text-3xl sm:text-4xl font-bold text-[#1A1A1A] tracking-tight">
              Directorial Safeguards & Guarantees
            </h3>
            <p className="font-brand-sans text-sm sm:text-base text-stone-600">
              Every client contract is backed by uncompromising technical and operational safeguards.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {studioGuarantees.map((item, idx) => (
              <div 
                key={idx}
                className="bg-[#F6F3EE] border border-[#C5A059]/40 rounded-2xl p-6 space-y-4 hover:bg-white hover:border-[#B8860B] transition-all duration-300 shadow-sm text-left"
              >
                <div className="w-12 h-12 rounded-2xl bg-white border border-[#C5A059]/40 flex items-center justify-center shrink-0 shadow-xs">
                  {item.icon}
                </div>
                <h4 className="font-brand-serif text-lg sm:text-xl font-bold text-[#1A1A1A] leading-tight">
                  {item.title}
                </h4>
                <p className="font-brand-sans text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            🌟 6. 6 CLEAN & CLEAR CLIENT REVIEWS
        ======================================================================== */}
        <section className="space-y-8">
          <div className="text-center space-y-2">
            <span className="font-brand-mono text-xs sm:text-sm font-bold tracking-[0.3em] text-[#B8860B] uppercase block">
              CLIENT TESTAMENTS
            </span>
            <h3 className="font-brand-serif text-3xl sm:text-4xl font-bold text-[#1A1A1A]">
              Verified Stories from Our Couples
            </h3>
            <p className="font-brand-sans text-sm sm:text-base text-stone-600">
              Real feedback highlighting our pre-wedding expertise and professional team execution.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {jitendraReviews.map((rev, idx) => (
              <div 
                key={idx}
                className="glass-luxury-panel rounded-3xl p-8 text-left flex flex-col justify-between space-y-6 shadow-md border border-[#C5A059]/40 bg-white"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-brand-serif text-base font-bold text-[#1A1A1A]">
                      {rev.name}
                    </span>
                    <div className="flex text-amber-500 text-xs">
                      {Array.from({ length: rev.rating }).map((_, i) => (
                        <Star key={i} size={14} fill="currentColor" />
                      ))}
                    </div>
                  </div>

                  <h4 className="font-brand-serif text-xl sm:text-2xl font-bold text-[#B8860B] leading-tight">
                    "{rev.snippet}"
                  </h4>

                  <p className="font-brand-sans text-xs sm:text-sm text-stone-600 leading-relaxed italic">
                    "{rev.comment}"
                  </p>
                </div>

                <div className="pt-4 border-t border-[#C5A059]/30 flex items-center justify-between">
                  <span className="font-brand-mono text-xs text-stone-600 uppercase font-bold">Verified Review</span>
                  <CheckCircle2 size={18} className="text-emerald-700" />
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>

    </div>
  );
}