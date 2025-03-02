"use client";
import { JSX, useEffect, useState } from "react";
import ohipImg1 from "../assets/images/ohip-img-1.jpg";
import ohipImg2 from "../assets/images/ohip-img-2.png";
import ohipImg3 from "../assets/images/ohip-img-3.png";
import ohipImg4 from "../assets/images/ohip-img-4.png";
import { Link } from "react-router-dom";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { GiWorld } from "react-icons/gi";
import { TbChartPie2 } from "react-icons/tb";
import { IoIosPeople } from "react-icons/io";
import Footer from "../components/Footer/Footer";
import Carousel from "../components/Animation/Carousel/Carousel";
import {
  FiCircle,
  FiCode,
  FiFileText,
  FiLayers,
  FiLayout,
} from "react-icons/fi";
import Testimonial from "../components/Cards/Testimonial";

export interface CarouselItem {
  title: string;
  description: string;
  id: number;
  icon: JSX.Element;
  profile: string;
}

function Home() {
  const DEFAULT_ITEMS: CarouselItem[] = [
    {
      title: "Faith Journey",
      description:
        "Attending this church has transformed my life. The community, support, and uplifting messages have brought me closer to God and strengthened my faith. I've discovered a renewed sense of purpose and hope, knowing I'm not walking this journey alone. The sermons speak directly to my heart, offering wisdom and guidance for both my spiritual and personal life. This church has truly become my spiritual home, where I continue to grow and find peace every day.",
      id: 1,
      icon: <FiFileText className="carousel-icon" />,
      profile:
        "https://cdn.pixabay.com/photo/2018/01/22/07/31/portrait-3098319_1280.jpg",
    },
    {
      title: "Spiritual Growth",
      description:
        "I found peace, purpose, and a deeper connection with God through the worship and teachings here. This church truly feels like home. The sermons challenge me to grow spiritually, and the small groups have helped me build lasting relationships. I've discovered the power of prayer and how it can bring clarity to the most challenging situations. The fellowship here is unmatched, and it continually inspires me to seek God's presence in every aspect of my life.",
      id: 2,
      icon: <FiCircle className="carousel-icon" />,
      profile:
        "https://cdn.pixabay.com/photo/2016/11/20/18/18/girl-1843477_1280.jpg",
    },
    {
      title: "Community Support",
      description:
        "From the moment I walked in, I was welcomed with open arms. The love and support I've received from this church family have been incredible. Whether it's through prayer, counseling, or just friendly conversations, I always feel uplifted and encouraged. This church doesn't just talk about love—it lives it. Whether you're going through a tough time or celebrating a joyful moment, there's always someone here to share it with, reminding me of God's constant presence and care.",
      id: 3,
      icon: <FiLayers className="carousel-icon" />,
      profile:
        "https://cdn.pixabay.com/photo/2017/05/31/06/49/model-2359322_1280.jpg",
    },
    {
      title: "Life-Changing Experience",
      description:
        "The sermons, fellowship, and outreach programs have inspired me to live a more meaningful and Christ-centered life. The church's dedication to serving others and spreading love has shown me the importance of compassion and faith in everyday living. It’s more than just attending services—it's about being part of a movement that brings positive change to both individuals and the community. This church has equipped me with the tools to navigate life's challenges while staying rooted in faith.",
      id: 4,
      icon: <FiLayout className="carousel-icon" />,
      profile:
        "https://cdn.pixabay.com/photo/2019/12/16/14/46/black-man-4699506_1280.jpg",
    },
    {
      title: "Heartfelt Gratitude",
      description:
        "I’m so grateful for this church. It’s not just a place of worship, but a source of encouragement, hope, and friendship. The sense of belonging I've found here has brought immense joy and peace to my life, reminding me of God's endless love. The kindness and generosity of the congregation continually inspire me to extend that same love to others. Every service, every event, and every encounter leaves me feeling uplifted and ready to face the world with renewed strength and faith.",
      id: 5,
      icon: <FiCode className="carousel-icon" />,
      profile:
        "https://cdn.pixabay.com/photo/2015/12/20/20/31/m-john-d-1101635_1280.jpg",
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
      <section
        className="relative min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: `url(${ohipImg1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute bg-blue-900/30 inset-0"></div>
        <div className="z-10">
          <h2 className="text-white uppercase text-6xl max-[820px]:text-5xl font-semibold text-center mb-4">
            OHIP Partnership
          </h2>
          <p className="text-white max-w-3xl max-[820px]:max-w-xl text-[14px] text-center max-[490px]:px-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            quisquam corporis exercitationem repudiandae. Maiores facilis
            doloribus ipsa aliquid similique corrupti suscipit tempora
            perferendis ut consequuntur. Id blanditiis ut cupiditate quos?
          </p>
          <Link
            to="/become-a-partner"
            className="bg-red-600 mt-10 block mx-auto w-52 text-center text-lg text-white px-4 py-3 rounded-sm hover:bg-red-700"
          >
            Become a Partner
          </Link>
        </div>
      </section>
      <section className="min-h-screen flex justify-center gap-16 items-center max-[860px]:flex-col-reverse">
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
      </section>
      <section className="min-h-[70vh] flex justify-center items-center gap-10 px-20 max-[860px]:pb-28 max-[860px]:mt-10 max-[860px]:flex-wrap">
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
      </section>
      <section className="relative min-h-[30vh] text-white text-center flex justify-center items-center gap-10 p-20 max-[490px]:px-8 bg-red-600">
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
      </section>
      <section className="py-20 flex justify-center items-center gap-10 px-20">
        <img
          src={ohipImg4}
          alt="become a partner flyer"
          className="max-w-4xl max-[860px]:w-full"
        />
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
      <Footer />
    </>
  );
}

export default Home;
