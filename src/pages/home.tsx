import { Benefits } from "../components/landing/benefits";
import { Hero } from "../components/landing/hero";
import { Products } from "../components/landing/products";

export function Home() {
  return (
    <main>
      <Hero />
      <Products />
      <Benefits />

      <section id="planos" className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center md:p-14">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">
            Próxima etapa
          </span>

          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white md:text-5xl">
            Escolha a solução ideal para o seu negócio.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-zinc-400">
            Em breve você poderá conhecer nossos planos, escolher a
            periodicidade e iniciar sua contratação diretamente pela NEKKO APP.
          </p>
        </div>
      </section>
    </main>
  );
}
