interface HeroBlogCardProps {
  className?: string;
  title: string;
  date: string;
  readTime: string;
  image: string;
}

function HeroBlogCard({
  className,
  title,
  date,
  readTime,
  image,
}: HeroBlogCardProps) {
  return (
    <div
      className={`relative w-[230px] h-[200px] rounded-2xl overflow-hidden mt-3 ${className}`}
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="absolute bottom-0 right-0 left-0 top-[50%] bg-gradient-to-b from-white/0 to-white/30"></div>
      <div className="relative z-50 h-full flex flex-col justify-end p-4">
        <p className="font-mono flex gap-3 items-center text-xs">
          {date} - {readTime} read
        </p>
        <h2 className="font-semibold mt-1">{title}</h2>
      </div>
    </div>
  );
}

export default HeroBlogCard;
