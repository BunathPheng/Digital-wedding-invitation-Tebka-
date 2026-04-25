"use client";

import { Home, Calendar, MapPin, Camera, QrCode, MessageCircle } from "lucide-react";
import { useState } from "react";

export default function MenuBar() {
  const [activeTab, setActiveTab] = useState("calendar");

  const menuItems = [
    { id: "home", icon: Home, href: "#hero" },
    { id: "calendar", icon: Calendar, href: "#timeline" }, // or similar
    { id: "location", icon: MapPin, href: "#location" },
    { id: "gallery", icon: Camera, href: "#gallery" },
    { id: "qrcode", icon: QrCode, href: "#rsvp" }, // Or whatever section
    { id: "chat", icon: MessageCircle, href: "#messages" }, // Or similar
  ];

  return (
    <div className="fixed bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] md:w-auto max-w-[28rem] md:max-w-max">
      <div className="bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.12)] px-3 py-2 md:px-6 md:py-3 flex items-center justify-between md:justify-center md:gap-8 border border-gray-100 w-full">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;

          return (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                const element = document.querySelector(item.href);
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="relative flex items-center justify-center transition-all duration-300"
              aria-label={item.id}
            >
              {/* Active Indicator Dot */}
              {isActive && (
                <div className="absolute -top-1 -right-1 w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-[#8A9A5B] z-10 border border-white" />
              )}
              
              {/* Icon Container */}
              <div
                className={`relative flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full transition-all duration-300 ${
                  isActive ? "bg-[#556B2F] scale-105 md:scale-110" : "bg-transparent hover:bg-gray-50"
                }`}
              >
                <Icon
                  className={`w-5 h-5 md:w-6 md:h-6 transition-all duration-300 ${
                    isActive ? "text-white" : "text-[#556B2F]"
                  }`}
                  strokeWidth={2}
                />
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
