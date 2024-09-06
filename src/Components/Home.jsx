import NavBar from "./NavBar";
import Header from "./Header";
import UpcomingProducts from "./Upcoming-Products";
import ProductIdeas from "./Product-Ideas";

function Home() {
  return (
    <>
      <div className="relative h-screen w-full">
        {/* Background Image */}
        <div className="absolute inset-0 bg-[url('/images/game1.jpg')] bg-cover bg-center h-full w-full -z-10" />
        <NavBar />
        <Header />
      </div>
      <UpcomingProducts></UpcomingProducts>
      <ProductIdeas></ProductIdeas>
    </>
  );
}

export default Home;
