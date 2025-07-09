import { Link } from "react-router-dom";

export const Resources = () => {
  const resources = [
    { label: "Help Docs", to: "#" },
    { label: "Guide", to: "#" },
    { label: "Updates", to: "#" },
    { label: "Contact Us", to: "#" },
  ];

  return (
    <div>
      <h3 className="text-white font-medium mb-6">Resources</h3>
      <ul className="space-y-4">
        {resources.map((item, index) => (
          <li key={index}>
            <Link
              to={item.to}
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
