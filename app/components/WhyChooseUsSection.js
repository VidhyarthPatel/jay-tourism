import Image from "next/image";

const features = [
  {
    title: "Best Assured Budget Pricing",
    description: "Unbeatable budget friendly tour packages, guaranteed quality. Affordable, remarkable travel experiences. Your go-to choice for unforgettable journeys.",
    icon: "/Budget Pricing icon.webp",
  },
  {
    title: "24x7 Travel Assistance",
    description: "24/7 dedicated travel experts crafting precise itineraries for your ideal North East India experience.",
    icon: "/24_7 support icon.webp",
  },
  {
    title: "Easy & Customized Booking",
    description: "Effortlessly plan your dream vacation with our easy and customized booking options.",
    icon: "/Easy & Customized Booking.webp",
  },
  {
    title: "Best Deal Package",
    description: "We provide the best deal ever, save big with our best offer yet! Limited time only",
    icon: "/Best Deal Package.webp",
  },
  {
    title: "Rewards Points",
    description: "Discover your place and earn rewards with our premier travel program for visitors",
    icon: "/Rewards Points.png",
  },
  {
    title: "Travel Insurance",
    description: "Comprehensive travel insurance providing peace of mind and protection for every journey",
    icon: "/Travel Insurance.png",
  }
];

export default function WhyChooseUsSection() {
  return (
    <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1e2a5e] mb-4 flex items-center justify-center gap-2">
          What makes us the best Tour and Travel Agency
          <svg className="w-8 h-8 text-[#1e2a5e]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
        </h2>
        <p className="text-gray-500 font-medium text-lg">
          All Inclusive Trip Features
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col sm:flex-row gap-6 items-start">
            <div className="flex-shrink-0">
              <Image 
                src={feature.icon} 
                alt={feature.title} 
                width={64} 
                height={64} 
                className="object-contain"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-500 leading-relaxed">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
