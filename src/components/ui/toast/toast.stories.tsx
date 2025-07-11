import type { Meta, StoryObj } from "@storybook/react";
import { Toast } from "./toast";

const meta: Meta<typeof Toast> = {
  title: "UI/Toast",
  component: Toast,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Toast displays brief messages to inform users about the status of an operation (e.g., success, error, warning, info).",
      },
    },
  },
  args: {
    title: "Notification",
    message: "This is a toast message.",
    type: "info",
    variant: "filled",
  },
  argTypes: {
    type: {
      control: "select",
      options: ["info", "success", "error", "warning"],
    },
    variant: {
      control: "select",
      options: ["filled", "outlined", "ghost"], // nếu Toast hỗ trợ các loại này
    },
  },
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const Default: Story = {
  args: {
    variant: "ghost",
  },
};
