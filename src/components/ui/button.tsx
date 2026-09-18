import type { ButtonHTMLAttributes } from "react";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "ghost";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-white text-black hover:bg-neutral-200",

  secondary:
    "border border-white/15 bg-white/5 text-white hover:bg-white/10",

  ghost:
    "text-neutral-300 hover:bg-white/5 hover:text-white",
};

export function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={[
        "inline-flex items-center justify-center gap-2",
        "rounded-full px-5 py-3",
        "text-sm font-semibold",
        "transition-all duration-200",
        "focus:outline-none focus:ring-2 focus:ring-white/40",
        "disabled:pointer-events-none disabled:opacity-50",
        variants[variant],
        className,
      ].join(" ")}
      {...props}
    >
      {children}
    </button>
  );
}
