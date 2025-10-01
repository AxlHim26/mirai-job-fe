import { LocalImage } from "@/assets/images/local-image";
import { LocalIcon } from "@/assets/icons/local-icon";

export const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex w-full items-center justify-center">
      <div className="flex items-center bg-[#F8F8FD] h-screen px-[67px]">
        <div className="flex flex-col items-start justify-between gap-[90px]">
          <a href="/" className="flex items-center justify-center gap-2 ml-[35px]">
            <LocalIcon iconName="Logo" width={40} height={40} />
            <span className="text-[24px] text-[#202430] font-[700] leading-[36px]">
              JobHuntly
            </span>
          </a>
          <LocalImage imageName="auth_bg" />
        </div>
      </div>
      <div className="flex flex-1 flex-col items-center justify-center">
        {children}
      </div>
    </div>
  );
};
