import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

declare global {
  namespace Express {
    interface Request {
      user?: {
        id: string;
      };
    }
  }
}

type Token = {
  userId: string;
  email: string;
  password: string;
  id: string;
};

export const authorizationMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const { authorization } = req.headers;

  if (!authorization) {
    res.status(401).json({ message: "Unauthorized!" });
    return;
  }

  const token = authorization.split(" ")[1];
  console.log(token, "token")

  if (!token) {
    res.status(401).json({ message: "Token missing" });
    return;
  }

  try {
    const decoded = jwt.verify(token, "logically impossible") as Token;
    console.log(decoded)

    if (decoded && decoded.id) {
      req.user = { id: decoded.id };
      return next();
    } else {
      res.status(401).json({ message: "Invalid token" });
      return;
    }
  } catch (err) {
    res.status(401).json({ message: "Invalid token" });
    return;
  }
};
