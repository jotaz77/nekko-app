import {
  ArrowUpRight,
  CalendarDays,
  ClipboardList,
} from "lucide-react";

interface ProductCardProps {
  name: string;
  description: string;
  color: "green" | "pink";
  type: "os" | "beauty";
}

export function ProductCard({
  name,
  description,
  color,
  type,
}: ProductCardProps) {
  const isGreen = color === "green";

  return (
    <article
      className={[
        "group relative overflow-hidden rounded-[2rem]",
        "border p-6 transition-all duration-300",
        "hover:-translate-y-1",
        isGreen
          ? "border-emerald-400/20 bg-emerald-500/[0.06] hover:border-emerald-400/40"
          : "border-pink-400/20 bg-pink-500/[0.06] hover:border-pink-400/40",
      ].join(" ")}
    >
      <div
        className={[
          "absolute -right-20 -top-20 h-48 w-48 rounded-full blur-3xl",
          isGreen
            ? "bg-emerald-500/10"
            : "bg-pink-500/10",
        ].join(" ")}
      />

      <div className="relative">
        <div className="flex items-start justify-between">
          <div
            className={[
              "flex h-14 w-14 items-center justify-center rounded-2xl",
              isGreen
                ? "bg-emerald-400/15 text-emerald-300"
                : "bg-pink-400/15 text-pink-300",
            ].join(" ")}
          >
            {type === "os" ? (
              <ClipboardList size={27} />
            ) : (
              <CalendarDays size={27} />
            )}
          </div>

          <ArrowUpRight
            size={22}
            className="text-neutral-500 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white"
          />
        </div>

        <p className="mt-8 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">
          Produto NEKKO
        </p>

        <h3 className="mt-2 text-3xl font-black tracking-tight">
          {name}
        </h3>

        <p className="mt-4 max-w-md leading-7 text-neutral-400">
          {description}
        </p>

        <button
          type="button"
          className={[
            "mt-8 inline-flex items-center gap-2 text-sm font-semibold",
            isGreen
              ? "text-emerald-300"
              : "text-pink-300",
          ].join(" ")}
        >
          Conhecer produto
          <ArrowUpRight size={16} />
        </button>
      </div>
    </article>
  );
}
