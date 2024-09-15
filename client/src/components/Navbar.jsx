import { Link, NavLink } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { FaCircleUser } from "react-icons/fa6";
import { GiShoppingBag } from "react-icons/gi";
import { FiPackage } from "react-icons/fi";
import { CiLogout } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { MdClose, MdMenu } from "react-icons/md";
import { useContext, useState } from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import { SidebarContext } from "../context/SidebarContextProvider";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemQuantity } = useContext(CartContext);

  return (
    <div className="relative py-5 border z-100 max-padd-container flexBetween border-b-red-200">
      <NavLink to={"/"} className="text-xl font-bold">
        <span className="text-red-600">GHANA</span>
        <span className="text-green-600">MALL</span>
      </NavLink>

      {/* Menu items */}
      <ul className="hidden gap-5 sm:flex ">
        <NavLink to={"/"} className={"flex flex-col items-center gap-1"}>
          <p className="text-gray-700">Home</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-red-500 hidden" />
        </NavLink>
        <NavLink to={"/about"} className={"flex flex-col items-center gap-1"}>
          <p className="text-gray-700">About</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-red-500 hidden" />
        </NavLink>
        <NavLink to={"/shops"} className={"flex flex-col items-center gap-1"}>
          <p className="text-gray-700">Shops</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-red-500 hidden" />
        </NavLink>
        <NavLink to={"/contact"} className={"flex flex-col items-center gap-1"}>
          <p className="text-gray-700">Contact</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-red-500 hidden" />
        </NavLink>
      </ul>

      {/* Search and User Menu */}
      <div className="flex items-center gap-6">
        <FiSearch className="w-5 text-2xl cursor-pointer" />

        {/* Cart Icon */}
        <div onClick={() => setIsOpen(!isOpen)} className="relative">
          <GiShoppingBag className="text-2xl cursor-pointer" />
          <span className="absolute text-sm bg-white text-red-500 -right-2.5 -top-2.5 flexCenter w-5 h-5 rounded-full shadow-md">
            {itemQuantity}
          </span>
        </div>

        {/* User Dropdown */}
        <div className="relative group ">
          <FaCircleUser className="w-5 text-2xl cursor-pointer" />
          <motion.div
            className="absolute right-0 z-20 hidden py-3 border border-red-200 rounded shadow-sm group-hover:block group-focus-within:block w-36 bg-slate-100"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col gap-2 px-5 py-3 text-gray-500 rounded cursor-pointer">
              <p className="flex gap-1 hover:text-black">
                <IoPersonOutline /> My Profile
              </p>
              <p className="flex gap-1 cursor-pointer hover:text-black">
                <FiPackage /> Orders
              </p>
              <p className="flex gap-1 cursor-pointer hover:text-black">
                <CiLogout /> Logout
              </p>
            </div>
          </motion.div>
        </div>

        {/* Mobile Menu Icon */}
        <MdMenu
          onClick={() => setVisible(true)}
          className="text-2xl cursor-pointer md:hidden"
        />
      </div>

      {/* Mobile Menu Overlay */}
      <motion.div
        className={`fixed top-0 right-0 bottom-0 z-40 bg-slate-100 transition-all ${
          visible ? "w-full" : "w-0"
        }`}
        initial={{ width: 0 }}
        animate={{ width: visible ? "100%" : "0" }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-col h-full text-gray-600">
          {/* Close Menu Button */}
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3 px-5"
          >
            <MdClose className="h-4 text-2xl rotate-180 bg-gray-100 rounded cursor-pointer" />
          </div>
          {/* Mobile Links */}
          <NavLink
            onClick={() => setVisible(false)}
            className={"py-2 p-6 border"}
            to={"/"}
          >
            Home
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className={"py-2 p-6 border"}
            to={"/about"}
          >
            About
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className={"py-2 p-6 border"}
            to={"/shops"}
          >
            Shops
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className={"py-2 p-6 border"}
            to={"/contact"}
          >
            Contact
          </NavLink>
        </div>
      </motion.div>
    </div>
  );
};

export default Navbar;
