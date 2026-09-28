"use client";

import Image from "next/image";
import { useRef } from "react";

const testimonials = [
  {
    text: "We completed our Chardham Yatra by helicopter on 6th June 2025 as a group of six. Despite initial hiccups and weather challenges, the Jay Tours team ensured smooth darshan and timely return to Dehradun. A special thanks to Mr. Mandar for ensuring that my husband and I could continue the journey together after completing the first two dhams.",
    author: "Kanan Nanavati",
    date: "June, 2025",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150",
  },
  {
    text: "It was a pleasure traveling with Jay Tours again—first Europe, now Vietnam—both trips were fantastic! We loved the hotels, itinerary, food, and especially Tour Manager Dr. Mehak's engaging guidance. \n\nLooking forward to more memorable trips with Jay Tours.",
    author: "Geetha Guruswamy",
    date: "January, 2026",
    avatar: "https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&q=80&w=150&h=150",
  },
  {
    text: "My family and I enjoyed a wonderful Europe holiday with Jay Tours last Christmas. The entire trip was well-planned, seamless, and truly memorable. \n\nWe also appreciate the smooth handling of our visa process, which made our journey even easier. We plan to do more such holidays with you.",
    author: "Lawrence Yesudass",
    date: "December, 2025",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=150&h=150",
  },
  {
    text: "My recent trip was exceptionally well planned and executed. The highlight, for sure, was the delicious meals provided which were excellent. \n\nSpecial thanks to the knowledgeable guides and the entire planning team for a great time.",
    author: "Amit Kumar",
    date: "July, 2025",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150&h=150",
  }
];

export default function TestimonialSection() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -350, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 350, behavior: "smooth" });
    }
  };

  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1600px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1e2a5e] text-center mb-12">
          Why Customers Love Jay Tours
        </h2>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x-0 md:divide-x-2 divide-gray-300 mb-16 max-w-4xl mx-auto gap-y-8 md:gap-y-0">
          <div className="px-4 md:px-12 text-center">
            <h3 className="text-4xl md:text-5xl font-bold text-[#3c1782] mb-1">140+</h3>
            <p className="text-gray-500 text-sm md:text-base font-medium">Years of legacy</p>
          </div>
          <div className="px-4 md:px-12 text-center border-l-2 md:border-l-0 border-gray-300">
            <h3 className="text-4xl md:text-5xl font-bold text-[#3c1782] mb-1">4,000+</h3>
            <p className="text-gray-500 text-sm md:text-base font-medium">Tours</p>
          </div>
          <div className="px-4 md:px-12 text-center border-t-2 md:border-t-0 border-gray-300 pt-8 md:pt-0">
            <h3 className="text-4xl md:text-5xl font-bold text-[#3c1782] mb-1">1M+</h3>
            <p className="text-gray-500 text-sm md:text-base font-medium">Happy Travelers</p>
          </div>
          <div className="px-4 md:px-12 text-center border-l-2 md:border-l-0 border-t-2 md:border-t-0 border-gray-300 pt-8 md:pt-0">
            <h3 className="text-4xl md:text-5xl font-bold text-[#3c1782] mb-1">50+</h3>
            <p className="text-gray-500 text-sm md:text-base font-medium">Awards</p>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto gap-6 hide-scrollbar snap-x snap-mandatory py-4"
          >
            {testimonials.map((testimonial, idx) => (
              <div 
                key={idx} 
                className="flex-none w-[320px] md:w-[400px] bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col snap-start"
              >
                {/* Quote Icon */}
                <div className="text-[#3c1782]/20 mb-4">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.46-.599-1.026-.898-1.698-.898-.599 0-1.12.21-1.564.63-.444.42-.667.95-.667 1.593 0 .614.208 1.144.624 1.59.416.447.933.67 1.55.67.24 0 .463-.038.67-.114V16.7c0 1.253-.33 2.25-1 2.992-.67.74-1.568 1.11-2.695 1.11v1.656c1.65 0 2.97-.565 3.96-1.693.99-1.127 1.485-2.607 1.485-4.44V15.757zm8.384 0c0-.88-.23-1.618-.69-2.217-.46-.599-1.025-.898-1.697-.898-.6 0-1.12.21-1.565.63-.445.42-.667.95-.667 1.593 0 .614.208 1.144.624 1.59.416.447.933.67 1.55.67.24 0 .463-.038.67-.114V16.7c0 1.253-.33 2.25-.998 2.992-.67.74-1.569 1.11-2.696 1.11v1.656c1.65 0 2.97-.565 3.96-1.693.99-1.127 1.485-2.607 1.485-4.44V15.757z"/>
                  </svg>
                </div>
                
                {/* Text */}
                <p className="text-[#333] text-sm md:text-base leading-relaxed mb-8 flex-1 whitespace-pre-wrap">
                  {testimonial.text}
                </p>
                
                {/* Author */}
                <div className="flex items-center gap-4 mt-auto">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border border-gray-100">
                    <Image src={testimonial.avatar} alt={testimonial.author} fill className="object-cover" sizes="48px" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#333] text-sm md:text-base leading-none mb-1">{testimonial.author}</h4>
                    <p className="text-gray-500 text-xs md:text-sm">{testimonial.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Buttons */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button 
              onClick={scrollLeft}
              className="w-12 h-12 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
              aria-label="Previous testimonials"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            </button>
            <button 
              onClick={scrollRight}
              className="w-12 h-12 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
              aria-label="Next testimonials"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
