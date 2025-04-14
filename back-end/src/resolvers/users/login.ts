import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { PrismaClient } from "@prisma/client";
export const login = async (req:any, res:any) => {
  const { email, password } = req.body;
  const prisma = new PrismaClient()
  try {
    const user = await prisma.user.findUnique(
        {
            where:{email:email}
        }
    );
    if (!user)
      return res
        .status(400)
        .json({ message: "Username or password did not match" });
    if (!bcrypt.compareSync(password, user.password))
      return res
        .status(400)
        .json({ message: "Username or password did not match" });
    var token = jwt.sign({ id: user.id }, "logically impossible");
    res.json({ token: token });
  } catch (err) {
    res.status(403).json({ message: "Error occurred" });
  }
};
