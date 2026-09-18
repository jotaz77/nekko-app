import { Menu, X, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/Button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-5 pt-5">
        <nav className="nekko-border nekko-glow rounded-2xl bg-black/70 px-4 py-3 backdrop-blur-xl">
          <div className="flex items-center justify-between">
            <a
              href="#inicio"
              className="flex items-center gap-3"
              onClick={() => setIsOpen(false)}
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-black">
                <span className="text-lg font-black">
                  N
                </span>
              </div>

              <div>
                <p className="text-sm font-black tracking-[0.3em]">
                  NEKKO
                </p>

                <p className="text-[10px] uppercase tracking-[0.25em] text-neutral-500">
                  App
                </p>
              </div>
            </a>

            <div className="hidden items-center gap-7 md:flex">
              <a
                href="#produtos"
                className="text-sm text-neutral-400 transition hover:text-white"
              >
                Produtos
              </a>

              <a
                href="#beneficios"
                className="text-sm text-neutral-400 transition hover:text-white"
              >
                Benefícios
              </a>

              <a
                href="#planos"
                className="text-sm text-neutral-400 transition hover:text-white"
              >
                Planos
              </a>

              <a
                href="#faq"
                className="text-sm text-neutral-400 transition hover:text-white"
              >
                FAQ
              </a>
            </div>

            <div className="hidden items-center gap-3 md:flex">
              <Button variant="ghost">
                Entrar
              </Button>

              <Button>
                Começar agora
                <ArrowUpRight size={16} />
              </Button>
            </div>

            <button
              type="button"
              aria-label={
                isOpen
                  ? "Fechar menu"
                  : "Abrir menu"
              }
              className="rounded-xl p-2 text-neutral-300 hover:bg-white/10 md:hidden"
              onClick={() => setIsOpen((value) => !value)}
            >
              {isOpen ? (
                <X size={22} />
              ) : (
                <Menu size={22} />
              )}
            </button>
          </div>

          {isOpen && (
            <div className="mt-4 flex flex-col gap-2 border-t border-white/10 pt-4 md:hidden">
              <a
                href="#produtos"
                className="rounded-xl px-3 py-3 text-sm text-neutral-300 hover:bg-white/5"
                onClick={() => setIsOpen(false)}
              >
                Produtos
              </a>

              <a
                href="#beneficios"
                className="rounded-xl px-3 py-3 text-sm text-neutral-300 hover:bg-white/5"
                onClick={() => setIsOpen(false)}
              >
                Benefícios
              </a>

              <a
                href="#planos"
                className="rounded-xl px-3 py-3 text-sm text-neutral-300 hover:bg-white/5"
                onClick={() => setIsOpen(false)}
              >
                Planos
              </a>

              <a
                href="#faq"
                className="rounded-xl px-3 py-3 text-sm text-neutral-300 hover:bg-white/5"
                onClick={() => setIsOpen(false)}
              >
                FAQ
              </a>

              <Button className="mt-2 w-full">
                Começar agora
              </Button>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
