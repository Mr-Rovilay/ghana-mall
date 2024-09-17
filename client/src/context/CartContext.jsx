import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { ShopContext } from "./ShopContext";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  // Initialize cart from localStorage or fallback to empty array
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [itemQuantity, setItemQuantity] = useState(0);
  const [total, setTotal] = useState(0);
  const { setToken} = useContext(ShopContext);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // Calculate total price whenever cart changes
  useEffect(() => {
    const totalAmount = cart.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.price * currentItem.quantity;
    }, 0);
    setTotal(totalAmount);
  }, [cart]);

  // Calculate total quantity whenever cart changes
  useEffect(() => {
    const quantity = cart.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.quantity;
    }, 0);
    setItemQuantity(quantity);
  }, [cart]);

  const addToCart = (product, id) => {
    const newItem = { ...product, quantity: 1 };
    const cartItem = cart.find((item) => item.id === id);

    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: cartItem.quantity + 1 };
        }
        return item;
      });
      setCart(newCart);
      toast.success(`Increased ${product.title} quantity in cart`);
    } else {
      setCart([...cart, newItem]);
      toast.success(`Added ${product.title} to cart`);
    }
  };

  const removeFromCart = (id) => {
    setCart((prevItems) => prevItems.filter((item) => item.id !== id));
    const removedItem = cart.find((item) => item.id === id);
    toast.success(`${removedItem?.title} removed from cart!`);
  };

  const incrementQuantity = (id) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCart(updatedCart);
  };

  const decrementQuantity = (id) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCart(updatedCart);
  };

  // Load token from localStorage
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, [setToken]);

  const clearCart = () => {
    setCart([]);
  };

  const cartValue = {
    cart,
    total,
    itemQuantity,
    addToCart,
    removeFromCart,
    incrementQuantity,
    decrementQuantity,
    clearCart,
  };

  return (
    <CartContext.Provider value={cartValue}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
