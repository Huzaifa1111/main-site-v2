"use client";

import { useState, useEffect, useRef } from "react";

export default function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const touchTimeoutRef = useRef(null);

  // Minimum swipe distance (in pixels)
  const minSwipeDistance = 50;

  // Mobile-specific slides
  const mobileSlides = [
    {
      images: [
        {
          src: "/headphone.png",
          className: "w-33 absolute -left-14 -top-8 w-20 transform -rotate-34",
        },
        {
          src: "/it12.png",
          className: "w-25 absolute right-66 -top-52 w-20 transform rotate-6",
        },
        {
          src: "/it5.png",
          className: "w-25 absolute left-62 -top-40 w-18 transform -rotate-19 z-0",
        },
        {
          src: "/it10.png",
          className: "w-60 absolute -right-22 top-2 w-18 transform rotate-28",
        },
      ],
    },
    {
      images: [
        {
          src: "/cr1.png",
          className: "w-33 absolute -left-14 -top-8 w-20 transform -rotate-34",
        },
        {
          src: "/cr4.png",
          className: "w-25 absolute right-66 -top-45 w-20 transform rotate-6",
        },
        {
          src: "/cr3.png",
          className: "w-25 absolute left-62 -top-40 w-18 transform -rotate-19 z-0",
        },
        {
          src: "/cr2.png",
          className: "w-60 absolute -right-22 top-2 w-18 transform rotate-28",
        },
      ],
    },
    {
      images: [
        {
          src: "/cr8.png",
          className: "w-33 absolute -left-14 -top-8 w-20 transform -rotate-34",
        },
        {
          src: "/cr7.png",
          className: "w-25 absolute right-66 -top-52 w-20 transform rotate-6",
        },
        {
          src: "/cr5.png",
          className: "w-25 absolute left-62 -top-40 w-18 transform -rotate-19 z-0",
        },
        {
          src: "/cr6.png",
          className: "w-60 absolute -right-22 top-2 w-18 transform rotate-28",
        },
      ],
    },
    {
      images: [
        {
          src: "/cr12.png",
          className: "w-33 absolute -left-14 -top-8 w-20 transform -rotate-34",
        },
        {
          src: "/cr11.png",
          className: "w-25 absolute right-66 -top-52 w-20 transform rotate-6",
        },
        {
          src: "/cr9.png",
          className: "w-25 absolute left-62 -top-40 w-18 transform -rotate-19 z-0",
        },
        {
          src: "/cr10.png",
          className: "w-60 absolute -right-22 top-2 w-18 transform rotate-28",
        },
      ],
    },
    {
      images: [
        {
          src: "/cr16.png",
          className: "w-33 absolute -left-14 -top-8 w-20 transform -rotate-34",
        },
        {
          src: "/cr15.png",
          className: "w-25 absolute right-66 -top-52 w-20 transform rotate-6",
        },
        {
          src: "/cr14.png",
          className: "w-25 absolute left-62 -top-40 w-18 transform -rotate-19 z-0",
        },
        {
          src: "/cr13.png",
          className: "w-60 absolute -right-22 top-2 w-18 transform rotate-28",
        },
      ],
    },
  ];

  // Desktop slides (your original)
  const desktopSlides = [
    {
      images: [
        {
          src: "/headphone.png",
          className: "absolute -left-12 top-20 w-73 transform rotate-36",
        },
        {
          src: "/massager 3.png",
          className: "absolute left-49 top-68 w-115 transform -rotate-6 z-0",
        },
        {
          src: "/it12.png",
          className: "absolute right-20 top-2 w-70 transform rotate-12",
        },
        {
          src: "/it10.png",
          className: "absolute right-25 -bottom-20 w-175 transform rotate-25",
        },
      ],
    },
    {
      images: [
        {
          src: "/cr1.png",
          className: "absolute left-37 top-40 w-65 transform rotate-5",
        },
        {
          src: "/cr4.png",
          className: "absolute left-65 top-85 w-70 transform z-0",
        },
        {
          src: "/cr3.png",
          className: "absolute right-35 top-78 w-110 transform -rotate-5",
        },
        {
          src: "/cr2.png",
          className: "absolute right-25 bottom-12  w-75 transform -rotate-3",
        },
      ],
    },
    {
      images: [
        {
          src: "/cr8.png",
          className: "absolute left-12 top-35 w-75 transform rotate-4",
        },
        {
          src: "/cr7.png",
          className: "absolute left-48 top-90 w-100 transform -rotate-6 z-0",
        },
        {
          src: "/cr5.png",
          className: "absolute right-1 top-35 w-130 transform rotate-7",
        },
        {
          src: "/cr6.png",
          className: "absolute right-70 bottom-1 w-55 transform rotate-3",
        },
      ],
    },
    {
      images: [
        {
          src: "/cr12.png",
          className: "absolute left-5 top-18 w-120 transform rotate-5",
        },
        {
          src: "/cr11.png",
          className: "absolute left-48 top-100 w-65 transform z-0",
        },
        {
          src: "/cr9.png",
          className: "absolute right-0 top-18 w-110 transform",
        },
        {
          src: "/cr10.png",
          className: "absolute right-40 top-77 w-95 transform rotate-2",
        },
      ],
    },
    {
      images: [
        {
          src: "/cr16.png",
          className: "absolute left-20 top-35 w-75 transform rotate-2",
        },
        {
          src: "/cr15.png",
          className: "absolute left-48 top-80 w-95 transform z-0",
        },
        {
          src: "/cr14.png",
          className: "absolute right-30 top-40 w-80 transform",
        },
        {
          src: "/cr13.png",
          className: "absolute right-65 bottom-0 w-70 transform",
        },
      ],
    },
  ];

  // Touch event handlers for mobile swipe
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      // Swipe left - next slide
      setActiveSlide((prev) => (prev + 1) % mobileSlides.length);
    } else if (isRightSwipe) {
      // Swipe right - previous slide
      setActiveSlide((prev) => (prev - 1 + mobileSlides.length) % mobileSlides.length);
    }
  };

  // // Auto switch every 6 seconds
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setActiveSlide((prev) => (prev + 1) % mobileSlides.length);
  //   }, 3000);
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <section className="bg-[radial-gradient(circle_at_center,#175CFF_0%,#0E3799_100%)] text-white md:py-40 py-20 px-6 relative overflow-hidden">
      {/* Background Ellipses - Desktop Only */}
      <div className="hidden md:block">
        <img
          src="/Ellipse 27 (1).png"
          alt="Center Ellipse"
          className="absolute left-1/2 top-1/2 w-[800px] h-[800px] transform -translate-x-1/2 -translate-y-1/2 opacity-70"
        />
        <img
          src="/Ellipse 28.png"
          alt="Center Ellipse"
          className="absolute left-1/2 top-100 w-[1200px] h-[1200px] transform -translate-x-1/2 -translate-y-1/2 opacity-70"
        />
      </div>

      {/* Text Content */}
      <div className="text-center max-w-3xl mx-auto relative z-10 mt-10">
        <h1 className="text-2xl md:text-5xl font-bold mb-4 md:mb-6">
          Start E-commerce <br /> with Naxi from today
        </h1>
        <p className="mx-auto max-w-[27rem] mb-6 md:mb-8 text-sm md:text-md hidden md:block">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button className="bg-white text-blue-600 md:px-16 px-8 py-2 md:py-3 rounded-lg md:text-2xl text-base font-semibold hover:bg-gray-200">
          Start Selling
        </button>
      </div>

      {/* Mobile Slides with Touch Events */}
      <div 
        className="block md:hidden relative h-10 touch-pan-y"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        style={{ touchAction: 'pan-y' }}
      >
        {mobileSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === activeSlide
                ? "opacity-100"
                : "opacity-0 pointer-events-none"
            }`}
          >
            {slide.images.map((img, i) => (
              <img
                key={i}
                src={img.src}
                alt={`Slide ${index} Image ${i}`}
                className={img.className}
              />
            ))}
          </div>
        ))}
        
        {/* Mobile Circle Background */}
        <img
          src="/Ellipse 27.png"
          alt="Circle"
          className="absolute left-1/2 top-1/2 w-48 h-48 transform -translate-x-1/2 -translate-y-1/2 opacity-90 grayscale z-20"
        />
      </div>

      {/* Desktop Slides */}
      <div className="hidden md:block">
        {desktopSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === activeSlide
                ? "opacity-100"
                : "opacity-0 pointer-events-none"
            }`}
          >
            {slide.images.map((img, i) => (
              <img
                key={i}
                src={img.src}
                alt={`Slide ${index} Image ${i}`}
                className={img.className}
              />
            ))}
          </div>
        ))}
        
        {/* Desktop Circle Background */}
        <img
          src="/Ellipse 27.png"
          alt="Circle"
          className="absolute left-1/2 top-1/2 w-64 h-64 transform -translate-x-1/2 -translate-y-1/2 opacity-90 grayscale z-20"
        />
      </div>

      {/* Carousel Dots */}
      <div className="absolute md:bottom-8 bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 md:space-x-3 z-30">
        {mobileSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveSlide(index)}
            className={`transition-all duration-300 ${
              index === activeSlide
                ? "w-6 h-2 bg-white rounded-full"
                : "w-2 h-2 bg-white/50 rounded-full"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
}