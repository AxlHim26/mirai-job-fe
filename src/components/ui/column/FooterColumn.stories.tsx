import type { Meta, StoryObj } from "@storybook/react";
import FooterColumn from "./FooterColumn";

const meta: Meta<typeof FooterColumn> = {
  title: "Components/FooterColumn",
  component: FooterColumn,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `FooterColumn displays a vertical list of links grouped under a title, typically used in a website footer.`,
      },
    },
  },
  argTypes: {
    title: {
      control: "text",
      description: "The section title shown above the list of links",
    },
    items: {
      control: "object",
      description: "An array of link objects, each with a name and a URL path",
    },
  },
};

export default meta;

type Story = StoryObj<typeof FooterColumn>;

export const Default: Story = {
  args: {
    title: "Company",
    items: [
      { name: "About Us", link: "/about" },
      { name: "Careers", link: "/careers" },
      { name: "Contact", link: "/contact" },
    ],
  },
};
