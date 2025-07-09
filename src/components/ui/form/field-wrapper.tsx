import { FieldError } from "react-hook-form";
import { Label } from "./label";
import { Error } from "./error";

type FieldWrapperProps = {
  className?: string;
  label?: string;
  children: React.ReactNode;
  error?: FieldError;
};

export type FieldWrapperPassThroughProps = Pick<FieldWrapperProps, "error" | "label">;

export const FieldWrapper = ({
  className,
  label,
  children,
  error,
}: FieldWrapperProps) => {
  return (
    <div className={className}>
        <Label> 
        {label}
        <div className="mt-1">{children}</div>
        </Label>
        <Error errorMessage={error?.message} />
    </div>
  );
};
