"use client";

import { useRef } from "react";
import gsap from "gsap";

export default function AnimatedButton({ 
  text = "Explore Experience", 
  onClick, 
  className = "" 
}) {
  const textRef = useRef(null);
  const iconRef = useRef(null);

  const handleMouseEnter = () => {
    if (!textRef.current || !iconRef.current) return;
    const textWidth = textRef.current.offsetWidth;
    const iconWidth = iconRef.current.offsetWidth;
    
    const buttonElement = iconRef.current.parentElement;
    const gap = buttonElement ? parseFloat(window.getComputedStyle(buttonElement).gap) || 20 : 20;
    
    gsap.to(iconRef.current, { x: textWidth + gap, rotation: 360, duration: 0.4, ease: "power3.out" });
    gsap.to(textRef.current, { x: -(iconWidth + gap), duration: 0.4, ease: "power3.out" });
  };

  const handleMouseLeave = () => {
    if (!textRef.current || !iconRef.current) return;
    gsap.to(iconRef.current, { x: 0, rotation: 0, duration: 0.4, ease: "power3.out" });
    gsap.to(textRef.current, { x: 0, duration: 0.4, ease: "power3.out" });
  };

  return (
    <button 
      className={`bg-[#3c1782] text-white rounded-xl px-3 py-1.5 md:px-4 md:py-2 flex items-center justify-between gap-3 md:gap-5 text-[13px] md:text-[15px] font-medium transition-colors hover:bg-[#2d1160] shadow-sm relative overflow-hidden ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      <div ref={iconRef} className="bg-white text-[#3c1782] rounded-md md:rounded-lg w-6 h-6 md:w-8 md:h-8 flex items-center justify-center shrink-0">
        <svg className="w-3.5 h-3.5 md:w-[18px] md:h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
      </div>
      <span ref={textRef} className="whitespace-nowrap">{text}</span>
    </button>
  );
}
