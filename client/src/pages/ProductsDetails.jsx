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
    <section>
      <div className="flex">
        <div className="w-1/2 p-4">
          <img src={image} alt={title} width={255} height={255} className="object-contain ring-1 rounded-md ring-slate-900/5" />
        </div>
        <div className="w-1/2 p-4">
          <h1 className="text-3xl font-bold text-gray-700">{title}</h1>
          <p className="text-gray-700 my-2">${price}</p>
          <p className="text-gray-500 my-4">{description}</p>
          <button 
            onClick={() => addToCart(product, product.id)} 
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Add to Cart
          </button>
        </div>
      </div>
      <PriceComparison  />
    </section>
  );
};

export default ProductsDetails;
