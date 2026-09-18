import type { ReactNode } from "react";
import { Navbar } from "../components/landing/Navbar";

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({
  children,
}: MainLayoutProps) {
  return (
    <div className="min-h-screen overflow-hidden bg-[#080808] text-white">
      <Navbar />

      <main>{children}</main>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 text-sm text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} NEKKO APP.
            Todos os direitos reservados.
          </p>

          <p>
            Tecnologia que acompanha seu negócio.
          </p>
        </div>
      </footer>
    </div>
  );
}
