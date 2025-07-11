import type { Meta, StoryObj } from "@storybook/react";
import { OverlayContainer } from "./overlay-container";

const meta: Meta<typeof OverlayContainer> = {
  title: "UI/OverlayContainer",
  component: OverlayContainer,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "OverlayContainer is responsible for rendering the active overlay component, based on the application's overlay state.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof OverlayContainer>;

export const Default: Story = {};
