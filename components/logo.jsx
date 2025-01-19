import { cn } from "@/lib/styles";
import logoPic from "@/public/yarusarnia.svg";
import Image from "next/image";
import Link from "next/link";

export function Logo({ className, href = "/", ...props }) {
  return (
    <Link
      href={href}
      className={cn("relative inline-block overflow-hidden", className)}
      {...props}
    >
      <Image
        src={logoPic}
        alt="Yarus shop logo"
        className="w-auto h-8"
        priority
      />
      <spam className={cn("sr-only")}>Yarusarnia home page</spam>
    </Link>
  );
}
