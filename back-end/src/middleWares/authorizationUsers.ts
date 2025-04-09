import jwt from "jsonwebtoken";

export const authorizationMiddleware = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization)
    return res.status(401).json({ message: "unauthorized!!!" });

  const token = authorization.split(" ")[1];

  try {
    const user = jwt.verify(token, "uneheer nuuts");
    req.user = user;
    next();
  } catch (err) {
    return res.status(401).json({ message: "unauthorized!!!" });
  }
};
