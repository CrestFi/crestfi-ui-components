import { RefObject } from "react";
interface useClickOutsideOptionsProps {
    onClickOutside: () => void;
}
export declare const useClickOutside: (ref: RefObject<HTMLElement | null | undefined>, { onClickOutside }: useClickOutsideOptionsProps) => void;
export {};
