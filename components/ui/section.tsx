import { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";

interface Props extends ComponentPropsWithoutRef<"section"> {
  bleed?: boolean | undefined;
}

export function Section({ children, className, bleed = false }: Props) {
  return (
    <section
      className={cn(
        // base
        "max-w-6xl px-4 py-8 mx-auto lg:px-12 lg:py-16",
        // width wrapper
        {
          "max-w-full px-1": bleed,
        },
        className
      )}
    >
      {children}
    </section>
  );
}
