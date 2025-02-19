import { CiTimer } from "react-icons/ci";
import { HiOutlineCalendarDateRange } from "react-icons/hi2";
import HeroBlogCard from "../Cards/HeroBlogCard";

function Hero() {
  return (
    <section className="relative text-white">
      <div
        className="relative h-[400px] md:h-[500px] lg:h-[600px] flex items-end justify-between p-8 max-w-7xl rounded-3xl mx-auto"
        style={{
          backgroundImage: `url(https://cdn.pixabay.com/photo/2017/03/27/15/16/man-2179326_1280.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50 rounded-3xl"></div>
        <div className="z-50 max-w-[700px]">
          <span className="bg-red-500 text-sm p-1 rounded-sm font-medium">
            Daily Devotionals
          </span>
          <h2 className="text-4xl font-semibold my-4  max-[950px]:text-3xl">
            Daily Devotionals: Strengthening Your Faith One Day at a Time
          </h2>
          <p className="font-mono flex gap-3 items-center">
            <HiOutlineCalendarDateRange /> Oct 19 - <CiTimer /> 20min read
          </p>
        </div>
      </div>
      <div className="z-50 absolute -bottom-20 right-10 max-[950px]:static max-[950px]:grid max-[950px]:grid-cols-2 max-[650px]:grid-cols-1 max-[950px]:mt-7 max-[950px]:gap-5 max-[950px]:flex-wrap  max-[950px]:px-8">
        <span className="text-xl max-[950px]:hidden">Most Recent</span>
        <HeroBlogCard
          title="The Power of Prayer"
          date="Oct 19"
          readTime="20min"
          image="https://cdn.pixabay.com/photo/2023/03/10/17/52/prayer-book-7842864_1280.jpg"
        />
        <HeroBlogCard
          title="How to Make Daily Devotionals a Habit"
          date="Dec 25"
          readTime="15min"
          image="https://cdn.pixabay.com/photo/2012/02/22/20/09/girl-15599_1280.jpg"
        />
      </div>
    </section>
  );
}

export default Hero;
