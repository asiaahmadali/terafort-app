import { useEffect, useRef, useState } from "react";
import Swiper from "swiper";
import "swiper/css"; // Import Swiper styles
import NavBar from "./NavBar";
import Header from "./Header";
import UpcomingProducts from "./Upcoming-Products";
import ProductIdeas from "./Product-Ideas";
import TechnologyStack from "./Technology-Stack";
import Awards from "./Awards";
import BigBenNumbers from "./BIGBen-Numbers";
import Footer from "./Footer";

import { useLocation } from "react-router-dom";

import { FaPause, FaPlay } from "react-icons/fa";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

function Home() {
  const location = useLocation();
  const hash = location.hash;

  const expertiseRef = useRef(null);
  const projectsRef = useRef(null);
  const techstackRef = useRef(null);
  const awardsRef = useRef(null);
  const bigbennumbersRef = useRef(null);

  useEffect(() => {
    const sectionRefs = {
      "#expertise": expertiseRef,
      "#projects": projectsRef,
      "#techStack": techstackRef,
      "#awards": awardsRef,
      "#bigben-numbers": bigbennumbersRef,
    };

    if (sectionRefs[hash] && sectionRefs[hash].current) {
      sectionRefs[hash].current.scrollIntoView({ behavior: "smooth" });
    }
  }, [hash]);

  // swiper slider
  const swiperRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [isPlaying, setIsPlaying] = useState(true);

  // swiper useEffect

  useEffect(() => {
    const swiper = new Swiper(swiperRef.current, {
      loop: true,
      autoplay: {
        delay: 5000, // Change slide every 5 seconds
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: (index, className) => {
          return `<span class="${className}">${index + 1}</span>`;
        },
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
    setSwiperInstance(swiper);
  }, []);

  const handlePause = () => {
    if (swiperInstance) {
      swiperInstance.autoplay.stop();
      setIsPlaying(false);
    }
  };

  const handlePlay = () => {
    if (swiperInstance) {
      swiperInstance.autoplay.start();
      setIsPlaying(true);
    }
  };

  return (
    <>
      <div className="relative h-screen w-full">
        {/* Swiper Container */}
        <div
          className="swiper-container absolute inset-0 h-full w-full -z-10"
          ref={swiperRef}
        >
          <div className="swiper-wrapper">
            <div className="swiper-slide bg-[url('/images/game1.jpg')] bg-cover bg-center h-full w-full"></div>
          </div>
        </div>

        {/* Custom Controls */}
        <div className="custom-controls absolute md:bottom-8 md:left-4 flex items-center space-x-10 border-t-2 md:m-[60px] m-[5px] left-1 bottom-7 sm:space-x-2 ">
          <div className="flex items-center gap-3 text-white">
            <FaArrowLeft />
            <button
              className="swiper-button-prev"
              onClick={() => swiperInstance.slidePrev()}
            >
              Prev
            </button>
          </div>

          {/* Toggle Play/Pause */}
          <button
            className="play-button text-white"
            onClick={isPlaying ? handlePause : handlePlay}
          >
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>

          <div className="flex items-center gap-3 text-white">
            <button
              className="swiper-button-next"
              onClick={() => swiperInstance.slideNext()}
            >
              Next
            </button>
            <FaArrowRight />
          </div>

          <div className="slide-number absolute bottom-full left-1 pb-3 transform -translate-x-1/2 sm:text-xs">
            <span className="current-slide">1</span> /{" "}
            <span className="total-slides">1</span>
          </div>
        </div>

        <NavBar />
        <Header />
      </div>

      <section ref={expertiseRef} id="expertise">
        <UpcomingProducts />
      </section>

      <section ref={projectsRef} id="projects">
        <ProductIdeas />
      </section>

      <section ref={techstackRef} id="techStack">
        <TechnologyStack />
      </section>

      <section ref={awardsRef} id="awards">
        <Awards />
      </section>

      <section ref={bigbennumbersRef} id="bigben-numbers">
        <BigBenNumbers />
      </section>

      <Footer />
    </>
  );
}

export default Home;
