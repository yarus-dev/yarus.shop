import { Logo } from "@/components/logo";
import { cn } from "@/lib/styles";
import Link from "next/link";

const navigation = [
  { name: "Каталог", href: "/catalog" },
  { name: "Товар", href: "/product" },
];

export function Header({ className, ...props }) {
  return (
    <header className={cn("sticky top-0 z-20  backdrop-blur-md", className)}>
      <div
        className={cn(
          "container mx-auto flex justify-between items-center py-4 px-4 gap-4"
        )}
      >
        <Logo className={cn("shrink-0")} />
        <ul className="flex gap-2">
          {navigation.map(({ name, href }) => (
            <li key={`${name}-${href}`} className={cn("")}>
              <Link href={href} className={cn("")}>
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
