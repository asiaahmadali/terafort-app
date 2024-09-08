import ProductsHeader from "./Products-Header";
import AllProducts from "./All-Products";
import Footer from "../Home-Section/Footer";
import NavBar from "../Home-Section/NavBar";

function Products() {
  return (
    <>
      <NavBar></NavBar>
      <ProductsHeader></ProductsHeader>
      <AllProducts></AllProducts>
      <Footer></Footer>
    </>
  );
}

export default Products;
