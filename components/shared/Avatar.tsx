// React Imports
import React, { useCallback } from "react";
// Next
import Image from "next/image";
// Hooks
import useUser from "@/hooks/useUser";
import { useRouter } from "next/router";
// Others
import Avatar from "boring-avatars";

type avatarProps = {
  userId: string;
  isLarge?: boolean;
  hasBorder?: boolean;
};

const MainAvatar: React.FC<avatarProps> = ({ userId, isLarge, hasBorder }) => {
  const router = useRouter();
  const { data: fetchedUser } = useUser(userId);

  const onClick = useCallback(
    (event: any) => {
      event.stopPropagation();
      console.log("Avatar Clicked");

      const url = `/users/${userId}`;
      router.push(url);
    },
    [router, userId]
  );

  return (
    <div
      onClick={onClick}
      className={`${hasBorder ? "border-4 border-black" : ""} ${
        isLarge ? "w-32 h-32" : "w-12 h-12"
      } rounded-full cursor-pointer hover:opacity-90 transition relative`}
    >
      {fetchedUser?.profileImage ? (
        <Image
          fill
          style={{
            objectFit: "cover",
            borderRadius: "100%",
          }}
          alt="Avatar"
          src={fetchedUser?.profileImage}
        />
      ) : (
        <Avatar
          size={"100%"}
          name={fetchedUser?.name || "John Doe"}
          variant="beam"
          colors={["#AFFBFF", "#D2FDFE", "#FEFAC2", "#FEBF97", "#FE6960"]}
        />
      )}
    </div>
  );
};

export default MainAvatar;
