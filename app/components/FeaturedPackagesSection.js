import Image from "next/image";
import TextAnimation from "./TextAnimation";

export default function FeaturedPackagesSection() {
  return (
      <section className="w-full mx-auto px-4 md:px-8 py-24 z-20 relative bg-white">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-12">
          <div className="flex items-start gap-3">
            <TextAnimation>
              <h2 className="text-[48px] md:text-[64px] leading-[1.05] font-semibold text-[#111] tracking-tight">
                <span className="font-serif font-normal text-gray-500">Featured</span> packages
              </h2>
            </TextAnimation>
          </div>
          <TextAnimation delay={0.1}>
            <p className="text-gray-500 text-[17px] max-w-[420px] leading-relaxed font-medium pb-2 lg:text-right">
              From tropical escapes to cultural adventures, discover destinations curated for unforgettable experiences.
            </p>
          </TextAnimation>
        </div>

        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 -mr-4 pr-4 md:-mr-8 md:pr-8 hide-scrollbar">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl p-5 md:p-6 border border-gray-100 flex flex-col group min-w-[85vw] md:min-w-[55vw] lg:min-w-[550px] snap-start shrink-0">
            <div className="relative w-full aspect-[16/10] md:aspect-[16/9] lg:aspect-[16/10] rounded-xl overflow-hidden mb-6">
              <Image src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1200&auto=format&fit=crop" alt="Nusa Dua Beach" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center text-white hover:bg-[#3c1782] transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
              </button>
            </div>
            <div className="px-2 pb-2 flex-1 flex flex-col">
              <h3 className="text-[24px] md:text-[28px] font-semibold text-[#111] tracking-tight mb-3">Nusa Dua Beach</h3>
              <div className="flex items-center text-gray-500 text-[15px] md:text-[16px] mb-5 font-medium">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                Indonesia
              </div>
              <div className="flex items-center gap-6 text-gray-500 text-[14px] md:text-[15px] mb-8 font-medium">
                <div className="flex items-center gap-2">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                  10 Days
                </div>
                <div className="flex items-center gap-2">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                  From 2-50
                </div>
              </div>
              <div className="mt-auto pt-5 border-t border-gray-100 flex items-center justify-between">
                <div>
                  <span className="text-[12px] text-gray-500 font-medium block mb-0.5">Starting from</span>
                  <span className="text-[18px] font-bold text-[#3c1782] tracking-tight">$1,299</span>
                </div>
                <div className="flex items-center gap-1.5 bg-[#f4f1fa] text-[#3c1782] px-3 py-1.5 rounded-lg text-[13px] font-semibold transition-colors cursor-pointer group-hover:bg-[#3c1782] group-hover:text-white">
                  View Details
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl p-5 md:p-6 border border-gray-100 flex flex-col group min-w-[85vw] md:min-w-[55vw] lg:min-w-[550px] snap-start shrink-0">
            <div className="relative w-full aspect-[16/10] md:aspect-[16/9] lg:aspect-[16/10] rounded-xl overflow-hidden mb-6">
              <Image src="https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?q=80&w=1200&auto=format&fit=crop" alt="Mystic Temples of Java" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center text-white hover:bg-[#3c1782] transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
              </button>
            </div>
            <div className="px-2 pb-2 flex-1 flex flex-col">
              <h3 className="text-[24px] md:text-[28px] font-semibold text-[#111] tracking-tight mb-3">Mystic Temples of Java</h3>
              <div className="flex items-center text-gray-500 text-[15px] md:text-[16px] mb-5 font-medium">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                Indonesia
              </div>
              <div className="flex items-center gap-6 text-gray-500 text-[14px] md:text-[15px] mb-8 font-medium">
                <div className="flex items-center gap-2">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                  5 Days
                </div>
                <div className="flex items-center gap-2">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                  From 2-50
                </div>
              </div>
              <div className="mt-auto pt-5 border-t border-gray-100 flex items-center justify-between">
                <div>
                  <span className="text-[12px] text-gray-500 font-medium block mb-0.5">Starting from</span>
                  <span className="text-[18px] font-bold text-[#3c1782] tracking-tight">$1,299</span>
                </div>
                <div className="flex items-center gap-1.5 bg-[#f4f1fa] text-[#3c1782] px-3 py-1.5 rounded-lg text-[13px] font-semibold transition-colors cursor-pointer group-hover:bg-[#3c1782] group-hover:text-white">
                  View Details
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl p-5 md:p-6 border border-gray-100 flex flex-col group min-w-[85vw] md:min-w-[55vw] lg:min-w-[550px] snap-start shrink-0">
            <div className="relative w-full aspect-[16/10] md:aspect-[16/9] lg:aspect-[16/10] rounded-xl overflow-hidden mb-6">
              <Image src="https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=1200&auto=format&fit=crop" alt="The Toraja Heritage Trail" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center text-white hover:bg-[#3c1782] transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
              </button>
            </div>
            <div className="px-2 pb-2 flex-1 flex flex-col">
              <h3 className="text-[24px] md:text-[28px] font-semibold text-[#111] tracking-tight mb-3">The Toraja Heritage Trail</h3>
              <div className="flex items-center text-gray-500 text-[15px] md:text-[16px] mb-5 font-medium">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                Indonesia
              </div>
              <div className="flex items-center gap-6 text-gray-500 text-[14px] md:text-[15px] mb-8 font-medium">
                <div className="flex items-center gap-2">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                  10 Days
                </div>
                <div className="flex items-center gap-2">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                  From 2-50
                </div>
              </div>
              <div className="mt-auto pt-5 border-t border-gray-100 flex items-center justify-between">
                <div>
                  <span className="text-[12px] text-gray-500 font-medium block mb-0.5">Starting from</span>
                  <span className="text-[18px] font-bold text-[#3c1782] tracking-tight">$1,299</span>
                </div>
                <div className="flex items-center gap-1.5 bg-[#f4f1fa] text-[#3c1782] px-3 py-1.5 rounded-lg text-[13px] font-semibold transition-colors cursor-pointer group-hover:bg-[#3c1782] group-hover:text-white">
                  View Details
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-2xl p-5 md:p-6 border border-gray-100 flex flex-col group min-w-[85vw] md:min-w-[55vw] lg:min-w-[550px] snap-start shrink-0">
            <div className="relative w-full aspect-[16/10] md:aspect-[16/9] lg:aspect-[16/10] rounded-xl overflow-hidden mb-6">
              <Image src="https://images.unsplash.com/photo-1512100356356-de1b84283e18?q=80&w=1200&auto=format&fit=crop" alt="Komodo Island Adventure" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center text-white hover:bg-[#3c1782] transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
              </button>
            </div>
            <div className="px-2 pb-2 flex-1 flex flex-col">
              <h3 className="text-[24px] md:text-[28px] font-semibold text-[#111] tracking-tight mb-3">Komodo Island Adventure</h3>
              <div className="flex items-center text-gray-500 text-[15px] md:text-[16px] mb-5 font-medium">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                Indonesia
              </div>
              <div className="flex items-center gap-6 text-gray-500 text-[14px] md:text-[15px] mb-8 font-medium">
                <div className="flex items-center gap-2">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                  8 Days
                </div>
                <div className="flex items-center gap-2">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                  From 2-20
                </div>
              </div>
              <div className="mt-auto pt-5 border-t border-gray-100 flex items-center justify-between">
                <div>
                  <span className="text-[12px] text-gray-500 font-medium block mb-0.5">Starting from</span>
                  <span className="text-[18px] font-bold text-[#3c1782] tracking-tight">$2,499</span>
                </div>
                <div className="flex items-center gap-1.5 bg-[#f4f1fa] text-[#3c1782] px-3 py-1.5 rounded-lg text-[13px] font-semibold transition-colors cursor-pointer group-hover:bg-[#3c1782] group-hover:text-white">
                  View Details
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

  );
}
