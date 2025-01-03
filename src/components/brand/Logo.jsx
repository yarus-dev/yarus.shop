import { cn } from "@/utils/styles";
import { Waypoints } from "lucide-react";

// eslint-disable-next-line no-unused-vars
function Logo({ className, children, ...props }) {
  return (
    <a
      href="/"
      className={cn(
        "text-gray-800 text-2xl inline-flex items-center text-current",
        className,
      )}
      {...props}
    >
      <Waypoints strokeWidth="2.75" size="24" />
      <span className="ml-1 font-bold uppercase">ЯРУСарня</span>
    </a>
  );
}

export default Logo;
