import { useState } from "react";
import { LocalIcon } from "@/assets/icons/local-icon";

const navItems = [
  { label: "Find Jobs", href: "#" },
  { label: "Browse Companies", href: "#" },
];

export const LandingHeader = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <header className="relative border-b border-b-[#f3f3fd]">
      {/* Top purple border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-[#7b3aed]" />
      <div className="relative flex items-center justify-between h-20 px-8 bg-white">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <LocalIcon iconName="Logo" />
          <span className="text-2xl font-semibold text-[#23272e]">
            JobHuntly
          </span>
        </div>
        {/* Nav */}
        <nav className="flex items-center gap-8">
          {navItems.map((item, idx) => (
            <a
              key={item.label}
              href={item.href}
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
            </a>
          ))}
        </nav>
        {/* Auth buttons */}
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="text-[#4f46e5] font-semibold hover:underline"
          >
            Login
          </a>
          <a
            href="#"
            className="bg-[#4f46e5] text-white font-semibold px-6 py-2 rounded shadow hover:bg-[#4338ca] transition"
          >
            Sign Up
          </a>
        </div>
      </div>
    </header>
  );
};
