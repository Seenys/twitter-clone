import { prisma, serverAuth } from "@/libs";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST" && req.method !== "DELETE") {
    res.status(405).json({ message: "Method not allowed" });
    return;
  }
  try {
    const { postId } = req.body;
    const { currentUser } = await serverAuth(req, res);

    if (!postId || typeof postId !== "string") {
      throw new Error("Invalid id");
    }

    const post = await prisma.post.findUnique({
      where: {
        id: postId,
      },
    });

    if (!post) {
      throw new Error("Comment not found");
    }

    let updatedLikeIds = [...(post.likesIds || [])];

    if (req.method === "POST") {
      updatedLikeIds.push(currentUser.id);

      try {
        const post = await prisma.post.findUnique({
          where: {
            id: postId,
          },
        });

        if (post?.userId) {
          await prisma.notification.create({
            data: {
              body: `${currentUser.userName} liked your post`,
              userId: post.userId,
            },
          });

          await prisma.user.update({
            where: {
              id: post.userId,
            },
            data: {
              hasNotifications: true,
            },
          });
        }
      } catch (error) {
        console.log(error);
      }
    }

    if (req.method === "DELETE") {
      updatedLikeIds = updatedLikeIds.filter((id) => id !== currentUser.id);
    }

    const updatedPost = await prisma.post.update({
      where: {
        id: postId,
      },
      data: {
        likesIds: updatedLikeIds,
      },
    });

    return res.status(200).json(updatedPost);
  } catch (error) {
    console.log(error);
    return res.status(400).end();
  }
}
