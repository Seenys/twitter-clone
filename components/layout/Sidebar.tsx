// React
import React from "react";
// Components
import SidebarLogo from "./SidebarLogo";
import SidebarItem from "./SidebarItem";
import SidebarTweetButton from "./SidebarTweetButton";
// Icons
import { FaUser } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import { BsHouseFill, BsBellFill } from "react-icons/bs";

const items = [
  {
    label: "Home",
    href: "/",
    icon: BsHouseFill,
  },
  {
    label: "Notifications",
    href: "/notifications",
    icon: BsBellFill,
  },
  {
    label: "Profile",
    href: "/user/123",
    icon: FaUser,
  },
];
const Sidebar = () => {
  return (
    <div className="col-span-1 h-full pr-4 md:pr-6">
      <div className="flex flex-col items-end">
        <div className="space-y-2 lg:w-[230px]">
          <SidebarLogo />
          {items.map((item) => (
            <SidebarItem
              key={item.href}
              label={item.label}
              href={item.href}
              icon={item.icon}
            />
          ))}
          <SidebarItem
            onClick={() => {}}
            label="Logout"
            href="/logout"
            icon={BiLogOut}
          />
          <SidebarTweetButton />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
