import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
function NavBar() {
  return (
    <>
      <div className="fixed top-0 bg-black bg-opacity-70 text-white flex gap-[30px] w-full md:p-[30px] sm:p-[20px] justify-around md:h-[100px] h-[50px] text-center">
        {/* logo */}
        <div>
          <h1 className="text-4xl">
            Tera
            <span className="text-orange-500 font-medium">Fort</span>
          </h1>
        </div>
        {/* nav links */}
        <div className="hidden md:block">
          <ul className="flex gap-[70px] md:text-[20px] sm:text-[15px]">
            <li>
              <Link to="/home" className="hover:text-yellow-600">
                Home
              </Link>
            </li>
            <li>
              <Link to="/home" className="hover:text-yellow-600">
                About us
              </Link>
            </li>
            <li>
              <Link to="/home" className="hover:text-yellow-600">
                What We Do
              </Link>
            </li>
            <li>
              <Link to="/home" className="hover:text-yellow-600">
                Products
              </Link>
            </li>
            <li>
              <Link to="/home" className="hover:text-yellow-600">
                Careers
              </Link>
            </li>
            <li>
              <Link to="/home" className="hover:text-yellow-600">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:hidden sm:block text-[20px] mt-[10px]">
          <FaBars></FaBars>
        </div>
      </div>
    </>
  );
}

export default NavBar;
