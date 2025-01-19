const product = {
  id: "bambu-lab-a1-mini",
  name: "Bambu Lab A1 Mini",
  description:
    "Bambu Lab A1 Mini – компактний і потужний 3D-принтер, ідеальний для домашнього використання та професійних проєктів. Забезпечує високу точність друку і простоту у використанні.",
  category: "3D-принтери",
  brand: "Bambu Lab",
  price: 499,
  currency: "USD",
  availability: "in_stock",
  images: [
    "https://example.com/images/bambu-lab-a1-mini-1.jpg",
    "https://example.com/images/bambu-lab-a1-mini-2.jpg",
    "https://example.com/images/bambu-lab-a1-mini-3.jpg",
  ],
  features: {
    print_volume: "180 x 180 x 180 mm",
    layer_resolution: "50 - 300 microns",
    nozzle_diameter: "0.4 mm",
    filament_types: ["PLA", "ABS", "PETG", "TPU"],
    connectivity: ["Wi-Fi", "SD Card", "USB"],
    weight: "6.5 kg",
    dimensions: "360 x 360 x 380 mm",
  },
  included_items: [
    "Bambu Lab A1 Mini 3D-принтер",
    "Живлення",
    "Картридж PLA філаменту (500 г)",
    "Набір інструментів для обслуговування",
    "Інструкція користувача",
  ],
  rating: 4.8,
  reviews: 235,
  tags: ["3D-друк", "Компактний", "Домашній 3D-принтер", "Bambu Lab"],
  warranty: "12 місяців",
  shipping: {
    weight: "7 kg",
    dimensions: "400 x 400 x 450 mm",
    cost: 25,
  },
  related_products: ["bambu-lab-x1-carbon", "bambu-lab-p1p"],
};

export default async function ProductPage() {
  return (
    <div className="container mx-auto px-4">
      <nav className="flex text-sm">
        <ol className="flex items-center space-x-2">
          <li>
            <a href="/" className="text-gray-500 hover:text-gray-700">
              Каталог
            </a>
          </li>
          <li>
            <span className="text-gray-400 mx-2">/</span>
            <a href="/clothing" className="text-gray-500 hover:text-gray-700">
              {product.category}
            </a>
          </li>
          <li>
            <span className="text-gray-400 mx-2">/</span>
            <a href="/clothing" className="text-gray-500 hover:text-gray-700">
              {product.brand}
            </a>
          </li>
        </ol>
      </nav>
      <h1 className="text-2xl">{product.name}</h1>
    </div>
  );
}
