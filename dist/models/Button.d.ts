import React from "react";
export type ButtonSize = "large" | "medium" | "small";
export type ButtonVariant = "default" | "gradient" | "danger";
export type ButtonShape = "circle" | "round";
export type IconButtonVariant = "default" | "solid" | "outlined" | "plain";
export interface ButtonBaseProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
    startIcon?: JSX.Element;
    endIcon?: JSX.Element;
    loading?: boolean;
    childrenClassName?: string;
    children?: React.ReactNode;
    loadingIcon?: JSX.Element;
}
interface IconButtonBaseProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    size?: ButtonSize;
    variant?: IconButtonVariant;
    shape?: ButtonShape;
}
interface IconButtonChildrenProps extends IconButtonBaseProps {
    children: React.ReactNode;
    icon?: never;
}
interface IconButtonIconProps extends IconButtonBaseProps {
    children?: never;
    icon: JSX.Element;
}
export type IconButtonProps = IconButtonChildrenProps | IconButtonIconProps;
export {};
