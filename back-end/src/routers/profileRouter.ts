import express from "express";
import { getProfiles } from "../resolvers/profile/getAllProfiles";
import { viewProfile } from "../resolvers/profile/viewUsersProfile";

export const profileRouter = express.Router();

profileRouter.get("/explore", async (req, res)=>{
    await getProfiles (req, res)
})

profileRouter.get("/view/:username", async (req, res)=>{
    await viewProfile (req, res)
})
