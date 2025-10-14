export default function WhyChooseUs() {
  const reasons = [
    { title: 'Shipping and Delivery', desc: 'Naxi’s strategically located UAE warehouses are your ultimate advantage. We store, pack, and ship everything for you, ensuring lightning-fast delivery across all seven emirates.', icon: '/vector (3).png' },
    { title: 'Our Inventory: Your Portfolio', desc: 'Your dream of a diverse, profitable online store shouldn\'t be capped by upfront inventory costs. Access our constantly curated portfolio of 5,000+ high-margin, in-demand products across dozens of categories.', icon: '/vector (4).png' },
    { title: 'Work from Anywhere', desc: 'Your laptop and an internet connection are your new headquarters. Naxi’s entire platform is cloud-based, giving you the freedom to manage your thriving e-commerce business from anywhere in the world.', icon: '/vector (5).png' },
    { title: 'Payment: Get Paid Faster', desc: 'Your focus should be on growth, not on chasing payments or calculating fees. Naxi offers transparent, seller-friendly payment terms. We ensure you get your earned profits on time, every time, with a clear breakdown for every transaction.', icon: '/vector (6).png' },
  ];

  return (
    <section className="md:py-12 py-1      md:px-6  ">
      <h2 className="md:text-4xl text-3xl font-bold md:mb-12 mb-4 text-gray-900 text-center">Why Choose us?</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-8 max-w-6xl mx-auto">
        {reasons.map((reason, idx) => (
          <div key={idx} className="md:p-6 p-4 hover:shadow-lg transition-shadow duration-300 flex items-center">
            <img src={reason.icon} alt={reason.title} className="md:w-16  md:h-13 w-12 h-10 md:mr-6 mr-5" />
            <div className="text-left ">
              <h3 className="md:text-lg text-sm  md:mb-4 mb-2 md:text-gray-500 text-gray-900">{reason.title}</h3>
              <p className="md:text-gray-900 text-black font-semibold   md:text-lg text-sm leading-relaxed">{reason.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}