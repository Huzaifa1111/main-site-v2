import Image from 'next/image';

export default function MainSection() {
  return (
    <>
      {/* Desktop Layout */}
      <section className="hidden md:block pt-40 pb-8 px-6 bg-gray-100">
        <div className="max-w-7xl mx-auto relative">
          <div className="relative rounded-3xl overflow-hidden shadow-lg">
            <div className="absolute inset-0 pointer-events-none">
              <img
                src="/cart.png"
                alt="Product 2"
                className="z-20 absolute left-5 top-15 w-28 h-28 md:w-75 md:h-75 object-contain"
              />
              <img
                src="/world.png"
                alt="Product 4"
                className="z-20 absolute -right-10 top-5 w-28 h-28 md:w-85 md:h-85 object-contain"
              />
            </div>
            <div className="relative rounded-3xl bg-[radial-gradient(circle_at_center,#175CFF_0%,#0E3799_100%)] p-6 md:p-12 flex flex-col justify-center items-center text-center h-90 overflow-hidden">
              <img
                src="/Ellipse 27 (1).png"
                alt="Background Ellipse 1"
                className="absolute left-1/2 top-1/2 w-[450px] h-[450px] transform -translate-x-1/2 -translate-y-1/2 opacity-120"
              />
              <img
                src="/Ellipse 27.png"
                alt="Background Ellipse 2"
                className="absolute left-1/2 top-1/2 w-[1000px] h-[1000px] transform -translate-x-1/2 -translate-y-1/2 opacity-120"
              />
              <div className="relative z-10 text-white">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                  Dropshipping with Naxi
                </h1>
                <p className="text-sm md:text-base mb-6 leading-relaxed">
                  Source anything from China with Naxi and sell <br /> in
                  Pakistan, UAE, UK & Saudi Arabia
                </p>
                <button className="bg-white text-black px-6 py-2 rounded-lg text-sm md:text-base font-medium hover:bg-gray-200">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Layout */}
      <section className="md:hidden pb-6 bg-gray-100 ">
  <div className="mx-auto relative">
    <div className="relative shadow-lg">
      <div className="absolute inset-0 pointer-events-none">
        {/* Logo on top left */}
        <img
          src="/Group (3).png"
          alt="Naxi Logo"
          className="z-20 absolute left-4 top-4 w-20 h-auto object-contain"
        />
        <img
          src="/cart.png"
          alt="Product 2"
          className="z-20 absolute -left-8 top-8 w-30 h-30 object-contain"
        />
      <img
  src="/wor.png"
  alt="Product 4"
  className="z-20 fixed left-65 top-4 w-40 h-40 object-contain"
/>
      </div>
      <div className="bg-[radial-gradient(circle_at_center,#175CFF_0%,#0E3799_100%)] p-4 flex flex-col justify-center items-center text-center h-48 overflow-hidden">
        <img
          src="/Ellipse 27 (1).png"
          alt="Background Ellipse 1"
          className="absolute left-1/2 top-1/2 w-[200px] h-[200px] transform -translate-x-1/2 -translate-y-1/2 opacity-120"
        />
        <img
          src="/Ellipse 27.png"
          alt="Background Ellipse 2"
          className="absolute left-1/2 top-1/2 w-[400px] h-[400px] transform -translate-x-1/2 -translate-y-1/2 opacity-120"
        />
        <div className="relative z-10 text-white">
          <h1 className="text-xl font-bold mb-2">
            Dropshipping<br /> with Naxi
          </h1>
          {/* Paragraph removed */}
          <button className="bg-white text-blue-700 px-4 py-2 rounded-lg text-xs font-medium hover:bg-gray-200">
            Start Selling
          </button>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  );
}

function HowToStartSection() {
  const steps = [
    { icon: '/vector (18).png', title: '1. Sign up & Login', description: 'Naxi\'s strategically located UAE warehouses are your ultimate advantage. We store, pack, and ship everything for you, ensuring lightning-fast delivery across all seven emirates.' },
    { icon: '/vector (19).png', title: '2. Banking Details', description: 'Naxi\'s strategically located UAE warehouses are your ultimate advantage. We store, pack, and ship everything for you, ensuring lightning-fast delivery across all seven emirates.' },
    { icon: '/vector (20).png', title: '3. Store Integration', description: 'Naxi\'s strategically located UAE warehouses are your ultimate advantage. We store, pack, and ship everything for you, ensuring lightning-fast delivery across all seven emirates.' },
    { icon: '/vector (21).png', title: '4. Subscription Plan', description: 'Naxi\'s strategically located UAE warehouses are your ultimate advantage. We store, pack, and ship everything for you, ensuring lightning-fast delivery across all seven emirates.' },
    { icon: '/vector (22).png', title: '5. List Products', description: 'Naxi\'s strategically located UAE warehouses are your ultimate advantage. We store, pack, and ship everything for you, ensuring lightning-fast delivery across all seven emirates.' },
    { icon: '/vector (23).png', title: '6. Sending Orders', description: 'Naxi\'s strategically located UAE warehouses are your ultimate advantage. We store, pack, and ship everything for you, ensuring lightning-fast delivery across all seven emirates.' },
  ];

  return (
    <>
      {/* Desktop Layout */}
      <section className="hidden md:block py-12 px-6 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">How to start?</h2>
          <div className="grid grid-cols-2 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="p-6 px-12">
                <div className="flex items-center mb-4">
                  <img src={step.icon} alt={`${step.title} icon`} className="w-10 h-10 mr-4" />
                  <h3 className="text-xl font-bold">{step.title}</h3>
                </div>
                <p className="text-black">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile Layout */}
      <section className="md:hidden py-8 px-4 bg-gray-100">
        <div className="mx-auto">
          <h2 className="text-2xl font-bold text-center mb-6 text-black">How to start?</h2>
          <div className="space-y-4">
            {steps.map((step, index) => (
              <div key={index} className="p-4">
                <div className="flex items-start gap-10">
                  {/* Image on the left */}
                  <div className="flex-shrink-0">
                    <img 
                      src={step.icon} 
                      alt={`${step.title} icon`} 
                      className="w-14 h-14 mt-1" 
                    />
                  </div>
                  
                  {/* Title and description on the right */}
                  <div className="flex-1">
                    <h3 className="text-base font-bold leading-tight mb-2">{step.title}</h3>
                    <p className="text-black text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>  
      </section>
    </>
  );
}

export { MainSection, HowToStartSection };