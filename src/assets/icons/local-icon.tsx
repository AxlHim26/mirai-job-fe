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
  HomeIcon,
  AttachmentIcon,
  MoreVertical,
  StarIcon,
  PinIcon,
  CloseIcon,
  EqualIcon,
  EmojiIcon,
  JobListing,
  PeoPleIcon
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
  HomeIcon,
  AttachmentIcon,
  MoreVertical,
  StarIcon,
  PinIcon,
  CloseIcon,
  EqualIcon,
  EmojiIcon,
  JobListing,
  PeoPleIcon
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
  width,
  height,
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
