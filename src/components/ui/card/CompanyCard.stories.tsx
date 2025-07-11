import type { Meta, StoryObj } from "@storybook/react";
import CompanyCard from "./CompanyCard";

const meta: Meta<typeof CompanyCard> = {
  title: "Components/CompanyCard",
  component: CompanyCard,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Displays company information including name, description, number of jobs and tags.",
      },
    },
  },
  argTypes: {
    name: { control: "text" },
    logo: { control: "text" },
    jobsQuantity: { control: "number" },
    description: { control: "text" },
    tags: { control: "array" },
    onClick: { action: "clicked" }
  },
};

export default meta;

type Story = StoryObj<typeof CompanyCard>;

export const Default: Story = {
  args: {
    id: 1,
    name: "TechNova Inc.",
    logo: "https://via.placeholder.com/80x40.png?text=Logo",
    jobsQuantity: 12,
    description: "A leading technology company building scalable solutions.",
    tags: ["Technology", "Innovation", "Remote"],
  },
};
