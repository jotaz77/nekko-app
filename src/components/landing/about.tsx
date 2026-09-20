import {
  ArrowUpRight,
  Check,
  Layers3,
  Rocket,
  Sparkles,
} from "lucide-react";

const pillars = [
  {
    icon: Layers3,
    title: "Soluções especializadas",
    description:
      "Cada produto NEKKO nasce pensado para as necessidades reais de um segmento.",
  },
  {
    icon: Sparkles,
    title: "Tecnologia simples",
    description:
      "Interfaces modernas e experiências pensadas para facilitar a rotina, não complicá-la.",
  },
  {
    icon: Rocket,
    title: "Feito para crescer",
    description:
      "Um ecossistema que acompanha a evolução do negócio e pode crescer junto com ele.",
  },
];

export function About() {
  return (
    <section id="sobre" className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.025] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-14 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">
              Sobre a NEKKO SYSTEMS
            </span>

            <h2 className="mt-5 max-w-3xl text-3xl font-semibold tracking-tight text-white md:text-5xl">
              Tecnologia criada para acompanhar negócios reais.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-400 md:text-lg">
              A NEKKO SYSTEMS é uma empresa de tecnologia que cria sistemas
              especializados para diferentes tipos de negócio.
            </p>

            <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-400 md:text-lg">
              Em vez de tentar oferecer uma solução genérica para todo mundo,
              desenvolvemos produtos pensados para as necessidades específicas
              de cada segmento.
            </p>

            <div className="mt-8 flex items-center gap-3 text-sm text-zinc-300">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-white">
                <Check size={14} />
              </span>

              Um ecossistema. Diferentes soluções.
            </div>
          </div>

          <div className="relative">
            <div className="nekko-border nekko-glow rounded-[2rem] bg-zinc-950/90 p-5">
              <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.025] p-6 md:p-8">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.25em] text-zinc-500">
                      Ecossistema
                    </p>

                    <h3 className="mt-3 text-2xl font-semibold text-white">
                      NEKKO SYSTEMS
                    </h3>
                  </div>

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-black">
                    <Sparkles size={20} />
                  </div>
                </div>

                <div className="mt-8 space-y-3">
                  <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/[0.06] p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-semibold text-emerald-200">
                          NEKKO OS
                        </p>

                        <p className="mt-1 text-xs text-zinc-500">
                          Gestão para assistências técnicas
                        </p>
                      </div>

                      <span className="h-2 w-2 rounded-full bg-emerald-400" />
                    </div>
                  </div>

                  <div className="rounded-2xl border border-pink-300/20 bg-pink-300/[0.06] p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-semibold text-pink-200">
                          NEKKO BEAUTY
                        </p>

                        <p className="mt-1 text-xs text-zinc-500">
                          Agenda e gestão para beleza
                        </p>
                      </div>

                      <span className="h-2 w-2 rounded-full bg-pink-300" />
                    </div>
                  </div>

                  <div className="rounded-2xl border border-dashed border-white/10 p-4">
                    <p className="text-sm font-medium text-zinc-400">
                      Novos NEKKOs
                    </p>

                    <p className="mt-1 text-xs leading-5 text-zinc-600">
                      Um ecossistema preparado para crescer.
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
                  <span className="text-xs text-zinc-600">
                    Tecnologia que acompanha seu negócio.
                  </span>

                  <ArrowUpRight size={16} className="text-zinc-600" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 grid gap-5 md:grid-cols-3">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;

            return (
              <article
                key={pillar.title}
                className="rounded-3xl border border-white/10 bg-white/[0.025] p-6 transition duration-300 hover:-translate-y-1 hover:border-white/20 md:p-7"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-zinc-200">
                  <Icon size={20} />
                </div>

                <h3 className="mt-6 text-lg font-semibold text-white">
                  {pillar.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-zinc-500">
                  {pillar.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
