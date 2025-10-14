export default function Categories() {
  const categories = [
    { title: 'Electronics', img: '/its7.png' },
    { title: 'Smart tech', img: '/it6.png' },
    { title: 'Health & beauty', img: '/bottle.png' },
    { title: 'Cameras & lenses', img: '/camera.png' },
    { title: 'Furniture', img: '/sofa.png' },
  ];

  return (
    <section className="py-5 px-4 sm:px-16 md:px-36 bg-gray-100">
      {/* Header */}
      <div className="bg-[#D9D9D9] text-black py-2 md:px-16 px-3 sm:py-3 sm:px-16 md:rounded-xl rounded-md flex justify-between items-center mb-6">
        <h2 className="md:text-md text-sm sm:text-lg font-semibold">Choose by Categories</h2>
        <a href="#" className="text-xs sm:text-sm underline hover:underline">
          See all categories
        </a>
      </div>

      {/* Categories */}
      <div className="flex items-center justify-center space-x-4 sm:space-x-6">
        {/* Left Arrow (Hidden on Mobile) */}
        <button className="hidden sm:flex w-12 h-12 items-center justify-center bg-gray-300 rounded-full hover:bg-gray-500">
          <svg
            className="w-4 h-4 text-black"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Categories List */}
        <div className="flex justify-center items-center md:space-x-2 sm:space-x-6 scrollbar-hide">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="p-2 sm:p-4 text-center md:w-45 w-15 sm:w-48 flex-shrink-0"
            >
              {/* Image */}
              <img
                src={cat.img}
                alt={cat.title}
                className="mx-auto mb-1 sm:mb-2 w-12 h-12 sm:w-30 sm:h-24 object-contain bg-[#D9D9D9] rounded-xl md:bg-transparent"
              />
              {/* Title (hidden on mobile) */}
              <p className="hidden sm:block text-[10px] sm:text-sm text-naxi-blue font-medium">
                {cat.title}
              </p>
            </div>
          ))}
        </div>

        {/* Right Arrow (Hidden on Mobile) */}
        <button className="hidden sm:flex w-12 h-12 items-center justify-center bg-gray-300 rounded-full hover:bg-gray-500">
          <svg
            className="w-4 h-4 text-black"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
}
