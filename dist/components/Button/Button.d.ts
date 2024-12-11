import { FC } from "react";
import { type VariantProps } from "class-variance-authority";
import { ButtonBaseProps } from "../../models";
declare const buttonStyles: (props?: ({
    variant?: "default" | "gradient" | "danger" | "normal" | null | undefined;
    size?: "large" | "medium" | "small" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
export type ButtonProps = ButtonBaseProps & VariantProps<typeof buttonStyles>;
declare const Button: FC<ButtonProps>;
export default Button;
