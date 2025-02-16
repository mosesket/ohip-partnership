import { CiTimer } from "react-icons/ci";
import { HiOutlineCalendarDateRange } from "react-icons/hi2";

function Hero() {
  return (
    <section
      className="relative h-[400px] md:h-[500px] lg:h-[600px] flex items-end justify-between text-white p-8 max-w-7xl rounded-3xl mx-auto overflow-hidden"
      style={{
        backgroundImage: `url(https://cdn.pixabay.com/photo/2025/02/08/03/07/flower-9391281_1280.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="z-50 max-w-[700px]">
        <span className="bg-red-500 text-sm p-1 rounded-sm font-medium">
          Daily Devotionals
        </span>
        <h2 className="text-4xl font-semibold my-4">
          Daily Devotionals: Strengthening Your Faith One Day at a Time
        </h2>
        <p className="font-mono flex gap-3 items-center">
          <HiOutlineCalendarDateRange /> Oct 19 - <CiTimer /> 20min read
        </p>
      </div>
      <div className="z-50">
        <span>Most Recent</span>
      </div>
    </section>
  );
}

export default Hero;
