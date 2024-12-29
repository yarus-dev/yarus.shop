import Logo from "@/components/brand/Logo";
import Container from "@/components/layout/Container";
import { Input } from "@/components/ui/Input";
import { cn } from "@/lib/utils";
const pages = [
  { name: "Company", href: "#" },
  { name: "Stores", href: "#" },
];

function Header({ className, children, ...props }) {
  return (
    <header
      className={cn(
        "backdrop-blur transition-colors duration-500 lg:border-b lg:border-stone-900/10 bg-white supports-backdrop-blur:bg-white/95",
        className,
      )}
      {...props}
    >
      <Container className="text-sm">
        <ul>
          {pages.map((page) => (
            <li key={`${page.name}-${page.href}`} className="inline-block">
              <a href={page.href}>{page.name}</a>
            </li>
          ))}
        </ul>
      </Container>
      <Container className="flex items-center justify-between py-4">
        <Logo />
        <Input />
        <CartButton />
      </Container>
    </header>
  );
}

const CartButton = () => <span>Корзина</span>;

const Search = () => (
  <div className="flex lg:ml-6">
    <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
      <span className="sr-only">Search</span>
      {/* <MagnifyingGlassIcon aria-hidden="true" className="size-6" /> */}
    </a>
  </div>
);
export default Header;
