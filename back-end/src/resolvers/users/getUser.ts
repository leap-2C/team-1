// import { PrismaClient } from "@prisma/client";

// export const getUser = async (req, res) => {
//   const prisma = new PrismaClient()
//   try {
//     const { _id } = req.user;
//     const User = await prisma.user.findById(_id);
//     res.json({ message: "get user data", user: User });
//   } catch (err) {
//     res.status(403).json({ message: "Error occurred" });
//   }
// };
