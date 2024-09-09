import AboutHeader from "./About-Header";
import Mission from "./Mission";
import Values from "./Values";
import FounderMessage from "./Founder-Message";
import Environment from "./Environment";
import TechPartners from "./Tech-Partners";
import NavBar from "../Home-Section/NavBar";
import Footer from "../Home-Section/Footer";
import BigBenNumbers from "../Home-Section/BIGBen-Numbers";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

function About() {
  const location = useLocation();
  const hash = location.hash;

  const founderMessageRef = useRef(null);
  const valuesRef = useRef(null);
  const missionRef = useRef(null);
  const techPartnersRef = useRef(null);

  useEffect(() => {
    const sectionRefs = {
      "#founder-message": founderMessageRef,
      "#values": valuesRef,
      "#mission": missionRef,
      "#tech-partners": techPartnersRef,
    };

    if (sectionRefs[hash] && sectionRefs[hash].current) {
      sectionRefs[hash].current.scrollIntoView({ behavior: "smooth" });
    }
  }, [hash]);

  return (
    <>
      <NavBar></NavBar>
      <AboutHeader></AboutHeader>
      <section ref={missionRef} id="mission">
        <Mission />
      </section>
      <section ref={valuesRef} id="values">
        <Values />
      </section>
      <section ref={founderMessageRef} id="founder-message">
        <FounderMessage />
      </section>
      <Environment></Environment>
      <section ref={techPartnersRef} id="tech-partners">
        <TechPartners />
      </section>
      <BigBenNumbers></BigBenNumbers>
      <Footer></Footer>
    </>
  );
}

export default About;
