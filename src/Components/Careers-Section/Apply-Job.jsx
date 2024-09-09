function ApplyJob(Props) {
  return (
    <>
      <div className="flex flex-col  items-center gap-5 ">
        <h2 className="md:text-4xl md:font-semibold font-medium text-xl mt-8 ">
          Apply for {Props.title}
        </h2>
        <form className="mt-4">
          <div className="mb-4">
            <input
              type="text"
              name="name"
              className="border-[1px] outline-none border-gray-400 md:p-3 p-2 w-full rounded-[10px] text-[18px]"
              required
              placeholder="Name*"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="position"
              className="border-[1px] outline-none border-gray-400 md:p-3 p-2 w-full rounded-[10px] text-[18px]"
              required
              placeholder="Position*"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              className="border-[1px] border-gray-400 md:p-3 p-2 w-full outline-none rounded-[10px] text-[18px]"
              required
              placeholder="Email*"
            />
          </div>

          <div className="mb-4">
            <input
              type="number"
              name="phone"
              className="border-[1px] outline-none border-gray-400 md:p-3 p-2 w-full rounded-[10px] text-[18px]"
              required
              placeholder="Phone*"
            />
          </div>

          <div>
            <p className="text-gray-400 font-medium text-[16px]">
              Upload CV/Resume
            </p>
            <div className="mb-4">
              <input
                type="file"
                name="resume"
                className=" md:p-3 p-2 w-full text-[16px] mt-1 mb-1"
                required
                placeholder="Choose file"
              />
              <span className="text-gray-400 font-medium text-[16px]">
                Type Allowed.(pdf)
              </span>
            </div>
          </div>

          <button
            type="submit"
            className="bg-orange-500 w-full text-black p-2 md:p-3 rounded text-[18px] transform hover:scale-90 transition duration-300 ease-in-out font-medium"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default ApplyJob;
