import { Meta, StoryObj } from "@storybook/react-vite";
import { CandidateHeader } from "./header";

const meta = {
  component: CandidateHeader,
} satisfies Meta<typeof CandidateHeader>;

export default meta;
type Story = StoryObj<typeof CandidateHeader>;

export const Default: Story = {
  args: {},
};
