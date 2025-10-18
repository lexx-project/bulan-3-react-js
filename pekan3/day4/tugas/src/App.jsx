import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import AboutLayout from "./pages/about/AboutLayout";
import CompanyProfile from "./pages/about/CompanyProfile";
import ProductLayout from "./pages/products/ProductLayout";
import ProductDetail from "./pages/products/ProductDetail";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutLayout />}>
          <Route path="company" element={<CompanyProfile />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<ProductLayout />}>
          <Route path=":productId" element={<ProductDetail />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
