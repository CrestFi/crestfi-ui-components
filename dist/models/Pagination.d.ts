export interface PaginationProps {
    pages: number;
    setCurrentPage: (currentPage: number) => void;
    setNoOfRows: (noOfRows: number) => void;
    onChange?: () => void;
}
