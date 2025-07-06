import React from "react";

import {
  iconWhite,
  logo,
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
  SectionBlockIcon
} from ".";

const icon = {
  Logo,
  JobLogo,
  JobShare,
  BenefitIcon,
  SectionBlockIcon,
  iconWhite,
  arrowLeft,
  arrowRight,
  Location,
  menu,
  search,
  gridView,
  horizontal,
  moreFilters
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
