export default function ManagedBy() {
  const images = [
    { src: "/Glammeria Mono.png", url: "#" },
    { src: "/Skynly Mono.png", url: "#" },
    { src: "/Lenser Mono.png", url: "#" },
    { src: "/Novendo Mono.png", url: "#" },
    { src: "/Techknigh Mono.png", url: "#" },
    { src: "/Brexis Mono.png", url: "#" },
    { src: "/stylodore Mono.png", url: "#" },
    { src: "/Electimize Mono.png", url: "#" },
    { src: "/Signity Mono.png", url: "#" },
  ];

  return (
    <section className="md:py-10 px-6 text-center md:bg-gray-100 bg-gray-100 md:pt-12 pt-4">
      {/* Responsive heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold md:mb-6 mb-6 whitespace-nowrap">
        <span className="text-black">Managed by</span>{" "}
        <span className="text-blue-600">Naxi</span>
      </h2>

      {/* Desktop Layout - 5 images in first row, 4 in second row */}
      <div className="hidden md:flex flex-col items-center space-y-12">
        {/* First Row - 5 images */}
        <div className="flex justify-center gap-16">
          {images.slice(0, 5).map((image, index) => (
            <a
              key={index}
              href={image.url}
              className="transition-transform hover:scale-105 hover:opacity-80"
            >
              <img
                src={image.src}
                alt={`Partner ${index + 1}`}
                className="w-32 h-24 object-contain"
              />
            </a>
          ))}
        </div>
        {/* Second Row - 4 images */}
        <div className="flex justify-center gap-8">
          {images.slice(5, 9).map((image, index) => (
            <a
              key={index + 5}
              href={image.url}
              className="transition-transform hover:scale-105 hover:opacity-80"
            >
              <img
                src={image.src}
                alt={`Partner ${index + 6}`}
                className="w-32 h-24 object-contain"
              />
            </a>
          ))}
        </div>
      </div>

      {/* Mobile Layout - 4 images in first row, 5 in second row */}
      <div className="md:hidden flex flex-col items-center space-y-4">
        {/* First Row - 4 images */}
        <div className="grid grid-cols-4 gap-4">
          {images.slice(0, 4).map((image, index) => (
            <a
              key={index}
              href={image.url}
              className="transition-transform hover:scale-105 hover:opacity-80"
            >
              <img
                src={image.src}
                alt={`Partner ${index + 1}`}
                className="w-16 h-12 object-contain"
              />
            </a>
          ))}
        </div>
        {/* Second Row - 5 images */}
        <div className="grid grid-cols-5 gap-3">
          {images.slice(4, 9).map((image, index) => (
            <a
              key={index + 4}
              href={image.url}
              className="transition-transform hover:scale-105 hover:opacity-80"
            >
              <img
                src={image.src}
                alt={`Partner ${index + 5}`}
                className="w-12 h-10 object-contain"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
} 