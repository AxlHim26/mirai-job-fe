import { Navigate, useLocation } from 'react-router-dom';
import { useAuthStore } from '@/stores/auth-store';
import { paths } from '@/config/paths';

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const user = useAuthStore((state) => state.user);
  const location = useLocation();

  if (user == null) {
    return <Navigate to={paths.auth.login.getHref(location.pathname)} replace />;
  }

  return <>{children}</>;
};
