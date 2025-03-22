"use client";
import { JSX, useEffect, useState } from "react";
import ohipImg1 from "../assets/images/ohip-img-1.jpg";
// import ohipImg2 from "../assets/images/ohip-img-2.png";
// import ohipImg3 from "../assets/images/ohip-img-3.png";
// import ohipImg4 from "../assets/images/ohip-img-4.png";
// import { Link } from "react-router-dom";
// import { VscWorkspaceTrusted } from "react-icons/vsc";
// import { GiWorld } from "react-icons/gi";
// import { TbChartPie2 } from "react-icons/tb";
// import { IoIosPeople } from "react-icons/io";
import Carousel from "../components/Animation/Carousel/Carousel";
import { FiCircle, FiFileText } from "react-icons/fi";
import Testimonial from "../components/Cards/Testimonial";

export interface CarouselItem {
  title: string;
  description: any;
  id: number;
  icon: JSX.Element;
  // profile: string;
}

function Home() {
  const DEFAULT_ITEMS: CarouselItem[] = [
    {
      title: "DIVINE REVERSAL IN MY BUSINESS!",
      description: (
        <>
          Last year ended with a breakthrough—I paid my G20 vow, rent, and major
          expenses in one month as my finances shifted. But in March, everything
          dried up. Despite the struggle, I stayed committed to my tithes and
          vows, giving all I had.
          <br />
          <br />
          At Night of Divine Reversal, I cried to God. That Sunday, Apostle
          Peter sent me a prophetic seed—my last money! Two days later, my
          financial doors BURST open—bulk jobs and money flowed in effortlessly!
          What took months to struggle for is now coming with ease!
          <br />
          <br />
          As I type, ANOTHER BULK ORDER JUST CAME IN! I have truly seen the
          mercy of God!
          <h2 className="text-2xl font-semibold mt-8">Esamah Deba</h2>
          <p>GPC Lekki, Lagos</p>
        </>
      ),
      id: 1,
      icon: <FiFileText className="carousel-icon" />,
    },
    {
      title: "MY FEJ PACKAGE CAME EARLY!",
      description: (
        <>
          I struggled with low-paying jobs for years. In 2021, Prophet declared
          that sowing into the Ark would break financial limits. I believed,
          sowed hundreds of thousands, and remitted my vow—even when I didn’t
          know how.
          <br />
          <br />
          Soon after, the Holy Spirit led me into tech, miraculously providing
          for my training. He also instructed me to take my House of Prayer and
          GGP seriously, and as I obeyed, my finances began to shift.
          <br />
          <br />
          Days before Friday Evening With Jesus, I applied for a job and prayed
          over my oblations. Just hours after FEJ, I got an offer—5x my salary!
          On my resumption day, another company offered more, and side gigs keep
          flowing in!
          <p className="my-5">
            The covenant works, and I am living proof! Glory to God!
          </p>
          <h2 className="text-2xl font-semibold mt-8">Kenny Ogbogu</h2>
          <p>GPC Yaba, Lagos</p>
        </>
      ),
      id: 2,
      icon: <FiCircle className="carousel-icon" />,
    },
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % DEFAULT_ITEMS.length);
    }, 9000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setIndex((prev) => (prev + 1) % DEFAULT_ITEMS.length);
  const prevSlide = () =>
    setIndex(
      (prev) => (prev - 1 + DEFAULT_ITEMS.length) % DEFAULT_ITEMS.length
    );
  return (
    <>
      <section
        className="relative min-h-screen max-[941px]:min-h-[80vh] flex items-center justify-center pt-32"
        style={{
          backgroundImage: `url(${ohipImg1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute bg-blue-900/30 inset-0"></div>
        <div className="z-10">
          <h2 className="text-white capitalize text-6xl max-[820px]:text-5xl font-semibold text-center mb-4">
            Welcome to Partnership
          </h2>
          <p className="text-white max-w-3xl max-[820px]:max-w-xl text-xl text-center max-[490px]:px-8">
            It's all about jesus
          </p>
          <iframe
            src="https://www.youtube.com/embed/zn9-73sWaiA?si=rt0Yb9bHYVetEWw2"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            className="mx-auto mt-10 w-[50rem] h-[30rem] max-[820px]:w-full max-[820px]:h-96"
          ></iframe>
          {/* <a
            href="https://partner.myketnology.com/"
            className="bg-red-600 mt-10 block mx-auto w-52 text-center text-lg text-white px-4 py-3 rounded-sm hover:bg-red-700"
            >
            Become a Partner
            </a> */}
        </div>
      </section>
      {/* <section className="min-h-screen flex justify-center gap-16 items-center max-[860px]:flex-col-reverse">
        <img
          src={ohipImg2}
          alt="Packaging food stuff to give"
          className="h-[600px] object-cover max-[820px]:w-full px-10"
        />
        <div className="max-w-1/3 max-[860px]:max-w-full p-10">
          <h2 className="text-3xl uppercase mb-5 font-bold">About OHIP</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio
            saepe rerum culpa quasi alias eligendi nihil qui labore commodi?
            Incidunt saepe reprehenderit libero illo. Est adipisci voluptatibus
            laudantium rerum nobis accusantium dolor, fuga numquam optio, itaque
            eum aliquam ea vitae, quia error nemo quae dicta quidem aut soluta
            ab eaque?
          </p>
          <Link
            to="/become-a-partner"
            className="bg-red-600 mt-10 block w-52 text-center text-lg text-white px-4 py-3 rounded-sm hover:bg-red-700"
          >
            Read More
          </Link>
        </div>
      </section> */}
      {/* <section className="min-h-[70vh] flex justify-center items-center gap-10 px-20 max-[860px]:pb-28 max-[860px]:mt-10 max-[860px]:flex-wrap">
        <div className="text-center">
          <VscWorkspaceTrusted className="text-6xl mx-auto mb-2 text-red-500" />
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus ea
            recusandae sapiente laborum eos quidem.
          </p>
          <h2 className="mt-3 font-semibold text-2xl">Service</h2>
        </div>
        <div className="text-center">
          <GiWorld className="text-6xl mx-auto mb-2 text-red-400" />
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus ea
            recusandae sapiente laborum eos quidem.
          </p>
          <h2 className="mt-3 font-semibold text-2xl">Countries Impacted</h2>
        </div>
        <div className="text-center">
          <TbChartPie2 className="text-6xl mx-auto mb-2 text-red-800" />
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus ea
            recusandae sapiente laborum eos quidem.
          </p>
          <h2 className="mt-3 font-semibold text-2xl">Countries Impacted</h2>
        </div>
        <div className="text-center">
          <div className="mb-2">
            <IoIosPeople className="text-6xl mx-auto text-red-800" />
            <span className="text-2xl font-bold">143 Millions</span>
          </div>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus ea
            recusandae sapiente laborum eos quidem.
          </p>
          <h2 className="mt-3 font-semibold text-2xl">
            Number Of Lives Touched
          </h2>
        </div>
      </section> */}
      {/* <section className="relative min-h-[30vh] text-white text-center flex justify-center items-center gap-10 p-20 max-[490px]:px-8 bg-red-600">
        <img
          src={ohipImg3}
          alt="Prophet Isaiah Mac Wealth"
          className="absolute w-40 -top-24"
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ea, id
          dolore quod at, nam cum, nostrum dolores ab eos cupiditate
          repellendus? Ex harum repellat odio labore sapiente, dolorum velit.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda,
          at modi eaque itaque veniam aspernatur nesciunt unde temporibus dolore
          option.
        </p>
      </section> */}
      {/* <section className="py-20 flex justify-center items-center gap-10 px-20">
        <img
          src={ohipImg4}
          alt="become a partner flyer"
          className="max-w-4xl max-[860px]:w-full"
        />
      </section> */}
      <section className="min-h-[30vh] flex justify-center items-center gap-10 max-[860px]:flex-wrap max-[860px]:gap-4">
        <button className="text-lg bg-red-600 px-16 rounded-md py-3 text-white">
          Join GGp
        </button>
        <button className="text-lg bg-red-600 px-16 rounded-md py-3 text-white">
          Join G20
        </button>
      </section>
      <section>
        <h2 className="text-2xl font-semibold text-center mb-10">
          Testimonial & and Success Story
        </h2>
        <Carousel
          prevSlide={prevSlide}
          nextSlide={nextSlide}
          DEFAULT_ITEMS={DEFAULT_ITEMS}
          index={index}
          content={<Testimonial DEFAULT_ITEMS={DEFAULT_ITEMS} />}
        />
      </section>
    </>
  );
}

export default Home;
