import { useEffect, useState } from "react";
import { useAuthStore } from "@/stores/auth-store";
import { useRefreshTokenQuery } from "@/features/auth/api/refresh-token";
import { useUserQuery } from "@/features/auth";

export const AuthLoader = ({
  children,
  renderLoading,
}: {
  children: React.ReactNode;
  renderLoading?: () => React.ReactNode;
}) => {
  const { setAccessToken, setUser } = useAuthStore();
  const [ready, setReady] = useState(false);

  const refreshTokenQuery = useRefreshTokenQuery();
  const userQuery = useUserQuery();

  useEffect(() => {
    const loadAuth = async () => {
      try {
        const res = await refreshTokenQuery.refetch();
        const token = res.data?.data.token;
        if (token) {
          console.log("AuthLoader: set access token", token);
          setAccessToken(token);
        } else {
          setReady(true);
          return;
        }
        const userRes = await userQuery.refetch();
        if (userRes.data?.data) {
          console.log("AuthLoader: set user", userRes.data.data);
          setUser(userRes.data.data);
        } else {
          setReady(true);
          return;
        }
      } catch (err) {
        console.error("AuthLoader error", err);
      } finally {
        setReady(true);
      }
    };
    loadAuth();
  }, []);

  if (!ready || refreshTokenQuery.isFetching || userQuery.isFetching) {
    return renderLoading ? renderLoading() : <div>Loading...</div>;
  }

  return <>{children}</>;
};
