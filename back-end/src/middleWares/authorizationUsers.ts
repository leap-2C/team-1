import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export const authorizationMiddleware = (req:Request, res:Response, next:NextFunction) => {
  const { authorization } = req.headers;
  if (!authorization)
    return res.status(401).json({ message: "unauthorized!!!" });

  const token = authorization.split(" ")[1];

  try {
    const user = jwt.verify(token, "logically impossible");
    req.user = user;
    next();
  } catch (err) {
    return res.status(401).json({ message: "unauthorized!!!" });
  }
};
