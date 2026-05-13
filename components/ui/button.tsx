import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-extrabold font-sans transition-[transform,box-shadow,background-color,border-color,color] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00cba7]/60 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 active:translate-y-[0.5px]",
  {
    variants: {
      variant: {
        default:
          "bg-[#00cba7] text-[#06221f] shadow-[0_12px_40px_-18px_rgba(0,203,167,0.65)] hover:bg-[#7cffb2]",
        secondary:
          "border border-white/15 bg-white/5 text-white hover:bg-white/10",
        outline:
          "border border-[#0b1d26]/15 bg-white text-[#0b1d26] hover:bg-[#F2F4F6]",
        ghost: "bg-transparent text-current hover:bg-black/5",
      },
      size: {
        default: "h-12 px-6",
        sm: "h-10 rounded-lg px-4 text-sm",
        lg: "h-14 px-8 text-base",
        icon: "h-12 w-12 px-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
