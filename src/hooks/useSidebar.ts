import { useState } from "react";
import { sidebarLeftTypes, sidebarRightTypes } from "../types/sidebarTypes";



export const useSidebar = (): [sidebarLeft: sidebarLeftTypes, sidebarRight: sidebarRightTypes] => {
  const [sidebarLeftState, setSidebarLeftState] = useState<boolean>(false);
  const [sidebarRightState, setSidebarRightState] = useState<boolean>(false);

  const showSidebarLeft = (): void => {
    setSidebarLeftState(true);
  }
  const hideSidebarLeft = (): void => {
    setSidebarLeftState(false);
  }
  const showSidebarRight = (): void => {
    setSidebarRightState(true);
  }
  const hideSidebarRight = (): void => {
    setSidebarRightState(false);
  }
  return [{
    sidebarLeftState, showSidebarLeft, hideSidebarLeft
  },
  {
    sidebarRightState, showSidebarRight, hideSidebarRight
  }]
}
