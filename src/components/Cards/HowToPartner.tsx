import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
export interface CarouselItem {
  title: string;
  description: string;
  image: string;
}
function HowToPartner({ DEFAULT_ITEMS }: { DEFAULT_ITEMS: CarouselItem[] }) {
  return (
    <>
      {DEFAULT_ITEMS.map((item, i) => (
        <motion.div key={i} className="min-w-full">
          <div
            className="relative min-h-[55vh] flex items-center p-8 mt-10"
            style={{
              backgroundImage: `url(${item.image})`,
              backgroundSize: "cover",
              backgroundPosition: "top",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="absolute bg-blue-900/30 inset-0"></div>
            <div className="z-10">
              <h2 className="text-white text-3xl font-semibold mb-4">
                {item.title}
              </h2>
              <p className="text-white max-w-3xl max-[820px]:max-w-xl text-[14px] max-[490px]:px-8">
                {item.description}
              </p>
              <Link
                to={"#"}
                className="text-white flex items-center gap-4 text-xl mt-10"
              >
                Become a Partner <BsArrowRight />
              </Link>
            </div>
          </div>
        </motion.div>
      ))}
    </>
  );
}

export default HowToPartner;
