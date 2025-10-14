import React from "react";
import { serviceMetadata } from "../../app/servicesData";

export default function Storage() {
  const { sections } = serviceMetadata.storage;

  return (
    <>
      <section className="bg-gray-100 px-6 md:px-48 py-10">
        {sections.map((item, index) => (
          <div key={index} className="mb-16">
            {/* Mobile Layout */}
            <div className="md:hidden flex flex-col items-center">
              {/* Image at top */}
              <div className="w-full mb-6 flex justify-center">
                <div className="max-w-md">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-60 h-auto object-contain"
                  />
                </div>
              </div>
              
              {/* Title below image */}
              <div className="w-full text-center mb-4">
                <h2 className="text-3xl font-bold text-[#004CFF]">{item.title}</h2>
              </div>
              
              {/* Text below title */}
              <div className="w-full">
                <p className="text-base text-black text-center leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>

            {/* Desktop Layout */}
            <div className={`hidden md:flex flex-col md:flex-row items-center justify-center gap-16 md:gap-20 ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}>
              {/* Image Section */}
              <div className="md:w-1/2 w-full flex justify-center">
                <div className="w-full max-w-md">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-auto rounded-lg shadow-md object-contain"
                  />
                </div>
              </div>

              {/* Text Section */}
              <div className="md:w-1/2 w-full flex justify-center items-center">
                <div className="text-center md:text-left">
                  <h2 className="text-2xl md:text-4xl font-bold text-[#004CFF] mb-4">
                    {item.title}
                  </h2>
                  <p className="text-base md:text-lg text-black leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
      
      {/* CTA Section */}
      <section className=" text-center bg-gray-100">
        <h2 className="text-4xl font-bold text-black mb-8">What are you waiting for?</h2>
        <button className="mb-16 px-8 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition duration-300">
          Sign Up
        </button>
      </section>
    </>
  );
}