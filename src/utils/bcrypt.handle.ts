import { compare, hash } from "bcryptjs";

const bcrypt = async (pass: string): Promise<string> => {
  return hash(pass, 12);
};

const verified = async (pass: string, passHash: string): Promise<boolean> => {
  return compare(pass, passHash);
};

export { bcrypt, verified };
