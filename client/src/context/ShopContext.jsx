import { useEffect, createContext, useState } from "react";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const [search, setSearch] = useState("")
  const [showSearch, setShowSearch] = useState(false)
  const url ="http://localhost:4000" 
  const [token, setToken] = useState("");

  useEffect(() => {
    const fetchedProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchedProducts();
  }, []);

  const value = {
    products,
    loading,
    error,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    url, 
    token,
    setToken,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
