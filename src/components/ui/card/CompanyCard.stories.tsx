import CompanyCard, { CompanyCardProps } from "./CompanyCard";

export default {
  title: "Components/CompanyCard",
  component: CompanyCard,
};

const sampleData: CompanyCardProps = {
  id: 1,
  name: "TechNova Inc.",
  logo: "https://via.placeholder.com/80x40.png?text=Logo", // placeholder image
  jobsQuantity: 12,
  description: "A leading technology company building scalable solutions.",
  tags: ["Technology", "Innovation", "Remote"],
};

export const Default = () => <CompanyCard {...sampleData} />;