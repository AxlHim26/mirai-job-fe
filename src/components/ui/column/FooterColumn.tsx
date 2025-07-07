import { Link } from "react-router-dom";

interface FooterColumnProps {
    title: string;
    items: Array<{
        name: string;
        link: string;
    }>;
}

const FooterColumn: React.FC<FooterColumnProps> = ({ title, items }) => (
  <div className="flex flex-col gap-4">
    <h1 className="text-white text-lg font-semibold">{title}</h1>
    {items.map((item, idx) => (
      <Link to={item.link} key={idx}>{item.name}</Link>
    ))}
  </div>
);

export default FooterColumn;
