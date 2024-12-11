import React from "react";
type PositionStyle = "right" | "left";
export interface CollapseDropdownProps {
    children: React.ReactNode;
    show: boolean;
    variant?: "default" | "light";
    className?: string;
    position?: PositionStyle;
    ref?: React.RefObject<HTMLDivElement>;
}
export {};
