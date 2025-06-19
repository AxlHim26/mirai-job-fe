import { createBrowserRouter } from 'react-router-dom';
import { QueryClient } from '@tanstack/react-query';
// import { paths } from '@/config/paths';

/**
 * convert module to inject loader, action if have
 */
const convert =
  (queryClient: QueryClient) => (module: any) => {
    const { clientLoader, clientAction, default: Component } = module;
    return {
      loader: clientLoader?.(queryClient),
      action: clientAction?.(queryClient),
      Component,
    };
  };

/**
 * create main router with convert
 */
export const createRouter = (queryClient: QueryClient) => {
  const withClient = convert(queryClient);

  return createBrowserRouter([
    {
      path: '',
      lazy: () =>
        import('./routes/app/root').then((mod) => {
          const { AppRouterRoot } = mod;
          return { Component: AppRouterRoot };
        }),
      children: [
        {
          path: '',
          lazy: () =>
            import('./routes/app/public/landing').then(withClient),
        },
        {
          path: 'profile',
          lazy: () =>
            import('./routes/app/private/profile').then(withClient),
        },
      ],
    },
    {
      path: '*',
      lazy: () =>
        import('./routes/app/not-found').then(withClient),
    },
  ]);
};
