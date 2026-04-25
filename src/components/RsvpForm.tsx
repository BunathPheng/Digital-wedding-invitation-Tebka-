"use client";

import React, { useState } from 'react';

export default function RsvpForm() {
    const [name, setName] = useState("");
    const [guests, setGuests] = useState("១ នាក់ (1 Guest)");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!name.trim()) return;

        setStatus("loading");

        try {
            const res = await fetch("/api/rsvp", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, guests }),
            });

            if (!res.ok) throw new Error("Failed to submit");
            
            setStatus("success");
            setName("");
        } catch (error) {
            console.error(error);
            setStatus("error");
        }
    };

    if (status === "success") {
        return (
            <div className="text-center py-10 space-y-4 animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <h3 className="khmer-font text-2xl md:text-3xl text-maroon font-bold">សូមអរគុណ!</h3>
                <p className="english-font text-brown/80">Your RSVP has been successfully sent to the couple via Telegram.</p>
                <button onClick={() => setStatus("idle")} className="mt-6 text-maroon font-bold underline">Submit another</button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6 md:space-y-10 relative">
            <div className="trad-form-group">
                <label className="trad-form-label text-base md:text-xl">ឈ្មោះពេញ / Full Name</label>
                <input 
                    type="text" 
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="trad-form-input text-base md:text-xl" 
                    placeholder="សូមសរសេរឈ្មោះនៅទីនេះ..." 
                    disabled={status === "loading"}
                />
            </div>
            <div className="trad-form-group">
                <label className="trad-form-label text-base md:text-xl">ចំនួនអ្នកចូលរួម / Number of Guests</label>
                <select 
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="trad-form-input appearance-none text-base md:text-xl"
                    disabled={status === "loading"}
                >
                    <option>១ នាក់ (1 Guest)</option>
                    <option>២ នាក់ (2 Guests)</option>
                    <option>៣ នាក់ (3 Guests)</option>
                    <option>៤ នាក់ (4 Guests)</option>
                    <option>៥ នាក់ (5 Guests)</option>
                    <option>៦ នាក់ (6 Guests)</option>
                    <option>ច្រើនជាង ៦ នាក់ (&gt;6 Guests)</option>
                </select>
            </div>
            
            {status === "error" && (
                <p className="text-red-500 text-center font-bold">Sorry, there was an error sending your RSVP. Please try again.</p>
            )}

            <button 
                type="submit" 
                disabled={status === "loading"}
                className="w-full bg-maroon text-white py-4 md:py-6 rounded-xl khmer-font text-lg md:text-2xl font-black border-2 border-gold shadow-2xl hover:bg-maroon-light transition-all active:scale-95 disabled:opacity-70 disabled:pointer-events-none flex items-center justify-center gap-2"
            >
                {status === "loading" ? (
                    <svg className="animate-spin h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                ) : "បញ្ជូនការបញ្ជាក់ / Submit RSVP"}
            </button>
        </form>
    );
}
