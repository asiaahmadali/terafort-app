import AwardCard from "./Award-Card";

function Awards() {
  const headingC1 = "Game of the Year Award in Huawel Apps Competition 2021";
  const headingC2 = "5 Games with 50+Millions Downloads so far";
  const headingC3 = "Innovation Award In Google App Summit Singapore 2022";
  const headingC4 = "Game of the Year Award in P@SHA ICT Awards 2022";

  const pCard1 =
    "TeraFort became peopls's choice of the year through its groundbreaking game in the 'Huawel Apps Competition 2021'";
  const pCard2 =
    "Five of our Games have hit more than 50+ million downloads.A way to show our exponential growth";
  const pCard3 =
    "TeraFort has been recognized as the 'Innovators' for actively playing its part in revolutionizing the industry.";
  const pCard4 =
    "P@SHA entiled Terafort as Pakistan's first choice in game's publishing and development by awarding it the Game of the Year Award consistently for two years.";

  return (
    <>
      <div className="bg-gray-100 md:pt-[80px] pt-[20px]">
        <div>
          <h1 className="text-center text-4xl font-bold md:mb-[100px] mb-[20px]">
            Awards & Recognitions
          </h1>
        </div>

        <div className="flex gap-5 p-[70px]">
          <div className="relative top-[80px]">
            <AwardCard
              headingC={headingC1}
              pCard={pCard1}
              imgCard="images/unreal.webp"
            ></AwardCard>
          </div>

          <div>
            <AwardCard
              headingC={headingC2}
              pCard={pCard2}
              imgCard="images/unreal.webp"
            ></AwardCard>
          </div>

          <div className="relative top-[80px]">
            <AwardCard
              headingC={headingC3}
              pCard={pCard3}
              imgCard="images/unreal.webp"
            ></AwardCard>
          </div>

          <div>
            <AwardCard
              headingC={headingC4}
              pCard={pCard4}
              imgCard="images/unreal.webp"
            ></AwardCard>
          </div>
        </div>
      </div>
    </>
  );
}

export default Awards;
