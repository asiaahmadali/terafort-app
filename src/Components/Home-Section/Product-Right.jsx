function ProductRight(Props) {
  return (
    <>
      <div className="flex md:flex-row flex-col md:pl-[70px] md:pr-[70px] p-[10px] gap-[30px] items-center">
        <div className="flex flex-col gap-[10px] md:w-[60%] w-full items-center md:items-start">
          <img
            src={Props.smimg}
            alt=""
            className="w-[80px]"
            data-aos="fade-right"
          />
          <p
            className="text-orange-400 font-medium text-xl"
            data-aos="fade-right"
          >
            Mobile App
          </p>
          <h1
            className="text-2xl font-bold text-center md:text-left"
            data-aos="fade-right"
          >
            {Props.heading}
          </h1>
          <p
            className="md:text-[24px] text-[15px] mt-[20px] text-center md:text-left"
            data-aos="fade-right"
          >
            {Props.para}
          </p>
        </div>
        <div className="md:w-[40%] w-full flex justify-center">
          <img
            src={Props.lgimg}
            alt=""
            className="md:w-[700px] md:h-[700px] w-[300px] h-[300px]"
            data-aos="fade-down"
          />
        </div>
      </div>
    </>
  );
}

export default ProductRight;
