import React from "react";

type avatarProps = {
  userId: string;
  isLarge?: boolean;
  isSmall?: boolean;
};

const Avatar: React.FC<avatarProps> = ({ userId, isLarge, isSmall }) => {
  return <div>Avatar</div>;
};

export default Avatar;
