import express from "express";
import { createUser } from "../resolvers/users/createUser.js";
import {getUser} from "../resolvers/users/getUser.js"
import { login } from "../resolvers/users/login.js";
import { validateEmail } from "../middleWares/validateEmail.js";
import { authorizationMiddleware } from "../middleWares/authorizationUsers.js";

export const userRouter = express.Router();

userRouter.post("/sign-up", createUser);
userRouter.get("/", authorizationMiddleware, getUser);
userRouter.post("/login", validateEmail, login);