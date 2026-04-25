"use client";

import React, { useRef, useEffect, useState } from 'react';

const schedule = [
    { time: "07:30", title: "ពិធីហែជំនូន", subtitle: "Groom's Procession", icon: "🥁" },
    { time: "08:30", title: "ពិធីកាត់សក់", subtitle: "Hair Cutting Ceremony", icon: "✂️" },
    { time: "09:30", title: "ពិធីសូត្រមន្ត", subtitle: "Monks Blessing", icon: "🙏" },
    { time: "10:30", title: "ពិធីចងដៃ", subtitle: "Wrist Tying ceremony", icon: "🤝" },
    { time: "16:30", title: "ពិធីទទួលភ្ញៀវ", subtitle: "Evening Reception", icon: "🥂" },
    { time: "18:00", title: "ពិធីកាត់នំ", subtitle: "Cake Cutting", icon: "🎂" },
];

export default function WeddingTimeline() {
    const [progress, setProgress] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return;

            const rect = containerRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const elementHeight = rect.height;

            // Calculate how much of the element has passed the center of the screen
            // displayed mostly when the component is in view
            const start = windowHeight * 0.8; // Start animating when top enters bottom 20%
            const end = windowHeight * 0.2;   // Finish when bottom leaves top 20%

            let percentage = (start - rect.top) / (start - end + elementHeight);
            percentage = Math.max(0, Math.min(1, percentage));

            setProgress(percentage);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section id="timeline" className="py-20 md:py-32 relative overflow-hidden">
            <div className="section-container mx-auto max-w-4xl px-4">
                <div className="trad-section-title mb-16 md:mb-24">
                    <span>Wedding Schedule</span>
                    <h2 className="text-3xl md:text-5xl">កម្មវិធីលម្អិត</h2>
                </div>

                <div ref={containerRef} className="relative">
                    {/* Vertical Line Background (Inactive) */}
                    <div className="absolute left-[29px] md:left-1/2 top-0 bottom-0 w-1 bg-gold/20 -translate-x-1/2 rounded-full" />

                    {/* Vertical Line Progress (Active) */}
                    <div
                        className="absolute left-[29px] md:left-1/2 top-0 w-1 bg-gold -translate-x-1/2 rounded-full transition-all duration-100 ease-out"
                        style={{ height: `${progress * 100}%` }}
                    />

                    <div className="space-y-12 md:space-y-24">
                        {schedule.map((item, index) => {
                            // Calculate if this specific item is "active" based on overall progress
                            // Simple approximation: if progress > (index / total), it's active
                            const isActive = progress > (index / schedule.length);

                            return (
                                <div key={index} className={`relative flex md:justify-center items-center group ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>

                                    {/* Timeline Dot */}
                                    <div className={`absolute left-[29px] md:left-1/2 -translate-x-1/2 w-6 h-6 rounded-full border-4 transition-all duration-500 z-10 
                    ${isActive ? 'bg-gold border-white scale-110 shadow-[0_0_15px_rgba(212,175,55,0.6)]' : 'bg-cream border-gold/30'}`}
                                    />

                                    {/* Time (Mobile: Right of dot, Desktop: Alternating) */}
                                    <div className={`pl-16 md:pl-0 w-full md:w-[45%] ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                                        {/* On Mobile, layout is essentially uniform. On Desktop, we switch sides. 
                         For simplicity, we'll keep content grouped on one side for mobile. */}

                                        <div className={`hidden md:block transition-all duration-700 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                                            {index % 2 === 0 ? (
                                                // Even: Time on Left (which is this block)
                                                <>
                                                    <span className="text-gold font-bold tracking-widest text-xl">{item.time}</span>
                                                    <h3 className="khmer-font text-2xl font-bold text-maroon mt-1">{item.title}</h3>
                                                    <p className="english-font text-brown opacity-70 uppercase tracking-widest text-sm mt-1">{item.subtitle}</p>
                                                </>
                                            ) : (
                                                // Odd: Description on Left (this block is visually "Right" in flex-row-reverse, but logic-wise "Left" of center)
                                                // Wait, if it's flex-row-reverse, the first child is visually Right. This logic gets tricky.
                                                // Let's adhere to: "Center: vertical progress line". 
                                                // Width 45% -> Space -> Width 45%
                                                <>
                                                    <div className="flex flex-col items-start">
                                                        <span className="text-5xl mb-2 filter drop-shadow-md">{item.icon}</span>
                                                    </div>
                                                </>
                                            )}
                                        </div>

                                        {/* Mobile View (Always Right of line) */}
                                        <div className="md:hidden">
                                            <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-2 transition-colors ${isActive ? 'bg-gold text-white' : 'bg-gold/10 text-gold-dark'}`}>
                                                {item.time}
                                            </span>
                                            <h3 className="khmer-font text-xl font-bold text-maroon">{item.title}</h3>
                                            <p className="english-font text-brown opacity-70 uppercase tracking-widest text-xs mt-1">{item.subtitle}</p>
                                        </div>
                                    </div>

                                    {/* Content (Desktop: Other side) */}
                                    <div className={`hidden md:block w-[45%] ${index % 2 === 0 ? 'text-left pl-12' : 'text-right pr-12'} transition-all duration-700 delay-100 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                                        {index % 2 === 0 ? (
                                            // Even: Icon/Decor on Right
                                            <div className="text-5xl filter drop-shadow-md">{item.icon}</div>
                                        ) : (
                                            // Odd: Time/Text on Right
                                            <>
                                                <span className="text-gold font-bold tracking-widest text-xl">{item.time}</span>
                                                <h3 className="khmer-font text-2xl font-bold text-maroon mt-1">{item.title}</h3>
                                                <p className="english-font text-brown opacity-70 uppercase tracking-widest text-sm mt-1">{item.subtitle}</p>
                                            </>
                                        )}
                                    </div>

                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
