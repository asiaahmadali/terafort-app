import CareersHeader from "./Careers-Header";
import WhyJoin from "./Why-Join";
import Benefits from "./Benefits";
import RecruitmentProcess from "./Recruitment-Process";
import LifeAt from "./LifeAt";
import OpenPositions from "./Open-Positions";
import Footer from "../Home-Section/Footer";
import NavBar from "../Home-Section/NavBar";

function Careers() {
  return (
    <>
      <NavBar></NavBar>
      <CareersHeader></CareersHeader>
      <WhyJoin></WhyJoin>
      <Benefits></Benefits>
      <RecruitmentProcess></RecruitmentProcess>
      <LifeAt></LifeAt>
      <OpenPositions></OpenPositions>
      <Footer></Footer>
    </>
  );
}

export default Careers;
