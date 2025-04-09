import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { userRouter } from "./routers/userRouter";
import { PrismaClient } from "@prisma/client";

const app = express();
app.use(cors());
app.use(express.json());
const port = 8000;
dotenv.config();

const prisma =new PrismaClient()

app.get("/", async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});


app.use("/users", userRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
