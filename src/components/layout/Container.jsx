import { cn } from "@/utils/styles";

function Container({ className, children, ...props }) {
  return (
    <div className={cn("container mx-auto", className)} {...props}>
      {children}
    </div>
  );
}

export default Container;
