import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const getDonation = async (req:Request, res: Response) : Promise<any>=> {
  try {
    const { userId } = req.params;

    const id = parseInt(userId);
    if (isNaN(id)) {
      return res.status(400).json({ message: "Invalid user ID" });
    }

    const receivedUser = await prisma.donation.findMany({
      where: {
        recipientId: id,
      },
      include: {
        donorUsers: {
          select: { id: true, email: true, username: true },
        },
      },
    });

    if (!receivedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ message: "User data fetched successfully", receivedUser });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error occurred while fetching user data" });
  }
};
