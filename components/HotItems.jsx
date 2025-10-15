export default function HotItems() {
  const items = [
    { title: 'Tech', desc: 'Sell our tech products and earn in AED.', img: '/headphone.webp' },
    { title: 'Personal Care', desc: 'High demand products with high quality.', img: '/it2.png' },
    { title: 'Home Appliances', desc: 'Sell our home appliances for smarter homes.', img: '/it9.png' },
    { title: 'Make-up', desc: 'High quality branded products.', img: '/it8.png' },
    { title: 'Toys', desc: 'Games and toys for the young minds.', img: '/boy.png' },
    { title: 'Supplements', desc: 'Sell our supplements and boost energy.', img: '/bottle.png' },
  ];

  return (
    <section className="bg-gray-100 px-3 sm:px-6 md:px-16 lg:px-38"> {/* 🔹 Reduced px for mobile */}
      {/* Top bar */}
      <div className="bg-[#2563eb] text-white md:py-4 py-3 md:px-16 px-4 md:rounded-2xl rounded-lg flex justify-between items-center mb-6">
        <h2 className="md:text-xl text-sm md:font-bold">Hot items right now</h2>
        <a href="#" className="md:text-sm text-xs underline text-white hover:underline">
          Explore more
        </a>
      </div>

      {/* Desktop layout */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-12">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="bg-[#2563eb] rounded-2xl p-6 text-white flex flex-col relative overflow-hidden"
            style={{ minHeight: '240px' }}
          >
            <div className="flex-1 z-10">
              <h3 className="font-bold md:text-2xl mb-2">{item.title}</h3>
              <p className="text-sm mb-4 leading-relaxed max-w-[150px] break-words line-clamp-2">{item.desc}</p>
              <button className="text-sm underline hover:no-underline">Grab yours today</button>
            </div>
            <div className="absolute -right-2 -bottom-10">
              {idx === 3 ? (
                <div className="flex flex-row items-end">
                  <img
                    src={item.img}
                    alt={`${item.title} Image 1`}
                    className="object-contain md:h-60 h-120"
                  />
                  <img
                    src="/it7.png"
                    alt={`${item.title} Image 2`}
                    className="object-contain md:h-58 ml-[-7rem] h-50 rotate-10"
                  />
                </div>
              ) : (
                <img
                  src={item.img}
                  alt={item.title}
                  className={`object-contain ${
                    idx === 0 ? 'md:h-70 h-120 rotate-15 mr-12' :
                    idx === 1 ? 'md:h-60 ml-24' :
                    idx === 2 ? 'md:h-70 ' :
                    idx === 4 ? 'md:h-50 ' :
                    'md:h-60  mr-6'
                  }`}
                />
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Mobile layout */}
      <div className="grid grid-cols-3 gap-3 px-1 sm:px-2 md:hidden"> {/* 🔹 Reduced px for mobile */}
        {items.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <div
              className="bg-[#2563eb] rounded-xl flex items-center justify-center w-full aspect-square"
            >
              <img
                src={item.img}
                alt={item.title}
                className="object-contain h-24 sm:h-28 max-w-full"
              />
            </div>
            <h3 className="font-semibold text-[12px] text-black mt-2 truncate w-full text-center">
              {item.title}
            </h3>
            <button className="text-[10px] underline hover:no-underline text-black mb-4">
              Grab yours today
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
