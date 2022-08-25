/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { ChatAltIcon, ShareIcon, ThumbUpIcon } from "@heroicons/react/outline";

function Post({ name, message, email, postImage, image, timestamp }) {
  
    return (
    <div className="flex flex-col ">
        
        <div className="p-5 bg-white mt-5 rounded-t-2xl shadow-xl">
            <div className="flex items-center space-x-2">
                <img
                    className="rounded-full" 
                    src="https://media-exp1.licdn.com/dms/image/C4E03AQH72fss_Ig7NA/profile-displayphoto-shrink_400_400/0/1639135128983?e=1666828800&v=beta&t=x5GiQ6QWpscmw0CwRxfEEi4L5lhg0CbjmjtsE5tSjgo"
                    width={40}
                    height={40}  
                />
                <div>
                    <p className="font-medium">Jaafar Adegoke</p>

                    <p className="text-xs text-gray-400">
                        10-10-2022
                    </p>
                </div>
            </div>
            <p className="pt-4">This is a Test</p>
            <div className="relative h-56 md:h-96 bg-white">
                <img 
                    src="https://media-exp1.licdn.com/dms/image/C4E03AQH72fss_Ig7NA/profile-displayphoto-shrink_400_400/0/1639135128983?e=1666828800&v=beta&t=x5GiQ6QWpscmw0CwRxfEEi4L5lhg0CbjmjtsE5tSjgo" 
                    objectfit="cover"
                    layout="fill"
                    />
            </div>

        <div className="flex justify-between items-center rounded-b-2xl bg-white
        shadow-md text-gray-400 border-t mt-5">
        <div className="inputIcon rounded-none rounded-bt-2xl">
            <ThumbUpIcon className="h-4" />
            <p className="text-xs sm:text-base">Like</p>
        </div>

        <div className="inputIcon rounded-none ">
        <ChatAltIcon className="h-4" />
            <p className="text-xs sm:text-base">Comment</p>
        </div>

        <div className="inputIcon rounded-none rounded-br-2xl">
        <ShareIcon className="h-4" />
            <p className="text-xs sm:text-base">Share</p>
        </div>
        </div>
            </div>

        <div className="p-5 bg-white mt-5 rounded-t-2xl shadow-xl">
            <div className="flex items-center space-x-2">
                <img
                    className="rounded-full" 
                    src="https://media-exp1.licdn.com/dms/image/C4E03AQH72fss_Ig7NA/profile-displayphoto-shrink_400_400/0/1639135128983?e=1666828800&v=beta&t=x5GiQ6QWpscmw0CwRxfEEi4L5lhg0CbjmjtsE5tSjgo"
                    width={40}
                    height={40}  
                />
                <div>
                    <p>Jaafar Adegoke</p>

                    <p className="text-xs text-gray-400">
                        10-10-2022
                    </p>
                </div>
            </div>
            <p className="pt-4">I am a Javascript developer</p>
            <div className="relative h-56 md:h-96 bg-white">
                <img 
                    src="https://media-exp1.licdn.com/dms/image/C4E03AQH72fss_Ig7NA/profile-displayphoto-shrink_400_400/0/1639135128983?e=1666828800&v=beta&t=x5GiQ6QWpscmw0CwRxfEEi4L5lhg0CbjmjtsE5tSjgo" 
                    objectfit="cover"
                    layout="fill"
                    />
            </div>

            <div className="flex justify-between items-center rounded-b-2xl bg-white
        shadow-md text-gray-400 border-t mt-5">
        <div className="inputIcon rounded-none rounded-bt-2xl">
            <ThumbUpIcon className="h-4" />
            <p className="text-xs sm:text-base">Like</p>
        </div>

        <div className="inputIcon rounded-none ">
        <ChatAltIcon className="h-4" />
            <p className="text-xs sm:text-base">Comment</p>
        </div>

        <div className="inputIcon rounded-none rounded-br-2xl">
        <ShareIcon className="h-4" />
            <p className="text-xs sm:text-base">Share</p>
        </div>
        </div>
        </div>

        <div className="p-5 bg-white mt-5 rounded-t-2xl shadow-xl">
            <div className="flex items-center space-x-2">
                <img
                    className="rounded-full" 
                    src="https://media-exp1.licdn.com/dms/image/C4E03AQH72fss_Ig7NA/profile-displayphoto-shrink_400_400/0/1639135128983?e=1666828800&v=beta&t=x5GiQ6QWpscmw0CwRxfEEi4L5lhg0CbjmjtsE5tSjgo"
                    width={40}
                    height={40}  
                />
                <div>
                    <p>Jaafar Adegoke</p>

                    <p className="text-xs text-gray-400">
                        10-10-2022
                    </p>
                </div>
            </div>
            <p className="pt-4">I am skilled in a number of fronted frameworks like React and Next</p>
            <div className="relative h-56 md:h-96 bg-white">
                <img 
                    src="https://media-exp1.licdn.com/dms/image/C4E03AQH72fss_Ig7NA/profile-displayphoto-shrink_400_400/0/1639135128983?e=1666828800&v=beta&t=x5GiQ6QWpscmw0CwRxfEEi4L5lhg0CbjmjtsE5tSjgo" 
                    objectfit="cover"
                    layout="fill"
                    />
            </div>

            <div className="flex justify-between items-center rounded-b-2xl bg-white
        shadow-md text-gray-400 border-t mt-5">
        <div className="inputIcon rounded-none rounded-bt-2xl">
            <ThumbUpIcon className="h-4" />
            <p className="text-xs sm:text-base">Like</p>
        </div>

        <div className="inputIcon rounded-none ">
        <ChatAltIcon className="h-4" />
            <p className="text-xs sm:text-base">Comment</p>
        </div>

        <div className="inputIcon rounded-none rounded-br-2xl">
        <ShareIcon className="h-4" />
            <p className="text-xs sm:text-base">Share</p>
        </div>
        </div>
        </div>

        <div className="p-5 bg-white mt-5 rounded-t-2xl shadow-xl">
            <div className="flex items-center space-x-2">
                <img
                    className="rounded-full" 
                    src="https://media-exp1.licdn.com/dms/image/C4E03AQH72fss_Ig7NA/profile-displayphoto-shrink_400_400/0/1639135128983?e=1666828800&v=beta&t=x5GiQ6QWpscmw0CwRxfEEi4L5lhg0CbjmjtsE5tSjgo"
                    width={40}
                    height={40}  
                />
                <div>
                    <p>Jaafar Adegoke</p>

                    <p className="text-xs text-gray-400">
                        10-10-2022
                    </p>
                </div>
            </div>
            <p className="pt-4">I also use taiwindcss, material ui</p>
            <div className="relative h-56 md:h-96 bg-white">
                <img 
                    src="https://media-exp1.licdn.com/dms/image/C4E03AQH72fss_Ig7NA/profile-displayphoto-shrink_400_400/0/1639135128983?e=1666828800&v=beta&t=x5GiQ6QWpscmw0CwRxfEEi4L5lhg0CbjmjtsE5tSjgo" 
                    objectfit="cover"
                    layout="fill"
                    />
            </div>

            <div className="flex justify-between items-center rounded-b-2xl bg-white
        shadow-md text-gray-400 border-t mt-5">
        <div className="inputIcon rounded-none rounded-bt-2xl">
            <ThumbUpIcon className="h-4" />
            <p className="text-xs sm:text-base">Like</p>
        </div>

        <div className="inputIcon rounded-none ">
        <ChatAltIcon className="h-4" />
            <p className="text-xs sm:text-base">Comment</p>
        </div>

        <div className="inputIcon rounded-none rounded-br-2xl">
        <ShareIcon className="h-4" />
            <p className="text-xs sm:text-base">Share</p>
        </div>
        </div>
        </div>

        </div>
  );
}

export default Post;