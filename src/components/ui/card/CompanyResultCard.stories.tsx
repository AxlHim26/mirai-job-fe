import type { Meta, StoryObj } from "@storybook/react";
import CompanyResultCard, { CompanyCardProps } from "./CompanyResultCard";

const meta: Meta<typeof CompanyResultCard> = {
  title: "Components/CompanyResultCard",
  component: CompanyResultCard,
  parameters: {
    docs: {
      description: {
        component: "Displays company information in card format including name, logo and number of jobs.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof CompanyResultCard>;

const sampleData: CompanyCardProps = {
  id: 1,
  name: "Figma Inc.",
  logo: "companyLogo", // dùng trong LocalImage
  jobsQuantity: 7,
};

export const Default: Story = {
  args: sampleData,
};
