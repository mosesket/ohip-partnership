import { CarouselItem } from "../../pages/Home";
import { motion } from "framer-motion";

function Testimonial({ DEFAULT_ITEMS }: { DEFAULT_ITEMS: CarouselItem[] }) {
  return (
    <>
      {DEFAULT_ITEMS.map((item, i) => (
        <motion.div key={i} className="min-w-full">
          <div className="flex justify-center max-[803px]:flex-col-reverse min-[803px]:max-h-[35rem]">
            <div className="bg-[#060606] text-white w-full p-8 h-full">
              <div className="">
                <span className="flex h-7 w-7 items-center justify-center rounded-full text-[#060606] bg-white">
                  {item.icon}
                </span>
              </div>
              <div className="mt-4 font-semibold text-2xl">{item.title}</div>
              <p className="mt-8">{item.description}</p>
              <p className="text-[20rem] text-gray-300  max-[828px]:hidden">
                "
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </>
  );
}

export default Testimonial;
