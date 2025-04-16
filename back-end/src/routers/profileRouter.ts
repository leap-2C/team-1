import express from "express";
import { getProfiles } from "../resolvers/profile/getAllProfiles";
import { viewProfile } from "../resolvers/profile/viewUsersProfile";
import { authorizationMiddleware } from "../middleWares/authorizationUsers";
import { updateProfile } from "../resolvers/profile/changeProfile";

export const profileRouter = express.Router();

profileRouter.get("/explore", async (req, res) => {
  await getProfiles(req, res);
});

profileRouter.get("/view/:id", authorizationMiddleware, async (req, res) => {
  await viewProfile(req, res);
});

profileRouter.put("/:id", authorizationMiddleware, async (req, res) => {
  await updateProfile(req, res);
});
