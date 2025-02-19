import { CiTimer } from "react-icons/ci";
import { HiOutlineCalendarDateRange } from "react-icons/hi2";

function Section3() {
  return (
    <section
      className={`relative h-[70vh] max-w-6xl mx-auto flex-col rounded-sm overflow-hidden shadow-2xl flex justify-between p-8`}
      style={{
        backgroundImage: `url(https://cdn.pixabay.com/photo/2025/02/09/17/58/cycling-9394894_1280.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col justify-between p-8 h-full">
        <div className="border-2 border-white py-1 px-2 text-white z-50 self-start text-sm">
          SUNDAY SERVICE
        </div>
        <div className="z-50">
          <span className="flex gap-2 text-sm items-center text-white">
            <HiOutlineCalendarDateRange /> Nov 5 - <CiTimer /> 20mins read
          </span>
          <h2 className="text-4xl font-extrabold text-white my-4">
            The Power of Worship: How Praising God Transforms Your Life
          </h2>
          <p className="text-gray-300 text-sm pt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            necessitatibus dolorum neque ducimus ipsum tempore, blanditiis magni
            modi ex sint voluptate iure, possimus quod nobis natus suscipit
            dicta et esse!
          </p>
        </div>
      </div>
      <div className="absolute bg-black/50 inset-0"></div>
    </section>
  );
}

export default Section3;
