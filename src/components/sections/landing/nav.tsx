import { useState } from "react";
import { Link } from "react-router-dom";

export const Navigation = () => {
  const navItems = [
    { label: "Find Jobs", href: "#" },
    { label: "Browse Companies", href: "#" },
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <nav className="flex items-center gap-8">
      {navItems.map((item, idx) => (
        <Link
          key={item.label}
          to={item.href}
          onClick={(e) => {
            e.preventDefault();
            setActiveIndex(idx);
          }}
          className={
            idx === activeIndex
              ? "text-[#4f46e5] font-medium border-b-4 border-[#6366f1] pb-2"
              : "text-[#6b7280] font-medium hover:text-[#23272e] transition pb-2"
          }
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
};
