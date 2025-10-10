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
    {
      path: paths.home.children.browseCompanies.getHref(),
      lazy: () =>
        import("./routes/app/public/browse-companies").then(withClient),
    },
    {
      path: paths.home.children.findJobs.getHref(),
      lazy: () => import("./routes/app/public/find-jobs").then(withClient),
    },
    {
      path: paths.home.children.searchResults.getHref(),
      lazy: () => import("./routes/app/public/search-results").then(withClient),
    },
    {
      path: paths.home.children.jobDesc.path,
      lazy: () => import("./routes/app/public/job-desc-page").then(withClient),
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
          path: paths.auth.register.path,
          lazy: () => import("./routes/auth/register").then(withClient),
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
    {
      path: paths.recruiter.applicants.path,
      lazy: () =>
        import("./routes/app/private/recruiter/applicants").then(withClient),
    },
    {
      path: paths.recruiter.applicantDetail.path,
      lazy: () =>
        import("./routes/app/private/recruiter/applicant-detail").then(
          withClient
        ),
    },
    {
      path: paths.recruiter.profile.path,
      lazy: () =>
        import("./routes/app/private/recruiter/company-profile").then(
          withClient
        ),
    },
    {
      path: paths.recruiter.jobPostings.path,
      lazy: () =>
        import("./routes/app/private/recruiter/jobs").then(withClient),
    },
    {
      path: paths.recruiter.postJob.path,
      lazy: () =>
        import("./routes/app/private/recruiter/post-job").then(withClient),
    },
    {
      path: paths.recruiter.settings.path,
      lazy: () =>
        import("./routes/app/private/recruiter/company-setting").then(
          withClient
        ),
      children: [
        {
          index: true,
          lazy: () =>
            import(
              "@/features/recruiter/components/setting/components/overview-form"
            ).then(withClient),
        },
        {
          path: paths.recruiter.settings.social.path,
          lazy: () =>
            import(
              "@/features/recruiter/components/setting/components/social-links-form"
            ).then(withClient),
        },
        {
          path: paths.recruiter.settings.team.path,
          lazy: () =>
            import(
              "@/features/recruiter/components/setting/components/team"
            ).then(withClient),
        },
      ],
    },
    {
      path: paths.recruiter.help.path,
      lazy: () =>
        import("./routes/app/private/recruiter/help-center-recruiter").then(
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
        import(
          "./routes/app/private/candidate/dashboard-applicant-candidate"
        ).then(withClient),
    },
    {
      path: paths.candidate.profile.path,
      lazy: () =>
        import("./routes/app/private/candidate/profile-candidate").then(
          withClient
        ),
    },
    {
      path: paths.candidate.browse.path,
      lazy: () =>
        import(
          "./routes/app/private/candidate/browse-companies-candidate"
        ).then(withClient),
    },
    {
      path: paths.candidate.dashboard.path,
      lazy: () =>
        import(
          "./routes/app/private/candidate/dashboard-applicant-candidate"
        ).then(withClient),
    },
    {
      path: paths.candidate.applications.path,
      lazy: () =>
        import(
          "./routes/app/private/candidate/application-history-candidate"
        ).then(withClient),
    },
    {
      path: paths.candidate.findJobs.path,
      lazy: () =>
        import("./routes/app/private/candidate/find-jobs-candidate").then(
          withClient
        ),
    },
    {
      path: paths.candidate.jobDetail.path,
      lazy: () =>
        import("./routes/app/private/candidate/job-desc-candidate").then(
          withClient
        ),
    },
    {
      path: paths.candidate.jobDesc.path,
      lazy: () =>
        import("./routes/app/private/candidate/job-desc-candidate").then(
          withClient
        ),
    },

    {
      path: paths.candidate.help.path,
      lazy: () =>
        import("./routes/app/private/candidate/help-center-candidate").then(
          withClient
        ),
    },

    {
      path: paths.candidate.search.path,
      lazy: () =>
        import("./routes/app/private/candidate/job-desc-candidate").then(
          withClient
        ),
    },

    {
      path: paths.candidate.settings.path,
      lazy: () =>
        import("./routes/app/private/candidate/settings").then(withClient),
      children: [
        {
          index: true,
          lazy: () =>
            import(
              "@/features/candidate/components/settings/components/profile-form"
            ).then(withClient),
        },
        {
          path: paths.candidate.settings.loginDetail.path,
          lazy: () =>
            import(
              "@/features/candidate/components/settings/components/login-detail-container"
            ).then(withClient),
        },
        {
          path: paths.candidate.settings.notifications.path,
          lazy: () =>
            import(
              "@/features/candidate/components/settings/components/notifications"
            ).then(withClient),
        },
      ],
    },

    ...commonRouterChildren(withClient),
  ];
};
