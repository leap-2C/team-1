import express from "express";
import { createDonation } from "../resolvers/donation/createDonation";
import { getDonation } from "../resolvers/donation/getDonations";
export const donationRouter = express.Router();

donationRouter.post("/", async (req, res)=>{
    await createDonation(req, res)
})

donationRouter.get("/:userId", async (req, res)=>{
    await getDonation(req, res)
})