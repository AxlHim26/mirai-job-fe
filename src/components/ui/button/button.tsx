import { cva, VariantProps } from "class-variance-authority";
import React, { forwardRef } from "react";
import { cn } from "@/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-x-2 whitespace-nowrap text-base font-normal transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        filled:
          "border border-transparent bg-[#0A65CC] text-white hover:bg-[#0956A8] focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
        outlined:
          "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
        ghost:
          "hover:bg-gray-100 border-[1px] border-[#CCCCF5] text-[#4640DE] text-[16px] font-bold leading-[25.6px] focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
        danger:
          "border border-transparent bg-red-600 text-white hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-offset-2",
        success:
          "border border-transparent bg-green-600 text-white hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:ring-offset-2",
        icon: "text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors",
        link: "text-blue-600 hover:text-blue-800 underline-offset-4 hover:underline bg-transparent p-0 h-auto",
        toggle:
          "border border-gray-200 bg-gray-50 text-gray-600 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
        toggleActive:
          "border border-blue-200 bg-blue-50 text-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
      },
      size: {
        xs: "h-6 px-2 text-xs",
        sm: "h-8 px-3 text-sm",
        md: "h-10 px-4 py-2",
        lg: "h-12 px-8",
        xl: "h-14 px-10 text-lg",
        icon: "size-9",
        iconSm: "size-8",
        iconLg: "size-10",
      },
    },
    defaultVariants: {
      variant: "filled",
      size: "md",
    },
  }
);

/**
 * type definition for ButtonProps
 * use React.ButtonHTMLAttributes<HTMLButtonElement> to get all the props of button element
 */
export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
  };

/**
 * use forwardRef to pass ref to the button element
 * how to use with props: <Button variant="filled" size="md" startIcon={<Icon />} endIcon={<Icon />}>Button</Button>
 * how to use with ref: <Button ref={ref}>Button</Button>
 * how to use with HTMLButtonElement props (type, onClick, etc): <Button type="submit">Button</Button>
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    {
      variant,
      size,
      className,
      startIcon,
      endIcon,
      children,
      type = "button",
      ...props
    }: ButtonProps,
    ref
  ) {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        type={type}
        ref={ref}
        {...props}
      >
        {startIcon && startIcon}
        {children && children}
        {endIcon && endIcon}
      </button>
    );
  }
);
