import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Storefront from "@/pages/Storefront";
import Catalog from "@/pages/Catalog";
import Product from "@/pages/Product";
import Article from "@/pages/Article";
import Cart from "@/pages/customer/Cart";
import Checkout from "@/pages/customer/Checkout";
import NotFound from "@/pages/NotFound";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { cn } from "@/lib/utils";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 flex flex-col sm:flex-row container mx-auto">
        <Router>
          <Routes>
            <Route path="/" element={<Storefront />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/product" element={<Product />} />
            <Route path="/article" element={<Article />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </div>
  );
};

export default App;
