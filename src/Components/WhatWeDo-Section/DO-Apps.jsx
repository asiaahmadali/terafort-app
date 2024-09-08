function DoApps() {
  return (
    <>
      <div className="p-[10px] md:p-[100px] flex md:flex-row flex-col-reverse gap-[10px] md:items-start items-center">
        {/* img */}
        <div className="md:w-[50%] w-[90%]">
          <img
            src="images/do2.png"
            alt=""
            className="rounded-md w-[100%] md:w-[85%]"
            data-aos="fade-right"
          />
        </div>

        {/* app content */}
        <div
          className="flex flex-col gap-8 items-center md:items-start w-[75%]"
          data-aos="fade-left"
        >
          <h1 className="text-orange-400 md:text-5xl text-xl font-bold">
            Apps
          </h1>
          <p className="md:text-[26px] text-[16px]">
            The mobile app industry is a rapidly growing sector, from gaming to
            e-commerce, mobile apps have transformed the way we live, work, and
            play.
          </p>

          {/* App points */}
          <div className="flex flex-col">
            <div className="flex gap-[20px]">
              <div className="relative flex flex-col items-center">
                <div className="w-9 h-9 bg-gradient-to-r from-black to-gray-300 rounded-full flex items-center justify-center text-white text-xl font-bold">
                  1
                </div>
                <div className="w-1 bg-orange-400 h-16 mt-2"></div>
              </div>
              <div className="md:text-2xl text-[16px] font-medium mt-4">
                Developing Apps that make daily life easier & memorable
              </div>
            </div>

            <div className="flex gap-[20px]">
              <div className="relative flex flex-col items-center">
                <div className="w-9 h-9 bg-gradient-to-r from-black to-gray-300 rounded-full flex items-center justify-center text-white text-xl font-bold">
                  2
                </div>
                <div className="w-1 bg-orange-400 h-16 mt-2"></div>
              </div>
              <div className="md:text-2xl text-[16px] font-medium mt-4">
                Terafort stands among the top mobile app development companies,
                we develop intuitive mobile apps that are performance-oriented
                and a lifestyle toolkit. We convert innovative & unexplored
                ideas into helpful mobile apps!
              </div>
            </div>

            <div className="flex gap-[20px]">
              <div className="relative flex flex-col items-center">
                <div className="w-9 h-9 bg-gradient-to-r from-black to-gray-300 rounded-full flex items-center justify-center text-white text-xl font-bold">
                  3
                </div>
              </div>
              <div className="md:text-2xl text-[16px] font-medium mt-4">
                Covering platforms of Mobile
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DoApps;
