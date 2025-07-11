import FooterColumn from "./FooterColumn";

export default {
  title: "Components/FooterColumn",
  component: FooterColumn,
};

const sampleItems = [
  { name: "About Us", link: "/about" },
  { name: "Careers", link: "/careers" },
  { name: "Contact", link: "/contact" },
];

export const Default = () => (
  <FooterColumn title="Company" items={sampleItems} />
);
