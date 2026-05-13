"use client";

import * as React from "react";
import Link from "next/link";
import * as Dialog from "@radix-ui/react-dialog";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

import { WHATSAPP_URL } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Método", href: "#metodo" },
  { label: "Serviços", href: "#servicos" },
  { label: "Resultados", href: "#resultados" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-[background-color,backdrop-filter,border-color] duration-300",
        scrolled
          ? "border-b border-white/10 bg-[#0b1d26]/75 backdrop-blur"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="#" className="group inline-flex items-center gap-2">
          <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10">
            <span className="absolute inset-0 rounded-xl shadow-[0_0_40px_rgba(0,203,167,0.25)]" />
            <span className="relative font-display text-sm font-bold text-white">
              ve
            </span>
          </span>
          <div className="leading-tight">
            <div className="font-display text-sm font-bold tracking-tight text-white">
              Vet Escala
            </div>
            <div className="text-xs text-white/60">Aceleradora Veterinária</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-white/80 transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
          <Button asChild size="sm">
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
              Diagnóstico no WhatsApp
            </a>
          </Button>
        </nav>

        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Dialog.Trigger asChild className="md:hidden">
            <button
              aria-label="Abrir menu"
              className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/5 text-white"
            >
              <Menu className="h-5 w-5" />
            </button>
          </Dialog.Trigger>
          <AnimatePresence>
            {open ? (
              <Dialog.Portal forceMount>
                <Dialog.Overlay asChild>
                  <motion.div
                    className="fixed inset-0 z-50 bg-black/55 backdrop-blur-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                </Dialog.Overlay>
                <Dialog.Content asChild>
                  <motion.div
                    className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0b1d26] px-4 pb-6 pt-4 sm:px-6"
                    initial={{ y: -18, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -18, opacity: 0 }}
                    transition={{ duration: 0.25, ease: [0.2, 1, 0.2, 1] }}
                  >
                    <div className="mx-auto flex max-w-6xl items-center justify-between">
                      <Dialog.Title className="font-display text-base font-bold text-white">
                        Menu
                      </Dialog.Title>
                      <Dialog.Close asChild>
                        <button
                          aria-label="Fechar menu"
                          className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/5 text-white"
                        >
                          <X className="h-5 w-5" />
                        </button>
                      </Dialog.Close>
                    </div>
                    <div className="mx-auto mt-5 max-w-6xl">
                      <div className="grid gap-2">
                        {navItems.map((item) => (
                          <Dialog.Close asChild key={item.href}>
                            <a
                              href={item.href}
                              className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 font-semibold text-white/90"
                            >
                              {item.label}
                            </a>
                          </Dialog.Close>
                        ))}
                      </div>
                      <div className="mt-5 grid gap-3">
                        <Button asChild>
                          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                            Agendar diagnóstico gratuito
                          </a>
                        </Button>
                        <Button asChild variant="secondary">
                          <a href="#metodo">Conheça nossa metodologia</a>
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                </Dialog.Content>
              </Dialog.Portal>
            ) : null}
          </AnimatePresence>
        </Dialog.Root>
      </div>
    </header>
  );
}
