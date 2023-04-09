import jwt from "jsonwebtoken";
import createError from "../Utils/createError";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.accessToken;

  if (!token) return next(createError(401, "You are not logged in!"));

  jwt.verify(token, process.env.JWT_KEY, async (err, payload) => {
    if (err) return next(createError(403, "Token is not valid anymore. . . "));
    req.userId = payload.id;
    req.isSeller = payload.isSeller;
    next();
  });
};
