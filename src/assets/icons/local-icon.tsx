import React from "react";

import {
<<<<<<< HEAD
  Logo
} from "."

const icon = {
  Logo
} satisfies Record<string, React.FunctionComponent<React.SVGProps<SVGSVGElement>>>;

type ReactIconProps = React.SVGProps<SVGSVGElement> & {
  iconName: keyof typeof icon;
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
  const Comp = icon[iconName];
  return Comp ? (
    <Comp
=======
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
>>>>>>> develop
      {...(height !== "auto" && { height })}
      {...(width !== "auto" && { width })}
      {...props}
    />
<<<<<<< HEAD
  ) : null;
=======
  );
>>>>>>> develop
};
