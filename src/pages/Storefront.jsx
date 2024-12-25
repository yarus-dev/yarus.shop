import Logo from "@/components/brand/Logo";

function StorefrontPage() {
  return (
    <div className="flex items-center justify-center">
      <div>
        <h1 className="text-4xl font-bold mb-4  text-center">
          Інтернет-крамниця <Logo />
        </h1>
        <p className="text-lg ">Скоро відкриття! Завітайте пізніше.</p>
      </div>
    </div>
  );
}

export default StorefrontPage;
