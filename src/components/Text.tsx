/** Slot repassa as props pro componente abaixo */
import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";
import { ReactNode } from "react";

export interface TextProps {
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
  children: string | ReactNode;
  className?: string;
}

export function Text({ size = "md", asChild, children, className }: TextProps) {
  const Comp = asChild ? Slot : "span";
  return (
    <>
      <Comp
        className={clsx(
          "text-gray-100 font-sans",
          {
            "text-xs": size === "sm",
            "text-sm": size === "md",
            "text-md": size === "lg",
          },
          className
        )}
      >
        {children}
      </Comp>
    </>
  );
}
