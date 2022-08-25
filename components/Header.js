/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";
import HeaderIcon from "../components/HeaderIcon";
import {
  FlagIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import { signOut } from "next-auth/react";

function Header() {


  return (
    <div className="sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md ">

        <div className="flex items-center">
            <img 
                src="https://www.freeiconspng.com/thumbs/facebook-logo-png/facebook-logo-3.png"  
                alt=""
                width={40}
                height={40}
                layout="fixed"
                />
                <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
                    <SearchIcon className="h-6 text-gray-600" />
                    <input 
                      className="flex ml-2 items-center bg-transparent outline-none
                      placeholder-gray-500 flex-shrink"
                      type="text" 
                      placeholder="Search Facebook" 
                    />
                </div>
        </div>
      

        <div className="flex justify-center flex-grow p-2 ml-5">
          <div className="flex space-x-6 md:space-x-2">
            <HeaderIcon active Icon={HomeIcon}/>
            <HeaderIcon Icon={FlagIcon}/>
            <HeaderIcon Icon={PlayIcon}/>
            <HeaderIcon Icon={ShoppingCartIcon}/>
            <HeaderIcon Icon={UserGroupIcon}/>
          </div>
        </div>

          <div className="flex items-center sm:space-x-2 justify-end">
            <img 
              onClick ={signOut}
              className="rounded-full cursor-pointer"
              src="https://media-exp1.licdn.com/dms/image/C4E03AQH72fss_Ig7NA/profile-displayphoto-shrink_400_400/0/1639135128983?e=1666828800&v=beta&t=x5GiQ6QWpscmw0CwRxfEEi4L5lhg0CbjmjtsE5tSjgo"
              width="30"
              height="30"
              layout="fixed" 
            />
            <p className="whitespace-nowrap font-semibold pr-3">Jaafar Adegoke</p>
            <ViewGridIcon className="icon"/>
            <ChatIcon className="icon"/>
            <BellIcon className="icon"/>
            <ChevronDownIcon className="icon"/>
        </div>

        </div>

  )
}

export default Header