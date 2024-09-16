import { motion } from "framer-motion";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import ProductCard from "./ProductCard";

const Products = () => {
  const { products, search } = useContext(ShopContext);

  // Filter products based on search query and category
  const filterProducts = products.filter((item) => {
    const matchesCategory =
      item.category === "electronics" ||
      item.category === "men's clothing" ||
      item.category === "women's clothing";

    const matchesSearch =
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.description.toLowerCase().includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-6 bg-gray-100 max-padd-container">
      <div className="max-w-screen-sm px-4 mx-auto">
        <h2 className="mb-6 text-xl font-bold text-center text-gray-700">
          Our Products
        </h2>
        <hr className="h-[2px] bg-gradient-to-l from-transparent via-red-600 to-green-600 mb-12 rounded border-none" />
      </div>

      {/* If no products are found, show a message */}
      {filterProducts.length === 0 ? (
        <div className="text-center text-gray-500">
          <p>No products found for &quot;{search}&quot;. Please try another search or browse our categories.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-8 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {filterProducts.map((product) => (
            <motion.div
              key={product.id} // Ensure you're using a unique property
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Products;
