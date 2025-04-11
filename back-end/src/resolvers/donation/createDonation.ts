import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

interface CreateDonationBody {
  amount: number;
  specialMessage: string;
  socialURLOrBuyMeCoffee: string;
  donorId: string;
  recipientId: string;
}

export const createDonation = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const {
      amount,
      specialMessage,
      socialURLOrBuyMeCoffee,
      donorId,
      recipientId,
    } = req.body as CreateDonationBody;

    const donorID = parseInt(donorId);
    const recipientID = parseInt(recipientId);

    if (isNaN(donorID) || isNaN(recipientID)) {
      return res.status(400).json({ error: "Invalid user ID format" });
    }

    const donorUser = await prisma.user.findUnique({ where: { id: donorID } });
    const recipientUser = await prisma.user.findUnique({ where: { id: recipientID } });

    if (!donorUser || !recipientUser) {
      return res.status(404).json({ error: "User not found" });
    }

    const donation = await prisma.donation.create({
      data: {
        amount,
        specialMessage,
        socialURLOrBuyMeCoffee,
        donorId: donorID,
        recipientId: recipientID,
      },
      include: {
        donorUsers: {
          select: { id: true, email: true, username: true },
        },
        recipientUsers: {
          select: { id: true, email: true, username: true },
        },
      },
    });

    return res.status(201).json({
      message: "Donation created successfully",
      donation,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      error: err,
      message: "Donation creation failed",
    });
  }
};

// {
//     "amount":"10",
//     "specialMessage":"Good luck",
//     "socialURLOrBuyMeCoffee":"https://buymeacoffee.com/",
//     "donorId":"1",
//     "recipientId":"2"
// }