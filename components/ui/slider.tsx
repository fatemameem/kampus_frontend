import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const Slider = () => {
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
          className="relative w-full flex justify-between items-center gap-8 px-10 shadow-2xl special-card z-30"
        >
          <div className="py-16">
            <p className="text-4xl uppercase font-semibold pb-4">{currentSlide.firstName}</p>
            <p className="text-4xl font-semibold pb-4">{currentSlide.lastName}</p>
            <p className="text-4xl font-semibold text-white pb-12">{currentSlide.title}</p>
            <Image className="rounded-full shadow-2xl xl:max-w-none shadow-slate-500" src={currentSlide.image1} alt="" width={275} height={387} />
          </div>
          <div className="self-end flex flex-col gap-4 my-16">
            <div className="flex justify-between items-end lg:gap-2 xl:gap-4">
              <Image className="border xl:max-w-none border-black lg:w-6 lg:h-6 xl:w-auto xl:h-auto lg:p-1 xl:p-5 rounded-full" src="/icons/Vector1.svg" alt="" width={30} height={30} onClick={prevSlide} />
              <Image className="lg:w-96 lg:h-[481px] xl:w-auto xl:h-[591px] rounded-t-full xl:max-w-none shadow-2xl shadow-slate-500" src={currentSlide.image2} alt="" width={421} height={591} />
              <Image className="border xl:max-w-none border-black lg:p-1 xl:p-5 lg:w-6 lg:h-6 xl:w-auto xl:h-auto rounded-full" src="/icons/Vector3.svg" alt="" width={30} height={30} onClick={nextSlide} />
            </div>
            <div className="flex justify-center items-center gap-8">
              <p className="font-bold text-xl text-white">0{currentIndex + 1}</p>
              <div className="w-full xl:w-3/4 rounded-xl h-5 bg-gray-300">
                <div className="h-full rounded-xl bg-customGreen" style={{ width: `${((currentIndex + 1) / jsonData.length) * 100}%` }}></div>
              </div>
              <p className="font-bold text-xl text-white">0{jsonData.length}</p>
            </div>
          </div>
          <Image className="lg:w-48 lg:h-58 xl:w-auto xl:h-[387px] absolute left-img xl:max-w-none rounded-full shadow-2xl shadow-slate-500" src={currentSlide.image3} alt="" width={275} height={387} />
          <div className="lg:w-1/3 xl:w-1/4  pt-16">
            <p className="text-xl font-semibold pb-4">{currentSlide.program}</p>
            <p className="text-xl font-semibold pb-4">Fun facts:</p>
            <p className="text-xl font-semibold text-white pb-12">{currentSlide.funFacts}</p>
          </div>
        </motion.div>
      </AnimatePresence>
      {/* Stacked Background */}
      <div className="absolute top-4 left-4 w-full h-full bg-green-100 transform scale-98 -z-10 px-10 shadow-2xl special-card">
      </div>
      <div className="absolute top-8 left-8 w-full h-full bg-green-100 px-10 shadow-2xl special-card transform scale-98 -z-20 special-card">
      </div>
    </div>
  );
};

export default Slider;