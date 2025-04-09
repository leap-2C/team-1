import express from "express";

import { createProfile } from "../resolvers/profile/createProfile";

export const userRouter = express.Router();

userRouter.post("/", createProfile);
// userRouter.get("/", authorizationMiddleware, getUser);
// userRouter.post("/login", validateEmail, login);