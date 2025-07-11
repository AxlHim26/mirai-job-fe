import type { Meta, StoryObj } from "@storybook/react";
import HorizontalCategoryCarousel from "./CategoryCarousel";

const meta: Meta<typeof HorizontalCategoryCarousel> = {
  title: "Components/CategoryCarousel",
  component: HorizontalCategoryCarousel,
  parameters: {
    docs: {
      description: {
        component: "A carousel displays a horizontal list of categories with left/right scroll buttons. Each category is a selectable card.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof HorizontalCategoryCarousel>;

export const Default: Story = {
  render: () => <HorizontalCategoryCarousel />,
};
