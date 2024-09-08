import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Updating activeLink based on the current route
  const activeLink = location.pathname;

  return (
    <>
      <div className="fixed top-0 bg-black bg-opacity-70 text-white flex gap-[30px] w-full md:p-[30px] sm:p-[20px] justify-around md:h-[100px] h-[50px] text-center z-50">
        {/* logo */}
        <div>
          <h1 className="text-4xl">
            BIG
            <span className="text-orange-500 font-medium">Ben</span>
          </h1>
        </div>
        {/* nav links for larger screens */}
        <div className="hidden md:block">
          <ul className="flex gap-[70px] md:text-[20px] sm:text-[15px]">
            <li>
              <Link
                to="/"
                className={`hover:text-yellow-600 ${
                  activeLink === "/"
                    ? "text-orange-500 border-b-2 border-orange-500"
                    : ""
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`hover:text-yellow-600 ${
                  activeLink === "/about"
                    ? "text-orange-500 border-b-2 border-orange-500"
                    : ""
                }`}
              >
                About us
              </Link>
            </li>
            <li>
              <Link
                to="/what-we-do"
                className={`hover:text-yellow-600 ${
                  activeLink === "/what-we-do"
                    ? "text-orange-500 border-b-2 border-orange-500"
                    : ""
                }`}
              >
                What We Do
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className={`hover:text-yellow-600 ${
                  activeLink === "/products"
                    ? "text-orange-500 border-b-2 border-orange-500"
                    : ""
                }`}
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/careers"
                className={`hover:text-yellow-600 ${
                  activeLink === "/careers"
                    ? "text-orange-500 border-b-2 border-orange-500"
                    : ""
                }`}
              >
                Careers
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`hover:text-yellow-600 ${
                  activeLink === "/contact"
                    ? "text-orange-500 border-b-2 border-orange-500"
                    : ""
                }`}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        {/* hamburger icon for small screens */}
        <div className="md:hidden sm:block text-[20px] mt-[10px]">
          <FaBars onClick={toggleMenu} />
        </div>
      </div>

      {/* sliding menu for small screens */}
      <div
        className={`fixed top-0 right-0 h-full w-[70%] bg-gradient-to-b from-black via-gray-800 to-gray-900 text-white transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex justify-between items-center p-2">
          <h2 className="text-2xl font-semibold">Menu</h2>
          <FaTimes onClick={toggleMenu} className="text-2xl cursor-pointer" />
        </div>
        <div className="border-b border-white mb-4"></div>
        <ul className="flex flex-col gap-6 p-6 text-lg">
          <li>
            <Link
              to="/"
              className={`hover:text-yellow-600 ${
                activeLink === "/"
                  ? "text-orange-500 border-b-2 border-orange-500"
                  : ""
              }`}
              onClick={toggleMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={`hover:text-yellow-600 ${
                activeLink === "/about"
                  ? "text-orange-500 border-b-2 border-orange-500"
                  : ""
              }`}
              onClick={toggleMenu}
            >
              About us
            </Link>
          </li>
          <li>
            <Link
              to="/what-we-do"
              className={`hover:text-yellow-600 ${
                activeLink === "/what-we-do"
                  ? "text-orange-500 border-b-2 border-orange-500"
                  : ""
              }`}
              onClick={toggleMenu}
            >
              What We Do
            </Link>
          </li>
          <li>
            <Link
              to="/products"
              className={`hover:text-yellow-600 ${
                activeLink === "/products"
                  ? "text-orange-500 border-b-2 border-orange-500"
                  : ""
              }`}
              onClick={toggleMenu}
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              to="/careers"
              className={`hover:text-yellow-600 ${
                activeLink === "/careers"
                  ? "text-orange-500 border-b-2 border-orange-500"
                  : ""
              }`}
              onClick={toggleMenu}
            >
              Careers
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={`hover:text-yellow-600 ${
                activeLink === "/contact"
                  ? "text-orange-500 border-b-2 border-orange-500"
                  : ""
              }`}
              onClick={toggleMenu}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default NavBar;
