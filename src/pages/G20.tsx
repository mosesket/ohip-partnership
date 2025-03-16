"use client";
import g20 from "../assets/images/g20.jpg";
import fyh1 from "../assets/images/1.png";
import { Link } from "react-router-dom";
import videoSrc from "../assets/images/video.png";
import HowToPartner, { CarouselItem } from "../components/Cards/HowToPartner";
import { FaCheck } from "react-icons/fa6";
import Carousel from "../components/Animation/Carousel/Carousel";
import { useEffect, useState } from "react";
import howToPartnerImg1 from "../assets/images/how-to-partner.png";
import Accordion from "../components/Accordion";

function G20() {
  const DEFAULT_ITEMS: CarouselItem[] = [
    {
      title: "Medium length section heading goes here",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quisquam.",
      image: howToPartnerImg1,
    },
    {
      title: "Medium length section heading goes here",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quisquam.",

      image: howToPartnerImg1,
    },
    {
      title: "Medium length section heading goes here",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quisquam.",

      image: howToPartnerImg1,
    },
    {
      title: "Medium length section heading goes here",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quisquam.",

      image: howToPartnerImg1,
    },
    {
      title: "Medium length section heading goes here",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quisquam.",
      image: howToPartnerImg1,
    },
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % DEFAULT_ITEMS.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const nextSlide = () => setIndex((prev) => (prev + 1) % DEFAULT_ITEMS.length);
  const prevSlide = () =>
    setIndex(
      (prev) => (prev - 1 + DEFAULT_ITEMS.length) % DEFAULT_ITEMS.length
    );
  return (
    <>
      <main className="">
        <section
          className="relative min-h-screen flex items-center justify-center"
          style={{
            backgroundImage: `url(${g20})`,
            backgroundSize: "cover",
            backgroundPosition: "top",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute bg-blue-900/30 inset-0"></div>
          <div className="z-10 max-w-4xl">
            <h2 className="text-white text-6xl max-[820px]:text-4xl font-semibold text-center mb-4">
              Become a Partner in Spreading the Gospel
            </h2>
            <p className="text-white max-w-2xl mx-auto max-[820px]:max-w-xl text-[14px] text-center max-[490px]:px-8">
              Your partnership helps spread the Gospel, support ministries, and
              transform lives worldwide. Be a part of this mission.
            </p>
            <div className="flex text-center mt-10 gap-3 justify-center">
              <Link
                to="/become-a-partner"
                className="bg-white w-40 border-white border text-center text-lg text-gray-900 px-4 py-2 rounded-sm hover:bg-red-700"
              >
                Button
              </Link>
              <Link
                to="/become-a-partner"
                className="border-white border w-40 text-center text-lg text-white px-4 py-2 rounded-sm hover:bg-red-700"
              >
                Button
              </Link>
            </div>
          </div>
        </section>
        <section className="p-5  mt-10">
          <h2 className="text-3xl font-semibold text-center">About G20</h2>
          <p className="text-justify max-w-6xl  mx-auto mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            quisquam obcaecati eum laudantium fugiat molestias quos modi
            expedita accusamus delectus, eius debitis possimus dolores ea enim
            quam porro sapiente pariatur unde libero quibusdam distinctio.
            Provident nobis eum commodi porro illum est amet officiis rem illo?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
            excepturi. Quidem recusandae voluptatibus alias provident aspernatur
            distinctio officia officiis, veritatis ducimus cum aliquam
            consequatur laboriosam cupiditate architecto nesciunt corrupti,
            assumenda inventore neque quis hic nemo eaque aperiam minus! Unde,
            possimus officia dicta iure minima numquam necessitatibus porro quis
            perferendis, quaerat provident facilis in tempore vero omnis.
            Voluptate, rerum qui. Rem deleniti, consectetur exercitationem
            repellat veniam ea minima similique magnam provident, sequi deserunt
            ab corporis molestiae recusandae nulla iusto odio excepturi. Alias
            deserunt autem itaque consequatur quo deleniti ea modi cumque,
            perferendis voluptas molestias voluptatem vero culpa tempore,
            possimus officiis aut.
          </p>
          <p className="text-justify max-w-6xl  mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            quisquam obcaecati eum laudantium fugiat molestias quos modi
            expedita accusamus delectus, eius debitis possimus dolores ea enim
            quam porro sapiente pariatur unde libero quibusdam distinctio.
            Provident nobis eum commodi porro illum est amet officiis rem illo?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
            excepturi. Quidem recusandae voluptatibus alias provident aspernatur
            distinctio officia officiis, veritatis ducimus cum aliquam
            consequatur laboriosam cupiditate architecto nesciunt corrupti,
            assumenda inventore neque quis hic nemo eaque aperiam minus! Unde,
            possimus officia dicta iure minima numquam necessitatibus porro quis
            perferendis, quaerat provident facilis in tempore vero omnis.
            Voluptate, rerum qui. Rem deleniti, consectetur exercitationem
            repellat veniam ea minima similique magnam provident, sequi deserunt
            ab corporis molestiae recusandae nulla iusto odio excepturi. Alias
            deserunt autem itaque consequatur quo deleniti ea modi cumque,
            perferendis voluptas molestias voluptatem vero culpa tempore,
            possimus officiis aut.
          </p>
        </section>
        <section className="flex min-h-[80vh] max-[853px]:flex-col max-[853px]:py-20 justify-center items-center max-w-5xl gap-16 mx-auto">
          <div className="w-full rounded-2xl h-[30rem] flex justify-center items-center">
            <img src={videoSrc} alt="" />
          </div>
          <div className="w-full max-w-md max-[853px]:max-w-full max-[853px]:px-8">
            <h2 className="text-3xl font-semibold mb-3">
              Benefits of Partnership
            </h2>
            <p className="mb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </p>
            <p className="mb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </p>
            <p className="mb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </p>
          </div>
        </section>
        {/* <section className="flex flex-wrap justify-center items-center gap-10 min-h-[40vh] py-20">
          <div className="flex w-[18rem] flex-col items-center text-center shadow-lg p-4 rounded-2xl">
            <img src={g20Icon1} alt="" className="w-10" />
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </p>
          </div>
          <div className="flex w-[18rem] flex-col items-center text-center shadow-lg p-4 rounded-2xl">
            <img src={g20Icon1} alt="" className="w-10" />
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </p>
          </div>
          <div className="flex w-[18rem] flex-col items-center text-center shadow-lg p-4 rounded-2xl">
            <img src={g20Icon1} alt="" className="w-10" />
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </p>
          </div>
          <div className="flex w-[18rem] flex-col items-center text-center shadow-lg p-4 rounded-2xl">
            <img src={g20Icon1} alt="" className="w-10" />
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </p>
          </div>
        </section> */}
        <section className="min-h-[70vh] mx-auto max-w-5xl py-20">
          <h2 className="text-4xl max-[853px]:text-3xl mb-3 text-center font-medium">
            How to Become a Partner
          </h2>
          <p className="text-center text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          </p>
          <Carousel
            index={index}
            nextSlide={nextSlide}
            prevSlide={prevSlide}
            DEFAULT_ITEMS={DEFAULT_ITEMS}
            content={<HowToPartner DEFAULT_ITEMS={DEFAULT_ITEMS} />}
          />
        </section>
        <section className="min-h-screen py-10">
          <h2 className="text-4xl text-center mb-3 font-semibold">
            Partnership Tiers
          </h2>
          <p className="text-sm text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          </p>
          <div className="flex flex-wrap justify-between max-[853px]:justify-center gap-8 max-w-[60rem] mx-auto mt-10">
            <div className="w-72 shadow-lg p-6 py-8">
              <h2 className="text-2xl font-semibold text-center">Gold</h2>
              <ul className="flex flex-col gap-2 mt-3">
                <li className="flex items-center gap-2">
                  <FaCheck />
                  Feature text goes here
                </li>
                <li className="flex items-center gap-2">
                  <FaCheck />
                  Feature text goes here
                </li>
                <li className="flex items-center gap-2">
                  <FaCheck />
                  Feature text goes here
                </li>
                <li className="flex items-center gap-2">
                  <FaCheck />
                  Feature text goes here
                </li>
                <li className="flex items-center gap-2">
                  <FaCheck />
                  Feature text goes here
                </li>
              </ul>
            </div>
            <div className="w-72 shadow-lg p-6 py-8">
              <h2 className="text-2xl font-semibold text-center">Silver</h2>
              <ul className="flex flex-col gap-2 mt-3">
                <li className="flex items-center gap-2">
                  <FaCheck />
                  Feature text goes here
                </li>
                <li className="flex items-center gap-2">
                  <FaCheck />
                  Feature text goes here
                </li>
                <li className="flex items-center gap-2">
                  <FaCheck />
                  Feature text goes here
                </li>
                <li className="flex items-center gap-2">
                  <FaCheck />
                  Feature text goes here
                </li>
                <li className="flex items-center gap-2">
                  <FaCheck />
                  Feature text goes here
                </li>
              </ul>
            </div>
            <div className="w-72 shadow-lg p-6 py-8">
              <h2 className="text-2xl font-semibold text-center">Bronze</h2>
              <ul className="flex flex-col gap-2 mt-3">
                <li className="flex items-center gap-2">
                  <FaCheck />
                  Feature text goes here
                </li>
                <li className="flex items-center gap-2">
                  <FaCheck />
                  Feature text goes here
                </li>
                <li className="flex items-center gap-2">
                  <FaCheck />
                  Feature text goes here
                </li>
                <li className="flex items-center gap-2">
                  <FaCheck />
                  Feature text goes here
                </li>
                <li className="flex items-center gap-2">
                  <FaCheck />
                  Feature text goes here
                </li>
              </ul>
            </div>
            <div className="w-72 shadow-lg p-6 py-8">
              <h2 className="text-2xl font-semibold text-center">Gold</h2>
              <ul className="flex flex-col gap-2 mt-3">
                <li className="flex items-center gap-2">
                  <FaCheck />
                  Feature text goes here
                </li>
                <li className="flex items-center gap-2">
                  <FaCheck />
                  Feature text goes here
                </li>
                <li className="flex items-center gap-2">
                  <FaCheck />
                  Feature text goes here
                </li>
                <li className="flex items-center gap-2">
                  <FaCheck />
                  Feature text goes here
                </li>
                <li className="flex items-center gap-2">
                  <FaCheck />
                  Feature text goes here
                </li>
              </ul>
            </div>
            <div className="w-72 shadow-lg p-6 py-8">
              <h2 className="text-2xl font-semibold text-center">Silver</h2>
              <ul className="flex flex-col gap-2 mt-3">
                <li className="flex items-center gap-2">
                  <FaCheck />
                  Feature text goes here
                </li>
                <li className="flex items-center gap-2">
                  <FaCheck />
                  Feature text goes here
                </li>
                <li className="flex items-center gap-2">
                  <FaCheck />
                  Feature text goes here
                </li>
                <li className="flex items-center gap-2">
                  <FaCheck />
                  Feature text goes here
                </li>
                <li className="flex items-center gap-2">
                  <FaCheck />
                  Feature text goes here
                </li>
              </ul>
            </div>
            <div className="w-72 shadow-lg p-6 py-8">
              <h2 className="text-2xl font-semibold text-center">Bronze</h2>
              <ul className="flex flex-col gap-2 mt-3">
                <li className="flex items-center gap-2">
                  <FaCheck />
                  Feature text goes here
                </li>
                <li className="flex items-center gap-2">
                  <FaCheck />
                  Feature text goes here
                </li>
                <li className="flex items-center gap-2">
                  <FaCheck />
                  Feature text goes here
                </li>
                <li className="flex items-center gap-2">
                  <FaCheck />
                  Feature text goes here
                </li>
                <li className="flex items-center gap-2">
                  <FaCheck />
                  Feature text goes here
                </li>
              </ul>
            </div>
          </div>
          <button className="bg-black text-white py-2 px-10 rounded-md mx-auto mt-10 block">
            Join Now
          </button>
        </section>
        <section
          className="relative h-[35vh] mt-20 flex items-center justify-center"
          style={{
            backgroundImage: `url(${fyh1})`,
            backgroundSize: "cover",
            backgroundPosition: "top",
            backgroundRepeat: "no-repeat",
          }}
        >
          <button className="bg-red-600 text-white px-6 py-3 rounded-sm hover:bg-red-700">
            Find Your House
          </button>
        </section>
        <section className="py-20 min-h-screen">
          <h2 className="text-4xl text-center mb-3 font-semibold">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros <br />
            elementum tristique.
          </p>
          <Accordion />
        </section>
      </main>
    </>
  );
}

export default G20;
