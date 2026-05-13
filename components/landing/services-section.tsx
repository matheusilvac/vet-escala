"use client";

import {
  Camera,
  Globe,
  LayoutTemplate,
  MapPin,
  Megaphone,
  MessageCircle,
  Palette,
  Search,
} from "lucide-react";

import { WHATSAPP_URL } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Container, Reveal, SectionHeading } from "@/components/landing/primitives";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: Search,
    title: "Google Ads Veterinário",
    text: "Captação de tutores prontos para agendar, com campanhas pensadas para serviços vet.",
  },
  {
    icon: Megaphone,
    title: "Facebook & Instagram Ads",
    text: "Anúncios que geram demanda e constroem autoridade, não apenas alcance.",
  },
  {
    icon: MapPin,
    title: "Google Meu Negócio",
    text: "SEO local e otimização para aparecer quando o tutor procura na sua região.",
  },
  {
    icon: MessageCircle,
    title: "Gestão de Redes Sociais",
    text: "Conteúdo premium com estratégia, posicionamento e conversão para agenda.",
  },
  {
    icon: Camera,
    title: "Produção de Fotos e Vídeos",
    text: "Imagem profissional para elevar percepção, confiança e ticket médio.",
  },
  {
    icon: LayoutTemplate,
    title: "Landing Pages",
    text: "Páginas orientadas a conversão com copy e UX focadas em WhatsApp.",
  },
  {
    icon: Globe,
    title: "Site Institucional",
    text: "Presença premium, rápida e otimizada para SEO e confiança imediata.",
  },
  {
    icon: Palette,
    title: "Branding Veterinário",
    text: "Identidade e posicionamento para sair do comum e virar referência.",
  },
];

export function ServicesSection() {
  return (
    <section id="servicos" className="bg-[#F2F4F6] py-16 sm:py-20">
      <Container>
        <Reveal>
          <SectionHeading
            kicker="Tudo que a clínica precisa para escalar"
            title="Um ecossistema completo de crescimento — com padrão premium."
            description="Você não precisa montar um time inteiro interno. A Vet Escala integra estratégia, criação e performance em um plano único, focado em faturamento e autoridade."
          />
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, idx) => (
            <Reveal key={s.title} delay={0.04 * idx}>
              <div
                className={cn(
                  "group relative h-full overflow-hidden rounded-2xl border border-black/5 bg-white p-6 shadow-[0_18px_55px_-40px_rgba(11,29,38,0.45)] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_28px_75px_-45px_rgba(11,29,38,0.55)]"
                )}
              >
                <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#00cba7]/10 blur-2xl opacity-60 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-black/5 bg-[#F2F4F6] text-[#0b1d26]">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-display text-base font-bold tracking-tight text-[#0b1d26]">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-black/65">
                    {s.text}
                  </p>
                  <div className="mt-5">
                    <Button
                      asChild
                      size="sm"
                      variant="outline"
                      className="h-10 rounded-xl"
                    >
                      <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                        Quero saber mais
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
