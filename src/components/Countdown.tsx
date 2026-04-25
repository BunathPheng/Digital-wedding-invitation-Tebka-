"use client";

import React, { useState, useEffect } from 'react';

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [isTimeUp, setIsTimeUp] = useState(false);

  useEffect(() => {
    // Target date: May 29, 2026 16:00:00 (4:00 PM) based on user text
    const targetDate = new Date("2026-05-29T16:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        setIsTimeUp(true);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    // Initial check
    if (targetDate - new Date().getTime() < 0) {
      setIsTimeUp(true);
    }

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="countdown" className="py-16 md:py-24 relative overflow-hidden bg-cream/50 border-y border-gold/10">
      <div className="section-container mx-auto max-w-4xl px-4 relative z-10 text-center">
        <div className="mb-10 reveal-up">
          <h2 className="khmer-font text-2xl md:text-4xl lg:text-5xl text-maroon font-black mb-6 leading-relaxed">
            ថ្ងៃសុក្រ ទី២៩ ខែឧសភា ឆ្នាំ២០២៦
          </h2>
          <p className="khmer-formal-body text-base md:text-xl lg:text-2xl text-brown/90 leading-loose max-w-3xl mx-auto">
            វេលាម៉ោង ៤:០០ ល្ងាច នៅគេហដ្ឋានខាងស្រី<br/>
            ភូមិទី២ ឃុំរការខួរ ស្រុកក្រូចឆ្មារ ខេត្តត្បូងឃ្មុំ
          </p>
        </div>

        <div className="mt-12 reveal-up" style={{ animationDelay: '0.2s' }}>
          {isTimeUp ? (
            <div className="bg-white/80 backdrop-blur-md shadow-2xl border-2 border-gold/40 rounded-3xl p-8 md:p-12 inline-block animate-pulse-soft">
              <h3 className="khmer-font text-3xl md:text-5xl text-maroon font-black mb-4">
                សូមអបអរសាទរ!
              </h3>
              <p className="english-font text-xl md:text-2xl text-gold-dark tracking-[0.2em] font-bold uppercase">
                Happy Wedding Day
              </p>
            </div>
          ) : (
            <div className="flex items-center justify-center gap-4 md:gap-8">
              {[
                { label: 'ថ្ងៃ / Days', value: timeLeft.days },
                { label: 'ម៉ោង / Hrs', value: timeLeft.hours },
                { label: 'នាទី / Min', value: timeLeft.minutes },
                { label: 'វិនាទី / Sec', value: timeLeft.seconds },
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center bg-white/80 backdrop-blur-md shadow-lg border border-gold/20 rounded-2xl w-20 h-24 md:w-32 md:h-36 justify-center transition-transform hover:-translate-y-2">
                  <div className="text-3xl md:text-6xl font-bold english-font tracking-wider text-maroon mb-1 md:mb-2">
                    {item.value.toString().padStart(2, '0')}
                  </div>
                  <div className="khmer-font text-[10px] md:text-sm uppercase tracking-widest text-gold-dark font-bold">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
