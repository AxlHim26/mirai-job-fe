import type { Meta, StoryObj } from "@storybook/react";
import { Label } from "./label";

const meta: Meta<typeof Label> = {
  title: "UI/Label",
  component: Label,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Label component used to wrap form fields. It helps associate labels with input elements and improves accessibility.",
      },
    },
  },
  argTypes: {
    htmlFor: {
      control: "text",
      description: "ID of the element this label is associated with.",
    },
    className: {
      control: "text",
      description: "Custom class names for styling the label.",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {
  render: (args) => (
    <Label {...args}>
      <div style={{ padding: "1rem" }}>This is content inside the Label.</div>
    </Label>
  ),
  args: {
    htmlFor: "email",
  },
};
