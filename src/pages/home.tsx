import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";

import { Hero } from "../components/landing/Hero";
import { ProductCard } from "../components/landing/ProductCard";

export function Home() {
  return (
    <>
      <Hero />

      <section
        id="produtos"
        className="mx-auto max-w-7xl px-5 py-24"
      >
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
            Ecossistema NEKKO
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
            Soluções feitas para
            <br />
            o seu tipo de negócio.
          </h2>

          <p className="mt-5 leading-7 text-neutral-400">
            Produtos especializados, pensados para resolver
            problemas reais e simplificar sua rotina.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          <ProductCard
            name="NEKKO OS"
            description="Sistema completo para assistência técnica, com ordens de serviço, clientes, aparelhos, estoque, vendas, financeiro e gestão de múltiplas lojas."
            color="green"
            type="os"
          />

          <ProductCard
            name="NEKKO BEAUTY"
            description="Agenda e sistema de gestão para profissionais da beleza, com agendamentos, serviços, clientes e organização da rotina."
            color="pink"
            type="beauty"
          />
        </div>
      </section>

      <section
        id="beneficios"
        className="border-y border-white/10 bg-white/[0.02]"
      >
        <div className="mx-auto max-w-7xl px-5 py-24">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
              Por que NEKKO?
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
              Menos complicação.
              <br />
              Mais controle.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            <div className="nekko-border rounded-3xl bg-black/20 p-6">
              <Sparkles size={24} />

              <h3 className="mt-6 text-xl font-bold">
                Experiência moderna
              </h3>

              <p className="mt-3 leading-7 text-neutral-400">
                Interfaces limpas, rápidas e pensadas para
                facilitar o uso no dia a dia.
              </p>
            </div>

            <div className="nekko-border rounded-3xl bg-black/20 p-6">
              <Zap size={24} />

              <h3 className="mt-6 text-xl font-bold">
                Mais produtividade
              </h3>

              <p className="mt-3 leading-7 text-neutral-400">
                Automatize tarefas repetitivas e tenha mais
                tempo para cuidar do seu negócio.
              </p>
            </div>

            <div className="nekko-border rounded-3xl bg-black/20 p-6">
              <ShieldCheck size={24} />

              <h3 className="mt-6 text-xl font-bold">
                Estrutura confiável
              </h3>

              <p className="mt-3 leading-7 text-neutral-400">
                Sistemas organizados para acompanhar o
                crescimento da sua operação.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="planos"
        className="mx-auto max-w-7xl px-5 py-24"
      >
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 text-center sm:p-14">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
            Planos e assinaturas
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
            Escolha a solução ideal
            <br />
            para sua operação.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-neutral-400">
            Em breve você poderá conhecer os planos, escolher
            sua assinatura e começar a utilizar os produtos
            NEKKO.
          </p>

          <div className="mt-8 flex justify-center">
            <a
              href="#produtos"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-neutral-200"
            >
              Conhecer os produtos
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <section
        id="faq"
        className="mx-auto max-w-4xl px-5 pb-24"
      >
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
            Dúvidas
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight">
            Perguntas frequentes
          </h2>
        </div>

        <div className="mt-10 space-y-3">
          {[
            "O que é a NEKKO APP?",
            "Quais produtos fazem parte da NEKKO?",
            "Posso testar antes de assinar?",
          ].map((question) => (
            <div
              key={question}
              className="nekko-border flex items-center justify-between rounded-2xl bg-white/[0.03] px-5 py-5"
            >
              <span className="font-medium">
                {question}
              </span>

              <CheckCircle2
                size={19}
                className="text-neutral-500"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
