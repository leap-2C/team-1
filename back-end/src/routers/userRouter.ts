import express from "express";
// import {getUser} from "../resolvers/users/getUser"
// import { login } from "../resolvers/users/login";
import { validateEmail } from "../middleWares/validateEmail";
import { authorizationMiddleware } from "../middleWares/authorizationUsers";
import { createUser } from "../resolvers/users/createUser";

export const userRouter = express.Router();

userRouter.post("/signup", createUser);
// userRouter.get("/", authorizationMiddleware, getUser);
// userRouter.post("/login", validateEmail, login);