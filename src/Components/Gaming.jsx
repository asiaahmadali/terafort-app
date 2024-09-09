import { Routes, Route } from "react-router-dom";
import Home from "./Home-Section/Home";
import About from "./About-Section/About";
import WhatWeDo from "./WhatWeDo-Section/What-WE-Do";
import Products from "./Products-Section/Products";
import Careers from "./Careers-Section/Careers";
import ContactUs from "./Contact-Us-Section/Contact-Us";
import JobDetail from "./Careers-Section/Job-Details";
import DoGaming from "./WhatWeDo-Section/Do-Gaming";
import DoApps from "./WhatWeDo-Section/DO-Apps";
import FounderMessage from "./About-Section/Founder-Message";
import Mission from "./About-Section/Mission";
import Values from "./About-Section/Values";
import TechPartners from "./About-Section/Tech-Partners";
import UpcomingProducts from "./Home-Section/Upcoming-Products";
import ProductIdeas from "./Home-Section/Product-Ideas";
import TechnologyStack from "./Home-Section/Technology-Stack";
import Awards from "./Home-Section/Awards";
import BigBenNumbers from "./Home-Section/BIGBen-Numbers";
import WhyJoin from "./Careers-Section/Why-Join";
import Benefits from "./Careers-Section/Benefits";
import RecruitmentProcess from "./Careers-Section/Recruitment-Process";
import LifeAt from "./Careers-Section/LifeAt";
import OpenPositions from "./Careers-Section/Open-Positions";

function Gaming() {
  return (
    <>
      <Routes>
        {/* home and its nested routes */}
        <Route path="/" element={<Home />}>
          <Route
            path="#expertise"
            element={<UpcomingProducts></UpcomingProducts>}
          ></Route>
          <Route
            path="#projects"
            element={<ProductIdeas></ProductIdeas>}
          ></Route>
          <Route
            path="#techStack"
            element={<TechnologyStack></TechnologyStack>}
          ></Route>
          <Route path="#awards" element={<Awards></Awards>}></Route>
          <Route
            path="#bigben-numbers"
            element={<BigBenNumbers></BigBenNumbers>}
          ></Route>
        </Route>

        {/* About and its nested routes */}
        <Route path="/about" element={<About />}>
          <Route
            path="#founder-message"
            element={<FounderMessage></FounderMessage>}
          ></Route>
          <Route path="#mission" element={<Mission></Mission>}></Route>
          <Route path="#values" element={<Values></Values>}></Route>
          <Route
            path="#tech-partners"
            element={<TechPartners></TechPartners>}
          ></Route>
        </Route>

        <Route path="/products" element={<Products />} />

        {/* what we do and its nested routes  */}
        <Route path="/what-we-do" element={<WhatWeDo />}>
          <Route path="#gaming" element={DoGaming}></Route>
          <Route path="#apps" element={DoApps}></Route>
        </Route>

        {/* carrers and its nested routes */}

        <Route path="/careers" element={<Careers />}>
          <Route path="#why-join" element={<WhyJoin></WhyJoin>}></Route>

          <Route path="#benefits" element={<Benefits></Benefits>}></Route>

          <Route
            path="#rec-process"
            element={<RecruitmentProcess></RecruitmentProcess>}
          ></Route>

          <Route path="#life" element={<LifeAt></LifeAt>}></Route>

          <Route
            path="#positions"
            element={<OpenPositions></OpenPositions>}
          ></Route>
        </Route>

        <Route path="/contact" element={<ContactUs />} />
        <Route path="/job/:jobId" element={<JobDetail />} />
      </Routes>

      {/* <About></About> */}
      {/* <WhatWeDo></WhatWeDo> */}
      {/* <Products></Products> */}
      {/* <ContactHeader></ContactHeader> */}
      {/* <Careers></Careers> */}
    </>
  );
}

export default Gaming;
