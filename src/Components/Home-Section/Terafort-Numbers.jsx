function TerafortNumbers() {
  return (
    <>
      <div className="flex flex-col justify-between items-center md:mt-[100px] mt-[20px] gap-3">
        <div className="font-medium md:text-4xl text-3xl">
          Terafort in Numbers
        </div>
        <img src="images/logo.svg" alt="logo" className="w-[100px]" />
      </div>

      <div className="grid md:grid-cols-4 grid-cols-2 md:p-[100px] p-[10px]">
        {/* First row: 6+ aligned to the center on small screens */}
        <div className="col-span-1 md:col-span-4 flex flex-col justify-end items-center border p-4 md:w-[200px]">
          <h1 className="font-bold md:text-3xl text-xl">6+</h1>
          <p className="text-center">
            Team working on versatile Projects & Technology
          </p>
        </div>

        {/* Second row: Four divs */}
        <div className="border p-4 bg-orange-500 text-white">
          <h1 className="font-bold md:text-8xl text-2xl text-gray-200 opacity-50">
            10+
          </h1>
          <p>Published Projects</p>
        </div>
        <div className="border p-4 col-span-1 row-span-2 bg-[url('images/world.jpg')] text-white">
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
        <div className="border p-4 bg-gray-400 text-white">
          <h1 className="font-bold md:text-7xl text-xl text-gray-200 opacity-50">
            1.5+
          </h1>
          <p className="text-xl font-medium">
            Monthly Active Users of Our Product
          </p>
        </div>

        {/* Third row: Two remaining divs in separate rows */}
        <div className="border p-4 col-span-2 md:col-span-1">
          <h1 className="font-bold md:text-3xl text-xl">70+</h1>
          <p>Highly Experienced Professionals headcount</p>
        </div>
        <div className="border p-4 col-span-2 md:col-span-1">
          <h1 className="font-bold md:text-2xl text-xl">Corporate Presence</h1>
          <p>USA & Pakistan</p>
        </div>
      </div>
    </>
  );
}

export default TerafortNumbers;
