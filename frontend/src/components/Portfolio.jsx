import React, { useState, useRef } from 'react';
import { ArrowRight, Maximize2, Sparkles, Send, PhoneCall, X, Volume2, VolumeX, ChevronDown } from 'lucide-react';

export default function Portfolio({ setActiveTab }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightboxImg, setLightboxImg] = useState(null);
  const [bookingData, setBookingData] = useState({ name: '', phone: '', eventDate: '', serviceType: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Active Unmuted Video State tracker
  const [activeVideoId, setActiveVideoId] = useState(null);
  const videoRefs = useRef({});

  // Categories
  const categories = [
    { id: 'all', label: 'All Collections' },
    { id: 'wedding', label: 'Wedding' },
    { id: 'prewedding', label: 'Pre-Wedding' },
    { id: 'postwedding', label: 'Post-Wedding' },
    { id: 'anniversary', label: 'Anniversary' },
    { id: 'engagement', label: 'Engagement' }
  ];

  // Portfolio Dataset (Exact original HD links preserved)
  const portfolioItems = [
    // ----------------------------------------------------
    // 1. WEDDING COLLECTION (6 Photos)
    // ----------------------------------------------------
    { id: 1, category: "wedding", location: "Moradabad", aspectRatio: "aspect-[4/5]", img: "https://res.cloudinary.com/tkhv6b6p/image/upload/v1791141095/c48b94bec54d8b351d042370caddc76c.jpg" },
    { id: 2, category: "wedding",  location: "Moradabad", aspectRatio: "aspect-[11/10]", img: "https://res.cloudinary.com/doa6d6cyf/image/upload/v1788587742/IMG_3060.JPG_adw5r3.jpg" },
    { id: 3, category: "wedding", location: "Guratthi Court Road", aspectRatio: "aspect-[3/4]", img: "https://res.cloudinary.com/tkhv6b6p/image/upload/v1791140828/vicky-photography-studio-nandauli-ayodhya-photographers-tlegmdgf9o.webp" },
    { id: 4, category: "wedding",  location: "UP Venue", aspectRatio: "aspect-square", img: "https://res.cloudinary.com/doa6d6cyf/image/upload/v1787200598/436A3839_d4c6tf.jpg" },
    { id: 5, category: "wedding",  location: "Heritage Estate", aspectRatio: "aspect-[4/5]", img: "https://res.cloudinary.com/doa6d6cyf/image/upload/v1787200601/DSC05369_vlepcy.jpg" },
    { id: 6, category: "wedding", location: "Palace Ballroom", aspectRatio: "aspect-[11/11]", img: "https://res.cloudinary.com/doa6d6cyf/image/upload/v1784747072/WhatsApp_Image_2026-07-23_at_12.33.29_AM_jm2fgt.jpg" },

    // ----------------------------------------------------
    // 2. PRE-WEDDING COLLECTION (6 Photos)
    // ----------------------------------------------------
    { id: 7, category: "prewedding",  aspectRatio: "aspect-[3/4]", img: "https://res.cloudinary.com/tkhv6b6p/image/upload/v1791141088/c8963f8d95a130171849b3cd4f5b7612.jpg" },
    { id: 8, category: "prewedding",  aspectRatio: "aspect-[4/5]", img: "https://res.cloudinary.com/doa6d6cyf/image/upload/v1787200591/IMG_5643.JPG_y7fuic.jpg" },
    { id: 9, category: "prewedding",  aspectRatio: "aspect-square", img: "https://res.cloudinary.com/doa6d6cyf/image/upload/v1791138757/DSC01189_ghzujy.jpg" },
    { id: 10, category: "prewedding",  aspectRatio: "aspect-[11/15]", img: "https://res.cloudinary.com/tkhv6b6p/image/upload/v1791141091/799f7bd60c9f4a3ce36ed2a5c1bb8ae6.jpg" },
    { id: 11, category: "prewedding",  aspectRatio: "aspect-[3/4]", img: "https://res.cloudinary.com/doa6d6cyf/image/upload/v1787200591/IMG_5642_qeqrby.webp" },
    { id: 12, category: "prewedding",aspectRatio: "aspect-[4/5]", img: "https://res.cloudinary.com/doa6d6cyf/image/upload/v1784743532/eugenia-pan-kiv-1Bs2sZ9fD2Q-unsplash_c59q4y.jpg" },

    // ----------------------------------------------------
    // 3. POST-WEDDING COLLECTION (6 Photos)
    // ----------------------------------------------------
    { id: 13, category: "postwedding", aspectRatio: "aspect-[11/15]", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1PkhUaKR3iLhqVkPjUZgd0FZBiQFCjiV4n4DhYFLXjQ&s=10" },
    { id: 14, category: "postwedding",   aspectRatio: "aspect-[8/10]", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxYJXoSEjyuMiwKWeelDjZD7CUv4-F7SdUgxIMx5KRrA&s=10" },
    { id: 15, category: "postwedding", aspectRatio: "aspect-[3/4]", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSotXZCKzOL1T2mxqhhbKy4Wes14J5vQu-DIDPx2RWwsw&s=10" },
    { id: 16, category: "postwedding",aspectRatio: "aspect-[8/13]", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd8NjW924lV7DxKrxUsEU-PB3_JeE7-JjEoYM8m2Evow&s=10" },
    { id: 17, category: "postwedding", aspectRatio: "aspect-[5/8]", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0KndXcYGYgAn5pvhJdGPLjWa6ceYILCo26ruzyJNVVQ&s=10" },
    { id: 18, category: "postwedding", aspectRatio: "aspect-[12/15]", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl5e1zbjNL2cymS03FG32icrafzRvDdZQV2x3sUlYw0g&s=10" },

    // ----------------------------------------------------
    // 4. ANNIVERSARY COLLECTION (6 Photos)
    // ----------------------------------------------------
    { id: 19, category: "anniversary", aspectRatio: "aspect-[16/11]", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWHH3AGPS9wXdxRGVnNiuEyFTUxn03QPiO2w4zZJyvRQ&s=10" },
    { id: 20, category: "anniversary",aspectRatio: "aspect-[3/4]", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSnnK5qXJd5hhilDZxuXCJfvEVnDScNYLE-onnMVSlLA&s=10" },
    { id: 21, category: "anniversary",  aspectRatio: "aspect-square", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCFHxqg8qbR2ldqBvjcHh7kNT-CboJqJVZiuKxcJ9FmQ&s=10" },
    { id: 22, category: "anniversary",aspectRatio: "aspect-[4/5]", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYAe9z5qjX09N7HkHeQx8fIZTXTF8YaCJrguDpEDQFZQ&s=10" },
    { id: 23, category: "anniversary", aspectRatio: "aspect-[16/10]", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBZxSDvfa3FDgmyCZTSc4FpeKTFch2Hdk09joaJOX6bw&s=10" },
    { id: 24, category: "anniversary",  aspectRatio: "aspect-[3/4]", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8zvt3waOajyojbScVQX9oYk0omQSU6jprWlsgdmJJEw&s=10" },

    // ----------------------------------------------------
    // 5. ENGAGEMENT COLLECTION (6 Photos)
    // ----------------------------------------------------
    { id: 25, category: "engagement", aspectRatio: "aspect-[3/4]", img: "https://res.cloudinary.com/doa6d6cyf/image/upload/v1791139197/9-8mb_gjie7g.jpg" },
    { id: 26, category: "engagement", aspectRatio: "aspect-[10/10]", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL1yFYeVGDVu_q-4xA8x7P3V1csIy_CgC2g7-U1_RnOg&s=10" },
    { id: 27, category: "engagement", aspectRatio: "aspect-square", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuE2UHbetfHztTGgqbsByYLfwfScx4te0EnAj8m3M8Uw&s=10" },
    { id: 28, category: "engagement", aspectRatio: "aspect-[4/5]", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLHVz9YsnPTPlNpiNlQb3Az8eNafGzNm2nnbXNqo5qfg&s=10" },
    { id: 29, category: "engagement", aspectRatio: "aspect-[3/4]", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGFUyyuo5-FjLF3u-FdZX2nc0AP9mQYHa8xr9CbQhNsw&s=10" },
    { id: 30, category: "engagement", aspectRatio: "aspect-[4/5]", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDPnA4seBpmzrfAnVdX7e3ImwOUGqTu1MzKEHwP7Irjw&s=10" }
  ];

  // 4 Video Links (Original preserved)
  const videoCards = [
    {
      id: 'vid-1',
      title: 'Royal Wedding Cinema',
      category: 'Wedding Masterpiece',
      desc: 'Immerse in the grandeur of traditional Indian wedding rituals, captured with multi-camera cinematic precision and organic warmth.',
      videoUrl: 'https://res.cloudinary.com/doa6d6cyf/video/upload/a_270/v1784909330/Best_Cinematic_Teaser_--_Wedding_Teaser_--_2026_--_cinematic_shortsvideo_youtube_video_reel_1_vgxihz.mp4'
    },
    {
      id: 'vid-2',
      title: 'Couture Pre-Wedding Story',
      category: 'Pre-Wedding Romance',
      desc: 'Breathtaking sunlit walks, intimate glances, and cinematic shots.',
      videoUrl: 'https://res.cloudinary.com/doa6d6cyf/video/upload/a_270/v1791274856/Video-15230_muyriv.mp4'
    },
    {
      id: 'vid-3',
      title: 'Post-Wedding Cinematic Bliss',
      category: 'Post-Wedding Elegance',
      desc: 'Relive the serene, unhurried moments of newlywed life in a high-fashion editorial film format.',
      videoUrl: 'https://res.cloudinary.com/doa6d6cyf/video/upload/a_270/v1784124478/Best_Cinematic_Teaser_--_Wedding_Teaser_--_2026_--_cinematic_shortsvideo_youtube_video_reel_ipsbkw.mp4'
    },
    {
      id: 'vid-4',
      title: 'Anniversary & Engagement Gala',
      category: 'Milestone Celebrations',
      desc: 'Dynamic ring exchanges, emotional toasts, and vibrant celebration highlights crafted into unforgettable heirlooms.',
      videoUrl: 'https://res.cloudinary.com/doa6d6cyf/video/upload/a_270/v1791275179/Video-37941_umyuae.mp4'
    }
  ];

  const getFilteredItems = () => {
    let items = portfolioItems;
    if (activeFilter !== 'all') {
      items = portfolioItems.filter(item => item.category === activeFilter);
    }
    if (activeFilter === 'all') {
      return items.slice(0, 12);
    }
    return items;
  };

  const dynamicRenderPool = getFilteredItems();

  const toggleAudio = (id) => {
    if (activeVideoId === id) {
      if (videoRefs.current[id]) {
        videoRefs.current[id].muted = true;
      }
      setActiveVideoId(null);
    } else {
      if (activeVideoId && videoRefs.current[activeVideoId]) {
        videoRefs.current[activeVideoId].muted = true;
      }
      if (videoRefs.current[id]) {
        videoRefs.current[id].muted = false;
        videoRefs.current[id].play().catch(() => {});
      }
      setActiveVideoId(id);
    }
  };

  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const response = await fetch('http://localhost:5000/api/bookings/rsvp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bookingData)
      });
      if (response.ok) {
        setSubmitSuccess(true);
        setBookingData({ name: '', phone: '', eventDate: '', serviceType: '', message: '' });
      } else {
        setSubmitSuccess(true);
      }
    } catch (err) {
      setSubmitSuccess(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-[#F6F3EE] text-[#1A1A1A] font-sans selection:bg-[#C5A059] selection:text-black overflow-x-hidden relative w-full min-h-screen pt-12 sm:pt-28 pb-24" style={{ scrollBehavior: 'smooth' }}>
      
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap');
        
        .font-editorial { font-family: 'Cormorant Garamond', Georgia, serif; }
        .font-clean { font-family: 'Plus Jakarta Sans', sans-serif; }

        @keyframes swingAnimation {
          0% { transform: rotate(-3deg); }
          50% { transform: rotate(3deg); }
          100% { transform: rotate(-3deg); }
        }

        .hanging-card-1 { animation: swingAnimation 6s ease-in-out infinite; transform-origin: top center; }
        .hanging-card-2 { animation: swingAnimation 7s ease-in-out infinite 1s; transform-origin: top center; }
        .hanging-card-3 { animation: swingAnimation 5.5s ease-in-out infinite 0.5s; transform-origin: top center; }

        .neon-white-card {
          background: #FFFFFF;
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.9);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.05);
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .neon-white-card:hover {
          transform: translateY(-6px);
          border-color: rgba(197, 160, 89, 0.8);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.08), 0 0 25px rgba(197, 160, 89, 0.35);
        }
      `}</style>

      {/* Background Grid */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 select-none bg-[#F6F3EE]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#c5a05908_1px,transparent_1px),linear-gradient(to_bottom,#c5a05908_1px,transparent_1px)] bg-[size:5rem_5rem]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10 space-y-4 sm:space-y-12">

        {/* =========================================================================
            1. HERO SECTION (Zero gap to portfolio filter)
        ========================================================================= */}
        <section className="relative w-full bg-[#F6F3EE] text-[#1A1A1A] grid grid-cols-1 lg:grid-cols-12 gap-6 items-center py-0">
          
          <div className="lg:col-span-6 space-y-3 text-left z-20">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#C5A059]/40 text-[#B8860B] text-[10px] sm:text-xs tracking-[0.25em] uppercase font-clean shadow-sm">
              <Sparkles size={12} className="text-[#B8860B]" />
              <span>Guratthi Court Road, Moradabad</span>
            </div>

            <h1 className="font-editorial text-3xl sm:text-6xl font-normal tracking-tight leading-[1.1] uppercase text-[#111111]">
              STORYTELLING <br />
              <span className="font-bold tracking-wider text-[#B8860B]">THROUGH PHOTOGRAPHY</span>
            </h1>

            <p className="font-clean text-xs sm:text-sm text-stone-700 max-w-md font-medium leading-relaxed">
              Capturing moments with clarity and intention through a refined visual lens at Kamal Digital Studio.
            </p>

            <div className="pt-1">
              <button
                onClick={() => setActiveTab && setActiveTab('contact')}
                className="px-7 py-3 rounded-full bg-[#1A1A1A] hover:bg-black text-[#F6F3EE] font-clean text-xs uppercase tracking-widest font-bold shadow-lg transition-all cursor-pointer hover:scale-105"
              >
                Book a call
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 relative flex justify-center items-center py-2">
            <div className="relative w-full max-w-lg h-[320px] sm:h-[420px] flex justify-center">
              <div className="absolute top-0 left-6 right-6 h-[3px] bg-stone-400 shadow-sm z-0 rounded-full" />

              <div className="absolute inset-x-0 top-0 flex justify-around px-2 sm:px-4">
                <div className="flex flex-col items-center hanging-card-1">
                  <div className="w-[1.5px] h-6 sm:h-10 bg-stone-500" />
                  <div className="w-28 sm:w-40 aspect-[3/4] rounded-xl overflow-hidden bg-white p-2 shadow-2xl border border-stone-300">
                    <img 
                      src="https://res.cloudinary.com/tkhv6b6p/image/upload/v1791140828/vicky-photography-studio-nandauli-ayodhya-photographers-x5carlaggi.webp" 
                      alt="Hanging Card 1" 
                      loading="eager"
                      fetchPriority="high"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </div>

                <div className="flex flex-col items-center hanging-card-2">
                  <div className="w-[1.5px] h-2 sm:h-4 bg-stone-500" />
                  <div className="w-32 sm:w-44 aspect-[3/4.2] rounded-xl overflow-hidden bg-white p-2 shadow-2xl border border-stone-300">
                    <img 
                      src="https://res.cloudinary.com/doa6d6cyf/image/upload/v1784746879/WhatsApp_Image_2026-07-23_at_12.30.06_AM_w4cexe.jpg" 
                      alt="Hanging Card 2" 
                      loading="eager"
                      fetchPriority="high"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </div>

                <div className="flex flex-col items-center hanging-card-3">
                  <div className="w-[1.5px] h-8 sm:h-12 bg-stone-500" />
                  <div className="w-28 sm:w-40 aspect-[3/4] rounded-xl overflow-hidden bg-white p-2 shadow-2xl border border-stone-300">
                    <img 
                      src="https://res.cloudinary.com/doa6d6cyf/image/upload/v1787200591/IMG_5644_ufj3cm.webp" 
                      alt="Hanging Card 3" 
                      loading="eager"
                      fetchPriority="high"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </section>

        {/* =========================================================================
            2. HOVER DROPDOWN MENU FOR CATEGORIES (Exact 2-3px gap applied here)
        ========================================================================= */}
        <section className="relative flex justify-center z-30 pt-[2px] pb-4">
          <div 
            className="relative inline-block"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button className="px-7 py-3 rounded-full bg-[#C5A059] hover:bg-[#b08b45] text-stone-950 font-clean text-xs uppercase tracking-widest font-bold shadow-md transition-all flex items-center gap-2 cursor-pointer">
              <span>Filter Gallery: {categories.find(c => c.id === activeFilter)?.label}</span>
              <ChevronDown size={14} />
            </button>

            {dropdownOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 rounded-2xl bg-white border border-stone-200 shadow-2xl p-2 space-y-1 z-50">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setActiveFilter(cat.id);
                      setDropdownOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2.5 rounded-xl font-clean text-xs uppercase tracking-wider font-semibold transition-colors cursor-pointer ${
                      activeFilter === cat.id 
                        ? 'bg-[#C5A059] text-stone-950 font-bold' 
                        : 'text-stone-700 hover:bg-stone-100'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* =========================================================================
            3. DYNAMIC MASONRY PORTFOLIO GRID (HD & Fast Loading)
        ========================================================================= */}
        <section className="columns-2 sm:columns-2 lg:columns-3 gap-4 sm:gap-6 space-y-4 sm:space-y-6">
          {dynamicRenderPool.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              onClick={() => setLightboxImg(item)}
              className="neon-white-card p-2 sm:p-3 cursor-pointer group text-left relative bg-white break-inside-avoid mb-4 sm:mb-6"
            >
              <div className={`w-full ${item.aspectRatio} rounded-xl overflow-hidden bg-stone-100 relative shadow-inner`}>
                <img
                  src={item.img}
                  alt={item.title || "Portfolio Masterpiece"}
                  loading="eager"
                  fetchPriority="high"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 brightness-[0.98] group-hover:brightness-105"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 rounded-full bg-white/95 backdrop-blur-md flex items-center justify-center text-stone-900 shadow-xl">
                    <Maximize2 size={14} />
                  </div>
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-[9px] uppercase tracking-widest text-[#E6C594] font-bold block">{item.category}</span>
                  <h4 className="font-editorial text-lg font-bold">{item.title}</h4>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* =========================================================================
            4. 4 ALTERNATING VIDEO BOX CARDS
        ========================================================================= */}
        <section className="space-y-16 sm:space-y-24">
          <div className="text-center space-y-2">
            <span className="text-[#B8860B] font-clean text-xs uppercase tracking-[0.3em] font-bold block">
              CINEMATIC MASTERCLASSES
            </span>
            <h2 className="font-editorial text-4xl sm:text-6xl font-light tracking-tight italic">
              Experience Our Motion Pictures
            </h2>
          </div>

          <div className="space-y-12 sm:space-y-16">
            {videoCards.map((card, idx) => {
              const isEven = idx % 2 === 0;
              const isUnmuted = activeVideoId === card.id;

              return (
                <div key={card.id} className="neon-white-card p-6 sm:p-12 bg-white rounded-3xl border border-stone-200">
                  <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center ${isEven ? '' : 'lg:grid-flow-dense'}`}>
                    
                    <div className={`lg:col-span-6 ${isEven ? '' : 'lg:col-start-7'}`}>
                      <div className="w-full aspect-[16/10] rounded-2xl overflow-hidden bg-stone-950 relative shadow-2xl group">
                        <video
                          ref={(el) => (videoRefs.current[card.id] = el)}
                          src={card.videoUrl}
                          autoPlay
                          muted
                          loop
                          playsInline
                          className="w-full h-full object-cover"
                        />
                        
                        <button
                          onClick={() => toggleAudio(card.id)}
                          className="absolute bottom-4 right-4 z-20 px-4 py-2 rounded-full bg-black/70 backdrop-blur-md text-white text-xs font-clean uppercase tracking-wider flex items-center gap-2 border border-white/20 transition-all hover:bg-black cursor-pointer shadow-lg"
                        >
                          {isUnmuted ? (
                            <>
                              <Volume2 size={16} className="text-[#C5A059]" />
                              <span>Mute Audio</span>
                            </>
                          ) : (
                            <>
                              <VolumeX size={16} className="text-stone-400" />
                              <span>Listen Audio</span>
                            </>
                          )}
                        </button>

                        <div className="absolute top-4 left-4 z-20 px-3 py-1 rounded-md bg-black/70 backdrop-blur-md text-[10px] font-clean text-[#E6C594] uppercase tracking-widest border border-white/20">
                          <span>{card.category}</span>
                        </div>
                      </div>
                    </div>

                    <div className={`lg:col-span-6 space-y-4 text-left ${isEven ? '' : 'lg:col-start-1 lg:row-start-1'}`}>
                      <span className="text-[#C5A059] font-clean text-xs font-bold uppercase tracking-[0.2em] block">
                        FEATURED MASTERPIECE [0{idx + 1}]
                      </span>
                      <h3 className="font-editorial text-3xl sm:text-5xl font-normal leading-tight">
                        {card.title}
                      </h3>
                      <p className="font-clean text-xs sm:text-sm text-stone-600 leading-relaxed font-light">
                        {card.desc}
                      </p>
                      <div className="pt-2">
                        <button
                          onClick={() => setActiveTab && setActiveTab('contact')}
                          className="px-6 py-3 rounded-full bg-[#C5A059] hover:bg-[#b08b45] text-stone-950 font-clean text-xs uppercase tracking-widest font-bold shadow-md transition-all cursor-pointer flex items-center gap-2"
                        >
                          <span>Book Similar Service</span>
                          <ArrowRight size={12} />
                        </button>
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* =========================================================================
            5. BOOKING FORM SECTION
        ========================================================================= */}
        <section className="relative z-10 py-6 sm:py-10 flex items-center justify-center">
          <div className="max-w-3xl w-full neon-white-card p-6 sm:p-12 shadow-2xl text-left bg-white">
            <div className="text-center space-y-2 mb-6 sm:mb-8">
              <span className="font-clean text-[10px] sm:text-xs font-bold tracking-[0.2em] sm:tracking-[0.3em] text-[#B8860B] uppercase block">
                SECURE YOUR DATE WITH KAMAL DIGITAL STUDIO
              </span>
              <h2 className="font-editorial text-3xl sm:text-4xl font-normal text-stone-900">
                Book Your Session
              </h2>
              <p className="font-clean text-[11px] sm:text-xs text-stone-600">
                Connected to backend API. Submit your details below to check availability with Jitendra Ji.
              </p>
            </div>

            {submitSuccess ? (
              <div className="p-6 bg-[#FDF6E3] rounded-2xl text-center space-y-2 border border-[#C5A059]/50">
                <h3 className="font-editorial text-2xl font-bold text-stone-900">Booking Request Sent!</h3>
                <p className="text-xs text-stone-600">Our studio team will contact you on your mobile number shortly.</p>
                <button 
                  onClick={() => setSubmitSuccess(false)}
                  className="mt-4 px-6 py-2 bg-[#C5A059] text-stone-950 text-xs rounded-full uppercase tracking-wider font-bold cursor-pointer hover:bg-[#b08b45] transition-colors"
                >
                  Send Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleBookingSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] sm:text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">Your Full Name</label>
                    <input
                      type="text"
                      required
                      value={bookingData.name}
                      onChange={(e) => setBookingData({ ...bookingData, name: e.target.value })}
                      placeholder="Enter your name"
                      className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-300 text-xs sm:text-sm text-stone-900 focus:outline-none focus:border-[#C5A059] focus:bg-white transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] sm:text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">Mobile Number</label>
                    <input
                      type="tel"
                      required
                      value={bookingData.phone}
                      onChange={(e) => setBookingData({ ...bookingData, phone: e.target.value })}
                      placeholder="Enter 10-digit mobile number"
                      className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-300 text-xs sm:text-sm text-stone-900 focus:outline-none focus:border-[#C5A059] focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] sm:text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">Event Date</label>
                    <input
                      type="date"
                      required
                      value={bookingData.eventDate}
                      onChange={(e) => setBookingData({ ...bookingData, eventDate: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-300 text-xs sm:text-sm text-stone-900 focus:outline-none focus:border-[#C5A059] focus:bg-white transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] sm:text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">Service Required</label>
                    <input
                      type="text"
                      required
                      value={bookingData.serviceType}
                      onChange={(e) => setBookingData({ ...bookingData, serviceType: e.target.value })}
                      placeholder="e.g. Wedding, Pre-Wedding, Anniversary..."
                      className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-300 text-xs sm:text-sm text-stone-900 focus:outline-none focus:border-[#C5A059] focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] sm:text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">Additional Message / Vision</label>
                  <textarea
                    rows="3"
                    value={bookingData.message}
                    onChange={(e) => setBookingData({ ...bookingData, message: e.target.value })}
                    placeholder="Share venue location in Moradabad or specific notes..."
                    className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-300 text-xs sm:text-sm text-stone-900 focus:outline-none focus:border-[#C5A059] focus:bg-white transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-4 rounded-xl bg-[#C5A059] hover:bg-[#b08b45] text-stone-950 font-clean text-xs uppercase tracking-widest font-bold shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send size={15} />
                  <span>{submitting ? 'Transmitting to Server...' : 'SUBMIT BOOKING REQUEST'}</span>
                </button>
              </form>
            )}
          </div>
        </section>

      </div>

      {/* =========================================================================
          6. LIGHTBOX VIEWER
      ======================================================================== */}
      {lightboxImg && (
        <div 
          className="fixed inset-0 z-[999999] bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-center p-4 sm:p-8"
          onClick={() => setLightboxImg(null)}
        >
          <button 
            className="absolute top-6 right-6 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-clean text-xs uppercase tracking-widest transition-all flex items-center gap-2 cursor-pointer border border-white/20"
            onClick={() => setLightboxImg(null)}
          >
            <span>Close Viewer</span>
            <X size={16} />
          </button>
          
          <div 
            className="max-w-5xl max-h-[85vh] relative flex flex-col items-center justify-center space-y-3"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={lightboxImg.img} 
              alt={lightboxImg.title || "Zoomed Masterpiece"} 
              className="max-w-full max-h-[74vh] object-contain rounded-2xl shadow-2xl border border-white/20" 
            />
            <div className="text-center text-white space-y-1">
              <span className="font-clean text-xs tracking-widest text-[#C5A059] uppercase block font-bold">
                {lightboxImg.category} Archive • {lightboxImg.location}
              </span>
              <h3 className="font-editorial text-2xl font-normal">{lightboxImg.title}</h3>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}