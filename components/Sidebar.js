/* eslint-disable react/jsx-no-undef */
// import { useSession } from "next-auth/react";
import {
    ChevronDownIcon,
    ShoppingBagIcon,
    UserGroupIcon,
} from "@heroicons/react/outline";
import {
    CalendarIcon,
    ClockIcon,
    DesktopComputerIcon,
    UsersIcon,
} from "@heroicons/react/solid";
import SidebarRow from "./SidebarRow"



function Sidebar() {
    // const [session, loading] = useSession();

  return (
    <div className="p-2 mt-5 max-w-[600px] xl:min-w-[300px]">
        <SidebarRow src="https://media-exp1.licdn.com/dms/image/C4E03AQH72fss_Ig7NA/profile-displayphoto-shrink_400_400/0/1639135128983?e=1666828800&v=beta&t=x5GiQ6QWpscmw0CwRxfEEi4L5lhg0CbjmjtsE5tSjgo" 
        title="Jaafar Adegoke" />
        <SidebarRow Icon={UsersIcon} title="Friends"  />
        <SidebarRow Icon={UserGroupIcon} title="Groups"  />
        <SidebarRow Icon={ShoppingBagIcon} title="Marketplace"  />
        <SidebarRow Icon={DesktopComputerIcon} title="Watch"  />
        <SidebarRow Icon={CalendarIcon} title="Events"  />
        <SidebarRow Icon={ClockIcon} title="Memories"  />
        <SidebarRow Icon={ChevronDownIcon} title="See More"  />
    </div>
  )
}

export default Sidebar