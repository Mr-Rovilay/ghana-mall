import { useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { ShopContext } from "../context/ShopContext";
import PriceComparison from "../components/PriceComparison";

const ProductsDetails = () => {
  const { id } = useParams(); // Access the id from useParams
  const { products } = useContext(ShopContext);
  const { addToCart } = useContext(CartContext);

  // Find the product with matching id
  const product = products.find((item) => item.id === parseInt(id));

  // Handle case when product is not yet loaded
  if (!product) {
    return <div className="max-padd-container">Loading...</div>; // You can replace this with a spinner or loader
  }

  const { title, price, description, image } = product;

  return (
    <section className="max-w-7xl">
      <div className="grid items-center justify-center md:flex">
        <div className="p-4">
          <img src={image} alt={title} width={255} height={255} className="object-contain w-full rounded-md md:w-60 ring-1 ring-slate-900/5" />
        </div>
        <div className="p-4 md:w-1/2">
          <h1 className="text-3xl font-bold text-gray-500">{title}</h1>
          <p className="my-2 text-gray-700">${price}</p>
          <p className="my-4 text-gray-500">{description}</p>
          <button 
            onClick={() => addToCart(product, product.id)} 
            className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600"
          >
            Add to Cart
          </button>
        </div>
      </div>
      <PriceComparison />
    </section>
  );
};

export default ProductsDetails;
