import { Meta, StoryObj } from "@storybook/react";
import { Spinner } from "./spinner";

const meta = {
  component: Spinner,
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof Spinner>;

export const FilledSm: Story = {
  args: {
    size: "sm",
  },
};