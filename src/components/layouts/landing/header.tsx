import { LocalIcon } from "@/assets/icons/local-icon";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { DEFAULT_PATH } from "@/consts/default-path";

export const LandingHeader = () => {
  const isPreviousLoggedIn =
    localStorage.getItem("previousLoggedIn") === "true";
  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center py-0 px-[124px] w-full max-w-[2000px]">
      {/* Logo */}
      <div className="flex items-center gap-12 self-stretch">
        <div
          className="flex items-center gap-2 self-stretch cursor-pointer"
          onClick={() => navigate("/")}
        >
          <LocalIcon
            iconName="Logo"
            width={40}
            height={40}
          />
          <h1 className="font-bold text-2xl">JobHunterly</h1>
        </div>

        {/* Navigation Tabs */}
        <div className="gap-4 self-stretch justify-center items-center hidden md:flex">
          <NavLink
            to="/find-jobs"
            className={({ isActive }) =>
              `py-2 font-medium text-lg ${
                isActive
                  ? "border-b-[3px] border-[#4640DE] text-[#4640DE]"
                  : "text-[#515B6F]"
              }`
            }
          >
            Find Jobs
          </NavLink>

          <NavLink
            to="/browse-companies"
            className={({ isActive }) =>
              `py-2 font-medium text-lg ${
                isActive
                  ? "border-b-[3px] border-[#4640DE] text-[#4640DE]"
                  : "text-[#515B6F]"
              }`
            }
          >
            Browse Companies
          </NavLink>

          <NavLink
            to="/search-results"
            className={({ isActive }) =>
              `py-2 font-medium text-lg ${
                isActive
                  ? "border-b-[3px] border-[#4640DE] text-[#4640DE]"
                  : "text-[#515B6F]"
              }`
            }
          >
            Search Companies
          </NavLink>
        </div>
      </div>

      {/* Auth Buttons */}
      <div className="gap-4 space-between items-center h-[78px] hidden md:flex">
        {isPreviousLoggedIn ? (
          <Link
            to={
              DEFAULT_PATH[
                localStorage
                  .getItem("role")
                  ?.toString() as keyof typeof DEFAULT_PATH
              ] ?? "/"
            }
            className="text-[#4640DE] font-medium text-lg"
          >
            Open App
          </Link>
        ) : (
          <>
            <Link
              to="/auth/login"
              className="text-[#4640DE] px-4 py-3.5 font-medium text-lg cursor-pointer border-r border-[#D6DDEB]"
            >
              Login
            </Link>
            <Link
              to="/auth/register"
              className="bg-[#4640DE] text-white px-4 py-3.5 rounded font-medium text-lg cursor-pointer"
            >
              Sign Up
            </Link>
          </>
        )}
      </div>

      {/* Mobile menu */}
      <div className="flex md:hidden">
        <LocalIcon
          iconName="menu"
          width={40}
          height={40}
          className="text-[#4640DE] cursor-pointer"
        />
      </div>
    </div>
  );
};
