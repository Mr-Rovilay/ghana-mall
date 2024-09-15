import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shops from "./pages/Shops";
import Contact from "./pages/Contact";
import About from "./pages/About";
import ProductsDetails from "./pages/ProductsDetails";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import LoginPopup from "./components/LoginPopup";
import { useState } from "react";
import Navbar from "./components/Navbar";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <div className="">
      <BrowserRouter>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <Navbar setShowLogin={setShowLogin}/>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shops" element={<Shops />} />
          <Route path="/product/:id" element={<ProductsDetails />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <SideBar />
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
