import registerImage from "../assets/images/register.png";

function Register() {
  return (
    <main className="min-h-screen flex justify-center items-center">
      <div className="flex justify-center items-center mx-auto gap-8 my-20 max-w-4xl">
        <img src={registerImage} className="h-[40rem]" alt="" />
        <form className="">
          <h2 className="text-3xl font-bold">Sign Up</h2>
          <p className="mb-4">Lorem ipsum dolor sit amet adipiscing elit.</p>
          <label htmlFor="name" className="font-semibold">
            Name
          </label>
          <input
            type="text"
            className="py-2 px-4 w-full mt-2 mb-4 border rounded-md border-gray-300"
          />
          <label htmlFor="name" className="font-semibold">
            Email
          </label>
          <input
            type="text"
            className="py-2 px-4 w-full mt-2 mb-4 border rounded-md border-gray-300"
          />
          <label htmlFor="name" className="font-semibold">
            DOB
          </label>
          <input
            type="text"
            className="py-2 px-4 w-full mb-4 mt-2 border rounded-md border-gray-300"
          />
          <label htmlFor="name" className="font-semibold">
            Name
          </label>
          <select
            name="division"
            id="division"
            className="p-2 w-full mt-2 mb-4 border rounded-md border-gray-300"
          >
            <option value="ikeja-division">Ikeja division</option>
            <option value="abuja-division">Abuja division</option>
            <option value="ikoyi-division">Ikoyi division</option>
            <option value="new-division">New division</option>
          </select>
          <label htmlFor="name" className="font-semibold">
            Create Password
          </label>
          <input
            type="password"
            className="py-2 px-4 w-full mt-2 border rounded-md border-gray-300"
          />
          <button className="w-full py-2 text-white bg-black mt-5">
            Register
          </button>
        </form>
      </div>
    </main>
  );
}

export default Register;
