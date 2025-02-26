import { Link } from "react-router-dom";
import logo from "../../assets/logo/one-sound-logo.png";
import { CiMenuFries } from "react-icons/ci";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className="bg-white shadow-md p-4 px-8 flex justify-between items-center fixed w-full z-[1000]">
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
            <Link to="/resources" className="text-gray-700 hover:text-red-600">
              Resources
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

      {!isMenuOpen && (
        <CiMenuFries
          className="max-[860px]:block hidden text-3xl font-extrabold"
          onClick={toggleMenu}
        />
      )}
      {isMenuOpen && (
        <IoClose
          className="hidden max-[929px]:flex text-4xl"
          onClick={() => {
            toggleMenu();
            setIsMenuOpen(false);
          }}
        />
      )}
      {isMenuOpen && (
        <div
          className="absolute hidden max-[929px]:flex top-full left-0 w-full bg-white shadow-md"
          onClick={toggleMenu}
        >
          <ul className="p-4 text-black">
            <li className="py-2">
              <Link to="/">Home</Link>
            </li>
            <li className="py-2">
              <Link to="/programmes">Programmes</Link>
            </li>
            <li className="py-2">
              <Link to="/about">About</Link>
            </li>
            <li className="py-2">
              <Link to="/partnership">Partnership</Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
