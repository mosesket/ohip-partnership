function Footer() {
  return (
    <footer className="bg-black text-white p-10 px-20 max-[490px]:p-8">
      <div className="flex justify-between flex-wrap gap-10">
        <div className="">
          <div className="">
            <h2 className="text-2xl font-semibold mb-2">Contact</h2>
            <p>becomepartner@gmail.com</p>
          </div>
          <div className="">
            <h2 className="text-2xl font-semibold mb-2 mt-3">Address</h2>
            <p>
              Plot 11A-C Kudirat Abiola Way By Alausa Bus Stop Alausa Ikeja,
              Lagos 340001
            </p>
          </div>
          <div className="">
            <h2 className="text-2xl font-semibold mb-2 mt-3">Phone Number</h2>
            <p>
              <a href="tel:+2347069980367">0706 998 0367</a>
            </p>
          </div>
        </div>
        <div className="bg-red-500 p-4 h-28">
          <h2 className="font-semibold mb-3">Newsletter</h2>
          <div className="flex gap-4 h-10">
            <input
              type="email"
              className="py-2 h-full px-4 text-xl w-full bg-white"
            />
            <button className="border border-white text-white py-2 px-5 h-full bg-red-500">
              subscribe
            </button>
          </div>
        </div>
      </div>
      <hr className="my-5 mt-10" />
      <p className="text-center">© 2025. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
