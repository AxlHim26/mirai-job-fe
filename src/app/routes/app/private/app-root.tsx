import { Outlet } from "react-router-dom";
import { OverlayContainer, Spinner } from "@/components/ui";
import { AuthLoader } from "@/lib/auth-loader";
import { ProtectedRoute } from "@/lib/auth";

export const AppRouterRoot = () => {
  return (
    <>
      <AuthLoader
        renderLoading={() => (
          <div className="flex h-screen w-screen items-center justify-center">
            <Spinner size="xl" />
          </div>
        )}
      >
        <ProtectedRoute>
          <OverlayContainer />
          <Outlet />
        </ProtectedRoute>
      </AuthLoader>
    </>
  );
};
