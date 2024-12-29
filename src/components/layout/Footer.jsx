import Container from '@/components/layout/Container';
import Logo from '@/components/brand/Logo';
import { cn } from '@/lib/utils';

// eslint-disable-next-line no-unused-vars
function Footer({ className, children, ...props }) {
  return (
    <footer
      className={cn(
        'backdrop-blur transition-colors duration-500 lg:border-t lg:border-stone-900/10 bg-white supports-backdrop-blur:bg-white/95',
        className
      )}
      {...props}
    >
      <Container className="flex items-center justify-between py-4">
        <Logo />
      </Container>
    </footer>
  );
}

export default Footer;
