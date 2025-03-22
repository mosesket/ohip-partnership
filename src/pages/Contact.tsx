import contact from "../assets/images/23.png";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { LuPhone } from "react-icons/lu";

function Contact() {
  return (
    <>
      {" "}
      <section
        className="relative h-[50vh] flex items-center justify-center pt-20"
        style={{
          backgroundImage: `url(${contact})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute bg-black/30 inset-0"></div>
        <h2 className="text-5xl font-semibold text-white z-50">Contact us</h2>
      </section>
      <div className="py-20 px-10 max-[500px]:px-4 flex justify-center max-w-7xl max-[1105px]:flex-col mx-auto gap-8 max-[1105px]:items-center">
        <div className="w-[35%] max-[1105px]:w-full">
          <h2 className="text-4xl font-semibold mb-5 max-[1105px]:text-center">
            Connect With Us
          </h2>
          <div className="">
            <div className="flex gap-10 items-center mt-20">
              <IoLocationOutline className="text-8xl max-[1105px]:text-4xl max-[500px]:text-7xl" />
              <div className="">
                <div className="flex gap-3 mb-14">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/7/79/Flag_of_Nigeria.svg"
                    alt=""
                    className="w-8"
                  />
                  <p>
                    Plot 11 Kudirat Abiola Way, Alausa, Ikeja, Lagos, Nigeria.
                  </p>
                </div>
                <div className="flex gap-3">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg"
                    alt=""
                    className="w-8"
                  />
                  <p>
                    Gospel Pillars Church London, Capital House, 47 Rushey
                    Green, Lewisham, London, United Kingdom, SE6 4AS.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex gap-10 my-16 items-center">
              <MdOutlineMailOutline className="text-3xl" />
              <p className="">info@onesoundrevival.tv</p>
            </div>
          </div>
          <div className="flex gap-10 items-center">
            <LuPhone className="text-2xl" />
            <div className="">
              <p className="flex gap-3 mb-8">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/79/Flag_of_Nigeria.svg"
                  alt=""
                  className="w-8"
                />
                <a href="">+2347069980367</a>
                <a href="">+2348090111194</a>
              </p>
              <p className="flex gap-3">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg"
                  alt=""
                  className="w-8"
                />
                <a href="">+447518521921</a>
                <a href="">+447780068023</a>
              </p>
            </div>
          </div>
        </div>
        <form className="border-4 border-gray-200 py-10 px-4 w-[50%] max-[1105px]:w-full">
          <div className="flex gap-4">
            <div className="w-full">
              <label htmlFor="firstName" className="block font-medium mb-2">
                First name
              </label>
              <input
                type="text"
                className="px-2 py-2 border w-full rounded-md border-gray-100 font-medium outline-none"
              />
            </div>
            <div className="w-full">
              <label htmlFor="firstName" className="block font-medium mb-2">
                Last name
              </label>
              <input
                type="text"
                className="px-2 py-2 border w-full rounded-md border-gray-100 font-medium outline-none"
              />
            </div>
          </div>
          <div className="flex gap-4 my-5">
            <div className="w-full">
              <label htmlFor="firstName" className="block font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                className="px-2 py-2 border w-full rounded-md border-gray-100 font-medium outline-none"
              />
            </div>
            <div className="w-full">
              <label htmlFor="firstName" className="block font-medium mb-2">
                Phone Number
              </label>
              <input
                type="number"
                className="px-2 py-2 border w-full rounded-md border-gray-100 font-medium outline-none"
              />
            </div>
          </div>
          <label htmlFor="firstName" className="block font-medium mb-2">
            Country
          </label>
          <select
            name=""
            id=""
            className="w-full border p-2 border-gray-100 rounded-md outline-none"
          >
            <option value="nigeria">Nigeria</option>
            <option value="unitedKingdom">United Kingdom</option>
          </select>
          <label htmlFor="firstName" className="block font-medium mt-8 mb-2">
            Message
          </label>
          <textarea
            name=""
            className="w-full border border-gray-100 h-40 p-2 rounded-md outline-none"
            id=""
          ></textarea>
          <button className="bg-red-600 text-white mt-5 rounded-md w-full py-2">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Contact;
