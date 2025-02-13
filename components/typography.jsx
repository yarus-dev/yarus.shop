import { cn } from "@/lib/styles";

export function Heading({ className, level=3, children, ...props }) {
    const Tag = `h${level}`;
    return (
        <Tag className={cn("font-bold", className)} {...props}>
        {children}
        </Tag>
    );
}

export function Text({ className, children, ...props }) {
    return (
        <p className={cn("text-base hyphens-auto mt-2 mb-4", className)} {...props}>
        {children}
        </p>
    );
}