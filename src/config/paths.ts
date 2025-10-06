export const paths = {
  home: {
    path: "/",
    getHref: () => "/",
  },

  common: {
    messages: {
      path: "messages",
      getHref: () => "messages",
    },
    settings: {
      path: "settings",
      getHref: () => "settings",
    },
    help: {
      path: "help",
      getHref: () => "help",
    },
  },

  auth: {
    path: "/auth",
    getHref: () => "/auth",
    register: {
      path: "/auth/register",
      getHref: (redirectTo?: string | null | undefined) =>
        `/auth/register${redirectTo ? `?redirectTo=${encodeURIComponent(redirectTo)}` : ""}`,
    },
    login: {
      path: "/auth/login",
      getHref: (redirectTo?: string | null | undefined) =>
        `/auth/login${redirectTo ? `?redirectTo=${encodeURIComponent(redirectTo)}` : ""}`,
    },
  },

  app: {
    root: {
      path: "/app",
      getHref: () => "/app",
    },
    candidate: {
      path: "/app/candidate",
      getHref: () => "/app/candidate",
    },
    recruiter: {
      path: "/app/recruiter",
      getHref: () => "/app/recruiter",
    },
    admin: {
      path: "/app/admin",
      getHref: () => "/app/admin",
    },
  },

  recruiter: {
    dashboard: {
      path: "dashboard",
      getHref: () => "/app/recruiter/dashboard",
    },
    applicants: {
      path: "applicants",
      getHref: () => "/app/recruiter/applicants",
    },
    profile: {
      path: "profile",
      getHref: () => "/app/recruiter/profile",
    },
    jobPostings: {
      path: "posting",
      getHref: () => "/app/recruiter/posting",
    },

    settings: {
      path: "settings",
      getHref: () => "/app/recruiter/settings",
      overview: {
        path: "",
        getHref: () => "/app/recruiter/settings",
      },
      social: {
        path: "social",
        getHref: () => "/app/recruiter/settings/social",
      },
      team: {
        path: "team",
        getHref: () => "/app/recruiter/settings/team",
      },
    },
  },

  candidate: {
    dashboard: {
      path: "dashboard",
      getHref: () => "/app/candidate/dashboard",
    },
    applications: {
      path: "applications",
      getHref: () => "/app/candidate/applications",
    },
    search: {
      path: "search",
      getHref: () => "/app/candidate/search",
    },
    browse: {
      path: "browse",
      getHref: () => "/app/candidate/browse",
    },
    profile: {
      path: "profile",
      getHref: () => "/app/candidate/profile",
    },
    settings: {
      path: "settings",
      getHref: () => "/app/candidate/settings",

      profile: {
        path: "",
        getHref: () => "/app/candidate/settings",
      },

      loginDetail: {
        path: "loginDetail",
        getHref: () => "/app/candidate/settings/loginDetail",
      },
      notifications: {
        path: "notifications",
        getHref: () => "/app/candidate/settings/notifications",
      },
    },
  },

  notFound: {
    path: "*",
    getHref: () => "*",
  },
} as const;
