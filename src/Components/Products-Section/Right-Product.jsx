function RightProduct(Props) {
  return (
    <>
      <div className="flex md:flex-row flex-col md:pl-[70px] md:pr-[70px] md:gap-0 gap-[20px] items-center">
        <div
          className="flex flex-col gap-[20px] md:w-[50%] w-full items-center md:items-start"
          data-aos="fade-right"
        >
          <h1 className="md:text-5xl text-xl md:text-start text-center font-bold mt-[10px]">
            {Props.heading}
          </h1>
          <p className="md:text-[24px] text-[15px] mt-[20px] text-center md:text-start">
            {Props.para}
          </p>
          <div className="flex gap-6 justify-center md:justify-start">
            <img src={Props.smimg1} alt="" className="w-[80px]" />
            {Props.smimg2 && (
              <img src={Props.smimg2} alt="" className="w-[80px]" />
            )}
          </div>
        </div>
        <div className="md:w-[55%] w-full flex justify-center">
          <img
            src={Props.lgimg}
            alt=""
            className="md:w-[780px] md:h-[500px] w-[300px] h-[300px]"
            data-aos="fade-left"
          />
        </div>
      </div>
    </>
  );
}

export default RightProduct;
