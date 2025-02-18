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
    <div className="">
      <div
        className={`relative w-[230px] h-[200px] rounded-2xl overflow-hidden mt-3 ${className} shadow-2xl`}
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="">
        <span className="font-mono flex gap-3 items-center">
          <HiOutlineCalendarDateRange /> {date} - <CiTimer /> {readTime} read
        </span>
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </div>
  );
}

export default TrendingBlogCard;
