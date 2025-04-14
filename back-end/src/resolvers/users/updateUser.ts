import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const getUser = async (req:Request, res: Response) : Promise<any>=> {
  try {
    const { id } = req.params;
    const {newPassword} = req.body

    const userId = parseInt(id);
    if (isNaN(userId)) {
      return res.status(400).json({ message: "Invalid user ID" });
    }

    const updateUser = await prisma.user.update({
        where: {
          id:userId,
        },
        data: {
          password: newPassword,
        },
      })


    res.json({ message: "User data fetched successfully", updateUser });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error occurred while fetching user data" });
  }
};
