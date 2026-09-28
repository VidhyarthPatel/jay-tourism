"use client";

import Image from "next/image";

const destinations = [
  {
    title: "Singapore",
    activities: "694 activities",
    image: "/singaporeImg.png",
  },
  {
    title: "Hanoi",
    activities: "271 activities",
    image: "/vietnamImg.png",
  },
  {
    title: "Bangkok",
    activities: "688 activities",
    image: "/ThailandImg.png",
  },
  {
    title: "Kyoto",
    activities: "701 activities",
    image: "/JapanImg.png",
  },
  {
    title: "Dubai",
    activities: "405 activities",
    image: "/DubaiImg.webp",
  },
  {
    title: "Europe",
    activities: "800+ activities",
    image: "/europeImg.webp",
  },
  {
    title: "Turkey",
    activities: "350 activities",
    image: "/TurkeyImg.png",
  },
  {
    title: "Africa",
    activities: "500 activities",
    image: "/AfricaImg.webp",
  }
];

export default function WhereToNextSection() {
  return (
    <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex justify-between items-end mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
          Where to next?
        </h2>
        <button className="text-gray-900 font-semibold hover:underline decoration-2 underline-offset-4 hidden sm:block transition-all">
          See more
        </button>
      </div>

      <div className="relative">
        <div className="flex overflow-x-auto sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 pb-4 hide-scrollbar snap-x snap-mandatory sm:snap-none">
          {destinations.map((dest, index) => (
            <div
              key={index}
              className="relative flex-none w-[75vw] sm:w-full max-w-[280px] sm:max-w-none aspect-[3/2] rounded-2xl overflow-hidden group/card cursor-pointer snap-start sm:snap-align-none"
            >
              <Image
                src={dest.image}
                alt={dest.title}
                fill
                className="object-cover transition-transform duration-500 group-hover/card:scale-105"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-x-0 bottom-0 h-[70%] bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 p-3 sm:p-5 w-full">
                <h3 className="text-white text-lg sm:text-xl md:text-2xl font-bold mb-0.5 sm:mb-1 drop-shadow-md leading-tight">
                  {dest.title}
                </h3>
                <p className="text-gray-200 text-xs sm:text-sm md:text-base font-medium drop-shadow-sm">
                  {dest.activities}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button className="w-full text-center mt-6 text-gray-900 font-semibold hover:underline decoration-2 underline-offset-4 sm:hidden">
        See more
      </button>
    </section>
  );
}
