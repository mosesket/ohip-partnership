import React from "react";

function Section3() {
  return (
    <section
      className={`relative h-full max-w-[30rem] flex-col rounded-sm overflow-hidden shadow-2xl flex justify-between p-8`}
      style={{
        backgroundImage: `url(https://cdn.pixabay.com/photo/2025/02/02/14/06/bird-9376831_1280.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    ></section>
  );
}

export default Section3;
