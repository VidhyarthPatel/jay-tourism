"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

import HeroSection from "./components/HeroSection";
import ProvenTrustedSection from "./components/ProvenTrustedSection";
import TourExperienceSection from "./components/TourExperienceSection";
import WhyChooseUsSection from "./components/WhyChooseUsSection";
import FeaturedPackagesSection from "./components/FeaturedPackagesSection";
import SignatureExperiencesSection from "./components/SignatureExperiencesSection";
import WhereToNextSection from "./components/WhereToNextSection";
import SafeHolidaysSection from "./components/SafeHolidaysSection";
import TestimonialSection from "./components/TestimonialSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

export default function Home() {
  const heroBgRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
    });

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);
    gsap.registerPlugin(ScrollTrigger);

    if (heroBgRef.current) {
      gsap.fromTo(
        heroBgRef.current,
        { backgroundPosition: "50% 0px" },
        {
          backgroundPosition: "50% 200px",
          ease: "none",
          scrollTrigger: {
            trigger: heroBgRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }

    return () => {
      gsap.ticker.remove((time) => {
        lenis.raf(time * 1000);
      });
      lenis.destroy();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div className="font-sans overflow-x-hidden bg-[#f8f9fc]">
      <HeroSection ref={heroBgRef} />
      <WhereToNextSection />
      {/* <ProvenTrustedSection /> */}
      {/* <TourExperienceSection /> */}
      <WhyChooseUsSection />
      <SafeHolidaysSection />
      <TestimonialSection />
      <CTASection />
      {/* <FeaturedPackagesSection /> */}
      {/* <SignatureExperiencesSection /> */}
      <Footer />
    </div>
  );
}
