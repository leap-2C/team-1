import express from "express";
import { createDonation } from "../resolvers/donation/createDonation";
export const donationRouter = express.Router();

donationRouter.post("/", async (req, res)=>{
    await createDonation(req, res)
})