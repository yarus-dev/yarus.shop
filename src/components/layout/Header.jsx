import Container from "@/components/layout/Container";
import Logo from "@/components/brand/Logo";
import {cn} from "@/lib/utils";

 function Header({ className, children, ...props }) {
  return (
    <header className={cn("backdrop-blur transition-colors duration-500 lg:border-b lg:border-stone-900/10 bg-white supports-backdrop-blur:bg-white/95", className)} {...props}>
      <Container className="flex items-center justify-between py-4">
        <Logo />
      </Container>
    </header>
  );
}

export default Header