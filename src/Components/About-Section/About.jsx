import AboutHeader from "./About-Header";
import Mission from "./Mission";
import Values from "./Values";
import FounderMessage from "./Founder-Message";
import Environment from "./Environment";
import TechPartners from "./Tech-Partners";
import NavBar from "../Home-Section/NavBar";
import Footer from "../Home-Section/Footer";
import BigBenNumbers from "../Home-Section/BIGBen-Numbers";

function About() {
  return (
    <>
      <NavBar></NavBar>
      <AboutHeader></AboutHeader>
      <Mission></Mission>
      <Values></Values>
      <FounderMessage></FounderMessage>
      <Environment></Environment>
      <TechPartners></TechPartners>
      <BigBenNumbers></BigBenNumbers>
      <Footer></Footer>
    </>
  );
}

export default About;
