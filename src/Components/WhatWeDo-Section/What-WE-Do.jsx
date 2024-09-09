import DoHeader from "./Do-Header";
import DoGaming from "./Do-Gaming";
import DoApps from "./DO-Apps";
import Footer from "../Home-Section/Footer";
import NavBar from "../Home-Section/NavBar";
import { useLocation } from "react-router-dom";
import { useRef, useEffect } from "react";

function WhatWeDo() {
  const location = useLocation();
  const hash = location.hash;

  const gamingRef = useRef(null);
  const appsRef = useRef(null);

  useEffect(() => {
    if (hash === "#gaming" && gamingRef.current) {
      gamingRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (hash === "#apps" && appsRef.current) {
      appsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [hash]);
  return (
    <>
      <NavBar></NavBar>
      <DoHeader></DoHeader>
      <section ref={gamingRef} id="gaming">
        <DoGaming />
      </section>
      <section ref={appsRef} id="apps">
        <DoApps />
      </section>
      <Footer></Footer>
    </>
  );
}

export default WhatWeDo;
