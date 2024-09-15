import PropTypes from "prop-types";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";

const ProductCard = ({ product }) => {
  const {addToCart} = useContext(CartContext)
  const { id, category, rating, image, title, description, price } = product;

  return (
    <div className="bg-white rounded-lg shadow-md ring-1 ring-slate-900/5 group ">
      <div className="flexCenter m-1.4 py-10 rounded-lg shadow-sm relative ">
        <Link to={`/product/${id}`}>
          <img
            src={image}
            alt={title}
            className="object-contain aspect-square"
            height={122}
            width={122}
          />
        </Link>
        <span
          className={
            id === 1 || id === 2 || id === 3
              ? "flex text-xs font-bold bg-[#35c75f] text-white p-1 px-2 rounded-full absolute top-3 left-3"
              : "hidden"
          }
        >
          New
        </span>
        <span className="text-sm font-bold flexCenter gap-x-1 bg-[#e3f7fa] p-1 px-2 rounded-full absolute top-3 right-3">
          <FaStar className="text-yellow-400" />
          {rating.rate}
        </span>
      </div>
      <div className="p-4">
        <h5 className="text-sm font-semibold truncate">{title}</h5>
        <h4 className="medium-14">{category}</h4>
        <p className="mb-2 text-sm text-gray-600 line-clamp-2">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-green-600 md:text-sm">
            ${price.toFixed(2)}
          </span>
          <p className="text-xs">sales ({rating.count})</p>
        </div>
        <button onClick={() => addToCart(product,id)} className="px-2 py-2 mt-2 text-xs text-white transition-colors bg-red-500 rounded md:text-sm hover:bg-red-600">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductCard;
