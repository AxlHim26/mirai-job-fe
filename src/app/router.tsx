import { createBrowserRouter } from "react-router-dom";
import { QueryClient } from "@tanstack/react-query";
import { paths } from "@/config/paths";
// import { paths } from '@/config/paths';

/**
 * convert module to inject loader, action if have
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
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
      path: paths.home.path,
      lazy: () => import("./routes/app/public/landing").then(withClient),
    },
    {
      path: paths.app.root.path,
      lazy: () =>
        import("./routes/app/private/app-root").then((mod) => {
          const { AppRouterRoot } = mod;
          return { Component: AppRouterRoot };
        }),
      children: [
        {
          path: "search-results",
          lazy: () =>
            import("./routes/app/public/search-results").then(withClient),
        },
        {
          path: paths.app.candidate.path, //layout for candidate
          lazy: () =>
            import("./routes/app/private/candidate/candidate-root").then(
              withClient
            ),
          children: [
            {
              path: "",
              lazy: () =>
                import(
                  "./routes/app/private/candidate/dashboard-candidate"
                ).then(withClient),
            },
            {
              path: "message",
              lazy: () =>
                import("./routes/app/private/candidate/dashboard-message").then(
                  withClient
                ),
            },
          ],
        },
        //app router
        {
          path: paths.app.recruiter.path, //layout for recruiter
          lazy: () =>
            import("./routes/app/private/recruiter/recruiter-root").then(
              withClient
            ),
          children: [
            {
              path: "",
              lazy: () =>
                import(
                  "./routes/app/private/recruiter/dashboard-recruiter"
                ).then(withClient),
            },
            {
              path: "message",
              lazy: () =>
                import("./routes/app/private/recruiter/dashboard-message").then(
                  withClient
                ),
            },
          ],
        },
      ],
    },
    {
      path: paths.auth.path,
      lazy: () => import("./routes/auth/auth-root").then(withClient),
      children: [
        {
          path: paths.auth.login.path,
          lazy: () => import("./routes/auth/login").then(withClient),
        },
        {
          path: paths.auth.register.path,
          lazy: () => import("./routes/auth/register").then(withClient),
        },
      ],
    },
    {
      path: paths.notFound.path,
      lazy: () => import("./routes/auth/not-found").then(withClient),
    },
  ]);
};
