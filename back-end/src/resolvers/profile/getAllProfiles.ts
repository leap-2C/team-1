import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const getProfiles = async (req:Request, res: Response) : Promise<any>=> {
  try {
    const profiles = await prisma.profile.findMany()

    if (!profiles) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ message: "Profile data fetched successfully", profiles });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error occurred while fetching user data" });
  }
};
