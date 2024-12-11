import React from "react";
export interface CardProps {
    Icon?: React.ElementType;
    title: string;
    description: string;
    children?: React.ReactNode;
}
