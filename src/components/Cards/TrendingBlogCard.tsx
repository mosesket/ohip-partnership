import { CiTimer } from "react-icons/ci";
import { HiOutlineCalendarDateRange } from "react-icons/hi2";

interface TrendingBlogCardProps {
  className?: string;
  title: string;
  date: string;
  readTime: string;
  image: string;
  content: string;
}
function TrendingBlogCard({
  className,
  title,
  date,
  readTime,
  image,
  content,
}: TrendingBlogCardProps) {
  return (
    <div className="flex gap-2 justify-between items-center">
      <div
        className={`relative w-[430px] h-[150px] rounded-sm overflow-hidden mt-3 ${className} shadow-2xl`}
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="w-full">
        <span className="flex gap-1 text-sm items-center">
          <HiOutlineCalendarDateRange /> {date} - <CiTimer /> {readTime} read
        </span>
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="mt-3 text-sm text-gray-500">{content}</p>
      </div>
    </div>
  );
}

export default TrendingBlogCard;
