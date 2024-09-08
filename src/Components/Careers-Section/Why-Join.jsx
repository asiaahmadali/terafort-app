function WhyJoin() {
  return (
    <>
      <div className="p-[10px] md:p-[70px] flex md:flex-row flex-col gap-[30px] md:items-start items-center">
        <div className="flex flex-col gap-8 items-center md:items-start w-full md:w-[60%]">
          <h1
            className="md:text-5xl text-2xl text-center md:text-left font-bold"
            data-aos="fade-right"
          >
            Why join Terafort?
          </h1>
          <p
            className="md:text-[26px] text-[18px] text-center md:text-left font-medium text-orange-400 md:font-bold"
            data-aos="fade-right"
          >
            Entrepreneurs, Intrapreneurs, Tech Lovers & Freethinkers… you’ve
            come to the Right Place!
          </p>

          {/* why join it */}
          <p
            className="md:text-xl text-[15px] text-center md:text-left font-normal md:font-medium mt-4"
            data-aos="fade-right"
          >
            We are building a culture where incredibly talented individuals are
            polished with highly promising skills & empowered with a vision of
            becoming future leaders in the IT industry. We envision to be the
            forerunners in contribution to our country’s economic & GDP growth
            by paving a path to foreign direct investment. In order to foster
            that greatness, we consider ourselves devoted and in a state of
            battle with the unemployment crisis of passionate and primed
            youngsters. We have a mission of “Developing globally sought &
            choice of everyone products through devotion and innovation in an
            enabling organizational.
          </p>

          {/* image */}
        </div>
        <div className="md:w-[30%] w-full">
          <img
            src="images/join.webp"
            alt=""
            className="rounded-md"
            data-aos="fade-left"
          />
        </div>
      </div>
    </>
  );
}

export default WhyJoin;
