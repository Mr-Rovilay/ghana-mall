import { useEffect, createContext, useState } from "react";
import axios from "axios";  
export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [shopsData, setShopsData] = useState([]);
  const [shops, setShops] = useState(null); // Single shop state
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const url = "https://ghana-mall-server.onrender.com"; 
  // http://localhost:4000
  // https://ghana-mall-server.onrender.com
 
  const [token, setToken] = useState("");

  // Fetch all shops
  useEffect(() => {
    const fetchShops = async () => {
      try {
        const response = await axios.get(`${url}/api/shop`);
        setShopsData(response.data);
      } catch (error) {
        setError(error.message); // Set error state on catch
        console.error("Error fetching shops:", error.message); // Log the error
      } finally {
        setLoading(false);
      }
    };
    fetchShops(); // Call the fetchShops function
  }, [url]);

  // Fetch a single shop by ID
  const fetchSingleShop = async (shopId) => {
    try {
      setLoading(true);
      const response = await axios.get(`${url}/api/shop/${shopId}`);
      setShops(response.data);
    } catch (error) {
      setError(error.message); // Set error state on catch
      console.error("Error fetching shop:", error.message);
    } finally {
      setLoading(false);
    }
  };

  // Fetch products from a fake store API
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
    shopsData,
    setShopsData,
    fetchSingleShop,  // Expose function to fetch single shop
    shops              // Expose single shop data
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
