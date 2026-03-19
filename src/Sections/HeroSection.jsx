import { useState, useEffect } from "react";

const HeroSection = ({ darkMode }) => {
  // Carousel state
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Carousel data
  const slides = [
    {
      id: 1,
      image: "coffe.png",
      // title: 'Beautiful Landscapes',
      // caption: 'Explore the most stunning views from around the world'
    },
    {
      id: 2,
      image: "cafe.png",
      // title: 'Urban Adventures',
      // caption: 'Discover the hidden gems in bustling cities'
    },
    {
      id: 3,
      image: "ca.png",
      // title: 'Cultural Experiences',
      // caption: 'Immerse yourself in diverse traditions and customs'
    },
    {
      id: 4,
      image: "fe.png",
      // title: 'Nature Escapes',
      // caption: 'Reconnect with nature in pristine environments'
    },
  ];

  // Auto-play carousel
  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div
        className={`absolute inset-0 ${
          darkMode
            ? "bg-gray-800"
            : "bg-amber-50"
        } opacity-90`}
      ></div>
      <div
        className={`relative z-10 flex h-full flex-col items-center justify-center px-4 text-center mt-12 ${
          darkMode ? "text-gray-200" : "text-white"
        } bg-cover bg-center w-full`}
      >
        <h1
          className={`mb-4 text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl ${
            darkMode ? "text-amber-400" : "text-amber-700"
          }`}
        >
          Discover Amazing day with Aliya's Cafe & Snacks
        </h1>
        <p
          className={`mb-8 max-w-2xl text-lg sm:text-xl md:text-2xl ${
            darkMode ? "text-amber-300" : "text-amber-500"
          }`}
        >
          Explore your day with Aliya's Cafe to make you feel amazing with our
          taste and make your are really really amazing😎
        </p>

        <div className="mt-16 w-full max-w-4xl">
          <div className="relative overflow-hidden rounded-xl shadow-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide) => (
                <div key={slide.id} className="flex-shrink-0 w-full">
                  <div className="relative aspect-video w-full">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-amber bg-opacity-40"></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white">
                      {/* <h3 className="mb-2 text-2xl font-bold sm:text-3xl md:text-4xl">{slide.title}</h3>
                      <p className="max-w-md text-sm sm:text-base md:text-lg">{slide.caption}</p> */}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-3 w-3 rounded-full transition-all ${
                    currentSlide === index
                      ? "bg-white w-6"
                      : "bg-white bg-opacity-50"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
