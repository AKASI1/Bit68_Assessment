import { useParams } from "react-router";
import ExploreProducts from "../Components/ExploreProducts";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import ProductInfo from "../Components/ProductInfo";
import useFetch from "../Hooks/useFetch";

/*__________________________________________________________________________________________________*/

const Product = () => {
  const { id } = useParams();
  const { data } = useFetch(
    `https://63189f2cf6b281877c71eab0.mockapi.io/products/${id}`
  );
  return (
    <>
      <Navbar />

      {data && <ProductInfo product={data} />}

      <ExploreProducts />

      <Footer />
    </>
  );
};

export default Product;

/*__________________________________________________________________________________________________*/
