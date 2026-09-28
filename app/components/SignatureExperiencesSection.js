import Image from "next/image";
import TextAnimation from "./TextAnimation";
import AnimatedButton from "./AnimatedButton";

export default function SignatureExperiencesSection() {
  return (
      <section className="w-full mx-auto px-4 md:px-8 py-24 z-20 relative bg-[#f8f9fc]">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-12">
          <TextAnimation>
            <h2 className="text-[48px] md:text-[64px] leading-[1.05] font-semibold text-[#111] tracking-tight">
              <span className="font-serif font-normal text-gray-500">Signature</span> experiences
            </h2>
          </TextAnimation>
          <TextAnimation delay={0.1}>
            <p className="text-gray-500 text-[17px] max-w-[420px] leading-relaxed font-medium pb-2">
              From private escapes to once-in-a-lifetime adventures, discover journeys designed for those who seek something truly exceptional.
            </p>
          </TextAnimation>
        </div>

        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 -mr-4 pr-4 md:-mr-8 md:pr-8 hide-scrollbar">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl p-3 border border-gray-100 flex flex-col group min-w-[85vw] md:min-w-[55vw] lg:min-w-[550px] snap-start shrink-0">
            <div className="relative w-full aspect-[16/10] md:aspect-[16/9] lg:aspect-[16/10] rounded-xl overflow-hidden mb-4">
              <Image src="https://images.unsplash.com/photo-1605281317010-fe5ffe798166?q=80&w=1200&auto=format&fit=crop" alt="Private Yacht Experience" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="px-2 pb-1 flex-1 flex flex-col">
              <h3 className="text-[24px] md:text-[28px] font-semibold text-[#111] tracking-tight mb-3">Private Yacht Experience</h3>
              <p className="text-gray-500 text-[15px] md:text-[16px] leading-relaxed mb-8 flex-1">
                Sail in complete privacy with personalized service, breathtaking ocean views, and a journey tailored entirely to you.
              </p>
              <AnimatedButton className="w-max" />
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl p-3 border border-gray-100 flex flex-col group min-w-[85vw] md:min-w-[55vw] lg:min-w-[550px] snap-start shrink-0">
            <div className="relative w-full aspect-[16/10] md:aspect-[16/9] lg:aspect-[16/10] rounded-xl overflow-hidden mb-4">
              <Image src="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200&auto=format&fit=crop" alt="Wildlife Safari Adventure" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="px-2 pb-1 flex-1 flex flex-col">
              <h3 className="text-[24px] md:text-[28px] font-semibold text-[#111] tracking-tight mb-3">Wildlife Safari Adventure</h3>
              <p className="text-gray-500 text-[15px] md:text-[16px] leading-relaxed mb-8 flex-1">
                Explore the wild up close with guided safaris, rare wildlife encounters, and unforgettable moments in nature.
              </p>
              <AnimatedButton className="w-max" />
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl p-3 border border-gray-100 flex flex-col group min-w-[85vw] md:min-w-[55vw] lg:min-w-[550px] snap-start shrink-0">
            <div className="relative w-full aspect-[16/10] md:aspect-[16/9] lg:aspect-[16/10] rounded-xl overflow-hidden mb-4">
              <Image src="https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1200&auto=format&fit=crop" alt="Cultural Heritage Tour" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="px-2 pb-1 flex-1 flex flex-col">
              <h3 className="text-[24px] md:text-[28px] font-semibold text-[#111] tracking-tight mb-3">Cultural Heritage Tour</h3>
              <p className="text-gray-500 text-[15px] md:text-[16px] leading-relaxed mb-8 flex-1">
                Immerse yourself in history and tradition with exclusive access to ancient sites and local customs.
              </p>
              <AnimatedButton className="w-max" />
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-2xl p-3 border border-gray-100 flex flex-col group min-w-[85vw] md:min-w-[55vw] lg:min-w-[550px] snap-start shrink-0">
            <div className="relative w-full aspect-[16/10] md:aspect-[16/9] lg:aspect-[16/10] rounded-xl overflow-hidden mb-4">
              <Image src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&w=1200&auto=format&fit=crop" alt="Mountain Retreat" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="px-2 pb-1 flex-1 flex flex-col">
              <h3 className="text-[24px] md:text-[28px] font-semibold text-[#111] tracking-tight mb-3">Mountain Retreat</h3>
              <p className="text-gray-500 text-[15px] md:text-[16px] leading-relaxed mb-8 flex-1">
                Find peace and adventure high above the clouds in our carefully selected mountain hideaways.
              </p>
              <AnimatedButton className="w-max" />
            </div>
          </div>
        </div>

        {/* Carousel Controls */}
        <div className="flex items-center justify-center gap-6 mt-12">
          <button className="w-12 h-12 rounded-full bg-white border border-gray-200 hover:bg-gray-50 flex items-center justify-center text-gray-400 transition-colors shadow-sm">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
          </button>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#111]"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
          </div>
          <button className="w-12 h-12 rounded-full bg-[#111] hover:bg-black flex items-center justify-center text-white shadow-lg shadow-black/20 transition-all hover:scale-105">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
          </button>
        </div>
      </section>
  );
}
