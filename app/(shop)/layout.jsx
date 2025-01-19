import { cn } from "@/lib/styles";
import { Header } from "@/components/shop/header";
import { Footer } from "@/components/shop/footer";

export default function ShopLayout({ children }) {
  return (
    <div className={cn("flex flex-col size-full")}>
      <Header />
      <div className={cn("flex-1")}>{children}</div>
      <Footer />
    </div>
  );
}
