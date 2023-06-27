// React imports
import React, { useCallback } from "react";
// Hooks
import { useRouter } from "next/router";
import useCurrentUser from "@/hooks/useCurrentUser";
import useLoginModal from "@/hooks/useLoginModal";
// Icons
import { IconType } from "react-icons";
import { BsDot } from "react-icons/bs";

type SidebarItemProps = {
  label: string;
  href?: string;
  icon: IconType;
  onClick?: () => void;
  auth?: boolean;
  alert?: boolean;
};

const SidebarItem: React.FC<SidebarItemProps> = ({
  label,
  href,
  icon: Icon,
  onClick,
  auth,
  alert,
}) => {
  const { data: currentUser } = useCurrentUser();
  const loginModal = useLoginModal();
  const router = useRouter();
  const handleClick = useCallback(() => {
    if (onClick) onClick();
    if (auth && !currentUser) {
      loginModal.onOpen();
    } else if (href) router.push(href);
  }, [href, onClick, router, auth, currentUser, loginModal]);
  return (
    <div onClick={handleClick} className="flex flex-row items-center">
      <div className="relative rounded-full h-14 w-14 p-4 flex items-center justify-center hover:bg-slate-300 hover:bg-opacity-10 cursor-pointer transition lg:hidden">
        <Icon size={28} color="white" />
        {alert ? (
          <BsDot className="text-sky-500 absolute -top-4 left-0" size={70} />
        ) : null}
      </div>
      <div className="relative hidden lg:flex items-center gap-4 p-4 rounded-full hover:bg-slate-300 hover:bg-opacity-10 cursor-pointer">
        <Icon size={24} color="white" />
        <p className="hidden lg:block text-xl text-slate-100">{label}</p>
        {alert ? (
          <BsDot className="text-sky-500 absolute -top-4 left-0" size={70} />
        ) : null}
      </div>
    </div>
  );
};

export default SidebarItem;
