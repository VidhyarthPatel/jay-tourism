import Image from "next/image";
import TextAnimation from "./TextAnimation";
import ImageReveal from "./ImageReveal";

export default function ProvenTrustedSection() {
  return (
      <section className="w-full mx-auto px-4 md:px-8 py-24 z-20 relative">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-12">
          <TextAnimation>
            <h2 className="text-[56px] md:text-[72px] leading-[1.05] font-semibold text-[#111] tracking-tight">
              <span className="font-serif font-normal text-gray-500">Proven</span> & Trusted
            </h2>
          </TextAnimation>
          <TextAnimation delay={0.1}>
            <p className="text-gray-500 text-[17px] max-w-[420px] leading-relaxed font-medium pb-2">
              Millions of travelers, global partners, and industry certifications—everything that defines a travel brand you can trust.
            </p>
          </TextAnimation>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Block (Stats & Achievements) */}
          <div className="flex-1 w-full lg:w-[70%] grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Dark Card */}
            <div className="bg-[#3c1782] rounded-2xl p-8 md:p-10 flex flex-col justify-between text-white col-span-1 min-h-[360px] relative overflow-hidden">
              <div className="flex items-center gap-2 text-white/90">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" /><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" /><path d="M4 22h16" /><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" /><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" /><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" /></svg>
                <span className="font-medium text-[15px]">Achievements</span>
              </div>
              <div className="mt-auto">
                <p className="text-white/70 font-medium text-[12px] mb-2 uppercase tracking-wider">Travellers Served</p>
                <h3 className="text-[52px] font-medium leading-none mb-4 tracking-tight">120,000+</h3>
                <p className="text-white/60 text-[13px] leading-relaxed max-w-[90%]">Guests who have used Cabl to explore Southeast and East Asia over the years.</p>
              </div>
            </div>

            {/* Small Cards Column */}
            <div className="flex flex-col gap-6 col-span-1">
              <div className="bg-white rounded-2xl p-8 flex-1 flex flex-col justify-center border border-gray-100/50 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)]">
                <h4 className="text-[44px] font-medium text-[#111] leading-none mb-2 tracking-tight">15</h4>
                <p className="text-gray-500 font-medium text-[14px] mb-4">Award-Winning Tours</p>
                <div className="flex gap-1 text-[#facc15]">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-8 flex-1 flex flex-col justify-end border border-gray-100/50 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)]">
                <p className="text-gray-400 font-medium text-[13px] leading-relaxed mb-6">From boutique stays to<br />well-known chains</p>
                <h4 className="text-[36px] font-medium text-[#111] leading-none mb-2 tracking-tight">1000+</h4>
                <p className="text-[#111] font-medium text-[14px]">Partner Hotels</p>
              </div>
            </div>

            {/* Image Card */}
            <ImageReveal className="col-span-1 rounded-2xl bg-gray-200 overflow-hidden relative min-h-[360px]">
              <Image src="https://images.unsplash.com/photo-1501555088652-021faa106b9b?q=80&w=2073&auto=format&fit=crop" alt="Hiking landscape" fill className="object-cover" />
            </ImageReveal>

            {/* Countries Covered */}
            <div className="bg-white rounded-2xl p-8 md:p-10 col-span-1 md:col-span-2 border border-gray-100/50 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] flex flex-col md:flex-row justify-between relative overflow-hidden min-h-[300px]">
              <div className="z-10 relative flex flex-col h-full justify-between w-full">
                <h4 className="font-medium text-[18px] text-[#111]">Countries Covered</h4>
                <div className="mt-auto pt-10">
                  <h3 className="text-[44px] font-medium text-[#111] leading-none mb-4 tracking-tight">80+</h3>
                  <p className="text-gray-500 text-[14px] leading-relaxed max-w-[280px] mb-6">Japan, South Korea, Taiwan, Singapore, Malaysia, Thailand, Indonesia, Vietnam</p>
                  <a href="#" className="text-[#0ea5e9] font-medium text-[14px] flex items-center gap-1 hover:gap-2 transition-all">See All <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg></a>
                </div>
              </div>
              <div className="absolute right-[-40px] top-[10%] opacity-20 md:opacity-100 w-[300px] h-[300px] pointer-events-none">
                <Image src="/globe.png" alt="Globe" fill className="object-contain object-right" />
              </div>
            </div>

            {/* Local Guides */}
            <div className="bg-white rounded-2xl p-8 md:p-10 col-span-1 border border-gray-100/50 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] flex flex-col justify-between min-h-[300px]">
              <div className="flex -space-x-3 mb-6">
                <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-300 overflow-hidden relative"><Image src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop" alt="avatar" fill className="object-cover" /></div>
                <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-400 overflow-hidden relative"><Image src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop" alt="avatar" fill className="object-cover" /></div>
                <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-500 overflow-hidden relative"><Image src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop" alt="avatar" fill className="object-cover" /></div>
              </div>
              <div className="mt-auto">
                <h3 className="text-[36px] font-medium text-[#111] leading-none mb-3 tracking-tight">1,000+</h3>
                <h4 className="font-medium text-[14px] text-[#111] mb-2">Local Guides</h4>
                <p className="text-gray-500 text-[13px] leading-relaxed">Experienced, licensed guides who speak English and/or local languages.</p>
              </div>
            </div>

          </div>

          {/* Right Block (Certifications) */}
          <div className="w-full lg:w-[30%] flex flex-col gap-6">
            <div className="bg-white rounded-2xl p-8 lg:p-10 border border-gray-100/50 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] flex-1 flex flex-col">
              <h4 className="font-medium text-[18px] text-[#111] mb-8">Certifications</h4>
              <div className="flex flex-col gap-4 flex-1">
                {/* IATA */}
                <div className="flex-1 bg-[#f8f9fa] rounded-xl flex items-center justify-center p-6 min-h-[140px]">
                  <span className="font-bold text-[36px] tracking-widest text-[#111] flex flex-col items-center leading-none">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" className="mb-2"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.53c-.59-.96-1.55-1.63-2.67-1.85-.32-.06-.67-.1-.98-.12.42-.51.72-1.12.87-1.8H18c.27 0 .54-.03.8-.08.3.74.52 1.54.64 2.38-.45.47-.97.9-1.54 1.27v.2h-.01z" /></svg>
                    IATA
                  </span>
                </div>
                {/* WTTC */}
                <div className="flex-1 bg-[#f8f9fa] rounded-xl flex items-center justify-center p-6 min-h-[140px]">
                  <span className="font-medium text-[18px] text-center text-[#334155] leading-tight flex items-center gap-3">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="text-[#3b82f6]"><path d="M12 2C6.48 2 2 6.48 2 12c0 2.97 1.3 5.64 3.36 7.44l.8-.62c-1.8-1.58-2.96-3.92-2.96-6.52 0-4.73 3.86-8.58 8.6-8.58v-2zM12 22c5.52 0 10-4.48 10-10 0-2.97-1.3-5.64-3.36-7.44l-.8.62c1.8 1.58 2.96 3.92 2.96 6.52 0 4.73-3.86 8.58-8.6 8.58v2z" /></svg>
                    WORLD<br />TRAVEL &<br />TOURISM<br />COUNCIL
                  </span>
                </div>
                {/* ISO */}
                <div className="flex-1 bg-[#f8f9fa] rounded-xl flex items-center justify-center p-6 min-h-[140px]">
                  <span className="font-black text-[44px] tracking-tighter text-[#111] flex flex-col items-center leading-none relative">
                    ISO
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="mt-1"><circle cx="12" cy="12" r="10" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /><path d="M2 12h20" /></svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

  );
}
