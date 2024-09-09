import CareersHeader from "./Careers-Header";
import WhyJoin from "./Why-Join";
import Benefits from "./Benefits";
import RecruitmentProcess from "./Recruitment-Process";
import LifeAt from "./LifeAt";
import OpenPositions from "./Open-Positions";
import Footer from "../Home-Section/Footer";
import NavBar from "../Home-Section/NavBar";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

function Careers() {
  const location = useLocation();
  const hash = location.hash;

  const whyjoinRef = useRef(null);
  const benefitsRef = useRef(null);
  const recprocessRef = useRef(null);
  const lifeRef = useRef(null);
  const positionsRef = useRef(null);

  useEffect(() => {
    const sectionRefs = {
      "#why-join": whyjoinRef,
      "#benefits": benefitsRef,
      "#rec-process": recprocessRef,
      "#life": lifeRef,
      "#positions": positionsRef,
    };

    if (sectionRefs[hash] && sectionRefs[hash].current) {
      sectionRefs[hash].current.scrollIntoView({ behavior: "smooth" });
    }
  }, [hash]);
  return (
    <>
      <NavBar></NavBar>
      <CareersHeader></CareersHeader>
      <section ref={whyjoinRef} id="why-join">
        <WhyJoin></WhyJoin>
      </section>

      <section ref={benefitsRef} id="benefits">
        <Benefits></Benefits>
      </section>

      <section ref={recprocessRef} id="rec-process">
        <RecruitmentProcess></RecruitmentProcess>
      </section>

      <section ref={lifeRef} id="life">
        <LifeAt></LifeAt>
      </section>

      <section ref={positionsRef} id="positions">
        <OpenPositions></OpenPositions>
      </section>

      <Footer></Footer>
    </>
  );
}

export default Careers;
