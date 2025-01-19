import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/styles";
import logoPic from "@/public/yarusarnia.svg";

export function Logo({ className, href = "/", ...props }) {
  return (
    <Link href={href} className={cn(className)} {...props}>
      <Image src={logoPic} alt="Yarus shop logo" fill priority />
    </Link>
  );
}
