import { Prisma, PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

export const createUser = async (req, res) => {
  const {username,  email, password} = req.body;

  try {
    const encryptedPassword = await bcrypt.hash(password, 10);
    const newUser = await PrismaClient..create({
      ...req.body,
      email,
      password: encryptedPassword,
      username
    });
    res.json({
      message: "success",
      user: newUser,
    });
  } catch (error) {
    console.log(error);
    res.status(403).json({ message: "Error occurred" });
  }
};
