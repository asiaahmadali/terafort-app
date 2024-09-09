import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
function Footer() {
  return (
    <>
      <div className="md:p-[70px] p-[10px] bg-pink-50 mt-[20px] border-t-[1px] border-gray-300">
        <div className="flex justify-between ">
          <div>
            <h1 className="text-orange-400 font-bold md:text-xl text-sm">
              Get in Touch
            </h1>
            <img
              src="images/footer.svg"
              alt=""
              className="md:w-[50px] w-[20px]"
            />
          </div>
          <h1 className="md:text-5xl text-xl font-medium" data-aos="fade-right">
            BIG
            <span className="text-orange-500 ">Ben</span>
          </h1>
        </div>

        {/* footer links */}
        <div className="md:flex md:justify-between grid grid-cols-2 gap-3 md:mt-[40px] mt-[10px]">
          <div>
            <h1 className="text-orange-400 font-bold md:text-xl text-[18px] md:mb-[15px] mb-[10px]">
              Coporate
            </h1>
            <ul className="flex flex-col gap-2 md:text-[17px] text-[15px]">
              <li>
                <Link to="/#expertise" className="hover:text-orange-400">
                  Areas Of Expertise
                </Link>
              </li>
              <li>
                <Link to="/#projects" className="hover:text-orange-400">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/#techStack" className="hover:text-orange-400">
                  Technologies We Work With
                </Link>
              </li>
              <li>
                <Link to="/#awards" className="hover:text-orange-400">
                  Awards & Recognition
                </Link>
              </li>
              <li>
                <Link to="/#bigben-numbers" className="hover:text-orange-400">
                  BigBen In Numbers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h1 className="text-orange-400 font-bold text-[18px] md:text-[18px] md:mb-[15px] mb-[10px]">
              About Us
            </h1>
            <ul className="flex flex-col gap-2 md:text-[17px] text-[15px]">
              <li>
                <Link
                  to="/about#founder-message"
                  className="hover:text-orange-400"
                >
                  Vision
                </Link>
              </li>
              <li>
                <Link to="/about#mission" className="hover:text-orange-400">
                  Mission
                </Link>
              </li>
              <li>
                <Link to="/about#values" className="hover:text-orange-400">
                  Values
                </Link>
              </li>
              <li>
                <Link
                  to="/about#tech-partners"
                  className="hover:text-orange-400"
                >
                  Technology Partners
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h1 className="text-orange-400 font-bold text-[18px] md:text-xl md:mb-[15px] mb-[10px]">
              What We Want
            </h1>
            <ul className="flex flex-col gap-2 md:text-[17px] text-[15px]">
              <li>
                <Link to="/what-we-do#gaming" className="hover:text-orange-400">
                  Gaming
                </Link>
              </li>
              <li>
                <Link to="/what-we-do#apps" className="hover:text-orange-400">
                  Apps
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h1 className="text-orange-400 font-bold text-[18px] md:text-xl md:mb-[15px] mb-[10px]">
              Careers
            </h1>
            <ul className="flex flex-col gap-2 md:text-[17px] text-[15px]">
              <li>
                <Link to="/careers#why-join" className="hover:text-orange-400">
                  Why Join Big<span className="text-orange-400">Ben</span>
                </Link>
              </li>
              <li>
                <Link to="/careers#benefits" className="hover:text-orange-400">
                  Employment Benefits
                </Link>
              </li>
              <li>
                <Link
                  to="/careers#rec-process"
                  className="hover:text-orange-500"
                >
                  Recruitment Process
                </Link>
              </li>
              <li>
                <Link to="/careers#life" className="hover:text-orange-400">
                  Life At BIG<span className="text-orange-500">Ben</span>
                </Link>
              </li>
              <li>
                <Link to="/careers#positions" className="hover:text-orange-400">
                  Open Positions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* get in touch */}
        <div className="border-t-[1px] border-b-[1px] border-gray-300 flex gap-[20px] items-center p-[10px] md:mt-[80px] mt-[10px]">
          <h1 className="text-orange-400 font-bold md:text-xl text-[18px] md:mb-[15px] mb-[10px] md:mr-[50px]">
            Get in Touch
          </h1>
          <ul className="flex md:gap-[30px] gap-[10px] md:text-[17px] text-[15px]">
            <li>
              <Link to="/" className="hover:text-orange-400">
                Offices
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-orange-400">
                Get in Touch
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-orange-400">
                Careers
              </Link>
            </li>
          </ul>
        </div>

        {/*Legal */}
        <div className="flex md:gap-[20px] gap-[10px] items-center p-[10px] ">
          <h1 className="text-orange-400 font-bold text-[18px] md:text-xl md:mb-[15px] mb-[10px] md:mr-[120px] mr-[60px]">
            Legal
          </h1>
          <ul className="flex md:gap-[30px] gap-[10px] md:text-[17px] text-[15px]">
            <li>
              <Link to="" className="hover:text-orange-400">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="" className="hover:text-orange-400">
                TimeStamp
              </Link>
            </li>
          </ul>
        </div>

        {/*copyright &  social media icons div */}
        <div className="md:mt-[100px] mt-[10px] flex flex-col md:flex-row justify-between ">
          {/* copyright */}
          <div>
            <p className="text-[12px] text-center md:text-start mb-[15px]">
              © 2023 Terafort All Rights Reserved.<br></br> Last updated on
              August 07, 2024
            </p>
          </div>

          {/* social media icons */}
          <div className="flex gap-5 items-center">
            <h1 className="text-sm md:text-xl text-orange-400 font-bold flex gap-[10px]">
              Follow us
            </h1>
            <div className="flex gap-3 md:text-[25px] text-[16px]">
              <Link className="border-[1px] text-white rounded-full bg-[#b38850] hover:text-orange-400 p-3 ">
                <FaFacebook></FaFacebook>
              </Link>
              <Link className="border-[1px] text-white rounded-full bg-[#b38850] hover:text-orange-400 p-3">
                <FaTwitter></FaTwitter>
              </Link>
              <Link className="border-[1px] text-white rounded-full bg-[#b38850] hover:text-orange-400 p-3">
                <FaInstagram></FaInstagram>
              </Link>
              <Link className="border-[1px] text-white rounded-full bg-[#b38850] hover:text-orange-400 p-3">
                <FaLinkedin></FaLinkedin>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
