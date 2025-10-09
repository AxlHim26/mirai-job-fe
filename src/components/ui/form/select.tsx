import { cva, VariantProps } from "class-variance-authority";
import { forwardRef } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { FieldWrapper, FieldWrapperPassThroughProps } from "./field-wrapper";

const selectVariants = cva(
  "rounded border border-[#D6DDEB] px-4 py-2 text-base focus-visible:outline-none focus-visible:ring-1 w-full",
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

export type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> &
  FieldWrapperPassThroughProps &
  VariantProps<typeof selectVariants> & {
    register?: Partial<UseFormRegisterReturn>;
    options: { label: string; value: string }[];
  };

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  function Select(
    { className, variants, error, register, options, ...props }: SelectProps,
    ref
  ) {
    return (
      <FieldWrapper error={error}>
        <select
          className={selectVariants({ className, variants })}
          ref={ref}
          {...register}
          {...props}
        >
          {options.map((opt) => (
            <option
              key={opt.value}
              value={opt.value}
            >
              {opt.label}
            </option>
          ))}
        </select>
      </FieldWrapper>
    );
  }
);
