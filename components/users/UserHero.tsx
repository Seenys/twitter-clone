// React Imports
import React from "react";
// Hooks
import useUser from "@/hooks/useUser";
// Components
import Image from "next/image";
import MainAvatar from "../shared/Avatar";

interface UserHeroProps {
  userId: string;
}
const UserHero: React.FC<UserHeroProps> = ({ userId }) => {
  const { data: fetchedUser, isLoading } = useUser(userId);
  return (
    <div>
      <div className="bg-neutral-700 h-44 relative">
        {fetchedUser?.coverImage && (
          <Image
            src={fetchedUser?.coverImage}
            alt="User Cover Image"
            fill
            style={{ objectFit: "cover" }}
          />
        )}
        <div className="absolute -bottom-16 left-4">
          <MainAvatar userId={userId} isLarge hasBorder />
        </div>
      </div>
    </div>
  );
};

export default UserHero;
