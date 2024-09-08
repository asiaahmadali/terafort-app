import NavBar from "./NavBar";
import Header from "./Header";
import UpcomingProducts from "./Upcoming-Products";
import ProductIdeas from "./Product-Ideas";
import TechnologyStack from "./Technology-Stack";
// import Awards from "./Awards";
import TerafortNumbers from "./Terafort-Numbers";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <div className="relative h-screen w-full">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-[url('/images/game1.jpg')] bg-cover bg-center h-full w-full -z-10"
          data-aos="fade-right"
        />
        <NavBar />
        <Header />
      </div>
      <UpcomingProducts></UpcomingProducts>
      <ProductIdeas></ProductIdeas>
      <TechnologyStack></TechnologyStack>
      {/* <Awards></Awards> */}
      <TerafortNumbers></TerafortNumbers>
      <Footer></Footer>
    </>
  );
}

export default Home;
