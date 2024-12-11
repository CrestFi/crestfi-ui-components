import { FC } from "react";
interface SidebarProps {
    show: boolean;
    children: React.ReactNode;
    className?: string;
}
declare const Sidebar: FC<SidebarProps>;
export default Sidebar;
