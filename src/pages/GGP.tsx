"use client";
import g20 from "../assets/images/g20.jpg";
import { Link } from "react-router-dom";
import VideoPlaceholder from "../components/placeholder/VideoPlaceholder";
import noto_bank from "../assets/Icons/noto_bank.png";
import location from "../assets/Icons/location.png";
import phone from "../assets/Icons/phone.png";
import warning from "../assets/Icons/ion_warning.png";
import world from "../assets/Icons/world.png";
import { FaAward } from "react-icons/fa";
// import { CarouselItem } from "../components/Cards/HowToPartner";
// import { FaCheck } from "react-icons/fa6";
// import Carousel from "../components/Animation/Carousel/Carousel";
// import { useEffect, useState } from "react";
// import howToPartnerImg1 from "../assets/images/how-to-partner.png";
import Accordion from "../components/Accordion";

function GGP() {
  // const DEFAULT_ITEMS: CarouselItem[] = [
  //   {
  //     title: "Medium length section heading goes here",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quisquam.",
  //     image: howToPartnerImg1,
  //   },
  //   {
  //     title: "Medium length section heading goes here",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quisquam.",

  //     image: howToPartnerImg1,
  //   },
  //   {
  //     title: "Medium length section heading goes here",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quisquam.",

  //     image: howToPartnerImg1,
  //   },
  //   {
  //     title: "Medium length section heading goes here",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quisquam.",

  //     image: howToPartnerImg1,
  //   },
  //   {
  //     title: "Medium length section heading goes here",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quisquam.",
  //     image: howToPartnerImg1,
  //   },
  // ];
  // const [index, setIndex] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setIndex((prev) => (prev + 1) % DEFAULT_ITEMS.length);
  //   }, 5000); // Change slide every 5 seconds

  //   return () => clearInterval(interval); // Cleanup on unmount
  // }, []);

  // const nextSlide = () => setIndex((prev) => (prev + 1) % DEFAULT_ITEMS.length);
  // const prevSlide = () =>
  //   setIndex(
  //     (prev) => (prev - 1 + DEFAULT_ITEMS.length) % DEFAULT_ITEMS.length
  //   );
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
              WELCOME TO GLOBAL GOSPEL PARTNERSHIP (GGP)
            </h2>
            <p className="text-white max-w-4xl mx-auto max-[820px]:max-w-xl text-[20px] text-center max-[490px]:px-8">
              A monthly media partnership that gives you the opportunity to give
              towards ministry expansion via the airwaves
            </p>
            <p className="text-white max-w-2xl mx-auto max-[820px]:max-w-xl text-[20px] text-center max-[490px]:px-8">
              Formerly known as Onesound Higher Impact Partnership (OHIP).
            </p>
            <div className="flex text-center mt-10 gap-3 justify-center">
              <Link
                to="/register"
                className="bg-red-700 text-center text-lg text-white px-8 py-2 rounded-sm"
              >
                Become a Partner
              </Link>
            </div>
          </div>
        </section>
        <section className="flex min-h-[80vh] max-[853px]:flex-col max-[853px]:py-20 justify-center items-center max-w-5xl gap-16 mx-auto">
          <div className="w-full max-w-md max-[853px]:max-w-full max-[853px]:px-8 text-lg">
            <p className="mb-8">
              On behalf of the Prophet, we welcome all partners to this
              community in the name of Jesus, and we thank you for being a
              partner with the Prophet. Because you are signed up for
              partnership, you will be receiving this communication from the
              prophet's office regularly as his way of staying in touch with
              you.
            </p>
            <p className="mb-2">
              As we begin again, it is important we review what this
              relationship is about.
            </p>
          </div>
          <VideoPlaceholder />
        </section>
        <section className="bg-gray-100 min-h-[80vh] py-20">
          <div className="flex flex-col gap-8 p-8 max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="bg-white rounded-lg shadow-md p-6 w-full md:w-1/2 relative">
                <div className="absolute top-0 right-0 h-full w-1 bg-red-500 rounded-r-lg"></div>
                <h2 className="text-2xl font-semibold mb-4">
                  Who is a GGP Partner
                </h2>
                <p className="text-gray-700">
                  A GGP Partner is one who has made a commitment to do bigger
                  things with God through his/her finances. This means that you
                  set aside a specific amount monthly with which you support
                  kingdom expansion.
                </p>
              </div>

              {/* Why GGP Partnership */}
              <div className="bg-white rounded-lg shadow-md p-6 w-full md:w-1/2 relative">
                <div className="absolute top-0 right-0 h-full w-1 bg-yellow-800 rounded-r-lg"></div>
                <h2 className="text-2xl font-semibold mb-4">
                  Why GGP Partnership
                </h2>
                <p className="text-gray-700">
                  GGP is a partnership system for kingdom expansion, church
                  planting and spread of the Gospel through media.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 relative">
              <div className="absolute top-0 right-0 h-full w-1 bg-yellow-500 rounded-r-lg"></div>
              <h2 className="text-2xl font-semibold mb-4">
                Who is a GGP Partner
              </h2>
              <p className="text-gray-700 mb-4">
                As a a GGP Partner, you have been given the unique opportunity
                to:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>
                  Play a vital role in ensuring the ministry dominates the media
                  and global airwaves with the Gospel of Jesus Christ, reaching
                  millions through international TV, satellite stations, and
                  digital media.
                </li>
                <li>
                  Extend the love of Jesus Christ by providing essential support
                  to the poor and needy, transforming lives through extensive
                  acts of kindness.
                </li>
                <li>
                  Support missions and church planting aimed at reaching nations
                  with the gospel of Jesus Christ.
                </li>
              </ul>
            </div>
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
        {/* <section className="min-h-[70vh] mx-auto max-w-5xl py-20">
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
        </section> */}
        <section className="min-h-[70vh] py-20">
          <h2 className="text-3xl font-semibold text-center mb-4">
            Benefits of Partnership
          </h2>
          <p className="text-center">
            As a partner with the Prophet, you will receive:
          </p>
          <div className="flex flex-wrap max-[900px]:px-6 gap-8 max-w-5xl mx-auto mt-20">
            <ul>
              <li className="flex items-center gap-2 mb-4">
                <FaAward /> Weekly Prayer Audio Message from the Prophet
              </li>
              <li className="flex items-center gap-2 mb-4">
                <FaAward /> Special Prayer Call from the Prophet
              </li>
              <li className="flex items-center gap-2 mb-4">
                <FaAward /> Special Surprise packs
              </li>
              <li className="flex items-center gap-2 mb-4">
                <FaAward /> Special monthly Impact Newsletters
              </li>
              <li className="flex items-center gap-2 mb-4">
                <FaAward /> Fulfilment from touching lives and spreading the
                message of Jesus Christ
              </li>
            </ul>
            <ul>
              <li className="flex items-center gap-2 mb-4">
                <FaAward /> Partaking of the Blessing of ministry impact
              </li>
              <li className="flex items-center gap-2 mb-4">
                <FaAward /> Eternal value deposited in heaven for you
              </li>
              <li className="flex items-center gap-2 mb-4">
                <FaAward /> Partaking of the same grace upon the prophet
              </li>
              <li className="flex items-center gap-2 mb-4">
                <FaAward /> Enjoying angelic assistance from ministry finance
                angels
              </li>
              <li className="flex items-center gap-2 mb-4">
                <FaAward /> Access To an Annual Dinner with God's Prophet
              </li>
            </ul>
          </div>
        </section>
        <section className="min-h-[70vh] py-20">
          <h2 className="text-3xl text-center mb-3 font-semibold">
            How to Remit Your Partnership
          </h2>
          <p className="text-center">Kindly make your monthly payment to</p>
          <div className="flex flex-wrap w-full max-w-4xl gap-8 justify-center mx-auto mt-10">
            <div className="p-8 bg-slate-100 rounded-2xl w-[24rem]">
              <img src={noto_bank} alt="" className="mx-auto" />
              <h3 className="text-2xl font-semibold mb-4 text-center">
                Bank Payment Details
              </h3>
              <p className="text-gray-700 text-center">
                Gospel Pillars Ministry HIP <br /> 1012861782 <br /> Zenith Bank
              </p>
            </div>
            <div className="p-8 bg-slate-100 rounded-2xl w-[24rem]">
              <img src={world} alt="" className="mx-auto" />
              <h3 className="text-2xl font-semibold mb-4 text-center">
                Online Payment
              </h3>
              <p className="text-gray-700 text-center">
                Pay online through our website: <br />
                <Link to={""} className="text-blue-500">
                  {" "}
                  https://gospelpillars.org/give
                </Link>
              </p>
            </div>
            <div className="p-8 bg-slate-100 rounded-2xl w-[24rem]">
              <img src={location} alt="" className="mx-auto" />
              <h3 className="text-2xl font-semibold mb-4 text-center">
                Physical Office
              </h3>
              <p className="text-gray-700 text-center text-sm">
                visit us at the Global Partnership Office <br /> by G20 Lounge,
                Ark of Light For All Nations <br /> (8am - 5pm, Mondays to
                Fridays)
              </p>
            </div>
            <div className="p-8 bg-slate-100 rounded-2xl w-[24rem]">
              <img src={phone} alt="" className="mx-auto w-8" />
              <h3 className="text-2xl font-semibold mb-4 text-center">
                Contact
              </h3>
              <p className="text-gray-700 text-center">
                further assistance or clarifications, kindly <br /> reach us on
                +2349066710879
              </p>
            </div>
          </div>
        </section>
        <section className="flex justify-center items-center flex-col gap-10 py-20">
          <img src={warning} alt="" />
          <h2 className="text-2xl font-bold">Be Security Conscious</h2>
          <p className="max-w-4xl text-center">
            If you receive a message that looks suspicious, even if the source
            has the same name as this community, check to ensure that this page
            has not been duplicated, especially if you are being asked to
            provide personal or payment details.
          </p>
          <h3 className="text-2xl font-bold">Beware!</h3>
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

export default GGP;
