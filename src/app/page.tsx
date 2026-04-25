"use client";

import Image from "next/image";
import MusicPlayer from "@/components/MusicPlayer";
import IntroAnimation from "@/components/IntroAnimation";
import WeddingTimeline from "@/components/WeddingTimeline";
import LocationSection from "@/components/LocationSection";
import GiftsSection from "@/components/GiftsSection";
import React from 'react';

export default function Home() {
  return (
    <main className="relative min-h-screen royal-silk-bg overflow-x-hidden">
      <IntroAnimation />
      <MusicPlayer />

      {/* Royal Background Elements */}
      <div className="kbach-bg-pattern" />
      <div className="glow-overlay" />

      <div className="relative z-10 py-10 md:py-20 paper-texture-card">
        {/* 1. HERO - Dark Photographic Invitation Style from Mockup */}
        <section id="hero" className="mb-24 relative min-h-[85vh] flex items-center justify-center overflow-hidden -mt-20">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/b6337299d6257453281023b70419d2ee.jpg"
              alt="Wedding Hero"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
          </div>

          <div className="relative z-10 w-full max-w-4xl px-4 flex flex-col items-center text-center text-white">
            <h1 className="khmer-font text-2xl md:text-4xl lg:text-5xl mb-4 md:mb-8 mockup-hero-text font-black tracking-wide leading-relaxed">
              សិរីមង្គលអាពាហ៍ពិពាហ៍
            </h1>

            <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-10">
              <span className="khmer-font text-2xl md:text-3xl font-bold opacity-90">ផេង ប៊ុនណាត</span>
              <div className="w-6 h-6 md:w-8 md:h-8 flex items-center justify-center">
                <span className="text-red-500 text-lg md:text-2xl animate-pulse">❤️</span>
              </div>
              <span className="khmer-font text-2xl md:text-3xl font-bold opacity-90">ចាន់ ទេវី</span>
            </div>

            <p className="khmer-font text-lg md:text-2xl mb-2 opacity-90">សូមគោរពអញ្ជើញ</p>

            {/* Ornamental Frame for Guest Name */}
            <div className="relative w-full max-w-[340px] md:max-w-[600px] lg:max-w-[800px] h-[100px] md:h-[180px] lg:h-[240px] mx-auto flex items-center justify-center mt-1 mb-6 md:mb-10 transition-all duration-500">
              <div className="absolute inset-0">
                <Image
                  src="/images/a190f873193418c15f172eb5a95dbcc3.png"
                  alt="Guest Name Frame"
                  fill
                  className="object-contain" // Use object-contain to ensure the whole ornate frame is visible
                />
              </div>
              <div className="relative z-10 w-[80%] text-center pt-2 md:pt-4 lg:pt-6">
                {/* Placeholder for name line, matching the frame's style */}
                <div className="h-6 md:h-10 lg:h-16 w-full" />
              </div>
            </div>

            <div className="mt-4 md:mt-10 space-y-2 md:space-y-4">
              <p className="khmer-font text-lg md:text-2xl lg:text-3xl font-black tracking-tighter">
                ថ្ងៃអាទិត្យ ទី ០១ ខែ កុម្ភៈ ឆ្នាំ ២០២៦ ម៉ោង ៥:២០ ល្ងាច
              </p>
              <p className="english-font text-sm md:text-lg uppercase tracking-[0.2em] md:tracking-[0.4em] font-bold opacity-80">
                kroch chamr
              </p>
            </div>

            <div className="mt-8 md:mt-12">
              <button className="bg-white/10 backdrop-blur-md border border-white/30 text-white text-sm md:text-base px-6 py-2 md:px-8 md:py-3 rounded-xl flex items-center gap-2 hover:bg-white/20 transition-all">
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                Add to Calendar
              </button>
            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
              <svg className="w-8 h-8 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
            </div>
          </div>
        </section>

        {/* 2. FAMILY - Ceremonial Parents Section */}
        <section id="family" className="py-16 md:py-24 lg:py-32 section-container mx-auto max-w-5xl px-4">
          <div className="kbach-divider mb-8 md:mb-12" />
          <div className="trad-section-title mb-8 md:mb-12">
            <span className="text-xs md:text-sm tracking-widest">Honoring Our Parents</span>
            <h2 className="text-2xl md:text-5xl mt-2">សេចក្ដីថ្លែងអំណរគុណ</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 md:gap-12">
            {[
              { title: "ខាងកូនកំលោះ", names: ["លោក សុខ ជា", "អ្នកស្រី ម៉េង ស្រីពៅ"] },
              { title: "ខាងកូនក្រមុំ", names: ["លោក ចាន់ វីរៈ", "អ្នកស្រី ហែម សុភ័ក្ត្រ"] }
            ].map((fam, idx) => (
              <div key={idx} className="trad-card-luxury text-center reveal-up p-6 md:p-12" style={{ animationDelay: `${idx * 0.2}s` }}>
                <div className="dove-motif mx-auto mb-4 md:mb-6 scale-75 opacity-40" />
                <h4 className="khmer-font text-gold text-xl md:text-2xl font-black mb-6 md:mb-8 border-b border-gold/10 pb-4">{fam.title}</h4>
                <div className="space-y-4 md:space-y-6">
                  {fam.names.map((name, i) => (
                    <p key={i} className="khmer-font text-2xl md:text-3xl text-maroon font-black">{name}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. STORY - Traditional Love Story */}
        <section id="story" className="py-16 md:py-32 relative border-y border-gold/10 overflow-hidden">
          {/* Global background shows through */}
          <div className="section-container mx-auto max-w-6xl px-4 md:px-10 relative z-10">
            <div className="grid md:grid-cols-2 gap-8 md:gap-20 items-center">
              <div className="trad-photo-frame reveal-up">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image src="/images/couple.png" alt="Love Story" fill className="object-cover transition-transform duration-[4s] hover:scale-110" />
                </div>
                <div className="ornate-corner-svg top-0 left-0 scale-50 opacity-30" />
              </div>
              <div className="reveal-up" style={{ animationDelay: '0.3s' }}>
                <h2 className="khmer-font text-3xl md:text-6xl text-maroon font-black mb-6 md:mb-10 leading-tight">ដំណើររឿង<br />នៃក្តីស្រឡាញ់</h2>
                <div className="w-16 h-1 md:w-20 md:h-1.5 bg-gold mb-8 md:mb-12" />
                <p className="khmer-font text-lg md:text-2xl text-brown leading-relaxed mb-6 md:mb-8 italic font-bold">"វាសនាបាននាំឲ្យយើងជួបគ្នា បេះដូងបាននាំឲ្យយើងរួមដំណើរ។"</p>
                <p className="khmer-formal-body !text-left !text-base md:!text-lg !leading-relaxed md:!leading-loose opacity-80">
                  ចាប់ផ្តើមពីការយល់ចិត្ត ឆ្ពោះទៅរកការកសាងអនាគតរួមគ្នា។ ពួកយើងសូមអញ្ជើញលោកអ្នកមកចូលរួមជាសាក្សីនៃក្តីស្រលាញ់ដែលនឹងស្ថិតស្ថេរជានិរន្តរ៍។
                </p>
              </div>
            </div>
          </div>
        </section>



        {/* 3.5 TIMELINE - Schedule */}
        <WeddingTimeline />


        <section id="gallery" className="py-16 md:py-32">
          <div className="section-container mx-auto max-w-6xl px-4">
            <div className="kbach-divider mb-8 md:mb-16" />
            <div className="trad-section-title">
              <span>Captured Moments</span>
              <h2 className="text-2xl md:text-5xl">រូបភាពអនុស្សាវរីយ៍</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              {[
                "138337a7dd2d6ab0415eee10b7c286cb.jpg",
                "a58cda6aaba3014bb4f911fd2053c4ab.jpg",
                "00b0bc268205fa5f8aff1a859b8cccee.jpg",
                "18334d20531bae69b882960af71a6113.jpg",
                "ac5f766c6250734b2a99e781c575c950.jpg",
                "2ba2ffa21d916557843912bec97c82e2.jpg",
                "b6337299d6257453281023b70419d2ee.jpg",
                "d4ccbf6e51c1ce0999504b16774af02e.jpg"
              ].map((img, i) => (
                <div key={i} className="trad-photo-frame reveal-up overflow-hidden group">
                  <div className="relative aspect-[3/4] transition-transform duration-1000 group-hover:scale-110">
                    <Image src={`/images/${img}`} alt="Wedding" fill className="object-cover" />
                    <div className="absolute inset-0 bg-maroon/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. LOCATION - Venue & Map */}
        <LocationSection />

        {/* 5.5 GIFTS - Wedding Blessings */}
        <GiftsSection />

        {/* 6. RSVP - Formal Confirmation */}
        <section id="rsvp" className="py-16 md:py-32">
          <div className="section-container mx-auto max-w-3xl px-4">
            <div className="trad-card-luxury px-6 py-10 md:px-20 md:py-16">
              <div className="trad-section-title !mb-6 md:!mb-12">
                <span>Kindly Respond</span>
                <h2 className="!text-2xl md:!text-4xl">ការបញ្ជាក់វត្តមាន</h2>
              </div>
              <form className="space-y-6 md:space-y-10">
                <div className="trad-form-group">
                  <label className="trad-form-label text-base md:text-xl">ឈ្មោះពេញ / Full Name</label>
                  <input type="text" className="trad-form-input text-base md:text-xl" placeholder="សូមសរសេរឈ្មោះនៅទីនេះ..." />
                </div>
                <div className="trad-form-group">
                  <label className="trad-form-label text-base md:text-xl">ចំនួនអ្នកចូលរួម / Number of Guests</label>
                  <select className="trad-form-input appearance-none text-base md:text-xl">
                    <option>១ នាក់ (1 Guest)</option>
                    <option>២ នាក់ (2 Guests)</option>
                    <option>ច្រើនជាង ២ នាក់ (&gt;2 Guests)</option>
                  </select>
                </div>
                <button className="w-full bg-maroon text-white py-4 md:py-6 rounded-xl khmer-font text-lg md:text-2xl font-black border-2 border-gold shadow-2xl hover:bg-maroon-light transition-all active:scale-95">
                  បញ្ជូនការបញ្ជាក់ / Submit RSVP
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* 7. FOOTER */}
        <footer id="footer" className="py-16 md:py-32 text-center relative px-4">
          <div className="gold-divider-form !w-24 md:!w-32" />
          <p className="khmer-font text-3xl md:text-5xl text-maroon font-black mb-4 md:mb-8">សូមអរគុណ!</p>
          <p className="english-font text-gold-dark text-sm md:text-xl font-bold tracking-[0.2em] md:tracking-[0.4em]">PHENG BUNNAT & CHAN DEVI</p>
          <p className="english-font text-brown text-xs md:text-sm mt-6 md:mt-10 opacity-40">© 2026 Traditional Wedding Invitation</p>
        </footer>
      </div>

      <div className="fixed inset-0 pointer-events-none z-50">
        <Petals />
      </div>
    </main >
  );
}

function Petals() {
  const [petals, setPetals] = React.useState<Array<{ left: string; duration: string; delay: string }>>([]);

  React.useEffect(() => {
    // Reduced from 12 to 6 for a more subtle, less cluttered effect
    setPetals(
      [...Array(6)].map(() => ({
        left: `${Math.random() * 100}%`,
        duration: `${Math.random() * 15 + 15}s`, // Slower fall (15s to 30s)
        delay: `${Math.random() * 8}s`, // More spread out start times
      }))
    );
  }, []);

  return (
    <>
      {petals.map((style, i) => (
        <div
          key={i}
          className="petal opacity-90 md:opacity-100" // Increased opacity for high quality crisp look
          style={{
            left: style.left,
            animationDuration: style.duration,
            animationDelay: style.delay,
          }}
        />
      ))}
    </>
  );
}
