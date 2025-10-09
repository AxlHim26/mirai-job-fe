import { useState, KeyboardEvent, ChangeEvent } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { Error } from "@/components/ui";
import { FieldError } from "react-hook-form";

const inputVariants = cva(
  "rounded border border-[#D6DDEB] p-2 text-base focus-visible:outline-none focus-visible:ring-1 flex flex-wrap gap-2 w-full",
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

type TagInputProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof inputVariants> & {
    label: string;
    value: string[];
    onChange: (tags: string[]) => void;
    error: FieldError;
    placeholder?: string;
  };

export function TagInput({
  label,
  value,
  onChange,
  error,
  variants,
  className,
  placeholder,
}: TagInputProps) {
  const [inputValue, setInputValue] = useState("");

  const addTag = (tag: string) => {
    const trimmed = tag.trim();
    if (!trimmed || value.includes(trimmed)) return;
    onChange([...value, trimmed]);
    setInputValue("");
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      addTag(inputValue);
    } else if (e.key === "Backspace" && !inputValue && value.length > 0) {
      onChange(value.slice(0, value.length - 1));
    }
  };

  const removeTag = (tagToRemove: string) => {
    onChange(value.filter((tag) => tag !== tagToRemove));
  };

  return (
    <div className="flex flex-col items-start gap-1 w-full">
      <label className="text-[16px] font-semibold text-gray-700 leading-[25.6px]">
        {label}
      </label>
      <div className={inputVariants({ className, variants })}>
        {value.map((tag) => (
          <span
            key={tag}
            className="flex items-center gap-1 bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-sm"
          >
            {tag}
            <button
              type="button"
              className="text-blue-500 hover:text-blue-700"
              onClick={() => removeTag(tag)}
            >
              ×
            </button>
          </span>
        ))}
        <input
          className="flex-1 min-w-[100px] border-none focus:outline-none"
          value={inputValue}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setInputValue(e.target.value)
          }
          onKeyDown={handleKeyDown}
          onBlur={() => addTag(inputValue)}
          placeholder={placeholder}
        />
      </div>
      <Error errorMessage={error?.message} />
    </div>
  );
}
