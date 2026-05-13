"use client";

import { AlertTriangle, Banknote, Target } from "lucide-react";

import { Card } from "@/components/ui/card";
import { Container, Reveal, SectionHeading } from "@/components/landing/primitives";
import { cn } from "@/lib/utils";

const problems = [
  {
    icon: AlertTriangle,
    title: "Tentou marketing com agências que não entendem o mercado veterinário?",
    text: "Você já investiu em marketing que prometia resultado, mas quem executava nunca viveu a realidade de uma clínica veterinária.",
  },
  {
    icon: Banknote,
    title: "Investe em redes sociais e tráfego, mas o faturamento não cresce?",
    text: "Curtidas não pagam contas. O problema está na ausência de uma estratégia real de conversão.",
  },
  {
    icon: Target,
    title: "Quer crescer sem desperdiçar tempo e dinheiro?",
    text: "Você precisa de um método validado especificamente para o mercado veterinário.",
  },
];

export function ProblemSection() {
  return (
    <section id="problema" className="bg-white py-16 sm:py-20">
      <Container>
        <Reveal>
          <SectionHeading
            kicker="Você reconhece essa situação?"
            title="Sua clínica investe, trabalha muito e os resultados ainda não aparecem?"
            description="Se a sensação é de estar sempre ocupando a equipe, gastando em marketing e ainda assim sem previsibilidade, existe um motivo: falta um método construído para a realidade do mercado veterinário."
          />
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {problems.map((p, idx) => (
            <Reveal key={p.title} delay={0.06 * idx}>
              <Card
                className={cn(
                  "group relative h-full overflow-hidden border-black/5 bg-white p-6 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_26px_70px_-40px_rgba(11,29,38,0.55)]"
                )}
              >
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#00cba7]/10 blur-2xl transition-opacity duration-300 group-hover:opacity-100 opacity-60" />
                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-black/5 bg-[#F2F4F6]">
                    <p.icon className="h-5 w-5 text-[#0b1d26]" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold tracking-tight text-[#0b1d26]">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-black/65">
                    {p.text}
                  </p>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
