export const paths = {
  home: {
    path: '/',
    getHref: () => '/',
  },

  auth: {
    path: '/auth',
    getHref: () => '/auth',
    register: {
      path: '/auth/register',
      getHref: (redirectTo?: string | null | undefined) =>
        `/auth/register${redirectTo ? `?redirectTo=${encodeURIComponent(redirectTo)}` : ''}`,
    },
    login: {
      path: '/auth/login',
      getHref: (redirectTo?: string | null | undefined) =>
        `/auth/login${redirectTo ? `?redirectTo=${encodeURIComponent(redirectTo)}` : ''}`,
    },
  },

  app: {
    root: {
      path: '/app',
      getHref: () => '/app',
    },
    candidate: {
      path: '/app/candidate',
      getHref: () => '/app/candidate',
    },
    recruiter: {
      path: '/app/recruiter',
      getHref: () => '/app/recruiter',
    },
    admin: {
      path: '/app/admin',
      getHref: () => '/app/admin',
    },
  },
  notFound: {
    path: '*',
    getHref: () => '*',
  },
} as const;
