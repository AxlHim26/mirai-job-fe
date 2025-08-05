import type { Meta, StoryObj } from "@storybook/react";
import { Select } from "./select";

const meta: Meta<typeof Select> = {
  title: "UI/Select",
  component: Select,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A customizable Select component for forms. Supports different styles (`filled`, `outlined`), integrates with `react-hook-form`, and displays options dynamically.",
      },
    },
  },
  argTypes: {
    variants: {
      control: "select",
      options: ["filled", "outlined"],
      description: "Visual style of the select input.",
    },
    className: {
      control: "text",
      description: "Custom CSS class for the select element.",
    },
    error: {
      control: "object",
      description: "Field error object from `react-hook-form`.",
    },
    options: {
      control: "object",
      description: "Array of option objects with `label` and `value`.",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

const sampleOptions = [
  { label: "Option 1", value: "opt1" },
  { label: "Option 2", value: "opt2" },
  { label: "Option 3", value: "opt3" },
];

export const Default: Story = {
  args: {
    variants: "filled",
    label: "Choose an option",
    options: sampleOptions,
  },
};

export const Outlined: Story = {
  args: {
    variants: "outlined",
    label: "Outlined style select",
    options: sampleOptions,
  },
};

export const WithPreselectedValue: Story = {
  args: {
    variants: "filled",
    label: "Pre-selected option",
    options: sampleOptions,
    defaultValue: "opt2",
  },
};
