import { motion } from "framer-motion";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import ProductCard from "./ProductCard";

const Products = () => {
  const { products } = useContext(ShopContext);

  const filterProducts = products.filter((item) => {
    return (
      item.category === "electronics" ||
      item.category === "men's clothing" ||
      item.category === "women's clothing"
    );
  });

  return (
    <section className="py-6 bg-gray-100 max-padd-container">
      <div className="max-w-screen-sm px-4 mx-auto">
        <h2 className="mb-6 text-xl font-bold text-center text-gray-700">
          Our Products
        </h2>
        <hr className="h-[2px] bg-gradient-to-l from-transparent via-red-600 to-green-600 mb-12 rounded border-none" />
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 gap-8 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {filterProducts.map((product) => (
          <motion.div
            key={product.id} // Ensure you're using a unique property
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ProductCard product={product} key={product.id} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Products;
