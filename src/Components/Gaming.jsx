import { Routes, Route } from "react-router-dom";
import Home from "./Home-Section/Home";
import About from "./About-Section/About";
import WhatWeDo from "./WhatWeDo-Section/What-WE-Do";
import Products from "./Products-Section/Products";
import Careers from "./Careers-Section/Careers";
import ContactUs from "./Contact-Us-Section/Contact-Us";
function Gaming() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/what-we-do" element={<WhatWeDo />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<ContactUs />} />
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
