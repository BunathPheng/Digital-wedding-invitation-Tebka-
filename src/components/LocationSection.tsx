"use client";

import React, { useState } from 'react';

export default function LocationSection() {
    const [copied, setCopied] = useState(false);

    const venueDetails = {
        name: "មជ្ឈមណ្ឌលកោះពេជ្រ",
        nameEn: "Koh Pich Convention Center",
        address: "ភ្នំពេញ, កម្ពុជា",
        addressEn: "Diamond Island, Phnom Penh, Cambodia",
        date: "០១ កុម្ភៈ ២០២៦",
        time: "០៧:៣០ ព្រឹក | ០៤:៣០ ល្ងាច",
        phone: "+855 12 345 678",
        mapsUrl: "https://maps.google.com/?q=Diamond+Island+Phnom+Penh",
        coordinates: "11.5564,104.9282"
    };

    const copyAddress = () => {
        navigator.clipboard.writeText(`${venueDetails.nameEn}, ${venueDetails.addressEn}`);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section id="location" className="py-16 md:py-32 relative overflow-hidden">
            {/* Subtle background glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/5 to-transparent pointer-events-none" />

            <div className="section-container mx-auto max-w-5xl px-4 relative z-10">
                {/* Section Title */}
                <div className="trad-section-title mb-12 md:mb-20 text-center">
                    <span>Find Us Here</span>
                    <h2 className="text-3xl md:text-5xl">ទីតាំង</h2>
                </div>

                {/* 3D Card Container with glassmorphism backdrop */}
                <div className="relative reveal-up">
                    {/* Glassmorphism backdrop blur */}
                    <div className="absolute -inset-4 bg-white/40 backdrop-blur-3xl rounded-[32px] -z-10" />

                    {/* Main 3D Card */}
                    <div className="relative bg-gradient-to-br from-white via-cream/50 to-white rounded-[28px] border-2 border-gold/20 shadow-[0_20px_60px_-15px_rgba(212,175,55,0.3),0_10px_30px_-10px_rgba(94,11,11,0.1)] overflow-hidden transition-all duration-500 hover:shadow-[0_25px_70px_-15px_rgba(212,175,55,0.4),0_15px_40px_-10px_rgba(94,11,11,0.15)] hover:-translate-y-1">

                        {/* Top decorative border */}
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />

                        <div className="p-8 md:p-12">
                            {/* 3D Location Pin Icon */}
                            <div className="flex justify-center mb-8">
                                <div className="relative group">
                                    {/* Pin shadow */}
                                    <div className="absolute inset-0 bg-maroon/20 blur-xl rounded-full scale-75 group-hover:scale-90 transition-transform" />

                                    {/* Pin container with 3D effect */}
                                    <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-maroon via-maroon to-maroon/80 flex items-center justify-center border-4 border-gold shadow-[0_8px_24px_-6px_rgba(212,175,55,0.6),inset_0_2px_4px_rgba(255,255,255,0.2)] group-hover:scale-110 transition-all duration-300">
                                        <svg className="w-10 h-10 md:w-12 md:h-12 text-gold drop-shadow-[0_2px_8px_rgba(212,175,55,0.8)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <circle cx="12" cy="10" r="3" strokeWidth="2.5" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {/* Venue Information */}
                            <div className="text-center mb-8">
                                <h3 className="khmer-font text-3xl md:text-4xl text-maroon font-black mb-2 drop-shadow-sm">
                                    {venueDetails.name}
                                </h3>
                                <p className="english-font text-lg md:text-xl text-gold-dark font-bold mb-6">
                                    {venueDetails.nameEn}
                                </p>

                                {/* Gold divider */}
                                <div className="w-20 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-6" />

                                {/* Details grid */}
                                <div className="max-w-md mx-auto space-y-3">
                                    {/* Address */}
                                    <div className="flex items-center justify-center gap-3 text-brown/90">
                                        <svg className="w-5 h-5 text-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        </svg>
                                        <div>
                                            <p className="khmer-font text-base md:text-lg font-bold">{venueDetails.address}</p>
                                            <p className="english-font text-sm opacity-70">{venueDetails.addressEn}</p>
                                        </div>
                                    </div>

                                    {/* Date & Time */}
                                    <div className="flex items-center justify-center gap-3 text-brown/90">
                                        <svg className="w-5 h-5 text-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                        <div>
                                            <p className="khmer-font text-base md:text-lg font-bold">{venueDetails.date}</p>
                                            <p className="english-font text-sm opacity-70">{venueDetails.time}</p>
                                        </div>
                                    </div>

                                    {/* Phone */}
                                    <div className="flex items-center justify-center gap-3 text-brown/90">
                                        <svg className="w-5 h-5 text-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                        <p className="english-font text-base md:text-lg font-bold">{venueDetails.phone}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Map Preview Card with 3D depth */}
                            <div className="relative mb-8 group">
                                {/* Map shadow layer */}
                                <div className="absolute -inset-2 bg-gradient-to-b from-gold/20 to-maroon/10 rounded-[24px] blur-xl opacity-60 group-hover:opacity-80 transition-opacity" />

                                {/* Map container */}
                                <div className="relative rounded-[24px] overflow-hidden border-2 border-gold/30 shadow-[0_12px_40px_-10px_rgba(0,0,0,0.2),inset_0_1px_2px_rgba(255,255,255,0.5)] h-[280px] md:h-[350px] bg-white">
                                    <iframe
                                        src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.7744444444444!2d${venueDetails.coordinates.split(',')[1]}!3d${venueDetails.coordinates.split(',')[0]}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDMzJzIzLjAiTiAxMDTCsDU1JzQxLjUiRQ!5e0!3m2!1sen!2skh!4v1234567890123!5m2!1sen!2skh`}
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        className="absolute inset-0"
                                    />
                                </div>
                            </div>

                            {/* Action Buttons with 3D effect */}
                            <div className="grid grid-cols-3 gap-3 md:gap-4 max-w-2xl mx-auto">
                                <a
                                    href={venueDetails.mapsUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="relative group bg-gradient-to-br from-gold via-gold to-gold-dark text-white py-3 md:py-4 px-3 md:px-6 rounded-2xl shadow-[0_6px_20px_-4px_rgba(212,175,55,0.5)] hover:shadow-[0_8px_28px_-4px_rgba(212,175,55,0.7)] transition-all hover:-translate-y-0.5 border border-gold-light/30"
                                >
                                    <div className="flex flex-col md:flex-row items-center justify-center gap-1 md:gap-2">
                                        <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        </svg>
                                        <span className="english-font text-xs md:text-sm font-bold">Maps</span>
                                    </div>
                                </a>

                                <a
                                    href={`tel:${venueDetails.phone}`}
                                    className="relative bg-gradient-to-br from-maroon via-maroon to-maroon/90 text-white py-3 md:py-4 px-3 md:px-6 rounded-2xl shadow-[0_6px_20px_-4px_rgba(94,11,11,0.4)] hover:shadow-[0_8px_28px_-4px_rgba(94,11,11,0.6)] transition-all hover:-translate-y-0.5 border border-gold/20"
                                >
                                    <div className="flex flex-col md:flex-row items-center justify-center gap-1 md:gap-2">
                                        <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                        <span className="english-font text-xs md:text-sm font-bold">Call</span>
                                    </div>
                                </a>

                                <button
                                    onClick={copyAddress}
                                    className="relative bg-white text-maroon py-3 md:py-4 px-3 md:px-6 rounded-2xl shadow-[0_6px_20px_-4px_rgba(0,0,0,0.15)] hover:shadow-[0_8px_28px_-4px_rgba(0,0,0,0.25)] transition-all hover:-translate-y-0.5 border-2 border-gold/40"
                                >
                                    <div className="flex flex-col md:flex-row items-center justify-center gap-1 md:gap-2">
                                        <svg className="w-4 h-4 md:w-5 md:h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                        </svg>
                                        <span className="english-font text-xs md:text-sm font-bold">
                                            {copied ? 'Copied!' : 'Copy'}
                                        </span>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
