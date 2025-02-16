import React from "react";

interface HeroBlogCardProps {
  className: string;
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
      className="w-[300px] h-[400px]"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-black/30 h-full flex flex-col justify-end p-4">
        <p className="font-mono flex gap-3 items-center">
          {date} - {readTime} read
        </p>
        <h2 className="text-2xl font-semibold my-4">{title}</h2>
      </div>
    </div>
  );
}

export default HeroBlogCard;
