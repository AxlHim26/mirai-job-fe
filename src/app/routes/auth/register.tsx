import { RegisterForm } from "@/features/auth";
import { useState } from "react";

const roles: { label: string; value: "ROLE_CANDIDATE" | "ROLE_RECRUITER" }[] = [
  { label: "Job Seeker", value: "ROLE_CANDIDATE" },
  { label: "Company", value: "ROLE_RECRUITER" },
];

const RegisterRoute = () => {
  const [roleName, setRoleName] = useState<"ROLE_CANDIDATE" | "ROLE_RECRUITER">(
    "ROLE_CANDIDATE"
  );
  const baseClass =
    "px-[7px] py-[12px] text-[16px] text-[#4640DE] font-[600] leading-[25.6px] transition-colors duration-300";
  const activeClass = "bg-[#E9EBFD]";

  return (
    <div className="flex flex-col items-center w-[408px]">
      <div className="flex mb-6">
        {roles.map((role) => (
          <button
            key={role.value}
            onClick={() => setRoleName(role.value)}
            className={`${baseClass} ${roleName === role.value ? activeClass : ""}`}
          >
            {role.label}
          </button>
        ))}
      </div>
      <h1 className="text-2xl font-bold text-[#202430] mb-6">
        Get more opportunities
      </h1>
      <button className="flex items-center justify-center gap-2 w-full border border-[#D6D6F2] text-[#4640DE] font-semibold py-2 px-6 rounded-md hover:bg-[#f4f4ff] transition-colors duration-200 mb-6">
        <span className="text-xl">+</span>
        <span>Sign Up with Google</span>
      </button>
      <div className="flex items-center w-full text-gray-400 text-sm mb-6">
        <div className="flex-1 h-px bg-gray-300" />
        <span className="px-4">Or sign up with email</span>
        <div className="flex-1 h-px bg-gray-300" />
      </div>
      <RegisterForm roleName={roleName} />
    </div>
  );
};

export default RegisterRoute;
