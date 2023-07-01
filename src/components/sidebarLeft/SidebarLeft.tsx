import { FC } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import './sidebarLeft.css';
import { sideBarLeftProps } from '../../types/propTypes';


export const SidebarLeft: FC<sideBarLeftProps> = ({ showSideBarLeft, changeSideBarLeftState }) => {

    return (
        <>
            <div className={`sidebar-left show-sidebar-left_${showSideBarLeft.toString()}`}  >
                <AiOutlineClose className="sidebar_icon-close" onClick={changeSideBarLeftState} />
            </div>
        </>
    )
}
