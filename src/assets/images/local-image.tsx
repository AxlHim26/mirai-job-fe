import React from "react";

import {
  americaImg,
  australiaImg,
  avatarImg,
  bigImage,
  chinaImg,
  cssImg,
  englandImg,
  framerImg,
  htmlImg,
  japanImg,
  jsImg,
  logo,
  mixpanelImg,
  rubyImg,
  smallImg,
} from ".";

const images = {
  americaImg,
  australiaImg,
  avatarImg,
  bigImage,
  chinaImg,
  cssImg,
  englandImg,
  framerImg,
  htmlImg,
  japanImg,
  jsImg,
  logo,
  mixpanelImg,
  rubyImg,
  smallImg,
} satisfies Record<
  string,
  React.FunctionComponent<React.SVGProps<SVGSVGElement>>
>;

export type ImageName = keyof typeof images;

type ReactIconProps = React.SVGProps<SVGSVGElement> & {
  imageName: keyof typeof images;
  height?: number | "auto";
  width?: number | "auto";
};

/**
 
Generator SVG Icon*/
export const LocalImage = ({
  imageName,
  height = 24,
  width = 24,
  ...props
}: ReactIconProps) => {
  const Comp = images[imageName];
  return Comp ? (
    <Comp
      {...(height !== "auto" && { height })}
      {...(width !== "auto" && { width })}
      {...props}
    />
  ) : null;
};
