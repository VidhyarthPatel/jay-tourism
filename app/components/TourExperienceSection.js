import Image from "next/image";
import TextAnimation from "./TextAnimation";
import ImageReveal from "./ImageReveal";

export default function TourExperienceSection() {
  return (
      <section className="w-full mx-auto px-4 md:px-8 py-12 md:py-16 z-20 relative">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-8">
          <TextAnimation>
            <h2 className="text-[56px] md:text-[72px] leading-[1.05] font-semibold text-[#111] tracking-tight">
              <span className="font-serif font-normal text-gray-500">Tour</span> experience
            </h2>
          </TextAnimation>
          <TextAnimation delay={0.1}>
            <p className="text-gray-500 text-[17px] max-w-[420px] leading-relaxed font-medium pb-2">
              From breathtaking moments to unforgettable memories, we create journeys that stay with you long after you return.
            </p>
          </TextAnimation>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Video Card 1 */}
          <ImageReveal className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-[1.2/1] max-h-[55vh] rounded-2xl overflow-hidden group cursor-pointer">
            <Image src="https://images.unsplash.com/photo-1520116468816-95b69f847357?q=80&w=800&auto=format&fit=crop" alt="Tour Experience 1" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-16 h-16 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center border border-white/10 text-white shadow-xl transition-transform group-hover:scale-110">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="ml-1"><path d="M8 5v14l11-7z" /></svg>
              </div>
            </div>
          </ImageReveal>

          {/* Video Card 2 */}
          <ImageReveal delay={0.15} className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-[1.2/1] max-h-[55vh] rounded-2xl overflow-hidden group cursor-pointer">
            <Image src="https://images.unsplash.com/photo-1605648916361-9bc12ad6a569?q=80&w=800&auto=format&fit=crop" alt="Tour Experience 2" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-16 h-16 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center border border-white/10 text-white shadow-xl transition-transform group-hover:scale-110">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="ml-1"><path d="M8 5v14l11-7z" /></svg>
              </div>
            </div>
          </ImageReveal>
        </div>

        {/* Carousel Controls */}
        <div className="flex items-center justify-center gap-6 mt-8">
          <button className="w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-400 transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
          </button>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#111]"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-gray-200"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-gray-200"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-gray-200"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-gray-200"></div>
          </div>
          <button className="w-12 h-12 rounded-full bg-[#111] hover:bg-black flex items-center justify-center text-white shadow-lg shadow-black/20 transition-all hover:scale-105">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
          </button>
        </div>
      </section>

  );
}
