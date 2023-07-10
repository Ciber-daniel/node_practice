import { sign, verify } from "jsonwebtoken";
const JWT = process.env.JWT_SECRET || "secret";

const generateToken = (id: string) => {
  const jwt = sign({ id }, JWT, {
    expiresIn: "5h",
  });

  return jwt;
};

const verifyToken = (jwt: string) => {
    const isValid = verify(jwt, JWT);
    return isValid;
};

export { generateToken, verifyToken };
