import CompanyResultCard, { CompanyCardProps } from "./CompanyResultCard";

export default {
  title: "Components/CompanyResultCard",
  component: CompanyResultCard,
};

const sampleData: CompanyCardProps = {
  id: 1,
  name: "Figma Inc.",
  logo: "companyLogo", // dùng trong LocalImage
  jobsQuantity: 7,
};

export const Default = () => <CompanyResultCard {...sampleData} />;
