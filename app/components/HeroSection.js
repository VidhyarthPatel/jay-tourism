import Image from "next/image";
import { forwardRef } from "react";
import TextAnimation from "./TextAnimation";
import AnimatedButton from "./AnimatedButton";

const HeroSection = forwardRef((props, ref) => {
  return (
    <div className="min-h-screen flex flex-col hero-bg relative" ref={ref}>
      {/* Mobile-only gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/50 to-transparent sm:hidden z-0 pointer-events-none"></div>

      {/* Header */}
      <header className="flex items-center justify-between px-4 sm:px-6 lg:px-8 max-w-[1600px] mx-auto py-6 w-full z-10 relative">
        <div className="flex items-center">
          <Image
            src="/logo.png"
            alt="Jay Tours & Travels Logo"
            width={180}
            height={55}
            className="object-contain h-10 w-auto md:h-12"
            priority
          />
        </div>

        <nav className="hidden lg:flex items-center gap-10">
          <a href="#" className="text-[#3c1782] font-semibold text-[15px] relative after:content-[''] after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-1/2 after:h-[2px] after:bg-[#3c1782]">Home</a>
          <a href="#" className="text-gray-800 hover:text-[#3c1782] font-medium text-[15px] transition">Packages</a>
          <a href="#" className="text-gray-800 hover:text-[#3c1782] font-medium text-[15px] transition">Destinations</a>
          <a href="#" className="text-gray-800 hover:text-[#3c1782] font-medium text-[15px] transition">Services</a>
          <a href="#" className="text-gray-800 hover:text-[#3c1782] font-medium text-[15px] transition">About</a>
          <a href="#" className="text-gray-800 hover:text-[#3c1782] font-medium text-[15px] transition">Contact</a>
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden sm:block">
            <AnimatedButton />
          </div>
          <button className="lg:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5 p-2 rounded-lg hover:bg-gray-100 transition-colors">
            <div className="w-6 h-[2px] bg-gray-800 rounded-full"></div>
            <div className="w-6 h-[2px] bg-gray-800 rounded-full"></div>
            <div className="w-6 h-[2px] bg-gray-800 rounded-full"></div>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col justify-start md:justify-center px-4 sm:px-6 lg:px-8 max-w-[1600px] mx-auto w-full z-10 relative pb-56 md:pb-80 pt-8 md:pt-0">
        <div className="w-full max-w-[750px]">
          {/* Tagline */}
          <div className="inline-flex items-center gap-2 bg-[#f4f1fa] px-4 py-2 rounded-full text-[#5f39c2] font-bold text-[11px] mb-4 md:mb-8 tracking-widest uppercase">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="transform -rotate-45"><path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" /></svg>
            <span>Explore | Experience | Belong</span>
          </div>

          {/* Title */}
          <TextAnimation delay={0.1}>
            <h1 className="text-[40px] md:text-[80px] leading-[1.1] md:leading-[1.05] font-bold text-[#111] mb-3 md:mb-6 tracking-tight">
              Plan your <span className="text-[#3c1782] font-serif italic font-normal">perfect trip</span><br />
              in just minutes
            </h1>
          </TextAnimation>

          {/* Description */}
          <TextAnimation delay={0.2}>
            <p className="text-gray-600 md:text-gray-500 text-[16px] md:text-[18px] mb-6 md:mb-14 max-w-[600px] leading-relaxed font-medium">
              Discover handpicked destinations, exclusive travel packages and unforgettable experiences with Jay Tours & Travels.
            </p>
          </TextAnimation>


          {/* Features */}
          <div className="grid grid-cols-3 md:flex md:flex-wrap md:items-center gap-4 md:gap-14 mb-8 md:mb-0 md:pl-2">
            {/* Feature 1 */}
            <div className="flex flex-col md:flex-row items-center md:items-center gap-2 md:gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#f4f1fa] flex items-center justify-center text-[#5f39c2] shrink-0">
                <svg width="20" height="20" md-width="22" md-height="22" viewBox="0 0 24 24" fill="currentColor" className="transform -rotate-45 w-[20px] h-[20px] md:w-[22px] md:h-[22px]"><path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" /></svg>
              </div>
              <div className="flex flex-col text-center md:text-left">
                <span className="text-[15px] md:text-[17px] font-bold text-gray-900 leading-tight">100+</span>
                <span className="text-[12px] md:text-[14px] text-gray-500 font-medium leading-tight">Destinations</span>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col md:flex-row items-center md:items-center gap-2 md:gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#f4f1fa] flex items-center justify-center text-[#5f39c2] shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-[20px] h-[20px] md:w-[22px] md:h-[22px]"><path d="M3 21h18" /><path d="M9 8h1" /><path d="M9 12h1" /><path d="M9 16h1" /><path d="M14 8h1" /><path d="M14 12h1" /><path d="M14 16h1" /><path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16" /></svg>
              </div>
              <div className="flex flex-col text-center md:text-left">
                <span className="text-[15px] md:text-[17px] font-bold text-gray-900 leading-tight">Best Price</span>
                <span className="text-[12px] md:text-[14px] text-gray-500 font-medium leading-tight">Guaranteed</span>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col md:flex-row items-center md:items-center gap-2 md:gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#f4f1fa] flex items-center justify-center text-[#5f39c2] shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-[20px] h-[20px] md:w-[22px] md:h-[22px]"><path d="M3 18v-6a9 9 0 0 1 18 0v6" /><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" /></svg>
              </div>
              <div className="flex flex-col text-center md:text-left">
                <span className="text-[15px] md:text-[17px] font-bold text-gray-900 leading-tight">24/7</span>
                <span className="text-[12px] md:text-[14px] text-gray-500 font-medium leading-tight">Travel Support</span>
              </div>
            </div>
          </div>

          {/* Mobile CTA Button */}
          <div className="w-full sm:hidden mt-4">
            <button className="w-fit bg-[#3c1782] text-white rounded-xl pr-6 p-2 flex items-center gap-4 text-[15px] font-medium transition-colors hover:bg-[#2d1160] shadow-sm">
              <div className="bg-white text-[#3c1782] rounded-lg w-9 h-9 flex items-center justify-center shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
              </div>
              Explore Experience
            </button>
          </div>
        </div>
      </main>
    </div>

  );
});

export default HeroSection;
