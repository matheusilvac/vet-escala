"use client";

import * as React from "react";
import { motion, type Variants } from "framer-motion";

import { cn } from "@/lib/utils";

export function Container({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8", className)}
      {...props}
    />
  );
}

const defaultReveal: Variants = {
  hidden: { opacity: 0, y: 18, filter: "blur(6px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)" },
};

export function Reveal({
  children,
  className,
  delay = 0,
  once = true,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
}) {
  return (
    <motion.div
      className={className}
      variants={defaultReveal}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount: 0.25 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({
  kicker,
  title,
  description,
  align = "left",
  invert = false,
}: {
  kicker?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  invert?: boolean;
}) {
  const text = invert ? "text-white" : "text-[#0b1d26]";
  const muted = invert ? "text-white/70" : "text-black/65";

  return (
    <div className={cn(align === "center" ? "text-center" : "text-left")}>
      {kicker ? (
        <div
          className={cn(
            "text-xs font-extrabold tracking-[0.24em] uppercase",
            invert ? "text-[#7cffb2]" : "text-[#00cba7]"
          )}
        >
          {kicker}
        </div>
      ) : null}
      <h2
        className={cn(
          "mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl",
          text
        )}
      >
        {title}
      </h2>
      {description ? (
        <p className={cn("mt-4 max-w-3xl text-base leading-relaxed", muted)}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
