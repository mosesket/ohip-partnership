"use client";

import { useState, useRef, JSX } from "react";
import { motion } from "framer-motion";
import {
  FiCircle,
  FiCode,
  FiFileText,
  FiLayers,
  FiLayout,
} from "react-icons/fi";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
// import './Carousel.css'

export interface CarouselItem {
  title: string;
  description: string;
  id: number;
  icon: JSX.Element;
  profile: string;
}

import { useEffect } from "react";

const DEFAULT_ITEMS: CarouselItem[] = [
  {
    title: "Faith Journey",
    description:
      "Attending this church has transformed my life. The community, support, and uplifting messages have brought me closer to God and strengthened my faith. I've discovered a renewed sense of purpose and hope, knowing I'm not walking this journey alone. The sermons speak directly to my heart, offering wisdom and guidance for both my spiritual and personal life. This church has truly become my spiritual home, where I continue to grow and find peace every day.",
    id: 1,
    icon: <FiFileText className="carousel-icon" />,
    profile:
      "https://cdn.pixabay.com/photo/2018/01/22/07/31/portrait-3098319_1280.jpg",
  },
  {
    title: "Spiritual Growth",
    description:
      "I found peace, purpose, and a deeper connection with God through the worship and teachings here. This church truly feels like home. The sermons challenge me to grow spiritually, and the small groups have helped me build lasting relationships. I've discovered the power of prayer and how it can bring clarity to the most challenging situations. The fellowship here is unmatched, and it continually inspires me to seek God's presence in every aspect of my life.",
    id: 2,
    icon: <FiCircle className="carousel-icon" />,
    profile:
      "https://cdn.pixabay.com/photo/2016/11/20/18/18/girl-1843477_1280.jpg",
  },
  {
    title: "Community Support",
    description:
      "From the moment I walked in, I was welcomed with open arms. The love and support I've received from this church family have been incredible. Whether it's through prayer, counseling, or just friendly conversations, I always feel uplifted and encouraged. This church doesn't just talk about love—it lives it. Whether you're going through a tough time or celebrating a joyful moment, there's always someone here to share it with, reminding me of God's constant presence and care.",
    id: 3,
    icon: <FiLayers className="carousel-icon" />,
    profile:
      "https://cdn.pixabay.com/photo/2017/05/31/06/49/model-2359322_1280.jpg",
  },
  {
    title: "Life-Changing Experience",
    description:
      "The sermons, fellowship, and outreach programs have inspired me to live a more meaningful and Christ-centered life. The church's dedication to serving others and spreading love has shown me the importance of compassion and faith in everyday living. It’s more than just attending services—it's about being part of a movement that brings positive change to both individuals and the community. This church has equipped me with the tools to navigate life's challenges while staying rooted in faith.",
    id: 4,
    icon: <FiLayout className="carousel-icon" />,
    profile:
      "https://cdn.pixabay.com/photo/2019/12/16/14/46/black-man-4699506_1280.jpg",
  },
  {
    title: "Heartfelt Gratitude",
    description:
      "I’m so grateful for this church. It’s not just a place of worship, but a source of encouragement, hope, and friendship. The sense of belonging I've found here has brought immense joy and peace to my life, reminding me of God's endless love. The kindness and generosity of the congregation continually inspire me to extend that same love to others. Every service, every event, and every encounter leaves me feeling uplifted and ready to face the world with renewed strength and faith.",
    id: 5,
    icon: <FiCode className="carousel-icon" />,
    profile:
      "https://cdn.pixabay.com/photo/2015/12/20/20/31/m-john-d-1101635_1280.jpg",
  },
];

export default function Carousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % DEFAULT_ITEMS.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);
  const carouselRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => setIndex((prev) => (prev + 1) % DEFAULT_ITEMS.length);
  const prevSlide = () =>
    setIndex(
      (prev) => (prev - 1 + DEFAULT_ITEMS.length) % DEFAULT_ITEMS.length
    );

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
            <div className="flex justify-center max-[803px]:flex-col">
              <div className="bg-[#060606] text-white w-full p-8">
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
