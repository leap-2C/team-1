import { PrismaClient, Prisma } from "@prisma/client";
import { Request, Response } from "express";

export const createProfile = async (req: Request, res: Response) => {
  const {name, about,  avatarImage, backgroundImage,successMessage, User,SocialMediaURL} = req.body;
  const prisma = new PrismaClient();

  try {
    let profile: Prisma.ProfileCreateInput;

    profile = {
      name:name, 
      about:about,  
      avatarImage:avatarImage, 
      backgroundImage:backgroundImage,
      successMessage:successMessage,
      SocialMediaURL:SocialMediaURL,
      User:User
    };

    const createProfile = await prisma.profile.create({ data: profile });

    res.json({
      message: "success",
      profile: createProfile,
    });
  } catch (error) {
    console.log(error);
    res.status(403).json({ message: "Error occurred" });
  }
};

