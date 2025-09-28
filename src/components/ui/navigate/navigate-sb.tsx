import { NavLink } from "react-router-dom";
import { SideBarIcon, SideBarTitle } from "@/consts";

type NavigateSideBarProps = {
  titles: SideBarTitle[];
  icons: SideBarIcon[];
};

export const NavigateSideBar = ({ titles, icons }: NavigateSideBarProps) => {
  return (
    <div className="flex flex-col">
      {titles.map((title, index) => (
        <NavLink
          key={index}
          to={title.path}
          className={({ isActive }) =>
            `flex items-center text-[16px] font-medium leading-[25.6px]
    hover:bg-[#e6e9f4] gap-4 px-4 py-3 transition
    ${
      isActive
        ? "bg-[#eff1ff] text-[#4640DE] border-l-4 border-[#4640DE]"
        : "text-[#7C8493] border-l-4 border-transparent"
    }`
          }
        >
          {({ isActive }) => (
            <>
              {isActive ? icons[index].active : icons[index].inactive}
              <span>{title.title}</span>
            </>
          )}
        </NavLink>
      ))}
    </div>
  );
};
