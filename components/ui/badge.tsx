import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs font-extrabold tracking-wide",
  {
    variants: {
      variant: {
        default:
          "border-[#00cba7]/30 bg-[#00cba7]/10 text-[#00cba7] shadow-[0_0_0_1px_rgba(0,203,167,0.06)]",
        dark: "border-white/15 bg-white/5 text-white",
        light: "border-[#0b1d26]/10 bg-white text-[#0b1d26]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
