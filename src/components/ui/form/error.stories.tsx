import type { Meta, StoryObj } from "@storybook/react";
import { Error } from "./error";

const meta: Meta<typeof Error> = {
  title: "UI/Error",
  component: Error,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Error is a component used to display form validation error messages. If no error message is provided, it renders nothing.",
      },
    },
  },
  argTypes: {
    errorMessage: {
      control: "text",
      description: "The error message to be displayed. If undefined, nothing is rendered.",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Error>;

export const Default: Story = {
  args: {
    errorMessage: "This field is required.",
  },
};

export const NoError: Story = {
  args: {
    errorMessage: undefined,
  },
};
