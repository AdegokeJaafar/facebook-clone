/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */


function SidebarRow({ src, Icon, title }) {
  return (
    <div className="flex items-center space-x-2 p-4
    hover:bg-gray-200 rounded-xl cursor-pointer">
        {src && (
            <img 
                className="rounded-full"
                src={src}
                width={30}
                height={30}
                layout="fixed" 
            />
        )}
        {Icon && <Icon className="h-8  text-blue-500" />}
        <p className="hidden sm:inline-flex font-medium">
            {title}
        </p>
    </div>
  )
}

export default SidebarRow