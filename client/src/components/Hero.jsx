import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoLogoYoutube } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { CiShoppingCart } from "react-icons/ci";
import { Link } from "react-router-dom";

const images = [
  "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Marina_Mall%2C_Accra_Panorama.jpg/4922px-Mapcarta.jpg",
  "https://c8.alamy.com/comp/E6NNRP/shopping-mall-at-kotoka-international-airport-accra-ghana-africa-E6NNRP.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/d/d3/Accra_Mall_%28Interior%29.jpg",
]; // Replace with actual URLs of your background images

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000); // Change background every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative">
      {/* Background Images with Animation */}
      <AnimatePresence>
        <motion.div
          key={currentImage} // Ensure each image has a unique key
          className="absolute inset-0 bg-center bg-cover"
          style={{ backgroundImage: `url(${images[currentImage]})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute inset-0 bg-black opacity-70 brightness-50"></div>{" "}
          {/* Darker overlay */}
        </motion.div>
      </AnimatePresence>

      {/* Content Section */}
      <div className="relative z-10 max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-12">
        {/* Animated Heading */}
        <motion.h1
          className="mb-4 text-4xl italic font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Discover the Best Shops at Ghana Mall
        </motion.h1>

        {/* Animated Paragraph */}
        <motion.p
          className="mb-8 text-lg font-normal text-white lg:text-xl sm:px-16 xl:px-48"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          Ghana Mall is your go-to destination to compare prices, shop smart,
          and explore new deals. Shop smart, compare prices, and discover
          unbeatable deals from your favorite stores all in one place!
        </motion.p>

        {/* Animated Button */}
        <motion.div
          className="flex flex-col mb-8 lg:mb-8 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Link
            to="/shops"
            className="flex items-center justify-center px-2 py-2 text-base font-medium text-center text-white bg-red-500 rounded-lg"
          >
            <CiShoppingCart className="mr-2 text-2xl" />
            Shop Now
          </Link>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          className="px-4 mx-auto text-center lg:px-36"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <span className="font-bold text-white">Follow us on</span>
          <div className="flex items-center justify-center gap-3 mt-3 text-gray-300">
            <IoLogoYoutube className="text-2xl cursor-pointer" />
            <FaTwitter className="text-2xl cursor-pointer" />
            <RiInstagramFill className="text-2xl cursor-pointer" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
