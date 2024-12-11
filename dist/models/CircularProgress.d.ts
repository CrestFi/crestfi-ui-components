/// <reference types="react" />
type TransactionStatus = "completed" | "scheduled" | "cancelled" | "paused" | "ongoing";
export interface CircularProgressProps {
    percentage?: number;
    status: TransactionStatus;
    children?: React.ReactNode;
    animation?: "clockwise" | "anti-clockwise";
    transitionDuration?: number;
    caps?: "round";
    spin?: boolean;
    size?: number;
    lineWidth?: number;
}
export {};
