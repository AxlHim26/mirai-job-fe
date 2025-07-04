import { LocalIcon } from "@/assets/icons/local-icon";
import { AuthButtons, Navigation } from "@/components/sections/landing";

export const LandingHeader = () => {
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
        <Navigation />

        {/* Auth buttons */}
        <AuthButtons />
      </div>
    </header>
  );
};
