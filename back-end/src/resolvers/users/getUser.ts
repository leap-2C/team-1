import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const getUser = async (req:Request, res: Response) : Promise<any>=> {
  try {
    const { id } = req.params;

    const userId = parseInt(id);
    if (isNaN(userId)) {
      return res.status(400).json({ message: "Invalid user ID" });
    }

    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ message: "User data fetched successfully", user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error occurred while fetching user data" });
  }
};
