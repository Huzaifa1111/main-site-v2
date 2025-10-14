export default function OurMission() {
  return (
    <section className="py-12 px-6 max-w-7xl mx-auto">
      {/* Mobile Layout */}
      <div className="md:hidden flex flex-col items-center">
        {/* Image at top */}
        <div className=" mb-6 justify-center">
          <div className="w-65 h-auto rounded-lg overflow-hidden">
            <img src="/Mask group (1).png" alt="Our Mission" className="w-full h-auto" />
          </div>
        </div>
        
        {/* Title below image */}
        <div className="w-full text-center mb-4">
          <h2 className="text-3xl font-bold text-blue-600">Our Vision</h2>
        </div>
        
        {/* Text below title */}
        <div className="w-full">
          <p className="text-base text-black text-center">
            We are naxi help more than 500000 sellers to build their business. We are working from last 5 year in united arab emirates. We provide high quality product with low prices because we have different teams in china in different cities which help us to get low prices from companies and also do quality inspection of the product.
          </p>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:flex flex-col md:flex-row items-center justify-center">
        <div className="md:w-1/2">
          <div className="w-120 h-auto rounded-lg">
            <img src="/Mask group (1).png" alt="Our Mission" />
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center items-center">
          <div className="text-left">
            <h2 className="text-4xl font-bold text-blue-600 mb-2">Our Mission</h2>
            <p className="text-lg text-black">
              We are naxi help more than 500000 sellers to build their business. We are working from last 5 year in united arab emirates. We provide high quality product with low prices because we have different teams in china in different cities which help us to get low prices from companies and also do quality inspection of the product.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}