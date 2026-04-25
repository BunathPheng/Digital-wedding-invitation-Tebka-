"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const IntroAnimation: React.FC = () => {
    const [isOpened, setIsOpened] = useState(false);
    const [shouldRender, setShouldRender] = useState(true);

    useEffect(() => {
        // Auto-open after a short delay
        const timer = setTimeout(() => {
            setIsOpened(true);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    const handleSkip = () => {
        setIsOpened(true);
        // Immediately remove from DOM after a slight delay to allow any transition if needed
        setTimeout(() => setShouldRender(false), 2000);
    };

    useEffect(() => {
        if (isOpened) {
            // Remove the overlay from DOM after animation completes
            const timer = setTimeout(() => {
                setShouldRender(false);
            }, 3000); // Wait for the 2.5s CSS transition/animation
            return () => clearTimeout(timer);
        }
    }, [isOpened]);

    if (!shouldRender) return null;

    return (
        <div className="fixed inset-0 z-[100] flex overflow-hidden pointer-events-none">
            {/* Left Door */}
            <div
                className={`absolute inset-y-0 left-0 w-1/2 bg-maroon border-r-2 border-gold shadow-2xl pointer-events-auto transition-transform duration-[2500ms] ease-in-out ${isOpened ? "-translate-x-full" : "translate-x-0"}`}
                style={{ zIndex: 102 }}
            >
                <div className="absolute inset-0 pattern-bg opacity-10" />
                <div className="h-full flex flex-col items-end justify-center pr-8 md:pr-16 text-cream text-right">
                    <div className="khmer-font text-2xl md:text-4xl font-bold mb-4 opacity-50">សូមស្វាគមន៍</div>
                    <div className="english-font text-lg md:text-xl tracking-[0.3em] uppercase opacity-40">Welcome</div>
                </div>
            </div>

            {/* Right Door */}
            <div
                className={`absolute inset-y-0 right-0 w-1/2 bg-maroon border-l-2 border-gold shadow-2xl pointer-events-auto transition-transform duration-[2500ms] ease-in-out ${isOpened ? "translate-x-full" : "translate-x-0"}`}
                style={{ zIndex: 102 }}
            >
                <div className="absolute inset-0 pattern-bg opacity-10" />
                <div className="h-full flex flex-col items-start justify-center pl-8 md:pl-16 text-cream">
                    <div className="khmer-font text-2xl md:text-4xl font-bold mb-4 opacity-50">មហាមង្គលការ</div>
                    <div className="english-font text-lg md:text-xl tracking-[0.3em] uppercase opacity-40">Grand Wedding</div>
                </div>
            </div>

            {/* Central Reveal Element (revealed as doors part) */}
            <div className={`absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-1000 ${isOpened ? "opacity-0" : "opacity-100"}`} style={{ zIndex: 101 }}>
                <div className="relative w-full h-full max-w-[800px] max-h-[600px] px-4">
                    <Image
                        src="/images/angkor-wat-color.jpg"
                        alt="Angkor Wat Southeast"
                        fill
                        className="object-cover rounded-3xl shadow-[0_0_50px_rgba(212,175,55,0.3)] border-2 border-gold/20"
                    />
                </div>
            </div>

            {/* Skip Button */}
            {!isOpened && (
                <button
                    onClick={handleSkip}
                    className="absolute bottom-12 left-1/2 -translate-x-1/2 px-8 py-3 bg-cream/10 border border-gold/30 text-gold rounded-full khmer-font text-sm hover:bg-gold/20 transition-all pointer-events-auto z-[105]"
                >
                    រំលង / Skip Intro
                </button>
            )}
        </div>
    );
};

export default IntroAnimation;
