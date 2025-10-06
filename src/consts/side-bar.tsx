import { LocalIcon } from "@/assets/icons/local-icon";
import { paths } from "@/config/paths";

export type SideBarTitle = {
  title: string;
  path: string;
};

export type SideBarIcon = {
  active: React.ReactNode;
  inactive: React.ReactNode;
};

export const SETTINGSIDEBARTITLE: SideBarTitle[] = [
  {
    title: "Settings",
    path: paths.common.settings.path,
  },
  {
    title: "Help Center",
    path: paths.common.help.path,
  },
];

export const RECRUITERSIDEBARTITLE: SideBarTitle[] = [
  {
    title: "Dashboard",
    path: paths.recruiter.dashboard.path,
  },
  {
    title: "Messages",
    path: paths.common.messages.path,
  },
  {
    title: "Company Profile",
    path: paths.recruiter.profile.path,
  },
  {
    title: "All Applicants",
    path: paths.recruiter.applicants.path,
  },
  {
    title: "Job Listing",
    path: paths.recruiter.jobPostings.path,
  },
];

export const CANDIDATESIDEBARTITLE: SideBarTitle[] = [
  {
    title: "Dashboard",
    path: paths.candidate.dashboard.path,
  },
  {
    title: "Messages",
    path: paths.common.messages.path,
  },
  {
    title: "My Applications",
    path: paths.candidate.applications.path,
  },
  {
    title: "Find Jobs",
    path: paths.candidate.search.path,
  },
  {
    title: "Browse Companies",
    path: paths.candidate.browse.path,
  },
  {
    title: "My Public Profile",
    path: paths.candidate.profile.path,
  },
];

export const SETTINGSIDEBARICON: SideBarIcon[] = [
  {
    active: <LocalIcon iconName="setting_active" />,
    inactive: <LocalIcon iconName="setting_inactive" />,
  },
  {
    active: <LocalIcon iconName="help_active" />,
    inactive: <LocalIcon iconName="help_inactive" />,
  },
];

export const RECRUITERSIDEBARICON: SideBarIcon[] = [
  {
    active: <LocalIcon iconName="home_active" />,
    inactive: <LocalIcon iconName="home_inactive" />,
  },
  {
    active: <LocalIcon iconName="chat_active" />,
    inactive: <LocalIcon iconName="chat_inactive" />,
  },
  {
    active: <LocalIcon iconName="profile_active" />,
    inactive: <LocalIcon iconName="profile_inactive" />,
  },
  {
    active: <LocalIcon iconName="applicant_active" />,
    inactive: <LocalIcon iconName="applicant_inactive" />,
  },
  {
    active: <LocalIcon iconName="list_active" />,
    inactive: <LocalIcon iconName="list_inactive" />,
  },
];

export const CANDIDATESIDEBARICON: SideBarIcon[] = [
  {
    active: <LocalIcon iconName="home_active" />,
    inactive: <LocalIcon iconName="home_inactive" />,
  },
  {
    active: <LocalIcon iconName="chat_active" />,
    inactive: <LocalIcon iconName="chat_inactive" />,
  },
  {
    active: <LocalIcon iconName="apply_active" />,
    inactive: <LocalIcon iconName="apply_inactive" />,
  },
  {
    active: <LocalIcon iconName="search_active" />,
    inactive: <LocalIcon iconName="search_inactive" />,
  },
  {
    active: <LocalIcon iconName="browse_active" />,
    inactive: <LocalIcon iconName="browse_inactive" />,
  },
  {
    active: <LocalIcon iconName="profile_active" />,
    inactive: <LocalIcon iconName="profile_inactive" />,
  },
];
