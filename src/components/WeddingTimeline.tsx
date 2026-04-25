"use client";

import React, { useRef, useEffect, useState } from 'react';

const scheduleDay1 = [
    { time: "០៣:០០ រសៀល", title: "ពិធីសែនក្រុងពាលី", icon: "🙏" },
    { time: "០៤:០០ រសៀល", title: "ពិធីសូត្រមន្តចម្រើនព្រះបរិត្ត", icon: "📿" },
    { time: "០៦:០០ ល្ងាច", title: "អញ្ជើញភ្ញៀវកិត្តិយសពិសាអាហារពេលល្ងាច", icon: "🍽️" },
];

const scheduleDay2 = [
    { time: "០៦:៣០ ព្រឹក", title: "ជួបជុំភ្ញៀវកិត្តិយសដើម្បីរៀបចំហែរជំនួន", icon: "🤝" },
    { time: "០៧:០០ ព្រឹក", title: "ពិធីហែរជំនួនកំណត់ចូលរោងជ័យ", icon: "🥁" },
    { time: "០៧:៣០ ព្រឹក", title: "ពិធីចៅមហានិយាយជើងការ សែនព្រេន រៀបរាប់ផ្លែឈើនឹងពិសាភោជនាហារពេលព្រឹក", icon: "🍎" },
    { time: "០៨:០០ ព្រឹក", title: "ពិធីបំពាក់ចិញ្ចៀន", icon: "💍" },
    { time: "០៩:០០ ព្រឹក", title: "ពិធីកាត់សក់បង្កក់សិរី កូនប្រុស-កូនស្រី", icon: "✂️" },
    { time: "១១:០០ ព្រឹក", title: "ពិធីសំពះផ្ទឹមចងដៃ បង្វិលពពិល និង ព្រះថោងតោងស្បៃ", icon: "💑" },
    { time: "១២:០០ ថ្ងៃត្រង់", title: "អញ្ជើញភ្ញៀវកិត្តិយសពិសាអាហារថ្ងៃត្រង់ បញ្ចប់កិច្ចអាពាហ៍ពិពាហ៍", icon: "🥂" },
    { time: "០៤:០០ ល្ងាច", title: "ទទួលភ្ញៀវកិត្តិយសពិសាភោជនាហារ ភូមិទី២ ឃុំរការខ្មែរ ស្រុកក្រូចឆ្មារ ខេត្តត្បូងឃ្មុំ ។", icon: "🎉" },
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

            const start = windowHeight * 0.8;
            const end = windowHeight * 0.2;

            let percentage = (start - rect.top) / (start - end + elementHeight);
            percentage = Math.max(0, Math.min(1, percentage));

            setProgress(percentage);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const totalItems = scheduleDay1.length + scheduleDay2.length;

    const renderSchedule = (scheduleItems: typeof scheduleDay1, startIndex: number) => {
        return scheduleItems.map((item, localIndex) => {
            const index = startIndex + localIndex;
            const isActive = progress > (index / totalItems);

            return (
                <div key={index} className={`relative flex md:justify-center items-center group ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    {/* Timeline Dot */}
                    <div className={`absolute left-[29px] md:left-1/2 -translate-x-1/2 w-6 h-6 rounded-full border-4 transition-all duration-500 z-10 
                    ${isActive ? 'bg-gold border-white scale-110 shadow-[0_0_15px_rgba(212,175,55,0.6)]' : 'bg-cream border-gold/30'}`}
                    />

                    {/* Time (Mobile: Right of dot, Desktop: Alternating) */}
                    <div className={`pl-16 md:pl-0 w-full md:w-[45%] ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                        <div className={`hidden md:block transition-all duration-700 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            {index % 2 === 0 ? (
                                <>
                                    <span className="khmer-font text-gold font-bold text-lg">{item.time}</span>
                                    <h3 className="khmer-font text-xl md:text-2xl font-bold text-maroon mt-1 leading-relaxed">{item.title}</h3>
                                </>
                            ) : (
                                <div className="flex flex-col items-start">
                                    <span className="text-4xl md:text-5xl mb-2 filter drop-shadow-md">{item.icon}</span>
                                </div>
                            )}
                        </div>

                        {/* Mobile View */}
                        <div className="md:hidden">
                            <span className={`khmer-font inline-block px-3 py-1 rounded-full text-xs font-bold mb-2 transition-colors ${isActive ? 'bg-gold text-white' : 'bg-gold/10 text-gold-dark'}`}>
                                {item.time}
                            </span>
                            <h3 className="khmer-font text-lg font-bold text-maroon leading-relaxed">{item.title}</h3>
                        </div>
                    </div>

                    {/* Content (Desktop: Other side) */}
                    <div className={`hidden md:block w-[45%] ${index % 2 === 0 ? 'text-left pl-12' : 'text-right pr-12'} transition-all duration-700 delay-100 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        {index % 2 === 0 ? (
                            <div className="text-4xl md:text-5xl filter drop-shadow-md">{item.icon}</div>
                        ) : (
                            <>
                                <span className="khmer-font text-gold font-bold text-lg">{item.time}</span>
                                <h3 className="khmer-font text-xl md:text-2xl font-bold text-maroon mt-1 leading-relaxed">{item.title}</h3>
                            </>
                        )}
                    </div>
                </div>
            );
        });
    };

    return (
        <section id="timeline" className="py-20 md:py-32 relative overflow-hidden bg-white">
            <div className="section-container mx-auto max-w-5xl px-4">
                <div className="trad-section-title mb-16 md:mb-24">
                    <span>Wedding Program</span>
                    <h2 className="khmer-title-font text-3xl md:text-5xl">កម្មវិធីសិរីមង្គលអាពាហ៍ពិពាហ៍</h2>
                </div>

                <div ref={containerRef} className="relative">
                    {/* Vertical Lines */}
                    <div className="absolute left-[29px] md:left-1/2 top-0 bottom-0 w-1 bg-gold/20 -translate-x-1/2 rounded-full" />
                    <div
                        className="absolute left-[29px] md:left-1/2 top-0 w-1 bg-gold -translate-x-1/2 rounded-full transition-all duration-100 ease-out"
                        style={{ height: `${progress * 100}%` }}
                    />

                    {/* Day 1 Section */}
                    <div className="mb-16 md:mb-24 relative z-10">
                        <div className="bg-maroon text-white text-center py-4 px-6 rounded-2xl md:w-3/4 mx-auto mb-10 shadow-xl border border-gold/30">
                            <h3 className="khmer-font text-xl md:text-2xl font-bold tracking-wide">
                                កម្មវិធីទី១ ថ្ងៃព្រហស្បតិ៍ ទី២៨ ខែឧសភា ឆ្នាំ២០២៦
                            </h3>
                        </div>
                        <div className="space-y-10 md:space-y-16">
                            {renderSchedule(scheduleDay1, 0)}
                        </div>
                    </div>

                    {/* Day 2 Section */}
                    <div className="relative z-10">
                        <div className="bg-maroon text-white text-center py-4 px-6 rounded-2xl md:w-3/4 mx-auto mb-10 shadow-xl border border-gold/30">
                            <h3 className="khmer-font text-xl md:text-2xl font-bold tracking-wide">
                                កម្មវិធីទី២ ថ្ងៃសុក្រ ទី២៩ ខែឧសភា ឆ្នាំ២០២៦
                            </h3>
                        </div>
                        <div className="space-y-10 md:space-y-16">
                            {renderSchedule(scheduleDay2, scheduleDay1.length)}
                        </div>
                    </div>

                    {/* End Marker */}
                    <div className="mt-16 md:mt-24 text-center relative z-10">
                        <span className="khmer-font text-xl md:text-3xl text-gold-dark font-black tracking-widest uppercase bg-white px-8 py-2 rounded-full shadow-md border border-gold/20">
                            ចប់កម្មវិធី
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
