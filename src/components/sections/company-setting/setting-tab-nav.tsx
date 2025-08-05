import { NavLink } from "react-router-dom";

const tabs = [
  { name: "Overview", path: "/app/recruiter/setting" },
  { name: "Social Links", path: "/app/recruiter/setting/social" },
  { name: "Team", path: "/app/recruiter/setting/team" },
];

export const SettingTabNav = () => {
  return (
    <nav className="flex space-x-6 border-b pb-2 mb-6 text-sm text-gray-600 border-gray-300">
      {tabs.map((tab) => (
        <NavLink
          key={tab.name}
          to={tab.path}
          end={tab.path === "/app/recruiter/setting"}
          className={({ isActive }) =>
            `pb-2 ${
              isActive
                ? "text-black font-medium border-b-2 border-indigo-500"
                : "hover:text-black"
            }`
          }
        >
          {tab.name}
        </NavLink>
      ))}
    </nav>
  );
};
