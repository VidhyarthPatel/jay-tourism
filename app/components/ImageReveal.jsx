"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ImageReveal({
  children,
  delay = 0,
  duration = 1.2,
  ease = "power4.out",
  className = "",
}) {
  const wrapperRef = useRef(null);
  const innerRef = useRef(null);

  useEffect(() => {
    if (!wrapperRef.current || !innerRef.current) return;

    // Set initial state — clipped from bottom, inner scaled up slightly
    gsap.set(wrapperRef.current, {
      clipPath: "inset(100% 0% 0% 0%)",
    });
    gsap.set(innerRef.current, {
      scale: 1.3,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrapperRef.current,
        start: "top 50%",
        once: true,
      },
    });

    tl.to(wrapperRef.current, {
      clipPath: "inset(0% 0% 0% 0%)",
      duration: duration,
      ease: ease,
      delay: delay,
    }).to(
      innerRef.current,
      {
        scale: 1,
        duration: duration * 1.2,
        ease: ease,
      },
      0 // start at the same time
    );

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, [delay, duration, ease]);

  return (
    <div ref={wrapperRef} className={className} style={{ overflow: "hidden" }}>
      <div ref={innerRef} style={{ width: "100%", height: "100%" }}>
        {children}
      </div>
    </div>
  );
}
