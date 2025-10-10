import { cva, VariantProps } from "class-variance-authority";
import React, { forwardRef } from "react";
import { cn } from "@/utils";

const toggleVariants = cva(
  "relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-gray-200 data-[state=checked]:bg-blue-600",
        success: "bg-gray-200 data-[state=checked]:bg-green-600",
        warning: "bg-gray-200 data-[state=checked]:bg-yellow-600",
        danger: "bg-gray-200 data-[state=checked]:bg-red-600",
      },
      size: {
        sm: "h-5 w-9",
        md: "h-6 w-11",
        lg: "h-7 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

const toggleThumbVariants = cva(
  "pointer-events-none block rounded-full bg-white shadow-lg ring-0 transition-transform",
  {
    variants: {
      size: {
        sm: "h-4 w-4 translate-x-0.5 data-[state=checked]:translate-x-4",
        md: "h-5 w-5 translate-x-0.5 data-[state=checked]:translate-x-5",
        lg: "h-6 w-6 translate-x-0.5 data-[state=checked]:translate-x-5",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

export type ToggleProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof toggleVariants> & {
    checked?: boolean;
    onCheckedChange?: (checked: boolean) => void;
  };

export const Toggle = forwardRef<HTMLButtonElement, ToggleProps>(
  function Toggle(
    { className, variant, size, checked = false, onCheckedChange, ...props },
    ref
  ) {
    return (
      <button
        ref={ref}
        className={cn(toggleVariants({ variant, size }), className)}
        data-state={checked ? "checked" : "unchecked"}
        onClick={() => onCheckedChange?.(!checked)}
        {...props}
      >
        <span
          className={cn(toggleThumbVariants({ size }))}
          data-state={checked ? "checked" : "unchecked"}
        />
      </button>
    );
  }
);
