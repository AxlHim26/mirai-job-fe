import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./input";
import { useForm } from "react-hook-form";

const meta: Meta<typeof Input> = {
  title: "UI/Input",
  component: Input,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Input is a custom input component integrated with react-hook-form. It supports different types (email, password, etc.) and displays errors and labels.",
      },
    },
  },
  argTypes: {
    label: {
      control: "text",
      description: "Label text for the input field.",
    },
    error: {
      control: "object",
      description: "Error object with message (from react-hook-form).",
    },
    type: {
      control: "select",
      options: ["text", "email", "password", "number", "date", "select"],
      description: "HTML input type",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  render: (args) => {
    const { register } = useForm();
    return <Input {...args} register={register("email")} />;
  },
  args: {
    label: "Email Address",
    type: "email",
    error: undefined,
  },
};

export const WithError: Story = {
  render: (args) => {
    const { register } = useForm();
    return <Input {...args} register={register("email")} />;
  },
  args: {
    label: "Email Address",
    type: "email",
    error: { message: "Email is required" },
  },
};
