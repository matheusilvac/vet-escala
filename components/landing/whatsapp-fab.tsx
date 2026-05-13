"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

import { WHATSAPP_URL } from "@/lib/site";
import { cn } from "@/lib/utils";

export function WhatsAppFab({ className }: { className?: string }) {
  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar com a Vet Escala no WhatsApp"
      className={cn(
        "fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-2xl bg-[#00cba7] text-[#06221f] shadow-[0_18px_55px_-20px_rgba(0,203,167,0.8)] ring-1 ring-white/10 sm:bottom-7 sm:right-7",
        className
      )}
      initial={{ opacity: 0, scale: 0.9, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.2, 1, 0.2, 1] }}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
    >
      <span className="absolute -inset-2 rounded-3xl bg-[#00cba7]/20 blur-xl" />
      <MessageCircle className="relative h-6 w-6" />
    </motion.a>
  );
}
