"use client";

import * as React from "react";
import Link from "next/link";
import { Camera, Link as LinkIcon, Mail, MapPin, Phone } from "lucide-react";

import { SITE_NAME, WHATSAPP_URL } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Container } from "@/components/landing/primitives";

const nav = [
  { label: "Topo", href: "#topo" },
  { label: "Serviços", href: "#servicos" },
  { label: "Método", href: "#metodo" },
  { label: "Resultados", href: "#resultados" },
  { label: "FAQ", href: "#faq" },
];

export function Footer() {
  const year = React.useMemo(() => new Date().getFullYear(), []);

  return (
    <footer className="border-t border-white/10 bg-[#0b1d26] py-14 text-white">
      <Container>
        <div className="grid gap-10 lg:grid-cols-4">
          <div>
            <Link href="#topo" className="inline-flex items-center gap-2">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10">
                <span className="font-display text-sm font-bold text-white">
                  ve
                </span>
              </span>
              <div className="leading-tight">
                <div className="font-display text-sm font-bold tracking-tight">
                  {SITE_NAME}
                </div>
                <div className="text-xs text-white/60">
                  Aceleradora Veterinária
                </div>
              </div>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
              Crescimento com método, posicionamento premium e foco total em
              conversão via WhatsApp.
            </p>
          </div>

          <div>
            <div className="text-xs font-extrabold tracking-[0.24em] text-white/60">
              NAVEGAÇÃO
            </div>
            <div className="mt-4 grid gap-2">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="w-fit text-sm text-white/75 transition-colors hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="text-xs font-extrabold tracking-[0.24em] text-white/60">
              CONTATO
            </div>
            <div className="mt-4 grid gap-3 text-sm text-white/75">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 transition-colors hover:text-white"
              >
                <Phone className="h-4 w-4 text-[#7cffb2]" />
                WhatsApp
              </a>
              <a
                href="mailto:contato@vetescala.com.br"
                className="flex items-center gap-2 transition-colors hover:text-white"
              >
                <Mail className="h-4 w-4 text-[#7cffb2]" />
                contato@vetescala.com.br
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-[#7cffb2]" />
                Brasil
              </div>
            </div>
          </div>

          <div>
            <div className="text-xs font-extrabold tracking-[0.24em] text-white/60">
              REDES
            </div>
            <div className="mt-4 flex flex-wrap gap-3">
              {[
                { label: "Instagram", icon: Camera, href: "#" },
                { label: "LinkedIn", icon: LinkIcon, href: "#" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className={cn(
                    "inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 transition-colors hover:text-white"
                  )}
                  aria-label={s.label}
                >
                  <s.icon className="h-4 w-4" />
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <div>© {year} {SITE_NAME}. Todos os direitos reservados.</div>
          <div className="flex flex-wrap gap-4">
            <a href="#" className="transition-colors hover:text-white">
              Política de Privacidade
            </a>
            <a href="#" className="transition-colors hover:text-white">
              Termos de Uso
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
