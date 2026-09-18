import {
  BarChart3,
  CheckCircle2,
  Cloud,
  Layers3,
  ShieldCheck,
  Sparkles,
  Target,
  Zap,
} from "lucide-react";

const benefits = [
  {
    title: "Mais organização",
    description:
      "Tenha informações importantes reunidas em um só lugar, sem depender de anotações espalhadas.",
    icon: Layers3,
  },
  {
    title: "Menos tarefas manuais",
    description:
      "Automatize processos repetitivos e aproveite melhor o seu tempo.",
    icon: Zap,
  },
  {
    title: "Gestão centralizada",
    description:
      "Acompanhe sua operação, clientes, serviços e resultados em uma única plataforma.",
    icon: Target,
  },
  {
    title: "Controle financeiro",
    description:
      "Visualize vendas, movimentações e informações importantes para tomar decisões.",
    icon: BarChart3,
  },
  {
    title: "Acesso online",
    description:
      "Consulte seus dados de onde estiver, utilizando dispositivos conectados à internet.",
    icon: Cloud,
  },
  {
    title: "Experiência profissional",
    description:
      "Ofereça uma experiência mais organizada para seus clientes e sua equipe.",
    icon: Sparkles,
  },
  {
    title: "Mais segurança",
    description:
      "Estruture sua operação com informações organizadas e acesso controlado.",
    icon: ShieldCheck,
  },
  {
    title: "Crescimento sustentável",
    description:
      "Tenha uma base preparada para acompanhar a evolução do seu negócio.",
    icon: CheckCircle2,
  },
];

export function Benefits() {
  return (
    <section id="beneficios" className="relative border-y border-white/5 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">
              Por que escolher o NEKKO?
            </span>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white md:text-5xl">
              Menos complicação.
              <br />
              Mais controle.
            </h2>

            <p className="mt-6 text-base leading-8 text-zinc-400 md:text-lg">
              O NEKKO foi criada para ajudar empresas e profissionais a
              trabalharem de forma mais inteligente, organizada e profissional.
            </p>

            <div className="mt-8 h-px w-24 bg-white/20" />

            <p className="mt-8 text-sm leading-7 text-zinc-500">
              Da rotina operacional ao acompanhamento dos resultados, tudo
              pensado para deixar sua gestão mais simples.
            </p>
          </div>

          <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <div key={benefit.title} className="group">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-zinc-300 transition group-hover:border-white/20 group-hover:bg-white/[0.08]">
                    <Icon size={21} />
                  </div>

                  <h3 className="text-base font-semibold text-white">
                    {benefit.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-zinc-500">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
