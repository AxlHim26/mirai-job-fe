import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import * as React from 'react';

import { Spinner } from '@/components/ui/spinner';
import { AuthLoader } from '@/lib/auth';
import { queryConfig } from '@/lib/react-query';
<<<<<<< HEAD
=======
import { ToastContainer } from '@/components/ui';
>>>>>>> develop

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: queryConfig,
      }),
  );

  return (
    <React.Suspense
      fallback={
        <div className="flex h-screen w-screen items-center justify-center">
          <Spinner size="xl" />
        </div>
      }
    >
          <QueryClientProvider client={queryClient}>
            <AuthLoader
              renderLoading={() => (
                <div className="flex h-screen w-screen items-center justify-center">
                  <Spinner size="xl" />
                </div>
              )}
            >
<<<<<<< HEAD
=======
              <ToastContainer />
>>>>>>> develop
              {children}
            </AuthLoader>
          </QueryClientProvider>
    </React.Suspense>
  );
};