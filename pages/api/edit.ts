// Next imports
import type { NextApiRequest, NextApiResponse } from "next";
// Database connection
import { prisma, serverAuth } from "@/libs/";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "PATCH") {
    return res.status(405).end().json({ message: "Method not allowed" });
  }
  try {
    const { currentUser } = await serverAuth(req, res);

    const { name, userName, bio, profileImage, coverImage } = req.body;

    if (!name || !userName) {
      return res
        .status(400)
        .end()
        .json({ message: "Name and username are required" });
    }

    const updatedUser = await prisma.user.update({
      where: {
        id: currentUser.id,
      },
      data: {
        name,
        userName,
        bio,
        profileImage,
        coverImage,
      },
    });

    return res.status(200).json(updatedUser);
  } catch (error) {
    console.log(error);
  }
}
