import React, { MouseEventHandler } from "react";
interface TabBaseProps {
    type: "solid" | "plain";
    isActive: boolean;
    startIcon?: JSX.Element;
    endIcon?: JSX.Element;
    count?: number;
    className?: string;
    onClick: MouseEventHandler<HTMLButtonElement>;
}
interface TabChildrenProps extends TabBaseProps {
    children: React.ReactNode;
    title?: never;
}
interface TabTitleProps extends TabBaseProps {
    children?: never;
    title: string;
}
export type TabProps = TabChildrenProps | TabTitleProps;
export interface ActiveTabIndicatorProps {
    activeIndex: number;
    totalTabs: number;
}
export {};
