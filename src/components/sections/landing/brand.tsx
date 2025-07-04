import { LocalIcon } from "@/assets/icons/local-icon";

export const Brand = () => {
  return (
    <div className="lg:col-span-1">
      <div className="flex items-center gap-2 mb-4">
        <LocalIcon iconName="Logo" />
        <span className="text-xl font-semibold">JobHuntly</span>
      </div>
      <p className="text-gray-400 text-sm leading-relaxed">
        Great platform for the job seeker that passionate about startups. Find
        your dream job easier.
      </p>
    </div>
  );
};
