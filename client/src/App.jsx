import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shops from "./pages/Shops";
import Contact from "./pages/Contact";
import About from "./pages/About";
import ProductsDetails from "./pages/ProductsDetails";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";

const App = () => {
  return (
    // overflow-hidden text-[#404040] px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]
    <div className="">
      <BrowserRouter>
        <Header />
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
