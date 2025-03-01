import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import g20 from "../assets/images/g20.jpg";
import g20Icon1 from "../assets/Icons/Vector.png";
import { Link } from "react-router-dom";
import VideoPlaceholder from "../components/placeholder/VideoPlaceholder";

function G20() {
  return (
    <>
      <Header />
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
            <h2 className="text-white text-6xl max-[820px]:text-5xl font-semibold text-center mb-4">
              Medium length hero heading goes here
            </h2>
            <p className="text-white max-w-2xl mx-auto max-[820px]:max-w-xl text-[14px] text-center max-[490px]:px-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
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
        <section className="flex min-h-[80vh] justify-center items-center max-w-5xl gap-16 mx-auto">
          <VideoPlaceholder />
          <div className="w-full max-w-md">
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
        <section className="flex justify-center items-center gap-10 min-h-[40vh] py-20">
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
        </section>
      </main>
      <Footer />
    </>
  );
}

export default G20;
