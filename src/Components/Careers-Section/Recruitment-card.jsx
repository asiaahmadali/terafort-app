function RecruitmentCard(Props) {
  return (
    <>
      <div className="bg-white p-[20px] flex flex-col items-center justify-center gap-[20px]   rounded-[20px] shadow-md shadow-gray-300">
        <h1 className="md:text-3xl text-center text-[18px] font-bold">
          {Props.heading}
        </h1>
        <p className="md:text-[17px] text-[15px]">{Props.para}</p>
      </div>
    </>
  );
}

export default RecruitmentCard;
