import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

export const getUser = async (req:Request, res:Response) => {
  const prisma = new PrismaClient();
  try {
    const { id } = req.user;
    const User = await prisma.user.findUnique({
      where: {
        id: id,
      },
    });
    res.json({ message: "get user data", user: User });
  } catch (err) {
    res.status(403).json({ message: "Error occurred" });
  }
};
