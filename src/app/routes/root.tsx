import { Outlet } from "react-router-dom";
import { OverlayContainer } from "@/components/ui";

export const AppRouterRoot = () => {
  return (
    <>
      <OverlayContainer />
      <Outlet />
    </>
  );
};
