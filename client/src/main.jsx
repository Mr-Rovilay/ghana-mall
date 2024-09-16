import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ShopContextProvider from "./context/ShopContext.jsx";
import SidebarProvider from "./context/SidebarContextProvider.jsx";
import CartProvider from "./context/CartContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ShopContextProvider>
      <SidebarProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </SidebarProvider>
    </ShopContextProvider>
  </StrictMode>
);
