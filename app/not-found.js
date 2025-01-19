import Link from "next/link";
import { cn } from "@/lib/styles";

export const metadata = {
  title: "404 - cторінка не знайдена",
  description:
    "Ой! Ви потрапили не туди. Ця сторінка більше не існує або ніколи не існувала. Але не хвилюйтеся, ми допоможемо вам знайти шлях назад!",
};

export default function NotFound() {
  return (
    <div className={cn("size-full flex p-6 md:p-10")}>
      <div className={cn("m-auto container max-w-prose")}>
        <h2 className={cn("text-2xl font-bold mb-2")}>
          Йой! Сторінка не знайдена
        </h2>
        <p>
          Ймовірно, ця&nbsp;сторінка ніколи не&nbsp;існувала або стала
          непотрібною, тож ми&nbsp;її&nbsp;видалили.
        </p>
        <p>
          Таке трапляється, не&nbsp;засмучуйтеся.{" "}
          <Link href="/">На&nbsp;головній</Link> є&nbsp;інші сторінки,
          не&nbsp;гірші за&nbsp;цю.
        </p>
      </div>
    </div>
  );
}
