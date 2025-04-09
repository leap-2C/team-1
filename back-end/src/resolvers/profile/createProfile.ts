import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

export const createProfile = async (req: any, res: any) => {
  const {name, about,  avatarImage,
    // backgroundImage,
    // successMessage  ,
    // createdAt ,     
     } = req.body;
  const prisma = new PrismaClient();

  try {
    const newProfile = await prisma.profile.create({
      ...req.body,
      name,
      about,
      avatarImage
    });
    res.json({
      message: "success",
      profile:newProfile,
    });
  } catch (error) {
    console.log(error);
    res.status(403).json({ message: "Error occurred" });
  }
};
