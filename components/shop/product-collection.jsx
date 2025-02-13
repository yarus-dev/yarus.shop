import { cn } from "@/lib/styles";
export function ProductListCard({
    img,
    name,
    price,
}) {
    return (
        <div>
        <img src={img} alt={img} className="min-w-[280px] w-full" />
        <div>{name}</div>
        <div>{price}</div>
        </div>
    )
}

function ProductCollection({ children }) {
    return (
        <ul className={cn('')}>{children}</ul>
    )
}

ProductCollection.Item = function ProductCollectionItem({ children }) {
    return (
        <li className={cn('')}>{children}</li>
    )
}