import { createBrowserRouter } from "react-router-dom";
import { QueryClient } from "@tanstack/react-query";
// import { paths } from '@/config/paths';

/**
 * convert module to inject loader, action if have
 */
const convert = (queryClient: QueryClient) => (module: any) => {
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
      path: "",
      lazy: () =>
<<<<<<< HEAD
        import("./routes/app/root").then((mod) => {
=======
        import('./routes/root').then((mod) => {
>>>>>>> develop
          const { AppRouterRoot } = mod;
          return { Component: AppRouterRoot };
        }),
      children: [
        {
<<<<<<< HEAD
          path: "",
          lazy: () => import("./routes/app/public/landing").then(withClient),
        },
        {
          path: "/company-profile",
          lazy: () =>
            import("./routes/app/public/company-profile-page").then(withClient),
        },
        {
          path: "profile",
          lazy: () => import("./routes/app/private/profile").then(withClient),
=======
          path: '',
          lazy: () =>
            import('./routes/app/public/browse-companies').then(withClient),
        },
        {
          path: 'search',
          lazy: () =>
            import('./routes/app/public/search-companies').then(withClient),
        },
        // authentication routes
        {
          path: 'auth',
          lazy: () =>
            import('./routes/auth/auth-root').then(withClient),
          children: [
            {
              path:"login",
              lazy: () =>
                import('./routes/auth/login').then(withClient),
            },
            {
              path:"register",
              lazy: () =>
                import('./routes/auth/register').then(withClient),
            }
          ]
>>>>>>> develop
        },
      ],
    },
    {
<<<<<<< HEAD
      path: "*",
      lazy: () => import("./routes/app/not-found").then(withClient),
=======
      path: '*',
      lazy: () =>
        import('./routes/not-found').then(withClient),
>>>>>>> develop
    },
  ]);
};
