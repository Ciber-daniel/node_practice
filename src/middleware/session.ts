import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../utils/jwt.handle";

const checkJwt = (req: Request, res: Response, next: NextFunction) => {
  try {
    const jtwByUser = req.headers.authorization || null;
    const jwt = jtwByUser?.split(" ").pop();

    if (!jwt) {
      throw new Error("JWT not found");
    }

    const isUser = verifyToken(jwt);

    if (!isUser) {
      throw new Error("JWT not valid");
    }

    next();
  } catch (error) {
    res.status(400);
    res.send({ error });
  }
};

export { checkJwt };
