import type { Meta, StoryObj } from "@storybook/react";
import { FieldWrapper } from "./field-wrapper";
import type { FieldError } from "react-hook-form";

const meta: Meta<typeof FieldWrapper> = {
  title: "UI/FieldWrapper",
  component: FieldWrapper,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "FieldWrapper is a layout component that wraps form inputs with a label and optional error message.",
      },
    },
  },
  argTypes: {
    label: {
      control: "text",
      description: "The label displayed above the input field.",
    },
    error: {
      control: "object",
      description:
        "An optional error object (e.g., from react-hook-form) containing a `message` to be shown.",
    },
  },
};

export default meta;

type Story = StoryObj<typeof FieldWrapper>;

export const Default: Story = {
  args: {
    label: "Email address",
    error: undefined,
    children: (
      <input
        type="email"
        placeholder="you@example.com"
        className="border px-2 py-1 rounded w-full"
      />
    ),
  },
};

export const WithError: Story = {
  args: {
    label: "Email address",
    error: { message: "Email is required" } as FieldError,
    children: (
      <input
        type="email"
        placeholder="you@example.com"
        className="border px-2 py-1 rounded w-full"
      />
    ),
  },
};
