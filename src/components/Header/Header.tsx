import { Link } from "react-router-dom";
import logo from "../../assets/logo/one-sound-logo.png";
import { CiMenuFries } from "react-icons/ci";

function Header() {
  return (
    <header className="bg-white shadow-md p-4 px-8 flex justify-between items-center fixed w-full z-50">
      <img src={logo} alt="One Sound Revival TV logo" className="w-70" />
      <nav className="hidden min-[860px]:block">
        <ul className="flex gap-10 text-lg">
          <li>
            <Link to="/" className="text-gray-700 hover:text-red-600">
              Home
            </Link>
          </li>
          <li>
            <Link to="/programmes" className="text-gray-700 hover:text-red-600">
              Programmes
            </Link>
          </li>
          <li>
            <Link
              to="/partnership"
              className="text-gray-700 hover:text-red-600"
            >
              Partnership
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-gray-700 hover:text-red-600">
              About
            </Link>
          </li>
          <li>
            <Link
              to="/become-a-partner"
              className="bg-red-600 text-white px-4 py-3 rounded-sm hover:bg-red-700"
            >
              Become a Partner
            </Link>
          </li>
        </ul>
      </nav>
      <CiMenuFries className="max-[860px]:block hidden text-3xl font-extrabold" />
    </header>
  );
}

export default Header;
