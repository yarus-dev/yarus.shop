import { cn } from "@/lib/utils";
import Container from "@/components/layout/Container";
import Logo from "@/components/brand/Logo";

function Footer({ className, children, ...props }) {
  return (
    <footer className={cn`w-full backdrop-blur transition-colors duration-500 lg:border-t lg:border-stone-900/10 bg-white supports-backdrop-blur:bg-white/95py-4 ${className}`} {...props}>
      <Container>&copy; 2021 <Logo /></Container>
    </footer>
  );
}

export default Footer;
