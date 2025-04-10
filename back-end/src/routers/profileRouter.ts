import express from "express";
import { createProfile } from "../resolvers/profile/createProfile";

export const profileRouter = express.Router();

profileRouter.post("/", createProfile)