import { Globe } from "lucide-react";

export default function RegionSelection() {
  return (
    <div className=" md:bg-gray-100 bg-gray-100">
      <section className="relative flex flex-col items-center p-[60px] text-center text-black overflow-hidden">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-[54px] font-bold md:mb-10  text-black whitespace-nowrap">
          Select your Region.
        </h2>

        {/* Background Globe */}
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-0">
          <img
            src="/globe 1.png"
            alt="Globe Background"
            className="w-[98rem] opacity-90 mt-[28rem]"
          />
        </div>

        {/* Flags */}
        <div className="flex justify-center gap-4 sm:gap-8 md:gap-16 gap-8 mt-[40px] w-full md:w-[75%] relative z-10 flex-nowrap">
          <div className="flex flex-col items-center">
            <img
              src="/pakistan.png"
              alt="Pakistan Map"
              className="w-16 h-16 sm:w-24 sm:h-24 md:w-[160px] md:h-[160px] object-contain mb-2"
            />
            <p className="text-xs sm:text-sm md:text-base font-medium">Pakistan</p>
          </div>

          <div className="flex flex-col items-center">
            <img
              src="/saudi.png"
              alt="Saudi Arabia Map"
              className="w-16 h-16 sm:w-24 sm:h-24 md:w-[160px] md:h-[160px] object-contain mb-2"
            />
            <p className="text-xs sm:text-sm md:text-base font-medium">Saudi Arabia</p>
          </div>

          <div className="flex flex-col items-center">
            <img
              src="/country2.png"
              alt="UAE Map"
              className="w-16 h-16 sm:w-24 sm:h-24 md:w-[160px] md:h-[160px] object-contain mb-2"
            />
            <p className="text-xs sm:text-sm md:text-base font-medium">
              United Arab Emirates
            </p>
          </div>

          <div className="flex flex-col items-center">
            <img
              src="/country1.png"
              alt="UK Map"
              className="w-16 h-16 sm:w-24 sm:h-24 md:w-[160px] md:h-[160px] object-contain mb-2"
            />
            <p className="text-xs sm:text-sm md:text-base  font-semibold">United Kingdom</p>
          </div>
        </div>
      </section>
    </div>
  );
}
