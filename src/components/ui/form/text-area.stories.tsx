import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "./text-area";

const meta: Meta<typeof Textarea> = {
  title: "UI/Textarea",
  component: Textarea,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A customizable textarea component for multiline text input. Supports different styles (`filled`, `outlined`), integrates with `react-hook-form`, and displays label & error states.",
      },
    },
  },
  argTypes: {
    variants: {
      control: "select",
      options: ["filled", "outlined"],
      description: "Visual style of the textarea input.",
    },
    className: {
      control: "text",
      description: "Custom CSS class for the textarea element.",
    },
    label: {
      control: "text",
      description: "Optional label displayed above the textarea field.",
    },
    error: {
      control: "object",
      description: "Field error object from `react-hook-form`.",
    },
    register: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: {
    variants: "filled",
    label: "Description",
    placeholder: "Write something here...",
    register: {},
  },
};

export const Outlined: Story = {
  args: {
    variants: "outlined",
    label: "Outlined style textarea",
    placeholder: "Write something here...",
    register: {},
  },
};

export const WithPreFilledValue: Story = {
  args: {
    variants: "filled",
    label: "Pre-filled textarea",
    defaultValue: "This is some pre-filled text.",
    register: {},
  },
};
