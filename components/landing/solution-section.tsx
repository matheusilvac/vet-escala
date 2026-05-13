"use client";

import { BarChart3, Gem, RefreshCcw, Sparkles } from "lucide-react";

import { Container, Reveal, SectionHeading } from "@/components/landing/primitives";
import { cn } from "@/lib/utils";

const pillars = [
  {
    icon: BarChart3,
    title: "Estratégia, não achismo",
    text: "Diagnóstico e plano tático com foco em conversão, margem e capacidade operacional.",
  },
  {
    icon: RefreshCcw,
    title: "Crescimento com retorno real",
    text: "Tráfego e posicionamento conectados a funil, agenda e previsibilidade de caixa.",
  },
  {
    icon: Gem,
    title: "Especialidade no mercado vet",
    text: "Processos, mensagens e ofertas criadas para o comportamento real do tutor.",
  },
  {
    icon: Sparkles,
    title: "Atração, conversão e fidelização",
    text: "Do primeiro clique ao pós-atendimento: uma máquina completa e escalável.",
  },
];

export function SolutionSection() {
  return (
    <section id="solucao" className="relative overflow-hidden bg-[#0b1d26] py-16 sm:py-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[#00cba7]/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#7cffb2]/15 blur-3xl" />
      </div>
      <Container className="relative">
        <Reveal>
          <SectionHeading
            kicker="Especializada exclusivamente em clínicas e hospitais veterinários"
            title="A Vet Escala é o grupo por trás das clínicas que se tornaram referência na sua cidade."
            description="Não somos uma agência comum. Somos um grupo acelerador nichado, desenvolvido especificamente para o mercado veterinário."
            invert
          />
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, idx) => (
            <Reveal key={p.title} delay={0.06 * idx}>
              <div
                className={cn(
                  "group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_90px_-70px_rgba(0,203,167,0.65)] backdrop-blur transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-[#00cba7]/35"
                )}
              >
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#00cba7]/15 blur-2xl opacity-60 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-black/10 text-[#7cffb2] shadow-[0_0_40px_rgba(0,203,167,0.18)]">
                  <p.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold tracking-tight text-white">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  {p.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
