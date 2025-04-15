import express from "express";
import { getProfiles } from "../resolvers/profile/getAllProfiles";
import { viewProfile } from "../resolvers/profile/viewUsersProfile";
import { authorizationMiddleware } from "../middleWares/authorizationUsers";

export const profileRouter = express.Router();

profileRouter.get("/explore", async (req, res)=>{
    await getProfiles (req, res)
})

profileRouter.get("/view/:id", async (req, res)=>{
    await viewProfile (req, res)
})
