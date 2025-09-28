import { Meta, StoryObj } from "@storybook/react-vite";
import { AppSideBar } from "./side-bar";

const meta = {
  component: AppSideBar,
} satisfies Meta<typeof AppSideBar>;

export default meta;
type Story = StoryObj<typeof AppSideBar>;

export const Default: Story = {
  args: {},
};
