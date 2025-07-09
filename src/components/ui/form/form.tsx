import { zodResolver } from "@hookform/resolvers/zod";
import {
  useForm,
  FieldValues,
  SubmitHandler,
  UseFormReturn,
  UseFormProps,
} from "react-hook-form";
import { z, ZodTypeAny } from "zod";

export type FormProps<Schema, TFormValues extends FieldValues> = {
  className?: string;
  option?: UseFormProps<TFormValues>;
  schema: Schema;
  onSubmit: SubmitHandler<TFormValues>;
  children: (methods: UseFormReturn<TFormValues>) => React.ReactNode;
};

/**
 * This component is a wrapper around react-hook-form to handle form validation using Zod.
 * @param FormProps 
 * @returns {JSX.Element}
 */
export const Form = <
  Schema extends ZodTypeAny,
  TFormValues extends FieldValues = z.infer<Schema>,
>({
  className,
  option,
  schema,
  onSubmit,
  children,
}: FormProps<Schema, TFormValues>) => {
  const form = useForm<TFormValues>({
    resolver: zodResolver(schema),
    ...option,
  });

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className={className}
    >
      {children(form)}
    </form>
  );
};
