function AwardCard(Props) {
  return (
    <>
      <div className="relative flex flex-col items-center bg-white p-[35px] h-[420px] rounded-lg gap-5 w-[300px]">
        {/* Top-left orange triangle */}
        <div className="absolute top-0 left-0 w-0 h-0 border-t-[50px] border-t-orange-500 border-r-[50px] border-r-transparent"></div>

        {/* Card Content */}
        <img src={`${Props.imgCard}`} alt="" />
        <h1 className="font-bold text-center">{Props.headingC}</h1>
        <p className="text-center">{Props.pCard}</p>
      </div>
    </>
  );
}

export default AwardCard;
