function LeftProduct(Props) {
  return (
    <>
      <div className="flex md:flex-row flex-col-reverse md:pl-[70px] md:pr-[70px] gap-[30px] items-center">
        <div className="md:w-[48%] w-full flex justify-center">
          <img
            src={Props.lgimg}
            alt=""
            className="md:w-[780px] md:h-[500px] w-[300px] h-[300px]"
            data-aos="fade-right"
          />
        </div>

        <div
          className="flex flex-col gap-[15px] md:w-[50%] w-full items-center md:items-start"
          data-aos="fade-left"
        >
          <h1 className="md:text-5xl text-xl text-center md:text-start font-bold">
            {Props.heading}
          </h1>
          <p className="md:text-[20px] text-[15px] mt-[20px] text-center md:text-start">
            {Props.para}
          </p>
          <div className="flex gap-6 justify-center md:justify-start">
            <img src={Props.smimg1} alt="" className="w-[80px]" />
            {Props.smimg2 && (
              <img src={Props.smimg2} alt="" className="w-[80px]" />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default LeftProduct;
