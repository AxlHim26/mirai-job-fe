import React from "react";

type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement>;

export const Label = ({children, className, ...props}: LabelProps) => {
    return (
        <label
            className="text-xs text-primary"
            {...props}
        >
            {children}
        </label>
    )
}
