import { FC } from "react"
import { sideBarRightProps } from "../../types/propTypes"
import { AiOutlineClose } from "react-icons/ai";
import "./sidebarRight.css"


export const SidebarRight: FC<sideBarRightProps> = ({ showSidebarRight, changeSidebarRightState }) => {
    const showSidebar = showSidebarRight.toString();
    return (
        <div className={`sidebar-right sidebar-right-${showSidebar}`}>
            <AiOutlineClose className="sidebar_icon-close sidebar-right_icon-close" onClick={changeSidebarRightState} />

        </div>
    )
}
