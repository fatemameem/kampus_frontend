import { useState } from "react";
import Image from "next/image";
import Slider from "@/components/ui/slider";
import SliderMobile from "@/components/ui/slider_mobile";

export default function Component() {
  return (
    <>
      <section className="banner container mx-auto mb-8 lg:mb-16 lg:px-16">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-16 pt-10">
          <Image className="rounded-lg lg:rounded-3xl w-full lg:w-1/2" src="/images/blog-img2.jpg" alt="" width={833} height={613} />
          <div className="lg:w-1/2 ">
            <div className="relative">
              <h1 className="text-base lg:text-3xl xl:text-4xl bg-customGreen w-fit rounded-lg font-semibold p-2 lg:px-5 lg:py-2 xl:p-5">Meet our Executives</h1>
              <h1 className="our-team-text-pos absolute text-base lg:text-3xl xl:text-4xl text-white text-opacity-80 bg-customRed w-fit rounded-md font-semibold px-5 xl:px-20 py-2 xl:py-5">2024-2025</h1>
            </div>
          </div>
        </div>
      </section>
      <section className="slider container mx-auto mb-8 lg:mb-24">
        <h1 className="text-4xl text-center font-semibold lg:mb-20 xl:mb-16 hidden lg:block">Executive Board of 2024 - 2025</h1>
        <div className="hidden lg:block">
          <Slider/>
        </div>
        <div className="block lg:hidden">
          <SliderMobile/>
        </div>
      </section>
      <section className="description container mx-auto mb-4">
        
      </section>
    </> 
  );
}