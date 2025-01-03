import Logo from "@/components/brand/Logo";
import Container from "@/components/layout/Container";
import { cn } from "@/utils/styles";
import { NavLink } from "react-router-dom";
const pages = [
  { name: "Home", path: "/" },
  { name: "Catalog", path: "/catalog" },
  { name: "Product", path: "/product" },
  { name: "Cart", path: "/cart" },
  { name: "Checkout", path: "/checkout" },
  { name: "Article", path: "/article" },
  { name: "NotFound", path: "/NotFound" },
];

const Top = () => (
  <Container className="flex text-sm text-gray-500 border-b ">
    <ul className="flex space-x-4">
      {pages.map(({ name, path }) => (
        <li key={`${name}-${path}`} className="inline-block">
          <NavLink
            className={({ isActive }) =>
              cn(isActive ? "text-gray-800" : "", "block p-1")
            }
            to={path}
          >
            {name}
          </NavLink>
        </li>
      ))}
    </ul>
  </Container>
);

const Main = () => (
  <Container className="flex items-center justify-between py-4  sticky top-0 z-50 w-full">
    <Logo />
    <Search />
    <CartButton />
  </Container>
);

const CartButton = () => <span>Корзина</span>;

const Search = () => (
  <div className="flex lg:ml-6">
    <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
      <span className="sr-only">Search</span>
      {/* <MagnifyingGlassIcon aria-hidden="true" className="size-6" /> */}
    </a>
  </div>
);

function Header({ className, ...props }) {
  return (
    <header
      className={cn(
        "relative border-grid border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
        className,
      )}
      {...props}
    >
      <Top />
      <Main />
    </header>
  );
}

export default Header;
