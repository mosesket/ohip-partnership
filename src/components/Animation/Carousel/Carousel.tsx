"use client";
import { motion } from "framer-motion";
import { useRef } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { CarouselItem } from "../../../pages/Home";

interface CarouselType {
  DEFAULT_ITEMS: CarouselItem[];
  index: number;
  nextSlide: () => void;
  prevSlide: () => void;
}

export default function Carousel({
  DEFAULT_ITEMS,
  index,
  nextSlide,
  prevSlide,
}: CarouselType) {
  const carouselRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden mb-10">
      {/* Carousel Track */}
      <motion.div
        ref={carouselRef}
        className="flex"
        initial={{ x: "100%" }}
        animate={{ x: `-${index * 100}%` }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        {DEFAULT_ITEMS.map((item, i) => (
          <motion.div key={i} className="min-w-full">
            <div className="flex justify-center max-[803px]:flex-col min-[803px]:max-h-[40rem]">
              <div className="bg-[#060606] text-white w-full p-8 h-full">
                <div className="">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full text-[#060606] bg-white">
                    {item.icon}
                  </span>
                </div>
                <div className="mt-4 font-semibold text-2xl">{item.title}</div>
                <p className="mt-8">{item.description}</p>
                <p className="text-[20rem] text-gray-300  max-[828px]:hidden">
                  "
                </p>
              </div>
              <div
                className="w-full relative max-[803px]:h-[50rem]"
                style={{
                  backgroundImage: `url(${item.profile})`,
                  backgroundSize: "cover",
                  backgroundPosition: "top",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="absolute bg-blue-200/20 inset-0"></div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
      >
        <BsArrowLeft />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
      >
        <BsArrowRight />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {DEFAULT_ITEMS.map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full ${
              i === index ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
