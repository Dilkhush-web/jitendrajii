import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, Maximize2, X, ArrowRight, Phone, Camera, Award, ShieldCheck, Clapperboard, Radio, Volume2, VolumeX, Activity, PlayCircle, Clock, CheckCircle2, Layers, PhoneCall } from 'lucide-react';

export default function Films({ setActiveTab }) {
  const [selectedFilm, setSelectedFilm] = useState(null);
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [mutedStates, setMutedStates] = useState({});
  const videoRefs = useRef([]);

  // ==========================================
  // 🎬 NATIVE PREMIUM CINEMA REELS (RESTORED TO 6 VIDEOS)
  // ==========================================
  const premiumVideos = [
    {
      id: 1,
      title: "The Royal Vivah Legacy",
      category: "HERITAGE CINEMA",
      desc: "A grand-scale cinematic chronicle captured across heritage palace courtyards in Haridwar.",
      videoUrl: "https://res.cloudinary.com/doa6d6cyf/video/upload/a_270/v1787917023/Captured_emotions_not_just_moments_Book_your_wedding_now_zchs8l.mp4"
    },
    {
      id: 2,
      title: "The Couture Pre-Wedding",
      category: "COUTURE NARRATIVE",
      desc: "A high-fashion dusk narrative documented during the golden hour glow across scenic landscapes.",
      videoUrl: "https://res.cloudinary.com/doa6d6cyf/video/upload/a_270/v1787917004/Abhishek_SwatiShot_by_-_foreverstudios.in_zo_wed_shaadisquad_shaadisaga.official_wedmegoo_vqahr8.mp4"
    },
    {
      id: 3,
      title: "Grand Jubilee Celebrations",
      category: "JUBILEE ARCHIVE",
      desc: "A high-octane celebration teaser combining celebratory sparklers and candid portraiture.",
      videoUrl: "https://res.cloudinary.com/doa6d6cyf/video/upload/a_270/v1784909337/Turning_birthdays_into_fairytales._..Manasvis_1st_birthday_birthdayfun_1stbirthday_hqf4fd.mp4"
    },
    {
      id: 4,
      title: "Varmala Royal Symphony",
      category: "SACRED ENCORE",
      desc: "A breathtaking widescreen showcase highlighting low-angle mandap perspectives.",
      videoUrl: "https://res.cloudinary.com/doa6d6cyf/video/upload/a_270/v1787916986/AQOh5CnV93RYX0F0txPga1tKGKj_kykmsMffYLS8HbCW7rH5vVKgk_gpum_2R8Mr8DqsdaXwHFSR03jZIWSuFWDFLJFw0Zjj_oqjx5c.mp4"
    },
    {
      id: 5,
      title: "Golden Hour Romance",
      category: "COUPLE PORTRAITURE",
      desc: "Captured across sacred riverfronts during dusk with effortless unscripted glances.",
      videoUrl: "https://res.cloudinary.com/doa6d6cyf/video/upload/v1784910407/BOOK_UR_PRE-WEDDING_RIGHT_NOW_%EF%B8%8F.._Prewedding_couple_video_Prewedding_video_Varanasi_vide_nc7krt.mp4"
    },
    {
      id: 6,
      title: "The Palace Ritual Heritage",
      category: "TRADITIONAL VIVAH",
      desc: "An elaborate documentation of Vedic mantras, sacred hawan fire rituals, and heartfelt bidaai farewell tears.",
      videoUrl: "https://res.cloudinary.com/doa6d6cyf/video/upload/a_270/v1784909330/Best_Cinematic_Teaser_--_Wedding_Teaser_--_2026_--_cinematic_shortsvideo_youtube_video_reel_1_vgxihz.mp4"
    }
  ];

  // ==========================================
  // 🔴 YOUTUBE LINKS (PURE CLEAN CARDS)
  // ==========================================
  const youtubeLinks = [
    { 
      id: "yt1", 
      url: "https://www.youtube.com/watch?v=LXb3EKWsInQ" 
    },
    { 
      id: "yt2", 
      url: "https://www.youtube.com/watch?v=ScMzIvxBSi4" 
    },
    { 
      id: "yt3", 
      url: "https://www.youtube.com/watch?v=aqz-KE-bpKQ" 
    },
    { 
      id: "yt4", 
      url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" 
    }
  ];

  const categories = ['ALL', 'HERITAGE CINEMA', 'COUTURE NARRATIVE', 'SACRED ENCORE'];

  const filteredVideos = activeFilter === 'ALL' 
    ? premiumVideos 
    : premiumVideos.filter(v => v.category === activeFilter);

  // Staggered 3-Photo Triptych
  const triptychPhotos = [
    { url: "https://res.cloudinary.com/doa6d6cyf/image/upload/v1784743445/ptaufiq-indian-wedding-rajkot-India-ceremony-couple-portraits_xxvlnv.jpg", title: "The Royal Vows", tag: "Heritage" },
    { url: "https://res.cloudinary.com/doa6d6cyf/image/upload/v1784742666/uniquephotography1.0-20260318-0087_yyozre.webp", title: "Bridal Splendor", tag: "Couture" },
    { url: "https://res.cloudinary.com/doa6d6cyf/image/upload/v1784746877/WhatsApp_Image_2026-07-23_at_12.30.06_AM_1_ipebqc.jpg", title: "Golden Dusk", tag: "Ambient" }
  ];

  // Helper to extract YouTube ID
  const getYoutubeId = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  useEffect(() => {
    const initialMutes = {};
    premiumVideos.forEach((_, idx) => { initialMutes[idx] = true; });
    setMutedStates(initialMutes);
  }, []);

  const toggleAudio = (index) => {
    const willBeMuted = !mutedStates[index];
    videoRefs.current.forEach((vidEl, idx) => {
      if (vidEl) {
        if (idx === index) vidEl.muted = willBeMuted;
        else if (!willBeMuted) vidEl.muted = true;
      }
    });

    if (!willBeMuted) {
      const newStates = {};
      premiumVideos.forEach((_, idx) => { newStates[idx] = idx !== index; });
      setMutedStates(newStates);
    } else {
      setMutedStates(prev => ({ ...prev, [index]: true }));
    }
  };

  const handleCallClick = (e, phoneNumber = '8434656386') => {
    const isMobile = typeof navigator !== 'undefined' && /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    if (!isMobile) {
      e.preventDefault();
      if (navigator.clipboard) navigator.clipboard.writeText(phoneNumber);
      alert(`📞 Studio Contact Number: +91 ${phoneNumber}\n(Copied to clipboard!)`);
    }
  };

  const handlePlay = (playingIndex) => {
    videoRefs.current.forEach((videoEl, index) => {
      if (videoEl && index !== playingIndex && !videoEl.paused) {
        videoEl.pause();
      }
    });
  };

  return (
    // Applied True Cream Theme to the Root Wrapper
    <div className="bg-[#FDF6E3] text-[#2C241D] font-sans selection:bg-[#E6C594] selection:text-[#2C241D] overflow-x-hidden relative w-full min-h-screen pt-20 sm:pt-28 pb-24">
      
      {/* 🔮 MASTER LUXURY DESIGN SYSTEM (True Cream Theme) */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap');
        
        .font-serif-luxury { font-family: 'Cormorant Garamond', Georgia, serif; }
        .font-sans-clean { font-family: 'Plus Jakarta Sans', sans-serif; }
        .font-mono-tech { font-family: 'Space Grotesk', monospace; }

        /* Modified Card to True Cream */
        .cinema-glass-card {
          background: #FFFCF6;
          border-radius: 20px;
          border: 1px solid rgba(212, 175, 55, 0.25);
          box-shadow: 0 15px 30px rgba(184, 134, 11, 0.05);
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @media (min-width: 640px) {
          .cinema-glass-card { border-radius: 32px; box-shadow: 0 20px 40px rgba(184, 134, 11, 0.06); }
        }

        .cinema-glass-card:hover {
          transform: translateY(-4px);
          border-color: rgba(212, 175, 55, 0.7);
          box-shadow: 0 30px 60px rgba(184, 134, 11, 0.15), 0 0 25px rgba(230, 197, 148, 0.4);
        }

        .live-pulse-dot {
          box-shadow: 0 0 0 0 rgba(220, 38, 38, 0.7);
          animation: pulse-ring 1.5s infinite cubic-bezier(0.4, 0, 0.6, 1);
        }

        @keyframes pulse-ring {
          0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(220, 38, 38, 0.7); }
          70% { transform: scale(1); box-shadow: 0 0 0 10px rgba(220, 38, 38, 0); }
          100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(220, 38, 38, 0); }
        }

        /* Ambient Lights */
        @keyframes float-light-1 {
          0%, 100% { transform: translate(0px, 0px) scale(1); opacity: 0.15; }
          50% { transform: translate(30px, -50px) scale(1.1); opacity: 0.4; }
        }
        .ambient-light-1 { animation: float-light-1 8s ease-in-out infinite; }
      `}</style>

      {/* Background Architectural Grid */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 select-none bg-[#FDF6E3]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#d4af3708_1px,transparent_1px),linear-gradient(to_bottom,#d4af3708_1px,transparent_1px)] bg-[size:5rem_5rem]" />
      </div>

      <div className="max-w-7xl mx-auto px-2.5 sm:px-6 lg:px-12 relative z-10 space-y-16 sm:space-y-32">

        {/* =========================================================================
            1. DYNAMIC "WOW" HERO SECTION (CREAM THEME)
        ========================================================================= */}
        <section className="relative overflow-hidden rounded-[24px] sm:rounded-3xl bg-[#FFFCF6] border border-[#D4AF37]/50 p-6 sm:p-20 shadow-xl text-center">
          <div className="absolute top-[-15%] left-[-10%] w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-amber-400/30 rounded-full blur-[80px] sm:blur-[100px] pointer-events-none ambient-light-1" />
          
          <div className="relative z-10 max-w-3xl mx-auto space-y-4 sm:space-y-6">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-[#FDF6E3]/90 backdrop-blur-md border border-[#D4AF37]/40 shadow-sm">
              <Sparkles size={12} className="text-[#B8860B] sm:w-3.5 sm:h-3.5" />
              <span className="font-mono-tech text-[9px] sm:text-xs font-bold tracking-[0.2em] sm:tracking-[0.25em] text-[#B8860B] uppercase">
                Chandna Studio Cinema Vault • Haridwar
              </span>
            </div>

            <h1 className="font-serif-luxury text-4xl sm:text-6xl lg:text-7xl font-bold text-[#2C241D] tracking-tight leading-[1.05] sm:leading-[1.08]">
              The Director’s <br />
              <span className="italic font-light text-[#B8860B]">Cinematic Archive.</span>
            </h1>

            <div className="w-12 sm:w-16 h-[2px] bg-[#C5A059] mx-auto shadow-[0_0_10px_#C5A059]" />

            <p className="font-sans-clean text-[#6B5B52] text-xs sm:text-base leading-relaxed max-w-2xl mx-auto font-light">
              Immerse yourself in native 24fps motion reels, bespoke anamorphic color grading, and timeless acoustic soundscapes crafted with absolute precision by Naresh Ji.
            </p>

            <div className="pt-2 sm:pt-4 flex flex-wrap items-center justify-center gap-1.5 sm:gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-3.5 py-1.5 sm:px-5 sm:py-2.5 rounded-full text-[9px] sm:text-xs font-mono-tech uppercase font-bold tracking-wider transition-all cursor-pointer ${
                    activeFilter === cat
                      ? 'bg-[#C5A059] text-white shadow-md scale-105'
                      : 'bg-[#FFFCF6] text-[#6B5B52] border border-[#D4AF37]/30 hover:border-[#C5A059] hover:text-[#2C241D]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            2. NATIVE VIDEO GRID: STRICTLY 2 PER ROW ON BOTH MOBILE & LAPTOP
        ========================================================================= */}
        <section className="grid grid-cols-2 md:grid-cols-2 gap-3 sm:gap-12">
          {filteredVideos.map((video, idx) => {
            const isMuted = mutedStates[idx] ?? true;
            return (
              <div 
                key={video.id} 
                className="cinema-glass-card p-2.5 sm:p-8 flex flex-col justify-between text-left group"
              >
                <div className="w-full aspect-[16/10] rounded-xl sm:rounded-2xl overflow-hidden bg-stone-950 relative shadow-inner mb-3 sm:mb-6 border border-stone-800">
                  <video 
                    ref={(el) => (videoRefs.current[idx] = el)}
                    src={video.videoUrl} 
                    autoPlay muted={isMuted} loop playsInline preload="auto"
                    className="w-full h-full object-cover bg-stone-950 brightness-[0.95]"
                  />
                  
                  {/* Floating Live Audio Toggle Button */}
                  <div className="absolute top-2 right-2 sm:top-4 sm:right-4 z-20">
                    <button
                      onClick={() => toggleAudio(idx)}
                      className={`px-2 py-1 sm:px-4 sm:py-2 rounded-full backdrop-blur-md border text-[8px] sm:text-xs font-mono-tech uppercase tracking-wider font-bold flex items-center gap-1 sm:gap-2 transition-all shadow-lg cursor-pointer ${
                        !isMuted 
                          ? 'bg-amber-500 text-stone-950 border-amber-300 animate-pulse' 
                          : 'bg-black/70 text-white border-white/20 hover:bg-black/90'
                      }`}
                    >
                      {!isMuted ? <Volume2 size={12} className="sm:w-[15px]" /> : <VolumeX size={12} className="sm:w-[15px]" />}
                      <span className="hidden sm:inline">{!isMuted ? 'Sound On' : 'Muted'}</span>
                    </button>
                  </div>

                  <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 z-20 pointer-events-none">
                    <span className="px-1.5 py-0.5 sm:px-3 sm:py-1 rounded-md bg-black/70 backdrop-blur-md text-[7px] sm:text-xs font-mono-tech text-amber-300 border border-white/10 uppercase tracking-widest">
                      24FPS 4K
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-2 sm:space-y-4 flex-1 flex flex-col justify-between px-1 sm:px-0">
                  <div className="space-y-1 sm:space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[#B8860B] font-mono-tech text-[8px] sm:text-xs tracking-[0.2em] sm:tracking-[0.25em] uppercase font-bold truncate pr-2">
                        {video.category}
                      </span>
                      <span className="text-[#B8860B] font-mono-tech text-[8px] sm:text-xs font-bold shrink-0">0{idx + 1}</span>
                    </div>
                    <h3 className="font-serif-luxury text-[13px] leading-snug sm:text-3xl text-[#2C241D] font-bold group-hover:text-[#B8860B] transition-colors line-clamp-2">
                      {video.title}
                    </h3>
                    <p className="font-sans-clean text-[#6B5B52] text-[9px] sm:text-sm leading-relaxed font-light hidden sm:block">
                      {video.desc}
                    </p>
                  </div>

                  <div className="pt-2 sm:pt-4 border-t border-[#D4AF37]/20 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedFilm(video)}
                      className="w-full py-1.5 sm:py-3 rounded-full bg-[#FDF6E3] hover:bg-[#C5A059] text-[#2C241D] hover:text-white font-sans-clean text-[9px] sm:text-xs tracking-wider uppercase font-bold transition-all duration-300 border border-[#D4AF37]/30 flex items-center justify-center gap-1.5 sm:gap-2 cursor-pointer shadow-xs"
                    >
                      <Clapperboard size={11} className="sm:w-[15px]" />
                      <span>Theater Mode</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </section>

        {/* =========================================================================
            🔴 YOUTUBE BROADCASTS (BIGGER CARDS, ABSOLUTELY NO TEXT ON CARDS)
        ========================================================================= */}
        <section className="space-y-6 sm:space-y-10">
          <div className="text-center space-y-2">
            <span className="font-mono-tech text-[10px] sm:text-xs font-bold tracking-[0.3em] text-[#B8860B] uppercase block">
              ✦ DIGITAL PREMIERES ✦
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-[#2C241D] tracking-tight">
              YouTube Broadcasts
            </h2>
            <p className="font-sans-clean text-[#6B5B52] text-xs sm:text-sm font-light">
              Click any frame to experience our fully produced YouTube masterworks in full screen.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
            {youtubeLinks.map((yt) => {
              const ytId = getYoutubeId(yt.url);
              const thumbUrl = ytId ? `https://img.youtube.com/vi/${ytId}/maxresdefault.jpg` : '';
              
              return (
                <div 
                  key={yt.id}
                  onClick={() => setSelectedFilm({ ...yt, isYoutube: true, ytId })}
                  className="cinema-glass-card p-2.5 sm:p-5 flex flex-col justify-center text-left group cursor-pointer"
                >
                  <div className="w-full aspect-video rounded-xl sm:rounded-2xl overflow-hidden bg-stone-900 relative shadow-inner">
                    <img 
                      src={thumbUrl} 
                      alt="Chandna Studio Broadcast" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-[0.9] group-hover:brightness-105"
                    />
                    
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-red-600/95 backdrop-blur-md rounded-full flex items-center justify-center text-white shadow-2xl group-hover:scale-110 transition-transform">
                        <PlayCircle size={28} className="sm:w-10 sm:h-10 ml-1.5 sm:ml-2" fill="white" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* =========================================================================
            ✨ PROFESSIONAL LIVE MOTION BROADCAST CENTER (FLIPPED: VIDEO LEFT, TEXT RIGHT)
        ========================================================================= */}
        <section className="cinema-glass-card p-5 sm:p-16 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-amber-500/10 rounded-full blur-2xl sm:blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-16 items-center relative z-10">
            
            <div className="lg:col-span-5 lg:order-1 order-2">
              <div className="w-full aspect-[4/5] rounded-2xl sm:rounded-3xl overflow-hidden bg-stone-950 border border-[#D4AF37]/50 relative shadow-2xl flex items-center justify-center">
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4 z-20 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-md sm:rounded-lg bg-black/80 backdrop-blur-md text-[9px] sm:text-[11px] font-mono-tech text-[#E6C594] border border-[#D4AF37]/40 flex items-center gap-1.5 sm:gap-2 shadow-lg">
                  <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-red-500 animate-pulse" />
                  <span>LIVE REEL // PRE-WEDDING MASTERCLASS</span>
                </div>
                <video 
                  src="https://res.cloudinary.com/doa6d6cyf/video/upload/a_270/v1787917023/Captured_emotions_not_just_moments_Book_your_wedding_now_zchs8l.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover opacity-95"
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-left lg:order-2 order-1">
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-[#FDF6E3] border border-[#D4AF37]/40 text-[#B8860B] text-[10px] sm:text-xs font-mono-tech uppercase tracking-widest font-bold shadow-2xs">
                <Sparkles size={12} className="sm:w-3.5 sm:h-3.5" />
                <span>Live Video Showcase & Pre-Wedding Masterclass</span>
              </div>
              
              <h2 className="font-serif-luxury text-2xl sm:text-5xl font-bold leading-[1.15] text-[#2C241D]">
                Live Event Broadcasting & Cinematic Pre-Wedding Chronicles
              </h2>
              
              <p className="font-sans-clean text-[#6B5B52] text-[11px] sm:text-base leading-relaxed font-light">
                At Chandna Studio, we take immense pride in offering state-of-the-art live video recording and real-time broadcasting services. Whether your family members are sitting across continents or across the country, our multi-camera OB switchers ensure they experience your sacred Pheras in pristine 4K resolution. Alongside live streaming, our pre-wedding masterclasses capture effortless romance against the scenic holy backdrop of Haridwar and tranquil riverfronts. We turn spontaneous glances, cinematic sunlit walks, and intimate evening silhouettes into immortal cinematic treasures.
              </p>

              <div className="pt-2 sm:pt-4 flex flex-wrap items-center gap-3 sm:gap-4">
                <button
                  onClick={() => setActiveTab && setActiveTab('services')}
                  className="px-5 sm:px-8 py-3 sm:py-4 rounded-full bg-[#C5A059] hover:bg-[#B8860B] text-white font-sans-clean text-[9px] sm:text-xs uppercase tracking-widest font-bold shadow-lg transition-all flex items-center gap-1.5 sm:gap-2 cursor-pointer hover:scale-105"
                >
                  <Layers size={12} className="sm:w-4 sm:h-4" />
                  <span>Explore Services</span>
                </button>

                <button
                  onClick={() => setActiveTab && setActiveTab('contact')}
                  className="px-5 sm:px-8 py-3 sm:py-4 rounded-full bg-[#FDF6E3] hover:bg-[#F4E6D1] text-[#2C241D] font-sans-clean text-[9px] sm:text-xs uppercase tracking-widest font-bold border border-[#D4AF37]/40 transition-all flex items-center gap-1.5 sm:gap-2 cursor-pointer shadow-sm hover:scale-105"
                >
                  <PhoneCall size={12} className="text-[#B8860B] sm:w-4 sm:h-4" />
                  <span>Contact Studio</span>
                </button>
              </div>
            </div>

          </div>
        </section>

        {/* =========================================================================
            3. STUDIO CINEMA METRICS STRIP
        ========================================================================= */}
        <section className="cinema-glass-card p-6 sm:p-12 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="space-y-1.5 sm:space-y-2">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#FDF6E3] text-[#B8860B] flex items-center justify-center mx-auto shadow-inner border border-[#D4AF37]/20">
                <Camera size={18} className="sm:w-[22px]" />
              </div>
              <h4 className="font-serif-luxury text-lg sm:text-xl font-bold text-[#2C241D]">Anamorphic 4K Capture</h4>
              <p className="text-[10px] sm:text-xs text-[#6B5B52] font-sans-clean leading-relaxed">
                Shot on full-frame cinema rigs with prime optical glass for breathtaking depth of field.
              </p>
            </div>

            <div className="space-y-1.5 sm:space-y-2">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#FDF6E3] text-[#B8860B] flex items-center justify-center mx-auto shadow-inner border border-[#D4AF37]/20">
                <Award size={18} className="sm:w-[22px]" />
              </div>
              <h4 className="font-serif-luxury text-lg sm:text-xl font-bold text-[#2C241D]">Bespoke Color Science</h4>
              <p className="text-[10px] sm:text-xs text-[#6B5B52] font-sans-clean leading-relaxed">
                Hand-graded color palettes that retain rich skin tones and royal golden hues.
              </p>
            </div>

            <div className="space-y-1.5 sm:space-y-2">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#FDF6E3] text-[#B8860B] flex items-center justify-center mx-auto shadow-inner border border-[#D4AF37]/20">
                <ShieldCheck size={18} className="sm:w-[22px]" />
              </div>
              <h4 className="font-serif-luxury text-lg sm:text-xl font-bold text-[#2C241D]">Dual-Card Safety</h4>
              <p className="text-[10px] sm:text-xs text-[#6B5B52] font-sans-clean leading-relaxed">
                Simultaneous recording safeguards every single second of your sacred vows.
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================================
            4. OPTICAL MASTER TRIPTYCH (3 STILLS IN 1 ROW)
        ========================================================================= */}
        <section className="cinema-glass-card p-5 sm:p-12">
          <div className="text-center max-w-2xl mx-auto space-y-1.5 sm:space-y-2 mb-6 sm:mb-10">
            <span className="font-mono-tech text-[9px] sm:text-[10.5px] font-bold tracking-[0.2em] sm:tracking-[0.3em] text-[#B8860B] uppercase block">
              ✦ OPTICAL MASTER TRIPTYCH ✦
            </span>
            <h2 className="font-serif-luxury text-2xl sm:text-4xl font-bold text-[#2C241D] tracking-tight">
              Three Still Visions. One Legacy.
            </h2>
            <p className="font-sans-clean text-[#6B5B52] text-[10px] sm:text-sm font-light">
              Every frame represents an unrepeatable micro-expression captured with fine-art precision.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-2 sm:gap-8">
            {triptychPhotos.map((photo, index) => (
              <div
                key={index}
                className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-md sm:shadow-lg aspect-[4/5] bg-[#FDF6E3] border border-[#D4AF37]/30 group"
              >
                <img
                  src={photo.url}
                  alt={photo.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2C241D]/85 via-transparent to-transparent pointer-events-none" />
                
                <div className="absolute top-2 left-2 sm:top-4 sm:left-4">
                  <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-[#2C241D]/80 backdrop-blur-md rounded-full font-mono-tech text-[6px] sm:text-[9px] font-bold text-[#E6C594] uppercase tracking-widest border border-white/10">
                    {photo.tag}
                  </span>
                </div>

                <div className="absolute bottom-2 left-2 right-2 sm:bottom-5 sm:left-5 sm:right-5 text-white pointer-events-none text-left">
                  <h4 className="font-serif-luxury text-[10px] sm:text-xl font-bold truncate">
                    {photo.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-6 sm:pt-10 text-center flex flex-wrap justify-center items-center gap-3 sm:gap-4">
            <button
              onClick={() => setActiveTab && setActiveTab('contact')}
              className="inline-flex items-center gap-1.5 sm:gap-2 px-5 sm:px-8 py-2.5 sm:py-3.5 rounded-full bg-[#2C241D] hover:bg-[#C5A059] text-white font-sans-clean text-[9px] sm:text-xs tracking-widest uppercase font-bold transition-all duration-300 shadow-md cursor-pointer hover:-translate-y-0.5"
            >
              <span>Consult Naresh Ji for Custom Cinema</span>
              <ArrowRight size={12} className="sm:w-3.5 sm:h-3.5" />
            </button>
            <a
              href="tel:8434656386"
              onClick={(e) => handleCallClick(e, '8434656386')}
              className="inline-flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-mono-tech font-bold text-[#2C241D] bg-[#FDF6E3] border border-[#D4AF37]/50 px-4 sm:px-6 py-2.5 sm:py-3.5 rounded-full cursor-pointer hover:bg-[#F4E6D1] transition-colors"
            >
              <Phone size={12} className="text-[#B8860B] sm:w-3.5 sm:h-3.5" /> +91 8434656386
            </a>
          </div>
        </section>

      </div>

      {/* =========================================================================
          5. UNIVERSAL THEATER / YOUTUBE LIGHTBOX MODAL
      ========================================================================= */}
      {selectedFilm && (
        <div
          className="fixed inset-0 z-[99999] bg-[#2C241D]/95 backdrop-blur-2xl flex flex-col items-center justify-center p-3 sm:p-8"
          onClick={() => setSelectedFilm(null)}
        >
          <button
            className="absolute top-4 right-4 sm:top-6 sm:right-6 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-mono-tech text-[9px] sm:text-xs uppercase tracking-widest transition-all flex items-center gap-1.5 sm:gap-2 cursor-pointer border border-white/20"
            onClick={() => setSelectedFilm(null)}
          >
            <span>Close Theater</span>
            <X size={14} className="sm:w-4 sm:h-4" />
          </button>

          <div
            className="max-w-5xl w-full max-h-[85vh] relative flex flex-col items-center justify-center space-y-2 sm:space-y-3"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full aspect-video bg-black rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border border-white/20">
              {/* Conditional Rendering: YouTube vs Native Video */}
              {selectedFilm.isYoutube ? (
                <iframe
                  src={`https://www.youtube.com/embed/${selectedFilm.ytId}?autoplay=1&rel=0`}
                  title="Chandna Studio YouTube"
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <video
                  src={selectedFilm.videoUrl}
                  controls
                  autoPlay
                  className="w-full h-full object-contain"
                />
              )}
            </div>
            
            {/* Kept extremely clean - No title for YouTube to maintain 'Zero Text' look */}
            {!selectedFilm.isYoutube && (
              <div className="text-center text-white space-y-0.5 sm:space-y-1">
                <span className="font-mono-tech text-[9px] sm:text-xs tracking-widest text-[#E6C594] uppercase block font-bold">
                  {selectedFilm.category}
                </span>
                <h3 className="font-serif-luxury text-lg sm:text-3xl font-bold">{selectedFilm.title}</h3>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
}