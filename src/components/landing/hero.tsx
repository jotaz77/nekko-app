import {
  ArrowRight,
  Check,
  Sparkles,
} from "lucide-react";

import { Button } from "../ui/Button";

export function Hero() {
  return (
    <section
      id="inicio"
      className="nekko-grid relative overflow-hidden pt-36"
    >
      <div className="absolute left-1/2 top-24 h-80 w-80 -translate-x-1/2 rounded-full bg-white/[0.04] blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-16 px-5 pb-24 pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:pb-32">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs text-neutral-300">
            <Sparkles size={14} />
            Tecnologia para negócios modernos
          </div>

          <h1 className="max-w-3xl text-5xl font-black leading-[0.95] tracking-[-0.06em] sm:text-6xl lg:text-7xl">
            Seu negócio.
            <br />

            <span className="nekko-text-gradient">
              Mais inteligente.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-7 text-neutral-400 sm:text-lg">
            A NEKKO cria sistemas modernos para organizar,
            automatizar e fazer seu negócio crescer sem
            complicação.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button>
              Conhecer a NEKKO
              <ArrowRight size={17} />
            </Button>

            <Button variant="secondary">
              Conhecer os produtos
            </Button>
          </div>

          <div className="mt-8 flex flex-col gap-3 text-sm text-neutral-400 sm:flex-row sm:items-center sm:gap-5">
            <div className="flex items-center gap-2">
              <Check size={16} className="text-white" />
              Sistemas especializados
            </div>

            <div className="flex items-center gap-2">
              <Check size={16} className="text-white" />
              Gestão simplificada
            </div>
          </div>
        </div>

        <div className="nekko-float relative">
          <div className="nekko-border nekko-glow rounded-[2rem] bg-neutral-950/90 p-4">
            <div className="rounded-[1.5rem] border border-white/10 bg-[#101010] p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-neutral-500">
                    NEKKO APP
                  </p>

                  <h2 className="mt-1 text-xl font-bold">
                    Seu painel de controle
                  </h2>
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-black">
                  <Sparkles size={19} />
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <p className="text-xs text-neutral-500">
                    Organização
                  </p>

                  <p className="mt-2 text-2xl font-bold">
                    100%
                  </p>

                  <div className="mt-3 h-1.5 rounded-full bg-white/10">
                    <div className="h-1.5 w-full rounded-full bg-white" />
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <p className="text-xs text-neutral-500">
                    Automação
                  </p>

                  <p className="mt-2 text-2xl font-bold">
                    Ativa
                  </p>

                  <div className="mt-3 h-1.5 rounded-full bg-white/10">
                    <div className="h-1.5 w-4/5 rounded-full bg-neutral-400" />
                  </div>
                </div>
              </div>

              <div className="mt-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold">
                    Produtos NEKKO
                  </p>

                  <span className="text-xs text-neutral-500">
                    02 ativos
                  </span>
                </div>

                <div className="mt-4 space-y-3">
                  <div className="flex items-center gap-3 rounded-xl bg-emerald-500/10 p-3">
                    <div className="h-9 w-9 rounded-lg bg-emerald-500/20" />

                    <div>
                      <p className="text-sm font-semibold">
                        NEKKO OS
                      </p>

                      <p className="text-xs text-neutral-500">
                        Gestão de assistência técnica
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 rounded-xl bg-pink-500/10 p-3">
                    <div className="h-9 w-9 rounded-lg bg-pink-500/20" />

                    <div>
                      <p className="text-sm font-semibold">
                        NEKKO BEAUTY
                      </p>

                      <p className="text-xs text-neutral-500">
                        Agenda e gestão de beleza
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
