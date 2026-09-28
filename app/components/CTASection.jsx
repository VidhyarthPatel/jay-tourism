import React from 'react';

export default function CTASection() {
  return (
    <section className="relative w-full h-[450px] md:h-[500px] lg:h-[600px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-[url('/CTABg.webp')] bg-cover bg-center bg-no-repeat"
        aria-hidden="true"
      />
      
      {/* Dark Overlay for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6 tracking-tight">
            Schedule a <span className="text-[#a67cff]">Travel<br/>Discovery</span> Call
          </h2>
          
          <p className="text-gray-200 text-lg md:text-xl font-medium mb-10 max-w-xl leading-relaxed">
            Planning a trip? Looking for expert advice or a custom itinerary?<br className="hidden md:block" />
            Let&apos;s discuss your travel plans and make it happen.
          </p>
          
          <button className="inline-flex items-center justify-center gap-2 bg-[#a67cff] hover:bg-[#9565f8] text-[#1a0b33] font-bold text-[15px] px-8 py-4 rounded-xl transition-all hover:scale-105 active:scale-95 shadow-lg">
            Let&apos;s Connect
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
