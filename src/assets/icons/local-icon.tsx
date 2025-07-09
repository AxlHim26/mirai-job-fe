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
  fireIcon,
  memberIcon,
  locationIcon,
  companyLogo,
  faceBookIcon,
  industryIcon,
  insIcon,
  linkedinIcon,
  linkedinNonIcon,
  twitterIcon,
  socialMediaIcon,
  arrowRightIcon,
  plusIcon
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
  fireIcon,
  memberIcon,
  locationIcon,
  companyLogo,
  faceBookIcon,
  industryIcon,
  insIcon,
  linkedinIcon,
  linkedinNonIcon,
  twitterIcon,
  socialMediaIcon,
  arrowRightIcon,
  plusIcon
} satisfies Record<
  string,
  React.FunctionComponent<React.SVGProps<SVGSVGElement>>
>;

type ReactIconProps = React.SVGProps<SVGSVGElement> & {
  iconName: keyof typeof icon;
  width?: number | "auto";
  height?: number | "auto";
};
export type IconName = keyof typeof icon;
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
