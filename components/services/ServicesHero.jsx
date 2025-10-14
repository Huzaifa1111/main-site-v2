import Image from 'next/image';

export default function ServicesHero() {
  return (
    <section className="bg-gray-100">
      {/* Mobile Layout */}
      <div className="md:hidden pt-30 pb-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-[#0E3799] to-[#175CFF] text-white p-6 rounded-3xl flex flex-col items-center">
             <div className="w-full">
              <Image
                src="/ser1 (2).png"
                alt="Services Overview"
                width={400}
                height={200}
                className="w-full h-auto rounded-2xl object-cover"
                priority
              />
            <div className="w-full text-left mb-6 mt-6">
              <h1 className="text-2xl font-bold mb-4">Our Services</h1>
              <p className="text-sm mb-6 leading-relaxed">
                Discover Naxi's top-notch services, designed to empower your business with competitive rates and exceptional quality.
              </p>
              <button className="px-6 py-2 bg-white text-black rounded-xl hover:bg-gray-200 transition-colors">
                Sign Up
              </button>
            </div>
           
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block pt-32 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-[#0E3799] to-[#175CFF] text-white p-10 rounded-3xl flex flex-row items-center gap-12">
            <div className="w-1/2">
              <h1 className="text-4xl font-bold mb-6">Our Services</h1>
              <p className="text-lg mb-6">
                Discover Naxi's top-notch services, designed to empower your business with competitive rates and exceptional quality.
              </p>
              <button className="px-6 py-2 bg-white text-black rounded-xl hover:bg-gray-200 transition-colors">
                Sign Up
              </button>
            </div>
            <div className="w-1/2 ml-45">
              <Image
                src="/ser1 (2).png"
                alt="Services Overview"
                width={480}
                height={256}
                className="rounded-2xl object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 