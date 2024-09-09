import ProductsHeader from "./Products-Header";
import AllProducts from "./All-Products";
import Footer from "../Home-Section/Footer";
import NavBar from "../Home-Section/NavBar";
import BigBenNumbers from "../Home-Section/BIGBen-Numbers";

function Products() {
  return (
    <>
      <NavBar></NavBar>
      <ProductsHeader></ProductsHeader>
      <AllProducts></AllProducts>
      <BigBenNumbers></BigBenNumbers>
      <Footer></Footer>
    </>
  );
}

export default Products;
