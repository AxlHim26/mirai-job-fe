import React from "react";

import {
  Logo,
  circleCheckmark,
  circleInfo,
  circleWarn,
  circleXmark,
  successful,
  iconWhite,
  arrowLeft,
  arrowRight,
  Location,
  menu,
  search,
  gridView,
  horizontal,
  moreFilters,
  JobLogo,
  JobShare,
  BenefitIcon,
  SectionBlockIcon,
  ChevronLeft,
  ChevronRight,
  MessageIcon,
  NotificationIcon,
  AttachmentIcon,
  MoreVertical,
  StarIcon,
  PinIcon,
  CloseIcon,
  EqualIcon,
  EmojiIcon,
  JobListing,
  PeoPleIcon,
  home_inactive,
  browse_inactive,
  chat_inactive,
  profile_inactive,
  search_inactive,
  setting_inactive,
  help_inactive,
  list_inactive,
  applicant_inactive,
  apply_inactive,
  home_active,
  profile_active,
  search_active,
  chat_active,
  browse_active,
  setting_active,
  help_active,
  list_active,
  applicant_active,
  apply_active,
  plus_icon,
} from ".";

const icon = {
  Logo,
  circleCheckmark,
  circleInfo,
  circleWarn,
  circleXmark,
  successful,
  iconWhite,
  arrowLeft,
  arrowRight,
  Location,
  menu,
  search,
  gridView,
  horizontal,
  moreFilters,
  JobLogo,
  JobShare,
  BenefitIcon,
  SectionBlockIcon,
  ChevronLeft,
  ChevronRight,
  MessageIcon,
  NotificationIcon,
  AttachmentIcon,
  MoreVertical,
  StarIcon,
  PinIcon,
  CloseIcon,
  EqualIcon,
  EmojiIcon,
  JobListing,
  PeoPleIcon,
  home_inactive,
  browse_inactive,
  chat_inactive,
  profile_inactive,
  search_inactive,
  setting_inactive,
  help_inactive,
  list_inactive,
  applicant_inactive,
  apply_inactive,
  home_active,
  profile_active,
  search_active,
  chat_active,
  browse_active,
  setting_active,
  help_active,
  list_active,
  applicant_active,
  apply_active,
  plus_icon,
} satisfies Record<
  string,
  React.FunctionComponent<React.SVGProps<SVGSVGElement>>
>;

type ReactIconProps = React.SVGProps<SVGSVGElement> & {
  iconName: keyof typeof icon;
  width?: number | "auto";
  height?: number | "auto";
};

export const LocalIcon = ({
  iconName,
  width = 24,
  height = 24,
  ...props
}: ReactIconProps) => {
  const Component = icon[iconName];
  return (
    <Component
      {...(height !== "auto" && { height })}
      {...(width !== "auto" && { width })}
      {...props}
    />
  );
};

export type IconName = keyof typeof icon;
