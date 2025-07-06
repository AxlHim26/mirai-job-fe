import { cva } from "class-variance-authority";
import { FieldValues } from "react-hook-form";
import { z, ZodTypeAny } from "zod";
import { Form, FormProps } from "@/components/ui";

const authFormVariants = cva("flex flex-col gap-4");

export type AuthFormProps<Schema, TFormValues extends FieldValues> = FormProps<
  Schema,
  TFormValues
> & {
    className?: string;
};

export const AuthForm = <
  Schema extends ZodTypeAny,
  TFormValues extends FieldValues = z.infer<Schema>,
>({
  className,
  ...props
}: AuthFormProps<Schema, TFormValues>) => {
  return (
    <Form
      className={authFormVariants({ className })}
      {...props}
    />
  );
};
