"use client";

import { Container, Reveal, SectionHeading } from "@/components/landing/primitives";
import { cn } from "@/lib/utils";

const logos = [
  "Google Partner",
  "Meta Partner",
  "RD Station",
  "Parceiros Veterinários",
  "Performance",
  "Branding",
  "SEO Local",
  "Crescimento",
];

export function PartnersSection() {
  const items = [...logos, ...logos];

  return (
    <section id="parceiros" className="bg-white py-14 sm:py-16">
      <Container>
        <Reveal>
          <SectionHeading
            kicker="Parcerias e tecnologia"
            title="Conectados às plataformas que mais geram demanda."
            description="Integração com ecossistema de mídia, CRM e presença local para acelerar com consistência."
          />
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-10 overflow-hidden rounded-2xl border border-black/5 bg-[#F2F4F6] py-6">
            <div className="flex gap-4 px-4 sm:px-6">
              <div className="flex min-w-full shrink-0 gap-4 animate-marquee">
                {items.map((name, idx) => (
                  <div
                    key={`${name}-${idx}`}
                    className={cn(
                      "flex h-12 items-center justify-center rounded-2xl border border-black/5 bg-white px-5 text-sm font-semibold text-[#0b1d26]/70 grayscale transition-[filter,color,transform] duration-300 hover:grayscale-0 hover:text-[#0b1d26] hover:-translate-y-0.5"
                    )}
                  >
                    {name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
