function Values() {
  return (
    <>
      <div className="mb-[50px] mt-[50px]">
        <div className="mt-[20px] mb-[20px]">
          <h1
            className="font-bold md:text-5xl text-2xl text-center "
            data-aos="fade-right"
          >
            Values
          </h1>
        </div>

        {/* values div */}

        <div className="flex md:flex-row flex-col justify-around items-center md:items-start mt-[30px]">
          <div>
            <img src="images/value.webp" alt="value" data-aos="fade-right" />
          </div>

          <div className="md:w-[45%] w-[90%] flex flex-col gap-[40px]">
            <div
              className="flex flex-col gap-3 shadow-md shadow-gray-300 rounded-md p-[20px]"
              data-aos="fade-down"
            >
              <h1 className="text-orange-400 font-medium text-2xl">
                Compassion
              </h1>
              <p className="md:text-[20px] text-[15px]">
                caring & Commited to Uplift
              </p>
            </div>

            <div
              className="flex flex-col gap-3 shadow-md shadow-gray-300 rounded-md p-[20px]"
              data-aos="fade-down"
            >
              <h1 className="text-orange-400 font-medium text-2xl">
                Integrity
              </h1>
              <p className="md:text-[20px] text-[15px]">
                Trustworthy, Honest, responsible & Probity
              </p>
            </div>

            <div
              className="flex flex-col gap-3 shadow-md shadow-gray-300 rounded-md p-[20px]"
              data-aos="fade-down"
            >
              <h1 className="text-orange-400 font-medium text-2xl">
                Innovation
              </h1>
              <p className="md:text-[20px] text-[15px]">
                Creative Minds Adding Value & Ahead of the Curve
              </p>
            </div>

            <div
              className="flex flex-col gap-3 shadow-md shadow-gray-300 rounded-md p-[20px]"
              data-aos="fade-down"
            >
              <h1 className="text-orange-400 font-medium text-2xl">
                Transpareny
              </h1>
              <p className="md:text-[20px] text-[15px]">
                Open, Communication & Accountable
              </p>
            </div>

            <div
              className="flex flex-col gap-3 shadow-md shadow-gray-300 rounded-md p-[20px]"
              data-aos="fade-down"
            >
              <h1 className="text-orange-400 font-medium text-2xl">Growth</h1>
              <p className="md:text-[20px] text-[15px]">
                Purposeful & Progressive
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Values;
