function FounderMessage() {
  return (
    <>
      <div>
        <h1
          className="md:text-4xl text-xl font-bold text-center mt-[10px] mb-[10px]"
          data-aos="fade-right"
        >
          Message From the founder
        </h1>
      </div>
      <div className="flex md:flex-row flex-col justify-around md:items-center p-[30px] gap-[20px] md:gap-[5px]">
        <div className="md:w-[40%] w-[100%] ">
          <img
            src="images/founder.webp"
            alt="founder"
            className="w-[100%] h-[90%] rounded-md"
            data-aos="fade-left"
          />
        </div>
        <div className="md:w-[45%] w-[100%]">
          <p
            className="md:text-xl text-[15px]"
            data-aos="fade-right"
            data-aos-delay="1000"
          >
            “BigBen believes in progress, prosperity and happiness of every
            single individual connected to it and we aspire to reach new
            heights.<br></br> <br></br>While being optimistic about the
            potential to create opportunities and substantially improve the
            quality of life for humanity, we are on a track that we must stride
            with deep responsibility, care and humility which all makes us more
            than a company.<br></br>
            <br></br> We make everything possible and stay true to our vision so
            our resolve is to build a society of positive, innovative,
            pragmatic, productive and radiant leaders, shaping our growth and
            paving the way for success and a long-standing legacy.<br></br>
            <br></br> In conclusion, I would heartily say that every single
            being associated with us and our vision is the cream of the crop.”
            <br></br>
            <br></br>
            <p className="ml-[0px] text-right" data-aos="fade-right">
              -Shafique Anwar
            </p>
          </p>
        </div>
      </div>
    </>
  );
}

export default FounderMessage;
