import { CiTimer } from "react-icons/ci";
import { HiOutlineCalendarDateRange } from "react-icons/hi2";

interface BlogCardProps {
  category: string;
  backgroundImage: string;
  date: string;
  readTime: string;
  title: string;
  content: string;
}
function BlogCard({
  category,
  backgroundImage,
  date,
  readTime,
  title,
  content,
}: BlogCardProps) {
  return (
    <div className="w-full max-w-[20rem]">
      <div
        className={`relative h-[200px] w-full flex-col rounded-sm overflow-hidden shadow-2xl flex justify-between p-4`}
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="border-2 border-white py-1 px-2 text-white z-50 self-end text-xs">
          {category}
        </div>
        <div className="absolute inset-0 bg-black/50 rounded-sm"></div>
      </div>
      <span className="flex gap-1 text-sm items-center my-3">
        <HiOutlineCalendarDateRange /> {date} - <CiTimer /> {readTime}mins read
      </span>
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-gray-500 mt-3 text-sm">{content}</p>
    </div>
  );
}

export default BlogCard;
