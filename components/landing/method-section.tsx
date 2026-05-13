"use client";

import { Compass, MessageSquareText, Rocket, ShoppingBag } from "lucide-react";

import { WHATSAPP_URL } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Container, Reveal, SectionHeading } from "@/components/landing/primitives";
import { cn } from "@/lib/utils";

const steps = [
  {
    icon: Compass,
    title: "POSICIONAR",
    bullets: [
      "Diagnóstico do cenário e concorrência local",
      "Oferta e proposta de valor premium",
      "Ajustes de identidade e percepção",
    ],
  },
  {
    icon: MessageSquareText,
    title: "COMUNICAR",
    bullets: [
      "Mensagem clara para o tutor ideal",
      "Conteúdo e criativos orientados a confiança",
      "Estratégia para redes + presença local",
    ],
  },
  {
    icon: ShoppingBag,
    title: "VENDER",
    bullets: [
      "Funil, atendimento e scripts no WhatsApp",
      "Landing pages e campanhas de conversão",
      "Otimização de agenda e capacidade",
    ],
  },
  {
    icon: Rocket,
    title: "ESCALAR",
    bullets: [
      "Previsibilidade e crescimento consistente",
      "Retenção e fidelização no pós-atendimento",
      "Métricas e decisões com base em dados",
    ],
  },
];

export function MethodSection() {
  return (
    <section id="metodo" className="relative overflow-hidden bg-[#0b1d26] py-16 sm:py-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-72 w-[52rem] -translate-x-1/2 rounded-full bg-[#00cba7]/18 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(124,255,178,0.12),transparent_55%)]" />
      </div>

      <Container className="relative">
        <Reveal>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              kicker="Método"
              title="Um método estruturado, exclusivo e validado para clínicas veterinárias."
              description="O crescimento vira previsível quando existe um processo. O Altus organiza posicionamento, comunicação, vendas e escala em um sistema operacional simples de executar."
              invert
            />
            <div className="flex items-start gap-3">
              <Badge variant="dark" className="px-4 py-2">
                Método validado conforme diretrizes do CFMV e LGPD
              </Badge>
            </div>
          </div>
        </Reveal>

        <div className="relative mt-10">
          <div className="pointer-events-none absolute left-1/2 top-6 hidden h-[calc(100%-24px)] w-px -translate-x-1/2 bg-gradient-to-b from-[#00cba7]/40 via-white/10 to-transparent md:block lg:hidden" />
          <div className="pointer-events-none absolute left-6 top-1/2 hidden h-px w-[calc(100%-48px)] -translate-y-1/2 bg-gradient-to-r from-transparent via-[#00cba7]/40 to-transparent lg:block" />

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, idx) => (
              <Reveal key={s.title} delay={0.05 * idx}>
                <div
                  className={cn(
                    "group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-[#00cba7]/35"
                  )}
                >
                  <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#00cba7]/15 blur-2xl opacity-60 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="relative">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-black/10 text-[#7cffb2] shadow-[0_0_40px_rgba(0,203,167,0.18)]">
                        <s.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-xs font-extrabold tracking-[0.24em] text-white/50">
                          ETAPA {idx + 1}
                        </div>
                        <div className="font-display text-base font-bold text-white">
                          {s.title}
                        </div>
                      </div>
                    </div>

                    <ul className="mt-5 grid gap-2 text-sm text-white/75">
                      {s.bullets.map((b) => (
                        <li key={b} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00cba7]" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-col items-start justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur sm:flex-row sm:items-center">
            <div>
              <div className="font-display text-lg font-bold text-white">
                Quer aplicar o Método na sua clínica?
              </div>
              <div className="mt-1 text-sm text-white/70">
                Agende um diagnóstico gratuito e receba uma visão clara do que
                precisa acontecer para virar referência.
              </div>
            </div>
            <Button asChild size="lg">
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                QUERO APLICAR O MÉTODO
              </a>
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
