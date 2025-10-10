export const paths = {
  home: {
    path: "/",
    getHref: () => "/",
    children: {
      searchResults: {
        path: "search-results",
        getHref: () => "/search-results",
      },
      findJobs: {
        path: "find-jobs",
        getHref: () => "/find-jobs",
      },
      browseCompanies: {
        path: "browse-companies",
        getHref: () => "/browse-companies",
      },
      jobDesc: {
        path: "job-desc/:jobId",
        getHref: (jobId: string) => `/job-desc/${jobId}`,
      },
    },
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
    applicantDetail: {
      path: "applicants/:id",
      getHref: (id: string) => `/app/recruiter/applicants/${id}`,
    },
    profile: {
      path: "profile",
      getHref: () => "/app/recruiter/profile",
    },
    jobPostings: {
      path: "posting",
      getHref: () => "/app/recruiter/posting",
    },
    postJob: {
      path: "post-job",
      getHref: () => "/app/recruiter/post-job",
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
    help: {
      path: "help",
      getHref: () => "/app/recruiter/help",
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
    findJobs: {
      path: "find-jobs",
      getHref: () => "/app/candidate/find-jobs",
    },
    jobDetail: {
      path: "find-jobs/:jobId",
      getHref: (jobId: string) => `/app/candidate/find-jobs/${jobId}`,
    },
    search: {
      path: "search",
      getHref: () => "/app/candidate/search",
    },
    browse: {
      path: "browse",
      getHref: () => "/app/candidate/browse",
    },
    jobDesc: {
      path: "job-desc",
      getHref: () => "/app/candidate/job-desc",
    },
    help: {
      path: "help",
      getHref: () => "/app/candidate/help",
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
        path: "login-detail",
        getHref: () => "/app/candidate/settings/login-detail",
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
