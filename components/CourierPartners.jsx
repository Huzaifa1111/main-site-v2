export default function CourierPartners() {
  const partners = ["/imile.png", "/jeebly.png", "/eco.png"];

  return (
    <section className="bg-gray-100 py-12 px-6 text-center">
      {/* Icon */}
      <img
        src="/vector (7).png"
        alt="Delivery Truck"
        className="mx-auto mb-4 md:w-16 md:h-14 w-16 sm:w-20 sm:h-16"
      />

      {/* Title */}
      <h2 className="text-2xl sm:text-4xl font-bold mb-8 text-black">
        Our Courier Partners
      </h2>

      {/* Logos */}
      <div className="flex flex-wrap justify-center items-center md:gap-6 gap-8 sm:gap-12">
        {partners.map((logo, idx) => (
          <img
            key={idx}
            src={logo}
            alt="Partner"
            className="md:w-24 md:h-14 w-15 h-8 sm:w-28  sm:h-16 object-contain"
          />
        ))}
      </div>
    </section>
  );
}
