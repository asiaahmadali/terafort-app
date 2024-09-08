function BenefitCard(Props) {
  return (
    <>
      <div
        className="bg-white p-[10px] flex flex-col items-center justify-center gap-[10px]  md:w-[280px] md:h-[200px] w-[150px] h-[170px] rounded-[20px] shadow-md shadow-gray-300"
        data-aos="fade-right"
      >
        <img src={Props.imgsrc} alt="" className="w-[50px] md:w-[70px]" />
        <h1 className="md:text-[18px] text-center text-[14px] font-medium">
          {Props.heading}
        </h1>
      </div>
    </>
  );
}

export default BenefitCard;
