import { createBrowserRouter } from "react-router-dom";
import { QueryClient } from "@tanstack/react-query";
import { paths } from "@/config/paths";

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
    //landing router
    {
      path: paths.home.path,
      lazy: () => import("./routes/app/public/landing").then(withClient),
    },
    //app router
    {
      path: paths.app.root.path,
      lazy: () =>
        import("./routes/app/private/app-root").then((mod) => {
          const { AppRouterRoot } = mod;
          return { Component: AppRouterRoot };
        }),
      children: [
        // candidate router for app
        {
          path: paths.app.candidate.path, //layout for candidate
          lazy: () =>
            import("./routes/app/private/candidate/candidate-root").then(
              withClient
            ),
          children: [...candidateRouterChildren(withClient)],
        },
        //recruiter router for app
        {
          path: paths.app.recruiter.path, //layout for recruiter
          lazy: () =>
            import("./routes/app/private/recruiter/recruiter-root").then(
              withClient
            ),
          children: [...recruiterRouterChildren(withClient)],
        },
      ],
    },
    //auth router
    {
      path: paths.auth.path,
      lazy: () => import("./routes/auth/auth-root").then(withClient),
      children: [
        {
          path: paths.auth.login.path,
          lazy: () => import("./routes/auth/login").then(withClient),
        },
        {
          path: 'recruiter', // layout for recruiter
          lazy: () =>
            import('./routes/app/private/recruiter/RecruiterRoute').then(withClient),
        },
        {
          path: 'dashboard',
          lazy: () =>
            import('./routes/app/public/dashboard').then(withClient),
        },
        // authentication routes
        {
          path: 'auth',
          lazy: () =>
            import('./routes/auth/auth-root').then(withClient),
          children: [
            {
              path: "login",
              lazy: () =>
                import('./routes/auth/login').then(withClient),
            },
            {
              path: paths.auth.register.path,
              lazy: () =>
                import("./routes/auth/register").then(withClient),
            }
          ]
        },
      ],
    },
    //not found router
    {
      path: paths.notFound.path,
      lazy: () => import("./routes/auth/not-found").then(withClient),
    },
  ]);
};

/**
 * common router children
 * @param withClient
 * @returns
 */
const commonRouterChildren = (withClient: ReturnType<typeof convert>) => {
  return [
    {
      path: paths.common.messages.path,
      lazy: () =>
        import("./routes/app/private/chat/chat-root").then(withClient),
    },
  ];
};

/**
 * recruiter router children
 * @param withClient
 * @returns
 */
const recruiterRouterChildren = (withClient: ReturnType<typeof convert>) => {
  return [
    {
      path: paths.app.recruiter.path,
      lazy: () =>
        import("./routes/app/private/recruiter/dashboard-recruiter").then(
          withClient
        ),
    },
    ...commonRouterChildren(withClient),
  ];
};

/**
 * candidate router children
 * @param withClient
 * @returns
 */
const candidateRouterChildren = (withClient: ReturnType<typeof convert>) => {
  return [
    {
      path: paths.app.candidate.path,
      lazy: () =>
        import("./routes/app/private/candidate/dashboard-candidate").then(
          withClient
        ),
    },
    ...commonRouterChildren(withClient),
  ];
};
