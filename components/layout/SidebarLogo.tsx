// React
import React from "react";
// Icons
import { BsTwitter } from "react-icons/bs";

type Props = {};

const SidebarLogo = (props: Props) => {
  return (
    <div className="rounded-full h-14 w-14 p-4 flex items-center justify-center hover:bg-opacity-10 cursor-pointer transition">
      <BsTwitter size={28} color="white" />
    </div>
  );
};

export default SidebarLogo;
