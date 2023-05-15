// React imports
import React, { useCallback, useMemo } from "react";
// Next imports
import { useRouter } from "next/router";
// Hooks imports
import useCurrentUser from "@/hooks/useCurrentUser";
import useLoginModal from "@/hooks/useLoginModal";
// Other imports
import { formatDistanceToNowStrict } from "date-fns";
import { Avatar } from "../shared";
import { AiOutlineHeart, AiOutlineMessage } from "react-icons/ai";

type PostItemProps = {
  data: Record<string, any>;
  userId?: string;
};

const PostItem: React.FC<PostItemProps> = ({ data = {}, userId }) => {
  const { user } = data;
  const router = useRouter();
  const loginModal = useLoginModal();

  const { data: currentUser } = useCurrentUser();

  const goToUser = useCallback(
    (event: any) => {
      event.stopPropagation();

      router.push(`/user/${user.id}`);
    },
    [user.id, router]
  );

  const goToPost = useCallback(() => {
    router.push(`/posts/${data.id}`);
  }, [router, data.id]);

  const onLike = useCallback(
    (event: any) => {
      event.stopPropagation();
      if (!currentUser) {
        loginModal.onOpen();
        return;
      }
      console.log("like");
    },
    [loginModal, currentUser]
  );

  const createdAt = useMemo(() => {
    if (!data.createdAt) {
      return null;
    }
    return formatDistanceToNowStrict(new Date(data.createdAt));
  }, [data.createdAt]);
  return (
    <div
      onClick={goToPost}
      className="border-b-[1px] border-neutral-800 p-5 cursor-pointer hover:bg-neutral-900 transition"
    >
      <div className="flex flex-row items-start gap-3">
        <Avatar userId={user.id} />
        <div>
          <div className="flex flex-row items-center gap-2">
            <p className="text-white font-semibold cursor-pointer hover:underline ">
              {user.name}
            </p>
            <span className="text-neutral-500 cursor-pointer hover:underline hidden md:block">
              @{user.userName}
            </span>
            <span className="text-neutral-500 text-sm">{createdAt}</span>
          </div>
          <div className="text-white t-1">{data.body}</div>
          <div className="flex flex-row items-center mt-3 gap-10">
            <div className="flex flex-row items-center text-neutral-500 gap-2 cursor-pointer transition hover:text-sky-500">
              <AiOutlineMessage size={20} />
              <span>{data.comments.length || 0}</span>
            </div>
            <div
              onClick={onLike}
              className="flex flex-row items-center text-neutral-500 gap-2 cursor-pointer transition hover:text-red-500"
            >
              <AiOutlineHeart size={20} />
              <span>{data.likesIds.length || 0}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
