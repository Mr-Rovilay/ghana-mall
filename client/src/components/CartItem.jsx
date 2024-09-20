import { useContext } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const CartItem = ({ item }) => {
  const { id, title, quantity, price, image } = item;
  const { incrementQuantity, removeFromCart, decrementQuantity } = useContext(CartContext);

  return (
    <tr className="border-b border-gray-200">
      <td className="px-4 py-3">
        <Link to={`/product/${id}`}>
          <img
            src={image}
            alt={title}
            height={43}
            width={43}
            className="object-contain m-1 rounded-lg aspect-square ring-1"
          />
        </Link>
      </td>
      <td className="px-4 py-3 text-left line-clamp-4">
          <span className="font-medium text-gray-700">{title}</span>
      </td>
      <td className="px-4 py-3 text-center">
        <span className="flex items-center gap-2 px-2 text-gray-700 ring-1 ring-slate-900/5">
          <FaMinus onClick={() => decrementQuantity(id)} className="cursor-pointer" />
          {quantity}
          <FaPlus onClick={() => incrementQuantity(id)} className="cursor-pointer" />
        </span>
      </td>
      <td className="px-4 py-3 text-center">
        <span className="text-gray-700">${price.toFixed(2)}</span>
      </td>
      <td className="px-4 py-3 text-center">
        <span className="text-gray-700">${(quantity * price).toFixed(2)}</span>
      </td>
      <td className="px-4 py-3 text-center">
        {/* Close Icon for Removing Item */}
        <MdClose
          onClick={() => removeFromCart(id)}
          className="text-gray-700 cursor-pointer hover:text-red-600"
          size={20}
        />
      </td>
    </tr>
  );
};

export default CartItem;
