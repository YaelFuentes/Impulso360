import Image from "next/image";
import { useState, useEffect } from "react";
import Swipe from "react-easy-swipe";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

export default function CarouselComponent({ images, onSlideChange }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [zoomedSlide, setZoomedSlide] = useState(null);

  const handleNextSlide = () => {
    let newSlide = currentSlide === images.length - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(newSlide);
    setZoomedSlide(null);
    // Invocamos la función para informar al componente Home sobre el cambio del slide
    if (onSlideChange) {
      onSlideChange(newSlide);
    }
  };

  const handlePrevSlide = () => {
    let newSlide = currentSlide === 0 ? images.length - 1 : currentSlide - 1;
    setCurrentSlide(newSlide);
    setZoomedSlide(null);
    // Invocamos la función para informar al componente Home sobre el cambio del slide
    if (onSlideChange) {
      onSlideChange(newSlide);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  const handleSlideClick = (index) => {
    if (index === currentSlide) {
      setZoomedSlide(index);
    } else {
      setCurrentSlide(index);
      setZoomedSlide(index);
    }
  };

  return (
    <div className="relative">
      {/* <AiOutlineLeft
        onClick={handlePrevSlide}
        className="absolute left-0 m-auto text-5xl inset-y-1/2 cursor-pointer text-gray-400 z-20"
      /> */}
      <div className="w-full h-[100vh] m-auto">
        <Swipe
          onSwipeLeft={handleNextSlide}
          onSwipeRight={handlePrevSlide}
          className=" z-10 w-full h-full"
        >
          {images.map((image, index) => {
            const isCurrentSlide = index === currentSlide;
            const isZoomedSlide = index === zoomedSlide;
            return (
              <div
                key={index}
                className={`w-full h-full absolute transition-all duration-500 brightness-40
                ${isZoomedSlide ? "scale-120" : "scale-100"
                  }`}
                style={{
                  opacity: isCurrentSlide ? 1 : 0,
                  transform: isCurrentSlide ? "scale(1.10)" : "scale(1)",
                }}
                onClick={() => handleSlideClick(index)}
              >
                <div className="w-full h-full absolute">
                  <Image
                    key={index}
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="w-full h-full top-0 left-0 object-cover rounded-2xl"
                  />
                </div>
                {isCurrentSlide && (
                  <div className="w-full h-full absolute">
                    <p className="text-white text-center text-xl px-6 py-4">{image.text}</p>
                  </div>
                )}
              </div>
            );
          })}
        </Swipe>
      </div>
      {/* <AiOutlineRight
        onClick={handleNextSlide}
        className="absolute right-0 m-auto text-5xl inset-y-1/2 cursor-pointer text-gray-400 z-20"
      /> */}

      {/* <div className="relative flex justify-center p-2">
        {images.map((_, index) => (
          <div
            className={
              index === currentSlide
                ? "h-4 w-4 bg-gray-700 rounded-full mx-2 mb-2 cursor-pointer"
                : "h-4 w-4 bg-gray-300 rounded-full mx-2 mb-2 cursor-pointer"
            }
            key={index}
            onClick={() => {
              setCurrentSlide(index);
            }}
          />
        ))}
      </div> */}
    </div>
  );
}
