import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "./button";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    children: "Click me",
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Filled: Story = {
  args: {
    variant: "filled",
    size: "md",
  },
};

export const Outlined: Story = {
  args: {
    variant: "outlined",
    size: "md",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    size: "md",
  },
};

export const WithStartIcon: Story = {
  args: {
    variant: "filled",
    size: "md",
    startIcon: <ArrowLeft />,
    children: "Back",
  },
};

export const WithEndIcon: Story = {
  args: {
    variant: "filled",
    size: "md",
    endIcon: <ArrowRight />,
    children: "Next",
  },
};

export const IconButton: Story = {
  args: {
    variant: "ghost",
    size: "icon",
    startIcon: <ArrowRight />,
    "aria-label": "icon only",
  },
};
