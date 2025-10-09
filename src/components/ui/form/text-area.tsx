import { cva, VariantProps } from "class-variance-authority";
import { forwardRef } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { FieldWrapper, FieldWrapperPassThroughProps } from "./field-wrapper";

const textareaVariants = cva(
  "rounded border border-[#D6DDEB] p-4 text-base focus-visible:outline-none focus-visible:ring-1",
  {
    variants: {
      variants: {
        filled: "bg-white",
        outlined: "bg-transparent",
      },
    },
    defaultVariants: {
      variants: "filled",
    },
  }
);

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> &
  FieldWrapperPassThroughProps &
  VariantProps<typeof textareaVariants> & {
    register: Partial<UseFormRegisterReturn>;
  };

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  function Textarea(
    { className, variants, label, error, register, ...props },
    ref
  ) {
    return (
      <FieldWrapper
        error={error}
        className="col-span-12 md:col-span-8"
      >
        <div className="flex flex-col items-start gap-1">
          <label className="text-[16px] font-semibold text-gray-700 leading-[25.6px]">
            {label}
          </label>
          <textarea
            className={textareaVariants({ className, variants })}
            ref={ref}
            {...register}
            {...props}
          />
        </div>
      </FieldWrapper>
    );
  }
);
