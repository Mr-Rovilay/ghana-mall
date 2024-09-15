import { useContext } from "react";
import { SidebarContext } from "../context/SidebarContextProvider";
import { IoClose } from "react-icons/io5"; // Close icon
import CartItem from "./CartItem";
import { CartContext } from "../context/CartContext";
import { FaTrashAlt } from "react-icons/fa";

const SideBar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearCart, total, itemQuantity,    removeFromCart } = useContext(CartContext);

  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      } w-full h-full fixed bg-white top-0 shadow-2xl sm:w-[55vw] md:max-w-[44vw] xl:max-w-[27vw] transition-all duration-300 z-10 px-4 lg:px-[35px]`}
    >
      <div className="flex justify-between w-full py-6 text-gray-700 border-b border-b-red-200">
        <div className="">Shopping Bag ({itemQuantity})</div>
        {/* Close button */}
        <button onClick={handleClose} className="text-2xl cursor-pointer">
          <IoClose />
        </button>
      </div>

      {/* Sidebar content */}
      <div className="overflow-x-auto overflow-y-auto h-[595px]">
        <table className="w-full text-sm text-left text-gray-700 border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2">Image</th>
              <th className="px-4 py-2">Product</th>
              <th className="px-4 py-2 text-center">Quantity</th>
              <th className="px-4 py-2 text-center">Price</th>
              <th className="px-4 py-2 text-center">Total</th>
              <th className="px-4 ">
                <button onClick={   removeFromCart} className="text-red-600">
                  <FaTrashAlt />
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {cart.length > 0 ? (
              cart.map((item) => <CartItem key={item.id} item={item} />)
            ) : (
              <tr>
                <td colSpan="6" className="px-4 py-4 text-center">
                  Your cart is empty
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Total and Checkout Section */}
      <div className="flex items-center justify-between ">
      <div className="flex gap-2 my-4">
        <span className="font-semibold">Total:</span>
        <span className="font-semibold">${total.toFixed(2)}</span>
      </div>
      <div className="text-2xl text-red-500 cursor-pointer" onClick={clearCart}>
      <FaTrashAlt />
      </div>

      </div>
      <div className="text-center w-full">
        <button className="px-4 py-2 text-white bg-green-500 rounded hover:bg-secondary w-full">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default SideBar;
