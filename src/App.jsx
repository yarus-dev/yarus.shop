import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Storefront from "@/pages/Storefront";
import NotFound from "@/pages/NotFound";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { cn }  from "@/lib/utils";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className={cn`flex-1 flex flex-col`}></div>
      <Router>
        <Routes>
          <Route path="/" element={<Storefront />} />
          <Route path="/" element={<Storefront />} />
          <Route path="/" element={<Storefront />} />
          <Route path="/" element={<Storefront />} />
          <Route path="/" element={<Storefront />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
