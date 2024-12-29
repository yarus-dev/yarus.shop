import Logo from "@/components/brand/Logo";
import Container from "@/components/layout/Container";
import ProductSection from "@/components/ProductSection";
function StorefrontPage() {
  return (
    <div className="flex-1  flex items-center justify-center">
      <Container className="max-w-prose text-center px-3 py-4">
        <h1 className="text-4xl font-bold mb-4">
          Інтернет-крамниця <Logo />
        </h1>
        <p className="text-lg ">Скоро відкриття! Завітайте пізніше.</p>
        <ProductSection />
      </Container>
    </div>
  );
}

export default StorefrontPage;
