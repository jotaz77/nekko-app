import type { ReactNode } from "react";

import {
  ArrowRight,
  BarChart3,
  CalendarDays,
  Check,
  ClipboardList,
  Package,
  Scissors,
  ShoppingCart,
  Sparkles,
  Store,
  Users,
} from "lucide-react";

import { Button } from "../ui/button";

type ProductCardProps = {
  name: string;
  description: string;
  features: string[];
  icon: ReactNode;
  color: "green" | "pink";
  href: string;
};

function ProductCard({
  name,
  description,
  features,
  icon,
  color,
  href,
}: ProductCardProps) {
  const isGreen = color === "green";

  return (
    <article
      className={`group relative overflow-hidden rounded-3xl border p-6 transition duration-500 hover:-translate-y-2 md:p-8 ${
        isGreen
          ? "border-emerald-500/20 bg-gradient-to-br from-emerald-500/[0.08] via-zinc-950 to-zinc-950 hover:border-emerald-400/50"
          : "border-pink-400/20 bg-gradient-to-br from-pink-400/[0.08] via-zinc-950 to-zinc-950 hover:border-pink-300/50"
      }`}
    >
      <div
        className={`absolute -right-24 -top-24 h-56 w-56 rounded-full blur-3xl transition duration-500 group-hover:scale-125 ${
          isGreen ? "bg-emerald-500/10" : "bg-pink-400/10"
        }`}
      />

      <div className="relative z-10">
        <div className="mb-8 flex items-center justify-between">
          <div
            className={`flex h-14 w-14 items-center justify-center rounded-2xl border ${
              isGreen
                ? "border-emerald-400/20 bg-emerald-400/10 text-emerald-300"
                : "border-pink-300/20 bg-pink-300/10 text-pink-200"
            }`}
          >
            {icon}
          </div>

          <span
            className={`rounded-full border px-3 py-1 text-xs font-medium ${
              isGreen
                ? "border-emerald-400/20 bg-emerald-400/10 text-emerald-300"
                : "border-pink-300/20 bg-pink-300/10 text-pink-200"
            }`}
          >
            Sistema NEKKO
          </span>
        </div>

        <h3 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
          {name}
        </h3>

        <p className="mt-4 min-h-[72px] text-sm leading-7 text-zinc-400 md:text-base">
          {description}
        </p>

        <div className="my-7 h-px bg-white/10" />

        <ul className="space-y-4">
          {features.map((feature) => (
            <li
              key={feature}
              className="flex items-center gap-3 text-sm text-zinc-300"
            >
              <span
                className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                  isGreen
                    ? "bg-emerald-400/10 text-emerald-300"
                    : "bg-pink-300/10 text-pink-200"
                }`}
              >
                <Check size={13} strokeWidth={2.5} />
              </span>

              {feature}
            </li>
          ))}
        </ul>

        <div className="mt-8">
          <Button
            onClick={() => {
              window.location.href = href;
            }}
            className={`w-full justify-center ${
              isGreen
                ? "border-emerald-400/20 bg-emerald-400/10 text-emerald-200 hover:bg-emerald-400/20"
                : "border-pink-300/20 bg-pink-300/10 text-pink-100 hover:bg-pink-300/20"
            }`}
          >
            Conhecer o {name}
            <ArrowRight size={17} />
          </Button>
        </div>
      </div>
    </article>
  );
}

export function Products() {
  return (
    <section id="produtos" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">
            Nossas soluções
          </span>

          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white md:text-5xl">
            Um ecossistema para diferentes tipos de negócio.
          </h2>

          <p className="mt-6 text-base leading-8 text-zinc-400 md:text-lg">
            Sistemas pensados para simplificar sua rotina, centralizar sua
            gestão e ajudar sua empresa a crescer com mais organização.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <ProductCard
            name="NEKKO OS"
            description="Gestão completa para assistências técnicas, lojas de manutenção e empresas que trabalham com uma ou várias filiais."
            color="green"
            href="#planos"
            icon={<Store size={27} />}
            features={[
              "Ordens de serviço",
              "Cadastro de clientes e aparelhos",
              "Estoque e produtos",
              "Vendas e cupons",
              "Dashboard financeiro",
              "Gestão de múltiplas filiais",
            ]}
          />

          <ProductCard
            name="NEKKO BEAUTY"
            description="Agenda e gestão inteligente para profissionais da beleza que querem organizar seus horários e cuidar melhor do próprio negócio."
            color="pink"
            href="#planos"
            icon={<Sparkles size={27} />}
            features={[
              "Agenda online",
              "Agendamento de clientes",
              "Cadastro de serviços",
              "Controle de horários",
              "Cadastro de clientes",
              "Organização da rotina",
            ]}
          />
        </div>
      </div>
    </section>
  );
}
