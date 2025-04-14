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
  req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>,
  res: Response<any>,
  next: NextFunction
): void => {

  const { authorization } = req.headers;
  if (!authorization) {
    res.status(401).json({ message: "Unauthorized!!!" });
    return; 
  }

  const token = authorization.split(" ")[1];
  console.log(authorization, "authorization")
  console.log(token)

  if (token) {
    try {
      const decoded = jwt.verify(token, "logically impossible") as Token;
      
      if (decoded && decoded.id) {
        req.userId = decoded.userId; 
        return next(); 
      } else {
        res.status(401).json({ message: "Invalid token" });
        return;
      }
      
    } catch (err) {
      res.status(401).json({ message: "Invalid token" });
      return; 
    }
  } else {
    res.status(401).json({ message: "Token missing" });
    return; 
  }
};
