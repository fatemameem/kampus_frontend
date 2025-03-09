import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const SliderMobile = () => {
  const jsonData = [
    {
      id: 1,
      firstName: "Mahimur",
      lastName: "Rahman Khan",
      title: "President",
      program: "MEng in Software Engineering",
      funFacts: "Advice for First Years: Speak to advisor to review your credits and plan out your degree!",
      image1: "/images/card-pic1.jpeg",
      image2: "/images/card-pic2.jpeg",
      image3: "/images/card-pic3.jpeg",
    },
    {
      id: 2,
      firstName: "Mahimur",
      lastName: "Rahman",
      title: "Vice President",
      program: "MSc in Data Science",
      funFacts: "Data is life! Plan your schedule to maximize learning opportunities.",
      image1: "/images/card-pic4.jpeg",
      image2: "/images/card-pic5.jpeg",
      image3: "/images/card-pic6.jpeg",
    },
    {
      id: 3,
      firstName: "Mahimur",
      lastName: "Rahman Khan",
      title: "President",
      program: "MEng in Software Engineering",
      funFacts: "Advice for First Years: Speak to advisor to review your credits and plan out your degree!",
      image1: "/images/card-pic1.jpeg",
      image2: "/images/card-pic2.jpeg",
      image3: "/images/card-pic3.jpeg",
    },
    {
      id: 4,
      firstName: "Mahimur",
      lastName: "Rahman",
      title: "Vice President",
      program: "MSc in Data Science",
      funFacts: "Data is life! Plan your schedule to maximize learning opportunities.",
      image1: "/images/card-pic4.jpeg",
      image2: "/images/card-pic5.jpeg",
      image3: "/images/card-pic6.jpeg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => setCurrentIndex((prevIndex) => (prevIndex + 1) % jsonData.length);
  const prevSlide = () => setCurrentIndex((prevIndex) => (prevIndex === 0 ? jsonData.length - 1 : prevIndex - 1));
  const currentSlide = jsonData[currentIndex];


  return (
    <div className="relative w-full mx-auto mt-12">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide.id}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
          className="relative w-full flex flex-col lg:flex-row justify-between items-center gap-8 p-6 lg:p-10 shadow-2xl special-card z-30"
        >
          {/* Left Side: Image + Progress Bar + Navigation */}
          <div className="flex flex-col gap-4 items-center w-full lg:w-1/2">
            <Image
              className="rounded-t-full shadow-2xl shadow-slate-500"
              src={currentSlide.image2}
              alt=""
              width={300}
              height={450}
            />


          {/* Right Side: Name, Title, Program, Fun Facts */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <p className="text-2xl sm:text-3xl lg:text-4xl uppercase font-semibold py-2">{currentSlide.firstName}</p>
            <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold pb-2">{currentSlide.lastName}</p>
            <p className="text-lg sm:text-xl lg:text-2xl font-semibold text-white pb-4">{currentSlide.title}</p>
            <p className="text-sm sm:text-base lg:text-lg font-semibold pb-2">{currentSlide.program}</p>
            <p className="text-sm sm:text-base lg:text-lg font-semibold pb-2">Fun facts:</p>
            <p className="text-sm sm:text-base lg:text-lg font-semibold text-white">{currentSlide.funFacts}</p>
          </div>

          {/* Navigation Buttons & Progress Bar */}
          <div className="flex justify-center items-center gap-2 w-full mt-6">
            <button onClick={prevSlide} className="text-xl rounded-full bg-transparent"><Image className="border max-w-none border-black p-2 rounded-full" src="/icons/Vector1.svg" alt="" width={25} height={40} /></button>
            <div className="w-3/4 h-3 bg-gray-300 rounded-xl">
              <div
                className="h-full bg-customGreen rounded-xl transition-all duration-500"
                style={{ width: `${((currentIndex + 1) / jsonData.length) * 100}%` }}
              ></div>
            </div>
            <button onClick={nextSlide} className="text-xl rounded-full bg-transparent"><Image className="border max-w-none border-black p-2 rounded-full" src="/icons/Vector3.svg" alt="" width={25} height={40}/></button>
          </div>
            {/* <div className="flex justify-between items-center w-full mt-6 relative">
              <button onClick={prevSlide} className="text-xl p-3 rounded-full absolute left-0 bg-transparent"><Image className="border max-w-none border-black p-2 rounded-full" src="/icons/Vector1.svg" alt="" width={25} height={40} /></button>
              <div className="w-full h-3 bg-gray-300 rounded-xl">
                <div
                  className="h-full bg-customGreen rounded-xl transition-all duration-500"
                  style={{ width: `${((currentIndex + 1) / jsonData.length) * 100}%` }}
                ></div>
              </div>
              <button onClick={nextSlide} className="text-xl p-3 rounded-full absolute right-0 bg-transparent"><Image className="border max-w-none border-black p-2 rounded-full" src="/icons/Vector3.svg" alt="" width={25} height={40}/></button>
            </div> */}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default SliderMobile;