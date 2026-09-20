import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "O que é a NEKKO SYSTEMS?",
    answer:
      "A NEKKO SYSTEMS é uma empresa de tecnologia que desenvolve sistemas para ajudar diferentes tipos de negócio a organizar sua gestão, seus clientes e sua rotina.",
  },
  {
    question: "Qual a diferença entre o NEKKO OS e o NEKKO BEAUTY?",
    answer:
      "O NEKKO OS foi desenvolvido para assistências técnicas, lojas de manutenção e empresas que trabalham com ordens de serviço. Já o NEKKO BEAUTY é voltado para profissionais e empresas do segmento da beleza, com foco em agenda, clientes e organização da rotina.",
  },
  {
    question: "Posso escolher entre pagamento mensal e anual?",
    answer:
      "Sim. Você pode escolher entre a contratação mensal ou anual. No plano anual, você paga o equivalente a 9 meses e recebe 12 meses de acesso.",
  },
  {
    question: "O que significa 3 meses grátis no plano anual?",
    answer:
      "Na contratação anual, você paga apenas 9 meses de assinatura e recebe 12 meses de acesso ao sistema. Os últimos 3 meses do período anual são gratuitos.",
  },
  {
    question: "Posso cancelar minha assinatura?",
    answer:
      "Sim. O cancelamento poderá ser solicitado de acordo com as condições da assinatura contratada. Os detalhes serão apresentados durante o processo de contratação.",
  },
  {
    question: "Posso usar o NEKKO OS em mais de uma loja?",
    answer:
      "Sim. O NEKKO OS possui suporte à gestão de múltiplas filiais, permitindo centralizar a operação de diferentes lojas em um único sistema.",
  },
  {
    question: "Preciso instalar algum programa?",
    answer:
      "A proposta da NEKKO é oferecer uma experiência simples e acessível para que você possa utilizar seus sistemas sem complicações desnecessárias.",
  },
  {
    question: "Como faço para começar?",
    answer:
      "Escolha o produto e o plano que melhor se encaixam no seu negócio, selecione a periodicidade e siga o processo de contratação. Em breve, todo esse fluxo estará disponível diretamente pela NEKKO SYSTEMS.",
  },
];

function FAQItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-white/10">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-6 py-6 text-left"
      >
        <span className="text-base font-medium text-white md:text-lg">
          {question}
        </span>

        <ChevronDown
          size={20}
          className={`shrink-0 text-zinc-500 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`grid transition-all duration-300 ${
          open ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="max-w-3xl pr-8 text-sm leading-7 text-zinc-400 md:text-base">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export function FAQ() {
  return (
    <section id="faq" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">
            FAQ
          </span>

          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white md:text-5xl">
            Ficou com alguma dúvida?
          </h2>

          <p className="mt-6 text-base leading-8 text-zinc-400 md:text-lg">
            Encontre respostas para as principais dúvidas sobre a NEKKO SYSTEMS,
            nossos sistemas e nossos planos.
          </p>
        </div>

        <div className="mt-14 rounded-3xl border border-white/10 bg-white/[0.025] px-6 md:px-10">
          {faqs.map((faq) => (
            <FAQItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
