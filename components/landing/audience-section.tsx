"use client";

import { Check } from "lucide-react";

import { WHATSAPP_URL } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Container, Reveal, SectionHeading } from "@/components/landing/primitives";
import { cn } from "@/lib/utils";

const checklist = [
  "Proprietários de clínicas veterinárias",
  "Clínicas que querem crescer",
  "Gestores frustrados com agências genéricas",
  "Clínicas buscando autoridade regional",
  "Empresas que querem previsibilidade",
  "Clínicas que querem mais faturamento",
];

export function AudienceSection() {
  return (
    <section id="para-quem" className="bg-[#F2F4F6] py-16 sm:py-20">
      <Container>
        <Reveal>
          <SectionHeading
            title="Se você se identifica com qualquer item abaixo, a Vet Escala foi feita para você."
            description="Um checklist rápido para entender se o seu momento é de acelerar com método, autoridade e execução premium."
          />
        </Reveal>

        <div className="mt-10 grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal>
            <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-[0_18px_55px_-40px_rgba(11,29,38,0.45)]">
              <div className="grid gap-3 sm:grid-cols-2">
                {checklist.map((item) => (
                  <div
                    key={item}
                    className={cn(
                      "flex items-start gap-3 rounded-2xl border border-black/5 bg-[#F2F4F6] p-4"
                    )}
                  >
                    <div className="mt-0.5 grid h-8 w-8 place-items-center rounded-xl bg-[#00cba7]/10 text-[#0b1d26]">
                      <Check className="h-4 w-4" />
                    </div>
                    <div className="text-sm font-semibold leading-snug text-[#0b1d26]">
                      {item}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="relative overflow-hidden rounded-2xl border border-black/5 bg-[#0b1d26] p-6 text-white shadow-[0_20px_90px_-70px_rgba(0,203,167,0.65)]">
              <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#00cba7]/20 blur-3xl" />
              <div className="relative">
                <div className="text-xs font-extrabold tracking-[0.24em] text-white/60">
                  PRÓXIMO PASSO
                </div>
                <div className="mt-3 font-display text-2xl font-bold tracking-tight">
                  Posicione sua clínica como referência.
                </div>
                <div className="mt-4 text-sm leading-relaxed text-white/75">
                  Se você quer previsibilidade e crescimento com padrão premium,
                  o diagnóstico gratuito é o melhor primeiro passo.
                </div>
                <div className="mt-6">
                  <Button asChild size="lg">
                    <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                      QUERO SER REFERÊNCIA NA MINHA CIDADE
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
