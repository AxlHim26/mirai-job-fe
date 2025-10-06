import { NavLink } from "react-router-dom";

const tabs = [
  { name: "My Profile", path: "/app/candidate/settings" },
  { name: "Login Detail", path: "/app/candidate/settings/loginDetail" },
  { name: "Notifications", path: "/app/candidate/settings/notifications" },
];

export const TabNav = () => {
  return (
    <nav className="flex space-x-6 border-b pb-2 mb-6 text-sm text-gray-600 border-gray-300">
      {tabs.map((tab) => (
        <NavLink
          key={tab.name}
          to={tab.path}
          end={tab.path === "/app/candidate/settings"}
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
