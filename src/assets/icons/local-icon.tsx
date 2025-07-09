import React from "react";

import {
<<<<<<< HEAD
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
  logo,
  socialMediaIcon,
  arrowRightIcon,
  plusIcon
} from "."

const icons = {
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
  logo,
  socialMediaIcon,
  arrowRightIcon,
  plusIcon

} satisfies Record<string, React.FunctionComponent<React.SVGProps<SVGSVGElement>>>;

export type IconName = keyof typeof icons;

type ReactIconProps = React.SVGProps<SVGSVGElement> & {
  iconName: keyof typeof icons;
  height?: number | "auto";
  width?: number | "auto";
};

/**
 
Generator SVG Icon*/
export const LocalIcon = ({
  iconName,
  height = 24,
  width = 24,
  ...props
}: ReactIconProps) => {
  const Comp = icons[iconName];
  return Comp ? (
    <Comp
=======
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
>>>>>>> develop
      {...(height !== "auto" && { height })}
      {...(width !== "auto" && { width })}
      {...props}
    />
<<<<<<< HEAD
  ): null;
};
=======
  );
};
>>>>>>> develop
