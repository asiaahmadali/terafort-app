// RecruitmentCard.js
function RecruitmentCard(Props) {
  return (
    <div className="relative bg-white p-[20px] flex flex-col items-center justify-center gap-[20px] rounded-[20px] shadow-md shadow-gray-300">
      {/* Numbering */}
      <div className="absolute -top-6 flex items-center gap-2">
        <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-r from-gray-700 via-gray-800 to-black text-orange-500 font-bold text-lg">
          {Props.number}
        </div>
        {/* Orange Line */}
        <div className="w-48 h-[2px] bg-orange-500"></div>
      </div>

      <h1 className="md:text-3xl text-center text-[18px] font-bold">
        {Props.heading}
      </h1>
      <p className="md:text-[17px] text-[15px]">{Props.para}</p>
    </div>
  );
}

export default RecruitmentCard;
