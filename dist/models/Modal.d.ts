/// <reference types="react" />
type ModalSize = "small" | "medium" | "large";
export interface ModalProps {
    show: boolean;
    size?: ModalSize;
    className?: string;
    toggleModal: () => void;
    children: React.ReactNode;
    closeOnOutsideClick?: boolean;
    hasCloseIcon?: boolean;
}
export {};
