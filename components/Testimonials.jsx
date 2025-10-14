export default function Testimonials() {
  const testimonials = [
    {
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
      stars: 4,
    },
    {
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
      stars: 5,
    },
    {
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
      stars: 4,
    },
  ];

  return (
    <section className="bg-gradient-to-b from-[#0E3799] to-[#175CFF] text-white md:py-12 pt-6 px-6 text-center">
      {/* Heading */}
      <h2 className="md:text-3xl text-xl sm:text-2xl font-bold md:mb-12 mb-6 leading-tight">
        What our Customers <br />
        <span className="md:block">have to say</span>
      </h2>

      {/* Desktop layout (unchanged) */}
      <div className="hidden md:grid grid-cols-3 gap-10 max-w-6xl mx-auto">
        {testimonials.map((test, idx) => (
          <div
            key={idx}
            className="bg-gray-200 text-black p-6 rounded-3xl shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            {/* Avatar */}
            <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-4 border-4 border-gray-100"></div>

            {/* Name placeholder */}
            <p className="font-semibold text-sm mb-2">Lorem Ipsum</p>

            {/* Text */}
            <p className="text-sm text-gray-800 leading-relaxed mb-4">{test.text}</p>

            {/* Stars */}
            <div className="flex justify-center">
              {Array(test.stars)
                .fill(0)
                .map((_, i) => (
                  <span key={i} className="text-blue-600 text-lg">★</span>
                ))}
            </div>
          </div>
        ))}
      </div>

      {/* Mobile layout with blur reveal */}
      <div className="md:hidden relative overflow-y-scroll h-[400px] snap-y snap-mandatory space-y-8 scrollbar-hide">
        {testimonials.map((test, idx) => (
          <div
            key={idx}
            className={`bg-gray-200 text-black p-6 rounded-3xl shadow-lg snap-start transition-transform duration-300 ${
              idx === testimonials.length - 1 ? "" : "backdrop-blur-sm"
            }`}
          >
            {/* Avatar */}
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gray-300 rounded-full border border-gray-100 mr-3"></div>
              <div className="text-left">
                <h3 className="font-bold text-sm">Lorem Ipsum</h3>
                <p className="text-xs text-gray-600">Lorem Ipsum</p>
              </div>
            </div>

            {/* Text */}
            <p className="text-xs text-gray-700 mb-4 leading-relaxed">
              {test.text}
            </p>

            {/* Stars */}
            <div className="flex justify-start">
              {Array(test.stars)
                .fill(0)
                .map((_, i) => (
                  <span key={i} className="text-blue-600 text-sm">★</span>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
