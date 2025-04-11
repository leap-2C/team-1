import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { ParamsDictionary } from "express-serve-static-core"; // Fix for ParamsDictionary
import { ParsedQs } from "qs";

declare global {
  namespace Express {
    interface Request {
      userId?: string;
    }
  }
}

type Token = {
  userId: string;
  email: string;
  password: string;
  id:string
};

export const authorizationMiddleware = (
  req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, // Correct type for query
  res: Response<any>, // Removed unnecessary second type argument for Response
  next: NextFunction
): void => {
  // Ensure that we return `void`, not a Response
  const { authorization } = req.headers;
  if (!authorization) {
    res.status(401).json({ message: "Unauthorized!!!" });
    return; // Exit early to prevent further execution
  }

  const token = authorization.split(" ")[1];
  console.log(authorization, "authorization")
  console.log(token)

  if (token) {
    try {
      const decoded = jwt.verify(token, "logically impossible") as Token;
      
      if (decoded && decoded.id) {
        req.userId = decoded.userId; // Assign the userId to the request object
        return next(); // Pass control to the next handler
      } else {
        res.status(401).json({ message: "Invalid token" });
        return; // Exit early to prevent further execution
      }
      
    } catch (err) {
      res.status(401).json({ message: "Invalid token" });
      return; // Exit early to prevent further execution
    }
  } else {
    res.status(401).json({ message: "Token missing" });
    return; // Exit early to prevent further execution
  }
};
