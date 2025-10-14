import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="bg-gray-100">
      {/* Mobile Layout */}
      <div className="md:hidden pt-25 pb-8 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Main Content Card */}
          <div className="bg-gradient-to-r from-[#175CFF] to-[#0E3799] text-white p-6 rounded-3xl overflow-hidden">
            <div className="text-c mb-left">
               <div className="flex justify-center">
              <Image 
                src="/2002 1.png" 
                alt="Cityscape" 
                width={300} 
                height={150} 
                className="w-full max-w-xs h-40 object-cover rounded-2xl mb-4" 
              />
            </div>
              <h1 className="text-2xl font-bold mb-4">About us</h1>
              <p className="text-sm leading-relaxed">
                We are next help more than 50000 sellers to build their business. We are working from last 5 year in united arab emirates. We provide high quality product with low prices because we have different teams in china in different cities which help us to get low prices from companies and also do quality inspection of the product.
              </p>
            </div>
           
          </div>

          {/* Stats Section */}
          <div 
            className="md:mt-6 mt-8 grid grid-cols-2 gap-4 text-blue-600 p-4 rounded-3xl"
            style={{ backgroundColor: '#D9D9D9' }}
          >
            <div className="text-center">
              <h3 className="text-3xl font-bold">50k+</h3>
              <p className="text-black text-sm font-bold">Sellers</p>
            </div>
             <div className="text-center">
              <h3 className="text-3xl font-bold">30+</h3>
              <p className="text-black text-sm font-bold">Warehouses</p>
            </div>
             <div className="text-center">
              <h3 className="text-3xl font-bold">5+</h3>
              <p className='text-black text-sm font-bold'>Years in Business</p>
            </div>
           
             <div className="text-center">
              <h3 className="text-3xl font-bold">4+</h3>
              <p className='text-black text-sm font-bold'>Shipping partners</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold">25+</h3>
              <p className='text-black text-sm font-bold'>Categories</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold">4+</h3>
              <p className='text-black text-sm font-bold'>Regions</p>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block pt-40 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-[#175CFF] to-[#0E3799] text-white p-12 rounded-3xl overflow-hidden flex flex-row items-center gap-28">
            <div className="w-1/2">
              <h1 className="text-4xl font-bold mb-6">About us</h1>
              <p className="text-lg">
                We are next help more than 50000 sellers to build their business. We are working from last 5 year in united arab emirates. We provide high quality product with low prices because we have different teams in china in different cities which help us to get low prices from companies and also do quality inspection of the product.
              </p>
            </div>
            <div className="w-1/2 ml-28">
              <Image 
                src="/2002 1.png" 
                alt="Cityscape" 
                width={500} 
                height={256} 
                className="w-120 h-80 object-cover rounded-2xl" 
              />
            </div>
          </div>
          <div
            className="mt-8 flex justify-around items-center text-blue-600 p-4 rounded-lg"
            style={{ backgroundColor: '#D9D9D9' }}
          >
            <div className="text-center">
              <h3 className="text-3xl font-bold">5000+</h3>
              <p className='text-black'>Sellers</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold">5+</h3>
              <p className='text-black'>Years in Business</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold">30+</h3>
              <p className='text-black'>Warehouses</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold">4+</h3>
              <p className='text-black'>Shipping partners</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold">25+</h3>
              <p className='text-black'>Categories</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold">4+</h3>
              <p className='text-black'>Regions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}