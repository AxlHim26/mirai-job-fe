import type { Meta, StoryObj } from "@storybook/react";
import { z } from "zod";
import { Form } from "./form";
import { Input } from "./input";

const meta: Meta<typeof Form> = {
  title: "Form/FormWrapper",
  component: Form,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `FormWrapper is a reusable form component that wraps react-hook-form and integrates with Zod for validation.`,
      },
    },
  },
  argTypes: {
    className: {
      control: "text",
      description: "Optional class name to style the form wrapper",
    },
    schema: {
      table: {
        disable: true,
      },
    },
    onSubmit: {
      action: "submitted",
      description: "Callback function when the form is successfully submitted",
    },
    children: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Form>;

const schema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export const Default: Story = {
  args: {
    schema,
    onSubmit: (data: any) => {
      console.log("Form submitted:", data);
    },
    children: (methods) => (
      <div className="space-y-4">
        <Input
          type="email"
          label="Email"
          register={methods.register("email")}
        />
        <Input
          type="password"
          label="Password"
          register={methods.register("password")}
        />
      </div>
    ),
  },
};
