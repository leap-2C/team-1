import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const viewProfile = async (req:Request, res: Response) : Promise<any>=> {
  try {
    const {username} = req.params
    const userInfo = await prisma.user.findUnique({
      where: {
        username
      },
    });

    if (!userInfo) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ message: "User data fetched successfully", userInfo });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error occurred while fetching user data" });
  }
};
