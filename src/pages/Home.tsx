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

function Home() {
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
          <h2 className="text-white text-6xl min-[820px]:text-5xl font-semibold text-center mb-4">
            One Sound Revival TV
          </h2>
          <p className="text-white max-w-3xl min-[820px]:max-w-xl text-[14px] text-center">
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
      <section className="min-h-screen flex justify-center gap-16 items-center min-[820px]:flex-col-reverse">
        <img
          src={ohipImg2}
          alt="Packaging food stuff to give"
          className="h-[600px] object-cover min-[820px]:w-full px-10"
        />
        <div className="max-w-1/3 min-[820px]:max-w-full px-10">
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
      <section className="min-h-[70vh] flex justify-center items-center gap-10 px-20 min-[820px]:pb-28 flex-wrap">
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
      <section className="relative min-h-[30vh] text-white text-center flex justify-center items-center gap-10 px-20 bg-red-600">
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
          optio.
        </p>
      </section>
      <section className="min-h-[70vh] flex justify-center items-center gap-10 px-20">
        <img
          src={ohipImg4}
          alt="become a partner flyer"
          className="max-w-4xl"
        />
      </section>
      <Footer />
    </>
  );
}

export default Home;
