import React from "react";

import {
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
      {...(height !== "auto" && { height })}
      {...(width !== "auto" && { width })}
      {...props}
    />
  ): null;
};