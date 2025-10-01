import { Meta, StoryObj } from "@storybook/react-vite";
import { RecruiterHeader } from "./header";

const meta = {
  component: RecruiterHeader,
} satisfies Meta<typeof RecruiterHeader>;

export default meta;
type Story = StoryObj<typeof RecruiterHeader>;

export const Default: Story = {
  args: {},
};
