function BigBenNumbers() {
  return (
    <>
      <div className="flex flex-col justify-between items-center md:mt-[100px] mt-[20px] gap-3">
        <div className="font-medium md:text-4xl text-3xl">
          BIG<span className="text-orange-400">Ben</span> in Numbers
        </div>
        <h1 className="text-xl font-bold md:hidden mb-2">
          BIG<span className="text-orange-400">Ben</span>
        </h1>
      </div>

      <div className="grid md:grid-cols-4 grid-cols-2 md:p-[100px] p-[10px]">
        {/* First row: 6+ aligned to the center on small screens */}
        <div className="col-span-1 md:col-span-3 flex flex-col justify-end items-center border p-4 md:w-[200px]">
          <h1 className="font-bold md:text-3xl text-xl">6+</h1>
          <p className="text-center">
            Team working on versatile Projects & Technology
          </p>
        </div>

        <div className="col-span-1 justify-center md:text-4xl text-xl items-center p-4 md:w-[200px] hidden md:block">
          <h1>
            BIG
            <span className="text-orange-400 ">Ben</span>
          </h1>
        </div>

        {/* Second row: Four divs */}
        <div className="border p-4 bg-orange-500 text-white shadow-md shadow-gray-400">
          <h1 className="font-bold md:text-8xl text-2xl text-gray-200 opacity-50">
            10+
          </h1>
          <p>Published Projects</p>
        </div>
        <div
          className="border p-4 col-span-1 row-span-2  text-white"
          style={{ backgroundImage: "url('images/world.jpg')" }}
        >
          <h1 className="font-bold md:text-7xl text-2xl text-gray-200 opacity-50 mb-[20px]">
            500+
          </h1>
          <p className="font-medium md:text-2xl text-xl">
            Millions Download Globally
          </p>
        </div>

        <div className="border p-4">
          <h1 className="font-bold md:text-3xl text-xl">2021</h1>
          <p>Founded</p>
        </div>
        <div className="border p-4 bg-gradient-to-r from-black to-gray-400 text-white shadow-md shadow-gray-400">
          <h1 className="font-bold md:text-7xl text-xl text-gray-200 opacity-50">
            1.5+
          </h1>
          <p className="text-xl font-medium">
            Monthly Active Users of Our Product
          </p>
        </div>

        {/* Third row: Two remaining divs in separate rows */}
        <div className="border p-10 col-span-2 md:col-span-1">
          <h1 className="font-bold md:text-3xl text-xl">70+</h1>
          <p>Highly Experienced Professionals headcount</p>
        </div>
        <div className="border p-10 col-span-2 md:col-span-1">
          <h1 className="font-bold md:text-2xl text-xl">Corporate Presence</h1>
          <p>USA & Pakistan</p>
        </div>
      </div>
    </>
  );
}

export default BigBenNumbers;
