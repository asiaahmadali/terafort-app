function LifeAt() {
  return (
    <>
      <div>
        <h1 className="text-center md:text-4xl text-[18px] font-bold">
          Life At BIG<span className="text-orange-500">Ben</span>
        </h1>
      </div>
      <div className="p-[30px] md:p-[100px] grid grid-cols-2 md:grid-cols-4">
        {/* div1 */}
        <div className="md:w-full w-auto md:h-[250px]">
          <img
            src="images/g1.avif"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        {/* div2 */}
        <div className="bg-orange-500 text-white p-4 md:text-2xl text-[16px] font-medium md:w-full w-auto md:h-[250px] flex items-center justify-center">
          Value based Culture
        </div>

        {/* div3 - span 2 with black layer */}
        <div className="relative col-span-2 text-white flex flex-col gap-4 p-4 bg-[url('images/g2.avif')] bg-cover bg-center h-[150px] md:h-[250px]">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <p className="md:text-xl text-[14px] font-medium relative z-10">
            <span className="inline-block w-[8px] h-[8px] bg-white rounded-full mr-2"></span>
            Training & Development Programs
          </p>
          <p className="md:text-xl text-[14px] font-medium relative z-10">
            <span className="inline-block w-[8px] h-[8px] bg-white rounded-full mr-2"></span>
            Internships Program
          </p>
        </div>

        {/* div4 */}
        <div className="bg-gradient-to-r from-black to-gray-500 text-white p-6 h-[150px] md:h-[250px] flex flex-col justify-center gap-2">
          <h1 className="md:text-2xl text-[13px] font-bold">
            Working with Latest Technology Stack
          </h1>
          <p className="md:text-[18px] text-[10px]">
            <span className="inline-block w-[8px] h-[8px] bg-white rounded-full mr-2"></span>
            Advance Engines, Softwares & Tools for Communication & Development
          </p>
          <p className="md:text-[18px] text-[10px] hidden md:block">
            <span className="inline-block w-[8px] h-[8px] bg-white rounded-full mr-2"></span>
            Cutting Edge Hardware Equipment
          </p>
        </div>

        {/* div5 */}
        <div className="md:w-full w-auto  md:h-[250px]">
          <img
            src="images/g3.avif"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        {/* div6 */}
        <div className="bg-white text-black md:p-4 p-2 h-[150px] md:h-[250px] flex flex-col justify-center mb-4 md:mb-0">
          <h1 className="md:text-2xl text-[18px] pt-3 font-medium md:mb-4">
            Fun & Play
          </h1>
          <p className="text-[14px] md:text-[20px] ">
            <span className="inline-block w-[8px] h-[8px] bg-black rounded-full mr-2"></span>
            Sports & Gaming Events
          </p>
          <p className="text-[14px] md:text-xl ">
            <span className="inline-block w-[8px] h-[8px] bg-black rounded-full mr-2"></span>
            Outdoor Activities & Events
          </p>
          <p className="text-[14px] md:text-xl ">
            <span className="inline-block w-[8px] h-[8px] bg-black rounded-full mr-2"></span>
            Team & Company Dining Events
          </p>
        </div>

        {/* div7 */}
        <div className="md:w-full w-auto md:h-[250px]">
          <img
            src="images/g4.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        {/* div8 - span 2 */}
        <div className="col-span-2 text-black p-2 md:p4 w-full h-[150px] md:h-[250px] flex flex-col gap-2 md:gap-4">
          <h1 className="font-medium md:text-xl text-[14px]">
            ★ Motivational Sessions
          </h1>
          <h1 className="font-medium mdD:text-xl text-[14px]">
            ★ Workplace Amenities
          </h1>
          <div className="flex md:gap-6 gap-2">
            <p className=" text-[14px] md:text-[18px]">
              <span className="inline-block w-[8px] h-[8px] bg-black rounded-full mr-2"></span>
              Gym in Office Building
            </p>
            <p className=" text-[14px] md:text-[18px]">
              <span className="inline-block w-[8px] h-[8px] bg-black rounded-full mr-2"></span>
              Gaming Area
            </p>
          </div>

          <div className="flex md:gap-6 gap-2">
            <p className=" text-[14px] md:text-[18px]">
              <span className="inline-block w-[8px] h-[8px] bg-black rounded-full mr-2"></span>
              Running Coffee & Tea all time
            </p>
            <p className="text-[14px] md:text-[18px]">
              <span className="inline-block w-[8px] h-[8px] bg-black rounded-full mr-2"></span>
              Indoor Sports Area
            </p>
          </div>
        </div>

        {/* div9 */}
        <div className="md:w-full w-auto md:h-[250px]">
          <img
            src="images/g5.avif"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        {/* div10 */}
        <div className="bg-orange-500 text-white p-4 h-[150px] md:h-[250px] flex flex-col justify-center">
          <h1 className="md:text-2xl text-[15px] font-medium mb-3">
            Celebrations
          </h1>
          <p className="text-[12px] md:text-[18px]">
            <span className="inline-block w-[8px] h-[8px] bg-white rounded-full mr-2"></span>
            Company & Employee Celebrations
          </p>
          <p className="text-[12px] md:text-[18px]">
            <span className="inline-block w-[8px] h-[8px] bg-white rounded-full mr-2"></span>
            National & International Events Celebrations
          </p>
        </div>

        {/* div11 */}
        <div className="md:w-full w-auto md:h-[250px]">
          <img
            src="images/g6.avif"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        {/* div12 */}
        <div className="bg-gradient-to-r from-gray-500 to-black text-white p-4 h-[150px] md:h-[250px] flex flex-col justify-center">
          <h1 className="md:text-2xl text-[11px] font-bold">
            Awards & Incentives
          </h1>
          <p className="text-[11px] md:text-[18px]">
            <span className="inline-block w-[8px] h-[8px] bg-white rounded-full mr-2"></span>
            Performance Awards
          </p>
          <p className="text-[11px] md:text-[18px]">
            <span className="inline-block w-[8px] h-[8px] bg-white rounded-full mr-2"></span>
            Team/Project Achievement Awards
          </p>
          <p className="text-[11px] md:text-[18px]">
            <span className="inline-block w-[8px] h-[8px] bg-white rounded-full mr-2"></span>
            Annual Increments & Bonuses
          </p>
        </div>

        {/* div13 - span 2 with black layer */}
        <div className="relative col-span-2 text-white p-4 bg-[url('images/workspace.avif')] bg-cover bg-center h-[150px] md:h-[250px]">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <h1 className="md:text-2xl text-[18px] mb-3 font-medium relative z-10">
            Exquisitely Designed Workplace
          </h1>
          <p className=" text-[14px] md:text-[18px] relative z-10">
            <span className="inline-block w-[8px] h-[8px] bg-white rounded-full mr-2"></span>
            Versatile Working & Seating Places with a blend of Productivity &
            Relaxation
          </p>
          <p className=" text-[14px] md:text-[18px] relative z-10">
            <span className="inline-block w-[8px] h-[8px] bg-white rounded-full mr-2"></span>
            Furnished with beautiful Furniture
          </p>
        </div>
      </div>
    </>
  );
}

export default LifeAt;
