import TrendingBlogCard from "../Cards/TrendingBlogCard";

function Trending() {
  return (
    <section className="mt-36 flex justify-center max-w-7xl border mx-auto">
      <div className="flex w-full">
        <div className="w-full p-8">
          <h2 className="text-2xl font-semibold">Trending News</h2>
          <TrendingBlogCard
            content="In the midst of our busy lives, it’s easy to get caught up in daily responsibilities and forget to spend time with God. However, daily devotionals provide a consistent way to grow spiritually, refocus our hearts,"
            date="Dec 30"
            image="https://cdn.pixabay.com/photo/2021/11/02/21/57/prayer-6764197_1280.jpg"
            readTime="40mins"
            title="Why Daily Devotionals Matter"
          />
        </div>
        <div className="w-full">Hello</div>
      </div>
    </section>
  );
}

export default Trending;
