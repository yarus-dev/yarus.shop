import { ExpandIcon } from "lucide-react";
import {cn} from "@/lib/utils";

function Container ({ className, children, ...props }) {
  return (
    <div className={cn("container mx-auto", className)} {...props}>
      {children}
    </div>
  );
}

export default Container;