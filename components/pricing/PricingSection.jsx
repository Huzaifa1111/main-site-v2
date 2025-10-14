"use client";

import Image from "next/image";

export default function PricingSection() {
  const platforms = [
    "path46.png",
    "layer1.png",
    "layer1 (1).png",
    "Shopify.png",
    "Wordpress_logo 1.png",
    "group (4).png",
    "path833.png",
    "Group 3.png",
    "snapchat.PNg",
  ];

  const plans = [
    {
      gradient: "bg-gradient-to-br from-[#D9D9D9] to-[#737373]",
      icon: "/vector (24).png",
      title: "Basic Plan",
      price: "$29",
      period: "/month"
    },
    {
      gradient: "bg-gradient-to-br from-[#467DFF] to-[#004CFF]",
      icon: "/vector (24).png",
      title: "Pro Plan",
      price: "$79",
      period: "/month"
    },
    {
      gradient: "bg-gradient-to-br from-[#0B1B41] to-[#1C45A7]",
      icon: "/vector (24).png",
      title: "Enterprise Plan",
      price: "$199",
      period: "/month"
    },
  ];

  return (
    <section className="relative">
      {/* Top Section with Product Image and Platforms */}
      <div className="relative max-w-full md:py-10 text-center bg-[#0F255A] overflow-visible">
        {/* Floating Images - Moved outside the blue section container */}
        
        {/* Heading */}
        <h1 className="text-2xl md:text-[40px] font-bold text-white mb-10 px-4 pt-4 md:pt-0">
          All your stores, <br />in one place
        </h1>

        {/* Desktop Platform Layout - 4 in first row, 5 in second row */}
        <div className="hidden md:flex flex-col items-center gap-8 mb-12">
          <div className="flex justify-center gap-8 lg:gap-14">
            {platforms.slice(0, 4).map((platform, index) => (
              <Image
                key={index}
                src={`/${platform}`}
                alt={`${platform.split(".")[0]} logo`}
                width={100}
                height={100}
                className="object-contain"
              />
            ))}
          </div>
          <div className="flex justify-center gap-8 lg:gap-14">
            {platforms.slice(4).map((platform, index) => (
              <Image
                key={index + 4}
                src={`/${platform}`}
                alt={`${platform.split(".")[0]} logo`}
                width={100}
                height={100}
                className="object-contain"
              />
            ))}
          </div>
        </div>

        {/* Mobile Platform Layout - 3 images per row */}
        <div className="md:hidden flex flex-col items-center gap-8 mb-10  ">
          <div className="flex justify-center gap-6">
            {platforms.slice(0, 3).map((platform, index) => (
              <Image
                key={index}
                src={`/${platform}`}
                alt={`${platform.split(".")[0]} logo`}
                width={90}
                height={90}
                className="object-contain"
              />
            ))}
          </div>
          <div className="flex justify-center gap-6">
            {platforms.slice(3, 6).map((platform, index) => (
              <Image
                key={index + 3}
                src={`/${platform}`}
                alt={`${platform.split(".")[0]} logo`}
                width={90}
                height={90}
                className="object-contain"
              />
            ))}
          </div>
          <div className="flex justify-center gap-6">
            {platforms.slice(6).map((platform, index) => (
              <Image
                key={index + 6}
                src={`/${platform}`}
                alt={`${platform.split(".")[0]} logo`}
                width={90}
                height={90}
                className="object-contain"
              />
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:space-x-4 mb-6 px-4">
          <button className="bg-white text-sm md:text-lg text-black px-6 py-1 rounded-lg md:font-semibold hover:bg-gray-200">
            Browse
          </button>
          <a href="#" className="md:mb-0 mb-12 text-white text-xs md:text-lg hover:text-gray-300">
            Still have questions? <span className="underline ">Learn more</span>
          </a>
        </div>
      </div>

      {/* Floating Images - Now placed between sections to overlap both */}
      <div className="absolute top-0 left-0 w-full h-0 z-20">
        {/* Desktop Floating Images */}
        <div className="absolute top-8 left-0 hidden md:block">
          <Image src="/image 10.png" alt="Product" width={280} height={280} className="object-contain" />
        </div>
        <div className="absolute right-0 top-8 hidden md:block">
          <Image src="/bigheadphone.png" alt="Headphones" width={280} height={280} className="object-contain" />
        </div>

        {/* Mobile Floating Images */}
        <div className="absolute -top-14 left-2 md:hidden z-30">
          <Image src="/my1.png" alt="Product" width={112} height={112} className="object-contain" />
        </div>
        <div className="absolute right-0 top-75 md:hidden z-30">
          <Image src="/my2.png" alt="Headphones" width={120} height={120} className="object-contain" />
        </div>
      </div>

      {/* Pricing Section */}
      <div className="relative max-w-full text-center bg-gray-100 overflow-visible">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 pt-12 ">Pricing</h2>
        
        {/* Mobile Horizontal Scroll */}
        <div className="md:hidden relative px-6 mb-8">
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-gray-100 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-gray-100 to-transparent z-10 pointer-events-none" />
          <div className="flex gap-4 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory">
            {plans.map((plan, index) => (
              <div key={index} className={`${plan.gradient} min-w-[280px] p-6 rounded-3xl shadow-lg text-white snap-center flex flex-col`}>
                <Image src={plan.icon} alt={`${plan.title} icon`} width={50} height={50} className="mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-2">{plan.title}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-lg">{plan.period}</span>
                </div>
                <p className="text-sm leading-relaxed flex-grow">
                  Naxi's strategically located UAE warehouses are your ultimate advantage. We store, pack, and ship everything for you, ensuring lightning-fast delivery across all seven emirates.
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Grid Layout */}
        <div className="hidden md:grid grid-cols-3 gap-10 md:gap-16 px-6 md:px-70">
          {plans.map((plan, index) => (
            <div key={index} className={`${plan.gradient} p-8 md:p-12 rounded-3xl shadow-lg text-white transition-transform duration-300 hover:scale-105`}>
              <Image src={plan.icon} alt={`${plan.title} icon`} width={65} height={65} className="mx-auto mb-8 md:mb-12" />
              <h3 className="text-2xl md:text-3xl font-semibold mb-4">{plan.title}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-xl">{plan.period}</span>
              </div>
              <p className="text-sm md:text-md leading-relaxed">
                Naxi's strategically located UAE warehouses are your ultimate advantage. We store, pack, and ship everything for you, ensuring lightning-fast delivery across all seven emirates.
              </p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-base md:text-xl underline font-semibold pb-20 cursor-pointer hover:text-blue-600">
          Compare plans
        </p>
      </div>
    </section>
  );
}