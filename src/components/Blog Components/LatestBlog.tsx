import BlogCard from "../Cards/BlogCard";

function LatestBlog() {
  return (
    <section className="max-w-6xl mx-auto py-10 mt-20">
      <h2 className="text-3xl font-semibold mb-5">Latest Blog</h2>
      <div className="flex gap-2 flex-wrap justify-center">
        <BlogCard
          backgroundImage="https://cdn.pixabay.com/photo/2025/02/02/14/06/bird-9376831_1280.jpg"
          title="The Power of Worship: How Praising God Transforms Your Life"
          category="SUNDAY SERVICE"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
  necessitatibus dolorum neque ducimus ipsum tempore, blanditiis magni
  modi ex sint voluptate iure."
          date="Nov 26"
          readTime="40"
        />

        <BlogCard
          backgroundImage="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*h-Y6W5VfM8lath9myNS5tQ.jpeg"
          title="Finding Peace Through Prayer and Meditation"
          category="FAITH & SPIRITUALITY"
          content="Discover how daily prayer and quiet meditation can bring clarity, peace, and strength to your life."
          date="Nov 27"
          readTime="35"
        />

        <BlogCard
          backgroundImage="https://cdn.pixabay.com/photo/2022/05/09/07/52/flamingo-7183937_1280.jpg"
          title="Why Community Worship Matters: The Power of Fellowship"
          category="CHURCH LIFE"
          content="Worshipping together strengthens our faith and fosters a deeper connection with God and one another."
          date="Nov 28"
          readTime="30"
        />

        <BlogCard
          backgroundImage="https://cdn.pixabay.com/photo/2024/08/21/14/51/four-dimensional-8986442_1280.png"
          title="The Role of Music in Worship: A Spiritual Experience"
          category="WORSHIP & PRAISE"
          content="Music has a profound impact on our worship, elevating our spirits and drawing us closer to God."
          date="Nov 29"
          readTime="25"
        />
        <BlogCard
          backgroundImage="https://cdn.pixabay.com/photo/2025/01/19/16/04/love-9344644_1280.jpg"
          title="The Bible on Worship: Scriptures That Inspire Praise"
          category="BIBLICAL TEACHINGS"
          content="Explore key Bible verses about worship and how they can shape our spiritual journey."
          date="Dec 1"
          readTime="30"
        />

        <BlogCard
          backgroundImage="https://cdn.pixabay.com/photo/2024/11/19/12/30/whistling-wind-9208906_1280.jpg"
          title="Overcoming Spiritual Dryness Through Worship"
          category="FAITH RENEWAL"
          content="Feeling distant from God? Learn how worship can reignite your passion for His presence."
          date="Dec 2"
          readTime="25"
        />
      </div>
    </section>
  );
}

export default LatestBlog;
