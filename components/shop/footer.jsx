import { Logo } from "@/components/logo";
import { cn } from "@/lib/styles";
import Link from "next/link";

function FooterMenu({ title, links = [] }) {
  return (
    <div className={cn("block")}>
      {!!title && <h3>{title}</h3>}
      <ul className={cn("block")}>
        {links.map(({ title, slug }) => (
          <li key={slug} className={cn("block")}>
            <Link href={slug} className={cn("block")}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer({ className, ...props }) {
  return (
    <footer className={cn(" bg-neutral-100/50", className)}>
      <div
        className={cn(
          "grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 relative container mx-auto px-4 py-4"
        )}
      >
        <Logo />
        <FooterMenu links={[{ title: "Каталог", slug: "/catalog" }, { title: "Товар", slug: "/product" }, { title: "Брнеди", slug: "/brands" }]} />
        <FooterMenu links={[{ title: "О нас", slug: "/article" }]} />
      </div>
      <div
        className={cn(
          "relative container mx-auto px-4 py-2 text-sm text-center"
        )}
      >
        Copyright © 2025 <a href="https://www.yarus.shop">Yarus.Shop</a>.
        Зроблено з{" "}
        <span className="text-red-500" aria-label="любов’ю">
          ❤️
        </span>{" "}
        командою Yarus для вашого комфортного шопінгу.
      </div>
    </footer>
  );
}
