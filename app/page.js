import { cn } from "@/lib/styles";
import { Logo } from "@/components/logo";

export default function HomePage() {
  return (
    <div className={cn("flex justify-center items-center size-full")}>
      <div className={cn("p-6")}>
        <Logo />
      </div>
    </div>
  );
}
