"use client";

import React, { useState, useRef, useEffect } from "react";

const MusicPlayer: React.FC = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const lastInteractionTimeRef = useRef<number>(0);
    const animationFrameRef = useRef<number | null>(null);

    // Continuous Cinematic Drift
    const startContinuousDrift = () => {
        if (!audioRef.current) return;

        const drift = () => {
            const audio = audioRef.current;
            if (!audio || audio.paused) return;

            const now = Date.now();
            // Only drift if user hasn't touched the screen in the last 6 seconds
            if (now > lastInteractionTimeRef.current) {
                const progress = audio.currentTime / audio.duration;
                if (!isNaN(progress)) {
                    const totalScrollHeight = document.documentElement.scrollHeight - window.innerHeight;
                    const targetY = progress * totalScrollHeight;

                    // Natural smoothing: move 5% of the distance to target every frame
                    const currentY = window.pageYOffset;
                    const nextY = currentY + (targetY - currentY) * 0.05;

                    // Only scroll if the difference is meaningful to prevent jitter
                    if (Math.abs(nextY - currentY) > 0.1) {
                        window.scrollTo(0, nextY);
                    }
                }
            }
            animationFrameRef.current = requestAnimationFrame(drift);
        };

        animationFrameRef.current = requestAnimationFrame(drift);
    };

    const toggleMusic = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
                if (animationFrameRef.current) {
                    cancelAnimationFrame(animationFrameRef.current);
                    animationFrameRef.current = null;
                }
            } else {
                audioRef.current.play().catch(e => console.log("Audio play blocked", e));
                startContinuousDrift();
            }
            setIsPlaying(!isPlaying);
        }
    };

    useEffect(() => {
        const onInteract = () => {
            // Pause the auto-drift for 6 seconds when user interacts
            lastInteractionTimeRef.current = Date.now() + 6000;
        };

        window.addEventListener('wheel', onInteract, { passive: true });
        window.addEventListener('touchstart', onInteract, { passive: true });
        window.addEventListener('mousedown', onInteract, { passive: true });

        return () => {
            window.removeEventListener('wheel', onInteract);
            window.removeEventListener('touchstart', onInteract);
            window.removeEventListener('mousedown', onInteract);
            if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
        };
    }, []);

    return (
        <div className="fixed top-4 right-4 md:top-6 md:right-6 z-[60] flex items-center gap-2 reveal-up">
            <div className={`bg-white/90 backdrop-blur-xl px-3 py-1.5 md:px-4 md:py-2 rounded-full border shadow-lg flex items-center gap-2 md:gap-3 transition-all duration-500 ${isPlaying ? 'border-[#556B2F] ring-4 ring-[#556B2F]/10' : 'border-gray-200'}`}>
                <audio
                    ref={audioRef}
                    src="/images/Wedding Medley (Beautiful In White, Can't Help Falling In Love, Perfect and more) - Mild Nawin.mp4"
                    loop
                >
                    <track kind="captions" />
                </audio>

                <div className="flex flex-col items-end pointer-events-none text-right hidden sm:flex">
                    <span className={`khmer-font text-[10px] md:text-xs font-bold transition-colors ${isPlaying ? 'text-[#556B2F]' : 'text-gray-600'}`}>
                        {isPlaying ? 'កំពុងចាក់...' : 'តន្ត្រីមង្គលការ'}
                    </span>
                    <span className="english-font text-[8px] md:text-[9px] uppercase tracking-[0.1em] font-bold text-gray-400 leading-tight italic">
                        Wedding Medley
                    </span>
                </div>

                <button
                    onClick={toggleMusic}
                    className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center shadow-md transition-all active:scale-95 group cursor-pointer relative overflow-hidden ${isPlaying ? 'bg-[#556B2F]' : 'bg-gray-50 border border-gray-200'}`}
                >
                    {isPlaying ? (
                        <div className="flex items-center gap-0.5 md:gap-1">
                            <div className="w-0.5 h-2.5 md:w-1 md:h-3 bg-white animate-[bounce_0.8s_infinite_0.1s] rounded-full" />
                            <div className="w-1 h-3.5 md:w-1.5 md:h-4 bg-white animate-[bounce_0.8s_infinite_0.3s] rounded-full" />
                            <div className="w-0.5 h-2.5 md:w-1 md:h-3 bg-white animate-[bounce_0.8s_infinite_0.5s] rounded-full" />
                        </div>
                    ) : (
                        <svg className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#556B2F] fill-[#556B2F] ml-0.5 transition-transform group-hover:scale-110" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                        </svg>
                    )}
                </button>
            </div>
        </div>
    );
};

export default MusicPlayer;
