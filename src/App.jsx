import Gaming from "./Components/Gaming";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 200,
      easing: "ease-in-out",
      once: true,
    });
  }, []);
  return (
    <>
      <Gaming></Gaming>
    </>
  );
}

export default App;
