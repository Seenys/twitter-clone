// React imports
import React from "react";
// Hooks imports
import usePosts from "@/hooks/usePosts";
// Components imports
import PostItem from "./PostItem";

type PostFeedProps = {
  userId?: string;
};

const PostFeed: React.FC<PostFeedProps> = ({ userId }) => {
  const { data: posts = [] } = usePosts(userId);

  return (
    <>
      {posts.map((post: Record<string, any>) => (
        <PostItem key={post.id} data={post} userId={userId} />
      ))}
    </>
  );
};

export default PostFeed;
