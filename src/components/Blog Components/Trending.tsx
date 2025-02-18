import { HiOutlineCalendarDateRange } from "react-icons/hi2";
import TrendingBlogCard from "../Cards/TrendingBlogCard";
import { CiTimer } from "react-icons/ci";

function Trending() {
  return (
    <section className="my-36 flex justify-center max-w-6xl mx-auto bg-gray-100">
      <div className="flex w-full gap-5 justify-between">
        <div className="w-full max-w-[45rem] p-8">
          <h2 className="text-2xl font-semibold">Trending News</h2>
          <TrendingBlogCard
            content="In the midst of our busy lives, it’s easy to get caught up in daily responsibilities and forget to spend time with God. However..."
            date="Dec 30"
            image="https://cdn.pixabay.com/photo/2025/01/20/19/00/love-9347917_1280.jpg"
            readTime="40mins"
            title="Why Daily Devotionals Matter"
          />
          <TrendingBlogCard
            content="In the midst of our busy lives, it’s easy to get caught up in daily responsibilities and forget to spend time with God. However..."
            date="Dec 30"
            image="https://cdn.pixabay.com/photo/2021/11/02/21/57/prayer-6764197_1280.jpg"
            readTime="40mins"
            title="Strengthening Your Faith: How to Stay Connected to God..."
          />
          <TrendingBlogCard
            content="In the midst of our busy lives, it’s easy to get caught up in daily responsibilities and forget to spend time with God. However..."
            date="Dec 30"
            image="https://cdn.pixabay.com/photo/2021/09/23/02/20/cat-6648335_1280.jpg"
            readTime="40mins"
            title="Why Daily Devotionals Matter"
          />
        </div>
        <div
          className={`relative h-full max-w-[30rem] flex-col rounded-sm overflow-hidden shadow-2xl flex justify-between p-8`}
          style={{
            backgroundImage: `url(https://cdn.pixabay.com/photo/2025/02/02/14/06/bird-9376831_1280.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="border-2 border-white py-1 px-2 text-white z-50 self-start text-sm">
            SUNDAY SERVICE
          </div>
          <div className="absolute inset-0 bg-black/50 rounded-sm"></div>
          <div className="relative z-50">
            <span className="flex gap-1 text-sm items-center text-white">
              <HiOutlineCalendarDateRange /> Nov 5 - <CiTimer /> 20mins read
            </span>
            <h2 className="text-3xl font-bold text-white">
              The Power of Worship: How Praising God Transforms Your Life
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Trending;
