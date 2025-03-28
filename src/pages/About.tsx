import { Link } from "react-router-dom";
import ohipImg1 from "../assets/images/ohip-img-1.jpg";
// import ohipImg2 from "../assets/images/ohip-img-2.png";
import ohipImg5 from "../assets/images/ohip-img-5.png";
import ohipImg6 from "../assets/images/ohip-img-6.png";
import ohipImg7 from "../assets/images/ohip-img-7.png";
import ohipImg8 from "../assets/images/ohip-img-8.png";

function About() {
  return (
    <>
      <section
        className="relative min-h-[50vh] flex items-center justify-center"
        style={{
          backgroundImage: `url(${ohipImg1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute bg-blue-900/30 inset-0"></div>
        <div className="z-10">
          <h2 className="text-white text-5xl max-[820px]:text-5xl font-semibold text-center mb-4">
            About
          </h2>
          {/* <p className="text-white max-w-3xl max-[820px]:max-w-xl text-[14px] text-center max-[490px]:px-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            quisquam corporis exercitationem repudiandae. Maiores facilis
            doloribus ipsa aliquid similique corrupti suscipit tempora
            perferendis ut consequuntur. Id blanditiis ut cupiditate quos?
          </p> */}
          {/* <Link
            to="/become-a-partner"
            className="bg-red-600 mt-10 block mx-auto w-52 text-center text-lg text-white px-4 py-3 rounded-sm hover:bg-red-700"
          >
            Become a Partner
          </Link> */}
        </div>
      </section>
      <section className="max-w-6xl mx-auto py-20 px-6">
        {/* <h2 className="text-center text-3xl uppercase font-semibold my-10">
          About Partnership
        </h2> */}
        <p className="text-lg text-pretty">
          Gospel Pillars International is a dynamic, non-denominational church
          movement founded by Dr. Isaiah Macwealth. With over a hundred branches
          spanning four continents, the ministry is dedicated to spreading the
          Gospel of Jesus Christ globally. ​
        </p>
        <h2 className="text-2xl font-semibold my-4">Mission and Vision</h2>
        <p className="text-lg text-pretty">
          The church's vision is to reveal Jehovah as the Almighty and Yeshua,
          His Son, as the only way to God and salvation. Their purpose is to
          disseminate the knowledge of God's glory worldwide, aiming to restore
          the fear of God and achieve the salvation of this generation. ​
        </p>
        <h2 className="text-2xl font-semibold my-4">Global Presence</h2>
        <p className="text-lg text-pretty">
          Gospel Pillars Church has established a significant presence in the
          United States, particularly in Dallas, Texas, where it invites
          individuals from diverse backgrounds to discover and experience God's
          ways. The church's global network reflects its commitment to reaching
          all nations with the message of Christ.
        </p>
        <h2 className="text-2xl font-semibold my-4">Leadership</h2>
        <p className="text-lg text-pretty">
          Dr. Isaiah Macwealth, also known as Isaiah Wealth, is the Senior
          Pastor of Gospel Pillars International Churches worldwide. He is a
          renowned author, philanthropist, and the founder of the OneSound
          Revival Fellowship, which encompasses a TV house, a Bible College, and
          a charity foundation. In November 2023, he inaugurated the ministry
          headquarters, the Ark of Light for All Nations, in Ikeja, Lagos. This
          mega church has become a gospel hotspot, hosting thousands of
          worshippers weekly and housing a Food and Emergency Bank that serves
          various communities with free food, clothing, and emergency supplies.
        </p>
        <h2 className="text-2xl font-semibold my-4">Community Engagement</h2>
        <p className="text-lg text-pretty">
          The church is actively involved in community outreach, offering
          programs and platforms such as "As and Bs for Jesus" (ABJ) and
          "YouGenius" to engage youths and students. These initiatives aim to
          rehabilitate young people and reform communities worldwide.
        </p>
        <p className="text-lg text-pretty">
          For more information or to get involved, visit their official website
          at{" "}
          <Link to={"gospelpillars.org"} className="text-blue-500">
            gospelpillars.org
          </Link>
          .
        </p>
      </section>
      {/* <section className="min-h-screen flex justify-center gap-16 items-center max-[860px]:mt-5 max-[860px]:flex-col-reverse">
        <div className="max-w-1/3 max-[860px]:max-w-full p-10">
          <h2 className="text-center text-3xl font-semibold mb-5">PURPOSE</h2>
          <p className="text-lg text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequuntur placeat harum, doloremque doloribus delectus suscipit
            ullam praesentium reiciendis mollitia consectetur quibusdam quae
            neque, sapiente explicabo! Possimus expedita officiis quis optio.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ab
            voluptates eligendi, in praesentium cumque eius quaerat quos. Fuga,
            iste?
          </p>
        </div>
        <img
          src={ohipImg2}
          alt="Packaging food stuff to give"
          className="h-[600px] object-cover max-[820px]:w-full px-10"
        />
      </section> */}
      <section className="flex justify-center items-center gap-10 p-20 flex-wrap">
        <img src={ohipImg5} alt="" className="w-[300px]" />
        <img src={ohipImg6} alt="" className="w-[300px]" />
        <img src={ohipImg7} alt="" className="w-[300px]" />
        <img src={ohipImg8} alt="" className="w-[300px]" />
      </section>
    </>
  );
}

export default About;
