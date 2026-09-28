import Image from "next/image";

const commitments = [
  {
    title: "Comfortable Stays",
    description: "Relax in clean, cozy, and well-equipped accommodations throughout your trip.",
    image: "/Comfortable Stays.png",
  },
  {
    title: "Hygienic Dining Options",
    description: "Enjoy delicious meals prepared and served with top hygiene standards.",
    image: "/Hygienic Dining Options.png",
  },
  {
    title: "Safe & Reliable Transfers",
    description: "Travel worry-free with sanitized vehicles and professional drivers.",
    image: "/Safe & Reliable Transfers.png",
  },
  {
    title: "On-Ground Travel Support",
    description: "Get 24x7 assistance from our local travel experts whenever you need help.",
    image: "/On-Ground Travel Support.png",
  },
];

export default function SafeHolidaysSection() {
  return (
    <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-20 relative overflow-hidden">
      {/* Background Palm Tree Watermark (Optional SVG) */}
      <div className="absolute bottom-0 right-0 opacity-10 pointer-events-none translate-x-1/4 translate-y-1/4">
        <svg width="300" height="300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22V12M12 12C12 12 8 10 5 13M12 12C12 12 16 10 19 13M12 12C12 12 9 7 5 5M12 12C12 12 15 7 19 5M12 12C12 12 10 3 12 2C14 3 12 12 12 12z" />
        </svg>
      </div>

      <div className="text-center max-w-4xl mx-auto mb-14 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1e2a5e] mb-4 flex items-center justify-center gap-2">
          Our Commitment to Safe Holidays
          <svg className="w-8 h-8 text-[#1e2a5e]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
        </h2>
        <p className="text-gray-500 font-medium text-lg md:text-xl">
          We are actively working with our holiday partners to ensure safety measures for a worry-free and comfortable vacation.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
        {commitments.map((item, index) => (
          <div key={index} className="flex flex-col">
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-5 bg-white shadow-sm">
              <Image 
                src={item.image} 
                alt={item.title} 
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
