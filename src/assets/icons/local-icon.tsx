import React from "react";
import {Logo} from ".";

const icon = {
    Logo
} satisfies Record<
  string,
  React.FunctionComponent<React.SVGProps<SVGSVGElement>>
>;

type ReactIconProps = React.SVGProps<SVGSVGElement> & {
  iconName: keyof typeof icon;
  width?: number | "auto";
  height?: number | "auto";
};

export const LoaclIcon = ({iconName, width, height, ...props}: ReactIconProps) => {
    const Component = icon[iconName];
    return (
        <Component
            {...(height !== "auto" && { height })}
            {...(width !== "auto" && { width })}
            {...props}
        />
    )
}
