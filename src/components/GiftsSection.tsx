"use client";

import React, { useState } from 'react';
import Image from 'next/image';

export default function GiftsSection() {
    const [activeTab, setActiveTab] = useState<'groom' | 'bride'>('groom');

    const accounts = {
        groom: {
            bank: "ABA Bank",
            name: "PUTTHA GNANH",
            khr: "003 764 045",
            usd: "007 291 115",
            qr: "/images/image.png"
        },
        bride: {
            bank: "ABA Bank",
            name: "CHAN DEVI",
            khr: "003 764 045", // Assuming same for bride for now unless told otherwise
            usd: "007 291 115",
            qr: "/images/image.png"
        }
    };

    return (
        <section id="gifts" className="py-16 md:py-32 relative overflow-hidden">
            <div className="section-container mx-auto max-w-4xl px-4 relative z-10">
                <div className="kbach-divider mb-8 md:mb-16" />
                <div className="trad-section-title">
                    <span>Wedding Blessings</span>
                    <h2 className="text-2xl md:text-5xl">អំណោយសប្បុរសធម៌</h2>
                </div>

                <div className="text-center mb-12 max-w-2xl mx-auto">
                    <p className="khmer-font text-lg md:text-xl text-brown/80 leading-relaxed">
                        វត្តមានរបស់លោកអ្នកគឺជាកិត្តិយសដ៏ខ្ពង់ខ្ពស់បំផុតសម្រាប់យើងខ្ញុំ។
                        ប្រសិនបើលោកអ្នកចង់ផ្ដល់ជាអំណោយមង្គល លោកអ្នកអាចផ្ទេរតាមរយៈគណនីខាងក្រោម៖
                    </p>
                </div>

                <div className="bg-white/80 backdrop-blur-md rounded-[32px] border-2 border-gold/20 shadow-xl overflow-hidden">
                    {/* Tab Switcher */}
                    <div className="flex border-b border-gold/10">
                        <button
                            onClick={() => setActiveTab('groom')}
                            className={`flex-1 py-4 md:py-6 khmer-font text-lg md:text-xl font-bold transition-all ${activeTab === 'groom' ? 'bg-maroon text-white animate-pulse-soft' : 'text-maroon/60 hover:bg-gold/5'}`}
                        >
                            ខាងកូនកំលោះ
                        </button>
                        <button
                            onClick={() => setActiveTab('bride')}
                            className={`flex-1 py-4 md:py-6 khmer-font text-lg md:text-xl font-bold transition-all ${activeTab === 'bride' ? 'bg-maroon text-white animate-pulse-soft' : 'text-maroon/60 hover:bg-gold/5'}`}
                        >
                            ខាងកូនក្រមុំ
                        </button>
                    </div>

                    <div className="p-8 md:p-12">
                        <div className="grid md:grid-cols-2 gap-10 items-center">
                            {/* QR Code */}
                            <div className="relative aspect-[3/4] max-w-[320px] mx-auto w-full group">
                                <div className="absolute -inset-4 bg-gradient-to-tr from-gold/20 to-maroon/10 rounded-3xl blur-2xl opacity-50 group-hover:opacity-100 transition-opacity" />
                                <div className="relative h-full w-full bg-white rounded-2xl border-2 border-gold/30 shadow-lg overflow-hidden flex items-center justify-center p-2">
                                    <Image 
                                        src={accounts[activeTab].qr} 
                                        alt={`${accounts[activeTab].name} QR Code`} 
                                        fill 
                                        sizes="(max-width: 768px) 100vw, 320px"
                                        className="object-contain p-4"
                                    />
                                </div>
                            </div>

                            {/* Bank Details */}
                            <div className="text-center md:text-left space-y-6">
                                <div>
                                    <h4 className="english-font text-gold-dark font-bold tracking-widest text-sm mb-1 uppercase">Bank Vendor</h4>
                                    <p className="khmer-font text-2xl md:text-3xl font-black text-maroon">{accounts[activeTab].bank}</p>
                                </div>
                                <div>
                                    <h4 className="english-font text-gold-dark font-bold tracking-widest text-sm mb-1 uppercase">Account Name</h4>
                                    <p className="khmer-font text-xl md:text-2xl font-black text-maroon tracking-wide uppercase">{accounts[activeTab].name}</p>
                                </div>
                                
                                {/* KHR Account */}
                                <div>
                                    <h4 className="english-font text-gold-dark font-bold tracking-widest text-xs mb-1 uppercase">KHR Account</h4>
                                    <div className="flex items-center justify-center md:justify-start gap-3">
                                        <p className="english-font text-xl md:text-2xl font-black text-maroon tracking-tighter">{accounts[activeTab].khr}</p>
                                        <button
                                            onClick={() => {
                                                navigator.clipboard.writeText(accounts[activeTab].khr);
                                                alert('KHR Account copied!');
                                            }}
                                            className="p-2 hover:bg-gold/10 rounded-full transition-colors"
                                            title="Copy KHR Account"
                                        >
                                            <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>

                                {/* USD Account */}
                                <div>
                                    <h4 className="english-font text-gold-dark font-bold tracking-widest text-xs mb-1 uppercase">USD Account</h4>
                                    <div className="flex items-center justify-center md:justify-start gap-3">
                                        <p className="english-font text-xl md:text-2xl font-black text-maroon tracking-tighter">{accounts[activeTab].usd}</p>
                                        <button
                                            onClick={() => {
                                                navigator.clipboard.writeText(accounts[activeTab].usd);
                                                alert('USD Account copied!');
                                            }}
                                            className="p-2 hover:bg-gold/10 rounded-full transition-colors"
                                            title="Copy USD Account"
                                        >
                                            <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12 text-center reveal-up">
                    <p className="khmer-font text-2xl md:text-3xl text-maroon font-black">
                        សូមអរគុណសម្រាប់ទឹកចិត្តដ៏ថ្លៃថ្លា!
                    </p>
                </div>
            </div>
        </section>
    );
}
