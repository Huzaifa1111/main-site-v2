export default function ExploreItems() {
  const items = [
    {
      title: 'Explore hot-selling items in these categories',
      imgs: ['/headphone.webp', '/it5.webp', '/my6.png'],
      button: 'Browse'
    },
    {
      title: 'Exclusive table top and video games.',
      img: '/boy.png',
      button: 'Browse'
    },
    {
      title: 'Supplements',
      desc: 'Limited time vault unlock for all our sellers.',
      img: '/my5.png',
      button: 'Show more'
    },
    {
      title: 'Personal Care',
      desc: 'Beauty and care accessories for woman.',
      img: '/it10.webp',
      button: 'Show more'
    },
  ];

  return (
    <section className=" text-white py-10 md:py-10 px-4 sm:px-6 md:px-40">
      {/* Desktop & Tablet Layout */}
      <div className="hidden md:grid grid-cols-1 lg:grid-cols-2 gap-6 px-4 lg:px-32">
  <div className="relative rounded-3xl overflow-visible shadow-lg bg-gradient-to-b from-[#0E3799] to-[#175CFF] flex flex-col items-center justify-between h-[540px]">
    <div className="p-1 text-center mt-16">
      <div className="whitespace-normal text-2xl mb-4 leading-tight">
        Explore hot-selling items <br /> in these categories
      </div>
      <button className="bg-white text-naxi-blue px-18 py-3 rounded-lg text-lg font-bold hover:bg-gray-200">
        {items[0].button}
      </button>
    </div>

    <div className="relative w-full flex-1 flex items-center justify-center">
      <img
        src={items[0].imgs[0]}
        alt={items[0].title}
        className="w-[300px] h-auto object-cover rotate-16 z-40 -translate-y-10"  
      />
      <img
        src={items[0].imgs[1]}
        alt={`${items[0].title} 2`}
        className="w-[180px] h-[180px] object-cover absolute bottom-60 left-18 -rotate-16"
      />
      <img
        src={items[0].imgs[2]}
        alt={`${items[0].title} 3`}
        className="w-[200px] h-auto object-cover absolute bottom-50 right-12"
      />
    </div>
  </div>


        <div className="flex flex-col gap-6">
          <div className="relative rounded-3xl overflow-hidden shadow-lg bg-gradient-to-b from-[#0E3799] to-[#175CFF] flex flex-col justify-between h-[230px] p-8">
            <div className="text-left">
              <h3 className=" text-xl mb-4 leading-snug  w-3/4">
                {items[1].title}
              </h3>
              <button className="bg-white text-naxi-blue px-8 py-2 rounded-md text-base font-medium hover:bg-gray-200">
                {items[1].button}
              </button>
            </div>
            <img
              src={items[1].img}
              alt={items[1].title}
              className="absolute w-[250px] h-[250px] object-cover right-8 bottom-[-50px]"
            />
          </div>
          <div className="grid grid-cols-2 gap-6">
            {items.slice(2, 4).map((item, idx) => (
              <div
                key={idx}
                className="relative rounded-3xl overflow-hidden shadow-lg bg-gradient-to-b from-[#0E3799] to-[#175CFF] flex flex-col h-[285px] p-8"
              >
                <div className="text-left mb-4">
                  <h3 className="font-bold text-xl">{item.title}</h3>
                  <p className="text-sm">{item.desc}</p>
                  <a href="#" className="text-white underline text-sm mt-2 inline-block hover:text-gray-200">
                    {item.button}
                  </a>
                </div>
                <div className="flex justify-center">
                  <img
                    src={item.img}
                    alt={item.title}
                    className={`object-cover ${idx === 0 ? 'w-[265px] h-auto mt-8 ' : 'w-[200px] h-[200px]'}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


      {/* Mobile-specific layout */}
      <div className="grid grid-cols-1 gap-5 md:hidden">
        {/* First Card (Full width) */}
        <div className="relative rounded-3xl overflow-hidden shadow-lg bg-gradient-to-b from-[#0E3799] to-[#175CFF] flex items-center justify-between p-5 h-[170px]">
          <div className="text-left flex flex-col justify-center">
            <h3 className="text-base font-semibold mb-2 leading-snug">
              Explore <br /> hot-selling<br />items in these categories
            </h3>
            <button className="bg-white text-black px-4 w-24 py-2 rounded-md text-xs font-semibold hover:bg-gray-200">
              Browse
            </button>
          </div>
          <div className="relative flex items-end justify-end">
            <img
              src={items[0].imgs[0]}
              alt={items[0].title}
              className="w-[200px] h-[200px] object-contain rotate-12 left-1 relative bottom-[-8px]"
            />
            <img
              src={items[0].imgs[1]}
              alt={`${items[0].title} 2`}
              className="w-[150px] h-[150px] object-contain absolute right-15 bottom-15 -rotate-12 opacity-90"
            />
            <img
              src={items[0].imgs[2]}
              alt={`${items[0].title} 3`}
              className="w-[90px] h-[90px] object-contain absolute -right-6 bottom-10 rotate-16 opacity-80"
            />
          </div>
        </div>

        {/* Second Row (Exclusive + Personal Care) */}
        {/* Second Row (Exclusive + Personal Care) */}
        <div className="flex gap-3">
          {/* Exclusive table top and video games (66%) */}
          <div className="relative rounded-3xl overflow-hidden shadow-lg bg-gradient-to-b from-[#0E3799] to-[#175CFF] flex items-center justify-between p-4 h-[120px] w-2/3">
            <div className="text-left flex flex-col justify-between h-full py-1">
              <h3 className="text-[11px] font-semibold leading-tight w-[95%]">
                Exclusive table top and video games
              </h3>
              <button className="mt-1 bg-white text-black px-3 py-1 rounded text-[11px] font-medium hover:bg-gray-200 w-fit">
                Browse
              </button>
            </div>
            <img
              src={items[1].img}
              alt={items[1].title}
              className="w-[150px] h-[150px] object-contain mt-12 -ml-1"
            />
          </div>


          {/* Personal Care (33%) */}
          <div className="relative rounded-3xl overflow-hidden shadow-lg bg-gradient-to-b from-[#0E3799] to-[#175CFF] flex items-center justify-between p-3 h-[120px] w-1/3">
            <div className="text-left flex flex-col justify-between h-full py-5">
              <h3 className="text-[8px] font-bold leading-tight">Personal Care</h3>
              <button className="bg-white text-naxi-blue px-3 py-1 rounded text-[10px] font-medium hover:bg-gray-200">Browse</button>
            </div>
            <img
              src={items[3].img}
              alt={items[3].title}
              className="w-[120px] h-[120px] object-contain mt-2 mr-12 transform -translate-x-4"
            />

          </div>

        </div>

      </div>



    </section>
  );
}
