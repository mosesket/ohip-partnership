import { Link } from "react-router-dom";
import logo from "../../assets/logo/GGP_logo.png";
import { CiMenuFries } from "react-icons/ci";
import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoClose } from "react-icons/io5";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hiddenMenu, setHiddenMenu] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setHiddenMenu(false);
  };
  return (
    <header className="bg-white shadow-md p-4 px-8 flex justify-between items-center fixed w-full z-[1000] h-24">
      <img src={logo} alt="Ohip LOgo" className="w-25 -rotate-90" />
      <nav className="hidden min-[860px]:block">
        <ul className="flex gap-10 text-lg">
          <li>
            <Link to="/" className="text-gray-700 hover:text-red-600">
              Home
            </Link>
          </li>
          <li className="relative group">
            <button className="text-gray-700 hover:text-red-600 flex gap-2 items-center group">
              Partnerships{" "}
              <MdKeyboardArrowDown className="group-hover:rotate-180" />
            </button>
            {/* Dropdown Menu */}
            <ul className="absolute left-0 w-[10rem] overflow-hidden bg-white shadow-lg rounded-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-opacity duration-200">
              {/* <li>
                <Link
                  to="/why-become-a-partner"
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  Why Become a Partner
                </Link>
              </li> */}
              <li>
                <Link
                  to="/partnership/g20"
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  G20
                </Link>
              </li>
              <li>
                <Link
                  to="/partnership/ggp"
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  GPP
                </Link>
              </li>
              {/* <li>
                <Link
                  to="/how-to-join"
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  How to Join
                </Link>
              </li> */}
            </ul>
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
            <Link to="/contact" className="text-gray-700 hover:text-red-600">
              Contact
            </Link>
          </li>
          <li>
            <a
              href="https://partner.myketnology.com/"
              className="bg-red-600 text-white px-4 py-3 rounded-sm hover:bg-red-700"
            >
              Become a Partner
            </a>
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
        <div className="absolute hidden max-[929px]:flex top-full left-0 w-full bg-white shadow-md">
          <ul className="p-4 text-black">
            <li className="py-2" onClick={toggleMenu}>
              <Link to="/">Home</Link>
            </li>
            <li onClick={toggleMenu}>
              <Link
                to="/resources"
                className="text-gray-700 hover:text-red-600"
              >
                Resources
              </Link>
            </li>
            <li className="py-2" onClick={toggleMenu}>
              <Link to="/about">About</Link>
            </li>
            <li className="py-2" onClick={toggleMenu}>
              <Link to="/contact" className="text-gray-700 hover:text-red-600">
                Contact
              </Link>
            </li>
            <li className="relative group">
              <button
                className="text-gray-700 hover:text-red-600 flex gap-2 items-center group"
                onClick={() => setHiddenMenu(!hiddenMenu)}
              >
                Partnerships
                <MdKeyboardArrowDown className="group-hover:rotate-180" />
              </button>
              {/* Dropdown Menu */}
              <ul
                className={`w-[10rem] rounded-lg group-hover:opacity-100 transition-opacity duration-200`}
                onClick={toggleMenu}
              >
                {hiddenMenu && (
                  <>
                    {/* <li>
                      <Link
                        to="/why-become-a-partner"
                        className="block px-4 py-2 hover:bg-gray-200"
                      >
                        Why Become a Partner
                      </Link>
                    </li> */}
                    <li>
                      <Link
                        to="/partnership/g20"
                        className="block px-4 py-2 hover:bg-gray-200"
                      >
                        G20
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/partnership/ggp"
                        className="block px-4 py-2 hover:bg-gray-200"
                      >
                        GPP
                      </Link>
                    </li>
                    {/* <li>
                      <Link
                        to="/how-to-join"
                        className="block px-4 py-2 hover:bg-gray-200"
                      >
                        How to Join
                      </Link>
                    </li> */}
                  </>
                )}
              </ul>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
