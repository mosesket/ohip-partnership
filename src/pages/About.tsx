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
        className="relative min-h-screen max-[941px]:min-h-[80vh] flex items-center justify-center"
        style={{
          backgroundImage: `url(${ohipImg1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute bg-blue-900/30 inset-0"></div>
        <div className="z-10">
          <h2 className="text-white text-6xl max-[820px]:text-5xl font-semibold text-center mb-4">
            About OHIP Partnership
          </h2>
          <p className="text-white max-w-3xl max-[820px]:max-w-xl text-[14px] text-center max-[490px]:px-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            quisquam corporis exercitationem repudiandae. Maiores facilis
            doloribus ipsa aliquid similique corrupti suscipit tempora
            perferendis ut consequuntur. Id blanditiis ut cupiditate quos?
          </p>
          {/* <Link
            to="/become-a-partner"
            className="bg-red-600 mt-10 block mx-auto w-52 text-center text-lg text-white px-4 py-3 rounded-sm hover:bg-red-700"
          >
            Become a Partner
          </Link> */}
        </div>
      </section>
      <section>
        <h2 className="text-center text-3xl uppercase font-semibold my-10">
          About Partnership
        </h2>
        <p className="max-w-6xl mx-auto text-lg text-pretty max-[860px]:px-8">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
          aliquid eum, atque exercitationem, necessitatibus, quis suscipit iure
          saepe earum repudiandae quo. Doloremque, architecto? Repellat corporis
          accusamus vel iure sit debitis dicta facilis labore quae iste, enim,
          ratione qui recusandae incidunt. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Assumenda libero, blanditiis voluptate
          cupiditate nobis distinctio a dolorem laudantium magnam facere! Odio
          blanditiis, maxime alias laboriosam corporis odit officiis error
          placeat nulla mollitia, nemo facilis perspiciatis repellendus et ipsam
          soluta? Rem! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <p className="max-w-6xl mx-auto text-lg text-pretty max-[860px]:px-8">
          At tellus viverra sagittis feugiat elit potenti.. Odio enim auctor sed
          lacinia. Pharetra non ut malesuada facilisis sed dolor viverra
          consequat.. Ultricies aenean nisl leo duis morbi nisl risus.. Id
          penatibus scelerisque in id justo eleifend nec diam purus.. Etiam orci
          amet mi dui metus.. Pulvinar non sed viverra elementum magna egestas..
          Aliquam nisl molestie neque nullam consequat volutpat morbi
          ullamcorper.. Ultrices sed proin libero venenatis sit.Venenatis orci
          cursus nisl quam tellus lacus aliquet vulputate. At tellus viverra
          sagittis feugiat elit potenti.. Odio enim auctor sed lacinia. Pharetra
          non ut malesuada facilisis sed dolor viverra consequat.. Ultricies
          aenean nisl leo duis morbi nisl risus.. Id penatibus scelerisque in id
          justo eleifend nec diam purus.. Etiam orci amet mi dui metus..
          Pulvinar non sed viverra elementum magna egestas.. Aliquam nisl
          molestie neque nullam consequat volutpat morbi ullamcorper.. Ultrices
          sed proin libero venenatis sit.
        </p>
        <p className="max-w-6xl mx-auto text-lg text-pretty max-[860px]:px-8">
          Egestas nisl tellus eu arcu diam arcu velit aliquet.. Quam justo
          nullam vel tempor donec feugiat.. Adipiscing felis vel faucibus
          bibendum malesuada enim facilisi congue porttitor.. Suspendisse purus
          amet dui odio id.. Iaculis molestie quis facilisis libero. Ultricies
          vestibulum tincidunt pellentesque eu amet proin viverra penatibus
          euismod.. Et lorem tristique et sagittis cursus odio lectus cursus.
          Venenatis orci cursus nisl quam tellus lacus aliquet vulputate.
        </p>
        <p className="max-w-6xl mx-auto text-lg text-pretty max-[860px]:px-8">
          Egestas nisl tellus eu arcu diam arcu velit aliquet.. Quam justo
          nullam vel tempor donec feugiat.. Adipiscing felis vel faucibus
          bibendum malesuada enim facilisi congue porttitor.. Suspendisse purus
          amet dui odio id.. Iaculis molestie quis facilisis libero. Ultricies
          vestibulum tincidunt pellentesque eu amet proin viverra penatibus
          euismod.. Et lorem tristique et sagittis cursus odio lectus cursus.
        </p>
        <p className="max-w-6xl mx-auto text-lg text-pretty max-[860px]:px-8">
          At tellus viverra sagittis feugiat elit potenti.. Odio enim auctor sed
          lacinia. Pharetra non ut malesuada facilisis sed dolor viverra
          consequat.. Ultricies aenean nisl leo duis morbi nisl risus.. Id
          penatibus scelerisque in id justo eleifend nec diam purus.. Etiam orci
          amet mi dui metus.. Pulvinar non sed viverra elementum magna egestas..
          Aliquam nisl molestie neque nullam consequat volutpat morbi
          ullamcorper.. Ultrices sed proin libero venenatis sit.
        </p>
        <p className="max-w-6xl mx-auto text-lg text-pretty max-[860px]:px-8">
          Lorem ipsum dolor sit amet consectetur. Semper risus sit ipsum urna
          eget nulla viverra.. Faucibus ornare sit integer neque ipsum nunc diam
          fermentum.. Fermentum scelerisque a sed ipsum augue sagittis duis ac
          urna.. Quam odio nullam ornare enim integer tellus dui.. Nulla
          praesent enim imperdiet quam. Sapien convallis lectus egestas facilisi
          massa amet dui nunc ultrices.. Pellentesque nisi enim mauris nisi
          sollicitudin lobortis nulla.. Venenatis orci cursus nisl quam tellus
          lacus aliquet vulputate.
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
