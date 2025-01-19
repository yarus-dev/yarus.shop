import { Logo } from "@/components/logo";
import { cn } from "@/lib/styles";

export function Footer({ className, ...props }) {
  return (
    <footer className={cn(" bg-neutral-100/50", className)}>
      <div
        className={cn(
          "relative container mx-auto px-4 flex justify-between py-4"
        )}
      >
        <Logo />
        <div>Footer</div>
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
