import { AuthLayout } from "@/components/layouts";
import { OverlayContainer } from "@/components/ui";
import { Outlet } from "react-router-dom";

const AuthRoot = () => {
  return (
    <>
      <OverlayContainer />
      <AuthLayout>
        <Outlet />
      </AuthLayout>
    </>
  );
};

export default AuthRoot;
