import { FC } from "react";
import { CircularProgressProps } from "../../models";
export type TransactionStatus = "completed" | "scheduled" | "cancelled" | "paused" | "ongoing";
declare const CircularProgress: FC<CircularProgressProps>;
export default CircularProgress;
