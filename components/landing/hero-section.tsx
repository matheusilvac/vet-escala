"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, TrendingUp } from "lucide-react";

import { WHATSAPP_URL } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Container, Reveal } from "@/components/landing/primitives";

export function HeroSection() {
  return (
    <section
      id="topo"
      className="relative overflow-hidden bg-[#0b1d26] pt-6 text-white"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-72 w-[46rem] -translate-x-1/2 rounded-full bg-[#00cba7]/20 blur-3xl" />
        <div className="absolute -bottom-32 right-0 h-80 w-80 rounded-full bg-[#7cffb2]/20 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(124,255,178,0.12),transparent_55%)]" />
      </div>

      <Container className="relative">
        <div className="grid items-center gap-10 pb-16 pt-10 md:grid-cols-2 md:pb-20 md:pt-16">
          <div>
            <Reveal>
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="dark">Exclusivo para veterinária</Badge>
                <Badge variant="default">Metodologia Altus</Badge>
                <Badge variant="dark">CFMV + LGPD</Badge>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="mt-5 font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Sua clínica veterinária pode se tornar a{" "}
                <span className="text-[#7cffb2]">Referência Número 1</span> da
                cidade.
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
                A Vet Escala é o grupo responsável por aumentar o faturamento de
                Clínicas e Hospitais Veterinários em todo o Brasil, usando nossa
                metodologia exclusiva.
                <br />
                <br />
                Hoje somos o nome por trás de clínicas veterinárias que deixaram
                de ser apenas mais uma no bairro para se tornarem a{" "}
                <span className="text-white">Referência Número 1</span> da cidade
                em cuidados animais.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <ul className="mt-7 grid gap-3 text-sm text-white/80 sm:text-base">
                {[
                  "Aumento real de faturamento",
                  "Mais tutores chegando todos os meses",
                  "Sua clínica como referência na cidade",
                  "Metodologia exclusiva validada no Brasil",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-[#00cba7]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                    QUERO ACELERAR MINHA CLÍNICA <ArrowRight />
                  </a>
                </Button>
                <Button asChild size="lg" variant="secondary">
                  <a href="#metodo">Conheça nossa metodologia</a>
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="mt-8 grid grid-cols-3 gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                {[
                  { label: "Foco nichado", value: "100% Vet" },
                  { label: "Estratégia", value: "Alta conversão" },
                  { label: "Confiança", value: "Processo claro" },
                ].map((kpi) => (
                  <div key={kpi.label}>
                    <div className="text-xs text-white/60">{kpi.label}</div>
                    <div className="mt-1 font-display text-sm font-bold text-white">
                      {kpi.value}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="relative">
              <motion.div
                className="absolute -inset-4 rounded-[2rem] bg-[#00cba7]/15 blur-2xl"
                animate={{ opacity: [0.4, 0.75, 0.4] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-[0_30px_100px_-60px_rgba(0,0,0,0.8)] backdrop-blur">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(0,203,167,0.25),transparent_45%),radial-gradient(circle_at_80%_90%,rgba(124,255,178,0.18),transparent_50%)]" />
                <div className="relative p-6 sm:p-8">
                  <div className="flex items-center justify-between">
                    <div className="text-xs font-extrabold tracking-[0.22em] text-white/60">
                      VISÃO PREMIUM
                    </div>
                    <Badge variant="dark" className="gap-2">
                      <TrendingUp className="h-4 w-4 text-[#7cffb2]" />
                      Crescimento real
                    </Badge>
                  </div>

                  <div className="mt-6 grid gap-4">
                    <div className="rounded-2xl border border-white/10 bg-black/10 p-4">
                      <div className="text-xs text-white/60">
                        Previsibilidade de faturamento
                      </div>
                      <div className="mt-2 h-2 w-full rounded-full bg-white/10">
                        <motion.div
                          className="h-2 rounded-full bg-[#00cba7]"
                          initial={{ width: "15%" }}
                          whileInView={{ width: "82%" }}
                          viewport={{ once: true, amount: 0.6 }}
                          transition={{ duration: 0.9, ease: [0.2, 1, 0.2, 1] }}
                        />
                      </div>
                    </div>

                    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4">
                      <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[#7cffb2]/20 blur-2xl" />
                      <div className="relative">
                        <div className="text-xs text-white/60">
                          Atendimento + confiança
                        </div>
                        <div className="mt-2 text-sm font-semibold text-white">
                          Estratégia → Conversão → Retenção
                        </div>
                      </div>
                    </div>

                    <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                      <Image
                        src="/hero-vet.svg"
                        alt="Profissional veterinário com pet em um visual premium"
                        width={840}
                        height={560}
                        priority
                        className="h-auto w-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
