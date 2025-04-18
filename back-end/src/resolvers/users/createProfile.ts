import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

export const createProfile = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const { name, about, avatarImage, successMessage, SocialMediaURL, userId } =
      req.body;
    const prisma = new PrismaClient();
    const id = parseInt(userId);
    if (isNaN(id)) {
      return res.status(400).json({ error: "Invalid user ID format" });
    }
    const user = await prisma.user.findUnique({
      where: {
        id: id,
      },
    });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const existingProfile = await prisma.profile.findUnique({
      where: { userId: id },
    });

    if (existingProfile) {
      return res.json({ message: "Profile is already existed" });
    }

    const profile = await prisma.profile.create({
      data: {
        name: name,
        about: about,
        avatarImage: avatarImage,
        successMessage: successMessage,
        SocialMediaURL: SocialMediaURL,
        User: {
          connect: { id: id },
        },
      },
      include: {
        User: {
          select: {
            id: true,
            email: true,
            username: true,
          },
        },
      },
    });

    res.status(201).json({
      message: "Profile created successfully",
      profile,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
      message: "Profile creation failed",
    });
  }
};
