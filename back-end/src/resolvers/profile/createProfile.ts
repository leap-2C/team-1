import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

export const createProfile = async (req: Request, res: Response) => {
  try {
    const { name, about, avatarImage, successMessage, SocialMediaURL, userId } =
      req.body;
    const prisma = new PrismaClient();

    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const existingProfile = await prisma.profile.findUnique({
      where: { userId: userId },
    });

    if (existingProfile) {
      return res.status(404).json({ message: "Profile is already existed" });
    }

    const profile = await prisma.profile.create({
      data: {
        name: name,
        about: about,
        avatarImage: avatarImage,
        successMessage: successMessage,
        SocialMediaURL: SocialMediaURL,
        User: {
          connect: userId,
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
    console.log();
    res.status(500).json({
      error: "Internet server error",
      message: "Profile creation failed",
    });
  }
};
