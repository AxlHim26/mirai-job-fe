import { cva, VariantProps } from "class-variance-authority";
import { forwardRef } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { FieldWrapper, FieldWrapperPassThroughProps } from "./field-wrapper";

const inputVariants = cva(
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

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> &
  FieldWrapperPassThroughProps &
  VariantProps<typeof inputVariants> & {
    register: Partial<UseFormRegisterReturn>;
    type?: "text" | "email" | "password" | "select" | "date" | "number";
  };

/**
 * how to use:
 * ```tsx
 * <Input
 *  label="Email"
 *  className="w-full"
 *  variants="outlined"
 *  register={register("email", {
 *  required: "Email is required",
 * })}
 * error={errors.email}
 * type="email"
 * />
 * ```
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  {
    className,
    variants,
    label,
    error,
    register,
    type = "text",
    placeholder,
    ...props
  }: InputProps,
  ref
) {
  return (
    <FieldWrapper error={error}>
      <div className="flex flex-col items-start gap-1">
        <label className="text-[16px] font-semibold text-gray-700 leading-[25.6px]">
          {label}
        </label>
        <input
          type={type}
          className={inputVariants({ className, variants })}
          placeholder={placeholder}
          ref={ref}
          {...register}
          {...props}
        />
      </div>
    </FieldWrapper>
  );
});
