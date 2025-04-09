import { PrismaClient, Prisma } from "@prisma/client";
import bcrypt from "bcrypt";
import { Request, Response } from "express";

export const createUser = async (req: Request, res: Response) => {
  const { username, email, password } = req.body;
  const prisma = new PrismaClient();

  try {
    const encryptedPassword = await bcrypt.hash(password, 10);

    let user: Prisma.UserCreateInput;

    user = {
      email: email,
      username: username,
      password: encryptedPassword,
    };

    const createUser = await prisma.user.create({ data: user });

    res.json({
      message: "success",
      user: createUser,
    });
  } catch (error) {
    console.log(error);
    res.status(403).json({ message: "Error occurred" });
  }
};
