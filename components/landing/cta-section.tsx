"use client";

import { Clock, Lock, ShieldCheck } from "lucide-react";

import { WHATSAPP_URL } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Container, Reveal, SectionHeading } from "@/components/landing/primitives";
import { cn } from "@/lib/utils";

const bullets = [
  "Análise do Google Meu Negócio",
  "Diagnóstico da presença digital",
  "Plano personalizado",
];

export function CTASection() {
  return (
    <section
      id="diagnostico"
      className="relative overflow-hidden bg-[#0b1d26] py-16 sm:py-20"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-72 w-[52rem] -translate-x-1/2 rounded-full bg-[#00cba7]/22 blur-3xl" />
        <div className="absolute -bottom-20 right-0 h-72 w-72 rounded-full bg-[#7cffb2]/18 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,203,167,0.12),transparent_60%)]" />
      </div>

      <Container className="relative">
        <div className="relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-white/5 p-7 shadow-[0_35px_140px_-110px_rgba(0,203,167,0.9)] backdrop-blur sm:p-10">
          <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-[#00cba7]/20 blur-3xl" />
          <div className="pointer-events-none absolute -right-24 -bottom-24 h-64 w-64 rounded-full bg-[#7cffb2]/15 blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <Reveal>
                <SectionHeading
                  kicker="Diagnóstico Gratuito"
                  title="Descubra o que está travando o crescimento da sua clínica."
                  description="O Diagnóstico Altus não é uma reunião de vendas. É uma análise real do seu negócio."
                  invert
                />
              </Reveal>

              <Reveal delay={0.05}>
                <div className="mt-7 grid gap-3 sm:grid-cols-3">
                  {[
                    { icon: ShieldCheck, text: "CFMV + LGPD" },
                    { icon: Clock, text: "Ação imediata" },
                    { icon: Lock, text: "Vagas limitadas" },
                  ].map((b) => (
                    <div
                      key={b.text}
                      className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/10 px-4 py-3"
                    >
                      <b.icon className="h-4 w-4 text-[#7cffb2]" />
                      <div className="text-sm font-semibold text-white/80">
                        {b.text}
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <ul className="mt-7 grid gap-3 text-sm text-white/80 sm:text-base">
                  {bullets.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#00cba7]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>

            <Reveal delay={0.12}>
              <div
                className={cn(
                  "relative overflow-hidden rounded-3xl border border-white/10 bg-black/10 p-6"
                )}
              >
                <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#00cba7]/18 blur-2xl" />
                <div className="relative">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="dark">Alta conversão</Badge>
                    <Badge variant="dark">Posicionamento premium</Badge>
                    <Badge variant="default">WhatsApp-first</Badge>
                  </div>

                  <div className="mt-6 font-display text-2xl font-bold tracking-tight text-white">
                    Agende agora e receba um plano claro de escala.
                  </div>
                  <div className="mt-3 text-sm leading-relaxed text-white/70">
                    Clique no botão e fale diretamente no WhatsApp. Todos os CTAs
                    desta página levam para o mesmo canal.
                  </div>

                  <div className="mt-6 grid gap-3">
                    <Button asChild size="lg" className="h-14 text-base">
                      <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                        AGENDAR MEU DIAGNÓSTICO GRATUITO
                      </a>
                    </Button>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-xs text-white/70">
                      <span className="font-extrabold text-white">
                        Escassez inteligente:
                      </span>{" "}
                      abrimos poucas agendas por semana para manter padrão de
                      execução e acompanhamento.
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
