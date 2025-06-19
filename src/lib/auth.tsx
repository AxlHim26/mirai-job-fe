import * as React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Navigate, useLocation } from 'react-router';
import { api } from './api-client';
import { User } from '@/types/api';
import { paths } from '@/config/paths';

const getUser = async (): Promise<User> => {
  const response = await api.get('/auth/me');
  return response.data;
};

export const useUser = () => {
  return useQuery<User>({
    queryKey: ['auth-user'],
    queryFn: getUser,
    staleTime: 5 * 60 * 1000,
  });
};

export const AuthLoader = ({
  children,
  renderLoading,
}: {
  children: React.ReactNode;
  renderLoading?: () => React.ReactNode;
}) => {
  const user = useUser();

  if (user.isLoading) {
    return <>{renderLoading ? renderLoading() : null}</>;
  }

  return <>{children}</>;
};

/**
 * How to use:
 * ```tsx
 * <ProtectedRoute>
 *  <YourComponent />
 * </ProtectedRoute>
 * ```
 */
export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const user = useUser();
  const location = useLocation();

  if (!user.data) {
    return (
      <Navigate to={paths.auth.login.getHref(location.pathname)} replace />
    );
  }

  return children;
};
