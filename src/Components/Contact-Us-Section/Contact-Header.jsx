import { useState } from "react";
import { FaMapMarker } from "react-icons/fa";
function ContactHeader() {
  const [selectedCity, setSelectedCity] = useState("austin");

  return (
    <>
      <div className="flex h-auto md:h-screen md:flex-row flex-col md:pt-[90px] pt-[20px]">
        {/* image div */}
        <div
          className="bg-gradient-to-r from-black to-gray-500  text-white p-[20px] md:p-[30px] "
          data-aos="fade-right"
        >
          {/* austin */}
          {selectedCity === "austin" && (
            <div className="flex flex-col gap-6 items-center">
              <div className="md:mt-[50px] mt-[20px] flex flex-col gap-6">
                <h1 className="md:text-3xl text-xl font-bold text-center">
                  AUSTIN
                </h1>
                <p className="md:text-[20px] text-[16px] text-center">
                  Terafort Limited, 701 Brazos Street, Ste. 720, Austin, Texas,
                  78701
                </p>
              </div>
              <img
                src="images/austin.png"
                alt="Austin"
                className="w-full max-w-[300px] md:max-w-none"
              />
            </div>
          )}

          {/* lahore */}
          {selectedCity === "lahore" && (
            <div className="flex flex-col gap-4 items-center">
              <div className="md:mt-[10px] mt-[20px] flex flex-col gap-6">
                <h1 className="md:text-3xl text-xl font-bold text-center">
                  Lahore
                </h1>
                <p className="md:text-[20px] text-[16px] text-center">
                  Commercial, DHA Phase 8, Lahore, 54792 0301 - 1166523
                </p>
                <div className="flex gap-3 text-blue-600 items-center justify-center text-[16px] md:text-xl">
                  <FaMapMarker className="text-xl"></FaMapMarker>
                  <a href="" className="border-b-2 border-blue-700">
                    View Location
                  </a>
                </div>
              </div>
              <img
                src="images/lahore.webp"
                alt="Lahore"
                className="w-full max-w-[300px] md:max-w-none"
              />
            </div>
          )}

          {/* Links */}
          <div className="text-center flex justify-around font-bold text-[18px] mt-[20px] md:mt-[30px]">
            <p
              onClick={() => setSelectedCity("lahore")}
              className={`cursor-pointer ${
                selectedCity === "lahore"
                  ? "underline font-extrabold"
                  : "text-white"
              }`}
            >
              Lahore
            </p>
            <p
              onClick={() => setSelectedCity("austin")}
              className={`cursor-pointer ${
                selectedCity === "austin"
                  ? "underline font-extrabold"
                  : "text-white"
              }`}
            >
              AUSTIN
            </p>
          </div>
        </div>

        {/* contact div */}
        <div
          className="flex flex-col items-center p-[10px] gap-[20px] md:gap-[30px] mt-[20px] md:mt-0"
          data-aos="fade-left"
        >
          <h1 className="md:text-3xl text-xl font-bold">Contact Us</h1>
          <p className="text-center md:text-[20px] text-[15px]">
            Have an idea? Let’s make it come true. Submit your query. Better
            today than tomorrow.
          </p>
          <input
            type="text"
            placeholder="Name"
            className="outline-none border-[2px] border-gray-300 p-2 md:p-3 rounded-md w-full max-w-[300px] md:max-w-[420px]"
          />
          <div className="flex md:flex-row flex-col gap-4 w-full justify-center items-center">
            <input
              type="email"
              placeholder="Email"
              className="outline-none border-[2px] border-gray-300 p-2 md:p-3 rounded-md w-full max-w-[300px] md:max-w-[200px]"
            />
            <input
              type="phone"
              placeholder="Phone No"
              className="outline-none border-[2px] border-gray-300 p-2 md:p-3 rounded-md w-full max-w-[300px] md:max-w-[200px]"
            />
          </div>
          <textarea
            rows={5}
            placeholder="Message"
            className="outline-none border-[2px] border-gray-300 p-2 md:p-3 rounded-md w-full max-w-[300px] md:max-w-[420px]"
          ></textarea>
          <button className="bg-orange-600 p-3 w-full max-w-[300px] md:max-w-[420px]">
            Submit
          </button>
        </div>
      </div>
    </>
  );
}

export default ContactHeader;
