"use client";

import { Container, Reveal, SectionHeading } from "@/components/landing/primitives";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "A Vet Escala é uma agência?",
    a: "Não. Somos um grupo acelerador nichado, com método e execução focados exclusivamente em clínicas e hospitais veterinários. A proposta é construir previsibilidade e posicionamento premium, não apenas publicar conteúdo.",
  },
  {
    q: "Em quanto tempo começo a ver resultado?",
    a: "Depende do ponto de partida (posicionamento, presença local, oferta, capacidade de agenda e histórico de mídia). O Diagnóstico Altus mapeia as alavancas mais rápidas e o plano de execução para gerar tração com consistência.",
  },
  {
    q: "Vocês trabalham com clínicas de qualquer porte?",
    a: "Sim, desde que exista intenção real de crescer e seguir um processo. O método se adapta ao tamanho, mas exige execução e alinhamento do time.",
  },
  {
    q: "O foco é só marketing?",
    a: "Não. Marketing sem operação não escala. A Vet Escala conecta tráfego, conversão e atendimento (especialmente WhatsApp) para transformar demanda em faturamento.",
  },
  {
    q: "Eu já faço anúncios. Por que não cresce?",
    a: "Na maioria dos casos, o gargalo está em posicionamento, oferta, mensagem, conversão e atendimento. Tráfego sem método vira custo. O Altus organiza a jornada completa.",
  },
  {
    q: "O diagnóstico gratuito é uma reunião de vendas?",
    a: "Não. É uma análise real do seu negócio: presença local, presença digital e um plano inicial personalizado. Se houver fit, explicamos o caminho de execução.",
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="bg-[#0b1d26] py-16 sm:py-20">
      <Container>
        <Reveal>
          <SectionHeading
            kicker="FAQ"
            title="Tire dúvidas antes de falar com a gente."
            description="Transparência total sobre como funciona e para quem faz sentido."
            invert
          />
        </Reveal>

        <Reveal delay={0.06}>
          <div className="mt-10">
            <Accordion type="single" collapsible className="grid gap-3">
              {faqs.map((f, idx) => (
                <AccordionItem key={f.q} value={`item-${idx}`}>
                  <AccordionTrigger>{f.q}</AccordionTrigger>
                  <AccordionContent>{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
