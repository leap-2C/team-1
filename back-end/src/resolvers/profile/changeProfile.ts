import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const updateProfile = async (
  req: Request, 
  res: Response
): Promise<Response> => {
  try {
    const id = req.params.id;
    const { name, about, avatarImage, SocialMediaURL, backgroundImage } = req.body;

    const profileId = parseInt(id, 10);
    if (isNaN(profileId)) {
      return res.status(400).json({ message: "Invalid user ID" });
    }

    const updatedUser = await prisma.user.update({
      where: { id: profileId },
      data: {
        ...(name !== undefined && { name }),
        ...(about !== undefined && { about }),
        ...(avatarImage !== undefined && { avatarImage }),
        ...(SocialMediaURL !== undefined && { SocialMediaURL }),
        ...(backgroundImage !== undefined && { backgroundImage }),
      },
    });

    return res.status(200).json({
      message: "User updated successfully",
      user: updatedUser,
    });
  } catch (error) {
    console.error("Update profile error:", error);
    return res.status(500).json({
      message: "Error occurred while updating user data",
    });
  }
};
