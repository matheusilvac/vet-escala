"use client";

import Image from "next/image";
import { Camera, Link as LinkIcon } from "lucide-react";

import { Container, Reveal, SectionHeading } from "@/components/landing/primitives";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function AboutSection() {
  return (
    <section id="quem-somos" className="bg-white py-16 sm:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-black/5 bg-[#F2F4F6] p-6">
              <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-[#00cba7]/12 blur-3xl" />
              <div className="relative">
                <div className="overflow-hidden rounded-3xl border border-black/5 bg-white">
                  <Image
                    src="/founder.svg"
                    alt="Fundador da Vet Escala"
                    width={720}
                    height={720}
                    className="h-auto w-full"
                  />
                </div>
                <div className="mt-5 rounded-2xl border border-black/5 bg-white p-5">
                  <div className="font-display text-lg font-bold text-[#0b1d26]">
                    Fundador(a)
                  </div>
                  <div className="mt-1 text-sm text-black/65">
                    Especialista em crescimento veterinário
                  </div>
                  <div className="mt-4 flex gap-3">
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="h-10 rounded-xl"
                    >
                      <a href="#" aria-label="Instagram">
                        <Camera className="h-4 w-4" /> Instagram
                      </a>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="h-10 rounded-xl"
                    >
                      <a href="#" aria-label="LinkedIn">
                        <LinkIcon className="h-4 w-4" /> LinkedIn
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <div>
              <SectionHeading
                title="Somos especialistas em crescimento veterinário."
                description="A Vet Escala nasceu para resolver um problema comum: clínicas e hospitais veterinários investem, trabalham duro e ainda assim não conseguem previsibilidade de faturamento. Nossa missão é transformar marketing e operação em um sistema estruturado — com padrão premium e foco total em conversão."
              />

              <div className="mt-8 grid gap-4">
                {[
                  {
                    title: "Storytelling que gera confiança",
                    text: "Posicionamento premium, autoridade regional e comunicação clara para o tutor ideal.",
                  },
                  {
                    title: "Processo + performance",
                    text: "Aquisição, conversão e retenção conectadas ao que realmente importa: agenda e margem.",
                  },
                  {
                    title: "Exclusividade no nicho",
                    text: "Especialização para acelerar com consistência, sem desperdício e sem achismo.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className={cn(
                      "rounded-2xl border border-black/5 bg-[#F2F4F6] p-5"
                    )}
                  >
                    <div className="font-display text-base font-bold text-[#0b1d26]">
                      {item.title}
                    </div>
                    <div className="mt-2 text-sm leading-relaxed text-black/65">
                      {item.text}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
