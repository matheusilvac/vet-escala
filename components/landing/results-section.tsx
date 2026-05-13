"use client";

import * as React from "react";
import { animate, motion, useInView, useMotionValue, useTransform } from "framer-motion";
import { Quote, Star, TrendingUp } from "lucide-react";

import { Container, Reveal, SectionHeading } from "@/components/landing/primitives";
import { cn } from "@/lib/utils";

function AnimatedCounter({
  value,
  suffix = "",
  className,
}: {
  value: number;
  suffix?: string;
  className?: string;
}) {
  const ref = React.useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (latest) => Math.round(latest));

  React.useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, value, { duration: 1.1, ease: [0.16, 1, 0.3, 1] });
    return () => controls.stop();
  }, [inView, mv, value]);

  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

const metrics = [
  { value: 60, suffix: "+", label: "clínicas aceleradas" },
  { value: 42, suffix: "%", label: "crescimento médio" },
  { value: 12, suffix: "", label: "estados com presença" },
];

const testimonials = [
  {
    text: "A agenda ganhou previsibilidade e o posicionamento ficou muito mais premium. A diferença foi parar de fazer marketing por tentativa e começar a executar método.",
    name: "Gestor(a) de Clínica",
    place: "Sul do Brasil",
  },
  {
    text: "Aumentamos a procura pelos serviços certos e com ticket melhor. O atendimento no WhatsApp virou um processo, não improviso.",
    name: "Proprietário(a)",
    place: "Sudeste",
  },
  {
    text: "O que mudou foi clareza: onde investir, o que medir e como ajustar. Resultado real, sem promessas vazias.",
    name: "Diretor(a)",
    place: "Centro-Oeste",
  },
];

export function ResultsSection() {
  const [active, setActive] = React.useState(0);

  React.useEffect(() => {
    const id = window.setInterval(() => {
      setActive((a) => (a + 1) % testimonials.length);
    }, 5500);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section id="resultados" className="bg-white py-16 sm:py-20">
      <Container>
        <Reveal>
          <SectionHeading
            kicker="Resultado real"
            title="Prova social, métricas e transformação de posicionamento."
            description="Crescimento sustentável vem de método + execução. Aqui está o que normalmente muda quando uma clínica sai do 'mais do mesmo' e passa a operar com estratégia."
          />
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {metrics.map((m, idx) => (
            <Reveal key={m.label} delay={0.06 * idx}>
              <div className="relative overflow-hidden rounded-2xl border border-black/5 bg-[#F2F4F6] p-6">
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#00cba7]/10 blur-2xl" />
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div className="text-xs font-extrabold tracking-[0.24em] uppercase text-black/55">
                      Métrica
                    </div>
                    <TrendingUp className="h-4 w-4 text-[#00cba7]" />
                  </div>
                  <div className="mt-3 font-display text-4xl font-bold tracking-tight text-[#0b1d26]">
                    <AnimatedCounter value={m.value} suffix={m.suffix} />
                  </div>
                  <div className="mt-1 text-sm text-black/65">{m.label}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl border border-black/5 bg-white p-6 shadow-[0_18px_55px_-40px_rgba(11,29,38,0.45)]">
              <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-[#00cba7]/10 blur-3xl" />
              <div className="relative">
                <div className="flex items-center gap-2">
                  <div className="grid h-10 w-10 place-items-center rounded-2xl bg-[#F2F4F6]">
                    <Star className="h-5 w-5 text-[#0b1d26]" />
                  </div>
                  <div>
                    <div className="font-display text-lg font-bold text-[#0b1d26]">
                      Antes vs. Depois
                    </div>
                    <div className="text-sm text-black/65">
                      O que normalmente muda na operação
                    </div>
                  </div>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-black/5 bg-[#F2F4F6] p-5">
                    <div className="text-xs font-extrabold tracking-[0.24em] uppercase text-black/55">
                      Antes
                    </div>
                    <ul className="mt-3 grid gap-2 text-sm text-black/70">
                      {[
                        "Marketing por tentativa",
                        "Muitos cliques, pouca agenda",
                        "Atendimento improvisado",
                        "Pouca previsibilidade",
                      ].map((t) => (
                        <li key={t} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-black/40" />
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-2xl border border-[#00cba7]/25 bg-[#00cba7]/6 p-5">
                    <div className="text-xs font-extrabold tracking-[0.24em] uppercase text-[#0b1d26]">
                      Depois
                    </div>
                    <ul className="mt-3 grid gap-2 text-sm text-black/70">
                      {[
                        "Estratégia com método",
                        "Conversão e ticket melhor",
                        "Scripts e processos",
                        "Crescimento previsível",
                      ].map((t) => (
                        <li key={t} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#00cba7]" />
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="relative overflow-hidden rounded-2xl border border-black/5 bg-[#0b1d26] p-6 text-white shadow-[0_20px_90px_-70px_rgba(0,203,167,0.65)]">
              <div className="pointer-events-none absolute -right-28 -top-28 h-72 w-72 rounded-full bg-[#00cba7]/20 blur-3xl" />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <div className="font-display text-lg font-bold tracking-tight">
                    Depoimentos
                  </div>
                  <Quote className="h-5 w-5 text-[#7cffb2]" />
                </div>

                <div className="mt-5">
                  <div className="flex gap-1 text-[#7cffb2]">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <div className="mt-4 min-h-[120px]">
                    <motion.div
                      key={active}
                      initial={{ opacity: 0, y: 10, filter: "blur(6px)" }}
                      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      transition={{ duration: 0.45, ease: [0.2, 1, 0.2, 1] }}
                      className="text-base leading-relaxed text-white/80"
                    >
                      “{testimonials[active].text}”
                    </motion.div>
                  </div>
                  <div className="mt-5 flex items-center justify-between gap-3">
                    <div>
                      <div className="text-sm font-semibold text-white">
                        {testimonials[active].name}
                      </div>
                      <div className="text-xs text-white/60">
                        {testimonials[active].place}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      {testimonials.map((_, i) => (
                        <button
                          key={i}
                          aria-label={`Ver depoimento ${i + 1}`}
                          onClick={() => setActive(i)}
                          className={cn(
                            "h-2.5 w-2.5 rounded-full transition-colors",
                            i === active ? "bg-[#00cba7]" : "bg-white/20"
                          )}
                        />
                      ))}
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
