import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getUser = async (req: Request, res: Response): Promise<any> => {
  try {
    const userId = req.user?.id;
    console.log(req.user, "id");

    const numericId = Number(userId);
    if (!userId || isNaN(numericId)) {
      return res.status(400).json({ message: "Invalid or missing user ID" });
    }

    const user = await prisma.user.findUnique({
      where: {
        id: numericId,
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
