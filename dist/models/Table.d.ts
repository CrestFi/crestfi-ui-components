import React from "react";
export interface TableData {
    [key: string]: string | React.ReactNode;
}
export interface TableProps {
    tableHeaders: Array<string>;
    errorMessage?: string;
    tableData: Array<{
        [key: string]: string | React.ReactNode;
    }>;
    collapsibleRow?: boolean;
    collapsedContent?: React.ReactNode;
    setCollapsedRow?: React.Dispatch<React.SetStateAction<number>>;
}
