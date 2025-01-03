import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Article from "@/pages/Article";
import Catalog from "@/pages/Catalog";
import Cart from "@/pages/customer/Cart";
import Checkout from "@/pages/customer/Checkout";
import NotFound from "@/pages/NotFound";
import Product from "@/pages/Product";
import Storefront from "@/pages/Storefront";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 flex flex-col sm:flex-row container mx-auto">
        <Routes>
          <Route index element={<Storefront />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="product" element={<Product />} />
          <Route path="article" element={<Article />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
