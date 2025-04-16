import express from "express";
import { createDonation } from "../resolvers/donation/createDonation";
import { getDonation } from "../resolvers/donation/getDonations";
import { authorizationMiddleware } from "../middleWares/authorizationUsers";
export const donationRouter = express.Router();

donationRouter.post("/", authorizationMiddleware, async (req, res)=>{
    await createDonation(req, res)
})

donationRouter.get("/:userId", async (req, res)=>{
    await getDonation(req, res)
})