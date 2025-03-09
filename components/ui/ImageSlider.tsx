import { useState, useEffect } from "react";
import Image from "next/image";

interface ImageSliderProps {
  images: string[]; // Array of image URLs
  text?: string; // Optional text overlay
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images, text }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto change slide every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); // 10 seconds interval

    return () => clearInterval(interval); // Cleanup on unmount
  }, [images.length]);

  return (
    <div className="relative w-screen h-[350px] md:h-[550px] lg:h-[700px] overflow-hidden">
      {/* Background Images */}
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image}
              alt={`Slide ${index}`}
              layout="fill"
              objectFit="cover"
            />
          </div>
        ))}
      {/* Dark Overlay for Readability */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>

      {/* Optional Text Overlay */}
      {text && (
        <div className="absolute inset-0 flex items-center justify-center text-white opacity-90 mx-auto container text-center">
          <h1 className="text-4xl md:text-9xl font-semibold text-shadow">{text}</h1>
        </div>
      )}

      {/* Dots Indicator */}
      {/* <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-white scale-125" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div> */}
    </div>
  );
};

export default ImageSlider;
