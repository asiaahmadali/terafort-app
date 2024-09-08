function Mission() {
  return (
    <>
      <div>
        <div>
          <h1
            className="md:text-5xl text-2xl font-bold text-center m-[10px] mt-[20px] mb-[20px]"
            data-aos="fade-down"
          >
            Mission
          </h1>
        </div>

        {/* mission divs */}
        <div className="flex md:flex-row flex-col justify-around items-center mt-[20px]">
          <div className="flex flex-col ">
            <div
              className="flex gap-[20px]"
              data-aos="fade-down"
              data-aos-delay="1000"
            >
              <div className="relative flex flex-col items-center">
                <div className="w-9 h-9 bg-gradient-to-r from-black to-gray-300 rounded-full flex items-center justify-center text-white text-xl font-bold">
                  1
                </div>
                <div className="w-1 bg-orange-400 h-16 mt-2"></div>
              </div>
              <div className="text-orange-400 md:text-2xl text-xl font-medium mt-4 ">
                Intra & Enterpreneureship
              </div>
            </div>

            <div
              className="flex gap-[20px]"
              data-aos="fade-down"
              data-aos-delay="1000"
            >
              <div className="relative flex flex-col items-center">
                <div className="w-9 h-9 bg-gradient-to-r from-black to-gray-300 rounded-full flex items-center justify-center text-white text-xl font-bold">
                  2
                </div>
                <div className="w-1 bg-orange-400 h-16 mt-2"></div>
              </div>
              <div className="text-orange-400 md:text-2xl text-xl  font-medium mt-4 text-center">
                Fun To Play
              </div>
            </div>

            <div
              className="flex gap-[20px]"
              data-aos="fade-down"
              data-aos-delay="1000"
            >
              <div className="relative flex flex-col items-center">
                <div className="w-9 h-9 bg-gradient-to-r from-black to-gray-300 rounded-full flex items-center justify-center text-white text-xl font-bold">
                  3
                </div>
                <div className="w-1 bg-orange-400 h-16 mt-2"></div>
              </div>
              <div className="text-orange-400 md:text-2xl text-xl  font-medium mt-4 text-center">
                AI Powered Apps
              </div>
            </div>
          </div>
          <div>
            <img src="images/mission.webp" alt="mission" data-aos="fade-left" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Mission;
