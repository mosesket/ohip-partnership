"use client";
import { motion } from "framer-motion";
import { JSX, useRef } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { CarouselItem } from "../../../pages/Home";

interface CarouselType {
  DEFAULT_ITEMS: CarouselItem[];
  index: number;
  nextSlide: () => void;
  prevSlide: () => void;
  content: JSX.Element;
}

export default function Carousel({
  DEFAULT_ITEMS,
  index,
  nextSlide,
  prevSlide,
  content,
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
        {content}
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
