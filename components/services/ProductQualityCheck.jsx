export default function ProductQualityCheck({ reverse = false }) {
  return (
    <>
      <section className="md:px-6  max-w-7xl mx-auto">
        {/* Mobile Layout */}
        <div className="md:hidden flex flex-col items-center">
          {/* Image at top */}
          <div className="w-full mb-6">
            <div className="w-full h-auto rounded-lg">
              <img src="/ser1 (5).png" alt="Quality Check Image" className="w-full h-auto" />
            </div>
          </div>
          
          {/* Title below image */}
          <div className="w-full text-center mb-4">
            <h2 className="text-xl font-bold text-blue-600">Product Quality Check</h2>
          </div>
          
          {/* Text below title */}
          <div className="w-full">
            <p className="text-base text-black text-center">
              To make quality products from around the world accessible to everyone, by providing a trusted platform where buyers and sellers can connect, trade, and grow together. We aim to empower small businesses, delight customers with affordable choices, and create opportunities through global commerce.
            </p>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className={`hidden md:flex flex-col ${
          reverse ? 'md:flex-row-reverse' : 'md:flex-row'
        } items-center justify-center gap-32`}>
          <div className="md:w-1/2">
            <div className="w-full h-auto rounded-lg">
              <img src="/ser1 (5).png" alt="Quality Check Image" />
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center items-center">
            <div className="text-left">
              <h2 className="text-4xl font-bold text-blue-600 mb-2">Product Quality Check</h2>
              <p className="text-lg text-black">
                To make quality products from around the world accessible to everyone, by providing a trusted platform where buyers and sellers can connect, trade, and grow together. We aim to empower small businesses, delight customers with affordable choices, and create opportunities through global commerce.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section - Responsive */}
      <section className="py-8 md:py-12 text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-black mb-4 md:mb-8">What are you waiting for?</h2>
        <button className="mb-6 md:mb-8 px-6 md:px-8 py-2 md:py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition duration-300">
          Sign Up
        </button>
      </section>
    </>
  );
}