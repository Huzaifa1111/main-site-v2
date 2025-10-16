"use client";

export default function ProductsHero() {
  return (
    <section className="bg-gray-100 relative overflow-hidden text-white  md:pt-40 md:px-32">
      {/* Mobile Logo */}

       {/* Logo on top left */}
        <img
          src="/Group (3).png"
          alt="Naxi Logo"
          className="z-20 absolute left-4 top-4 w-20 h-auto object-contain"
        />
      

      <div className="max-w-7xl mx-auto relative">
        {/* Main Card Container */}
        <div className="relative overflow-hidden shadow-lg rounded-none md:rounded-3xl">
          {/* Product Images */}
          <div className="absolute inset-0 pointer-events-none">
            <img
              src="/cr8.PNG"
              alt="Product 1"
              className="z-20 absolute -left-8 top-7 w-35 h-35 md:left-10 md:w-65 md:h-65 object-contain rotate-12"
            />
            <img
              src="/cr5.png"
              alt="Product 2"
              className="z-20 absolute -left-14 top-31 w-60 h-60 md:left-20 md:top-40 md:w-75 md:h-75 object-contain -rotate-6"
            />
            <img
              src="/it12.webp"
              alt="Product 3"
              className="z-20 absolute -right-2 -bottom-10 w-35 h-35 md:-right-2 md:bottom-25 md:w-75 md:h-75 object-contain rotate-24"
            />
            <img
              src="/cr9.png"
              alt="Product 4"
              className="z-20 absolute -right-8 top-12 w-35 h-35 md:right-40 md:top-35 md:w-85 md:h-85 object-contain -rotate-24"
            />
          </div>

          {/* Main Card Content */}
          <div className="relative bg-[radial-gradient(circle_at_center,#175CFF_0%,#0E3799_100%)] p-6 md:p-12 flex flex-col justify-center items-center text-center h-64 md:h-90 overflow-hidden rounded-none md:rounded-3xl">
            {/* Ellipse Backgrounds */}
            <img
              src="/Ellipse 27 (1).png"
              alt="Background Ellipse 1"
              className="absolute left-1/2 top-70 w-[200px] h-[200px] md:w-[450px] md:h-[450px] transform -translate-x-1/2 -translate-y-1/2  rotate-90"
            />
            <img
              src="/Ellipse 27.png"
              alt="Background Ellipse 2"
              className="absolute left-1/2 top-60 w-[400px] h-[400px] md:w-[1000px] md:h-[1000px] transform -translate-x-1/2 -translate-y-1/2 rotate-110"
            />

            {/* Text Content */}
            <div className="relative z-10">
              <h1 className="text-xl md:text-4xl font-bold mb-2 md:mb-4">
                Sell your <br /> own products!
              </h1>
              <p className="hidden md:block text-xs md:text-base mb-4 md:mb-6 leading-relaxed">
                Source anything from China with Naxi and sell <br className="hidden md:block" /> in
                Pakistan, UAE, UK & Saudi Arabia
              </p>
              <button className="bg-white text-blue-600 mt-2 px-4 py-2 md:px-6 md:py-2 rounded-lg text-xs md:text-base font-medium hover:bg-gray-200">
                Start Selling
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Where can you sell section */}
      <div className="mt-8 md:mt-18 text-center px-4">
        <h2 className="text-xl md:text-4xl font-bold mb-4 md:mb-6 text-black">
          Where can you sell?
        </h2>
        <div className="relative">
          {/* Mobile: Grid layout */}
          <div className="grid grid-cols-4 gap-4 md:hidden">
            <div className="flex flex-col items-center">
              <img
                src="/pakistan.png"
                alt="Pakistan Map"
                className="w-20 h-20 object-contain mb-2"
              />
              <p className="text-black font-semibold text-xs">Pakistan</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="/saudi.png"
                alt="Saudi Arabia Map"
                className="w-20 h-20 object-contain mb-2"
              />
              <p className="text-black font-semibold text-xs">S Arabia</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="/country2.png"
                alt="UAE Map"
                className="w-20 h-20 object-contain mb-2"
              />
              <p className="text-black font-semibold text-xs">U A E</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="/country1.png"
                alt="UK Map"
                className="w-20 h-20 object-contain mb-2"
              />
              <p className="text-black font-bold text-sm">U K</p>
            </div>
          </div>

          {/* Desktop: Flex layout */}
          <div className="hidden md:flex justify-center gap-8 md:gap-32 overflow-x-auto relative z-10 mb-15">
            <div className="flex flex-col items-center flex-shrink-0">
              <img
                src="/pakistan.png"
                alt="Pakistan Map"
                className="w-35 h-35 object-contain mb-2"
              />
              <p className="text-black font-bold">Pakistan</p>
            </div>
            <div className="flex flex-col items-center flex-shrink-0">
              <img
                src="/saudi.png"
                alt="Saudi Arabia Map"
                className="w-35 h-35 object-contain mb-2"
              />
              <p className="text-black font-bold">Saudi Arabia</p>
            </div>
            <div className="flex flex-col items-center flex-shrink-0">
              <img
                src="/country2.png"
                alt="UAE Map"
                className="w-35 h-35 object-contain mb-2"
              />
              <p className="text-black font-bold">United Arab Emirates</p>
            </div>
            <div className="flex flex-col items-center flex-shrink-0">
              <img
                src="/country1.png"
                alt="UK Map"
                className="w-35 h-35 object-contain mb-2"
              />
              <p className="text-black font-bold">United Kingdom</p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats section - Mobile Grid */}
      <div className="px-4 md:px-18 mt-6 md:mt-8 mb-8">
        <div className="bg-[#D9D9D9] text-[#004CFF] p-4 rounded-2xl">
          {/* Mobile: 2x3 Grid */}
          <div className="grid grid-cols-2 gap-8 md:hidden ">
            <div className="text-center">
              <h3 className="text-3xl font-bold">50k+</h3>
              <p className="text-black text-xs font-bold">Sellers</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold">30+</h3>
              <p className="text-black text-xs font-bold">Warehouses</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold">25+</h3>
              <p className="text-black text-xs font-bold">Categories</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold">4+</h3>
              <p className="text-black text-xs font-bold">regions</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold">5+</h3>
              <p className="text-black text-xs font-bold">Years in Business</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold">4+</h3>
              <p className="text-black text-xs font-bold">Shipping Partners</p>
            </div>
          </div>

          {/* Desktop: Flex layout */}
          <div className="hidden md:flex justify-around items-center ">
            <div className="text-center">
              <h3 className="text-4xl font-bold">50k+</h3>
              <p className="text-black text-base">Sellers</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold">30+</h3>
              <p className="text-black text-base">Warehouses</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold">25+</h3>
              <p className="text-black text-base">Categories</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold">4+</h3>
              <p className="text-black text-base">regions</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold">5+</h3>
              <p className="text-black text-base">Years in Business</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold">4+</h3>
              <p className="text-black text-base">Shipping Partners</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}